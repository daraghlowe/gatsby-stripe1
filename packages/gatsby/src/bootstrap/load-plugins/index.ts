import _ from "lodash"
import crypto from "crypto"
import fs from "fs-extra"
import path from "path"

import { store } from "../../redux"
import { actions as reduxActions } from "../../redux/actions"
import { IGatsbyState } from "../../redux/types"
import * as nodeAPIs from "../../utils/api-node-docs"
import * as browserAPIs from "../../utils/api-browser-docs"
import apiRunnerNode from "../../utils/api-runner-node"
import ssrAPIs from "../../../cache-dir/api-ssr-docs"
import { getCache } from "../../utils/get-cache"
import { getNodes, getNode } from "../../datastore"
import { loadPlugins as loadPluginsInternal } from "./load"
import createPluginDependencyDigest from "./create-plugin-dependency-digest"
import {
  collatePluginAPIs,
  handleBadExports,
  handleMultipleReplaceRenderers,
  ExportType,
  ICurrentAPIs,
  validateConfigPluginsOptions,
} from "./validate"
import {
  IPluginInfo,
  IFlattenedPlugin,
  ISiteConfig,
  IRawSiteConfig,
} from "./types"
import { IPluginRefObject, PluginRef } from "gatsby-plugin-utils/dist/types"

const cache = getCache(`bootstrap/load-plugins`)

const getAPI = (
  api: { [exportType in ExportType]: { [api: string]: boolean } }
): ICurrentAPIs =>
  _.keys(api).reduce<Partial<ICurrentAPIs>>((merged, key) => {
    merged[key] = _.keys(api[key])
    return merged
  }, {}) as ICurrentAPIs

// Create a "flattened" array of plugins with all subplugins
// brought to the top-level. This simplifies running gatsby-* files
// for subplugins.
const flattenPlugins = (plugins: Array<IPluginInfo>): Array<IPluginInfo> => {
  const flattened: Array<IPluginInfo> = []
  const extractPlugins = (plugin: IPluginInfo): void => {
    if (plugin.subPluginPaths) {
      for (const subPluginPath of plugin.subPluginPaths) {
        // @pieh:
        // subPluginPath can look like someOption.randomFieldThatIsMarkedAsSubplugins
        // Reason for doing stringified path with . separator was that it was just easier to prevent duplicates
        // in subPluginPaths array (as each subplugin in the gatsby-config would add subplugin path).
        const segments = subPluginPath.split(`.`)
        let roots: Array<any> = [plugin.pluginOptions]
        for (const segment of segments) {
          if (segment === `[]`) {
            roots = roots.flat()
          } else {
            roots = roots.map(root => root[segment])
          }
        }

        roots.forEach(subPlugin => {
          flattened.push(subPlugin)
          extractPlugins(subPlugin)
        })
      }
    }
  }

  plugins.forEach(plugin => {
    flattened.push(plugin)
    extractPlugins(plugin)
  })

  return flattened
}

function normalizePlugin(plugin): IPluginRefObject {
  if (typeof plugin === `string`) {
    return {
      resolve: plugin,
      options: {},
    }
  }

  if (plugin.options?.plugins) {
    plugin.options = {
      ...plugin.options,
      plugins: normalizePlugins(plugin.options.plugins),
    }
  }

  return plugin
}

function normalizePlugins(plugins?: Array<PluginRef>): Array<IPluginRefObject> {
  return (plugins || []).map(normalizePlugin)
}

const normalizeConfig = (config: IRawSiteConfig = {}): ISiteConfig => {
  return {
    ...config,
    plugins: (config.plugins || []).map(normalizePlugin),
  }
}

export async function loadPlugins(
  rawConfig: IRawSiteConfig = {},
  rootDir: string
): Promise<Array<IFlattenedPlugin>> {
  console.time(`loadPlugins`)
  // Turn all strings in plugins: [`...`] into the { resolve: ``, options: {} } form
  const config = normalizeConfig(rawConfig)

  // Show errors for invalid plugin configuration
  await validateConfigPluginsOptions(config, rootDir)

  const currentAPIs = getAPI({
    browser: browserAPIs,
    node: nodeAPIs,
    ssr: ssrAPIs,
  })

  // Collate internal plugins, site config plugins, site default plugins
  const pluginInfos = loadPluginsInternal(config, rootDir)

  // Create a flattened array of the plugins
  const pluginArray = flattenPlugins(pluginInfos)

  // Work out which plugins use which APIs, including those which are not
  // valid Gatsby APIs, aka 'badExports'
  const x = collatePluginAPIs({ currentAPIs, flattenedPlugins: pluginArray })

  // From this point on, these are fully-resolved plugins.
  let flattenedPlugins = x.flattenedPlugins
  const badExports = x.badExports

  // Show errors for any non-Gatsby APIs exported from plugins
  await handleBadExports({ currentAPIs, badExports })

  // Show errors when ReplaceRenderer has been implemented multiple times
  flattenedPlugins = handleMultipleReplaceRenderers({
    flattenedPlugins,
  })

  console.time(`create dependency digests`)
  // process.exit()
  const lastPlugins = (await cache.get(`site-flattened-plugins`)) || []
  const changedPlugins = []
  console.log(`lastPlugins.length`, lastPlugins.length)
  const newTransformerPlugins = []
  const flattenedPluginsWithDigests = await Promise.all(
    flattenedPlugins.map((p, i) =>
      createPluginDependencyDigest(rootDir, p, i).then(digest => {
        const shasum = crypto.createHash(`sha1`)
        shasum.update(digest.digest)
        // Plugin id is composed of the plugin name + options so is guerenteed
        // to be unique / plugin instance.
        shasum.update(p.id)
        const pluginDigest = shasum.digest(`hex`)

        const pluginWithDigest = { ...p, digest: pluginDigest }

        // Check if the plugin digest has changed since last time. If so,
        // add it to the pluginsChanged array so we can remove its cache.
        if (lastPlugins.length > 0) {
          const lastPlugin = lastPlugins.find(lp => lp.id === p.id)
          if (lastPlugin) {
            if (
              lastPlugin.digest !== pluginDigest &&
              // Ignore plugins without node APIs as they don't create caches.
              (lastPlugin.nodeAPIs.length > 0 ||
                pluginWithDigest.nodeAPIs.length > 0)
            ) {
              changedPlugins.push(pluginWithDigest)

              console.log(
                lastPlugin.name,
                lastPlugin.nodeAPIs,
                pluginWithDigest.nodeAPIs
              )

              // Check if the plugin added a onCreateNode api.
              if (
                !lastPlugin.nodeAPIs.includes(`onCreateNode`) &&
                pluginWithDigest.nodeAPIs.includes(`onCreateNode`)
              ) {
                newTransformerPlugins.push(pluginWithDigest)
              }
            }
          } else if (pluginWithDigest.nodeAPIs.length > 0) {
            changedPlugins.push(pluginWithDigest)

            console.log(
              lastPlugin.name,
              lastPlugin.nodeAPIs,
              pluginWithDigest.nodeAPIs
            )

            // Check if the plugin added a onCreateNode api.
            if (flattenedPluginsWithDigests.nodeAPIs.includes(`onCreateNode`)) {
              newTransformerPlugins.push(pluginWithDigest)
            }
          }
        } else {
          // If we don't find lastPlugins in the cache, this means this is
          // an initial build or `gatsby clean` was called so we treat every plugin
          // as changed.
          if (pluginWithDigest.nodeAPIs.length > 0) {
            changedPlugins.push(pluginWithDigest)
          }
        }

        return pluginWithDigest
      })
    )
  )
  console.timeEnd(`create dependency digests`)

  console.log(_.uniq(changedPlugins.map(p => p.name)))
  const changedPluginNames = new Set(changedPlugins.map(p => p.name))
  const actions = []
  if (changedPlugins.length > 0) {
    // Loop over all nodes — delete nodes owned by one of these plugins
    // and mark those with parents to be re-run against the plugin later.
    getNodes().forEach(node => {
      if (node.internal.type === `Parent_ChildAdditionForFields`) {
        console.log(`Parent_ChildAdditionForFields`, node)
      }
      if (changedPluginNames.has(node.internal.owner)) {
        const sideEffect = reduxActions.deleteNode(node)
        console.log(`deleting node ${node.id} for ${node.internal.owner}`)
        store.dispatch(sideEffect)
        if (node.parent) {
          actions.push({
            type: `RERUN_ONCREATENODE`,
            node: getNode(node.parent),
          })
        }
      }

      if (
        node.internal.fieldOwners &&
        Object.values(node.internal.fieldOwners).some(pluginName =>
          changedPluginNames.has(pluginName)
        )
      ) {
        console.log(`re-run onCreateNode for`, node.internal.fieldOwners)
        actions.push({ type: `RERUN_ONCREATENODE`, node })
      }
    })

    console.log(actions)
  }

  changedPlugins.forEach(async plugin => {
    // Clear its caches
    // cache 1: key/value store
    await fs.emptyDir(path.join(rootDir, `.cache`, `caches`, plugin.name))
    // cache 2: plugin status
    store.dispatch({
      type: `CLEAR_PLUGIN_STATUS`,
      payload: plugin.name,
    })
  })

  await cache.set(`site-flattened-plugins`, flattenedPluginsWithDigests)

  // If we get this far, everything looks good. Update the store
  store.dispatch({
    type: `SET_SITE_FLATTENED_PLUGINS`,
    payload: flattenedPluginsWithDigests as IGatsbyState["flattenedPlugins"],
  })

  // Replay onCreateNode for nodes touched by changed plugins.
  await Promise.all(
    actions.map(a => {
      if (a.type === `RERUN_ONCREATENODE`) {
        // This node might be by a parent node so was been deleted above too.
        // In that case, onCreateNode will be called again when the parent node is
        // recreated later in sourceNodes.
        console.log(`running onCreateNode for`, a.node)
        return apiRunnerNode(`onCreateNode`, {
          node: a.node,
          traceTags: {
            nodeId: a.node.id,
            nodeType: a.node.internal.type,
          },
        })
      } else {
        return null
      }
    })
  )

  // For new transformer plugins, replay all nodes.
  console.log({ newTransformerPlugins })
  if (newTransformerPlugins.length > 0) {
    await Promise.all(
      getNodes().map(node =>
        apiRunnerNode(`onCreateNode`, {
          node: node,
          traceTags: {
            nodeId: node.id,
            nodeType: node.internal.type,
          },
        })
      )
    )
  }

  console.timeEnd(`loadPlugins`)
  // process.exit()
  return flattenedPluginsWithDigests
}

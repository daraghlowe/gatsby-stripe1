import btoa from "btoa"

import { getPluginOptions } from "~/utils/get-gatsby-api"

import type { Step } from "~/utils/run-steps"

export const setRequestHeaders: Step = ({ actions }): void => {
  if (typeof actions?.setRequestHeaders !== `function`) {
    return
  }

  const pluginOptions = getPluginOptions()

  const { auth, url } = pluginOptions
  const { password, username } = auth?.htaccess || {}

  if (password && username) {
    actions.setRequestHeaders({
      domain: url,
      headers: {
        Authorization: `Basic ${btoa(`${username}:${password}`)}`,
      },
    })
  }
}

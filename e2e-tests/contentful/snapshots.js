module.exports = {
  __version: "9.5.4",
  "content-reference": {
    "content-reference-many-2nd-level-loop": {
      1: '<div data-cy-id="default-content-reference-many-2nd-level-loop">\n  <h2>Content Reference: Many (2nd level loop)</h2>\n  <p data-cy-id="integer">[ContentfulContentTypeNumber]\n    <!-- -->42</p>\n  <p data-cy-id="text">[ContentfulContentTypeText]\n    <!-- -->The quick brown fox jumps over the lazy dog.</p>\n  <p data-cy-id="reference">[ContentfulContentTypeContentReference]\n    <!-- -->Content Reference: One (Loop A -&gt; B)\n    <!-- -->: [\n    <!-- -->Content Reference: One (Loop B -&gt; A)\n    <!-- -->]</p>\n</div>',
    },
    "content-reference-many-loop-a-greater-b": {
      1: '<div data-cy-id="default-content-reference-many-loop-a-greater-b">\n  <h2>Content Reference: Many (Loop A -&gt; B)</h2>\n  <p data-cy-id="integer">[ContentfulContentTypeNumber]\n    <!-- -->42</p>\n  <p data-cy-id="text">[ContentfulContentTypeText]\n    <!-- -->The quick brown fox jumps over the lazy dog.</p>\n  <p data-cy-id="reference">[ContentfulContentTypeContentReference]\n    <!-- -->Content Reference: Many (Loop B -&gt; A)\n    <!-- -->: [\n    <!-- -->Number: Integer, Text: Short, Content Reference: Many (Loop A -&gt;\n    B)\n    <!-- -->]</p>\n</div>',
    },
    "content-reference-many-loop-b-greater-a": {
      1: '<div data-cy-id="default-content-reference-many-loop-b-greater-a">\n  <h2>Content Reference: Many (Loop B -&gt; A)</h2>\n  <p data-cy-id="integer">[ContentfulContentTypeNumber]\n    <!-- -->42</p>\n  <p data-cy-id="text">[ContentfulContentTypeText]\n    <!-- -->The quick brown fox jumps over the lazy dog.</p>\n  <p data-cy-id="reference">[ContentfulContentTypeContentReference]\n    <!-- -->Content Reference: Many (Loop A -&gt; B)\n    <!-- -->: [\n    <!-- -->Number: Integer, Text: Short, Content Reference: Many (Loop B -&gt;\n    A)\n    <!-- -->]</p>\n</div>',
    },
    "content-reference-many-self-reference": {
      1: '<div data-cy-id="default-content-reference-many-self-reference">\n  <h2>Content Reference: Many (Self Reference)</h2>\n  <p data-cy-id="integer">[ContentfulContentTypeNumber]\n    <!-- -->42</p>\n  <p data-cy-id="text">[ContentfulContentTypeText]\n    <!-- -->The quick brown fox jumps over the lazy dog.</p>\n  <p data-cy-id="reference">[ContentfulContentTypeContentReference]\n    <!-- -->Content Reference: Many (Self Reference)\n    <!-- -->: [\n    <!-- -->Number: Integer, Text: Short, Content Reference: Many (Self\n    Reference)\n    <!-- -->]</p>\n</div>',
    },
    "content-reference-one": {
      1: '<div data-cy-id="default-content-reference-one">\n  <h2>Content Reference: One</h2>\n  <p data-cy-id="text">[ContentfulContentTypeText]\n    <!-- -->The quick brown fox jumps over the lazy dog.</p>\n</div>',
    },
    "content-reference-one-loop-a-greater-b": {
      1: '<div data-cy-id="default-content-reference-one-loop-a-greater-b">\n  <h2>Content Reference: One (Loop A -&gt; B)</h2>\n  <p data-cy-id="reference">[ContentfulContentTypeContentReference]\n    <!-- -->Content Reference: One (Loop B -&gt; A)\n    <!-- -->: [\n    <!-- -->Content Reference: One (Loop A -&gt; B)\n    <!-- -->]</p>\n</div>',
    },
    "content-reference-one-loop-b-greater-a": {
      1: '<div data-cy-id="default-content-reference-one-loop-b-greater-a">\n  <h2>Content Reference: One (Loop B -&gt; A)</h2>\n  <p data-cy-id="reference">[ContentfulContentTypeContentReference]\n    <!-- -->Content Reference: One (Loop A -&gt; B)\n    <!-- -->: [\n    <!-- -->Content Reference: One (Loop B -&gt; A)\n    <!-- -->]</p>\n</div>',
    },
    "content-reference-one-self-reference": {
      1: '<div data-cy-id="default-content-reference-one-self-reference">\n  <h2>Content Reference: One (Self Reference)</h2>\n  <p data-cy-id="reference">[ContentfulContentTypeContentReference]\n    <!-- -->Content Reference: One (Self Reference)\n    <!-- -->: [\n    <!-- -->Content Reference: One (Self Reference)\n    <!-- -->]</p>\n</div>',
    },
  },
  "rich-text": {
    "rich-text: All Features": {
      1: '<div data-cy-id="rich-text-all-features">\n  <h2>Rich Text: All Features</h2>\n  <h1>The <a href="https://contentful.com/">European</a> languages</h1>\n  <p>are members of the same family. Their <u>separate</u> <strong\n      data-cy-strong="true">existence</strong> is a <i>myth</i>. For:</p>\n  <ul>\n    <li>\n      <p>science</p>\n    </li>\n    <li>\n      <p>music</p>\n    </li>\n    <li>\n      <p>sport</p>\n    </li>\n    <li>\n      <p>etc</p>\n    </li>\n  </ul>\n  <p>Europe uses the same vocabulary.</p>\n  <div data-gatsby-image-wrapper=""\n    class="gatsby-image-wrapper gatsby-image-wrapper-constrained">\n    <div><img alt=""\n        role="presentation"\n        aria-hidden="true"\n        src="data:image/svg+xml;charset=utf-8,%3Csvg height=\'300\' width=\'200\' xmlns=\'http://www.w3.org/2000/svg\' version=\'1.1\'%3E%3C/svg%3E">\n    </div>\n    <div aria-hidden="true"\n      data:image=""\n      redacted;base64,redacted=""></div>\n    <picture>\n      <source type="image/webp"\n        sizes="(min-width: 200px) 200px, 100vw"\n        srcset="https://images.ctfassets.net/k8iqpp6u0ior/2PeXF5HW2hiDfCggU9RIpO/8236da1f40af17e19922ddb87030735a/jae-park-7GX5aICb5i4-unsplash.jpg?w=50&amp;h=75&amp;q=50&amp;fm=webp 50w,https://images.ctfassets.net/k8iqpp6u0ior/2PeXF5HW2hiDfCggU9RIpO/8236da1f40af17e19922ddb87030735a/jae-park-7GX5aICb5i4-unsplash.jpg?w=100&amp;h=150&amp;q=50&amp;fm=webp 100w,https://images.ctfassets.net/k8iqpp6u0ior/2PeXF5HW2hiDfCggU9RIpO/8236da1f40af17e19922ddb87030735a/jae-park-7GX5aICb5i4-unsplash.jpg?w=200&amp;h=300&amp;q=50&amp;fm=webp 200w,https://images.ctfassets.net/k8iqpp6u0ior/2PeXF5HW2hiDfCggU9RIpO/8236da1f40af17e19922ddb87030735a/jae-park-7GX5aICb5i4-unsplash.jpg?w=400&amp;h=600&amp;q=50&amp;fm=webp 400w">\n      <img data-main-image=""\n        sizes="(min-width: 200px) 200px, 100vw"\n        decoding="async"\n        loading="lazy"\n        alt=""\n        src="https://images.ctfassets.net/k8iqpp6u0ior/2PeXF5HW2hiDfCggU9RIpO/8236da1f40af17e19922ddb87030735a/jae-park-7GX5aICb5i4-unsplash.jpg?w=200&amp;h=300&amp;fl=progressive&amp;q=50&amp;fm=jpg"\n        srcset="https://images.ctfassets.net/k8iqpp6u0ior/2PeXF5HW2hiDfCggU9RIpO/8236da1f40af17e19922ddb87030735a/jae-park-7GX5aICb5i4-unsplash.jpg?w=50&amp;h=75&amp;fl=progressive&amp;q=50&amp;fm=jpg 50w,https://images.ctfassets.net/k8iqpp6u0ior/2PeXF5HW2hiDfCggU9RIpO/8236da1f40af17e19922ddb87030735a/jae-park-7GX5aICb5i4-unsplash.jpg?w=100&amp;h=150&amp;fl=progressive&amp;q=50&amp;fm=jpg 100w,https://images.ctfassets.net/k8iqpp6u0ior/2PeXF5HW2hiDfCggU9RIpO/8236da1f40af17e19922ddb87030735a/jae-park-7GX5aICb5i4-unsplash.jpg?w=200&amp;h=300&amp;fl=progressive&amp;q=50&amp;fm=jpg 200w,https://images.ctfassets.net/k8iqpp6u0ior/2PeXF5HW2hiDfCggU9RIpO/8236da1f40af17e19922ddb87030735a/jae-park-7GX5aICb5i4-unsplash.jpg?w=400&amp;h=600&amp;fl=progressive&amp;q=50&amp;fm=jpg 400w">\n    </picture><noscript>\n      <picture>\n        <source type="image/webp"\n          srcSet="https://images.ctfassets.net/k8iqpp6u0ior/2PeXF5HW2hiDfCggU9RIpO/8236da1f40af17e19922ddb87030735a/jae-park-7GX5aICb5i4-unsplash.jpg?w=50&amp;h=75&amp;q=50&amp;fm=webp 50w,https://images.ctfassets.net/k8iqpp6u0ior/2PeXF5HW2hiDfCggU9RIpO/8236da1f40af17e19922ddb87030735a/jae-park-7GX5aICb5i4-unsplash.jpg?w=100&amp;h=150&amp;q=50&amp;fm=webp 100w,https://images.ctfassets.net/k8iqpp6u0ior/2PeXF5HW2hiDfCggU9RIpO/8236da1f40af17e19922ddb87030735a/jae-park-7GX5aICb5i4-unsplash.jpg?w=200&amp;h=300&amp;q=50&amp;fm=webp 200w,https://images.ctfassets.net/k8iqpp6u0ior/2PeXF5HW2hiDfCggU9RIpO/8236da1f40af17e19922ddb87030735a/jae-park-7GX5aICb5i4-unsplash.jpg?w=400&amp;h=600&amp;q=50&amp;fm=webp 400w"\n          sizes="(min-width: 200px) 200px, 100vw" /><img data-main-image=""\n          sizes="(min-width: 200px) 200px, 100vw"\n          decoding="async"\n          loading="lazy"\n          src="https://images.ctfassets.net/k8iqpp6u0ior/2PeXF5HW2hiDfCggU9RIpO/8236da1f40af17e19922ddb87030735a/jae-park-7GX5aICb5i4-unsplash.jpg?w=200&amp;h=300&amp;fl=progressive&amp;q=50&amp;fm=jpg"\n          srcSet="https://images.ctfassets.net/k8iqpp6u0ior/2PeXF5HW2hiDfCggU9RIpO/8236da1f40af17e19922ddb87030735a/jae-park-7GX5aICb5i4-unsplash.jpg?w=50&amp;h=75&amp;fl=progressive&amp;q=50&amp;fm=jpg 50w,https://images.ctfassets.net/k8iqpp6u0ior/2PeXF5HW2hiDfCggU9RIpO/8236da1f40af17e19922ddb87030735a/jae-park-7GX5aICb5i4-unsplash.jpg?w=100&amp;h=150&amp;fl=progressive&amp;q=50&amp;fm=jpg 100w,https://images.ctfassets.net/k8iqpp6u0ior/2PeXF5HW2hiDfCggU9RIpO/8236da1f40af17e19922ddb87030735a/jae-park-7GX5aICb5i4-unsplash.jpg?w=200&amp;h=300&amp;fl=progressive&amp;q=50&amp;fm=jpg 200w,https://images.ctfassets.net/k8iqpp6u0ior/2PeXF5HW2hiDfCggU9RIpO/8236da1f40af17e19922ddb87030735a/jae-park-7GX5aICb5i4-unsplash.jpg?w=400&amp;h=600&amp;fl=progressive&amp;q=50&amp;fm=jpg 400w"\n          alt="" /></picture>\n    </noscript>\n    <script type="module">\n      const t="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;if(t){const t=document.querySelectorAll("img[data-main-image]");for(let e of t){e.dataset.src&&(e.setAttribute("src",e.dataset.src),e.removeAttribute("data-src")),e.dataset.srcset&&(e.setAttribute("srcset",e.dataset.srcset),e.removeAttribute("data-srcset"));const t=e.parentNode.querySelectorAll("source[data-srcset]");for(let e of t)e.setAttribute("srcset",e.dataset.srcset),e.removeAttribute("data-srcset");e.complete&&(e.style.opacity=1,e.parentNode.parentNode.querySelector("[data:image/redacted;base64,redacted]").style.opacity=0)}}\n    </script>\n  </div>\n  <p></p>\n  <hr>\n  <p>The languages only differ in:</p>\n  <ol>\n    <li>\n      <p>their grammar</p>\n    </li>\n    <li>\n      <p>their pronunciation</p>\n    </li>\n    <li>\n      <p>their most common words</p>\n    </li>\n    <li>\n      <p><span data-cy-id="inline-text">[Inline-ContentfulText]\n          <!-- -->Text: Short\n          <!-- -->:\n          <!-- -->The quick brown fox jumps over the lazy dog.</span></p>\n    </li>\n  </ol>\n  <p>Everyone realizes why a new common language would be desirable: one could\n    refuse to pay expensive translators.</p>\n  <p><code>{\n      "userId": 1,\n      "id": 1,\n      "title": "delectus aut autem",\n      "completed": false\n      }</code></p>\n  <p>To achieve this, it would be necessary to have uniform grammar,\n    pronunciation and more common words.</p>\n  <p data-cy-id="location">[ContentfulLocation] Lat:\n    <!-- -->52.51627\n    <!-- -->, Long:\n    <!-- -->13.3777</p>\n  <blockquote>\n    <p>If several languages coalesce, the grammar of the resulting language is\n      more simple and regular than that of the individual languages.</p>\n  </blockquote>\n  <p>The new common language will be more simple and regular than the existing\n    European languages. It will be as simple as Occidental; in fact, it will be\n  </p>\n  <hr>\n</div>',
    },
    "rich-text: Basic": {
      1: '<div data-cy-id="rich-text-basic">\n  <h2>Rich Text: Basic</h2>\n  <h1>The <a href="https://contentful.com/">European</a> languages</h1>\n  <p>are members of the same family. Their <u>separate</u> <strong\n      data-cy-strong="true">existence</strong> is a <i>myth</i>. For:</p>\n  <ul>\n    <li>\n      <p>science</p>\n    </li>\n    <li>\n      <p>music</p>\n    </li>\n    <li>\n      <p>sport</p>\n    </li>\n    <li>\n      <p>etc</p>\n    </li>\n  </ul>\n  <p>Europe uses the same vocabulary.</p>\n  <hr>\n  <p>The languages only differ in:</p>\n  <ol>\n    <li>\n      <p>their grammar</p>\n    </li>\n    <li>\n      <p>their pronunciation</p>\n    </li>\n    <li>\n      <p>their most common words</p>\n    </li>\n  </ol>\n  <p>Everyone realizes why a new common language would be desirable: one could\n    refuse to pay expensive translators.</p>\n  <p><code>{\n      "userId": 1,\n      "id": 1,\n      "title": "delectus aut autem",\n      "completed": false\n      }</code></p>\n  <p>To achieve this, it would be necessary to have uniform grammar,\n    pronunciation and more common words.</p>\n  <blockquote>\n    <p>If several languages coalesce, the grammar of the resulting language is\n      more simple and regular than that of the individual languages.</p>\n  </blockquote>\n  <p>The new common language will be more simple and regular than the existing\n    European languages. It will be as simple as Occidental; in fact, it will be\n  </p>\n  <hr>\n</div>',
    },
    "rich-text: Embedded Entry": {
      1: '<div data-cy-id="rich-text-embedded-entry">\n  <h2>Rich Text: Embedded Entry</h2>\n  <h1>Embedded Entry</h1>\n  <p data-cy-id="text">[ContentfulContentTypeText]\n    <!-- -->The quick brown fox jumps over the lazy dog.</p>\n  <p></p>\n  <p></p>\n  <hr>\n</div>',
    },
    "rich-text: Embedded Asset": {
      1: '<div data-cy-id="rich-text-embedded-asset">\n  <h2>Rich Text: Embedded asset</h2>\n  <h1>Embedded Asset</h1>\n  <div data-gatsby-image-wrapper=""\n    class="gatsby-image-wrapper gatsby-image-wrapper-constrained">\n    <div><img alt=""\n        role="presentation"\n        aria-hidden="true"\n        src="data:image/svg+xml;charset=utf-8,%3Csvg height=\'133\' width=\'200\' xmlns=\'http://www.w3.org/2000/svg\' version=\'1.1\'%3E%3C/svg%3E">\n    </div>\n    <div aria-hidden="true"\n      data:image=""\n      redacted;base64,redacted=""></div>\n    <picture>\n      <source type="image/webp"\n        sizes="(min-width: 200px) 200px, 100vw"\n        srcset="https://images.ctfassets.net/k8iqpp6u0ior/3BSI9CgDdAn1JchXmY5IJi/f97a2185b3395591b98008647ad6fd3c/camylla-battani-AoqgGAqrLpU-unsplash.jpg?w=50&amp;h=33&amp;q=50&amp;fm=webp 50w,https://images.ctfassets.net/k8iqpp6u0ior/3BSI9CgDdAn1JchXmY5IJi/f97a2185b3395591b98008647ad6fd3c/camylla-battani-AoqgGAqrLpU-unsplash.jpg?w=100&amp;h=67&amp;q=50&amp;fm=webp 100w,https://images.ctfassets.net/k8iqpp6u0ior/3BSI9CgDdAn1JchXmY5IJi/f97a2185b3395591b98008647ad6fd3c/camylla-battani-AoqgGAqrLpU-unsplash.jpg?w=200&amp;h=133&amp;q=50&amp;fm=webp 200w,https://images.ctfassets.net/k8iqpp6u0ior/3BSI9CgDdAn1JchXmY5IJi/f97a2185b3395591b98008647ad6fd3c/camylla-battani-AoqgGAqrLpU-unsplash.jpg?w=400&amp;h=266&amp;q=50&amp;fm=webp 400w">\n      <img data-main-image=""\n        sizes="(min-width: 200px) 200px, 100vw"\n        decoding="async"\n        loading="lazy"\n        alt=""\n        src="https://images.ctfassets.net/k8iqpp6u0ior/3BSI9CgDdAn1JchXmY5IJi/f97a2185b3395591b98008647ad6fd3c/camylla-battani-AoqgGAqrLpU-unsplash.jpg?w=200&amp;h=133&amp;fl=progressive&amp;q=50&amp;fm=jpg"\n        srcset="https://images.ctfassets.net/k8iqpp6u0ior/3BSI9CgDdAn1JchXmY5IJi/f97a2185b3395591b98008647ad6fd3c/camylla-battani-AoqgGAqrLpU-unsplash.jpg?w=50&amp;h=33&amp;fl=progressive&amp;q=50&amp;fm=jpg 50w,https://images.ctfassets.net/k8iqpp6u0ior/3BSI9CgDdAn1JchXmY5IJi/f97a2185b3395591b98008647ad6fd3c/camylla-battani-AoqgGAqrLpU-unsplash.jpg?w=100&amp;h=67&amp;fl=progressive&amp;q=50&amp;fm=jpg 100w,https://images.ctfassets.net/k8iqpp6u0ior/3BSI9CgDdAn1JchXmY5IJi/f97a2185b3395591b98008647ad6fd3c/camylla-battani-AoqgGAqrLpU-unsplash.jpg?w=200&amp;h=133&amp;fl=progressive&amp;q=50&amp;fm=jpg 200w,https://images.ctfassets.net/k8iqpp6u0ior/3BSI9CgDdAn1JchXmY5IJi/f97a2185b3395591b98008647ad6fd3c/camylla-battani-AoqgGAqrLpU-unsplash.jpg?w=400&amp;h=266&amp;fl=progressive&amp;q=50&amp;fm=jpg 400w">\n    </picture><noscript>\n      <picture>\n        <source type="image/webp"\n          srcSet="https://images.ctfassets.net/k8iqpp6u0ior/3BSI9CgDdAn1JchXmY5IJi/f97a2185b3395591b98008647ad6fd3c/camylla-battani-AoqgGAqrLpU-unsplash.jpg?w=50&amp;h=33&amp;q=50&amp;fm=webp 50w,https://images.ctfassets.net/k8iqpp6u0ior/3BSI9CgDdAn1JchXmY5IJi/f97a2185b3395591b98008647ad6fd3c/camylla-battani-AoqgGAqrLpU-unsplash.jpg?w=100&amp;h=67&amp;q=50&amp;fm=webp 100w,https://images.ctfassets.net/k8iqpp6u0ior/3BSI9CgDdAn1JchXmY5IJi/f97a2185b3395591b98008647ad6fd3c/camylla-battani-AoqgGAqrLpU-unsplash.jpg?w=200&amp;h=133&amp;q=50&amp;fm=webp 200w,https://images.ctfassets.net/k8iqpp6u0ior/3BSI9CgDdAn1JchXmY5IJi/f97a2185b3395591b98008647ad6fd3c/camylla-battani-AoqgGAqrLpU-unsplash.jpg?w=400&amp;h=266&amp;q=50&amp;fm=webp 400w"\n          sizes="(min-width: 200px) 200px, 100vw" /><img data-main-image=""\n          sizes="(min-width: 200px) 200px, 100vw"\n          decoding="async"\n          loading="lazy"\n          src="https://images.ctfassets.net/k8iqpp6u0ior/3BSI9CgDdAn1JchXmY5IJi/f97a2185b3395591b98008647ad6fd3c/camylla-battani-AoqgGAqrLpU-unsplash.jpg?w=200&amp;h=133&amp;fl=progressive&amp;q=50&amp;fm=jpg"\n          srcSet="https://images.ctfassets.net/k8iqpp6u0ior/3BSI9CgDdAn1JchXmY5IJi/f97a2185b3395591b98008647ad6fd3c/camylla-battani-AoqgGAqrLpU-unsplash.jpg?w=50&amp;h=33&amp;fl=progressive&amp;q=50&amp;fm=jpg 50w,https://images.ctfassets.net/k8iqpp6u0ior/3BSI9CgDdAn1JchXmY5IJi/f97a2185b3395591b98008647ad6fd3c/camylla-battani-AoqgGAqrLpU-unsplash.jpg?w=100&amp;h=67&amp;fl=progressive&amp;q=50&amp;fm=jpg 100w,https://images.ctfassets.net/k8iqpp6u0ior/3BSI9CgDdAn1JchXmY5IJi/f97a2185b3395591b98008647ad6fd3c/camylla-battani-AoqgGAqrLpU-unsplash.jpg?w=200&amp;h=133&amp;fl=progressive&amp;q=50&amp;fm=jpg 200w,https://images.ctfassets.net/k8iqpp6u0ior/3BSI9CgDdAn1JchXmY5IJi/f97a2185b3395591b98008647ad6fd3c/camylla-battani-AoqgGAqrLpU-unsplash.jpg?w=400&amp;h=266&amp;fl=progressive&amp;q=50&amp;fm=jpg 400w"\n          alt="" /></picture>\n    </noscript>\n    <script type="module">\n      const t="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;if(t){const t=document.querySelectorAll("img[data-main-image]");for(let e of t){e.dataset.src&&(e.setAttribute("src",e.dataset.src),e.removeAttribute("data-src")),e.dataset.srcset&&(e.setAttribute("srcset",e.dataset.srcset),e.removeAttribute("data-srcset"));const t=e.parentNode.querySelectorAll("source[data-srcset]");for(let e of t)e.setAttribute("srcset",e.dataset.srcset),e.removeAttribute("data-srcset");e.complete&&(e.style.opacity=1,e.parentNode.parentNode.querySelector("[data:image/redacted;base64,redacted]").style.opacity=0)}}\n    </script>\n  </div>\n  <p></p>\n  <p></p>\n  <p></p>\n  <hr>\n</div>',
    },
    "rich-text: Embedded Entry With Deep Reference Loop": {
      1: '<div data-cy-id="rich-text-embedded-entry-with-deep-reference-loop">\n  <h2>Rich Text: Embedded entry with deep reference loop</h2>\n  <h1>Embedded entry with deep reference loop</h1>\n  <p data-cy-id="reference">[ContentfulContentTypeContentReference]\n    <!-- -->Content Reference: Many (2nd level loop)\n    <!-- -->: [\n    <!-- -->Number: Integer, Text: Short, Content Reference: One (Loop A -&gt;\n    B)\n    <!-- -->]</p>\n  <p></p>\n  <p></p>\n  <hr>\n</div>',
    },
    "rich-text: Embedded Entry With Reference Loop": {
      1: '<div data-cy-id="rich-text-embedded-entry-with-reference-loop">\n  <h2>Rich Text: Embedded entry with reference loop</h2>\n  <h1>Embedded entry with reference loop</h1>\n  <p data-cy-id="reference">[ContentfulContentTypeContentReference]\n    <!-- -->Content Reference: One (Loop B -&gt; A)\n    <!-- -->: [\n    <!-- -->Content Reference: One (Loop A -&gt; B)\n    <!-- -->]</p>\n  <p></p>\n  <hr>\n</div>',
    },
    "rich-text: Inline Entry": {
      1: '<div data-cy-id="rich-text-inline-entry">\n  <h2>Rich Text: Inline entry</h2>\n  <h1>Inline entry with reference loop</h1>\n  <p>Should be rendered after this <span\n      data-cy-id="inline-text">[Inline-ContentfulContentTypeText]\n      <!-- -->The quick brown fox jumps over the lazy dog.</span> and before\n    that</p>\n  <p></p>\n  <p></p>\n  <hr>\n</div>',
    },
    "rich-text: Inline Entry With Deep Reference Loop": {
      1: '<div data-cy-id="rich-text-inline-entry-with-deep-reference-loop">\n  <h2>Rich Text: Inline entry with deep reference loop</h2>\n  <h1>Inline entry with deep reference loop</h1>\n  <p>Should be rendered after this <span>[Inline-\n      <!-- -->ContentfulContentTypeContentReference\n      <!-- -->] </span> and before that</p>\n  <p></p>\n  <p></p>\n  <hr>\n</div>',
    },
    "rich-text: Inline Entry With Reference Loop": {
      1: '<div data-cy-id="rich-text-inline-entry-with-reference-loop">\n  <h2>Rich Text: Inline entry with reference loop</h2>\n  <h1>Inline entry with reference loop</h1>\n  <p>Should be rendered after this <span>[Inline-\n      <!-- -->ContentfulContentTypeContentReference\n      <!-- -->] </span> and before that</p>\n  <p></p>\n  <p></p>\n  <hr>\n</div>',
    },
    "rich-text: Localized": {
      1: '<div data-cy-id="english-rich-text-localized">\n  <h2>Rich Text: Localized</h2>\n  <p>Rich Text in <strong data-cy-strong="true">English</strong></p>\n  <hr>\n</div>',
      2: '<div data-cy-id="german-rich-text-localized">\n  <h2>Rich Text: Localized</h2>\n  <p>Reichhaltiger Text in <strong data-cy-strong="true">deutscher\n      Sprache</strong></p>\n  <hr>\n</div>',
    },
    "rich-text: Tables": {
      1: '<div data-cy-id="rich-text-tables">\n  <h2>Rich Text: Tables</h2>\n  <h1>Table test</h1>\n  <p></p>\n  <table>\n    <tbody>\n      <tr>\n        <th>\n          <p>Heading One</p>\n        </th>\n        <th>\n          <p>Heading Two</p>\n        </th>\n        <th>\n          <p>Heading Three</p>\n        </th>\n      </tr>\n      <tr>\n        <td>\n          <p></p>\n        </td>\n        <td>\n          <p><strong data-cy-strong="true">This should be fat</strong></p>\n        </td>\n        <td>\n          <p>Baz</p>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n  <p></p>\n  <hr>\n</div>',
    },
  },
  text: {
    "text: Short List": {
      1: '<div data-cy-id="short-list">\n  <ul>\n    <li data-cy-value="true">The quick brown fox</li>\n    <li data-cy-value="true">jumps over the lazy dog</li>\n  </ul>\n</div>',
    },
    "text: Long Markdown Simple": {
      1: '<div data-cy-id="long-markdown-simple">\n  <h1>Headline</h1>\n  <p>The <strong>European languages</strong> are members of the same family.\n    Their separate existence is a myth. For:</p>\n  <ul>\n    <li>science</li>\n    <li>music</li>\n    <li>sport</li>\n    <li>etc</li>\n  </ul>\n  <p>Europe uses the same vocabulary.</p>\n  <blockquote>\n    <p>The languages only differ in their grammar, their pronunciation and their\n      most common words. Everyone realizes why a new common language would be\n      desirable: one could refuse to pay expensive translators.</p>\n  </blockquote>\n  <p>To achieve this, it would be necessary to have uniform grammar,\n    pronunciation and more common words. If several languages coalesce, the\n    grammar of the resulting language is more simple and regular than that of\n    the individual languages. The new common language will be more simple and\n    regular than the existing European languages. It will be as simple as\n    Occidental; in fact, it will be.</p>\n</div>',
    },
    "text: Long Markdown Complex": {
      1: '<div data-cy-id="long-markdown-complex">\n  <h1><a href="https://www.gatsbyjs.com/">Headline Complex</a></h1>\n  <p>The <em>European languages</em> are members of the same family. Their\n    separate existence is a myth. For:</p>\n  <ul>\n    <li>science</li>\n    <li>music</li>\n    <li>sport</li>\n    <li>etc</li>\n  </ul>\n  <p>Europe uses the same <kbd>vocabulary</kbd>.</p>\n  <blockquote>\n    <p>The languages only differ in their grammar, their pronunciation and their\n      most common words. Everyone realizes why a new common language would be\n      desirable: one could refuse to pay expensive translators.</p>\n  </blockquote>\n  <p><img\n      src="//images.ctfassets.net/k8iqpp6u0ior/2PeXF5HW2hiDfCggU9RIpO/8236da1f40af17e19922ddb87030735a/jae-park-7GX5aICb5i4-unsplash.jpg"\n      alt="Example Cat"></p>\n  <p>To achieve this, it would be necessary to have uniform grammar,\n    pronunciation and more common words. If several languages coalesce, the\n    grammar of the resulting language is more simple and regular than that of\n    the individual languages. The new common language will be more simple and\n    regular than the existing European languages. It will be as simple as\n    Occidental; in fact, it will be.</p>\n  <pre><code class="language-json">{\n\t"userId": 1,\n\t"id": 1,\n\t"title": "delectus aut autem",\n\t"completed": false\n}\n</code></pre>\n</div>',
    },
    "text: Long Localized": {
      1: '<div data-cy-id="english-long">\n  <p data-cy-value="true">One morning, when Gregor Samsa woke from troubled\n    dreams, he found himself transformed in his bed into a horrible vermin. He\n    lay on his armour-like back, and if he lifted his head a little he could see\n    his brown belly, slightly domed and divided by arches into stiff sections.\n    The bedding was hardly able to cover it and seemed ready to slide off any\n    moment. His many legs, pitifully thin compared with the size of the rest of\n    him, waved about helplessly as he looked. "What\'s happened to me?" he\n    thought.\n\n    It wasn\'t a dream. His room, a proper human room although a little too\n    small, lay peacefully between its four familiar walls. A collection of\n    textile samples lay spread out on the table - Samsa was a travelling\n    salesman - and above it there hung a picture that he had recently cut out of\n    an illustrated magazine and housed in a nice, gilded frame. It showed a lady\n    fitted out with a fur hat and fur boa who sat upright, raising a heavy fur\n    muff that covered the whole of her lower arm towards the viewer. Gregor then\n    turned to look out the window at the dull weather.</p>\n</div>',
      2: '<div data-cy-id="german-long">\n  <p data-cy-value="true">Jemand musste Josef K. verleumdet haben, denn ohne\n    dass er etwas Böses getan hätte, wurde er eines Morgens verhaftet. »Wie ein\n    Hund!« sagte er, es war, als sollte die Scham ihn überleben. Als Gregor\n    Samsa eines Morgens aus unruhigen Träumen erwachte, fand er sich in seinem\n    Bett zu einem ungeheueren Ungeziefer verwandelt. Und es war ihnen wie eine\n    Bestätigung ihrer neuen Träume und guten Absichten, als am Ziele ihrer Fahrt\n    die Tochter als erste sich erhob und ihren jungen Körper dehnte.\n\n    »Es ist ein eigentümlicher Apparat«, sagte der Offizier zu dem\n    Forschungsreisenden und überblickte mit einem gewissermaßen bewundernden\n    Blick den ihm doch wohlbekannten Apparat. Sie hätten noch ins Boot springen\n    können, aber der Reisende hob ein schweres, geknotetes Tau vom Boden, drohte\n    ihnen damit und hielt sie dadurch von dem Sprunge ab. In den letzten\n    Jahrzehnten ist das Interesse an Hungerkünstlern sehr zurückgegangen. Aber\n    sie überwanden sich, umdrängten den Käfig und wollten sich gar nicht\n    fortrühren.Jemand musste Josef K. verleumdet haben, denn ohne dass er etwas\n    Böses getan hätte, wurde er eines Morgens verhaftet. »Wie ein Hund!« sagte\n    er, es war, als sollte die Scham ihn überleben. Als Gregor Samsa eines\n    Morgens aus unruhigen Träumen erwachte, fand er sich</p>\n</div>',
    },
  },
  json: {
    "json: Complex": {
      1: '<div style="border:1px dashed grey;padding:0 1rem;margin:1rem 0">\n  <p>Name:\n    <!-- -->Tom Cruise</p>\n  <p>Photo:\n    <!-- -->https://jsonformatter.org/img/tom-cruise.jpg</p>\n  <p>Birthdate:\n    <!-- -->1962-7-3T00:12:34.000Z</p>\n  <p>Born at:\n    <!-- -->Syracuse, NY</p>\n  <p>Weight:\n    <!-- -->67.5</p>\n  <p>Age:\n    <!-- -->56</p>\n  <p>Wife: </p>\n  <p>Children:\n    <!-- -->Suri, Isabella Jane, Connor</p>\n  <p>Has children:\n    <!-- -->true</p>\n  <p>Has grey hair:\n    <!-- -->false</p>\n</div>',
      2: '<div style="border:1px dashed grey;padding:0 1rem;margin:1rem 0">\n  <p>Name:\n    <!-- -->Robert Downey Jr.</p>\n  <p>Photo:\n    <!-- -->https://jsonformatter.org/img/Robert-Downey-Jr.jpg</p>\n  <p>Birthdate:\n    <!-- -->1965-4-4T00:12:34.000Z</p>\n  <p>Born at:\n    <!-- -->New York City, NY</p>\n  <p>Weight:\n    <!-- -->77.1</p>\n  <p>Age:\n    <!-- -->53</p>\n  <p>Wife:\n    <!-- -->Susan Downey</p>\n  <p>Children:\n    <!-- -->Indio Falconer, Avri Roel, Exton Elias</p>\n  <p>Has children:\n    <!-- -->true</p>\n  <p>Has grey hair:\n    <!-- -->false</p>\n</div>',
    },
  },
  "content-reference localized": {
    "english-content-reference-one-localized": {
      1: '<div data-cy-id="english-content-reference-one-localized">\n  <h2>Content Reference: One Localized</h2>\n  <p data-cy-id="integer">[ContentfulContentTypeNumber]\n    <!-- -->42</p>\n</div>',
    },
    "english-content-reference-many-localized": {
      1: '<div data-cy-id="english-content-reference-many-localized">\n  <h2>Content Reference: Many Localized</h2>\n  <p data-cy-id="text">[ContentfulContentTypeText]\n    <!-- -->The quick brown fox jumps over the lazy dog.</p>\n  <p data-cy-id="integer">[ContentfulContentTypeNumber]\n    <!-- -->42</p>\n</div>',
    },
    "german-content-reference-one-localized": {
      1: '<div data-cy-id="german-content-reference-one-localized">\n  <h2>Content Reference: One Localized</h2>\n  <p data-cy-id="integer">[ContentfulContentTypeNumber]\n    <!-- -->4.2</p>\n</div>',
    },
    "german-content-reference-many-localized": {
      1: '<div data-cy-id="german-content-reference-many-localized">\n  <h2>Content Reference: Many Localized</h2>\n  <p data-cy-id="integer">[ContentfulContentTypeNumber]\n    <!-- -->4.2</p>\n  <p data-cy-id="text">[ContentfulContentTypeText]\n    <!-- -->The European languages are members of the same family. Their\n    separate existence is a myth. For science, music, sport, etc, Europe uses\n    the same vocabulary.\n\n    The languages only differ in their grammar, their pronunciation and their\n    most common words. Everyone realizes why a new common language would be\n    desirable: one could refuse to pay expensive translators.\n\n    To achieve this, it would be necessary to have uniform grammar,\n    pronunciation and more common words. If several languages coalesce, the\n    grammar of the resulting language is more simple and regular than that of\n    the individual languages. The new common language will be more simple and\n    regular than the existing European languages. It will be as simple as\n    Occidental; in fact, it will be.</p>\n</div>',
    },
  },
  "media-reference localized": {
    "media-reference: many with localized field": {
      1: '<div data-cy-id="english-media-reference-many-localized-field">\n  <h2>Media Reference: Many Localized Field</h2><img\n    src="//images.ctfassets.net/k8iqpp6u0ior/3ljGfnpegOnBTFGhV07iC1/94257340bda15ad4ca8462da3a8afa07/347966-contentful-logo-wordmark-dark__1_-4cd185-original-1582664935__1_.png"\n    style="width:200px"\n    alt="Media Reference: Many Localized Field"><img\n    src="//images.ctfassets.net/k8iqpp6u0ior/3BSI9CgDdAn1JchXmY5IJi/f97a2185b3395591b98008647ad6fd3c/camylla-battani-AoqgGAqrLpU-unsplash.jpg"\n    style="width:200px"\n    alt="Media Reference: Many Localized Field">\n</div>',
      2: '<div data-cy-id="german-media-reference-many-localized-field">\n  <h2>Media Reference: Many Localized Field</h2><img\n    src="//images.ctfassets.net/k8iqpp6u0ior/2PeXF5HW2hiDfCggU9RIpO/8236da1f40af17e19922ddb87030735a/jae-park-7GX5aICb5i4-unsplash.jpg"\n    style="width:200px"\n    alt="Media Reference: Many Localized Field"><img\n    src="//images.ctfassets.net/k8iqpp6u0ior/3ljGfnpegOnBTFGhV07iC1/94257340bda15ad4ca8462da3a8afa07/347966-contentful-logo-wordmark-dark__1_-4cd185-original-1582664935__1_.png"\n    style="width:200px"\n    alt="Media Reference: Many Localized Field">\n</div>',
    },
    "media-reference: many with localized asset": {
      1: '<div data-cy-id="english-media-reference-many-with-localized-asset">\n  <h2>Media Reference: Many With Localized Asset</h2><img\n    src="//images.ctfassets.net/k8iqpp6u0ior/3BSI9CgDdAn1JchXmY5IJi/f97a2185b3395591b98008647ad6fd3c/camylla-battani-AoqgGAqrLpU-unsplash.jpg"\n    style="width:200px"\n    alt="Media Reference: Many With Localized Asset"><img\n    src="//images.ctfassets.net/k8iqpp6u0ior/4FwygYxkL3rAteERtoxxNC/03f50b0d266b82febc861866593a1491/us.png"\n    style="width:200px"\n    alt="Media Reference: Many With Localized Asset">\n</div>',
      2: '<div data-cy-id="german-media-reference-many-with-localized-asset">\n  <h2>Media Reference: Many With Localized Asset</h2><img\n    src="//images.ctfassets.net/k8iqpp6u0ior/3BSI9CgDdAn1JchXmY5IJi/f97a2185b3395591b98008647ad6fd3c/camylla-battani-AoqgGAqrLpU-unsplash.jpg"\n    style="width:200px"\n    alt="Media Reference: Many With Localized Asset"><img\n    src="//images.ctfassets.net/k8iqpp6u0ior/4FwygYxkL3rAteERtoxxNC/fc29feb54e26993c1add4918aadbe8b2/de.png"\n    style="width:200px"\n    alt="Media Reference: Many With Localized Asset">\n</div>',
    },
    "media-reference: one with localized asset": {
      1: '<div data-cy-id="english-media-reference-one-localized-asset">\n  <h2>Media Reference: One Localized Asset</h2><img\n    src="//images.ctfassets.net/k8iqpp6u0ior/4FwygYxkL3rAteERtoxxNC/03f50b0d266b82febc861866593a1491/us.png"\n    style="width:200px"\n    alt="Media Reference: One Localized Asset">\n</div>',
      2: '<div data-cy-id="german-media-reference-one-localized-asset">\n  <h2>Media Reference: One Localized Asset</h2><img\n    src="//images.ctfassets.net/k8iqpp6u0ior/4FwygYxkL3rAteERtoxxNC/fc29feb54e26993c1add4918aadbe8b2/de.png"\n    style="width:200px"\n    alt="Media Reference: One Localized Asset">\n</div>',
    },
    "media-reference: one with localized field": {
      1: '<div data-cy-id="english-media-reference-one-localized-field">\n  <h2>Media Reference: One Localized Field</h2><img\n    src="//images.ctfassets.net/k8iqpp6u0ior/3BSI9CgDdAn1JchXmY5IJi/f97a2185b3395591b98008647ad6fd3c/camylla-battani-AoqgGAqrLpU-unsplash.jpg"\n    style="width:200px"\n    alt="Media Reference: One Localized Field">\n</div>',
      2: '<div data-cy-id="german-media-reference-one-localized-field">\n  <h2>Media Reference: One Localized Field</h2><img\n    src="//images.ctfassets.net/k8iqpp6u0ior/2PeXF5HW2hiDfCggU9RIpO/8236da1f40af17e19922ddb87030735a/jae-park-7GX5aICb5i4-unsplash.jpg"\n    style="width:200px"\n    alt="Media Reference: One Localized Field">\n</div>',
    },
  },
}

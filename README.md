MRE for ...

## Reproduction Steps

Optionally edit the `.build.rollupOptions.external` in `ui/vite.config.ts` to add/remove the `solid-js` and `solid-js/web` deps.

Then run:
```bash
bun i
cd ui
bun run build
cd ../ssg-website
bun run build
```

### Expected Behavior
A successful build of the website.

### Actual Behavior
With no external deps for `ui`:
```
17:07:16 ▶ src/pages/index.astro
17:07:16   └─ /index.htmldocument is not defined
  Hint:
    Browser APIs are not available on the server.
    
    If the code is in a framework component, try to access these objects after rendering using lifecycle methods or use a `client:only` directive to make the component exclusively run on the client.
    
    See https://docs.astro.build/en/guides/troubleshooting/#document-or-window-is-not-defined for more information.
    
  Stack trace:
    at create (file:///home/jsimonrichard/Trellis/solid-ssr-ui-lib-issue/ssg-website/dist/pages/index.astro.mjs?time=1723237636054:29:15)
    at getNextElement (file:///home/jsimonrichard/Trellis/solid-ssr-ui-lib-issue/ssg-website/dist/pages/index.astro.mjs?time=1723237636054:36:10)
    at createComponent (file:///home/jsimonrichard/Trellis/solid-ssr-ui-lib-issue/node_modules/solid-js/dist/server.js:367:15)
    at file:///home/jsimonrichard/Trellis/solid-ssr-ui-lib-issue/node_modules/solid-js/web/dist/server.js:128:34
    at renderToString (file:///home/jsimonrichard/Trellis/solid-ssr-ui-lib-issue/node_modules/solid-js/web/dist/server.js:126:14)
error: script "build" exited with code 1
```

With `solid-js` as external:
```
17:08:11 ▶ src/pages/index.astro
17:08:11   └─ /index.htmlCannot read properties of undefined (reading 'get')
  Stack trace:
    at getNextElement (file:///home/jsimonrichard/Trellis/solid-ssr-ui-lib-issue/ssg-website/dist/pages/index.astro.mjs?time=1723237691108:38:59)
    at createComponent (file:///home/jsimonrichard/Trellis/solid-ssr-ui-lib-issue/node_modules/solid-js/dist/server.js:367:15)
    at file:///home/jsimonrichard/Trellis/solid-ssr-ui-lib-issue/node_modules/solid-js/web/dist/server.js:128:34
    at renderToString (file:///home/jsimonrichard/Trellis/solid-ssr-ui-lib-issue/node_modules/solid-js/web/dist/server.js:126:14)
    at Object.check (file:///home/jsimonrichard/Trellis/solid-ssr-ui-lib-issue/ssg-website/dist/renderers.mjs:27:47)
```

With `solid-js` and `solid-js/web` as external:
```
17:08:51 ▶ src/pages/index.astro
17:08:51   └─ /index.htmlCannot read properties of undefined (reading 'get')
  Stack trace:
    at getNextElement (file:///home/jsimonrichard/Trellis/solid-ssr-ui-lib-issue/ssg-website/dist/pages/index.astro.mjs?time=1723237731721:38:59)
    at createComponent (file:///home/jsimonrichard/Trellis/solid-ssr-ui-lib-issue/node_modules/solid-js/dist/server.js:367:15)
    at file:///home/jsimonrichard/Trellis/solid-ssr-ui-lib-issue/node_modules/solid-js/web/dist/server.js:128:34
    at renderToString (file:///home/jsimonrichard/Trellis/solid-ssr-ui-lib-issue/node_modules/solid-js/web/dist/server.js:126:14)
    at Object.check (file:///home/jsimonrichard/Trellis/solid-ssr-ui-lib-issue/ssg-website/dist/renderers.mjs:27:47)
```
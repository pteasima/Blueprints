# Blueprints WebGL viewer

Custom offline viewer shell (not a third-party app). Three.js is bundled only as a renderer/loader.

## Rebuild the IIFE (after editing `main.js`)

```bash
cd src/blueprints/viewer
npm ci
npm run build
```

`viewer.iife.js` is committed so Python export does not need Node at runtime.

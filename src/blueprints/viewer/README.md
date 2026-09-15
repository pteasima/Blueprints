# Blueprints WebGL viewer

Custom offline viewer shell (not a third-party app). Three.js is bundled only as a renderer/loader.

## Features

- Part visibility toggles and camera presets (Iso / Front / Side / Top)
- **Section cuts**: bottom sliders clip the model with planes locked to the view direction at first interaction (architectural: near side removed). Multiple locked cuts AND together. After a cut is locked, orbiting the camera adds another draft slider for a new plane. Left end of each slider = no cut; right = fully past the model.
- **View in AR**: generates a USDZ in-browser from the current visible geometry (hidden parts omitted, section cuts baked into mesh) and opens Quick Look. No server round-trip; real CAD scale (millimetres).

## Rebuild the IIFE (after editing `main.js`)

```bash
cd src/blueprints/viewer
npm ci
npm run build
```

`viewer.iife.js` is committed so Python export does not need Node at runtime. Copy/sync into `docs/viewer/` via `ensure_viewer_shell()` on publish, or copy manually after build.

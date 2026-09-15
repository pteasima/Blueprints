# Blueprints WebGL viewer

Custom offline viewer shell (not a third-party app). Three.js is bundled only as a renderer/loader.

## Features

- Liquid-glass controls sheet (bottom on phone, right on wide displays); light/dark via `prefers-color-scheme`
- Part visibility toggles and camera presets (Iso / Front / Side / Top)
- **Section cuts**: sheet sliders clip the model with planes locked to the view direction at first interaction (architectural: near side removed). Multiple locked cuts AND together. After a cut is locked, orbiting the camera adds another draft slider for a new plane. Left end of each slider = no cut; right = fully past the model.
- **AR**: generates a USDZ in-browser from the current visible geometry (hidden parts omitted, section cuts baked into mesh) and opens Quick Look. No server round-trip. GLB is already metres (glTF); models larger than 2 m are scaled to a ~0.45 m tabletop and lifted slightly above the plane for indoor AR.

## Rebuild the IIFE (after editing `main.js` / `chrome.js`)

```bash
cd src/blueprints/viewer
npm ci
npm run build
```

`viewer.iife.js` is committed so Python export does not need Node at runtime. Copy/sync into `docs/viewer/` via `ensure_viewer_shell()` on publish, or copy manually after build.

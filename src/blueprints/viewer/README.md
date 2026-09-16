# Blueprints WebGL viewer

Custom offline viewer shell (not a third-party app). Three.js is bundled only as a renderer/loader.

## Features

- Liquid-glass controls sheet (phone: bottom sheet with grabber detents peek / partial / full; wide: classic right pane — no grabber, top-right toggle, edge swipe to open, swipe pane to close except on sliders/controls); light/dark via `prefers-color-scheme`
- Part outline groups (Walls / Roof / Interior) with per-group and per-leaf **opacity** sliders (tap toggles 0 ↔ last value). Translucent parts use Everitt **depth peeling** (`depthPeel.js`, `USE_DEPTH_PEEL` on) with float32 linear eye-space Z and abort-to-standard-alpha fail-safes so fades never vanish. Sorted alpha (`transparent` + `depthWrite:false`) is the emergency fallback only; faded meshes keep `renderOrder = 0` so opaque `LAYER_DEPTH_BIAS` does not invert shell order. Opacity 0 hides a part (also omitted from AR).
- Camera presets (Iso / Front / Side / Top)
- **Section cuts**: sheet sliders clip the model with planes locked to the view direction at first interaction (architectural: near side removed). Multiple locked cuts AND together. After a cut is locked, orbiting the camera adds another draft slider for a new plane. Left end of each slider = no cut; right = fully past the model. Sheet section order: View → Sections → Parts. Cut sliders use a cooperative control (`touch-action: pan-y`) so vertical sheet scroll still works when the gesture starts on the thumb — only horizontal drag and tap are consumed (native `<input type="range">` monopolizes the touch on many mobile browsers).
- Partial sheet (phone) / open side sheet (wide) shifts the camera view offset so the model stays centered in the visible safe area above/beside the sheet; peek, closed, and full clear the offset.
- **AR**: generates a USDZ in-browser from the current visible geometry (hidden parts omitted, section cuts baked into mesh) and opens Quick Look. No server round-trip. GLB is already metres (glTF); models larger than 2 m are scaled to a ~0.45 m tabletop and lifted slightly above the plane for indoor AR. Quick Look transparency sorting may be weaker than the web depth-peel path.
- **Measure (experimental):** top-bar tool next to AR. AutoCAD-style place/confirm (trackpad: crosshair on enable; touch: drag with finger-offset cursor, tap-anywhere confirms without re-picking). Mesh snaps (vertex / edge / face) plus perpendicular width snap between parallel edges on a face. **Not a finished contract** — UX and snap behavior will keep changing; do not treat current behavior as gospel when extending the viewer.

## Rebuild the IIFE (after editing `main.js` / `chrome.js` / `coopRange.js` / `materials.js` / `depthPeel.js`)

```bash
cd src/blueprints/viewer
npm ci
npm run build
```

`viewer.iife.js` is committed so Python export does not need Node at runtime. Copy/sync into `docs/viewer/` via `ensure_viewer_shell()` on publish, or copy manually after build.


# Blueprints WebGL viewer

Custom offline viewer shell (not a third-party app). Three.js is bundled only as a renderer/loader.

## Features

- Liquid-glass controls sheet (phone: bottom sheet with grabber detents peek / partial / full; wide: classic right pane — no grabber, top-right toggle, edge swipe to open, swipe pane to close except on sliders/controls); light/dark via `prefers-color-scheme`
- Part outline groups (Walls / Roof / Interior) with per-group and per-leaf **opacity** sliders (tap toggles 0 ↔ last value; scrub only by dragging the thumb — cooperative range, no click-to-seek). Editing a leaf detaches it from the parent group so later group fades leave it alone; a **Sync** button (right of the slider) reattaches and matches the group. Translucent parts use Everitt **depth peeling** (`depthPeel.js`, `USE_DEPTH_PEEL` on): **fast** half-res / early-out while orbiting; **high** full-res / 12 layers matching the proven main-branch peel loop once the camera settles. Float32 linear eye-space Z and abort-to-standard-alpha fail-safes so fades never vanish. Sorted alpha is the emergency fallback only; faded meshes keep `renderOrder = 0` so opaque `LAYER_DEPTH_BIAS` does not invert shell order. Opacity 0 hides a part (also omitted from AR).
- **Edges** modes (Materials sheet): **None** / **Transparent** / **Opaque**. CAD hard-edge overlay via fat `LineSegments2` strokes (black, ~2.5px) plus section-cut silhouettes when not None. Always drawn in a post-face depth-aware pass (MeshDepthMaterial depth refill, then edge colour). NDC Z bias + FragDepth subtract (under `USE_LOGDEPTHBUF` only — never overwrite with `gl_FragCoord.z`) keep strokes on top of faces with `logarithmicDepthBuffer`. While depth-peeling, the same pass runs after composite so faded parts keep outlines. Transparent mode matches parent part opacity; Opaque keeps full-alpha strokes over faded faces. Persists in `localStorage` (`blueprints.edgeMode`). Default Transparent. Overlays are omitted from AR and Measure picking.
- Camera presets (Iso / Front / Side / Top) — orientation only
- **Custom scenes** (optional, model-specific): extra View buttons after the builtins. Each scene can set camera pose (`position` / `target` / optional `up`), optional FOV or orthographic ISO (`projection: "ortho"`), optional section cuts, and optional part opacities (`opacity` + `opacityDefault`). Loaded from `docs/models/<id>.scenes.json` (Pages) or embedded in the offline HTML export. Coordinates are **glTF world metres after OCCT’s Z-up→Y-up root rotation** (`(x,y,z)_cad → (x,z,−y)`): X eave↔eave, Y up, Z = −(kitchen↔living). Use `blueprints.scenes.cad_mm_to_gltf_m`. Deep-link with `?m=<id>&scene=<sceneId>` (e.g. `viewer/?m=obyvak&scene=soffit`). Selecting a custom scene updates the URL via `history.replaceState`; orbiting or picking Iso/Front/Side/Top clears `scene` so the bar matches the View highlight.
- **FOV / ISO:** View-section slider (30–120° horizontal FOV, default 75°). Right detent is **ISO** (real orthographic). Drag adjusts FOV or snaps into ISO; tap toggles ISO ↔ last perspective FOV. Framing is adjusted so on-screen model size stays roughly constant across FOV / projection changes.
  - **Known ISO issues (do not treat as fixed):**
    1. Opaque faces can still Z-fight / show through each other at steep view angles (e.g. a podlehy edge line bleeding through the roof) even with no transparency and no section cut.
    2. After changing FOV then switching to ISO, a phantom clip that looks like a section cut can appear even when no cut is active. Usually not triggered by orbiting alone while already in ISO — suspect near/far or frustum handoff in the perspective→ortho transition (`enterOrtho` in `main.js`).
- **Section cuts**: sheet sliders clip the model with planes locked to the view direction at first interaction (architectural: near side removed). Multiple locked cuts AND together. After a cut is locked, orbiting the camera adds another draft slider for a new plane. Left end of each slider = no cut; right = fully past the model. Sheet section order: View → Sections → Parts. Cut sliders use a cooperative control (`touch-action: pan-y`) so vertical sheet scroll still works when the gesture starts on the thumb — only horizontal **drag** is consumed (tap does not seek; native `<input type="range">` monopolizes the touch on many mobile browsers).
- Partial sheet (phone) / open side sheet (wide) shifts the camera view offset so the model stays centered in the visible safe area above/beside the sheet; peek, closed, and full clear the offset.
- **AR**: generates a USDZ in-browser from the current visible geometry (hidden parts omitted, section cuts baked into mesh) and opens Quick Look. No server round-trip. GLB is already metres (glTF); models larger than 2 m are scaled to a ~0.45 m tabletop and lifted slightly above the plane for indoor AR. Quick Look transparency sorting may be weaker than the web depth-peel path.
- **Measure (experimental):** top-bar tool next to AR. AutoCAD-style place/confirm (trackpad: crosshair on enable; touch: drag with finger-offset cursor, tap-anywhere confirms without re-picking). Mesh snaps (vertex / edge / face) plus perpendicular width snap between parallel edges on a face. **Not a finished contract** — UX and snap behavior will keep changing; do not treat current behavior as gospel when extending the viewer.
- **Scene drawings:** a custom scene may carry `title`, `project`, and `annotations` (callouts and dimensions). Anchors are CAD millimetres. Callout `offset` is a fraction of the view; dimension `offset` is a fraction of the view height, to one side of the measured line. Text is `{en, cs}` and follows the language toggle. Labels are a screen overlay, not part of the GLB. Builtin Iso/Front/Side/Top clears them; orbiting keeps them on their anchors. A cut may pass through an `anchor` (CAD mm) instead of a bbox-relative `t`.
- **Drawing** (top bar): active custom scene only. Re-applies that scene’s camera, renders an A3 landscape plate (white background, opaque edges, labels in black), and downloads PNG and PDF. `window.blueprintCaptureDrawing()` returns `{png, pdf, stem}` for a headless capture.

View buttons: Iso / Front / Side / Top stay one segmented control. Custom scenes are separate wrapping buttons underneath.

## Rebuild the IIFE (after editing `main.js` / `chrome.js` / `coopRange.js` / `materials.js` / `depthPeel.js` / `edges.js` / `annotations.js` / `drawing.js`)

```bash
cd src/blueprints/viewer
npm ci
npm run build
```

`viewer.iife.js` is committed so Python export does not need Node at runtime. Copy/sync into `docs/viewer/` via `ensure_viewer_shell()` on publish, or copy manually after build.


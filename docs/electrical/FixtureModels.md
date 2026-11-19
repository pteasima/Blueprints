# Real fixture models

Source: Petr, 2026-11-19 (Cody chat): "Can we get real models for the fixtures? On a best effort basis, model one type of: light (from kamaelektro), camera (from unifi), switch (from jung). Search anything you need on the web and guess the rest from photos etc. I want to see what quality we can get to without my involvement scanning the physical hardware."

Petr, 2026-11-19, after reviewing PR #125: "jung switch is the up/down rocker style so it should be in neutral position by default", "this is not a commercial project, so we'd be fine using unifi models (I take full responsibility). But the one you handmade looks good too.", and "I notice we've lost edges on these models, is it easy to put them back". So the rockers rest flat, the G6 Turret now uses Ubiquiti's own model, and the models draw edge lines.

In the Shaded and Realistic modes, three fixture types are drawn as real product models instead of the generated boxes. Solid still shows the colour-coded boxes. Nothing was measured on site. All the geometry comes from manufacturer models.

| Model | Product | Used for | Geometry | File |
|---|---|---|---|---|
| `kama-d100` | Kama Lights KL-D100-15W, "Stropní svítidlo 24V Dual White D100 15W IP54" | `Downlight` with plan symbol D100 (15 lights) | Kama's official GLB: the can is revolved from its own profile, and the diffuser is Kama's | 75 KB, 1 973 triangles |
| `jung-ls990` | Jung LS 990 WW rocker in an LS 981 WW 1-gang frame | `PushButton` (46, 45 placed) | Jung's official OBJ, decimated | 59 KB, 1 200 triangles |
| `jung-ls995` | Jung LS 995 WW 2-gang rocker in an LS 981 WW frame | `DoublePushButton` (7) | Jung's official OBJ, decimated | 67 KB, 1 398 triangles |
| `unifi-g6-turret` | Ubiquiti UniFi G6 Turret (UVC-G6-Turret) | `Camera` whose note says G6 Turret (C147-C, east facade) | Ubiquiti's store model, simplified, with a 512 px texture | 285 KB, 10 931 triangles |

The models are in `docs/models/fixtures/`, as plain git files rather than LFS. `scripts/build_fixture_models.py` builds them from the downloaded sources:

```sh
uv run -q --no-project --with trimesh --with numpy --with scipy --with pymeshlab \
  --with remotezip --with manifold3d --with networkx --with pillow --with DracoPy \
  python scripts/build_fixture_models.py
```

The G6 step also runs `npx @gltf-transform/cli@4.5.1`, or `$GLTF_TRANSFORM` if that is set. Downloads are cached in `$BLUEPRINTS_FIXTURE_CACHE`, which defaults to `~/.cache/blueprints-fixture-src`. For Jung, only the three OBJ members are read out of the 850 MB zip. `--g6-handmade` also writes the first, hand-built G6 as `unifi-g6-turret-handmade.glb` for comparison. The viewer doesn't use it, and it isn't committed.

## Products, dimensions and sources

### Kama Lights D100 15W

- Product page: https://www.kamaelektro.cz/en/surface-2/ceiling-light-24v-dual-white-d100-15w/. The plan legend names it as "Stropní svítidlo 24V Dual White D100 15W IP54".
- Dimensions: Ø100 × 65 mm, with a stepped bezel around the diffuser. The body is aluminium and the diffuser is opal PC. The model comes out at 99 × 99 × 64 mm.
- Geometry: https://www.kamaelektro.cz/user/documents/upload/GLB_Modely/KL-D100-15W-BK.glb, a SolidWorks export of the black version. Kama doesn't publish a white GLB (`…-WH.glb` returns 404), so the model is recoloured white. The build cuts Kama's can through its axis and keeps the outside profile, from the ceiling up the wall and down the five bezel steps to the diffuser (16 points). It revolves that profile in 64 steps. A decimated can shaded in stripes and drew broken edge rings, while the revolved one is exact and cheap. The diffuser is Kama's own mesh, and the hidden mounting plate is dropped.
- Licence: Kama offers its GLB models for "project documentation and visualisations", which covers this use.
- Guessed: the white colour (#f4f4f2, roughness 0.45) and the opal diffuser colour. The plan doesn't say whether the lights are white or black, so white is assumed.
- Not modelled: the D55 spot. It is more common (20 lights), but it is a tilting spot on the sloped ceiling of 1.02.

### Jung LS 990 / LS 995 push-button

- Products: the LS 990 WW rocker and the LS 995 WW 2-gang rocker, in the LS 981 WW frame (alpine white, glossy thermoplastic). Both are 81 × 81 mm. The model is 15.3 mm deep for the 1-gang and 13.6 mm for the 2-gang, measured from the wall.
- Geometry: `JUNG_OBJ_2021.zip` from https://downloads.jung.de//Downloads/Allgemeine%20Downloads/2D%20&%203D/OBJ/JUNG_OBJ_2021.zip. The members used are `LS_switch_push-button_1-gang.obj`, `LS_switch_push-button_2-gang.obj` and `LS_1-gang_frame.obj`. They are in cm with +Y out of the wall. The build drops faces behind the wall plane and decimates with pymeshlab to about 700 faces for the frame, 500 for the 1-gang rocker and 350 for each 2-gang half. Below that the fillets start to show facets.
- Neutral rocker: Jung draws the rocker switched, with its face sloping about 3.9° and the top proud. The build turns each rocker about its centre until the face is parallel to the wall, so at rest it sits flat, as an up/down rocker does. It tilts only while a press is shown.
- Licence: Jung offers its CAD data "for your free use".
- Guessed: the WW colour (#f1f0ea, glossy) is read from Jung's product photos. The rocker halves of the 2-gang are split at the centre line.
- Simplified: every device gets its own 1-gang frame. Where the plan stacks devices in a multi-gang frame (for example C4-2V by the bed in 1.11), the frame overlaps the neighbouring boxes.

### UniFi G6 Turret

- Datasheet: https://techspecs.ui.com/unifi/physical-security/uvc-g6-turret gives Ø100 × 95 mm, aluminium alloy and polycarbonate. The model is 100 × 100 × 97 mm, measured with the ball turned for a wall.
- Geometry: Ubiquiti's own model from the store page https://store.ui.com/us/en/products/uvc-g6-turret (`https://cdn.ecomm.ui.com/products/cc0e6f23-b53b-45b5-bff5-faf69f4fbf30/7648155a-3c16-4e17-a91c-7f79c02cac6b.glb`). It is Draco compressed, 64k triangles, with a 2048 px texture atlas. The build:
  1. decodes it with DracoPy;
  2. turns it so the mount is on the wall and the shell's low side faces down;
  3. turns the ball about its fitted centre (46°) so the lens looks out of the wall, 18° down;
  4. runs gltf-transform: `weld`, `simplify` (meshoptimizer, ratio 0.1 and error 0.001, which keeps UV seams), `join` (base and ball are one draw call), `resize` (512 px atlas) and `quantize` (KHR_mesh_quantization, which three.js reads without a decoder).
  The roughness map is replaced by one value.
- Licence: ui.com's terms don't allow copying or derivatives. Petr, 2026-11-19: "this is not a commercial project, so we'd be fine using unifi models (I take full responsibility)." The first version of this page used a hand-built model for that reason. It is still in the build script (`--g6-handmade`).
- Guessed: the lens tilt (18° down) and the roughness. The rest is Ubiquiti's.

## How the viewer uses them

`src/blueprints/viewer/fixtureModels.js` maps elements to models (`FIXTURE_MODEL_RULES`, by `ObjectType` and the yaml `Description`). After the GLB loads, it loads each model once and hangs a copy under the generated box mesh of each matching element. The model sits on the wall face of the box, with +Z pointing out of the wall. For a wall device, the wall side comes from the yaml-ifc `RefDirection`. A ceiling model hangs from the top of its box, pointing down.

- The box stays the element. Taps, the two rocker halves, highlighting, the Parts list and edit-mode selection all use it. It is only drawn invisibly, and its section caps are skipped. Model meshes don't take taps.
- An edit-mode move carries the model, because the model is a child of the box.
- Light on and off lights the D100's `diffuser` in the light's colour. The box pulse highlights the model.
- A rocker press tilts the pressed half (`rocker`, `rocker-1` or `rocker-2`) by 2.5° for 220 ms about its centre, then it springs back to flat. Pressing the upper half pushes the top edge in, and pressing the lower half pushes the bottom edge in.
- Section cuts clip the models with the same planes.

### Edge lines

The models draw edge lines like every other part. The box's own fat-line overlay (`edges.js`) draws the model's edges instead of the box outline, so they follow edge mode, clipping, line width and depth bias with no extra pass and no per-frame work. That is one line object per fixture, as the box had. `fixtureModels.js` computes the segments once per model when it loads, moves them into each fixture's box frame once at install, and `edges.js` reuses them on every refresh (`MODEL_EDGES`).

- An edge draws where the faces meet at more than the threshold angle, or where a surface ends (where two parts meet, the cut-off back).
- The viewer's boxes use 20°. On decimated vendor CAD, curved faces break into facets that meet at 20-40°, so a plain threshold draws either a hatched band along every fillet or nothing.
- The Jung frame and rocker (50°, plus a front outline) also draw an edge where the surface turns past 45° from facing the room. Each soft fillet then gives one line, like a drawing of the frame and rocker outline.
- The D100 uses 30°. The revolved can is exact, so the five bezel steps each draw one ring.
- The G6 uses 45°. The shell rim, the window and the lens rings draw, and the smooth ball doesn't.
- The rocker's lines stay put during the 220 ms press tilt.

### Cost

Numbers from the headless check of the whole ground floor in Shaded:

| | Meshes drawn | Triangles | Edge line objects |
|---|---|---|---|
| Boxes only | 12 840 | 49 744 | 13 248 |
| With the models | 12 983 | 154 056 | 12 908 |

- The models add 143 meshes (about 1 %) and about 104k triangles: 45 switches × 1 200, 15 lights × 1 973, 7 × 1 398, and the camera at 10 931. They also add 57k edge segments.
- Each model shares its geometry across its fixtures. Only the materials are per fixture, because the light state and the clipping are.
- The house itself is already about 12 900 meshes plus as many edge objects per frame. That draw-call count, not these models, is what an iPhone feels.

Asset convention: metres at real size, +Z out of the mounting surface, +Y up on a wall, origin at the centre of the back face. Nodes are named `diffuser`, `rocker`, `rocker-1` and `rocker-2`.

## Known limitations

- AR export (USDZ/GLB) still exports the boxes.
- Partial-opacity fades in the Parts list don't fade the models.
- An edit-mode copy made before the models finish loading stays a box until reload. A copy made after has the model but no edge lines until reload.
- Multi-gang frames aren't merged (see the Jung section).
- No instancing: each fixture is its own few meshes. With 68 fixtures that is 143 draw calls against the house's ~26k.

## What would improve it

- Petr confirming the D100 colour (white or black), and which frame series and colour the switches use (LS 990 alpine white is assumed).
- Merging stacked devices into one multi-gang LS frame (LS 982 / 983).
- Textures for the brand marks: the Kama label and the Jung engraving, if any. The G6 has Ubiquiti's.
- Instancing the 45 single switches (one draw call each for frame and rocker), if draw calls ever matter here.

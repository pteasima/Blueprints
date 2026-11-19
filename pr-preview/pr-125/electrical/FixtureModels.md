# Real fixture models

Source: Petr, 2026-11-19 (Cody chat): "Can we get real models for the fixtures? On a best effort basis, model one type of: light (from kamaelektro), camera (from unifi), switch (from jung). Search anything you need on the web and guess the rest from photos etc. I want to see what quality we can get to without my involvement scanning the physical hardware."

In the Shaded and Realistic modes, three fixture types are drawn as real product models instead of the generated boxes. Solid still shows the colour-coded boxes. Nothing was measured on site. All the geometry comes from manufacturer CAD where it was available, and from datasheets and photos where it was not.

| Model | Product | Used for | Geometry | File |
|---|---|---|---|---|
| `kama-d100` | Kama Lights KL-D100-15W, "Stropní svítidlo 24V Dual White D100 15W IP54" | `Downlight` with plan symbol D100 (15 lights) | Kama's official GLB, decimated | 156 KB, 5 052 triangles |
| `jung-ls990` | Jung LS 990 WW rocker in an LS 981 WW 1-gang frame | `PushButton` (46) | Jung's official OBJ, decimated | 207 KB, 5 499 triangles |
| `jung-ls995` | Jung LS 995 WW 2-gang rocker in an LS 981 WW frame | `DoublePushButton` (7) | Jung's official OBJ, decimated | 279 KB, 6 498 triangles |
| `unifi-g6-turret` | Ubiquiti UniFi G6 Turret (UVC-G6-Turret) | `Camera` whose note says G6 Turret (C147-C, east facade) | Built by hand from the datasheet and photos | 304 KB, 11 208 triangles |

The models are in `docs/models/fixtures/`, as plain git files rather than LFS. `scripts/build_fixture_models.py` builds them from the downloaded sources:

```sh
uv run -q --no-project --with trimesh --with numpy --with scipy --with pymeshlab \
  --with remotezip --with manifold3d --with networkx --with pillow \
  python scripts/build_fixture_models.py
```

Downloads are cached in `$BLUEPRINTS_FIXTURE_CACHE`, which defaults to `~/.cache/blueprints-fixture-src`. For Jung, only the three OBJ members are read out of the 850 MB zip.

## Products, dimensions and sources

### Kama Lights D100 15W

- Product page: https://www.kamaelektro.cz/en/surface-2/ceiling-light-24v-dual-white-d100-15w/. The plan legend names it as "Stropní svítidlo 24V Dual White D100 15W IP54".
- Dimensions: Ø100 × 65 mm, with a stepped 6 mm bezel around the diffuser. The body is aluminium and the diffuser is opal PC. The model comes out at 99 × 99 × 64 mm.
- Geometry: https://www.kamaelektro.cz/user/documents/upload/GLB_Modely/KL-D100-15W-BK.glb, a SolidWorks export of the black version. Kama doesn't publish a white GLB (`…-WH.glb` returns 404), so the model is recoloured white. The build drops the separate mounting plate, decimates the body to about 5 000 faces, and keeps the diffuser as its own node.
- Licence: Kama offers its GLB models for "project documentation and visualisations", which covers this use.
- Guessed: the white colour (#f4f4f2, roughness 0.45) and the opal diffuser colour. The plan doesn't say whether the lights are white or black, so white is assumed.
- Not modelled: the D55 spot. It is more common (20 lights), but it is a tilting spot on the sloped ceiling of 1.02, so the D100 was the cleaner first case.

### Jung LS 990 / LS 995 push-button

- Products: the LS 990 WW rocker and the LS 995 WW 2-gang rocker, in the LS 981 WW frame (alpine white, glossy thermoplastic). Both are 81 × 81 mm. The model is 17.9 mm deep for the 1-gang and 15.9 mm for the 2-gang, measured from the wall.
- Geometry: `JUNG_OBJ_2021.zip` from https://downloads.jung.de//Downloads/Allgemeine%20Downloads/2D%20&%203D/OBJ/JUNG_OBJ_2021.zip. The members used are `LS_switch_push-button_1-gang.obj`, `LS_switch_push-button_2-gang.obj` and `LS_1-gang_frame.obj`. They are in cm with +Y out of the wall. The build drops faces behind the wall plane and decimates with pymeshlab: about 2 500 faces for the frame, 3 000 for the 1-gang rocker, and 2 000 for each 2-gang half.
- Licence: Jung offers its CAD data "for your free use".
- Guessed: the WW colour (#f1f0ea, glossy) is read from Jung's product photos. The rocker halves of the 2-gang are split at the centre line.
- Simplified: every device gets its own 1-gang frame. Where the plan stacks devices in a multi-gang frame (for example C4-2V by the bed in 1.11), the frame overlaps the neighbouring boxes.

### UniFi G6 Turret

- Datasheet: https://techspecs.ui.com/unifi/physical-security/uvc-g6-turret gives Ø100 × 95 mm, aluminium alloy and polycarbonate. The model is 100 × 100 × 95.9 mm.
- Geometry: built by hand in the build script. It has a Ø100 mm white can, 72 mm tall, cut by a slanted plane from 45 mm at the bottom to 70 mm at the top, with a cup for the ball. There is a grey swivel band 7.5 mm from the wall, and a Ø87 mm ball. The ball has a black window 60° around the lens, a dark lens ring, and blue-black glass.
- Why hand-built: Ubiquiti's store has a 3D model, but the ui.com terms forbid copying it or making derivatives, so it is not used. The store photos were used only as a visual reference, and in the comparison image of the PR.
- Guessed: the proportions of the shell, the slant and the window size (read off photos), the lens tilted 18° down, and the colours. The UniFi logo, the ports and the mounting screws are left out.

## How the viewer uses them

`src/blueprints/viewer/fixtureModels.js` maps elements to models (`FIXTURE_MODEL_RULES`, by `ObjectType` and the yaml `Description`). After the GLB loads, it loads each model once and hangs a copy under the generated box mesh of each matching element. The model sits on the wall face of the box, with +Z pointing out of the wall. For a wall device, the wall side comes from the yaml-ifc `RefDirection`. A ceiling model hangs from the top of its box, pointing down.

- The box stays the element. Taps, the two rocker halves, highlighting, the Parts list and edit-mode selection all use it. It is only drawn invisibly, and its edge outline and section caps are skipped. Model meshes don't take taps.
- An edit-mode move carries the model, because the model is a child of the box.
- Light on and off lights the D100's `diffuser` in the light's colour. The box pulse highlights the model.
- A rocker press tilts the pressed half (`rocker`, `rocker-1` or `rocker-2`) by 2.5° for 220 ms, instead of pushing the whole box in.
- Section cuts clip the models with the same planes.

Asset convention: metres at real size, +Z out of the mounting surface, +Y up on a wall, origin at the centre of the back face. Nodes are named `diffuser`, `rocker`, `rocker-1` and `rocker-2`.

## Known limitations

- AR export (USDZ/GLB) still exports the boxes.
- Partial-opacity fades in the Parts list don't fade the models.
- An edit-mode copy made before the models finish loading stays a box until reload.
- Multi-gang frames aren't merged (see the Jung section).
- Model files are kept under about 300 KB each. The G6 is right at that limit, because its ball is smooth geometry.

## What would improve it

- Petr confirming the D100 colour (white or black), and which frame series and colour the switches use (LS 990 alpine white is assumed).
- Merging stacked devices into one multi-gang LS frame (LS 982 / 983).
- A licensed G6 Turret model, either asked for from Ubiquiti or made from a few phone photos of the installed camera (photogrammetry).
- Textures for the brand marks: the Kama label, the UniFi logo and the Jung engraving, if any.

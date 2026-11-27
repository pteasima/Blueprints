# Viewer performance: one draw per element, not per CAD face

Petr, 2026-11-20 (Cody chat), after PRs 129–132: "this is great on ipad, so merge everything. But it crashes all the time on iphone and is slow on mac. So next step is to simplify and optimize."

## The cost

The exporter (build123d / OCCT `export_gltf`) writes **one glTF primitive per CAD face**. GLTFLoader turns each primitive into its own `THREE.Mesh` under the element's node, and the edge overlay (`edges.js`) added one fat-line object per mesh on top. `ground_floor.glb` on main (0d72c89) has 1,229 element meshes but 8,850 primitives, so the viewer held ~17.8k meshes, ~75k WebGL buffers and drew ~15k times a frame in Shaded. Gridfinity baseplates (PR 127, on demand) add 11,823 primitives in 18 meshes.

iOS Safari reloads a tab when it runs out of memory, so the per-mesh overhead (JS objects, WebGL buffer handles, per-draw state) is what crashes the iPhone. The triangle count (~36k) is small.

## What the viewer does now

**Merge at load (`mergePrimitives.js`).** Right after GLTFLoader parses the main GLB (and each on-demand layer such as Gridfinity), the sibling primitive meshes of each element node that share a material and vertex layout become one indexed mesh. The node, its name, its parent, material and flags stay; only its children go from many to one (every mesh in `ground_floor` has one material, so one per element). Only meshes GLTFLoader made from primitives of one multi-primitive glTF mesh are merged (it records `{ meshes, primitives }` for them in `parser.associations`). A node that is itself a mesh, e.g. the two `glazing__WIN-OP35__` panes, is never merged with its namesake.

Why this and not `BatchedMesh` or one merged buffer per material across elements: every viewer feature works per element node, never per face (picking and the inspector, Parts and inspector hides, opacity and depth peel, locks, doors and drawers, sliding windows, edit mode, fixture models, Realistic world UVs, walk collisions). Merging inside the node keeps all of them unchanged without touching their code, and gets the bulk of the win (8,850 → ~1.3k meshes). Cross-element batching would take draws from ~2.4k to a few dozen but needs per-element hide, opacity, transforms (doors, drawers, edit mode), picking ids and edge overlays to be re-plumbed through draw ranges. Worth doing only if real devices are still slow after this.

**Edges stay face by face.** The merged geometry keeps each source face's vertex and index range (`geometry.userData.bpPrimitiveRanges`). `edges.js` computes hard edges, tile caps (`isExposedTileCap`) and grout centrelines per face from those ranges, so the strokes are exactly the ones drawn before (101,221 segments on `ground_floor` before and after), now in one fat-line overlay per element instead of one per face.

**Guards.**

- `doors.js`: a door, drawer or cabinet node whose faces merged into one mesh still moves as one host. Before the merge it had many meshes and was never split; `splitDisconnectedMesh` would otherwise have split a front from its handle.
- Operable windows (`windows.json` with a pane that opens) keep one mesh per face: `windows.js` sorts meshes into panes by their centre, so a node spanning two panes would slide whole. Today every pane is its own node, so this only guards future models (~70 extra draws).

**Phones draw at 1.5× instead of 2×** (coarse pointer and a short screen side ≤ 500 CSS px; `viewerPixelRatio` in `main.js`). An iPhone at 2× is 780×1688 px with 4× MSAA: ~47 MB of colour and depth. At 1.5× it is 585×1266, ~27 MB. Tablets and desktops keep 2×. Lines and text in the canvas are slightly softer on a phone.

**Depth-peel memory is released when nothing is see-through.** The still-frame peel (any part between 0 % and 100 %) allocates full-size float targets (~88 bytes a pixel, ~116 MB on an iPhone at 2×) and world-space batches of the scene. They used to stay allocated until the page closed; now they are freed on the first frame with nothing faded and rebuilt when something fades again.

Already in place and unchanged: Realistic on phones caps textures at 1K, anisotropy at 4, the sun shadow map at 1024² and skips transmission (`realistic.js`, `qualityBudget`); the shadow map only re-renders when the scene changes. Not changed: a layer that was shown and then hidden keeps its GPU buffers (three.js uploads on first draw and frees only on dispose); with ~6 MB of geometry in total that is not worth the re-upload stutter.

## Numbers

Headless Chrome on the box (SwiftShader, no GPU; WebKit is not available), `ground_floor`, Gridfinity off. iPhone = 390×844 CSS px at 3×, touch, 4× CPU throttle. Desktop = 1440×900 at 2×. Draws per frame and CPU frame time are measured while orbiting; heap after a forced GC. SwiftShader rasterises on the CPU, so frames per second mostly measure fill rate and are not meaningful; the CPU frame time (`frameStats.renderMs`, the JS + WebGL submit cost) is the number that tracks a real device.

| | before (main 0d72c89) | after |
| --- | ---: | ---: |
| meshes in the scene (incl. edge overlays) | 17,789 | 2,760 |
| WebGL buffers | 75,170 | 11,682 |
| edge overlays / segments | 8,552 / 101,221 | 1,306 / 101,221 |
| **Desktop Shaded** draws per frame | 15,032 | 2,388 |
| Desktop Shaded CPU frame | 1,104 ms | 24 ms |
| Desktop Shaded JS heap | 109 MB | 31 MB |
| Desktop Realistic CPU frame | 14.6 ms | 7.6 ms |
| Desktop Realistic JS heap | 53 MB | 23 MB |
| Desktop load (to model shown) | 1.1 s | 0.9 s |
| **iPhone Shaded** draws per frame | 14,725 | 2,303 |
| iPhone Shaded CPU frame | 1,231 ms | 110 ms |
| iPhone Shaded JS heap | 109 MB | 31 MB |
| iPhone Realistic CPU frame | 34 ms | 12.9 ms |
| iPhone Realistic JS heap | 53 MB | 23 MB |
| iPhone load | 7.2 s | 4.7 s |
| iPhone drawing buffer (pixel ratio) | 2 (780×1688) | 1.5 (585×1266) |
| geometry bytes on the GPU | 7.4 MB | 6.0 MB |

Realistic draws fewer meshes per moving frame than Shaded in both builds (no edge overlays), so its draw counts are not compared here. Textures are the same before and after (Realistic 12.6 MB on the iPhone budget, 58.7 MB on desktop).

**Gridfinity on** (`?gridfinity=1`), desktop Shaded: before 41,578 meshes, 34,021 draws, 1,743 ms CPU frame, 242 MB heap; after 2,796 meshes, 2,383 draws, 25 ms, 33 MB. On the iPhone profile after: 2,334 draws, 122 ms, 33 MB. With the merge the baseplates cost ~36 meshes, ~2 MB heap and ~4 MB of GPU geometry, plus the 8.1 MB download. Petr, 2026-11-20, after trying it: "wow, this is flying. - put back gridfinity baseplates - remove "only this room feature", not needed anymore with how fast this is." So the Gridfinity layer is now **on by default**: the viewer still keeps it in its own GLB (`ground_floor.gridfinity.glb`) and fetches it right after the main model, rather than fusing the plates back into `ground_floor.glb` with `GRIDFINITY_ON_DEMAND = False`. That keeps the first picture as fast as now, keeps the Parts toggle and `?gridfinity=0` (which then skips the download), and needs no re-export of the GLB. The room isolate ("Only this room", PR 132) is removed.

Screenshots of the same views before and after (Shaded, Realistic, living-kitchen, bathroom plan, pick, room isolate (since removed), walls at 40 % and 0 %, doors open, edit mode, walk, Gridfinity) were identical pixel for pixel on desktop. On the iPhone profile they differ only by the pixel ratio.

**Final build, baseplates on by default** (no URL flag, fresh storage; the numbers in the PR 133 report): desktop Shaded 2,796 meshes, 2,354 draws per frame, 17.5 ms CPU frame, 31 MB heap; iPhone profile Shaded 2,354 draws, 103 ms CPU frame (4× throttle), 31 MB heap, 1.5× pixel ratio.

`BlueprintsViewer.mergeStats` (meshes before and after the merge) and `BlueprintsViewer.rendererInfo` (three.js `renderer.info` and the pixel ratio) are there for these checks.

## Modeling rules and budget

Petr, 2026-11-20: "make sure perf doesn't deteriorate after Bob or other agents change or add furniture."

The merge happens at load, so a model needs no extra work to get one draw per element. What still costs on a phone, and what anyone adding or changing furniture or other elements should keep in mind:

- **Triangles per element.** Tessellation follows the CAD shape (`_stl_tolerance` in `export_utils.py`). Fillets, small chamfers, thread, knurls, text and dense splines multiply triangles; model them only where they are visible at room scale. Today the heaviest element in `ground_floor.glb` has 900 triangles (the oak bookcase); keep a single element under 5,000.
- **CAD faces per element.** Each face is still a glTF primitive in the file (parse time, accessors, the per-face edge pass at load). The bookcase has 450 faces; keep one element under 1,000. Fuse solids that are one real part (`fuse()`), and do not split a flat panel into many faces.
- **Few, shared materials.** The merge makes one mesh per element **and material**, so an element with five materials draws five times. Use the shared palette materials and one material per element where the real object is one finish; do not give each face its own colour or a near-duplicate material.
- **No needless tiny elements.** Every element node is at least one draw, one edge overlay, a pick target and an IFC row. Screws, hinges, cable ties, feet that nobody needs to select: leave them out or fold them into their host. Real separate products (a fixture, a cabinet, a drawer front) stay separate elements.
- **Moving parts are their own nodes.** Doors, drawers and sliding panes move as one node (`doors.js`, `windows.js`). Keep each moving part its own element node; do not fuse a drawer front into the carcass, and keep each window pane its own node (operable windows skip the merge, see Guards).
- **Heavy repeated geometry goes in its own layer.** Gridfinity baseplates (11.8k faces) live in `ground_floor.gridfinity.glb`, an on-demand layer (`write_lazy_layers`), so the first picture does not wait for them and `?gridfinity=0` skips them. Do the same for any similar bulk detail (tiles as solids, slats, perforations, stacked items).
- **Textures.** Realistic textures come from `docs/materials` and are capped on phones (`qualityBudget` in `realistic.js`). Do not embed textures in the GLB.

**Automated budget.** `node scripts/model_budget.mjs` reads the exported GLBs' JSON and fails when `ground_floor.glb` or `ground_floor.gridfinity.glb` is over its limit. The `model-budget` workflow runs it on every pull request that changes those GLBs (Node only, it pulls only those two files from LFS). Run it after an export. Limits, about 1.5× today's numbers (2026-11-20):

| limit | `ground_floor.glb` today / max | `ground_floor.gridfinity.glb` today / max |
| --- | ---: | ---: |
| nodes | 1,231 / 1,900 | 19 / 40 |
| element meshes (mesh nodes) | 1,229 / 1,900 | 18 / 40 |
| draws after the merge (element × material) | 1,229 / 1,900 | 18 / 40 |
| CAD faces (glTF primitives) | 8,850 / 13,500 | 11,823 / 18,000 |
| triangles | 35,608 / 55,000 | 37,704 / 57,000 |
| materials | 25 / 40 | 1 / 4 |
| file size | 6.2 / 10 MB | 7.75 / 12 MB |
| triangles in the heaviest element | 900 / 5,000 | 2,476 / 5,000 |
| faces in the element with the most | 450 / 1,000 | 776 / 1,200 |

2026-11-20 d: the island's MERIVOBOX inner drawers brought the layer to 33 plates and over its face, triangle and size limits (21,723 faces, 69,276 triangles, 14.2 MB). The plates are now exported as one unfused compound of the floor and ribs each (same look, one material) instead of a fused solid: 5,166 faces, 10,332 triangles, 3.2 MB. No limit was raised. Nodes are 34 / 40.

When the check fails it names the element with the most triangles and the most faces. Simplify that first. Raise a limit only on purpose, in the same pull request as the model change, and say why in the pull request description (the house is finite; a real new room or kitchen run may need it).

## Not done (options if devices are still slow)

- Merge in the exporter instead of at load: a smaller GLB (35,400 accessors today) and less parsing on the phone. Needs a re-export of every model; the load-time merge makes it a pure file-size win.
- Batch edge overlays (one fat-line draw per opacity instead of one per element): about half of the remaining draws.
- Cross-element batching (`BatchedMesh` per material), see above.

## History: Gridfinity baseplates on demand (PR 127, 2026-11-19)

Petr, 2026-11-19 (Cody chat): "its now slow and crashing on iPad too. I think Bob adding more cabinates is what did it. As a temporary fix, can we hide the gridfinity baseplates? I think they are quite complex."

`ground_floor.glb` writes one glTF primitive (one three.js mesh, one draw) per CAD face. Each baseplate is a floor plus a rib on every grid line, so its 18 plates (9 drawers before PR 124, 18 after) were most of the model:

| `ground_floor.glb` | primitives | triangles | file |
| --- | ---: | ---: | ---: |
| before PR 124 (248016f) | 13,206 | 50,476 | |
| main after PR 124 (bb58c41) | 20,655 | 73,384 | 14.6 MB |
| of which baseplates | 11,823 (57 %) | 37,704 (51 %) | |
| baseplates on demand (this change) | 8,850 | 35,608 | 6.5 MB |

Headless Chrome (SwiftShader, `/workspace/perfbisect` harness on the box), draws per frame while orbiting and JS heap, before → after: Shaded 32.6k → 14.3k draws, heap 249 → 177 MB; Realistic 61.2k → 17.2k draws; iPhone viewport (390×844 @3x, 4× CPU throttle) Shaded 40.8k → 17.2k draws, heap 485 → 179 MB. The kitchen island renders pixel for pixel the same with the layer off (drawers shut).

What changed: the baseplates are no longer fused into their drawers in `ground_floor.glb`. `python -m blueprints.export ground_floor` writes them to `ground_floor.gridfinity.glb`, listed in `ground_floor.layers.json`. The viewer shows **Interior › Gridfinity baseplates** in Parts and hangs each plate on its drawer, so it slides, hides and highlights with it ([viewer README](../../src/blueprints/viewer/README.md) "On-demand layers"). PR 127 shipped this leaf off by default (`?gridfinity=1` opened with it on). Since 2026-11-20 it is **on by default** (see above); `?gridfinity=0` skips the download. The IFC (`ground_floor.ifc.json`, the drawer's `Pset_KitchenFront.Gridfinity`) is unchanged.

To fuse them back into the drawers: set `GRIDFINITY_ON_DEMAND = False` in `models/ground_floor.py` and export. The plates are fused into the drawers again and the layer files are removed.

Other heavy groups on main (bb58c41), primitives: bathroom grout 1,182 (5.7 %; 13 % once the plates are out), cabinet carcasses 870, cabinet drawers 852, lights 822, oak furniture 762 (the bookcase alone 450), outlets 708. None is a tenth of the baseplates' cost, so none is hidden.

## Bundle size and code splitting

2026-11-27 (Blueprints refactoring plan, items S5/S6, O2, O3).

**Built, not committed.** `npm run build` in `src/blueprints/viewer` runs `build.mjs`, which writes two bundles from the same sources. Neither is in git; CI builds them (`pages-content` before `build-preview-hub.py`, `viewer-js` for the budget, `tests` for the export tests), and so do `scripts/cloud-agent-install.sh` and, when it is missing, the offline HTML export.

- `dist/viewer.js` and `dist/chunks/*.js`: ES modules for the Pages site. `docs/viewer/index.html` loads the entry with `import()` next to the GLB fetch, so the two download in parallel. `preview_hub.ensure_viewer_shell` copies the build into `docs/viewer/` and stamps `./viewer.js?v=<hash of the entry and every chunk>`; chunk names carry esbuild's content hash, so they need no stamp.
- `viewer.iife.js`: one classic script with the same code (esbuild inlines the `import()` calls), embedded by the self-contained HTML export (`export_utils._viewer_iife`).

**Lazy chunks.** Features that the first picture does not need are loaded with `import()`:

| chunk | loads | size |
| --- | --- | ---: |
| edit mode (`editMode.js`, TransformControls, fixture and cable edits) | right after `mountViewer` (it also draws cable routes for the Parts leaf and `?cables=1`) | 82 KiB |
| walk (`walkMode.js`, `walkPhysics.js`, three-mesh-bvh) | right after `mountViewer`; a saved walk pose re-enters once it is in | 63 KiB |
| measure (`measure.js`) | right after `mountViewer` | 13 KiB |
| Realistic catalogue parser (`catalogueYaml.js`, js-yaml) | when Realistic is first chosen | 43 KiB |
| AR export (`USDZExporter`, fflate) | on the first AR tap | 25 KiB |

`editMode`, `walk` and `measureTool` in `main.js` were already nullable everywhere, so until a chunk arrives its button does nothing. `BlueprintsViewer.edit` and `BlueprintsViewer.walk` are getters (null until loaded) and `BlueprintsViewer.featuresReady` resolves when the three start-up chunks are in, for headless checks. The person-height helpers and `yawPitchOf` that the entry needs moved to `walkBasics.js`; `walkPhysics.js` and `walkMode.js` re-export them. Not split: the IFC inspector (14 KiB, mounted at start-up) and Drawing (2 KiB).

| JS (minified) | before (one IIFE) | after |
| --- | ---: | ---: |
| loaded before the first picture | 1,163 KiB (335 KiB gzip) | 936 KiB (262 KiB gzip) |
| total | 1,163 KiB | 1,162 KiB (338 KiB gzip) |

three.js itself is 581 KiB of the 936. Headless Chrome, iPhone profile (390×844 at 3×, 4× CPU throttle, 9 Mbit/s, uncompressed local server, Home off): time to the model shown 12.84 → 12.48 s (median of 3; most of it is the 7.3 MB GLB download), JS heap 125 → 117 MB. Every view, Realistic, walk (and walk restored after a reload), edit mode, measure and AR export behave as before; screenshots of Shaded and Realistic match pixel for pixel outside the top bar.

**Budget.** `node scripts/bundle_budget.mjs` (after `npm run build -- --meta`) reads esbuild's metafile and fails when the start-up JS (the entry and every chunk it imports statically) or all JS together is over its limit, raw and gzipped. Limits, about 1.15× today: start-up 1,100 KiB / 300 KiB gzip, total 1,350 KiB / 390 KiB gzip. `viewer-js` runs it on every pull request that touches the viewer. A new heavy feature should usually be another lazy chunk (`loadFeature` in `main.js`) rather than a raised limit.

## GLB compression: measured, not adopted (2026-11-27)

Item O1 of the refactoring plan was meshopt compression (`EXT_meshopt_compression`) with quantization for `ground_floor.glb` and `ground_floor.gridfinity.glb`. Measured on main (2b58d83) and left out:

- GitHub Pages already serves the GLBs gzipped: `ground_floor.glb` is 7.3 MB on disk and 515 KB over the wire.
- Two thirds of the file is the JSON chunk (4.8 MB, 37,324 accessors: four per CAD face). Meshopt compresses only the binary chunk (2.5 MB, which gzip already takes to 179 KB).
- Encoding the four existing buffer views in place (nodes, meshes, primitives, accessors and materials untouched): lossless 7.33 → 5.99 MB on disk but 499 → 541 KB gzipped; with lossy exponential filters (positions 20 bits, normals 10, UVs 14) 5.57 MB on disk, 483 KB gzipped (−3 %). Gridfinity layer: 160 → 142–146 KB gzipped.
- gltf-transform's `quantize`/`meshopt` path deduplicates accessors (37,324 → 8,166), so identical primitives would share one geometry in three.js, and position quantization moves node transforms and stores normalized int16 positions that `edges.js` and `mergePrimitives.js` read raw. Both break the per-element features above.

So the download would shrink by at most a few per cent while every load pays a WASM decode. The cost to attack is the JSON (accessor count): merge faces per element in the exporter (see "Not done" above), keeping `bpPrimitiveRanges` for the edge pass.


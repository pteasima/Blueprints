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

`BlueprintsViewer.mergeStats` (meshes before and after the merge) and `BlueprintsViewer.rendererInfo` (three.js `renderer.info` and the pixel ratio) are there for these checks.

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

What changed: the baseplates are no longer fused into their drawers in `ground_floor.glb`. `python -m blueprints.export ground_floor` writes them to `ground_floor.gridfinity.glb`, listed in `ground_floor.layers.json`. The viewer shows **Interior › Gridfinity baseplates** in Parts, off by default; switching it on fetches that GLB once and hangs each plate on its drawer, so it slides, hides and highlights with it ([viewer README](../../src/blueprints/viewer/README.md) "On-demand layers"). `?gridfinity=1` opens with it on. The IFC (`ground_floor.ifc.json`, the drawer's `Pset_KitchenFront.Gridfinity`) is unchanged.

To fuse them back into the drawers: set `GRIDFINITY_ON_DEMAND = False` in `models/ground_floor.py` and export. The plates are fused into the drawers again and the layer files are removed.

Since 2026-11-20 the layer is on by default (above).

Other heavy groups on main (bb58c41), primitives: bathroom grout 1,182 (5.7 %; 13 % once the plates are out), cabinet carcasses 870, cabinet drawers 852, lights 822, oak furniture 762 (the bookcase alone 450), outlets 708. None is a tenth of the baseplates' cost, so none is hidden.

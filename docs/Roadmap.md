# Roadmap

Petr's long-term plans for this repo. Source: Petr, 2026-11-19 (Cody chat, review of PR 126): "list my long term plans in documentation: merge visibility layers with ifc groups, merge edit mode with ifc inspector, remove unused scenes and features, remove unused models, refactor and cleanup codebase".

None of these is scheduled. When one starts, link its PR here and move it to Done when it merges.

1. **Merge the visibility layers with the IFC groups.** The viewer's layer sliders (part groups such as Electrical › switch, sensor, outlet, actuator, cables) and the IFC inspector's groups become one tree. Started 2026-11-19 with remembered visibility, the Enclosure group and generic locks ([viewer/VisibilityState.md](viewer/VisibilityState.md)) and the room isolate ([viewer/RoomIsolate.md](viewer/RoomIsolate.md)); the combined two-axis panel is not scheduled.
2. **Merge edit mode with the IFC inspector.** One panel to inspect, select and edit an element ([electrical/EditMode.md](electrical/EditMode.md), [electrical/CableRoutes.md](electrical/CableRoutes.md)).
3. **Remove unused scenes and features** from the viewer and the model modules. Partly done: the ground floor keeps one scene per detailed room ([PR 129](https://github.com/pteasima/Blueprints/pull/129), [design/ground-floor.md](design/ground-floor.md#scenes)). The standalone models' scenes and unused viewer features remain.
4. **Remove unused models** (`models/`, `docs/models/`, the hub).
5. **Refactor and clean up the codebase.**

## Temporary: performance

### Gridfinity baseplates load on demand (2026-11-19)

Petr, 2026-11-19 (Cody chat): "its now slow and crashing on iPad too. I think Bob adding more cabinates is what did it. As a temporary fix, can we hide the gridfinity baseplates? I think they are quite complex."

`ground_floor.glb` writes one glTF primitive (one three.js mesh, one draw) per CAD face. Each baseplate is a floor plus a rib on every grid line, so its 18 plates (9 drawers before PR 124, 18 after) were most of the model:

| `ground_floor.glb` | primitives | triangles | file |
| --- | ---: | ---: | ---: |
| before PR 124 (248016f) | 13,206 | 50,476 | |
| main after PR 124 (bb58c41) | 20,655 | 73,384 | 14.6 MB |
| of which baseplates | 11,823 (57 %) | 37,704 (51 %) | |
| baseplates on demand (this change) | 8,850 | 35,608 | 6.5 MB |

Headless Chrome (SwiftShader, `/workspace/perfbisect` harness on the box), draws per frame while orbiting and JS heap, before → after: Shaded 32.6k → 14.3k draws, heap 249 → 177 MB; Realistic 61.2k → 17.2k draws; iPhone viewport (390×844 @3x, 4× CPU throttle) Shaded 40.8k → 17.2k draws, heap 485 → 179 MB. The kitchen island renders pixel for pixel the same with the layer off (drawers shut).

What changed: the baseplates are no longer fused into their drawers in `ground_floor.glb`. `python -m blueprints.export ground_floor` writes them to `ground_floor.gridfinity.glb`, listed in `ground_floor.layers.json`. The viewer shows **Interior › Gridfinity baseplates** in Parts, off by default; switching it on fetches that GLB once and hangs each plate on its drawer, so it slides, hides and highlights with it (viewer README "On-demand layers"). `?gridfinity=1` opens with it on. The IFC (`ground_floor.ifc.json`, the drawer's `Pset_KitchenFront.Gridfinity`) is unchanged.

Undo when primitives merge per mesh (one draw per element and material, not per face): set `GRIDFINITY_ON_DEMAND = False` in `models/ground_floor.py` and export. The plates are fused into the drawers again and the layer files are removed.

Other heavy groups on main (bb58c41), primitives: bathroom grout 1,182 (5.7 %; 13 % once the plates are out), cabinet carcasses 870, cabinet drawers 852, lights 822, oak furniture 762 (the bookcase alone 450), outlets 708. None is a tenth of the baseplates' cost, so none is hidden.

## Done

Nothing yet.

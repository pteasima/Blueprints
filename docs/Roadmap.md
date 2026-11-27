# Roadmap

Petr's long-term plans for this repo. Source: Petr, 2026-11-19 (Cody chat, review of PR 126): "list my long term plans in documentation: merge visibility layers with ifc groups, merge edit mode with ifc inspector, remove unused scenes and features, remove unused models, refactor and cleanup codebase".

None of these is scheduled. When one starts, link its PR here and move it to Done when it merges.

1. **Merge the visibility layers with the IFC groups.** The viewer's layer sliders (part groups such as Electrical › switch, sensor, outlet, actuator, cables) and the IFC inspector's groups become one tree. Started 2026-11-19 with remembered visibility, the Enclosure group and generic locks ([viewer/VisibilityState.md](viewer/VisibilityState.md)); the combined two-axis panel is not scheduled.
2. **Merge edit mode with the IFC inspector.** One panel to inspect, select and edit an element ([electrical/EditMode.md](electrical/EditMode.md), [electrical/CableRoutes.md](electrical/CableRoutes.md)).
3. **Remove unused scenes and features** from the viewer and the model modules. Partly done: the ground floor keeps one scene per detailed room ([PR 129](https://github.com/pteasima/Blueprints/pull/129), [design/ground-floor.md](design/ground-floor.md#scenes)); the room isolate is gone ([PR 133](https://github.com/pteasima/Blueprints/pull/133)). The standalone models' scenes and unused viewer features remain.
4. **Remove unused models** (`models/`, `docs/models/`, the hub).
5. **Refactor and clean up the codebase.** Started 2026-11-27 ([PR 172](https://github.com/pteasima/Blueprints/pull/172)): export CLI collapsed, shared IFC helpers extracted, stale docs trimmed. The approved test-suite plan and a non-blocking pytest lane on pull requests and `main` are in [TestSuitePlan.md](TestSuitePlan.md) and [PR 175](https://github.com/pteasima/Blueprints/pull/175).

## Done

- **Performance: one draw per element** ([PR 133](https://github.com/pteasima/Blueprints/pull/133), 2026-11-20). The viewer merges each element's per-face glTF primitives at load, the Gridfinity baseplates are back on by default (still their own GLB, fetched right after the model), and the room isolate ("Only this room", PR 132) is removed. A `model-budget` CI check (`scripts/model_budget.mjs`) and modeling rules keep the ground-floor GLB from growing back. Petr: "wow, this is flying. - put back gridfinity baseplates - remove "only this room feature", not needed anymore with how fast this is." Details and numbers: [viewer/Performance.md](viewer/Performance.md), which also keeps the history of the temporary Gridfinity fix (PR 127).

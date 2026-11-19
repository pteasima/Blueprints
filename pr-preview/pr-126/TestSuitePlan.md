# Test suite improvement plan

Status: planned, not started. Pick this up when CI is re-enabled or when tests next need work. Source: a read-only review of the suite on `main` at `85d5cd0` (2026-11-11), requested by Petr: "I wanna make sure these are bringing actual value, by testing actual logic. Not just checking measurements that then need to be updated on every model change." Petr approved this plan the same day. Line numbers below refer to `85d5cd0` and will drift.

## Goal

Tests should check logic and invariants that would catch a real mistake. They shouldn't restate numbers that already live in the YAML or the model parameters, because then every design edit means editing two files while the test catches nothing new.

## What the suite looked like (2026-11-11)

- 17 Python test files, about 5,300 lines and 126 tests (`test_obyvak.py` alone is 1,746 lines), plus 10 viewer `*.test.mjs` files of about 2,000 lines.
- CI test step took 13 to 22 minutes (18 min 51 s on the last `main` run). About 16 tests in `test_obyvak.py`, plus the USDZ and skladba tests, each call `build()` from scratch, at 78 to 334 s each locally. That is about 95% of the runtime.
- Only `ifcInspector.test.mjs` runs in CI (through `test_ifc_index.py`). The other 9 JS tests run nowhere, and `layerDepthBias.test.mjs` is already broken: it imports `EDGE_FRAG_DEPTH_BIAS`, which `edges.js` no longer exports.
- IFC schema validation and the YAML to IFC to YAML round trip run only for `furnishings.yaml` and `bedroom-1.11.yaml`. `ground-floor.yaml`, the main house file, gets neither.
- Roughly a third of the tests check real logic and should stay. Roughly half of all assertions are change detectors.

## Keep (genuine logic and invariants)

- `test_ground_floor.py`: hinge-sign truth table, pivot on a turned wall with synthetic input, zero overlap at butt/T corners driven by the YAML connections.
- `test_furnishings.py`: RefDirection rotation on a synthetic document, rejecting USERDEFINED without ObjectType, converter plus IFC validation plus round trip on a test document.
- `test_obyvak.py`: no interpenetration between parts, every 2D drawing face lies inside a 3D solid with the same label, soffit parts clear of furniture.
- `test_bedroom_111_plan.py` (unique IDs, every device on the plan, placement rules by wall side) and `test_bedroom_111.py` (pairwise no overlap plus IFC round trip).
- Acoustics, panel-cavity and room-wave physics checked against published or closed-form results, limit cases, bounds and monotonicity.
- Pure-function tests in `test_ifc_index.py` and `test_merge_pages_site.py`.

## Plan, most valuable first

1. **Build each model once per test session.** Add a `conftest.py` with session-scoped fixtures (e.g. `obyvak_model = build(ObyvakParams())`) shared by all tests that need the model. Expected: CI drops from about 19 minutes to a few. Mark the export and study tests (USDZ, STEP/STL, `run_study`) `@pytest.mark.slow` and optionally run them only on `main`.
2. **Run every viewer JS test in CI**, e.g. switch to `node --test` or loop over `*.test.mjs` in the workflow. Fix or delete `layerDepthBias.test.mjs`. Partly done 2026-11-12: the `viewer-js` workflow loops over `*.test.mjs` and skips only `layerDepthBias.test.mjs`, which still needs fixing or deleting.
3. **Derive expectations from the source of truth instead of copying numbers.**
   - `test_furnishings.py`: delete the hard-coded kitchen table (22 IDs with origin, size and hinge) and the second table of world-mm boxes, and use the existing `_world_box(record)` comparison for every record. The same goes for the hard-coded sofa, TV and table coordinates.
   - `test_ground_floor.py`: compare derived counts with `len(doc["walls"])` etc. instead of `67`, `50`, `24`, `55`, and drop the literal bathroom head height and the exact sliding-door ID set.
   - `test_obyvak.py`, `test_bathroom_*.py`, `test_bedroom_111.py`: delete parameter-equals-literal checks and room constants copied from the YAML.
   - A number that records a real decision (for example the 875 mm rafter spacing from sheet E_KROK, or the shallow trap on the two-door gable) gets one assertion in a single small "design decisions" test, with its source cited in line with `docs/design/`. Bob decides which numbers are real decisions.
4. **Add relational invariants that run over every YAML record**, so new fixtures and furniture are covered automatically:
   - every furnishing lies inside its `ContainedInStructure` space and outside walls and piers;
   - no overlap between furnishings, or between furnishings and walls, except for one explicit allowlist;
   - cabinet heights come from one parameter (e.g. all base cabinet tops equal);
   - every hinged door's swing (from `door_motions`) is clear of other solids, including neighbouring cabinet doors;
   - clearances are at least the documented minimums.
   Overlap helpers must raise on a boolean-operation error. Today they swallow it (`except Exception: continue`, `test_obyvak.py:663` and `:1443`), so a failed OCC boolean counts as "no overlap" and the invariant passes silently.
5. **Validate and round-trip every input YAML.** One parametrized test over `inputs/ground_floor/*.yaml`: load, unique IDs, references resolve (`VoidsElement`, `ContainedInStructure`, connections), `write_ifc`, `validation_errors == []`, round trip.
6. **Remove or shrink copy, doc and snapshot tests.** Delete the checks that grep AGENTS.md or YAML text (`test_export_artifacts.py:253`, `test_bedroom_111_plan.py:78–108`). Shrink the scene and callout tests (`test_obyvak.py:720–1127`) to structural checks: scenes reference existing labels, callouts don't cross, the camera frames its target. Drop exact strings, opacity values and float literals to 15 digits.
7. **Split the large tests and share helpers.** Break up the multi-hundred-line functions in `test_obyvak.py` (around `:443` and `:1144`) into one invariant per test, and move the overlap and interior-probe helpers (copied in at least four places) into one shared test module. Use tolerances instead of exact float equality on geometry.

## Open questions

- The golden-file checks (`ground_floor.doors.json`, the published bedroom SVG) are fine if regenerating is one documented command. No such command was found; document or add one.
- The vendored `yaml-ifc` has no tests of its own. Step 5 covers it indirectly.

# Model portability

As of `72ee6fbbed09d27d99161aba3f7abf01e895d7d4` (`Plain model hub and current dependency pins`, #90), on 2026-11-07.

Read this before planning a split, a cleanup, or a move. Three kinds of statement are marked below. Do not treat them as the same thing.

- **Finding.** What the tree does at that commit. Recheck against `HEAD` before relying on it. Other work lands while this sits.
- **Intent.** What Petr said on 2026-11-07. Not a scheduled task.
- **Optional.** A suggested guardrail or check from the audit. Not approved. Do not start it because this file exists.

No move, refactor, or removal is approved. Fixture and furniture work continues in this repo.

## Intent

Petr, 2026-11-07, via Nerd:

- Keep improving fixtures and furniture in Blueprints. Few extra interactive features are needed now.
- Home comes later, as its own repo, with a much simpler 3D viewer and different operational and lifecycle concerns. This viewer is not the Home viewer. Home does not need this viewer kept.
- An agent may do a **one-time** manual move of the authoritative model and IFC spec into Home, if that move stays simple.
- He expects substantial cleanup, refactoring, and removal of Blueprints behaviour that Home will not use, **before** the two repos interact. Scope and timing are undecided. Parts of that cleanup might start soon. None of it is approved yet.
- Furniture and the smart-home work share **one** authoritative house model. After the move, edit that copy. Do not keep two editable copies, and do not set up a permanent sync.
- A modular monorepo, a published shared package, and ongoing cross-repo sync were discussed and are **not** the plan.

## Finding: the model is already on one side of the line

The solids and the IFC spec do not import the viewer. The viewer does not import Python. What blocks a folder copy is a handful of imports and repo-relative paths, not geometry written in JavaScript.

### Authoritative sources (move together)

| What | Path |
| --- | --- |
| CAD / layout | `models/*.py` (15 modules). Not an installed package. See below. |
| Live IFC inputs | `inputs/ground_floor/ground-floor.yaml`, `inputs/ground_floor/furnishings.yaml`, `inputs/ground_floor/bathroom-1.07.yaml`, `inputs/ground_floor/bathroom-1.20.yaml`, `inputs/ground_floor/bedroom-1.11.yaml` |
| IFC exporter | `vendor/yaml-ifc/` — vendored [pteasima/yaml-ifc](https://github.com/pteasima/yaml-ifc) at `0f96c26`. Upstream is private. Do not edit the package in place. See [vendor/yaml-ifc/README.md](../vendor/yaml-ifc/README.md). |
| Design facts the model cites | [docs/design/](design/README.md): `obyvak.md`, `furnishings.md`, `ground-floor.md`, `bathrooms.md`. `acoustics.md` belongs with the wave study if that study stays here. |
| Geometry tests | `tests/test_ground_floor.py`, `tests/test_furnishings.py`, `tests/test_bathroom_107.py`, `tests/test_bathroom_120.py`, `tests/test_bedroom_111.py`, `tests/test_bedroom_111_plan.py`, `tests/test_obyvak.py`, `tests/test_obyvak_section.py`, `tests/test_obyvak_elevation.py`. Some of these also call the exporter; those assertions are export checks. |

`models/` imports its neighbours by bare name (`from bathroom_120 import …`, `from obyvak_geom import …`). `src/blueprints/__main__.py` `_ensure_models_on_path` inserts `<repo>/models` on `sys.path`. Tests do the same. `pyproject.toml` installs only `src` and `vendor/yaml-ifc`:

```toml
[tool.setuptools.packages.find]
where = ["src", "vendor/yaml-ifc"]
```

Checked on this commit: with the repo root and `models/` removed from `sys.path`, `import ground_floor` and `import models` raise `ModuleNotFoundError`. `import yaml_ifc` still loads `vendor/yaml-ifc/yaml_ifc/__init__.py`.

Model files take the repo root as `Path(__file__).parents[1]` (`models/ground_floor.py` `SOURCE_PATH`, and the same pattern in the bathroom and bedroom modules). That stays valid only while `models/` and `inputs/` stay siblings of the repo root. `models/bedroom_111_plan.py` also writes `docs/electrical/1.11.html` and `docs/previews/bedroom-1.11/plan.svg`. Those output paths move or get retargeted with the model.

`inputs/obyvak/make_*.py` are the old sheet generators. Nothing under `models/` imports them. They are provenance, not the live model.

Local IFC extension that has to travel with the vendor tree: a wall `TileLayout.CourseZMin` (metres) is the shared course datum when one room has two floor planes. Room 1.07 uses it. A future pin of `yaml_ifc/` has to keep that field. Source: [vendor/yaml-ifc/README.md](../vendor/yaml-ifc/README.md). #90 did not bump the vendor tree.

### Stays in Blueprints

- `src/blueprints/viewer/`, `docs/viewer/`, `src/blueprints/preview_hub.py`, `src/blueprints/pages_site.py`, `.github/workflows/pages-content.yml`, `.github/workflows/pages.yml`
- Generated site inputs: `docs/models/*.glb`, `*.usdz` (Git LFS), `*.scenes.json`, `*.parts.json`, `*.doors.json`, `docs/models/manifest.json`. `docs/index.html` is generated and gitignored.
- `src/blueprints/acoustics/`, after it is pointed at the one `obyvak_geom` (below). Do not fork the shell dimensions.
- `src/blueprints/export_utils.py` is mixed. `write_glb` is build123d `export_gltf` with `unit=Unit.MM`. `write_gltf_html_viewer` and `publish_to_preview_site` are this repo's viewer and Pages hub. Home needs a mesh write if it wants a GLB. It does not need the HTML shell or the hub.

`pages-content` watches `docs/**`, `src/blueprints/viewer/**`, `preview_hub.py`, and the pages scripts. It does not watch `models/`. A model change reaches the site only after export rewrites `docs/models/`.

### Coupling: model → export stack

These modules import Blueprints at load time:

| Module | Imports |
| --- | --- |
| `models/ground_floor.py` | `blueprints.export_utils.SECTION_LAYERS`, `blueprints.scenes.cad_mm_to_gltf_m` |
| `models/bathroom_120.py` | same pair |
| `models/bedroom_111.py` | same pair |
| `models/bathroom_107.py` | `blueprints.export_utils.export_shape` (used from `__main__`), `blueprints.scenes.cad_mm_to_gltf_m` |

`src/blueprints/export_utils.py` line 28 imports `publish_to_preview_site` from `preview_hub`. So `import ground_floor` loads the Pages hub module. It does not load the viewer script. `scenes.py` imports only the standard library.

Checked by import on this commit: loading `ground_floor` pulled `blueprints.export_utils` and `blueprints.preview_hub` and nothing else under `blueprints`.

Lazy imports, not at module load:

- `models/obyvak.py` `_layer_color` imports `SECTION_LAYERS`. `build()` needs it. `scenes()` imports `cad_mm_to_gltf_m`.
- `models/obyvak_detail.py`, `obyvak_section.py`, `obyvak_elevation.py`, `hello_world.py`, and `ground_floor.py`'s `__main__` import `export_shape` / `export_section` / `_write_png` only when that block runs.
- `models/obyvak_geom.py` and `models/living_geometry.py` import neither `blueprints` nor `yaml_ifc`. `living_geometry.py` is the furniture detail builder (table, chairs, bookshelf) and imports only build123d. New fixture solids belong in that pattern: YAML for size and placement, a builder that fills the extrusion.

`SECTION_LAYERS` in `export_utils.py` is the SVG/USD colour table, keyed by the solid's `label`. The comment there says to keep `SOLID_COLORS` in `src/blueprints/viewer/materials.js` in sync. They have already drifted: `oak`, `upholstery`, and `switch` are in `SECTION_LAYERS` and absent from `SOLID_COLORS` and from `src/blueprints/viewer/i18n.js`. The viewer still draws the mesh. `colorForLabel` uses grey `[160, 160, 160]` when a key is missing. `t()` returns the raw id.

Coordinate helper, both sides, same map `(x, y, z)` CAD millimetres → `(x, z, −y)` glTF metres:

- `blueprints.scenes.cad_mm_to_gltf_m` — models call this when they write camera positions.
- `cadMmToGltf` in `src/blueprints/viewer/annotations.js` — the viewer applies it to annotation anchors, which stay in CAD millimetres.

Checked: `cad_mm_to_gltf_m((1000, 2000, 3000))` is `[1.0, 3.0, -2.0]`.

### Coupling: viewer → files, not Python

`docs/viewer/index.html` fetches `../models/<id>.glb` plus `<id>.scenes.json`, `.parts.json`, and `.doors.json`. A missing JSON file becomes `[]`. `mountViewer` in `src/blueprints/viewer/main.js` groups meshes by GLB node name. Those names are the CAD labels (`main.js` strips a trailing `_<digits>` that OCCT adds).

Interaction records are sidecars, not glTF extras.

- `scenes()` on the model writes camera, cuts, opacity, and drawing notes to `docs/models/<id>.scenes.json` via `blueprints.scenes.write_scenes_json`.
- `part_groups()` writes the outline to `<id>.parts.json`.
- `ground_floor._door_motion` writes hinge, axis, and sign to `<id>.doors.json`. `hinge_rotation_sign` decides the sign. Checked: `("start", 1)` is `1`, `("end", 1)` is `-1`. Kind `sliding` is recorded and not animated.
- The offline HTML template in `write_gltf_html_viewer` embeds scenes and part groups and does **not** pass `doors`. The Pages viewer is the loader that fetches `.doors.json`.

Playback that is only in the viewer, and is not a second floor plan:

- `doors.js` `DOOR_SWING_RAD` is 90°. `DOOR_MATCH_M` is 0.03 m: a leaf is matched to a record by centre, not by name.
- `edges.js` classifies grout versus tile using the 8.5 mm tile. The thickness itself is in the bathroom YAML and `TILE_THICKNESS_MM` in `models/bathroom_120.py`.
- Clip and depth-bias comments cite this export's tessellation and the 1 mm face gap (`FACE_GAP` in `models/obyvak.py`). That is viewer robustness.

A simpler viewer can load the GLB and ignore the JSON. Hinge, swing sign, and part labels are model data. The 90° animation is viewer policy.

### Reverse dependency: acoustics

`src/blueprints/acoustics/obyvak.py` `_models`, and `roomwave/geometry.py` `load_shape`, and `roomwave/boundaries.py`, insert `<repo>/models` on `sys.path` and import `obyvak_geom`. The acoustic shell is measured from `ObyvakParams` / `build_layout`.

The furniture boxes in `roomwave/geometry.py` are a separate wave-study layout. They are not the furnishing model. [docs/design/README.md](design/README.md) records that the kitchen file, the living-room run, and those boxes disagree. Do not copy the study boxes into `furnishings.yaml` or `living_geometry.py` to make one file. After a move, acoustics should import the one `obyvak_geom`. It should not grow its own copy of the shell.

### Dependencies

From `pyproject.toml` at this commit. #90 raised the floors. The vendor tree stayed at `0f96c26`.

| Needed to import and build the model | Also in the same `dependencies` list |
| --- | --- |
| `build123d>=0.13.0`, `ifcopenshell==0.9.0.post1`, `shapely==2.2.0`, `PyYAML>=6.0.3` | `usd-core` and `cairosvg` (USDZ, SVG/PNG), `openpyxl` (BOM workbooks), `gmsh` and `matplotlib` (acoustics) |

The pyproject comment says ifcopenshell now tracks the current wheel, and the test suite is the check against the vendored copy. The earlier pin note (`0.8.5` is what `0f96c26` was tested against) is no longer in `pyproject.toml`. `.github/workflows/tests.yml` installs `pip install -e ".[dev]"` on Python 3.12; its comment names `ifcopenshell==0.9.0.post1`.

`src/blueprints/viewer/package.json` is a separate Node package (`three`, `esbuild`). Python export does not run it. `viewer.iife.js` is committed. #90 rebuilt that bundle and simplified the hub CSS in `preview_hub.py`. That did not change the JSON loader or the model imports.

### Generated artifacts

`exports/` and the GLB/USDZ/JSON under `docs/models/` are outputs. Regenerate them from the model. Do not treat a committed GLB as the source to move. `docs/index.html` is produced by `scripts/build-preview-hub.py` and is gitignored.

## Optional (not approved)

These would make a later move a path edit rather than an import untangle. They are not required to keep adding fixtures here.

- Stop importing `export_utils` from model modules. It pulls `preview_hub`. Keep `SECTION_LAYERS` and `cad_mm_to_gltf_m` in a module that does not import the hub. `hello_world.py` already imports `export_shape` only inside `__main__`. `bathroom_107.py` imports it at module level; do not copy that for new code.
- New part labels can stay strings on the solid. The viewer already falls back to the raw id and grey. Putting a display name only in `i18n.js` is presentation.
- Hinge and swing stay in `_door_motion`. Do not special-case a leaf in `doors.js`.
- Do not copy furniture coordinates into `roomwave/geometry.py`.

None of that is a mandate. A cleanup that removes viewer behaviour this repo no longer wants is the later, still-unapproved pass Petr described. Do not widen it into a framework, a shared package, or a sync job.

## Proposed checks (not approved)

Use these when a portability refactor actually starts. They are the bar for "the model still is the model, and it no longer needs the viewer to build."

1. Import the ground-floor stack (`ground_floor`, `yaml_ifc`, `obyvak_geom`, `living_geometry`) without importing `blueprints.preview_hub` or anything under `src/blueprints/viewer/`.
2. `build()` returns the same labels and the same measured geometry the current tests assert, without calling `export_shape` or `publish_to_preview_site`.
3. The geometry tests listed above pass.
4. A mesh file written with build123d `export_gltf` (`unit=Unit.MM`, as `write_glb` does) is enough for a consumer that only loads a GLB. Scenes, parts, and doors JSON stay optional.
5. Recheck this file against `HEAD` first. Confirm the import lines, `parents[1]` paths, the `0f96c26` vendor pin, `CourseZMin`, and the acoustics `obyvak_geom` imports. #90 already moved dependency pins and the viewer bundle after the first pass over the import graph.

## What was checked, and what was not

On `239fc0f` (the parent of #90) and again on this commit:

- AST import scan of `models/*.py`.
- `vendor/yaml-ifc/**/*.py` contains no `blueprints`, `viewer`, or `models` references.
- Live import of `yaml_ifc`, `blueprints.scenes`, `ground_floor`, `obyvak_geom`, `living_geometry`.
- `cad_mm_to_gltf_m((1000, 2000, 3000)) == [1.0, 3.0, -2.0]`.
- `hinge_rotation_sign("start", 1) == 1` and `("end", 1) == -1`.
- Negative import with the repo and `models/` off `sys.path`.

The re-import on this commit used the already-installed environment: ifcopenshell **0.8.5**, shapely 2.2.0, build123d 0.13.0. It did **not** install `ifcopenshell==0.9.0.post1` from the new pin. `ground_floor` still loaded only `export_utils` and `preview_hub` from `blueprints` (about 2 s, warm process).

Not run: `pytest`, GLB/STEP/USDZ export, a Pages build, or any browser check. #90's viewer bundle and hub CSS were not re-tested here; the source lines this file cites in `docs/viewer/index.html`, `doors.js`, `materials.js`, and `i18n.js` were re-read after that commit.

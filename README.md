# Blueprints

Parametric 2D/3D house and furniture models in Python, using [build123d](https://github.com/gumyr/build123d) (Open CASCADE). Parameters drive the solids; 2D drawings and other exports are cut or computed from that model.

Process for agents and contributors is in [AGENTS.md](AGENTS.md). Review geometry on the live [GitHub Pages hub](https://pteasima.github.io/Blueprints/) (see [docs/Pages.md](docs/Pages.md)); images in chat are optional follow-up, not the review path.

## Why build123d (vs plain ezdxf)

| Approach | Strength |
| --- | --- |
| **ezdxf alone** | Direct DXF drawing; easy for one-off 2D lines, but dimensions are often hard-coded and edits scatter across drawing commands. |
| **build123d** | Parameters drive solids and sketches; regenerate 3D + 2D exports from one source of truth. Better for “what if we move this beam 200 mm?” |

ezdxf remains available (it is a build123d dependency) for importing legacy DXF and for DXF export when needed.

## Quick start

```bash
bash scripts/cloud-agent-install.sh
source .venv/bin/activate

# Hello-world parametric box → exports/hello_world/
python -m blueprints.export hello_world
```

The same CLI is also `python -m blueprints hello_world` or `bp-export hello_world`.

Generated artifacts: `STEP`/`STL` (desktop CAD), `USDZ`/`GLB` (Git LFS under `docs/models/`). 2D sections still write `SVG`/`DXF`/`PNG`. Labelled 3D plates are PNG/PDF from the viewer Drawing button. GitHub Actions builds `docs/index.html` (web-viewer hub) and deploys production at https://pteasima.github.io/Blueprints/ plus per-PR previews under `/pr-preview/pr-<N>/` (see `AGENTS.md` / `docs/Pages.md`).

## Docs

| Path | What it is |
| --- | --- |
| [AGENTS.md](AGENTS.md) | Agent and contributor process (preview link first, export, tests) |
| [docs/design/README.md](docs/design/README.md) | Design facts the models use, one file per area |
| [docs/electrical/](docs/electrical/) | Fixture plans, cable routes, and viewer edit mode |
| [docs/viewer/](docs/viewer/) | Viewer performance budget and remembered visibility |
| [src/blueprints/viewer/README.md](src/blueprints/viewer/README.md) | Current WebGL viewer behaviour |
| [docs/materials/README.md](docs/materials/README.md) | Realistic-mode material catalogue |
| [docs/Home.md](docs/Home.md) | Split with the Home repo (model and IFC stay here) |
| [docs/Roadmap.md](docs/Roadmap.md) | Long-term plans |
| [docs/TestSuitePlan.md](docs/TestSuitePlan.md) | Test-suite design (session fixtures, async CI lane) |
| [docs/OpenQuestions.md](docs/OpenQuestions.md) | Index of open questions across design and electrical docs |
| [docs/Pages.md](docs/Pages.md) | Pages hub layout and enablement |

## Layout

```
src/blueprints/     # package: export helpers, viewer shell, CLI
models/             # parametric models (one module per design)
exports/            # generated STEP / STL / SVG / DXF / PNG (gitignored binaries)
inputs/             # source YAML, catalogues, and legacy DXF / Python used by the models
docs/               # design and electrical notes; Pages hub sources (docs/models, docs/viewer)
scripts/            # Cloud Agent / local bootstrap and one-off tools
tests/              # pytest suite (async non-blocking CI lane; see AGENTS.md)
vendor/             # vendored yaml-ifc (private upstream)
.github/            # GitHub Actions (pages-content, viewer-js, model-budget, tests)
AGENTS.md           # agent operating notes (preview link first, env)
.cursor/            # cloud agent environment hints
```

## Agent workflow

1. Read the design facts in `docs/design/` (and electrical / materials notes when they apply).
2. Edit the parametric model under `models/` (source material already in `inputs/` if needed).
3. Export, push, and send the Pages preview link with a short explanation of what changed.
4. If extra images would help, say they are still being made and send them later unless asked to stop.
5. Review on the preview link.

## Requirements

- Python 3.11+
- See `pyproject.toml` for dependencies

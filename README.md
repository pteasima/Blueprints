# Blueprints

Parametric 2D/3D house and furniture models in Python, using [build123d](https://github.com/gumyr/build123d) (Open CASCADE).

This repo is meant for Cursor agent workflows: edit parameters, regenerate geometry, export STEP/STL and viewer drawings, and review diffs + screenshots from the Cursor iOS app or desktop. Agent operating notes (always attach PNG previews, Cloud Agent bootstrap) live in [`AGENTS.md`](AGENTS.md).

## Why build123d (vs plain ezdxf)

| Approach | Strength |
| --- | --- |
| **ezdxf alone** | Direct DXF drawing; easy for one-off 2D lines, but dimensions are often hard-coded and edits scatter across drawing commands. |
| **build123d** | Parameters drive solids and sketches; regenerate 3D + 2D exports from one source of truth. Better for “what if we move this beam 200 mm?” |

ezdxf remains available (it is a build123d dependency) for importing legacy DXF from Grok Bot and for DXF export when needed.

## Quick start

```bash
bash scripts/cloud-agent-install.sh
source .venv/bin/activate

# Hello-world parametric box → exports/hello_world/
python -m blueprints.export hello_world
```

Generated artifacts: `STEP`/`STL` (desktop CAD), `USDZ`/`GLB` (Git LFS under `docs/models/`). 2D sections still write `SVG`/`DXF`/`PNG`. Labelled 3D plates are PNG/PDF from the viewer Drawing button. GitHub Actions builds `docs/index.html` (web-viewer hub) and deploys production at https://pteasima.github.io/Blueprints/ plus per-PR previews under `/pr-preview/pr-<N>/` (see `AGENTS.md` / `docs/README.md`).

## Layout

```
src/blueprints/     # package: export helpers + CLI
models/             # parametric models (one module per design)
exports/            # generated STEP / STL / SVG / DXF / PNG (gitignored binaries OK to keep small SVGs)
inputs/             # drop legacy DXF / notes from prior tools (next step)
docs/               # design notes
scripts/            # Cloud Agent / local bootstrap
AGENTS.md           # agent operating notes (PNG previews, env)
.cursor/            # cloud agent environment hints
```

## Agent workflow

1. Drop source material (DXF + prior Python) under `inputs/`.
2. Ask the agent to port a design into a parametric `models/<name>.py`.
3. Agent regenerates exports and attaches preview screenshots.
4. Review on iOS (diffs + images) or MacBook (optional live viewer / remote desktop).

## Requirements

- Python 3.11+
- See `pyproject.toml` for dependencies

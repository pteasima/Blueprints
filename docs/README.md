# GitHub Pages hub (Quick Look)

`docs/` is the GitHub Pages site root for this repo.

## Enable once

Open https://github.com/pteasima/Blueprints/settings/pages

**Option A (simplest):** Source = **Deploy from a branch** → branch `main` (or this PR branch until merge) → folder `/docs` → **Save**.

**Option B:** Source = **GitHub Actions**, then run the `pages` workflow (`.github/workflows/pages.yml`).

Making the repo public is not enough — Pages stays off until you Save a source. Site URL: https://pteasima.github.io/Blueprints/

## Layout

| Path | Role |
| --- | --- |
| `index.html` | Single hub page — one **Quick Look** button per entry (add more later for cuts / models) |
| `models/manifest.json` | Button order + labels |
| `models/<id>.usdz` | ARKit meshes (also embedded into `index.html` as data URIs) |
| `.nojekyll` | Keep Pages from running Jekyll |
| `previews/` | PNG review stills for chat (not the AR entry point) |

`python -m blueprints.export <model>` updates `models/` and regenerates `index.html`.

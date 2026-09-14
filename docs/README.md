# GitHub Pages hub (Quick Look)

`docs/` is the GitHub Pages site root for this repo.

## Enable once

1. GitHub → **Settings** → **Pages**
2. Build and deployment → Source: **Deploy from a branch**
3. Branch: `main`, folder: `/docs` → Save

Site URL: https://pteasima.github.io/Blueprints/

Private repos need **GitHub Pro** for Pages (or make the repo public). The published site is public HTML even when the git repo stays private.

## Layout

| Path | Role |
| --- | --- |
| `index.html` | Single hub page — one **Quick Look** button per entry (add more later for cuts / models) |
| `models/manifest.json` | Button order + labels |
| `models/<id>.usdz` | ARKit meshes (also embedded into `index.html` as data URIs) |
| `.nojekyll` | Keep Pages from running Jekyll |
| `previews/` | PNG review stills for chat (not the AR entry point) |

`python -m blueprints.export <model>` updates `models/` and regenerates `index.html`.

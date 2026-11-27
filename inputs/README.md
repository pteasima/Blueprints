Place legacy DXF files and prior Python (e.g. from Grok Bot) here.

Reasons for the numbers live in `docs/design/` (see `docs/design/README.md`).

Parametric ports live under `models/`.

- `ground_floor/ground-floor.yaml` — RD Šíma 1.NP walls and openings, vendored from yaml-ifc @ `0f96c26` (same walls sample as `34e1597`). Ported as `models/ground_floor/`. `furnishings.yaml` is the room 1.02 furnishing document: the kitchen from `34e1597` plus the living-room run (plan v3). Upstream's furnishings sample at `0f96c26` is a generic kitchen and is not the house file. `bathroom-1.20.yaml` is the sloped floor, tiles, and point drain for room 1.20.
- `materials/catalogue.yaml` — realistic-mode material catalogue (products, colours, which viewer meshes each covers). Readable version and open questions: `docs/materials/README.md`.

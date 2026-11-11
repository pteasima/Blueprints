# Kitchen cabinets: drawers and carcass

The first detailed cabinet is **SF-I600a**, the island west row, the first 600 south of the rectangular sink. It faces west. It is the cabinet with the knife drawer. Every other kitchen cabinet is still a plain box.

Code: `models/kitchen_cabinet.py`. Parameters live on the element in `inputs/ground_floor/furnishings.yaml` (`Pset_Drawers`, `Pset_KitchenCabinet`). The previews come from `scripts/render_kitchen_cabinet.py <id>`.

Labels: **Petr** is a fact Petr gave, with the date or document. **IKEA** is an IKEA METOD / MAXIMERA default, used because Petr said “when unsure of details and margins, default to IKEA METOD measurements” (2026-11-11). These cabinets are custom made, so every IKEA number can change. `guess:` is a number with no source at all.

## Which cabinet, and what the drawers hold

Petr’s sticky-note plan, `KitchenPlan.jpg`: the yellow note beside the island’s red “600” (the second module from the north on the west row, south of the sink) reads:

> noze · naradi (lis na cesnek, hmozdir, vaha, ..) · dole nevim 🤷

Read top to bottom as three drawers: knives, tools (garlic press, mortar, scale), and the bottom one still undecided. Source: Petr, KitchenPlan.jpg. The note does not say three drawers in words, and it gives no heights. `open:` what goes in the bottom drawer (“dole nevím”).

Contents are not modelled yet (Petr, 2026-11-11).

## Heights, top to bottom

| Item | Value (mm) | Source |
| --- | ---: | --- |
| Finished counter height (top of worktop) | 930 | **Petr**, 2026-11-11; also the box `Height` on main |
| Worktop thickness | 38 | **IKEA** worktops (38 mm) |
| Plinth (sokl) height | 92 | **IKEA** METOD legs are about 80–100 (Petr, 2026-11-11, “use a reasonable default”). 92 is chosen so the carcass is exactly 800 |
| Carcass height | 800 | derived: 930 − 38 − 92. **IKEA** METOD base carcass is 800 |
| Drawer grid, D1 nože | 200 | **IKEA** METOD 80-grid, “low” front 20 cm |
| Drawer grid, D2 nářadí | 200 | **IKEA** METOD 80-grid, “low” front 20 cm |
| Drawer grid, D3 dole nevím | 400 (rest) | **IKEA** METOD 80-grid, “high” front 40 cm. Written `*`, the rest of the carcass, so a carcass change lands here |

## Fronts, boxes, slides

| Item | Value (mm) | Source |
| --- | ---: | --- |
| Board (carcass sides, bottom, rails) | 18 | **IKEA** METOD |
| Front thickness | 18 | **IKEA** METOD fronts |
| Back panel | 8 | `guess:` (METOD back is a thin fibreboard) |
| Gap between fronts (and to the sides, 1.5 each) | 3 | **IKEA**: a 600×200 grid front is 597×197 |
| Front sizes | 597×197, 597×197, 597×397 | derived: grid − 3 |
| Drawer box side clearance, each side | 13 | **IKEA**/Blum-style runner clearance, approx. |
| Drawer box wall | 16 | `guess:` MAXIMERA-like side |
| Drawer box side height | front grid − 110, at least 60 → 90, 90, 290 | `guess:` approximates MAXIMERA low/high sides |
| Box bottom above its slot bottom | 25 | `guess:` |
| Carcass depth | 582 | derived: box depth 600 − front 18. The box `Depth` stays 600 |
| Slide / drawer box length | 550 | derived: largest 50 mm step that fits 582 − 8 − 10 rear clearance. **IKEA** MAXIMERA uses full-extension runners in a 60-deep carcass |
| Extension | 550 (full) | **IKEA** MAXIMERA full extension: travel = box length |
| Plinth board setback from the front face | 50 | `guess:` |
| Top rails (front and back) | 80 deep | `guess:` |

The worktop is modelled only on top of this cabinet, inside its own 930 box. The other island boxes are still plain 930 boxes that include their worktop. `open:` a continuous island worktop.

## Parametric rule

Everything above is computed in `kitchen_cabinet.layout` from the box (`Width`, `Depth`, `Height`), `Pset_KitchenCabinet` (worktop, plinth, board, gap; any other `IKEA_DEFAULTS_MM` key can be overridden there, in metres) and `Pset_Drawers` (`NominalHeights` in metres top to bottom, one `*` for the rest; `Contents` separated by `;`). Fronts, boxes, the slide length, and the viewer’s slide records (`docs/models/ground_floor.doors.json`, `kind: drawer`) all follow. `tests/test_kitchen_cabinet.py` changes width, height and depth and checks that the drawers follow.

## Tap to open

In the web viewer a tap or click on a drawer slides it out by its extension along the front normal (about half a second, ease-in-out, the same animation as the doors), and a second tap slides it back. Records come from the model; the viewer only plays them (`src/blueprints/viewer/doors.js`).

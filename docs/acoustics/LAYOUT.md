# Obývák layout for the wave model

Review sheet before any acoustic solve. Kitchen gable is on the left of the plan and the long section, TV gable on the right, matching Petr's elevation.

The shell (slopes, soffit, traps, windows) comes from `ObyvakParams`. The furniture is placed to match that elevation. Where the written brief and the elevation disagree, the elevation wins and the brief number is listed under Open points.

## Shell

| | mm |
| --- | ---: |
| Length, TV gable (Y = 0) to kitchen gable | 11100 |
| Width, window wall (X = 0) to cabinet wall | 5350 |
| Interior eave height | 3151 |
| False ridge, X = 2450 | 5206 |
| Soffit face, X | 4900 |
| Soffit underside | 2470 |
| Living trap, from Y = 0, above Z = 2450 | 450 |
| Kitchen trap, from Y = 11100, above Z = 2450 | 190 |
| Windows on the window wall, sill at the floor, head | 2500 |

Pitch is across the width, not along the room. A cut along the length at one X is a level ceiling. The long section draws that level at X = 2200 mm (near the false ridge, about 5020 mm high) and, separately, the soffit underside at 2470 mm on the cabinet wall.

Traps replace the air above 2450 mm at each end. Below that the gable wall is at Y = 0 and Y = 11100.

## Furniture, sources, ears

Along the cabinet wall, from the kitchen gable toward the TV:

| Piece | X (mm) | Y (mm) | Z (mm) |
| --- | --- | --- | --- |
| Kitchen on the gable, base | 450–4750 | 10500–11100 | 0–900 |
| Kitchen on the gable, uppers | 450–4750 | 10750–11100 | 1450–2200 |
| Kitchen on the cabinet wall, base | 4750–5350 | 8150–11100 | 0–900 |
| Kitchen on the cabinet wall, uppers | 5000–5350 | 8150–11100 | 1450–2200 |
| Island | 1850–3250 | 8400–10350 | 0–900 |
| Book wall, 280 mm deep | 5070–5350 | 4250–8150 | 1050–2400 |
| Dining table top | 2200–3900 | 5700–6600 | 740–790 |
| Sofa along the wall, back / seat | 4250–5350 | 750–4150 | seat 450, back 850 |
| Sofa return, toward the table | 3450–5350 | 3050–4150 | seat 450, back 850 |
| Rug | 2500–5350 | 650–4250 | floor |
| TV screen, on the TV gable, no cabinet | 3350–4950 | on the wall | 700–1600 |
| Subwoofer | 4550 | 400 | 250 |
| TV speakers | 3500 and 4800 | 80 | 1150 |
| Talker | 3050 | 5350 | 1200 |
| Ears, three sofa seats | 4600 | 1350, 2350, 3200 | 1150 |
| Ear, dining | 3050 | 6450 | 1150 |
| Ear, island | 1450 | 9600 | 1150 |

The sub is 400 mm off the TV gable, at the sofa's TV end, under the screen edge nearer the sofa (X = 4550, screen runs 3350–4950). It is not in the cabinet-wall corner.

Chairs are 420 × 420 × 780 mm at the four sides of the table.

## Open points

1. The brief said an L-sofa of 4.0 × 4.0 m, arms about 1.1 m deep. The elevation shows a shorter run and a shallower return. The model uses 3400 mm along the wall, 1100 mm seat depth, and a 1900 mm return toward the table. A 4000 mm return would cross the table.
2. The brief put a 3.9 × 1.5 m shelf on the back wall above the sofa, starting 1300 mm up. The elevation puts the book wall between the kitchen and the sofa. The model follows the elevation: 3900 mm long, from 1050 mm to 2400 mm (the soffit underside is 2470 mm, so 2800 mm is not available on this wall), 280 mm deep. The 20 mm lamella gap and the lack of wool behind it stay as the acoustic description of that face, for when the solve is allowed.
3. The brief put the sub 300 mm from both the TV wall and the cabinet wall. The note on the elevation puts it at the sofa's TV end, under the left edge of the TV. This model uses the sofa-side edge of the screen. If the window-side edge was meant, the sub moves to X = 3350 mm, Y unchanged.
4. TV size is assumed: 1600 mm wide, bottom at 700 mm, top at 1600 mm. The elevation shows a screen and no cabinet.

## Sheets

- `layout-plan.png` — plan, kitchen left, TV right
- `layout-section-xz.png` — slopes, false ridge, soffit step
- `layout-section-long.png` — same handedness as the elevation
- `layout-mesh-3d.png` — the surfaces the wave model will use

No frequency sweep has been run on this layout.

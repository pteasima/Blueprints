# Obývák layout for the wave model

Review sheet. No acoustic solve on this furniture. Kitchen gable is on the left of the plan and the long view, TV gable on the right, as in Petr's elevation. The purple circle is the subwoofer: on the floor, in the cabinet-wall / TV-gable corner, at the TV end of the sofa.

The shell is `ObyvakParams`. The sofa size is Petr's 4.0 × 4.0 m, which overrides the scale of the sketch.

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
| Windows on the window wall, head | 2500 |

The pitch runs across the width. Along the cabinet wall the ceiling of the room is the soffit underside, 2470 mm.

## Furniture

Order on the cabinet wall, from the TV gable toward the kitchen.

| Piece | X (mm) | Y (mm) | Z (mm) |
| --- | --- | --- | --- |
| Subwoofer, corner | 5050 | 300 | 250 |
| Sofa long run, back and seat, 4000 mm | 4250–5350 | 550–4550 | seat 450, back 850 |
| Sofa chaise, dining end, toward the windows | 1350–5350 | 3450–4550 | seat 450, back 850 |
| Lamella wall, behind that run | 5170–5350 | 550–4550 | 950–2400 |
| Tall wood units, behind the dining table | 4750–5350 | 4550–7700 | 0–2200 |
| Kitchen base, cabinet wall | 4750–5350 | 7700–11100 | 0–900 |
| Kitchen uppers, cabinet wall | 5000–5350 | 7700–11100 | 1450–2200 |
| Fridge | 4650–5350 | 9850–10750 | 0–2100 |
| Hood, in front of the uppers | 4300–5000 | 8400–9050 | 1700–2400 |
| Kitchen base, kitchen gable | 400–4750 | 10500–11100 | 0–900 |
| Kitchen uppers, kitchen gable | 400–4750 | 10750–11100 | 1450–2200 |
| Island | 1550–3150 | 8400–10300 | 0–900 |
| Dining table | 2050–3850 | 5500–6450 | 740–790 |
| Rug, under the sofa | 1800–5200 | 500–4600 | floor |
| TV, on the TV gable, no bench, no cabinet | 2550–4150 | on the wall | 800–1650 |

The sofa bounding box is 4000 × 4000 mm. The long run ends at the TV side (Y = 550 mm, leaving the corner for the sub). The chaise is the dining end and reaches toward the windows.

The lamella wall is the same 4000 mm run as the sofa, starting just above the 850 mm back and stopping 70 mm short of the soffit. Drawn depth is 180 mm so the books show. Acoustically it is still wooden lamellas 20 mm off the wall, no wool, about half the shelves filled with books.

The tall wood units between the kitchen and that shelf are hard cabinets. The low bench under the TV in the rendering is not in the model.

Ears: sofa at X = 4600, Y = 1300 / 2500 / 3600, Z = 1150. Dining at (2950, 6750, 1150). Island at (1150, 9300, 1150). Talker at (2950, 5150, 1200). TV speakers at the screen edges, Y = 80, Z = 1150.

## Residual differences

- Hood, fridge, and the tall-unit run are sized from the elevation, not from a dimensioned drawing. Hood 700 × 650 mm. Fridge 900 × 700 × 2100 mm. Tall units 3150 mm along the wall.
- TV width and height are assumed (1600 mm wide, 800–1650 mm). The rendering shows a screen on that gable and nothing under it.
- No plants, no downlights, no rug pattern, no people except a 1750 mm scale figure in the perspective.
- The lamella gap is 20 mm in the acoustic description. The solid in the view is 180 mm deep so the shelf is visible above the sofa back.
- Ceiling in the perspective is the real slopes and the soffit. The rendering also shows the roof structure and lights, which are not furniture.

## Sheets

- `layout-plan.png`
- `layout-section-xz.png`
- `layout-section-long.png`
- `layout-compare.png` — view toward the cabinet wall, kitchen left, TV right
- `layout-mesh-3d.png`

No frequency sweep has been run on this layout.

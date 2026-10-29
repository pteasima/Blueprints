# Obývák layout for the wave model

Furniture Petr approved for the wave study.

The comparison is an orthographic elevation of the cabinet wall, cut at the window wall. Kitchen gable is on the left, TV gable on the right, same handedness as Petr's drawing. The pitch runs across the width, so the ridge, the eave, and the soffit are level lines. The drawing's ceiling line is the eave.

`reference.jpg` is Petr's elevation. The room corners used to align it are the kitchen-gable / cabinet-wall corner at pixel x = 262, the TV-gable / cabinet-wall corner at pixel x = 2206, and the floor at pixel y = 1077. That span is 11.100 m, so the scale is 175.14 px/m. The model's eave (3151 mm) lands at pixel y = 525. The drawing's ceiling line is pixel y = 524, 7 mm higher.

## Omitted

An opaque box where the room is open would be worse than a gap. These are not in the model:

- Hood. It is an open frame.
- The open hanging shelf above the island. That was the grey box near the cabinet wall.
- Dining chairs.
- Plants, pendant lights, and downlights.
- The person.
- The low bench under the TV.
- Cabinet-wall uppers over the white kitchen. Above those counters the drawing is open wall. The shelf that used to be drawn there is the hanging shelf above.
- Rug pattern. A plain rug patch stays on the floor. It is not a box in this elevation.
- The island.
- The dining table.
- The fridge, the oven, and every other dark-grey or black box. The TV mark and the sub dot stay.

The chaise is the sofa's return toward the windows. In this elevation it sits inside the long run's length, because X is collapsed. The plan shows the L. The fridge bay is the same 900 mm counter as the rest of the cabinet wall.

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

## Furniture

Order on the cabinet wall, from the TV gable toward the kitchen. X is metres from the window wall.

| Piece | X (mm) | Y (mm) | Z (mm) |
| --- | --- | --- | --- |
| Subwoofer, on the floor | 5050 | 300 | 250 |
| Sofa long run, back and seat | 4250–5350 | 400–4400 | seat 600, back 950 |
| Sofa chaise, dining end, toward the windows | 1350–5350 | 3300–4400 | seat 600, back 950 |
| Lamella wall, behind that run | 5170–5350 | 400–4400 | 1020–2450 |
| Tall wood units | 4750–5350 | 4400–6900 | 0–2450 |
| Kitchen base, cabinet wall, including the old fridge bay | 4750–5350 | 6900–11100 | 0–900 |
| Kitchen base, kitchen gable | 400–4750 | 10500–11100 | 0–900 |
| Kitchen uppers, kitchen gable, 350 mm deep | 400–4750 | 10750–11100 | 1450–2200 |
| TV, on the TV gable, edge-on in the elevation | 2700–4300 | on the wall | 750–1700 |
| Rug, floor patch, not a box | 1800–5200 | 500–4600 | floor |

The sofa bounding box is 4000 × 4000 mm. It starts at Y = 400 mm so the sub, 300 mm from both walls, stays outside the sofa. The lamella is that same run, from just above the back to 20 mm under the soffit. Drawn depth is 180 mm. Acoustically it is still wooden lamellas 20 mm off the wall, no wool, about half the shelves filled with books.

Ears stay at 1150 mm: sofa at X = 4600, Y = 1300 / 2500 / 3600; the former dining spot at (3000, 5400); the former island spot at (2400, 8550), which was just on the window side of the deleted island. The talker stands on the old table footprint, (3000, 5425), mouth at 1500 mm. TV speakers at the screen edges, Y = 80, Z = 1150.

## Model against the drawing

Positions are read on the scale above. A minus delta means the model is toward the TV gable, or lower. Petr's 4.0 m sofa overrides the drawing. The island, the table, the fridge, and the oven are out of the model, so they are not in this table.

| Piece | Model | Drawing | Delta |
| --- | --- | --- | --- |
| Eave | Z 3151 | ceiling line, Z 3158 | −7 mm |
| Soffit / cabinet top | Z 2470 | top line, Z 2483 | −13 mm |
| Lamella and sofa run | Y 400–4400 | shelf about Y 50–3800 | start +350 mm, end +600 mm |
| Sofa back | Z 950 | back line about Z 1030 | −80 mm |
| Sofa seat | Z 600 | cushion line about Z 670 | −70 mm |
| Tall units, kitchen end | Y 6900 | wood ends about Y 6870 | +30 mm |
| Tall units, TV end | Y 4400 | wood/shelf joint about Y 3750 | +650 mm, follows the 4.0 m shelf |
| Tall units, top | Z 2450 | about Z 2500 | −50 mm |
| Counter | Z 900, Y 6900–11100 | worktop line about Z 990; a fridge stood in part of this run | height −90 mm; the bay is now counter |
| Sub | Y 300, on the floor | purple ring on the gable face, beside the arm | see below |
| TV | edge-on at the corner, Z 750–1700 | screen is on the gable face, right of the corner | width is not along Y |

The purple ring is centered just past the TV corner, at about the height of the sofa arm. It marks the corner. The model sub is the driver on the floor, 300 mm from the cabinet wall and 300 mm from the TV gable, in the gap at the end of the sofa.

## Conflicts

- Sofa and lamella are 4.00 m, from Y = 400 mm. The drawing's shelf is about 3.75 m and reaches the TV gable. The model starts 350 mm later, so the sub is not inside the sofa, and it ends 600 mm further toward the kitchen. The tall units start at that end, so their TV end is 650 mm further toward the kitchen than the wood/shelf joint. Their kitchen end matches the drawing.

## Sheets

- `layout-side-by-side.png` — the drawing and the model at the same scale
- `layout-overlay.png` — the model at 50% over the drawing, aligned on the floor and both gable corners
- `layout-elevation.png` — the orthographic model, floor to ridge
- `layout-plan.png`
- `layout-section-xz.png` — the pitch, the false ridge, the soffit step
- `layout-section-long.png`
- `layout-compare.png` — the same pair as the side-by-side
- `reference.jpg`

The wave study on this furniture is `obyvak-wave.md`.

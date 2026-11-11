# Bathrooms 1.07 and 1.20

Both rooms are tiling documents in storey coordinates, the same frame as `ground-floor.yaml`. The YAML is the placement source. This page is the decisions an agent otherwise has to recover from a header. Models: `models/bathroom_107.py`, `models/bathroom_120.py`, drawn on the ground-floor export.

Shared product, both rooms: ABK Poetry Stone, rectified, 8.5 mm. Floor 596×596. Walls 596×1194 portrait. 1194 = 2×596 + 2, so one wall tile’s height spans two floor tiles and the joint between them. Wall joint 2 mm, measured in plan. Plan pitch 598 mm. Source: both YAML headers, PR #62 for 1.20’s product.

Screed, waterproofing membrane, and the suspended ceiling are properties. Their thickness was not measured, so they are not extruded. The tile solid is the 8.5 mm ceramic. Source: both module notes.

## 1.07 Koupelna

Source, unless a line says otherwise: the header of `inputs/ground_floor/bathroom-1.07.yaml` and `inputs/ground_floor/README.md`. PR #65 set the fall. PR #66 set the 549 mm shower, the 2230 mm tile head, and the tiled passage.

Bathtub to the west, double washbasin under the north window, walk-in shower to the east.

The radon chase projects into the neighbouring room, so the bathroom is a clear rectangle:

| Face | Storey | Wall |
| --- | --- | --- |
| West | x = 9.725 | W-039 / W-040 inner face, the full depth |
| East | x = 14.225 | W-045 / W-046 |
| South | y = 10.15 | W-022 |
| North | y = 12.25 | W-026 |

Clear size 4.500 × 2.100 m. Model area 9.450 m². Clear height 2.500 m (legend s.v.).

**The ZTI room table (D.1.4.1.03) lists 8.91 m². The tiling uses these faces and does not shrink to that area.** The difference is not closed.

Door OP17 is in the south wall, x = 11.50–12.50, leaf height 2100 mm. The partition is 125 mm, so the floor stops on the inner face. The door leaf is on the corridor side of the passage, y = 9.475. The passage from that leaf to the room is tiled, 1.000 × 0.675 m, up to 2230 mm. The door itself stays 2100 mm.

Window OP15 is in the north wall, x = 9.95–12.85, sill 1750, head 2500. The wall file has no window on the west wall.

### Floor grid and the shower

Floor joint origin x = 11.403 puts the 2 mm joint on the door centre, x = 12.000. The same origin is a module boundary, so the two tiles that meet there have no grout until the model opens a 2 mm joint. The Y origin is the door sill, y = 9.475. The first grout then sits in the passage, and the north sliver of the room is 188 mm. The level floor and the shower floor share that Y grid, so the joints line up. West and east walls use the same module.

Shower, wall and floor, across the opening: 549 | 2 | 549 mm. That is 1100 mm, which reads 550 | 550 with the grout. The glass east face is on that line (x = 13.1165). The catalog grate (KOV 3G110CM) is 1100 mm and fills the opening. The catalog body is 1140 mm (overall 1140×127, grate width 35, installation height 52, depth 47, outlet Ø40). Its ears are cut or recessed into the wall. That recess is a note only.

The shower falls 1.25% from the south entry, at the same 0 as the level floor, toward a wall drain in the north pre-wall. Stainless profiles, 10 mm wide, take that fall on both sides (glass and east wall). Wall tiles start at height 0. They do not follow the fall.

Glass: 8 mm, 700 mm walk-in opening at the south. The glass is mounted on the tall shower wall and runs to that face. The tall wall extends 50 mm west of the glass, so the glass sits on the wall and not on its corner.

### Pre-walls, shelf, niche, mixers

Both pre-walls are 186.5 mm masonry. With the 8.5 mm face tile the finished face is one plane at y = 12.055. There is no step between them.

Wall tiles are cut at 2230 mm. Above that is plaster (270 mm up to the 2500 mm ceiling). The shower has a soffit at 2230 mm. The washbasin pre-wall top is a tiled shelf at the 1194 mm course joint. Above that shelf the north wall is plaster, including the band up to the window sill.

A 180 mm shelf stands west of the tub, at the tub height of 450 mm. 180 mm, not an estimated 150 mm, is what puts the tub’s east face on the joint after exactly two uncut 596 mm floor tiles from the door-centre joint. The tub is S301-223, 1900×900×450, east face on that joint, 5 mm clear of the washbasin pre-wall. Source: element descriptions in the YAML.

Niche: one cavity, 680×280 mm, centred on the shower’s centre joint (the middle of the 1100). The pre-wall is cut out. Back, both reveals, top and bottom are tiled. Bottom on the 1194 mm joint.

The vanity is centred on the door-centre joint, x = 12.000. Basin mixers are Paffoni Tango, rozteč 150 mm. Seen from the room, the left pipe of the left mixer is on the joint one tile to the left (x = 11.403) and the right pipe of the right mixer is on the joint one tile to the right (x = 12.598). Those joints measure 1195 mm apart, not 1200, because the module is 596+2. Mixer centres are then 1045 mm apart, not 1050. The vanity is 1600 mm so the 400 mm basins fit.

`open:` no vanity product was named. Mirrors are a note only, one above each basin.

The shower mixer stays where the spárořez draws it: one Tango, rozteč 150 mm, on the central joint of the 549 | 549 shower wall. It is not on the door-centre joint.

### Build-up at finished-floor zero, 250 mm

| | Level floor | Shower |
| --- | --- | --- |
| Waterproofing | 8 | 8 |
| EPS 100S | 60+60 | 60+40 |
| Nop / system board | 50 | 50 |
| Screed | 59 | 79 |
| Finish | 13 | 13 |

The 8 mm membrane is what makes those layers add to 250. The 13 mm finish is the build-up sum; the extruded tile is 8.5 mm. Screed, membrane and ceiling are not extruded.

## 1.20 technical bathroom

Source, unless a line says otherwise: the header of `inputs/ground_floor/bathroom-1.20.yaml`. PR #61 added the tiles and the ACO drain. PR #62 set Poetry Stone and the door-leaf datum.

`open:` noted 2026-10-08, still open. Replace the drawing faces with on-site measurements so the cuts are millimetre exact. The tile size and the door-leaf zero are a working assumption (2026-10-09) to be redone with those measurements.

Clear inner faces, checked against `ground-floor.yaml`, drawing faces, not a site measure:

| Face | Storey | Wall |
| --- | --- | --- |
| West | x = 30.15 | W-054 |
| East | x = 32.325 | W-057 |
| South | y = 6.025 | W-009 |
| North | y = 7.95 | W-015 |

Clear size 2.175 m east-west by 1.925 m north-south. The door is in the north wall. The drain is the southwest corner, diagonally opposite the door.

The door leaf, where the bathroom floor meets the hall floor, sits 100 mm north of the inner north face: y = 7.95 + 0.10 = 8.05. The opening keeps its width (0.9) and its place on the wall (AlongAxis 1.175). The east jamb is x = 30.15 + 1.175 + 0.9 = 32.225.

Zero is the finished floor of the entrance hall, at that east jamb on the leaf line: (32.225, 8.05). The plane falls 1.5% along the diagonal from there to the southwest drain (30.15, 6.025).

| | |
| --- | --- |
| Diagonal | 2.899353 m |
| Design fall | 43.490 mm |
| Gradient, rise over plan run, stored to 6 decimals | [0.010735, 0.010476] |
| Along the walls | 1.0735% east-west, 1.0476% north-south. Magnitude 1.500%. |
| Drain corner | −43.489 mm |
| Northeast room corner (32.325, 7.95) | +0.026 mm |
| Across the 900 mm door leaf, east-west | 9.662 mm |

The floor plane continues into the door reveal, between the jambs, up to y = 8.05. No threshold. The joint at the leaf is silicone. It is not a grout module.

Floor joints are derived, slightly wider on the slope, so the floor and the wall joints keep the same plan lines. Floor grid: full tiles at the drain (southwest). Cuts land on the door side: 131 mm at the north end of the east wall, 381 mm at the east end of the north wall. The reveal adds 100 mm to the floor tiles that cross the opening.

Every wall uses that same origin. Vertical joints continue the 598 mm plan pitch. The window and the door cut whatever tiles they cross. A notched tile stays one piece, so a jamb is not a joint. The grid does not restart on a jamb. The north wall keeps the piece above the door where a joint falls 19 mm inside the opening.

Bottom course follows the slope with a constant 2 mm vertical gap. At the drain corner the bottom tile is a full 1194 mm tall. Two courses, no top strip. The top edge is level, at 2348.511 mm. The soffit is 2.500 m. The room’s clear-height row in the ground-floor header is 2.55 m for 1.20; the tiling file uses a 2.500 m soffit. Neither file explains the 50 mm.

W-054’s axis stops at the window and W-015’s axis stops at the door’s east jamb. The tile still covers the clear faces, including the 250 mm west pier and the 100 mm north pier. Those piers are the wall segments. They are not extra strips.

The grate solid is a nominal 8 mm (yaml-ifc’s default when `Height` is omitted) and is not written back. The drain body below the grate is not measured. The element is ACO 450420, a 300 × 300 mm point drain at the southwest corner. Source: the `DRAIN-1.20` element, `DEFAULT_GRATE_THICKNESS` via `bathroom_120.py`.

The membrane is described as covering the whole floor, 100–150 mm up the walls, at least 2 m up in the drain corner, taped at the door. No thickness is measured, so it is not extruded. Source: `MEM-1.20`.

Grout is recessed 0.5 mm behind the tile face so the joint reads in the viewer. The joint width is the layout width. Source: `bathroom_120.py` module note.

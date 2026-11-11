# Ground floor

Walls and openings for RD Šíma, 1.NP. The file is `inputs/ground_floor/ground-floor.yaml`, vendored from [pteasima/yaml-ifc](https://github.com/pteasima/yaml-ifc) at `0f96c26` (`samples/ground-floor.yaml`). The walls text matches the earlier pin `34e1597`. The Python package is `vendor/yaml-ifc/`. The solid is `models/ground_floor.py`. Lengths in the YAML are metres. Solids are millimetres.

Schema: that repo’s `docs/spec.md`. This page does not retype the wall list. The facts below are the ones that are easy to miss because they are a comment, a missing field, or a placeholder in the builder.

## Plan frame

Local plan from `samples/source/ground-floor.json`. Origin at the min corner of the kept silná edges. Model-space origin of that export: 4698.8019 m, −615.0793 m. X to the right, Y up the sheet, Z up. Datum ±0.000 = 472.100 m Bpv, stored as the site `RefElevation`. Site name Bor u Tachova. Building name RD Šíma. Source: YAML header.

Wall axes are centre-lines measured from parallel silná faces, thickness centred on the axis. Collinear pieces of one axis are one wall, including across an opening. Edges that are only jambs or reveal steps are not walls of their own. Butt joints are the `connections` block: the relating wall runs through, the related wall is trimmed to its face. Corner polygons come from `yaml_ifc.footprints`. They are not recomputed in `ground_floor.py`. Source: YAML header, module note in `models/ground_floor.py`, PR #57.

## Heights the drawing lists, and the height the solid uses

No wall has `Height`. The clear heights in the YAML header are per room (drawing column s.v.). `IfcSpace` is not in the file, so a wall is not given one of those heights.

| Clear height | Rooms |
| --- | --- |
| 2.50 m | 1.03 1.04 1.05 1.06 1.07 1.08 1.09 1.10 |
| 2.55 m | 1.01 1.19 1.20 1.21 1.22 1.23 |
| 2.75 m | 1.16 garage, 1.17 hall |
| 3.00 m | 1.12 1.13 1.14 1.15 |
| a range | 1.02 living room 2.50–5.05 m, 1.11 bedroom 2.50–4.875 m |

The builder extrudes every wall that has a thickness at yaml-ifc’s `DEFAULT_WALL_HEIGHT`, 3 m, and does not write that height back. Source: `DEFAULT_WALL_HEIGHT_M` and the module note. The obývák roof is one room’s section, not a storey wall height, so it is not applied to these walls.

`open:` room 1.02’s drawing note of 5.05 m is `ROOM_CLEAR_M`. It is not an IfcSpace field. The current false ridge is 5075.77 mm ([obyvak.md](obyvak.md)), which is not 5.05 m. Nothing in the two files says whether 5.05 was a structural ridge, a rounded interior, or an earlier ceiling.

## Gaps that are decisions, not missing code

| Item | What the files do | Source |
| --- | --- | --- |
| PASS-1.17-1.16 (former OP44) | Not represented. Petr, 2026-10-05: the hall continues into the garage at full width and full height, no wall, no door, no lintel (x 37.85–38.10, y 10.05–11.25). An opening needs a wall to void. The unused text “2500” at that gap is not an opening. | YAML header |
| W-004, W-014 | 120 mm closed squares on layer silná. Kept as short walls because IfcColumn is deferred. Neither axis meets another wall. | YAML comments, module note, PR #56 |
| W-017 | No thickness. The opposite face is not drawn, so the axis is the silná line, not a measured centre-line. `footprints` leaves it out. The builder centres a 50 mm band on that line so OP19 can be cut. | YAML comment, `MISSING_THICKNESS_M` |
| W-023 | Glazed run. Thickness is the 100 mm posts at x 21.95–22.05 and 26.45–26.55. The long faces are not drawn. OP27, OP28 and OP29 void this wall. | YAML comment |
| OP27, OP29 | `HeadHeight` only. Height and sill are not invented, so they are not cut. W-023 stays a 100 mm band with only OP28 removed. | module note |
| Door sill | Where the source left the sill empty, sill is head minus height. The written head equals the leaf height, so the leaf starts at the floor. | YAML header |
| Leaves | Timber doors 40 mm, glazing 24 mm, held 15 mm off the void. Plain openings stay empty. | `DOOR_LEAF_MM`, `WINDOW_LEAF_MM`, `LEAF_GAP_MM` |

`guess:` the 50 mm band on W-017 is a placeholder so the wall is a solid. It is not a measured thickness.

## Floor EPS take-off

`scripts/export_podlaha_eps.py` writes `docs/podlaha-eps.xlsx` and `docs/podlaha-eps-souhrn.csv`. It is a quantity file, not a solid.

| Fact | Source |
| --- | --- |
| Finished build-up 250 mm, top of the base slab to finished floor. The project prints 251.2 (A) and 250.2 (C). | `TOTAL` and its comment |
| Room areas from drawing D.1.4.1.03. Build-ups from D.1.1.08 legend, A Podlaha 1.NP and C Podlaha garáže. | script docstring |
| Waterproofing 8 mm: AP Elastek 40 + AP Glastek 40 Special, kept from the project. | `HI` |
| System board under the heating, including the studs, 50 mm. | `BOARD` |
| Waste 6%. | `WASTE` |
| Living room 1.02 area used by the take-off | 58.91 m², PU floor, from the ZTI table. The clear rectangle 5.35 × 11.10 m is 59.385 m². The file does not explain the difference. |
| Garage | New underfloor heating. Concrete 100 mm (Petr). EPS 150 S minimum because cars drive on it. The project had XPS 80. Check with the structural engineer and the board manufacturer. |
| Outdoor store 1.18 | Concrete 100 mm is a placeholder (the note recommends 100–120 mm plus mesh). EPS + concrete only. |
| Bathroom 1.20 | Diagonal fall, about 43 mm. Screed 99 mm at the door down to about 56 mm at the drain (minimum 45 mm over the studs). The door joint is a movement joint. |
| Bathroom 1.07 shower | The take-off approximates 1.153 × 2.1 m because the model had no separate shower area. Fall 1.25% = 26.25 mm. Screed 79 mm at zero, about 53 mm at the drain. The tiling model has since fixed the shower; this area note was not updated. |

`open:` pack areas for EPS 100 S are copied from the Isover EPS 150 technical sheet (boards 1000×500). The CSV says to check that with the supplier. Source: `PACK_SRC` and the CSV notes.

The bathroom build-ups that the tiling models actually extrude, or refuse to extrude, are in [bathrooms.md](bathrooms.md).

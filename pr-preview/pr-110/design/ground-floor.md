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
| OP27, OP29 | The source gave `HeadHeight` only. Since 2026-11-12 they are cut at 2.5 m, sill 0, the same as OP28 beside them, so the two O11 sashes have glass. The height is taken from the head; nothing in the drawing gives it. | module note, [OpeningsSpec.md](../OpeningsSpec.md) |
| Door sill | Where the source left the sill empty, sill is head minus height. The written head equals the leaf height, so the leaf starts at the floor. | YAML header |
| Leaves | Timber doors 40 mm, glazing 24 mm, held 15 mm off the void. Plain openings stay empty. | `DOOR_LEAF_MM`, `WINDOW_LEAF_MM`, `LEAF_GAP_MM` |

`guess:` the 50 mm band on W-017 is a placeholder so the wall is a solid. It is not a measured thickness.

## Windows

Which panes open. Petr, 2026-11-12, and the 2022 DWG (`RD Šíma stavba.dwg`, sheet POHLEDY, layer tenka), read on the box with LibreDWG. It is not in the repo. In the elevations an arrow in a pane is a sliding sash and its direction, and a `+` is a fixed pane. A triangle is a hinged sash, with its apex at the handle side. The legend says “Okna hliníková s izolačním trojsklem - antracit” (aluminium, triple glazing, anthracite).

The data is on each `IfcWindow` in `inputs/ground_floor/ground-floor.yaml`. `PartitioningType` is the IFC enum. `Pset_BlueprintsWindow.PanelOperations` gives one IFC `IfcWindowPanelOperationEnum` name per panel. It is a property set because yaml-ifc has no `IfcWindowPanelProperties`. Panels are listed along the host wall axis, from the start jamb to the end jamb. W-001 and W-002 run west to east. Panels split the width equally. In the elevations the two panes look about equal; nothing else gives the split. The model (`models/ground_floor.py`, `window_panels`, `_window_sashes`, `_window_motion`) splits the glazing into one solid per panel. It writes `docs/models/ground_floor.windows.json` for the viewer. A sliding sash sits one pane plus 6 mm (`SASH_GAP_MM`) indoors of the fixed pane, in its own track. When open, it slides `WINDOW_TRAVEL` (80 %) of its own width toward the fixed pane. That 80 % is the earlier viewer animation, not a product figure.

| Window | Room | DWG mark and drawing | Model |
| --- | --- | --- | --- |
| WIN-OP01 | 1.11 west, 2.4 m | O3, POHLED JIHOZÁPADNÍ: sliding sash (north pane) and a fixed pane | Fixed glazing, `SINGLE_PANEL` `FIXEDCASEMENT`. Petr, 2026-11-12: “the two windows that are facing west in the bedroom, they are just fixed glass. Both the narrow one and the wide one.” His word overrides the 2022 drawing. |
| WIN-OP02 | 1.11 west, 0.9 m | O4, POHLED JIHOZÁPADNÍ: tilt-and-turn | Fixed glazing, Petr (as above) |
| WIN-OP05 | 1.11 south | O2, POHLED JIHOVÝCHODNÍ: arrow in the west pane pointing east, `+` in the east pane | West sash slides east; the east pane is fixed |
| WIN-OP08, OP13, OP16 | 1.12, 1.13, 1.14 south | O2, as OP05 | As OP05 |
| WIN-OP21 | 1.15 Pracovna south, 3.55 m | O1: `+` in the west pane, arrow in the east pane pointing west | Mirrored: the east sash slides west |
| WIN-OP35 | 1.23 south, 3.1 m | O10: arrow in the west pane pointing east, `+` in the east pane | As OP05 |

`guess:` OP35 in 1.23 is taken as the garzonka's large south window. The drawing names rooms 1.20–1.23 only by number.

Petr, 2026-11-12, said the bedroom and the three children's rooms share one layout, the office is the opposite, and he was unsure about the garzonka. The drawing agrees: the garzonka matches the bedroom.

Fixed glazing (Petr, 2026-11-12: “all the small windows are fixed”), `FIXEDCASEMENT` for every panel. They have no sash, no `motion` in `windows.json`, and no tap target in the viewer:

- OP04, OP07, OP12, OP30, OP31, OP45, OP46, OP47, OP48 (`SINGLE_PANEL`)
- OP15, OP42 (`DOUBLE_PANEL_VERTICAL`, both panels fixed)
- OP39b (entrance), OP26 (tall hall window in 1.05), OP28 (middle of O11)

The DWG draws O5, O6, O7/O8 and O9 as bottom-hung or tilt-and-turn. Petr's word overrides the drawing.

O11, living room 1.02 south: OP28 in the middle is fixed. OP27 slides east and OP29 slides west, each by 2.315 m, so their leading edges meet at OP28's centre (x 24.25). `Pset_BlueprintsWindow.SlideToward` (`start` or `end` of the host axis) and `SlideTravel` (metres) override the default direction and the 80 % travel. A sash with `SlideTravel` runs on the indoor face of the wall so it can pass OP28.

## Doors

Every door Petr has specified, and its source, is listed in [OpeningsSpec.md](../OpeningsSpec.md). The model reads these fields from `Pset_BlueprintsDoor` on each `IfcDoor`:

| Field | Meaning |
| --- | --- |
| `HingeSide` | `start` or `end`: the jamb, along the host wall axis, that carries the hinge |
| `Swing` | `+` or `-`: the side of the wall the leaf opens to, along the wall's local +Y (the axis turned 90° counter-clockwise) |
| `LeafOffset` | metres along local +Y. Moves the leaf off the wall centre. OP11 and OP17 use it so they sit flush on the hallway face, in line with the WC door OP19 |
| `Pset_DoorCommon.GlazingAreaFraction` | above 0: a glazed leaf, a glass pane (glazing material) in a 70 mm frame (`GLAZED_DOOR_FRAME_MM`), one `door__<id>__` node so frame and glass swing together. The terrace door OP32 |
| `UserDefinedOperationType` | `SECTIONAL_OVERHEAD` with `OperationType: USERDEFINED`. IFC4 has no sectional door type |

Sliding (`SLIDING_TO_LEFT`/`SLIDING_TO_RIGHT`): D-OP03 (double pocket) and the living-room pocket doors D-OP24, D-OP25, D-OP33. The leaf slides its full width inside the wall's centre plane. The DWG draws each leaf parked beside its opening on the living-room face, which gives the direction.

Sectional overhead: the garage doors D-OP49 (D6) and D-OP50 (D5). `ground_floor.doors.json` writes them as `kind: "sectional"` with the opening's start, end, bottom and top, the inward direction, 4 sections and a 0.3 m bend. The viewer runs the sections up the opening, round the bend and level under the ceiling. It is a simplified animation, not a product's track. The leaf hangs on the garage face of W-067. Their height is still waiting on Petr.

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

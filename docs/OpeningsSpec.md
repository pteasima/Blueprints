# Openings spec (ground floor)

Every door and window Petr has said something about, what the model does with it, and where that came from. The model data is on each `IfcDoor` / `IfcWindow` in `inputs/ground_floor/ground-floor.yaml` (field meanings: [design/ground-floor.md](design/ground-floor.md), Windows and Doors). Openings not listed here follow the 2022 DWG (`RD Šíma stavba.dwg`) as vendored.

Sources: **Petr 2026-11-12** = Petr's calls on 12 Nov 2026 (relayed by Cody). **Petr 2026-10-05** = the earlier review in the YAML header. **DWG** = the 2022 drawing, plan (layer silná, swing arcs) or elevations (POHLEDY). Where Petr and the DWG differ, Petr wins and the row says so.

Hinge sides are named by compass jamb. "Inward" means into the room the door serves, away from the hallway.

## Doors

| Door | Rooms | Type | Hinge / direction | Head | Source |
| --- | --- | --- | --- | --- | --- |
| D-OP03 | 1.11 bedroom → 1.10 Šatna | Double pocket (bi-parting), 1.8 m | Two halves slide into the wall over their own jambs | 2.10 | Petr 2026-11-12 (#104) |
| D-OP06 | 1.11 bedroom → 1.09 en-suite | Hinged | Hinge flipped to the east jamb; opens into 1.09; leaf flush with the bedroom face of W-018 | 2.10 | Petr 2026-11-12 ("flip the hinge"); DWG agrees. Flush side assumed (no hallway): the bedroom, the room you come from |
| D-OP09 | 1.11 bedroom → 1.05 Chodba | Hinged | Hinge on the south jamb; opens west, into the bedroom; leaf flush with the hallway (east) face of W-033 | 2.10 | Floor-plan arc on the bedroom side, `docs/electrical/rooms/1.11-geometry.md`; hinge and swing were already the model defaults |
| D-OP10 | 1.05 Chodba → 1.12 | Hinged | Hinge flipped to the east jamb; opens inward, into 1.12; leaf flush with the hallway face of W-013 | 2.10 | Petr 2026-11-12; DWG agrees |
| D-OP14 | 1.05 → 1.13 | Hinged | As OP10, into 1.13; leaf flush with the hallway face of W-013 | 2.10 | Petr 2026-11-12; DWG agrees |
| D-OP18 | 1.05 → 1.14 | Hinged | As OP10, into 1.14; leaf flush with the hallway face of W-013 | 2.10 | Petr 2026-11-12; DWG agrees |
| D-OP22 | 1.05 → 1.15 Pracovna | Hinged | As OP10, into 1.15; leaf flush with the hallway face of W-013 | 2.10 | Petr 2026-11-12; DWG agrees |
| D-OP19 | 1.05 → 1.06 WC | Hinged | The reference for OP11 and OP17: leaf flush on the hallway face line (W-017, y 9.475); opens inward, into 1.06 | 2.10 | Petr 2026-11-12 ("the toilet is right") |
| D-OP11 | 1.05 → 1.08 Prádelna | Hinged | Hinge on the same side as OP19 (west/start jamb); opens inward, into 1.08; leaf flush on the hallway face line (`LeafOffset` −0.5925 m) | 2.10 | Petr 2026-11-12; DWG draws the leaf on the hallway face line |
| D-OP17 | 1.05 → 1.07 Koupelna | Hinged | As OP11, into 1.07 | 2.10 | Petr 2026-11-12; DWG as OP11 |
| D-OP20 | 1.03 Spíž ↔ outside (D2) | Hinged, exterior | Hinge stays on the south jamb; opens inward, east into 1.03 | 2.15 | Petr 2026-11-12; DWG arc agrees |
| D-OP23 | 1.05 → 1.04 Technická | Hinged | Hinge flipped to the east jamb; opens inward, into 1.04; leaf flush with the hallway face of W-024 | 2.10 | Petr 2026-11-12; DWG agrees |
| D-OP24 | 1.02 living room | Pocket, single leaf (`SLIDING_TO_RIGHT`) | Slides north into the wall | 2.45 | Petr 2026-11-12 ("the three tall doors are pocket doors"); direction from the DWG's parked leaf (y 11.15–12.20) |
| D-OP25 | 1.02 living room | Pocket, single leaf (`SLIDING_TO_LEFT`) | Slides south into the wall | 2.45 | As OP24; DWG leaf y 12.95–13.90 |
| D-OP33 | 1.02 living room | Pocket, single leaf (`SLIDING_TO_RIGHT`) | Slides north into the wall | 2.45 | As OP24; DWG leaf y 11.05–12.20 |
| D-OP32 | 1.01 Zádveří ↔ 1.24 Terasa (west) | Glazed hinged "balcony" door: glass pane in a 70 mm frame (`Pset_DoorCommon.GlazingAreaFraction` 0.8) | Hinge on the south jamb; opens inward, east into 1.01 | 2.50 | Petr 2026-11-12 ("a hinged door but made out of glass"); hinge and swing from Petr's 11:43 sketch (purple arcs on the PR 106 preview). Overrides the DWG (north hinge, out onto the terrace) |
| D-OP34 | 1.01 Zádveří → 1.20 Koupelna | Hinged | Hinge on the east jamb; opens inward, south into 1.20; leaf flush with the zádveří face of W-015 | 2.10 | Petr's 11:43 sketch (purple arcs on the PR 106 preview) (the model had the west jamb, opening north into 1.01) |
| D-OP37 | 1.01 Zádveří → 1.19 WC | Hinged | Hinge on the south jamb; opens inward, east into 1.19; leaf flush with the zádveří face of W-059 | 2.10 | Petr's 11:43 sketch (purple arcs on the PR 106 preview); the DWG agrees. Replaces the earlier relayed "flip the hinge" (north jamb) |
| D-OP38 | 1.01 Zádveří → 1.17 Chodba (runs on into the garage, no door between) | Hinged | Hinge on the south jamb; opens toward the garage (east, into 1.17); leaf flush with the zádveří face of W-059 | 2.50 = OP39b head | Head: Petr 2026-11-12 (11:17). Hinge and swing: Petr's 11:43 sketch (purple arcs on the PR 106 preview); the DWG agrees. Replaces the earlier relayed "flip the hinge" (north jamb). A "2500" text sits beside it in the DWG. Flush side assumed: both sides are circulation, so the entrance hall 1.01 |
| D-OP39a | 1.01 main entrance | Hinged | Unchanged | 2.50 = OP39b head (was 2.15) | Petr 2026-11-12 ("same as the window directly beside it") |
| D-OP40 | 1.22 garzonka → 1.21 bathroom | Hinged | Hinge flipped to the east jamb; still opens inward, into 1.21; leaf flush with the 1.22 face of W-008 | 2.10 | Petr 2026-11-12; DWG agrees. Flush side assumed (no hallway): the garzonka, the room you come from |
| D-OP49 (D6) | 1.16 Garáž, east | Sectional overhead (`USERDEFINED` / `SECTIONAL_OVERHEAD`) | Rises into the garage ceiling; tap toggles, up/down arrow | 2.25 (TODO) | Petr 2026-11-12; marks D6 in DWG POHLED SEVEROVÝCHODNÍ |
| D-OP50 (D5) | 1.16 Garáž, east | Sectional overhead | As D-OP49 | 2.25 (TODO) | As D-OP49; mark D5 |

## Windows

| Window | Room | Type | Source |
| --- | --- | --- | --- |
| WIN-OP01 (O3) | 1.11 west, wide | Fixed | Petr 2026-11-12 (#105). DWG draws a sash; Petr wins |
| WIN-OP02 (O4) | 1.11 west, narrow | Fixed | Petr 2026-11-12 (#105). DWG: tilt-and-turn |
| WIN-OP05 (O2) | 1.11 south | West half slides east, east half fixed | Petr 2026-11-12 (#105); DWG agrees |
| WIN-OP08, OP13, OP16 (O2) | 1.12, 1.13, 1.14 south | As OP05 | Petr 2026-11-12 (#105); DWG agrees |
| WIN-OP21 (O1) | 1.15 Pracovna south | Mirrored: east half slides west | Petr 2026-11-12 (#105); DWG agrees |
| WIN-OP35 (O10) | 1.23 garzonka south | As OP05 | Petr 2026-11-12 (#105, "unsure"); DWG decides |
| WIN-OP28 (O11) | 1.02 south, middle | Fixed | Petr 2026-11-12 |
| WIN-OP27 | 1.02 south, west part of O11 | Slides east 2.315 m to the middle of OP28. Cut 2.5 m high, sill 0 | Petr 2026-11-12 ("the two sides slide toward the middle and meet"). Height assumed equal to OP28 (the source gives only the head) |
| WIN-OP29 | 1.02 south, east part of O11 | Slides west 2.315 m, meets OP27 | As OP27 |
| WIN-OP26 | 1.05 Chodba west, tall | Fixed | Petr 2026-11-12 |
| WIN-OP39b | 1.01, beside the main entrance | Fixed | Petr 2026-11-12; DWG draws fixed glazing |
| WIN-OP04 (O5) | 1.10 Šatna north, small high | Fixed | Petr 2026-11-12 ("all small windows are fixed"). DWG: bottom-hung |
| WIN-OP07 (O5) | 1.09 Koupelna north, small high | Fixed | As OP04 |
| WIN-OP12 (O6) | 1.08 Prádelna north, small high | Fixed | As OP04. DWG: tilt-and-turn |
| WIN-OP15 (O7) | 1.07 Koupelna north, small high | Fixed, two panes | As OP04. DWG: two bottom-hung sashes |
| WIN-OP42 (O8) | 1.17 Chodba north, small high | Fixed, two panes | As OP15 |
| WIN-OP30 | 1.23 east, small high | Fixed | As OP04. Not in any DWG elevation |
| WIN-OP31 | 1.20 east, small high | Fixed | As OP30 |
| WIN-OP45, OP46, OP47, OP48 (O9) | 1.16 Garáž, small high | Fixed | As OP04. DWG: bottom-hung |


## Reverse interior doors

Petr, 2026-11-12: "The hinged doors are 'reverse' door (so the sit flush with hallway wall but open inward into rooms)". The frames are "invisible": flush and plastered over, so the model has no separate frame solid on these leaves, only the 40 mm timber leaf (`DOOR_LEAF_MM`). This is the geometry change that the materials-catalogue work (PR 111, branch `materials-catalogue`) flagged as still open; that branch's `open:` note at the end of this file is left untouched here so the two PRs do not conflict.

**Rule.** Each interior hinged leaf sits with its hallway/circulation face coplanar with that face of the wall, and swings into the room. The property is `Pset_BlueprintsDoor.FlushFace` (`+` or `−` along the host wall's local +Y, the same convention as `Swing`). The builder (`flush_leaf_offset_m` in `models/ground_floor.py`) computes the shift from the wall thickness and the leaf thickness, so a later change of either still keeps the face flush. `LeafOffset`, if set, is an absolute override: it wins over `FlushFace`.

On W-017 the axis *is* the drawn hallway face (no measured thickness; [design/ground-floor.md](design/ground-floor.md)). `FlushFace` then sits the leaf on the room side of that axis, so the hallway face of the leaf is coplanar with y 9.475. OP11 and OP17 void W-022 (axis y 10.0875), whose own south face is not the hallway line; they keep `LeafOffset` −0.5925 m so their hallway faces share the W-017 line. (The earlier −0.6125 m put the leaf midplane on that line. Half of the 40 mm leaf is added so the face, not the centre, is flush, matching OP19.)

The existing hinge sides, swing directions and viewer arrows are unchanged: the pivot moves with the leaf (it stays on the hinge edge, mid-thickness) and `sign` is still taken from `HingeSide` and `Swing`.

**Excluded** from the rule: the main entrance (D-OP39a), the terrace glazed door (D-OP32), the garage sectional doors (D-OP49, D-OP50), sliding and pocket doors (D-OP03, D-OP24, D-OP25, D-OP33), and the two exterior hinged doors (D-OP20 pantry D2, and D-OP41 — see assumptions).

### Per-door flush

| Door | Rooms | Flush side (circulation) | Swing | How |
| --- | --- | --- | --- | --- |
| D-OP06 | 1.11 → 1.09 en-suite | Bedroom face of W-018 (south, local −Y). Assumed: no hallway, flush with the room you come from | North, into 1.09 | `FlushFace: "-"` |
| D-OP09 | 1.11 → 1.05 Chodba | Hallway (east, local −Y of W-033) | West, into the bedroom | `FlushFace: "-"` |
| D-OP10 | 1.05 → 1.12 | Hallway face of W-013 (north, local +Y) | South, into 1.12 | `FlushFace: "+"` |
| D-OP14 | 1.05 → 1.13 | As OP10 | South, into 1.13 | `FlushFace: "+"` |
| D-OP18 | 1.05 → 1.14 | As OP10 | South, into 1.14 | `FlushFace: "+"` |
| D-OP22 | 1.05 → 1.15 Pracovna | As OP10 | South, into 1.15 | `FlushFace: "+"` |
| D-OP19 | 1.05 → 1.06 WC | Hallway face line, W-017 axis y 9.475 (south, local −Y). The axis is the face | North, into 1.06 | `FlushFace: "-"` (axis is the face) |
| D-OP11 | 1.05 → 1.08 Prádelna | Same hallway line as OP19, not W-022's own face | North, into 1.08 | `LeafOffset: -0.5925` |
| D-OP17 | 1.05 → 1.07 Koupelna | As OP11 | North, into 1.07 | `LeafOffset: -0.5925` |
| D-OP23 | 1.05 → 1.04 Technická | Hallway face of W-024 (south, local −Y) | North, into 1.04 | `FlushFace: "-"` |
| D-OP34 | 1.01 Zádveří → 1.20 Koupelna | Zádveří face of W-015 (north, local +Y) | South, into 1.20 | `FlushFace: "+"` |
| D-OP37 | 1.01 Zádveří → 1.19 WC | Zádveří face of W-059 (west, local +Y) | East, into 1.19 | `FlushFace: "+"` |
| D-OP38 | 1.01 Zádveří → 1.17 Chodba | Zádveří face of W-059 (west, local +Y). Assumed: both sides are circulation, flush with 1.01, matching the already specified swing into 1.17 | East, into 1.17 | `FlushFace: "+"` |
| D-OP40 | 1.22 → 1.21 bathroom | 1.22 face of W-008 (south, local −Y). Assumed: no hallway, flush with the room you come from | North, into 1.21 | `FlushFace: "-"` |

### Assumptions

- **D-OP06** and **D-OP40** stand between two rooms with no hallway. The flush side is the room you come from (bedroom 1.11, garzonka 1.22); the leaf opens into the bathroom, as already specified.
- **D-OP38** stands between two circulation spaces (zádveří 1.01 and the garage hall 1.17). The flush side is 1.01, the entrance hall you meet first, and the leaf still opens east into 1.17.
- **D-OP41** (1.22 → 1.18 outdoor store) is in the 450 mm exterior wall W-063, the same thickness family as the pantry exterior door D-OP20. It is treated as an exterior door and is not reversed. It has no hinge or swing note from Petr.

## TODO (waiting on Petr)

- [ ] Height of the garage doors D5/D6 (D-OP50, D-OP49). The model keeps the DWG's 2.25 m.
- [ ] Sectional track: 4 sections and a 0.3 m bend are a simplified animation, not a chosen product.
- [ ] OP27/OP29 height: assumed 2.5 m, sill 0 (same as OP28).
- [ ] Pocket doors OP24, OP25, OP33: the leaf runs in the wall's centre plane; the DWG draws it parked on the living-room face. Which is the real pocket?

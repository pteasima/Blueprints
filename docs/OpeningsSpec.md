# Openings spec (ground floor)

Every door and window Petr has said something about, what the model does with it, and where that came from. The model data is on each `IfcDoor` / `IfcWindow` in `inputs/ground_floor/ground-floor.yaml` (field meanings: [design/ground-floor.md](design/ground-floor.md), Windows and Doors). Openings not listed here follow the 2022 DWG (`RD Šíma stavba.dwg`) as vendored.

Sources: **Petr 2026-11-12** = Petr's calls on 12 Nov 2026 (relayed by Cody). **Petr 2026-10-05** = the earlier review in the YAML header. **DWG** = the 2022 drawing, plan (layer silná, swing arcs) or elevations (POHLEDY). Where Petr and the DWG differ, Petr wins and the row says so.

Hinge sides are named by compass jamb. "Inward" means into the room the door serves, away from the hallway.

## Doors

| Door | Rooms | Type | Hinge / direction | Head | Source |
| --- | --- | --- | --- | --- | --- |
| D-OP03 | 1.11 bedroom → 1.10 Šatna | Double pocket (bi-parting), 1.8 m | Two halves slide into the wall over their own jambs | 2.10 | Petr 2026-11-12 (#104) |
| D-OP06 | 1.11 bedroom → 1.09 en-suite | Hinged | Hinge flipped to the east jamb; opens into 1.09 | 2.10 | Petr 2026-11-12 ("flip the hinge"); DWG agrees |
| D-OP10 | 1.05 Chodba → 1.12 | Hinged | Hinge flipped to the east jamb; opens inward, into 1.12 | 2.10 | Petr 2026-11-12; DWG agrees |
| D-OP14 | 1.05 → 1.13 | Hinged | As OP10, into 1.13 | 2.10 | Petr 2026-11-12; DWG agrees |
| D-OP18 | 1.05 → 1.14 | Hinged | As OP10, into 1.14 | 2.10 | Petr 2026-11-12; DWG agrees |
| D-OP22 | 1.05 → 1.15 Pracovna | Hinged | As OP10, into 1.15 | 2.10 | Petr 2026-11-12; DWG agrees |
| D-OP19 | 1.05 → 1.06 WC | Hinged | Unchanged. The reference for OP11 and OP17: hangs on the hallway face line (W-017, y 9.475) | 2.10 | Petr 2026-11-12 ("the toilet is right") |
| D-OP11 | 1.05 → 1.08 Prádelna | Hinged | Hinge on the same side as OP19 (west/start jamb); opens inward, into 1.08; leaf flush on the hallway face (`LeafOffset` −0.6125 m) | 2.10 | Petr 2026-11-12; DWG draws the leaf on the hallway face line |
| D-OP17 | 1.05 → 1.07 Koupelna | Hinged | As OP11, into 1.07 | 2.10 | Petr 2026-11-12; DWG as OP11 |
| D-OP20 | 1.03 Spíž ↔ outside (D2) | Hinged, exterior | Hinge stays on the south jamb; opens inward, east into 1.03 | 2.15 | Petr 2026-11-12; DWG arc agrees |
| D-OP23 | 1.05 → 1.04 Technická | Hinged | Hinge flipped to the east jamb; swing unchanged | 2.10 | Petr 2026-11-12; DWG agrees |
| D-OP24 | 1.02 living room | Pocket, single leaf (`SLIDING_TO_RIGHT`) | Slides north into the wall | 2.45 | Petr 2026-11-12 ("the three tall doors are pocket doors"); direction from the DWG's parked leaf (y 11.15–12.20) |
| D-OP25 | 1.02 living room | Pocket, single leaf (`SLIDING_TO_LEFT`) | Slides south into the wall | 2.45 | As OP24; DWG leaf y 12.95–13.90 |
| D-OP33 | 1.02 living room | Pocket, single leaf (`SLIDING_TO_RIGHT`) | Slides north into the wall | 2.45 | As OP24; DWG leaf y 11.05–12.20 |
| D-OP37 | 1.01 Zádveří → 1.19 WC | Hinged | Hinge flipped to the north jamb; opens inward, east into 1.19 | 2.10 | Petr 2026-11-12 ("the toilet door next to it opens inwards"). Differs from the DWG (south hinge) |
| D-OP38 | 1.01 Zádveří → 1.17 Chodba (runs on into the garage, no door between) | Hinged | Hinge flipped to the north jamb; opens toward the garage (east, into 1.17) | 2.50 = OP39b head | Petr 2026-11-12 (the "garage entrance door" and the "door into the garage hallway" are this one door). DWG opens into 1.17 too but hinges south. A "2500" text sits beside it in the DWG |
| D-OP39a | 1.01 main entrance | Hinged | Unchanged | 2.50 = OP39b head (was 2.15) | Petr 2026-11-12 ("same as the window directly beside it") |
| D-OP40 | 1.22 garzonka → 1.21 bathroom | Hinged | Hinge flipped to the east jamb; still opens inward, into 1.21 | 2.10 | Petr 2026-11-12; DWG agrees |
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

## TODO (waiting on Petr)

- [ ] Height of the garage doors D5/D6 (D-OP50, D-OP49). The model keeps the DWG's 2.25 m.
- [ ] Sectional track: 4 sections and a 0.3 m bend are a simplified animation, not a chosen product.
- [ ] OP27/OP29 height: assumed 2.5 m, sill 0 (same as OP28).
- [ ] OP37 and OP38 hinge sides: Petr's flip differs from the DWG, which hinges both on the south jamb. Confirm.
- [ ] Pocket doors OP24, OP25, OP33: the leaf runs in the wall's centre plane; the DWG draws it parked on the living-room face. Which is the real pocket?

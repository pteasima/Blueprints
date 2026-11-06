# Obývák 1.02 — roof and section

Facts the living-room section uses. Geometry is `models/obyvak_geom.py` and `models/obyvak.py`. Legacy sheets that were ported are listed in `inputs/README.md`.

Measured figures below come from constructing `ObyvakLayout(ObyvakParams())` while writing this file. They are derived, not extra inputs.

## Visual centre is the false ridge

The room’s visual centre is the false ridge: the middle of the clear width, which is the room width minus the 450 mm north cabinets. It is not the middle of the wall-to-wall width.

| | mm | storey Y |
| --- | ---: | ---: |
| Window wall (south) | X = 0 | 10.25 |
| North inner face | 5350 | 15.60 |
| Cabinet front, 450 mm south of that face | 4900 | 15.15 |
| Clear width | 4900 | — |
| False ridge, middle of the clear width | 2450 | 12.700 |
| Wall-to-wall middle (`x_ridge`) | 2675 | 12.925 |

2450 = (5350 − 450) / 2. In the storey frame that is 10.25 + 2.450 = 12.700, which is also the midpoint of y 10.25–15.15. The wall-to-wall middle is 225 mm further north.

Source for the intent “visual centre”: the owner, in the 2026-11-06 request that added this file. Source for the formula: `furniture_width`, `x_furn`, `x_false` in `models/obyvak_geom.py`. The same X = 2450 is the “False ridge” row of `docs/acoustics/LAYOUT.md`. Source for the storey faces: `ROOM_Y0` / `ROOM_Y1` in `models/ground_floor.py`. Source for “225 mm south of the full-room centre” as a television placement: PR #83 body and the living-room note on that branch’s `furnishings.yaml` (not merged; see [furnishings.md](furnishings.md)).

`x_ridge` is only the roof’s geometric centre, where the rafters peak. Do not aim a television, a table, or a talker at it.

## The two 450 mm depths

**450 mm at the cabinets is the eave furniture depth. 450 mm at the living gable is the bass trap. They are not the same object.**

Source: the closing line of the module note in `models/obyvak.py`, and `models/obyvak_elevation.py` (“450 mm předstěny u gauče není totéž jako 450 mm skříní u okapu v řezu”).

| Name | Value | What it is |
| --- | ---: | --- |
| `furniture_width` | 450 mm | Depth of the soffit band, from the cabinet wall toward the windows. Dining and living-area cabinets are this deep too. Sets the soffit face (`x_furn` = 4900) and the false ridge. |
| `furniture_height` | 2450 mm | Top of that band. Same figure Petr wrote for the tall cabinets (furnishings file). |
| `furniture_gap` | 20 mm | Gap between that top and the soffit underside. Underside is 2470 mm (`z_nabeh_bot`). |
| `predstena_living` | 450 mm | Trap on the living gable, Y = 0, existing only above Z = 2450. |
| `predstena_kitchen` | 190 mm | Trap on the kitchen gable, Y = 11100, above Z = 2450. |

The soffit band is 450 mm deep, and so are the dining and living-area cabinets. The 600 mm kitchen tall cabinets stick out beyond that line on purpose, 150 mm past the soffit face. The section keeps the one 450 mm line (`furniture_width`). The false ridge stays the middle of the width minus that 450 mm. It does not move out to the tall-cabinet face. Source: Petr, 2026-11-06. The 600 mm depth is the tall-run note in `furnishings.yaml`.

## Room and which gable is which

| | |
| --- | --- |
| Clear width, window wall to cabinet wall | 5350 mm |
| Clear length, living gable to kitchen gable | 11100 mm |
| Roof pitch | 40° |
| Living gable | Y = 0. One sliding door, at the window corner, 1000 mm. Carries the 450 mm trap. |
| Kitchen gable | Y = 11100. Two sliding doors: window corner 1100 mm, and a 1000 mm door at x = 3700. That leaves 650 mm of wall between the door and the cabinet eave (`pocket_spiz_inset`: 5350 − 650 − 1000). Carries the 190 mm trap. |
| Window wall | X = 0, opposite the cabinets. Two HS portals of 2500 mm and one fixed / sliding pane of 4500 mm, head 2500 mm. Noted as drawing D.1.1.03. The listed bays leave 200 mm piers. The comment says “about 200 mm”. |
| Structural ridge input | `ridge_z` = 6057.6 mm, raised so the rafter underside sits on the wall-plate top at the plate’s mid-X. The 40° pack is unchanged. |

Source: `ObyvakParams` and the module note in `models/obyvak_geom.py`. Door list: `pocket_doors`, `eave_windows`. The 650 mm clearance is `pocket_spiz_inset`.

East and north, in the storey frame, are in [README.md](README.md).

## Current section, measured

| | mm |
| --- | ---: |
| Interior eave, both slopes (`h_start`) | 3019.97 |
| False ridge (`z_false`) | 5075.77 |
| Soffit underside over the cabinets | 2470 |
| Soffit face (`x_furn`) | 4900 |
| Slope board ends on the lid (`x_gkf_kink`) | 4713.18 |
| Wall-plate top | 3300 |
| Under-rafter wool, left, the value that sets the face | 160 |
| Right cavity, room face to rafter underside | 436.75 |

The left stack is the tight one. StoSilent, 100 mm NaturHeld, one GKF, the CD, the vapour brake and 160 mm of wool have to fit under the rafter at the window eave. Both slopes use that room-face height. Source: `ObyvakLayout` comments, and the PR #77 body, which prints the same eave and the same false-ridge height.

`docs/acoustics/LAYOUT.md` and `docs/acoustics/obyvak-wave.md` are labeled as the ceiling before PR #77 (eave 3151 mm, false ridge height 5206 mm). Their tables were not recomputed. Do not copy those two heights into a new placement.

## Slope build-up, interior to attic

Both slopes are 100 mm NaturHeld 140 with StoSilent Top Finish + Top Basic (2 + 2 mm), screwed through the GKF into CD profiles perpendicular to the rafters. There is no slope lath and no NaturHeld Flex. Source: `ObyvakParams.naturheld_left` / `naturheld_right`, module note, PR #77.

| Layer | Fact | Source |
| --- | --- | --- |
| Road-side (cabinet) GKF | 2 × 12.5 mm, for road noise. The window slope stays one layer. The room face does not move; the right CD plane moves up by 12.5 mm. | `sdk_layers_right`, PR #70 |
| CD grid | 60×27 at 500 mm. Knauf D112 maximum for 12.5 mm GKF in one or two layers, boards across the profiles. First axis 90 mm from the room face (Knauf allows ≤ 100). 2000 / 2500 / 3000 mm boards then end on a CD. | `cd_spacing`, `cd_first_inset`, PR #75 (was 625 mm) |
| Right-hand grid | Restarts at the false ridge: 90 mm along the slope, then every 500 mm. The false ridge itself has no profile. | `sikmina_cd` comments, PR #77 body |
| Vapour brake | Jutafol N AL 170 Speciál, about 1 mm, on the attic face of the CD, below the wool. Not a variable membrane. Continuous eave to eave. Commit `89330ae`’s subject says “Jutafol 145 Al”; the model and the bill do not. | module note; bill line in `docs/obyvak-skladba-souhrn.csv` |
| Wool | Mineral wool λ 0.039. Left: 160 mm under the rafters, and the same in the rafter bays. Right cavity filled 160+160+120 mm. | `wool_below_left`, `vata_pts`, bill lines 12 and 12b |
| Rafters | 100/160 mm at about 875 mm. First inset 200 mm. | `rafter_w`, `rafter_t`, `rafter_spacing` |
| Ties | 6 × Ø14 from wall plate to wall plate, every other rafter bay, 270 mm clear of the nearer (living-gable) rafter face. Sheet note “6× táhlo ø14 z pozednice”. They sit in the top of the plate so they clear the Ø160 ducts. | `tie_d`, `tie_face_clear`, PR #79 |
| Spot pairs | Five pairs on each slope, between the ties. Pair centre 120 mm vertically above the tie axis, heads 140 mm apart, head Ø70 mm, body 28 mm. | `TIE_LIGHT_*`, PR #79 |
| Racking | 40×2 mm straps at 45°, X across the rafters. | module note |
| Above the rafters | 40 mm vent, 1 mm DHV, 40 mm counter-battens, 40 mm battens, 22 mm tiles. Overhang past the EPS is 80 mm, gutter-sized only. | `vent_t` through `roof_overhang`, PR #37 |

**open:** the bill prices Knauf NatuRoll Pro 039. PR #77’s body instead names Isover Domo Plus 038 for the 160 mm layer, and PR #68’s title names Unifit 033 / NatuRoll 039. The lambda in the model matches 039. Which product was confirmed is not settled.

**open:** hanger catalogue lengths. The section label in `models/obyvak.py` says “Přímý závěs 200 mm” and “Nonius 540 mm”. PR #77 prints a direct-hanger gap of 159 mm, a slope Nonius of 540 mm (gap 436) and a soffit Nonius of 440 mm (drop 407), and says the 540 mm top is still priced as the 440 mm set. An older note in this file said a 140 mm void and a 440 mm Nonius top. The solids were not remeasured, and neither length is chosen here.

`open:` internal StoSilent corners (slope-to-slope, slope-to-gable, slope-to-soffit where the face is plastered) are a tape-cut separation joint, not acrylic on the finish. At the gables the alternative is a StoSilent Profile AP 210 shadow gap. Confirm with the plasterer and Sto for a NaturHeld substrate. Sources are the two Sto links in the module note of `obyvak_geom.py`, and the Czech steps in the PR #77 body.

Because both NaturHeld boards are 100 mm, the room faces and the NaturHeld butts meet on the false ridge (`x_stack_joint` = `x_false`). The CD, foil and wool planes meet 9.72 mm further toward the cabinets (`x_cd_joint` = 2459.72), which is the extra GKF layer on the road side. The formula still shifts `x_stack_joint` if the two boards ever differ. PR #68 was the 60/100 stack, where they did.

## Soffit over the north cabinets

40 mm NaturHeld 140 + StoSilent on the side face. The underside is plain 12.5 mm GKB, because the furniture covers it. Mineral wool fills the acoustic cavity and stops short of the ducts. Source: `soffit_naturheld_t`, `soffit_bottom_t`, PR #71 (underside changed to GKB).

Three Ø160 spiral ducts (HRV supply, HRV extract, AC) sit in a 2-over-1 pack against the cabinet eave, below the lid and above the column heads. They are already anchored to the wall. This box does not hang them. Gaps in the model: 5 mm between ducts, 6 mm off the wall, 10 mm off the lid, in the bay the 40 mm face leaves. Source: `duct_*` comments, PR #41.

The GKF lid (2 × 12.5 mm, extra layer on the attic side) has its top flush with the wall plate. Its cut end meets the plate cheek, above the wall head, not on the plaster. The lid widens until the slope GKF, cut level, lands on it. Source: `z_soffit_lid`, PR #73 and PR #77.

`open:` that slope-to-lid joint is intentionally not detailed. No angle, no UD. Finish of the edge is undecided. Source: PR #77 body (“Open: slope / lid joint”). PR #68 had specified a 40° UD screwed to the soffit CD with an acrylic joint; the later model removed that profile.

The kastlík frame is CD 60×27 at the same 500 mm module, plus a UD on the eave wall. No timber. Furniture and the wall plate do not carry the box. The plate only fixes the board edge. Vertical CD studs hang from the lid CD and brace into the wall UD. Source: module notes in `obyvak_geom.py` and `obyvak.py`.

## Eaves, columns, traps

Left (window) eave: the GKF ends on a UD screwed to the plaster. NaturHeld ends on the plaster too. Wool above the brake fills back up to the plate. There is no direct hanger through the wall plate. Source: `ObyvakLayout` left-eave comment, PR #77.

Terrace wall (X = 0): the glass stops at the 2500 mm head. Above that head the wall is the same plaster, masonry and EPS as the solid eave, cut to the head, 1 mm off the glass. There is no separate lintel piece. Source: `models/obyvak.py` module note, commits `9de1f9a` and `b433609`.

100×100 columns stand in front of the glass at the pier centres and stop one brick course (250 mm, `venec_h`) below the beam. Cabinet eave: 300×300 columns on the room side, same Y grid, drawn as masonry. Walls: 250 mm masonry, 200 mm EPS, 15 mm plaster. Wall plate 140×100 mm, centred on the ring beam. Source: `ObyvakParams`, PR #37.

Bass traps are standalone CW walls on the gable only. They are not hung from the slopes or the soffit. The lining stops at the soffit face as well as under the slopes. GKB 12.5 meets those finishes with a flexible acrylic bead and nothing else. Studs vertical at 625 mm. 1250 mm boards span two bays. 2750 mm sheets cover the peak (about 2626 mm above 2450) with no horizontal joint. Source: `obyvak.py` module note, `bass_*` fields, PR #78.

| | Kitchen, wall → room | Living, wall → room |
| --- | --- | --- |
| Depth | 190 mm | 450 mm |
| Wool against the wall | 130.5 mm | 300 mm |
| Air | 47 mm | 137.5 mm |
| GKB | 12.5 mm | 12.5 mm |
| CW | 50 mm. A 50 mm stud notches 3 mm into the wool. The bay between studs stays 47 mm. | 125 mm, the deepest standard profile that fits, with 12.5 mm of air left behind the stud. |

Source: the bass-trap comments on `ObyvakParams`. The tune note’s “kitchen 130 mm” is this 130.5 mm, rounded.

## What the section does not include

No exterior gable crown (those walls belong to the next rooms). No EPS on the gable shells. The floor slab is the clear room only. Source: `models/obyvak.py` scope list.

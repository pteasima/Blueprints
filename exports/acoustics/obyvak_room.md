# Obývák ceiling — 60 mm of 140, and whether to add more

Duct clearance is not a constraint: the ceiling may move inward. Less than 60 mm of naturheld 140 is structurally out, so it is not in this table. The ranking is early decay (EDT). Lower is shorter, and shorter is what was asked for. T20 is not the ranking. In this room T20 sits on the late tail and on kinks in the Schroeder fit; it is in the CSV and it is not used here.

Same model as the previous ray run. Same shell (plan 5350 × 11100 mm, both slopes, soffit bulkhead, both bass-trap faces). Same three seats, 4000 rays, seeds 4100 + seat, untreated α = 0.03, soffit and bass traps frozen. A hit uses α at the arrival angle. The shell is not rebuilt when the board gets thicker: the change is the stack, not the volume.

| seat | source (m) | receiver (m) |
| --- | --- | --- |
| kitchen | 2.00, 1.60, 1.20 | 2.70, 2.50, 1.20 |
| living (middle) | 2.20, 5.50, 1.20 | 3.00, 6.60, 1.20 |
| gable seat | 2.00, 9.80, 1.10 | 2.80, 8.80, 1.20 |

60 mm of 140 with no Flex reproduced the earlier no-Flex decays exactly (same seeds). 60 mm plus Flex 40 mm reproduced the as-built decays exactly.

## Recommendation

Use 60 mm of naturheld 140 alone. No Flex, no battens. Foil and gypsum stay. The gypsum does not need the latě; the CD grid and the hangers carry it.

Nothing thicker than 60 mm, with or without the 40 mm Flex, moves EDT by more than about 0.1 s at 1000 Hz. That band is inside the Miki window for σ = 60 kPa·s/m². The largest thickness step at 1000 Hz is a few hundredths of a second, and one of them (120 mm, board only, living seat) is slightly longer, not shorter. More board is not better.

Flex 40 mm on the 60 mm board does shorten EDT, but not by enough to hear against that 0.1 s bar: about 0.06 s at the kitchen, 0.07 s in the middle, 0.04 s at the gable, all at 1000 Hz. At 500 Hz the kitchen and the middle shorten by about 0.09 s. That band is still a Miki extrapolation for this resistivity (f/σ < 0.01 below about 600 Hz), so it does not get to pick the ceiling. A 40 mm versus 60 mm Flex check on the 60 mm board, from the previous run, did not move EDT either, so Flex thickness is not a separate lever.

60 mm alone is already the same kind of living-room early decay as the drawn pack: about 0.9 s at the kitchen, about 1.2 s in the middle, about 1.0 s at the gable. Adding the Flex or another 20–60 mm of 140 does not make that shorter in a way a person would notice.

## EDT at 500 Hz

Seconds. 500 Hz rays are geometrically valid. The 140 impedance at this octave centre is still outside the Miki window.

| structure | kitchen | living | gable seat |
| --- | ---: | ---: | ---: |
| 60 mm 140 only | 0.99 | 1.20 | 0.97 |
| 80 mm 140 only | 0.95 | 1.19 | 0.96 |
| 100 mm 140 only | 0.97 | 1.21 | 0.95 |
| 120 mm 140 only | 0.97 | 1.20 | 0.95 |
| 60 mm 140 + Flex 40 | 0.89 | 1.11 | 0.95 |
| 80 mm 140 + Flex 40 | 0.89 | 1.11 | 0.95 |
| 100 mm 140 + Flex 40 | 0.90 | 1.11 | 0.95 |
| 120 mm 140 + Flex 40 | 0.89 | 1.11 | 0.95 |

## EDT at 1000 Hz

Inside the Miki window. This is the band that decides.

| structure | kitchen | living | gable seat |
| --- | ---: | ---: | ---: |
| 60 mm 140 only | 0.92 | 1.19 | 0.95 |
| 80 mm 140 only | 0.92 | 1.19 | 0.97 |
| 100 mm 140 only | 0.92 | 1.20 | 0.95 |
| 120 mm 140 only | 0.92 | 1.23 | 0.95 |
| 60 mm 140 + Flex 40 | 0.86 | 1.12 | 0.91 |
| 80 mm 140 + Flex 40 | 0.87 | 1.12 | 0.92 |
| 100 mm 140 + Flex 40 | 0.88 | 1.12 | 0.92 |
| 120 mm 140 + Flex 40 | 0.87 | 1.13 | 0.91 |

Against 60 mm alone at 1000 Hz, the biggest shortening from any thicker board or from adding Flex is 0.07 s (Flex, living seat). Nothing else in the thickness columns is a shortening you could separate from the run.

## What is still not trusted

- Declared minimum σ = 60 kPa·s/m². Below about 600 Hz that wool's impedance is an extrapolation. 1000 Hz is not.
- StoSilent is transparent. That is an upper bound on absorption. No resistivity was invented for it.
- Bass modes are not in this model. The traps stay sealed membranes; their mid-band Paris α is about 0.001. They are in the sum and they are not the lever.
- Bass wool is the Flex table value for that thickness (6 kPa·s/m²), an assumption, the same in every case. The drawing names no product.
- Scattering is an assumption, and only where there are battens. The board-only slopes are specular. That did not make them longer by 0.1 s at 1000 Hz.
- Untreated α = 0.03 is an assumption and it sets the late tail. It is the same in every case.
- The earlier note ranked by duct clearance and treated the drawn 60/40 pack as the thing to build. Clearance is withdrawn. The numbers above replace that ranking. Sabine/Eyring remain an appendix in the CSV and do not decide this.

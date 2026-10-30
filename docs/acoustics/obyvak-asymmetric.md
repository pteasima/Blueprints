# Asymmetric slopes

> **Status (Oct 30, 2026):** re-run on the current `main` build-up. 60/100 is the chosen pair: NaturHeld 60 mm on the window slope, 100 mm on the cabinet slope, 2× GKF on the cabinet (road) slope. The second GKF layer is behind the rigid-backed slope stack, so this model does not hear it. The soffit is split by area as in the main RT60 model: the side face is StoSilent on NaturHeld 140 40 mm over the soffit wool, and the underside is plain GKB 12.5 over the same wool and duct air. The other pairs are kept for comparison.

Left is the window slope, from the eave up to the false ridge. Right is the cabinet slope, from the ridge down to the soffit. The subwoofer sits against that cabinet wall, at the TV gable. In the cross-section the window slope is on the left and the cabinet slope on the right.

Every slope face is StoSilent on NaturHeld, rigid-backed. `pack()` is `slope_stack`: no mineral wool in the room-facing layers. 60/60, 80/80, 100/100 and 120/120 use that same stack on both sides. The asymmetric runs differ only in the NaturHeld thickness. Nothing is added behind the thinner board.

Mineral wool behind the slope gypsum is not in the model. On the window slope that wool is 160 + 80 mm Unifit 033; on the cabinet slope it is 160 + 320 mm NatuRoll 039. It sits behind the GKF, so the room does not hear it, and the ceiling stays symmetric. `plenum_wool` is a CAD volume for the material list only. No impedance function reads it. The older note about an 80 mm gap under the rafters is the same invisible layer, also excluded.

Wool that is counted, on purpose, is not behind rigid gypsum. The soffit wool is behind the 40 mm NaturHeld side face and the GKB underside (admittance mixed by area on the wave mesh, α mixed by area in Eyring). The trap wool is behind the GKB membrane, which is the bass-trap leaf, not a rigid wall. Both stay at the drawing thicknesses.

Window slope 33.5 m², cabinet slope 33.5 m², between the traps. Domestic sofa, soffit wool and both traps as in the model.

## Furnished T60

| Hz | 60/100 | 60/120 | 80/120 | 60/60 | 80/80 | 100/100 | 120/120 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| 50 | 1.25 | 1.15 | 1.09 | 1.45 | 1.26 | 1.09 | 0.95 |
| 63 | 1.03 | 0.96 | 0.89 | 1.23 | 1.04 | 0.89 | 0.78 |
| 80 | 0.92 | 0.85 | 0.78 | 1.11 | 0.92 | 0.78 | 0.68 |
| 100 | 0.83 | 0.77 | 0.71 | 1.03 | 0.83 | 0.70 | 0.62 |
| 125 | 0.69 | 0.65 | 0.60 | 0.84 | 0.68 | 0.59 | 0.53 |
| 160 | 0.59 | 0.56 | 0.51 | 0.70 | 0.57 | 0.50 | 0.47 |
| 200 | 0.50 | 0.48 | 0.45 | 0.58 | 0.48 | 0.44 | 0.42 |
| 250 | 0.44 | 0.43 | 0.40 | 0.49 | 0.42 | 0.39 | 0.38 |
| 315 | 0.39 | 0.39 | 0.37 | 0.42 | 0.38 | 0.36 | 0.36 |
| 400 | 0.36 | 0.36 | 0.34 | 0.37 | 0.35 | 0.34 | 0.34 |
| 500 | 0.33 | 0.34 | 0.33 | 0.34 | 0.33 | 0.33 | 0.33 |
| 630 | 0.32 | 0.32 | 0.32 | 0.32 | 0.31 | 0.32 | 0.32 |
| 800 | 0.31 | 0.31 | 0.31 | 0.30 | 0.30 | 0.31 | 0.31 |
| 1000 | 0.30 | 0.30 | 0.30 | 0.30 | 0.30 | 0.30 | 0.30 |
| 1250 | 0.30 | 0.30 | 0.30 | 0.29 | 0.30 | 0.30 | 0.30 |
| 1600 | 0.29 | 0.29 | 0.29 | 0.29 | 0.29 | 0.29 | 0.29 |
| 2000 | 0.29 | 0.29 | 0.29 | 0.29 | 0.29 | 0.29 | 0.29 |
| 2500 | 0.29 | 0.29 | 0.28 | 0.29 | 0.28 | 0.29 | 0.29 |
| 3150 | 0.28 | 0.28 | 0.28 | 0.28 | 0.28 | 0.28 | 0.28 |
| 4000 | 0.28 | 0.28 | 0.28 | 0.28 | 0.28 | 0.28 | 0.28 |

## Empty T60

| Hz | 60/100 | 60/120 | 80/120 | 60/60 | 80/80 | 100/100 | 120/120 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| 50 | 1.48 | 1.36 | 1.27 | 1.76 | 1.50 | 1.28 | 1.10 |
| 63 | 1.23 | 1.13 | 1.05 | 1.49 | 1.24 | 1.05 | 0.91 |
| 80 | 1.10 | 1.01 | 0.93 | 1.37 | 1.10 | 0.92 | 0.80 |
| 100 | 1.01 | 0.93 | 0.84 | 1.28 | 1.00 | 0.83 | 0.73 |
| 125 | 0.85 | 0.80 | 0.72 | 1.07 | 0.84 | 0.71 | 0.63 |
| 160 | 0.73 | 0.70 | 0.63 | 0.89 | 0.71 | 0.61 | 0.56 |
| 200 | 0.63 | 0.61 | 0.56 | 0.75 | 0.61 | 0.54 | 0.51 |
| 250 | 0.56 | 0.55 | 0.51 | 0.63 | 0.54 | 0.49 | 0.48 |
| 315 | 0.50 | 0.49 | 0.46 | 0.54 | 0.48 | 0.46 | 0.45 |
| 400 | 0.46 | 0.46 | 0.44 | 0.48 | 0.44 | 0.43 | 0.43 |
| 500 | 0.43 | 0.43 | 0.42 | 0.44 | 0.42 | 0.42 | 0.42 |
| 630 | 0.41 | 0.41 | 0.41 | 0.41 | 0.40 | 0.40 | 0.41 |
| 800 | 0.39 | 0.39 | 0.39 | 0.39 | 0.39 | 0.40 | 0.40 |
| 1000 | 0.38 | 0.38 | 0.39 | 0.38 | 0.38 | 0.39 | 0.39 |
| 1250 | 0.37 | 0.37 | 0.38 | 0.37 | 0.38 | 0.38 | 0.38 |
| 1600 | 0.36 | 0.36 | 0.37 | 0.36 | 0.37 | 0.36 | 0.36 |
| 2000 | 0.36 | 0.36 | 0.36 | 0.36 | 0.36 | 0.35 | 0.35 |
| 2500 | 0.35 | 0.35 | 0.34 | 0.35 | 0.34 | 0.35 | 0.35 |
| 3150 | 0.33 | 0.33 | 0.34 | 0.33 | 0.34 | 0.34 | 0.34 |
| 4000 | 0.32 | 0.32 | 0.32 | 0.32 | 0.32 | 0.32 | 0.32 |

## Bass average, 50–80 Hz

| Pair | Window mm | Cabinet mm | Furnished s | Empty s |
| --- | ---: | ---: | ---: | ---: |
| 60/100 | 60 | 100 | 1.07 | 1.27 |
| 60/120 | 60 | 120 | 0.99 | 1.17 |
| 80/120 | 80 | 120 | 0.92 | 1.08 |
| 60/60 | 60 | 60 | 1.26 | 1.54 |
| 80/80 | 80 | 80 | 1.07 | 1.28 |
| 100/100 | 100 | 100 | 0.92 | 1.08 |
| 120/120 | 120 | 120 | 0.80 | 0.94 |

## Subwoofer seats

Decibels relative to the three-seat mean of 80/80 at the same frequency. Seats are TV end, middle, dining end.

| Pair | 38 Hz | 58 Hz | 140 Hz |
| --- | --- | --- | --- |
| 60/100 | +1.9, -0.7, -2.4 | -1.5, -1.4, +2.2 | +3.0, -2.0, -5.2 |
| 60/120 | +1.9, -0.7, -2.4 | -1.8, -1.8, +1.9 | +2.9, -1.8, -5.7 |
| 80/120 | +1.8, -0.6, -2.4 | -2.0, -2.5, +1.4 | +2.8, -1.7, -5.9 |
| 60/60 | +1.8, -1.1, -3.0 | -1.3, -0.9, +2.7 | +3.6, -1.7, -4.2 |
| 80/80 | +1.9, -0.6, -2.4 | -1.5, -1.7, +2.1 | +3.0, -1.8, -4.8 |
| 100/100 | +1.8, -0.6, -2.4 | -2.1, -2.9, +1.1 | +2.8, -1.7, -5.7 |
| 120/120 | +1.7, -0.6, -2.4 | -2.8, -4.1, +0.1 | +2.6, -1.6, -6.3 |
| 100/60, swapped | +1.9, -0.7, -2.5 | -1.7, -2.2, +1.8 | +3.2, -1.4, -4.5 |

## What each one does

60/100: window slope 60 mm NaturHeld, cabinet slope 100 mm, both rigid-backed, no wool in the pack. Furnished bass 1.07 s, against 80/80 -0.01 s and against 100/100 +0.15 s. Mids 0.32 s.

60/120: window slope 60 mm NaturHeld, cabinet slope 120 mm, both rigid-backed, no wool in the pack. Furnished bass 0.99 s, against 80/80 -0.09 s and against 100/100 +0.07 s. Mids 0.32 s.

80/120: window slope 80 mm NaturHeld, cabinet slope 120 mm, both rigid-backed, no wool in the pack. Furnished bass 0.92 s, against 80/80 -0.15 s and against 100/100 +0.00 s. Mids 0.31 s.

60/60 is NaturHeld only, rigid backing, both slopes 60 mm. Furnished bass 1.26 s (+0.19 s against 80/80), mids 0.32 s.

80/80 is the reference for the seat levels. Furnished bass 1.07 s, mids 0.31 s.

100/100 is the earlier recommendation. Furnished bass 0.92 s (-0.15 s against 80/80), mids 0.31 s. The mids do not move.

120/120 is NaturHeld only, rigid backing, both slopes 120 mm. Furnished bass 0.80 s (-0.27 s against 80/80), mids 0.32 s.

Swapping 60 and 100, so the thicker NaturHeld is on the window and away from the sub, moves the seat levels by at most 0.8 dB at 38, 58 and 140 Hz. One-sided absorption does not matter at these notes. The sub is in the cabinet-wall corner, but the two slopes cover the whole length, and the seats do not notice which side is thicker.

Eyring does see the mix, because 60 mm of NaturHeld is not the same absorber as 100 mm. It does not see which side carries which thickness: the areas are equal, so 60/100 and 100/60 have the same decay. The seat levels say whether the sub, sitting on the cabinet side, notices the swap.

![T60](obyvak-asymmetric-t60.png)

![Seat levels](obyvak-asymmetric-seats.png)


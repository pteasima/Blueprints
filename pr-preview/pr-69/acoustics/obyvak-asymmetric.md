# Asymmetric slopes

Left is the window slope, from the eave up to the false ridge. Right is the cabinet slope, from the ridge down to the soffit. The subwoofer sits against that cabinet wall, at the TV gable. In the cross-section the window slope is on the left and the cabinet slope on the right.

Every slope face is StoSilent on NaturHeld, rigid-backed. `pack()` is `slope_stack`: no mineral wool in the room-facing layers. 60/60, 80/80, 100/100 and 120/120 use that same stack on both sides. The asymmetric runs differ only in the NaturHeld thickness. Nothing is added behind the thinner board.

Mineral wool behind the slope gypsum is not in the model. On the window slope that wool is 160 + 140 mm; on the cabinet slope it is 160 mm plus whatever is left. It sits behind the GKF, so the room does not hear it, and the ceiling stays symmetric. `plenum_wool` is a CAD volume for the material list only. No impedance function reads it. The older note about an 80 mm gap under the rafters is the same invisible layer, also excluded.

Wool that is counted, on purpose, is not behind rigid gypsum. The soffit wool is behind the 40 mm NaturHeld face. The trap wool is behind the GKB membrane, which is the bass-trap leaf, not a rigid wall. Both stay at the drawing thicknesses from the previous run.

Window slope 33.5 m², cabinet slope 33.5 m², between the traps. Sofa, soffit wool and both traps stay as in the last run.

## Furnished T60

| Hz | 60/100 | 60/120 | 80/120 | 60/60 | 80/80 | 100/100 | 120/120 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| 50 | 1.24 | 1.15 | 1.08 | 1.44 | 1.25 | 1.08 | 0.95 |
| 63 | 0.99 | 0.92 | 0.86 | 1.17 | 1.00 | 0.86 | 0.75 |
| 80 | 0.86 | 0.80 | 0.74 | 1.03 | 0.86 | 0.73 | 0.65 |
| 100 | 0.77 | 0.72 | 0.66 | 0.94 | 0.77 | 0.65 | 0.58 |
| 125 | 0.65 | 0.61 | 0.56 | 0.78 | 0.64 | 0.55 | 0.50 |
| 160 | 0.55 | 0.52 | 0.48 | 0.64 | 0.53 | 0.47 | 0.44 |
| 200 | 0.47 | 0.45 | 0.42 | 0.54 | 0.45 | 0.41 | 0.39 |
| 250 | 0.41 | 0.40 | 0.38 | 0.46 | 0.40 | 0.37 | 0.36 |
| 315 | 0.37 | 0.36 | 0.34 | 0.39 | 0.35 | 0.34 | 0.34 |
| 400 | 0.33 | 0.34 | 0.32 | 0.35 | 0.33 | 0.32 | 0.32 |
| 500 | 0.31 | 0.32 | 0.31 | 0.32 | 0.31 | 0.31 | 0.31 |
| 630 | 0.30 | 0.30 | 0.30 | 0.30 | 0.29 | 0.30 | 0.30 |
| 800 | 0.29 | 0.29 | 0.29 | 0.29 | 0.29 | 0.29 | 0.29 |
| 1000 | 0.28 | 0.28 | 0.28 | 0.28 | 0.28 | 0.29 | 0.29 |
| 1250 | 0.28 | 0.28 | 0.28 | 0.28 | 0.28 | 0.28 | 0.28 |
| 1600 | 0.27 | 0.27 | 0.28 | 0.27 | 0.28 | 0.28 | 0.27 |
| 2000 | 0.27 | 0.27 | 0.27 | 0.27 | 0.27 | 0.27 | 0.27 |
| 2500 | 0.27 | 0.27 | 0.27 | 0.27 | 0.27 | 0.27 | 0.27 |
| 3150 | 0.26 | 0.26 | 0.26 | 0.26 | 0.26 | 0.26 | 0.26 |
| 4000 | 0.26 | 0.26 | 0.26 | 0.26 | 0.26 | 0.26 | 0.26 |

## Empty T60

| Hz | 60/100 | 60/120 | 80/120 | 60/60 | 80/80 | 100/100 | 120/120 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| 50 | 1.47 | 1.35 | 1.26 | 1.74 | 1.49 | 1.27 | 1.10 |
| 63 | 1.18 | 1.08 | 1.01 | 1.41 | 1.18 | 1.00 | 0.87 |
| 80 | 1.02 | 0.95 | 0.87 | 1.26 | 1.03 | 0.86 | 0.75 |
| 100 | 0.93 | 0.87 | 0.79 | 1.17 | 0.93 | 0.77 | 0.68 |
| 125 | 0.79 | 0.74 | 0.67 | 0.97 | 0.77 | 0.66 | 0.59 |
| 160 | 0.68 | 0.65 | 0.59 | 0.82 | 0.66 | 0.57 | 0.53 |
| 200 | 0.59 | 0.57 | 0.52 | 0.69 | 0.57 | 0.51 | 0.48 |
| 250 | 0.52 | 0.51 | 0.47 | 0.59 | 0.50 | 0.46 | 0.45 |
| 315 | 0.46 | 0.46 | 0.43 | 0.51 | 0.45 | 0.43 | 0.42 |
| 400 | 0.43 | 0.43 | 0.41 | 0.45 | 0.41 | 0.40 | 0.41 |
| 500 | 0.40 | 0.40 | 0.39 | 0.41 | 0.39 | 0.39 | 0.39 |
| 630 | 0.38 | 0.38 | 0.38 | 0.38 | 0.37 | 0.38 | 0.38 |
| 800 | 0.37 | 0.37 | 0.37 | 0.36 | 0.36 | 0.37 | 0.37 |
| 1000 | 0.36 | 0.36 | 0.36 | 0.35 | 0.36 | 0.36 | 0.36 |
| 1250 | 0.35 | 0.35 | 0.35 | 0.34 | 0.35 | 0.35 | 0.35 |
| 1600 | 0.34 | 0.34 | 0.34 | 0.34 | 0.34 | 0.34 | 0.34 |
| 2000 | 0.33 | 0.33 | 0.33 | 0.34 | 0.33 | 0.33 | 0.33 |
| 2500 | 0.32 | 0.32 | 0.32 | 0.33 | 0.32 | 0.32 | 0.32 |
| 3150 | 0.31 | 0.31 | 0.31 | 0.31 | 0.31 | 0.31 | 0.31 |
| 4000 | 0.30 | 0.30 | 0.30 | 0.30 | 0.30 | 0.30 | 0.30 |

## Bass average, 50–80 Hz

| Pair | Window mm | Cabinet mm | Furnished s | Empty s |
| --- | ---: | ---: | ---: | ---: |
| 60/100 | 60 | 100 | 1.03 | 1.22 |
| 60/120 | 60 | 120 | 0.95 | 1.13 |
| 80/120 | 80 | 120 | 0.89 | 1.05 |
| 60/60 | 60 | 60 | 1.21 | 1.47 |
| 80/80 | 80 | 80 | 1.04 | 1.23 |
| 100/100 | 100 | 100 | 0.89 | 1.04 |
| 120/120 | 120 | 120 | 0.78 | 0.91 |

## Subwoofer seats

Decibels relative to the three-seat mean of 80/80 at the same frequency. Seats are TV end, middle, dining end.

| Pair | 38 Hz | 58 Hz | 140 Hz |
| --- | --- | --- | --- |
| 60/100 | +1.9, -0.6, -2.5 | -1.5, -1.4, +2.2 | +2.9, -1.7, -5.3 |
| 60/120 | +1.9, -0.5, -2.3 | -1.7, -1.7, +1.9 | +2.8, -1.6, -5.7 |
| 80/120 | +2.0, -0.3, -2.0 | -1.9, -2.3, +1.5 | +2.6, -1.5, -5.9 |
| 60/60 | +1.4, -1.2, -3.2 | -1.2, -0.9, +2.7 | +3.4, -1.2, -4.6 |
| 80/80 | +1.9, -0.6, -2.4 | -1.5, -1.7, +2.1 | +3.0, -1.5, -5.0 |
| 100/100 | +2.0, -0.2, -2.0 | -2.0, -2.8, +1.3 | +2.7, -1.5, -5.7 |
| 120/120 | +1.9, -0.2, -2.0 | -2.6, -3.8, +0.3 | +2.5, -1.4, -6.2 |
| 100/60, swapped | +1.8, -0.6, -2.4 | -1.7, -2.2, +1.8 | +3.0, -1.2, -4.8 |

## What each one does

60/100: window slope 60 mm NaturHeld, cabinet slope 100 mm, both rigid-backed, no wool in the pack. Furnished bass 1.03 s, against 80/80 -0.01 s and against 100/100 +0.14 s. Mids 0.30 s.

60/120: window slope 60 mm NaturHeld, cabinet slope 120 mm, both rigid-backed, no wool in the pack. Furnished bass 0.95 s, against 80/80 -0.08 s and against 100/100 +0.06 s. Mids 0.30 s.

80/120: window slope 80 mm NaturHeld, cabinet slope 120 mm, both rigid-backed, no wool in the pack. Furnished bass 0.89 s, against 80/80 -0.14 s and against 100/100 +0.00 s. Mids 0.30 s.

60/60 is NaturHeld only, rigid backing, both slopes 60 mm. Furnished bass 1.21 s (+0.18 s against 80/80), mids 0.30 s.

80/80 is the drawing. Furnished bass 1.04 s, mids 0.30 s. Same dry mids as the last run, bass still about three times longer.

100/100 is the previous recommendation. Furnished bass 0.89 s (-0.15 s against 80/80), mids 0.30 s. The mids do not move.

120/120 is NaturHeld only, rigid backing, both slopes 120 mm. Furnished bass 0.78 s (-0.25 s against 80/80), mids 0.30 s.

Swapping 60 and 100, so the thicker NaturHeld is on the window and away from the sub, moves the seat levels by at most 0.8 dB at 38, 58 and 140 Hz. One-sided absorption does not matter at these notes. The sub is in the cabinet-wall corner, but the two slopes cover the whole length, and the seats do not notice which side is thicker.

Eyring does see the mix, because 60 mm of NaturHeld is not the same absorber as 100 mm. It does not see which side carries which thickness: the areas are equal, so 60/100 and 100/60 have the same decay. The seat levels say whether the sub, sitting on the cabinet side, notices the swap.

![T60](obyvak-asymmetric-t60.png)

![Seat levels](obyvak-asymmetric-seats.png)


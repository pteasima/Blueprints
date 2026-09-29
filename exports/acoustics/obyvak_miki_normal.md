# Obývák normal-incidence absorption (Miki 1990)

Expert result of this slice: normal-incidence absorption of the slope pack
and the soffit pack versus third-octave frequency. Not a measured RT60,
and not a wave solution of the room.

StoSilent Finish+Basic treated as acoustically transparent because no citable flow resistivity was found. This is an upper bound on absorption.
No second facing was run: a citable flow resistivity for a few-millimetre
seamless acoustic plaster was not found. Sto system αw was not copied.

naturheld 140 working resistivity is the declared minimum 60 kPa·s/m².
declared minimum; the true value may be higher.
Gutex Multitherm (about 140 kg/m³) publishes the same >= 60 bound and is not used as a point.
One sensitivity case uses 75 kPa·s/m² from best wood WALL 140 (AFr75, same density),
still a bound, not a Naturheld measurement. STEICOtherm was not used.
Flex uses the sheet table (5 kPa·s/m² up to 60 mm, 6 from 80 mm), not AFr10.

Out-of-range Miki bands (0.01 < f/σ < 1, σ in Pa·s/m²) are computed and flagged.
They are not lab-grade. At 60 kPa·s/m² the naturheld 140 floor puts centres
at and below 500 Hz outside the window.

Sabine and Eyring columns are a cheap check only. Walls, floor, glazing, and the
soffit bulkhead are in the area sum with α = 0, so those times are high.
Bass-trap wool uses a TYPICAL 10 kPa·s/m² placeholder and is not swept.

Open fraction from rost_w / rost_spacing = 0.904000.
As-built ceiling datum h_start = 3124.406 mm,
t_nh_face = 64.0 mm, t_flex_pack = 41.0 mm.

## Slope absorption at 125 / 250 / 500 / 1000 Hz

| case | nh mm | flex mm | σ140 | duct clearance mm | 125 | 250 | 500 | 1000 |
| --- | ---: | ---: | --- | ---: | ---: | ---: | ---: | ---: |
| nh40_flex40 | 40 | 40 | 60 floor | 27.0 | 0.170 | 0.422 | 0.560 | 0.643 |
| nh40_flex60 | 40 | 60 | 60 floor | 7.0 | 0.247 | 0.448 | 0.551 | 0.632 |
| as_built | 60 | 40 | 60 floor | 7.0 | 0.244 | 0.415 | 0.528 | 0.654 |
| nh60_flex60 | 60 | 60 | 60 floor | -13.0 | 0.282 | 0.414 | 0.520 | 0.656 |
| nh80_flex40 | 80 | 40 | 60 floor | -13.0 | 0.278 | 0.402 | 0.525 | 0.659 |
| nh80_flex60 | 80 | 60 | 60 floor | -33.0 | 0.289 | 0.397 | 0.523 | 0.659 |
| as_built_sigma75_wall140_analogue | 60 | 40 | 75 analogue | 7.0 | 0.234 | 0.367 | 0.481 | 0.617 |

## Soffit underside at the same frequencies

Flex depth is the layout cavity (about 428 mm as-built), table σ for that thickness.
Area weight uses the batten fraction of the whole face and overstates the blockage.

| case | soffit flex mm | 125 | 250 | 500 | 1000 |
| --- | ---: | ---: | ---: | ---: | ---: |
| nh40_flex40 | 447.6 | 0.362 | 0.431 | 0.517 | 0.641 |
| nh40_flex60 | 447.6 | 0.362 | 0.431 | 0.517 | 0.641 |
| as_built | 427.6 | 0.305 | 0.389 | 0.515 | 0.658 |
| nh60_flex60 | 427.6 | 0.305 | 0.389 | 0.515 | 0.658 |
| nh80_flex40 | 407.6 | 0.280 | 0.384 | 0.526 | 0.658 |
| nh80_flex60 | 407.6 | 0.280 | 0.384 | 0.526 | 0.658 |
| as_built_sigma75_wall140_analogue | 427.6 | 0.262 | 0.346 | 0.475 | 0.619 |

## As-built third octaves (slope)

| Hz | α slope | α soffit | Miki flag | Sabine s (cheap) | Eyring s (cheap) |
| ---: | ---: | ---: | --- | ---: | ---: |
| 63 | 0.2795 | 0.2470 | out of Miki range: naturheld 140 | 1.85 | 1.77 |
| 80 | 0.2192 | 0.2644 | out of Miki range: naturheld 140 | 2.37 | 2.28 |
| 100 | 0.1179 | 0.2833 | out of Miki range: naturheld 140 | 4.10 | 4.01 |
| 125 | 0.2442 | 0.3050 | out of Miki range: naturheld 140 | 2.17 | 2.09 |
| 160 | 0.3224 | 0.3321 | out of Miki range: naturheld 140 | 1.67 | 1.59 |
| 200 | 0.3729 | 0.3589 | out of Miki range: naturheld 140 | 1.46 | 1.37 |
| 250 | 0.4152 | 0.3888 | out of Miki range: naturheld 140 | 1.31 | 1.23 |
| 315 | 0.4543 | 0.4256 | out of Miki range: naturheld 140 | 1.20 | 1.11 |
| 400 | 0.4924 | 0.4698 | out of Miki range: naturheld 140 | 1.11 | 1.02 |
| 500 | 0.5280 | 0.5148 | out of Miki range: naturheld 140 | 1.03 | 0.94 |
| 630 | 0.5669 | 0.5642 | in range | 0.96 | 0.87 |
| 800 | 0.6106 | 0.6147 | in range | 0.89 | 0.80 |
| 1000 | 0.6538 | 0.6582 | in range | 0.83 | 0.74 |
| 1250 | 0.6954 | 0.6963 | in range | 0.78 | 0.69 |
| 1600 | 0.7337 | 0.7323 | in range | 0.74 | 0.65 |
| 2000 | 0.7608 | 0.7606 | in range | 0.71 | 0.63 |
| 2500 | 0.7858 | 0.7862 | in range | 0.69 | 0.60 |
| 3150 | 0.8097 | 0.8094 | in range | 0.67 | 0.58 |
| 4000 | 0.8290 | 0.8291 | in range | 0.65 | 0.57 |

## Surface inventory (as-built, analytical)

| id | area m² | swept | construction |
| --- | ---: | --- | --- |
| slope | 66.91 | True | StoSilent + naturheld 140 + Flex/battens + foil + GKF + plenum air |
| soffit_underside | 4.71 | True | StoSilent + naturheld 140 + deep Flex cavity + air void + GKF lid |
| soffit_bulkhead | 6.85 | False | vertical naturheld face at the furniture line |
| bass_kitchen | 8.64 | False | MW 80 + air 98 + GKB 12 |
| bass_living | 8.64 | False | GKB 12 + air 138 + MW 300 |
| floor | 59.38 | False | floor slab 150 mm |
| glazing | 23.75 | False | glass 20 mm |
| eave_opaque | 10.93 | False | masonry + plaster, window wall beside and above the glass |
| gable_below_traps | 18.62 | False | gable wall below 2450 mm, door openings removed |
| cabinet_wall | 25.84 | False | plaster below the soffit, cabinet bay |

Bass traps, walls, glass, and floor are not retuned. Their areas follow the
ceiling only where the existing outline already does (trap face, eave wall).

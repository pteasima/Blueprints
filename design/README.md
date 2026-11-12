# Design facts

Real-world facts and the reasons the models use them. The solids stay the geometry source ([AGENTS.md](../../AGENTS.md)); this folder is where a fact can be read without recovering it from a constant.

Read the file for the area before changing a model. Each fact names a source. `guess:` is a number or a reason this repo does not have a source for. `open:` is a decision that is still waiting. A disagreement between two sources is written in **bold**. Do not pick a side in code until that is resolved.

| Area | File |
| --- | --- |
| Living-room roof, section, gables | [obyvak.md](obyvak.md) |
| Room 1.02 kitchen and living-room furniture | [furnishings.md](furnishings.md) |
| Kitchen cabinet drawers (SF-I600a) | [kitchen-cabinets.md](kitchen-cabinets.md) |
| Ground-floor walls and the floor take-off | [ground-floor.md](ground-floor.md) |
| Bathrooms 1.07 and 1.20 | [bathrooms.md](bathrooms.md) |
| Wave-study layout and what it assumes | [acoustics.md](acoustics.md) |
| Surface materials for the realistic render (products, colours, assumptions) | [../materials/README.md](../materials/README.md) |

## Two plan frames

The ground floor and the obývák section are the same room written on different axes. Mixing them is how a centre lands on the wrong wall.

Storey frame, metres, X east, Y north. Source: header of `inputs/ground_floor/ground-floor.yaml`. Room 1.02 inner faces used by the furniture model: x 18.80–29.90, y 10.25–15.60. Source: `ROOM_X0` / `ROOM_Y0` in `models/ground_floor.py`, and the registration notes in `inputs/ground_floor/furnishings.yaml`.

Section frame, millimetres. X runs from the window wall to the cabinet wall (5350). Y runs from the living gable to the kitchen gable (11100). Z up. Source: module note in `models/obyvak_geom.py`.

The spans match: 29.90 − 18.80 = 11.10 m and 15.60 − 10.25 = 5.35 m. The cabinet wall is north (tall-run backs on y = 15.60). The glazed wall is south (`W-023` in `ground-floor.yaml`, room face y = 10.25). PR #83 calls the east inner face x = 29.90 the TV wall, which is the living gable (section Y = 0). West is the kitchen gable (section Y = 11100).

The soffit band is 450 mm deep, and so are the dining and living-area cabinets. The 600 mm kitchen tall cabinets stick out beyond it on purpose. Source: Petr, 2026-11-06. Detail in [obyvak.md](obyvak.md).

`docs/acoustics/LAYOUT.md` and `docs/acoustics/obyvak-wave.md` are labeled as the ceiling before PR #77 (eave 3151 mm, false ridge 5206 mm). The current section is an eave of 3019.97 mm and a false ridge of 5075.77 mm. Do not copy the old heights.

## Disagreements

These are not resolved here.

**open:** three furniture layouts disagree about the living room. The kitchen file on this branch, the unmerged living-room file on PR #83, and the wave-study boxes in `src/blueprints/acoustics/roomwave/geometry.py` do not place the same sofa, television, island, or fridge. On the current PR #83 branch the sofa’s west face, the low base and the bookshelf are all at x = 25.52, and the table-to-sofa gap is 1333 mm. Details are in [furnishings.md](furnishings.md) and [acoustics.md](acoustics.md).

**open:** the slope wool has been named as three products. PR #68’s title says Unifit 033 / NatuRoll 039. The PR #77 body says the under-rafter layer is Isover Domo Plus 038. The current bill of materials (`scripts/export_obyvak_skladba.py`, `docs/obyvak-skladba-souhrn.csv`) prices Knauf NatuRoll Pro 039, and the section comment says λ 0.039. The model has a lambda, not a product enum.

**open:** hanger catalogue lengths, 440 mm and 540 mm. The section label says Nonius 540 mm. PR #77 also prints a 440 mm soffit Nonius and prices the 540 mm top as the 440 mm set. Neither length is chosen. See [obyvak.md](obyvak.md).

# Design facts

Real-world facts and the reasons the models use them. The solids stay the geometry source ([AGENTS.md](../../AGENTS.md)); this folder is where a fact can be read without recovering it from a constant.

Read the file for the area before changing a model. Each fact names a source. `guess:` is a number or a reason this repo does not have a source for. `open:` is a decision that is still waiting. A disagreement between two sources is written in **bold**. Do not pick a side in code until that is resolved.

| Area | File |
| --- | --- |
| Living-room roof, section, gables | [obyvak.md](obyvak.md) |
| Room 1.02 kitchen and living-room furniture | [furnishings.md](furnishings.md) |
| Ground-floor walls and the floor take-off | [ground-floor.md](ground-floor.md) |
| Bathrooms 1.07 and 1.20 | [bathrooms.md](bathrooms.md) |
| Wave-study layout and what it assumes | [acoustics.md](acoustics.md) |

## Two plan frames

The ground floor and the obývák section are the same room written on different axes. Mixing them is how a centre lands on the wrong wall.

Storey frame, metres, X east, Y north. Source: header of `inputs/ground_floor/ground-floor.yaml`. Room 1.02 inner faces used by the furniture model: x 18.80–29.90, y 10.25–15.60. Source: `ROOM_X0` / `ROOM_Y0` in `models/ground_floor.py`, and the registration notes in `inputs/ground_floor/furnishings.yaml`.

Section frame, millimetres. X runs from the window wall to the cabinet wall (5350). Y runs from the living gable to the kitchen gable (11100). Z up. Source: module note in `models/obyvak_geom.py`.

The spans match: 29.90 − 18.80 = 11.10 m and 15.60 − 10.25 = 5.35 m. The cabinet wall is north (tall-run backs on y = 15.60). The glazed wall is south (`W-023` in `ground-floor.yaml`, room face y = 10.25). PR #83 calls the east inner face x = 29.90 the TV wall, which is the living gable (section Y = 0). West is the kitchen gable (section Y = 11100).

## Disagreements

These are not resolved here.

**The published wave-study pages still describe an older ceiling.** `docs/acoustics/LAYOUT.md` lists an interior eave of 3151 mm and a false ridge at 5206 mm. The current section, measured from `ObyvakLayout` while writing this file, is an eave of 3019.97 mm and a false ridge of 5075.77 mm. Those current figures are the ones in the PR #77 body. `docs/acoustics/obyvak-wave.md` still says the kastlík step starts at Z = 3.15 m.

**Three furniture layouts disagree about the living room.** The kitchen file on this branch, the unmerged living-room file on PR #83, and the wave-study boxes in `src/blueprints/acoustics/roomwave/geometry.py` do not place the same sofa, television, island, or fridge. Details are in [furnishings.md](furnishings.md) and [acoustics.md](acoustics.md).

**Inside PR #83 the sofa moved and the pieces around it did not.** The west face of the sofa is x = 26.12. The low base, the bookshelf and the table’s “1333 mm to the sofa” still use x = 25.52.

**The roof’s north cabinet band is 450 mm deep. The kitchen tall cabinets are 600 mm deep.** One soffit line cannot satisfy both. See [obyvak.md](obyvak.md) and [furnishings.md](furnishings.md).

**The slope wool has been named as three products.** PR #68’s title says Unifit 033 / NatuRoll 039. The PR #77 body says the under-rafter layer is Isover Domo Plus 038. The current bill of materials (`scripts/export_obyvak_skladba.py`, `docs/obyvak-skladba-souhrn.csv`) prices Knauf NatuRoll Pro 039, and the section comment says λ 0.039. The model has a lambda, not a product enum.

# Obývák acoustics — facts the wave model uses

The study write-ups stay where they are. This page is the decisions in them, and the places they disagree with the section and with the furniture files. Do not treat a table in those write-ups as the current ceiling or the current sofa.

| Write-up | What it is |
| --- | --- |
| [../acoustics/LAYOUT.md](../acoustics/LAYOUT.md) | Furniture Petr approved for the wave study, and the comparison with his elevation. |
| [../acoustics/obyvak-wave.md](../acoustics/obyvak-wave.md) | How thick the slope board should be, once the soffit step can move the modes. PR #69. |
| [../acoustics/obyvak-tune.md](../acoustics/obyvak-tune.md) | Fill search after the sofa was changed from a porous block to a domestic curve. |
| [../acoustics/obyvak-asymmetric.md](../acoustics/obyvak-asymmetric.md) | Archived. Its own status line says the tables were not recomputed for 100 mm both sides and λ 0.039 wool. |

Code: `src/blueprints/acoustics/roomwave/`. The air volume is built from `ObyvakParams` / `ObyvakLayout` (`load_shape` in `geometry.py`). Furniture positions in that function are the study layout, written out again in `LAYOUT.md`. They are not read from `furnishings.yaml`.

## Ceiling the pages describe

**`LAYOUT.md` and `obyvak-wave.md` describe the ceiling from before PR #77.** Interior eave 3151 mm, false ridge height 5206 mm, kastlík from Z = 3.15 m down to Z = 2.47 m at X = 4.90 m. The current section measures 3019.97 mm and 5075.77 mm ([obyvak.md](obyvak.md)). A new run of `load_shape` would pick up the current section, because it calls `ObyvakLayout`. The published tables would not. They were not recomputed in this documentation pass.

Figures that still match the current section: false ridge at X = 2450 mm, soffit face at X = 4900 mm, soffit underside 2470 mm, traps above Z = 2450 mm, living trap 450 mm, kitchen trap 190 mm. Source: `LAYOUT.md` shell table, checked against `ObyvakLayout`.

## What the air volume includes

Slope impedance is StoSilent (2 + 2 mm) on NaturHeld 140, rigid-backed, normal incidence. The wool under the rafters stays behind the GKF and is not part of the room impedance. Soffit impedance is the 40 mm NaturHeld face plus the mineral wool and the duct void. The underside of that face is now GKB in the section; `obyvak-asymmetric.md` records that change. Gable faces use the membrane model: kitchen 625 mm vertical, living 1000 mm horizontal, taped sheet, as-built wool. The underside of each trap is the limp stack of that wool and air. Floor, plaster and glass use β = α/4 with Eyring coefficients 0.05, 0.04 and 0.03. Source: `obyvak-wave.md`, “What was solved”.

An opaque box where the room is open was rejected. Omitted on purpose: hood (open frame), the open hanging shelf, dining chairs, plants, pendants, downlights, the person, the low bench under the TV, cabinet-wall uppers over the white kitchen, the rug pattern (a plain rug patch stays), the island, the dining table, the fridge, the oven, and every other dark box. The TV mark and the sub dot stay. Source: `LAYOUT.md`, “Omitted”, and the comment in `geometry.py`.

**That omission contradicts the kitchen file and PR #83, which keep the island and the fridge, and add a dining table.** The study comment says Petr removed the island, the dining table, the fridge and the oven for this model. The furnishing file was not edited to match. See [furnishings.md](furnishings.md).

## Furniture the study did keep

Coordinates here are the study frame: X from the window wall, Y from the living (TV) gable toward the kitchen, metres. Source: `LAYOUT.md` and `load_shape`.

| Piece | Placement | Reason written down |
| --- | --- | --- |
| Sofa | Petr’s 4.0 × 4.0 m. Starts at Y = 0.40 so the sub at 0.30 m from both walls stays outside the sofa. Seat 0.60, back 0.95. | Overrides the drawing. The drawing’s shelf is about 3.75 m and reaches the TV gable. `LAYOUT.md`, “Conflicts”. |
| Lamella | Same Y run, Z 1.02–2.45, drawn depth 180 mm. Acoustically wooden lamellas 20 mm off the wall, no wool, about half the shelves filled with books. | `LAYOUT.md` |
| Tall wood units | X from the wall by 0.60, Y 4.40–6.90, up to 2.45. | Kitchen end matches the drawing (about Y = 6.87). TV end follows the 4.0 m shelf, so it is 650 mm further toward the kitchen than the drawing’s wood/shelf joint. |
| Kitchen counter | 0.90 m high. Cabinet wall from Y = 6.90 to the gable, and along the kitchen gable from X = 0.40. Uppers on the kitchen gable only, 350 mm deep, Z 1.45–2.20. | The fridge bay is the same counter as the rest of the wall. |
| TV | On the TV gable, X 2.70–4.30, Z 0.75–1.70. Speakers at the screen edges, Y = 0.08, Z = 1.15. | Edge-on in the cabinet-wall elevation. No bench under it. |
| Sub | Floor, 0.30 m from the cabinet wall and 0.30 m from the TV gable, centre Z = 0.25. | The purple ring on the drawing marks the corner, not this driver. |
| Rug | Floor patch X 1.80–5.20, Y 0.50–4.60. Not a box. | 12 mm porous patch in the wave note. |
| Ears | Z = 1.15. Sofa at X = wall − 0.75, Y = 1.30 / 2.50 / 3.60. Former dining (3.00, 5.40). Former island (2.40, 8.55). | Kept after the furniture was deleted, so the seats can be compared. |
| Talker | (3.00, 5.425), mouth at 1.50. On the old table footprint (X 2.30–3.70, Y 4.80–6.05). | `geometry.py` |

**The study television is not on the false ridge.** Its centre is X = 3.50 m. The false ridge is X = 2.45 m. The wall-to-wall middle is X = 2.675 m. PR #83’s television is on the east wall, centred at the false ridge (storey y = 12.700), overall 2230 × 1277, bottom at 650 mm. These are different sets. Source: `tv_x0, tv_x1` in `geometry.py`, [obyvak.md](obyvak.md), PR #83.

**The study sofa is not the Livom Harvey on PR #83.** 4.0 × 4.0 m against the cabinet wall, versus a 3.78 × 3.78 m module build with its east face on the TV wall. The study sub sits outside the sofa. PR #83’s cube sits inside the east seat, and that PR flags the clash.

**The study counter is 900 mm. The kitchen file is 930 mm.** `LAYOUT.md` also records the drawing’s worktop at about 990 mm, 90 mm above the study box.

Absorption used after the tune, not as a product specification: domestic sofa α = 0.15 at 63 Hz and 0.68 at 500 Hz, checked against the Offecct Lucy 2-seater (SP report 18-106-M8, 12 April 2018) and then held to architectural fabric-seat tables at the mids, because the Lucy is an acoustic product. Books follow Cox and D’Antonio, 2nd ed., 2009, held at 0.54 at 4 kHz so the lamella gap does not collapse the top band. Rug is 12 mm at 20 000 Pa·s/m², Miki. Source: `obyvak-tune.md`, “Furniture absorption”.

The earlier porous sofa (0.40 m at 8 000 Pa·s/m², about α 0.60 at 63 Hz) is why the first bass numbers came out under 0.30 s. It was rejected. Source: the same section.

## Targets and source strengths

Pleasant living-room bass, not a dead studio: decay ratio aimed between 0.40 and 0.90, middle 0.60. ISO 3382 just-noticeable difference 0.05. Source: `PLEASANT_*` and `JND` in `geometry.py`.

Reference monopoles, not a calibrated subwoofer: sub 1.0×10⁻⁴ m³/s, television 0.5×10⁻⁴, talker 1.0×10⁻⁴. Absolute SPL is this source. Source: `Q_SUB`, `Q_TV`, `Q_TALK`.

Mesh of the published wave run: h = 0.22 m. Six elements per wavelength holds up to 260 Hz. The bass decision sits below 160 Hz. A 20 mm move of the slope face is left out of the geometry because it is smaller than the mesh. Source: `obyvak-wave.md`.

Tune recommendation, for the outlines as drawn then: **100 mm NaturHeld, mineral wool, soffit wool 448 mm, kitchen 130 mm, living 300 mm.** Furnished mids (500 and 1 kHz) 0.30 s, bass (50–80 Hz) 0.89 s. Emptying the soffit, swapping wool type, or filling the living trap past the drawing was inside 5% and was not recommended. Source: `obyvak-tune.md`. The current section uses 100 mm and the trap stacks 130.5 / 300 mm. `open:` whether the soffit cavity is still 448 mm after the ceiling drop in PR #77. That was not remeasured here.

`guess:` nothing in the study files says the 4.0 m sofa is a catalogue product. It is “Petr’s 4.0 m sofa”. PR #83 later names a Harvey. Which one is the room is the disagreement above, not a guess about the arithmetic.

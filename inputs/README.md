Place legacy DXF files and prior Python (e.g. from Grok Bot) here.

Parametric ports live under `models/`.

- `obyvak/make_obyvak_sheet_84d0.py` — contractor sheet (řez A + bokorys B + basstrapy). Panel A is ported as `models/obyvak_section.py`.
- `obyvak/make_stit_bokorys_8bdb.py` — gable elevation from the windows (štít–štít, předstěny 190/450). Ported as `models/obyvak_elevation.py`. Combined 3D massing: `models/obyvak.py`.
- `obyvak/make_bass_kuchyne_12ed.py` — detail basstrap kuchyně 190 (hybrid stack + short rear třmen).
- `obyvak/make_bass_obyvak_0a95.py` — detail basstrap obývák 450 (mirrored stack). Layered in `models/obyvak.py` 3D.

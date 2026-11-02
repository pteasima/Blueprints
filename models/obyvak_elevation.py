"""Obývák 1.02 — bokorys od oken (štít–štít), cut from the 3D model solids
through the pocket doors (drawing X = world Y).

X v tomto výkrese = světlá délka obývák↔kuchyň (v 3D to bude Y).
Z up. Podhled je vodorovný pod hřebenem — žádný A-rám vlevo/vpravo.
X=0 is the living gable: one sliding door, 450 mm trap. The far end is the
kitchen gable: two sliding doors, 190 mm trap. Depths themselves are unchanged.
Below: SDK face + local pouzdro pockets (not full-wall pouzdro).

    python -m blueprints.export obyvak_elevation

Zdroj: inputs/obyvak/make_stit_bokorys_8bdb.py.
450 mm předstěny u gauče není totéž jako 450 mm skříní u okapu v řezu.
"""

from __future__ import annotations

from dataclasses import asdict

from obyvak_geom import ObyvakLayout, ObyvakParams


MODEL_NAME = "obyvak_elevation"
EXPORT_KIND = "section"
PARAMS = asdict(ObyvakParams())


def build(params: ObyvakParams | None = None):
    """Longitudinal section through the pocket doors, cut from the 3D model solids."""
    import obyvak

    p = params or ObyvakParams()
    g = ObyvakLayout(p)
    # Cut through a pocket door at each gable (where both overlap in X).
    frames = [c.bounding_box() for c in obyvak.model_parts(p) if c.label == "pocket_frame"]
    lo = max(min(b.min.X for b in frames if b.min.Y < 1.0e3), min(b.min.X for b in frames if b.min.Y > 1.0e3))
    hi = min(max(b.max.X for b in frames if b.min.Y < 1.0e3), max(b.max.X for b in frames if b.min.Y > 1.0e3))
    x_cut = 0.5 * (lo + hi) if hi > lo else g.x_ridge
    shape = obyvak.model_elevation(p, x_cut=x_cut, label=MODEL_NAME)
    meta = {
        "params": asdict(p),
        "kind": EXPORT_KIND,
        "derived": {
            "x_cut": x_cut,
            "h_start": g.h_start,
            "z_soffit": g.z_soffit,
            "predstena_kitchen": p.predstena_kitchen,
            "predstena_living": p.predstena_living,
            "room_length": p.room_length,
        },
    }
    return shape, meta


def notes(p: ObyvakParams | None = None):
    """Gable junction. Czech for the contractor; the procedure is in obyvak_geom."""
    return [
        (400.0, -280.0, "Kout šikmina–štít: StoSilent řezaná spára páskou, bez akrylu"),
        (400.0, -480.0, "alternativně stínová spára StoSilent Profile AP 210"),
        (400.0, -680.0, "potvrdit se štukatérem a Sto, podklad NaturHeld"),
    ]


def annotate(svg_path, dxf_path=None, png_path=None) -> None:
    """Notes sit below the floor. The section viewBox is extended so they are not clipped."""
    import re
    from pathlib import Path

    from obyvak_detail import annotate_notes

    path = Path(svg_path)
    text = path.read_text(encoding="utf-8")

    def _grow(match: re.Match) -> str:
        minx, miny, width, height = (float(v) for v in match.group(1).split())
        return f'viewBox="{minx:.1f} {miny:.1f} {width:.1f} {height + 1100:.1f}"'

    text = re.sub(r'viewBox="([^"]+)"', _grow, text, count=1)
    text = re.sub(
        r'height="([0-9.]+)mm"',
        lambda m: f'height="{float(m.group(1)) + 1100:.1f}mm"',
        text,
        count=1,
    )
    path.write_text(text, encoding="utf-8")
    annotate_notes(svg_path, dxf_path, png_path, notes(), font=120.0, thin=1.0)


if __name__ == "__main__":
    from blueprints.export_utils import export_section, summarize_params

    shape, meta = build()
    paths = export_section(shape, MODEL_NAME)
    print(f"Built {MODEL_NAME}: {summarize_params(meta['derived'])}")
    for fmt, path in paths.items():
        print(f"  {fmt}: {path}")

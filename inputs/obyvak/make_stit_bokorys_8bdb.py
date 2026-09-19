#!/usr/bin/env python3
"""Obývák 1.02 – pohled od oken (z boku střechy) – předstěny štítů 190 / 450.

Longitudální řez / pohled: parallel to ridge, looking from terrace/eave
windows into room 1.02.
  Left  = kitchen (KK) gable  → SDK předstěna 190 mm
  Right = living (gauč) gable → SDK předstěna 450 mm
  Clear span kitchen↔living   = L_ROOM_LONG = 11100 mm
  Eave↔eave 5350 is the OTHER direction (into/out of page) — not this span.

Ceiling along this cut (near ridge centerline) is a high nearly-horizontal
soffit, NOT a left-right 40° A-frame. Slopes pitch toward the eaves
(into / out of page).

DXF R2010 mm + PNG. Do NOT touch make_rez.py or Petr's original DWGs.
Jen kontrola pohledových ploch (bez závěsů / basstrapu / vlny).
"""
from pathlib import Path
import math
import ezdxf
from ezdxf import units
from ezdxf.enums import TextEntityAlignment as A
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.patches import Polygon

OUT_DXF = Path("/workspace/dwg/obyvak-stit-predsteny.dxf")
OUT_PNG = Path("/workspace/dwg/obyvak-stit-predsteny.png")

# ---------- constants (match make_rez where shared; span is LONG) ----------
THETA = math.radians(40.0)
TAN, SIN, COS = math.tan(THETA), math.sin(THETA), math.cos(THETA)

# Transverse clear width (eave↔eave) — used ONLY to compute soffit under ridge
L_ROOM_TRANS = 5350.0
HALF_TRANS = L_ROOM_TRANS / 2.0  # 2675

# THIS view's horizontal span: kitchen gable ↔ living gable (from půdorys)
L_ROOM_LONG = 11100.0

Z_RIDGE_EXT = 5850.0
Z_EAVE_WALL = 3200.0  # eave-wall crown (gable walls rise higher at centerline)
WALL_MASON = 250.0
WALL_EPS = 200.0
WALL_PLASTER = 15.0

# Roof build-up (same as make_rez) → H_START at eave soffit, then ridge soffit
T_FINISH, T_BASIC = 2.0, 2.0
T_NH = 60.0
T_FLEX = 60.0
T_FOIL = 1.0
T_SDK = 12.5
T_CD = 27.0
T_PLENUM = 80.0
T_KROKEV = 160.0
T_VENT, T_DHV, T_KONTRA, T_LAT, T_TASKA = 40.0, 1.0, 40.0, 40.0, 22.0
T_ABOVE_RAF = T_VENT + T_DHV + T_KONTRA + T_LAT + T_TASKA
T_SOFT_BELOW_SDK = T_FINISH + T_BASIC + T_NH + T_FLEX + T_FOIL + T_SDK  # 137.5
T_LEFT = T_PLENUM + T_CD + T_SOFT_BELOW_SDK  # 244.5

Z_RAF_INNER_RIDGE = Z_RIDGE_EXT - (T_ABOVE_RAF + T_KROKEV) / COS
# soffit at eave (x_trans=0): under rafter minus build-up below
H_START = (Z_RAF_INNER_RIDGE - HALF_TRANS * TAN) - T_LEFT / COS  # ≈2890.7
# soffit under ridge along this longitudinal cut (high horizontal line)
Z_SOFFIT = H_START + HALF_TRANS * TAN  # ≈5135.3

# Předstěny
Z_PRED = 2450.0
D_L = 190.0   # kuchyně (left)
D_R = 450.0   # obývák (right)
POUZDRO_D = 120.0  # schematic pocket depth
SDK_BOT = 12.5

X0 = 0.0                    # interior plaster kitchen gable
X1 = L_ROOM_LONG            # interior plaster living gable
X_L_FACE = X0 + D_L         # room face of left předstěna
X_R_FACE = X1 - D_R         # room face of right předstěna

print("=== STIT BOKORYS (longitudální pohled od oken) ===")
print(f"L_ROOM_LONG={L_ROOM_LONG:.0f}  L_ROOM_TRANS={L_ROOM_TRANS:.0f} (NOT this span)")
print(f"H_START={H_START:.4f}  Z_SOFFIT(under ridge)={Z_SOFFIT:.4f}")
print(f"L: D={D_L:.0f} face@{X_L_FACE:.0f}  R: D={D_R:.0f} face@{X_R_FACE:.0f}")
print(f"Z_PRED={Z_PRED:.0f}  Z_RIDGE_EXT={Z_RIDGE_EXT:.0f}")
print("NO left-right A-frame; soffit is high horizontal; slopes → eaves (mimo řez)")

# ---------- DXF ----------
doc = ezdxf.new("R2010", setup=True)
doc.units = units.MM
doc.header["$INSUNITS"] = units.MM
doc.header["$MEASUREMENT"] = 1
msp = doc.modelspace()


def lay(name, color, linetype="CONTINUOUS", lw=25):
    if name not in doc.layers:
        doc.layers.add(name, color=color, linetype=linetype)
        doc.layers.get(name).dxf.lineweight = lw


for n, c, *rest in [
    ("A-OBRYS", 7, 50), ("A-DREVO", 30, 35), ("A-OCEL", 8, 30),
    ("A-SDK", 2, 40), ("A-FOLIE", 1, 18), ("A-VATA", 4, 18),
    ("A-NH", 94, 35), ("A-OMITKA", 253, 25), ("A-KRYTINA", 6, 40),
    ("A-KOTY", 3, 18), ("A-POPIS", 7, 18), ("A-POZN", 8, 18),
    ("A-OSA", 8, 13), ("A-VYPLN", 8, 13), ("A-SCHEMA", 5, 18),
    ("A-ZDIVO", 8, 30), ("A-NABYTEK", 42, 30), ("A-PODHLED", 5, 50),
    ("A-POUZDRO", 8, 25),
]:
    lw = rest[0] if rest else 25
    lt = "DASHED" if n in ("A-OSA", "A-POUZDRO") else "CONTINUOUS"
    lay(n, c, lt, lw)

_TEXT_Q = []


def _emit_text(text, height, layer, rot, xy, align):
    msp.add_text(text, height=height, dxfattribs={"layer": layer, "rotation": rot}).set_placement(
        xy, align=align)


def flush_text():
    for fn in _TEXT_Q:
        fn()
    _TEXT_Q.clear()


def rect(x, y, w, h, layer, hatch=None, hatch_scale=10, hatch_color=None):
    pts = [(x, y), (x + w, y), (x + w, y + h), (x, y + h)]
    msp.add_lwpolyline(pts, close=True, dxfattribs={"layer": layer})
    if hatch:
        hch = msp.add_hatch(color=hatch_color or 256, dxfattribs={"layer": "A-VYPLN"})
        hch.set_pattern_fill(hatch, scale=hatch_scale)
        hch.paths.add_polyline_path(pts, is_closed=True)


def poly(pts, layer, close=True, hatch=None, hatch_scale=12, hatch_color=None, linetype=None):
    attrs = {"layer": layer}
    if linetype:
        attrs["linetype"] = linetype
    msp.add_lwpolyline(pts, close=close, dxfattribs=attrs)
    if hatch:
        hch = msp.add_hatch(color=hatch_color or 256, dxfattribs={"layer": "A-VYPLN"})
        hch.set_pattern_fill(hatch, scale=hatch_scale)
        hch.paths.add_polyline_path(pts, is_closed=True)


def dim_v(x, y0, y1, txt="", htxt=14, tick=8):
    if abs(y1 - y0) < 1:
        return
    msp.add_line((x, y0), (x, y1), dxfattribs={"layer": "A-KOTY"})
    for yy in (y0, y1):
        msp.add_line((x - tick, yy), (x + tick, yy), dxfattribs={"layer": "A-KOTY"})
        msp.add_line((x - tick * 0.75, yy - tick * 0.75),
                     (x + tick * 0.75, yy + tick * 0.75), dxfattribs={"layer": "A-KOTY"})
    t = txt or f"{abs(y1 - y0):.0f}"
    _TEXT_Q.append(lambda t=t, htxt=htxt, x=x, tick=tick, y0=y0, y1=y1: _emit_text(
        t, htxt, "A-KOTY", 90, (x - tick * 2.0, (y0 + y1) / 2), A.MIDDLE_CENTER))


def dim_h(y, x0, x1, txt, htxt=18, tick=8, above=True):
    msp.add_line((x0, y), (x1, y), dxfattribs={"layer": "A-KOTY"})
    for xx in (x0, x1):
        msp.add_line((xx, y - tick), (xx, y + tick), dxfattribs={"layer": "A-KOTY"})
        msp.add_line((xx - tick * 0.75, y - tick * 0.75),
                     (xx + tick * 0.75, y + tick * 0.75), dxfattribs={"layer": "A-KOTY"})
    off = tick * 1.4 if above else -tick * 1.4
    al = A.BOTTOM_CENTER if above else A.TOP_CENTER
    _TEXT_Q.append(lambda txt=txt, htxt=htxt, x0=x0, x1=x1, y=y, off=off, al=al: _emit_text(
        txt, htxt, "A-KOTY", 0, ((x0 + x1) / 2, y + off), al))


def label(x, y, text, h=18, rot=0, layer="A-POPIS", align=A.MIDDLE_LEFT):
    _TEXT_Q.append(lambda text=text, h=h, layer=layer, rot=rot, x=x, y=y, align=align: _emit_text(
        text, h, layer, rot, (x, y), align))


def line(p, q, layer="A-OBRYS"):
    msp.add_line(p, q, dxfattribs={"layer": layer})


# ---- wall extents (gable walls rise to soffit/ridge at this centerline cut) ----
xl_eps = -WALL_PLASTER - WALL_MASON - WALL_EPS
xl_mas = -WALL_PLASTER - WALL_MASON
xl_int = 0.0
xr_int = L_ROOM_LONG
xr_mas = L_ROOM_LONG + WALL_PLASTER + WALL_MASON
xr_eps = L_ROOM_LONG + WALL_PLASTER + WALL_MASON + WALL_EPS
H_GABLE = Z_SOFFIT  # wall top under high soffit at ridge centerline

# floor
poly([(xl_eps, 0), (xr_eps, 0), (xr_eps, -150), (xl_eps, -150)],
     "A-ZDIVO", hatch="ANSI31", hatch_scale=30, hatch_color=8)
label(L_ROOM_LONG / 2, -70, "podlaha 1.NP  ±0,000", 70, align=A.MIDDLE_CENTER)

# left gable: EPS + mason + plaster (up to soffit)
rect(xl_eps, -150, WALL_EPS, H_GABLE + 150, "A-VATA", "ANSI37", 50, 4)
rect(xl_mas, -150, WALL_MASON, H_GABLE + 150, "A-ZDIVO", "ANSI31", 30, 8)
rect(xl_mas + WALL_MASON, 0, WALL_PLASTER, H_GABLE, "A-OMITKA")

# right gable
rect(xr_int, 0, WALL_PLASTER, H_GABLE, "A-OMITKA")
rect(xr_int + WALL_PLASTER, -150, WALL_MASON, H_GABLE + 150, "A-ZDIVO", "ANSI31", 30, 8)
rect(xr_mas, -150, WALL_EPS, H_GABLE + 150, "A-VATA", "ANSI37", 50, 4)

# light crown / wall top under soffit (gable crown – not eave pozednice)
CROWN_H = 80.0
rect(xl_mas, H_GABLE, WALL_MASON + WALL_PLASTER, CROWN_H, "A-DREVO", "ANSI31", 14, 30)
rect(xr_int, H_GABLE, WALL_PLASTER + WALL_MASON, CROWN_H, "A-DREVO", "ANSI31", 14, 30)
label(xl_mas + WALL_MASON / 2, H_GABLE + CROWN_H + 40,
      "koruna štítu", 28, align=A.BOTTOM_CENTER)
label(xr_int + WALL_PLASTER + WALL_MASON / 2, H_GABLE + CROWN_H + 40,
      "koruna štítu", 28, align=A.BOTTOM_CENTER)

# ---- ceiling: high horizontal soffit (NO left-right A-frame) ----
line((xl_int, Z_SOFFIT), (xr_int, Z_SOFFIT), "A-PODHLED")
# slight thickness hint above soffit (plaster build-up schematic)
line((xl_int, Z_SOFFIT + 30), (xr_int, Z_SOFFIT + 30), "A-PODHLED")
label(L_ROOM_LONG / 2, Z_SOFFIT - 120,
      f"podhled pod hřebenem  Z≈{Z_SOFFIT:.0f}  "
      f"(H_start {H_START:.0f} + {HALF_TRANS:.0f}·tan40°)",
      36, align=A.TOP_CENTER, layer="A-POPIS")
label(L_ROOM_LONG / 2, Z_SOFFIT + 90,
      "šikminy k okapům (mimo řez)  →  do / z stránky",
      34, align=A.BOTTOM_CENTER, layer="A-POZN")

# ---- optional light roof outline ABOVE (ridge horizontal, no A-frame L↔R) ----
Z_RAF_TOP = Z_RAF_INNER_RIDGE + T_KROKEV / COS  # outer rafter at ridge
# horizontal ridge tile line
line((xl_eps - 200, Z_RIDGE_EXT), (xr_eps + 200, Z_RIDGE_EXT), "A-KRYTINA")
line((xl_eps - 200, Z_RAF_INNER_RIDGE), (xr_eps + 200, Z_RAF_INNER_RIDGE), "A-DREVO")
line((xl_eps - 200, Z_RAF_TOP), (xr_eps + 200, Z_RAF_TOP), "A-DREVO")
# end ticks suggesting ridge runs into page
for xx in (xl_eps - 200, xr_eps + 200):
    msp.add_circle((xx, Z_RIDGE_EXT), 18, dxfattribs={"layer": "A-KRYTINA"})
label(L_ROOM_LONG / 2, Z_RIDGE_EXT + 100,
      "hřeben +5,850  (rovnoběžně s pohledem; šikminy k okapům mimo řez)",
      36, align=A.BOTTOM_CENTER)

# ---- pouzdro (dashed, below 2450, in front of each nosná zeď) ----
poly([(0, 0), (POUZDRO_D, 0), (POUZDRO_D, Z_PRED), (0, Z_PRED)],
     "A-POUZDRO", hatch="ANSI37", hatch_scale=30, hatch_color=8, linetype="DASHED")
poly([(L_ROOM_LONG - POUZDRO_D, 0), (L_ROOM_LONG, 0),
      (L_ROOM_LONG, Z_PRED), (L_ROOM_LONG - POUZDRO_D, Z_PRED)],
     "A-POUZDRO", hatch="ANSI37", hatch_scale=30, hatch_color=8, linetype="DASHED")
label(POUZDRO_D / 2 + 25, Z_PRED / 2,
      "pouzdro posuvných dveří", 32, rot=90, align=A.MIDDLE_CENTER, layer="A-POZN")
label(L_ROOM_LONG - POUZDRO_D / 2 - 25, Z_PRED / 2,
      "pouzdro posuvných dveří", 32, rot=90, align=A.MIDDLE_CENTER, layer="A-POZN")

# ---- předstěny SDK: Z=2450 → underside of high soffit; closed bottom ----
pred_l = [
    (0, Z_PRED),
    (X_L_FACE, Z_PRED),
    (X_L_FACE, Z_SOFFIT),
    (0, Z_SOFFIT),
]
poly(pred_l, "A-SDK", hatch="ANSI31", hatch_scale=22, hatch_color=2)
line((0, Z_PRED), (X_L_FACE, Z_PRED), "A-SDK")
line((X_L_FACE, Z_PRED), (X_L_FACE, Z_PRED + SDK_BOT), "A-SDK")

pred_r = [
    (L_ROOM_LONG, Z_PRED),
    (X_R_FACE, Z_PRED),
    (X_R_FACE, Z_SOFFIT),
    (L_ROOM_LONG, Z_SOFFIT),
]
poly(pred_r, "A-SDK", hatch="ANSI31", hatch_scale=22, hatch_color=2)
line((L_ROOM_LONG, Z_PRED), (X_R_FACE, Z_PRED), "A-SDK")
line((X_R_FACE, Z_PRED), (X_R_FACE, Z_PRED + SDK_BOT), "A-SDK")

# labels on předstěny
mid_zl = (Z_PRED + Z_SOFFIT) / 2
label(X_L_FACE / 2, mid_zl + 50, "SDK předstěna 190 · kuchyně", 40, align=A.MIDDLE_CENTER)
label((X_R_FACE + L_ROOM_LONG) / 2, mid_zl + 50,
      "SDK předstěna 450 · obývák", 40, align=A.MIDDLE_CENTER)

# side labels
label(xl_eps - 50, H_GABLE / 2, "kuchyně (KK)", 48, rot=90, align=A.MIDDLE_CENTER)
label(xr_eps + 50, H_GABLE / 2, "obývák (gauč)", 48, rot=90, align=A.MIDDLE_CENTER)

label(40, Z_PRED - 100, "omítka (interiér)", 24, align=A.BOTTOM_LEFT, layer="A-POZN")
label(L_ROOM_LONG - 40, Z_PRED - 100, "omítka (interiér)", 24,
      align=A.BOTTOM_RIGHT, layer="A-POZN")

# ---- dimensions ----
dim_h(-320, 0, L_ROOM_LONG, f"světlá délka kuchyně↔obývák  {L_ROOM_LONG:.0f}", htxt=70, tick=35)
dim_h(-560, 0, X_L_FACE, "190", htxt=55, tick=28)
dim_h(-560, X_R_FACE, L_ROOM_LONG, "450", htxt=55, tick=28)

dim_v(-450, 0, Z_PRED, "2450", htxt=55, tick=28)
dim_v(-700, 0, Z_SOFFIT, f"{Z_SOFFIT:.0f}", htxt=55, tick=28)
label(-620, Z_SOFFIT / 2, "podhled", 36, rot=90, align=A.MIDDLE_CENTER)

dim_h(Z_PRED + 220, 0, X_L_FACE, "190", htxt=48, tick=22)
dim_h(Z_PRED + 220, X_R_FACE, L_ROOM_LONG, "450", htxt=48, tick=22)

dim_v(X_L_FACE + 120, Z_PRED, Z_SOFFIT, f"{Z_SOFFIT - Z_PRED:.0f}", htxt=36, tick=18)
dim_v(X_R_FACE - 120, Z_PRED, Z_SOFFIT, f"{Z_SOFFIT - Z_PRED:.0f}", htxt=36, tick=18)

dim_v(xr_eps + 160, 0, Z_EAVE_WALL, "+3,200", htxt=48, tick=28)
dim_v(xr_eps + 380, 0, Z_SOFFIT, f"+{Z_SOFFIT/1000:.3f}".replace(".", ","), htxt=48, tick=28)
dim_v(xr_eps + 600, 0, Z_RIDGE_EXT, "+5,850", htxt=48, tick=28)

# title + notes
label(xl_eps, Z_RIDGE_EXT + 420,
      "Obývák 1.02 – pohled od oken (z boku střechy) – předstěny štítů 190 / 450",
      64, align=A.BOTTOM_LEFT)
label(xl_eps, Z_RIDGE_EXT + 300,
      "zak. 220103 · mm",
      42, align=A.BOTTOM_LEFT)
label(xl_eps, -780,
      "Závěsy / basstrap / vlna — později. Teď jen kontrola pohledových ploch.",
      42, align=A.BOTTOM_LEFT, layer="A-POZN")
label(xl_eps, -920,
      "Světlá délka kuchyně↔obývák 11100; šířka mezi okapy 5350 je kolmo na tento pohled.",
      36, align=A.BOTTOM_LEFT, layer="A-POZN")

flush_text()
doc.saveas(OUT_DXF)
print("wrote", OUT_DXF, "size", OUT_DXF.stat().st_size)

# ---------- PNG ----------
fig, ax = plt.subplots(figsize=(18, 10), dpi=140)
ax.set_aspect("equal")
ax.axis("off")
fig.patch.set_facecolor("white")
ax.set_facecolor("white")


def add_poly(pts, fc, ec, lw=0.8, z=2, alpha=1.0, ls="-"):
    p = Polygon(pts, closed=True, facecolor=fc, edgecolor=ec,
                linewidth=lw, alpha=alpha, linestyle=ls, zorder=z)
    ax.add_patch(p)


def add_line(p, q, c="#333", lw=1.0, z=5, ls="-"):
    ax.plot([p[0], q[0]], [p[1], q[1]], color=c, lw=lw, ls=ls, zorder=z)


def txt(x, y, s, fs=9, c="#111", ha="left", va="center", rot=0, weight="normal", z=20):
    ax.text(x, y, s, fontsize=fs, color=c, ha=ha, va=va, rotation=rot,
            fontweight=weight, zorder=z,
            bbox=dict(boxstyle="round,pad=0.15", fc="white", ec="none", alpha=0.75))


def dimv(x, y0, y1, label_s, tick=50, fs=8):
    ax.plot([x, x], [y0, y1], color="#2d6a3e", lw=0.9, zorder=15)
    for yy in (y0, y1):
        ax.plot([x - tick, x + tick], [yy, yy], color="#2d6a3e", lw=0.8, zorder=15)
        ax.plot([x - tick * 0.7, x + tick * 0.7],
                [yy - tick * 0.7, yy + tick * 0.7], color="#2d6a3e", lw=0.7, zorder=15)
    ax.text(x - tick * 2.2, (y0 + y1) / 2, label_s, fontsize=fs, color="#2d6a3e",
            ha="center", va="center", rotation=90, zorder=16,
            bbox=dict(boxstyle="round,pad=0.12", fc="white", ec="none", alpha=0.8))


def dimh(y, x0, x1, label_s, tick=50, fs=8, above=True):
    ax.plot([x0, x1], [y, y], color="#2d6a3e", lw=0.9, zorder=15)
    for xx in (x0, x1):
        ax.plot([xx, xx], [y - tick, y + tick], color="#2d6a3e", lw=0.8, zorder=15)
        ax.plot([xx - tick * 0.7, xx + tick * 0.7],
                [y - tick * 0.7, y + tick * 0.7], color="#2d6a3e", lw=0.7, zorder=15)
    off = tick * 1.6 if above else -tick * 1.6
    va = "bottom" if above else "top"
    ax.text((x0 + x1) / 2, y + off, label_s, fontsize=fs, color="#2d6a3e",
            ha="center", va=va, zorder=16,
            bbox=dict(boxstyle="round,pad=0.12", fc="white", ec="none", alpha=0.8))


# floor
add_poly([(xl_eps, 0), (xr_eps, 0), (xr_eps, -150), (xl_eps, -150)],
         "#c8c2b4", "#555", 0.8, z=1)
txt(L_ROOM_LONG / 2, -70, "podlaha 1.NP  ±0,000", fs=12, ha="center")

# walls L
add_poly([(xl_eps, -150), (xl_mas, -150), (xl_mas, H_GABLE), (xl_eps, H_GABLE)],
         "#d4e8c4", "#5a7a3a", 0.7, z=2)
add_poly([(xl_mas, -150), (xl_mas + WALL_MASON, -150),
          (xl_mas + WALL_MASON, H_GABLE), (xl_mas, H_GABLE)],
         "#b8b0a0", "#444", 0.8, z=2)
add_poly([(xl_mas + WALL_MASON, 0), (0, 0), (0, H_GABLE),
          (xl_mas + WALL_MASON, H_GABLE)],
         "#e8e4dc", "#888", 0.6, z=3)
# walls R
add_poly([(L_ROOM_LONG, 0), (L_ROOM_LONG + WALL_PLASTER, 0),
          (L_ROOM_LONG + WALL_PLASTER, H_GABLE), (L_ROOM_LONG, H_GABLE)],
         "#e8e4dc", "#888", 0.6, z=3)
add_poly([(L_ROOM_LONG + WALL_PLASTER, -150), (xr_mas, -150),
          (xr_mas, H_GABLE), (L_ROOM_LONG + WALL_PLASTER, H_GABLE)],
         "#b8b0a0", "#444", 0.8, z=2)
add_poly([(xr_mas, -150), (xr_eps, -150), (xr_eps, H_GABLE), (xr_mas, H_GABLE)],
         "#d4e8c4", "#5a7a3a", 0.7, z=2)

# crown
add_poly([(xl_mas, H_GABLE), (xl_mas + WALL_MASON + WALL_PLASTER, H_GABLE),
          (xl_mas + WALL_MASON + WALL_PLASTER, H_GABLE + CROWN_H),
          (xl_mas, H_GABLE + CROWN_H)],
         "#c4a574", "#5a3a1a", 0.8, z=4)
add_poly([(xr_int, H_GABLE), (xr_int + WALL_PLASTER + WALL_MASON, H_GABLE),
          (xr_int + WALL_PLASTER + WALL_MASON, H_GABLE + CROWN_H),
          (xr_int, H_GABLE + CROWN_H)],
         "#c4a574", "#5a3a1a", 0.8, z=4)
txt(xl_mas + WALL_MASON / 2, H_GABLE + CROWN_H + 50, "koruna štítu",
    fs=7, ha="center", va="bottom")
txt(xr_int + WALL_PLASTER + WALL_MASON / 2, H_GABLE + CROWN_H + 50, "koruna štítu",
    fs=7, ha="center", va="bottom")

# high horizontal soffit
add_line((0, Z_SOFFIT), (L_ROOM_LONG, Z_SOFFIT), "#1a6a8a", 2.2, z=6)
add_line((0, Z_SOFFIT + 30), (L_ROOM_LONG, Z_SOFFIT + 30), "#1a6a8a", 1.0, z=6)
txt(L_ROOM_LONG / 2, Z_SOFFIT - 140,
    f"podhled pod hřebenem  Z≈{Z_SOFFIT:.0f}  "
    f"(H_start {H_START:.0f} + {HALF_TRANS:.0f}·tan40°)",
    fs=9, ha="center", c="#1a6a8a")
txt(L_ROOM_LONG / 2, Z_SOFFIT + 100,
    "šikminy k okapům (mimo řez)  →  do / z stránky",
    fs=8, ha="center", c="#666")

# roof outline (horizontal ridge — no A-frame)
add_line((xl_eps - 200, Z_RIDGE_EXT), (xr_eps + 200, Z_RIDGE_EXT), "#8b2500", 1.6, z=5)
add_line((xl_eps - 200, Z_RAF_INNER_RIDGE), (xr_eps + 200, Z_RAF_INNER_RIDGE),
         "#8b6914", 0.9, z=4)
add_line((xl_eps - 200, Z_RAF_TOP), (xr_eps + 200, Z_RAF_TOP), "#8b6914", 0.9, z=4)
ax.plot(xl_eps - 200, Z_RIDGE_EXT, "o", color="#8b2500", ms=4, zorder=6)
ax.plot(xr_eps + 200, Z_RIDGE_EXT, "o", color="#8b2500", ms=4, zorder=6)
txt(L_ROOM_LONG / 2, Z_RIDGE_EXT + 110,
    "hřeben +5,850  (rovnoběžně s pohledem; šikminy k okapům mimo řez)",
    fs=9, ha="center", c="#8b2500")

# pouzdro
add_poly([(0, 0), (POUZDRO_D, 0), (POUZDRO_D, Z_PRED), (0, Z_PRED)],
         "#e8e0d0", "#666", 0.9, z=5, alpha=0.55, ls="--")
add_poly([(L_ROOM_LONG - POUZDRO_D, 0), (L_ROOM_LONG, 0),
          (L_ROOM_LONG, Z_PRED), (L_ROOM_LONG - POUZDRO_D, Z_PRED)],
         "#e8e0d0", "#666", 0.9, z=5, alpha=0.55, ls="--")
for yy in range(100, int(Z_PRED), 200):
    ax.plot([8, POUZDRO_D - 8], [yy, yy + 50], color="#888", lw=0.5, alpha=0.6, zorder=5.5)
    ax.plot([L_ROOM_LONG - POUZDRO_D + 8, L_ROOM_LONG - 8], [yy, yy + 50],
            color="#888", lw=0.5, alpha=0.6, zorder=5.5)
txt(POUZDRO_D / 2 + 18, Z_PRED / 2, "pouzdro posuvných dveří",
    fs=8, ha="center", va="center", rot=90, c="#555")
txt(L_ROOM_LONG - POUZDRO_D / 2 - 18, Z_PRED / 2, "pouzdro posuvných dveří",
    fs=8, ha="center", va="center", rot=90, c="#555")

# předstěny
add_poly(pred_l, "#c8e8f0", "#1a7a9a", 1.5, z=7, alpha=0.88)
add_poly(pred_r, "#c8e8f0", "#1a7a9a", 1.5, z=7, alpha=0.88)
# light SDK hatch
for i in range(8):
    t = (i + 0.5) / 8
    y0 = Z_PRED + t * (Z_SOFFIT - Z_PRED)
    ax.plot([4, X_L_FACE - 4], [y0, y0 + 60], color="#3a9aaa", lw=0.4, alpha=0.45, zorder=7.5)
    ax.plot([X_R_FACE + 4, L_ROOM_LONG - 4], [y0, y0 + 60],
            color="#3a9aaa", lw=0.4, alpha=0.45, zorder=7.5)

add_line((0, Z_PRED), (X_L_FACE, Z_PRED), "#0d5a70", 2.4, z=8)
add_line((X_L_FACE, Z_PRED), (X_L_FACE, Z_SOFFIT), "#0d5a70", 2.0, z=8)
add_line((X_L_FACE, Z_SOFFIT), (0, Z_SOFFIT), "#0d5a70", 1.6, z=8)
add_line((L_ROOM_LONG, Z_PRED), (X_R_FACE, Z_PRED), "#0d5a70", 2.4, z=8)
add_line((X_R_FACE, Z_PRED), (X_R_FACE, Z_SOFFIT), "#0d5a70", 2.0, z=8)
add_line((X_R_FACE, Z_SOFFIT), (L_ROOM_LONG, Z_SOFFIT), "#0d5a70", 1.6, z=8)

txt(X_L_FACE / 2, mid_zl, "SDK předstěna 190 · kuchyně",
    fs=10, ha="center", weight="bold", c="#0d5a70")
txt((X_R_FACE + L_ROOM_LONG) / 2, mid_zl, "SDK předstěna 450 · obývák",
    fs=10, ha="center", weight="bold", c="#0d5a70")

txt(xl_eps - 40, H_GABLE / 2, "kuchyně (KK)", fs=11, ha="center", va="center",
    rot=90, c="#444")
txt(xr_eps + 60, H_GABLE / 2, "obývák (gauč)", fs=11, ha="center", va="center",
    rot=90, c="#444")

# dimensions
dimh(-320, 0, L_ROOM_LONG, f"světlá délka kuchyně↔obývák  {L_ROOM_LONG:.0f}",
     tick=60, fs=11)
dimh(-580, 0, X_L_FACE, "190", tick=45, fs=10)
dimh(-580, X_R_FACE, L_ROOM_LONG, "450", tick=45, fs=10)
dimv(-480, 0, Z_PRED, "2450", tick=55, fs=10)
dimv(-780, 0, Z_SOFFIT, f"{Z_SOFFIT:.0f}", tick=55, fs=10)
dimh(Z_PRED + 240, 0, X_L_FACE, "190", tick=35, fs=9)
dimh(Z_PRED + 240, X_R_FACE, L_ROOM_LONG, "450", tick=35, fs=9)
dimv(X_L_FACE + 140, Z_PRED, Z_SOFFIT, f"{Z_SOFFIT - Z_PRED:.0f}", tick=35, fs=8)
dimv(X_R_FACE - 140, Z_PRED, Z_SOFFIT, f"{Z_SOFFIT - Z_PRED:.0f}", tick=35, fs=8)
dimv(xr_eps + 180, 0, Z_EAVE_WALL, "+3,200", tick=50, fs=9)
dimv(xr_eps + 420, 0, Z_SOFFIT, f"+{Z_SOFFIT/1000:.3f}".replace(".", ","), tick=50, fs=9)
dimv(xr_eps + 660, 0, Z_RIDGE_EXT, "+5,850", tick=50, fs=9)

ax.set_title(
    "Obývák 1.02 – pohled od oken (z boku střechy) – předstěny štítů 190 / 450"
    "   ·   zak. 220103 · mm",
    fontsize=13, pad=14, loc="left",
)
fig.text(
    0.04, 0.022,
    "Závěsy / basstrap / vlna — později. Teď jen kontrola pohledových ploch.   "
    "Světlá délka kuchyně↔obývák 11100; šířka mezi okapy 5350 je kolmo na tento pohled.   "
    f"L=kuchyně 190 · P=obývák 450 · podhled pod hřebenem ≈{Z_SOFFIT:.0f} · bez A-rámce L↔P",
    fontsize=8.0, color="#333",
)

ax.set_xlim(xl_eps - 200, xr_eps + 900)
ax.set_ylim(-1100, Z_RIDGE_EXT + 550)
fig.tight_layout(rect=[0.01, 0.04, 0.99, 0.96])
fig.savefig(OUT_PNG, dpi=140, facecolor="white", bbox_inches="tight")
print("wrote", OUT_PNG, "size", OUT_PNG.stat().st_size)
print("DONE")
print(f"CONFIRM: L=kitchen {D_L:.0f} / R=living {D_R:.0f} / span {L_ROOM_LONG:.0f} / "
      f"no A-frame L-R / Z_SOFFIT={Z_SOFFIT:.1f}")

#!/usr/bin/env python3
"""Obývák 1.02 – DETAIL basstrap kuchyně · předstěna 190 mm.

HYBRID framing: hang from ceiling/podhled + short rear wall fix only
(katalogový třmen ≤~120 mm — NE dlouhý třmen skrz celou dutinu).

Horizontal section + callouts (short rear třmen + ceiling hang) + mini elev.
DXF R2010 mm + PNG.

Do NOT touch make_rez.py, make_stit_bokorys.py, or Petr's original DWGs.
"""
from pathlib import Path
import math
import ezdxf
from ezdxf import units
from ezdxf.enums import TextEntityAlignment as A
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.patches import Polygon, Circle, FancyBboxPatch, FancyArrowPatch
from matplotlib.lines import Line2D

OUT_DXF = Path("/workspace/dwg/obyvak-bass-kuchyne-190.dxf")
OUT_PNG = Path("/workspace/dwg/obyvak-bass-kuchyne-190.png")

# ---------- stack (mm) — sums to 190 ----------
WALL_MASON = 250.0
WALL_PLASTER = 15.0
T_WOOL = 80.0
T_AIR = 97.5          # ~100; 80 + 97.5 + 12.5 = 190
T_GKB = 12.5
T_TOTAL = T_WOOL + T_AIR + T_GKB  # 190.0
assert abs(T_TOTAL - 190.0) < 1e-9

CD_W = 60.0
CD_D = 27.0
CD_SPACING = 625.0
Z_BOT = 2450.0
SOFT_GAP = 3.5

# Short rear wall fix — catalog reach ≤~120 mm (to REAR stud only)
HANGER_CODE = "KB517112"
HANGER_NAME = "Rigips akustický třmen se Sylomerem"
HANGER_ALT = "Knauf W623 / přímý akustický závěs"
REAR_REACH = 80.0     # wall → rear CD (within wool, ≤ catalog ~120)

# Ceiling hang
CEIL_HANG = "Nonius / Rigips–Knauf akustický stropní závěs"
CEIL_HANG_ALT = "Nonius závěs nebo Rigips akustický závěs podhledu"

SEC_H = 420.0
X0 = 0.0

print("=== BASS KUCHYNĚ 190 — HYBRID ===")
print(f"wool={T_WOOL}  air={T_AIR}  GKB={T_GKB}  total={T_TOTAL}")
print(f"rear reach wall→CD ≈{REAR_REACH} mm  ·  ceiling: {CEIL_HANG}")
print(f"wall fix: {HANGER_NAME} {HANGER_CODE} — SHORT, rear only")

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
    ("A-POUZDRO", 8, 25), ("A-SYLOMER", 6, 30), ("A-TESNENI", 1, 18),
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


def filled_circle(x, y, r, color=6, layer="A-SYLOMER"):
    msp.add_circle((x, y), r, dxfattribs={"layer": layer})
    hch = msp.add_hatch(color=color, dxfattribs={"layer": "A-VYPLN"})
    hch.set_solid_fill()
    hch.paths.add_polyline_path(
        [(x + r * math.cos(i * math.pi / 8), y + r * math.sin(i * math.pi / 8))
         for i in range(16)],
        is_closed=True,
    )


def fill_poly(pts, layer="A-OCEL", color=8):
    msp.add_lwpolyline(pts, close=True, dxfattribs={"layer": layer})
    hch = msp.add_hatch(color=color, dxfattribs={"layer": "A-VYPLN"})
    hch.set_solid_fill()
    hch.paths.add_polyline_path(pts, is_closed=True)


# =====================================================================
# PANEL A — main horizontal section (wall L → room R)
# Hybrid: rear CD near wall + short třmen; front CD carries GKB; NO long arm
# =====================================================================
OX, OY = 0.0, 0.0

xl_mas = OX - WALL_PLASTER - WALL_MASON
xl_pls = OX - WALL_PLASTER
x_plaster = OX
x_wool = OX + T_WOOL
x_gkb = OX + T_WOOL + T_AIR
x_room = OX + T_TOTAL

# REAR CD — near wall, within wool (catalog reach)
x_rear_cd = OX + REAR_REACH - CD_D   # back of rear CD ≈80 from plaster
# FRONT CD — against GKB
x_front_cd = x_gkb - CD_D

y0 = OY
y1 = OY + SEC_H
ym = (y0 + y1) / 2

# masonry + plaster
rect(xl_mas, y0 - 40, WALL_MASON, SEC_H + 80, "A-ZDIVO", "ANSI31", 18, 8)
rect(xl_pls, y0 - 40, WALL_PLASTER, SEC_H + 80, "A-OMITKA")

# ① wool 80
rect(x_plaster, y0, T_WOOL, SEC_H, "A-VATA", "ANSI37", 8, 4)

# ② air gap
rect(x_wool, y0, T_AIR, SEC_H, "A-SCHEMA")
for i in range(6):
    yy = y0 + 40 + i * 60
    line((x_wool + 8, yy), (x_gkb - 8, yy + 25), "A-OSA")

# REAR CD 60/27 (in wool, near wall)
cd_y0 = ym - CD_W / 2
rect(x_rear_cd, cd_y0, CD_D, CD_W, "A-OCEL", "ANSI31", 4, 8)
line((x_rear_cd, cd_y0), (x_rear_cd + 4, cd_y0), "A-OCEL")
line((x_rear_cd, cd_y0 + CD_W), (x_rear_cd + 4, cd_y0 + CD_W), "A-OCEL")

# FRONT CD 60/27 (against GKB)
rect(x_front_cd, cd_y0, CD_D, CD_W, "A-OCEL", "ANSI31", 4, 8)
line((x_front_cd, cd_y0), (x_front_cd + 4, cd_y0), "A-OCEL")
line((x_front_cd, cd_y0 + CD_W), (x_front_cd + 4, cd_y0 + CD_W), "A-OCEL")

# light frame cross-members (schematic horizontals connecting rear↔front)
for dy in (-CD_W / 2 - 8, CD_W / 2 + 8):
    line((x_rear_cd + CD_D, ym + dy), (x_front_cd, ym + dy), "A-OCEL")

# ③ GKB 12.5
rect(x_gkb, y0, T_GKB, SEC_H, "A-SDK", "ANSI31", 5, 2)

# soft perimeter
for yy in (y0 + 2, y1 - SOFT_GAP - 2):
    rect(x_gkb - 0.5, yy, T_GKB + 1, SOFT_GAP, "A-TESNENI")

# ---- SHORT rear wall fix only (NOT through cavity) ----
tr_y = ym
# fixing plate on plaster
fill_poly([
    (x_plaster - 2, tr_y - 28), (x_plaster + 8, tr_y - 28),
    (x_plaster + 8, tr_y + 28), (x_plaster - 2, tr_y + 28),
], "A-OCEL", 8)
line((x_plaster - 18, tr_y), (x_plaster + 6, tr_y), "A-OCEL")
filled_circle(x_plaster - 10, tr_y, 3.5, 8, "A-OCEL")
# Sylomer
filled_circle(x_plaster + 22, tr_y, 12, 6, "A-SYLOMER")
# SHORT arm only to REAR CD (within catalog reach)
fill_poly([
    (x_plaster + 30, tr_y - 8), (x_rear_cd + 2, tr_y - 8),
    (x_rear_cd + 2, tr_y + 8), (x_plaster + 30, tr_y + 8),
], "A-OCEL", 8)
# clips on REAR CD
fill_poly([
    (x_rear_cd - 2, tr_y - 16), (x_rear_cd + CD_D + 2, tr_y - 16),
    (x_rear_cd + CD_D + 2, tr_y - 10), (x_rear_cd - 2, tr_y - 10),
], "A-OCEL", 8)
fill_poly([
    (x_rear_cd - 2, tr_y + 10), (x_rear_cd + CD_D + 2, tr_y + 10),
    (x_rear_cd + CD_D + 2, tr_y + 16), (x_rear_cd - 2, tr_y + 16),
], "A-OCEL", 8)

# GKB screws into FRONT CD only
for dy in (-18, 18):
    sx = x_gkb + T_GKB / 2
    sy = tr_y + dy
    filled_circle(sx, sy, 2.2, 1, "A-OCEL")
    line((sx, sy), (x_front_cd + CD_D / 2, sy), "A-OCEL")

# labels
label(x_plaster + T_WOOL / 2, y1 - 30, "① MW 80", 12, align=A.MIDDLE_CENTER)
label(x_wool + T_AIR / 2, y1 - 30, "② vzduch ~100", 12, align=A.MIDDLE_CENTER)
label(x_gkb + T_GKB / 2 + 18, ym + 80, "③ GKB 12,5", 11, rot=90, align=A.MIDDLE_CENTER)
label(xl_mas + WALL_MASON / 2, ym, "nosná zeď", 14, rot=90, align=A.MIDDLE_CENTER)
label(xl_pls + WALL_PLASTER / 2 + 2, ym + 90, "omítka", 9, rot=90, align=A.MIDDLE_CENTER)
label(x_plaster + 22, tr_y + 32, "Sylomer", 9, align=A.BOTTOM_CENTER, layer="A-POZN")
label(x_rear_cd + CD_D / 2, cd_y0 - 14, "CD vzadu", 9, align=A.TOP_CENTER)
label(x_front_cd + CD_D / 2, cd_y0 - 14, "CD vpředu", 9, align=A.TOP_CENTER)
label(x_plaster + 40, tr_y - 38, f"krátký třmen {HANGER_CODE} (jen vzadu)", 9,
      align=A.TOP_LEFT, layer="A-POZN")
label(x_wool + 20, ym - 90, "NE dlouhý třmen skrz dutinu", 9,
      align=A.BOTTOM_LEFT, layer="A-POZN")

label(xl_mas - 30, ym, "ZEĎ", 16, rot=90, align=A.MIDDLE_CENTER)
label(x_room + 55, ym, "MÍSTNOST", 16, rot=90, align=A.MIDDLE_CENTER)
line((x_room + 8, ym), (x_room + 35, ym), "A-OBRYS")

# dimension: short reach
dim_h(y0 - 25, x_plaster, x_rear_cd + CD_D, f"≤{REAR_REACH:.0f}", htxt=10, tick=5)
dim_y = y0 - 55
dim_h(dim_y, x_plaster, x_wool, "80", htxt=14, tick=6)
dim_h(dim_y, x_wool, x_gkb, "97,5 ≈100", htxt=12, tick=6)
dim_h(dim_y, x_gkb, x_room, "12,5", htxt=11, tick=6)
dim_h(dim_y - 45, x_plaster, x_room, "190", htxt=18, tick=8)

label(xl_mas, y1 + 55,
      "A  ·  VODOROVNÝ ŘEZ  ·  hybridní rám 190 mm  (zeď ← · → místnost)  ·  1:1 mm",
      16, align=A.BOTTOM_LEFT)
label(xl_mas, y1 + 30,
      "Kotvení ke zdi jen vzadu · závěs shora ze stropu/podhledu · GKB plná (ne perforovaná)",
      11, align=A.BOTTOM_LEFT, layer="A-POZN")

# =====================================================================
# PANEL B — callouts: B1 short rear třmen + B2 ceiling hang stub
# =====================================================================
BX0 = OX + 520
BY0 = OY - 20

# --- B1: short rear třmen (enlarged) ---
S = 2.2
cx0 = BX0
rect(cx0 - 55 * S, BY0, 40 * S, 140 * S, "A-ZDIVO", "ANSI31", 10, 8)
rect(cx0 - 15 * S, BY0, 15 * S, 140 * S, "A-OMITKA")
# wool only (rear zone) — short reach
rect(cx0, BY0, 40 * S, 140 * S, "A-VATA", "ANSI37", 6, 4)
# rear CD
cd_lx = cx0 + (REAR_REACH - CD_D) * S / (REAR_REACH / 40)  # approx scaled
# simpler: place rear CD at 40*S - 27*S into wool strip of 40*S shown
cd_lx = cx0 + (40 - 27) * S
rect(cd_lx, BY0 + 40 * S, 27 * S, 60 * S, "A-OCEL", "ANSI31", 3, 8)
# hint of air beyond (dashed box)
rect(cx0 + 40 * S, BY0, 30 * S, 140 * S, "A-SCHEMA")
label(cx0 + 52 * S, BY0 + 70 * S, "→ vzduch\n+ GKB\n(bez třmenu)", 8,
      align=A.MIDDLE_CENTER, layer="A-POZN")

cy = BY0 + 70 * S
fill_poly([
    (cx0 - 3 * S, cy - 22 * S), (cx0 + 6 * S, cy - 22 * S),
    (cx0 + 6 * S, cy + 22 * S), (cx0 - 3 * S, cy + 22 * S),
], "A-OCEL", 8)
line((cx0 - 28 * S, cy), (cx0 + 4 * S, cy), "A-OCEL")
filled_circle(cx0 - 18 * S, cy, 4 * S, 8, "A-OCEL")
filled_circle(cx0 + 16 * S, cy, 11 * S, 6, "A-SYLOMER")
fill_poly([
    (cx0 + 24 * S, cy - 7 * S), (cd_lx + 4 * S, cy - 7 * S),
    (cd_lx + 4 * S, cy + 7 * S), (cx0 + 24 * S, cy + 7 * S),
], "A-OCEL", 8)
fill_poly([
    (cd_lx - 2 * S, cy - 14 * S), (cd_lx + 27 * S + 2 * S, cy - 14 * S),
    (cd_lx + 27 * S + 2 * S, cy - 9 * S), (cd_lx - 2 * S, cy - 9 * S),
], "A-OCEL", 8)
fill_poly([
    (cd_lx - 2 * S, cy + 9 * S), (cd_lx + 27 * S + 2 * S, cy + 9 * S),
    (cd_lx + 27 * S + 2 * S, cy + 14 * S), (cd_lx - 2 * S, cy + 14 * S),
], "A-OCEL", 8)

label(cx0 - 55 * S, BY0 + 145 * S,
      "B1  ·  KRÁTKÝ TŘMEN VZADU  ·  ~2:1  (≤~120 mm ke zdi)",
      13, align=A.BOTTOM_LEFT)
label(cx0 + 16 * S, cy + 20 * S, "Sylomer", 10, align=A.BOTTOM_CENTER, layer="A-POZN")
label(cd_lx + 13 * S, BY0 + 28 * S, "CD vzadu", 10, align=A.TOP_CENTER)
label(cx0 - 50 * S, cy, "zeď", 10, rot=90, align=A.MIDDLE_CENTER)
label(cx0 + 18 * S, BY0 + 8 * S, "MW", 9, align=A.BOTTOM_CENTER, layer="A-POZN")
label(cx0 - 55 * S, BY0 - 30,
      "zeď → Sylomer → krátký třmen → CD vzadu  ·  kotvení ke zdi jen vzadu",
      10, align=A.BOTTOM_LEFT, layer="A-POZN")
label(cx0 - 55 * S, BY0 - 50,
      f"{HANGER_NAME}  ·  {HANGER_CODE}  /  {HANGER_ALT}",
      10, align=A.BOTTOM_LEFT, layer="A-POPIS")

# --- B2: ceiling hang stub (to the right of B1) ---
B2X = BX0 + 280
B2Y = BY0
# sofitt/ceiling stub
rect(B2X, B2Y + 160, 160, 30, "A-PODHLED", "ANSI31", 8, 5)
label(B2X + 80, B2Y + 175, "strop / podhled pod hřebenem", 9, align=A.MIDDLE_CENTER)
# Nonius hanger down
fill_poly([
    (B2X + 70, B2Y + 160), (B2X + 90, B2Y + 160),
    (B2X + 90, B2Y + 100), (B2X + 70, B2Y + 100),
], "A-OCEL", 8)
# Nonius pin holes hint
for i in range(4):
    filled_circle(B2X + 80, B2Y + 150 - i * 12, 2.5, 8, "A-OCEL")
# top UW/CD of frame
rect(B2X + 30, B2Y + 75, 100, 25, "A-OCEL", "ANSI31", 4, 8)
label(B2X + 80, B2Y + 87, "UW / CD horní", 9, align=A.MIDDLE_CENTER)
# vertical stud stubs down
line((B2X + 45, B2Y + 75), (B2X + 45, B2Y + 20), "A-OCEL")
line((B2X + 115, B2Y + 75), (B2X + 115, B2Y + 20), "A-OCEL")
label(B2X + 80, B2Y + 40, "rám dolů →", 9, align=A.MIDDLE_CENTER, layer="A-POZN")
# GKB face hint
rect(B2X + 130, B2Y + 20, 12, 55, "A-SDK", "ANSI31", 3, 2)

label(B2X, B2Y + 200,
      "B2  ·  ZÁVĚS SHORA  ·  Nonius / akust. stropní závěs",
      13, align=A.BOTTOM_LEFT)
label(B2X, B2Y - 5,
      f"{CEIL_HANG}",
      10, align=A.BOTTOM_LEFT, layer="A-POPIS")
label(B2X, B2Y - 25,
      "závěs shora ze stropu/podhledu → horní vodorovný CD/UW rámu",
      9, align=A.BOTTOM_LEFT, layer="A-POZN")

# =====================================================================
# PANEL C — mini elevation: bottom 2450 + top hang hint
# =====================================================================
CX = OX - WALL_PLASTER - WALL_MASON
CY = OY - 560
ES = 0.32
z_lo = 2300.0
z_hi = 3100.0  # extend up to show ceiling hang


def ez(z):
    return CY + (z - z_lo) * ES


ex0 = CX
rect(ex0 - WALL_PLASTER - 80, ez(z_lo), 80, (z_hi - z_lo) * ES,
     "A-ZDIVO", "ANSI31", 12, 8)
rect(ex0 - WALL_PLASTER, ez(z_lo), WALL_PLASTER, (z_hi - z_lo) * ES, "A-OMITKA")

# pouzdro below 2450 (dashed)
poly([
    (ex0, ez(z_lo)), (ex0 + 120, ez(z_lo)),
    (ex0 + 120, ez(Z_BOT)), (ex0, ez(Z_BOT)),
], "A-POUZDRO", hatch="ANSI37", hatch_scale=20, hatch_color=8, linetype="DASHED")
label(ex0 + 60, ez((z_lo + Z_BOT) / 2), "pouzdro", 10, rot=90,
      align=A.MIDDLE_CENTER, layer="A-POZN")

pred_d = T_TOTAL
poly([
    (ex0, ez(Z_BOT)), (ex0 + pred_d, ez(Z_BOT)),
    (ex0 + pred_d, ez(z_hi - 80)), (ex0, ez(z_hi - 80)),
], "A-SDK", hatch="ANSI31", hatch_scale=10, hatch_color=2)

line((ex0, ez(Z_BOT)), (ex0 + pred_d, ez(Z_BOT)), "A-SDK")
rect(ex0 + pred_d - T_GKB, ez(Z_BOT), T_GKB, SOFT_GAP * ES * 3, "A-TESNENI")
label(ex0 + pred_d + 25, ez(Z_BOT),
      "spodní uzavření SDK @ 2450 + měkká spára 2–5 mm",
      10, align=A.MIDDLE_LEFT, layer="A-POZN")
label(ex0 + pred_d + 25, ez(Z_BOT) - 18,
      "(bílý přetíratelný akustický akrylát — ne sádra, ne silikon)",
      9, align=A.MIDDLE_LEFT, layer="A-POZN")

# rear CD line (near wall) + front CD line
line((ex0 + REAR_REACH - CD_D / 2, ez(Z_BOT + 30)),
     (ex0 + REAR_REACH - CD_D / 2, ez(z_hi - 100)), "A-OCEL")
line((ex0 + T_WOOL + T_AIR - CD_D / 2, ez(Z_BOT + 30)),
     (ex0 + T_WOOL + T_AIR - CD_D / 2, ez(z_hi - 100)), "A-OCEL")
# short třmen dots near wall only
for zz in (Z_BOT + 200, Z_BOT + 700):
    if zz < z_hi - 120:
        filled_circle(ex0 + 22, ez(zz), 4, 6, "A-SYLOMER")

# ceiling / sofitt stub + hang
sof_y = ez(z_hi - 40)
rect(ex0 - 40, sof_y, pred_d + 80, 28, "A-PODHLED", "ANSI31", 6, 5)
# Nonius hang down to top of frame
fill_poly([
    (ex0 + pred_d / 2 - 8, sof_y), (ex0 + pred_d / 2 + 8, sof_y),
    (ex0 + pred_d / 2 + 8, ez(z_hi - 80)), (ex0 + pred_d / 2 - 8, ez(z_hi - 80)),
], "A-OCEL", 8)
label(ex0 + pred_d + 25, sof_y + 5,
      "závěs shora (Nonius / akust. stropní)",
      10, align=A.MIDDLE_LEFT, layer="A-POZN")
label(ex0 + pred_d + 25, ez(z_hi - 100),
      "horní UW/CD rámu",
      9, align=A.MIDDLE_LEFT, layer="A-POZN")

dim_v(ex0 - 110, ez(z_lo), ez(Z_BOT), "↓ pouzdro", htxt=9, tick=5)
dim_v(ex0 + pred_d + 15, ez(Z_BOT), ez(z_hi - 80), "předstěna ↑", htxt=9, tick=5)
dim_h(ez(z_hi - 80) + 18, ex0, ex0 + pred_d, "190", htxt=12, tick=5)

label(ex0 - 80, ez(z_hi) + 35,
      "C  ·  MINI POHLED  ·  spodek @ 2450 + závěs shora",
      14, align=A.BOTTOM_LEFT)
label(ex0 + pred_d / 2, ez((Z_BOT + z_hi - 80) / 2),
      "SDK 190", 12, align=A.MIDDLE_CENTER)

# =====================================================================
# LEGEND + title
# =====================================================================
LX = OX + 520
LY = OY + SEC_H + 20

legend_lines = [
    "SKLADBA (zeď → místnost), Σ 190 mm:",
    f"  1  Nosná zeď + interiérová omítka (stávající)",
    f"  2  Minerální vlna (tlumení dutiny)  {T_WOOL:.0f} mm",
    f"  3  Vzduchová mezera  ≈100 mm  (kóta {T_AIR} mm)",
    f"  4  GKB / Rigips RF  {T_GKB} mm  — plná deska (membrána), NE perforovaná",
    "",
    "HYBRIDNÍ KOTVENÍ (ne freestanding od podlahy):",
    "  ·  ne dlouhý třmen skrz celou dutinu",
    "  ·  kotvení ke zdi jen vzadu (krátký třmen ≤~120 mm)",
    "  ·  Zhotovitel zhodnotí, zda použít krátké třmeny",
    "     (KB517112 / W623), nebo přímé kotvení zadního CD",
    "     přes Sylomerovou podložku (nedotahovat naplocho)",
    "  ·  závěs shora ze stropu/podhledu (Nonius / akust. závěs)",
    f"  ·  Vzadu: {HANGER_NAME} {HANGER_CODE}",
    f"     alt. {HANGER_ALT} — jen k zadnímu CD/sloupku",
    f"  ·  Shora: {CEIL_HANG}",
    f"  ·  Lehký rám plné hloubky 190: CD vzadu + CD vpředu + UW",
    f"  ·  Svislé CD 60/27 @ {CD_SPACING:.0f} mm osově; GKB na lícovém CD",
    "  ·  Box od Z=2450 — spodní uzavřená SDK římsa + měkká spára",
    "",
    "MEMBRÁNA / OBVOD:",
    "  ·  Měkká obvodová spára 2–5 mm + bílý přetíratelný",
    "     akustický akrylát (ne tuhá sádra, ne silikon)",
    "  ·  Spodek uzavřen @ 2450 (SDK), po nátěru bezespárový vzhled",
    "  ·  Vlna = tlumení dutiny, ne primárně tepelně",
    "",
    "LADĚNÍ (expert): dutina 190 mm ≈ pásmo ~40–120 Hz",
]

yy = LY
label(LX, yy + 40, "LEGENDA", 16, align=A.BOTTOM_LEFT)
yy -= 5
for ln in legend_lines:
    if not ln:
        yy -= 10
        continue
    label(LX, yy, ln, 9 if ln.startswith("  ") or ln.startswith("     ") else 10,
          layer="A-POZN" if ln.startswith("  ") or ln.startswith("     ") else "A-POPIS",
          align=A.TOP_LEFT)
    yy -= 16 if ln.startswith("  ") or ln.startswith("     ") else 18

TX = xl_mas
TY = OY + SEC_H + 120
label(TX, TY,
      "Obývák 1.02 – DETAIL basstrap kuchyně · předstěna 190 mm · HYBRID",
      20, align=A.BOTTOM_LEFT)
label(TX, TY - 28,
      "zak. 220103  ·  mm  ·  pohled od oken beze změny  ·  kotvení: zeď vzadu + závěs shora",
      12, align=A.BOTTOM_LEFT, layer="A-POZN")
label(TX, TY - 50,
      f"Kóty: {T_WOOL:.0f} + {T_AIR} + {T_GKB} = {T_TOTAL:.0f} mm  ·  "
      f"krátký třmen {HANGER_CODE} vzadu  ·  Nonius/akust. shora",
      11, align=A.BOTTOM_LEFT, layer="A-POZN")

msp.add_lwpolyline(
    [(xl_mas - 40, y0 - 120), (x_room + 100, y0 - 120),
     (x_room + 100, y1 + 80), (xl_mas - 40, y1 + 80)],
    close=True, dxfattribs={"layer": "A-SCHEMA"},
)

flush_text()
doc.saveas(OUT_DXF)
print("wrote", OUT_DXF, "size", OUT_DXF.stat().st_size)

# =====================================================================
# PNG
# =====================================================================
fig = plt.figure(figsize=(16, 11), dpi=150)
fig.patch.set_facecolor("white")

gs = fig.add_gridspec(2, 2, height_ratios=[1.35, 0.85], width_ratios=[1.15, 0.95],
                      hspace=0.20, wspace=0.12,
                      left=0.04, right=0.98, top=0.90, bottom=0.06)
axA = fig.add_subplot(gs[0, 0])
axB = fig.add_subplot(gs[0, 1])
axC = fig.add_subplot(gs[1, 0])
axL = fig.add_subplot(gs[1, 1])

for ax in (axA, axB, axC, axL):
    ax.set_aspect("equal")
    ax.axis("off")
    ax.set_facecolor("white")


def ap(ax, pts, fc, ec, lw=0.9, z=2, alpha=1.0, ls="-"):
    ax.add_patch(Polygon(pts, closed=True, facecolor=fc, edgecolor=ec,
                         linewidth=lw, alpha=alpha, linestyle=ls, zorder=z))


def al(ax, p, q, c="#333", lw=1.0, z=5, ls="-"):
    ax.plot([p[0], q[0]], [p[1], q[1]], color=c, lw=lw, ls=ls, zorder=z)


def at(ax, x, y, s, fs=8, c="#111", ha="left", va="center", rot=0, weight="normal", z=20):
    ax.text(x, y, s, fontsize=fs, color=c, ha=ha, va=va, rotation=rot,
            fontweight=weight, zorder=z,
            bbox=dict(boxstyle="round,pad=0.12", fc="white", ec="none", alpha=0.78))


def adimh(ax, y, x0, x1, s, tick=5, fs=8, above=True):
    ax.plot([x0, x1], [y, y], color="#2d6a3e", lw=0.9, zorder=15)
    for xx in (x0, x1):
        ax.plot([xx, xx], [y - tick, y + tick], color="#2d6a3e", lw=0.75, zorder=15)
        ax.plot([xx - tick * 0.65, xx + tick * 0.65],
                [y - tick * 0.65, y + tick * 0.65], color="#2d6a3e", lw=0.65, zorder=15)
    off = tick * 1.7 if above else -tick * 1.7
    va = "bottom" if above else "top"
    ax.text((x0 + x1) / 2, y + off, s, fontsize=fs, color="#2d6a3e",
            ha="center", va=va, zorder=16,
            bbox=dict(boxstyle="round,pad=0.1", fc="white", ec="none", alpha=0.85))


def adimv(ax, x, y0, y1, s, tick=5, fs=8):
    ax.plot([x, x], [y0, y1], color="#2d6a3e", lw=0.9, zorder=15)
    for yy in (y0, y1):
        ax.plot([x - tick, x + tick], [yy, yy], color="#2d6a3e", lw=0.75, zorder=15)
        ax.plot([x - tick * 0.65, x + tick * 0.65],
                [yy - tick * 0.65, yy + tick * 0.65], color="#2d6a3e", lw=0.65, zorder=15)
    ax.text(x - tick * 2.0, (y0 + y1) / 2, s, fontsize=fs, color="#2d6a3e",
            ha="center", va="center", rotation=90, zorder=16,
            bbox=dict(boxstyle="round,pad=0.1", fc="white", ec="none", alpha=0.85))


# ---------- PNG A ----------
xw = T_WOOL
xg = T_WOOL + T_AIR
xr = T_TOTAL
xrc = REAR_REACH - CD_D   # rear CD back
xfc = T_WOOL + T_AIR - CD_D  # front CD
yam = SEC_H / 2

ap(axA, [(-WALL_PLASTER - WALL_MASON, -30), (-WALL_PLASTER, -30),
         (-WALL_PLASTER, SEC_H + 30), (-WALL_PLASTER - WALL_MASON, SEC_H + 30)],
   "#b8b0a0", "#444", 0.9, z=1)
ap(axA, [(-WALL_PLASTER, -30), (0, -30), (0, SEC_H + 30), (-WALL_PLASTER, SEC_H + 30)],
   "#e8e4dc", "#888", 0.7, z=2)
ap(axA, [(0, 0), (xw, 0), (xw, SEC_H), (0, SEC_H)],
   "#c5e0a8", "#5a8a3a", 1.0, z=3, alpha=0.9)
for i in range(10):
    yy = 20 + i * 40
    axA.plot([6, xw - 6], [yy, yy + 22], color="#6a9a4a", lw=0.45, alpha=0.55, zorder=3.5)
ap(axA, [(xw, 0), (xg, 0), (xg, SEC_H), (xw, SEC_H)],
   "#f7f7f2", "#aaaaaa", 0.8, z=3)
for i in range(7):
    yy = 30 + i * 55
    axA.plot([xw + 10, xg - 10], [yy, yy + 28], color="#ccc", lw=0.5, ls="--", zorder=3.5)

# rear + front CD
ap(axA, [(xrc, yam - CD_W / 2), (xrc + CD_D, yam - CD_W / 2),
         (xrc + CD_D, yam + CD_W / 2), (xrc, yam + CD_W / 2)],
   "#6a6a6a", "#222", 1.1, z=6)
ap(axA, [(xfc, yam - CD_W / 2), (xfc + CD_D, yam - CD_W / 2),
         (xfc + CD_D, yam + CD_W / 2), (xfc, yam + CD_W / 2)],
   "#6a6a6a", "#222", 1.1, z=6)
# cross members
al(axA, (xrc + CD_D, yam - CD_W / 2 - 8), (xfc, yam - CD_W / 2 - 8), "#555", 0.9, z=5)
al(axA, (xrc + CD_D, yam + CD_W / 2 + 8), (xfc, yam + CD_W / 2 + 8), "#555", 0.9, z=5)

ap(axA, [(xg, 0), (xr, 0), (xr, SEC_H), (xg, SEC_H)],
   "#c8e8f0", "#0d5a70", 1.3, z=5, alpha=0.95)
ap(axA, [(xg, 2), (xr, 2), (xr, 2 + SOFT_GAP), (xg, 2 + SOFT_GAP)],
   "#ffcc80", "#e65100", 0.6, z=7)
ap(axA, [(xg, SEC_H - 2 - SOFT_GAP), (xr, SEC_H - 2 - SOFT_GAP),
         (xr, SEC_H - 2), (xg, SEC_H - 2)],
   "#ffcc80", "#e65100", 0.6, z=7)

# SHORT třmen to rear CD only
ap(axA, [(-2, yam - 28), (8, yam - 28), (8, yam + 28), (-2, yam + 28)],
   "#555", "#222", 0.8, z=8)
al(axA, (-18, yam), (6, yam), "#333", 1.2, z=8)
axA.add_patch(Circle((-10, yam), 3.5, fc="#444", ec="#111", lw=0.5, zorder=9))
axA.add_patch(Circle((22, yam), 12, fc="#e07020", ec="#8b3a00", lw=1.0, zorder=9))
axA.add_patch(Circle((22, yam), 7, fc="#f0a060", ec="none", zorder=9.5))
ap(axA, [(30, yam - 8), (xrc + 2, yam - 8), (xrc + 2, yam + 8), (30, yam + 8)],
   "#666", "#222", 0.9, z=8)
ap(axA, [(xrc - 2, yam - 16), (xrc + CD_D + 2, yam - 16),
         (xrc + CD_D + 2, yam - 10), (xrc - 2, yam - 10)],
   "#555", "#222", 0.7, z=8)
ap(axA, [(xrc - 2, yam + 10), (xrc + CD_D + 2, yam + 10),
         (xrc + CD_D + 2, yam + 16), (xrc - 2, yam + 16)],
   "#555", "#222", 0.7, z=8)
for dy in (-18, 18):
    axA.add_patch(Circle((xg + T_GKB / 2, yam + dy), 2.2, fc="#c62828", ec="#4a0000",
                         lw=0.4, zorder=10))
    al(axA, (xg + T_GKB / 2, yam + dy), (xfc + CD_D / 2, yam + dy), "#c62828", 0.7, z=9)

at(axA, T_WOOL / 2, SEC_H - 22, "① MW 80", fs=9, ha="center", weight="bold", c="#3d6b1e")
at(axA, xw + T_AIR / 2, SEC_H - 22, "② vzduch ~100", fs=9, ha="center", weight="bold", c="#555")
at(axA, xr + 14, yam + 70, "③ GKB 12,5", fs=8, ha="center", va="center", rot=90, c="#0d5a70",
   weight="bold")
at(axA, -WALL_PLASTER - WALL_MASON / 2, yam, "nosná zeď", fs=8, ha="center", rot=90, c="#444")
at(axA, 22, yam + 28, "Sylomer", fs=7, ha="center", va="bottom", c="#8b3a00")
at(axA, xrc + CD_D / 2, yam - CD_W / 2 - 12, "CD vzadu", fs=7, ha="center", va="top", c="#222")
at(axA, xfc + CD_D / 2, yam - CD_W / 2 - 12, "CD vpředu", fs=7, ha="center", va="top", c="#222")
at(axA, 35, yam - 40, f"krátký třmen {HANGER_CODE} (jen vzadu)", fs=7, ha="left", va="top", c="#8b3a00")
at(axA, xw + 15, yam - 95, "NE dlouhý třmen skrz dutinu", fs=7, ha="left", va="bottom", c="#b71c1c",
   weight="bold")
at(axA, -WALL_PLASTER - WALL_MASON - 22, yam, "ZEĎ", fs=10, ha="center", rot=90,
   weight="bold", c="#333")
at(axA, xr + 40, yam, "MÍSTNOST", fs=10, ha="center", rot=90, weight="bold", c="#0d5a70")

adimh(axA, -18, 0, REAR_REACH, f"≤{REAR_REACH:.0f}", tick=4, fs=7)
adimh(axA, -48, 0, xw, "80", tick=5, fs=8)
adimh(axA, -48, xw, xg, "97,5 ≈100", tick=5, fs=7.5)
adimh(axA, -48, xg, xr, "12,5", tick=5, fs=7.5)
adimh(axA, -85, 0, xr, "190", tick=7, fs=10)

axA.set_xlim(-WALL_PLASTER - WALL_MASON - 50, xr + 70)
axA.set_ylim(-115, SEC_H + 45)
axA.set_title("A  ·  Vodorovný řez · hybridní rám 190 mm (zeď ← → místnost) · 1:1 mm",
              fontsize=10, loc="left", pad=6)

# ---------- PNG B: B1 short + B2 ceiling ----------
# B1 left half
ap(axB, [(-55, 0), (-15, 0), (-15, 140), (-55, 140)], "#b8b0a0", "#444", 0.9, z=1)
ap(axB, [(-15, 0), (0, 0), (0, 140), (-15, 140)], "#e8e4dc", "#888", 0.7, z=2)
ap(axB, [(0, 0), (40, 0), (40, 140), (0, 140)], "#c5e0a8", "#5a8a3a", 0.9, z=3, alpha=0.9)
ap(axB, [(40, 0), (70, 0), (70, 140), (40, 140)], "#f7f7f2", "#aaa", 0.7, z=3, ls="--")
ap(axB, [(40 - 27, 40), (40, 40), (40, 100), (40 - 27, 100)], "#6a6a6a", "#222", 1.0, z=6)

cyb = 70
ap(axB, [(-3, cyb - 22), (6, cyb - 22), (6, cyb + 22), (-3, cyb + 22)],
   "#555", "#222", 0.7, z=8)
al(axB, (-28, cyb), (4, cyb), "#333", 1.3, z=8)
axB.add_patch(Circle((-18, cyb), 4, fc="#444", ec="#111", lw=0.5, zorder=9))
axB.add_patch(Circle((16, cyb), 11, fc="#e07020", ec="#8b3a00", lw=1.1, zorder=9))
axB.add_patch(Circle((16, cyb), 6, fc="#f0a060", ec="none", zorder=9.5))
ap(axB, [(24, cyb - 7), (40 - 27 + 4, cyb - 7), (40 - 27 + 4, cyb + 7), (24, cyb + 7)],
   "#666", "#222", 0.8, z=8)
ap(axB, [(40 - 27 - 2, cyb - 14), (40 + 2, cyb - 14), (40 + 2, cyb - 9), (40 - 27 - 2, cyb - 9)],
   "#555", "#222", 0.6, z=8)
ap(axB, [(40 - 27 - 2, cyb + 9), (40 + 2, cyb + 9), (40 + 2, cyb + 14), (40 - 27 - 2, cyb + 14)],
   "#555", "#222", 0.6, z=8)

at(axB, 16, cyb + 18, "Sylomer", fs=7.5, ha="center", va="bottom", c="#8b3a00", weight="bold")
at(axB, 26, 28, "CD vzadu", fs=7.5, ha="center", va="top", c="#222")
at(axB, -48, cyb, "zeď", fs=8, ha="center", rot=90, c="#444")
at(axB, 18, 8, "MW", fs=7, ha="center", c="#3d6b1e")
at(axB, 55, 70, "→ vzduch\n+GKB\n(bez třmenu)", fs=6.5, ha="center", c="#888")
at(axB, -55, -16, "B1  krátký třmen vzadu ≤~120 mm", fs=7.5, ha="left", c="#8b3a00", weight="bold")
at(axB, -55, -32, f"{HANGER_CODE}  ·  kotvení ke zdi jen vzadu", fs=7, ha="left", c="#444")

# B2 ceiling hang — right side of axB
bx = 95
ap(axB, [(bx, 155), (bx + 90, 155), (bx + 90, 175), (bx, 175)],
   "#90caf9", "#1565c0", 1.0, z=4)
at(axB, bx + 45, 165, "strop/podhled", fs=7, ha="center", c="#1565c0", weight="bold")
ap(axB, [(bx + 38, 100), (bx + 52, 100), (bx + 52, 155), (bx + 38, 155)],
   "#666", "#222", 0.8, z=8)
for i in range(4):
    axB.add_patch(Circle((bx + 45, 148 - i * 11), 2.2, fc="#333", ec="#111", lw=0.3, zorder=9))
ap(axB, [(bx + 15, 78), (bx + 75, 78), (bx + 75, 98), (bx + 15, 98)],
   "#6a6a6a", "#222", 1.0, z=6)
at(axB, bx + 45, 88, "UW/CD", fs=7, ha="center", c="#fff", weight="bold")
al(axB, (bx + 25, 78), (bx + 25, 30), "#555", 1.0, z=6)
al(axB, (bx + 65, 78), (bx + 65, 30), "#555", 1.0, z=6)
ap(axB, [(bx + 75, 30), (bx + 87, 30), (bx + 87, 78), (bx + 75, 78)],
   "#c8e8f0", "#0d5a70", 1.0, z=5)
at(axB, bx, -16, "B2  závěs shora (Nonius / akust.)", fs=7.5, ha="left", c="#1565c0", weight="bold")
at(axB, bx, -32, "ze stropu/podhledu → horní CD/UW", fs=7, ha="left", c="#444")

axB.set_xlim(-70, 200)
axB.set_ylim(-50, 190)
axB.set_title("B  ·  Callout: krátký třmen vzadu + závěs shora",
              fontsize=10, loc="left", pad=6)

# ---------- PNG C ----------
ES = 0.35
z0, z1 = 2280.0, 3180.0


def pz(z):
    return (z - z0) * ES


ap(axC, [(-95, pz(z0)), (-WALL_PLASTER, pz(z0)),
         (-WALL_PLASTER, pz(z1)), (-95, pz(z1))],
   "#b8b0a0", "#444", 0.8, z=1)
ap(axC, [(-WALL_PLASTER, pz(z0)), (0, pz(z0)), (0, pz(z1)), (-WALL_PLASTER, pz(z1))],
   "#e8e4dc", "#888", 0.6, z=2)
ap(axC, [(0, pz(z0)), (120, pz(z0)), (120, pz(Z_BOT)), (0, pz(Z_BOT))],
   "#e8e0d0", "#666", 0.9, z=3, alpha=0.55, ls="--")
at(axC, 60, pz((z0 + Z_BOT) / 2), "pouzdro", fs=8, ha="center", rot=90, c="#555")

z_top = z1 - 100
ap(axC, [(0, pz(Z_BOT)), (190, pz(Z_BOT)), (190, pz(z_top)), (0, pz(z_top))],
   "#c8e8f0", "#0d5a70", 1.4, z=5, alpha=0.9)
al(axC, (0, pz(Z_BOT)), (190, pz(Z_BOT)), "#0d5a70", 2.2, z=6)
ap(axC, [(190 - 12.5, pz(Z_BOT)), (190, pz(Z_BOT)),
         (190, pz(Z_BOT) + 4), (190 - 12.5, pz(Z_BOT) + 4)],
   "#ffcc80", "#e65100", 0.7, z=7)
al(axC, (REAR_REACH - CD_D / 2, pz(Z_BOT + 25)),
   (REAR_REACH - CD_D / 2, pz(z_top - 20)), "#555", 1.0, z=6)
al(axC, (T_WOOL + T_AIR - CD_D / 2, pz(Z_BOT + 25)),
   (T_WOOL + T_AIR - CD_D / 2, pz(z_top - 20)), "#555", 1.0, z=6)
for zz in (Z_BOT + 180, Z_BOT + 700):
    if zz < z_top - 40:
        axC.add_patch(Circle((22, pz(zz)), 5, fc="#e07020", ec="#8b3a00", lw=0.7, zorder=8))

# ceiling hang
ap(axC, [(-30, pz(z1 - 50)), (220, pz(z1 - 50)),
         (220, pz(z1 - 20)), (-30, pz(z1 - 20))],
   "#90caf9", "#1565c0", 1.0, z=4)
ap(axC, [(88, pz(z_top)), (102, pz(z_top)),
         (102, pz(z1 - 50)), (88, pz(z1 - 50))],
   "#666", "#222", 0.9, z=8)
at(axC, 210, pz(z1 - 35), "závěs shora\n(Nonius/akust.)", fs=7, ha="left", c="#1565c0")

at(axC, 210, pz(Z_BOT), "spodek SDK @ 2450\n+ měkká spára 2–5 mm",
   fs=7.5, ha="left", va="center", c="#e65100")
at(axC, 95, pz((Z_BOT + z_top) / 2), "SDK 190", fs=9, ha="center", weight="bold", c="#0d5a70")
adimh(axC, pz(z_top) + 10, 0, 190, "190", tick=4, fs=8)
adimv(axC, -50, pz(z0), pz(Z_BOT), "pouzdro", tick=4, fs=7)
at(axC, 205, pz(Z_BOT) - 8, "Z=2450", fs=7.5, ha="left", va="top", c="#2d6a3e")

axC.set_xlim(-130, 400)
axC.set_ylim(pz(z0) - 30, pz(z1) + 20)
axC.set_title("C  ·  Mini pohled · spodek @ 2450 + závěs shora",
              fontsize=10, loc="left", pad=6)

# ---------- Legend ----------
axL.set_xlim(0, 10)
axL.set_ylim(0, 10)
leg = [
    (9.5, "LEGENDA — HYBRID", 10, "bold", "#111"),
    (8.9, "Skladba (zeď → místnost), Σ 190 mm:", 8.5, "bold", "#111"),
    (8.5, "1  Nosná zeď + omítka (stávající)", 7.5, "normal", "#333"),
    (8.15, f"2  Minerální vlna  {T_WOOL:.0f} mm", 7.5, "normal", "#3d6b1e"),
    (7.80, f"3  Vzduch ≈100 mm  (kóta {T_AIR})", 7.5, "normal", "#555"),
    (7.45, f"4  GKB {T_GKB} mm — plná (membrána), NE perforovaná", 7.5, "normal", "#0d5a70"),
    (6.90, "Hybridní kotvení:", 8.5, "bold", "#b71c1c"),
    (6.50, "·  ne dlouhý třmen skrz celou dutinu", 7.3, "bold", "#b71c1c"),
    (6.15, "·  kotvení ke zdi jen vzadu (≤~120 mm)", 7.3, "bold", "#8b3a00"),
    (5.80, "·  závěs shora ze stropu/podhledu", 7.3, "bold", "#1565c0"),
    (5.40, f"·  Vzadu: {HANGER_NAME} {HANGER_CODE}", 6.8, "normal", "#333"),
    (5.10, f"   alt. {HANGER_ALT}", 6.5, "normal", "#555"),
    (4.75, f"·  Shora: {CEIL_HANG}", 6.8, "normal", "#1565c0"),
    (4.40, f"·  Rám: CD vzadu + CD vpředu + UW  ·  @ {CD_SPACING:.0f} mm", 6.8, "normal", "#333"),
    (4.05, "·  Box od Z=2450 — SDK římsa + měkká spára", 6.8, "normal", "#555"),
    (3.55, "Membrána / obvod:", 8.5, "bold", "#111"),
    (3.20, "·  Spára 2–5 mm + akustický akrylát (ne sádra/silikon)", 7.0, "normal", "#e65100"),
    (2.85, "·  Spodek @ 2450, po nátěru bezespárový", 7.0, "normal", "#555"),
    (2.35, "Ladění: dutina 190 mm ≈ ~40–120 Hz", 7.5, "bold", "#1a4a6a"),
    (1.85, "Poznámka:", 8.0, "bold", "#111"),
    (1.50, "Zhotovitel zhodnotí: třmeny NEBO Sylomer podložky", 7.0, "bold", "#8b3a00"),
    (1.20, "(podložku nedotahovat naplocho). Ne freestanding od podlahy.", 6.6, "normal", "#444"),
    (0.85, f"Kóty: {T_WOOL:.0f} + {T_AIR} + {T_GKB} = {T_TOTAL:.0f} mm", 7.5, "bold", "#2d6a3e"),
    (0.45, "zak. 220103  ·  mm", 7.5, "normal", "#666"),
]
for y, s, fs, w, c in leg:
    axL.text(0.15, y, s, fontsize=fs, fontweight=w, color=c, ha="left", va="center",
             transform=axL.transData, zorder=5)
swatches = [
    (8.5, "#b8b0a0"), (8.15, "#c5e0a8"), (7.80, "#f7f7f2"),
    (7.45, "#c8e8f0"), (6.15, "#e07020"), (5.80, "#90caf9"),
]
for y, fc in swatches:
    axL.add_patch(FancyBboxPatch((0.02, y - 0.12), 0.10, 0.24,
                                 boxstyle="round,pad=0.01", facecolor=fc,
                                 edgecolor="#333", lw=0.4, transform=axL.transData,
                                 zorder=4))

axL.set_title(" ", fontsize=1)

fig.suptitle(
    "Obývák 1.02 – DETAIL basstrap kuchyně · předstěna 190 mm · HYBRID"
    "   ·   zak. 220103 · mm",
    fontsize=13, fontweight="bold", x=0.04, ha="left", y=0.97,
)
fig.text(
    0.04, 0.015,
    "Hybrid: kotvení ke zdi jen vzadu + závěs shora ze stropu/podhledu.  "
    "NE dlouhý třmen skrz dutinu.  "
    f"Skladba: MW {T_WOOL:.0f} | vzduch {T_AIR} | GKB {T_GKB} = {T_TOTAL:.0f} mm   ·   "
    f"{HANGER_CODE} vzadu  ·  Nonius/akust. shora  ·  ~40–120 Hz",
    fontsize=7.5, color="#333",
)

fig.savefig(OUT_PNG, dpi=150, facecolor="white")
print("wrote", OUT_PNG, "size", OUT_PNG.stat().st_size)
print("DONE")
print(f"DIM: {T_WOOL} + {T_AIR} + {T_GKB} = {T_TOTAL}")
print(f"HYBRID: rear {HANGER_CODE} ≤{REAR_REACH}mm + ceiling {CEIL_HANG}")

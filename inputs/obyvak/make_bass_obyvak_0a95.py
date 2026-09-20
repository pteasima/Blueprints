#!/usr/bin/env python3
"""Obývák 1.02 – DETAIL basstrap obývák · předstěna 450 mm.

HYBRID framing: hang from ceiling/podhled + short rear wall fix only
(katalogový třmen ≤~120 mm — NE dlouhý třmen skrz celou dutinu).

MIRRORED vs kitchen: LEFT = room / GKB, RIGHT = nosná zeď + omítka.

DXF R2010 mm + PNG.

Do NOT touch make_rez.py, make_stit_bokorys.py, make_bass_kuchyne.py,
or Petr's original DWGs.
"""
from pathlib import Path
import math
import ezdxf
from ezdxf import units
from ezdxf.enums import TextEntityAlignment as A
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.patches import Polygon, Circle, FancyBboxPatch

OUT_DXF = Path("/workspace/dwg/obyvak-bass-obyvak-450.dxf")
OUT_PNG = Path("/workspace/dwg/obyvak-bass-obyvak-450.png")

# ---------- stack (mm) — sums to 450; room ← · → wall ----------
WALL_MASON = 250.0
WALL_PLASTER = 15.0
T_GKB = 12.5
T_AIR = 137.5         # ~140; 12.5 + 137.5 + 300 = 450
T_WOOL = 300.0
T_TOTAL = T_GKB + T_AIR + T_WOOL  # 450.0
assert abs(T_TOTAL - 450.0) < 1e-9

CD_W = 60.0
CD_D = 27.0
CD_SPACING = 625.0
Z_BOT = 2450.0
SOFT_GAP = 3.5

HANGER_CODE = "KB517112"
HANGER_NAME = "Rigips akustický třmen se Sylomerem"
HANGER_ALT = "Knauf W623 / přímý akustický závěs"
REAR_REACH = 100.0    # wall → rear CD within wool, ≤ catalog ~120

CEIL_HANG = "Nonius / Rigips–Knauf akustický stropní závěs"
CEIL_HANG_ALT = "Nonius závěs nebo Rigips akustický závěs podhledu"

SEC_H = 420.0

print("=== BASS OBÝVÁK 450 — HYBRID ===")
print(f"GKB={T_GKB}  air={T_AIR}  wool={T_WOOL}  total={T_TOTAL}")
print(f"orientation: LEFT=room/GKB, RIGHT=wall (mirrored vs kitchen)")
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
# PANEL A — horizontal section (room L → wall R)  MIRRORED
# Hybrid: rear CD near wall (RIGHT) + short třmen; front CD carries GKB
# =====================================================================
OX, OY = 0.0, 0.0

x_room = OX
x_gkb = OX + T_GKB
x_wool = OX + T_GKB + T_AIR
x_plaster = OX + T_TOTAL
x_pls_end = x_plaster + WALL_PLASTER
x_mas_end = x_pls_end + WALL_MASON

# FRONT CD against GKB (into air)
x_front_cd = x_gkb
x_front_cd_back = x_gkb + CD_D
# REAR CD near wall, within wool — REAR_REACH from plaster toward room
x_rear_cd = x_plaster - REAR_REACH          # face of rear CD toward room
x_rear_cd_back = x_rear_cd + CD_D           # toward wall … wait
# Wall is on RIGHT. Rear CD is near wall. From plaster going LEFT (into wool):
# rear CD sits at plaster - REAR_REACH (left edge) to plaster - REAR_REACH + CD_D
x_rear_cd = x_plaster - REAR_REACH
# Actually: distance from plaster face to far side of rear CD = REAR_REACH
# CD depth CD_D into cavity (leftward from wall). So:
# right edge of rear CD ≈ plaster - small gap, left edge = right - CD_D
# Better: right face of rear CD at plaster - 5 (almost against wool@wall),
# left face = that - CD_D. Reach from plaster to left face of CD ≈ 5+CD_D...
# Spec: short třmen wall → rear stud within ≤120. Place rear CD so
# plaster → centre/clip of CD ≈ REAR_REACH.
x_rear_cd = x_plaster - REAR_REACH          # left face of rear CD
# wait if left face is plaster-100, CD extends right toward wall to plaster-100+27=plaster-73
# So gap from CD right face to plaster = 73 mm of wool between CD and wall — třmen spans that.
# Better orientation: CD open toward room or wall. Place:
# right face of rear CD close to wall: x_rear_right = plaster - 8
# left face = x_rear_right - CD_D
x_rear_right = x_plaster - 8
x_rear_cd = x_rear_right - CD_D             # left face
# reach wall→CD clip ≈ 8 + CD_D/2 ≈ 21… too short visually for "≤120"
# Place CD so left face (room side of rear stud) is at plaster - REAR_REACH:
x_rear_cd = x_plaster - REAR_REACH          # left = room side of rear CD
# CD extends toward wall: width CD_D
assert x_rear_cd + CD_D < x_plaster

y0 = OY
y1 = OY + SEC_H
ym = (y0 + y1) / 2

# GKB LEFT
rect(x_room, y0, T_GKB, SEC_H, "A-SDK", "ANSI31", 5, 2)
for yy in (y0 + 2, y1 - SOFT_GAP - 2):
    rect(x_room - 0.5, yy, T_GKB + 1, SOFT_GAP, "A-TESNENI")

# air
rect(x_gkb, y0, T_AIR, SEC_H, "A-SCHEMA")
for i in range(6):
    yy = y0 + 40 + i * 60
    line((x_gkb + 8, yy), (x_wool - 8, yy + 25), "A-OSA")

# FRONT CD against GKB
cd_y0 = ym - CD_W / 2
rect(x_front_cd, cd_y0, CD_D, CD_W, "A-OCEL", "ANSI31", 4, 8)
line((x_front_cd_back - 4, cd_y0), (x_front_cd_back, cd_y0), "A-OCEL")
line((x_front_cd_back - 4, cd_y0 + CD_W), (x_front_cd_back, cd_y0 + CD_W), "A-OCEL")

# wool
rect(x_wool, y0, T_WOOL, SEC_H, "A-VATA", "ANSI37", 8, 4)

# REAR CD in wool near wall
rect(x_rear_cd, cd_y0, CD_D, CD_W, "A-OCEL", "ANSI31", 4, 8)
line((x_rear_cd + CD_D - 4, cd_y0), (x_rear_cd + CD_D, cd_y0), "A-OCEL")
line((x_rear_cd + CD_D - 4, cd_y0 + CD_W), (x_rear_cd + CD_D, cd_y0 + CD_W), "A-OCEL")

# cross members front↔rear
for dy in (-CD_W / 2 - 8, CD_W / 2 + 8):
    line((x_front_cd_back, ym + dy), (x_rear_cd, ym + dy), "A-OCEL")

# plaster + masonry RIGHT
rect(x_plaster, y0 - 40, WALL_PLASTER, SEC_H + 80, "A-OMITKA")
rect(x_pls_end, y0 - 40, WALL_MASON, SEC_H + 80, "A-ZDIVO", "ANSI31", 18, 8)

# SHORT rear wall fix (wall RIGHT → rear CD)
tr_y = ym
fill_poly([
    (x_plaster - 8, tr_y - 28), (x_plaster + 2, tr_y - 28),
    (x_plaster + 2, tr_y + 28), (x_plaster - 8, tr_y + 28),
], "A-OCEL", 8)
line((x_plaster - 6, tr_y), (x_plaster + 18, tr_y), "A-OCEL")
filled_circle(x_plaster + 10, tr_y, 3.5, 8, "A-OCEL")
filled_circle(x_plaster - 22, tr_y, 12, 6, "A-SYLOMER")
# SHORT arm to REAR CD only
fill_poly([
    (x_plaster - 30, tr_y - 8), (x_rear_cd + CD_D - 2, tr_y - 8),
    (x_rear_cd + CD_D - 2, tr_y + 8), (x_plaster - 30, tr_y + 8),
], "A-OCEL", 8)
fill_poly([
    (x_rear_cd - 2, tr_y - 16), (x_rear_cd + CD_D + 2, tr_y - 16),
    (x_rear_cd + CD_D + 2, tr_y - 10), (x_rear_cd - 2, tr_y - 10),
], "A-OCEL", 8)
fill_poly([
    (x_rear_cd - 2, tr_y + 10), (x_rear_cd + CD_D + 2, tr_y + 10),
    (x_rear_cd + CD_D + 2, tr_y + 16), (x_rear_cd - 2, tr_y + 16),
], "A-OCEL", 8)

# GKB screws into FRONT CD
for dy in (-18, 18):
    sx = x_room + T_GKB / 2
    sy = tr_y + dy
    filled_circle(sx, sy, 2.2, 1, "A-OCEL")
    line((sx, sy), (x_front_cd + CD_D / 2, sy), "A-OCEL")

label(x_room + T_GKB / 2 - 18, ym + 80, "① GKB 12,5", 11, rot=90, align=A.MIDDLE_CENTER)
label(x_gkb + T_AIR / 2, y1 - 30, "② vzduch ~140", 12, align=A.MIDDLE_CENTER)
label(x_wool + T_WOOL / 2, y1 - 30, "③ MW 300", 12, align=A.MIDDLE_CENTER)
label(x_pls_end + WALL_MASON / 2, ym, "nosná zeď", 14, rot=90, align=A.MIDDLE_CENTER)
label(x_plaster + WALL_PLASTER / 2 + 2, ym + 90, "omítka", 9, rot=90, align=A.MIDDLE_CENTER)
label(x_plaster - 22, tr_y + 32, "Sylomer", 9, align=A.BOTTOM_CENTER, layer="A-POZN")
label(x_rear_cd + CD_D / 2, cd_y0 - 14, "CD vzadu", 9, align=A.TOP_CENTER)
label(x_front_cd + CD_D / 2, cd_y0 - 14, "CD vpředu", 9, align=A.TOP_CENTER)
label(x_plaster - 40, tr_y - 38, f"krátký třmen {HANGER_CODE} (jen vzadu)", 9,
      align=A.TOP_RIGHT, layer="A-POZN")
label(x_gkb + 30, ym - 90, "NE dlouhý třmen skrz dutinu", 9,
      align=A.BOTTOM_LEFT, layer="A-POZN")

label(x_room - 55, ym, "MÍSTNOST", 16, rot=90, align=A.MIDDLE_CENTER)
label(x_mas_end + 30, ym, "ZEĎ", 16, rot=90, align=A.MIDDLE_CENTER)
line((x_room - 8, ym), (x_room - 35, ym), "A-OBRYS")

dim_h(y0 - 25, x_rear_cd, x_plaster, f"≤{REAR_REACH:.0f}", htxt=10, tick=5)
dim_y = y0 - 55
dim_h(dim_y, x_room, x_gkb, "12,5", htxt=11, tick=6)
dim_h(dim_y, x_gkb, x_wool, "137,5 ≈140", htxt=12, tick=6)
dim_h(dim_y, x_wool, x_plaster, "300", htxt=14, tick=6)
dim_h(dim_y - 45, x_room, x_plaster, "450", htxt=18, tick=8)

label(x_room - 40, y1 + 55,
      "A  ·  VODOROVNÝ ŘEZ  ·  hybridní rám 450 mm  (místnost ← · → zeď)  ·  1:1 mm",
      16, align=A.BOTTOM_LEFT)
label(x_room - 40, y1 + 30,
      "Kotvení ke zdi jen vzadu · závěs shora · SDK vlevo, zeď vpravo · GKB plná",
      11, align=A.BOTTOM_LEFT, layer="A-POZN")

# =====================================================================
# PANEL B — B1 short rear + B2 ceiling hang
# =====================================================================
BX0 = OX + T_TOTAL + WALL_PLASTER + WALL_MASON + 120
BY0 = OY - 20

S = 2.2
cx0 = BX0
# B1: wall on right, short zone
# Simplified callout: GKB hint left dashed, wool, rear CD, plaster, wall
# Focus on rear zone near wall
wool_w = 50 * S
pls_lx = cx0 + wool_w
rect(cx0, BY0, wool_w, 140 * S, "A-VATA", "ANSI37", 6, 4)
rect(pls_lx, BY0, 15 * S, 140 * S, "A-OMITKA")
rect(pls_lx + 15 * S, BY0, 40 * S, 140 * S, "A-ZDIVO", "ANSI31", 10, 8)
# rear CD near plaster (left of plaster)
cd_lx = pls_lx - 27 * S
rect(cd_lx, BY0 + 40 * S, 27 * S, 60 * S, "A-OCEL", "ANSI31", 3, 8)
# air/GKB hint left of wool
rect(cx0 - 35 * S, BY0, 35 * S, 140 * S, "A-SCHEMA")
label(cx0 - 17 * S, BY0 + 70 * S, "← vzduch\n+ GKB\n(bez třmenu)", 8,
      align=A.MIDDLE_CENTER, layer="A-POZN")

cy = BY0 + 70 * S
fill_poly([
    (pls_lx - 3 * S, cy - 22 * S), (pls_lx + 6 * S, cy - 22 * S),
    (pls_lx + 6 * S, cy + 22 * S), (pls_lx - 3 * S, cy + 22 * S),
], "A-OCEL", 8)
line((pls_lx - 4 * S, cy), (pls_lx + 28 * S, cy), "A-OCEL")
filled_circle(pls_lx + 18 * S, cy, 4 * S, 8, "A-OCEL")
filled_circle(pls_lx - 16 * S, cy, 11 * S, 6, "A-SYLOMER")
fill_poly([
    (pls_lx - 24 * S, cy - 7 * S), (cd_lx + 27 * S - 4 * S, cy - 7 * S),
    (cd_lx + 27 * S - 4 * S, cy + 7 * S), (pls_lx - 24 * S, cy + 7 * S),
], "A-OCEL", 8)
fill_poly([
    (cd_lx - 2 * S, cy - 14 * S), (cd_lx + 27 * S + 2 * S, cy - 14 * S),
    (cd_lx + 27 * S + 2 * S, cy - 9 * S), (cd_lx - 2 * S, cy - 9 * S),
], "A-OCEL", 8)
fill_poly([
    (cd_lx - 2 * S, cy + 9 * S), (cd_lx + 27 * S + 2 * S, cy + 9 * S),
    (cd_lx + 27 * S + 2 * S, cy + 14 * S), (cd_lx - 2 * S, cy + 14 * S),
], "A-OCEL", 8)

label(cx0 - 40 * S, BY0 + 145 * S,
      "B1  ·  KRÁTKÝ TŘMEN VZADU  ·  ~2:1  (≤~120 mm ke zdi)",
      13, align=A.BOTTOM_LEFT)
label(pls_lx - 16 * S, cy + 20 * S, "Sylomer", 10, align=A.BOTTOM_CENTER, layer="A-POZN")
label(cd_lx + 13 * S, BY0 + 28 * S, "CD vzadu", 10, align=A.TOP_CENTER)
label(pls_lx + 35 * S, cy, "zeď", 10, rot=90, align=A.MIDDLE_CENTER)
label(cx0 + wool_w / 2, BY0 + 8 * S, "MW", 9, align=A.BOTTOM_CENTER, layer="A-POZN")
label(cx0 - 40 * S, BY0 - 30,
      "zeď → Sylomer → krátký třmen → CD vzadu  ·  kotvení ke zdi jen vzadu",
      10, align=A.BOTTOM_LEFT, layer="A-POZN")
label(cx0 - 40 * S, BY0 - 50,
      f"{HANGER_NAME}  ·  {HANGER_CODE}  /  {HANGER_ALT}",
      10, align=A.BOTTOM_LEFT, layer="A-POPIS")

# B2 ceiling hang
B2X = BX0 + 300
B2Y = BY0
rect(B2X, B2Y + 160, 160, 30, "A-PODHLED", "ANSI31", 8, 5)
label(B2X + 80, B2Y + 175, "strop / podhled pod hřebenem", 9, align=A.MIDDLE_CENTER)
fill_poly([
    (B2X + 70, B2Y + 160), (B2X + 90, B2Y + 160),
    (B2X + 90, B2Y + 100), (B2X + 70, B2Y + 100),
], "A-OCEL", 8)
for i in range(4):
    filled_circle(B2X + 80, B2Y + 150 - i * 12, 2.5, 8, "A-OCEL")
rect(B2X + 30, B2Y + 75, 100, 25, "A-OCEL", "ANSI31", 4, 8)
label(B2X + 80, B2Y + 87, "UW / CD horní", 9, align=A.MIDDLE_CENTER)
line((B2X + 45, B2Y + 75), (B2X + 45, B2Y + 20), "A-OCEL")
line((B2X + 115, B2Y + 75), (B2X + 115, B2Y + 20), "A-OCEL")
label(B2X + 80, B2Y + 40, "rám dolů →", 9, align=A.MIDDLE_CENTER, layer="A-POZN")
rect(B2X + 20, B2Y + 20, 12, 55, "A-SDK", "ANSI31", 3, 2)

label(B2X, B2Y + 200,
      "B2  ·  ZÁVĚS SHORA  ·  Nonius / akust. stropní závěs",
      13, align=A.BOTTOM_LEFT)
label(B2X, B2Y - 5, f"{CEIL_HANG}", 10, align=A.BOTTOM_LEFT, layer="A-POPIS")
label(B2X, B2Y - 25,
      "závěs shora ze stropu/podhledu → horní vodorovný CD/UW rámu",
      9, align=A.BOTTOM_LEFT, layer="A-POZN")

# =====================================================================
# PANEL C — mini elev: bottom 2450 + top hang; wall RIGHT
# =====================================================================
CX = OX - 40
CY = OY - 560
ES = 0.32
z_lo = 2300.0
z_hi = 3100.0


def ez(z):
    return CY + (z - z_lo) * ES


ex_pl = CX + T_TOTAL
rect(ex_pl, ez(z_lo), WALL_PLASTER, (z_hi - z_lo) * ES, "A-OMITKA")
rect(ex_pl + WALL_PLASTER, ez(z_lo), 80, (z_hi - z_lo) * ES,
     "A-ZDIVO", "ANSI31", 12, 8)

poly([
    (ex_pl - 120, ez(z_lo)), (ex_pl, ez(z_lo)),
    (ex_pl, ez(Z_BOT)), (ex_pl - 120, ez(Z_BOT)),
], "A-POUZDRO", hatch="ANSI37", hatch_scale=20, hatch_color=8, linetype="DASHED")
label(ex_pl - 60, ez((z_lo + Z_BOT) / 2), "pouzdro", 10, rot=90,
      align=A.MIDDLE_CENTER, layer="A-POZN")

pred_d = T_TOTAL
poly([
    (ex_pl - pred_d, ez(Z_BOT)), (ex_pl, ez(Z_BOT)),
    (ex_pl, ez(z_hi - 80)), (ex_pl - pred_d, ez(z_hi - 80)),
], "A-SDK", hatch="ANSI31", hatch_scale=10, hatch_color=2)
line((ex_pl - pred_d, ez(Z_BOT)), (ex_pl, ez(Z_BOT)), "A-SDK")
rect(ex_pl - pred_d, ez(Z_BOT), T_GKB, SOFT_GAP * ES * 3, "A-TESNENI")
label(ex_pl - pred_d - 25, ez(Z_BOT),
      "spodní uzavření SDK @ 2450 + měkká spára 2–5 mm",
      10, align=A.MIDDLE_RIGHT, layer="A-POZN")
label(ex_pl - pred_d - 25, ez(Z_BOT) - 18,
      "(bílý přetíratelný akustický akrylát — ne sádra, ne silikon)",
      9, align=A.MIDDLE_RIGHT, layer="A-POZN")

# front CD (near GKB left) + rear CD (near wall)
line((ex_pl - pred_d + T_GKB + CD_D / 2, ez(Z_BOT + 30)),
     (ex_pl - pred_d + T_GKB + CD_D / 2, ez(z_hi - 100)), "A-OCEL")
line((ex_pl - REAR_REACH + CD_D / 2, ez(Z_BOT + 30)),
     (ex_pl - REAR_REACH + CD_D / 2, ez(z_hi - 100)), "A-OCEL")
for zz in (Z_BOT + 200, Z_BOT + 700):
    if zz < z_hi - 120:
        filled_circle(ex_pl - 22, ez(zz), 4, 6, "A-SYLOMER")

sof_y = ez(z_hi - 40)
rect(ex_pl - pred_d - 40, sof_y, pred_d + 80, 28, "A-PODHLED", "ANSI31", 6, 5)
fill_poly([
    (ex_pl - pred_d / 2 - 8, sof_y), (ex_pl - pred_d / 2 + 8, sof_y),
    (ex_pl - pred_d / 2 + 8, ez(z_hi - 80)), (ex_pl - pred_d / 2 - 8, ez(z_hi - 80)),
], "A-OCEL", 8)
label(ex_pl + WALL_PLASTER + 90, sof_y + 5,
      "závěs shora (Nonius / akust. stropní)",
      10, align=A.MIDDLE_LEFT, layer="A-POZN")
label(ex_pl + WALL_PLASTER + 90, ez(z_hi - 100),
      "horní UW/CD rámu",
      9, align=A.MIDDLE_LEFT, layer="A-POZN")

dim_v(ex_pl + WALL_PLASTER + 95, ez(z_lo), ez(Z_BOT), "↓ pouzdro", htxt=9, tick=5)
dim_v(ex_pl - pred_d - 15, ez(Z_BOT), ez(z_hi - 80), "předstěna ↑", htxt=9, tick=5)
dim_h(ez(z_hi - 80) + 18, ex_pl - pred_d, ex_pl, "450", htxt=12, tick=5)

label(ex_pl - pred_d, ez(z_hi) + 35,
      "C  ·  MINI POHLED  ·  spodek @ 2450 + závěs shora",
      14, align=A.BOTTOM_LEFT)
label(ex_pl - pred_d / 2, ez((Z_BOT + z_hi - 80) / 2),
      "SDK 450", 12, align=A.MIDDLE_CENTER)

# =====================================================================
# LEGEND
# =====================================================================
LX = BX0
LY = OY + SEC_H + 20

legend_lines = [
    "SKLADBA (místnost → zeď), Σ 450 mm:",
    f"  1  GKB / Rigips RF  {T_GKB} mm  — plná deska (membrána), NE perforovaná",
    f"  2  Vzduchová mezera  ≈140 mm  (kóta {T_AIR} mm)",
    f"  3  Minerální vlna u stěny (tlumení dutiny)  {T_WOOL:.0f} mm",
    f"  4  Nosná zeď + interiérová omítka (stávající)",
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
    f"  ·  Lehký rám plné hloubky 450: CD vzadu + CD vpředu + UW",
    f"  ·  Svislé CD 60/27 @ {CD_SPACING:.0f} mm osově; GKB na lícovém CD",
    "  ·  Box od Z=2450 — spodní uzavřená SDK římsa + měkká spára",
    "",
    "MEMBRÁNA / OBVOD:",
    "  ·  Měkká obvodová spára 2–5 mm + bílý přetíratelný",
    "     akustický akrylát (ne tuhá sádra, ne silikon)",
    "  ·  Spodek uzavřen @ 2450 (SDK), po nátěru bezespárový vzhled",
    "  ·  Vlna = tlumení dutiny, ne primárně tepelně",
    "",
    "LADĚNÍ (expert): dutina 450 mm ≈ pásmo ~25–80 Hz",
    "  ·  Subwoofer: roh / strana obýváku — basstrap na štítu gable",
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

TX = x_room - 40
TY = OY + SEC_H + 120
label(TX, TY,
      "Obývák 1.02 – DETAIL basstrap obývák · předstěna 450 mm · HYBRID",
      20, align=A.BOTTOM_LEFT)
label(TX, TY - 28,
      "zak. 220103  ·  mm  ·  SDK vlevo, zeď vpravo  ·  kotvení: zeď vzadu + závěs shora",
      12, align=A.BOTTOM_LEFT, layer="A-POZN")
label(TX, TY - 50,
      f"Kóty: {T_GKB} + {T_AIR} + {T_WOOL:.0f} = {T_TOTAL:.0f} mm  ·  "
      f"krátký třmen {HANGER_CODE} vzadu  ·  Nonius/akust. shora  ·  ~25–80 Hz",
      11, align=A.BOTTOM_LEFT, layer="A-POZN")

msp.add_lwpolyline(
    [(x_room - 100, y0 - 120), (x_mas_end + 60, y0 - 120),
     (x_mas_end + 60, y1 + 80), (x_room - 100, y1 + 80)],
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

gs = fig.add_gridspec(2, 2, height_ratios=[1.35, 0.85], width_ratios=[1.25, 0.90],
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


# ---------- PNG A (room L → wall R) ----------
xg0 = 0.0
xg1 = T_GKB
xw0 = T_GKB + T_AIR
xp = T_TOTAL
xfc = T_GKB
xrc = xp - REAR_REACH   # left face of rear CD
yam = SEC_H / 2

ap(axA, [(xg0, 0), (xg1, 0), (xg1, SEC_H), (xg0, SEC_H)],
   "#c8e8f0", "#0d5a70", 1.3, z=5, alpha=0.95)
ap(axA, [(xg0, 2), (xg1, 2), (xg1, 2 + SOFT_GAP), (xg0, 2 + SOFT_GAP)],
   "#ffcc80", "#e65100", 0.6, z=7)
ap(axA, [(xg0, SEC_H - 2 - SOFT_GAP), (xg1, SEC_H - 2 - SOFT_GAP),
         (xg1, SEC_H - 2), (xg0, SEC_H - 2)],
   "#ffcc80", "#e65100", 0.6, z=7)
ap(axA, [(xg1, 0), (xw0, 0), (xw0, SEC_H), (xg1, SEC_H)],
   "#f7f7f2", "#aaaaaa", 0.8, z=3)
for i in range(7):
    yy = 30 + i * 55
    axA.plot([xg1 + 10, xw0 - 10], [yy, yy + 28], color="#ccc", lw=0.5, ls="--", zorder=3.5)
ap(axA, [(xfc, yam - CD_W / 2), (xfc + CD_D, yam - CD_W / 2),
         (xfc + CD_D, yam + CD_W / 2), (xfc, yam + CD_W / 2)],
   "#6a6a6a", "#222", 1.1, z=6)
ap(axA, [(xw0, 0), (xp, 0), (xp, SEC_H), (xw0, SEC_H)],
   "#c5e0a8", "#5a8a3a", 1.0, z=3, alpha=0.9)
for i in range(10):
    yy = 20 + i * 40
    axA.plot([xw0 + 8, xp - 8], [yy, yy + 22], color="#6a9a4a", lw=0.45, alpha=0.55, zorder=3.5)
ap(axA, [(xrc, yam - CD_W / 2), (xrc + CD_D, yam - CD_W / 2),
         (xrc + CD_D, yam + CD_W / 2), (xrc, yam + CD_W / 2)],
   "#6a6a6a", "#222", 1.1, z=6)
al(axA, (xfc + CD_D, yam - CD_W / 2 - 8), (xrc, yam - CD_W / 2 - 8), "#555", 0.9, z=5)
al(axA, (xfc + CD_D, yam + CD_W / 2 + 8), (xrc, yam + CD_W / 2 + 8), "#555", 0.9, z=5)
ap(axA, [(xp, -30), (xp + WALL_PLASTER, -30),
         (xp + WALL_PLASTER, SEC_H + 30), (xp, SEC_H + 30)],
   "#e8e4dc", "#888", 0.7, z=2)
ap(axA, [(xp + WALL_PLASTER, -30), (xp + WALL_PLASTER + WALL_MASON, -30),
         (xp + WALL_PLASTER + WALL_MASON, SEC_H + 30), (xp + WALL_PLASTER, SEC_H + 30)],
   "#b8b0a0", "#444", 0.9, z=1)

# SHORT třmen
ap(axA, [(xp - 8, yam - 28), (xp + 2, yam - 28), (xp + 2, yam + 28), (xp - 8, yam + 28)],
   "#555", "#222", 0.8, z=8)
al(axA, (xp - 6, yam), (xp + 18, yam), "#333", 1.2, z=8)
axA.add_patch(Circle((xp + 10, yam), 3.5, fc="#444", ec="#111", lw=0.5, zorder=9))
axA.add_patch(Circle((xp - 22, yam), 12, fc="#e07020", ec="#8b3a00", lw=1.0, zorder=9))
axA.add_patch(Circle((xp - 22, yam), 7, fc="#f0a060", ec="none", zorder=9.5))
ap(axA, [(xp - 30, yam - 8), (xrc + CD_D - 2, yam - 8),
         (xrc + CD_D - 2, yam + 8), (xp - 30, yam + 8)],
   "#666", "#222", 0.9, z=8)
ap(axA, [(xrc - 2, yam - 16), (xrc + CD_D + 2, yam - 16),
         (xrc + CD_D + 2, yam - 10), (xrc - 2, yam - 10)],
   "#555", "#222", 0.7, z=8)
ap(axA, [(xrc - 2, yam + 10), (xrc + CD_D + 2, yam + 10),
         (xrc + CD_D + 2, yam + 16), (xrc - 2, yam + 16)],
   "#555", "#222", 0.7, z=8)
for dy in (-18, 18):
    axA.add_patch(Circle((xg0 + T_GKB / 2, yam + dy), 2.2, fc="#c62828", ec="#4a0000",
                         lw=0.4, zorder=10))
    al(axA, (xg0 + T_GKB / 2, yam + dy), (xfc + CD_D / 2, yam + dy), "#c62828", 0.7, z=9)

at(axA, xg0 - 14, yam + 70, "① GKB 12,5", fs=8, ha="center", va="center", rot=90, c="#0d5a70",
   weight="bold")
at(axA, xg1 + T_AIR / 2, SEC_H - 22, "② vzduch ~140", fs=9, ha="center", weight="bold", c="#555")
at(axA, xw0 + T_WOOL / 2, SEC_H - 22, "③ MW 300", fs=9, ha="center", weight="bold", c="#3d6b1e")
at(axA, xp + WALL_PLASTER + WALL_MASON / 2, yam, "nosná zeď", fs=8, ha="center", rot=90, c="#444")
at(axA, xp - 22, yam + 28, "Sylomer", fs=7, ha="center", va="bottom", c="#8b3a00")
at(axA, xrc + CD_D / 2, yam - CD_W / 2 - 12, "CD vzadu", fs=7, ha="center", va="top", c="#222")
at(axA, xfc + CD_D / 2, yam - CD_W / 2 - 12, "CD vpředu", fs=7, ha="center", va="top", c="#222")
at(axA, xp - 40, yam - 40, f"krátký třmen {HANGER_CODE} (jen vzadu)", fs=7, ha="right", va="top",
   c="#8b3a00")
at(axA, xg1 + 20, yam - 95, "NE dlouhý třmen skrz dutinu", fs=7, ha="left", va="bottom",
   c="#b71c1c", weight="bold")
at(axA, xg0 - 40, yam, "MÍSTNOST", fs=10, ha="center", rot=90, weight="bold", c="#0d5a70")
at(axA, xp + WALL_PLASTER + WALL_MASON + 22, yam, "ZEĎ", fs=10, ha="center", rot=90,
   weight="bold", c="#333")

adimh(axA, -18, xrc, xp, f"≤{REAR_REACH:.0f}", tick=4, fs=7)
adimh(axA, -48, xg0, xg1, "12,5", tick=5, fs=7.5)
adimh(axA, -48, xg1, xw0, "137,5 ≈140", tick=5, fs=7.5)
adimh(axA, -48, xw0, xp, "300", tick=5, fs=8)
adimh(axA, -85, xg0, xp, "450", tick=7, fs=10)

axA.set_xlim(-70, xp + WALL_PLASTER + WALL_MASON + 50)
axA.set_ylim(-115, SEC_H + 45)
axA.set_title("A  ·  Vodorovný řez · hybridní rám 450 mm (místnost ← → zeď) · SDK vlevo · 1:1 mm",
              fontsize=10, loc="left", pad=6)

# ---------- PNG B ----------
# B1: rear zone, wall right
ap(axB, [(-35, 0), (0, 0), (0, 140), (-35, 140)], "#f7f7f2", "#aaa", 0.7, z=3, ls="--")
ap(axB, [(0, 0), (50, 0), (50, 140), (0, 140)], "#c5e0a8", "#5a8a3a", 0.9, z=3, alpha=0.9)
ap(axB, [(50, 0), (65, 0), (65, 140), (50, 140)], "#e8e4dc", "#888", 0.7, z=2)
ap(axB, [(65, 0), (105, 0), (105, 140), (65, 140)], "#b8b0a0", "#444", 0.9, z=1)
ap(axB, [(50 - 27, 40), (50, 40), (50, 100), (50 - 27, 100)], "#6a6a6a", "#222", 1.0, z=6)

cyb = 70
pls = 50
ap(axB, [(pls - 3, cyb - 22), (pls + 6, cyb - 22), (pls + 6, cyb + 22), (pls - 3, cyb + 22)],
   "#555", "#222", 0.7, z=8)
al(axB, (pls - 4, cyb), (pls + 28, cyb), "#333", 1.3, z=8)
axB.add_patch(Circle((pls + 18, cyb), 4, fc="#444", ec="#111", lw=0.5, zorder=9))
axB.add_patch(Circle((pls - 16, cyb), 11, fc="#e07020", ec="#8b3a00", lw=1.1, zorder=9))
axB.add_patch(Circle((pls - 16, cyb), 6, fc="#f0a060", ec="none", zorder=9.5))
ap(axB, [(pls - 24, cyb - 7), (50 - 4, cyb - 7), (50 - 4, cyb + 7), (pls - 24, cyb + 7)],
   "#666", "#222", 0.8, z=8)
ap(axB, [(50 - 27 - 2, cyb - 14), (50 + 2, cyb - 14), (50 + 2, cyb - 9), (50 - 27 - 2, cyb - 9)],
   "#555", "#222", 0.6, z=8)
ap(axB, [(50 - 27 - 2, cyb + 9), (50 + 2, cyb + 9), (50 + 2, cyb + 14), (50 - 27 - 2, cyb + 14)],
   "#555", "#222", 0.6, z=8)

at(axB, pls - 16, cyb + 18, "Sylomer", fs=7.5, ha="center", va="bottom", c="#8b3a00", weight="bold")
at(axB, 36, 28, "CD vzadu", fs=7.5, ha="center", va="top", c="#222")
at(axB, 85, cyb, "zeď", fs=8, ha="center", rot=90, c="#444")
at(axB, 25, 8, "MW", fs=7, ha="center", c="#3d6b1e")
at(axB, -17, 70, "← vzduch\n+GKB\n(bez třmenu)", fs=6.5, ha="center", c="#888")
at(axB, -35, -16, "B1  krátký třmen vzadu ≤~120 mm", fs=7.5, ha="left", c="#8b3a00", weight="bold")
at(axB, -35, -32, f"{HANGER_CODE}  ·  kotvení ke zdi jen vzadu", fs=7, ha="left", c="#444")

# B2
bx = 120
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
ap(axB, [(bx + 10, 30), (bx + 22, 30), (bx + 22, 78), (bx + 10, 78)],
   "#c8e8f0", "#0d5a70", 1.0, z=5)
at(axB, bx, -16, "B2  závěs shora (Nonius / akust.)", fs=7.5, ha="left", c="#1565c0", weight="bold")
at(axB, bx, -32, "ze stropu/podhledu → horní CD/UW", fs=7, ha="left", c="#444")

axB.set_xlim(-50, 225)
axB.set_ylim(-50, 190)
axB.set_title("B  ·  Callout: krátký třmen vzadu + závěs shora  (SDK vlevo)",
              fontsize=10, loc="left", pad=6)

# ---------- PNG C ----------
ES = 0.35
z0, z1 = 2280.0, 3180.0


def pz(z):
    return (z - z0) * ES


ex_pl = 450.0
ap(axC, [(ex_pl, pz(z0)), (ex_pl + WALL_PLASTER, pz(z0)),
         (ex_pl + WALL_PLASTER, pz(z1)), (ex_pl, pz(z1))],
   "#e8e4dc", "#888", 0.6, z=2)
ap(axC, [(ex_pl + WALL_PLASTER, pz(z0)), (ex_pl + WALL_PLASTER + 80, pz(z0)),
         (ex_pl + WALL_PLASTER + 80, pz(z1)), (ex_pl + WALL_PLASTER, pz(z1))],
   "#b8b0a0", "#444", 0.8, z=1)
ap(axC, [(ex_pl - 120, pz(z0)), (ex_pl, pz(z0)), (ex_pl, pz(Z_BOT)), (ex_pl - 120, pz(Z_BOT))],
   "#e8e0d0", "#666", 0.9, z=3, alpha=0.55, ls="--")
at(axC, ex_pl - 60, pz((z0 + Z_BOT) / 2), "pouzdro", fs=8, ha="center", rot=90, c="#555")

z_top = z1 - 100
ap(axC, [(ex_pl - 450, pz(Z_BOT)), (ex_pl, pz(Z_BOT)),
         (ex_pl, pz(z_top)), (ex_pl - 450, pz(z_top))],
   "#c8e8f0", "#0d5a70", 1.4, z=5, alpha=0.9)
al(axC, (ex_pl - 450, pz(Z_BOT)), (ex_pl, pz(Z_BOT)), "#0d5a70", 2.2, z=6)
ap(axC, [(ex_pl - 450, pz(Z_BOT)), (ex_pl - 450 + 12.5, pz(Z_BOT)),
         (ex_pl - 450 + 12.5, pz(Z_BOT) + 4), (ex_pl - 450, pz(Z_BOT) + 4)],
   "#ffcc80", "#e65100", 0.7, z=7)
al(axC, (ex_pl - 450 + T_GKB + CD_D / 2, pz(Z_BOT + 25)),
   (ex_pl - 450 + T_GKB + CD_D / 2, pz(z_top - 20)), "#555", 1.0, z=6)
al(axC, (ex_pl - REAR_REACH + CD_D / 2, pz(Z_BOT + 25)),
   (ex_pl - REAR_REACH + CD_D / 2, pz(z_top - 20)), "#555", 1.0, z=6)
for zz in (Z_BOT + 180, Z_BOT + 700):
    if zz < z_top - 40:
        axC.add_patch(Circle((ex_pl - 22, pz(zz)), 5, fc="#e07020", ec="#8b3a00", lw=0.7, zorder=8))

ap(axC, [(ex_pl - 450 - 30, pz(z1 - 50)), (ex_pl + 30, pz(z1 - 50)),
         (ex_pl + 30, pz(z1 - 20)), (ex_pl - 450 - 30, pz(z1 - 20))],
   "#90caf9", "#1565c0", 1.0, z=4)
ap(axC, [(ex_pl - 225 - 7, pz(z_top)), (ex_pl - 225 + 7, pz(z_top)),
         (ex_pl - 225 + 7, pz(z1 - 50)), (ex_pl - 225 - 7, pz(z1 - 50))],
   "#666", "#222", 0.9, z=8)
at(axC, ex_pl + WALL_PLASTER + 55, pz(z1 - 35), "závěs shora\n(Nonius/akust.)",
   fs=7, ha="left", c="#1565c0")

at(axC, ex_pl - 450 - 10, pz(Z_BOT),
   "spodek SDK @ 2450\n+ měkká spára 2–5 mm",
   fs=7.5, ha="right", va="center", c="#e65100")
at(axC, ex_pl - 225, pz((Z_BOT + z_top) / 2), "SDK 450", fs=9, ha="center", weight="bold",
   c="#0d5a70")
adimh(axC, pz(z_top) + 10, ex_pl - 450, ex_pl, "450", tick=4, fs=8)
adimv(axC, ex_pl + WALL_PLASTER + 50, pz(z0), pz(Z_BOT), "pouzdro", tick=4, fs=7)
at(axC, ex_pl - 450 - 15, pz(Z_BOT) - 8, "Z=2450", fs=7.5, ha="right", va="top", c="#2d6a3e")

axC.set_xlim(ex_pl - 450 - 180, ex_pl + WALL_PLASTER + 160)
axC.set_ylim(pz(z0) - 30, pz(z1) + 20)
axC.set_title("C  ·  Mini pohled · spodek @ 2450 + závěs shora  (SDK vlevo, zeď vpravo)",
              fontsize=10, loc="left", pad=6)

# ---------- Legend ----------
axL.set_xlim(0, 10)
axL.set_ylim(0, 10)
leg = [
    (9.5, "LEGENDA — HYBRID", 10, "bold", "#111"),
    (8.9, "Skladba (místnost → zeď), Σ 450 mm:", 8.5, "bold", "#111"),
    (8.5, f"1  GKB {T_GKB} mm — plná (membrána), NE perforovaná", 7.5, "normal", "#0d5a70"),
    (8.15, f"2  Vzduch ≈140 mm  (kóta {T_AIR})", 7.5, "normal", "#555"),
    (7.80, f"3  Minerální vlna u stěny  {T_WOOL:.0f} mm", 7.5, "normal", "#3d6b1e"),
    (7.45, "4  Nosná zeď + omítka (stávající)", 7.5, "normal", "#333"),
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
    (2.35, "Ladění: dutina 450 mm ≈ ~25–80 Hz", 7.5, "bold", "#1a4a6a"),
    (1.95, "Subwoofer: roh / strana — basstrap na štítu", 7.0, "normal", "#1a4a6a"),
    (1.55, "Poznámka:", 8.0, "bold", "#111"),
    (1.25, "Zhotovitel zhodnotí: třmeny NEBO Sylomer podložky", 7.0, "bold", "#8b3a00"),
    (0.95, "(podložku nedotahovat naplocho). SDK vlevo, zeď vpravo.", 6.6, "normal", "#0d5a70"),
    (0.60, f"Kóty: {T_GKB} + {T_AIR} + {T_WOOL:.0f} = {T_TOTAL:.0f} mm", 7.5, "bold", "#2d6a3e"),
    (0.25, "zak. 220103  ·  mm", 7.5, "normal", "#666"),
]
for y, s, fs, w, c in leg:
    axL.text(0.15, y, s, fontsize=fs, fontweight=w, color=c, ha="left", va="center",
             transform=axL.transData, zorder=5)
swatches = [
    (8.5, "#c8e8f0"), (8.15, "#f7f7f2"), (7.80, "#c5e0a8"),
    (7.45, "#b8b0a0"), (6.15, "#e07020"), (5.80, "#90caf9"),
]
for y, fc in swatches:
    axL.add_patch(FancyBboxPatch((0.02, y - 0.12), 0.10, 0.24,
                                 boxstyle="round,pad=0.01", facecolor=fc,
                                 edgecolor="#333", lw=0.4, transform=axL.transData,
                                 zorder=4))

axL.set_title(" ", fontsize=1)

fig.suptitle(
    "Obývák 1.02 – DETAIL basstrap obývák · předstěna 450 mm · HYBRID"
    "   ·   zak. 220103 · mm",
    fontsize=13, fontweight="bold", x=0.04, ha="left", y=0.97,
)
fig.text(
    0.04, 0.015,
    "Hybrid: kotvení ke zdi jen vzadu + závěs shora ze stropu/podhledu.  "
    "NE dlouhý třmen skrz dutinu.  SDK vlevo, zeď vpravo.  "
    f"Skladba: GKB {T_GKB} | vzduch {T_AIR} | MW {T_WOOL:.0f} = {T_TOTAL:.0f} mm   ·   "
    f"{HANGER_CODE} vzadu  ·  Nonius/akust. shora  ·  ~25–80 Hz",
    fontsize=7.5, color="#333",
)

fig.savefig(OUT_PNG, dpi=150, facecolor="white")
print("wrote", OUT_PNG, "size", OUT_PNG.stat().st_size)
print("DONE")
print(f"DIM: {T_GKB} + {T_AIR} + {T_WOOL} = {T_TOTAL}")
print(f"ORIENTATION: LEFT=room/GKB, RIGHT=wall")
print(f"HYBRID: rear {HANGER_CODE} ≤{REAR_REACH}mm + ceiling {CEIL_HANG}")

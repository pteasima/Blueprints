#!/usr/bin/env python3
"""Obývák 1.02 – kombinovaný list: šikminy, soffit, bokorys, basstrapy.

zak. 220103 · Bor u Tachova · mm
ONE clean contractor sheet — no overlapping essays on geometry.

Sources (READ ONLY, do not modify):
  make_rez.py, make_stit_bokorys.py, make_bass_kuchyne.py, make_bass_obyvak.py
"""
from pathlib import Path
import math
import ezdxf
from ezdxf import units
from ezdxf.enums import TextEntityAlignment as A
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.patches import Polygon, Circle, FancyBboxPatch, Rectangle
from matplotlib.gridspec import GridSpec

OUT_DXF = Path("/workspace/dwg/obyvak-sikminy-basstrapy.dxf")
OUT_PNG = Path("/workspace/dwg/obyvak-sikminy-basstrapy.png")

# =====================================================================
# Geometry (must match make_rez / bokorys / bass — do not invent)
# =====================================================================
THETA = math.radians(40.0)
TAN, SIN, COS = math.tan(THETA), math.sin(THETA), math.cos(THETA)

L_ROOM = 5350.0          # transverse clear width eave↔eave
X_RIDGE = L_ROOM / 2.0
Z_RIDGE_EXT = 5850.0
Z_EAVE_WALL = 3200.0
W_FURN = 450.0
H_FURN = 2450.0
WALL_MASON = 250.0
WALL_EPS = 200.0
WALL_PLASTER = 15.0

POZ_W, POZ_H = 140.0, 100.0
Z_POZ_BOT = Z_EAVE_WALL
Z_POZ_TOP = Z_EAVE_WALL + POZ_H
Z_TIE = Z_EAVE_WALL + POZ_H / 2.0

T_FINISH, T_BASIC = 2.0, 2.0
T_NH = 60.0
T_FLEX = 60.0
T_FOIL = 1.0
T_SDK = 12.5
T_CD = 27.0
T_PLENUM = 80.0
T_KROKEV = 160.0
T_VENT, T_DHV, T_KONTRA, T_LAT, T_TASKA = 40.0, 1.0, 40.0, 40.0, 22.0
E_KROK, KROK_W = 875.0, 100.0
BATTEN_W, BATTEN_D = 60.0, 40.0

T_SOFT_BELOW_SDK = T_FINISH + T_BASIC + T_NH + T_FLEX + T_FOIL + T_SDK  # 137.5
T_LEFT = T_PLENUM + T_CD + T_SOFT_BELOW_SDK     # 244.5
T_EXTRA = W_FURN * SIN                          # ~289.3
T_RIGHT = T_LEFT + T_EXTRA                      # ~533.8
L_HANGER_LEFT = T_PLENUM                        # 80
L_HANGER_RIGHT = T_PLENUM + T_EXTRA             # ~369.3

DIRECT_HANGER_STOCK = 125.0
DIRECT_HANGER_CODE = "KB510154"
DIRECT_HANGER_NAME = "Rigips přímý závěs 125 mm"

T_ABOVE_RAF = T_VENT + T_DHV + T_KONTRA + T_LAT + T_TASKA
Z_RAF_INNER_RIDGE = Z_RIDGE_EXT - (T_ABOVE_RAF + T_KROKEV) / COS
X_FURN = L_ROOM - W_FURN


def z_raf(x):
    return Z_RAF_INNER_RIDGE - abs(x - X_RIDGE) * TAN


def z_raf_outer(x):
    return z_raf(x) + T_KROKEV / COS


def z_tile(x):
    return z_raf(x) + (T_ABOVE_RAF + T_KROKEV) / COS


H_START = z_raf(0.0) - T_LEFT / COS  # ≈2891


def z_left(x):
    return H_START + x * TAN


DX_FALSE = W_FURN / 2.0
X_FALSE = (L_ROOM - W_FURN) / 2.0
Z_FALSE = z_left(X_FALSE)

Z_GKF_HORIZ = H_START
Z_GKF_CLEAR = Z_POZ_BOT - Z_GKF_HORIZ
SOFTIT_SPAN = W_FURN
GAP_FURN = 20.0
FRAME_MAIN = 40.0
Z_NABEH_BOT = H_FURN + GAP_FURN
NABEH_FACE_H = Z_GKF_HORIZ - Z_NABEH_BOT
T_NH_FACE = T_FINISH + T_BASIC + T_NH  # 64
Z_SLOPE_NH = H_START
X_NH_OUTER = X_FURN
X_NH_INNER = X_FURN + T_NH_FACE

# Longitudinal (bokorys)
L_ROOM_TRANS = L_ROOM
HALF_TRANS = L_ROOM_TRANS / 2.0
L_ROOM_LONG = 11100.0
Z_SOFFIT = H_START + HALF_TRANS * TAN  # ≈5135
Z_PRED = 2450.0
D_L, D_R = 190.0, 450.0
POUZDRO_D = 120.0
SDK_BOT = 12.5
X0_LONG = 0.0
X1_LONG = L_ROOM_LONG
X_L_FACE = X0_LONG + D_L
X_R_FACE = X1_LONG - D_R
Z_RAF_TOP = Z_RAF_INNER_RIDGE + T_KROKEV / COS
CROWN_H = 80.0

# Bass kitchen 190
B190_WOOL, B190_AIR, B190_GKB = 80.0, 97.5, 12.5
B190_TOTAL = B190_WOOL + B190_AIR + B190_GKB
B190_REACH = 80.0

# Bass living 450
B450_GKB, B450_AIR, B450_WOOL = 12.5, 137.5, 300.0
B450_TOTAL = B450_GKB + B450_AIR + B450_WOOL
B450_REACH = 100.0

CD_W, CD_D, CD_SPACING = 60.0, 27.0, 625.0
HANGER_CODE = "KB517112"
HANGER_NAME = "Rigips akustický třmen se Sylomerem"
HANGER_ALT = "Knauf W623 / přímý akustický závěs"
CEIL_HANG = "Nonius / Rigips–Knauf akustický stropní závěs"

assert abs(B190_TOTAL - 190.0) < 1e-9
assert abs(B450_TOTAL - 450.0) < 1e-9

print("=== COMBINED SHEET GEOMETRY ===")
print(f"H_START={H_START:.4f}  T_LEFT={T_LEFT:.4f}  T_RIGHT={T_RIGHT:.4f}")
print(f"L_HANGER L/R={L_HANGER_LEFT:.1f}/{L_HANGER_RIGHT:.1f}")
print(f"Z_SOFFIT={Z_SOFFIT:.4f}  L_LONG={L_ROOM_LONG:.0f}  L_TRANS={L_ROOM:.0f}")
print(f"soffit box: X_FURN={X_FURN:.0f} Z_NABEH_BOT={Z_NABEH_BOT:.0f} face_H={NABEH_FACE_H:.1f}")

# Wall extents (transverse)
xl_eps = -WALL_PLASTER - WALL_MASON - WALL_EPS
xl_mas = -WALL_PLASTER - WALL_MASON
xl_int = 0.0
xr_int = L_ROOM
xr_mas = L_ROOM + WALL_PLASTER + WALL_MASON
xr_eps = L_ROOM + WALL_PLASTER + WALL_MASON + WALL_EPS
H_WALL = Z_EAVE_WALL
poz_l0 = xl_mas + WALL_MASON - POZ_W
poz_r0 = xr_int + WALL_PLASTER

# =====================================================================
# DXF
# =====================================================================
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
        hch = msp.add_hatch(color=hatch_color or 8, dxfattribs={"layer": layer})
        hch.set_pattern_fill(hatch, scale=hatch_scale)
        hch.paths.add_polyline_path(pts, is_closed=True)


def poly(pts, layer, close=True, hatch=None, hatch_scale=12, hatch_color=None):
    msp.add_lwpolyline(pts, close=close, dxfattribs={"layer": layer})
    if hatch and close:
        hch = msp.add_hatch(color=hatch_color or 8, dxfattribs={"layer": layer})
        hch.set_pattern_fill(hatch, scale=hatch_scale)
        hch.paths.add_polyline_path(pts, is_closed=True)


def dim_v(x, y0, y1, txt="", htxt=14, tick=8):
    msp.add_line((x, y0), (x, y1), dxfattribs={"layer": "A-KOTY"})
    for yy in (y0, y1):
        msp.add_line((x - tick, yy), (x + tick, yy), dxfattribs={"layer": "A-KOTY"})
    if txt:
        label(x - tick * 2.5, (y0 + y1) / 2, txt, htxt, rot=90, align=A.MIDDLE_CENTER, layer="A-KOTY")


def dim_h(y, x0, x1, txt, htxt=18, tick=8, above=True):
    msp.add_line((x0, y), (x1, y), dxfattribs={"layer": "A-KOTY"})
    for xx in (x0, x1):
        msp.add_line((xx, y - tick), (xx, y + tick), dxfattribs={"layer": "A-KOTY"})
    off = tick * 2.2 if above else -tick * 2.2
    label((x0 + x1) / 2, y + off, txt, htxt, align=A.MIDDLE_CENTER, layer="A-KOTY")


def label(x, y, text, h=18, rot=0, layer="A-POPIS", align=A.MIDDLE_LEFT):
    _TEXT_Q.append(lambda t=text, hh=h, ly=layer, r=rot, xy=(x, y), al=align:
                   _emit_text(t, hh, ly, r, xy, al))


def line(p, q, layer="A-OBRYS"):
    msp.add_line(p, q, dxfattribs={"layer": layer})


# ---------- DXF Panel A: cleaned transverse section (origin 0,0) ----------
def dxf_panel_rez(ox=0.0, oy=0.0):
    def X(x): return ox + x
    def Z(z): return oy + z

    # walls
    rect(X(xl_eps), Z(-150), WALL_EPS, H_WALL + 150, "A-VATA", "ANSI37", 40, 4)
    rect(X(xl_mas), Z(-150), WALL_MASON, H_WALL + 150, "A-ZDIVO", "ANSI31", 25, 8)
    rect(X(xl_mas + WALL_MASON), Z(0), WALL_PLASTER, H_WALL, "A-OMITKA")
    rect(X(xr_int), Z(0), WALL_PLASTER, H_WALL, "A-OMITKA")
    rect(X(xr_int + WALL_PLASTER), Z(-150), WALL_MASON, H_WALL + 150, "A-ZDIVO", "ANSI31", 25, 8)
    rect(X(xr_mas), Z(-150), WALL_EPS, H_WALL + 150, "A-VATA", "ANSI37", 40, 4)
    poly([(X(xl_eps), Z(0)), (X(xr_eps), Z(0)), (X(xr_eps), Z(-150)), (X(xl_eps), Z(-150))],
         "A-ZDIVO", hatch="ANSI31", hatch_scale=30, hatch_color=8)
    label(X(L_ROOM / 2), Z(-70), "podlaha 1.NP  ±0,000", 40, align=A.MIDDLE_CENTER)

    rect(X(X_FURN), Z(0), W_FURN, H_FURN, "A-NABYTEK", "DOTS", 40, 42)
    label(X(X_FURN + W_FURN / 2), Z(H_FURN / 2), "skříně 450×2450", 36, align=A.MIDDLE_CENTER)

    rect(X(poz_l0), Z(Z_POZ_BOT), POZ_W, POZ_H, "A-DREVO", "ANSI31", 12, 30)
    rect(X(poz_r0), Z(Z_POZ_BOT), POZ_W, POZ_H, "A-DREVO", "ANSI31", 12, 30)
    label(X(poz_l0 + POZ_W / 2), Z(Z_POZ_TOP + 30), "pozednice", 22, align=A.BOTTOM_CENTER)
    label(X(poz_r0 + POZ_W / 2), Z(Z_POZ_TOP + 30), "pozednice", 22, align=A.BOTTOM_CENTER)

    left_e, right_e = xl_eps - 80, xr_eps + 80
    zle = z_tile(0) - (0 - left_e) * TAN
    zre = z_tile(L_ROOM) - (right_e - L_ROOM) * TAN
    poly([
        (X(left_e), Z(zle - T_ABOVE_RAF / COS)),
        (X(X_RIDGE), Z(z_raf_outer(X_RIDGE))),
        (X(right_e), Z(zre - T_ABOVE_RAF / COS)),
        (X(right_e), Z(zre - (T_ABOVE_RAF + T_KROKEV) / COS)),
        (X(X_RIDGE), Z(z_raf(X_RIDGE))),
        (X(left_e), Z(zle - (T_ABOVE_RAF + T_KROKEV) / COS)),
    ], "A-DREVO", hatch="ANSI31", hatch_scale=35, hatch_color=30)
    line((X(left_e), Z(zle)), (X(X_RIDGE), Z(Z_RIDGE_EXT)), "A-KRYTINA")
    line((X(X_RIDGE), Z(Z_RIDGE_EXT)), (X(right_e), Z(zre)), "A-KRYTINA")

    # MW plenum
    poly([(X(0), Z(H_START)), (X(X_FALSE), Z(Z_FALSE)), (X(X_FALSE), Z(z_raf(X_FALSE))),
          (X(0), Z(z_raf(0)))], "A-VATA", hatch="ANSI37", hatch_scale=55, hatch_color=4)
    poly([(X(X_FALSE), Z(Z_FALSE)), (X(X_FURN), Z(Z_GKF_HORIZ)), (X(X_FURN), Z(z_raf(X_FURN))),
          (X(X_FALSE), Z(z_raf(X_FALSE)))], "A-VATA", hatch="ANSI37", hatch_scale=55, hatch_color=4)
    poly([(X(X_FURN), Z(Z_GKF_HORIZ)), (X(L_ROOM), Z(Z_GKF_HORIZ)), (X(L_ROOM), Z(z_raf(L_ROOM))),
          (X(X_FURN), Z(z_raf(X_FURN)))], "A-VATA", hatch="ANSI37", hatch_scale=50, hatch_color=4)
    # soffit Flex
    poly([(X(X_FURN), Z(Z_NABEH_BOT)), (X(L_ROOM), Z(Z_NABEH_BOT)),
          (X(L_ROOM), Z(Z_GKF_HORIZ)), (X(X_FURN), Z(Z_GKF_HORIZ))],
         "A-VATA", hatch="ANSI37", hatch_scale=25, hatch_color=4)
    # NH L-face
    poly([(X(X_NH_OUTER), Z(Z_NABEH_BOT)), (X(L_ROOM), Z(Z_NABEH_BOT)),
          (X(L_ROOM), Z(Z_NABEH_BOT + T_NH_FACE)), (X(X_NH_INNER), Z(Z_NABEH_BOT + T_NH_FACE)),
          (X(X_NH_INNER), Z(Z_SLOPE_NH)), (X(X_NH_OUTER), Z(Z_SLOPE_NH))],
         "A-NH", hatch="ANSI37", hatch_scale=8, hatch_color=94)
    # hidden frame
    _fm, _z0, _seal = FRAME_MAIN, Z_NABEH_BOT + T_NH_FACE, 15.0
    rect(X(X_NH_INNER), Z(_z0), _fm, Z_GKF_HORIZ - 4 - _z0, "A-DREVO", "ANSI31", 8, 30)
    rect(X(X_NH_INNER + _fm), Z(_z0), L_ROOM - _seal - (X_NH_INNER + _fm), _fm, "A-DREVO", "ANSI31", 8, 30)

    # soffit / slope outlines
    line((X(0), Z(H_START)), (X(X_FALSE), Z(Z_FALSE)), "A-PODHLED")
    line((X(X_FALSE), Z(Z_FALSE)), (X(X_NH_OUTER), Z(Z_SLOPE_NH)), "A-PODHLED")
    line((X(X_NH_OUTER), Z(Z_SLOPE_NH)), (X(L_ROOM), Z(Z_GKF_HORIZ)), "A-SDK")
    line((X(X_NH_OUTER), Z(Z_SLOPE_NH)), (X(X_NH_OUTER), Z(Z_NABEH_BOT)), "A-PODHLED")
    line((X(X_NH_OUTER), Z(Z_NABEH_BOT)), (X(L_ROOM), Z(Z_NABEH_BOT)), "A-PODHLED")
    line((X(0), Z(z_raf(0))), (X(X_RIDGE), Z(z_raf(X_RIDGE))), "A-OSA")
    line((X(X_RIDGE), Z(z_raf(X_RIDGE))), (X(L_ROOM), Z(z_raf(L_ROOM))), "A-OSA")
    line((X(X_RIDGE), Z(-80)), (X(X_RIDGE), Z(Z_RIDGE_EXT + 80)), "A-OSA")
    line((X(tie_x0 := 80), Z(Z_TIE)), (X(tie_x1 := L_ROOM - 80), Z(Z_TIE)), "A-OCEL")

    # key labels only (cleaned — essays → legend)
    label(X(280), Z(1700), "LEVÁ", 48)
    label(X(280), Z(1600), f"přímý 125 {DIRECT_HANGER_CODE}", 28)
    label(X(X_FURN - 80), Z(1700), "PRAVÁ", 48, align=A.MIDDLE_RIGHT)
    label(X(X_FURN - 80), Z(1600), f"Nonius ≈{L_HANGER_RIGHT:.0f}", 28, align=A.MIDDLE_RIGHT)
    label(X(X_RIDGE + 40), Z(Z_RIDGE_EXT + 60), "hřeben +5,850", 36)
    label(X(X_FALSE - 40), Z(Z_FALSE - 80), "falešný hřeben", 32, align=A.MIDDLE_RIGHT)
    label(X(60), Z(H_START - 50), f"H_start {H_START:.0f}", 28)
    label(X(X_RIDGE * 0.4), Z(z_raf(X_RIDGE * 0.4) + 180), "40°", 36, align=A.MIDDLE_CENTER)
    label(X(X_RIDGE + (L_ROOM - X_RIDGE) * 0.55),
          Z(z_raf(X_RIDGE + (L_ROOM - X_RIDGE) * 0.55) + 180), "40°", 36, align=A.MIDDLE_CENTER)

    dim_h(Z(-280), X(0), X(L_ROOM), f"světlá šířka  {L_ROOM:.0f}", htxt=40, tick=20)
    dim_h(Z(-480), X(X_FURN), X(L_ROOM), "450", htxt=32, tick=16)
    dim_v(X(X_FURN - 120), Z(0), Z(H_FURN), "2450", htxt=32, tick=16)
    dim_v(X(160), Z(0), Z(H_START), f"{H_START:.0f}", htxt=28, tick=14)
    dim_v(X(xr_eps + 200), Z(0), Z(Z_RIDGE_EXT), "+5,850", htxt=32, tick=16)

    label(X(xl_eps), Z(Z_RIDGE_EXT + 350),
          "A  Řez šikminami + soffit box 450×2450  ·  40°/40°", 48)

    # legend column to the right of section
    lx = X(xr_eps + 900)
    ly = Z(Z_RIDGE_EXT + 200)
    legend = [
        "LEGENDA SKLADEB / ZÁVĚSŮ",
        "",
        "LEVÁ (plénum ~80):",
        f"  {DIRECT_HANGER_NAME}",
        f"  {DIRECT_HANGER_CODE} (sklad 125)",
        "  Minerální vlna",
        "",
        f"PRAVÁ (Nonius ≈{L_HANGER_RIGHT:.0f}):",
        "  Nonius 340/440 + spodní + 2× závlačka",
        "  GKF šikmina → zlom → vodorovně ke zdi",
        f"  Z_GKF ≈ {Z_GKF_HORIZ:.0f} (=H_start)",
        "",
        "SOFFIT BOX nad skříněmi:",
        "  pohled = NH 140 + StoSilent",
        "  dutina 100% Isover Flex 50",
        "  skryté KVH 60×40 uvnitř Flex",
        "  nábytek NENÍ nosný (vůle 20)",
        "  pozednice NENÍ závěsný bod",
        "",
        "STACK interiér→exteriér:",
        "  1 StoSilent Finish+Basic",
        "  2 NaturHeld 140 / 60 mm",
        "  3 Flex 50 / 60 + latě 60×40@625",
        "  5 Intello / Vario Xtra",
        "  6 SDK RF/GKF 12,5",
        "  7 CD 60×27 + plénum + krokev",
        "  + větraná mezera / DHV / latě / taška",
    ]
    yy = ly
    for ln in legend:
        h = 28 if ln and not ln.startswith(" ") else 22
        if ln.startswith("LEGENDA") or ln.endswith(":"):
            h = 26
        label(lx, yy, ln, h, layer="A-POZN" if ln.startswith("  ") else "A-POPIS")
        yy -= 38 if ln else 18


# ---------- DXF Panel B: bokorys ----------
def dxf_panel_bokorys(ox=0.0, oy=-9000.0):
    def X(x): return ox + x
    def Z(z): return oy + z

    xl_e = -WALL_PLASTER - WALL_MASON - WALL_EPS
    xl_m = -WALL_PLASTER - WALL_MASON
    xr_m = L_ROOM_LONG + WALL_PLASTER + WALL_MASON
    xr_e = xr_m + WALL_EPS
    H_GABLE = Z_SOFFIT

    rect(X(xl_e), Z(-150), WALL_EPS, H_GABLE + 150, "A-VATA", "ANSI37", 40, 4)
    rect(X(xl_m), Z(-150), WALL_MASON, H_GABLE + 150, "A-ZDIVO", "ANSI31", 25, 8)
    rect(X(xl_m + WALL_MASON), Z(0), WALL_PLASTER, H_GABLE, "A-OMITKA")
    rect(X(L_ROOM_LONG), Z(0), WALL_PLASTER, H_GABLE, "A-OMITKA")
    rect(X(L_ROOM_LONG + WALL_PLASTER), Z(-150), WALL_MASON, H_GABLE + 150, "A-ZDIVO", "ANSI31", 25, 8)
    rect(X(xr_m), Z(-150), WALL_EPS, H_GABLE + 150, "A-VATA", "ANSI37", 40, 4)
    poly([(X(xl_e), Z(0)), (X(xr_e), Z(0)), (X(xr_e), Z(-150)), (X(xl_e), Z(-150))],
         "A-ZDIVO", hatch="ANSI31", hatch_scale=30)

    # crown
    rect(X(xl_m), Z(H_GABLE), WALL_MASON + WALL_PLASTER, CROWN_H, "A-DREVO", "ANSI31", 10, 30)
    rect(X(L_ROOM_LONG), Z(H_GABLE), WALL_PLASTER + WALL_MASON, CROWN_H, "A-DREVO", "ANSI31", 10, 30)

    # soffit high horizontal
    line((X(0), Z(Z_SOFFIT)), (X(L_ROOM_LONG), Z(Z_SOFFIT)), "A-PODHLED")
    line((X(xl_e - 200), Z(Z_RIDGE_EXT)), (X(xr_e + 200), Z(Z_RIDGE_EXT)), "A-KRYTINA")

    # pouzdro
    rect(X(0), Z(0), POUZDRO_D, Z_PRED, "A-POUZDRO")
    rect(X(L_ROOM_LONG - POUZDRO_D), Z(0), POUZDRO_D, Z_PRED, "A-POUZDRO")

    # předstěny
    poly([(X(0), Z(Z_PRED)), (X(X_L_FACE), Z(Z_PRED)), (X(X_L_FACE), Z(Z_SOFFIT)),
          (X(0), Z(Z_SOFFIT))], "A-SDK", hatch="ANSI31", hatch_scale=20, hatch_color=2)
    poly([(X(X_R_FACE), Z(Z_PRED)), (X(L_ROOM_LONG), Z(Z_PRED)),
          (X(L_ROOM_LONG), Z(Z_SOFFIT)), (X(X_R_FACE), Z(Z_SOFFIT))],
         "A-SDK", hatch="ANSI31", hatch_scale=20, hatch_color=2)

    mid = (Z_PRED + Z_SOFFIT) / 2
    label(X(X_L_FACE / 2), Z(mid), "SDK 190 · kuchyně", 36, align=A.MIDDLE_CENTER)
    label(X((X_R_FACE + L_ROOM_LONG) / 2), Z(mid), "SDK 450 · obývák", 36, align=A.MIDDLE_CENTER)
    label(X(xl_e - 40), Z(H_GABLE / 2), "kuchyně (KK)", 40, rot=90, align=A.MIDDLE_CENTER)
    label(X(xr_e + 40), Z(H_GABLE / 2), "obývák (gauč)", 40, rot=90, align=A.MIDDLE_CENTER)

    dim_h(Z(-320), X(0), X(L_ROOM_LONG), f"světlá délka  {L_ROOM_LONG:.0f}", htxt=48, tick=28)
    dim_h(Z(-560), X(0), X(X_L_FACE), "190", htxt=40, tick=22)
    dim_h(Z(-560), X(X_R_FACE), X(L_ROOM_LONG), "450", htxt=40, tick=22)
    dim_v(X(-450), Z(0), Z(Z_PRED), "2450", htxt=40, tick=22)
    dim_v(X(-700), Z(0), Z(Z_SOFFIT), f"{Z_SOFFIT:.0f}", htxt=40, tick=22)

    label(X(xl_e), Z(Z_RIDGE_EXT + 280),
          "B  Bokorys od oken · předstěny 190 L / 450 R od Z=2450", 48)
    label(X(xl_e), Z(-780),
          "Basstrapy: viz panely C/D.  Šířka mezi okapy 5350 je kolmo na tento pohled.",
          32, layer="A-POZN")


# ---------- DXF Panel C/D: compact bass ----------
def dxf_bass(ox, oy, wool, air, gkb, total, reach, wall_left=True, title=""):
    """Horizontal section: if wall_left, wall→room; else room→wall (mirrored)."""
    SEC_H = 420.0
    y0, y1 = oy, oy + SEC_H
    xm = ox  # wall plaster face if wall_left else will compute

    if wall_left:
        x_mas = ox - WALL_PLASTER - WALL_MASON
        x_plaster = ox
        x_wool = x_plaster
        x_air = x_wool + wool
        x_gkb = x_air + air
        x_room = x_gkb + gkb
        # rear CD in wool
        x_rear = x_plaster + reach - CD_D
        x_front = x_gkb - CD_D
        rect(x_mas, y0, WALL_MASON, SEC_H, "A-ZDIVO", "ANSI31", 20, 8)
        rect(x_plaster - WALL_PLASTER, y0, WALL_PLASTER, SEC_H, "A-OMITKA")
        rect(x_wool, y0, wool, SEC_H, "A-VATA", "ANSI37", 12, 4)
        rect(x_air, y0, air, SEC_H, "A-SCHEMA")
        rect(x_gkb, y0, gkb, SEC_H, "A-SDK", "ANSI31", 6, 2)
        rect(x_rear, y0 + 40, CD_D, SEC_H - 80, "A-OCEL")
        rect(x_front, y0 + 40, CD_D, SEC_H - 80, "A-OCEL")
        # short třmen
        tr_y = y0 + SEC_H / 2
        line((x_plaster, tr_y), (x_rear, tr_y), "A-OCEL")
        msp.add_circle((x_plaster + 12, tr_y), 8, dxfattribs={"layer": "A-SYLOMER"})
        label(x_plaster + 20, tr_y + 30, "Sylomer", 10, layer="A-POZN")
        label(x_plaster + 30, tr_y - 35, f"krátký třmen {HANGER_CODE}", 10, layer="A-POZN")
        dim_h(y0 - 40, x_wool, x_room, f"{wool:.0f}+{air}+{gkb}={total:.0f}", htxt=14, tick=6)
        label(x_wool + 10, y1 + 20, "zeď", 12)
        label(x_room - 5, y1 + 20, "místnost", 12, align=A.MIDDLE_RIGHT)
    else:
        x_room = ox
        x_gkb = ox
        x_air = x_gkb + gkb
        x_wool = x_air + air
        x_plaster = x_wool + wool
        x_mas = x_plaster + WALL_PLASTER
        x_rear_right = x_plaster - 8
        x_rear = x_rear_right - CD_D
        x_front = x_gkb + gkb
        rect(x_gkb, y0, gkb, SEC_H, "A-SDK", "ANSI31", 6, 2)
        rect(x_air, y0, air, SEC_H, "A-SCHEMA")
        rect(x_wool, y0, wool, SEC_H, "A-VATA", "ANSI37", 12, 4)
        rect(x_plaster, y0, WALL_PLASTER, SEC_H, "A-OMITKA")
        rect(x_mas, y0, WALL_MASON, SEC_H, "A-ZDIVO", "ANSI31", 20, 8)
        rect(x_rear, y0 + 40, CD_D, SEC_H - 80, "A-OCEL")
        rect(x_front, y0 + 40, CD_D, SEC_H - 80, "A-OCEL")
        tr_y = y0 + SEC_H / 2
        line((x_plaster, tr_y), (x_rear_right, tr_y), "A-OCEL")
        msp.add_circle((x_plaster - 12, tr_y), 8, dxfattribs={"layer": "A-SYLOMER"})
        label(x_plaster - 20, tr_y + 30, "Sylomer", 10, align=A.MIDDLE_RIGHT, layer="A-POZN")
        label(x_plaster - 30, tr_y - 35, f"krátký třmen {HANGER_CODE}", 10,
              align=A.MIDDLE_RIGHT, layer="A-POZN")
        dim_h(y0 - 40, x_gkb, x_plaster, f"{gkb}+{air}+{wool:.0f}={total:.0f}", htxt=14, tick=6)
        label(x_gkb + 5, y1 + 20, "místnost", 12)
        label(x_mas + WALL_MASON - 5, y1 + 20, "zeď", 12, align=A.MIDDLE_RIGHT)

    label(ox - (WALL_PLASTER + WALL_MASON if wall_left else 0), y1 + 70, title, 18)
    label(ox - (WALL_PLASTER + WALL_MASON if wall_left else 0), y0 - 90,
          "HYBRID: zeď vzadu + závěs shora · Zhotovitel zhodnotí třmeny NEBO Sylomer podložky",
          11, layer="A-POZN")
    label(ox - (WALL_PLASTER + WALL_MASON if wall_left else 0), y0 - 115,
          "NE dlouhý třmen skrz dutinu · spodek @ 2450", 11, layer="A-POZN")


dxf_panel_rez(0, 0)
dxf_panel_bokorys(0, -9500)
dxf_bass(0, -14500, B190_WOOL, B190_AIR, B190_GKB, B190_TOTAL, B190_REACH,
         wall_left=True, title="C  Basstrap kuchyně 190 · HYBRID (zeď vlevo)")
dxf_bass(2500, -14500, B450_WOOL, B450_AIR, B450_GKB, B450_TOTAL, B450_REACH,
         wall_left=False, title="D  Basstrap obývák 450 · HYBRID (SDK vlevo / zeď vpravo)")

# sheet title block
label(-500, 6800, "Obývák 1.02 – šikminy, soffit, bokorys, basstrapy · 220103", 56)
label(-500, 6680, "Novostavba RD, parc. č. 796/1, Bor u Tachova · mm · R2010", 28, layer="A-POZN")

flush_text()
doc.saveas(OUT_DXF)
print("wrote", OUT_DXF, "size", OUT_DXF.stat().st_size)


# =====================================================================
# PNG — large readable sheet
# =====================================================================
plt.rcParams["font.family"] = "DejaVu Sans"
plt.rcParams["axes.unicode_minus"] = False

fig = plt.figure(figsize=(24.0, 19.5), dpi=165, facecolor="white")
gs = GridSpec(
    4, 2,
    height_ratios=[1.20, 0.92, 1.00, 0.12],
    width_ratios=[1.55, 0.72],
    hspace=0.32, wspace=0.16,
    left=0.03, right=0.985, top=0.940, bottom=0.035,
)

axA = fig.add_subplot(gs[0, 0])       # rez
axLeg = fig.add_subplot(gs[0, 1])     # legend stacks
axB = fig.add_subplot(gs[1, :])      # bokorys
axC = fig.add_subplot(gs[2, 0])      # bass 190
axD = fig.add_subplot(gs[2, 1])      # bass 450
axFoot = fig.add_subplot(gs[3, :])   # footer

for ax in (axA, axLeg, axB, axC, axD, axFoot):
    ax.set_aspect("equal" if ax is not axLeg and ax is not axFoot else "auto")
    ax.axis("off")
    ax.set_facecolor("white")


_HALO = dict(boxstyle="round,pad=0.15", facecolor="white", edgecolor="none", alpha=0.85)


def ap(ax, pts, fc, ec="#333", lw=0.8, z=2, alpha=1, ls="-"):
    ax.add_patch(Polygon(pts, closed=True, facecolor=fc, edgecolor=ec,
                         lw=lw, zorder=z, alpha=alpha, linestyle=ls))


def ht(ax, x, y, s, *, z=22, halo=True, **kw):
    kw.setdefault("zorder", z)
    if halo and "bbox" not in kw:
        kw["bbox"] = dict(_HALO)
    return ax.text(x, y, s, **kw)


def dimh(ax, y, x0, x1, txt, dy=60, fs=8, color="#1b6b2a"):
    ax.plot([x0, x1], [y, y], color=color, lw=0.8, zorder=6)
    ax.plot([x0, x0], [y - 14, y + 14], color=color, lw=0.8, zorder=6)
    ax.plot([x1, x1], [y - 14, y + 14], color=color, lw=0.8, zorder=6)
    ht(ax, (x0 + x1) / 2, y + dy, txt, ha="center", va="bottom", fontsize=fs, color=color)


def dimv(ax, x, y0, y1, txt, dx=-36, fs=8, color="#1b6b2a"):
    ax.plot([x, x], [y0, y1], color=color, lw=0.8, zorder=6)
    ax.plot([x - 14, x + 14], [y0, y0], color=color, lw=0.8, zorder=6)
    ax.plot([x - 14, x + 14], [y1, y1], color=color, lw=0.8, zorder=6)
    ht(ax, x + dx, (y0 + y1) / 2, txt, ha="center", va="center",
       fontsize=fs, color=color, rotation=90)


# ----- A: cleaned transverse section -----
ax = axA
ap(ax, [(xl_eps, -120), (xl_mas, -120), (xl_mas, H_WALL), (xl_eps, H_WALL)],
   "#d9e8c8", "#5a7a3a", 0.7)
ap(ax, [(xl_mas, -120), (xl_int, -120), (xl_int, H_WALL), (xl_mas, H_WALL)],
   "#cfc8bc", "#555", 0.8)
ap(ax, [(xr_int, -120), (xr_mas, -120), (xr_mas, H_WALL), (xr_int, H_WALL)],
   "#cfc8bc", "#555", 0.8)
ap(ax, [(xr_mas, -120), (xr_eps, -120), (xr_eps, H_WALL), (xr_mas, H_WALL)],
   "#d9e8c8", "#5a7a3a", 0.7)
ax.axhline(0, color="#888", lw=0.7, zorder=3)

ap(ax, [(poz_l0, Z_POZ_BOT), (poz_l0 + POZ_W, Z_POZ_BOT),
        (poz_l0 + POZ_W, Z_POZ_TOP), (poz_l0, Z_POZ_TOP)],
   "#c4a574", "#6b4f2a", 1.0, z=5)
ap(ax, [(poz_r0, Z_POZ_BOT), (poz_r0 + POZ_W, Z_POZ_BOT),
        (poz_r0 + POZ_W, Z_POZ_TOP), (poz_r0, Z_POZ_TOP)],
   "#c4a574", "#6b4f2a", 1.0, z=5)
ht(ax, poz_l0 + POZ_W / 2, Z_POZ_TOP + 35, "pozednice",
   ha="center", fontsize=7, color="#4a3010")
ht(ax, poz_r0 + POZ_W / 2, Z_POZ_TOP + 35, "pozednice",
   ha="center", fontsize=7, color="#4a3010")

ap(ax, [(X_FURN, 0), (L_ROOM, 0), (L_ROOM, H_FURN), (X_FURN, H_FURN)],
   "#e8d5a3", "#8a6a2a", 0.9, z=4)
ht(ax, X_FURN + W_FURN / 2, H_FURN * 0.5, "skříně\n450×2450",
   ha="center", va="center", fontsize=8, color="#5a4010")

left_e, right_e = xl_eps - 80, xr_eps + 80
zle = z_tile(0) - (0 - left_e) * TAN
zre = z_tile(L_ROOM) - (right_e - L_ROOM) * TAN
ap(ax, [
    (left_e, zle - T_ABOVE_RAF / COS),
    (X_RIDGE, z_raf_outer(X_RIDGE)),
    (right_e, zre - T_ABOVE_RAF / COS),
    (right_e, zre - (T_ABOVE_RAF + T_KROKEV) / COS),
    (X_RIDGE, z_raf(X_RIDGE)),
    (left_e, zle - (T_ABOVE_RAF + T_KROKEV) / COS),
], "#c4a574", "#6b4f2a", 0.9, z=3)
ax.plot([left_e, X_RIDGE, right_e], [zle, Z_RIDGE_EXT, zre],
        color="#8b2e1a", lw=1.6, zorder=4)

ap(ax, [(0, H_START), (X_FALSE, Z_FALSE), (X_FALSE, z_raf(X_FALSE)), (0, z_raf(0))],
   "#d9e8c8", "#5a7a3a", 0.4, z=3, alpha=0.55)
ap(ax, [(X_FALSE, Z_FALSE), (X_FURN, Z_GKF_HORIZ), (X_FURN, z_raf(X_FURN)),
        (X_FALSE, z_raf(X_FALSE))],
   "#d9e8c8", "#5a7a3a", 0.4, z=3, alpha=0.55)
ap(ax, [(X_FURN, Z_GKF_HORIZ), (L_ROOM, Z_GKF_HORIZ), (L_ROOM, z_raf(L_ROOM)),
        (X_FURN, z_raf(X_FURN))],
   "#d9e8c8", "#5a7a3a", 0.35, z=3, alpha=0.4)
ap(ax, [(X_FURN, Z_NABEH_BOT), (L_ROOM, Z_NABEH_BOT), (L_ROOM, Z_GKF_HORIZ),
        (X_FURN, Z_GKF_HORIZ)],
   "#7aab45", "#3d6b1e", 0.7, z=3.5, alpha=0.72)

_fmA = FRAME_MAIN
_zA0 = Z_NABEH_BOT + T_NH_FACE
_sealA = 15.0
ap(ax, [(X_NH_INNER, _zA0), (X_NH_INNER + _fmA, _zA0),
        (X_NH_INNER + _fmA, Z_GKF_HORIZ - 4), (X_NH_INNER, Z_GKF_HORIZ - 4)],
   "#4a2c0a", "#2a1805", 0.7, z=3.6)
ap(ax, [(X_NH_INNER + _fmA, _zA0), (L_ROOM - _sealA, _zA0),
        (L_ROOM - _sealA, _zA0 + _fmA), (X_NH_INNER + _fmA, _zA0 + _fmA)],
   "#4a2c0a", "#2a1805", 0.7, z=3.6)
_ribA = min(180.0, (L_ROOM - X_NH_INNER) * 0.4)
_ribAy = _zA0 + (Z_GKF_HORIZ - _zA0) * 0.45
ap(ax, [(X_NH_INNER + _fmA, _ribAy), (X_NH_INNER + _fmA + _ribA, _ribAy),
        (X_NH_INNER + _fmA + _ribA, _ribAy + _fmA * 0.7),
        (X_NH_INNER + _fmA, _ribAy + _fmA * 0.7)],
   "#4a2c0a", "#2a1805", 0.7, z=3.6)

ap(ax, [(X_NH_OUTER, Z_NABEH_BOT), (L_ROOM, Z_NABEH_BOT),
        (L_ROOM, Z_NABEH_BOT + T_NH_FACE), (X_NH_INNER, Z_NABEH_BOT + T_NH_FACE),
        (X_NH_INNER, Z_SLOPE_NH), (X_NH_OUTER, Z_SLOPE_NH)],
   "#e6c99a", "#a67c3a", 0.7, z=3.7, alpha=0.92)
ap(ax, [(X_FURN, H_FURN), (L_ROOM, H_FURN), (L_ROOM, Z_NABEH_BOT),
        (X_FURN, Z_NABEH_BOT)],
   "#ffffff", "#c0392b", 0.9, z=3.8, alpha=0.35, ls="--")

ax.plot([0, X_FALSE], [H_START, Z_FALSE], color="#1a5f8a", lw=2.2, zorder=5)
ax.plot([X_FALSE, X_NH_OUTER], [Z_FALSE, Z_SLOPE_NH], color="#1a5f8a", lw=2.2, zorder=5)
ax.plot([X_NH_OUTER, L_ROOM], [Z_GKF_HORIZ, Z_GKF_HORIZ], color="#2d6a3e", lw=2.4, zorder=5)
ax.plot([X_NH_OUTER, X_NH_OUTER], [Z_SLOPE_NH, Z_NABEH_BOT], color="#8a4b12", lw=2.2, zorder=5)
ax.plot([X_NH_OUTER, L_ROOM], [Z_NABEH_BOT, Z_NABEH_BOT], color="#8a4b12", lw=2.0, zorder=5)
ax.plot(X_FALSE, Z_FALSE, "o", color="#1a5f8a", ms=6, zorder=6)
ax.plot(0, H_START, "o", color="#1a5f8a", ms=5, zorder=6)
ax.plot(X_NH_OUTER, Z_SLOPE_NH, "o", color="#c0392b", ms=6, zorder=6)
ax.plot(X_RIDGE, Z_RIDGE_EXT, "o", color="#8b2e1a", ms=6, zorder=6)
ax.plot([0, X_RIDGE, L_ROOM], [z_raf(0), z_raf(X_RIDGE), z_raf(L_ROOM)],
        color="#6b4f2a", lw=0.8, ls="--", zorder=3)
ax.plot([80, L_ROOM - 80], [Z_TIE, Z_TIE], color="#333", lw=1.0, zorder=4)
ax.plot(L_ROOM / 2, Z_TIE, "o", color="#333", ms=4, zorder=5)
ax.plot([X_RIDGE, X_RIDGE], [-80, Z_RIDGE_EXT + 80], color="#999", lw=0.6, ls="--", zorder=2)

# dims
dimh(ax, -200, X_FURN, L_ROOM, "450", dy=22, fs=7.5)
dimh(ax, -380, 0, L_ROOM, f"světlá šířka  {L_ROOM:.0f}", dy=22, fs=8)
dimv(ax, X_FURN - 120, 0, H_FURN, "2450", dx=-34, fs=7.5)
dimv(ax, X_FURN - 120, H_FURN, Z_NABEH_BOT, f"vůle {GAP_FURN:.0f}", dx=-34, fs=6)
dimv(ax, X_FURN - 120, Z_NABEH_BOT, Z_GKF_HORIZ, f"{NABEH_FACE_H:.0f}", dx=-34, fs=6.5)
dimh(ax, Z_GKF_HORIZ + 55, X_FURN, L_ROOM, f"soffit {SOFTIT_SPAN:.0f}", dy=14, fs=6.5, color="#2d6a3e")
dimv(ax, 160, 0, H_START, f"H_start {H_START:.0f}", dx=-42, fs=7.5)
dimv(ax, xr_eps + 140, 0, Z_TIE, f"{Z_TIE:.0f}", dx=24, fs=6.5)
dimv(ax, xr_eps + 280, 0, Z_RIDGE_EXT, "+5,850", dx=28, fs=7.5)
dimh(ax, Z_FALSE + 140, X_FALSE, X_RIDGE, f"{DX_FALSE:.0f}", dy=18, fs=7, color="#1a5f8a")

ht(ax, X_RIDGE * 0.42, z_raf(X_RIDGE * 0.42) + 200, "40°",
   fontsize=9, ha="center", color="#8b2e1a")
ht(ax, X_RIDGE + (L_ROOM - X_RIDGE) * 0.58,
   z_raf(X_RIDGE + (L_ROOM - X_RIDGE) * 0.58) + 200,
   "40°", fontsize=9, ha="center", color="#8b2e1a")

# SHORT hanger callouts only (essays moved to legend)
ht(ax, 280, 1680, "LEVÁ", fontsize=10, color="#1a5f8a", fontweight="bold")
ht(ax, 280, 1520, f"přímý 125\n{DIRECT_HANGER_CODE}\nL≈{L_HANGER_LEFT:.0f}",
   fontsize=7.5, color="#1a5f8a")
ht(ax, X_FURN - 90, 1680, "PRAVÁ", fontsize=10, color="#1a5f8a",
   fontweight="bold", ha="right")
ht(ax, X_FURN - 90, 1520, f"Nonius ≈{L_HANGER_RIGHT:.0f}\nzlom → GKF vod.\nsoffit NH+Flex",
   fontsize=7.5, color="#8a4b12", ha="right")

ht(ax, X_RIDGE + 40, Z_RIDGE_EXT + 60, "hřeben +5,850",
   fontsize=8, color="#8b2e1a")
ht(ax, X_FALSE - 40, Z_FALSE - 80, "falešný hřeben",
   fontsize=7.5, color="#1a5f8a", ha="right")
ht(ax, L_ROOM / 2 + 60, Z_TIE + 90, "6× táhlo ø14", fontsize=7, color="#333")
ht(ax, X_FURN + W_FURN / 2, H_FURN + GAP_FURN / 2, f"vůle {GAP_FURN:.0f}",
   fontsize=6, ha="center", va="center", color="#c0392b")

ax.set_xlim(xl_eps - 400, xr_eps + 550)
ax.set_ylim(-600, Z_RIDGE_EXT + 380)
ax.set_title(
    f"A   Řez šikminami + soffit   ·   40°/40°   ·   H_start≈{H_START:.0f}   ·   "
    f"L: přímý 125 {DIRECT_HANGER_CODE}   ·   P: Nonius ≈{L_HANGER_RIGHT:.0f} + box 450",
    fontsize=10, pad=8, loc="left",
)

# ----- Legend column -----
ax = axLeg
ax.set_xlim(0, 10)
ax.set_ylim(0, 22)
ax.set_aspect("auto")
lines_leg = [
    ("LEGENDA SKLADEB / ZÁVĚSŮ", 9.5, "bold", "#111"),
    ("", 4, "normal", "#111"),
    ("LEVÁ — plénum ~80 mm", 8.5, "bold", "#1a5f8a"),
    (f"· {DIRECT_HANGER_NAME}", 7.5, "normal", "#333"),
    (f"  kód {DIRECT_HANGER_CODE} (sklad 125)", 7.2, "normal", "#333"),
    ("· Minerální vlna; závěs z boku krokve", 7.2, "normal", "#333"),
    ("", 3, "normal", "#111"),
    (f"PRAVÁ — Nonius ≈{L_HANGER_RIGHT:.0f} mm", 8.5, "bold", "#8a4b12"),
    ("· Nonius 340/440 + spodní + 2× závlačka", 7.2, "normal", "#333"),
    ("· GKF šikmina → zlom @ X_FURN → vodorovně", 7.2, "normal", "#333"),
    (f"  ke zdi pod pozednicí  Z≈{Z_GKF_HORIZ:.0f}", 7.2, "normal", "#333"),
    ("", 3, "normal", "#111"),
    ("SOFFIT BOX 450 nad skříněmi", 8.5, "bold", "#2d6a3e"),
    ("· pohled: NH 140 + StoSilent (bez zubu)", 7.2, "normal", "#333"),
    ("· dutina: 100% Isover Flex 50", 7.2, "normal", "#333"),
    ("· skryté KVH 60×40 uvnitř Flex", 7.2, "normal", "#333"),
    ("· nábytek NENÍ nosný (vůle 20 mm)", 7.2, "normal", "#333"),
    ("· pozednice NENÍ závěsný bod", 7.2, "normal", "#333"),
    ("", 3, "normal", "#111"),
    ("STACK interiér → exteriér", 8.5, "bold", "#111"),
    ("1  StoSilent Finish + Basic", 7.0, "normal", "#333"),
    ("2  NaturHeld 140 / 60 mm", 7.0, "normal", "#333"),
    ("3  Flex 50 / 60 + latě 60×40 @625", 7.0, "normal", "#333"),
    ("5  Intello / Vario Xtra", 7.0, "normal", "#333"),
    ("6  SDK RF/GKF 12,5", 7.0, "normal", "#333"),
    ("7  CD 60×27 + plénum + krokev 100/160", 7.0, "normal", "#333"),
    ("   + větraná mezera / DHV / latě / taška", 7.0, "normal", "#333"),
]
yy = 21.2
for txt, fs, wt, col in lines_leg:
    if not txt:
        yy -= 0.35
        continue
    ax.text(0.3, yy, txt, fontsize=fs, fontweight=wt, color=col,
            ha="left", va="top", family="DejaVu Sans")
    yy -= 0.72 if wt == "bold" else 0.62
ax.set_title(" ", fontsize=1)


# ----- B: bokorys -----
ax = axB
xl_e = -WALL_PLASTER - WALL_MASON - WALL_EPS
xl_m = -WALL_PLASTER - WALL_MASON
xr_m = L_ROOM_LONG + WALL_PLASTER + WALL_MASON
xr_e = xr_m + WALL_EPS
H_GABLE = Z_SOFFIT
xr_int_b = L_ROOM_LONG

ap(ax, [(xl_e, -150), (xl_m, -150), (xl_m, H_GABLE), (xl_e, H_GABLE)],
   "#d4e8c4", "#5a7a3a", 0.7)
ap(ax, [(xl_m, -150), (xl_m + WALL_MASON, -150),
        (xl_m + WALL_MASON, H_GABLE), (xl_m, H_GABLE)],
   "#b8b0a0", "#444", 0.8)
ap(ax, [(xl_m + WALL_MASON, 0), (0, 0), (0, H_GABLE),
        (xl_m + WALL_MASON, H_GABLE)],
   "#e8e4dc", "#888", 0.6, z=3)
ap(ax, [(L_ROOM_LONG, 0), (L_ROOM_LONG + WALL_PLASTER, 0),
        (L_ROOM_LONG + WALL_PLASTER, H_GABLE), (L_ROOM_LONG, H_GABLE)],
   "#e8e4dc", "#888", 0.6, z=3)
ap(ax, [(L_ROOM_LONG + WALL_PLASTER, -150), (xr_m, -150),
        (xr_m, H_GABLE), (L_ROOM_LONG + WALL_PLASTER, H_GABLE)],
   "#b8b0a0", "#444", 0.8)
ap(ax, [(xr_m, -150), (xr_e, -150), (xr_e, H_GABLE), (xr_m, H_GABLE)],
   "#d4e8c4", "#5a7a3a", 0.7)
ap(ax, [(xl_e, 0), (xr_e, 0), (xr_e, -150), (xl_e, -150)],
   "#c8c2b4", "#555", 0.8, z=1)
ht(ax, L_ROOM_LONG / 2, -70, "podlaha 1.NP  ±0,000", fontsize=9, ha="center")

ap(ax, [(xl_m, H_GABLE), (xl_m + WALL_MASON + WALL_PLASTER, H_GABLE),
        (xl_m + WALL_MASON + WALL_PLASTER, H_GABLE + CROWN_H),
        (xl_m, H_GABLE + CROWN_H)],
   "#c4a574", "#5a3a1a", 0.8, z=4)
ap(ax, [(xr_int_b, H_GABLE), (xr_int_b + WALL_PLASTER + WALL_MASON, H_GABLE),
        (xr_int_b + WALL_PLASTER + WALL_MASON, H_GABLE + CROWN_H),
        (xr_int_b, H_GABLE + CROWN_H)],
   "#c4a574", "#5a3a1a", 0.8, z=4)

ax.plot([0, L_ROOM_LONG], [Z_SOFFIT, Z_SOFFIT], color="#1a6a8a", lw=2.0, zorder=6)
ax.plot([0, L_ROOM_LONG], [Z_SOFFIT + 28, Z_SOFFIT + 28], color="#1a6a8a", lw=0.9, zorder=6)
ht(ax, L_ROOM_LONG / 2, Z_SOFFIT - 120,
   f"podhled pod hřebenem  Z≈{Z_SOFFIT:.0f}",
   fontsize=8, ha="center", color="#1a6a8a")
ht(ax, L_ROOM_LONG / 2, Z_SOFFIT + 90,
   "šikminy k okapům (mimo řez) → do / z stránky",
   fontsize=7, ha="center", color="#666")

ax.plot([xl_e - 200, xr_e + 200], [Z_RIDGE_EXT, Z_RIDGE_EXT], color="#8b2500", lw=1.5, zorder=5)
ht(ax, L_ROOM_LONG / 2, Z_RIDGE_EXT + 100,
   "hřeben +5,850  (rovnoběžně s pohledem)",
   fontsize=8, ha="center", color="#8b2500")

ap(ax, [(0, 0), (POUZDRO_D, 0), (POUZDRO_D, Z_PRED), (0, Z_PRED)],
   "#e8e0d0", "#666", 0.9, z=5, alpha=0.55, ls="--")
ap(ax, [(L_ROOM_LONG - POUZDRO_D, 0), (L_ROOM_LONG, 0),
        (L_ROOM_LONG, Z_PRED), (L_ROOM_LONG - POUZDRO_D, Z_PRED)],
   "#e8e0d0", "#666", 0.9, z=5, alpha=0.55, ls="--")

pred_l = [(0, Z_PRED), (X_L_FACE, Z_PRED), (X_L_FACE, Z_SOFFIT), (0, Z_SOFFIT)]
pred_r = [(X_R_FACE, Z_PRED), (L_ROOM_LONG, Z_PRED),
          (L_ROOM_LONG, Z_SOFFIT), (X_R_FACE, Z_SOFFIT)]
ap(ax, pred_l, "#c8e8f0", "#1a7a9a", 1.4, z=7, alpha=0.88)
ap(ax, pred_r, "#c8e8f0", "#1a7a9a", 1.4, z=7, alpha=0.88)
ax.plot([0, X_L_FACE], [Z_PRED, Z_PRED], color="#0d5a70", lw=2.2, zorder=8)
ax.plot([X_L_FACE, X_L_FACE], [Z_PRED, Z_SOFFIT], color="#0d5a70", lw=1.8, zorder=8)
ax.plot([L_ROOM_LONG, X_R_FACE], [Z_PRED, Z_PRED], color="#0d5a70", lw=2.2, zorder=8)
ax.plot([X_R_FACE, X_R_FACE], [Z_PRED, Z_SOFFIT], color="#0d5a70", lw=1.8, zorder=8)

mid_zl = (Z_PRED + Z_SOFFIT) / 2
ht(ax, X_L_FACE / 2, mid_zl, "SDK předstěna 190 · kuchyně",
   fontsize=9, ha="center", weight="bold", color="#0d5a70")
ht(ax, (X_R_FACE + L_ROOM_LONG) / 2, mid_zl, "SDK předstěna 450 · obývák",
   fontsize=9, ha="center", weight="bold", color="#0d5a70")
ht(ax, xl_e - 30, H_GABLE / 2, "kuchyně (KK)", fontsize=9, ha="center",
   va="center", rotation=90, color="#444")
ht(ax, xr_e + 50, H_GABLE / 2, "obývák (gauč)", fontsize=9, ha="center",
   va="center", rotation=90, color="#444")

dimh(ax, -300, 0, L_ROOM_LONG, f"světlá délka kuchyně↔obývák  {L_ROOM_LONG:.0f}",
     dy=40, fs=9)
dimh(ax, -520, 0, X_L_FACE, "190", dy=28, fs=8)
dimh(ax, -520, X_R_FACE, L_ROOM_LONG, "450", dy=28, fs=8)
dimv(ax, -420, 0, Z_PRED, "2450", dx=-36, fs=8)
dimv(ax, -680, 0, Z_SOFFIT, f"{Z_SOFFIT:.0f}", dx=-36, fs=8)
dimv(ax, xr_e + 160, 0, Z_EAVE_WALL, "+3,200", dx=26, fs=7.5)
dimv(ax, xr_e + 380, 0, Z_RIDGE_EXT, "+5,850", dx=26, fs=7.5)

ax.set_xlim(xl_e - 150, xr_e + 700)
ax.set_ylim(-750, Z_RIDGE_EXT + 320)
ax.set_title(
    "B   Bokorys od oken · předstěny 190 L / 450 R od Z=2450   ·   "
    "basstrapy viz C/D (již podrobně)   ·   šířka okap↔okap 5350 kolmo",
    fontsize=10, pad=8, loc="left",
)


# ----- C / D: compact bass hybrids -----
def paint_bass(ax, *, wool, air, gkb, total, reach, wall_left, title, band):
    ax.set_aspect("equal")
    SEC_H = 380.0
    y0, y1 = 0.0, SEC_H

    if wall_left:
        x_mas = -WALL_PLASTER - WALL_MASON
        x_pl = 0.0
        xw, xa, xg = x_pl, x_pl + wool, x_pl + wool + air
        xr = xg + gkb
        x_rear = x_pl + reach - CD_D
        x_front = xg - CD_D
        ap(ax, [(x_mas, y0), (x_pl - WALL_PLASTER, y0),
                (x_pl - WALL_PLASTER, y1), (x_mas, y1)], "#b8b0a0", "#444", 0.8)
        ap(ax, [(x_pl - WALL_PLASTER, y0), (x_pl, y0), (x_pl, y1),
                (x_pl - WALL_PLASTER, y1)], "#e8e4dc", "#888", 0.6)
        ap(ax, [(xw, y0), (xa, y0), (xa, y1), (xw, y1)], "#9cbc6a", "#4a7a2a", 0.7, alpha=0.85)
        ap(ax, [(xa, y0), (xg, y0), (xg, y1), (xa, y1)], "#f5f5f0", "#999", 0.6, alpha=0.5)
        ap(ax, [(xg, y0), (xr, y0), (xr, y1), (xg, y1)], "#c8e8f0", "#1a7a9a", 1.0)
        ap(ax, [(x_rear, y0 + 30), (x_rear + CD_D, y0 + 30),
                (x_rear + CD_D, y1 - 30), (x_rear, y1 - 30)], "#666", "#333", 0.9, z=5)
        ap(ax, [(x_front, y0 + 30), (x_front + CD_D, y0 + 30),
                (x_front + CD_D, y1 - 30), (x_front, y1 - 30)], "#666", "#333", 0.9, z=5)
        ty = (y0 + y1) / 2
        ax.plot([x_pl, x_rear], [ty, ty], color="#8b3a00", lw=2.0, zorder=7)
        ax.add_patch(Circle((x_pl + 14, ty), 10, facecolor="#e67e22",
                            edgecolor="#8b3a00", lw=1.0, zorder=8))
        ht(ax, x_pl + 18, ty + 28, "Sylomer", fontsize=7, ha="left", color="#8b3a00")
        ht(ax, x_pl + 18, ty - 32, f"krátký třmen\n{HANGER_CODE}", fontsize=6.5,
           ha="left", va="top", color="#8b3a00")
        ht(ax, xw + wool / 2, y1 - 20, f"MW {wool:.0f}", fontsize=7, ha="center", color="#2d5a1a")
        ht(ax, xa + air / 2, y1 - 20, f"vzduch {air}", fontsize=7, ha="center", color="#555")
        ht(ax, xg + gkb / 2, y1 - 20, "GKB", fontsize=7, ha="center", color="#0d5a70")
        dimh(ax, -35, xw, xr, f"{wool:.0f}+{air}+{gkb} = {total:.0f}", dy=12, fs=7.5)
        ht(ax, x_mas + 20, y0 - 70, "zeď", fontsize=7, color="#444")
        ht(ax, xr - 5, y0 - 70, "místnost →", fontsize=7, ha="right", color="#444")
        ax.set_xlim(x_mas - 40, xr + 80)
    else:
        xg = 0.0
        xa = xg + gkb
        xw = xa + air
        x_pl = xw + wool
        x_mas = x_pl + WALL_PLASTER
        x_rear_r = x_pl - 8
        x_rear = x_rear_r - CD_D
        x_front = xg + gkb
        xr_end = x_mas + WALL_MASON
        ap(ax, [(xg, y0), (xa, y0), (xa, y1), (xg, y1)], "#c8e8f0", "#1a7a9a", 1.0)
        ap(ax, [(xa, y0), (xw, y0), (xw, y1), (xa, y1)], "#f5f5f0", "#999", 0.6, alpha=0.5)
        ap(ax, [(xw, y0), (x_pl, y0), (x_pl, y1), (xw, y1)], "#9cbc6a", "#4a7a2a", 0.7, alpha=0.85)
        ap(ax, [(x_pl, y0), (x_mas, y0), (x_mas, y1), (x_pl, y1)], "#e8e4dc", "#888", 0.6)
        ap(ax, [(x_mas, y0), (xr_end, y0), (xr_end, y1), (x_mas, y1)], "#b8b0a0", "#444", 0.8)
        ap(ax, [(x_rear, y0 + 30), (x_rear + CD_D, y0 + 30),
                (x_rear + CD_D, y1 - 30), (x_rear, y1 - 30)], "#666", "#333", 0.9, z=5)
        ap(ax, [(x_front, y0 + 30), (x_front + CD_D, y0 + 30),
                (x_front + CD_D, y1 - 30), (x_front, y1 - 30)], "#666", "#333", 0.9, z=5)
        ty = (y0 + y1) / 2
        ax.plot([x_pl, x_rear_r], [ty, ty], color="#8b3a00", lw=2.0, zorder=7)
        ax.add_patch(Circle((x_pl - 14, ty), 10, facecolor="#e67e22",
                            edgecolor="#8b3a00", lw=1.0, zorder=8))
        ht(ax, x_pl - 18, ty + 28, "Sylomer", fontsize=7, ha="right", color="#8b3a00")
        ht(ax, x_pl - 18, ty - 32, f"krátký třmen\n{HANGER_CODE}", fontsize=6.5,
           ha="right", va="top", color="#8b3a00")
        ht(ax, xg + gkb / 2, y1 - 20, "GKB", fontsize=7, ha="center", color="#0d5a70")
        ht(ax, xa + air / 2, y1 - 20, f"vzduch {air}", fontsize=7, ha="center", color="#555")
        ht(ax, xw + wool / 2, y1 - 20, f"MW {wool:.0f}", fontsize=7, ha="center", color="#2d5a1a")
        dimh(ax, -35, xg, x_pl, f"{gkb}+{air}+{wool:.0f} = {total:.0f}", dy=12, fs=7.5)
        ht(ax, xg + 5, y0 - 70, "← místnost", fontsize=7, color="#444")
        ht(ax, xr_end - 10, y0 - 70, "zeď", fontsize=7, ha="right", color="#444")
        ax.set_xlim(xg - 40, xr_end + 40)

    # hybrid notes (compact)
    ht(ax, 0 if wall_left else 0, y0 - 115,
       "HYBRID: kotvení ke zdi jen vzadu + závěs shora (Nonius/akust.)",
       fontsize=7, ha="left", color="#333", halo=False)
    ht(ax, 0 if wall_left else 0, y0 - 145,
       "Zhotovitel zhodnotí třmeny NEBO Sylomer podložky · NE dlouhý třmen skrz dutinu",
       fontsize=7, ha="left", color="#8b3a00", fontweight="bold", halo=False)
    ht(ax, 0 if wall_left else 0, y0 - 172,
       f"spodek @ 2450 · CD 60/27 @{CD_SPACING:.0f} · {band}",
       fontsize=6.5, ha="left", color="#555", halo=False)

    # mini ceiling hang stub top-right
    cx = (ax.get_xlim()[1] - 90)
    cy = y1 + 40
    ax.plot([cx - 40, cx + 40], [cy + 50, cy + 50], color="#1a6a8a", lw=1.5, zorder=6)
    ax.plot([cx, cx], [cy + 50, cy], color="#666", lw=1.2, zorder=6)
    ax.plot([cx - 20, cx + 20], [cy, cy], color="#666", lw=1.4, zorder=6)
    ht(ax, cx, cy + 65, "závěs shora", fontsize=6, ha="center", color="#1a6a8a")

    ax.set_ylim(-220, SEC_H + 140)
    ax.set_title(title, fontsize=9, pad=6, loc="left")


paint_bass(
    axC,
    wool=B190_WOOL, air=B190_AIR, gkb=B190_GKB, total=B190_TOTAL, reach=B190_REACH,
    wall_left=True,
    title="C   Basstrap kuchyně 190 · HYBRID (zeď vlevo → místnost)",
    band="~40–120 Hz",
)
paint_bass(
    axD,
    wool=B450_WOOL, air=B450_AIR, gkb=B450_GKB, total=B450_TOTAL, reach=B450_REACH,
    wall_left=False,
    title="D   Basstrap obývák 450 · HYBRID (SDK vlevo / zeď vpravo)",
    band="~25–80 Hz",
)

# ----- footer -----
axFoot.set_xlim(0, 1)
axFoot.set_ylim(0, 1)
axFoot.set_aspect("auto")
footer_lines = [
    f"POZNÁMKY:  Pásky 40×2 na líci krokví — závěsy jen z boku.  "
    f"Samonosný soffit box 450: závěs z vod. CD (Nonius z krokví); nábytek nenosí; pozednice není závěsný bod.  "
    f"L_závěs {L_HANGER_LEFT:.0f} / {L_HANGER_RIGHT:.0f} mm.",
    "Basstrapy: hybridní rám (zeď vzadu + závěs shora); Zhotovitel zhodnotí třmeny NEBO Sylomer podložky; "
    "NE dlouhý třmen skrz dutinu; spodek uzavřen @ 2450 + měkká obvodová spára.",
    "zak. 220103 · Obývák 1.02 · Bor u Tachova · mm · původní DWG investora se nemění.",
]
for i, ln in enumerate(footer_lines):
    axFoot.text(0.01, 0.85 - i * 0.32, ln, fontsize=7.4, color="#222",
                ha="left", va="top", transform=axFoot.transAxes)

fig.suptitle(
    "Obývák 1.02 – šikminy, soffit, bokorys, basstrapy · 220103"
    "     ·     Novostavba RD, parc. č. 796/1, Bor u Tachova · mm",
    fontsize=14, fontweight="bold", y=0.975,
)

fig.savefig(OUT_PNG, dpi=160, facecolor="white", bbox_inches="tight", pad_inches=0.25)
print("wrote", OUT_PNG, "size", OUT_PNG.stat().st_size)
print("DONE")
print(f"CONFIRM: H_START={H_START:.2f} Z_SOFFIT={Z_SOFFIT:.2f} "
      f"hangers {L_HANGER_LEFT:.1f}/{L_HANGER_RIGHT:.1f} "
      f"bass {B190_TOTAL:.0f}/{B450_TOTAL:.0f}")

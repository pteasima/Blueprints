#!/usr/bin/env python3
"""Export Czech material-schedule workbook for Obývák šikminy / kastlík / štíty.

Quantities are derived from the current `models/obyvak` geometry (and the
acoustics face areas where those match the solid stack). Product links point
at the chosen catalogue pages; empty links / notes mark open choices.

    source .venv/bin/activate
    PYTHONPATH=models:src python scripts/export_obyvak_skladba.py
"""

from __future__ import annotations

import sys
from collections import defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "models"))
sys.path.insert(0, str(ROOT / "src"))

from openpyxl import Workbook
from openpyxl.styles import Alignment, Border, Font, PatternFill, Side
from openpyxl.utils import get_column_letter

from obyvak import build
from obyvak_geom import (
    LABEL_BASS_CD,
    LABEL_BASS_GKB,
    LABEL_BASS_HANGER,
    LABEL_BASS_WOOL,
    LABEL_PLENUM_WOOL,
    LABEL_RACKING_STRAP,
    LABEL_RAFTERS,
    LABEL_SLOPE_CD,
    LABEL_SLOPE_DIRECT,
    LABEL_SLOPE_NONIUS,
    LABEL_SOFFIT_BATTENS,
    LABEL_SOFFIT_CD,
    LABEL_SOFFIT_DUCT,
    LABEL_SOFFIT_NONIUS,
    LABEL_SOFFIT_WOOL,
    ObyvakLayout,
    ObyvakParams,
)


OUT = ROOT / "docs" / "obyvak-skladba-materialu.xlsx"

# Catalogue links (Czech / manufacturer pages for the chosen products).
URL_STOSILENT_FINISH = "https://www.sto.cz/s/p/a1F2p00000Piv9kEAB/stosilent-top-finish"
URL_STOSILENT_BASIC = "https://www.sto.cz/s/p/a1F2p00000Piv9jEAB/stosilent-top-basic"
URL_NATURHELD_140 = "https://naturheld-izolace.cz/produkt/naturheld-140/"
URL_NATURHELD_PDF = (
    "https://www.naturheld.global/wp-content/uploads/2024/08/"
    "Produktdatenblatt_DE_20240805_naturheld-140.pdf"
)
URL_RF = "https://www.rigips.cz/produkty/protipozarni-deska-rf-df/"
URL_GKB = "https://www.rigips.cz/produkty/stavebni-deska-rb-a/"
URL_CD = "https://www.rigips.cz/produkty/r-cd-profil/"
URL_DIRECT = "https://www.rigips.cz/produkty/primy-zaves/"
URL_NONIUS_TOP = "https://www.rigips.cz/produkty/nonius-horni-dil/"
URL_NONIUS_BOT = "https://www.rigips.cz/produkty/nonius-spodni-dil-pro-cd/"
URL_NONIUS_PIN = "https://www.rigips.cz/produkty/nonius-pojistna-zavlacka/"
URL_TRMEN = "https://www.rigips.cz/produkty/akusticky-trmen-se-sylomerem/"

HDR_FILL = PatternFill("solid", fgColor="1F4E79")
HDR_FONT = Font(bold=True, color="FFFFFF", name="Calibri", size=11)
SECTION_FILL = PatternFill("solid", fgColor="D6E3F0")
SECTION_FONT = Font(bold=True, name="Calibri", size=11)
NOTE_FILL = PatternFill("solid", fgColor="FFF2CC")
OPEN_FILL = PatternFill("solid", fgColor="FCE4D6")
THIN = Border(
    left=Side(style="thin", color="B0B0B0"),
    right=Side(style="thin", color="B0B0B0"),
    top=Side(style="thin", color="B0B0B0"),
    bottom=Side(style="thin", color="B0B0B0"),
)
WRAP = Alignment(wrap_text=True, vertical="top")
COLS = (
    "Pořadí",
    "Vrstva / prvek",
    "Typ výrobku",
    "Zvolený výrobek (odkaz)",
    "Tloušťka / rozměr",
    "Množství",
    "Jednotka",
    "Poznámka",
)


def _fmt_qty(value: float, digits: int = 1) -> float | int:
    if abs(value - round(value)) < 1e-9:
        return int(round(value))
    return round(value, digits)


def _longest(part) -> float:
    bb = part.bounding_box()
    return max(bb.size.X, bb.size.Y, bb.size.Z)


def _volume_m3(parts) -> float:
    return sum(float(p.volume) for p in parts) / 1e9


def _length_m(parts) -> float:
    return sum(_longest(p) for p in parts) / 1000.0


def collect_quantities():
    p = ObyvakParams()
    g = ObyvakLayout(p)
    shape, _meta = build(p)
    by = defaultdict(list)
    for child in shape.children:
        by[child.label].append(child)

    # Face areas (m²): acoustics report / plan geometry — matches room-facing stack.
    slope_face = (g.x_ridge / g.cos + (g.x_furn - g.x_ridge) / g.cos) * p.room_length / 1e6
    trap_zs = [g.z_slope_offset(x, 0.0) for x in range(0, int(p.room_width) + 1, 50)]
    trap_h = sum(z - p.predstena_bottom_z for z in trap_zs) / len(trap_zs)
    trap_face = trap_h * p.room_width / 1e6
    soffit_y = g.y_furn1 - g.y_furn0
    # StoSilent/NH L face: underside + room-side vertical (acoustics ≈ 11.8 m²).
    nh_pts = g.soffit_nh_pts()
    # Approximate outer room-facing path of the L (bottom + vertical rise toward lid).
    bottom = abs(nh_pts[1][0] - nh_pts[0][0])  # x_furn → wall
    vert = abs(nh_pts[4][1] - nh_pts[3][1])  # vertical NH stem
    soffit_face = (bottom + vert) * soffit_y / 1e6

    lid_area = max(g.poz_r0 - g.x_gkf_kink, 0.0) * soffit_y / 1e6

    slope_cd_lm = _length_m(by[LABEL_SLOPE_CD])
    soffit_cd_lm = _length_m(by[LABEL_SOFFIT_CD])
    bass_cd_lm = _length_m(by[LABEL_BASS_CD])
    battens_lm = _length_m(by[LABEL_SOFFIT_BATTENS])
    strap_lm = _length_m(by[LABEL_RACKING_STRAP])
    duct_lm = _length_m(by[LABEL_SOFFIT_DUCT])

    # Soffit steel mixed under LABEL_SOFFIT_NONIUS — classify by bbox.
    nonius_hang = []
    joint_angles = []
    drops = []
    wall_brackets = []
    cleats = []
    for part in by[LABEL_SOFFIT_NONIUS]:
        bb = part.bounding_box()
        sx, sy, sz = bb.size.X, bb.size.Y, bb.size.Z
        long = max(sx, sy, sz)
        if abs(sx - 20) < 1 and abs(sy - 20) < 1 and sz > 50:
            nonius_hang.append(part)
        elif abs(sx - 20) < 1 and abs(sy - 2) < 1 and sz < 30:
            drops.append(part)
        elif long > 2000 and min(sx, sy, sz) < 5:
            if sz < 10 and sx > 30:
                cleats.append(part)
            elif sy > 2000:
                joint_angles.append(part)
            else:
                cleats.append(part)
        elif max(sx, sz) < 100 and sy < 100:
            wall_brackets.append(part)
        else:
            joint_angles.append(part)

    return {
        "p": p,
        "g": g,
        "by": by,
        "slope_face": slope_face,
        "soffit_face": soffit_face,
        "trap_face": trap_face,
        "lid_area": lid_area,
        "slope_cd_lm": slope_cd_lm,
        "soffit_cd_lm": soffit_cd_lm,
        "bass_cd_lm": bass_cd_lm,
        "battens_lm": battens_lm,
        "strap_lm": strap_lm,
        "duct_lm": duct_lm,
        "n_direct": len(by[LABEL_SLOPE_DIRECT]),
        "n_slope_nonius": len(by[LABEL_SLOPE_NONIUS]),
        "n_soffit_nonius": len(nonius_hang),
        "n_drops": len(drops),
        "n_wall_brackets": len(wall_brackets),
        "joint_angle_lm": _length_m(joint_angles) if joint_angles else soffit_y / 1000.0,
        "cleat_lm": _length_m(cleats) if cleats else soffit_y / 1000.0,
        "n_bass_hanger": len(by[LABEL_BASS_HANGER]),
        "n_rafters": len(by[LABEL_RAFTERS]),
        "n_battens": len(by[LABEL_SOFFIT_BATTENS]),
        "n_ducts": len(by[LABEL_SOFFIT_DUCT]),
        "plenum_wool_m3": _volume_m3(by[LABEL_PLENUM_WOOL]),
        "soffit_wool_m3": _volume_m3(by[LABEL_SOFFIT_WOOL]),
        "bass_wool_m3": _volume_m3(by[LABEL_BASS_WOOL]),
        "bass_gkb_m2": _volume_m3(by[LABEL_BASS_GKB]) / (p.bass_k_gkb / 1000.0),
    }


def _style_header(ws, row: int = 1):
    for col, title in enumerate(COLS, 1):
        cell = ws.cell(row, col, title)
        cell.fill = HDR_FILL
        cell.font = HDR_FONT
        cell.alignment = Alignment(wrap_text=True, vertical="center", horizontal="center")
        cell.border = THIN
    ws.row_dimensions[row].height = 32
    ws.freeze_panes = "A2"
    widths = [8, 28, 28, 55, 22, 12, 10, 48]
    for i, w in enumerate(widths, 1):
        ws.column_dimensions[get_column_letter(i)].width = w


def _write_row(ws, row: int, values: list, open_item: bool = False):
    for col, val in enumerate(values, 1):
        cell = ws.cell(row, col, val)
        cell.alignment = WRAP
        cell.border = THIN
        if open_item:
            cell.fill = OPEN_FILL
        # Hyperlink in product column when value looks like "Name\nURL"
        if col == 4 and isinstance(val, str) and "\n" in val:
            name, url = val.split("\n", 1)
            cell.value = name
            if url.startswith("http"):
                cell.hyperlink = url
                cell.font = Font(color="0563C1", underline="single", name="Calibri", size=11)
    ws.row_dimensions[row].height = 48 if open_item else 40
    return row + 1


def _section(ws, row: int, title: str):
    ws.merge_cells(start_row=row, start_column=1, end_row=row, end_column=len(COLS))
    cell = ws.cell(row, 1, title)
    cell.fill = SECTION_FILL
    cell.font = SECTION_FONT
    cell.alignment = WRAP
    for col in range(1, len(COLS) + 1):
        ws.cell(row, col).border = THIN
        ws.cell(row, col).fill = SECTION_FILL
    ws.row_dimensions[row].height = 22
    return row + 1


def _product(name: str, url: str = "") -> str:
    return f"{name}\n{url}" if url else name


def sheet_sikminy(wb, q):
    ws = wb.create_sheet("Šikminy", 0)
    _style_header(ws)
    p = q["p"]
    face = q["slope_face"]
    row = 2
    row = _section(ws, row, "Skladba interiér → půda (kolmo k ploše šikminy), obývák 1.02")
    rows = [
        (
            1,
            "Povrchová úprava",
            "Akustický finální nátěr",
            _product("StoSilent Top Finish (bílý / tónovaný)", URL_STOSILENT_FINISH),
            "≈ 2 mm (spotřeba dle TL)",
            _fmt_qty(face),
            "m²",
            "Nanášet na Top Basic; porézní finál. Spotřeba dle TL Sto (orient. ~2–2,5 kg/m²).",
            False,
        ),
        (
            2,
            "Podkladní nátěr",
            "Akustický základní nátěr",
            _product("StoSilent Top Basic (bílý / tónovaný)", URL_STOSILENT_BASIC),
            "≈ 2 mm (spotřeba dle TL)",
            _fmt_qty(face),
            "m²",
            "Na NaturHeld 140. Spotřeba dle TL Sto (orient. ~2,5 kg/m²).",
            False,
        ),
        (
            3,
            "Akustická deska",
            "Dřevovláknitá deska ρ 140",
            _product("NaturHeld 140, tl. 80 mm (P+D 1880×615)", URL_NATURHELD_140),
            "80 mm",
            _fmt_qty(face),
            "m²",
            f"Šroubováno přes GKF do CD @ {p.cd_spacing:.0f} mm. Bez NaturHeld Flex, bez latí na šikmině. "
            f"TL: {URL_NATURHELD_PDF}",
            False,
        ),
        (
            4,
            "Parozábrana",
            "Parotěsná fólie",
            "Výrobek dosud nezvolen",
            f"≈ {p.foil_t:.0f} mm (model)",
            _fmt_qty(face),
            "m²",
            "Nedořešeno: konkrétní fólie (typ / Sd / pásky napojení) ještě není zvolena.",
            True,
        ),
        (
            5,
            "Podkladní deska",
            "Sádrokarton GKF / RF",
            _product("Rigips RF (DF) 12,5 mm", URL_RF),
            f"{p.sdk_t} mm",
            _fmt_qty(face),
            "m²",
            "Deska končí u zlomu na víko kastlíku (bez svislého náběhu).",
            False,
        ),
        (
            6,
            "Rošt CD",
            "Profil CD 60×27",
            _product("Rigips R-CD profil 27/60/27", URL_CD),
            f"60×27 mm, osově {p.cd_spacing:.0f} mm ⊥ krokvím",
            _fmt_qty(q["slope_cd_lm"]),
            "bm",
            f"{len(q['by'][LABEL_SLOPE_CD])} profilů přes světlou délku místnosti ({p.room_length/1000:.2f} m).",
            False,
        ),
        (
            7,
            "Závěs — okenní šikmina",
            "Přímý závěs 125 mm",
            _product("Rigips přímý závěs 125 mm, KB510154", URL_DIRECT),
            "125 mm (sklad)",
            q["n_direct"],
            "ks",
            "Kotvení z boku krokve; svěšení dutiny ≈ plenum 80 mm.",
            False,
        ),
        (
            8,
            "Závěs — šikmina u skříní",
            "Nonius (horní + spodní + závlačky)",
            _product(
                "Rigips Nonius horní díl 340/440 + spodní díl CD KB510193 + 2× závlačka KB510203",
                URL_NONIUS_TOP,
            ),
            "horní 340/440 mm dle svěšení",
            q["n_slope_nonius"],
            "ks",
            "Svěšení otevírá se k nábytku (≈ až 370 mm). Spodní díl: "
            f"{URL_NONIUS_BOT} · závlačka: {URL_NONIUS_PIN}",
            False,
        ),
        (
            9,
            "Výplň dutiny / mezi krokvemi",
            "Minerální vlna",
            "Výrobek dosud nezvolen",
            "void ~80 mm + mezi krokvemi 160 mm",
            _fmt_qty(q["plenum_wool_m3"], 2),
            "m³",
            "Nedořešeno: konkrétní minerální vlna (λ, σ). Akustický model počítá σ≈12000 Pa·s/m². "
            "Ne Isover Flex 50 — Flex na šikmině není.",
            True,
        ),
        (
            10,
            "Zavětrování",
            "Ocelová páska",
            "Výrobek dosud nezvolen",
            f"{p.strap_w:.0f}×{p.strap_t:.0f} mm @ 45°",
            _fmt_qty(q["strap_lm"]),
            "bm",
            "Nedořešeno: přesný typ pásky / kotevní prvky. Model: 12 pásek na spodní líci krokví.",
            True,
        ),
        (
            11,
            "Krov (nosná konstrukce)",
            "Krokve",
            "Stávající / dle PD (není samostatný nákup akustiky)",
            f"{p.rafter_w:.0f}/{p.rafter_t:.0f} mm @ {p.rafter_spacing:.0f} mm",
            q["n_rafters"],
            "ks",
            "Součást krovu; v modelu odděleně od latového roštu kastlíku.",
            False,
        ),
    ]
    for item in rows:
        row = _write_row(ws, row, list(item[:8]), open_item=item[8])
    return ws


def sheet_kastlik(wb, q):
    ws = wb.create_sheet("Kastlík", 1)
    _style_header(ws)
    p = q["p"]
    face = q["soffit_face"]
    row = 2
    row = _section(
        ws,
        row,
        "Kastlík (soffit) nad skříněmi — pohledová L-deska + dutina + víko; závěs z CD, ne z nábytku",
    )
    rows = [
        (
            1,
            "Povrchová úprava (bok + spodní líce)",
            "Akustický finální nátěr",
            _product("StoSilent Top Finish", URL_STOSILENT_FINISH),
            "≈ 2 mm",
            _fmt_qty(face),
            "m²",
            "Stejný systém jako na šikminách; spoj NH 80/40 v linii skříní bez zubu.",
            False,
        ),
        (
            2,
            "Podkladní nátěr",
            "Akustický základní nátěr",
            _product("StoSilent Top Basic", URL_STOSILENT_BASIC),
            "≈ 2 mm",
            _fmt_qty(face),
            "m²",
            "",
            False,
        ),
        (
            3,
            "Akustická deska L (bok + spodní líce)",
            "Dřevovláknitá deska ρ 140",
            _product("NaturHeld 140, tl. 40 mm", URL_NATURHELD_140),
            "40 mm",
            _fmt_qty(face),
            "m²",
            "Tenčí než šikmina (80); butuje na X_FURN. Mezi deskou a skříněmi mezera 20 mm.",
            False,
        ),
        (
            4,
            "Výplň akustické dutiny",
            "Minerální vlna",
            "Výrobek dosud nezvolen",
            "dutina za NH, pod víkem; zastaveno před potrubím",
            _fmt_qty(q["soffit_wool_m3"], 2),
            "m³",
            "Nedořešeno: typ vlny. Modelová kubatura po odečtení roštu/oceli (~1,8 m³). "
            "Ne NaturHeld Flex.",
            True,
        ),
        (
            5,
            "Latový rošt",
            "Dřevěné latě",
            "Latě 60×40 mm (stavební řezivo / KVH dle zhotovitele)",
            f"{p.rost_w:.0f}×{p.rost_d:.0f} mm @ {p.rost_spacing:.0f} mm",
            _fmt_qty(q["battens_lm"]),
            "bm",
            f"{q['n_battens']} prvků (svislé + spodní). Visi z CD, vzpěra k obvodové zdi — ne z nábytku/pozednice.",
            False,
        ),
        (
            6,
            "Víko kastlíku",
            "Sádrokarton GKF / RF",
            _product("Rigips RF (DF) 12,5 mm", URL_RF),
            f"{p.sdk_t} mm",
            _fmt_qty(q["lid_area"], 2),
            "m²",
            "Horní líce víka v úrovni pozednice; dořez na líci pozednice, ne na omítce.",
            False,
        ),
        (
            7,
            "Vodorovný CD (nosný)",
            "Profil CD 60×27",
            _product("Rigips R-CD profil 27/60/27", URL_CD),
            "60×27 mm",
            _fmt_qty(q["soffit_cd_lm"]),
            "bm",
            "Jedna řada CD nad víkem = jediný Nonius řádek kastlíku.",
            False,
        ),
        (
            8,
            "Závěs CD → krokve",
            "Nonius (horní + spodní + závlačky)",
            _product(
                "Rigips Nonius horní + spodní díl CD + 2× závlačka",
                URL_NONIUS_TOP,
            ),
            "dle svěšení (~400 mm v modelu)",
            q["n_soffit_nonius"],
            "ks",
            f"1 závěs na krokev na rostovém CD. Spodní: {URL_NONIUS_BOT}",
            False,
        ),
        (
            9,
            "Drop závěs CD → latový rošt",
            "Krátký ocelový závěs / pásek",
            "Výrobek dosud nezvolen (model: 20×2 mm)",
            f"{p.soffit_drop_w:.0f}×{p.soffit_drop_t:.0f} mm",
            q["n_drops"],
            "ks",
            "Nedořešeno: katalogový prvek vs. pásek na míru. Prochází víkem GKF k latím.",
            True,
        ),
        (
            10,
            "Úhelník skrytého spoje šikmina/víko",
            "Tenkostěnný ocelový úhelník",
            "Výrobek dosud nezvolen",
            "L-profil podél spoje",
            _fmt_qty(q["joint_angle_lm"]),
            "bm",
            "Nedořešeno: přesný L-profil. Drží skrytý styk desek; šroubuje se do rostového CD.",
            True,
        ),
        (
            11,
            "Vzpěra u obvodové zdi",
            "Nástěnný úhelník",
            "Výrobek dosud nezvolen",
            f"rameno ≈ {p.wall_bracket_leg:.0f} mm, tl. {p.wall_bracket_t:.0f} mm",
            q["n_wall_brackets"],
            "ks",
            "Nedořešeno. Jen vzpěra — není závěsný bod kastlíku.",
            True,
        ),
        (
            12,
            "Cleat víka na pozednici",
            "Tenkostěnný úhelník / pásek",
            "Výrobek dosud nezvolen",
            "podél líce pozednice",
            _fmt_qty(q["cleat_lm"]),
            "bm",
            "Nedořešeno. Drží hranu desky; pozednice nenosí kastlík.",
            True,
        ),
        (
            13,
            "VZT / klimatizace v dutině",
            "Spirála Ø160",
            "Spirálové potrubí Ø160 (HRV přívod + odtah + AC)",
            f"OD {p.duct_od:.0f} mm",
            _fmt_qty(q["duct_lm"]),
            "bm",
            f"{q['n_ducts']} trubky pod víkem, kotvené ke zdi — kastlík je nenese. Konkrétní výrobce/typ VZT doplnit.",
            True,
        ),
    ]
    for item in rows:
        row = _write_row(ws, row, list(item[:8]), open_item=item[8])
    return ws


def sheet_stity(wb, q):
    ws = wb.create_sheet("Štíty", 2)
    _style_header(ws)
    p = q["p"]
    face = q["trap_face"]
    row = 2
    row = _section(
        ws,
        row,
        "Basstrapy ve štítech — kuchyně 190 mm (Y=0) a obývák 450 mm (Y=L), pod kontinuální šikminou",
    )

    row = _section(ws, row, "A — Společné (oba štíty)")
    common = [
        (
            "A1",
            "Lícová deska (membrána)",
            "Sádrokarton GKB / RF plná",
            _product("Rigips RB (A) / RF 12,5 mm — plná deska, NE perforovaná", URL_GKB),
            f"{p.bass_k_gkb} mm",
            _fmt_qty(q["bass_gkb_m2"], 1),
            "m²",
            "Včetně spodního víka skříně. Alt. RF: "
            f"{URL_RF}. Soft-joint nahoru k NaturHeld šikminy.",
            False,
        ),
        (
            "A2",
            "Rám (CD / UW)",
            "Profil CD 60×27 (+ UW dle zhotovitele)",
            _product("Rigips R-CD 27/60/27", URL_CD),
            f"60×27 mm @ {p.cd_spacing:.0f} mm",
            _fmt_qty(q["bass_cd_lm"]),
            "bm",
            "Uzavřená skříň: zadní + přední svislé CD, vzpěry, kolejnice. UW detaily doplnit dle montáže.",
            False,
        ),
        (
            "A3",
            "Kotvení ke zdi (vzadu)",
            "Akustický třmen se Sylomerem",
            _product("Rigips akustický třmen se Sylomerem, KB517112", URL_TRMEN),
            "katalogový dosah ≤ ~120 mm",
            q["n_bass_hanger"],
            "ks",
            "Jen k zadnímu CD uvnitř vlny — ne dlouhý třmen skrz celou dutinu. "
            "Alt. Knauf W623. Sylomer nedotahovat naplocho.",
            False,
        ),
        (
            "A4",
            "Závěs shora",
            "Nonius / akustický stropní závěs",
            _product("Rigips Nonius (horní+spodní) / akust. závěs podhledu", URL_NONIUS_TOP),
            "ke hornímu UW/CD rámu",
            "dle montáže",
            "ks",
            "Nedořešeno v 3D počtu: hybrid předpokládá závěs shora ze stropu/podhledu; "
            "model kotví hlavně krátké třmeny ke štítu (bez Nonius skrz šikminový pack).",
            True,
        ),
    ]
    for item in common:
        row = _write_row(ws, row, list(item[:8]), open_item=item[8])

    row = _section(
        ws,
        row,
        f"B — Kuchyně (předstěna {p.predstena_kitchen:.0f} mm): zeď → MW {p.bass_k_wool} → vzduch {p.bass_k_air} → GKB {p.bass_k_gkb}",
    )
    kitchen = [
        (
            "B1",
            "Minerální vlna u zdi",
            "Minerální vlna",
            "Výrobek dosud nezvolen",
            f"{p.bass_k_wool} mm",
            _fmt_qty(face * p.bass_k_wool / 1000.0, 2),
            "m³",
            "Vlna končí 20 mm před zadní lící předního CD (list GKB se smí hýbat na Sylomeru). "
            "Nedořešeno: typ vlny.",
            True,
        ),
        (
            "B2",
            "Vzduchová dutina",
            "Vzduch (27 mm CD + 20 mm clear)",
            "—",
            f"{p.bass_k_air} mm",
            _fmt_qty(face),
            "m²",
            "Není prázdná pružina v celé hloubce — obsahuje přední CD. Nevtlačovat vlnu na desku.",
            False,
        ),
        (
            "B3",
            "Dosah zadního třmenu",
            "—",
            _product("KB517112", URL_TRMEN),
            f"zeď → zadní CD ≈ {p.bass_k_rear_reach:.0f} mm",
            "viz A3",
            "—",
            "",
            False,
        ),
    ]
    for item in kitchen:
        row = _write_row(ws, row, list(item[:8]), open_item=item[8])

    row = _section(
        ws,
        row,
        f"C — Obývák (předstěna {p.predstena_living:.0f} mm): GKB {p.bass_l_gkb} → vzduch {p.bass_l_air} → MW {p.bass_l_wool} → zeď",
    )
    living = [
        (
            "C1",
            "Vzduchová dutina za deskou",
            "Vzduch",
            "—",
            f"{p.bass_l_air} mm",
            _fmt_qty(face),
            "m²",
            "Zrcadlově oproti kuchyni: membrána do místnosti, vlna u zdi.",
            False,
        ),
        (
            "C2",
            "Minerální vlna u zdi",
            "Minerální vlna",
            "Výrobek dosud nezvolen",
            f"{p.bass_l_wool} mm",
            _fmt_qty(face * p.bass_l_wool / 1000.0, 2),
            "m³",
            "Nedořešeno: typ vlny. Akustika: držet split 300 / 137,5 mm.",
            True,
        ),
        (
            "C3",
            "Dosah zadního třmenu",
            "—",
            _product("KB517112", URL_TRMEN),
            f"zeď → zadní CD ≈ {p.bass_l_rear_reach:.0f} mm",
            "viz A3",
            "—",
            "",
            False,
        ),
    ]
    for item in living:
        row = _write_row(ws, row, list(item[:8]), open_item=item[8])
    return ws


def sheet_souhrn(wb, q):
    ws = wb.create_sheet("Souhrn materiálu", 3)
    headers = (
        "Materiál",
        "Zvolený výrobek (odkaz)",
        "Celkové množství",
        "Jednotka",
        "Kde se používá",
        "Stav",
        "Poznámka",
    )
    for col, title in enumerate(headers, 1):
        cell = ws.cell(1, col, title)
        cell.fill = HDR_FILL
        cell.font = HDR_FONT
        cell.alignment = Alignment(wrap_text=True, vertical="center", horizontal="center")
        cell.border = THIN
    ws.freeze_panes = "A2"
    widths = [32, 55, 14, 10, 36, 14, 44]
    for i, w in enumerate(widths, 1):
        ws.column_dimensions[get_column_letter(i)].width = w

    p = q["p"]
    face_s = q["slope_face"]
    face_k = q["soffit_face"]
    face_t = q["trap_face"]
    stosilent_area = face_s + face_k
    nh80 = face_s
    nh40 = face_k
    gkf = face_s + q["lid_area"]
    cd_lm = q["slope_cd_lm"] + q["soffit_cd_lm"] + q["bass_cd_lm"]
    nonius_ks = q["n_slope_nonius"] + q["n_soffit_nonius"]
    wool_m3 = q["plenum_wool_m3"] + q["soffit_wool_m3"] + q["bass_wool_m3"]

    items = [
        (
            "StoSilent Top Finish",
            _product("StoSilent Top Finish", URL_STOSILENT_FINISH),
            _fmt_qty(stosilent_area),
            "m²",
            "Šikminy + kastlík",
            "zvoleno",
            "Přepočítat na kg dle TL po výběru odstínu.",
            False,
        ),
        (
            "StoSilent Top Basic",
            _product("StoSilent Top Basic", URL_STOSILENT_BASIC),
            _fmt_qty(stosilent_area),
            "m²",
            "Šikminy + kastlík",
            "zvoleno",
            "",
            False,
        ),
        (
            "NaturHeld 140 — 80 mm",
            _product("NaturHeld 140 / 80 mm", URL_NATURHELD_140),
            _fmt_qty(nh80),
            "m²",
            "Šikminy",
            "zvoleno",
            "Preferovat P+D 1880×615.",
            False,
        ),
        (
            "NaturHeld 140 — 40 mm",
            _product("NaturHeld 140 / 40 mm", URL_NATURHELD_140),
            _fmt_qty(nh40),
            "m²",
            "Kastlík (bok + spodní líce)",
            "zvoleno",
            "",
            False,
        ),
        (
            "Parozábrana / fólie",
            "Výrobek dosud nezvolen",
            _fmt_qty(face_s),
            "m²",
            "Šikminy (pod NH)",
            "nedořešeno",
            "Doplnit typ, Sd, systém pásek.",
            True,
        ),
        (
            "Sádrokarton GKF/RF 12,5",
            _product("Rigips RF (DF) 12,5", URL_RF),
            _fmt_qty(gkf, 1),
            "m²",
            "Šikminy + víko kastlíku",
            "zvoleno",
            "",
            False,
        ),
        (
            "Sádrokarton GKB/RF 12,5 (basstrapy)",
            _product("Rigips RB/RF 12,5 plná", URL_GKB),
            _fmt_qty(q["bass_gkb_m2"], 1),
            "m²",
            "Štíty (líce + dna)",
            "zvoleno",
            "Membrána — ne perforovaná.",
            False,
        ),
        (
            "Profil R-CD 60×27",
            _product("Rigips R-CD", URL_CD),
            _fmt_qty(cd_lm),
            "bm",
            "Šikminy + kastlík + štíty",
            "zvoleno",
            "Bez prořezu / spojek — přiobjednat spojovací kusy a rezervu.",
            False,
        ),
        (
            "Přímý závěs 125 mm KB510154",
            _product("Rigips KB510154", URL_DIRECT),
            q["n_direct"],
            "ks",
            "Šikminy (okenní strana)",
            "zvoleno",
            "",
            False,
        ),
        (
            "Nonius sada (horní+spodní+závlačky)",
            _product("Rigips Nonius", URL_NONIUS_TOP),
            nonius_ks,
            "ks",
            "Šikminy u skříní + kastlík",
            "zvoleno",
            "Délku horního dílu volit dle svěšení (340/440…). Basstrap stropní závěsy zvlášť.",
            False,
        ),
        (
            "Akustický třmen KB517112",
            _product("Rigips KB517112", URL_TRMEN),
            q["n_bass_hanger"],
            "ks",
            "Štíty (zadní kotvení)",
            "zvoleno",
            "",
            False,
        ),
        (
            "Minerální vlna (souhrn)",
            "Výrobek dosud nezvolen",
            _fmt_qty(wool_m3, 2),
            "m³",
            "Plenum šikmin + kastlík + štíty",
            "nedořešeno",
            f"Rozpad: plenum {q['plenum_wool_m3']:.2f} + kastlík {q['soffit_wool_m3']:.2f} "
            f"+ štíty {q['bass_wool_m3']:.2f} m³.",
            True,
        ),
        (
            "Latě 60×40",
            "Řezivo dle zhotovitele",
            _fmt_qty(q["battens_lm"]),
            "bm",
            "Kastlík (latový rošt)",
            "orientační",
            "",
            False,
        ),
        (
            "Zavětrovací pásky 40×2",
            "Výrobek dosud nezvolen",
            _fmt_qty(q["strap_lm"]),
            "bm",
            "Šikminy / krov",
            "nedořešeno",
            "",
            True,
        ),
        (
            "Spirálové potrubí Ø160",
            "Výrobce VZT dosud nezvolen",
            _fmt_qty(q["duct_lm"]),
            "bm",
            "Kastlík (3 trasy)",
            "nedořešeno",
            "",
            True,
        ),
        (
            "Ocelové úhelníky / dropy kastlíku",
            "Výrobky dosud nezvoleny",
            f"drop {q['n_drops']} ks; úhelník spoje {_fmt_qty(q['joint_angle_lm'])} bm; "
            f"vzpěry {q['n_wall_brackets']} ks; cleat {_fmt_qty(q['cleat_lm'])} bm",
            "mix",
            "Kastlík",
            "nedořešeno",
            "Sjednotit katalogové prvky Rigips/Knauf nebo zámečnické L.",
            True,
        ),
        (
            "Krokve 100/160",
            "Stávající krov",
            q["n_rafters"],
            "ks",
            "Šikminy",
            "krov",
            f"Osově {p.rafter_spacing:.0f} mm.",
            False,
        ),
    ]

    row = 2
    for item in items:
        open_item = item[7]
        vals = list(item[:7])
        for col, val in enumerate(vals, 1):
            cell = ws.cell(row, col, val)
            cell.alignment = WRAP
            cell.border = THIN
            if open_item:
                cell.fill = OPEN_FILL
            if col == 2 and isinstance(val, str) and "\n" in val:
                name, url = val.split("\n", 1)
                cell.value = name
                if url.startswith("http"):
                    cell.hyperlink = url
                    cell.font = Font(color="0563C1", underline="single", name="Calibri", size=11)
        ws.row_dimensions[row].height = 44
        row += 1

    # Legend
    row += 1
    ws.merge_cells(start_row=row, start_column=1, end_row=row, end_column=7)
    cell = ws.cell(
        row,
        1,
        "Oranžové řádky = nedořešený výběr výrobku nebo detail. Množství z aktuálního 3D modelu "
        f"obyvak (místnost {p.room_width/1000:.2f}×{p.room_length/1000:.2f} m). "
        "Pohledové plochy šikmin/kastlíku/štítů z geometrie skladeb (shodné s akustickou zprávou).",
    )
    cell.fill = NOTE_FILL
    cell.alignment = WRAP
    ws.row_dimensions[row].height = 50
    return ws


def sheet_meta(wb, q):
    ws = wb.create_sheet("Meta", 4)
    ws.column_dimensions["A"].width = 28
    ws.column_dimensions["B"].width = 90
    ws["A1"] = "Položka"
    ws["B1"] = "Hodnota"
    for col in (1, 2):
        ws.cell(1, col).fill = HDR_FILL
        ws.cell(1, col).font = HDR_FONT
    p = q["p"]
    g = q["g"]
    rows = [
        ("Model", "obyvak (Obývák 1.02)"),
        ("Zdroj geometrie", "models/obyvak.py + models/obyvak_geom.py"),
        ("Regenerace", "PYTHONPATH=models:src python scripts/export_obyvak_skladba.py"),
        ("Místnost (mm)", f"{p.room_width:.0f} × {p.room_length:.0f}, sklon {p.roof_angle_deg:.0f}°"),
        ("Plocha šikmin (pohled)", f"{q['slope_face']:.2f} m²"),
        ("Plocha kastlíku (pohled L)", f"{q['soffit_face']:.2f} m²"),
        ("Plocha jednoho štítu (pohled)", f"{q['trap_face']:.2f} m²"),
        ("Šikmina NH", f"NaturHeld 140 / {p.naturheld_t:.0f} mm + StoSilent {p.finish_t:.0f}+{p.basic_t:.0f}"),
        ("Kastlík NH", f"NaturHeld 140 / {p.soffit_naturheld_t:.0f} mm + StoSilent"),
        ("Basstrap kuchyně", f"{p.bass_k_wool}+{p.bass_k_air}+{p.bass_k_gkb} = {p.predstena_kitchen:.0f} mm"),
        ("Basstrap obývák", f"{p.bass_l_gkb}+{p.bass_l_air}+{p.bass_l_wool} = {p.predstena_living:.0f} mm"),
        (
            "Legenda barev",
            "Oranžová = nedořešený výrobek/detail (k doladění spolu s modelem).",
        ),
    ]
    for i, (a, b) in enumerate(rows, 2):
        ws.cell(i, 1, a).border = THIN
        ws.cell(i, 2, b).border = THIN
        ws.cell(i, 2).alignment = WRAP
        ws.row_dimensions[i].height = 22
    return ws


def main() -> int:
    print("Counting solids from obyvak build…")
    q = collect_quantities()
    wb = Workbook()
    # remove default
    default = wb.active
    wb.remove(default)
    sheet_sikminy(wb, q)
    sheet_kastlik(wb, q)
    sheet_stity(wb, q)
    sheet_souhrn(wb, q)
    sheet_meta(wb, q)
    OUT.parent.mkdir(parents=True, exist_ok=True)
    wb.save(OUT)
    print(f"Wrote {OUT}")
    print(
        f"Areas m²: slopes={q['slope_face']:.2f} soffit={q['soffit_face']:.2f} "
        f"trap={q['trap_face']:.2f}"
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

"""Floor EPS (podlahový polystyren) take-off for 1.NP -> docs/podlaha-eps.xlsx + docs/podlaha-eps-souhrn.csv.

Run: python scripts/export_podlaha_eps.py
Sources: room areas from D.1.4.1.03 (ZTI 1.NP room table), build-ups from D.1.1.08 legend
(A Podlaha 1.NP, C Podlaha garáže). Pack sizes: Isover EPS 150 technical sheet (CZ).
"""
import csv, math
from collections import OrderedDict
from openpyxl import Workbook
from openpyxl.styles import Font, PatternFill, Alignment

TOTAL = 250  # finální skladba 250 mm; mm, top of base slab -> finished floor (A: 251.2, C: 250.2 in project)
HI = 8       # AP Elastek 40 + AP Glastek 40 Special (hydroizolace, kept from project)
BOARD = 50   # systémová deska podlahového topení vč. nopů
WASTE = 0.06
PACK_M2 = {20: 12.5, 30: 8.0, 40: 6.0, 50: 5.0, 60: 4.0, 80: 3.0, 100: 2.5, 120: 2.0, 140: 1.5}
PACK_SRC = "Isover EPS 150, TL CZ, desky 1000×500 · https://www.isover.cz/en/documents/technicke-listy/tl-isover-eps-150-cz.pdf"

# kind -> finish, concrete, board, layers, EPS type, note
KINDS = {
    "pu":   ("PU stěrka 4", 4, 58, BOARD, (80, 50), "EPS 100 S", "Potěr 58 mm (250 − 8 − 130 − 50 − 4). Bílý EPS, 2 vrstvy na vazbu."),
    "tile": ("lepidlo+dlažba 13", 13, 49, BOARD, (80, 50), "EPS 100 S", "Stejný EPS jako dům; potěr 49 mm (o 9 mm tenčí kvůli dlažbě), min. 45 mm nad nopy."),
    "b120": ("lepidlo+dlažba 13", 13, 99, BOARD, (80,), "EPS 100 S", "Spád 1,5 % k vpusti, rozdíl ~43 mm: potěr 99 mm u dveří → ~56 mm u vpusti (min. 45 nad nopy, rezerva 11). Jedna vrstva 80 (spodní 50 vynechána); přechod ve dveřích = dilatační spára."),
    "gar":  ("PU stěrka 4", 4, 100, BOARD, (50, 40), "EPS 150 S", "Nově podlahové topení; beton 100 mm (Petr). Pojezd aut — EPS 150 S min., ověřit se statikem / výrobcem systémové desky (projekt: XPS 80)."),
    "skl":  ("— (beton)", 0, 100, 0, (100, 40), "EPS 150 S", "Venkovní sklad: jen EPS + beton. Beton 100 mm = PLACEHOLDER (doporučeno 100–120 mm + KARI)."),
}
ROOMS = [  # no, name, area m² (D.1.4.1.03), kind
    ("1.01", "Zádveří", 19.98, "pu"), ("1.02", "Obývací pokoj+KK", 58.91, "pu"),
    ("1.03", "Spíž", 5.32, "pu"), ("1.04", "Technická místnost", 5.88, "pu"),
    ("1.05", "Chodba", 24.72, "pu"), ("1.06", "WC", 2.93, "tile"),
    ("1.07", "Koupelna", 8.91, "tile"), ("1.08", "Prádelna", 5.26, "pu"),
    ("1.09", "Koupelna", 6.27, "tile"), ("1.10", "Šatna", 9.45, "pu"),
    ("1.11", "Ložnice", 22.98, "pu"), ("1.12", "Pokoj", 13.67, "pu"),
    ("1.13", "Pokoj", 13.67, "pu"), ("1.14", "Pokoj", 13.67, "pu"),
    ("1.15", "Pracovna", 20.22, "pu"), ("1.16", "Garáž", 59.40, "gar"),
    ("1.17", "Chodba do garáže", 6.00, "gar"), ("1.18", "Sklad (venkovní)", 10.90, "skl"),
    ("1.19", "WC", 2.50, "tile"), ("1.20", "Koupelna", 4.19, "b120"),
    ("1.21", "Koupelna", 4.54, "tile"), ("1.22", "Chodba", 3.95, "pu"),
    ("1.23", "Pokoj+KK", 20.03, "pu"),
]

HDR_FILL = PatternFill("solid", fgColor="1F4E79"); HDR_FONT = Font(bold=True, color="FFFFFF")
NOTE_FILL = PatternFill("solid", fgColor="D6E3F0"); SUM_FILL = PatternFill("solid", fgColor="FCE4D6")

def header(ws, cols, note, widths):
    ws.append(cols)
    for c in ws[1]: c.fill, c.font = HDR_FILL, HDR_FONT; c.alignment = Alignment(wrap_text=True, vertical="top")
    ws.append([note]); ws.merge_cells(start_row=2, start_column=1, end_row=2, end_column=len(cols))
    ws["A2"].fill, ws["A2"].font = NOTE_FILL, Font(bold=True)
    ws.freeze_panes = "A3"
    for i, w in enumerate(widths): ws.column_dimensions[chr(65 + i)].width = w

def main():
    wb = Workbook(); ws = wb.active; ws.title = "Místnosti"
    cols = ["Č. m.", "Místnost", "Plocha m²", "Finál", "Finál mm", "Beton / potěr mm", "Hydroizolace mm",
            "Systémová deska mm", "EPS vypočteno mm", "EPS celkem mm", "Skladba EPS (vrstvy)", "Typ EPS",
            "EPS m² (plocha)", "EPS m³", "Celkem skladba mm", "Poznámka"]
    header(ws, cols, f"Skladba nad podkladním betonem = {TOTAL} mm (projekt D.1.1.08: A 251,2 / C 250,2). "
           "EPS = 250 − finál − beton − hydroizolace 8 − syst. deska 50, zaokrouhleno na prodejné desky.",
           [7, 22, 10, 18, 9, 10, 10, 10, 10, 10, 16, 11, 11, 9, 11, 70])
    totals = OrderedDict(); rows_csv = []
    for no, name, a, k in ROOMS:
        fin, f, conc, brd, layers, typ, note = KINDS[k]
        calc = TOTAL - f - conc - HI - brd; eps = sum(layers)
        m3 = a * eps / 1000
        ws.append([no, name, a, fin, f, conc, HI, brd, calc, eps, " + ".join(map(str, layers)), typ,
                   a, round(m3, 3), f + conc + HI + brd + eps, note])
        for t in layers:
            key = (typ, t); totals[key] = totals.get(key, 0) + a
    n = ws.max_row
    ws.append(["", "CELKEM", f"=SUM(C3:C{n})"] + [""] * 10 + [f"=SUM(N3:N{n})"])
    for c in ws[ws.max_row]: c.font = Font(bold=True); c.fill = SUM_FILL

    s = wb.create_sheet("Souhrn EPS")
    scols = ["Pořadí", "Typ EPS", "Tloušťka desky mm", "Plocha netto m²", "Objem netto m³", "Rezerva",
             "Plocha s rezervou m²", "Objem s rezervou m³", "Balení m²", "Počet balíků", "Zdroj balení", "Poznámka"]
    header(s, scols, "Součet po deskách (vícevrstvé skladby rozpadnuté na jednotlivé desky, kladené na vazbu).",
           [8, 12, 12, 13, 12, 9, 14, 14, 10, 11, 50, 50])
    for i, ((typ, t), a) in enumerate(sorted(totals.items()), 1):
        aw = a * (1 + WASTE); packs = math.ceil(aw / PACK_M2[t])
        r = [i, typ, t, round(a, 2), round(a * t / 1000, 3), f"{int(WASTE*100)} %", round(aw, 2),
             round(aw * t / 1000, 3), PACK_M2[t], packs, PACK_SRC,
             "Balení EPS 100 S převzato z EPS 150 (stejný formát) — ověřit u dodavatele." if typ == "EPS 100 S" else ""]
        s.append(r); rows_csv.append(r)
    m = s.max_row
    s.append(["", "CELKEM", "", f"=SUM(D3:D{m})", f"=SUM(E3:E{m})", "", f"=SUM(G3:G{m})", f"=SUM(H3:H{m})", "", f"=SUM(J3:J{m})"])
    for c in s[s.max_row]: c.font = Font(bold=True); c.fill = SUM_FILL

    meta = wb.create_sheet("Meta"); meta.append(["Položka", "Hodnota"])
    for c in meta[1]: c.fill, c.font = HDR_FILL, HDR_FONT
    for kv in [
        ("Regenerace", "python scripts/export_podlaha_eps.py"),
        ("Plochy", "D.1.4.1.03 (ZTI 1.NP) tabulka místností; součet 343,35 m² vs užitná plocha 363,73 m² v D.1.1.01 — rozdíl nevysvětlen, terasa 1.24 nezahrnuta"),
        ("Skladba A (projekt)", "dlažba 10 + tmel 3 + potěr 60 + PE 0,2 + EPS 100 Z 50+120 + AP Elastek 4 + AP Glastek 4 = 251,2 mm"),
        ("Skladba C garáž (projekt)", "epoxid 2 + potěr+KARI 160 + XPS 80 + 2× AP 4 = 250,2 mm"),
        ("Nová skladba dům (2026-10-14)", "hydroizolace 8 + EPS 100 S 80+50 (bílý, 2 vrstvy na vazbu) + syst. nopová deska 50 (30 EPS + 20 nopy) + potěr 58 + PU 4 = 250 mm"),
        ("Koupelny 1.06/1.07/1.09/1.19/1.21", "stejný EPS 80+50 (jedna výška EPS v celém domě); potěr 49 + lepidlo+dlažba 13 = 250 mm; min. potěr nad nopy 45 mm"),
        ("Koupelna 1.20 (spád)", "EPS jen 80 (1 vrstva); potěr 99 u dveří / ~56 u vpusti (spád 1,5 %, ~43 mm); dlažba 13. Výškový skok EPS jen ve spodní vrstvě, ve dveřích s dilatační spárou"),
        ("Proč 80+50 a ne 1×130", "Petr: vazba spár (2 vrstvy); cena materiálu stejná, práce o pár tisíc dražší"),
        ("Proč bílý EPS", "Šedý by dal U ~0,18 místo ~0,22 W/m²K, nevyplatí se u podlahy na terénu"),
        ("Nová skladba garáž+chodba 1.17", "PU 4 + beton 100 + syst. deska 50 + EPS 90 + hydroizolace 8 = 252"),
        ("Venkovní sklad 1.18", "beton 100 (placeholder) + EPS 140 + hydroizolace 8 = 248; předpoklad že 1.18 = venkovní sklad"),
        ("Zaokrouhlení", "Dům: tloušťka potěru dopočtena přesně na 250. Garáž 88→90 (+2), sklad 142→140 (−2) — vyrovná beton"),
        ("Rezerva", f"{int(WASTE*100)} % prořez"),
        ("Tepelná izolace", "Projekt měl v domě 170 mm EPS; nově 130 (1.20: 80) + syst. deska (nopová EPS ~20–30 mm). Ověřit vůči PENB."),
    ]: meta.append(list(kv))
    meta.column_dimensions["A"].width = 30; meta.column_dimensions["B"].width = 110
    wb.save("docs/podlaha-eps.xlsx")
    with open("docs/podlaha-eps-souhrn.csv", "w", newline="", encoding="utf-8") as f:
        w = csv.writer(f, delimiter=";"); w.writerow(scols); w.writerows(rows_csv)

if __name__ == "__main__":
    main()

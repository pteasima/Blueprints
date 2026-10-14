"""Ground-floor finish plan: one colour per floor build-up, labels for the trades.

Thicknesses come from ``docs/podlaha-eps.xlsx`` (sheet Místnosti). Room outlines
come from the wall footprints in ``inputs/ground_floor/ground-floor.yaml``.
The 1.07 shower outline is the shower slab in ``bathroom-1.07.yaml``.

    python scripts/export_podlaha_plan.py
"""

from __future__ import annotations

import math
from dataclasses import dataclass, field
from pathlib import Path

import numpy as np
from openpyxl import load_workbook
from scipy.ndimage import label as cc_label
from shapely import contains_xy, prepare
from shapely.geometry import LineString, Point, Polygon, box
from shapely.ops import unary_union

from yaml_ifc.joints import footprints
from yaml_ifc.yamlio import load as load_yaml


ROOT = Path(__file__).resolve().parents[2]
XLSX = ROOT / "docs" / "podlaha-eps.xlsx"
WALLS_PATH = ROOT / "inputs" / "ground_floor" / "ground-floor.yaml"
BATH107_PATH = ROOT / "inputs" / "ground_floor" / "bathroom-1.07.yaml"

# A3 landscape, millimetres. 1:125 puts the 45 m plan on the sheet with a
# band underneath for the labels that do not fit inside a room.
PAGE_W = 420.0
PAGE_H = 297.0
SCALE = 1000.0 / 125.0  # mm on paper per metre of building
PLAN_LEFT = 12.0
PLAN_TOP = 18.0

# Segmentation cell. 25 mm is 0.2 mm on the sheet.
CELL = 0.025

# Finished-floor stack the workbook builds to, millimetres.
TOTAL_MM = 250
# Shower fall copied from the 1.07 note (1.25 %), used only for the
# studio shower, which the workbook does not split out.
SHOWER_FALL = 0.0125

# Screed at the drain, from the workbook notes (the sheet stores the
# thickness at finished-floor zero in the beton column).
DRAIN_MM = {
    "1.20": 56,  # „99 mm u dveří → ~56 mm u vpusti“
    "1.07-shower": 53,  # „79 mm na nule → ~53 mm u vpusti“
}

# Room-name anchors from yaml-ifc samples/source/ground-floor.json
# (the plan the wall file was traced from). Sklad has no number on that
# drawing; the workbook calls it 1.18.
ANCHORS = {
    "1.01": (31.445, 11.7641),
    "1.02": (24.7665, 12.8049),
    "1.03": (17.1658, 14.285),
    "1.04": (17.2558, 12.17),
    "1.05": (12.2881, 8.9293),
    "1.06": (14.8765, 10.7882),
    "1.07": (12.0051, 10.7566),
    "1.08": (8.5927, 10.7783),
    "1.09": (5.397, 11.4726),
    "1.10": (2.3026, 10.737),
    "1.11": (2.0825, 5.4774),
    "1.12": (5.5164, 5.4877),
    "1.13": (8.6164, 5.4877),
    "1.14": (11.7164, 5.4877),
    "1.15": (15.6843, 5.9466),
    "1.16": (41.8353, 9.6555),
    "1.17": (35.5262, 10.6649),
    "1.19": (34.0205, 9.2205),
    "1.20": (31.6594, 6.9719),
    "1.21": (33.9354, 6.8991),
    "1.22": (34.0504, 4.9297),
    "1.23": (32.4451, 2.3228),
    "1.18": (36.3521, 7.9589),
}

# Passage with no wall (ground-floor.yaml, Petr 2026-10-05). A seal here
# only splits the two room polygons; it is not drawn.
GARAGE_PASSAGE = (37.85, 38.10, 10.05, 11.25)

# Distinct stacks. Colours stay light so the black label reads on them.
COLOURS = {
    "pu": "#F6E3B8",
    "tile": "#C5D9F2",
    "b120": "#F7C7A8",
    "sh107": "#A9DCC4",
    "sh121": "#E0D0F0",
    "gar": "#D5D0C8",
    "skl": "#E7E39A",
}
COLOUR_NAMES = {
    "pu": "písková",
    "tile": "modrá",
    "b120": "oranžová",
    "sh107": "zelená",
    "sh121": "lila",
    "gar": "šedá",
    "skl": "žlutá",
}
LEGEND = {
    "pu": "Dům — litý polyuretan",
    "tile": "Dlažba, potěr Harvalík",
    "b120": "1.20 celá ve spádu, potěr Harvalík",
    "sh107": "Sprcha 1.07, potěr Doskočil",
    "sh121": "Sprcha 1.21, 1×1 m, předpoklad",
    "gar": "Garáž a chodba 1.17 — EPS 150 S",
    "skl": "Sklad 1.18 — bez systémové desky",
}


@dataclass
class BuildUp:
    kind: str
    finish: str
    finish_mm: float
    screed_mm: float
    hydro_mm: float
    board_mm: float
    eps_layers: tuple[int, ...]
    eps_type: str
    screed_drain_mm: float | None = None
    assumption: str = ""

    @property
    def screed_trade(self) -> str:
        """Doskočil pours only the two shower areas. Harvalík pours the rest,
        including the whole of sloped bathroom 1.20."""
        if self.kind in ("sh107", "sh121"):
            return "Doskočil"
        return "Harvalík"

    def lines(self) -> list[str]:
        eps = "+".join(str(t) for t in self.eps_layers)
        rows = [f"hydroizolace {mm(self.hydro_mm)} ✓"]
        rows.append(f"{self.eps_type} {eps} mm (Rigl)")
        if self.board_mm:
            rows.append(f"Systémová deska {mm(self.board_mm)} (Vyslyšel)")
        screed = self._screed_line()
        if self.screed_trade == "Doskočil":
            rows.append(screed + ",")
            rows.append("hydroizolace + lepidlo + dlažba 13 mm (Doskočil)")
        else:
            rows.append(screed)
            if self.finish_mm and "dlaž" in self.finish:
                rows.append("hydroizolace + lepidlo + dlažba 13 mm (Doskočil)")
            elif self.finish_mm and "PU" in self.finish:
                rows.append(f"Litý polyuretan {mm(self.finish_mm)} (Hanzlík)")
        if self.kind == "skl":
            rows.append("bez systémové desky a bez nášlapu")
        if self.assumption:
            rows.append(self.assumption)
        return rows

    def _screed_line(self) -> str:
        who = self.screed_trade
        if self.screed_drain_mm is None:
            noun = "Litý beton" if who == "Harvalík" else "Beton"
            return f"{noun} {mm(self.screed_mm)} ({who})"
        noun = "Litý beton" if who == "Harvalík" else "Beton"
        return (
            f"{noun} {mm(self.screed_mm)} u nuly / {mm(self.screed_drain_mm)} u vpusti ({who})"
        )


def mm(value: float) -> str:
    if abs(value - round(value)) < 0.05:
        return f"{int(round(value))} mm"
    text = f"{value:.1f}".replace(".", ",")
    return f"{text} mm"


@dataclass
class Area:
    area_id: str
    room: str
    name: str
    kind: str
    polygon: Polygon
    lines: list[str]
    subtitle: str = ""
    assumption: bool = False


@dataclass
class Plan:
    areas: list[Area]
    walls: Polygon
    builds: dict[str, BuildUp]
    studio_shower_corner: str
    notes: list[str] = field(default_factory=list)


def _layers(text: str) -> tuple[int, ...]:
    return tuple(int(part) for part in str(text).replace(" ", "").split("+"))


def load_workbook_rows(path: Path | None = None) -> list[dict]:
    """One dict per Místnosti row. Two rows share 1.07 (room and shower)."""
    book = load_workbook(path or XLSX, data_only=True)
    sheet = book["Místnosti"]
    rows = []
    for record in sheet.iter_rows(min_row=3, values_only=True):
        if record[0] is None or not str(record[0]).startswith("1."):
            continue
        rows.append(
            {
                "room": str(record[0]),
                "name": str(record[1]),
                "area_m2": float(record[2]),
                "finish": str(record[3]),
                "finish_mm": float(record[4] or 0),
                "screed_mm": float(record[5] or 0),
                "hydro_mm": float(record[6] or 0),
                "board_mm": float(record[7] or 0),
                "eps_mm": float(record[9] or 0),
                "eps_layers": _layers(record[10]),
                "eps_type": str(record[11]),
                "note": str(record[15] or ""),
            }
        )
    return rows


def classify(row: dict) -> str:
    name = row["name"]
    if "sprchový" in name:
        return "sh107"
    if row["room"] == "1.20":
        return "b120"
    if row["board_mm"] == 0:
        return "skl"
    if row["eps_type"].startswith("EPS 150"):
        return "gar"
    if "PU" in row["finish"]:
        return "pu"
    return "tile"


def buildups(rows: list[dict] | None = None) -> dict[str, BuildUp]:
    rows = rows if rows is not None else load_workbook_rows()
    found: dict[str, BuildUp] = {}
    for row in rows:
        kind = classify(row)
        if kind in found:
            continue
        drain = None
        if kind == "b120":
            drain = float(DRAIN_MM["1.20"])
        elif kind == "sh107":
            drain = float(DRAIN_MM["1.07-shower"])
        found[kind] = BuildUp(
            kind=kind,
            finish=row["finish"],
            finish_mm=row["finish_mm"],
            screed_mm=row["screed_mm"],
            hydro_mm=row["hydro_mm"],
            board_mm=row["board_mm"],
            eps_layers=row["eps_layers"],
            eps_type=row["eps_type"],
            screed_drain_mm=drain,
        )
    found["sh121"] = studio_shower_buildup(found["sh107"], found["tile"])
    return found


def studio_shower_buildup(shower_107: BuildUp, bathroom: BuildUp) -> BuildUp:
    """1×1 m corner shower. Not a workbook row.

    The fall matches the 1.07 shower (1.25 %). EPS is the 1.07 shower stack
    (60+40) rather than the 60+60 of the rest of bathroom 1.21, so the screed
    at the drain stays in the same family as that shower. Both choices are
    assumptions: the workbook keeps the whole of 1.21 at 60+60 and 59 mm.
    """
    eps = shower_107.eps_layers
    screed_zero = TOTAL_MM - bathroom.hydro_mm - sum(eps) - shower_107.board_mm - bathroom.finish_mm
    drop = SHOWER_FALL * 1000.0
    return BuildUp(
        kind="sh121",
        finish=bathroom.finish,
        finish_mm=bathroom.finish_mm,
        screed_mm=screed_zero,
        hydro_mm=bathroom.hydro_mm,
        board_mm=shower_107.board_mm,
        eps_layers=eps,
        eps_type=shower_107.eps_type,
        screed_drain_mm=screed_zero - drop,
        assumption="předpoklad, není ve výkazu",
    )


def _axis_rect(x0, y0, x1, y1, ux, uy, thick) -> Polygon:
    px, py = -uy * thick / 2.0, ux * thick / 2.0
    return Polygon([(x0 + px, y0 + py), (x1 + px, y1 + py), (x1 - px, y1 - py), (x0 - px, y0 - py)])


def _wall_records(doc: dict) -> list[tuple]:
    records = []
    for wall in doc["walls"]:
        start, end = wall["Axis"]["Start"], wall["Axis"]["End"]
        sx, sy, ex, ey = float(start[0]), float(start[1]), float(end[0]), float(end[1])
        length = math.hypot(ex - sx, ey - sy)
        if length < 1e-9:
            continue
        thick = float(wall["Thickness"]) if wall.get("Thickness") is not None else 0.05
        records.append((wall["id"], sx, sy, ex, ey, length, thick, (ex - sx) / length, (ey - sy) / length))
    return records


def wall_geometry(doc: dict | None = None) -> tuple[Polygon, list[Polygon]]:
    """True wall footprints, plus seal polygons used only to separate rooms.

    Seals close jamb gaps and door-width breaks so each room floods on its
    own. They are not walls and are not drawn. The garage passage is sealed
    too, so 1.16 and 1.17 each get a label; the drawing leaves that opening
    empty.
    """
    doc = doc if doc is not None else load_yaml(WALLS_PATH)
    by_id: dict[str, Polygon] = {}
    for wall_id, ring in footprints(doc).items():
        polygon = Polygon(ring)
        if not polygon.is_valid:
            polygon = polygon.buffer(0)
        by_id[wall_id] = polygon
    records = _wall_records(doc)
    for record in records:
        if record[0] == "W-017" and record[0] not in by_id:
            _wid, sx, sy, ex, ey, _length, thick, ux, uy = record
            by_id["W-017"] = _axis_rect(sx, sy, ex, ey, ux, uy, thick)
    walls = unary_union(list(by_id.values()))
    seals = _seals(records, by_id)
    return walls, seals


def _seals(records: list[tuple], by_id: dict[str, Polygon]) -> list[Polygon]:
    items = [(record, by_id[record[0]]) for record in records if record[0] in by_id]
    seals = []
    for record, _poly in items:
        _wid, sx, sy, ex, ey, _length, thick, ux, uy = record
        others = unary_union([other for rec, other in items if rec[0] != record[0]])
        for px, py, sign in ((sx, sy, -1.0), (ex, ey, 1.0)):
            far = (px + ux * sign * 0.75, py + uy * sign * 0.75)
            # A thick probe, not the centreline: the next wall often stops
            # beside the axis (jambs, a change of thickness).
            probe = _axis_rect(px, py, far[0], far[1], ux, uy, thick + 0.04)
            hit = probe.intersection(others)
            if hit.is_empty:
                continue
            distance = Point(px, py).distance(hit)
            if distance < 0.015 or distance > 0.72:
                continue
            end = (px + ux * sign * distance, py + uy * sign * distance)
            seals.append(_axis_rect(px, py, end[0], end[1], ux, uy, thick))
    for index, left in enumerate(records):
        for right in records[index + 1 :]:
            if abs(left[7] * right[7] + left[8] * right[8]) < 0.96:
                continue
            if abs(left[6] - right[6]) > 0.26:
                continue
            vx, vy = right[1] - left[1], right[2] - left[2]
            if abs(vx * left[8] - vy * left[7]) > 0.16:
                continue
            if frozenset((left[0], right[0])) == frozenset(("W-065", "W-066")):
                continue
            best = None
            for ax, ay in ((left[1], left[2]), (left[3], left[4])):
                for bx, by in ((right[1], right[2]), (right[3], right[4])):
                    distance = math.hypot(ax - bx, ay - by)
                    if best is None or distance < best[0]:
                        best = (distance, ax, ay, bx, by)
            distance, ax, ay, bx, by = best
            if 0.04 < distance < 1.15:
                thick = min(left[6], right[6])
                seals.append(_axis_rect(ax, ay, bx, by, left[7], left[8], thick))
    x0, x1, y0, y1 = GARAGE_PASSAGE
    seals.append(box((x0 + x1) / 2.0 - 0.02, y0, (x0 + x1) / 2.0 + 0.02, y1))
    return seals


def _raster(geometry, origin, shape):
    minx, miny = origin
    ny, nx = shape
    xs = minx + (np.arange(nx) + 0.5) * CELL
    ys = miny + (np.arange(ny) + 0.5) * CELL
    grid_x, grid_y = np.meshgrid(xs, ys)
    prepare(geometry)
    return contains_xy(geometry, grid_x, grid_y)


def _polygon_from_mask(mask: np.ndarray, origin) -> Polygon | None:
    minx, miny = origin
    rectangles = []
    for iy in range(mask.shape[0]):
        row = mask[iy]
        ix = 0
        width = row.shape[0]
        while ix < width:
            if not row[ix]:
                ix += 1
                continue
            end = ix + 1
            while end < width and row[end]:
                end += 1
            rectangles.append(
                box(
                    minx + ix * CELL,
                    miny + iy * CELL,
                    minx + end * CELL,
                    miny + (iy + 1) * CELL,
                )
            )
            ix = end
    if not rectangles:
        return None
    polygon = unary_union(rectangles)
    if not polygon.is_valid:
        polygon = polygon.buffer(0)
    # The raster leaves a one-cell stair on straight walls. 45 mm is
    # under a pixel at 1:125 and turns those rooms back into rectangles.
    polygon = polygon.simplify(0.045, preserve_topology=True)
    if not polygon.is_valid:
        polygon = polygon.buffer(0)
    return polygon


def room_polygons(walls: Polygon, seals: list[Polygon]) -> dict[str, Polygon]:
    bounds = walls.bounds
    origin = (bounds[0] - 0.3, bounds[1] - 0.3)
    maxx, maxy = bounds[2] + 0.3, bounds[3] + 0.3
    nx = int(math.ceil((maxx - origin[0]) / CELL))
    ny = int(math.ceil((maxy - origin[1]) / CELL))
    blocked = _raster(unary_union([walls, *seals]), origin, (ny, nx))
    free = ~blocked
    structure = np.array([[0, 1, 0], [1, 1, 1], [0, 1, 0]], dtype=int)
    labels, _count = cc_label(free, structure=structure)
    # Components that touch the frame are the outside.
    frame = np.zeros_like(labels, dtype=bool)
    frame[0, :] = frame[-1, :] = frame[:, 0] = frame[:, -1] = True
    outside_ids = set(labels[frame].tolist())
    outside_ids.discard(0)

    def cell(x, y):
        return int((y - origin[1]) / CELL), int((x - origin[0]) / CELL)

    rooms = {}
    for room, (x, y) in ANCHORS.items():
        iy, ix = cell(x, y)
        if not (0 <= iy < ny and 0 <= ix < nx):
            raise ValueError(f"{room} anchor is outside the plan")
        if labels[iy, ix] == 0 or labels[iy, ix] in outside_ids:
            # Step to the nearest interior cell. Anchors sit on the
            # drawing text, which is occasionally on a wall.
            found = None
            for radius in range(1, 16):
                for dy in range(-radius, radius + 1):
                    for dx in range(-radius, radius + 1):
                        yy, xx = iy + dy, ix + dx
                        if 0 <= yy < ny and 0 <= xx < nx and labels[yy, xx] not in (0, *outside_ids):
                            found = (yy, xx)
                            break
                    if found:
                        break
                if found:
                    break
            if found is None:
                raise ValueError(f"{room} anchor ({x:.2f}, {y:.2f}) is not inside a room")
            iy, ix = found
        component = labels[iy, ix]
        if any(other == component for other in (labels[cell(*ANCHORS[name])] for name in rooms)):
            pass
        mask = labels == component
        polygon = _polygon_from_mask(mask, origin)
        if polygon is None or polygon.is_empty:
            raise ValueError(f"{room} produced no polygon")
        rooms[room] = polygon
    return rooms


def shower_107() -> Polygon:
    doc = load_yaml(BATH107_PATH)
    for slab in doc["slabs"]:
        if slab["id"] == "SLAB-SHOWER":
            return Polygon(slab["Footprint"])
    raise ValueError("bathroom 1.07 has no shower slab")


def _opening_center(doc: dict, opening_id: str) -> Point:
    walls = {wall["id"]: wall for wall in doc["walls"]}
    for opening in doc["openings"]:
        if opening["id"] != opening_id:
            continue
        host = walls[opening["VoidsElement"]]
        start, end = host["Axis"]["Start"], host["Axis"]["End"]
        sx, sy = float(start[0]), float(start[1])
        ex, ey = float(end[0]), float(end[1])
        length = math.hypot(ex - sx, ey - sy)
        along = float(opening["AlongAxis"]) + float(opening["Width"]) / 2.0
        return Point(sx + (ex - sx) / length * along, sy + (ey - sy) / length * along)
    raise ValueError(f"missing opening {opening_id}")


CORNER_NAMES = {
    "JZ": "jihozápadní",
    "JV": "jihovýchodní",
    "SZ": "severozápadní",
    "SV": "severovýchodní",
}


def studio_shower(room: Polygon, door: Point) -> tuple[Polygon, str]:
    """1.000 × 1.000 m square in the corner of bathroom 1.21 farthest from the door.

    The model has no shower in this room. The corner is whichever of the four
    has a full square inside the polygon and sits farthest from the door.
    """
    minx, miny, maxx, maxy = room.bounds
    candidates = {
        "JZ": box(minx, miny, minx + 1.0, miny + 1.0),
        "JV": box(maxx - 1.0, miny, maxx, miny + 1.0),
        "SZ": box(minx, maxy - 1.0, minx + 1.0, maxy),
        "SV": box(maxx - 1.0, maxy - 1.0, maxx, maxy),
    }
    ranked = []
    for name, square in candidates.items():
        piece = room.intersection(square)
        area = piece.area
        if area < 0.90:
            continue
        ranked.append((piece.centroid.distance(door), area, name, piece))
    if not ranked:
        raise ValueError("bathroom 1.21 has no corner that holds a 1×1 m shower")
    ranked.sort(key=lambda item: (item[0], item[1]), reverse=True)
    _distance, _area, name, piece = ranked[0]
    return piece, name


def assemble(rows: list[dict] | None = None) -> Plan:
    rows = rows if rows is not None else load_workbook_rows()
    builds = buildups(rows)
    by_room = {}
    for row in rows:
        by_room.setdefault(row["room"], []).append(row)
    doc = load_yaml(WALLS_PATH)
    walls, seals = wall_geometry(doc)
    rooms = room_polygons(walls, seals)
    areas: list[Area] = []
    studio_corner = ""

    def add(area_id, room, name, kind, polygon, subtitle=""):
        build = builds[kind]
        areas.append(
            Area(
                area_id=area_id,
                room=room,
                name=name,
                kind=kind,
                polygon=polygon,
                lines=build.lines(),
                subtitle=subtitle,
                assumption=kind == "sh121",
            )
        )

    for room, polygon in rooms.items():
        if room == "1.07":
            shower = polygon.intersection(shower_107())
            rest = polygon.difference(shower)
            add("1.07", "1.07", "Koupelna", "tile", rest, "mimo sprchu")
            add("1.07s", "1.07", "Koupelna", "sh107", shower, "sprcha")
            continue
        if room == "1.21":
            door = _opening_center(doc, "OP40")
            shower, studio_corner = studio_shower(polygon, door)
            rest = polygon.difference(shower)
            add("1.21", "1.21", "Koupelna garsonky", "tile", rest, "mimo sprchu")
            add(
                "1.21s",
                "1.21",
                "Koupelna garsonky",
                "sh121",
                shower,
                f"sprcha 1×1 m, roh {CORNER_NAMES[studio_corner]}",
            )
            continue
        row = by_room[room][0]
        name = "Pokoj+KK (garsonka)" if room == "1.23" else row["name"]
        add(room, room, name, classify(row), polygon, "")
    if not studio_corner:
        raise ValueError("bathroom 1.21 shower was not placed")
    notes = plan_notes(builds, studio_corner)
    return Plan(areas=areas, walls=walls, builds=builds, studio_shower_corner=studio_corner, notes=notes)


def plan_notes(builds: dict[str, BuildUp], corner: str) -> list[str]:
    shower = builds["sh121"]
    corner_name = CORNER_NAMES.get(corner, "neznámý")
    return [
        "Hydroizolace 8 mm je hotová (✓). Tloušťky EPS a potěru jsou z podlaha-eps.xlsx.",
        "Potěr lije Harvalík v celém domě, v koupelnách mimo sprchy a v celé spádované 1.20. Doskočil lije potěr jen ve sprše 1.07 a ve sprše 1×1 m v koupelně 1.21.",
        (
            f"Předpoklad: sprcha garsonky je čtverec 1000×1000 mm v {corner_name}m rohu koupelny 1.21 "
            "(nejdál od dveří OP40 v jižní stěně). Ve výkazu ani v modelu sprcha není. "
            f"Spád 1,25 % jako u sprchy 1.07, na 1,0 m tedy 12,5 mm. "
            f"{shower.eps_type} {'+'.join(str(t) for t in shower.eps_layers)} mm a potěr "
            f"{mm(shower.screed_mm)} u nuly / {mm(shower.screed_drain_mm)} u vpusti jsou předpoklad "
            "(výkaz má celou 1.21 jako EPS 60+60 a potěr 59 mm)."
        ),
        "Garáž a 1.17: EPS 150 S, beton 100 mm. Výkaz říká ověřit EPS 150 se statikem (projekt měl XPS 80).",
        "Sklad 1.18 je nevytápěný: bez systémové desky a bez nášlapu. Beton 100 mm je ve výkazu zástupná tloušťka.",
        "Terasa ve výkazu skladeb není. Průchod 1.17–1.16 je bez stěny, obě plochy mají tutéž skladbu.",
    ]


def _escape(text: str) -> str:
    return (
        text.replace("&", "&amp;")
        .replace("<", "&lt;")
        .replace(">", "&gt;")
        .replace('"', "&quot;")
    )


def _rings(polygon: Polygon):
    if polygon.is_empty:
        return
    geoms = [polygon] if polygon.geom_type == "Polygon" else list(polygon.geoms)
    for geom in geoms:
        if geom.is_empty:
            continue
        yield [geom.exterior, *geom.interiors]


def render_svg(plan: Plan) -> str:
    bounds = plan.walls.bounds
    minx, miny, maxx, maxy = bounds
    plan_w = (maxx - minx) * SCALE
    plan_h = (maxy - miny) * SCALE

    def px(x: float) -> float:
        return PLAN_LEFT + (x - minx) * SCALE

    def py(y: float) -> float:
        return PLAN_TOP + (maxy - y) * SCALE

    def path(polygon: Polygon) -> str:
        parts = []
        for ring_group in _rings(polygon):
            for ring in ring_group:
                coords = list(ring.coords)
                commands = [f"M {px(coords[0][0]):.2f} {py(coords[0][1]):.2f}"]
                commands.extend(f"L {px(x):.2f} {py(y):.2f}" for x, y in coords[1:])
                commands.append("Z")
                parts.append(" ".join(commands))
        return " ".join(parts)

    body = [
        f'<svg xmlns="http://www.w3.org/2000/svg" width="{PAGE_W}mm" height="{PAGE_H}mm" viewBox="0 0 {PAGE_W} {PAGE_H}">',
        "<style>text { font-family: 'DejaVu Sans', sans-serif; }</style>",
        f'<rect width="{PAGE_W}" height="{PAGE_H}" fill="#fbfaf7"/>',
        '<text x="12" y="11.2" font-size="5.2" font-weight="700" fill="#1c1916">RD Šíma · 1.NP · skladby podlah pro řemesla</text>',
        '<text x="248" y="11.2" font-size="3.1" fill="#444">A3 · 1:125 · +Y sever · tloušťky z podlaha-eps.xlsx</text>',
    ]
    order = ["pu", "tile", "b120", "sh107", "gar", "skl", "sh121"]
    for area in sorted(plan.areas, key=lambda item: order.index(item.kind)):
        fill = COLOURS[area.kind]
        extra = ""
        if area.assumption:
            extra = ' stroke="#6a3d91" stroke-width="0.45" stroke-dasharray="1.1 0.7"'
        body.append(f'<path d="{path(area.polygon)}" fill="{fill}"{extra}/>')
    body.append(f'<path d="{path(plan.walls)}" fill="#2e2a26"/>')

    # North arrow, in the title margin so it does not sit on the garage.
    ax, ay = PAGE_W - 14, 3.2
    body.append(
        f'<polygon points="{ax:.1f},{ay + 10:.1f} {ax - 1.5:.1f},{ay + 4:.1f} {ax + 1.5:.1f},{ay + 4:.1f}" fill="#1c1916"/>'
    )
    body.append(f'<line x1="{ax:.1f}" y1="{ay + 10:.1f}" x2="{ax:.1f}" y2="{ay:.1f}" stroke="#1c1916" stroke-width="0.35"/>')
    body.append(f'<text x="{ax + 2.2:.1f}" y="{ay + 3:.1f}" font-size="2.6" font-weight="700">S</text>')

    band_top = PLAN_TOP + plan_h + 7.0
    inside, leaders = _place_labels(plan, px, py, band_top)
    for item in inside:
        body.extend(_label_block(item, inline=True))
    obstacles = [_callout_box(item) for item in leaders]
    for item in leaders:
        body.extend(_leader(item, obstacles))
    legend_y = max((item["y"] - item["line_h"] + item["h"] for item in leaders), default=band_top) + 4.0
    body.extend(_legend_and_notes(plan, legend_y))
    body.append("</svg>")
    return "\n".join(body)


def _place_labels(plan: Plan, px, py, band_top: float):
    """Full layer list inside the room when the polygon can hold it."""
    font = 1.85
    line_h = 2.35
    inside = []
    pending = []
    for area in sorted(plan.areas, key=lambda item: item.room):
        title = area.room if not area.subtitle else f"{area.room} {area.subtitle}"
        if area.name and area.area_id == area.room:
            title = f"{area.room} {area.name}"
        lines = [title, *area.lines]
        placed = _try_inside(area.polygon, lines, font, line_h, px, py)
        if placed is not None:
            inside.append(placed)
        else:
            pending.append((area, lines))
    # Southern rooms sit next to the callout band, so their leaders stay short
    # and do not cross the row below.
    pending.sort(key=lambda item: -py(_pole(item[0].polygon).y))
    leaders = _pack_leaders(pending, px, py, band_top, font=2.15, line_h=2.65)
    # Room number stays on the plan when the full label sits in the margin.
    for area, _lines in pending:
        point = _pole(area.polygon)
        inside.append(
            {
                "x": px(point.x),
                "y": py(point.y),
                "lines": [area.room if not area.subtitle else f"{area.room}"],
                "size": 2.5,
                "line_h": 3.0,
                "weight": "700",
                "anchor": "middle",
                "fill": "#1c1916",
                "box": False,
            }
        )
        short = area.subtitle.split(",")[0] if area.subtitle else ""
        if short and point.distance(area.polygon.boundary) > 0.42:
            inside.append(
                {
                    "x": px(point.x),
                    "y": py(point.y) + 2.8,
                    "lines": [short],
                    "size": 1.7,
                    "line_h": 2.1,
                    "weight": "400",
                    "anchor": "middle",
                    "fill": "#333",
                    "box": False,
                }
            )
    return inside, leaders


def _pole(polygon: Polygon) -> Point:
    minx, miny, maxx, maxy = polygon.bounds
    step = max(0.12, math.sqrt(polygon.area) / 18.0)
    best = polygon.representative_point()
    best_d = best.distance(polygon.boundary)
    y = miny + step / 2.0
    while y < maxy:
        x = minx + step / 2.0
        while x < maxx:
            point = Point(x, y)
            if polygon.contains(point):
                distance = point.distance(polygon.boundary)
                if distance > best_d:
                    best, best_d = point, distance
            x += step
        y += step
    return best


def _try_inside(polygon, lines, font, line_h, px, py):
    point = _pole(polygon)
    # Wider lines first. A bathroom can take a narrow wrap; the living room
    # should keep the lines intact.
    for chars in (42, 34, 28, 22, 18):
        wrapped = _wrap([lines[0], *lines[1:]], chars)
        width_mm = max(len(line) for line in wrapped) * font * 0.56 + 1.6
        height_mm = len(wrapped) * line_h + 1.4
        rect = box(
            point.x - (width_mm / SCALE) / 2.0,
            point.y - (height_mm / SCALE) / 2.0,
            point.x + (width_mm / SCALE) / 2.0,
            point.y + (height_mm / SCALE) / 2.0,
        )
        if polygon.contains(rect):
            return {
                "x": px(point.x),
                "y": py(point.y) - height_mm / 2.0 + line_h * 0.85,
                "lines": wrapped,
                "size": font,
                "line_h": line_h,
                "weight": "400",
                "anchor": "middle",
                "fill": "#1c1916",
                "box": True,
                "box_w": width_mm,
                "box_h": height_mm,
                "cx": px(point.x),
                "cy": py(point.y),
            }
    return None


def _wrap(lines: list[str], chars: int) -> list[str]:
    wrapped = []
    for line in lines:
        if len(line) <= chars:
            wrapped.append(line)
            continue
        current = ""
        for word in line.split(" "):
            trial = word if not current else f"{current} {word}"
            if len(trial) <= chars:
                current = trial
            else:
                if current:
                    wrapped.append(current)
                current = word
        if current:
            wrapped.append(current)
    return wrapped


def _pack_leaders(pending, px, py, top, font, line_h):
    """Callouts under the plan, left to right, in room order."""
    if not pending:
        return []
    placed = []
    cursor_x = 12.0
    cursor_y = top
    row_h = 0.0
    for area, lines in pending:
        wrapped = _wrap(lines, 36)
        width = max(len(line) for line in wrapped) * font * 0.54 + 2.4
        height = len(wrapped) * line_h + 1.6
        if cursor_x + width > PAGE_W - 8:
            cursor_x = 12.0
            cursor_y += row_h + 1.6
            row_h = 0.0
        target = _pole(area.polygon)
        placed.append(
            {
                "x": cursor_x + 1.2,
                "y": cursor_y + line_h,
                "w": width,
                "h": height,
                "lines": wrapped,
                "size": font,
                "line_h": line_h,
                "tx": px(target.x),
                "ty": py(target.y),
                "colour": COLOURS[area.kind],
                "assumption": area.assumption,
            }
        )
        cursor_x += width + 2.0
        row_h = max(row_h, height)
    return placed


def _label_block(item, inline: bool) -> list[str]:
    parts = []
    if item.get("box"):
        parts.append(
            f'<rect x="{item["cx"] - item["box_w"] / 2:.2f}" y="{item["cy"] - item["box_h"] / 2:.2f}" '
            f'width="{item["box_w"]:.2f}" height="{item["box_h"]:.2f}" rx="0.6" '
            f'fill="#ffffff" fill-opacity="0.88"/>'
        )
    parts.append(_text_lines(item["x"], item["y"], item["lines"], item["size"], item["line_h"], item["anchor"], item.get("weight", "400")))
    return parts


def _text_lines(x, y, lines, size, line_h, anchor, weight) -> str:
    chunks = [f'<text x="{x:.2f}" y="{y:.2f}" font-size="{size}" font-weight="{weight}" text-anchor="{anchor}" fill="#1c1916">']
    for index, line in enumerate(lines):
        dy = "0" if index == 0 else f"{line_h}"
        weight_attr = ' font-weight="700"' if index == 0 else ""
        chunks.append(f'<tspan x="{x:.2f}" dy="{dy}"{weight_attr}>{_markup(line)}</tspan>')
    chunks.append("</text>")
    return "".join(chunks)


def _markup(line: str) -> str:
    escaped = _escape(line)
    return escaped.replace("✓", '<tspan fill="#1a7a34" font-weight="700">✓</tspan>')


def _callout_box(item):
    top = item["y"] - item["line_h"]
    return box(item["x"] - 1.0, top, item["x"] - 1.0 + item["w"], top + item["h"])


def _leader(item, obstacles) -> list[str]:
    """A straight leader when it misses the other callouts. Otherwise the room
    number on the plan is the link; a line through another label is worse."""
    stroke = "#6a3d91" if item["assumption"] else "#5c564e"
    top = item["y"] - item["line_h"]
    own = _callout_box(item)
    start = (own.centroid.x, top)
    end = (item["tx"], item["ty"])
    line = LineString([start, end])
    clear = True
    for other in obstacles:
        if other.equals(own):
            continue
        piece = other.intersection(line)
        if not piece.is_empty and piece.length > 0.6:
            clear = False
            break
    parts = []
    if clear:
        parts.append(
            f'<line x1="{start[0]:.2f}" y1="{start[1]:.2f}" x2="{end[0]:.2f}" y2="{end[1]:.2f}" '
            f'stroke="{stroke}" stroke-width="0.22"/>'
        )
    parts.append(f'<circle cx="{end[0]:.2f}" cy="{end[1]:.2f}" r="0.55" fill="{stroke}"/>')
    parts.append(
        f'<rect x="{item["x"] - 1.0:.2f}" y="{top:.2f}" width="{item["w"]:.2f}" height="{item["h"]:.2f}" '
        f'rx="0.5" fill="#ffffff" stroke="{item["colour"]}" stroke-width="0.8"/>'
    )
    parts.append(_text_lines(item["x"], item["y"], item["lines"], item["size"], item["line_h"], "start", "400"))
    return parts


def _legend_and_notes(plan: Plan, y: float) -> list[str]:
    """Legend, then the notes. `y` is just below the callout band."""
    parts = []
    chip_y = y + 3.2
    parts.append(f'<text x="12" y="{y + 1.2:.1f}" font-size="2.6" font-weight="700" fill="#1c1916">Legenda</text>')
    x = 32.0
    for kind in ("pu", "tile", "b120", "sh107", "sh121", "gar", "skl"):
        label = LEGEND[kind]
        width = 4.2 + 1.4 + len(label) * 1.18
        if x + width > PAGE_W - 8:
            x = 12.0
            chip_y += 5.0
        parts.append(
            f'<rect x="{x:.1f}" y="{chip_y:.1f}" width="4.2" height="3.2" fill="{COLOURS[kind]}" stroke="#444" stroke-width="0.2"/>'
        )
        parts.append(
            f'<text x="{x + 5.4:.1f}" y="{chip_y + 2.55:.1f}" font-size="2.2" fill="#1c1916">{_escape(label)}</text>'
        )
        x += width + 2.4
    note_y = chip_y + 7.0
    for note in plan.notes:
        for piece in _wrap_note(note, 175):
            parts.append(f'<text x="12" y="{note_y:.2f}" font-size="2.15" fill="#333">{_markup(piece)}</text>')
            note_y += 2.55
    return parts


def _wrap_note(text: str, chars: int) -> list[str]:
    return _wrap([text], chars)


def export(directory: Path | None = None) -> dict[str, Path]:
    import cairosvg

    directory = directory or (ROOT / "docs")
    directory.mkdir(parents=True, exist_ok=True)
    plan = assemble()
    svg = render_svg(plan)
    stem = directory / "podlaha-1np-skladby"
    svg_path = stem.with_suffix(".svg")
    png_path = stem.with_suffix(".png")
    pdf_path = stem.with_suffix(".pdf")
    svg_path.write_text(svg, encoding="utf-8")
    png_px = int(PAGE_W / 25.4 * 200)
    cairosvg.svg2png(bytestring=svg.encode("utf-8"), write_to=str(png_path), output_width=png_px)
    cairosvg.svg2pdf(bytestring=svg.encode("utf-8"), write_to=str(pdf_path))
    return {"svg": svg_path, "png": png_path, "pdf": pdf_path, "plan": plan}

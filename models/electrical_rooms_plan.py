"""Top-view plan per room with device ids, and the per-room notes page.

Reads ``inputs/ground_floor/electrical-<room>.yaml`` (with edit-mode
overrides) and the walls of ``ground-floor.yaml``. Writes
``docs/previews/electrical/<room>.svg`` and ``.png`` and
``docs/electrical/rooms/<room>.md``.

    python models/electrical_rooms_plan.py
"""

from __future__ import annotations

import html
import math
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))

from yaml_ifc.yamlio import load as load_yaml  # noqa: E402

from electrical_rooms import (  # noqa: E402
    _pset_props,
    device_records,
    load_document,
    room_of,
    source_paths,
    strip_runs,
)

REPO = Path(__file__).resolve().parents[1]
WALLS_PATH = REPO / "inputs" / "ground_floor" / "ground-floor.yaml"
PREVIEWS = REPO / "docs" / "previews" / "electrical"
ROOM_DOCS = REPO / "docs" / "electrical" / "rooms"

FILL = {
    "light": "#e6b20a",
    "switch": "#2a78dc",
    "sensor": "#1e9a55",
    "outlet": "#e07a28",
    "socket": "#d64545",
    "actuator": "#8a4db8",
}
SCALE = 90.0
PAD = 30.0


def _kind(record: dict) -> str:
    if record["list"] == "outlets" and record.get("ObjectType") == "Socket":
        return "socket"
    return record["label"]


def _walls() -> tuple[list[dict], list[dict]]:
    doc = load_yaml(WALLS_PATH)
    windows = {item["FillsOpening"] for item in doc.get("windows") or []}
    openings = [{**item, "window": item["id"] in windows} for item in doc.get("openings") or []]
    return doc.get("walls") or [], openings


def _wall_rect(wall: dict) -> list[tuple[float, float]] | None:
    (x0, y0), (x1, y1) = wall["Axis"]["Start"], wall["Axis"]["End"]
    t = float(wall.get("Thickness") or 0.05)
    length = math.hypot(x1 - x0, y1 - y0)
    if length < 1e-9:
        return None
    ux, uy = (x1 - x0) / length, (y1 - y0) / length
    nx, ny = -uy * t / 2, ux * t / 2
    return [(x0 - nx, y0 - ny), (x1 - nx, y1 - ny), (x1 + nx, y1 + ny), (x0 + nx, y0 + ny)]


def _opening_line(wall: dict, opening: dict) -> tuple[tuple[float, float], tuple[float, float]]:
    (x0, y0), (x1, y1) = wall["Axis"]["Start"], wall["Axis"]["End"]
    length = math.hypot(x1 - x0, y1 - y0)
    ux, uy = (x1 - x0) / length, (y1 - y0) / length
    a0 = float(opening["AlongAxis"])
    a1 = a0 + float(opening["Width"])
    return (x0 + ux * a0, y0 + uy * a0), (x0 + ux * a1, y0 + uy * a1)


def footprint(record: dict) -> list[tuple[float, float]] | None:
    origin = record.get("Origin")
    if origin is None or record.get("Width") is None:
        return None
    ox, oy = float(origin[0]), float(origin[1])
    rx, ry = record.get("RefDirection") or (1.0, 0.0)
    w, d = float(record["Width"]), float(record["Depth"])
    yx, yy = -ry, rx
    return [(ox, oy), (ox + rx * w, oy + ry * w), (ox + rx * w + yx * d, oy + ry * w + yy * d), (ox + yx * d, oy + yy * d)]


def centre_z(record: dict) -> float | None:
    if record.get("Elevation") is None:
        return None
    return float(record["Elevation"]) + float(record.get("Height") or 0.0) / 2.0


def _view(records: list[dict]) -> tuple[float, float, float, float]:
    xs, ys = [], []
    for record in records:
        for x, y in footprint(record) or []:
            xs.append(x)
            ys.append(y)
        for run in strip_runs(record):
            for x, y, _z in run:
                xs.append(x)
                ys.append(y)
    return min(xs) - 1.2, min(ys) - 1.0, max(xs) + 1.2, max(ys) + 1.0


def render_svg(room: str, doc: dict) -> str:
    records = device_records(doc)
    xmin, ymin, xmax, ymax = _view(records)

    def sx(x: float) -> float:
        return PAD + (x - xmin) * SCALE

    def sy(y: float) -> float:
        return PAD + (ymax - y) * SCALE

    width = PAD * 2 + (xmax - xmin) * SCALE
    height = PAD * 2 + (ymax - ymin) * SCALE + 40
    out = [
        f'<svg xmlns="http://www.w3.org/2000/svg" width="{width:.0f}" height="{height:.0f}" '
        f'viewBox="0 0 {width:.0f} {height:.0f}" font-family="DejaVu Sans, sans-serif">',
        f'<rect width="{width:.0f}" height="{height:.0f}" fill="#f7f4ee"/>',
    ]
    walls, openings = _walls()
    by_id = {wall["id"]: wall for wall in walls}
    for wall in walls:
        rect = _wall_rect(wall)
        if rect is None:
            continue
        if max(x for x, _y in rect) < xmin or min(x for x, _y in rect) > xmax or max(y for _x, y in rect) < ymin or min(y for _x, y in rect) > ymax:
            continue
        pts = " ".join(f"{sx(x):.1f},{sy(y):.1f}" for x, y in rect)
        out.append(f'<polygon points="{pts}" fill="#8f8a80" stroke="#5d584f" stroke-width="0.6"/>')
    for opening in openings:
        wall = by_id.get(opening["VoidsElement"])
        if wall is None:
            continue
        (ax, ay), (bx, by) = _opening_line(wall, opening)
        colour = "#9fd3ef" if opening["window"] else "#f7f4ee"
        width_px = float(wall.get("Thickness") or 0.05) * SCALE + 1
        out.append(
            f'<line x1="{sx(ax):.1f}" y1="{sy(ay):.1f}" x2="{sx(bx):.1f}" y2="{sy(by):.1f}" '
            f'stroke="{colour}" stroke-width="{width_px:.1f}"/>'
        )
        mx, my = (ax + bx) / 2, (ay + by) / 2
        if xmin < mx < xmax and ymin < my < ymax:
            out.append(f'<text x="{sx(mx):.1f}" y="{sy(my) + 3:.1f}" font-size="8" fill="#3d6d86" text-anchor="middle">{opening["id"]}</text>')
    taken: list[tuple[float, float, float, float]] = []
    labels = []
    for record in records:
        kind = _kind(record)
        colour = FILL[kind]
        runs = strip_runs(record)
        if runs:
            for run in runs:
                pts = " ".join(f"{sx(x):.1f},{sy(y):.1f}" for x, y, _z in run)
                out.append(f'<polyline points="{pts}" fill="none" stroke="{colour}" stroke-width="4" stroke-opacity="0.8"/>')
            x, y, z = runs[0][len(runs[0]) // 2]
            labels.append((sx(x), sy(y), record["id"], f"z {z:.2f}", colour))
            continue
        fp = footprint(record)
        if fp is None:
            continue
        pts = " ".join(f"{sx(x):.1f},{sy(y):.1f}" for x, y in fp)
        dash = ' stroke-dasharray="3,2"' if record.get("Elevation", 0) > 2.0 and kind != "light" else ""
        out.append(f'<polygon points="{pts}" fill="{colour}" fill-opacity="0.85" stroke="#222" stroke-width="0.8"{dash}/>')
        cx = sum(x for x, _y in fp) / 4
        cy = sum(y for _x, y in fp) / 4
        labels.append((sx(cx), sy(cy), record["id"], f"z {centre_z(record):.2f}", colour))
    for px, py, text, sub, colour in labels:
        w = 6.2 * max(len(text), len(sub)) + 6
        h = 22
        best = None
        for r in (14, 26, 40, 56, 74):
            for ang in range(0, 360, 30):
                lx = px + r * math.cos(math.radians(ang)) - (0 if math.cos(math.radians(ang)) >= 0 else w)
                ly = py - r * math.sin(math.radians(ang)) - h / 2
                box = (lx, ly, lx + w, ly + h)
                if box[0] < 0 or box[1] < 0 or box[2] > width or box[3] > height - 40:
                    continue
                if not any(box[0] < t[2] and t[0] < box[2] and box[1] < t[3] and t[1] < box[3] for t in taken):
                    best = box
                    break
            if best:
                break
        if best is None:
            best = (px + 8, py - 11, px + 8 + w, py + 11)
        taken.append(best)
        lx, ly = best[0], best[1]
        ax = min(max(px, best[0]), best[2])
        ay = min(max(py, best[1]), best[3])
        out.append(f'<line x1="{px:.1f}" y1="{py:.1f}" x2="{ax:.1f}" y2="{ay:.1f}" stroke="{colour}" stroke-width="0.8"/>')
        out.append(f'<rect x="{lx:.1f}" y="{ly:.1f}" width="{w:.1f}" height="{h}" fill="white" fill-opacity="0.85" stroke="{colour}" stroke-width="0.6" rx="2"/>')
        out.append(f'<text x="{lx + 3:.1f}" y="{ly + 9:.1f}" font-size="9.5" font-weight="bold" fill="#1c1c1c">{html.escape(text)}</text>')
        out.append(f'<text x="{lx + 3:.1f}" y="{ly + 19:.1f}" font-size="8.5" fill="#555">{html.escape(sub)}</text>')
    y0 = height - 22
    x = PAD
    for kind, colour in FILL.items():
        out.append(f'<rect x="{x:.0f}" y="{y0 - 9:.0f}" width="12" height="12" fill="{colour}"/>')
        out.append(f'<text x="{x + 16:.0f}" y="{y0 + 1:.0f}" font-size="11" fill="#333">{kind}</text>')
        x += 90
    name = (doc.get("spaces") or [{}])[0].get("Name") or room
    out.append(
        f'<text x="{x + 10:.0f}" y="{y0 + 1:.0f}" font-size="11" fill="#333">{html.escape(name)} · north up · '
        f'grid {xmin:.1f}…{xmax:.1f} × {ymin:.1f}…{ymax:.1f} m · z = centre height</text>'
    )
    out.append("</svg>")
    return "\n".join(out)


def render_png(svg: str, path: Path) -> None:
    import cairosvg

    cairosvg.svg2png(bytestring=svg.encode("utf-8"), write_to=str(path), output_width=1800)


def _cell(value) -> str:
    text = "" if value is None else str(value)
    return text.replace("|", "\\|").replace("\n", " ")


def room_markdown(room: str, doc: dict) -> str:
    records = device_records(doc)
    name = (doc.get("spaces") or [{}])[0].get("Name") or room
    lines = [
        f"# {name}: field devices",
        "",
        f"Source of truth: [`inputs/ground_floor/electrical-{room}.yaml`](../../../inputs/ground_floor/electrical-{room}.yaml). "
        "This page is generated from it by `python models/electrical_rooms_plan.py`; edit the YAML, not this page.",
        "",
        "Sources: FixturePlan.pdf (Petr's marks on the floor plan) for positions, CableSchedule.xlsx sheet Soupis for cables. "
        "House rules: [PlanNotes.md](../PlanNotes.md). Naming: [Rooms.md](../Rooms.md). All open questions: [Questions.md](../Questions.md).",
        "",
        f"![{name} top view](../../previews/electrical/{room}.png)",
        "",
        "| Id | Cable | Code | Type | x | y | z (centre) | Notes |",
        "| --- | --- | --- | --- | --- | --- | --- | --- |",
    ]
    questions = []
    for record in records:
        props = _pset_props(record)
        fp = footprint(record)
        if fp:
            x = sum(p[0] for p in fp) / 4
            y = sum(p[1] for p in fp) / 4
            pos = (f"{x:.2f}", f"{y:.2f}", f"{centre_z(record):.2f}")
        elif strip_runs(record):
            pos = ("path", "", "")
        elif props.get("InSwitchBox"):
            pos = (f"in {props['InSwitchBox']}", "", "")
        else:
            pos = ("—", "", "")
        cable = props.get("CableNumber")
        if cable is None and props.get("PlanCable") is not None:
            cable = f"? (plan {props['PlanCable']})"
        notes = record.get("Description") or ""
        if props.get("Controls"):
            notes += f" Controls: {props['Controls']}."
        lines.append(
            f"| `{record['id']}` | {_cell(cable)} | {_cell(props.get('DeviceCode'))} | {_cell(record.get('ObjectType'))} | "
            f"{pos[0]} | {pos[1]} | {pos[2]} | {_cell(notes)} |"
        )
        if props.get("Question"):
            questions.append(f"- `{record['id']}`: {props['Question']}")
    lines += ["", "## Open questions", ""]
    lines += questions or ["None for this room."]
    lines.append("")
    return "\n".join(lines)


def write_outputs() -> list[Path]:
    PREVIEWS.mkdir(parents=True, exist_ok=True)
    ROOM_DOCS.mkdir(parents=True, exist_ok=True)
    written = []
    for path in source_paths():
        room = room_of(path)
        doc = load_document(path)
        svg = render_svg(room, doc)
        svg_path = PREVIEWS / f"{room}.svg"
        svg_path.write_text(svg, encoding="utf-8")
        render_png(svg, svg_path.with_suffix(".png"))
        md_path = ROOM_DOCS / f"{room}.md"
        md_path.write_text(room_markdown(room, doc), encoding="utf-8")
        written += [svg_path, svg_path.with_suffix(".png"), md_path]
    return written


if __name__ == "__main__":
    for item in write_outputs():
        print(item.relative_to(REPO))

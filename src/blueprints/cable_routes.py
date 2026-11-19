"""Cable routes: the guessed polylines, Petr's edits, and the viewer file.

Source: ``inputs/ground_floor/cable-routes.yaml`` (boards and routes, written
by ``scripts/guess_cable_routes.py``). Petr's corrections from the viewer edit
mode are the ``cables`` section of ``inputs/ground_floor/fixture_overrides.json``
(``blueprints.fixture_overrides``). Rules, assumptions and the round trip:
``docs/electrical/CableRoutes.md``.

A route resolves in this order:

1. An override for the route id is the whole polyline, absolute. The viewer
   writes one for every route Petr edited and for every route whose end
   fixture he moved, so it already holds the moved end.
2. Otherwise the YAML points, and the naive end rule: when the fixture at an
   end of the route (``to``/``toBox`` for the last point, ``from``/``fromBox``
   for the first) has a committed move in the fixture overrides, that end
   point moves by the same vector. Only the end vertex moves, so the last
   segment may stop being axis-aligned (Petr, 2026-11-19: "Maybe naively
   moving the last cable segment is fine and you can readjust it to make
   physical sense after I send you the edits").

    python -m blueprints.cable_routes          # write docs/models/ground_floor.cables.json
    python -m blueprints.cable_routes --report # print modelled vs schedule lengths
"""

from __future__ import annotations

import json
import math
import sys
from pathlib import Path
from typing import Any

import yaml

from blueprints.fixture_overrides import DEVICE_LISTS, load_overrides

REPO_ROOT = Path(__file__).resolve().parents[2]
INPUTS = REPO_ROOT / "inputs" / "ground_floor"
ROUTES_PATH = INPUTS / "cable-routes.yaml"
MODEL_ID = "ground_floor"
VIEWER_JSON = REPO_ROOT / "docs" / "models" / f"{MODEL_ID}.cables.json"
# A modelled length further off the schedule than this is flagged.
FLAG_ABS_M = 2.0
FLAG_REL = 0.25


def load_routes(path: Path | None = None) -> dict[str, Any]:
    source = path or ROUTES_PATH
    if not source.is_file():
        return {"version": 1, "boards": [], "routes": []}
    data = yaml.safe_load(source.read_text(encoding="utf-8")) or {}
    if data.get("version") != 1:
        raise ValueError(f"{source}: unsupported cable routes version {data.get('version')!r}")
    ids = set()
    for route in data.get("routes") or []:
        rid = str(route["id"])
        if rid in ids:
            raise ValueError(f"{source}: duplicate route id {rid}")
        ids.add(rid)
        if len(route.get("points") or []) < 2:
            raise ValueError(f"{source}: route {rid} needs at least two points")
    return {"version": 1, "boards": data.get("boards") or [], "routes": data.get("routes") or []}


def _raw_fixtures() -> dict[str, dict]:
    """Every fixture in the room YAML, without overrides, keyed by id."""
    from yaml_ifc.yamlio import load as load_yaml_ifc

    out: dict[str, dict] = {}
    for path in [INPUTS / "bedroom-1.11.yaml", *sorted(INPUTS.glob("electrical-*.yaml"))]:
        if not path.is_file():
            continue
        doc = load_yaml_ifc(path)
        for key in DEVICE_LISTS:
            for element in doc.get(key) or []:
                out[str(element["id"])] = element
    return out


def fixture_delta(fixture_id: str | None, fixtures: dict, raw: dict) -> list[float]:
    """The committed move of a fixture, as [dx, dy, dz] metres."""
    entry = fixtures.get(str(fixture_id)) if fixture_id else None
    if not entry or entry.get("delete") or entry.get("add"):
        return [0.0, 0.0, 0.0]
    element = raw.get(str(fixture_id)) or {}
    if element.get("Origin") is not None and ("Origin" in entry or "Elevation" in entry):
        ox, oy = element["Origin"][:2]
        oz = float(element.get("Elevation") or 0.0)
        nx, ny = (entry.get("Origin") or [ox, oy])[:2]
        nz = float(entry.get("Elevation", oz))
        return [float(nx) - ox, float(ny) - oy, nz - oz]
    move = entry.get("Move")
    if move is not None:
        return [float(v) for v in (list(move) + [0.0, 0.0, 0.0])[:3]]
    return [0.0, 0.0, 0.0]


def polyline_length(points: list[list[float]]) -> float:
    return sum(math.dist(a, b) for a, b in zip(points, points[1:]))


def resolve(routes: dict | None = None, overrides: dict | None = None, raw: dict | None = None) -> dict[str, Any]:
    """Boards and routes with Petr's edits applied (see the module docstring)."""
    data = routes if routes is not None else load_routes()
    over = overrides if overrides is not None else load_overrides()
    fixtures = over.get("fixtures") or {}
    cable_over = over.get("cables") or {}
    raw = raw if raw is not None else (_raw_fixtures() if fixtures else {})
    out = []
    for route in data["routes"]:
        rid = str(route["id"])
        rec = {k: v for k, v in route.items() if k != "points"}
        rec["id"] = rid
        points = [[float(v) for v in p[:3]] for p in route["points"]]
        rec["guess"] = [p[:] for p in points]
        entry = cable_over.get(rid)
        if entry and entry.get("points"):
            points = [[float(v) for v in p[:3]] for p in entry["points"]]
            rec["edited"] = True
        else:
            end = fixture_delta(route.get("toBox") or route.get("to"), fixtures, raw)
            start = fixture_delta(route.get("fromBox") or route.get("from"), fixtures, raw)
            if any(end):
                points[-1] = [a + b for a, b in zip(points[-1], end)]
            if any(start):
                points[0] = [a + b for a, b in zip(points[0], start)]
        rec["points"] = [[round(v, 4) for v in p] for p in points]
        rec["length"] = round(polyline_length(points), 3)
        out.append(rec)
    return {"boards": data["boards"], "routes": out}


def _schedule_lengths() -> dict[int, dict]:
    """CableLength, spec and panel per cable number, from the room YAML."""
    out: dict[int, dict] = {}
    for element in _raw_fixtures().values():
        props = {}
        for group in element.get("PropertySets") or []:
            if group.get("Name") == "Pset_YamlIfc":
                props.update(group.get("Properties") or {})
        cable = props.get("CableNumber")
        if cable is None:
            continue
        try:
            cable = int(cable)
        except (TypeError, ValueError):
            continue
        rec = out.setdefault(cable, {})
        if props.get("CableLength") is not None:
            rec.setdefault("schedule", float(props["CableLength"]))
        rec.setdefault("spec", props.get("CableSpec"))
        rec.setdefault("panel", props.get("Panel"))
    return out


def cable_lengths(resolved: dict | None = None) -> list[dict]:
    """One row per cable: modelled (main + tails) vs the Soupis length."""
    data = resolved or resolve()
    schedule = _schedule_lengths()
    rows: dict[int, dict] = {}
    for route in data["routes"]:
        cable = int(route["cable"])
        row = rows.setdefault(cable, {"cable": cable, "room": route.get("room"), "main": 0.0, "tails": 0.0, "routes": []})
        row["routes"].append(route["id"])
        row["tails" if route.get("tail") else "main"] += route["length"]
    out = []
    for cable in sorted(rows):
        row = rows[cable]
        sched = schedule.get(cable, {}).get("schedule")
        total = row["main"] + row["tails"]
        row["modelled"] = round(total, 2)
        row["main"] = round(row["main"], 2)
        row["tails"] = round(row["tails"], 2)
        row["schedule"] = sched
        row["delta"] = None if sched is None else round(total - sched, 2)
        row["flag"] = bool(sched is not None and abs(total - sched) > max(FLAG_ABS_M, FLAG_REL * sched))
        out.append(row)
    return out


def viewer_json(resolved: dict | None = None) -> dict[str, Any]:
    """``docs/models/<id>.cables.json``: what the viewer draws and edits."""
    data = resolved or resolve()
    lengths = {row["cable"]: row for row in cable_lengths(data)}
    routes = []
    for route in data["routes"]:
        rec = {
            "id": route["id"],
            "cable": route["cable"],
            "room": route.get("room"),
            "kind": route.get("kind"),
            "spec": route.get("spec"),
            "from": route.get("from"),
            "to": route.get("to"),
            "points": route["points"],
            "length": route["length"],
        }
        for key in ("toBox", "fromBox", "tail", "lead", "note", "edited"):
            if route.get(key) is not None:
                rec[key] = route[key]
        row = lengths.get(int(route["cable"]))
        if row:
            rec["schedule"] = row["schedule"]
            rec["cableModelled"] = row["modelled"]
        routes.append(rec)
    boards = []
    for board in data["boards"]:
        boards.append({k: board[k] for k in board})
    return {"version": 1, "model": MODEL_ID, "boards": boards, "routes": routes}


def write_viewer_json(dest: Path | None = None) -> Path:
    target = dest or VIEWER_JSON
    target.parent.mkdir(parents=True, exist_ok=True)
    target.write_text(json.dumps(viewer_json(), indent=1, ensure_ascii=False) + "\n", encoding="utf-8")
    return target


def report_markdown(rows: list[dict] | None = None) -> str:
    rows = rows if rows is not None else cable_lengths()
    lines = [
        "| Cable | Room | Routes | Main (m) | Tails (m) | Modelled (m) | Soupis (m) | Δ (m) | Flag |",
        "| --- | --- | --- | --- | --- | --- | --- | --- | --- |",
    ]
    for row in rows:
        sched = "" if row["schedule"] is None else f"{row['schedule']:g}"
        delta = "" if row["delta"] is None else f"{row['delta']:+.1f}"
        lines.append(
            f"| {row['cable']} | {row['room']} | {', '.join(row['routes'])} | {row['main']:.1f} | {row['tails']:.1f} | "
            f"{row['modelled']:.1f} | {sched} | {delta} | {'**check**' if row['flag'] else ''} |"
        )
    return "\n".join(lines) + "\n"


def main(argv: list[str] | None = None) -> int:
    args = list(sys.argv[1:] if argv is None else argv)
    if args == ["--report"]:
        print(report_markdown(), end="")
        return 0
    if args:
        print("usage: python -m blueprints.cable_routes [--report]", file=sys.stderr)
        return 2
    dest = write_viewer_json()
    print(f"{dest.relative_to(REPO_ROOT)}: {len(resolve()['routes'])} routes")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

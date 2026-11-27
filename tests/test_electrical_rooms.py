"""Room device files other than the bedroom (docs/electrical/Rooms.md)."""

from pathlib import Path
import sys

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "models"))

from electrical_rooms import (  # noqa: E402
    device_records,
    load_document,
    room_of,
    room_parts,
    source_paths,
    strip_runs,
)
from bedroom_111 import load_document as load_bedroom  # noqa: E402


def test_every_room_file_builds_and_ids_are_unique_house_wide():
    seen = {r["id"] for r in device_records(load_bedroom())}
    assert source_paths()
    for path in source_paths():
        doc = load_document(path)
        assert doc["spaces"][0]["id"] == f"SP-{room_of(path)}"
        for record in device_records(doc):
            assert record["id"] not in seen, record["id"]
            seen.add(record["id"])
        assert room_parts(path)


def test_strips_have_a_path_and_placed_devices_a_box():
    for path in source_paths():
        for record in device_records(load_document(path)):
            if record.get("ObjectType") == "LedStrip" and record.get("Origin") is None:
                props = {}
                for group in record.get("PropertySets") or []:
                    props.update(group.get("Properties") or {})
                if not props.get("PositionUnknown"):
                    assert strip_runs(record), record["id"]
            if record.get("Origin") is not None:
                assert record.get("Width") and record.get("Depth") and record.get("Height"), record["id"]


def test_led_panel_lights_follow_the_wall_cabinets():
    # Petr, 2026-11-22 a: LED panels "on the underside of the kitchen (west)
    # top cabinets, and the dining (north) top cabinets". One light per
    # run (one circuit), drawn as the cabinets' diffusers, flush at 1560.
    from electrical_rooms import panel_rects

    doc = load_document(ROOT / "inputs" / "ground_floor" / "electrical-1.02.yaml")
    lights = {r["id"]: r for r in doc["lightFixtures"]}
    west = panel_rects(lights["C180-S"])
    dining = panel_rects(lights["NC-1.02-S-2"])
    assert len(west) == 1 and len(dining) == 1  # one panel per run (PR #138: "a single panel")
    for x0, y0, z0, x1, y1, z1 in west + dining:
        assert abs(z0 - 1.560) < 1e-9 and abs(z1 - 1.563) < 1e-9
    # Inside the west cabinets' plan (fronts x 19.150, wall x 18.800).
    assert all(18.80 < r[0] < r[3] < 19.15 for r in west)
    assert all(15.324 < r[1] < r[4] < 15.60 for r in dining)
    props = {}
    for group in lights["NC-1.02-S-2"]["PropertySets"]:
        props.update(group["Properties"])
    assert props["TempCable"].startswith("TEMP-") and "CableNumber" not in props


def _world_parts(run_id, part_ids):
    """World plan boxes (x0, x1, y0, y1, z0, z1, metres) of kitchen parts."""
    from electrical_rooms import _kitchen_runs

    run = _kitchen_runs()[run_id]
    out = []
    for pid in part_ids:
        for a0, a1, c0, c1, z0, z1 in run.part(pid).boxes:
            pts = [run.frame.world(a, c, 0.0)[:2] for a in (a0, a1) for c in (c0, c1)]
            xs, ys = [p[0] / 1000 for p in pts], [p[1] / 1000 for p in pts]
            out.append((min(xs), max(xs), min(ys), max(ys), z0 / 1000, z1 / 1000))
    return out


def _span(boxes):
    return tuple(f(b[i] for b in boxes) for i, f in enumerate((min, max, min, max, min, max)))


def test_led_lights_stay_inside_their_host_cabinets():
    # Petr, 2026-11-22 (t809u): "theres still a led panel sticking out of the
    # west cabinet run. It blocks the pocket door into the hallway". Every
    # PanelRun light stays inside its run's cabinet bottom in plan, and the
    # island toe-kick strips stay inside the island, under its fronts.
    from electrical_rooms import panel_rects

    doc = load_document(ROOT / "inputs" / "ground_floor" / "electrical-1.02.yaml")
    lights = {r["id"]: r for r in doc["lightFixtures"]}
    eps = 1e-6
    for light_id, run_id, bottom in (("C180-S", "KR-WEST-H", "KR-WEST-H-BOTTOM"), ("NC-1.02-S-2", "KR-DH", "KR-DH-BOTTOM")):
        bx0, bx1, by0, by1, _, _ = _span(_world_parts(run_id, [bottom]))
        for x0, y0, z0, x1, y1, z1 in panel_rects(lights[light_id]):
            assert bx0 - eps <= x0 < x1 <= bx1 + eps and by0 - eps <= y0 < y1 <= by1 + eps, light_id
    top = _span(_world_parts("KR-ISL", ["KR-ISL-WORKTOP"]))
    fronts = _world_parts("KR-ISL", ["KR-ISL-PLINTH-W", "KR-ISL-PLINTH-E"])
    half = 0.006  # STRIP_SIZE / 2
    for run in strip_runs(lights["C182-S"]):
        for x, y, z in run:
            assert top[0] < x - half and x + half < top[1] and top[2] < y < top[3], (x, y)
            assert z + 2 * half <= 0.1 + eps  # under the carcass bottom, in the toe-kick
        # Between a long side's fronts and its kickboard (the recess).
        x = run[0][0]
        kick = min(fronts, key=lambda b: abs(b[0] - x))
        assert (x < kick[0]) if x < (top[0] + top[1]) / 2 else (x > kick[1]), x


def test_no_light_in_a_pocket_door_path():
    # A pocket door's leaf, its opening and its pocket (the leaf's travel),
    # plus 25 mm proud of either wall face: no light may reach in.
    import json

    from electrical_rooms import panel_rects

    doors = json.loads((ROOT / "docs" / "models" / "ground_floor.doors.json").read_text())
    paths = []
    for d in doors:
        if d.get("kind") != "sliding":
            continue
        (sx, sy, sz), (ex, _ey, ez) = d["start"], d["end"]
        pts = [(sx, -sz), (ex, -ez)]
        for p in d["panels"]:
            dx, _dy, dz = p["slide"]
            pts += [(sx + dx, -(sz + dz)), (ex + dx, -(ez + dz))]
        xs, ys = [q[0] for q in pts], [q[1] for q in pts]
        m = 0.15
        if max(xs) - min(xs) > max(ys) - min(ys):
            paths.append((d["id"], (min(xs), max(xs), min(ys) - m, max(ys) + m, 0.0, 2 * sy)))
        else:
            paths.append((d["id"], (min(xs) - m, max(xs) + m, min(ys), max(ys), 0.0, 2 * sy)))
    assert {p[0] for p in paths} >= {"D-OP24", "D-OP25"}
    for path in source_paths():
        for rec in device_records(load_document(path)):
            if rec["label"] != "light":
                continue
            rects = [(x0, x1, y0, y1, z0, z1) for x0, y0, z0, x1, y1, z1 in panel_rects(rec)]
            for run in strip_runs(rec):
                for (x0, y0, z0), (x1, y1, _) in zip(run, run[1:]):
                    rects.append((min(x0, x1) - 0.006, max(x0, x1) + 0.006, min(y0, y1) - 0.006, max(y0, y1) + 0.006, z0, z0 + 0.012))
            for did, b in paths:
                for r in rects:
                    assert not (b[0] < r[1] and r[0] < b[1] and b[2] < r[3] and r[2] < b[3] and b[4] < r[5] and r[4] < b[5]), (rec["id"], did)


def test_synthetic_furnishings_do_not_hide_kitchen_runs():
    # #180 reused kitchen_cabinet.runs via a process-wide cache. Sharing an
    # empty list (a synthetic furnishings document) must not make C180-S's
    # PanelRun KR-WEST-H look missing.
    import electrical_rooms as er

    er.share_kitchen_runs([])
    doc = load_document(ROOT / "inputs" / "ground_floor" / "electrical-1.02.yaml")
    lights = {r["id"]: r for r in doc["lightFixtures"]}
    west = er.panel_rects(lights["C180-S"])
    assert west and "KR-WEST-H" in er._kitchen_runs(require="KR-WEST-H")

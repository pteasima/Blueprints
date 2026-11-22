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

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

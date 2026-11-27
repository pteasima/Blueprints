"""Room 1.11 field devices: cable ids, panels, and boxes inside the bay."""

from pathlib import Path
import sys

import pytest

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "models"))

from bedroom_111 import (  # noqa: E402
    SOURCE_PATH,
    device_records,
    load_document,
    room_faces,
    scenes,
)
from yaml_ifc import read_ifc, validation_errors, write_ifc  # noqa: E402
from yaml_ifc.yamlio import load as load_yaml_ifc  # noqa: E402

def _pset(element) -> dict:
    found = {}
    for group in element.get("PropertySets") or []:
        if group.get("Name") == "Pset_YamlIfc":
            found.update(group.get("Properties") or {})
    return found


def _same(left, right, path=""):
    if isinstance(left, dict) and isinstance(right, dict):
        for key in list(dict.fromkeys([*left, *right])):
            if key not in left or key not in right:
                side = "left" if key in left else "right"
                raise AssertionError(f"{path}.{key} only on the {side}")
            _same(left[key], right[key], f"{path}.{key}")
        return
    if isinstance(left, list) and isinstance(right, list):
        if len(left) != len(right):
            raise AssertionError(f"{path} length {len(left)} != {len(right)}")
        for index, (item, other) in enumerate(zip(left, right)):
            _same(item, other, f"{path}[{index}]")
        return
    if isinstance(left, bool) or isinstance(right, bool):
        if left != right:
            raise AssertionError(f"{path} {left!r} != {right!r}")
        return
    if isinstance(left, (int, float)) and isinstance(right, (int, float)):
        if abs(float(left) - float(right)) > 1e-5:
            raise AssertionError(f"{path} {left} != {right}")
        return
    if left != right:
        raise AssertionError(f"{path} {left!r} != {right!r}")


def test_room_faces_are_consistent():
    faces = room_faces()
    width = faces["east"] - faces["west"]
    depth = faces["north"] - faces["south"]
    assert width > 0 and depth > 0
    # The clear bay is smaller than the room table area (22.98 m²).
    assert width * depth < 22.0



_POSITION_ONLY = {"SOCK-N", "SOCK-N2", "SOCK-EN", "SOCK-ES"}
# C3-S is three viewer segments, not one yaml box. C9-R lives in the door switch.
_NO_BOX = {"C3-S", "C7-S", "C8-S", "C9-R"}


def _boxed(record) -> bool:
    return all(record.get(key) for key in ("Width", "Depth", "Height"))


def test_cable_numbers_match_device_ids():
    """Every cabled device's id starts with its cable number; position-only devices have no box."""
    records = device_records()
    ids = []
    bare = []
    for record in records:
        props = _pset(record)
        if "CableNumber" not in props:
            bare.append(record["id"])
            assert props.get("PositionOnly") is True
            continue
        cable = props["CableNumber"]
        assert isinstance(cable, int)
        assert record["id"].startswith(f"C{cable}-")
        if "DeviceCode" in props:
            assert props["DeviceCode"] in record["id"]
        assert props["Panel"] in (1, 2)
        assert props["CableSpec"]
        assert props["CableLength"] > 0
        ids.append(record["id"])
    assert sorted(ids) == sorted(set(ids))
    assert set(bare) == _POSITION_ONLY




def test_boxes_sit_in_the_bay_and_round_trip(tmp_path, bedroom_111_parts):
    placed = bedroom_111_parts
    records = device_records()
    boxed = {record["id"] for record in records if _boxed(record)}
    furniture = {item["id"] for item in load_document()["furniture"] if _boxed(item)}
    assert boxed.isdisjoint(_NO_BOX)
    strips = [part for part in placed if part.device_id in {"C3-S", "C7-S", "C8-S"}]
    assert {part.device_id for part in placed} == boxed | furniture | {"C3-S", "C7-S", "C8-S"}
    assert len(placed) == len(boxed) + len(furniture) + len(strips)
    assert "C9-R" not in {part.device_id for part in placed}

    faces = room_faces()
    # Facade motors and the hallway switch sit just outside the inner faces.
    for part in placed:
        box = part.bounding_box()
        assert box.min.Z > 0
        assert box.max.Z <= 2.50 * 1000.0 + 1.0
        assert faces["west"] * 1000.0 - 600.0 <= box.min.X
        assert box.max.X <= faces["east"] * 1000.0 + 2200.0  # hallway switch
        assert faces["south"] * 1000.0 - 600.0 <= box.min.Y
        assert box.max.Y <= faces["north"] * 1000.0 + 1600.0

    for index, left in enumerate(placed):
        for right in placed[index + 1 :]:
            common = left.intersect(right)
            volume = 0.0 if common is None else sum(float(solid.volume) for solid in common)
            assert volume == pytest.approx(0.0, abs=1.0), (left.device_id, right.device_id, volume)

    original = load_yaml_ifc(SOURCE_PATH)
    ifc_path = tmp_path / "bedroom.ifc"
    model = write_ifc(original, ifc_path)
    assert validation_errors(model) == []
    restored, skipped = read_ifc(ifc_path)
    assert skipped == {}
    _same(original, restored)





def test_ground_floor_carries_the_bedroom_plan(ground_floor_model, bedroom_111_parts):
    _shape, meta = ground_floor_model
    assert meta["derived"]["bedroom_111"] == len(bedroom_111_parts)
    unboxed = {record["id"] for record in device_records() if not _boxed(record)}
    assert unboxed == _NO_BOX
    assert [scene["id"] for scene in scenes()] == ["bedroom-1.11"]
    assert load_document()["spaces"][0]["id"] == "SP-1.11"


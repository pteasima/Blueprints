"""Room 1.11 field devices: cable ids, panels, and boxes inside the bay."""

from pathlib import Path
import sys

import pytest

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "models"))

from bedroom_111 import (  # noqa: E402
    PLAN_CUT_Z_M,
    SOURCE_PATH,
    device_records,
    load_document,
    parts,
    room_faces,
    scenes,
)
from ground_floor import build  # noqa: E402
from yaml_ifc import read_ifc, validation_errors, write_ifc  # noqa: E402
from yaml_ifc.yamlio import load as load_yaml_ifc  # noqa: E402


# Soupis rows for 1.11, expanded to one code per device. Cable 32 is shared
# with 1.05 and carries two buttons.
SCHEDULE = {
    1: ["2V"],
    2: ["S"],
    3: ["S"],
    4: ["2V"],
    5: ["S"],
    6: ["2V", "V"],
    7: ["S"],
    8: ["S"],
    9: ["R", "M"],
    10: ["V"],
    11: ["S"],
    12: ["S"],
    13: ["E"],
    14: ["W"],
    16: ["B"],
    18: ["B"],
    32: ["V", "V", "M"],
    46: ["B"],
}
PANEL_1 = {13, 14}
# The corridor half of cable 32 sits north of the bedroom face.
OUTSIDE = {"C32-V-2"}


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


def test_room_faces_are_the_wall_model():
    faces = room_faces()
    assert faces["west"] == pytest.approx(0.45)
    assert faces["east"] == pytest.approx(3.75)
    assert faces["south"] == pytest.approx(3.275)
    assert faces["north"] == pytest.approx(7.95)
    width = faces["east"] - faces["west"]
    depth = faces["north"] - faces["south"]
    assert width == pytest.approx(3.3)
    assert depth == pytest.approx(4.675)
    # The room table lists 22.98 m². The clear bay is not that area.
    assert width * depth == pytest.approx(15.4275)
    assert width * depth < 22.0


_POSITION_ONLY = {"SOCK-N", "SOCK-N2", "SOCK-EN", "SOCK-ES", "SOCK-X", "LAMP-X-W", "LAMP-X-S"}
_NO_BOX = {"C3-S", "C9-R", *_POSITION_ONLY}


def _boxed(record) -> bool:
    return all(record.get(key) for key in ("Width", "Depth", "Height"))


def test_schedule_codes_cable_numbers_and_panels():
    text = SOURCE_PATH.read_text(encoding="utf-8")
    for phrase in ("SCHUKO", "cable 12", "cable 3", "cable 6", "cable 32", "22.98"):
        assert phrase in text
    records = device_records()
    by_cable: dict[int, list[str]] = {}
    ids = []
    bare = []
    for record in records:
        props = _pset(record)
        if "CableNumber" not in props:
            bare.append(record["id"])
            assert props.get("PositionOnly") is True
            assert record["id"] in _POSITION_ONLY
            continue
        cable = props["CableNumber"]
        assert isinstance(cable, int)
        assert record["id"].startswith(f"C{cable}-")
        assert props["DeviceCode"] in record["id"]
        panel = 1 if cable in PANEL_1 else 2
        assert props["Panel"] == panel
        assert props["CableSpec"]
        assert props["CableLength"] > 0
        by_cable.setdefault(cable, []).append(props["DeviceCode"])
        ids.append(record["id"])
    assert sorted(ids) == sorted(set(ids))
    assert set(bare) == _POSITION_ONLY
    assert {cable: sorted(codes) for cable, codes in by_cable.items()} == {
        cable: sorted(codes) for cable, codes in SCHEDULE.items()
    }
    pendant = next(record for record in records if record["id"] == "C12-S")
    assert pendant["Wattage"] == 120
    assert pendant["ObjectType"] == "Pendant"
    strip = next(record for record in records if record["id"] == "C3-S")
    assert strip["ObjectType"] == "LedStrip"
    assert not _boxed(strip)
    radar = next(record for record in records if record["id"] == "C9-R")
    assert _pset(radar)["InSwitchBox"] == "C32-V-1"
    assert not _boxed(radar)
    for lamp_id in ("LAMP-X-W", "LAMP-X-S"):
        lamp = next(record for record in records if record["id"] == lamp_id)
        assert _pset(lamp)["Unused"] is True
        assert not _boxed(lamp)
    bed = next(item for item in load_document()["furniture"] if item["id"] == "BED-1.11")
    bed_props = _pset(bed)
    assert bed_props["Status"] == "UNFINISHED"
    assert bed_props["Placeholder"] is True
    assert "UNFINISHED" in bed["Description"]
    assert "placeholder" in bed["Description"]


def test_boxes_sit_in_the_bay_and_round_trip(tmp_path):
    faces = room_faces()
    placed = parts()
    records = device_records()
    boxed = {record["id"] for record in records if _boxed(record)}
    assert boxed.isdisjoint(_NO_BOX)
    assert len(placed) == len(boxed)
    assert {part.device_id for part in placed} == boxed
    labels = {part.device_id: part.label for part in placed}
    assert labels["C2-S"] == "light"
    assert labels["C1-2V"] == "switch"
    assert labels["C13-E"] == "outlet"
    assert labels["C46-B"] == "actuator"
    assert "C9-R" not in labels
    assert "C3-S" not in labels

    for part in placed:
        box = part.bounding_box()
        assert box.min.Z > 0
        assert box.max.Z <= 2.50 * 1000.0
        assert faces["west"] * 1000.0 - 1 <= box.min.X
        assert box.max.X <= faces["east"] * 1000.0 + 1
        if part.device_id in OUTSIDE:
            assert box.min.Y > faces["north"] * 1000.0
        else:
            assert faces["south"] * 1000.0 - 1 <= box.min.Y
            assert box.max.Y <= faces["north"] * 1000.0 + 1

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


def test_ground_floor_carries_the_bedroom_plan():
    _shape, meta = build()
    boxed = sum(1 for record in device_records() if _boxed(record))
    assert meta["derived"]["bedroom_111"] == boxed
    assert boxed < sum(len(codes) for codes in SCHEDULE.values())
    plan = next(scene for scene in scenes() if scene["id"] == "plan-1.11")
    assert plan["projection"] == "ortho"
    assert plan["cuts"][0]["anchor"][2] == pytest.approx(PLAN_CUT_Z_M * 1000.0)
    assert plan["camera"]["up"] == [0.0, 0.0, -1.0]
    half_x, half_y = plan["camera"]["orthoFit"]
    faces = room_faces()
    assert half_x > (faces["east"] - faces["west"]) / 2.0
    assert half_y > (faces["north"] - faces["south"]) / 2.0
    assert load_document()["spaces"][0]["id"] == "SP-1.11"

"""Viewer edit-mode overrides: merge a patch, apply it to a device YAML.

Round trip and format: docs/electrical/EditMode.md.
"""

from pathlib import Path
import sys

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "models"))

from blueprints import fixture_overrides as fo  # noqa: E402
from bedroom_111 import SOURCE_PATH  # noqa: E402
from yaml_ifc.yamlio import load as load_yaml_ifc  # noqa: E402

ADD = {
    "list": "switchingDevices",
    "id": "C10-V-1",
    "Name": "Vypínač 10 (copy)",
    "ObjectType": "PushButton",
    "ContainedInStructure": "SP-1.11",
    "Origin": [0.45, 8.1],
    "Elevation": 1.3145,
    "RefDirection": [0, -1],
    "Width": 0.071,
    "Depth": 0.015,
    "Height": 0.071,
    "PropertySets": [{"Name": "Pset_YamlIfc", "Properties": {"CableNumber": 10, "DeviceCode": "V"}}],
}
PATCH = {
    "version": 1,
    "fixtures": {
        "C10-V": {"Origin": [0.45, 8.2355], "Elevation": 1.3145, "CableLength": 9},
        "C7-S": {"Move": [0, 0.05, -0.01]},
        "C3-S": {"Move": [0.1, 0, 0]},
        "SOCK-N2": {"delete": True},
        "C10-V-1": {"add": ADD},
    },
}


def _find(doc, fixture_id):
    for key in fo.DEVICE_LISTS:
        for element in doc.get(key) or []:
            if element["id"] == fixture_id:
                return key, element
    return None, None


def _props(element):
    for group in element.get("PropertySets") or []:
        if group.get("Name") == "Pset_YamlIfc":
            return group.get("Properties") or {}
    return {}


def test_committed_file_is_valid():
    data = fo.load_overrides()
    assert data["version"] == 1
    assert isinstance(data["fixtures"], dict)


def test_merge_adds_moves_and_replaces_the_rest():
    current = {"version": 1, "fixtures": {"C7-S": {"Move": [0, 0.01, 0]}, "C1-2V": {"Elevation": 0.8}}}
    merged = fo.merge(current, PATCH)
    assert merged["fixtures"]["C7-S"]["Move"] == [0.0, 0.06, -0.01]
    assert merged["fixtures"]["C1-2V"] == {"Elevation": 0.8}
    assert merged["fixtures"]["SOCK-N2"] == {"delete": True}
    # A later move of an added fixture updates its add element.
    again = fo.merge(merged, {"version": 1, "fixtures": {"C10-V-1": {"Move": [0, -0.1, 0]}}})
    assert again["fixtures"]["C10-V-1"]["add"]["Origin"] == [0.45, 8.0]


def test_apply_moves_changes_adds_and_deletes():
    raw = load_yaml_ifc(SOURCE_PATH)
    doc = fo.apply_overrides(raw, fo.merge({"version": 1, "fixtures": {}}, PATCH))
    _, switch = _find(doc, "C10-V")
    assert switch["Origin"] == [0.45, 8.2355]
    assert _props(switch)["CableLength"] == 9
    _, strip = _find(doc, "C7-S")
    _, before = _find(raw, "C7-S")
    assert abs(_props(strip)["YC"] - _props(before)["YC"] - 0.05) < 1e-9
    assert abs(_props(strip)["Z"] - _props(before)["Z"] + 0.01) < 1e-9
    _, bed_strip = _find(doc, "C3-S")
    assert _props(bed_strip)["OffsetX"] == 0.1
    assert _find(doc, "SOCK-N2") == (None, None)
    key, added = _find(doc, "C10-V-1")
    assert key == "switchingDevices" and added["Origin"] == [0.45, 8.1]
    # The source document is not touched.
    assert _find(raw, "SOCK-N2")[1] is not None


def test_add_lands_only_in_the_document_with_its_space():
    other = {"spaces": [{"id": "SP-1.02"}], "switchingDevices": []}
    out = fo.apply_overrides(other, {"version": 1, "fixtures": {"C10-V-1": {"add": ADD}}})
    assert out["switchingDevices"] == []


def test_move_shifts_a_room_strip_path():
    element = {
        "id": "C34-S",
        "PropertySets": [{"Name": "Pset_YamlIfc", "Properties": {"Path": "1,2,0.05;3,2,0.05 | 1,4,0.9;3,4,0.9"}}],
    }
    fo._move(element, [0.1, -0.2, 0.01])
    path = element["PropertySets"][0]["Properties"]["Path"]
    assert path == "1.100,1.800,0.060;3.100,1.800,0.060 | 1.100,3.800,0.910;3.100,3.800,0.910"

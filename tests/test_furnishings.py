"""Room 1.02 furnishings: the kitchen boxes, and the converter path on a fixture."""

from pathlib import Path
import sys

import pytest

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "models"))

from ground_floor import (  # noqa: E402
    FURNISHINGS_PATH,
    FURNISHING_LISTS,
    FURNITURE_VIEWS,
    LABEL_CABINET,
    LABEL_DOOR,
    LABEL_GLAZING,
    LABEL_MASONRY,
    MESH_GAP_MM,
    ROOM_ID,
    ROOM_X0,
    ROOM_X1,
    ROOM_Y0,
    ROOM_Y1,
    SOURCE_COMMIT,
    _furnishing_parts,
    build,
    furnishing_records,
    load_furnishings,
    scenes,
)
from yaml_ifc import read_ifc, validation_errors, write_ifc
from yaml_ifc.to_ifc import build_ifc
from yaml_ifc.yamlio import dump, load as load_yaml_ifc

# Spec lists. Absent from the room file until a placement is written.
FURNISHING_KEYS = (
    "furniture",
    "systemFurniture",
    "sanitaryTerminals",
    "electricAppliances",
    "lightFixtures",
    "coverings",
)


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


def _aabb(element):
    """Axis-aligned box. Origin is the plan corner; Elevation defaults to 0."""
    x, y = (float(v) for v in element["Origin"])
    z = float(element.get("Elevation") or 0.0)
    return (
        x,
        y,
        z,
        x + float(element["Width"]),
        y + float(element["Depth"]),
        z + float(element["Height"]),
    )


def _shell(**lists):
    """A furnishings document. Lists are added only by the caller."""
    doc = {
        "schema": "IFC4 ADD2 TC1",
        "units": {"LengthUnit": "METRE"},
        "project": {"id": "PRJ", "Name": "RD Šíma", "Aggregates": ["SITE"]},
        "site": {
            "id": "SITE",
            "Name": "Bor u Tachova",
            "RefElevation": 472.1,
            "Aggregates": ["BLD"],
        },
        "building": {"id": "BLD", "Name": "RD Šíma", "Aggregates": ["STOREY-1NP"]},
        "storey": {"id": "STOREY-1NP", "Name": "1.NP", "Elevation": 0},
        "spaces": [
            {
                "id": ROOM_ID,
                "Name": "1.02 Obývák",
                "LongName": "Obývák a kuchyň",
                "PredefinedType": "INTERNAL",
            }
        ],
        "walls": [],
        "openings": [],
        "doors": [],
        "windows": [],
    }
    doc.update(lists)
    return doc


def _one_cabinet():
    """One module, used only by tests. Not written into furnishings.yaml."""
    return _shell(
        systemFurniture=[
            {
                "id": "SF-test",
                "Name": "Test cabinet",
                "PredefinedType": "USERDEFINED",
                "ObjectType": "BaseCabinet",
                "ContainedInStructure": ROOM_ID,
                "Origin": [19.0, 15.0],
                "Width": 0.6,
                "Depth": 0.6,
                "Height": 0.9,
            }
        ]
    )


# Island column, north to south. Depth 1.2 is the column width. See furnishings.yaml.
KITCHEN = (
    ("SF-I500a", [20.554, 13.8], [0.0, -1.0], 0.5, 1.2, 0.93),
    ("SF-I600a", [20.554, 13.3], [0.0, -1.0], 0.6, 1.2, 0.93),
    ("SF-I500b", [20.554, 12.7], [0.0, -1.0], 0.5, 1.2, 0.93),
    ("SF-I600b", [20.554, 12.2], [0.0, -1.0], 0.6, 1.2, 0.93),
    ("SF-I300", [20.554, 11.6], [0.0, -1.0], 0.3, 1.2, 0.93),
)


def test_furnishings_file_has_the_space_and_the_kitchen_boxes():
    doc = load_furnishings()
    assert FURNISHINGS_PATH.is_file()
    assert SOURCE_COMMIT == "34e1597"
    assert set(FURNISHING_LISTS) == set(FURNISHING_KEYS)
    assert doc["walls"] == []
    spaces = doc["spaces"]
    assert [space["id"] for space in spaces] == [ROOM_ID]
    space = spaces[0]
    assert space["PredefinedType"] == "INTERNAL"
    assert space["Name"] == "1.02 Obývák"
    for field in ("Origin", "Width", "Depth", "Height", "ObjectType"):
        assert field not in space
    for key in FURNISHING_KEYS:
        if key != "systemFurniture":
            assert key not in doc
    records = furnishing_records(doc)
    assert [item["id"] for item in records] == [row[0] for row in KITCHEN]
    for record, expected in zip(records, KITCHEN):
        cabinet_id, origin, ref, width, depth, height = expected
        assert record["list"] == "systemFurniture"
        assert record["label"] == LABEL_CABINET
        assert record["ObjectType"] == "BaseCabinet"
        assert record["PredefinedType"] == "USERDEFINED"
        assert record["ContainedInStructure"] == ROOM_ID
        assert record["Origin"] == origin
        assert record.get("RefDirection") == ref
        assert record["Width"] == width
        assert record["Depth"] == depth
        assert record["Height"] == height
        assert "Elevation" not in record


def test_build_extrudes_walls_and_the_kitchen_boxes():
    shape, meta = build()
    assert meta["derived"]["furnishings"] == len(KITCHEN)
    assert meta["derived"]["furnishings_commit"] == "34e1597"
    placed = [child for child in shape.children if getattr(child, "furnishing_id", None)]
    assert [child.furnishing_id for child in placed] == [row[0] for row in KITCHEN]
    assert {child.label for child in placed} == {LABEL_CABINET}
    labels = {child.label for child in shape.children}
    assert {LABEL_MASONRY, LABEL_GLAZING, LABEL_DOOR, LABEL_CABINET} <= labels
    assert labels.isdisjoint({"appliance", "sink", "furniture", "rug", "light"})
    # World plan of the placed solids. Inset is 1 mm, so the box sits 0.5 mm inside.
    expected_mm = {
        "SF-I500a": (20554, 21754, 13300, 13800),
        "SF-I600a": (20554, 21754, 12700, 13300),
        "SF-I500b": (20554, 21754, 12200, 12700),
        "SF-I600b": (20554, 21754, 11600, 12200),
        "SF-I300": (20554, 21754, 11300, 11600),
    }
    for child in placed:
        x0, x1, y0, y1 = expected_mm[child.furnishing_id]
        bb = child.bounding_box()
        assert bb.min.X == pytest.approx(x0 + 0.5, abs=0.1)
        assert bb.max.X == pytest.approx(x1 - 0.5, abs=0.1)
        assert bb.min.Y == pytest.approx(y0 + 0.5, abs=0.1)
        assert bb.max.Y == pytest.approx(y1 - 0.5, abs=0.1)
        assert bb.min.Z == pytest.approx(0.5, abs=0.1)
        assert bb.max.Z == pytest.approx(930 - 0.5, abs=0.1)
        assert ROOM_X0 * 1000 - 1 <= bb.min.X and bb.max.X <= ROOM_X1 * 1000 + 1
        assert ROOM_Y0 * 1000 - 1 <= bb.min.Y and bb.max.Y <= ROOM_Y1 * 1000 + 1


def test_furnishings_yaml_round_trips(tmp_path):
    original = load_yaml_ifc(FURNISHINGS_PATH)
    ifc_path = tmp_path / "furnishings.ifc"
    model = write_ifc(original, ifc_path)
    assert validation_errors(model) == []
    restored, skipped = read_ifc(ifc_path)
    assert skipped == {}
    _same(original, restored)
    assert len(model.by_type("IfcSpace")) == 1
    assert model.by_type("IfcFurniture") == []
    assert len(model.by_type("IfcSystemFurnitureElement")) == len(KITCHEN)
    assert model.by_type("IfcElectricAppliance") == []


def test_converter_places_a_fixture_box(tmp_path):
    """The loading path, on a document that is not the room file."""
    doc = _one_cabinet()
    path = tmp_path / "furnishings.yaml"
    dump(doc, path)
    loaded = load_furnishings(path)
    records = furnishing_records(loaded)
    assert [item["id"] for item in records] == ["SF-test"]
    assert records[0]["list"] == "systemFurniture"
    assert records[0]["label"] == LABEL_CABINET
    assert len(records[0]["Origin"]) == 2

    shape, meta = build(furnishings_path=path)
    assert meta["derived"]["furnishings"] == 1
    placed = [child for child in shape.children if getattr(child, "furnishing_id", None)]
    assert [child.furnishing_id for child in placed] == ["SF-test"]
    assert placed[0].label == LABEL_CABINET
    box = _aabb(records[0])
    bb = placed[0].bounding_box()
    assert bb.min.X >= box[0] * 1000.0 - 0.05
    assert bb.min.Y >= box[1] * 1000.0 - 0.05
    assert bb.min.Z >= box[2] * 1000.0 - 0.05
    assert bb.max.X <= box[3] * 1000.0 + 0.05
    assert bb.max.Y <= box[4] * 1000.0 + 0.05
    assert bb.max.Z <= box[5] * 1000.0 + 0.05
    assert placed[0].volume > 0

    ifc_path = tmp_path / "fixture.ifc"
    model = write_ifc(load_yaml_ifc(path), ifc_path)
    assert validation_errors(model) == []
    restored, skipped = read_ifc(ifc_path)
    assert skipped == {}
    _same(load_yaml_ifc(path), restored)
    assert len(model.by_type("IfcSystemFurnitureElement")) == 1


def test_ref_direction_turns_width_in_plan():
    doc = _shell(
        systemFurniture=[
            {
                "id": "SF-turned",
                "Name": "Turned",
                "PredefinedType": "USERDEFINED",
                "ObjectType": "BaseCabinet",
                "Origin": [0.0, 0.0],
                "Width": 2.0,
                "Depth": 1.0,
                "Height": 0.5,
                "RefDirection": [0.0, 1.0],
            }
        ]
    )
    solid = _furnishing_parts(doc)[0]
    bb = solid.bounding_box()
    # Width along +Y, depth along −X, inset by half the mesh gap.
    half = MESH_GAP_MM / 2.0
    assert bb.min.X == pytest.approx(-1000.0 + half, abs=0.05)
    assert bb.max.X == pytest.approx(-half, abs=0.05)
    assert bb.min.Y == pytest.approx(half, abs=0.05)
    assert bb.max.Y == pytest.approx(2000.0 - half, abs=0.05)
    assert bb.min.Z == pytest.approx(half, abs=0.05)
    assert bb.max.Z == pytest.approx(500.0 - half, abs=0.05)


def test_userdefined_without_object_type_is_rejected():
    doc = _one_cabinet()
    doc["systemFurniture"][0].pop("ObjectType")
    with pytest.raises(ValueError, match="ObjectType"):
        build_ifc(doc)


def test_furniture_scenes_keep_the_existing_views():
    specs = {item["id"]: item for item in scenes()}
    assert {"overview", "opening", "posts", "plan"} <= set(specs)
    for spec in FURNITURE_VIEWS:
        scene = specs[spec["id"]]
        assert scene["title"]["cs"]
        assert "projection" not in scene
        assert scene["camera"]["up"] == [0.0, 1.0, 0.0]
        assert scene["hFovDeg"] == spec["hFovDeg"]

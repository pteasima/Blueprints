"""Room 1.02 furniture: one yaml-ifc box per element, clear of the walls."""

from pathlib import Path
import sys

import pytest

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "models"))

from ground_floor import (  # noqa: E402
    FURNISHINGS_PATH,
    FURNISHING_LISTS,
    FURNITURE_VIEWS,
    LABEL_APPLIANCE,
    LABEL_CABINET,
    LABEL_DOOR,
    LABEL_FURNITURE,
    LABEL_GLAZING,
    LABEL_LIGHT,
    LABEL_MASONRY,
    LABEL_RUG,
    LABEL_SINK,
    MESH_GAP_MM,
    ROOM_CLEAR_M,
    ROOM_ID,
    ROOM_PIERS_M,
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
from yaml_ifc.yamlio import load as load_yaml_ifc

MODULE_WIDTHS = {0.3, 0.4, 0.45, 0.6, 0.8, 0.9}
# West gable pocket doors, storey Y, from the opening AlongAxis.
WEST_DOORS_Y = ((10.25, 11.35), (13.85, 14.95))
# East gable pocket door at the glass.
EAST_DOOR_Y = (10.25, 11.35)


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


def _overlap(a, b) -> float:
    dx = min(a[3], b[3]) - max(a[0], b[0])
    dy = min(a[4], b[4]) - max(a[1], b[1])
    dz = min(a[5], b[5]) - max(a[2], b[2])
    if dx > 1e-6 and dy > 1e-6 and dz > 1e-6:
        return dx * dy * dz
    return 0.0


def _inside(point, box) -> bool:
    x, y, z = point
    return box[0] < x < box[3] and box[1] < y < box[4] and box[2] < z < box[5]


def test_furnishings_follow_the_box_schema():
    doc = load_furnishings()
    assert FURNISHINGS_PATH.is_file()
    assert SOURCE_COMMIT == "34e1597"
    assert doc["walls"] == []
    spaces = doc["spaces"]
    assert [space["id"] for space in spaces] == [ROOM_ID]
    space = spaces[0]
    assert space["PredefinedType"] == "INTERNAL"
    assert space["Name"] == "1.02 Obývák"
    for field in ("Origin", "Width", "Depth", "Height", "ObjectType"):
        assert field not in space

    records = furnishing_records(doc)
    assert records
    by_id = {item["id"]: item for item in records}
    assert len(by_id) == len(records)

    for item in records:
        assert item["list"] in FURNISHING_LISTS
        assert str(item["ObjectType"]).isalpha()
        assert item["ContainedInStructure"] == ROOM_ID
        assert "RefDirection" not in item
        assert len(item["Origin"]) == 2
        box = _aabb(item)
        assert box[0] >= ROOM_X0 - 1e-9
        assert box[3] <= ROOM_X1 + 1e-9
        assert box[1] >= ROOM_Y0 - 1e-9
        assert box[4] <= ROOM_Y1 + 1e-9
        assert box[2] >= -1e-9
        assert box[5] <= ROOM_CLEAR_M + 1e-9
        for pier in ROOM_PIERS_M:
            pier_box = (pier[0], pier[2], -1.0, pier[1], pier[3], 10.0)
            assert _overlap(box, pier_box) == 0.0, item["id"]

    for i, left in enumerate(records):
        for right in records[i + 1 :]:
            assert _overlap(_aabb(left), _aabb(right)) == 0.0, (left["id"], right["id"])

    # Eyes for the three SketchUp-like views stand in the clear floor.
    for spec in FURNITURE_VIEWS:
        for item in records:
            assert not _inside(spec["eye"], _aabb(item)), (spec["id"], item["id"])


def test_element_types_match_the_owner_mapping():
    records = furnishing_records()
    by_type: dict[tuple, list] = {}
    for item in records:
        by_type.setdefault((item["list"], item["PredefinedType"], item["ObjectType"]), []).append(
            item
        )

    def ids(key):
        return [item["id"] for item in by_type[key]]

    cabinets = [item for item in records if item["list"] == "systemFurniture"]
    assert cabinets
    assert all(item["PredefinedType"] == "USERDEFINED" for item in cabinets)
    assert {item["ObjectType"] for item in cabinets} == {
        "TallCabinet",
        "BaseCabinet",
        "WallCabinet",
        "Island",
    }
    for item in cabinets:
        if item["ObjectType"] == "Island":
            assert item["Width"] == pytest.approx(1.8)
            assert item["Depth"] == pytest.approx(0.9)
        else:
            assert item["Width"] in MODULE_WIDTHS
        if item["ObjectType"] == "BaseCabinet":
            assert item["Depth"] == pytest.approx(0.6)
            assert item["Height"] == pytest.approx(0.9)
            assert item["Origin"][1] + item["Depth"] == pytest.approx(ROOM_Y1)
        if item["ObjectType"] == "WallCabinet":
            assert item["Depth"] == pytest.approx(0.35)
            assert item["Origin"][1] + item["Depth"] == pytest.approx(ROOM_Y1)
        if item["ObjectType"] == "TallCabinet":
            assert item["Depth"] == pytest.approx(0.6)
            assert item["Origin"][1] + item["Depth"] == pytest.approx(ROOM_Y1)

    assert ids(("electricAppliances", "ELECTRICCOOKER", "Cooktop")) == ["AP-varna"]
    assert ids(("electricAppliances", "REFRIGERATOR", "BuiltInFridge")) == ["AP-lednice"]
    assert ids(("electricAppliances", "USERDEFINED", "BuiltInOven")) == ["AP-trouba"]
    assert ids(("electricAppliances", "USERDEFINED", "CeilingHood")) == ["AP-digestor"]
    fridge = by_type[("electricAppliances", "REFRIGERATOR", "BuiltInFridge")][0]
    assert fridge["Width"] == pytest.approx(0.6)
    assert fridge["Depth"] == pytest.approx(0.6)
    assert fridge["Origin"][1] + fridge["Depth"] == pytest.approx(ROOM_Y1)

    assert ids(("sanitaryTerminals", "SINK", "KitchenSink")) == ["ST-drez"]

    tables = [item for item in records if item["PredefinedType"] == "TABLE"]
    assert {item["ObjectType"] for item in tables} == {"DiningTable", "SideTable"}
    assert sum(1 for item in tables if item["ObjectType"] == "SideTable") == 2
    chairs = [item for item in records if item["PredefinedType"] == "CHAIR"]
    assert {item["ObjectType"] for item in chairs} == {"DiningChair", "BarStool"}
    sofas = [item for item in records if item["PredefinedType"] == "SOFA"]
    assert len(sofas) == 1 and sofas[0]["ObjectType"] == "SectionalSofa"
    shelves = [item for item in records if item["PredefinedType"] == "SHELF"]
    assert {item["ObjectType"] for item in shelves} == {"WallShelf", "HangingPlantShelf"}
    assert ids(("furniture", "USERDEFINED", "Sideboard")) == ["FN-komoda"]
    assert ids(("furniture", "USERDEFINED", "TvUnit")) == ["FN-tv"]
    assert ids(("coverings", "USERDEFINED", "Rug")) == ["CV-koberec"]
    lights = [item for item in records if item["list"] == "lightFixtures"]
    assert len(lights) == 2
    assert all(item["PredefinedType"] == "DIRECTIONSOURCE" for item in lights)
    assert all(item["ObjectType"] == "TrackLight" for item in lights)


def test_furniture_keeps_the_door_openings_clear():
    """Boxes may touch a wall face. They do not stand in a door opening."""
    for item in furnishing_records():
        box = _aabb(item)
        if box[0] < ROOM_X0 + 0.05:
            for y0, y1 in WEST_DOORS_Y:
                assert _overlap(box, (ROOM_X0, y0, 0, ROOM_X0 + 0.6, y1, 2.45)) == 0.0
        if box[3] > ROOM_X1 - 0.5:
            y0, y1 = EAST_DOOR_Y
            assert _overlap(box, (ROOM_X1 - 0.6, y0, 0, ROOM_X1, y1, 2.45)) == 0.0


def test_ref_direction_turns_width_in_plan():
    doc = {
        "schema": "IFC4 ADD2 TC1",
        "units": {"LengthUnit": "METRE"},
        "project": {"id": "PRJ", "Aggregates": ["SITE"]},
        "site": {"id": "SITE", "Aggregates": ["BLD"]},
        "building": {"id": "BLD", "Aggregates": ["S1"]},
        "storey": {"id": "S1", "Elevation": 0},
        "walls": [],
        "openings": [],
        "doors": [],
        "windows": [],
        "systemFurniture": [
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
        ],
    }
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


def test_build_places_every_box_inside_its_yaml_footprint():
    doc = load_furnishings()
    records = {item["id"]: item for item in furnishing_records(doc)}
    shape, meta = build()
    assert meta["derived"]["furnishings"] == len(records)
    placed = [child for child in shape.children if getattr(child, "furnishing_id", None)]
    assert {child.furnishing_id for child in placed} == set(records)
    labels = {child.label for child in placed}
    assert labels == {
        LABEL_CABINET,
        LABEL_APPLIANCE,
        LABEL_SINK,
        LABEL_FURNITURE,
        LABEL_RUG,
        LABEL_LIGHT,
    }
    wall_labels = {child.label for child in shape.children if getattr(child, "wall_id", None)}
    assert wall_labels <= {LABEL_MASONRY, LABEL_GLAZING}
    assert LABEL_DOOR in {child.label for child in shape.children}
    for child in placed:
        box = _aabb(records[child.furnishing_id])
        bb = child.bounding_box()
        assert bb.min.X >= box[0] * 1000.0 - 0.05
        assert bb.min.Y >= box[1] * 1000.0 - 0.05
        assert bb.min.Z >= box[2] * 1000.0 - 0.05
        assert bb.max.X <= box[3] * 1000.0 + 0.05
        assert bb.max.Y <= box[4] * 1000.0 + 0.05
        assert bb.max.Z <= box[5] * 1000.0 + 0.05
        assert child.volume > 0


def test_furniture_scenes_keep_the_existing_views():
    specs = {item["id"]: item for item in scenes()}
    assert {"overview", "opening", "posts", "plan"} <= set(specs)
    for spec in FURNITURE_VIEWS:
        scene = specs[spec["id"]]
        assert scene["title"]["cs"]
        assert "projection" not in scene
        assert scene["camera"]["up"] == [0.0, 1.0, 0.0]
        assert scene["hFovDeg"] == spec["hFovDeg"]


def test_furnishings_yaml_round_trips(tmp_path):
    original = load_yaml_ifc(FURNISHINGS_PATH)
    ifc_path = tmp_path / "furnishings.ifc"
    model = write_ifc(original, ifc_path)
    assert validation_errors(model) == []
    restored, skipped = read_ifc(ifc_path)
    assert skipped == {}
    _same(original, restored)
    assert len(model.by_type("IfcSpace")) == 1
    assert len(model.by_type("IfcElectricAppliance")) == 4
    assert len(model.by_type("IfcSystemFurnitureElement")) == 7


def test_userdefined_without_object_type_is_rejected():
    doc = load_yaml_ifc(FURNISHINGS_PATH)
    doc["systemFurniture"][0].pop("ObjectType")
    with pytest.raises(ValueError, match="ObjectType"):
        build_ifc(doc)

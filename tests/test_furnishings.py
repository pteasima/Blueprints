"""Room 1.02 furniture: one yaml-ifc box per element, clear of the walls."""

from pathlib import Path
import sys

import pytest
import yaml

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "models"))

from ground_floor import (  # noqa: E402
    FURNISHINGS_COMMIT,
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
    ROOM_ID,
    ROOM_PIERS_M,
    ROOM_X0,
    ROOM_X1,
    ROOM_Y0,
    ROOM_Y1,
    _furnishing_solid,
    build,
    furnishing_records,
    load_furnishings,
    scenes,
)

MODULE_WIDTHS = {0.3, 0.4, 0.45, 0.6, 0.8, 0.9}
# West gable pocket doors, storey Y, from the opening AlongAxis.
WEST_DOORS_Y = ((10.25, 11.35), (13.85, 14.95))
# East gable pocket door at the glass.
EAST_DOOR_Y = (10.25, 11.35)


def _aabb(element):
    x, y, z = (float(v) for v in element["Origin"])
    return (
        x,
        y,
        z,
        x + float(element["Width"]),
        y + float(element["Depth"]),
        z + float(element["Height"]),
    )


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
    assert FURNISHINGS_COMMIT
    spaces = doc["spaces"]
    assert [space["id"] for space in spaces] == [ROOM_ID]
    space = spaces[0]
    assert space["Origin"] == [ROOM_X0, ROOM_Y0, 0]
    assert space["Width"] == pytest.approx(ROOM_X1 - ROOM_X0)
    assert space["Depth"] == pytest.approx(ROOM_Y1 - ROOM_Y0)
    assert space["ObjectType"] == "LivingRoom"

    records = furnishing_records(doc)
    assert records
    by_id = {item["id"]: item for item in records}
    assert len(by_id) == len(records)

    for item in records:
        assert item["list"] in FURNISHING_LISTS
        assert str(item["ObjectType"]).isalpha()
        assert item["ContainedInStructure"] == ROOM_ID
        assert "RefDirection" not in item
        box = _aabb(item)
        assert box[0] >= ROOM_X0 - 1e-9
        assert box[3] <= ROOM_X1 + 1e-9
        assert box[1] >= ROOM_Y0 - 1e-9
        assert box[4] <= ROOM_Y1 + 1e-9
        assert box[2] >= -1e-9
        assert box[5] <= float(space["Height"]) + 1e-9
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

    assert ids(("appliances", "ELECTRICCOOKER", "Cooktop")) == ["AP-varna"]
    assert ids(("appliances", "REFRIGERATOR", "Refrigerator")) == ["AP-lednice"]
    assert ids(("appliances", "USERDEFINED", "Oven")) == ["AP-trouba"]
    assert ids(("appliances", "USERDEFINED", "RangeHood")) == ["AP-digestor"]
    fridge = by_type[("appliances", "REFRIGERATOR", "Refrigerator")][0]
    assert fridge["Width"] == pytest.approx(0.6)
    assert fridge["Depth"] == pytest.approx(0.6)
    assert fridge["Origin"][1] + fridge["Depth"] == pytest.approx(ROOM_Y1)

    assert ids(("sanitaryTerminals", "SINK", "Sink")) == ["ST-drez"]

    tables = [item for item in records if item["PredefinedType"] == "TABLE"]
    assert {item["ObjectType"] for item in tables} == {"DiningTable", "SideTable"}
    assert sum(1 for item in tables if item["ObjectType"] == "SideTable") == 2
    chairs = [item for item in records if item["PredefinedType"] == "CHAIR"]
    assert {item["ObjectType"] for item in chairs} >= {"Chair", "BarStool"}
    sofas = [item for item in records if item["PredefinedType"] == "SOFA"]
    assert len(sofas) == 1 and sofas[0]["ObjectType"] == "SectionalSofa"
    shelves = [item for item in records if item["PredefinedType"] == "SHELF"]
    assert {item["ObjectType"] for item in shelves} == {"Shelf", "PlantShelf"}
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
    element = {
        "id": "SF-turned",
        "list": "systemFurniture",
        "label": LABEL_CABINET,
        "Name": "Turned",
        "PredefinedType": "USERDEFINED",
        "ObjectType": "BaseCabinet",
        "Origin": [0.0, 0.0, 0.0],
        "Width": 2.0,
        "Depth": 1.0,
        "Height": 0.5,
        "RefDirection": [0.0, 1.0],
    }
    solid = _furnishing_solid(element)
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


def test_object_type_rejects_a_size():
    doc = yaml.safe_load(FURNISHINGS_PATH.read_text(encoding="utf-8"))
    doc["systemFurniture"][0]["ObjectType"] = "BaseCabinet600"
    with pytest.raises(ValueError, match="ObjectType"):
        from ground_floor import _validate_furnishings

        _validate_furnishings(doc, FURNISHINGS_PATH)

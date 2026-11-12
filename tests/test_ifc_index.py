"""Inspector index: spatial tree, containment, cable number, circuit."""

from blueprints.ifc_index import index_documents, merge_indexes
from blueprints.viewer_checks import run_viewer_script


def _doc():
    return {
        "schema": "IFC4 ADD2 TC1",
        "units": {"LengthUnit": "METRE"},
        "project": {"id": "PRJ", "Name": "House", "Aggregates": ["SITE"]},
        "site": {
            "id": "SITE",
            "Name": "Site",
            "RefElevation": 472.1,
            "Aggregates": ["BLD"],
        },
        "building": {"id": "BLD", "Name": "House", "Aggregates": ["STOREY"]},
        "storey": {"id": "STOREY", "Name": "1.NP", "Elevation": 0},
        "spaces": [
            {
                "id": "SP",
                "Name": "Room",
                "PredefinedType": "INTERNAL",
            }
        ],
        "walls": [
            {
                "id": "W-1",
                "Name": "Wall",
                "Axis": {"Start": [0.0, 0.0], "End": [2.0, 0.0]},
                "Thickness": 0.3,
            }
        ],
        "openings": [],
        "doors": [],
        "windows": [],
        "lightFixtures": [
            {
                "id": "C12-S",
                "Name": "Lamp",
                "PredefinedType": "POINTSOURCE",
                "ObjectType": "Pendant",
                "ContainedInStructure": "SP",
                "Origin": [1.0, 1.0],
                "Width": 0.2,
                "Depth": 0.2,
                "Height": 0.1,
                "PropertySets": [
                    {
                        "Name": "Pset_YamlIfc",
                        "Properties": {"CableNumber": 12, "Panel": 2},
                    }
                ],
            }
        ],
        "circuits": [
            {
                "id": "CIR-1",
                "Name": "Lights",
                "PredefinedType": "LIGHTING",
                "Assigns": ["C12-S"],
            }
        ],
    }


def _by_yaml(index):
    return {element["id"]: element for element in index["elements"].values()}


def test_index_builds_storey_space_and_notes():
    index = index_documents([_doc()])
    by_id = _by_yaml(index)
    project = by_id["PRJ"]
    assert index["roots"] == [project["globalId"]]
    assert by_id["SITE"]["parentId"] == project["globalId"]
    assert by_id["BLD"]["parentId"] == by_id["SITE"]["globalId"]
    storey = by_id["STOREY"]
    assert by_id["SP"]["parentId"] == storey["globalId"]
    assert by_id["SP"]["type"] == "IfcSpace"
    wall = by_id["W-1"]
    assert wall["type"] == "IfcWall"
    assert wall["parentId"] is None
    assert wall["containerId"] == storey["globalId"]
    assert any(item["name"] == "Thickness" and item["value"] == 0.3 for item in wall["dimensions"])
    lamp = by_id["C12-S"]
    assert lamp["type"] == "IfcLightFixture"
    assert lamp["containerId"] == by_id["SP"]["globalId"]
    assert lamp["cables"] == ["12"]
    assert lamp["circuits"] == ["Lights"]
    assert lamp["role"] == "POINTSOURCE"
    assert any(item["name"] == "Width" for item in lamp["dimensions"])
    names = {item["name"] for item in lamp["propertySets"]}
    assert "Pset_YamlIfc" in names


def test_merge_keeps_one_spatial_root():
    left = index_documents([_doc()])
    extra = _doc()
    extra["lightFixtures"] = []
    extra["circuits"] = []
    extra["spaces"] = [
        {"id": "SP-2", "Name": "Other", "PredefinedType": "INTERNAL"}
    ]
    right = index_documents([extra])
    merged = merge_indexes([left, right])
    assert len(merged["roots"]) == 1
    ids = {element["id"] for element in merged["elements"].values()}
    assert {"SP", "SP-2", "C12-S", "W-1"} <= ids


def test_groups_are_not_in_the_spatial_tree():
    """IfcGroup and IfcSystem sit in the groups list, with no display parent.

    A circuit is a group; an empty parent group is still listed. Membership
    can nest: Electrical → circuit, and the lamp is a member of the circuit.
    """
    from yaml_ifc.to_ifc import build_ifc
    from yaml_ifc.ids import global_id
    from yaml_ifc.supported import PSET_NAME
    from blueprints.ifc_index import index_model

    doc = _doc()
    model = build_ifc(doc)
    electrical = model.create_entity(
        "IfcGroup",
        GlobalId=global_id("GRP-ELECTRICAL"),
        Name="Electrical",
        ObjectType="Electrical",
    )
    empty = model.create_entity(
        "IfcGroup",
        GlobalId=global_id("GRP-EMPTY"),
        Name="Empty",
        ObjectType="Empty",
    )
    for product, yaml_id in ((electrical, "GRP-ELECTRICAL"), (empty, "GRP-EMPTY")):
        values = [
            model.create_entity(
                "IfcPropertySingleValue",
                Name="id",
                NominalValue=model.create_entity("IfcLabel", yaml_id),
            )
        ]
        pset = model.create_entity(
            "IfcPropertySet",
            GlobalId=global_id(f"pset:{PSET_NAME}:{yaml_id}"),
            Name=PSET_NAME,
            HasProperties=values,
        )
        model.create_entity(
            "IfcRelDefinesByProperties",
            GlobalId=global_id(f"rel:defines:{PSET_NAME}:{yaml_id}"),
            RelatedObjects=[product],
            RelatingPropertyDefinition=pset,
        )
    circuit = next(c for c in model.by_type("IfcDistributionCircuit") if c.Name == "Lights")
    model.create_entity(
        "IfcRelAssignsToGroup",
        GlobalId=global_id("rel:group:GRP-ELECTRICAL"),
        RelatedObjects=[circuit],
        RelatedObjectsType="GROUP",
        RelatingGroup=electrical,
    )
    index = index_model(model)
    by_id = _by_yaml(index)
    assert by_id["C12-S"]["circuits"] == ["Lights"]
    circuit_el = by_id["CIR-1"]
    assert circuit_el["type"] == "IfcDistributionCircuit"
    assert circuit_el["parentId"] is None
    assert circuit_el["containerId"] is None
    assert by_id["GRP-ELECTRICAL"]["childGroupIds"] == [circuit_el["globalId"]]
    assert circuit_el["parentGroupIds"] == [by_id["GRP-ELECTRICAL"]["globalId"]]
    assert circuit_el["memberIds"] == [by_id["C12-S"]["globalId"]]
    assert by_id["C12-S"]["groups"] == [circuit_el["globalId"]]
    assert by_id["GRP-EMPTY"]["memberIds"] == []
    assert by_id["GRP-EMPTY"]["childGroupIds"] == []
    assert by_id["W-1"]["parentId"] is None  # wall stays on the storey via container
    group_ids = {index["elements"][gid]["id"] for gid in index["groups"]}
    assert group_ids == {"GRP-ELECTRICAL", "GRP-EMPTY", "CIR-1"}
    # Preferred root order: Electrical before a leftover empty group.
    names = [index["elements"][gid]["id"] for gid in index["groups"]]
    assert names[0] == "GRP-ELECTRICAL"


def test_viewer_ifc_scripts():
    run_viewer_script("ifcInspector.test.mjs")

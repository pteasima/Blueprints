"""Ground-floor model constants, paths, and viewer labels."""
from __future__ import annotations

from pathlib import Path

from yaml_ifc.supported import FURNISHINGS


MODEL_NAME = "ground_floor"
MODEL_LABEL = "RD Šíma 1.NP"
EXPORT_KIND = "solid"
# Cable routes: inputs/ground_floor/cable-routes.yaml → docs/models/ground_floor.cables.json.
CABLE_ROUTES = True

SOURCE_REPO = "pteasima/yaml-ifc"
SOURCE_COMMIT = "0f96c26"
SOURCE_PATH = (
    Path(__file__).resolve().parents[2] / "inputs" / "ground_floor" / "ground-floor.yaml"
)
FURNISHINGS_PATH = SOURCE_PATH.with_name("furnishings.yaml")

# yaml-ifc ``DEFAULT_WALL_HEIGHT``. Not written back into the YAML.
DEFAULT_WALL_HEIGHT_M = 3.0
# Placeholder band for W-017, centred on the drawn line.
MISSING_THICKNESS_M = 0.05
GLAZED_WALLS = frozenset({"W-023"})

MM = 1000.0
# Cutter sticks out of the wall so the boolean does not share a face with it.
CUT_PAD_MM = 2.0
DOOR_LEAF_MM = 40.0
WINDOW_LEAF_MM = 24.0
LEAF_GAP_MM = 15.0
# Glazed hinged door (the terrace "balcony" door OP32, Petr 2026-11-12): a
# frame of this face width round a glass pane, same leaf thickness. Set by
# Pset_DoorCommon.GlazingAreaFraction > 0 on the IfcDoor (a standard IFC
# property), not by id. The frame width is a typical aluminium profile face,
# not product data.
GLAZED_DOOR_FRAME_MM = 70.0
GLAZED_DOOR_GLASS_MM = 24.0
# A sliding sash runs in its own track beside the fixed pane, so it can pass
# over it without the two panes sharing a plane. Offset from the frame centre
# toward local +Y, which is indoors on the west-to-east south-façade walls
# (W-001, W-002) that carry every sash so far (docs/design/ground-floor.md,
# Windows).
SASH_GAP_MM = 6.0
# Share of its own width a sliding sash travels when open (the viewer's
# pre-panel 80 %, kept so the animation reads the same).
WINDOW_TRAVEL = 0.8

LABEL_MASONRY = "masonry"
LABEL_GLAZING = "glazing"
LABEL_DOOR = "door"
LABEL_CABINET = "cabinet"
# Gridfinity baseplates in the drawers (kitchen-cabinets.md "Gridfinity
# drawers"). They are not in ground_floor.glb but in their own
# ground_floor.gridfinity.glb (Petr, 2026-11-19, when the viewer crashed on
# iPhone and iPad). Since the viewer merges primitives per element
# (docs/viewer/Performance.md) it loads that layer right after the model,
# on by default (Petr, 2026-11-20: "put back gridfinity baseplates").
# GRIDFINITY_ON_DEMAND = False would fuse them into the drawers again.
LABEL_GRIDFINITY = "gridfinity"
GRIDFINITY_ON_DEMAND = True
# Low-poly drawer items (t1008u pilot): on-demand like the baseplates, and
# an IfcGroup (GRP-DRAWER-CONTENTS) the inspector can hide.
LABEL_CONTENTS = "contents"
LABEL_APPLIANCE = "appliance"
LABEL_SINK = "sink"
LABEL_FURNITURE = "furniture"
LABEL_UPHOLSTERY = "upholstery"
LABEL_OAK = "oak"
LABEL_RUG = "rug"
LABEL_LIGHT = "light"
SOFA_TYPES = frozenset({"SofaSeat", "SofaBack", "SofaArm"})

# YAML list → viewer label. The list keys are yaml-ifc's, not a local guess.
# Spaces are not extruded.
FURNISHING_LABELS = {
    "systemFurniture": LABEL_CABINET,
    "electricAppliances": LABEL_APPLIANCE,
    "sanitaryTerminals": LABEL_SINK,
    "furniture": LABEL_FURNITURE,
    "coverings": LABEL_RUG,
    "lightFixtures": LABEL_LIGHT,
}
FURNISHING_LISTS = tuple(key for key, _ifc_class, _type_class in FURNISHINGS)
# Clear room 1.02, metres, from the wall footprints. See furnishings.yaml.
ROOM_ID = "SP-1.02"
ROOM_X0 = 18.8
ROOM_X1 = 29.9
ROOM_Y0 = 10.25
ROOM_Y1 = 15.6
# 300 mm piers in front of the north wall (W-052, W-053).
ROOM_PIERS_M = (
    (22.15, 22.45, 15.35, 15.6),
    (25.15, 25.45, 15.35, 15.6),
)
# Shrink each solid so two flush boxes do not share a face.
MESH_GAP_MM = 1.0
# Drawing note for room 1.02. Not an IfcSpace field.
ROOM_CLEAR_M = 5.05

LABEL_WORKTOP = "worktop"
LABEL_HOB = "hob"
# Stone on a wall behind a counter that is not a kitchen run (the dining
# cabinets' backsplash): drawn as worktop stone.
STONE_TYPES = frozenset({"Backsplash"})

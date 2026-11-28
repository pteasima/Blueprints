"""RD Šíma ground floor — walls and the openings cut through them.

Design facts: docs/design/ground-floor.md, bathrooms in
docs/design/bathrooms.md, room 1.02 furniture in docs/design/furnishings.md.
The visual centre of 1.02 is the false ridge, not the wall-to-wall middle.

Source: ``inputs/ground_floor/ground-floor.yaml``, vendored from
pteasima/yaml-ifc @ 0f96c26. Lengths in that file are metres. Solids are
millimetres, the same as the other build123d models, so the existing viewer
path (glTF metres, Z-up CAD → Y-up) applies unchanged.

Each wall that has a body is extruded from ``yaml_ifc.footprints``. Those
polygons are the butt joints IfcOpenShell builds for the file's
``connections``: the relating wall runs through, and the related wall is
trimmed to its face. Corner geometry is not computed here.

Wall height: no wall in the file has ``Height``. yaml-ifc extrudes a wall
that has a thickness (or a footprint/profile) and no height by 3 m
(``DEFAULT_WALL_HEIGHT``) and does not write that height back. This model
uses that 3 m. The clear heights listed in the YAML header belong to rooms,
and ``IfcSpace`` is not in the file. The obývák roof section is one room,
not a storey wall height, so it is not applied here.

W-017 has no ``Thickness``. The axis is the drawn silná line, not a measured
centreline. ``footprints`` leaves it out. A 50 mm band is centred on that
line so the wall is a solid and OP19 can be cut through it. yaml-ifc would
otherwise emit no wall body.

OP27 and OP29 (the sliding outer parts of the living-room window O11) have
height 2.5 m and sill 0 since Petr's 2026-11-12 reading of the elevation, so
W-023 is cut at OP27, OP28 and OP29 and keeps the two 100 mm posts.

Door and window leaves are thin panels in the void: timber doors, glazing
for windows and for the W-023 run. Plain openings stay empty.

W-004 and W-014 are the 120 mm closed squares on the silná layer. The file
keeps them as short walls because IfcColumn is deferred. Neither axis meets
another wall, so at overview scale they read as two thin vertical bars.

Kitchen and living furniture is a second file, ``furnishings.yaml``, the
same commit's furnishings schema. The file has the room space, the kitchen
boxes, the fridge, and the living-room run from plan v3. Each element is
one placement: the ``IfcExtrudedAreaSolid`` that ``yaml_ifc`` writes
(placement origin at the minimum corner, profile centred so the box fills
Width × Depth × Height). The kitchen, the sofa and the cabinets stay that
box. The Gatta table, the chairs and the bookshelf are drawn inside the
same box. Kitchen cabinets are monoblock runs (``kitchen_cabinet.runs``):
each part is its own solid, and ``kitchen_ifc.apply`` turns the bay boxes
into IfcGroups and the parts into the run's IfcRelAggregates children
(docs/design/kitchen-cabinets.md). This model does not read the sizes itself; the detail builders
use the extrusion. Solids are inset by 1 mm so flush modules do not share
a face. Walls are not moved to make a box fit. The space has no body.

Bathroom 1.20 is a third file, ``bathroom-1.20.yaml``. Floor tiles, wall
tiles, grout, and the ACO point drain are the solids ``yaml_ifc`` lays out
for that file. The screed, the membrane, and the ceiling have no measured
thickness and are not extruded.

Bathroom 1.07 is ``bathroom-1.07.yaml``. The shower falls 1.25% from the
south toward a wall drain in the north pre-wall. EPS under the shower is 60+40.

Bedroom 1.11 field devices are ``bedroom-1.11.yaml``. Lights, buttons,
sensors, outlets, and blind actuators are boxes in the room.

    python -m blueprints.export ground_floor
"""

from __future__ import annotations

from .constants import (
    MODEL_NAME,
    MODEL_LABEL,
    EXPORT_KIND,
    CABLE_ROUTES,
    SOURCE_REPO,
    SOURCE_COMMIT,
    SOURCE_PATH,
    FURNISHINGS_PATH,
    DEFAULT_WALL_HEIGHT_M,
    MISSING_THICKNESS_M,
    GLAZED_WALLS,
    MM,
    CUT_PAD_MM,
    DOOR_LEAF_MM,
    WINDOW_LEAF_MM,
    LEAF_GAP_MM,
    GLAZED_DOOR_FRAME_MM,
    GLAZED_DOOR_GLASS_MM,
    SASH_GAP_MM,
    WINDOW_TRAVEL,
    LABEL_MASONRY,
    LABEL_GLAZING,
    LABEL_DOOR,
    LABEL_CABINET,
    LABEL_GRIDFINITY,
    GRIDFINITY_ON_DEMAND,
    LABEL_CONTENTS,
    LABEL_APPLIANCE,
    LABEL_SINK,
    LABEL_FURNITURE,
    LABEL_UPHOLSTERY,
    LABEL_OAK,
    LABEL_RUG,
    LABEL_LIGHT,
    SOFA_TYPES,
    FURNISHING_LABELS,
    FURNISHING_LISTS,
    ROOM_ID,
    ROOM_X0,
    ROOM_X1,
    ROOM_Y0,
    ROOM_Y1,
    ROOM_PIERS_M,
    MESH_GAP_MM,
    ROOM_CLEAR_M,
    LABEL_WORKTOP,
    LABEL_HOB,
    STONE_TYPES,
)
from .document import load_document, load_furnishings, furnishing_records
from .furnishings import (
    _yaml_id,
    _body_extrusion,
    _corner_size,
    _solid_from_product,
    _appliance_doors,
    _appliance_with_doors,
    _furnishing_parts,
    soffit_solids,
)
from .kitchen import (
    _void_solid,
    _cut_solid,
    _run_box,
    _grip_solid,
    _kitchen_run_parts,
    LINKAGE_MS,
    _front_plane_boxes,
    _linkage_motion,
    _cabinet_door_motion,
)
from .paint import _color, _paint, _mm, _tag
from .walls import (
    _axis,
    _thickness_m,
    _height_m,
    _base_z_m,
    _void,
    _overlap,
    _cutter,
    _subtract_opening,
    _leaf,
    _solids,
    _place,
    _wall_label,
    _local_ring_mm,
    _extrude_plan,
    _span_y,
)
from .doors import (
    HINGED_LEAF_MAX_M,
    _SLIDING_OPS,
    SECTIONAL_OPERATION,
    SECTIONAL_SECTIONS,
    SECTIONAL_BEND_MM,
    SECTIONAL_FACE_GAP_MM,
    _SWING_OPS,
    _door_field,
    _hinge_side,
    _opens_toward_plus_y,
    flush_leaf_offset_m,
    _shift_door_leaf,
    hinge_rotation_sign,
    is_sectional,
    _classify_door,
    _point_cad,
    is_glazed_door,
    _glazed_leaf,
    _door_motion,
    _sectional_record,
    _sectional_leaf,
    _sliding_panels,
)
from .windows import (
    WINDOW_PANELS_PSET,
    WINDOW_PANELS_PROP,
    WINDOW_FIXED,
    WINDOW_SLIDING,
    WINDOW_UNKNOWN,
    _WINDOW_OPERATIONS,
    _WINDOW_PARTITIONS,
    window_panels,
    window_slide_override,
    window_slide_sign,
    _window_sashes,
    _window_motion,
)
from .build import build
from .scenes import (
    KITCHEN_SCENE,
    BATHROOM_120_SCENE,
    BATHROOM_107_SCENE,
    _kitchen_scene,
    _pick,
    scenes,
    part_groups,
    ifc_index,
)

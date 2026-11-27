"""Kitchen cabinet runs as monoblocks: shared walls, drawers, worktop, cladding.

Facts and their sources: docs/design/kitchen-cabinets.md. Numbers Petr did
not give are IKEA METOD carcass defaults, Blum MERIVOBOX catalogue values
(every drawer, 2026-11-23) or ``guess:`` values, marked there.

A *run* is one continuous cabinet body (Petr, 2026-11-12: "lets assume
cabinets are a monoblock. Neighboring walls are shared, including the back
wall in the island cabinets"). In ``furnishings.yaml`` a run is an
``IfcFurniture`` element with ``ObjectType: KitchenRun`` and no box; its
``Pset_KitchenRun`` holds the run parameters. A *bay* is one of the existing
cabinet boxes (``SF-I600a`` …) with ``Pset_KitchenBay.Run`` naming its run.
The bay box is the bay's slot: its Width, Depth, Height and placement drive
everything here. Nothing below is a typed-in coordinate.

Run frame, millimetres: ``a`` along the run (the first bay's RefDirection),
``c`` across it (that direction turned +90°), ``z`` up from the floor. Every
part is a list of axis-aligned boxes in that frame, so a part can be turned
into build123d solids (``ground_floor``) and into IFC extrusions
(``kitchen_ifc``) from the same numbers.

Who owns what (the IFC structure, docs/design/kitchen-cabinets.md):
every part belongs to the run. A bay's group lists its own parts (bottom,
rails or top, back, front or drawers) plus the shared parts it touches: the
dividers on both sides, the run's end sides, the island's central back, and
the stone cladding at its end. A divider is listed in both neighbouring bays,
never built twice.

Sinks cut the worktop with their manufacturer's undermount cut-out
(``Pset_Sink``); a bay with ``Pset_Hob`` gets the hob's cut-out (stepped for
flush-fit), the hob itself (glass and housing, an appliance in IFC) and a
top drawer kept 8 mm under it; a run with ``Backsplash`` gets stone on the
wall from the worktop up to the boxes hanging over it.
"""

from __future__ import annotations

from .hardware import (
    PSET_CABINET,
    PSET_DRAWERS,
    PSET_RUN,
    PSET_BAY,
    PSET_SINK,
    PSET_HOB,
    PSET_FRONTS,
    PSET_BUILTIN,
    RUN_OBJECT_TYPE,
    KIND_NICHE,
    IKEA_DEFAULTS_MM,
    MERIVOBOX_COLOUR,
    MOVENTO_NL,
    RUN_FLAGS,
    AVENTOS,
    LIFT_OPEN_DEG,
    LIFT_STEPS,
    LIFT_ARM,
    LIFT_HF_LOWER_OPEN_DEG,
    LIFT_HF_SHELF_SETBACK,
    LIFT_FRONT_DENSITY,
    CARCASS_BOX,
    SINK_CUTOUT_INSET_MM,
    TOL,
    DRIP_GROOVE_WIDTH,
    DRIP_GROOVE_DEPTH,
    DRIP_GROOVE_CENTRE,
    DRIP_GROOVE_END_STOP,
    DRAWER_KINDS,
    ZONE_KINDS,
    _NO_BOARD_BETWEEN,
    MERIVOBOX_MIN_FRONT,
    MERIVOBOX_NL,
    MERIVOBOX_NL_BY_SIDE,
    MERIVOBOX_70KG_NL,
    MIELE_INTAKE_HOLE_D,
    MIELE_INTAKE_X,
    MIELE_INTAKE_Y,
    MIELE_INTAKE_HOLE_GAP,
    MIELE_REAR_CUTOUT_H,
    MIELE_REAR_CUTOUT_W,
    HOB_VENT_CHANNEL_MIN,
    MERIVOBOX_AUTO_SIDES,
    BAY_LISTS,
    EXTERNAL_LISTS,
)
from .types import (
    Frame,
    _unit,
    Drawer,
    Leaf,
    LiftJoint,
    Zone,
    Void,
    Hob,
    HobVent,
    Part,
    Grip,
    _sample_segments,
    grip_profile,
    Bay,
    Run,
    LedField,
)
from .geometry import (
    _cuts,
    _ring,
    _near,
    _rows,
    _segments,
    _mitre_cut,
    _tilt_point,
    _boxes_meet,
    _even,
    _plan_meet,
    _rot,
)
from .props import (
    _prop,
    has_drawers,
    has_fronts,
    section_widths,
    section_element,
    section_elements,
    run_of,
    is_run,
    _params,
    zone_spec,
    zone_contents,
    _front_z0,
    zones,
    _nominals,
)
from .drawers import (
    inner_side_height,
    merivobox_space_requirement,
    merivobox_min_front,
    inner_drawers,
    drawer_system,
    merivobox_nl,
    merivobox_side,
    merivobox_load,
    merivobox_profile_article,
    drawer_inside,
    drawer_box_length,
    gridfinity_main,
    gridfinity_cells,
    wants_gridfinity,
    _drawer,
    _frame_pullout,
    gridfinity_baseplate,
    _items,
    bin_clearance,
    drawer_boxes,
    inner_drawer_boxes,
    latch_boxes,
)
from .fronts import (
    _grip_edge,
    _hinge_a,
    _leaves,
    _racks,
    _hf_fourbar,
)
from .worktop import (
    _worktop_label,
    _merge_notched_worktop,
    _join_worktops,
    _sink,
    _box_plan,
)
from .layout import (
    _bay,
    runs,
    bay_summary,
)
from .builder import _Builder

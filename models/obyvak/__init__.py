"""Obývák 1.02 — 3D massing from the transverse section + gable elevation.

Design facts and reasons: docs/design/obyvak.md.

World: X eave↔eave (5350), Y living gable↔kitchen gable (11100), Z up.
Living is Y=0 (one sliding door, 450 mm trap). Kitchen is Y=L (two sliding
doors, 190 mm trap).

Physical assembly rules (also keep the web viewer free of z-fighting):
- Each labelled solid has real thickness from the section params.
- Different materials never share a plane and never interpenetrate; mates get a
  1 mm clearance (still reads as "touching" at room scale).
- Gables own the end walls (full X). Eave runs only the clear mid-span so
  corner volumes are not drawn twice.
- Obývák-only scope: no koruna (exterior gables are in adjacent rooms), no EPS
  on gable shells, three gable pocket doors (one on the living gable at Y=0,
  two on the kitchen gable at Y=L), and terrace glazing on the X=0 eave
  (opposite cabinets).
- Floor slab is the clear room only; perimeter walls own the strip below z=0.
- Šikminy: NaturHeld 140, 100 mm, screwed through GKF into CD ⊥ krokvím
  → Jutafol N AL 170 Speciál on the attic face of the CD → přímý závěs 200 on the
  window slope, Nonius on the cabinet slope → minerální vata λ 0,039 (160 mm below
  the window slope and between the rafters; the cabinet slope fills its deeper
  cavity with 160+160+120 mm) → krokve 100/160 @ 875 + straps.
  No slope latě and no Flex. `rafters` = roof timber. Six ø14 ties run from
  wall plate to wall plate in every other rafter bay (270 mm off the nearer
  rafter face). They sit in the top of the plate so they clear the Ø160 ducts.
  Five pairs of spots on each slope sit on the ceiling between the ties.
  The kastlík frame is CD 60×27 plus a UD channel on the eave wall — no timber battens.
- Soffit box: 40 mm NH L over cabinets (20 mm gap); mineral wool + CD/UD rost
  below a service void; three Ø160 spiral ducts (HRV + AC) in that void; GKF
  lid raised onto the pozednice (above the wall head, not the plaster). Slope
  GKF butts the lid where the two planes meet, at full 12.5 mm. That joint is
  left floating: no angle and no UD. The lid CD keeps
  the only Nonius for the corner. Vertical CD studs hang from it; bottom CD studs
  socket into the wall UD. The three ducts are already anchored to the wall
  and are not hung from this box. Nothing heavy is fixed to the frame, so
  there are no timber packers. Furniture and pozednice do not carry the box —
  the plate only cleats the board edge.
- Terrace eave (X=0): glass stops at the 2500 mm opening head. Above that
  head the wall is the same plaster, masonry and EPS as the solid eave, cut
  to the head (1 mm off the glass). There is no separate lintel piece.
  100×100 columns in
  front of the glass at the pier centres stop one brick course below the beam.
  Cabinet eave keeps a continuous wall with 300×300 columns standing in front
  of it on the room side (same Y grid). Columns are drawn as masonry.
- Rafters seat on the wall plate (centred on the věnec); EPS is cut around rafters,
  not the other way around. Overhang past EPS is gutter-sized only.
- Bass traps (štít): kitchen 190 at Y=L / living 450 at Y=0. Each is a
  standalone CW wall on the gable only — not hung from the slopes or the
  soffit. UW at 2450 and a sloped UW screwed to the gable wall, sealing tape
  under the tracks, CW studs vertical @ 625, CW/UA offcuts back to the wall.
  The lining stops at the soffit face (cabinet line) as well as under the
  slopes. GKB 12.5 meets each of those finishes with a flexible acrylic bead
  and nothing else.

    python -m blueprints.export obyvak

450 mm at the cabinets is eave furniture depth — not the living-gable předstěna 450.
"""

from __future__ import annotations

from .annotations import (
    _PLATE_ASPECT,
    _bass_stud_xs,
    _box_corners,
    _cad_of_gltf,
    _callout,
    _column_callouts,
    _column_label_ndcs,
    _cross,
    _cut,
    _dim,
    _frame_ortho,
    _lattice_ndc,
    _look_between,
    _mm_cs,
    _ndc_offset,
    _ortho_pose,
    _plate_halves,
    _rafter_window,
    _section_ndc,
    _sikmina_plates,
    _tx,
    _unit,
)
from .bass import (
    _band_below,
    _bass_trap_parts,
    _ceiling_segments,
    _clip_span,
    _down_normal,
    _offset_open,
    _predstena_outline,
    _strut_centres,
    bass_cd_centres,
    bass_soffit_stop_x,
)
from .openings import (
    _cut_wall_openings,
    _eave_window_boxes,
    _eave_window_cutters,
    _gable_sdk_and_pouzdra,
    _pocket_door_cutters,
)
from .parts import (
    _add_ties_and_lights,
    _compound,
    _cut_strict,
    _glass_panes,
    _meta,
    _parts,
    build,
)
from .scenes import (
    _bass_drawing_scenes,
    _bass_elevation_scene,
    _bass_section_scene,
    _bass_view_scenes,
    _tie_scenes,
    part_groups,
    scenes,
)
from .slices import (
    _PARTS_CACHE,
    _elevation_outline,
    _labeled_slices,
    _xz_at,
    build_elevation_slice,
    build_section_slice,
    model_elevation,
    model_parts,
    model_section,
    section_y,
)
from .solids import (
    EXPORT_KIND,
    FACE_GAP,
    MODEL_NAME,
    PARAMS,
    _aabb_hit,
    _box,
    _cut_away,
    _cyl_x,
    _cyl_y,
    _extrude_y,
    _inset_face,
    _layer_color,
    _oriented_bar,
    _paint,
    _screw_solids,
    _shrink_band,
    _shrink_closed_band,
    _split_x,
)

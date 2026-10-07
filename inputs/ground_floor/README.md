# Ground floor source

`ground-floor.yaml` is vendored from [pteasima/yaml-ifc](https://github.com/pteasima/yaml-ifc) at commit `4ad102f` (`samples/ground-floor.yaml`). That commit records butt joints in `connections` and snaps wall axes onto those joints. The Python package that builds the trimmed footprints is vendored at the same commit under `vendor/yaml-ifc/`.

It is the walls-and-openings sample for RD Šíma, 1.NP. Lengths are metres. The schema is that repo's `docs/spec.md`. The Blueprints solid is `models/ground_floor.py`.

`furnishings.yaml` is the kitchen and living furniture in room 1.02. Each element is one box using the yaml-ifc furnishings fields from commit `34e1597` (Origin, Width, Depth, Height, Name, PredefinedType, ObjectType, ContainedInStructure). The vendored package is still `4ad102f`, which builds wall footprints and does not write these boxes. Walls in `ground-floor.yaml` are unchanged.

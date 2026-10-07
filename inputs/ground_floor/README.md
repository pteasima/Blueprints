# Ground floor source

`ground-floor.yaml` is vendored from [pteasima/yaml-ifc](https://github.com/pteasima/yaml-ifc) at commit `34e1597` (`samples/ground-floor.yaml`). The walls text is the same as the previous pin `4ad102f`: butt joints in `connections`, axes snapped onto those joints. The Python package is vendored at `34e1597` under `vendor/yaml-ifc/`.

It is the walls-and-openings sample for RD Šíma, 1.NP. Lengths are metres. The schema is that repo's `docs/spec.md`. The Blueprints solid is `models/ground_floor.py`.

`furnishings.yaml` is the room 1.02 furnishing document at the same commit. It has the space `SP-1.02` (`id`, `Name`, `PredefinedType: INTERNAL`) and the kitchen boxes in `systemFurniture` (`ObjectType: BaseCabinet`). Other list keys, when a placement is added, are `furniture`, `sanitaryTerminals`, `electricAppliances`, `lightFixtures`, and `coverings`. `Origin` is a plan point `[x, y]`. `Elevation` is the base Z when it is not zero. The space has no footprint and no height. Solids are the boxes `yaml_ifc` writes, inset 1 mm so flush faces do not coincide. Walls in `ground-floor.yaml` are unchanged. Which red number or outline each box comes from is in the comments of `furnishings.yaml`.

# Home

Source: Petr, 2026-11-11, in Nerd's chat. This note records that decision. It supersedes the unmerged 2026-11-07 intent in pull request #91, which planned a later one-time move of the house model and the IFC spec into [Home](https://github.com/pteasima/Home). Do not merge #91 as written. The model stays here.

Petr: "blueprints is the right place for the house model, including the ifc spec, even though it includes the ifc spec." Electrical panels will also be modelled here with the IFC spec. Physical things belong in this repo.

[Home](https://github.com/pteasima/Home) only cares about the IFC, not the CAD model, and loads the ifc-yaml documents and the generated IFC from this repo as a data dependency. It should pin a Blueprints version (a tag or a commit), not track `main`.

Home's side of the split is in that private repo's `Spec.md`.

## Two-way relationship, not a code cycle

Data (the IFC) flows from this repo to Home at build time. Control and live state flow the other way at runtime, through Home's API. There is no code import in either direction.

This repo consumes the Home API only as a client, to render and control home state in the viewer. Home owns the API schema and contract (for example OpenAPI or JSON Schema). Codegen here is optional. Petr: "Home happens to have the API component, but Blueprints is just a client connecting to it." The person implementing the client can read the Home API docs; there does not have to be a code dependency.

The viewer must keep working when no Home instance is running.

## Stable GlobalIds

Home's state will point at IFC elements by `GlobalId`, at least for everything electrical. Those ids must stay the same when the IFC is regenerated. If they change, Home's references break with no error.

This is a requirement. Nerd recommended it and Petr accepted it on 2026-11-11, when he asked for this split to be documented.

Current behaviour, read from `vendor/yaml-ifc/yaml_ifc/ids.py` (there is no test in this repo that asserts it): a `GlobalId` is a UUID5 of `yaml-ifc:` plus the yaml-ifc element `id`, compressed to an IFC GUID, unless the document stores an explicit `GlobalId`. The house YAML files store none, so today's ids are a pure function of the YAML `id`. They are deterministic across regenerations for as long as those YAML ids stay unchanged. Renaming a YAML `id` would change the `GlobalId`. The scheme in [electrical/Naming.md](electrical/Naming.md) is only a proposal and is not accepted. Do not change a YAML `id` of an element Home might reference without preserving the `GlobalId`.

## What exists, and what does not

Checked in this repo on 2026-11-11. Only items found here are marked existing.

| Item | Status |
| --- | --- |
| House model (solids, furnishings, rooms) | Exists: `models/`, `inputs/`. |
| ifc-yaml house documents | Exists: `inputs/ground_floor/*.yaml`. The format library is vendored from [pteasima/yaml-ifc](https://github.com/pteasima/yaml-ifc) at `0f96c26` (`vendor/yaml-ifc/`). The schema text is that repo's `docs/spec.md`; it is not copied into this tree. |
| Generated IFC index | Exists: `docs/models/ground_floor.ifc.json`, including room 1.11 devices. Export builds it from the yaml-ifc documents. |
| Electrical field devices in IFC | Room 1.11 only (`inputs/ground_floor/bedroom-1.11.yaml`): lights, buttons, sensors, outlets, blinds. No back boxes, wall hosts, or cable routes. |
| Electrical panels in IFC | The schema supports `IfcElectricDistributionBoard`. No `distributionBoards` in the house files. |
| Circuits in IFC | The schema supports `IfcDistributionCircuit`. No `circuits` in the house files. Room 1.11 devices have `CableNumber` and `Panel` properties only. |
| Client for the Home API | Does not exist. The viewer has no Home connection. |
| Home API schema | Does not belong in this repo. Home does not have a schema yet either. |
| Offline viewer | Exists. It must stay usable with no Home running. |

# Kitchen cabinets: monoblock runs, fronts, drawers, appliances, worktop, sinks, hob, backsplash

Every kitchen cabinet run is one **monoblock**: a single carcass body whose neighbouring bays share their walls. The first detailed bay is **SF-I600a**, on the island's west row, the first 600 south of the rectangular sink, facing west. It is the bay with the knife drawer. Every other bay is a plain carcass with one slab front.

Code: `models/kitchen_cabinet.py` (layout), `models/kitchen_ifc.py` (IFC structure). Parameters live in `inputs/ground_floor/furnishings.yaml`: each run is an element with `Pset_KitchenRun`, each bay keeps its box and names its run in `Pset_KitchenBay`, and a drawer bay has `Pset_Drawers`. Previews: `scripts/render_kitchen_run.py <run> [--bay <id>] [--open <drawer ids>]`.

Labels: **Petr** is a fact Petr gave, with the date or document. **IKEA** is an IKEA METOD / MAXIMERA default, used because Petr said “when unsure of details and margins, default to IKEA METOD measurements” (2026-11-11). These cabinets are custom made, so every IKEA number can change. `guess:` is a number with no source at all. **Cosentino** is from the maker's colour page.

## Monoblocks

Petr, 2026-11-12:

> Ok, lets assume cabinets are a monoblock. Neighboring walls are shared, including the back wall in the island cabinets. Model this well in ifc like we discussed, making sure Hide all others etc. still works as expected.
>
> In reality, the woodworker may object to very large monoblocks and break them down, but not all the way into individual cabinets. So this will come later, we assume full monoblocks.

`open:` the woodworker may split a monoblock into a few rigid sections (a double wall at each section joint). Not modelled; every run is one full body.

| Run | Bays (in run order) | Notes |
| --- | --- | --- |
| `KR-ISL` island | west row SF-I500a, SF-I600a, SF-I500b, SF-I600b, SF-I300 (north → south); east row SF-E600a … SF-E700 | The two rows stand back to back on one shared central back. One end side at each end spans both rows. |
| `KR-WEST` west-wall base | SF-C850, SF-B800, SF-A250, SF-A600 (south → north) | SF-A600 is the dishwasher slot (`Kind: Niche`): no carcass, worktop over it, SF-A250's end side is its south wall. |
| `KR-WEST-H` west-wall wall cabinets | SF-CH850, SF-BH800, SF-AH850 | No plinth, no worktop; a top board per bay. |
| `KR-TALL-W` | SF-T1 | Alone between the west wall and the fridge, so a monoblock of one. |
| `KR-TALL` | SF-T2, SF-T3, SF-T4 | SF-T3 is the oven column: microwave over steam oven, in niches (see “Fronts and interiors”). |
| `KR-TALL-F` | SF-TF | The cabinet over the fridge, between SF-T1 and SF-T2: a monoblock of one, no worktop, no plinth. New 2026-11-12. |

The living-room oak pieces (SF-F052, SF-DN, SF-LB …) are not kitchen runs and stay the boxes in [furnishings.md](furnishings.md).

### What is shared

| Part | Thickness (mm) | Shared by | Source |
| --- | ---: | --- | --- |
| End side (one at each end of a run) | 18 | The end bay. On the island one board spans both rows, so it belongs to both end bays. | **IKEA** METOD board |
| Divider between two bays | 18 | Both neighbouring bays, centred on the bay line (9 mm into each) | **IKEA** board; one board instead of two sides (Petr, monoblock) |
| Island central back | 18 | Every island bay, both rows | **Petr** (“including the back wall in the island cabinets”). 18 instead of a thin back because it is the island's spine: `guess:` |
| Back, single-row runs | 8 | Its own bay only (between the dividers) | `guess:` (METOD back is a thin fibreboard) |
| Bottom, front and back rails, top board | 18 | Its own bay only (between the dividers) | **IKEA** board; rails 80 deep `guess:` |
| Legs (island, west run) | Ø40, 100 high, front and back under every end side and divider | The run; a divider's legs are in both bays' groups | positions `guess:`; see “Plinth: open legs” |
| Plinth board (tall runs only) | 18, set back 50 | The run (one board per front) | setback `guess:` |

End sides and dividers run the full carcass height, and bottoms and rails sit between them (the usual frameless monoblock joint, `guess:`).

### Clear inner width per bay

The bay boxes in the yaml did not move or change size. What changed is the space inside: a divider takes 9 mm from each neighbour instead of a full 18 mm side, and an end bay keeps a full 18 mm end side. Before this change every cabinet was its own box with two 18 mm sides (clear = width − 36).

| Bay | Width | Clear before | Clear now | Change |
| --- | ---: | ---: | ---: | ---: |
| SF-I500a | 500 | 464 | 473 | +9 (north end) |
| SF-I600a | 600 | 564 | 582 | +18 |
| SF-I500b | 500 | 464 | 482 | +18 |
| SF-I600b | 600 | 564 | 582 | +18 |
| SF-I300 | 300 | 264 | 273 | +9 (south end) |
| SF-E600a | 600 | 564 | 573 | +9 (north end) |
| SF-E600b | 600 | 564 | 582 | +18 |
| SF-E600c | 600 | 564 | 582 | +18 |
| SF-E700 | 700 | 664 | 673 | +9 (south end) |
| SF-C850 | 850 | 814 | 823 | +9 (south end) |
| SF-B800 | 800 | 764 | 782 | +18 |
| SF-A250 | 250 | 214 | 223 | +9 (end side to the dishwasher slot) |
| SF-CH850 / SF-BH800 / SF-AH850 | 850 / 800 / 850 | 814 / 764 / 814 | 823 / 782 / 823 | +9 / +18 / +9 |
| SF-T1 | 750 | 714 | 714 | 0 (both sides are end sides) |
| SF-T2 / SF-T3 / SF-T4 | 600 / 600 / 500 | 564 / 564 / 464 | 573 / 582 / 473 | +9 / +18 / +9 |

Measured from the layout, not by hand: `kitchen_cabinet.bay_summary(run)` returns them, and the plan PNG from `scripts/render_kitchen_run.py` labels every bay with its clear width.

## The IFC structure

Agreed with Petr on 2026-11-11 and built here:

- **The run is the assembly.** `KR-ISL` and the other runs are `IfcFurniture` (`ObjectType: KitchenRun`) contained in `SP-1.02`. Every physical part is its child through one `IfcRelAggregates`: end sides, dividers, central back, bottoms, rails, backs, top boards, fronts, drawers, legs (`PANEL`, `ObjectType: Leg`, a circular extrusion), the tall runs' plinth boards (`IfcSystemFurnitureElement`, `PANEL`; drawers `USERDEFINED` / `Drawer`), the worktop (`IfcSystemFurnitureElement`, `WORKSURFACE`), the stone cladding and the west backsplash (`IfcCovering`, `CLADDING`).
- **Box runs.** `KR-DN` (`Carcass: Box`) has one oak `Body` part per bay plus the worktop, instead of the panel set.
- **The hob is an appliance, not a run part.** `EA-KM8665` is an `IfcElectricAppliance`, `ELECTRICCOOKER`, contained in `SP-1.02` like the dishwasher (not in the run's `IfcRelAggregates`), with `Pset_Hob` (Model, Mounting, CutoutToBackEdge). It is a member of the SF-I600b group. Selecting `KR-ISL` and “Hide all others” therefore hides the hob; isolating SF-I600b keeps it.
- **The bay is a group.** Each bay (`SF-I600a` …) is an `IfcGroup` with the same GlobalId its yaml box had, so references by GlobalId survive. It keeps its property sets (`Pset_Drawers`, `Pset_KitchenBay`). One `IfcRelAssignsToGroup` per bay lists its own parts plus the shared parts it touches: both dividers (or an end side), the island's central back, the cladding at its end, and any appliance or sink standing in it (the dishwasher is in SF-A600, the Teka RS15 71.40 in SF-B800, the Teka RS15 18.40 in SF-I500a, the hob on SF-I600b). Every bay of the west run also lists the west backsplash.
- **Nothing is duplicated.** A divider is one product assigned to two groups, so a take-off counts it once.
- Every part carries `Pset_KitchenPart` (Role, Run, Width/Depth/Height of its box in metres, Material) and the usual `yaml-ifc` id pset, so the viewer and Home see a stable id such as `KR-ISL-DIV-SF-I600a-SF-I500b`. GlobalIds are derived from those ids.
- The worktop, cladding and west backsplash share one `IfcMaterial`, “Silestone Blanco Maple”.
- Not done: `IfcRelConnectsElements` between a divider and its bays. A bay is an `IfcGroup`, not an element, so that relationship cannot point at it; the group assignment already records the link.

yaml-ifc has no assemblies or plain groups, so `kitchen_ifc.apply` rewrites the model it builds (the vendored package is not edited). Both the 3D export and the viewer's IFC index (`docs/models/ground_floor.ifc.json`) run it.

### Viewer: isolate a bay

Petr, 2026-11-12, after the monoblock groups landed in the spatial tree under each run and became hard to find:

> Ok, ditch that rule. I want: a separate Groups tab in the inspector. a way to get into element/group info from the longpress menu in inspector. element info to show groups that element is member of (taping one reveals it in inspector). group info to show child elements and child groups (separate sections). No need for parent group as thats findable from the path bar in inspector.

Then, after a critique of that plan:

> 1. ok, no pathbar in groups tab, parent group in group info
> 2. thats why theres a segmented picker for the tabs and it animates when it switches over
> 3. noted, fwiw I dont think thats an issue, lets have a furniture group with cabinets being children, electrical group (empty for now).

Then, on the info screen and the 3D long-press popover:

> Sorry, that info screen should be the same as that popover when you longpress the thing in model. So it should also have actions etc. Actually, now that I think about it, ditch the popover and just go straight into inspector. That also means theres no open inspector button, as that just mean going back.

Then, two tweaks once that was in a PR (2026-11-12):

> the segmented picker shouldnt be visible on the info screen, only at root of the inspector. Make it make sense.

> furniture group should contain not just other groups, but also other pieces of furniture that arent a group (e.g. the sofa).

A long-press in the model now opens the inspector on that element's info screen (no popover, no "Show in inspector" button). Info carries the old popover's properties and actions, plus Frame, Hide / Unhide, Hide all others and Unhide all others. Back from info returns to the tree; Back from the tree returns to the menu. The Spatial / Groups segmented picker is shown only at the inspector root (the spatial tree or the groups list). It is hidden on element and group info, and on any deeper pushed screen. Tapping a group from element info, or an element from group info, still updates the underlying tab so Back lands on the right root; the picker stays off until then.

The index no longer hangs a group under the parent most of its members share. Groups are not in the spatial tree. They have their own list (`groups` in `docs/models/ground_floor.ifc.json`), with member elements, child groups and parent groups from `IfcRelAssignsToGroup`. The inspector has a Spatial tab (the room tree, with a path bar) and a Groups tab (top-level groups, no path bar); a segmented picker at the root animates the switch. Long-press a row for Info. Element info lists the groups it belongs to; group info lists parent groups, child groups and child elements. Tapping a group opens it on the Groups tab; tapping an element opens it on the Spatial tab. Hide, “Hide all others” and framing follow group membership recursively, including nested groups (`src/blueprints/viewer/ifcTree.js`, `subtreeIds`). So:

- selecting SF-I600a and choosing “Hide all others” keeps its bottom, rail, three drawers, both dividers and the island's central back;
- selecting a divider selects just that board;
- selecting `KR-ISL` and “Hide all others” keeps the whole island, worktop and cladding included;
- selecting Furniture keeps every cabinet bay, plus the loose furniture pieces that are direct members (the Livom sofa modules, the Gatta table, chairs, and the rest listed below).

Two root groups are written by `kitchen_ifc.apply` on every yaml-ifc document that has bays, systems, or loose furniture (furnishings, bedroom, bathroom). The index merge unions `memberIds` and child/parent group lists across those documents, so Furniture is one group with all of them. **Furniture** (`GRP-FURNITURE`) has every kitchen bay group as a child (island, west, west wall cabinets, tall, north dining — all existing bay `IfcGroup`s), and also the furniture elements that are not already in a bay group: the Livom Harvey sofa modules and arms, the Gatta dining table and its chairs, the living-room bookshelf, the bed and curtain rails in 1.11, the bathroom vanity cabinet, top and shelf, the standalone cabinets that are not a kitchen bay (`SF-DH`, `SF-LB`, `SF-TC`), and worktops or plinths that no bay lists (so isolating Furniture still shows the counters). Kitchen-run assemblies (`KR-ISL`, `KR-WEST`, and the other `ObjectType: KitchenRun` products) are *not* direct members: their bays are already child groups, and listing the run again would duplicate them. Hobs and other appliances stay out (they are not furniture). Bathroom construction that yaml-ifc types as `IfcFurniture` (mixers, pipes, pre-walls, soffit, tiled tub front, shower screen) also stays out. **Electrical** (`GRP-ELECTRICAL`) is empty for now. If an `IfcSystem` or `IfcDistributionCircuit` appears in the same model, it is assigned under Electrical. There are none in the current furnishings export. Membership that already follows from an element's class, type or material (every window, all gypsum) stays a viewer filter, not a group.

## Which cabinet, and what the drawers hold

Petr’s sticky-note plan, [`KitchenPlan.jpg`](../../inputs/ground_floor/KitchenPlan.jpg): the yellow note beside the island’s red “600” (the second module from the north on the west row, south of the sink) reads:

> noze · naradi (lis na cesnek, hmozdir, vaha, ..) · dole nevim 🤷

Read top to bottom as three drawers: knives, tools (garlic press, mortar, scale), and the bottom one still undecided. Source: Petr, KitchenPlan.jpg. The note does not say three drawers in words, and it gives no heights. `open:` what goes in the bottom drawer (“dole nevím”).

Contents are now written on every front (`Pset_KitchenFront.Contents`), from the notes; see “Fronts and interiors”.

## Heights, top to bottom

| Item | Value (mm) | Source |
| --- | ---: | --- |
| Finished counter height (top of worktop) | 930 | **Petr**, 2026-11-11; the bay box `Height` |
| Worktop thickness | 20 | Silestone comes in 12, 20 and 30 (**Cosentino**). Petr gave no thickness: `guess:` 20 |
| Plinth (sokl) height | **100**, open legs, no kick board | **Petr**, 2026-11-12: “Ok, 100mm it is.” (was 110; 92 before that) |
| Carcass height | **810** | derived: 930 − 20 − 100. METOD's carcass is 800; the extra 10 goes into the `*` drawer |
| Drawer grid, D1 nože | 200 | **IKEA** METOD 80-grid, “low” front 20 cm |
| Drawer grid, D2 nářadí | 200 | **IKEA** METOD 80-grid, “low” front 20 cm |
| Drawer grid, D3 dole nevím | **410** (rest; was 400) | **IKEA** METOD 80-grid, “high” front 40 cm. Written `*`, the rest of the carcass, so a carcass change lands here |
| Tall run carcass | **2350** | 2450 (**Petr**, tall height, unchanged) − the same 100 plinth, so the tall plinth lines up with the bases. The tall runs keep a kick board (`PlinthKind` is `Board` by default) |
| Wall-cabinet carcass | 900 | the box height, bottom 1550, top 2450 (furnishings.md) |

## Plinth: open legs

Petr, 2026-11-12: “Ok, 100mm it is.” He wants the lowest plinth his robot vacuum fits under, so it can clean under the cabinets.

| Robot | Height (mm) | Source |
| --- | --- | --- |
| Dreame X60 Pro Master (Petr's), lidar retracted | 89 | [Dreame](https://global.dreametech.com/products/x60-pro-master) |
| Roborock Saros 10 / 10R / Z70 | 79.8 | [Roborock](https://support.roborock.com/hc/en-us/articles/48039533143321) |

- The island and the west run stand on **open legs, 100 high, with no kick board** (`PlinthKind: Legs`), so the robot drives under. The carcass bottom is at 100, which leaves 11 mm over the Dreame.
- Legs: Ø40, adjustable, IKEA-like. Each row has a front and a back leg on every wall line, under each end side and each shared divider. The front leg centre is 50 behind the carcass front (68 behind the front face) and the back one is 50 before the back. `guess:` IKEA puts 4 legs under each cabinet; a monoblock shares them at the dividers. Island: 22 legs. West run: 8 legs.
- The stone end cladding (island and west run) still runs from the floor to the worktop underside, so the robot gets in from the long sides only.
- The dishwasher slot (SF-A600) has no carcass: floor to worktop underside is **910**, unchanged by the plinth. The Bosch SBD6ECX12E is the XXL model (865 high) and takes a 865–925 niche ([Bosch spec sheet](https://media3.bosch-home.com/Documents/specsheet/de-DE/SBD6ECX12E.pdf)), so 910 fits. The usual 815–875 niche is the 815-high SMD model, not this one. The robot does not get under the dishwasher.
- The hob is unchanged: carcass top 910, hob underside 879. SF-I600b now has three drawers under it (see “Fronts and interiors”); the top box stops 8 under the hob.
- The north dining run (`KR-DN`) has no plinth parameter: its oak bodies stand on the floor (`Carcass: Box`). `open:` should they get legs too?
- `open:` the drawer and door fronts stop 1.5 above the carcass bottom (101.5), with no kick board behind. Check the look and toe space with Petr.

## Fronts, boxes, slides (SF-I600a)

| Item | Value (mm) | Source |
| --- | ---: | --- |
| Front thickness | 18 | **IKEA** METOD fronts |
| Gap between fronts (and to the sides, 1.5 each) | 3 | **IKEA**: a 600×200 grid front is 597×197 |
| Front sizes | 597×197, 597×197, **597×407** | derived: grid − 3. D3 was 597×397 before the 100 plinth |
| Clear opening | 582 | derived: 600 − 9 − 9 (two shared dividers). Was 564 |
| Drawer box side clearance, each side | 13 | **IKEA**/Blum-style runner clearance, approx. |
| Drawer box outer width | 556 | derived: 582 − 2 × 13. Was 538 |
| Drawer box wall | 16 | `guess:` MAXIMERA-like side |
| Drawer box side height | front grid − 110, at least 60 → 90, 90, **300** (was 290) | `guess:` approximates MAXIMERA low/high sides |
| Box bottom above its slot bottom | 25 | `guess:` |
| Carcass depth, island rows | 573 | derived: bay depth 600 − front 18 − half the 18 central back. The bay box `Depth` stays 600 |
| Slide / drawer box length | 550 | derived: largest 50 mm step that fits 573 − 10 rear clearance. **IKEA** MAXIMERA uses full-extension runners in a 60-deep carcass. Unchanged |
| Extension | 550 (full) | **IKEA** MAXIMERA full extension: travel = box length |

## Worktop and cladding

Petr, 2026-11-12:

> Its silestone maple color. It has an overhang of 300 over the cabinets. The sides of the kitchen islands are also clad in the same silestone.

and straight after:

> 30mm overhang, sorry

| Item | Value | Source |
| --- | --- | --- |
| Material | Silestone **Blanco Maple** (Cosentino, Tropical Forest series, a mottled white quartz) | **Petr** (“silestone maple”). Blanco Maple is the only Silestone colour named Maple ([Cosentino](https://www.cosentino.com/en-ie/colours/silestone/blanco-maple)) |
| Thickness | 20 mm | `guess:`; Blanco Maple comes in 12, 20, 30 mm (**Cosentino**) |
| Top | 930 | **Petr** |
| Overhang past the front faces (fronts and drawer fronts) | 30 mm | **Petr**, 2026-11-12 (corrected from 300) |
| Overhang at the back of a wall run | 0 (against the wall) | `guess:` |
| Island | one piece, 2540 × 1260: the 2500 × 1200 body, + 30 on both long fronts, + 20 at each end over the cladding | derived |
| West-wall run | one piece, 2540 × 630, y 11.33–13.87 (over the dishwasher slot too, + 20 at each clad end), x 18.80–19.43 | derived |
| North dining run | 20 mm, top 930, 30 front overhang, one slab per base (see “North dining run”) | **Petr**; derived |
| Slab formats | 3270 × 1590 and 3060 × 1410 | **Cosentino**. The island top fits one 3270 × 1590 slab |
| West run end cladding | same as the island ends, both ends (see “West run end cladding”) | **Petr** (“the sides of the west run”) |
| Island end cladding | Silestone Blanco Maple, 20 thick (same as the worktop), floor to the worktop underside (0–910), full worktop depth 1260, covering the leg zone at the ends | **Petr** (“sides … clad in the same silestone”); thickness and floor-to-underside `guess:` |
| Worktop–cladding joint | the cladding sits under the worktop; the worktop runs 20 past the carcass end so its end is flush with the cladding face | `guess:` |
| Sink cut-outs | the manufacturer's undermount cut-out, centred on the sink box; see “Sinks” | **Teka** |
| Hob cut-out | flush-fit, stepped: 600 × 500 through, rebate 624 × 524 × 5.5; see “Induction hob” | **Miele** manual |

The Petr overhang applies to the island. The west-wall worktop uses the same material and overhang because Petr described “the” worktop: `open:` confirm the west run is Silestone too.

Bays with a sink have no top rails (the bowl would hit them, `guess:`).

## Sinks

Petr, 2026-11-12: “Do the sink and hob now”.

Both sinks are Teka BE LINEA RS15 and both are **undermount** only (Teka: “Spodní montáž”). The bowl hangs under the stone: the rim is glued to the worktop's underside, and the stone overhangs the bowl edge by 2 mm a side. So the cut-out is a little *smaller than the bowl*, not the rim. A top-mount rule (rim on top of the stone) does not apply to these sinks. The model checks it: an undermount sink whose top is not the worktop underside stops the export.

| Sink | Where | Overall | Bowl | Worktop cut-out | Rim top | Source |
| --- | --- | --- | --- | --- | --- | --- |
| `SN-RS15`, Teka BE LINEA RS15 71.40 X | west run, SF-B800, centred in the 800 | 750 × 440 | 710 × 400 × 200 | **706 × 396, R13** | 910 (`Elevation` 0.73 → **0.71**) | [Teka 115000004](https://www.teka.com/cs-cz/produkt/be-linea-rs15-71-40_115000004/) |
| `SN-RS1840`, Teka BE LINEA RS15 18.40 X | island, SF-I500a, centred on the bay | 440 × 220 | 400 × 180 × 140 | **396 × 176, R13** | 910 (`Elevation` 0.77) | [Teka 115000010](https://www.teka.com/cs-cz/produkt/be-linea-rs15-18-40-ss_115000010/); the card on [`KitchenPlan.jpg`](../../inputs/ground_floor/KitchenPlan.jpg) next to the island's green rectangle |

- `SN-RS1840`'s long side runs across the island (east–west), because the plan's green rectangle is a little longer that way. `guess:` Both ways fit: the clear width is 473 and 440 is the longest side.
- `SN-RS1840` is centred on the 600 bay depth, so its cut-out runs 102–498 behind the bay front, 132–528 from the worktop's front edge. `guess:` The plan's rectangle sits a bit further forward.
- Without a manufacturer cut-out, `Pset_Sink` falls back to the bowl less 2 mm a side (`kitchen_cabinet.SINK_CUTOUT_INSET_MM`), which is the Teka pattern. `guess:`
- The rounded corners (R13) are in the IFC profile (chords, 6 per corner) and in the 3D model.
- On the plan, the island has one sink card and one green rectangle. The two green circles in a rectangle on the second 600 were read as “two round bowls” before; they are the hob (see below).
- The disposers (EcoMaster EVO3) and the taps (Hansgrohe M71 on the west run, Aquno Select M81 on the island) are modelled since 2026-11-12: see “Appliances and sink fittings”.

## Induction hob

The hob is the **Miele KM 8665 FL** ([product page](https://www.miele.cz/product/12911610/indukcni-varna-deska-km-8665-fl), [installation manual](https://media.miele.com/downloads/02/8d/02_C7F1383814AE1FD185F64AE5A947028D.pdf)). Source: **Petr**, 2026-11-11. Modelled since Petr, 2026-11-12: “Do the sink and hob now”.

Numbers from the installation manual (pages 23 and 29):

| Item | Value (mm) |
| --- | ---: |
| Glass top (W × D × thickness) | 620 × 520 × 4 |
| Installation height, with the connection box | 51 |
| Housing under the glass (W × D), approx. | 533 × 427 |
| Cut-out, surface-mounted | 600 × 500 (+3) |
| Cut-out, flush-fit | inner 600 × 500, rebate 624 × 524, 5.5 deep, 12 wide |
| Cut-out to the worktop's back edge | ≥ 50 |
| Underside of the hob or base panel to a drawer's top edge | ≥ 8 (KM 8xxx-2: ≥ 8; KM 8xxx: ≥ 5) |
| Fan holes in an air-intake base panel | Ø 60–80, 78 and 210 from the cut-out centre, 138 deep |

### Where it is

The hob is on **SF-I600b**, the island's west row, second 600 from the north (y 11.60–12.20), facing west. On [`KitchenPlan.jpg`](../../inputs/ground_floor/KitchenPlan.jpg), the green rectangle with two circles lies between that module's blue lines, beside the red “600”. The note next to it reads “příbory, vařečky, stěrky, naběračky, pánve” (cutlery, wooden spoons, spatulas, ladles, pans), which is what you keep by a hob. The plan has no label on that symbol. Two circles are a common hob symbol, and there is no second sink card on the island. So the reading is the plan's, not a free choice, but it is a reading.

### How it is built

`Pset_Hob` on the bay holds the manual's numbers (metres). `kitchen_cabinet` lays the hob out from the bay and the worktop:

| Item | Value (mm) | Source |
| --- | --- | --- |
| Mounting | **flush-fit**: the glass top is level with the worktop | `guess:` (Petr has not chosen). Flush-fit was trivial to model, so it is used |
| Through cut-out | 600 × 500, centred on the bay along the run (it reaches the middle of both dividers) | Miele |
| Rebate | 624 × 524, 5.5 deep, around the cut-out | Miele |
| Cut-out front edge | 50 behind the bay front face (80 from the worktop edge): the 500 cut-out centred on the 600 bay depth | `guess:` |
| Cut-out to the worktop's far (east) edge | **680** (≥ 50 required) | derived, checked by the model |
| Glass | 620 × 520 × 4, top at 930 | Miele |
| Housing | 533 × 427, from 879 to 926 | Miele (51 installation height) |
| Hob underside | **879**, 31 below the carcass top (910) | derived |
| Front rail in SF-I600b | **left out**: the housing (86.5–513.5 behind the front face) drops into the rail (18–98) | `guess:` |
| Drawers | SF-I600b has none (one slab door), so nothing changed | yaml |

If a bay under a hob has drawers, the top drawer box is cut down to 8 mm below the hob underside (`MinDrawerGap`). With the METOD grid the top box ends at 825, 54 below the hob, so nothing would be cut today. The fronts stay on the grid.

In IFC the worktop's rebate is a second extrusion layer. The slab is one 14.5 mm layer with the through holes and one 5.5 mm top layer with the rebate. In the 3D model the rebate is a pocket.

`open:` surface-mounted or flush-fit (Petr). Surface-mounted is `Mounting: SurfaceMounted`: the glass then rests on the stone (top 934) and there is no rebate. `open:` the cut-out's position in the bay depth. `open:` fan airflow (the air-intake base panel holes) is not modelled.

## West run end cladding

Petr, 2026-11-12: “Oh, and also do the sides of the west run of cabinets.”

Both ends of `KR-WEST` are free: the south end is at OP24's north jamb (y 11.35), the north end at OP25's south jamb (y 13.85). Neither touches a wall or a tall cabinet. So `CladEnds: true`, the same rule as the island:

| Piece | Size (mm) | Where | Group |
| --- | --- | --- | --- |
| `KR-WEST-CLAD-S` | 20 × 630 × 910, floor to the worktop underside | y 11.33–11.35, x 18.80–19.43 | SF-C850 |
| `KR-WEST-CLAD-N` | 20 × 630 × 910 | y 13.85–13.87 | SF-A600 (the dishwasher slot: the stone is its north side) |

The worktop runs 20 further at each end, flush with the cladding: 2500 → **2540**, y 11.33–13.87. `IfcCovering` `CLADDING`, part of the `KR-WEST` assembly.

`open:` the two 20 mm pieces and the worktop ends now stand 20 mm in front of the OP24 and OP25 door openings (the run filled the jamb-to-jamb 2500 with 0 clearance). Check the door frames and leaves; the alternative is to shorten the run's bays by 40.

## North dining run

Petr, 2026-11-12: “And also do the north cabinets (in the dining area in the same silestone).”

`KR-DN` is a kitchen run over the four dining bases, west to east: SF-F052 (300 × 200, in front of pier W-052), SF-DN (2700 × 450), SF-F053 (300 × 200), SF-DN70 (70 × 450). They are oak boxes, not METOD carcasses, so the run uses `Carcass: Box`:

- **Each base stays one oak body, cut down under the stone.** Body top 930 → **910**, so the counter stays 930. The body is `<bay>-BODY`, `IfcSystemFurnitureElement` `USERDEFINED`, material “natural oak”, and the only member of its bay group. I picked this over keeping the oak top and swapping it for stone: the height comes from the bay box and the worktop thickness, so a thicker stone lowers the body by itself.
- **Worktop** `KR-DN-WORKTOP`: 20 mm Silestone Blanco Maple, top 930, 30 mm overhang at the front (y 15.12). It is one part with one slab per base, because the depth steps at the piers:

| Slab | x | y | Size (mm) |
| --- | --- | --- | --- |
| over SF-F052 | 22.15–22.45 | 15.12–15.35 | 300 × 230 |
| over SF-DN | 22.45–25.15 | 15.12–15.60 | 2700 × 480 |
| over SF-F053 | 25.15–25.45 | 15.12–15.35 | 300 × 230 |
| over SF-DN70 | 25.45–25.52 | 15.12–15.60 | 70 × 480 |

- **No end cladding: no side is exposed.**
  - The west end of SF-F052 abuts SF-T4, the kitchen tall cabinet, which already overlaps the filler by 8 mm.
  - The east end of SF-DN70 abuts SF-LB, the low base behind the sofa (top 800), with the bookshelf above it from 850. Only a 110 mm strip of SF-DN70's east face shows, above SF-LB (800–910) and in front of the bookshelf.
  - The sides between the bases face the piers. `open:` clad that 110 mm strip?
- The real stone would be one notched piece (or joints at the piers); the model's slabs only show the outline. `open:` joints.

## Backsplash

Petr, 2026-11-12: “As well as the back wall above countertop, below top cabinets, also in silestone (12.5mm or whatever the thin one for wall cladding is)” and “back wall for both west and north”. Blanco Maple comes in 12, 20 and 30 (**Cosentino**), so the thin one is **12 mm**.

| Piece | Where | Size (mm) | Top | Source |
| --- | --- | --- | --- | --- |
| `KR-WEST-BACKSPLASH` | west wall, on the west worktop, y 11.35–13.85 (OP24 to OP25 jamb, not over the clad ends' extra 20), x 18.800–18.812 | 2500 × 12 × 620, 930 → 1550 | underside of SF-CH850 / SF-BH800 / SF-AH850 | derived by `kitchen_cabinet` (`Backsplash: true`): the lowest box over the strip |
| `CV-BS-DN` | north wall behind SF-DN, x 22.45–25.15, y 15.588–15.600 | 2700 × 12 × 620, 930 → 1550 | underside of SF-DH | yaml `coverings` |
| `CV-BS-R052`, `CV-BS-R053W` | the piers' faces facing each other in the dining bay, y 15.35–15.588 | 238 × 12 × 620 each | under SF-DH | `guess:` the stone wraps the piers |
| `CV-BS-P052` | front of pier W-052 over filler SF-F052, x 22.158–22.462, y 15.338–15.35 | 304 × 12 × 620 | **1550, `open:`** (nothing above) | `guess:` wrap |
| `CV-BS-P053` | front of pier W-053 over filler SF-F053, x 25.138–25.462 | 324 × 12 × 620 | **1550, `open:`** | `guess:` wrap |
| `CV-BS-R053E` | W-053's east face over SF-DN70, x 25.450–25.462, y 15.35–15.588 | 238 × 12 × 620 | **1550, `open:`** | `guess:` wrap |
| `CV-BS-DN70` | north wall over SF-DN70, x 25.462–25.52 | 58 × 12 × 620 | **1550, `open:`** | |

- The north pieces stop at 1550 wherever nothing hangs above, the same top as under SF-DH and the west run. `open:` Petr to confirm that top.
- SF-LB, the low base behind the sofa, gets no backsplash: the bookshelf's oak lamella back is on that wall from 850.
- The north backsplash stands on the dining run's stone worktop (`KR-DN`, see “North dining run”). It stays plain `IfcCovering` in the yaml, because the run's two depths (200 at the piers, 450 between) would need a stepped strip.
- Pier W-052's front piece starts at SF-T4's east face (x 22.158), not the pier edge, because T4 already nicks the pier by 8 mm.

## Parametric rule

Everything above is computed in `kitchen_cabinet.runs` from the bay boxes (`Origin`, `RefDirection`, `Width`, `Depth`, `Height`, `Elevation`), the run's `Pset_KitchenRun` (any `IKEA_DEFAULTS_MM` key, in metres, plus `WorktopMaterial`, `CladEnds`, `Carcass` (`Box` for whole-body bays), `BodyMaterial`, `PlinthKind` (`Legs` or `Board`), `Backsplash`, `BacksplashThickness`, `BacksplashTop`, `BacksplashMaterial`) and each bay's `Pset_Fronts` (`Layout`, `Contents`: see “Fronts and interiors”) or the older `Pset_Drawers` (`NominalHeights` in metres top to bottom, one `*` for the rest; `Contents` separated by `;`), plus the built-ins' `Pset_BuiltIn`. A bay may override the drawer and front values in its own `Pset_KitchenCabinet`. Change a bay's width and its dividers move, both neighbours' clear widths and drawer boxes follow, and the worktop grows; change the counter height or the worktop thickness and the carcass, the `*` drawer and the cladding follow. Rows that stand back to back (same back plane, fronts facing away) share one central back; a run with `CladEnds` gets stone on both ends. A sink's cut-out comes from its `Pset_Sink` and follows the sink box. A hob follows its bay (`Pset_Hob`): move or widen the bay and the cut-out, rebate, glass and housing move with it. The model stops the export if the hob comes closer than `MinBackEdge` to the far edge. A backsplash runs the worktop's length, from the worktop top up to the lowest box hanging over it.

## Tap to open

In the web viewer a tap or click on a drawer or pull-out slides it out by its extension along the front normal (about half a second, ease-in-out, the same animation as the doors), and a second tap slides it back. A tap on a cabinet door swings it 90° outward about its hinge edge, like a room door. Records come from the model (`docs/models/ground_floor.doors.json`: `kind: drawer` for each drawer or pull-out part such as `SF-I600a-D1`, `kind: hinged` with `element` for each door leaf such as `SF-T2-DOOR1`); the viewer only plays them (`src/blueprints/viewer/doors.js`, `collectDoorHosts` takes any record with an `element`). A door's mesh is the leaf plus its door racks, fused, so they swing together.

## Fronts and interiors (2026-11-12)

Petr, 2026-11-12:

> Once thats merged, we're in a good place, and you can proceed with modeling all the cabinets and all the living room furniture thats described in my sketch (so all the drawers etc.). Leave untouched only what isnt clear or isnt described. Emphasis on still keeping everything parametric, as future tweaks are expected. This a big project, dont hesitate to put in appropriate effort to get it right.

The sketch is [`KitchenPlan.jpg`](../../inputs/ground_floor/KitchenPlan.jpg). Every note on it was read in full; the Czech is quoted as written (no diacritics), the translation follows. What a note describes is modelled. What it leaves open keeps its plain slab front and is listed as `open:`. Sizes the note does not give are IKEA METOD defaults (**IKEA**) or `guess:`.

### How a bay's fronts are described

A bay's `Pset_Fronts.Layout` lists its bands top to bottom, split by `|`. Each band is `<kind> <height> key=value …`. The height is in metres, and one band may be `*` for the rest. `Contents` gives each band's contents, split by `;`. `Pset_Drawers.NominalHeights` (older) is the same as all-`drawer` bands.

| Kind | What it builds | Keys |
| --- | --- | --- |
| `drawer` | A drawer: a front on the 3 mm grid, plus an open box on 550 slides (as SF-I600a). | — |
| `pullout` | A full-height front with one box behind it, plus the baskets or bins riding in it. | `items=shelves\|bins`, `n=` |
| `door` | One hinged leaf. The rest of the bay is a fixed filler. Adjustable shelves sit behind it. | `hinge=L\|R` (as you face it), `width=` (leaf grid), `filler=L\|R` (default: the hinge side), `shelves=`, `first=` (the first shelf's height over the band floor), `racks=` (door shelves) |
| `doors` | A pair of leaves: the left one hinged left, the right one hinged right. | `shelves=`, `first=` |
| `niche` | An appliance niche. The height is the clear niche height. A board goes under it. | `clear=` (metres) narrows the opening with a packer on each side |
| `front` | One slab front (a band the plan does not describe). | — |
| `none` | Nothing. | — |

- A board separates two bands unless both are drawers.
- Drawer and pull-out boxes stop 10 mm under any obstacle above them: a sink bowl, a disposer, or 8 mm under the hob (`ObstacleClearance`, `guess:`). The box records how much was cut (`Trimmed`).
- The new IKEA-like defaults are in `IKEA_DEFAULTS_MM`: `ShelfSetback` 20, `RackDepth` 80, `RackHeight` 70, `RackInset` 40, `BinGap` 10. All are `guess:`.
- In IFC, every front, door, shelf, board, filler and packer is a run part, `IfcSystemFurnitureElement` PANEL. Pull-outs are USERDEFINED, like drawers. Each one has `Pset_KitchenFront` (Zone, Kind, Hinge, Contents, box sizes …).
- Doors are `Door` parts with their hinge edge, so the viewer can swing them.

### Bay by bay

The quoted notes are the yellow sticky notes next to each bay on KitchenPlan.jpg.

| Bay | Note (Czech, as written) | Translation | Modelled |
| --- | --- | --- | --- |
| SF-I500a (island sink) | „vlevo prkynka / vpravo cednik do drezu (a drtic) / madlo na uterku / SBox by mel trcet doprava, coz nejde, ma nakou vuli a de pootocit, ale musi se vyhnout drtici, snad to vyjde“ | left: cutting boards / right: sink strainer (and the disposer) / towel-bar handle / the sBox should stick out to the right, which is not possible; it has some play and can be turned, but it must avoid the disposer, hopefully it works out | The slab front is unchanged. Disposer `EA-EVO3-I` hangs under the bowl. Tap `SN-TAP-I` stands behind the bowl. `open:` door or pull-out, and the split between boards and strainer. `open:` the towel-bar handle. `open:` the sBox (not modelled). |
| SF-I600a | „noze / naradi (lis na cesnek, hmozdir, vaha, ..) / dole nevim 🤷“ | knives / tools (garlic press, mortar, scales …) / bottom: don't know | Unchanged: three drawers, 200 / 200 / rest. |
| SF-I500b | „koreni / oleje, octy, mouky, cukry, dochucovadla / hrnce“ | spices / oils, vinegars, flours, sugars, seasonings / pots | Three drawers, 200 / 200 / rest (heights **IKEA**, as SF-I600a). Fronts 497 × 197 / 197 / 407. Boxes 90 / 90 / 300 high. `open:` oil and vinegar bottles do not stand in a 200 drawer (a 90 box); a taller middle drawer is one `NominalHeights` edit away. |
| SF-I600b (hob) | „pribory / varecky, sterky, naberacky / panve“ | cutlery / wooden spoons, spatulas, ladles / pans | Three drawers, 200 / 200 / rest. Fronts 597 × 197 / 197 / 407. The top box (735–825) stays 8 under the hob's underside (879 − 8 = 871). |
| SF-I300 | „alobal, folie, spejle, pytliky“ | foil, cling film, skewers, bags | Slab front, `Contents` only. `open:` one bullet, so one drawer or a pull-out? |
| SF-E600a … SF-E700 (island east row) | Black card: „Jak vyresit detail spodniho soklu vs. dock pro robota? …“ (in full under “Island east row”) | Questions only | Unchanged. `open:` everything (see below). |
| SF-A250 | Note A: „dole vlevo suplik uklid (mycka, jar, odmastovac, houbicky)“ | bottom left: cleaning drawer (dishwasher tabs, washing-up liquid, degreaser, sponges) | A full-height pull-out (front 247 × 807) with 3 baskets. The basket count is `guess:`. |
| SF-A600 | Note A: „dole vpravo mycka“ | bottom right: dishwasher | Unchanged: the niche for the Bosch SBD6ECX12E. |
| SF-B800 (west sink) | Note B: „800 / dole vlevo kos, vpravo kompost / nahore talire / kose se musi vyhnout drtici, to se proste bude resit az skrinky budou“ | 800 / bottom left: bin, right: compost / top: plates / the bins must avoid the disposer, that will be solved once the cabinets exist | One full-height pull-out (front 797 × 807) with two bins (`guess:` one pull-out for both). The disposer `EA-EVO3-W` hangs under the bowl. The pull-out box stops 10 under it, so it is only **207 high (493 cut)**. Tap `SN-TAP-W` is modelled. `open:` the bin-vs-disposer conflict. Petr's own note defers it, and EcoMaster's manual suggests the disposer between two bins or a lower bin under it. |
| SF-C850 | Note C: „900 / dole trideny odpad“ | 900 / bottom: sorted waste | A full-height pull-out (front 847 × 807) with three bins. The bin count is `guess:`. |
| SF-AH850 | Note A: „nahore sklenice“ | top: glasses | Two doors (L + R), two shelves. **IKEA**: a METOD door is at most 600, so 850 needs two. The shelf count is `guess:`. |
| SF-BH800 | Note B: „nahore talire“ | top: plates | Two doors, two shelves, as above. |
| SF-CH850 | Note C: „nahore tycovy mixer, velke misky, odmerky (vsechno co se musi mejt ale moc se nepouziva)“ | top: stick blender, big bowls, measuring cups (everything that needs washing but is rarely used) | Two doors, two shelves, as above. |
| SF-T1 | „dvere 60L, sirka skrine az ke zdi (~75) / dole napoje, basy od piva / nahore plechovky, vyvary, trvanlive potraviny“ | door 60 hinged left; cabinet width up to the wall (~75) / bottom: drinks, beer crates / top: cans, broths, long-life food | One 600 door, hinged on the left (west). The other 150 is a fixed filler (a 147 front) on the hinge (wall) side (`guess:`; the hinge needs the filler there to clear the wall). Four shelves: the first 400 over the floor for beer crates, the rest even (`guess:`). |
| SF-TF (new, over the fridge) | Fridge note: „naproti pruchodu (ne v rohu) / s pripojenim na vodu / s vyrobnikem triste / 4 dvere / nahore prislusenstvi od robota, ryzovar“ | opposite the passage (not in the corner) / with a water connection / with an ice crusher / 4 doors / above: food-processor accessories, rice cooker | New bay over the Whirlpool, x 19.55–20.458, from 1926 (fridge top 1876 + 50, `guess:`) to 2450, fronts flush with the tall run. Two doors, no shelf (a rice cooker is tall, `guess:`). |
| SF-T2 | „nahore dvere 60R / police na dverich / nahore ryze, testoviny, tortilly, asie, peceni“ | top: door 60 hinged right / shelves on the door / top: rice, pasta, tortillas, Asian, baking | The upper band is a door hinged on the right (the T3 side), with 4 door racks and 4 shelves set back behind the racks. The lower band, 810 (level with the base carcasses, `guess:`), is not described: a slab, `open:`. |
| SF-T3 | Cards: „Miele DGC 7465 HCX Pro Grafitově šedá“, „M 2230 SC Obsidian černá“. Note: „zvazit kombinovanou mikrovlnku s horkovzduchem, ale urcite ne druhou parni troubu s pripojenim na vodu“ | consider a combination microwave with hot air, but definitely not a second plumbed steam oven | The steam oven sits in a 593 niche with its board at the counter line (910). The microwave sits in a 356 niche above it. Each niche is narrowed to 564 by 9 mm packers. The top band (to 2450) and the bottom band (100–910) are slabs, `open:`. The order (microwave on top) and the niche heights are `guess:`, inside Miele's ranges. `open:` the combi-microwave idea; the M 2230 SC stays as carded. |
| SF-T4 | „zbyva sirka cca 50 (pokud je lednice na stredu) / otvirani nevim 🤷 [Dreame X40 Master link], mozna suplik? / sladkosti, bramburky, orisky / musi byt sirka 60 pokud ma dole byt lednicka na sudy“ | about 50 wide left (if the fridge is centred) / opening: don't know, maybe a drawer? / sweets, crisps, nuts / must be 60 wide if a keg fridge goes at the bottom | Unchanged slab, `Contents` only. `open:` the opening, the keg fridge and the width. |
| SF-DN (dining run) | „nahore hrnky / horni skrinky o dost vejs nez ve studii / kavovar s pripojenim na vodu a odpad / 2 nebo 3 mlynky na kafe“ and „pecivo / doplnky stravy / leky“ | top: mugs / upper cabinets considerably higher than in the study / coffee machine with water and drain / 2 or 3 coffee grinders; and bread / supplements / medicines | Countertop: the Ninja KT200EU kettle and one Eureka Mignon Libra grinder, at the cards' places. `open:` the coffee machine (no model named), grinders 2 and 3, and the height of the upper cabinets (SF-DH is unchanged). `open:` where bread, supplements and medicines go (no bay named). |

### Island east row

The black card by the island's east row, in full:

> Jak vyresit detail spodniho soklu vs. dock pro robota? Asi nejlepsi mit celou tudle stranu skrinek az k zemi viz obrazek. / Na druhy strane sokl byt musi, dost vysoky na robota (~10, nutno potvrdit). Bude-li ostrov oblozen deskou architekt urcite zakaze vyrez na spodni sokl, takze se tam bude chytat bordel. / Budou vsude uzky skrinky s dvirkama, nebo supliky? Jestli skrinky, tak musime nekam udat vakuovacku, jinak muze bejt v jednom ze supliku. / robota pobliz odpadu ze drezu, nejlip mozna vypada na prostredek?

Translation:

> How to solve the plinth detail versus the robot dock? Probably best to have this whole side of cabinets down to the floor, see picture. / On the other side there must be a plinth, high enough for the robot (~10, to be confirmed). If the island is clad in stone, the architect will surely forbid a cut-out for the plinth, so dirt will collect there. / Will there be narrow cabinets with doors everywhere, or drawers? If cabinets, we need to put the vacuum sealer somewhere; otherwise it can go in one of the drawers. / The robot near the sink waste; maybe the middle looks best?

It is all questions. The east row is unchanged: four slab fronts on the 100 legs.
- `open:` east fronts down to the floor.
- `open:` the dock place.
- `open:` doors or drawers.
- `open:` the vacuum sealer.

The red bay numbers on this row are hidden under the cards. The card (and the link on the SF-T4 note) shows the **Dreame X40 Master**, while “Plinth: open legs” above has Petr's robot as the X60 Pro Master. **These do not match.** Nothing was changed.

### Appliances and sink fittings

Built-ins are yaml elements with no box: `electricAppliances` or `sanitaryTerminals` with a `Pset_BuiltIn`.

- `models/kitchen_cabinet.py` lays each one out:
  - `Kind: Niche` with `Bay` and `Zone`: centred in the niche, standing on its board. The fascia is on the fronts' plane and the body fills the niche.
  - `Kind: Disposer` with `Sink`: a cylinder hung from the bowl's drain, centred on the bowl (`guess:`).
  - `Kind: Tap` with `Sink`: a body 50 round, `HoleOffset` 40 behind the bowl, an arm to `SpoutReach`, and a nozzle down to `SpoutHeight` (`guess:` shape).
- The export stops if a niche falls outside the maker's `NicheHeightMin/Max` and `NicheWidthMin/Max`, or is shallower than `NicheDepth`.
- In IFC the yaml product is kept (its class, PredefinedType, `Pset_ManufacturerTypeInformation` and room containment), not aggregated into the run. It gets the laid-out body and `Pset_KitchenBuiltIn`, and it joins its bay's group, as the hob does.

| Id | Product | Sizes used (W × H × D, mm) | Source |
| --- | --- | --- | --- |
| `EA-DGC7465` | Miele DGC 7465 HCX Pro, combi steam oven | 595 × 596 × 567. Niche 560–568 × 590–595 × 550. | [Miele data sheet](https://media.miele.com/downloads/e-/de/FS_12100360_DED_DE-de-DE.pdf), [miele.at](https://www.miele.at/product/12100360/dgc-7465-hcx-pro) |
| `EA-M2230` | Miele M 2230 SC, built-in microwave, Obsidian black | 595 × 372 × 310. Niche 562–568 × 350–362 × 310. Door hinged on the left. | [Miele data sheet](https://media.miele.com/downloads/z-/cs/FS_11103410_CZC_CZ-cs.pdf), [miele.cz](https://www.miele.cz/product/11103410/vestavna-mikrovlnna-trouba-m-2230-sc-obsidian-cerna) |
| `EA-EVO3-W`, `EA-EVO3-I` | EcoMaster STANDARD EVO3, food waste disposer | Ø145, 368 high. Sink hole Ø90. | [gastrozone.cz](https://www.gastrozone.cz/ecomaster-standard-evo3.html), [manual](https://www.nakuptedoma.cz/user/related_files/uzivatelsky-manual-em-evo3-cz-3.pdf) |
| `SN-TAP-I` | Hansgrohe Aquno Select M81 170, pull-out spray, sBox (73831000) | 390 high, spout 165 high, reach 220, hole Ø35 at most 50 from the bowl back. | [hansgrohe.com](https://www.hansgrohe.com/articledetail-aquno-select-m81-kitchen-mixer-170-pull-out-spray-2jet-sbox-73831000) |
| `SN-TAP-W` | Hansgrohe M71 M7117-H320, pull-out spray, sBox (73816000) | ComfortZone 320, hole Ø35. Total height 430 and reach 220 are `guess:` (not found). | [sanitino.cz](https://www.sanitino.cz/hansgrohe-m71-drezova-baterie-m7117h320-s-vysuvnou-sprskou-sbox-chrom-73816000) |
| `EA-KT200` | Ninja KT200EU kettle, on SF-DN | 235 × 210 × 135 | [multitronic.fi](https://www.multitronic.fi/en/products/4424285) |
| `EA-LIBRA` | Eureka Mignon Libra grinder, on SF-DN | 124 × 390 × 192 | [eureka.co.it](https://www.eureka.co.it/en/products/eureka+1920/prosumer+grinders/libra+range/117/) |

- **The monoblock's oven column is 582 clear between its shared dividers. Both Miele niches want 560–568.** SF-T3 therefore gets a 9 mm packer on each side of each niche (`clear=0.564`). The export rejects the niche without them. A real woodworker might use 18 mm double sides instead.
- The microwave's 372 fascia laps 8 over the niche at the top and bottom. The fronts above and below stop a gap short of the fascias.
- The sBox (the hose box under the island tap) is not modelled. Petr's note says it has to be turned to avoid the disposer: `open:`.
- The kettle and grinder sit 50 off the backsplash, at the cards' places along SF-DN (`guess:`). They are members of SF-DN's group because they stand on its top.

### What changed on existing items (2026-11-12)

No carcass size or position changed. These are the fronts:

| Item | Before | Now |
| --- | --- | --- |
| SF-I500b | one slab 497 × 807 | three drawers 497 × 197 / 197 / 407 |
| SF-I600b | one slab 597 × 807 | three drawers 597 × 197 / 197 / 407 |
| SF-A250 | slab 247 × 807 | pull-out (same front) with 3 baskets |
| SF-B800 | slab 797 × 807 | pull-out (same front) with 2 bins, box 207 high under the disposer |
| SF-C850 | slab 847 × 807 | pull-out (same front) with 3 bins |
| SF-AH850, SF-CH850 | one slab 847 × 897 | two doors 422 × 897 (L, R), 2 shelves |
| SF-BH800 | one slab 797 × 897 | two doors 397 × 897, 2 shelves |
| SF-T1 | one slab 747 × 2347 | door 597 × 2347 hinged L, plus a filler 147 on the west, plus 4 shelves |
| SF-T2 | one slab 597 × 2347 | door 597 × 1537 hinged R with 4 racks, plus 4 shelves, plus a lower slab 597 × 807 |
| SF-T3 | no front (`Front: none`) | top slab 597 × 544, microwave niche 356, steam oven niche 593, bottom slab 597 × 807 |
| SF-TF, KR-TALL-F | — | new bay and run over the fridge, 908 × 524 × 600, two doors 451 × 521 |

### Discrepancies on the plan

- **The west-wall notes say 900 (“nahore 900, dole 300+600”), 800 and 900, which is 2600. The model has 850 (250 + 600), 800 and 850, which is 2500 jamb to jamb (see “West run end cladding”).** Bays were not resized.
- **The fridge card says “Side by Side”, but the note says „4 dvere“ (4 doors).** The Whirlpool WQ9I MO2L EF box is unchanged.
- **The robot card and the SF-T4 link show the Dreame X40 Master; “Plinth: open legs” has Petr's X60 Pro Master (89 high).**
- The island east row's red widths are hidden under the cards and could not be read.

### guess: and open: (fronts and appliances)

`guess:`
- Drawer heights 200 / 200 / rest on SF-I500b and SF-I600b.
- Pull-out basket and bin counts (3 / 2 / 3).
- Two doors and two shelves per wall cabinet.
- SF-T1 filler side, shelf count and the 400 first shelf.
- SF-T2 lower band height of 810 and the counts of 4 racks and 4 shelves.
- SF-T3 niche order and heights (inside Miele's ranges), the 9 mm packers, and the fascia thickness of 18.
- SF-TF's 50 gap over the fridge and its no-shelf interior.
- Disposer and tap positions and shapes. The M71 height and reach.
- Kettle and grinder positions.
- The IKEA-like rack, shelf and bin sizes.

`open:`
- SF-I500a front type, the boards/strainer split, the towel bar and the sBox.
- SF-I300: drawer or pull-out.
- Oil bottles in SF-I500b's 200 drawer.
- The bin-vs-disposer conflict in SF-B800.
- SF-T2 lower band.
- SF-T3 top and bottom bands, and the combi-microwave idea.
- SF-T4 opening, width and keg fridge.
- The island east row (plinth vs. robot dock, doors or drawers, vacuum sealer, dock position).
- Coffee machine model, grinders 2–3, the upper dining cabinets “o dost vejs” (much higher) than in the study, and where bread, supplements and medicines go.
- Countertop items on the west run: „na pultu vlevo odkapavac, vpravo robot, nezaraditelnej bordel z mycky“ (on the counter, left a drip rack, right the food processor, unsortable dishwasher clutter). Not modelled.

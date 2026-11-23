# Kitchen cabinets: monoblock runs, fronts, drawers, appliances, worktop, sinks, hob, backsplash

Every kitchen cabinet run is one **monoblock**: a single carcass body whose neighbouring bays share their walls. The first detailed bay is **SF-I600a**, on the island's west row, the first 600 south of the rectangular sink, facing west. It is the bay with the knife drawer. Every other bay is a plain carcass with one slab front.

Code: `models/kitchen_cabinet.py` (layout), `models/kitchen_ifc.py` (IFC structure). Parameters live in `inputs/ground_floor/furnishings.yaml`: each run is an element with `Pset_KitchenRun`, each bay keeps its box and names its run in `Pset_KitchenBay`, and a drawer bay has `Pset_Drawers`. The live Pages preview is how a change is reviewed. `scripts/render_kitchen_run.py <run> [--bay <id>] [--open <drawer ids>]` can draw plan, front and iso PNGs later if they would help explain something; do not wait for them before sending the preview link.

Labels: **Petr** is a fact Petr gave, with the date or document. **Blum** is from Blum's MERIVOBOX catalogue 2024/25 (every drawer and pull-out since 2026-11-23, see “Drawers: Blum MERIVOBOX”). **IKEA** is an IKEA METOD carcass default (the MAXIMERA drawer assumption is gone since 2026-11-23), used because Petr said “when unsure of details and margins, default to IKEA METOD measurements” (2026-11-11). These cabinets are custom made, so every IKEA number can change. `guess:` is a number with no source at all. **Cosentino** is from the maker's colour page.

> **`open:` for the woodworker: SF-DH (the dining wall cabinet) is too shallow for its Blum AVENTOS HF lift-up fittings. Unresolved.**
>
> - SF-DH is **276** deep, linked to the pier + acoustic cladding depth (Petr, 2026-11-20 f: “dining area top cabinets as well as living room shelves are exactly the delth of columns + accoustic cladding”). That leaves **250** inside (276 − 18 front − 8 back).
> - Blum AVENTOS HF needs an internal depth **LT ≥ 264** ([Blum catalogue 2024/25, p. 20](https://publications.blum.com/2024/catalogue/en/20/); the HF planning sketch gives the mechanism 264 deep). **14 short.**
> - Options: a different lift fitting (or hinged doors, as before 2026-11-20) that fits a 250 interior, or more depth (deeper than the cladding line, i.e. proud of the slats).
> - The model **deliberately keeps 276** and still draws HF; `Pset_Fronts.BlumRangeOverride` on SF-DH records why, and the export lists it as `OutsideBlumRange`.
> - Petr, 2026-11-20 h: “keep that too shallow top dining cabinets for blum lift up hinge issue well documented for the woodworker. Its not part of the model but we'll resolve it in due time”.

> **`open:` for the woodworker: front thickness is his call.** The model draws **18** mm fronts (`FrontThickness`, METOD); **19–22** is possible and may be wanted for the rounded J grip (VOXTORP fronts are 22; ours leave a 4 back wall behind the cup; see “J grip”).
>
> - Thicker fronts are not a front-only change: they move the carcass depth / front offsets (the bay boxes keep their outside depth, so the carcass gets shallower or the fronts stand further out), the drawer box depths (Blum MERIVOBOX needs NL + 3 inside the carcass, so a thicker front can cost a whole 50 mm NL step where the carcass is at its minimum: island west and east, the tall run), the **Gridfinity drawer inserts** (the grid fit in the SF-I600a, SF-I500b and SF-I600b drawers, the east row's inner drawers and the dining drawers; rerun `scripts/gridfinity_fit.py`), and the **Blum** front weights and power factors (MERIVOBOX load class, AVENTOS HF).
> - Petr, 2026-11-22 (t787u): “if he chooses thicker fronts, it will affect cabinets and gridfinity in drawers etc.”

## Deviations from Petr's original plan (2026-11-23)

Petr's original document is the sticky-note plan [`KitchenPlan.jpg`](../../inputs/ground_floor/KitchenPlan.jpg) with his notes (quoted in `inputs/ground_floor/furnishings.yaml`), plus his rule of 2026-11-11 “when unsure of details and margins, default to IKEA METOD measurements”, which made the drawers IKEA MAXIMERA (2026-11-13). On **2026-11-23** (t835u) Petr switched every drawer to **Blum MERIVOBOX**: “Ok, time to pull the trigger. Remodel or drawers to use merivobox.” His standing rules: **soft-close (BLUMOTION) only, opening by hand; never TIP-ON (push to open) or SERVO-DRIVE (electric)** (Petr, 2026-11-23, t830u: “I never want anything push to open (nor electric). I do want soft close, but opening must be manual.”), and “existing docs probably say ‘assume ikea maximera’, that will have to go”. Each deviation, with its reason:

| # | Original (plan / earlier model) | Now (2026-11-23) | Why |
| --- | --- | --- | --- |
| 1 | Drawers modelled as IKEA MAXIMERA (inside = clear − 84 by side depth − 96; boxes 78 / 144 / 212 / front − 110) | **Blum MERIVOBOX everywhere**: inside LW − 51 by NL − 42, sides N 68.5 / M 91 / K 129 / E 192, full extension, BLUMOTION | Petr, t835u. One system for main and inner drawers (the ZI7.0M07 latch needs MERIVOBOX or LEGRABOX) |
| 2 | Island west row 586, then 567 deep (2026-11-22, “Ok, I want 1173.”) | **630** (NL 600 + 3 + 18 front + 9 half back) | Petr: “on island west side, use longest merivobox (600mm)” |
| 3 | Island east row 586 deep (NL 550); total island **1173** | **530** (NL 500); total island **1180** (20 overhang + 630 + 530) | Petr: “on island east use whatever gets us closely below 1200mm total island depth. The inner drawers matter, the bottom one can be the same length”. NL 550 would make 1230; the carcass is the Blum minimum, so there is no unused depth behind the boxes (Petr expected about 20; giving the east row 550 instead of 530 would restore 20 unused at 1200 overall) |
| 4 | Island east bottom box F (256) | **E (192)** | F is not in Blum's European catalogue (Blum NZ/AU sell it, NL 270–550 only); E is the tallest European side |
| 5 | West run and dining run carcasses | **unchanged** (600 / 450), boxes the longest NL that fits: west **NL 550** (574 inside, 21 behind), dining **NL 400** (414 inside, 11 behind) | Petr: “kitchen west run and dining area run dimensions are given, so choose closest merivobox length” |
| 6 | Tall north run 600 deep (the plan: “Tall carcasses are 600 deep”) | **629** (NL 600 + 3 + 18 front + 8 back); back on the wall, fronts 29 further south (y 14.971). SF-T1 and SF-TF follow so the fronts stay in line | Petr: “tall kitchen north run should use 600mm also (lmk total cabinet depth, this will affect fridge choice)” |
| 7 | Cabinet widths | **unchanged** | Petr: “cabinet widths stay unchanged” |
| 8 | Gridfinity: west boxes cut to whole cells (`GridfinityFitDepth`), plates centred | **No cut** (a MERIVOBOX box is its NL long); the plate is the closest whole grid for the new inside and is **snapped to the drawer front**, the slack at the back | Petr: “gridfinity plates stay (closest match to drawer length) and are snapped to the front of the drawer”; t836u: re-check the width too (see “MERIVOBOX remodel”) |
| 9 | Sink base SF-B800: a full-height pull-out with two equal bins trimmed under the disposer | A low **MERIVOBOX M** box (back 83 high, passes under the disposer) with **two IKEA FILUR 42 l** standing on its base, one each side of the disposer | Petr: “assume merivobox with upright Ikea Filur bins under main sink (the one you recommended)” |
| 10 | Recycling SF-C850: three equal bins (`guess:`) | **Empty**, deepest MERIVOBOX that fits: NL 550, E, 70 kg | Petr: “assume deepest merivobox for southwest recycling cabinet, leave empty without bins for now” |
| 11 | Island west top drawers: MAXIMERA low (78 box in a 100 front) | **MERIVOBOX M** (91) behind the same 100 fronts; the boxes sit lower than their fronts (see “MERIVOBOX remodel”) | N (the Blum box made for ~100 fronts) is only made up to NL 550, and Petr asked for NL 600 on the west |

## Monoblocks

Petr, 2026-11-12:

> Ok, lets assume cabinets are a monoblock. Neighboring walls are shared, including the back wall in the island cabinets. Model this well in ifc like we discussed, making sure Hide all others etc. still works as expected.
>
> In reality, the woodworker may object to very large monoblocks and break them down, but not all the way into individual cabinets. So this will come later, we assume full monoblocks.

`open:` the woodworker may split a monoblock into a few rigid sections (a double wall at each section joint). Not modelled; every run is one full body.

| Run | Bays (in run order) | Notes |
| --- | --- | --- |
| `KR-ISL` island | west row SF-I500a, SF-I600a, SF-I500b, SF-I600b, SF-I300 (north → south); east row SF-E600a … SF-E700 | The two rows stand back to back on one shared central back. One end side at each end spans both rows. |
| `KR-WEST` west-wall base | SF-C850, SF-B800, SF-A250, SF-A600 (south → north) | SF-A600 is the dishwasher slot (`Kind: Niche`): no carcass, worktop over it, SF-A250's end side is its south wall, the 18 panel KR-WEST-NICHE-END-N its north wall (2026-11-22). |
| `KR-WEST-H` west-wall wall cabinets | SF-CH850, SF-BH800, SF-AH850 | No plinth, no worktop; a top board per bay. Bottom 1560, top 2450 (the ceiling line), 890 high, Blum AVENTOS HF top bi-fold lift fronts (see “Wall cabinets: lift-up fronts”). |
| `KR-TALL-W` | SF-T1 | Alone between the west wall and the fridge, so a monoblock of one. |
| `KR-TALL` | SF-T2, SF-T3, SF-T4 | SF-T3 is the oven column: microwave over steam oven, in niches (see “Fronts and interiors”). |
| `KR-TALL-F` | SF-TF | The cabinet over the fridge, between SF-T1 and SF-T2: a monoblock of one, no worktop, no plinth. New 2026-11-12. |
| `KR-LB` | SF-LB | The living-room counter behind the sofa under an oak-veneer top at 930. New 2026-11-13 (see “Living-room counter”); an oak carcass in seven sections since 2026-11-19. |
| `KR-DH` | SF-DH | The oak wall cabinet over the dining run, three sections of door pairs. New 2026-11-19. |
| `KR-TC` | SF-TC | The oak tall corner cabinet, one door over a fixed slab. New 2026-11-19. |

The bookshelf FN-BK is not a kitchen run and stays the box in [furnishings.md](furnishings.md). The dining bases are `KR-DN` and the counter behind the sofa is `KR-LB`, both `Carcass: Box` runs: a bay with fronts in such a run is a carcass of its own, a bay without stays one body (see “Fronts everywhere”).

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

The bay boxes in the yaml did not move or change size (until the Gridfinity change of 2026-11-13, which resized the island's west row; see “Gridfinity drawers”). What changed is the space inside: a divider takes 9 mm from each neighbour instead of a full 18 mm side, and an end bay keeps a full 18 mm end side. Before this change every cabinet was its own box with two 18 mm sides (clear = width − 36).

| Bay | Width | Clear before | Clear now | Change |
| --- | ---: | ---: | ---: | ---: |
| SF-I500a | 500 | 464 | 473 | +9 (north end) |
| SF-I600a | **607** (was 600, Gridfinity) | 564 | 589 | +25 |
| SF-I500b | **481** (was 500, Gridfinity) | 464 | 463 | −1 |
| SF-I600b | **607** (was 600, Gridfinity) | 564 | 589 | +25 |
| SF-I300 | **305** (was 300, Gridfinity) | 264 | 278 | +14 (south end) |
| SF-E600a | **586** (was 600, 2026-11-19) | 564 | 559 | −5 (north end) |
| SF-E600b | **607** (was 600, Gridfinity, 2026-11-19) | 564 | 589 | +25 |
| SF-E600c | **607** (was 600, Gridfinity, 2026-11-19) | 564 | 589 | +25 |
| SF-E700 | 700 | 664 | 673 | +9 (south end) |
| SF-C850 | 850 | 814 | 823 | +9 (south end) |
| SF-B800 | 800 | 764 | 782 | +18 |
| SF-A250 | **232** (was 250, 2026-11-22 flush ends) | 196 | 205 | +9 (end side to the dishwasher slot) |
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
| Drawer band, D1 (top) | **100** (was 200); SF-I600b (hob) **200** | **Petr**, 2026-11-13: the top drawers are the shallowest variant (then IKEA MAXIMERA low, system height 10 cm). Since 2026-11-23 a Blum MERIVOBOX M box (see “MERIVOBOX remodel”). Under the hob see “Gridfinity drawers” |
| Drawer band, D2 | **100** (was 200) | **Petr**, 2026-11-13, as D1 |
| Drawer band, D3 (bottom) | **610** (rest; was 410); SF-I600b **510** | **Petr**, 2026-11-13: “The bottom drawer can grow by that leftover amount.” Written `*`, the rest of the carcass, so a carcass change lands here |
| Tall run carcass | **2350** | 2450 (**Petr**, tall height, unchanged) − the same 100 plinth, so the tall plinth lines up with the bases. The tall runs keep a kick board (`PlinthKind` is `Board` by default) |
| Wall-cabinet bottom | **1560** (was 1550) | **Petr**, 2026-11-13: “I want top cabinets to start at 1560mm from floor.” The bay box `Elevation` |
| Wall-cabinet carcass | **890** (was 900) | **Petr**, 2026-11-13: “don't move anything up, make it shorter in height. The existing ceiling line (windows, pocket doors, furtniture, basstraps) is an invariant.” The top stays **2450**; see “Wall cabinets: lift-up fronts” |

## Plinth: open legs

Petr, 2026-11-12: “Ok, 100mm it is.” He wants the lowest plinth his robot vacuum fits under, so it can clean under the cabinets.

| Robot | Height (mm) | Source |
| --- | --- | --- |
| Dreame X60 Pro Master (Petr's), lidar retracted | 89 | [Dreame](https://global.dreametech.com/products/x60-pro-master) |
| Roborock Saros 10 / 10R / Z70 | 79.8 | [Roborock](https://support.roborock.com/hc/en-us/articles/48039533143321) |

- (Until 2026-11-20 b; since then a kickboard covers the legs, see “Batch 2026-11-20 b”.) The island and the west run stand on **open legs, 100 high, with no kick board** (`PlinthKind: Legs`), so the robot drives under. The carcass bottom is at 100, which leaves 11 mm over the Dreame.
- Legs: Ø40, adjustable, IKEA-like. Each row has a front and a back leg on every wall line, under each end side and each shared divider. The front leg centre is 50 behind the carcass front (68 behind the front face) and the back one is 50 before the back. `guess:` IKEA puts 4 legs under each cabinet; a monoblock shares them at the dividers. Island: 22 legs. West run: 8 legs.
- The stone end cladding (island and west run) still runs from the floor to the worktop underside, so the robot gets in from the long sides only.
- The dishwasher slot (SF-A600) has no carcass: floor to worktop underside is **910**, unchanged by the plinth. The Bosch SBD6ECX12E is the XXL model (865 high) and takes a 865–925 niche ([Bosch spec sheet](https://media3.bosch-home.com/Documents/specsheet/de-DE/SBD6ECX12E.pdf)), so 910 fits. The usual 815–875 niche is the 815-high SMD model, not this one. The robot does not get under the dishwasher.
- The hob is unchanged: carcass top 910, hob underside 879. SF-I600b has three drawers under it (see “Gridfinity drawers”); the top box (a MERIVOBOX K since 2026-11-23, 725–854) stays 25 under the hob, more than Miele's 8.
- (Resolved 2026-11-20 b: a 100 flush kickboard.) The north dining run (`KR-DN`) has no plinth parameter: its oak bodies stand on the floor (`Carcass: Box`). `open:` should they get legs too?
- `open:` the drawer and door fronts stop 1.5 above the carcass bottom (101.5), with no kick board behind. Check the look and toe space with Petr.

## Fronts, boxes, slides (every drawer)

Since 2026-11-23 every drawer and pull-out is a **Blum MERIVOBOX** (Petr, t835u; see “Deviations from Petr's original plan”). Until then the boxes were modelled after IKEA MAXIMERA (2026-11-13 to 2026-11-22; history in “Gridfinity drawers”), and before that 13 mm a side off the carcass.

| Item | Value (mm) | Source |
| --- | ---: | --- |
| Front thickness | 18 | **IKEA** METOD fronts |
| Gap between fronts (and to the sides, 1.5 each) | 3 | **IKEA**: a 600×200 grid front is 597×197 |
| Motion | full extension, integrated **BLUMOTION** soft close, opened by hand. **No TIP-ON BLUMOTION, no SERVO-DRIVE** | **Blum** (both are optional add-ons; Petr, 2026-11-23, t830u, never wants them) |
| Nominal length NL | the longest Blum NL that fits the carcass (`merivobox_nl`), or `Pset_Drawers.NominalLength` | **Blum**: inside cabinet depth LT ≥ **NL + 3** |
| Drawer inside width | LW − **51** (`MerivoboxWidthDeduction`), LW the clear width between the carcass sides | **Blum**: chipboard base and back are cut to LW − 51; that it is also the inside between the sides is `guess:` |
| Drawer inside depth | NL − 26 − 16 = **NL − 42** (`MerivoboxBaseDeduction`, `MerivoboxBackThickness`) | **Blum**: base NL − 26 with a 16 chipboard back (NL − 22 with a steel back); minus the back is `guess:` |
| Drawer side | the band's `box=` letter; else a pull-out E, else the tallest of E, K, M, N whose space requirement fits the band and is made in the NL; else the lowest made | **Blum** heights and NL ranges, below; the rule is the model's |
| Vertical position | the cabinet profile stands on the band's floor (carcass bottom or a board for the lowest band, the band's bottom line above that) and takes **15** under the side and **2** over it; a box that would reach the top rail, the hob limit or the profile of the drawer above moves down (`BoxBelowFront` in the export) | **Blum** space requirement (N 85.5 = 68.5 + 17, M 108 = 91 + 17, K 146 = 129 + 17, E 209 = 192 + 17, “incl. 2 mm tilt adjustment”); the split 15 / 2 is derived |
| Load class | **70 kg** for pull-outs, E sides and insides over 600 wide, if the NL is 450–600; else 40 | **Blum**: 70 kg profiles exist for NL 450–600; the rule is `guess:` (brief: “use 70 kg for wide/heavy and the bin pull-outs”) |
| Inner drawers | Blum M / K inner drawers behind one tall front, each with a Blum **aluminium front piece** cut to **LW − 126** (for cabinets up to 1200; no wooden inner front); same NL as the main box | **Blum** pp. 258–263 |
| Coupled top inner drawer | **Blum ZI7.0M07** latch: driver on the inner front piece, housing drilled into the back of the outer front (Ø 25) | **Blum** p. 259 (“inner drawer with latch set possible from height 57 mm”); MERIVOBOX / LEGRABOX only |
| Drawn box walls (sides, back, inner front piece) | 19 (`BoxWall`); no box front behind the decor front (`BoxFrontPanel` **0**) | drawing size, `guess:`; the decor front closes the box (2026-11-22 e) |
| Drawn box base | 16 (`BoxBottomThickness`) | **Blum** cutting list: 16 chipboard |
| Box length, extension | inside + 2 × 19 (NL − 4), full extension (travel = box length) | drawing, see above |
| Front fixing | Blum front fixing brackets (INSERTA, screw-on or EXPANDO T), clip-on, 3-way adjustable; E pull-outs add the top front fixing bracket | **Blum** |

### Drawers: Blum MERIVOBOX

Blum, *Catalogue and technical manual 2024/2025* (English), MERIVOBOX pages 250–289 ([p. 252 overview](https://publications.blum.com/2024/catalogue/en/252/), [p. 256 drawer M](https://publications.blum.com/2024/catalogue/en/256/), [p. 257 planning M](https://publications.blum.com/2024/catalogue/en/257/), [p. 258 inner drawer M](https://publications.blum.com/2024/catalogue/en/258/), [p. 264 high fronted pull-out E](https://publications.blum.com/2024/catalogue/en/264/), [p. 274 waste-bin over-extension profile](https://publications.blum.com/2024/catalogue/en/274/), [p. 278 sink pull-out with centre piece](https://publications.blum.com/2024/catalogue/en/278/), [p. 282 SPACE TWIN](https://publications.blum.com/2024/catalogue/en/282/)); the [Blum MERIVOBOX ordering and planning guide (AU)](https://asset.duluxgroup.com.au/asset/b912dcd6-cc03-4181-abb0-9d5c9fc9a8e0/Blum-MERIVOBOX-Ordering-Planning-Information.pdf) says the same with fewer lengths; F is on [Blum NZ's range page](https://www.blum.com/nz/en/products/boxsystems/merivobox/programme/). Read 2026-11-23.

| Side | Height | Space requirement (height) | NL made (mm) | 70 kg | Chipboard back height |
| --- | ---: | ---: | --- | --- | ---: |
| N | 68.5 | 85.5 | 400, 450, 500, 550 | — (40 kg only) | 60.5 |
| M | 91 | 108 (inner drawer 106) | 270, 300, 350, 400, 450, 500, 550, 600 | 450–600 | 83 |
| K | 129 | 146 (inner drawer 144) | 300–600 | 450–600 | 121 |
| E (M side + gallery rail, BOXCOVER or BOXCAP) | 192 | 209 | 270–600 | 450–600 | 184 |
| F (Blum NZ/AU only, not in the European catalogue) | 256 | — | 270–550 | 500–550 | 248 |

- Every height: inside cabinet depth **LT ≥ NL + 3**; base and back **LW − 51** wide; base **NL − 26** (chipboard back) or NL − 22 (steel back); integrated BLUMOTION; TIP-ON BLUMOTION and SERVO-DRIVE are optional add-ons (not used here).
- Inner drawers: M and K, any NL of that side; front piece ZV4.1042M (1042 long, for KB 1200), cut to **LW − 126**.
- Waste bins: a **cabinet profile with over-extension for waste-bin applications** (453.4501BZ / .5001BZ / .5501BZ, 70 kg, cabinet NL 450–550 with drawer sides NL − 50) for E pull-outs. Not used in the model yet (SF-C850 is empty, SF-B800 uses a plain M box); `open:` for the bins.
- Sink cabinets: Blum's own answer is the **drawer M or pull-out E with a centre piece** (a U-shaped box round the siphon, exterior NL 450–600, interior NL 300–450). Petr chose a plain low M box with upright FILUR bins instead (2026-11-23).
- Narrow cabinets: **SPACE TWIN** for cabinet widths KB 150–250 (M, K or E sides). **SF-A250 (232 wide) is in that range**; the model draws it as an ordinary E pull-out.
- Cabinet widths: Blum NZ gives MERIVOBOX drawers and pull-outs 275–1400 wide and inner drawers 275–1200 (`guess:` that the European range is the same).

## Worktop and cladding

Petr, 2026-11-12:

> Its silestone maple color. It has an overhang of 300 over the cabinets. The sides of the kitchen islands are also clad in the same silestone.

and straight after:

> 30mm overhang, sorry

and on 2026-11-13:

> Tiny change along with this PR: make the silestone overhangs only 20mm, not 30mm.

| Item | Value | Source |
| --- | --- | --- |
| Material | Silestone **Blanco Maple** (Cosentino, Tropical Forest series, a mottled white quartz) | **Petr** (“silestone maple”). Blanco Maple is the only Silestone colour named Maple ([Cosentino](https://www.cosentino.com/en-ie/colours/silestone/blanco-maple)) |
| Thickness | 20 mm | `guess:`; Blanco Maple comes in 12, 20, 30 mm (**Cosentino**) |
| Top | 930 | **Petr** |
| Overhang past the front faces (fronts and drawer fronts) | **20 mm** (was 30) | **Petr**, 2026-11-13 (30 on 2026-11-12, corrected from 300). Every Silestone run: island, west run, north dining |
| Overhang at the back of a wall run | 0 (against the wall) | `guess:` |
| Island | one piece, **2540 × 1173** (x 20.480–21.653, y 11.280–13.820): the 2500 × 1153 body (west row 567 deep, east row 586), + 20 on the west front, 0 on the east front (flush, 2026-11-20 f), + 20 at each end over the cladding. Was 2540 × 1260, 1226, 1212, 1192 (until 2026-11-22 f) | derived |
| West-wall run | one piece, **2540 × 620**, y 11.33–13.87 (over the dishwasher slot too, + 20 at each clad end), x 18.80–19.42 | derived |
| North dining run | 20 mm, top 930, 20 front overhang, one slab per base (see “North dining run”) | **Petr**; derived |
| Slab formats | 3270 × 1590 and 3060 × 1410 | **Cosentino**. The island top fits one 3270 × 1590 slab |
| West run end cladding | same as the island ends, both ends (see “West run end cladding”) | **Petr** (“the sides of the west run”) |
| Island end cladding | Silestone Blanco Maple, 20 thick (same as the worktop), floor to the top (**0–930**), meeting the top in a 45° mitre (2026-11-20 f), full worktop depth **1173** (20 × 1173 × 930), covering the leg zone at the ends | **Petr** (“sides … clad in the same silestone”; “island top and sides use a 45 degree joint”); thickness `guess:` |
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
| `SN-RS15`, Teka BE LINEA RS15 71.40 X | west run, SF-B800, centred in the 800, 60 mm toward the front since 2026-11-22 (rim c 20–460, bowl c 40–440) | 750 × 440 | 710 × 400 × 200 | **706 × 396, R13** | 910 (`Elevation` 0.73 → **0.71**) | [Teka 115000004](https://www.teka.com/cs-cz/produkt/be-linea-rs15-71-40_115000004/) |
| `SN-RS1840`, Teka BE LINEA RS15 18.40 X | island, SF-I500a, south rim on the 500/600 line | 440 × 220 | 400 × 180 × 140 | **396 × 176, R13** | 910 (`Elevation` 0.77) | [Teka 115000010](https://www.teka.com/cs-cz/produkt/be-linea-rs15-18-40-ss_115000010/); the card on [`KitchenPlan.jpg`](../../inputs/ground_floor/KitchenPlan.jpg) next to the island's green rectangle |

- `SN-RS15` sat with its rim at c 80–520 (bowl c 100–500, 120 mm of stone in front of the inner bowl). Since 2026-11-22 (Petr, t819u) it sits 60 mm toward the front: rim c 20–460, bowl c 40–440, cut-out c 42–438. That leaves 60 mm from the worktop front edge (c −20) to the inner bowl and 62 mm to the cut-out, still above Cosentino's ≥ 50 mm from a worktop edge to a cut-out ([Silestone Design & Installation, Jan 2024](https://www.cosentino.com), “Cut-outs: Sink and tap”). The 20 mm rim stops 2 mm behind the inner face of the 18 mm front (`guess:` glue and clip play; the rim must not sit on the front). SF-B800 has no front rail. The Teka install sheet 61401450 wants a **min 65 mm** back band for a Ø35 hole; with the bowl back at c 440 there are 140 mm to the backsplash face (c 580). Drain centre is 115 mm from the inner bowl back, measured from the official to-scale plan (±3 mm for line thickness), stored as `Pset_Sink DrainOffsetFromBack: 0.115` (c 325).
- `SN-RS1840`'s long side runs across the island (east–west), because the plan's green rectangle is a little longer that way. `guess:` Both ways fit: the clear width is 473 and 440 is the longest side.
- `SN-RS1840` is still centred on the bay depth (567 since 2026-11-22 f; 586 from 2026-11-13), so its cut-out runs 85.5–481.5 behind the bay front, 105.5–501.5 from the worktop's front edge (was 95–491 / 115–511). `guess:` The plan's rectangle sits a bit further forward. Its yaml `Origin` x moved 7 mm east with the bay centre (2026-11-13) and 9.5 west (x 20.573 → 20.5635, 2026-11-22 f).
- Along the run, since 2026-11-23 (Petr, t834u: place it from the KitchenPlan.jpg note), the south rim sits on the SF-I500a / SF-I600a line (y 13.300, a 280–500 in the 500 bay). The inner bowl is at a 300–480, 11 mm north of the 9 mm divider's inner face (a 491). That leaves **320 mm** from the north worktop edge (a −20) to the inner bowl (a 300), and 300 mm from the cabinet end (a 0) to the bowl. Until then the sink was centred in the 500 (Origin y 13.44, rim a 140–360, bowl a 160–340, only 180 mm of landing). The plan's green rectangle already sat against the 600, about 264 mm from the body end (schematic stroke, not a cut-out). No Cosentino or Teka minimum applies at the south: the worktop is one slab, and the south cut-out (a 478) is far from any worktop edge. Drain centre is 115 mm from the inner bowl back, the same 400 mm bowl depth as the 71.40 on the official RS15 plan (sheet 61401450, ±3 mm), stored as `Pset_Sink DrainOffsetFromBack: 0.115` (c 368.5).
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
| Through cut-out | 600 × 500, centred on the bay along the run (the bay is 607, so 3.5 inside each bay line) | Miele |
| Rebate | 624 × 524, 5.5 deep, around the cut-out | Miele |
| Cut-out front edge | 50 behind the bay front face (70 from the worktop edge). It was the 500 cut-out centred on the 600 bay depth; the bay is 567 now (586 until 2026-11-22 f) and `FrontOffset` stayed 50, so the cut-out is 50–550 in the 558 side depth and 603 from the worktop's east edge (was 622) | `guess:` |
| Cut-out to the worktop's far (east) edge | **656** (was 680; ≥ 50 required) | derived, checked by the model |
| Glass | 620 × 520 × 4, top at 930 | Miele |
| Housing | 533 × 427, from 879 to 926 | Miele (51 installation height) |
| Hob underside | **879**, 31 below the carcass top (910) | derived |
| Front rail in SF-I600b | **left out**: the housing (86.5–513.5 behind the front face) drops into the rail (18–98) | `guess:` |
| Drawers | three: fronts 197 / 97 / 507, Blum MERIVOBOX boxes K (725–854), M (617–708), E (133–325), NL 600 (since 2026-11-23). Housing 533 in a 589 clear, 28 a side | yaml, see “MERIVOBOX remodel” |

If a bay under a hob has drawers, the top drawer box stays 8 mm below the hob underside (`MinDrawerGap`): since 2026-11-23 a MERIVOBOX box is not cut but moves down (its metal sides cannot be trimmed), and the export stops if it no longer fits above the carcass bottom. The top K box ends at 854, 25 below the hob.

In IFC the worktop's rebate is a second extrusion layer. The slab is one 14.5 mm layer with the through holes and one 5.5 mm top layer with the rebate. In the 3D model the rebate is a pocket.

`open:` surface-mounted or flush-fit (Petr). Surface-mounted is `Mounting: SurfaceMounted`: the glass then rests on the stone (top 934) and there is no rebate. `open:` the cut-out's position in the bay depth. `open:` fan airflow (the air-intake base panel holes) is not modelled.

## West run end cladding

Superseded on 2026-11-22 by “West run flush ends” below: the claddings are gone. History:

Petr, 2026-11-12: “Oh, and also do the sides of the west run of cabinets.”

Both ends of `KR-WEST` are free: the south end is at OP24's north jamb (y 11.35), the north end at OP25's south jamb (y 13.85). Neither touches a wall or a tall cabinet. So `CladEnds: true`, the same rule as the island:

| Piece | Size (mm) | Where | Group |
| --- | --- | --- | --- |
| `KR-WEST-CLAD-S` | 20 × 620 × 910, floor to the worktop underside | y 11.33–11.35, x 18.80–19.42 | SF-C850 |
| `KR-WEST-CLAD-N` | 20 × 620 × 910 | y 13.85–13.87 | SF-A600 (the dishwasher slot: the stone is its north side) |

The worktop runs 20 further at each end, flush with the cladding: 2500 → **2540**, y 11.33–13.87. `IfcCovering` `CLADDING`, part of the `KR-WEST` assembly.

`open:` the two 20 mm pieces and the worktop ends now stand 20 mm in front of the OP24 and OP25 door openings (the run filled the jamb-to-jamb 2500 with 0 clearance). Check the door frames and leaves; the alternative is to shorten the run's bays by 40.

## North dining run

Petr, 2026-11-12: “And also do the north cabinets (in the dining area in the same silestone).”

`KR-DN` is a kitchen run over the four dining bases, west to east: SF-F052 (300 × 200, in front of pier W-052), SF-DN (2700 × 450), SF-F053 (300 × 200), SF-DN70 (70 × 450). They are oak boxes, not METOD carcasses, so the run uses `Carcass: Box`:

- **Each base stays one oak body, cut down under the stone.** Body top 930 → **910**, so the counter stays 930. The body is `<bay>-BODY`, `IfcSystemFurnitureElement` `USERDEFINED`, material “natural oak”, and the only member of its bay group. I picked this over keeping the oak top and swapping it for stone: the height comes from the bay box and the worktop thickness, so a thicker stone lowers the body by itself.
- **Worktop** `KR-DN-WORKTOP`: 20 mm Silestone Blanco Maple, top 930, 20 mm overhang at the front (y 15.13; 30 and y 15.12 until 2026-11-13). It is one part with one slab per base, because the depth steps at the piers:

| Slab | x | y | Size (mm) |
| --- | --- | --- | --- |
| over SF-F052 | 22.15–22.45 | 15.13–15.35 | 300 × 220 |
| over SF-DN | 22.45–25.15 | 15.13–15.60 | 2700 × 470 |
| over SF-F053 | 25.15–25.45 | 15.13–15.35 | 300 × 220 |
| over SF-DN70 | 25.45–25.52 | 15.13–15.60 | 70 × 470 |

- **No end cladding: no side is exposed.**
  - The west end of SF-F052 abuts SF-T4, the kitchen tall cabinet, which already overlaps the filler by 8 mm.
  - The east end of SF-DN70 abuts SF-LB, the counter behind the sofa. Since 2026-11-13 that counter is also 930 (`KR-LB`, oak veneer), so the old 110 mm strip of SF-DN70's east face (800–910) is gone: the two bodies meet flush at 910 and the two tops meet at x 25.52. The joint between the Silestone and the oak veneer is `open:` (Petr: “We'll work out the details of where the two materials connect later”).
  - The sides between the bases face the piers.
- The real stone would be one notched piece (or joints at the piers); the model's slabs only show the outline. `open:` joints.

## Backsplash

Petr, 2026-11-12: “As well as the back wall above countertop, below top cabinets, also in silestone (12.5mm or whatever the thin one for wall cladding is)” and “back wall for both west and north”. Blanco Maple comes in 12, 20 and 30 (**Cosentino**), so the thin one is **12 mm**.

| Piece | Where | Size (mm) | Top | Source |
| --- | --- | --- | --- | --- |
| `KR-WEST-BACKSPLASH` | west wall, on the west worktop, y 11.35–13.85 (OP24 to OP25 jamb, not over the clad ends' extra 20), x 18.800–18.812 | 2500 × 12 × **630**, 930 → **1560** (was 620, → 1550) | underside of SF-CH850 / SF-BH800 / SF-AH850 | derived by `kitchen_cabinet` (`Backsplash: true`): the lowest box over the strip |
| `CV-BS-DN` | north wall behind SF-DN, x 22.45–25.15, y 15.588–15.600 | 2700 × 12 × 630, 930 → 1560 (was 620, → 1550) | underside of SF-DH | yaml `coverings` |
| `CV-BS-R052`, `CV-BS-R053W` | the piers' faces facing each other in the dining bay, y 15.35–15.588 | 238 × 12 × 630 each | under SF-DH | `guess:` the stone wraps the piers |
| `CV-BS-P052` | front of pier W-052 over filler SF-F052, x 22.158–22.462, y 15.338–15.35 | 304 × 12 × 630 | **1560, `open:`** (nothing above) | `guess:` wrap |
| `CV-BS-P053` | front of pier W-053 over filler SF-F053, x 25.138–25.462 | 324 × 12 × 630 | **1560, `open:`** | `guess:` wrap |
| `CV-BS-R053E` | W-053's east face over SF-DN70, x 25.450–25.462, y 15.35–15.588 | 238 × 12 × 630 | **1560, `open:`** | `guess:` wrap |
| `CV-BS-DN70` | north wall over SF-DN70, x 25.462–25.52 | 58 × 12 × 630 | **1560, `open:`** | |

- The north pieces stop at 1560 wherever nothing hangs above, the same top as under SF-DH and the west run (1550 until 2026-11-13, when the wall cabinets moved up 10). The west strip follows the cabinets by itself; the north pieces are yaml `coverings` and were edited by hand. `open:` Petr to confirm that top.
- SF-LB, the counter behind the sofa, gets no backsplash: the bookshelf's oak lamella back is on that wall from 980 (850 before the counter rose to 930). `open:` the 50 mm strip of wall between the 930 counter and the bookshelf.
- The north backsplash stands on the dining run's stone worktop (`KR-DN`, see “North dining run”). It stays plain `IfcCovering` in the yaml, because the run's two depths (200 at the piers, 450 between) would need a stepped strip.
- Pier W-052's front piece starts at SF-T4's east face (x 22.158), not the pier edge, because T4 already nicks the pier by 8 mm.

## Gridfinity drawers (2026-11-13)

> History. The MAXIMERA deductions and box heights below were superseded on 2026-11-23 by Blum MERIVOBOX (see “Fronts, boxes, slides” and “MERIVOBOX remodel”). The grid rule (inside n × 42 + 1) still holds.

Petr, 2026-11-13, after a plan for sizing the island drawers' insides to the Gridfinity grid (42 mm pitch, inside n × 42 + 1 mm):

> On Gridfinity: cleanup the issues you've found. Model this after maximera (so if 600 ikea metod has a certain maximera inner size, subtract the same from whatever our side is). Also assume Metod material thicknesses for now (although its a monoblock, so the woodworker might ask for thicker material). When considering depth, always round down (i.e. make the whole island a bit shallower to fit gridfinity grid, don't make it any deeper). Add gridfinity baseplates to each drawer so that I can see them in the 3D model.
>
> Tiny change along with this PR: make the silestone overhangs only 20mm, not 30mm.

and:

> make the top drawers maximera's shallowest variant. The bottom drawer can grow by thet leftover amount.

What it means here:

- **Thicknesses: METOD**, 18 mm carcass board, dividers and central back (`BoardThickness`). `open:` the woodworker may want thicker boards for a monoblock; rerun `scripts/gridfinity_fit.py` and adjust the bay boxes.
- **Inside: MAXIMERA deductions**, clear width − 84 and side depth − 96 (IKEA MAXIMERA; that section was replaced by “Drawers: Blum MERIVOBOX” on 2026-11-23).
- **Target:** inside width n × 42 + 1 and depth m × 42 + 1 (`GridfinityPitch`, `GridfinityPlay`). Width: the nearest n; the shared divider moves, so a bay's clear width changes 1:1 with its width. The west row stays 2500: SF-I300 takes the difference, so the sink bay SF-I500a does not move. Depth: always round down, the bay gets shallower.
- Bays with `Pset_Drawers.Gridfinity: true`: SF-I600a, SF-I500b, SF-I600b. The model checks the fit and writes an `open:` note when a drawer is off the grid. `scripts/gridfinity_fit.py` prints the bay width and depth that would make it exact.

| Bay | Width (old → new) | Clear | Drawer inside | Grid | Fronts (old → new) |
| --- | --- | ---: | --- | --- | --- |
| SF-I500a (sink) | 500 → 500 | 473 | — | — | slab, unchanged |
| SF-I600a | 600 → **607** | 589 | 505 × 463 | 12 × 11 | 597 × 197 / 197 / 407 → **604 × 97 / 97 / 607** |
| SF-I500b | 500 → **481** | 463 | 379 × 463 | 9 × 11 | 497 × 197 / 197 / 407 → **478 × 97 / 97 / 607** |
| SF-I600b (hob) | 600 → **607** | 589 | 505 × 463 | 12 × 11 | 597 × 197 / 197 / 407 → **604 × 197 / 97 / 507** |
| SF-I300 | 300 → **305** | 278 | — | — | slab 297 → 302 |

- SF-I500b rounds down to 9 cells (−19 to the bay) because 10 cells would need +23.
- **Depth.** The side depth was 573 (600 − 18 − 9), so the inside was 477, which is 11 cells (463). The west row's bays go **600 → 586** deep, the side depth 559. The west faces move 14 east (x 20.554 → 20.568). The central back (x 21.154) and the east row stay where they were: the east row has no drawers yet, so it keeps its 600. **The island body is 2500 × 1186 (was 1200).**
- **Worktop 2540 × 1226** (was 1260: −14 body, −2 × 10 overhang). End cladding 20 × 1226 × 910, still flush with the worktop's ends and long edges (it follows the worktop's depth).
- The hob bay's centre moves 8.5 north (y 11.900 → 11.9085), and the cut-out and housing move with it. The sink bay does not move along the run. The sink, disposer and tap move 7 east with the bay's depth centre.
- Box side heights by Petr's “shallowest variant”: the top two drawers are MAXIMERA low (100 band, 78 box), and the bottom drawer takes the rest (610 band, 500 box, front − 110).
- **Under the hob the top band stays 200.** A 100 band ends at 810, and the hob limit is 871 (879 − Miele's 8), so the 78 low box does not fit (61 mm). The export stops on it. SF-I600b is therefore **200 / 100 / 510**, and its top box is a MAXIMERA medium (144, 713–857). **Its front lines (710, 610) no longer line up with the neighbours' (810, 710).** One alternative that keeps them aligned is a fixed 97 blind front under the hob plus two drawers (100 + 610); not done.
- The west run's pull-outs follow the same MAXIMERA rule. SF-A250's box is 177 × 516 (was 197 × 550), SF-B800's 736 × 516 (was 756 × 550), and SF-C850's 777 × 516 (was 797 × 550). Their heights are unchanged (front − 110; SF-B800 still trimmed under the disposer).

### Baseplates

Each Gridfinity drawer carries an n × m baseplate on its inside floor, centred. It is drawn as a 1 mm floor plus a 5 mm rib on every grid line (`GridfinityHeight` 5, `GridfinityFloor` 1, `GridfinityRib` 2.5, all `guess:`; a standard plate is about 5 high). It is part of the drawer's IFC shape, like a pull-out's bins. In the viewer it is its own layer (**Interior › Gridfinity baseplates**, on by default, `ground_floor.gridfinity.glb`, fetched right after the model) hung on the drawer, so it slides with it; see [viewer/Performance.md](../viewer/Performance.md). The drawer's `Pset_KitchenFront` has `Gridfinity` (for example `12x11`), `InsideWidth`, `InsideDepth`, `InsideHeight` and the slack.

### Height in Gridfinity units (7 mm), above the baseplate

“Side” is up to the top of the box sides. “Clear” is up to whatever stops the bin when the drawer closes: the top rail (892), the hob limit (871) or the box bottom of the drawer above. Bin heights exclude a stacking lip.

| Drawer | Front | Box | Side | Clear |
| --- | ---: | ---: | --- | --- |
| SF-I600a / SF-I500b D1 | 97 | 78 | 57 (8 u) | 58 (8 u) |
| SF-I600a / SF-I500b D2 | 97 | 78 | 57 (8 u) | 79 (11 u) |
| SF-I600a / SF-I500b D3 | 607 | 500 | 479 (68 u) | 571 (81 u) |
| SF-I600b D1 (hob) | 197 | 144 | 123 (17 u) | 137 (19 u) |
| SF-I600b D2 | 97 | 78 | 57 (8 u) | 79 (11 u) |
| SF-I600b D3 | 507 | 400 | 379 (54 u) | 471 (67 u) |

Alternative, only the top drawer shallow (not built): SF-I600a and SF-I500b 100 / 200 / 510 (boxes 78 / 144 / 400: side 8 / 17 / 54 u, clear 8 / 25 / 67 u); SF-I600b 200 / 200 / 410 (boxes 144 / 144 / 300: side 17 / 17 / 39 u, clear 19 / 25 / 53 u).

`open:` the woodworker's board thickness (the fit changes with it); the hob bay's front lines. (The MAXIMERA box position is moot since 2026-11-23: MERIVOBOX uses Blum's space requirement.)

## Parametric rule

Everything above is computed in `kitchen_cabinet.runs` from the bay boxes (`Origin`, `RefDirection`, `Width`, `Depth`, `Height`, `Elevation`), the run's `Pset_KitchenRun` (any `IKEA_DEFAULTS_MM` key, in metres, plus `WorktopMaterial`, `WorktopOverhang<N|E|S|W>` (one edge, 2026-11-20 f), `CladEnds`, `CladdingMaterial`, `FlushEnds` (end sides as the end panels, top flush, an 18 panel past an end niche; 2026-11-22), `MitreEnds` (45° top/end joints), `Carcass` (`Box` for whole-body bays), `BodyMaterial`, `PlinthKind` (`Legs` or `Board`), `Backsplash`, `BacksplashThickness`, `BacksplashTop`, `BacksplashMaterial`, `UnderlayThickness` + `UnderlayMaterial` (a layer under the stone, box runs, 2026-11-20 h), `SideKickboards`, `SideKickboardSetback` (2026-11-20 h), `FrontGrip` (`J`: routed rounded J grips, `JGripLipTop`, `JGripCupDepth`, `JGripBackWall`, `JGripBowlRadius`, `JGripCrestRadius`, `JGripCornerRadius`, `JGripEdgeRadius`, per-band `grip=`), `FrontFinish`, `WallFrontOverhang` (2026-11-22 c)) and each bay's `Pset_Fronts` (`Layout`, `Contents`: see “Fronts and interiors”) or the older `Pset_Drawers` (`NominalHeights` in metres top to bottom, one `*` for the rest; `Contents` separated by `;`), plus the built-ins' `Pset_BuiltIn`. A bay may override the drawer and front values in its own `Pset_KitchenCabinet`. Change a bay's width and its dividers move, both neighbours' clear widths and drawer boxes follow (drawer insides are Blum MERIVOBOX: the clear width less 51 by the longest NL that fits less 42; Gridfinity baseplates follow the inside), and the worktop grows; change the counter height or the worktop thickness and the carcass, the `*` drawer and the cladding follow. Rows that stand back to back (same back plane, fronts facing away) share one central back; a run with `CladEnds` gets stone on both ends. A sink's cut-out comes from its `Pset_Sink` and follows the sink box. A hob follows its bay (`Pset_Hob`): move or widen the bay and the cut-out, rebate, glass and housing move with it. The model stops the export if the hob comes closer than `MinBackEdge` to the far edge. A backsplash runs the worktop's length, from the worktop top up to the lowest box hanging over it. A `lift` band takes its cabinet height, width and depth from the bay and is checked against Blum's ranges for its fitting; change the bay and the fronts, mechanisms, weight, power factor and open clearance follow.

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
| `drawer` | A drawer: a front on the 3 mm grid, plus a Blum MERIVOBOX box (inside LW − 51 by NL − 42, full extension; see “Fronts, boxes, slides”). `Pset_Drawers.Gridfinity: true` adds a Gridfinity baseplate, snapped to the front. | `box=N\|M\|K\|E` (the side; default: the tallest that fits), `inner=M,K` (inner drawers, top first), `latch=top\|none` |
| `pullout` | A full-height front with one MERIVOBOX box behind it (E unless `box=`), plus the baskets or bins riding in it. | `box=`, `items=shelves\|bins`, `n=`, `bin=WxDxH` (metres: real bins standing on the base, the outer two against the box sides) |
| `door` | One hinged leaf. The rest of the bay is a fixed filler. Adjustable shelves sit behind it. | `hinge=L\|R` (as you face it), `width=` (leaf grid), `filler=L\|R` (default: the hinge side), `shelves=`, `first=` (the first shelf's height over the band floor), `racks=` (door shelves) |
| `doors` | A pair of leaves: the left one hinged left, the right one hinged right. | `shelves=`, `first=` |
| `lift` | A Blum AVENTOS lift-up front (HF: a bi-fold pair, the others one front), a lift mechanism on each side panel, a lever arm on each, and the space the front needs open. The export stops outside Blum's ranges unless the bay's `Pset_Fronts.BlumRangeOverride` gives the reason (a quote); the breach is then kept on the front (`OutsideBlumRange`). | `fitting=HF\|HS\|HL\|HK\|HK-S\|HK-XS`, `upper=` (HF upper front, metres), `shelves=`, `first=`, `density=` (kg/m³) |
| `niche` | An appliance niche. The height is the clear niche height. A board goes under it. | `clear=` (metres) narrows the opening with a packer on each side |
| `front` | One slab front (a band the plan does not describe). | — |
| `none` | Nothing. | — |
| `Sections` (with `Layout<N>`, `Contents<N>`) | Splits the bay into side-by-side sections with 18 dividers, each its own layout (see “Fronts everywhere”). | `"7"`, `"0.6 0.6 0.3 0.6 0.6"` |

- A board separates two bands unless both are drawers.
- Drawer and pull-out boxes stop 10 mm under any obstacle above them: a sink bowl, a disposer, or 8 mm under the hob (`ObstacleClearance`, `guess:`). The box records how much was cut (`Trimmed`).
- The new IKEA-like defaults are in `IKEA_DEFAULTS_MM`: `ShelfSetback` 20, `RackDepth` 80, `RackHeight` 70, `RackInset` 40, `BinGap` 10. All are `guess:`.
- In IFC, every front, door, shelf, board, filler and packer is a run part, `IfcSystemFurnitureElement` PANEL. Pull-outs are USERDEFINED, like drawers. Each one has `Pset_KitchenFront` (Zone, Kind, Hinge, Contents, box sizes …).
- Doors are `Door` parts with their hinge edge, so the viewer can swing them.

### Bay by bay

The quoted notes are the yellow sticky notes next to each bay on KitchenPlan.jpg.

| Bay | Note (Czech, as written) | Translation | Modelled |
| --- | --- | --- | --- |
| SF-I500a (island sink) | „vlevo prkynka / vpravo cednik do drezu (a drtic) / madlo na uterku / SBox by mel trcet doprava, coz nejde, ma nakou vuli a de pootocit, ale musi se vyhnout drtici, snad to vyjde“ | left: cutting boards / right: sink strainer (and the disposer) / towel-bar handle / the sBox should stick out to the right, which is not possible; it has some play and can be turned, but it must avoid the disposer, hopefully it works out | The slab front is unchanged. Since 2026-11-23 the sink sits against the south divider (320 mm landing at the north; boards get the 282 mm clear north of the bowl). Disposer `EA-EVO3-I` hangs on the official drain. Tap `SN-TAP-I` stands behind the bowl. `open:` door or pull-out, and the split between boards and strainer. `open:` the towel-bar handle. `open:` the sBox (not modelled; clearance below). |
| SF-I600a | „noze / naradi (lis na cesnek, hmozdir, vaha, ..) / dole nevim 🤷“ | knives / tools (garlic press, mortar, scales …) / bottom: don't know | Three drawers, **100 / 100 / rest (610)** since 2026-11-13 (Gridfinity drawers). Fronts 604 × 97 / 97 / 607. |
| SF-I500b | „koreni / oleje, octy, mouky, cukry, dochucovadla / hrnce“ | spices / oils, vinegars, flours, sugars, seasonings / pots | Three drawers, **100 / 100 / rest (610)** since 2026-11-13. Fronts 478 × 97 / 97 / 607. Boxes 78 / 78 / 500 high. **`open:` oil and vinegar bottles now go in a 100 drawer (a 78 box); they did not stand in the old 90 box either.** |
| SF-I600b (hob) | „pribory / varecky, sterky, naberacky / panve“ | cutlery / wooden spoons, spatulas, ladles / pans | Three drawers, **200 / 100 / rest (510)** since 2026-11-13. Fronts 604 × 197 / 97 / 507. The top box (MERIVOBOX K, 725–854 since 2026-11-23) stays under the hob limit (879 − 8 = 871). |
| SF-I300 | „alobal, folie, spejle, pytliky“ | foil, cling film, skewers, bags | Since 2026-11-19 a full-height pull-out with three baskets (`guess:`; see “Fronts everywhere”). |
| SF-E600a … SF-E700 (island east row) | Black card: „Jak vyresit detail spodniho soklu vs. dock pro robota? …“ (in full under “Island east row”) | Questions only | Since 2026-11-20 four full-height Gridfinity drawers, one per bay (see “Batch 2026-11-20”; a door and three drawer bays on 2026-11-19). The dock and the plinth questions stay `open:`. |
| SF-A250 | Note A: „dole vlevo suplik uklid (mycka, jar, odmastovac, houbicky)“ | bottom left: cleaning drawer (dishwasher tabs, washing-up liquid, degreaser, sponges) | A full-height pull-out (front 229 × 807, 247 until 2026-11-22) with 3 baskets. The basket count is `guess:`. |
| SF-A600 | Note A: „dole vpravo mycka“ | bottom right: dishwasher | Unchanged: the niche for the Bosch SBD6ECX12E. |
| SF-B800 (west sink) | Note B: „800 / dole vlevo kos, vpravo kompost / nahore talire / kose se musi vyhnout drtici, to se proste bude resit az skrinky budou“ | 800 / bottom left: bin, right: compost / top: plates / the bins must avoid the disposer, that will be solved once the cabinets exist | One full-height pull-out (front 797 × 807) with two bins (`guess:` one pull-out for both). The disposer `EA-EVO3-W` hangs under the bowl. The pull-out box stops 10 under it, so it is only **207 high (493 cut)**. Tap `SN-TAP-W` is modelled. `open:` the bin-vs-disposer conflict. Petr's own note defers it, and EcoMaster's manual suggests the disposer between two bins or a lower bin under it. |
| SF-C850 | Note C: „900 / dole trideny odpad“ | 900 / bottom: sorted waste | A full-height pull-out (front 847 × 807) with three bins. The bin count is `guess:`. |
| SF-AH850 | Note A: „nahore sklenice“ | top: glasses | Blum AVENTOS HF top bi-fold, two fronts 847 × 442, two shelves (since 2026-11-13; two doors before). The shelf count is `guess:`. |
| SF-BH800 | Note B: „nahore talire“ | top: plates | AVENTOS HF top, two fronts 797 × 442, two shelves, as above. |
| SF-CH850 | Note C: „nahore tycovy mixer, velke misky, odmerky (vsechno co se musi mejt ale moc se nepouziva)“ | top: stick blender, big bowls, measuring cups (everything that needs washing but is rarely used) | AVENTOS HF top lift, two fronts 847 × 442, two shelves, as above. |
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

It is all questions. Until 2026-11-19 the east row was four slab fronts on the 100 legs; it had drawers and one door from 2026-11-19 (best effort, see “Fronts everywhere”) and four full-height drawers since 2026-11-20 (see “Batch 2026-11-20”).
- `open:` east fronts down to the floor (they stay on the 100 legs).
- `open:` the dock place.
- `open:` doors or drawers: drawers, `guess:`.
- `open:` the vacuum sealer: behind SF-E600a's door, `guess:`.

The red bay numbers on this row are hidden under the cards. The card (and the link on the SF-T4 note) shows the **Dreame X40 Master**, while “Plinth: open legs” above has Petr's robot as the X60 Pro Master. **These do not match.** Nothing was changed.

### Appliances and sink fittings

Built-ins are yaml elements with no box: `electricAppliances` or `sanitaryTerminals` with a `Pset_BuiltIn`.

- `models/kitchen_cabinet.py` lays each one out:
  - `Kind: Niche` with `Bay` and `Zone`: centred in the niche, standing on its board. The fascia is on the fronts' plane and the body fills the niche.
  - `Kind: Disposer` with `Sink`: a cylinder hung from the bowl's drain. When `Pset_Sink DrainOffsetFromBack` is set, the cylinder is centred on that drain (both RS15 sinks: 115 mm from the inner bowl back, official Teka plan, the shared 400 mm bowl depth). Otherwise it is centred on the bowl (`guess:`).
  - `Kind: Tap` with `Sink`: a body 50 round, `HoleOffset` behind the *inner bowl back* (not the rim — until 2026-11-22 the offset was applied to the overall box, 20 mm too far back on these Teka sinks), an arm to `SpoutReach`, and a nozzle down to `SpoutHeight` (`guess:` shape).
- The export stops if a niche falls outside the maker's `NicheHeightMin/Max` and `NicheWidthMin/Max`, or is shallower than `NicheDepth`.
- In IFC the yaml product is kept (its class, PredefinedType, `Pset_ManufacturerTypeInformation` and room containment), not aggregated into the run. It gets the laid-out body and `Pset_KitchenBuiltIn`, and it joins its bay's group, as the hob does.

| Id | Product | Sizes used (W × H × D, mm) | Source |
| --- | --- | --- | --- |
| `EA-DGC7465` | Miele DGC 7465 HCX Pro, combi steam oven | 595 × 596 × 567. Niche 560–568 × 590–595 × 550. | [Miele data sheet](https://media.miele.com/downloads/e-/de/FS_12100360_DED_DE-de-DE.pdf), [miele.at](https://www.miele.at/product/12100360/dgc-7465-hcx-pro) |
| `EA-M2230` | Miele M 2230 SC, built-in microwave, Obsidian black | 595 × 372 × 310. Niche 562–568 × 350–362 × 310. Door hinged on the left. | [Miele data sheet](https://media.miele.com/downloads/z-/cs/FS_11103410_CZC_CZ-cs.pdf), [miele.cz](https://www.miele.cz/product/11103410/vestavna-mikrovlnna-trouba-m-2230-sc-obsidian-cerna) |
| `EA-EVO3-W`, `EA-EVO3-I` | EcoMaster STANDARD EVO3, food waste disposer | Ø145, 368 high. Sink hole Ø90. | [gastrozone.cz](https://www.gastrozone.cz/ecomaster-standard-evo3.html), [manual](https://www.nakuptedoma.cz/user/related_files/uzivatelsky-manual-em-evo3-cz-3.pdf) |
| `SN-TAP-I` | Hansgrohe Aquno Select M81 170, pull-out spray, sBox (73831000) | 390 high, spout 165 high, reach 220, hole Ø35. `HoleOffset` **66** mm behind the bowl (was 40 when the offset was applied from the rim, then 60 to keep that hole). 66 mm leaves 50.5 mm of stone between the cut-out and the Ø35 hole (Cosentino ≥ 50; 60 mm left only 44.5). **Hansgrohe's own recommendation is “max. 50 mm from the back of the bowl”**; 66 exceeds it (60 already did). The sBox (30 × 160 × 520, [hansgrohe sBox guide](https://www.hansgrohe.com/kitchen/guide/installation/sbox)) is still `open:` / not modelled; see “Island sink against the south divider” below. | [hansgrohe.com](https://www.hansgrohe.com/articledetail-aquno-select-m81-kitchen-mixer-170-pull-out-spray-2jet-sbox-73831000) |
| `SN-TAP-W` | Hansgrohe M71 M7117-H320, pull-out spray, sBox (73816000) | Official dimensional drawing: total height **445**, spout **333**, reach **235**, hole Ø35. ComfortZone 320 is the name, not the spout height. `HoleOffset` **70** mm behind the bowl (was 40, and that 40 was applied from the rim, so the hole sat at c 560, 60 mm behind the bowl). 70 mm leaves 54 mm of stone between the cut-out and the hole (Cosentino ≥ 50) and 70 mm from the hole to the backsplash. Worktop thickness max 35 mm (60 mm with the extension); 20 mm is fine. The drawing states no bowl or wall setback. | [sanitino.cz](https://www.sanitino.cz/hansgrohe-m71-drezova-baterie-m7117h320-s-vysuvnou-sprskou-sbox-chrom-73816000), official drawing for 73816000 |
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
| SF-I500b | one slab 497 × 807 | three drawers 497 × 197 / 197 / 407 (2026-11-13: 478 × 97 / 97 / 607, see “Gridfinity drawers”) |
| SF-I600b | one slab 597 × 807 | three drawers 597 × 197 / 197 / 407 (2026-11-13: 604 × 197 / 97 / 507) |
| SF-A250 | slab 247 × 807 (229 × 807 since 2026-11-22) | pull-out (same front) with 3 baskets |
| SF-B800 | slab 797 × 807 | pull-out (same front) with 2 bins, box 207 high under the disposer |
| SF-C850 | slab 847 × 807 | pull-out (same front) with 3 bins |
| SF-AH850, SF-CH850 | one slab 847 × 897 | two doors 422 × 897 (L, R), 2 shelves |
| SF-BH800 | one slab 797 × 897 | two doors 397 × 897, 2 shelves |
| SF-T1 | one slab 747 × 2347 | door 597 × 2347 hinged L, plus a filler 147 on the west, plus 4 shelves |
| SF-T2 | one slab 597 × 2347 | door 597 × 1537 hinged R with 4 racks, plus 4 shelves, plus a lower slab 597 × 807 |
| SF-T3 | no front (`Front: none`) | top slab 597 × 544, microwave niche 356, steam oven niche 593, bottom slab 597 × 807 |
| SF-TF, KR-TALL-F | — | new bay and run over the fridge, 908 × 524 × 600, two doors 451 × 521 |

2026-11-13 (see “Wall cabinets: lift-up fronts” and “Living-room counter”):

| Item | Before | Now |
| --- | --- | --- |
| SF-AH850, SF-BH800, SF-CH850 bottom / top | 1550 / 2450 | **1560 / 2450**, 890 high (was 900) |
| SF-AH850, SF-CH850 fronts | two doors 422 × 897 (L, R) | AVENTOS HF top bi-fold: upper 847 × 442 over lower 847 × 442, 3 gap between |
| SF-BH800 fronts | two doors 397 × 897 | AVENTOS HF top: 797 × 442 over 797 × 442 |
| Wall-cabinet shelves | 2 per bay | 2 per bay, re-spaced in the 854 inside: 1851–1869 and 2141–2159 (three equal spaces of 273), 22 behind the fronts (Blum HF min 22) |
| Lift mechanisms | — | new: `<bay>-LIFTMECH-L/R`, 30 × 264 × 195 inside each side panel, under the top board (2237–2432) |
| KR-WEST-BACKSPLASH | 930 → 1550 | 930 → 1560 |
| SF-DH (north, dining) bottom / top | 1550 / 2450 | 1560 / 2450, 890 high (fronts not changed) |
| North backsplash pieces `CV-BS-*` | 620 high, to 1550 | 630 high, to 1560 |
| SF-LB | oak box 4180 × 450 × 800, no top | `KR-LB`: oak body 4180 × 450 × 910 + 20 oak-veneer top, 20 front overhang (4180 × 470), top **930** |
| FN-BK (bookshelf) | 850–2450, 1600 high | **980–2450, 1470 high** |
| The open-door records in `ground_floor.doors.json` | 6 wall-cabinet door leaves | replaced by 3 `kind: "linkage"` records, one per lift front (tap to open, see “Opening in the viewer”) |
| Levers | — | new: `<bay>-LIFTARM-L/R`, 16 × 16, from the mechanism's underside (pivot at 2237) plumb down to the lower front (fixed at 1819) |
| Ceiling line | — | new check: nothing above 2450 (`models/ceiling_line.py`), and no open lift front in a bass trap, the soffit or the sloped ceiling |

### Discrepancies on the plan

- **The west-wall notes say 900 (“nahore 900, dole 300+600”), 800 and 900, which is 2600. The model has 850 (250 + 600), 800 and 850, which is 2500 jamb to jamb (see “West run end cladding”).** Bays were not resized.
- **The fridge card says “Side by Side”, but the note says „4 dvere“ (4 doors).** The Whirlpool WQ9I MO2L EF box is unchanged.
- **The robot card and the SF-T4 link show the Dreame X40 Master; “Plinth: open legs” has Petr's X60 Pro Master (89 high).**
- The island east row's red widths are hidden under the cards and could not be read.

### guess: and open: (fronts and appliances)

`guess:`
- Drawer heights on SF-I500b and SF-I600b (Petr set the island's top drawers to the shallowest variant on 2026-11-13; MERIVOBOX M since 2026-11-23).
- Pull-out basket and bin counts (3 / 2 / 3).
- Two shelves per wall cabinet. The lift mechanism box sizes and the 700 kg/m³ front density (see “Wall cabinets: lift-up fronts”).
- The living-room counter's 20 mm oak-veneer top and its 20 mm overhang (the stone runs' 20 since #116).
- SF-T1 filler side, shelf count and the 400 first shelf.
- SF-T2 lower band height of 810 and the counts of 4 racks and 4 shelves.
- SF-T3 niche order and heights (inside Miele's ranges), the 9 mm packers, and the fascia thickness of 18.
- SF-TF's 50 gap over the fridge and its no-shelf interior.
- Disposer and tap *shapes* (a 50 mm body, a 30 mm arm). The island disposer is still centred on the bowl (`guess:`). The west disposer drain (115 mm from the bowl back) and the official M71 height 445 / spout 333 / reach 235 are manufacturer figures, not guesses.
- Kettle and grinder positions.
- The IKEA-like rack, shelf and bin sizes.

`open:`
- The HF open pose: the lower front's −15° at 116° and the lever pivot and fixing are read off Blum's planning sketch, not published figures, so the −8° and the 1991 edge at the 88° stop follow from that guess (see “Opening in the viewer”).
- SF-DH's fitting: since 2026-11-19 three sections of hinged door pairs (AVENTOS HF at 88° wants 28 over the top; the soffit is 20 over it).
- The Silestone / oak-veneer joint at x 25.52 and the oak top's thickness.
- The lever's real shape: drawn as a straight 16 × 16 bar, 6 in front of the shelves.
- SF-I500a: the boards/strainer split, the towel bar and the sBox (the door since 2026-11-19 is `guess:`).
- SF-I300: a pull-out since 2026-11-19 (`guess:`).
- Oil bottles in SF-I500b's 100 drawer.
- The bin-vs-disposer conflict in SF-B800.
- SF-T2 lower band, SF-T3 top and bottom bands, SF-T4 opening: best effort since 2026-11-19 (see “Fronts everywhere”). The combi-microwave idea, SF-T4's width and the keg fridge stay open.
- The island east row: plinth vs. robot dock, dock position (fronts best effort since 2026-11-19).
- Coffee machine model, grinders 2–3, the upper dining cabinets “o dost vejs” (much higher) than in the study (SF-DH moved to 1560 with the kitchen wall cabinets on 2026-11-13; whether that is what the note meant is still open), and where bread, supplements and medicines go.
- Countertop items on the west run: „na pultu vlevo odkapavac, vpravo robot, nezaraditelnej bordel z mycky“ (on the counter, left a drip rack, right the food processor, unsortable dishwasher clutter). Not modelled.

## Wall cabinets: lift-up fronts (2026-11-13)

Petr, 2026-11-13, with a photo of a light oak wall cabinet whose large front lifts upward on a Blum AVENTOS fitting:

> - I want this hinge for the top cabinets.
> - I want top cabinets to start at 1560mm from floor.

### Which AVENTOS

Blum's lift systems, from the [catalogue and technical manual 2024/2025](https://publications.blum.com/2024/catalogue/en/44/) and the [AVENTOS overview](https://d2.blum.com/services/BEC003/bro016_ep_dok_bsg_$sen_$aof_$v1.pdf):

| Type | Motion | Cabinet height KH | Width KB | Page |
| --- | --- | --- | --- | --- |
| HK top | stay lift: one front tilts up about its top edge on one lever arm per side, compact box on the side panel, no hinges | 205–600 (Blum recommends 600 at most) | ≤ 1800 | [p. 44](https://publications.blum.com/2024/catalogue/en/44/), [p. 48](https://publications.blum.com/2024/catalogue/en/48/) |
| HK-S / HK-XS | small stay lifts | 180–400 / 240–600 | ≤ 1800 | [overview](https://www.ldlonline.co.uk/media/wysiwyg/others/media/aventos-hf-hks-hkxs-hs-hl.pdf) |
| HL top | lift up: the front rises parallel, staying vertical, on two arms | 300–580 | ≤ 1800 | overview |
| HS top | up and over: the front swings up and over the cabinet top | 350–800 | ≤ 1800 | [p. 32](https://publications.blum.com/2024/catalogue/en/32/), [p. 34](https://publications.blum.com/2024/catalogue/en/34/), [p. 36](https://publications.blum.com/2024/catalogue/en/36/) |
| HF top | bi-fold: two fronts, the upper turns up about the top, the lower folds onto it | 480–1200 | ≤ 1800 | [p. 20](https://publications.blum.com/2024/catalogue/en/20/), [p. 22](https://publications.blum.com/2024/catalogue/en/22/), [p. 24](https://publications.blum.com/2024/catalogue/en/24/) |

Petr's photo (Bob did not see the image file itself, only its description) was first read as a one-part HK top front, and a first pass modelled HF top with the tops raised to 2460. Petr, 2026-11-13:

> assume the hinge exists for our width. Also, don't move anything up, make it shorter in height. The existing ceiling line (windows, pocket doors, furtniture, basstraps) is an invariant.

and then:

> btw the way they open right now is that they fully fold the two halves onto one another. Thats not how it works in reality. You still need to be able to reach up and pull it back down, so they stay only partially folded, like my image.

and then:

> do 88 degrees in the model.

So the photo is **HF top, the bi-fold**, opening to the **88° stop**, and the cabinets keep their 1560 bottom and lose 10 in height (890, top 2450 as before). At 890 HF is inside every Blum range below; each bay's `Pset_Fronts.BlumRangeOverride` still records Petr's “assume the hinge exists for our width”, and the export would keep (and list as `OutsideBlumRange`) anything outside Blum's tables instead of stopping. Without an override it stops, as for any other fitting.

### Our wall cabinets against HF top

| Check | Ours | Blum HF top | Source |
| --- | ---: | --- | --- |
| Cabinet height KH | **890** | 480–1200; lever set 22F3500 for 600–910 | [p. 22](https://publications.blum.com/2024/catalogue/en/22/) |
| Cabinet width KB | 850 / 800 / 850 | ≤ 1800 | [p. 20](https://publications.blum.com/2024/catalogue/en/20/) |
| Internal depth LT | 324 (350 − 18 front − 8 back) | ≥ 264 | p. 20 |
| Internal height LH | 854 | ≥ 512 with 22F3500 | [p. 24](https://publications.blum.com/2024/catalogue/en/24/) |
| Fronts | 847 (797) × 442 + 3 + 442, 18 thick | symmetrical pair, KH = 2 × FHo + gaps | p. 24 |
| Front weight FG, both fronts | 9.4 kg (850), 8.9 kg (800) | — | oak-veneered chipboard at 700 kg/m³, `guess:` (Blum's chipboard reference is 680, [p. 716](https://publications.blum.com/2024/catalogue/en/716/)); no handle |
| Power factor LF = KH × FG | 8396 (850), 7901 (800) | 2700–13500 → lift mechanism 22F2510 (system screws) or 22F2500 | p. 22 |
| Opening angle | **88°** (stop) | 116° without a stop; opening-angle stops 107°, 97°, 88°, 81° | [p. 22–24](https://publications.blum.com/2024/catalogue/en/22/) |
| Space above the top, open at 88° | **28** (Blum's Y for the 88° stop; the swept fronts themselves rise 16) | Y = FHo × 0.44 + 38 at 116° (232 for us), × 0.29 + 35 at 107°, × 0.12 + 31 at 97°, 28 at 88°, 0 at 81° | p. 24; [planning sketch](https://575022.myshoptet.com/user/documents/documents/pictures/schm_Blum_AVENTOS_HF_TOP_Planungsskizzen_01.pdf) |
| Reach in front of the face, open at 88° | **443** (swept four-bar) | X max = FHo × 0.9 + 1.5 × FD + 35 = 460, at 116° | same |
| Shelves behind the fronts | 22 | min 22 (the lever runs there) | planning sketch, “Platzbedarf” |

Modelled (`models/kitchen_cabinet.py`, band kind `lift`, `AVENTOS` table):
- Each bay's fronts are `<bay>-LIFT1` (upper, 2006–2448) and `<bay>-LIFT2` (lower, 1562–2004), `Role: Lift`, `Pset_KitchenFront` with the fitting, front weight, power factor, the open clearances and the override; the lower front also has its open pose (`OpenBottomEdgeHeight`, `OpenBottomEdgeAhead`, `OpenLowerAngle`).
- A lift mechanism `<bay>-LIFTMECH-L` / `-R` on each side panel, just under the top board, 30 off the side, 264 deep, 195 high (2237–2432). Blum's sketch gives min 264 and 194.
- A lever `<bay>-LIFTARM-L` / `-R` per side, `Role: LiftArm`: a 16 × 16 bar from the mechanism's underside (its pivot, 2237) plumb down just behind the fronts to its fixing on the lower front at 1819, 186 under the centre hinge. Blum's “Platzbedarf” sketch has the lever this way (pivot under the mechanism, fixed to the lower front); its length is solved (below).
- Two shelves, re-spaced by the model in the 854 inside: 1851–1869 and 2141–2159, three equal spaces, 22 behind the fronts. Both are below the mechanisms, and the export stops if a shelf would hit a mechanism or a lever.
- The opening angle is the band option `angle=` (`lift * fitting=HF angle=88 shelves=2`). The export stops unless it is one of Blum's HF stop settings (116, 107, 97, 88, 81; `AVENTOS["HF"]["stops"]`). Without it a front opens to the fitting's largest angle.
- The space the open fronts need is `run.clearances` (28 above, 443 ahead: above, the larger of Blum's Y for the stop and the swept fronts; ahead, the swept fronts) and is drawn in red by `scripts/render_kitchen_run.py`. It is not a solid in the IFC or the viewer.

### Opening in the viewer

Petr, 2026-11-13: “And make them open too, add the animation for this opening mechanism.”, then “they stay only partially folded, like my image”, then “do 88 degrees in the model.”

Each lift front is one `kind: "linkage"` record in `ground_floor.doors.json` (`_linkage_motion` in `models/ground_floor.py`, from the `LiftJoint` that `_lift_motion` in `models/kitchen_cabinet.py` puts on each part). A linkage is a list of joints; each turns its part meshes about a line (`pivot` point, `axis`), by `angles` sampled at 25 even steps from shut to open, relative to a `parent` joint or to the model. The viewer (`doors.js` `bindLinkage`) interpolates them over 900 ms. Any part of it takes the tap.

The motion is a four-bar (`_hf_fourbar`): carcass, upper front, lower front, lever.

| Joint | Parts | Line | Motion |
| --- | --- | --- | --- |
| 0 | `<bay>-LIFT1`, upper front | its top edge, on the inner face | 0 → 88°, up and out, to the 88° stop. 116° is HF without a stop; the stops are 107°, 97°, 88°, 81° (Blum's Y formulas go as FHo × −cos(angle): 0.44 at 116°, 0.29 at 107°, 0.12 at 97°) |
| 1, rides on 0 | `<bay>-LIFT2`, lower front | the centre hinge, inner faces | whatever keeps the lever's length: it hangs almost plumb on the way up (−3° at half way) and ends at the 88° stop **−8° from vertical**, its bottom edge tilted back towards the cabinet (−96° relative to the upper front). Without the stop it would go on to −15° at 116° |
| 2 | `<bay>-LIFTARM-L/R`, levers | the pivot under the mechanism | rigid, turns 92° with its fixing on the lower front (123° at 116°) |

The −15° at 116° is read off Blum's “Platzbedarf nach oben” sketch (the open lower front against the cabinet), `guess:` measured on the drawing, not a published figure; the lever's fixing height (186 under the centre hinge) is solved so the four-bar ends there with no stop (`LIFT_HF_LOWER_OPEN_DEG`). A stop does not change the lever, only where the motion ends, so at 88° the lower front hangs −8°: a result of that guess, not a Blum figure. The export stops if the lower front's bottom edge would pass into the carcass on the way.

**Open at 88°, the lower front's bottom edge is at 1991 above the floor, 383 out from the closed face** (1061 above the 930 worktop; 2210 and 283 at 116°). The fronts project at most **443** from the face (at the centre hinge, which ends about 2433 high, near the top: the upper front stands almost level); the swept fronts rise 16 above the 2450 top, Blum asks for 28.

| Person | Head (standing) | Under the open edge (1991) |
| --- | ---: | ---: |
| Zuzana, 174 cm | 1740 | **251** above her head; ~1991 is about what a 174 cm person reaches at a stretch (`guess:` from body proportions), so the edge is at the top of her reach |
| 186 cm | 1860 | **131** above the head |

### The ceiling line and the open fronts

`models/ceiling_line.py` (called from `models/ground_floor.py` on every export):
- `CEILING_LINE_MM` = 2450, the obývák model's `furniture_height` (`models/obyvak_geom.py`), where the bass traps start and the pocket doors and tall cabinets stop. The export stops if any furnishing (lights excepted) or kitchen part reaches above it. Today the tops at 2450 are the wall cabinets, SF-DH, SF-T1–T4, FN-BK and SF-TC.
- For each lift front, its swept path (the front's corners at every sampled angle) and its clearance box are checked against the kitchen-gable trap (x 18.80–18.99, from 2450), the living-gable trap, the soffit over the north cabinets (y from 15.15, underside 2470) and the sloped ceiling (`ObyvakLayout.z_ceil`, obývák X = y − 10.25). An overlap stops the export; the margins go to the run's notes.

| Front | Open envelope | Kitchen-gable trap | Soffit | Under the sloped ceiling |
| --- | --- | ---: | ---: | ---: |
| SF-AH850 | x 19.132–19.593, top 2478 (Blum's 28 above) | 142 clear (envelope starts at x 19.132, trap face 18.990) | 1300 | 1633 |
| SF-BH800 | same | 142 | 2150 | 2178 |
| SF-CH850 | same | 142 | 2950 | 1465 |

- **No overlap with the bass trap**: the trap is behind the cabinets (the 350 deep box stands in front of its 190), the closed cabinets stop at its 2450 underside, and the open fronts swing out into the room from the cabinet face.
- SF-DH's top is back at 2450: 20 under the 2470 soffit, as before 2026-11-13.
- Above the worktop: 1560 − 930 = **630** clear. The 12 mm backsplash runs 930 → 1560.
- The tops line up with the tall run (2450) again.
- OP24 / OP25 (2450 high pocket doors) stay outside the run's jamb-to-jamb plan; nothing changed there.
- There is no hood over the west run (the hob is on the island), so nothing to check there.

## Living-room counter (KR-LB, 2026-11-13)

Petr, 2026-11-13:

> I want the living room part of the counter (behind sofa) to continue at the same 930 height as the dining area. It will be oak veneer, not silestone. We'll work out the details of where the two materials connect later.

| Item | Before | Now | Source |
| --- | --- | --- | --- |
| SF-LB | oak box 4180 × 450 × 800, top 800 | `KR-LB` (`Carcass: Box`): oak body `SF-LB-BODY` 0–910 | **Petr** (930); body = 930 − top, derived |
| Top | the box's own top at 800 | `KR-LB-WORKTOP`, oak veneer, 20 thick, 910–930, 20 front overhang (front edge in line with KR-DN, both 20 since #116) | **Petr** (oak veneer, 930); 20 thick `guess:`, overhang as the stone runs, chosen so the bodies and the front edge line up with the dining run |
| Over the sofa back (760) | 40 | **170** (the overhang's underside, 910, is 150 over it) | derived |
| Bookshelf FN-BK | 850–2450 | **980–2450** | `guess:` the 50 gap it had over the old base; it would have cut 80 into the new counter |

- **The bookshelf had to move: at 850 it sat 80 mm inside the new 930 counter. Its bottom is now 980 (top 2450 unchanged), 130 mm shorter, still three shelves.** Petr did not say this.
- The junction with the Silestone at x 25.52 (SF-DN70 | SF-LB) is two tops butting, the stone 20 and the oak 20, both at 930. `open:` as Petr said.
- The 110 mm strip of SF-DN70 that showed above the old base is gone.
- In the viewer the oak top uses the oak material (label `oak`), not the stone.
- No plinth or legs: like the dining bodies, SF-LB stands on the floor. `open:` (same as KR-DN).

## Fronts everywhere (2026-11-19)

Petr, 2026-11-19:

> Add the rest of the drawers, hinged doors, etc. to the whole kitchen and living room on a best effort basis. We'll adjust details later.

Every cabinet on the plan and in the living room that had no fronts or interior got them, from the existing drawer, door and pull-out machinery, so doors swing and drawers slide in the viewer (`ground_floor.doors.json`, the same `hinged` and `drawer` records). Where the plan says nothing, the sizes are IKEA METOD / MAXIMERA defaults (18 boards and fronts, 3 mm gaps, the drawer deductions) and everything else is `guess:`. The ceiling line (2450) and the 100 mm open legs are unchanged; nothing new reaches above 2450 and no new lift front was added.

### New: sections in one bay

A bay wider than one cabinet keeps its yaml box and id and is split into side-by-side sections: `Pset_Fronts.Sections` is a count of equal sections (`"7"`) or widths in metres, left to right as you face it, with at most one `*` (`"0.6 0.6 0.3 0.6 0.6"`). An 18 mm divider (`<bay>-SDIV<k>`) stands between two sections, centred on the section line, from the bottom board to under the rails / top. Each section reads `Layout<N>` (else `Layout`) and `Contents<N>`, and its parts are `<bay>-S<N>-…` (for example `SF-DN-S1-D1`, `SF-LB-S2-DOOR1`). All of them join the bay's group, so “Hide all others” still shows the whole bay. Change the bay width or the section widths and the dividers, fronts, drawer boxes and shelves follow.

In a `Carcass: Box` run (KR-DN, KR-LB) a bay with `Pset_Fronts` or `Pset_Drawers` is built as a carcass of its own (two end sides, bottom, back, front and back rails under the top) on the run's plinth; a bay without stays one oak body (SF-DN70). Both runs set `PlinthHeight: 0`: the boxes still stand on the floor, as before (`open:` legs or a plinth there).

### Per unit

| Unit | Before | Now | Sizes |
| --- | --- | --- | --- |
| SF-I500a (island sink) | slab 497 × 807 | one door hinged L (the island's north end), no shelf (bowl and disposer) | door 497 × 807 |
| SF-I300 | slab 302 × 807 | full-height pull-out, 3 baskets | front 302 × 807, box 700 high, inside 194 × 463 |
| SF-E600a | slab 597 × 807, 600 × 600 | door hinged R (north end) with one shelf, for the vacuum sealer | **586 × 586** bay, door 583 × 807 |
| SF-E600b, SF-E600c | slab 597 × 807, 600 × 600 | three drawers 100 / 100 / rest, Gridfinity 12 × 11 | **607 × 586** bays, fronts 604 × 97 / 97 / 607, boxes 78 / 78 / 500, inside 505 × 463 |
| SF-E700 | slab 697 × 807, 700 × 600 | three drawers 100 / 100 / rest, Gridfinity 14 × 11 | **700 × 586**, fronts 697 × 97 / 97 / 607, inside 589 × 463 |
| SF-T2 lower band | slab 597 × 807 | two drawers 400 + 410 | fronts 597 × 397 / 407, boxes 290 / 300 |
| SF-T3 top band | slab 597 × 544 | door hinged L (the SF-T2 side), one shelf | 597 × 544 |
| SF-T3 bottom band | slab 597 × 807 | two drawers 400 + 410 | as SF-T2 |
| SF-T4 | slab 497 × 2347 | door hinged R (the pier side) with 4 shelves over two drawers 400 + 410, in line with SF-T2 / SF-T3 (“mozna suplik?”) | door 497 × 1537 |
| SF-F052, SF-F053 (fillers at the piers) | oak bodies 300 × 200 | shallow cupboards, one door hinged R with two shelves | door 297 × 907 |
| SF-DN (dining base, 2700) | oak body | five sections, west to east 600 / 600 / 300 / 600 / 600: drawers 200 / 300 / rest in each 600, a pull-out with three baskets in the 300 | fronts 597 × 197 / 297 / 407, pull-out 297 × 907; drawer boxes 144 / 212 / 300, inside 489 × 328 |
| SF-DN70 | oak body | unchanged (70 wide) | — |
| SF-LB (living counter, 4180) | oak body | seven equal sections (597): a 140 drawer over a door with one shelf, hinges alternating L / R | drawer fronts 594 × 137 (771–909), boxes 78 high from 773; doors 594 × 767 |
| SF-DH (dining wall cabinet, 2700) | plain oak box | run `KR-DH`, three 900 sections, each a pair of doors (L, R) with two shelves; “nahore hrnky” (mugs) | leaves 447 × 887 |
| SF-TC (tall corner, 200) | plain oak box | run `KR-TC`: one door hinged R (the east wall) with four shelves from 700 up, a fixed 700 slab under it | door 197 × 1747, slab 197 × 697 |

Materials (`inputs/materials/catalogue.yaml`): every part of KR-DN, KR-LB, KR-DH and KR-TC is the Kaplan natural oak; the kitchen fronts selector now also covers doors, banded fronts (`FRONT1` …) and fillers (they fell back to the white carcass before).

### Dimension changes

- **Island east row: depth 600 → 586** (the Gridfinity rule: depth rounds down). The central back stays at x 21.154, so **the east face moves 14 west, x 21.754 → 21.740.** The island body is **2500 × 1172** (was 1186) and the worktop **2540 × 1212** (was 1226), x 20.548–21.760. The end cladding follows.
- **Island east row widths (north → south): 600 / 600 / 600 / 700 → 586 / 607 / 607 / 700**, so that the drawer insides are whole cells (inside n × 42 + 1, MAXIMERA deductions). SF-E700 was already exact (14 × 42 + 1 = 589). The door bay SF-E600a takes the remainder. Origins: SF-E600a [21.74, 13.214], SF-E600b [21.74, 12.607], SF-E600c [21.74, 12.0], SF-E700 [21.74, 11.3].
- The table FN-GATTA did not move: it is now 7 mm east of the centre of the island-to-sofa gap (1347 to the island, 1333 to the sofa).
- No other box changed: SF-DN, SF-LB, SF-DH and SF-TC keep their outer sizes and ids, and SF-DH / SF-TC moved from plain boxes into runs of their own (`KR-DH`, `KR-TC`). In IFC they are now bay groups of those runs, not loose products.

### guess: and open: (2026-11-19)

`guess:`
- Every front type and count above: Petr's notes name none of them.
- Drawer heights: the island's east row copies the west row (MAXIMERA low 100 + 100 + rest); the tall run's lower bands 400 + 410; SF-DN 200 / 300 / rest (METOD-like); SF-LB 140 over the sofa back.
- Section widths: SF-DN 600 / 600 / 300 / 600 / 600 (IKEA widths), SF-LB seven equal, SF-DH three 900.
- Hinge sides: SF-I500a L and SF-E600a R (towards the island ends), SF-T3 L, SF-T4 R, SF-F052 / SF-F053 R (SF-T4 stands 150 proud west of SF-F052), SF-LB alternating, SF-TC R.
- Shelf counts (1 per base door, 2 in the fillers and SF-DH, 4 in SF-T4 and SF-TC) and basket counts (3).
- The vacuum sealer in SF-E600a.

`open:`
- **SF-LB's doors are behind the sofa back (760 high, against the counter front): they only open with the sofa pulled away. The drawers above clear it (box from 773).**
- SF-TC's lowest 700 is a fixed slab because the sofa's east arm (660) stands in front of it.
- SF-DN: where bread, supplements and medicines go (“pecivo / doplnky stravy / leky”, no bay named); the coffee machine's water and drain (no model named).
- Legs or a plinth under the oak runs (they stand on the floor, as before).
- SF-DH as AVENTOS: HF at the 81° stop would need 0 above (Blum), but the swept fronts rise about 18 under the 2470 soffit; not tried.

### Left untouched

- **FN-BK**, the bookshelf: open shelves by design (“Open bookshelf”), no fronts to add.
- **SF-DN70**: 70 mm wide, too narrow for a front; stays one oak body.
- The sofa, table, chairs and rug are not cabinets.

## Batch 2026-11-20

Petr, 2026-11-20, five items. Each is quoted with what was done. The renders are in `/workspace/renders/batch1120/` on the box (scripts `make_iso.py`, `dh_section.py` there).

### 1. West run, alley, island

> make sure kitchen dimensions from west are as follows: 600mm counter, 1100mm alley space, island. Counter overhangs eat into the 1100 alley, so really theres like 1050 space left. 900mm wide fridge still centered in that alley.

Read as: the west run is 600 from the wall to its front faces (x 18.80–19.40, unchanged), then 1100 clear from those fronts to the island's west fronts, and the 20 mm Silestone overhang on both sides leaves 1060 between the worktop edges (Petr's “like 1050”). The island keeps its size, its Gridfinity bays and their drawers; it only moves.

| What | Before | Now |
| --- | --- | --- |
| Island west face (fronts) | x 20.568 | **x 20.500** (68 west) |
| Island central back | x 21.154 | x 21.086 |
| Island east face | x 21.740 | **x 21.672** |
| Island worktop | x 20.548–21.760 | x 20.480–21.692 |
| Alley, fronts to fronts | 1168 | **1100** |
| Alley, worktop edge to worktop edge | 1128 | **1060** |
| Island sink SN-RS1840 Origin x | 20.641 | 20.573 (the hob, tap and disposer follow their bays) |
| Fridge EA-WQ9I and SF-TF over it | x 19.550–20.458, centre 20.004 | **x 19.496–20.404, centre 19.950**, the alley axis ((19.40 + 20.50) / 2) |
| SF-T1 (wall to fridge) | 750 | **696**: the 600 door stays, the wall-side filler 150 → 96 |
| SF-T2, SF-T3 Origin x | 20.458, 21.058 | 20.404, 21.004 (54 west with the fridge) |
| SF-T4 | x 21.658, 500 wide, 8 mm into pier W-052 | **x 21.604, 546 wide**, up to the pier face x 22.150: no nick. `guess:` the note's „zbyva sirka cca 50 (pokud je lednice na stredu)“ (about 50 left if the fridge is centred) |

Knock-on effects:
- **Island to the Gatta table** (x 23.087, not moved): 1347 → **1415** to the bay boxes, 1327 → **1395** at worktop level. The table is now 41 mm east of the centre of the island-to-sofa gap (it was 7); the sofa side stays 1333. `open:` re-centre the table (23.596) or leave it.
- **Island to the sofa** (x 25.52): 3780 → 3848.
- **Island east row to the west chairs' backs** (x 22.547): 807 → **875** (787 → 855 from the worktop edge). A full-height east drawer pulled out (501) leaves 374 to the chair backs.
- The tall run's fronts (y 15.00) and the island's north end (y 13.80) are as before: the island moved only in x.
- Not moved: the electrical plan's island sockets SOCK-1.02-I1 (x 21.023) and I2 (x 20.896) are still inside the island (x 20.500–21.672); the hood shelf light C183-S (x 20.647, over the hob) and the floor cable path at x 20.328 / 21.299 were not shifted with the hob (68 west, now centred near x 20.79). `open:` move them in the electrical plan.

### 2. SF-DH, the dining wall cabinet: AVENTOS HF and the soffit

> dining area top cabinets split in half, same flip out opening as kitchen top cabinets, same 88deg setting. If it hits the soffit, still model it (so I have screenshots for the architect to resolve this issue.

- SF-DH (x 22.45–25.15, 2700) is **two 1350 sections** with an 18 mm divider on the centre line (x 23.80), `Pset_Fronts.Sections: "2"`, each `lift * fitting=HF angle=88 shelves=2`, the same machinery as SF-AH850 / SF-BH800 / SF-CH850: two fronts 1347 × 443.5 each, 15.0 kg per section, LF 13353 (inside HF's 2700–19300), KH 890, two shelves. Was three 900 sections of door pairs (2026-11-19). Neither the soffit nor the cabinet moved.
- New `Pset_Fronts.AcceptOpenClash` (Petr's quote above): `ceiling_line.check_open_envelopes` stops the export when an open lift front meets the soffit, a bass trap or the slope; with this key it writes an `open:` note and an `OpenClash` property on the lift fronts instead.

**The clash, in numbers** (soffit underside 2470 from the north wall to its face at y 15.150, the 450 band; cabinet top 2450, front face y 15.250, so the soffit runs 100 past the closed front):

| | z | against the 2470 soffit |
| --- | ---: | --- |
| Front top edge, shut | 2448.5 | 21.5 under |
| Highest point the drawn fronts pass (the upper front's top outer edge at 88°, at y 15.268, 82 behind the soffit face) | **2466.5** | **3.5 under: the drawn sweep clears it** |
| Blum's space above the cabinet at the 88° stop (Y = 28, catalogue 2024/25 p. 22–24) | **2478** | **8 mm into the soffit** |

Superseded by section 8 (SF-DH is 844 under an oak lining, and nothing clashes). What follows is the 890 state. The modelled four-bar (pivot on the front's inner face, a guess) misses the soffit by 3.5 mm, but Blum's planning figure, which the export checks, needs 28 over the 2450 top and the soffit leaves 20: **8 mm short, along the full 2700 width of both sections, in the strip from the cabinet front (y 15.25) back towards the wall where the top hinge rises.** The 81° stop (Blum Y = 0) would clear it; a 2442 cabinet top (8 lower) or a 2478 soffit would too. `open:` for the architect.

Renders: `dh-soffit-section.png` and `dh-soffit-section-zoom.png` (side section, shut / sweep / open, the soffit edge, the 2478 Blum line), `dh-soffit-iso-closed.png` / `dh-soffit-iso-open.png` and `dh-soffit-side-closed.png` / `dh-soffit-side-open.png`. Since the soffit change below, the soffit is a solid in the ground-floor model (`models/soffit.py`); `ceiling_line.obstacles` reads the same extents.

### 3. Dining and living bases: cream

> don't touch dining area bottom cabinets geometry yet, Im undecided. But make them cream color like kitchen, all the way through dining area into living room (behind couch). Im attaching screenshot of all material details in this area, so please adjust the concrete column cladding and everything too (dining table stays wooden though).

- **KR-DN** (SF-F052, SF-DN, SF-F053, SF-DN70) and **KR-LB** (SF-LB): every part, carcasses and fronts, is now the kitchen cream (`kitchen-front-cream`, RAL 9001 matt), was natural oak. `BodyMaterial` and the bays' `Pset_Finish` say so. No geometry changed.
- Kept: KR-DN's Silestone Blanco Maple worktop and the stone backsplash in the niche (`CV-BS-DN`, `CV-BS-R052`, `CV-BS-R053W`, `CV-BS-R053E`, `CV-BS-DN70`), KR-LB's oak-veneer top, the Gatta table and chairs (oak, “dining table stays wooden”), SF-DH and SF-TC (oak), the bookshelf FN-BK (oak).
- **The concrete columns (piers W-052, W-053): vertical oak slats** on their front faces, from the worktop (930) to the ceiling line (2450): `CV-SLAT-W052` (x 22.150–22.462) and `CV-SLAT-W053` (x 25.138–25.462), `ObjectType: SlatCladding`, 20 thick (y 15.330–15.350), slats 40 wide 20 apart (the bookshelf lamella, `guess:`), five on each, centred, built by `living_geometry` from `Pset_Slats`. They replace the 12 mm stone pieces `CV-BS-P052` / `CV-BS-P053` (930–1560).
- The screenshot did not reach the bot that made this change; it was described to it as: cream/white bases continuing into the living room, oak SF-DH, vertical oak slats on the columns, an oak top band above, oak bookshelf, light stone worktop and backsplash, cream tall units, the table wooden despite showing white. The oak top band (Petr, 2026-11-20, after a second screenshot): “I actually got that completely wrong, and this new screenshot shows how the cabinet top extends past the cabinets on the underside of the soffit. It also means that you do need to worry about the room for the flip up cabinet door. Please adjust it and I'll send it to the architect for approval (his model was too simplified).” So the oak does show: SF-DH's oak top runs forward under the soffit to its face (section 8). The soffit's vertical face stays plastered. This replaces his earlier “thats a confusion in the screenshot … the soffit, which stays plastered”, which said the oak was hidden. `open:` slats on the piers' sides (W-053's east face keeps its stone return) and below the worktop (the cream fillers cover that).

### 4. Island east side

> east side of kitchen island are 4 large full height drawers

- SF-E600a, SF-E600b, SF-E600c, SF-E700: one drawer each, `Layout: "drawer *"`, one 807 front (full carcass height), box 700 high, on full-extension slides (501), with Gridfinity baseplates. Widths and depths unchanged (586 / 607 / 607 / 700, 586 deep).
- Gridfinity: SF-E600b / SF-E600c 12 × 11, SF-E700 14 × 11, exact (inside n × 42 + 1). **SF-E600a 11 × 11 with 12 mm slack across** (inside 475): two end bays (42n + 112) and two middle bays (42k + 103) add up to 430 + 42N, and 2500 − 430 = 2070 is not a multiple of 42 (12 over), so the row cannot be whole cells in all four bays at 2500. Kept the 2500 island and put the slack in the north end bay (it was the remainder bay already). `open:` the model's Gridfinity note says so.
- Was: a door over a shelf (SF-E600a, vacuum sealer) and three drawers 100 / 100 / rest (2026-11-19). The vacuum sealer has no place now (`open:`).

### 5. Behind the sofa

> remove living room drawers behind couch. Those cabinets are dead space (at least for now).

SF-LB keeps its seven 597 sections and dividers; each is one fixed blank front at full height (`Layout: "front *"`): no drawers, doors or shelves. Was a 140 drawer over a door with a shelf in each (2026-11-19).

### Tests and checks

`tests/test_kitchen_cabinet.py`, `tests/test_furnishings.py` (plus a pier-slat test), `tests/test_materials_catalogue.py` and `src/blueprints/viewer/doors.test.mjs` (SF-DH's two HF linkages) updated for the new positions, the HF sections, the accepted clash, the east drawers, the blank SF-LB fronts and the cream bases.

### 7. The soffit, modelled

> lets get the soffit modeled so I see how it works out with the top cabinets.

The soffit over the north cabinets is now geometry in the ground-floor model and its exports (`models/soffit.py`, `ground_floor.soffit_solids`), with its own viewer group **Soffit / Podhled** (`soffit`: `soffit_naturheld_140`, `soffit_gkb`), so it can be toggled. Both labels use the existing `paint-interior-white` plaster material. The NaturHeld face has a StoSilent acoustic plaster finish; it gets its own material once one is picked (`pending` in the catalogue). It is derived and not typed in: every number comes from `obyvak_geom.ObyvakParams` / `ObyvakLayout`, the obývák model's soffit (docs/design/obyvak.md, the box frame on CD profiles), mapped with x = 29.900 − Y, y = 10.250 + X. The room checks against it: 11 100 × 5 350 in both models, and it stops if they differ.

| Part | Ground floor (m / mm) | Source |
|---|---|---|
| Along the north wall | x 18.990 – 29.450 (10 460) | `y_furn0` / `y_furn1`: between the living-gable bass trap (450, `predstena_living`) and the kitchen-gable one (190, `predstena_kitchen`) |
| Room face, `soffit_naturheld_140` | y 15.150 – 15.194 (44 thick), z 2470 – 3287.5 | `furniture_width` 450 from the north plaster face; `t_soffit_face` = NaturHeld 40 + StoSilent Top Basic 2 + Top Finish 2; up to the GKF lid on the wall plate (`z_soffit_lid`) |
| Underside, `soffit_gkb` | y 15.194 – 15.600, z 2470 – 2482.5 | `furniture_height` 2450 + `furniture_gap` 20 (`z_nabeh_bot`); `soffit_bottom_t` 12.5 plain GKB |
| Round the piers | the underside stops at W-052 (x 22.15–22.45) and W-053 (x 25.15–25.45) from y 15.35, in 5 pieces | ground-floor piers (`ROOM_PIERS_M`) |

Not drawn: the mineral wool, CD frame, ducts and lid behind the face (they are in the obývák model), and the bass traps themselves. `ceiling_line.obstacles` now reads the soffit box from `soffit.extents`. The numbers are the same as the old hand-typed 450 band, so no margin changed.

**Where it meets top cabinets** (nothing else moved):

| Cabinet | Relation to the soffit | HF at 88°: drawn sweep | HF at 88°: Blum Y = 28 (2478) |
|---|---|---|---|
| SF-DH-S1 / S2 (dining, x 22.45–23.80 / 23.80–25.15, front y 15.250) | 890 and top 2450 when this section was written: peak 2466.5, 3.5 mm clear; Blum 8 mm into the soffit. **Since section 8**: 844 high, top 2404, under the oak lining (2432) | 844: peak 2420.5, **11.5 mm clear** of the lining, 38 under the soffit | 844: 2432, **0 mm, it fits** under the lining. `AcceptOpenClash` removed |
| SF-AH850 / BH800 / CH850 (kitchen wall cabinets, west wall, y 13.0–13.85) | not under it: their north end is 1300 / 2150 / 2950 short of the face (y 15.150). They sit under the kitchen-gable bass trap and its 2450 line | peak 2466.5, 1300+ from the soffit | 1300 / 2150 / 2950 from the soffit; 142 from the kitchen bass trap |
| KR-TALL-W / -F / KR-TALL (tall units, y 15.0–15.6, top 2450, hinged doors) | 20 under the underside; the 600 carcasses stand 150 proud of the face (by design, 2026-11-06). x 18.80–18.99 is under the kitchen bass trap | no lift fronts | — |
| SF-TC, FN-BK (living, top 2450) | 20 under it up to x 29.45, then under the living bass trap | no lift fronts | — |

Guesses:

- `guess:` the face runs to the lid height of the obývák model (3287.5), above the ground-floor walls (3000, `DEFAULT_WALL_HEIGHT_M`). The slope and lid are not drawn here. Petr: "lets get the soffit modeled so I see how it works out with the top cabinets."
- `guess:` the GKB underside stops at the piers' faces (y 15.35, their ground-floor depth). The obývák model puts 300 × 300 columns there and runs the board through them. Petr: "lets get the soffit modeled so I see how it works out with the top cabinets."
- `guess:` the soffit ends square at both bass-trap linings (no return, no shadow gap). Petr: "lets get the soffit modeled so I see how it works out with the top cabinets."

Renders (box only, not in the repo): `/workspace/renders/soffit/north-wall-iso-{closed,open}.png`, `kitchen-wall-cabinets-iso-{closed,open}.png`, `sf-dh-section.png`, `sf-dh-section-zoom.png`.

### 8. SF-DH under the oak lining

> I actually got that completely wrong, and this new screenshot shows how the cabinet top extends past the cabinets on the underside of the soffit. It also means that you do need to worry about the room for the flip up cabinet door. Please adjust it and I'll send it to the architect for approval (his model was too simplified).

The screenshot did not reach the bot that made this change; it was described to it. In SketchUp, SF-DH's oak carcass forms a frame: its top panel runs forward past the fronts under the soffit, out to the soffit face, so the soffit's underside reads as oak; the soffit's vertical face stays plastered; an oak side frames the left end; slats on the right; the bookshelf beyond.

**What was built**

- **`SF-DH-LINING`** (furniture, `ObjectType: CabinetLining`, natural oak, `Pset_CabinetLining.PartOf: SF-DH`): x 22.45–25.15 (between the piers, SF-DH's run), y 15.15–15.60 (from the soffit face to the wall), z 2432–2450. It is part of the cabinet, not the drywall. 100 of it is ahead of the fronts (front face y 15.25).
- **End returns `SF-DH-RET-W` / `SF-DH-RET-E`** (same type): SF-DH's 18 oak sides carried up from the cabinet top (2404) to the lining (2432). x 22.450–22.468 and 25.132–25.150, y 15.27–15.60. They close the 28 band at both ends, behind the fronts (the open fronts sweep to y 15.268, so 2 clear). West of W-052 and east of W-053 the soffit underside stays plaster.
- **SF-DH is shorter from the top. The bottom stays at 1560**, Petr's sourced line (2026-11-13), which the kitchen wall cabinets and the backsplash also use. Nothing moved up. The 2450 ceiling line holds: the lining's top is on it.
- The open fronts are now checked against the lining too (`ceiling_line.lining_obstacles`: every `CabinetLining` is an obstacle), and nothing clashes, so **`AcceptOpenClash` is gone** from SF-DH. The mechanism stays in `ceiling_line` for later use. Back at 890, the export stops with "SF-DH-S1-LIFT open meets the SF-DH-LINING" (tested).

**Dimension changes**

| | old | new |
|---|---|---|
| SF-DH height (`Height`) | 890 | **844** |
| SF-DH top | 2450 | **2404** (2450 − 18 lining − 28 Blum) |
| SF-DH bottom | 1560 | 1560 |
| Fronts per section (two, bi-fold) | 442 + 442 | **419 + 419** (1347 wide) |
| Front weight per section | 15.0 kg | 14.2 kg |
| Blum power factor LF | 13 353 | 12 004 (HF 2700–19 300) |
| Highest point of the drawn sweep | 2466.5 | 2420.5 |
| Blum's space at 88° (top + 28) | 2478 | 2432 |
| Lowest point of the open fronts | 1991 | 1969 |
| Oak lining | — | 2432–2450, y 15.15–15.60, x 22.45–25.15 |
| Oak end returns | — | 2404–2432, 18 × 330 |
| Soffit, piers, slats, SF-DN, backsplash | — | unchanged |

**Options** (both under the same 18 lining at 2432–2450; computed from the model with only SF-DH's height and stop changed):

| | 88°, 844 (**built**) | 81°, 872 | 81°, 855.5 | 81°, 890 (current height) |
|---|---|---|---|---|
| Cabinet height / top | 844 / 2404 | 872 / 2432 | 855.5 / 2415.5 | 890 / 2450 |
| Height lost | 46 | 18 | 34.5 | 0 |
| Fronts (×2 per section) | 419 | 433 | 425 | 442 |
| Blum's space above (Y) / clearance to the lining | 28 / **0, fits** | 0 / **0, fits** | 0 / 16.5 | 0 / **−18, top above the lining** |
| Drawn sweep peak / clearance | 2420.5 / **11.5** | 2448.3 / **−16.3** | 2431.8 / 0.2 | 2466.3 / −34.3 |
| Lower edge when open (z), ahead of the fronts | 1969, 363 | 1929, 378 | 1922, 371 | 1937, 386 |
| Open fronts project (from the front face) | 420 | 429 | 421 | 438 |

- **88° at 844** is the smallest loss at 88° with Blum's 28 and the drawn sweep both clear. Built.
- **81° at 872** loses only 18 and fits on Blum's numbers (Y = 0 at 81°). But the drawn four-bar still rises about 16 above the cabinet top before the stop, so the export's check (sweep or Blum, whichever is larger) would stop it. The four-bar's pivot is a `guess:`; Blum's Y says the real fitting does not rise at 81°. If the architect or Blum confirms that, 872 at 81° is the better option. Otherwise 855.5 at 81° clears both and loses 34.5. 81° also leaves a slightly lower edge, which is easier to reach.
- **81° keeping 890 does not work.** The top would be 2450, 18 above the lining's underside. To keep 890 the lining would have to sit in the 20 gap (2450–2468), above the 2450 ceiling line, and even then the drawn sweep (2466) would reach it.

**Reach.** The open fronts' lowest point at 88° is 1969, 363 ahead of the fronts, so 263 ahead of the SF-DN counter front (y 15.15). `guess:` a 174 cm person's standing grip reach is about 2080 (about 1.2 × stature, from anthropometric tables, not measured), so the edge is about 110 below the reach, over the counter.

Guesses (Petr: "I actually got that completely wrong, and this new screenshot shows how the cabinet top extends past the cabinets on the underside of the soffit. It also means that you do need to worry about the room for the flip up cabinet door."):

- `guess:` the lining is 18 thick, the carcass board (`BoardThickness`).
- `guess:` the lining's top is on the 2450 ceiling line, which leaves the 20 gap to the GKB underside (2470) as a shadow gap or for a scribe. If the architect lets the oak touch the GKB (2452–2470), SF-DH can be 20 taller (864 at 88°).
- `guess:` the end returns: the sides carried up behind the fronts, 2 back from the fronts' inner face. The screenshot's "oak side panel at the left end" is read as SF-DH's own side, framed by the return. Nothing was added in front of the piers.
- `guess:` the lining stops at the piers' faces (x 22.45 and 25.15), so it is SF-DH's width, not carried in front of the piers.
- `guess:` the bottom stays at 1560 and the height is lost at the top. The alternative of raising the bottom (keeping the top) cannot give the 28 above the fronts.
- `guess:` Blum's 28 is used with no extra tolerance (0 margin). The drawn sweep has 11.5.

Renders (box only): `/workspace/renders/soffit2/sf-dh-section.png` and `sf-dh-section-detail.png` (section with dimensions), `sf-dh-iso-closed.png` / `sf-dh-iso-open.png` (seen from below), `north-wall-elevation.png` and `north-wall-elevation-dining.png` (elevations with dimensions). Labels are in Czech and English.

## Batch 2026-11-20 b

Petr, 2026-11-20 (verbatim):

> - add kickboard (cover) to the existing plinth / toe-kick areas
> - in the dining area there's no recessed toe-kick, but there still is a bottom fixed kickboard with the same 100mm height (flush with the cabinet fronts).
> - the little shallow cupboards where the stuctural columns stay with hinged doors (except the western on, near kitchen, should switch hinge direction).
> - also note from previous screenshot that above these shallow cabinets the countertop is actually an oak piece (the silestone stays only in the dining area)
> - the dining area base cabinets are split into 4 sections, each has a full height drawer (starting above that 100mm flush plinth) and uses that merivobox inner drawer technology.
> - the westmost dining area cabinet has a Dreame X60 Master station at its base, which makes its drawer a little less tall and leaves a little dead space on the east side of that cabinet
> - also change the accoustic oak panelling so it has an oak veneer background (as is apparent from screenshots), not plaster showing through.

Petr's clarification on the worktop, relayed (not verbatim): the dining area keeps its Silestone worktop exactly as modelled. Only the worktop above the two shallow column cupboards changes to oak. At the western column it is a small separate oak piece. At the eastern column it is part of the living-room oak counter (that counter extends over the cupboard).

### 1. Kickboards on the toe-kicks (island, west run)

- `KR-ISL` and `KR-WEST` keep their 100 legs and get a kickboard: `Pset_KitchenRun.Kickboard: true` with `PlinthKind: Legs`. The board is 18 thick, 0–100 high, **50 behind the fronts' face** (c 50–68), like IKEA METOD's plinth (`guess:` the 50; METOD clips the plinth to the legs). Parts `KR-ISL-PLINTH-W`, `KR-ISL-PLINTH-E`, `KR-WEST-PLINTH-E`.
- The west run's kickboard runs on across the dishwasher slot (`SF-A600-PLINTH-E`, a 250–850 along the run), like a plinth across an integrated dishwasher (`guess:`).
- **The front legs moved 30 back** so the board clears them: `LegInset` 50 → 80 on both runs (leg centre 98 behind the face, leg c 78–118, 10 clear of the board's back; `guess:`). Back legs unchanged.
- The ends stay closed by the Silestone cladding from the floor.
- `open:` the robot vacuum no longer drives under the island or the west run (the 100 plinth was chosen on 2026-11-12 so it could). Does Petr want the kickboard anyway, or a removable/robot-height gap?
- `open:` the dishwasher is a plain 598 × 550 × 865 box from the wall, so its front is at c 50 and it overlaps the kickboard by 18. The real appliance has a recessed foot and an adjustable plinth; not modelled.

### 2. The dining run's flush kickboard

- `KR-DN` now has `PlinthHeight: 0.10`, `PlinthKind: Flush` (new kind): a fixed 18 board **in the fronts' plane** (c 0–18), 0–100, under every bay with fronts (SF-F052, SF-DN, SF-F053). Parts `KR-DN-PLINTH-S-<bay>` (plinth ids now carry the block's tag, so several blocks in one run don't clash).
- **Changed:** the carcasses with fronts stand on it: carcass bottom 0 → 100, fronts were 1.5–908.5, now **101.5–908.5**. SF-DN70 (70 strip, a body) still runs from the floor.
- `guess:` the flush kickboard also runs under the two column cupboards (Petr named the dining area).

### 3. The column cupboards: hinges

- SF-F052 (west, near the kitchen) **hinge R → L** (`SF-F052-DOOR1`). SF-F053 stays R. Both keep their two shelves.
- `open:` hinge L puts the door's opening edge on the east and the leaf swings toward SF-T4's east side, which stands 150 proud of SF-F052's front: the 296 door stops at about 90° against it (the reason it was R).

### 4. Oak over the column cupboards

- **SF-F052:** its own oak-veneer piece, `SF-F052-WORKTOP`, 20 thick, 20 front overhang, x 22.150–22.450, y 15.130–15.350, top 930 (`Pset_KitchenBay.WorktopMaterial`, new per-bay override).
- **SF-F053:** under KR-LB's oak counter: `KR-LB-WORKTOP` now also covers x 25.150–25.450 (200 deep + 20) and, `guess:`, the 70 strip SF-DN70 (x 25.450–25.520, 450 + 20) so the oak runs on unbroken (`Pset_KitchenBay.WorktopRun: KR-LB`, new; the part's `Covers` lists both).
- **SF-DN:** Silestone Blanco Maple, unchanged (`KR-DN-WORKTOP`, x 22.450–25.150). The Silestone–oak joints are at x 22.450 and 25.150, over the cupboard sides.

### 5. Dining base: four sections, full-height drawers, MERIVOBOX inner drawers

- `SF-DN` `Sections: "4"`: **675 / 675 / 675 / 675** (2700 / 4), was 600 / 600 / 300 / 600 / 600. Fronts 672 wide (3 gap).
- Each section: one full-height front above the kickboard, **101.5–908.5 (807)**, on an outer drawer with a low **K (128)** box (`box=K`). Behind the front, **two Blum MERIVOBOX inner drawers**: **M (90) at the top over K (128)** (`inner=M,K`; Petr's M = 90, K = 128). The top one is 30 under the rail (`InnerTopGap`, `guess:`), the lower one halfway between it and the outer box. Count and heights are `guess:`.
- **Blum ZI7.0M07 driver set ("unašeč")** on the top inner drawer: the driver clips onto the middle of the inner drawer's front piece; its housing is drilled into the inside of the front; it opens with the front, and pressing the housing releases it (it can then be closed alone; turning it 180° disables it). For 90 and 128 sides ([lignoshop.de](https://www.lignoshop.de/zi70m07-legrabox-mitnehmer-set-innenschubkasten.html), [Häfele/JAF](https://hafele.jafholz.cz/sada-unasece-blum-legrabox-a-merivobox-pro-vnitrni-zasuvky-a-vysuvy-55074790)). Modelled as a 25 × 13 housing in the front's back and a small driver block (`guess:` sizes), fused into the drawer part with the top inner drawer, so they move with the front. Props on the drawer: `InnerDrawers`, `InnerSystem: Blum MERIVOBOX`, `Latch: Blum ZI7.0M07`, `OuterBoxSide`.
- The lower inner drawer is its own part (`SF-DN-S<k>-D1-I2`, role `InnerDrawer`) with its own slide in the viewer. The viewer does not tie it to the front.
- `guess:` the inner drawers take the outer box's plan; real MERIVOBOX inner drawers are a little narrower.
- The pull-out with three baskets (old section 3) is gone. `open:` “pecivo / doplnky stravy / leky” still names no section.

### 6. Section 1: the Dreame X60 Master station

- **Dreame X60 Master base station: 416 × 443 × 249 (W × D × H)** ([Dreame HK](https://www.dreametech.com.hk/products/dreame-x60-master), [Dreame VN](https://dreametech.com.vn/products/robot-hut-bui-lau-san-chuyen-dung-dreame-x60-master)); 9.95 kg; the water refill and drain hookup is built in. Robot 350 × 350 × 79.5 (102.8 with the VersaLift sensor up). Element `EA-DREAME-X60M` (`Pset_BuiltIn Kind: Dock`, `Bay: SF-DN-S1`, `Zone: 2`), placed by the run on the floor, centred in the opening, front on the fronts' plane (c 0–443).
- `SF-DN-S1` `Layout1: "drawer * box=K inner=M | dock 0.16 width=0.44 side=L"`. New band kind `dock`: an opening from the floor to a fixed board at **260–278**. That is the 249 station + 11 (`DockClearance` 10 checked, `guess:`). The opening is **440 wide on the west side** (x 22.468–22.908: 416 + 12 each side, `guess:`). The kickboard, the carcass bottom and the back are cut away over it (back open for the hoses, `guess:`).
- **The drawer is shorter from below:** front **261.5–908.5 (647)** on a K outer box standing on the board, one M inner drawer with the ZI7.0M07 (`guess:`, the K inner one no longer fits).
- **Dead space east of the station:** a side board at the opening's edge (x 22.908–22.926) and a fixed front panel `SF-DN-S1-DEAD`, 101.5–258.5, x 22.910–23.124.
- `open:` docking ramp/approach: the station's ramp sits on the floor in the opening; does it need a reveal, frame or extra width for the robot to dock?
- `open:` service access to the station (dust bag, cleaning-solution box, mop tray) with only 11 over it: does it slide out, or does the board need to be removable?
- `open:` water and drain hookup route (here through the open back) and a socket.
- `open:` the robot (79.5 / 102.8) parks in the station; the opening is 260 high, so it clears either way.

### 7. Slat panelling: oak-veneer backing

- `CV-SLAT-W052`, `CV-SLAT-W053`: a **6 mm oak-veneer backing board** (`Pset_Slats.BackingThickness: 0.006`, `BackingMaterial: oak veneer`, `guess:` 6) the full width and height behind the slats, so oak, not plaster, shows between them. Built in `living_geometry._slats`.
- **Changed:** depth 20 → 26 and origin y 15.330 → 15.324: the slats stay 20 thick and the column face (y 15.350) stays, so **the slats' faces moved 6 mm south** (y 15.324). Width, height (930–2450) and the five 40 slats 20 apart unchanged. No other `SlatCladding` exists.

### Tests

`tests/test_kitchen_cabinet.py` (four sections, inner drawers, the dock, the flush and the leg kickboards, the hinges, the oak pieces) and `tests/test_furnishings.py` (the slat backing).


## Batch 2026-11-20 c

Petr's review of PR #136 (2026-11-20, 14:14 and 14:16 CET). This section
supersedes the earlier notes above where they differ (SF-DN70, the stone
returns at W-053, the Dreame DEAD panels, the east-row widths).

Resolved, no change:

> “Robot doesn't need to go under island, just clean the toe-kick area.”

The island and west-run kickboards (batch b, item 1) stay.

> “90deg opening of the shallow column cabinet is fine.”

SF-F052 keeps its left hinge and 90°.

Everything below is parametric; the 2450 ceiling line is unchanged
(`models/ceiling_line.py` still passes). Drawings and renders come from the
model (`kitchen_cabinet.runs`, `living_geometry`).

### Linked sizes: `Pset_Links` (new)

An element can leave out a placement or size and say where it comes from,
so a number lives in one place (`models/furnishing_links.py`, resolved by
`ground_floor.load_furnishings` and the inspector index). Targets `X`, `Y`,
`Width`, `Depth`, `Height`, `Elevation`, `East` (the +x face), `Top`, and
`<Pset>.<Property>`; expressions are `+ - * / ( )` over `<id>.<attr>`. A
cycle or a missing id stops the load. `scripts/gridfinity_fit.py` resolves
them too.

### 1. Dreame X60 station centred, one notched front

> “Changed my mind, lets center the dreame x60 station on its cabinet. The rectangles left on the left and right in front of the dead space can actually be part of the drawer front face, no extra cuts needed.”

- `Layout1` of SF-DN: `dock 0.16 width=0.44 side=C front=notch`. `side=C`
  centres the 440 opening on section 1; `front=notch` runs the drawer front
  above down either side of it to the kickboard: one front with a
  440 × 160 notch at the bottom middle (props `FrontNotch 0.44`,
  `FrontNotchHeight 0.16`, `FrontBottom 0.1015`).
- SF-DN-S1-D1 front 672 × 647 (z 261.5–908.5) → the same plus two legs,
  each 116 × 160 (z 101.5–261.5), a0 301.5–417.5 and 857.5–973.5 in the run.
- SF-DN-S1-DEAD (the fixed panel) → removed. Two 18 niche sides,
  SF-DN-S1-DOCKSIDE1/2 (a0 399.5–417.5 and 857.5–875.5, z 118–260).
- Station: run a0 330–746 → 430–846 (world x 22.48–22.90 → 22.58–23.00),
  centred on the section (centre 637.5). The kickboard cut follows (now a0 418–858).
- Dead space behind the legs: about 82 (west) and 91 (east) clear, open
  to nothing, behind the notched front.
- Inner drawers: section 1's front now starts at 261.5, so it takes the same
  pair as the others: MERIVOBOX M (90, z 772–862, coupled by ZI7.0M07) and
  K (128, z 526.5–654.5) over its own box K (z 281–409).

### 2. Island east row: four equal bays, MERIVOBOX

> “East island cabinets are 694,604,604,583 wide, they should be the same width. Three of these should fit gridfinity, the fourth can be slightly differnt. Also, give them Merivobox drawers.”

- Bay widths (S→N): SF-E700 700 → 625, SF-E600c 607 → 625, SF-E600b 607 →
  625, SF-E600a 586 → 625. Linked: `Width = (SF-I500a.Y − (SF-I300.Y −
  SF-I300.Width)) / 4`, each `Y` the previous bay's end. Total 2500
  unchanged (y 11.300–13.800). Fronts 694/604/604/583 → 622 × 4.
- y origins: SF-E700 11.300 (same), SF-E600c 12.000 → 11.925, SF-E600b
  12.607 → 12.550, SF-E600a 13.214 → 13.175.
- MERIVOBOX (Blum planning sheet): inside width LW − 51, inside length
  NL − 26 − 16 (chipboard back), NL from 270 to 600 in 50s with NL + 3 inside
  depth. Island NL 550 → inside 508 deep → 12 cells, +3.
- End bays (clear 598, a 18 end side) → inside 547 = 13 × 42 + 1, exact.
  Middle bays (clear 607) → 556 = 13 cells, +9. So two are exact and two are
  +9, but four equal widths was the stronger ask; whole cells in three bays
  need unequal widths (alternatives below).
- Grid 11×11 / 12×11 / 12×11 / 14×11 → 13×12 in all four.
- Box: the full-height 807 front now carries a MERIVOBOX F box (256 high,
  z 121–377); before it was a 700-high MAXIMERA-like box. `open:` a front
  this tall on a 256 box needs a BOXCAP or a gallery rail kit from Blum to
  hold the contents; not modelled.
- Slide 0.501 → 0.546.

Alternatives (not done):

| Variant | Widths S→N | Gridfinity | Spread |
| --- | --- | --- | --- |
| **chosen** | 625 / 625 / 625 / 625 | ends exact, middles +9 | 0 |
| middles exact | 634 / 616 / 616 / 634 | middles exact, ends +9 | 18 |
| three exact | 625 / 616 / 616 / 643 | three exact, north end +18 | 27 |

### 3. Gridfinity in the dining drawers

> “Give gridfinity to the dining area cabinets too.”

- SF-DN `Pset_Drawers`: `Gridfinity: true`, `System: Blum MERIVOBOX`. The
  sections take the bay's `Pset_Drawers` now (a fix in `section_element`:
  before, only `Pset_Fronts` reached them, so the dining drawers were still
  sized as MAXIMERA).
- Side depth 424 → NL 400 (needs 403) → inside 358 deep.
- Widths unchanged (not asked).

| Drawer | Inside | Grid | Slack across / deep |
| --- | --- | --- | --- |
| SF-DN-S1-D1, -I1, -I2 | 597 × 358 | 14 × 8 | +8 / +21 |
| SF-DN-S2-D1, -I1, -I2 | 606 × 358 | 14 × 8 | +17 / +21 |
| SF-DN-S3-D1, -I1, -I2 | 606 × 358 | 14 × 8 | +17 / +21 |
| SF-DN-S4-D1, -I1, -I2 | 597 × 358 | 14 × 8 | +8 / +21 |
| SF-E600a / SF-E700 -D1 | 547 × 508 | 13 × 12 | +0 / +3 |
| SF-E600b / SF-E600c -D1 | 556 × 508 | 13 × 12 | +9 / +3 |

- Slide 0.366 → 0.396.
- `open:` the +21 deep is the NL step (450 would need 453, the carcass has
  424). A 9th row would need a 445 inside depth.

### 4. The oak top board: one piece to the living room

> “That oak top board above the dining area should be flush with soffit and extend all the way to the living room in one piece.”

- SF-DH-LINING: Width 2.70 → 7.15 (x 22.45–25.15 → 22.45–29.60), linked
  `East = SF-TC.X`. Same depth (450, y 15.15–15.60), same height (z
  2432–2450), still one board. Notched round both pier slat panels
  (`Pset_CabinetLining.Notch1*` / `Notch2*`, linked to CV-SLAT-W052 /
  W053): over x 22.150–22.462 and 25.138–25.450 it stops at y 15.324.
- Its front at y 15.150 is the soffit's room face, so it is flush in plan.
- **Reading: “flush with soffit” is taken as flush with the soffit's room
  face (in plan), which it already was. If Petr meant closing the 20 mm
  shadow gap up to the soffit underside (2450 → 2470), that crosses the 2450
  ceiling line and is not done.**
- **The soffit ends at x 29.450; the board runs 150 past it to meet SF-TC
  (29.600), under the plain ceiling there.**
- `open:` a 7150 mm single oak board is longer than usual stock (about
  2.8–4.1 m); a hidden joint may be needed.
- FN-BK now ends under it (item 8).

### 5. SF-TC: the armrest's width

> “That tall corner cabinet in living room should be the exact width of the couch armrest.”

- SF-TC `Pset_Links`: `Width = FN-ARME.Width`, `East = FN-ARME.East`,
  `Y = FN-ARME.North`. Width 200 → 300 (x 29.70–29.90 → 29.60–29.90); door
  197 → 297. East face and depth unchanged.
- Neighbours that moved (linked to SF-TC.X): SF-LB's east end 29.70 →
  29.60, FN-BK's east end 29.70 → 29.60, the oak board's east end (item 4).

### 6. Tapping the inner drawers

> “Let me close the Merivobox drawers by tapping, right now only the full height drawer is interactive.”

- Every inner drawer is its own part and motion record
  (`SF-DN-S{k}-D1-I1`, `-I2`; `parent` the front's drawer, `coupled` true
  for I1, the one with the ZI7.0M07 driver).
- Viewer (`doors.js` `toggleDrawerTree`): an inner drawer moves only while
  its front is open (a tap on it when the front is shut opens the front);
  the coupled one opens with the front; a tap on an open coupled one
  releases and shuts it alone; shutting the front shuts all of them and
  re-couples I1.
- The housing sits on the front drawer, the driver on I1; I1 no longer
  rides inside the front's mesh.

### 7. Bookshelf: the acoustic oak back

> “Also, living room bookshelf needs the same accoustic backpanel (yours is still seethrough with no oak veneer backing)”

- FN-BK `Pset_Bookshelf`: `BackingThickness 0.006`, `BackingMaterial: oak
  veneer`. A 6 mm oak-veneer back between the case sides, full height, at
  the wall; the lamella (40 / 20 gap / 12) sits in front of it as on
  CV-SLAT. Shelves stop in front of the lamella. Nothing is see-through.

### 8. The bookshelf and living bases at W-053

> “Also, that whole bookshelf area and base cabinets below it need to be tightened, the connection to the column is weird, these and extra thin sliver of panels and some gaps.”

Removed:

- SF-DN70, the 70 × 450 oak body east of the pier (x 25.45–25.52).
- CV-BS-R053E, the 12 mm stone return on W-053's east face (x 25.450–25.462).
- CV-BS-DN70, the 58 mm stone strip over SF-DN70 (x 25.462–25.52).

Changed (all linked now, so they stay closed):

| Part | Before | After |
| --- | --- | --- |
| SF-LB | x 25.52–29.70 (4180) | x 25.45–29.60 (4150), `X = SF-F053.East`, `East = SF-TC.X` |
| KR-LB-WORKTOP | over SF-F053 and SF-DN70, from x 25.15 | over SF-F053 (300 × 200) and SF-LB (4150 × 450), the joint at the pier face 25.45 |
| FN-BK | x 25.52–29.70, z 980–2450 (1470), a 50 gap over the counter | x 25.45–29.60, z 930–2432 (1502): on the counter, up to the oak board |
| CV-SLAT-W053 | 324 wide, x 25.138–25.462 (12 past the pier) | 312, x 25.138–25.450, `East = SF-F053.East` |
| SF-DH-LINING | ended at 25.15 | runs on over the bookshelf (item 4) |

- The junction now: pier W-053 (25.15–25.45) with its slat panel in front,
  SF-F053 and its oak top under it, then SF-LB, its counter, and FN-BK all
  start at 25.45 and end at SF-TC. No slivers left.
- Gaps left on purpose: the 20 mm shadow gap under the soffit (2450–2470,
  the ceiling line); FN-BK has no bottom board of its own, as before (it
  stands on the oak counter).

### Tests and renders

- `tests/test_furnishing_links.py` (new), plus updated
  `tests/test_kitchen_cabinet.py`, `tests/test_furnishings.py`,
  `tests/test_materials_catalogue.py`, and `doors.test.mjs`.

## Batch 2026-11-20 d

> “All points taken, you don't need to act on any of them. This is almost merge ready.”

Petr, 2026-11-20 (15:50 CET), on the batch c report. The `open:` items above
stay open, unchanged.

### 1. Island east: MERIVOBOX inner drawers

> “I can't see the merivobox drawer on kitchen island east, please double check that you've added them.”

- Found: batch c gave each east bay one MERIVOBOX F box (256, z 121–377)
  at the bottom of the 807 front, exported in the GLB with the front. There
  were no inner drawers: unlike the dining run, nothing showed behind
  the tall front except that low box.
- Now `Layout: "drawer * box=F inner=M,K"` on SF-E700, SF-E600c, SF-E600b,
  SF-E600a: per bay `{bay}-D1-I1` (MERIVOBOX M, 90, z 772–862, coupled by
  ZI7.0M07) and `{bay}-D1-I2` (K, 128, z 510.5–638.5) over the F box, each
  with a 13 × 12 Gridfinity baseplate. They are their own viewer records
  (tap to open/close, as in the dining run). The F box stays.

### 2. Return kickboard at the tall run's east end

> “Please add a bit of kickboard between the kitchen and dining areas in the south-north direction (the side of the tall kitchen cabinet has a hole with no kickboard)”

- SF-T4 (KR-TALL) stands 150 proud of the dining fronts (y 15.00 vs
  15.15), so its toe-kick was open to the east.
- New `Pset_KitchenRun.SideKickboards: "E"` on KR-TALL → part
  `KR-TALL-PLINTH-E`: 18 board, `PlinthSetback` 50 in from the east end
  face (x 22.082–22.100), from the front kickboard's back (y 15.068) to the
  carcass back (y 15.592), z 0–100. **Flush with the side since 2026-11-20 h** (x 22.132–22.150, see that batch).

### 3. One continuous dining kickboard

> “theres no reason there should be a split in the kickboard where each column meets the dining are, it can just be one continous kickboard”

- KR-DN-PLINTH-S-SF-F052, -SF-DN and -SF-F053 → one part `KR-DN-PLINTH-S`,
  flush, 18 × 100, x 22.150–25.450, member of all three bays. It is still
  split only at the Dreame opening: two pieces, x 22.150–22.5675 and
  23.0075–25.450.

## Batch 2026-11-20 f

### Silestone thickness: 12 mm proposed, no-go, 20 mm for everything

> “all silestone is just 12mm thick including coutertop. Apparently the manufacturer allows it”

Petr, 2026-11-20, relaying the architect. Then:

> “if anything doesnt pass then we dont want the change. So check the cooktop, sinks, etc. for their documentation.”

> “can you estimate the price difference in czk between doing everything in 12 vs 20 vs 30? The architect wants the vertical ones to be the same thickness.”

> “ok, lets use 20mm for everything (we currently have 12 for vertical).”

The source for Silestone is Cosentino's *Silestone Countertops Design and
Installation* manual, in the repo as
[sources/SilestoneCountertopsDesignInstallation.pdf](sources/SilestoneCountertopsDesignInstallation.pdf).
Page numbers below are the manual's printed spread numbers.

**12 mm was a no-go.** Each line gives the manufacturer's text first. The
conclusion after the arrow is ours.

- **Hob.** Miele KM 8665 FL is flush-fit. Miele's installation manual
  ([PDF](https://media.miele.com/downloads/02/8d/02_C7F1383814AE1FD185F64AE5A947028D.pdf),
  p. 29, “Installation dimensions for flush-fit installation”) gives a
  stepped cut-out for natural stone: rebate 12 wide and **5.5 (+0.5) deep**.
  Cosentino p. 10|11, “Types of placement → Leveling”, says the recess is
  **“≤ 1/3 espesor”** (a third of the thickness).
  → At 12 mm the limit is 4 mm, against Miele's 5.5–6. It fails. At 20 mm
  the limit is 6.7 mm, so 6 fits.
- **Sinks.** Teka RS15 / FLEXLINEA RS15 (BE LINEA R15 / RS15 sheet) are
  fixed with **ø10 bushings 16 mm deep** in the stone. Cosentino p. 10,
  “Types of sinks”, says “Under counter (with plate) … Fixation: insert +
  screw … **Thickness ≥ 30 mm**”. The glued version, “Under countertop
  (glued) … Fixation: Recommended adhesive”, has no thickness limit.
  → The plate and bushing method is not allowed below 30 mm. A 16 mm
  bushing in 12 mm stone is impossible. At 20 mm the sinks are a **glued
  undermount**: the Teka bushings are not used, and the rims are glued to
  the underside of the stone, which is how the model already shows them.
- **Supports.** Cosentino p. 20, “Distance between two supports”: “A1
  Without fitting ≤ 900 mm (12) / ≤ 1,200 mm (20); A2 With Recess ≤ 600 mm
  (12) / ≤ 800 mm (20); **B Cabinet width ≤ 700 mm**” (one value for both
  thicknesses), and “If the cabinet supporting the countertop does not meet
  the distances between supports, it must be reinforced”.
  → SF-B800 (800) and SF-C850 (850) in the west run are over 700, at
  20 mm as well. **open:** those two need reinforcement (support bars, the
  same page) or a width change. Not redesigned here.
- **Joints near the fittings.** Cosentino p. 10|11: “(D) Joint-fit
  distance: ≥ 150 mm | Silestone 12 mm. ≥ 100 mm | Silestone 20, 30 mm.”
  → There are no joints in the tops (one piece per run), so this rule
  doesn't come into play.

**Now.** `silestone-blanco-maple.thickness_m: 0.020` in
`inputs/materials/catalogue.yaml` is the one source for Silestone
thickness. Every Silestone part links to it with
`mat:silestone-blanco-maple.Thickness` (`models/furnishing_links.py`):
the three runs' `Pset_KitchenRun.WorktopThickness`, KR-WEST's
`BacksplashThickness`, `CV-BS-DN.Depth`, `CV-BS-R052.Width` and
`CV-BS-R053W.Width`. The island end panels take the worktop thickness. The
worktop top stays at 930 and the 2450 line is unchanged. The horizontal
stone was already 20, so no carcass height moves. Changes, old → new:

| Part | Old | New |
|---|---|---|
| KR-WEST-BACKSPLASH | 12 thick, run c 588–600 | **20**, c 580–600 (the top in front of it: 608 → 600 visible) |
| CV-BS-DN | 12, y 15.588–15.600 | **20**, y 15.580–15.600 (wall face kept) |
| CV-BS-R052 | 12 × 238, x 22.450–22.462 | **20 × 230**, x 22.450–22.470 |
| CV-BS-R053W | 12 × 238, x 25.138–25.150 | **20 × 230**, x 25.130–25.150 |
| CV-SLAT-W052 | x 22.150–22.462 (312) | x 22.150–**22.470** (320), linked to the return |
| CV-SLAT-W053 | x 25.138–25.450 (312) | x **25.130**–25.450 (320), linked to the return |
| SF-DH-LINING notches | x 22.15–22.462 / 25.138–25.45 | 22.15–22.47 / 25.13–25.45 (linked to the slats) |

### Zero overhang: dining run and island east edge

> “dining area and east island side have zero overhang”

> “btw, in dining area, no overhang means the top and the cabinets are both 450mm deep. Only 430mm of the countertop depth is visible because theres a 20mm backdrop. This way, we can just about fit the Dreame base station into the bottom cabinets.”

- **KR-DN** `WorktopOverhang` goes 0.02 → **0**. KR-DN-WORKTOP was 470
  deep (y 15.130–15.600) and is now **450** (y 15.150–15.600), flush with
  the drawer fronts. CV-BS-DN (20) stands on its back 20, so 430 is
  visible. SF-DN's boxes were already 450, front face y 15.150 to the
  wall at 15.600, so the carcass, drawers and dock don't change. SF-F052's
  own oak top is in the same run, so it went 220 → 200 (front
  15.130 → 15.150). The oak strip over SF-F053 comes from this run too
  and is also flush (front 15.150). **open:** KR-LB's own oak counter over
  SF-LB keeps its 20 overhang (living room, not asked), so the one oak
  part now steps by 20 at x 25.45, where SF-F053 meets SF-LB. Then Petr:
  “living room overhang also goes away”. So KR-LB's `WorktopOverhang` is
  linked to KR-DN's (`Pset_Links`: `KR-DN.Pset_KitchenRun.WorktopOverhang`,
  now 0, was 20). The oak top over SF-LB went 470 → **450** deep (front y
  15.130 → 15.150), flush with SF-LB's fronts and with SF-TC's front. The
  step at x 25.45 is gone. Nothing else moves: SF-TC, FN-BK and the sofa
  have no links to the top's depth. The sofa's north backs (y 14.85–15.15,
  top 760) now meet the counter's front plane with no gap, as SF-LB's
  boxes already did.
- **Dreame X60 station** (416 × 443 × 249; the dock band is unchanged):
  - Width: the opening is x 22.5675–23.0075, 440, so 12 clear each side.
  - Height: the board is at 260, so 11 over the station.
  - Depth: the front plane is at 0 (its notched front), and the station is
    443 deep in the 450 front-to-wall depth, so **7 mm** to the wall. The
    bottom and back are cut away over it. `DockClearance` 10 is not met
    behind the station (guess: 10). **open:** confirm the wall face, and
    any skirting or socket behind it.
- **MERIVOBOX and Gridfinity are unchanged.** The side depth stays 414 − 18,
  so the NL stays **400** (needs 403 ≤ the inside depth). The inside is
  597/606 × 358, so the Gridfinity stays **14 × 8** (slack +8/+17 by +21,
  as before).
- **KR-ISL** has a new `Pset_KitchenRun.WorktopOverhangE: 0`. The edge
  facing a compass side takes `WorktopOverhang<side>` when given, else
  `WorktopOverhang` (`_Builder._overhang`). The island top went
  2540 × 1212 → **2540 × 1192**. The east edge moved x 21.692 → **21.672**,
  flush with the east fronts. The west 20 overhang is kept. The end panels
  follow the top: 1212 → 1192 deep. The hob's back edge to the far (east)
  edge went 642 → 622; Miele needs ≥ 50.

### West run end panels: cream wood

> “sides of western cabinet are cream color wood, not silestone (sides of island stay silestone)”

KR-WEST has a new `CladdingMaterial: "kitchen cream"` and
`CladdingThickness: 0.02`. The 20 is a guess, kept so the stone top's ends
don't move, and it is no longer linked to the stone. KR-WEST-CLAD-N and
KR-WEST-CLAD-S are 20 × 620 × 910 as before. They are now
`kitchen-front-cream` (label `cabinet`), not Silestone. The top still
covers them.

### Island: 45° mitre between the top and the end panels

> “island top and sides use a 45 degree joint”

KR-ISL has a new `MitreEnds: true`. Each end panel now runs up to the
worktop top (z 0–930, was 0–910). The top's end and the panel's top edge
are both bevelled on one 45° plane, from the outer top corner (outer
face, 930) to the inner bottom corner (inner face, 910). The model checks
that the panel and the top have the same thickness (20 = 20) and stops
otherwise. In the model, `Part.cuts` holds the (a, z) triangle each piece
loses. The GLB subtracts a prism through the whole depth
(`ground_floor._cut_solid`). The IFC uses an `IfcBooleanResult`
DIFFERENCE (representation `CSG`). Cosentino p. 18|19 (side waterfalls):
“Preparation: Gluing mitered pieces to the furniture structure. Valid
only for waterfalls that are 100% attached to the furniture”, and “The
side waterfall MUST NOT lift the countertop off the cabinet”. Its
“Recommended thicknesses” table lists 12, 20 and 30 mm for both kinds.
→ The panels are glued to the island's end sides (`open:`: the fixing
detail).

### Upper cabinets and bookshelf: pier + slat depth

> “dining area top cabinets as well as living room shelves are exactly the delth of columns + accoustic cladding”

The piers run from y 15.35 (face) to the north wall at 15.60. The slats
are 20 + 6 backing, front at **15.324**, linked as `15.35 − Depth`. So
pier + cladding is **276**.

| Element | Old | New |
|---|---|---|
| SF-DH (dining wall cabinet) | y 15.250–15.600, **350** deep (324 inside) | y 15.324–15.600, **276** (250 inside), `Y = CV-SLAT-W052.Y`, `Depth = 15.60 − CV-SLAT-W052.Y` |
| SF-DH-RET-W / -E | y 15.270–15.600 (330) | y 15.344–15.600 (256), `Y = SF-DH.Y + 0.02` |
| FN-BK (bookshelf) | y 15.350–15.600, **250** | y 15.324–15.600, **276**, `Y = CV-SLAT-W053.Y` |

Clashes and open points:
- **Blum AVENTOS HF needs an internal depth LT ≥ 264** (catalogue
  2024/25 p. 20). SF-DH now has **250** (276 − 18 front − 8 back). The
  export would stop on it. SF-DH's `Pset_Fronts.BlumRangeOverride` quotes
  Petr's depth, so it is kept and listed (`OutsideBlumRange`). **open:**
  for the architect: another fitting, or the depth.
- **SF-DH-LINING** (the oak board under the soffit) still runs to the
  soffit face (y 15.15, 450 deep). It now stands **174** proud of SF-DH's
  front (was 100). The HF sweep and its 28 above are unchanged, because
  the height is the same.
- The 2450 line and the soffit are untouched. SF-DH stays 1560–2404.

### SF-TC cream

> “Only make SF-TC cream, nothing else.”

SF-TC (KR-TC, every part) goes `oak-natural-kaplan` → `kitchen-front-cream`
(catalogue selectors and `Pset_Finish`). No other material changes.

## Batch 2026-11-20 h

### Worktop build-ups: living 40, dining 20 + 20

Petr, 2026-11-20:

> “oh and btw, per the sketchup screenshot I sent earlier, the living room counter is the same thickness as the bookshelves, which is 40, and the dining part has 20 silestone and 20 oak below it. That makes all the base cabinets a bit less tall.”

Bob could not find that SketchUp screenshot (not in the attachments, the
transcripts or memory), so the numbers come from the message alone.

- The finished top stays at **930** everywhere (`guess:` invariant: no
  source gives a new counter height). The **carcasses** get shorter, not
  the plinths: a `Carcass: Box` run's bodies stop at `930 − (stone + underlay)`
  (or a bay's own top), so that is the parametric place. The dining run's
  100 flush kickboard and KR-LB's 0 plinth are unchanged.
- **KR-LB** (living counter): `WorktopThickness` is now a link to
  `FN-BK.Pset_Bookshelf.BoardThickness`, which is new and **40** (sides,
  top and shelves; it was a hard-coded 20, `guess:`, in
  `models/living_geometry.py`). Top 890–930 (was 910–930). The oak strip it
  lends over SF-F053 follows (`Pset_KitchenBay.WorktopThickness` linked to
  KR-LB).
- **KR-DN** (dining): 20 Silestone (catalogue link) on a new 20 oak layer,
  `Pset_KitchenRun.UnderlayThickness: 0.02`, `UnderlayMaterial: "natural oak"`
  (`guess:` the species/finish) → part `KR-DN-UNDERLAY`, the stone's
  footprint (450 deep, flush), 890–910. Stone 910–930.
- **SF-F052**'s own oak top: 40 (890–930), linked to stone + underlay, so
  that cupboard drops with the dining boxes (`guess:` one 40 oak piece).
- `open:` **the kitchen runs (KR-WEST, KR-ISL, KR-TALL) are not changed.**
  “all the base cabinets” could include them, but without the screenshot it
  is not clear that the kitchen stone also sits on 20 oak. They keep 20
  stone on a 910 carcass.

| Element | Old | New |
|---|---|---|
| KR-LB top (oak) | 20, 910–930 | **40**, 890–930, linked to FN-BK boards |
| SF-LB carcass top / fronts | 910 / fronts 1.5–908.5 | 890 / fronts 1.5–888.5 |
| KR-DN stone | 20, 910–930 | 20, 910–930 (unchanged) |
| KR-DN-UNDERLAY | — | 20 oak, 890–910, 450 deep |
| SF-DN carcass top | 910 | 890 |
| SF-DN tall drawer fronts | 261.5–908.5 (647) | 261.5–888.5 (627) |
| SF-DN inner drawers I1 (M) / I2 (K) | 772–862 / 526.5–654.5 (S1) | 752–842 / 516.5–644.5 (S1); same 30 under the rail |
| SF-F052 / SF-F053 tops | 20 oak, 910–930 | 40 oak, 890–930 |
| SF-F052 / SF-F053 carcass, door | 910, door to 908.5 | 890, door to 888.5 |
| FN-BK boards | 20 | 40; still stands on 930 (`Elevation = SF-LB.Top`) and tops out at 2450 |

Knock-ons checked:
- MERIVOBOX: still M + K over the F/K box in every SF-DN section; the build
  checks the heights and passed. The dock zone (Dreame) is set from the
  bottom, so the dock board stays at 260 over the 249 station: **11 above,
  unchanged**; sides 12, wall 7 unchanged.
- SF-TC stays 2450 high (it is not part of these runs).
- The bookshelf's inside is 20 narrower each side and its three shelves
  are 40 thick, so the openings are smaller (four openings in 1470 − 40 top
  − 3 × 40).

### SF-DH and the Blum HF depth (for the woodworker)

> “keep that too shallow top dining cabinets for blum lift up hinge issue well documented for the woodworker. Its not part of the model but we'll resolve it in due time”

See the `open:` box at the top of this file. No geometry change.

### KR-TALL's side kickboard flush

> “that little kickboard I asked you to add on the side of the tall kitchen cabinet where it meets the column area. Youve made it recessed, which is clearly wrong. Needs to be flush with the cabinet side.”

New `Pset_KitchenRun.SideKickboardSetback` (metres, default
`PlinthSetback`); KR-TALL's is 0, so `KR-TALL-PLINTH-E` sits in the end
panel's plane and follows the run's east end.

| | Old | New |
|---|---|---|
| KR-TALL-PLINTH-E | x 22.082–22.100 (50 in from the side) | **x 22.132–22.150**, flush with `KR-TALL-END-E` (22.132–22.150) |
| y, z | 15.068–15.592, 0–100 | unchanged |

It now meets `KR-DN-PLINTH-S` (x 22.150–22.5675, y 15.150–15.168) face
to face at x 22.150: no gap, no overlap. Its front end still butts the
back of `KR-TALL-PLINTH-S` (y 15.068).


## LED panels under the wall cabinets (2026-11-22 a)

Petr, 2026-11-22:

> “lets do the led panels like we discussed, on the underside of the kitchen (west) top cabinets, and the dining (north) top cabinets. I already have some sample panels, they come in 245*495mm (I think) format, but they can be cut or combined to pretty much any dimension, so choose something reasonable. They will inevitably be too powerful and I'll have to dimm them, but thats fine, I want the underside of the cabinet to be a full led panel, with some reasonable padding. Feel free to add the lights configured in ifc and matter as Cody has been doing for the others. If you can't find existing lights and cables, fine to give them some temporary cable names and I'll figure it out later (as far as I remember, the kitchen one might already exist but is placed wrong, but the dining one we forgot, doesn't even have a cable yet). Model everything well and in a way that makes sense for the woodworker. Use the right thickness cabinet bottom so the panel can be routed into it. Or use regular cabinet bottom mdf plus some additional planks below it to frame the panel. Up to you.”

From the earlier chat: the LED sheets are glued to an aluminium backing plate; the plate sits in a recess in the cabinet bottom behind a 3 mm opal acrylic diffuser, cut to size, flush with the underside in a rebate with 1–2 mm play; bare LED dots want 5–10 mm to the diffuser.

Cabinets: the west wall cabinets `KR-WEST-H` (SF-CH850, SF-BH800, SF-AH850; fronts x 19.150, wall x 18.800, y 11.350–13.850) and the dining wall cabinet `KR-DH` (SF-DH, two sections; x 22.450–25.150, y 15.324–15.600). Both had an 18 bottom at 1560–1578.

### One panel per run (2026-11-22 b)

Petr, on PR #138:

> “cant we make it a single panel even accross where the cabinets meet?”

So each run has **one 30 bottom board, one pocket, one diffuser and one LED field** (`Pset_KitchenRun.LedContinuous: true`):

- **West (KR-WEST-H):** the three bottoms (SF-CH850, SF-BH800, SF-AH850) became one board `KR-WEST-H-BOTTOM`, 2464 × 324 × 30, between the two end sides. The end sides still run down to 1560 and cover the board's ends. The two dividers now **stand on the board** (z 1590–2450, 860 high; they were 1560–2450, 890). Underside 1560 and top 2450 unchanged; fronts, lift mechanisms and shelves unchanged.
- **Dining (SF-DH):** one pocket across the whole 2664 board, `KR-DH-BOTTOM` (was `SF-DH-BOTTOM`, two fields). The section divider SDIV1 already stood on the bottom (1590–2386); it now stands on the 15 web over the pocket instead of a solid strip.
- **Fixing the dividers to the web (`guess:`, for the woodworker):** 2–3 countersunk screws 4 × 35 from below through the 15 web into each divider's edge, put in before the aluminium plate goes in (the plate hides them), plus glue or 2 Ø8 dowels drilled 10 deep into the web from above. Structurally fine: a wall-cabinet divider hangs from the top and the back and carries its shelves; what it puts on the bottom is small. The web spans about 260 (west) / 184 (dining) between the solid frame strips, as the whole bottom already did. Keep the screw heads flush so the plate lies flat.
- **The bottom board in the West run is 2464 long**: MDF 30 comes in 2800 × 2070 sheets, so it is one piece.

### Construction: a 30 bottom with the field routed into it

Chosen: **one 30 mm bottom board per cabinet with a stepped pocket routed into its underside** (`Pset_KitchenRun.BottomThickness: 0.030`, `LedPanels: true` on both runs). Not the 18 bottom plus framing strips, because:

- **The underside stays at 1560.** Strips under an 18 bottom would drop the underside by their thickness, and the AVENTOS HF lower fronts (1561.5–2003.5) end at the old underside: the strips would show under the fronts or the fronts would have to grow, which changes the HF cabinet height and its Blum check. With the routed bottom the fronts, the lift mechanisms, the 2450 top (2404 for SF-DH under the soffit) and the worktop clearance do not change.
- One CNC-routed board per cabinet, no loose strips to glue and align. The board takes the rebate edge cleanly and the diffuser lies flush.
- `guess:` the board: 30 MDF lacquered on the underside to the carcass colour (cream in KR-WEST-H, oak veneer for SF-DH), or two 15 boards glued. The woodworker chooses; 30 is the model's thickness.

The interior loses 12 (the bottom's top goes from 1578 to 1590). The inside depth does not change, so **SF-DH stays 250 inside (276 deep)**: the AVENTOS HF depth note at the top of this file (250 < LT 264) is unchanged, neither better nor worse. The HF mechanisms sit at the top of the side panels, nowhere near the bottom; keep the junction box (below) at the bottom back, out of the HF fronts' swing.

### Section detail (all `guess:` except the 3 mm opal and Petr's 245 × 495 module)

Through a cabinet bottom, front to back (z in mm; the same in every cabinet):

```
z 1590 ┌───────────────────────────────────────────────────────────────┐  bottom top (inside)
       │                    web 15 (board over the pocket)             │
z 1575 │      ┌─────────────────── pocket ────────────────────┐        │
       │      │ aluminium plate 2        1573–1575            │        │
       │      │ LED sheet 2 (dots down)  1571–1573            │        │
       │      │ air gap 8                1563–1571            │        │
z 1563 │   ┌──┘ ledge 8                               ledge 8 └──┐     │
       │   │ opal diffuser 3, flush        1560–1563             │     │
z 1560 └───┘ play 1.5 (SF-DH 2)                 play 1.5 (SF-DH 2)└─────┘  underside
       |←25→|  padding to the board edge
```

| Layer | Parameter (`Pset_KitchenRun`, metres) | Value | Source |
|---|---|---|---|
| Bottom board | `BottomThickness` | 30 (was 18) | `guess:` |
| Padding, field to the board edges and to SF-DH's section divider | `LedPadding` | 25 | `guess:` (Petr: “some reasonable padding”) |
| Rebate depth = diffuser | `LedDiffuserThickness` | 3 | earlier chat: 3 mm opal |
| Diffuser play, each side | `LedRebatePlay` | 1.5 west, **2 SF-DH** | earlier chat: 1–2 mm |
| Ledge the diffuser rests on, each side | `LedLedge` | 8 | `guess:` |
| Air gap LED → diffuser | `LedAirGap` | 8 | earlier chat: 5–10 for bare dots |
| LED sheet | `LedModuleThickness` | 2 | `guess:` |
| Aluminium plate | `LedPlateThickness` | 2 | `guess:` |
| Plate play in the pocket, each side | `LedPlatePlay` | 1 | `guess:` |
| Board left over the pocket | `LedMinWeb` (check) | 15 (min 10) | `guess:` |
| Module | `LedModuleWidth` × `LedModuleLength` | 245 × 495 | Petr, “(I think)”: **guess:** |

Diffuser play per end (since 2026-11-22 b): **2.75 west, 3 SF-DH**. PMMA grows about 70 µm/m·K: over 30 K the 2408 west diffuser grows 5.1 and the 2608 dining one 5.5, about half at each end. The same play applies front and back, where it is far more than needed. Do not glue the diffuser; it must be able to slide.

The parts per lit run: `KR-WEST-H-BOTTOM` / `KR-DH-BOTTOM` (the board: web, the frame round the rebate, the ledge), `<run or bay>-LED1-PLATE` (the aluminium plates, butted) and `-LED1-SHEET` (the LED pieces). Without `LedContinuous` it is one field per cabinet section, as first built. The diffusers belong to the light fixtures (below). All of it follows the cabinet: change a bay's width, depth or a parameter and the fields, the cut list and the lights move with it (`models/kitchen_cabinet.py`, `_led_bottom`, `LedField`).

Woodworker notes:
- `open:` fixing the 30 bottom: the pocket takes the lower 15 of the board up to 25 from its edges, so confirmats or dowels into the bottom's edge should sit in the upper half (the web), or use the 25 frame only.
- The dividers stand on the 15 web over the pocket (above).
- **The diffuser hangs: nothing under it holds it in the rebate**, so it has to be held up against the 8 ledges. `guess:` self-adhesive magnetic tape along both long edges of the diffuser's top face and steel tape on the two long ledges, continuous, so it comes off for service and can still slide as it grows. (The first version said “rests on the ledge”; it is the other way round.) The plate is screwed or taped to the web through the pocket.
- **Sag:** held along both long edges, 3 mm PMMA (3.57 kg/m²) bows about 0.33 mm across the 268.5 west span, 0.7 mm with long-term creep (E 1.5 GPa); 0.1 / 0.2 mm across SF-DH's 194. Fine, no middle support needed. Point magnets or clips instead of continuous tape would add sag along the length.

### Cut list (for Petr)

Since 2026-11-22 b, one field per run. Long side of the module along the run; one cut piece at the end. Sizes in mm, length × depth.

| Run | Bottom board (30) | Rebate, 3 deep | Diffuser, 3 opal | Pocket, 12 deep over the ledge | Aluminium plates, 2 (butted) | LED pieces (from 245 × 495 modules) |
|---|---|---|---|---|---|---|
| West, KR-WEST-H (SF-CH850 + SF-BH800 + SF-AH850) | **2464 × 324**, one board | 2414 × 274 | **2408.5 × 268.5** | 2398 × 258 | 2396 × 256 as **990 + 990 + 416** | 4 × 495 × 245 + 416 × 245 (field 2396 × 245) |
| Dining, SF-DH | **2664 × 250** | 2614 × 200 | **2608 × 194** | 2598 × 184 | 2596 × 182 as **990 + 990 + 616** | 5 × 495 × 182 + 121 × 182 (field 2596 × 182) |

Totals: 2 diffusers, 6 plate pieces (from one 1000 × 2000 aluminium sheet per run, `guess:` max 1000 per piece so each is easy to glue up; the plate joints fall on module joints, so no LED piece crosses one). **11 modules**: west 4 whole + 1 cut to 416; dining 6, all cut to 182 wide, one also to 121 long. The west field leaves 5.5 of plate bare front and back (256 − 245). `open:` whether Petr's sheets can be cut to 182 across the module and to these lengths (cut lines, feed pads), and how the pieces are joined.

### Diffuser: what and where to buy

3 mm opal PMMA made for LED backlighting, cut to the sizes above:

- **Plexiglas LED White WH14**: about 47 % transmission, the brighter one. **Plexiglas LED White WH72**: about 31 %, more diffusion, whiter when off, hides the dots better. Cast PMMA, 3050 × 2030 sheets, so **the 2408.5 and 2608 diffusers each come out of one sheet along its 3050 length**; no joint needed ([Plexiglas LED technical information 222-25](https://www.plexiglas.de/files/plexiglas-content/pdf/technische-informationen/222-25-EN-PLEXIGLAS-LED-back-lighting-white.pdf)). Petr will dim the panels anyway, so `guess:` **WH72** (no dots visible at 8 mm).
- In the Czech Republic: [Zenit eshop](https://eshop.zenit.cz/desky/plexisklo-barevne/xt-plexiglas-3mm-opal-wn770/variant/2050-3050/?a21=118) (Plexiglas XT opal WN770, 45 %, cut to size at 12.10 CZK per metre of cut; ask them for WH14/WH72) (sheets 2050 × 3050 and 1520 × 2050: use the 3050 one) or [Dencop](https://eshop.dencop.cz/plexisklo-opalove-3-mm/) (3 mm opal, 29–35 % grades, 1020 × 3050, 2050 × 3050, also 2000 × 6000 in XT; cut to size in Zlín). Not a 2030/2050-long sheet: both diffusers are longer. If a run ever grows past about 3000, butt two pieces over a 20 aluminium T-strip glued on the ledge across the field (`guess:`).

### One light, the right cable (2026-11-22 c)

Petr: “theres a panel light very close by to the one you added in the kitchen. Can we remove the extra one and make sure the cable number is configured well? Am I right to assume that the dining one doesnt have a cable number yet? Document that well (Ill need to actually add that cable on site, it was forgotten. Then merge.”

- **The extra one was `C180-S`**, “Světlo 180”, `Panel`, a 0.25 × 2.4 × 0.03 box at x 18.907, y 11.36, z 3.92 (under the sloped ceiling), straight above the west cabinets. But **the plan's “Panel 250x2400 (~200 W)”, mark 3(180), is drawn over the west wall cabinets (FixturePlan.pdf), and 250 × 2400 is their underside: it is this LED panel**, and the Soupis gives cable 180 the heavier CYKY 4x2.5 that a ~200 W 24 V panel needs. 2026-11-22 a had put the panel on cable 181 instead, so the model had two panels for one light.
- Now: **one light, `C180-S`, cable 180**, `PanelRun: KR-WEST-H`. The ceiling box is removed; the id and GlobalId are C180's. `C181-S` is back to its #120 strip (cable 181 is a real Soupis row, CYKY 4x1.5, “into a box in the pre-wall”), with the question what it is now. Cable 180 is on C180-S only, cable 181 on C181-S only; both stay in the room's `Controls` lists.
- Dining: **yes, it has no cable number. See “Missing cable” below.**

### Lights in IFC (and Matter)

The house lights are yaml-ifc `lightFixtures` in `inputs/ground_floor/electrical-<room>.yaml`, one element per cable (`C<cable>-<code>`; a strip with several runs is still one element), `Pset_YamlIfc` with `CableNumber`, `Panel`, `DeviceCode`, `CableSpec`. Matter lives in the Home repo's `hardware.yaml`, keyed by each element's IFC GlobalId (one `ColorTemperatureLight` with warm and cool channels per light; Home covers room 1.11 only so far).

New: a light can be `PanelRun: <kitchen run>` instead of a box or a `Path`; it is drawn as that run's diffusers (`models/electrical_rooms.py`, `panel_rects`), so it follows the cabinets. One light per run = one cable = one dimmable circuit = one LED field (`guess:` one circuit per run).

| Light | Was | Now |
|---|---|---|
| **`C180-S`** (cable 180, panel 1, **CYKY 4x2.5**, 4 m), GlobalId `1RcvK5MrXPgx45bpdubcog` (2026-11-22 c) | plan “Panel 250x2400 (~200 W)”, modelled as a ceiling panel at x 18.907, y 11.36, **z 3.92**, 0.25 × 2.4, right above the cabinets | `LedPanel`, `PanelRun: KR-WEST-H`: one diffuser 2408.5 × 268.5 at x 18.836–19.104, y 11.396–13.804, z 1.560–1.563 |
| `C181-S` (cable 181, panel 1, CYKY 4x1.5), GlobalId `0Em9207ILL0AQyFYvB2qXE` | 2026-11-22 a/b: the west panel | back to its #120 `LedStrip`, Path 19.430, 11.310 → 13.780 at z 1.530 (the plan's strip line at the worktop front edge); since 2026-11-22 d unplaced, it stuck out in front of the cabinets; `open:` what it is (Questions.md 14b) |
| `NC-1.02-S-2` (new), GlobalId `3kNrurCkTGufS7Cviy$JPc` | — | `LedPanel`, `PanelRun: KR-DH`: one diffuser 2608 × 194 at x 22.496–25.104, y 15.370–15.564, z 1.560–1.563 (2026-11-22 a: two, 1269 × 196). **⚠️ No cable: temporary `TEMP-1.02-DH`** (`Pset_YamlIfc.TempCable`, no `CableNumber`), panel 1 and CYKY 4x2.5 assumed (2026-11-22 c; was 4x1.5). See “Missing cable” below. Added to the room's `Controls` lists next to NC-1.02-S. |

`open:` **`NC-1.02-S`** (the plan's “Panel 200x2500 (~160 W)” with no cable, at 2.99 by the north wall, x 22.515–25.015, y 15.343–15.543) lies exactly over SF-DH in plan. It may be the same dining light drawn on the plan at the ceiling. Not touched; question in [Questions.md](../electrical/Questions.md) item 14.

Matter, not done here (Home is a separate repo; `blueprints-1.02` would be a new entry in its `sources` and pins a Blueprints commit; it can only reference these GlobalIds after this is merged and the pin bumped). `guess:` records for Home's `hardware.yaml`, if Petr's sheets are CCT like every other indoor light (WiringOverview: 24 V, PWM, CCT on 4 cores):

```yaml
  "1RcvK5MrXPgx45bpdubcog":
    blueprintsId: C180-S
    matter: { deviceType: ColorTemperatureLight, channels: [warm, cool] }
    control: { esp32: null, driver: null, pins: null }
    automations: {}
    sources: [blueprints-1.02, plan-step1, wiring-lights, wiring-indoor-cct]
  "3kNrurCkTGufS7Cviy$JPc":
    blueprintsId: NC-1.02-S-2
    matter: { deviceType: ColorTemperatureLight, channels: [warm, cool] }
    control: { esp32: null, driver: null, pins: null }
    automations: {}
    sources: [blueprints-1.02, plan-step1, wiring-lights, wiring-indoor-cct]
```

### Cable and driver route (`guess:`, `open:`)

- No driver in the cabinets if the sheets are 24 V: the house's 24 V constant-voltage supplies and the PWM dimming are in the panels (WiringOverview), and the 4-core cable goes straight to the LEDs (V+, V+, cool, warm). `open:` if Petr's sheets are 12 V, single-colour or need their own driver, a small one goes in the cabinet at the bottom back (it then needs air) and the cable type may change.
- `open:` the power per module is not known, so the panel-1 supply cannot be sized yet (WiringOverview: size for every light at full output on both channels).
- Each field has **one Ø10 hole through the web**, centred along the field, 15 in from the pocket's back edge (world: west x 18.856, y 12.600, inside SF-BH800; SF-DH y 15.544, x 23.800, inside the west section). Inside, a small junction box at the bottom back of that cabinet. The LED pieces are linked to each other inside the pocket, so no holes through the dividers are needed any more.
- West (**C180**, CYKY 4x2.5, 4 m, panel 1): the Soupis row has no note; `guess:` up the pre-wall behind SF-BH800 (the middle cabinet) to the hole at y 12.600, through its back panel. (Until 2026-11-22 c this was C181 with C181's “into a box in the pre-wall” note; that note stays with cable 181.)
- Dining (TEMP-1.02-DH): **the cable does not exist; see “Missing cable” below.**

#### ⚠️ Missing cable: TEMP-1.02-DH, the SF-DH panel — add on site

Petr (2026-11-22): “Am I right to assume that the dining one doesnt have a cable number yet? Document that well (Ill need to actually add that cable on site, it was forgotten.” **Yes: the dining panel `NC-1.02-S-2` has no row in the Soupis (CableSchedule.xlsx) and no `CableNumber`; TEMP-1.02-DH is only a placeholder.** The cable has to be pulled on site:

| | |
|---|---|
| **When** | **Before the north wall's pre-wall, drywall and cladding (the CV-SLAT lining behind SF-DH) are closed.** |
| **From** (`guess:`) | Panel 1, like C180 (the 24 V supplies and PWM dimmers are in the panel). Alternative: the deep box behind `C185-V` (x 25.61, y 15.60, z 1.35, where 186–188 end “for later distribution in the furniture”), if a supply is put there. |
| **To** | The Ø10 hole in the SF-DH bottom web at **x 23.800, y 15.544, z 1.575–1.590** (15 in from the pocket's back edge, in SF-DH's west section); leave the end in the wall behind SF-DH at about z 1.60 near x 23.80, past pier W-053, into a small junction box at the bottom back of that section. |
| **Cable** (`guess:`) | **CYKY 4x2.5**, like C180: 4 cores V+, V+, cool, warm at 24 V; a 2.6 m panel like the ~200 W west one draws ~8 A. 4x1.5 only if the panel's power turns out much lower. |
| **Then** | Give it a Soupis number, set `CableNumber` on `NC-1.02-S-2` (or rename it `C<n>-S`), drop `TempCable`. |

Tracked as [Questions.md](../electrical/Questions.md) item 14a.

### What changed (old → new)

| Element | Old | New |
|---|---|---|
| Bottoms SF-CH850, SF-BH800, SF-AH850, SF-DH | 18, z 1560–1578, plain | **30, z 1560–1590**, LED pocket routed into the underside |
| Their backs, SF-DH-SDIV1 | from 1578 | from 1590 |
| West shelves (each cabinet) | 1850.7–1868.7, 2141.3–2159.3 | 1858.7–1876.7, 2145.3–2163.3 |
| SF-DH shelves (both sections) | 1835.3–1853.3, 2110.7–2128.7 | 1843.3–1861.3, 2114.7–2132.7 |
| Underside, fronts, HF mechanisms, tops | 1560, … | unchanged |
| Clearance worktop (930) → wall cabinets | 630 (west and dining) | **630, unchanged** |
| SF-DH inside depth | 250 | 250, unchanged (HF note still open) |
| C181-S | strip at x 19.430, z 1.530 | the three west diffusers, z 1.560 |
| NC-1.02-S-2 | — | the two SF-DH diffusers, cable TEMP-1.02-DH |
| **2026-11-22 b, one panel per run:** | | |
| West bottoms | three boards 823 / 782 / 823 × 324 | **one board `KR-WEST-H-BOTTOM` 2464 × 324 × 30** |
| West dividers (CH850/BH800, BH800/AH850) | z 1560–2450 (890) | **z 1590–2450 (860)**, standing on the bottom |
| West end sides | z 1560–2450 | unchanged |
| SF-DH bottom | `SF-DH-BOTTOM`, two fields | `KR-DH-BOTTOM`, one field; SDIV1 on the web |
| Diffusers | 770 / 729 / 770 × 271; 2 × 1269 × 196 | **2408.5 × 268.5; 2608 × 194** |
| Diffuser play per end | 1.5 west, 2 SF-DH | 2.75 west, 3 SF-DH |
| Plates | 5 (one per field) | 990 + 990 + 416 west, 990 + 990 + 616 SF-DH |
| LED modules | 12 | 11 |
| C181-S / NC-1.02-S-2 geometry | 3 / 2 diffusers | 1 / 1 diffuser |
| Cable holes in the web | 5 | 2 (y 12.600 west, x 23.800 SF-DH) |
| **2026-11-22 c, one light, the right cable:** | | |
| West panel light | `C181-S` (cable 181) on the cabinets **and** `C180-S` (cable 180) on the ceiling at z 3.92, right above it | **`C180-S` only**, on the cabinets (cable 180, CYKY 4x2.5); the ceiling panel is gone |
| `C181-S` | the west panel | its #120 strip at the worktop front edge, `open:` |
| **2026-11-22 d** `C181-S` (Petr: “the kitchen led panel is now sticking out”) | strip on Path x 19.430, y 11.310–13.780, **z 1.530**: in the air 275 in front of the wall-cabinet fronts (x 19.150) and 20 below their 1560 underside | **unplaced** (`PositionUnknown`, no body) until Petr says what cable 181 is (Questions.md 14b) |
| TEMP-1.02-DH cable guess | CYKY 4x1.5 | **CYKY 4x2.5, MISSING, add on site** |

### Open (`open:`)

- Petr's module size (245 × 495 “I think”), its thickness, voltage, CCT or not, power, and whether it can be cut to the pieces above.
- The air gap (8) depends on the LED pitch; denser dots can go closer.
- Fixing the 30 bottom (fixings in the web), and how the diffuser is held.
- **TEMP-1.02-DH: the missing cable; number, source and route (above).** C181: what it is now, and its pre-wall box position (after the sliding-door work, Soupis).
- NC-1.02-S: the same light as the SF-DH panels, or something else?
- Matter records in Home (above), after this is merged.

## Lacquered fronts and handles (2026-11-22 c)

Petr (t783u): “ok, assume laquered and add all the handles (voxtorp J style on drawers and hinged doors, plain 1cm overhang on all top cabinets)”. Then (t784u, with the bot's proposal): drawers and low hinged doors get a horizontal J grip on the top edge; tall hinged doors a vertical J grip on the handle (non-hinge) edge, like VOXTORP tall doors; on tall cabinets with drawers below, the drawers keep the top grip and the door above gets the side grip; the orientation is a per-front parameter; wall cabinets only the 10 mm overhang.

### Finish

Every cream front, end panel, cladding and plinth (`kitchen-front-cream`) is **matt lacquered MDF**, RAL 9001 (`guess:` the shade, as before; RAL 1015 since 2026-11-22 g, below). Recorded on the runs as `Pset_KitchenRun.FrontFinish: matt lacquered MDF (RAL 9001 cream)` (KR-ISL, KR-WEST, KR-WEST-H, KR-DN, KR-LB, KR-TC, KR-TALL-W, KR-TALL, KR-TALL-F) and in the material catalogue. Carcass interiors stay white melamine. Lacquer is why the routed grip is possible: the groove is lacquered with the face (foil and melamine fronts cannot be routed after finishing).

### J grip (`FrontGrip: J`)

- A run with `Pset_KitchenRun.FrontGrip: J` routes a **VOXTORP J cup** into each drawer front and hinged door along one edge. Petr, 2026-11-22: (t786u) rounded like VOXTORP; (t788u) “make the voxtorp shape (rounded J), yours is missing the lip”; (t789u, with a photo of a real routed VOXTORP edge) “Not as deep and a little different detail (looks like much larger radius on the inside of the outer handle part and only a very small radius on the visible face of the handle). … I know for a fact this is ergnomically perfect.”; (t791u) “I took an aluminium J handle and sketched in red how I understand voxtorp is different.” (the aluminium profile is 18 wide, like our fronts, and 31.18 tall). A slot version from the photo alone was rejected (t790u: “no, thats way worse, you must have misunderstood the photo. Revert this.”).
  - **Orientation** (from both images): the **visible face is the lip side** (the sketch's right, the low crest; in the photo the face that continues below the crest). The **tall wall of the J is the back** of the front and runs up to the edge. From the front you look over the crest into the cup at the back wall's inside (the dark band on VOXTORP fronts). The fingers go in over the crest and pull on the inside of the lip.
  - Profile, in the front's section (`kitchen_cabinet.grip_profile`; d into the front from the visible face, u from the gripped edge), all `guess:` (read off Petr's sketch, which is already 18 wide; IKEA publishes no VOXTORP section):
    - the face side is cut away from the edge down to the **crest**, `JGripLipTop` **21** below the edge; the crest is rounded `JGripCrestRadius` **1** (the very small radius on the visible face), curling over from the face into the cup;
    - from the crest the lip's inside sweeps down in **one large arc**, `JGripBowlRadius` **7**, to the cup's **bottom**, `JGripCupDepth` **28** below the edge (7 below the crest; no undercut);
    - the bottom turns up into the **back wall** with `JGripCornerRadius` **4**; the back wall is `JGripBackWall` **4** thick and runs straight up to the edge (`JGripEdgeRadius` **0**, sharp as in the photo);
    - cup opening over the crest: **12** (from the crest to the back wall); the cut reaches 14 into the 18 front.
    - every number is a run parameter (`Pset_KitchenRun`, metres, like every `IKEA_DEFAULTS_MM` key), with `FrontThickness` (18). The model checks that the bowl reaches the crest and the corner fits.
  - Old → new: the J with an undercut pocket (notch 22 × 13, 4 lip, 9 × 15 pocket, 5 back wall, 37 from the edge) → this open cup, **28** from the edge (“not as deep”), 7 below the crest (was a 15 pocket).
  - `open:` **the woodworker**: the router bit, a J / cove profile cutter run along the edge (or two passes: a large-radius cove for the bowl and a 1 mm round-over for the crest), and **whether 18 is enough** for a 4 back wall 24 tall (VOXTORP's 22 would leave about 8). The front-thickness `open:` box at the top lists what a thicker front changes.
- The 3D model cuts the exact lines and arcs (four arcs, cylinders, so they shade smooth). The viewer outlines every CAD face, so the tangent seams between the arcs and the straight parts still show as thin lines. The IFC cuts the same outline as a polygon, arcs every 10°.
- The grip is a real subtraction from the front solid in the GLB and in the IFC (an `IfcBooleanResult` DIFFERENCE of the profile extruded along the edge, `IfcExtrudedAreaSolid` of an `IfcArbitraryClosedProfileDef`, so the front is `CSG`), and rides with the drawer or door when it opens. Each front with a grip has `Grip: J top|bottom|side` in its properties.
- **Which edge** (`kitchen_cabinet._grip_edge`), per front: the band's `grip=` option in `Pset_Fronts.Layout` (`top`, `bottom`, `side`, `none`) wins, so a tall door can be switched to a horizontal grip with `door:...,grip=top`. Otherwise:
  - drawers and doors up to 1200 high: **top edge** (horizontal);
  - doors over 1200 high: **the vertical edge away from the hinge** (side), full height, like IKEA's [VOXTORP “vertical handle” tall doors](https://www.ikea.com/de/en/p/voxtorp-door-oak-effect-vertical-handle-20648994/);
  - doors starting above 1400 (the upper doors of the tall cabinets, SF-T3-DOOR1 and SF-TF-DOOR1/2): **bottom edge**, `guess:` (in reach from below; they are neither low nor tall).
- `open:` **inner drawer inside depth (woodworker).** The MERIVOBOX inner drawers (island east SF-E…-D1-I1/-I2, dining SF-DN-S1…S4-D1-I1/-I2) compute the same inside depth as their main drawers (508 east, 358 dining) despite their own inner front: the main drawer uses Blum's NL − 26 − 16, the inner drawer its box − 2 × 19. The woodworker to verify both against the Blum catalogue (MERIVOBOX inner drawer with front piece vs. drawer with the front fixed to the sides); the Gridfinity counts (13 × 12 east inner, 14 × 8 dining) follow from it. See “Drawer boxes without a box front (2026-11-22 e)”.
- `open:` **grips around the fridge.** Petr, 2026-11-22 (t792u): “Im not sure about handle placement around the fridge (based on how much final chosen fridge model sticks out).” Undecided: where and which way the grips go on the fronts next to and over the fridge: SF-TF-DOOR1/2 over it (now bottom edge), SF-T1-DOOR1 west of it and SF-T2-DOOR1 east of it (now side, latch edge), the SF-T2 drawers under SF-T2-DOOR1 (top), and the filler SF-T1-FILLER1 (none). It depends on how far the final fridge model stands proud of the cabinet fronts (the model's Whirlpool WQ9I MO2L EF box is a placeholder): a proud fridge can cover a grip on the edge next to it or get in the fingers' way.
- Not given a grip (`open:`, untouched): the full-height **pull-outs** SF-I300-D1, SF-A250-D1, SF-B800-D1, SF-C850-D1 (role `PullOut`; add `grip=top` to their band if wanted); the fixed **blank fronts** SF-LB-S1…S7-FRONT and SF-TC-FRONT2 (dead space, they do not open); the **filler** SF-T1-FILLER1; the **appliance fronts** (the integrated dishwasher's door panel is not a modelled front); the **lift-ups** (overhang below).

| Front | Grip | Band (run frame) |
|---|---|---|
| Island: SF-I500a-DOOR1, SF-I600a-D1…D3, SF-I500b-D1…D3, SF-I600b-D1…D3, SF-E600a/b/c-D1, SF-E700-D1 (14) | top | VOXTORP J cup: crest 21, bottom 28 from the edge, bowl R7, back wall 4, along the top edge |
| Dining base: SF-F052-DOOR1, SF-DN-S1…S4-D1, SF-F053-DOOR1 (6) | top | same |
| Tall: SF-T2/T3/T4-D1, -D2 (6 drawers under the doors) | top | same |
| Tall doors: SF-T1-DOOR1 (101–2449), SF-T2-DOOR1, SF-T4-DOOR1 (911–2449), SF-TC-DOOR1 (701–2449) | side | the same along the latch edge, full height |
| Upper doors: SF-T3-DOOR1 (1904–2449), SF-TF-DOOR1/2 (1927–2449) | bottom | the same along the bottom edge (`guess:`) |

33 fronts, about 23.5 m of grip.

The grip works from the front: no finger room behind the front is needed (behind the top drawers is the carcass rail, and the worktop is 1.5 above them).

### Wall cabinets: 10 mm overhang (`WallFrontOverhang`)

All wall (top) cabinets, KR-WEST-H (cream) and KR-DH (oak, SF-DH): `Pset_KitchenRun.WallFrontOverhang: 0.010`. The **lowest** lift-up front (the lower HF leaf) now reaches **10 below the carcass bottom**, and closes the 1.5 half-gap it had above the bottom edge; nothing is routed. **The top edge does not move** (upper leaves unchanged, 2448.5 west, 2402.5 SF-DH), so the 2450 ceiling line and the HF space above are unchanged.

| Front | Old z | New z | Height |
|---|---|---|---|
| SF-CH850/BH800/AH850-LIFT2 | 1561.5–2003.5 | **1550.0–2003.5** | 442 → **453.5** |
| SF-CH850/BH800/AH850-LIFT1 | 2006.5–2448.5 | unchanged | 442 |
| SF-DH-S1/S2-LIFT2 (oak) | 1561.5–1980.5 | **1550.0–1980.5** | 419 → **430.5** |
| SF-DH-S1/S2-LIFT1 (oak) | 1983.5–2402.5 | unchanged | 419 |

- Open at 88°, the lower leaf's bottom edge is at **1980** (was 1991). The fronts get taller, not shorter; the carcasses (bottom 1560, top 2450 west / 2404 SF-DH) do not change. Worktop (930) to the front's lower edge: 630 → **620**.
- LED panels: the diffusers stay flush with the bottom at 1560; the lower leaf now hides their front edge and the 25 padding from a standing eye, and from the front you see the 10 lip before the light. The front is in front of the carcass (c 0–18), so it does not touch the diffuser or the rebate.
- The HF front weight and power factor follow (the export checks Blum's range): BH800 8.88 → 8.99 kg, LF 7901 → 8004; CH850 and AH850 9.43 → 9.56 kg, LF 8396 → 8506; SF-DH 14.22 → 14.42 kg, LF 12004 → 12169. No new breach; SF-DH stays outside HF's 264 internal depth (250) under Petr's existing override (2026-11-20 f). `open:` set the lift mechanisms' power to the new weights.
- **TIP-ON is not available on AVENTOS HF**: Blum's TIP-ON is for AVENTOS HKi, HK top, HK-S and HK-XS; HF top only has SERVO-DRIVE (electric) ([Blum catalogue 2027/2028, lift systems](https://publications.blum.com/2026/catalogue/en/)). So a plain overhang pulled from below is the consistent handle-less grip for the bi-fold wall cabinets.

### What changed (old → new)

| Element | Old | New |
|---|---|---|
| Cream fronts' finish | “smooth matt lacquer or matt laminate” | **matt lacquered MDF** |
| 33 drawer fronts and hinged doors | flat | J grip, routed (top 23, side 4, bottom 3; table above): first square 22 × 8, then 22 × 10 + 8 hook behind a 4 lip, then rounded scoop 22 × 8, R6 cove, R2 lip (t786u, no lip), then rounded J: notch 22 × 13, 4 lip, pocket 9 × 15 behind it, 5 back wall (t788u), now **VOXTORP J cup from Petr's sketch: crest 21 below the edge (R1), one R7 bowl to the bottom 28 below the edge, R4 into a 4 back wall up to the edge** (t791u) |
| Lower HF leaves, west and SF-DH | bottom 1561.5 | **bottom 1550.0** (+11.5 taller) |
| Pull-outs, blank fronts, filler, lift-ups' upper leaves | — | unchanged |

## Drawer boxes without a box front (2026-11-22 e)

Petr, 2026-11-22 (t793u): real MAXIMERA / LEGRABOX-style drawers have only sides, back and bottom; the outer front is structural (it clips onto the sides). Inner drawers behind a main front do need their own low front, so they are shallower inside. The plan (t795u):

> - we remove the useless frame frontsides
> - for the island west side, there are no inner drawers, so the drawer depth can match gridfinity.
> - for the island east side, we want gridfinity on the inner drawer, the bottom main one doesnt need gridfinity (remove the gridfinity plate too)
> - for the dining are base cabinets, the 450mm depth is given anyway, so we'll see how gridfinity works out (it doesnt have to match in the depth direction.

- **Main drawers and pull-outs** (`drawer_boxes`, every kitchen run, the dining base and the living-room counters KR-LB / KR-TC, which use the same generator but have no drawers): sides, back, bottom; no box front (`BoxFrontPanel` 0; set 19 for the old drawing). The box keeps its length, so a MAXIMERA inside gains the 19. Blum MERIVOBOX insides stay Blum's (NL − 26 − 16); only the drawn box front is gone.
- **Inner drawers** (`inner_drawer_boxes`): unchanged, their own low front piece and back; inside = box − 2 × 19.
- **Island west** (SF-I600a, SF-I500b, SF-I600b; `Pset_Drawers.GridfinityFitDepth: true`): the box is cut to a whole number of cells deep. 12 rows would need a 505 inside, 23 more than the 482 the carcass now allows, so it stays **11 rows**; the box is **501 → 482** (19 shorter, 19 free at the back of the carcass), inside 463 (11 × 42 + 1), unchanged.
- **Island east** (SF-E600a/b/c, SF-E700; `Pset_Drawers.GridfinityMain: false`): no baseplate in the main (bottom, F) drawer; the inner drawers (M and K, both) each have their own, sized to their inside: 13 × 12.
- **Dining** (SF-DN S1–S4): depth unchanged; baseplates stay in the main and both inner drawers (2026-11-20 c: “Give gridfinity to the dining area cabinets too”), 14 × 8, 21 left over in depth.

| Drawer | Box length old → new | Inside (w × d) old → new | Gridfinity old → new | Left over (w / d) |
|---|---|---|---|---|
| SF-I600a, SF-I600b D1–D3 | 501 → **482** | 505 × 463 → 505 × 463 | 12 × 11 → 12 × 11 | 0 / 0 |
| SF-I500b D1–D3 | 501 → **482** | 379 × 463 → 379 × 463 | 9 × 11 → 9 × 11 | 0 / 0 |
| SF-I300-D1 (pull-out) | 501 → 501 | 194 × 463 → 194 × **482** | — | — |
| SF-E600a / SF-E700 D1 (main) | 546 → 546 | 547 × 508 (Blum) | 13 × 12 → **none** | — |
| SF-E600b / SF-E600c D1 (main) | 546 → 546 | 556 × 508 (Blum) | 13 × 12 → **none** | — |
| SF-E…-D1-I1, -I2 (inner) | 546 → 546 | 547 or 556 × 508 | 13 × 12 → 13 × 12 | 0 or 9 / 3 |
| SF-DN-S1…S4-D1 and -I1, -I2 | 396 → 396 | 597 or 606 × 358 | 14 × 8 → 14 × 8 | 8 or 17 / 21 |
| KR-WEST pull-outs SF-A250, SF-B800, SF-C850; KR-TALL drawers SF-T2/T3/T4-D1, -D2 | 516 → 516 | × 478 → × **497** | — | — |

- **Suspicious / unclear, left as is:**
  - **MERIVOBOX insides (east and dining) are Blum's NL − 26 − 16 for the main drawer and the box − 2 × 19 for the inner drawer, and both come out the same (508 east, 358 dining)**: the inner drawers are not shallower than the main ones in the model. Blum's real inner-drawer inside (with its front piece) and the main drawer's (front fixed to the sides) need the Blum catalogue.
  - **Dining: 9 rows would need a 379 inside, 21 more than 358**; the main drawer as drawn (box 396 − 19 back) is 377, 2 short of 9 rows, but its inside is Blum's 358. Left at 8 rows, per Petr's “doesnt have to match in the depth direction”.
  - Both east inner drawers (M and K) get a baseplate; Petr wrote “the inner drawer” (one). Left on both.
  - Baskets and bins in pull-outs keep their positions (19 in from the box's front end).
- The island's depth does not change (1192 overall, below). Since 2026-11-22 f it is 1173: see “Island 1173”.

### Island depth (main = this change; superseded by “Island 1173 (2026-11-22 f)”)

Petr, 2026-11-22 (t796u): “let me know how deep the island will be (we've changed this slightly overtime)”. Nothing here changes it; the west Gridfinity fit is a drawer-box change inside the existing carcass.

| Item | Depth (west → east, run frame c) |
|---|---|
| Worktop | 20 thick, c −20 … 1172: **1192 deep**, 2540 long (a −20 … 2520), top at 930 |
| West front overhang | 20 (worktop past the west fronts) |
| West fronts | 18 (c 0 … 18) |
| West carcass | c 18 … 577 + half the shared back: bay 586 incl. front, 568 carcass incl. half the back |
| Central back KR-ISL-BACK | 18, shared, c 577 … 595: the two sides are **back to back** |
| East carcass | c 595 … 1154, mirror of the west: bay 586 incl. front |
| East fronts | 18 (c 1154 … 1172), flush with the worktop (0 overhang) |
| End claddings KR-ISL-CLAD-N / -S | 20 thick, full depth c −20 … 1172, floor to top (z 0 … 930) |
| End overhang | 20 at the N and S ends, over the claddings (the worktop ends flush with them) |
| Plinths | recessed 50 from each front (c 50 … 68 west, 1104 … 1122 east), 100 high |
| Footprint | **2540 × 1192** |

## Island 1173 (2026-11-22 f)

Petr, 2026-11-22 (t803u): “Ok, I want 1173. Make sure to keep distance of island from west cabinet run unchnaged (afaik it should be 1100, correct me if Im wrong).”

- **West row 586 → 567** deep (SF-I500a, SF-I600a, SF-I500b, SF-I600b, SF-I300). Side depth 559 → 540; the MAXIMERA rule (side depth − 96 + 2 × 19) gives a 482 box, inside 463 = **11 rows, 0 left over**, and no unused depth behind the box (the 19 freed in 2026-11-22 e is gone). Behind the box: the 58 runner allowance (IKEA rule), then half the central back.
- **East row unchanged**: 586, Blum MERIVOBOX NL 550 (needs 553, side depth 559), inner drawers 13 × 12 cells.
- **The west face stays at x 20.500**: the island shrinks from its east side. The central back x 21.077–21.095 → **21.058–21.076**, the east face x 21.672 → **21.653** (the east bays' linked `X`).
- **West aisle unchanged** (measured on main before the change): **1100 front to front** (west run fronts x 19.400 to island west fronts x 20.500) and **1060 worktop edge to worktop edge** (x 19.420 to 20.480), as in “1. West run, alley, island” (2026-11-20).
- Total depth: 20 + 567 + 586 = **1173** (worktop c −20 … 1153).

| What | Before | Now |
| --- | --- | --- |
| West bays SF-I… depth | 586 | **567** |
| West side depth | 559 | **540** |
| West drawer box / inside / rows | 482 / 463 / 11 (19 unused behind) | 482 / 463 / 11 (0 unused) |
| SF-I300-D1 pull-out box / inside | 501 / 482 | **482 / 463** |
| Central back KR-ISL-BACK | x 21.077–21.095 | **x 21.058–21.076** |
| East face (fronts, worktop edge) | x 21.672 | **x 21.653** |
| Worktop KR-ISL-WORKTOP | 2540 × 1192, x 20.480–21.672 | **2540 × 1173, x 20.480–21.653** |
| End claddings KR-ISL-CLAD-N / -S | 20 × 1192 × 930 | **20 × 1173 × 930** |
| Carcass end sides KR-ISL-END-N / -S | 18 × 1136 × 810, x 20.518–21.654 | **18 × 1117 × 810, x 20.518–21.635** |
| Kickboard KR-ISL-PLINTH-E | x 21.604–21.622 | **x 21.585–21.603** (KR-ISL-PLINTH-W unchanged) |
| Island sink SN-RS1840 Origin x (centred on the bay depth) | 20.573 | **20.5635** (tap and disposer follow) |
| Hob cut-out | 50–550 behind the west front, 622 to the east edge | 50–550 (not moved), **603** to the east edge |
| Island east face to the Gatta table (x 23.087) | 1415 | **1434** |
| Island east face to the west chairs' backs (x 22.547) | 875 | **894** (a pulled-out east drawer, 546, leaves 348; was 329) |
| Island to the sofa (x 25.52) | 3848 | **3867** |
| Stone | island top 2540 × 1192 + 2 claddings 1192 × 930 | **2540 × 1173 + 2 × 1173 × 930**; the top still fits one 3270 × 1590 slab |

- Not moved: the hob (its `FrontOffset` is from the west front), the hood shelf light C183-S, the electrical plan's island sockets SOCK-1.02-I1 (x 21.023) and I2 (x 20.896), both still inside the west row (x 20.500–21.058).

## Cream more yellow: RAL 1015 (2026-11-22 g)

Petr, 2026-11-22 (t806u): “lets make that cream color more yellowish. I don't have a precise color code for you, just try something reasonable.”

- `kitchen-front-cream` (`inputs/materials/catalogue.yaml`): **RAL 9001 Cream `#e9e0d2` → RAL 1015 Light ivory `#e6d2b5`**. `guess:` the code; Petr gave none. RAL 1013 Oyster white (`#e3d9c6`) was the milder option, but it is hardly yellower than 9001 (blue/red 0.87 against 0.90), while 1015 clearly is (0.79) and stays a light cream (HSL lightness 0.81), not a beige.
- One shared colour: every cream surface resolves to this one catalogue entry (fronts, doors, drawers, lift-ups, fillers, end sides, plinths, the west run's end panels, the integrated dishwasher door, and every part of KR-DN, KR-LB and KR-TC). Nothing else hard-codes the cream: the GLB carries label colours only, and the viewer's Realistic mode reads the catalogue at run time.
- The free-text finish labels follow: `Pset_KitchenRun.FrontFinish` “matt lacquered MDF (RAL 1015 cream)” and `Pset_Finish.Material` “kitchen cream (RAL 1015 matt)”.
- Not changed (`open:`): the kitchen carcass interiors stay white melamine (`kitchen-carcass-white`, `#eeece6`), including the **west wall cabinets' underside KR-WEST-H-BOTTOM**, which is visible from below (with the LED panels), and the tall runs' bottoms and tops. Say if those should be cream too.

## West run flush ends (2026-11-22)

The two 20 mm claddings KR-WEST-CLAD-S / -N and the worktop over them stood 20 mm into the pocket-door openings OP24 (y 10.25–11.35) and OP25 (y 13.85–14.95), and the south end legs 11 mm. Petr, 2026-11-22 (option 2): use the carcass end sides themselves as the cream (RAL 1015) end panels, flush with the wall segment y 11.35–13.85; nothing (end panels, worktop, legs, kickboard) in the door openings.

New run flag `Pset_KitchenRun.FlushEnds` (excludes `CladEnds`): no cladding; a run end that is a carcass keeps its end side as the visible panel; a run end that is a niche gets an 18 panel `{run}-NICHE-END-{N/S}` (floor to the worktop underside, wall to the fronts' face) just outside the niche; the worktop and backsplash stop flush with the outer panel faces; the end legs sit with their face on the end side's outer face (centre at max(board, leg diameter) / 2 in from the end, was board / 2).

The north end is the dishwasher slot, with no end side, and its 600 can't shrink. So the 18 panel came out of SF-A250, the only bay with spare width: **SF-A250's outer width changed, 250 → 232** (the brief said to keep the bays' outer widths). The 850 section A is now 232 + 600 + 18; SF-AH850 above still matches it.

| What | Before | Now |
| --- | --- | --- |
| South end panel | KR-WEST-CLAD-S, 20 × 620 × 910, y 11.33–11.35 (in OP24) | **the carcass end side KR-WEST-END-S**, 18, y 11.350–11.368, z 100–910 (cream already, the `END-[NSEW]` selector) |
| North end panel | KR-WEST-CLAD-N, 20 × 620 × 910, y 13.85–13.87 (in OP25) | **KR-WEST-NICHE-END-N**, 18 × 600 × 910, y 13.832–13.850, x 18.80–19.40, z 0–910, cream |
| Worktop KR-WEST-WORKTOP | 2540, y 11.33–13.87 | **2500, y 11.35–13.85** (flush, front overhang 20 unchanged) |
| Backsplash KR-WEST-BACKSPLASH | 2500, y 11.35–13.85 | 2500, y 11.35–13.85 (now over the north panel, same span) |
| South end legs SF-C850-S-F / -B | y 11.339–11.379 (11 in OP24) | **y 11.350–11.390** |
| SF-A250 width / clear inside / pull-out inside | 250 / 223 / 139 × 497 | **232 / 205 / 121 × 497** (front 247 → 229 × 807; 3 baskets, `guess:` as before) |
| Dishwasher slot SF-A600 | y 13.25–13.85 | **y 13.232–13.832** (600 kept) |
| Dishwasher EA-SBD6ECX Origin y | 13.251 | **13.233** (1 mm clear each side, as before) |
| Kickboard | KR-WEST-PLINTH-E y 11.35–13.25, SF-A600-PLINTH-E 13.25–13.85 | y 11.35–13.232, **13.232–13.832** (ends behind the north panel) |
| SF-B800, SF-C850 inside | 698 × 497, 739 × 497 | unchanged |

- Wall cabinets KR-WEST-H: already y 11.35–13.85, nothing outside; unchanged.
- No Gridfinity in KR-WEST; no drawer other than SF-A250-D1 changed.
- Catalogue: the cream entry's explicit ids are now KR-WEST-END-S and KR-WEST-NICHE-END-N (the CLAD ids are gone).
- `open:` the south end's leg zone (z 0–100 under KR-WEST-END-S) is open to the side now; the cladding used to cover it, and the kickboard has no return. Say if the end side should go to the floor (a cover panel) instead.
- Not touched: the shelf light C182-S and the sockets.

## Island sink against the south divider (2026-11-23)

Petr, 2026-11-23 (t834u): place the small island sink from the KitchenPlan.jpg note (option A: keep SF-I500a at 500, move the sink). The plan's green rectangle already sat against the 600, not in the middle of the 500. The previous centre was a `guess:`.

Also: put the island EcoMaster EVO3 on the official Teka drain (as #147 did for the west sink), and leave at least 50 mm of stone between the worktop cut-out and the Aquno M81's Ø35 tap hole (Cosentino).

West-row frame mm: front at c 0 (x 20.500), central back at c 567; along the run, a 0 at the north body end (y 13.800), a 500 at the south of SF-I500a (y 13.300). Worktop north edge a −20.

| | Old | New |
|---|---|---|
| SN-RS1840 Origin y | 13.44 (centred in the 500) | **13.30 (south rim on the 500/600 line)** |
| Rim / inner bowl along the run | a 140–360 / 160–340 | **a 280–500 / 300–480** |
| Worktop north edge → inner bowl | 180 | **320** |
| Cabinet end → bowl / rim | 160 / 140 | **300 / 280** |
| Inner end panel → bowl (boards) | 142 | **282** |
| Divider inner face → south bowl | 151 | **11** (rim on the bay line, over the divider centre; the bowl hangs 11 mm clear of the 9 mm divider) |
| Depth (east–west), cut-out, front landing | c 63.5–503.5, cut-out 85.5–481.5, 103.5 mm front edge → bowl | unchanged (`guess:` the plan sits further forward) |
| Drain centre | c 283.5, centred on the bowl (`guess:`) | **c 368.5** (115 mm from the inner bowl back, official RS15 plan, the 400 mm bowl depth shared with the 71.40, ±3 mm) |
| Disposer body (Ø145) | c 211–356, a 177.5–322.5 | **c 296–441, a 317.5–462.5** |
| Tap hole offset behind the inner bowl | 60 (yaml; 44.5 mm of stone, below Cosentino ≥ 50) | **66** |
| Tap hole centre | c 543.5 | **c 549.5** |
| Stone, cut-out → Ø35 hole | 44.5 | **50.5** |
| Spout reach into the 400 mm bowl (reach 220 from the hole) | 160.5 (from hole 543.5) | **154.5** (from hole 549.5) |

**Hansgrohe recommends the M81 hole centre at most 50 mm from the back of the bowl.** 66 mm is the shortest offset that still leaves ≥ 50 mm of stone to the Ø35 hole (Cosentino). 60 mm already exceeded the Hansgrohe note and still failed Cosentino.

sBox (still `open:`, not modelled): Hansgrohe, 30 × 160 × 520, ideally under the tap, can tilt ±20°. Against the south divider it **cannot** sit to the right of the disposer (only 28.5 mm from the Ø145 body to the divider's inner face). It **does** fit in the official place, under the tap against the central back: 160 mm wide, centred with the bowl, 21 mm north of the divider, and about 96 mm of depth between the disposer (c 441) and a 30 mm sBox on the back (c 537–567). Height 520 hangs from the 910 underside to 390, clear of the plinth. That is the “turn it so it misses the disposer” the plan's note already hoped for.

Not moved: SF-I500a stays 500; the hob; the sink's front-to-back centring on the 567 (`guess:`).

## MERIVOBOX remodel (2026-11-23)

Petr, 2026-11-23 (t835u), the decisions listed in “Deviations from Petr's original plan”, and t836u: “cabinet widths stay, but Merivobox inner width deductions … differ from the old Maximera assumption, so re-evaluate Gridfinity in WIDTH too”. Blum facts: “Drawers: Blum MERIVOBOX”. Everything below is measured from the model (`scripts/gridfinity_fit.py`, `kitchen_cabinet.runs`).

### Depths

| Run | Carcass (bay) depth old → new | Inside depth (front edge to back) | NL | Left behind the box (inside − NL − 3) |
| --- | --- | ---: | ---: | ---: |
| Island west row (SF-I500a … SF-I300) | 567 → **630** | 603 | **600** | 0 |
| Island east row (SF-E600a … SF-E700) | 586 → **530** | 503 | **500** | 0 |
| West run (SF-A250, SF-B800, SF-C850) | 600 (unchanged) | 574 | **550** | 21 |
| Dining base (SF-DN) | 450 (unchanged) | 414 | **400** | 11 |
| Tall north run (SF-T1, SF-TF, SF-T2, SF-T3, SF-T4) | 600 → **629** | 603 | **600** (drawers in T2–T4) | 0 |

- **Island: 1173 → 1180 overall** (worktop x 20.480–21.660, 2540 × 1180; west overhang 20, east 0). The west face stays at x 20.500 (west aisle 1100 front to front, unchanged); the central back moves x 21.058–21.076 → **21.121–21.139**; the east face 21.653 → **21.660** (east bays' `Pset_Links.X`). NL 550 on the east would make it 1230.
- **Tall north run: total depth 629 from the north wall** (8 back + 603 + 18 front; no handles stand proud, J grips), fronts y 15.000 → **14.971**. The fridge EA-WQ9I (716 deep, front y 14.884) now stands **87** proud of the tall fronts (was 116). Any fridge up to 629 deep would be flush.
- Tall fronts to the island's north end (cladding y 13.820): 1180 → **1151**. T1's front is still 21 north of the OP25 jamb (y 14.950).
- Island east face to the Gatta table 1434 → **1427**; to the west chairs' backs 894 → **887** (a pulled-out east drawer, 496, leaves 391; was 348).
- Island sink SN-RS1840 stays centred on the bay depth (`guess:`): Origin x 20.5635 → **20.595**; disposer and tap follow the sink (tap hole still 66 behind the bowl). Hob not moved (cut-out 50–550 behind the west front; 610 to the east edge, was 603).
- Wiring: C182's east LED strip x 21.628 → **21.635** (follows the east kickboard, x 21.592–21.610).

### Every drawer, old → new

Inside is width × depth × side height above the base. “Below front” is how far the box sits under its front's own position because the stack is too tight (see “Fronts, boxes, slides”).

| Drawer | Old (MAXIMERA-like unless noted): box h, inside, extension | New: Blum side, NL, kg | New inside | New box h, extension | Below front |
| --- | --- | --- | --- | --- | ---: |
| SF-I600a-D1, -D2 (100 fronts) | 78, 505 × 463 × 62, 482 | **M**, 600, 40 | 538 × 558 × 75 | 91, 596 | **26 / 34** |
| SF-I600a-D3 | 500, 505 × 463 × 484, 482 | **E**, 600, 70 | 538 × 558 × 176 | 192, 596 | 0 |
| SF-I500b-D1, -D2 | 78, 379 × 463 × 62, 482 | **M**, 600, 40 | 412 × 558 × 75 | 91, 596 | **26 / 34** |
| SF-I500b-D3 | 500, 379 × 463 × 484, 482 | **E**, 600, 70 | 412 × 558 × 176 | 192, 596 | 0 |
| SF-I600b-D1 (hob, 200 front) | 144, 505 × 463 × 128, 482 | **K**, 600, 40 | 538 × 558 × 113 | 129, 596 | 0 |
| SF-I600b-D2 | 78, 505 × 463 × 62, 482 | **M**, 600, 40 | 538 × 558 × 75 | 91, 596 | 8 |
| SF-I600b-D3 | 400, 505 × 463 × 384, 482 | **E**, 600, 70 | 538 × 558 × 176 | 192, 596 | 0 |
| SF-I300-D1 (pull-out, 3 shelves) | 700, 194 × 463 × 684, 482 | **E**, 600, 70 | 227 × 558 × 176 | 192, 596 | 0 |
| SF-E600a, SF-E700 D1 (main) | MERIVOBOX F 256, 547 × 508 × 240, 546 | **E**, 500, 70 | 547 × 458 × 176 | 192, 496 | 0 |
| SF-E600b, SF-E600c D1 (main) | MERIVOBOX F 256, 556 × 508 × 240, 546 | **E**, 500, 70 | 556 × 458 × 176 | 192, 496 | 0 |
| SF-E…-D1-I1 (inner M, ZI7.0M07 latch) | 90, 547 / 556 × 508 × 74 | **M**, 500, 40 | 547 / 556 × 458 × 75 | 91, 496 | — |
| SF-E…-D1-I2 (inner K) | 128, 547 / 556 × 508 × 112 | **K**, 500, 40 | 547 / 556 × 458 × 113 | 129, 496 | — |
| SF-A250-D1 (pull-out, 3 shelves) | 700, 121 × 497 × 684, 516 | **E**, 550, 70 | 154 × 508 × 176 | 192, 546 | 0 |
| SF-B800-D1 (sink, FILUR) | 211 (trimmed under the disposer), 698 × 497 × 195, 516 | **M**, 550, 70 | 731 × 508 × 75 | 91, 546 | 0 |
| SF-C850-D1 (recycling, empty) | 700, 739 × 497 × 684, 516, 3 bins | **E**, 550, 70, no bins | 772 × 508 × 176 | 192, 546 | 0 |
| SF-DN-S1…S4 D1 (main) and -I1, -I2 | MERIVOBOX K / M / K 128 / 90 / 128, 597 / 606 × 358 | **K / M / K**, 400, 40 | 597 / 606 × 358 × 113 / 75 / 113 | 129 / 91 / 129, 396 | 0 |
| SF-T2/T3/T4-D1, -D2 (400 / 410 fronts) | 290 / 300, 489 / 498 / 435 × 497 × 274 / 284, 516 | **E**, 600, 70 | 522 / 531 / 468 × 558 × 176 | 192, 596 | 0 |

### Gridfinity (width and depth)

| Drawer | Grid old → new | Slack w / d new | Changed |
| --- | --- | --- | --- |
| SF-I600a, SF-I600b D1–D3 | 12 × 11 → **12 × 13** | 33 / 11 | depth +2 rows |
| SF-I500b D1–D3 | 9 × 11 → **9 × 13** | 33 / 11 | depth +2 rows |
| SF-E…-D1-I1, -I2 (inner) | 13 × 12 → **13 × 10** | 0 or 9 / 37 | depth −2 rows |
| SF-DN all | 14 × 8 → 14 × 8 | 8 or 17 / 21 | — |

- **Width counts did not change anywhere**, but the west row's width slack grew from 0 to **33**: MERIVOBOX takes 51 off the clear width where MAXIMERA took 84, so one more column (13 in the 600s, 10 in SF-I500b) is **9 short**. Widening SF-I600a, SF-I500b and SF-I600b by 9 each (27 from SF-I300, or the run) would give 13 / 10 / 13 columns; not done (Petr: widths unchanged).
- Plates are snapped to the front (main drawers to the back of the decor front, inner drawers to the inside of their aluminium front piece); the depth slack is at the back.

### SF-B800: two IKEA FILUR 42 l at 800 (the sink base)

- IKEA FILUR bin with lid 42 l: **29 × 38 × 55 cm** (W × D × H, [IKEA](https://www.ikea.com/gb/en/p/filur-bin-with-lid-white-20193899/)), lid clamped over the bag, so it opens only with the drawer pulled out.
- MERIVOBOX M, NL 550, 70 kg: box top 224 and its 83 back pass **118 under the disposer** (EA-EVO3-W bottom z 342). Base (floor) at z 149.
- The bins stand on the base against the box sides, 290 + 151 + 290 in the 731 inside; the disposer (Ø 145, centred in the bay at a −472.5 … −327.5) is in the 151 gap: **3 mm each side**. Bin tops 699, bowl underside 710: **11 mm**. So they fit on paper, drawer closed and while sliding (the bins stay beside the disposer).
- **That is not a practical fit**: 3 mm beside a vibrating disposer, and the disposer's outlet elbow, the trap and the dishwasher hose (not modelled) sit in the same space. At a 900 cabinet the gap would be about 53 each side (`guess:`, not modelled; Petr said widths stay). Check the real FILUR (lid rim) and the disposer outlet before the woodworker fixes the layout. Blum's own sink answer, a box with a centre piece round the siphon, is listed in “Drawers: Blum MERIVOBOX”.

### Suspicious or open

- **Island west top drawers (100 fronts) get M boxes that hang 26 (D1) and 34 (D2) below their fronts' own band**: the Blum space requirement of M is 108 and the top band loses 18 to the top rail. The box base shows below the front's lower edge when the drawer is open. Alternatives: N boxes (68.5, made for about 100 fronts) at **NL 550** (N is not made in 600), or taller top fronts. Under the hob only the 100 drawer drops (8).
- Tall run drawers (400 / 410 fronts) and every E box: E is the tallest European MERIVOBOX side (192), so the tall run's drawer insides drop from 274 / 284 to **176** high; inner pull-outs (E) behind the same fronts would win the height back. Same for SF-I300 and SF-A250's “shelves”, which stand for inner pull-outs or a rack behind the front (`guess:`).
- **SF-A250 is 232 wide: below the usual MERIVOBOX range (275+); Blum's narrow-cabinet product is SPACE TWIN (KB 150–250).** The model draws an ordinary E pull-out.
- Every carcass with NL 600 / 500 is at Blum's minimum (NL + 3): a thicker front (`open:` for the woodworker) or a thicker back takes a whole NL step.
- The island is 1180, not 1199: the east carcass is the Blum minimum. If Petr wants about 20 unused behind the east boxes, the east row goes 530 → 550 and the island to 1200.
- Inner drawers: same NL and inside depth as the main box in the model (their aluminium front piece is drawn 19 thick).

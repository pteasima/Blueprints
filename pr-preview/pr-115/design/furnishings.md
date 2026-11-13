# Room 1.02 furnishings

Two documents, and they are not the same generation.

The kitchen and the living room are both in `inputs/ground_floor/furnishings.yaml`. The living-room sofa, table, television and north run came from PR #83 (`cursor/living-room-sp102-8b74`); the history below keeps that branch's sources. Placing a new piece from the wall-to-wall middle will miss the false ridge; that rule is in [obyvak.md](obyvak.md).

The wave study uses a third layout. See [acoustics.md](acoustics.md).

## Frame the kitchen was traced in

[`KitchenPlan.jpg`](../../inputs/ground_floor/KitchenPlan.jpg) (2448×1809), registered on the two “1100” door labels, not on the red handwriting.

| | |
| --- | --- |
| Scale | 0.28986 px/mm. OP25 and OP24 are 3600 mm between centres: pixel y 442.5 ↔ world y 14.40, pixel y 1486 ↔ world y 10.80. |
| West inner face | pixel x = 93 ↔ world x = 18.80. The two wall lines at pixel x = 22 and x = 93 are 71 px, about 245 mm, the 250 mm wall. |
| World from a pixel | x = 18.80 + (px − 93) / 0.28986 / 1000. y = 14.40 − (py − 442.5) / 0.28986 / 1000. Image y is down; world Y is north. |

The red mark above the island is a handwritten 1200, the island’s overall width, not a 7200 dimension. The long line at pixel y = 1719 is a DWG dimension of about 7188 mm. The island does not use it. Source: the header comments of `furnishings.yaml`.

Origin is the plan corner `[x, y]` in storey metres. Elevation is the base Z; omitted means 0. Width is local X, Depth local Y, Height up. `RefDirection` omitted means `[1, 0]`. yaml-ifc has no hinge field, so a hinge is `Pset_CabinetDoor` / `HingeSide`, L or R as you face the front. The space `SP-1.02` has no body. Clear height on the drawing is 2.50–5.05 m and is not a field. Source: the same header, and `ROOM_CLEAR_M` in `models/ground_floor.py`.

Solids are the boxes yaml-ifc writes, inset 1 mm so flush faces do not coincide. Walls are not moved to make a box fit. Source: `inputs/ground_floor/README.md`, `MESH_GAP_MM` in `models/ground_floor.py`.

## Kitchen, on main

Counter 930 mm. Tall cabinets 2450 mm, the height Petr wrote. Product cards other than the fridge, and the card “STŮL LIBRA”, are not cabinets. Since 2026-11-12 the carded appliances are modelled: the Miele oven and microwave in SF-T3, the EcoMaster disposers, the Hansgrohe taps, and the Ninja KT200EU kettle and one Eureka Mignon Libra grinder on the dining counter. Every front, drawer, door and shelf the notes describe is modelled too; see “Fronts and interiors” in [kitchen-cabinets.md](kitchen-cabinets.md). Source: `furnishings.yaml` header and KitchenPlan.jpg.

### Tall run, north wall

Backs on the north inner face y = 15.60. Fronts face south. Carcass depth 600 mm. The run is not deepened to the fridge. The soffit band, and the dining and living-area cabinets, are 450 mm. These tall cabinets stick out past that line on purpose. Source: Petr, 2026-11-06. See [obyvak.md](obyvak.md).

| Id | Width | Note on the plan | Hinge |
| --- | ---: | --- | --- |
| SF-T1 | 750 | “dvere 60L, sirka skrine az ke zdi (~75)”. From the west inner face to the fridge. | L, door 600 |
| fridge | 908 × 716 × 1876 | “naproti pruchodu (ne v rohu)”. Whirlpool WQ9I MO2L EF. Not a cabinet. | — |
| SF-T2 | 600 | “nahore dvere 60R” | R, door 600 |
| SF-T3 | 600 | The card gap. Miele DGC 7465 HCX Pro steam oven at the counter line, M 2230 SC microwave over it, in niches. | not stated |
| SF-TF | 908 | Over the fridge, 1926–2450: the fridge note's „nahore prislusenstvi od robota, ryzovar“. New 2026-11-12. | two doors |
| SF-T4 | 500 | “zbyva sirka cca 50” | not stated |

The fridge’s south face is y = 14.884, 66 mm south of OP25’s north jamb, so it stands in the line of that doorway and T1 keeps it out of the north-west corner. It projects 116 mm past the 600 mm cabinet faces. T4’s east face (x = 22.158) nicks pier W-052 (x 22.15–22.45, projecting to y = 15.35) by 8 mm. The pier is not cut out of the box.

`open:` the same T4 note allows 600 mm if a drinks fridge goes underneath. The model uses 500.

### Island

2500 × 1200, counter 930. Centred on the drawn rectangle: west 20.554, east 21.754, north 13.800, south 11.300. Split at about x = 21.15.

The island is one monoblock (`KR-ISL`, Petr 2026-11-12) with a Silestone worktop overhanging 30 past both long fronts and Silestone cladding on both ends, so at worktop level it is 2540 × 1260 (x 20.524–21.784, y 11.280–13.820). The bay boxes did not move. Structure, worktop and cladding: [kitchen-cabinets.md](kitchen-cabinets.md).

West row faces west. Modules north to south: 500, 600, 500, 600, 300. The rectangular sink is in the north 500. The 600 south of it (SF-I600a) is the knife-drawer cabinet; its drawers are in [kitchen-cabinets.md](kitchen-cabinets.md). The rectangular sink is the Teka BE LINEA RS15 18.40 X (`SN-RS1840`). The green rectangle with two circles on the second 600 (SF-I600b) is the Miele KM 8665 FL hob, not two bowls; see [kitchen-cabinets.md](kitchen-cabinets.md).

East row faces east. It is the plinth and robot-dock side. No module lines are drawn there, so the 2500 is split 600/600/600/700 from the north, the 700 at the south.

Clear of the inner faces, to the outline: west 1.754, east 8.146, north 1.800, south 1.050. Those are to the bay boxes; the worktop and cladding take 30 (west, east) and 20 (north, south) of each, so the island-to-table gap at worktop height is 1303, not 1333.

### West wall, between the two doors

OP24 is y 10.25–11.35. OP25 is y 13.85–14.95. The clear gap is 2500 mm and the run fills it with zero clearance at each jamb. The island was left where it was. Bases are 600 deep and 930 high, backs on x = 18.80, fronts east.

Facing the west wall, left is south and right is north. North to south: A 850 (250 pull-out on the south, dishwasher on the north), B 800 (bin south, compost north, one box), C 850 (sorted waste). The bases are one monoblock (`KR-WEST`); the dishwasher slot is the bay `SF-A600` with no carcass. The Silestone worktop overhangs 30 into the aisle (x 19.43), so the aisle to the island worktop is 1094. The wall cabinets are a second monoblock (`KR-WEST-H`). See [kitchen-cabinets.md](kitchen-cabinets.md).

Wall cabinets: depth 350, height 900, bottom **1560** (630 above the 930 counter), top **2460**. Petr, 2026-11-13: “I want top cabinets to start at 1560mm from floor.” (bottom 1550, top 2450 before). Their fronts are Blum AVENTOS HF lift-ups: “I want this hinge for the top cabinets.” See [kitchen-cabinets.md](kitchen-cabinets.md) “Wall cabinets: lift-up fronts”.

Bosch SBD6ECX12E, 598 × 550 × 865, centred in the north 600 of A, back on the wall, 1 mm clear of each side of the niche.

Teka BE LINEA RS15 71.40, undermount, overall 750 × 440, bowl 710 × 400 × 200, centred in the 800, rim glued under the 20 mm stone at 910 (model elevation 0.71), worktop cut-out 706 × 396 R13 (Teka). The EcoMaster EVO3 disposer and the Hansgrohe M71 tap are modelled ([kitchen-cabinets.md](kitchen-cabinets.md)).

Source for every row in this section: the header and the element `Description` fields of `furnishings.yaml`.

## Living room

Source, unless another line says so: the living-room header added to `furnishings.yaml` on `cursor/living-room-sp102-8b74` (commits `0801dd5` through `bf214ac`) and the PR #83 body. Detail part sizes that the plan does not give are in `models/living_geometry.py` on that branch, and are marked `guess:` there as “Assumed part sizes”.

The kitchen boxes stay as they are.

### North run

North inner face y = 15.60, east inner face x = 29.90. The base run is x 22.15–29.90, front y = 15.15, depth 450, so the back sits on the north face. That 450 mm is the soffit band, and the depth of these dining and living-area cabinets (Petr, 2026-11-06). y = 15.15 is the cabinet front used to find the false ridge. The 600 mm kitchen tall cabinets, further west on the same wall, stick out past it on purpose.

Piers W-052 (x 22.15–22.45) and W-053 (x 25.15–25.45) project to y = 15.35. In front of each pier the box is 300 wide and 200 deep, front flush with the 450 run. The 450 run stops at the pier and starts again on the other side. W-053’s east face is x = 25.45 and the sofa’s west face was drawn at x = 25.52, so a 70 mm piece fills that gap. Both piers are west of the sofa, so the fillers and that sliver are at the kitchen counter, 930. Behind the sofa the base was 800 high, 40 mm above the 760 back. Since 2026-11-13 it is 930 like the dining run, with an oak-veneer top. Petr:

> I want the living room part of the counter (behind sofa) to continue at the same 930 height as the dining area. It will be oak veneer, not silestone. We'll work out the details of where the two materials connect later.

It is the run `KR-LB` (an oak body to 910, a 20 mm oak-veneer top, 30 front overhang), 170 mm over the sofa back. The joint with the dining run's Silestone at x 25.52 is `open:`. Details: [kitchen-cabinets.md](kitchen-cabinets.md) “Living-room counter”.

The tall corner cabinet is the east 200 mm (x 29.70–29.90), floor to 2450, the kitchen tall height, not the 5.05 m slope. It is one armrest wide.

Oak-front wall cabinets follow the kitchen wall cabinet: depth 350, bottom 1560, height 900, top 2460 (1550 / 2450 until 2026-11-13; SF-DH moved with the kitchen wall cabinets, a reading of Petr's “top cabinets”). **That leaves 10 mm, not 20, under the 2470 soffit.** A 350 mm cabinet on the wall would enter a pier (pier face y = 15.35, cabinet front would be y = 15.25), so the wall cabinet is only the clear bay x 22.45–25.15.

The bookshelf is above the sofa, x 25.52–29.70, depth 250 (front y = 15.35, the pier face, so it does not pass the piers). Bottom **980**, 50 mm above the 930 counter, top 2450. Three shelf boards. Oak lamella on the back. **Its bottom was 850 (50 over the old 800 base); the 930 counter would have cut 80 into it, so it was raised and is 130 shorter (1600 → 1470). Petr did not ask for this.**

`guess:` bookshelf sides, top and shelves 20 mm; slats 40 wide, 20 apart, 12 thick. The branch says these thicknesses are not on the plan.

### Sofa

Livom Harvey, matching the configurator screenshot 4.38 × 3.78 × 0.76. Catalogue seats (livom.de, as cited on the branch): S4 1160×1160×395, S2 1160×860×395, S3 1460×860×395. Arm and back cushions are 300 thick. The 75.5 cm catalogue cushion is 755 mm; the screenshot says 0.76, so the model uses 760 (5 mm over the catalogue). Seat height stays 395.

The north leg is the 860-deep run, free end at the TV wall. From the east: arm, chaise 1460 along by 860 deep, 116×86, corner 116×86. The chaise is in line with the other 860-deep seats (y 13.99–14.85). The other leg is two 116×116 squares running south, then an arm.

Backs are 300 thick and 760 high, outside the seats. The two that meet at the inner corner are each 1160. The north one is the corner seat’s 1160 edge. The west one is the corner’s 860 side plus the 300 return that caps the corner. The same return closes each free end: the chaise back continues 300 past the seat so it meets the east arm, and the south-end west back continues 300 past the seat so it meets the south arm. There is no empty corner square.

Arms are the lower pieces: 300 thick, 660 high, 860 long. Each sits on the end seat, against the back. The east arm covers the whole 860 chaise depth. The south arm covers the back 860 of the 1160 end, so that seat continues 300 mm past the arm.

East-west is 300 + 1160 + 1160 + 1460 + 300 = 4380. North-south is 300 + 860 + 1160 + 1160 + 300 = 3780. The east face is x = 29.90, on the TV wall. The west face is x = 25.52. The low base (`SF-LB`) and the bookshelf (`FN-BK`) start at that same x. The 70 mm piece between pier W-053 (x = 25.45) and this face is real. Source: the living-room header of `furnishings.yaml` on `cursor/living-room-sp102-8b74` at `bc4fe87`.

### Television

The centre is the false ridge, y = 12.700. The branch states it as “centre of y 10.25–15.15, the room below the 450 cabinet”, 225 mm south of the full-room centre y = 12.925. It does not use the name “false ridge”. The identity of those two descriptions is [obyvak.md](obyvak.md). An earlier commit on the same PR (`82a6ea8`) had centred the set on the room, which is the wall-to-wall middle. Commit `bf214ac` moved it.

Visible 16:9 screen of a 100 inch set, as cited: 2214 × 1245. Overall without the stand, cited as a typical 2025/2026 set (LG 100QNED86): 2230 × 1277 × 49.9. Modelled 2230 × 1277 × 50. The panel therefore runs y 11.585–13.815. Bottom stays 650. No cabinet under it. `IfcAudioVisualAppliance` is not in the yaml-ifc pin, so the element is USERDEFINED / Television.

The east arm occupies y 13.99–14.85 and z 0–660. The panel’s north edge is y = 13.815, 175 mm south of the arm. They do not overlap in plan, so the 10 mm by which the arm rises above the TV bottom does not meet the panel.

### Table, chairs, rug, subwoofer

Gatta, Kaplan 1934. 1100 × 2400. Catalogue height 760; the plan’s figure is about 750, and the model uses 760. Long axis north-south, y 11.35–13.75. Centred in the island-to-sofa gap: island east face x = 21.754, sofa west face x = 25.52, centre x = 23.637, top x 23.087–24.187. Each side gap is 1333 mm. Lacquered natural oak.

`guess:` top 30, apron 60 high by 20 thick set in 40, legs 50 square set in 80. Stated as assumed in `living_geometry.py`, not measured off the plan.

The plan's chair card is „ŽIDLE ANCORA CELODŘEVĚNÁ“ (kaplan1934.cz). Since 2026-11-12 the six chairs (`FN-CHW1–3`, `FN-CHE1–3`) are Kaplan 1934 Ancora boxes: 540 deep (east-west) by 480 wide by 860 high, seat top 460 (`Pset_Chair.SeatHeight`). Sources: [Tauer catalogue](https://www.tauergroup.cz/files/files/94sfwgz257.pdf) (V 86, H 54, Š 48) and [amazingthings.cz](https://amazingthings.cz/zidle-ancora-celodrevena/) (seat 46). There are three on each long side, centres 400 / 1200 / 2000 along the 2400 (unchanged), front edge on the table edge. Backs face away from the table. Lacquered oak („Urcite lakovanej stul i zidle“).

**Changed 2026-11-12:**
- The chairs were 500 × 450 × 800 with the seat at 450.
- West Origins moved x 22.587 → 22.547 and y 11.525 / 12.325 / 13.125 → 11.51 / 12.31 / 13.11. East Origins moved y the same way; x stays 24.187.
- The centres did not move.

The child's high chair `FN-CHN` follows „v cele u kavovaru detska zidlicka, v cele u okna nic“ (a child's chair at the head by the coffee machine, nothing at the window end). It stands at the north end, back to the north, Origin [23.407, 13.75]. No model is named, so it is a generic 460 × 490 × 790 with the seat at 600: `guess:`.

`guess:` chair legs 40 square, seat board 36, back board 20. Same “assumed” note. The Ancora's real shape (curved back, no apron) is not modelled; only its box and seat height.

### Table note on KitchenPlan.jpg (black card “STŮL LIBRA”)

**The card says “STŮL LIBRA” (kaplan1934.cz), and its note says the table should be 120 × 240, extending to 340. The model has the Gatta, 1100 × 2400, not extending. The table was not changed (`open:`).** The Tauer catalogue shows the Libra extending with two 50 cm leaves, which matches 240 → 340.

The note in full:

> Ten divnostul ve studii je blbost. Spravne je: 120x240, s prodlouzenim na 340. / 6 zidli (3 a 3), v cele u kavovaru detska zidlicka, v cele u okna nic. / Stul zarovnan s ostrovem a gaucem. Velkej prostor u kavovaru je dobre. Pristupnost stolu u okna kde se chodi kolem (napr. na odlozeni veci co se nemaj zapomenout nekam vzit) je taky dobre. / Az nebude detska zidlicka, nahradi ji normalni zidle, tedy celkem vzdy 7 zidli (5 domacich + nejcastejsi navsteva jsou 2 lidi). / Pri vetsi navsteve bud brat zidle zvenku, nebo naky levny stohovatelny/skladaci zidle. Skladaci by sly davat za gauc, jinak asi do skrine v chodbe. / Porad mi prijde skoda takovej velkej stul natirat na bilo, chtel bych videt v modelu variantu s drevem v barve drevenyho nabytku. At je klidne co nejvic nenapadnej, ale at pusobi prijemne zblizka kdyz se u nej sedi, coz podle me bilej lak nesplnuje. / Urcite lakovanej stul i zidle. Olej by byl fajn, ale vzhledem k cene se Zuzka po prvni skvrne pude zabit. / Tydle predrazeny zidle sem tam dal, protoze sem v ni sedel, a je super. A stul protoze patri k tydle zidli. Muzem hledat levnejsi variantu a jinej design, ale je potreba zacit od zidli. 50% zidli vyloucim hned podle obrazku, dalsich 30% az si sednu. / Pokud mozno, at dou vnirni zidle pouzit venku, a venkovni zase vevnitr (mozna nak podlepit nohy proti poskrabani?). Mame velkej rozdil v poctu lidi pri beznym provozu a pri navsteve, tak at se nemusi furt zidle vyndavat a uklizet, ale taky at nejsou stoly trvale prervany zbytecnejma zidlema.

Translation:

> That odd table in the study is nonsense. Correct is: 120 × 240, extending to 340. / 6 chairs (3 and 3), a child's chair at the head by the coffee machine, nothing at the window head. / Table aligned with the island and the sofa. The big space by the coffee machine is good. Access to the table at the window, where people walk past (e.g. to put down things that must not be forgotten), is good too. / When there is no child's chair, a normal chair replaces it, so always 7 chairs in total (5 at home + the most frequent visit is 2 people). / For a bigger visit, either bring chairs in from outside, or some cheap stacking/folding chairs. Folding ones could go behind the sofa, otherwise probably in the hall wardrobe. / I still find it a pity to paint such a big table white; I'd like to see a variant in the model with wood in the colour of the wooden furniture. It can be as unobtrusive as possible, but it should feel pleasant up close when you sit at it, which white lacquer does not, in my view. / Definitely a lacquered table and chairs. Oil would be nice, but given the price Zuzka will kill herself after the first stain. / I put these overpriced chairs here because I sat in one and it's great. And the table because it belongs with this chair. We can look for a cheaper variant and another design, but we need to start from the chairs. I'll rule out 50% of chairs from the picture straight away, another 30% once I sit on them. / If possible, indoor chairs should be usable outside and outdoor ones inside (maybe pad the legs against scratching?). We have a big difference in the number of people in normal use and with visitors, so chairs shouldn't have to be taken out and put away all the time, but the tables shouldn't be permanently cluttered with surplus chairs either.

What was modelled from it, and what is still open:
- Modelled: the 3 + 3 chairs and the child's chair at the coffee-machine end, with nothing at the window end. Both table and chairs are lacquered.
- `open:` the table type and size. Libra 1200 × 2400 extending to 3400 against the modelled Gatta 1100 × 2400.
- `open:` „Stul zarovnan s ostrovem a gaucem“, the table aligned with the island and the sofa. The Gatta is centred between them (1333 each side). If it meant end-aligned, that is a move.
- `open:` the wood-coloured table variant Petr wants to see. The Gatta is already natural oak in the model, and white was never modelled. Nothing changed.
- `open:` folding or stacking chairs for visits, and the 7th chair once the child's chair goes.

The right edge of KitchenPlan.jpg has a note cut off by the image edge: „podle studie je behoun/koberec umistenej tak ze stolky ke gauci s[tojí] napul na koberci napul na podlaze. Kejvaly by se.“ It says: per the study, the runner/rug is placed so that the sofa side tables stand half on the rug and half on the floor; they would wobble. The text past the image edge could not be read. `open:` the side tables are not in the model, and the rug was not moved.

Rug 2800 × 3780 × 10, x 26.65–29.45, y 11.37–15.15. Furniture is not lifted, so the rug and the seats overlap by the rug thickness.

`guess:` the subwoofer has no catalogue size on the plan. The branch uses a 350 mm cube, 300 mm clear of the east wall and of the cabinet front (east face x = 29.60, north face y = 14.85). That cube sits inside the east seat. The plan’s red dot is in that corner. The branch flags the clash and does not move either piece.

## What not to copy from the other layout

**open:** PR #83 keeps the island, the fridge and a dining table. The wave study deletes all three and uses a 4.0 × 4.0 m sofa. Which room is current is not settled. Sources: `furnishings.yaml` on main, the PR #83 header, and the furniture comment in `src/blueprints/acoustics/roomwave/geometry.py`.

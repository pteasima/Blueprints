# Fixture plan notes

Source: Petr's `FixturePlan.pdf` (the hand-marked floor-plan screenshot) and the cable-code column of `CableSchedule.xlsx`, sheet Soupis. The permit electrical drawings are not a source.

The PDF text is written without diacritics. Each note is the original wording, then English. Notes that do not place a device in room 1.11 are kept because they are the general rules.

## Symbol legend (the plan)

Original, as written next to the symbols:

| Symbol on the plan | Original | English |
| --- | --- | --- |
| Yellow bulb, `D100` | Stropní svítidlo 24V Dual White D100 15W IP54 (product card) | 24 V dual-white ceiling light, 100 mm, 15 W |
| Yellow bulb, `LP 170R` | LED panel 24V Dual White LP170R 12W | 24 V dual-white LED panel, 12 W |
| Yellow bulb, `LP 120R` | (same family, smaller panel) | 24 V dual-white LED panel, smaller |
| Yellow bulb, `D600` / `D800` | K světlům D600 a D800 přivést vždy 2 kabely (nebo jeden 8žilový, pokud existuje) | For the D600 and D800 lights, always bring two cables, or one 8-core cable if it exists |
| Red square | SCHUKO socket, Safety Plus, duroplastic, white, LS 1520 KI WW | Power socket |
| Blue rounded square | 1-gang multi push-button (insert), 1-pole, 2-way | One momentary button |
| Blue square labelled `532-4U` | na několika místech jsou dvojvypínače (označené 532-4U) | A double button, where the plan says 532-4U |
| Blue radar | Radary budou různé, 24 GHz nebo 60 GHz, toto je jen příklad. Komunikace přes UART. | mmWave presence radar. The picture is an example. UART |
| Green wifi | Access Point U7 Pro | Ceiling access point |
| Blue horseshoe | Senzor otevření dveří/okna | Door or window contact |
| Blue up/down arrows | Žaluzie | Blind. The motor wiring diagram is on the plan |
| Yellow bulb, `Out-door` | Světla v exteriéru nemusí být CCT, tedy stačí 2žilový kabel a 1 gpio pin na stmívání. Počítám s 50 W na světlo. | Exterior lights need not be CCT: a 2-core cable and one dimming pin. About 50 W each |
| `lamp` at an exterior wall | Zakončení kabelu ve zdi, v budoucnu bude dokoupena jakákoli E27 nástěnná lampa a osazena E27 dual white žárovkou. Do lampy vždy povede i UTP kabel. | The cable ends in the wall. An E27 wall lamp is bought later. A UTP cable is brought to the lamp as well |

Finish, original:

> Nebude-li uvedeno jinak, všechny rámečky, zásuvky i vypínače budou v bílé matné barvě (kód WWM). Krytky budou obyčejné bez popisků, světýlek apod., tedy LS 990 WWM.

English: Unless noted, frames, sockets, and buttons are matt white, Jung code WWM, plain LS 990 covers, no labels and no indicator lamps.

**Obsolete colour (Petr, 2026-11-12):** "sorry, gloss white jung electrical fixture, the matt white note is obsolete". Frames, sockets and buttons are Jung LS alpine white gloss (code WW: socket LS 1520 KI WW, covers LS 990 WW), not WWM. The rest of the note still applies: plain covers, no labels, no indicator lamps. The quote above is the plan's original wording. Material: `jung-ls-alpine-white-gloss` in [docs/materials/README.md](../materials/README.md).

## Cable codes (Soupis)

These letters are the device column of the cable schedule, not printed as a block on the PDF.

| Code | Original | English |
| --- | --- | --- |
| V | Vypínač (Jung multi-button) | Wall button |
| 2V | dvojvypínač (Jung 532-4U) | Double button |
| M | magnetický senzor otevření dveří/okna | Door or window contact |
| R | mmwave radar | mmWave presence |
| S | Světlo | Light |
| W | WIFI | Access point |
| E | Ethernet (RJ45 zásuvka) | Data socket |
| B | žaluzie | Blind |
| C | Kamera (UniFi PoE) | PoE camera |
| O | vyhřívaný okap | Heated gutter |

`A` is used on a few rows of the schedule and has no legend line in that column.

## Indoor lights are CCT on 4-core cable

Source: Petr, Cody chat, 2026-11-11: "Surely there's no indoor light on a 2 core cable, all indoor lights are CCT and have 4 core cables (two cores used for V+, one for cool white, one for warm white)."

Every indoor light is a 24 V CCT (dual-white) light on a 4-core cable: two cores for V+, one for cool white, one for warm white. The 2-core rule above is for exterior lights only.

The Soupis row for cable 12 (room 1.11, `S`, `CYKY 2x1.5`, 16 m) contradicts this and is wrong. `C12-S` in `inputs/ground_floor/bedroom-1.11.yaml` is a 4-core CCT light. Its stored `CableSpec` is `CYKY 4x2.5`. The core count is Petr's (Cody chat, 2026-11-11). The 2.5 mm² cross-section is Petr's (Cody chat, 2026-11-12: "C12 is 2.5mm").

Other light rows in Soupis with a 2-core cable. Soupis labels an outdoor cable with the room of its wall penetration (note on cable 66), so some of these are exterior lights. None is modelled in IFC yet. Check each one before it is modelled:

| Cable | Room | Spec | Soupis note |
| --- | --- | --- | --- |
| 25, 26 | 1.10 | CYKY 2x1.5 | |
| 139 | 1.03 | CYKY 2x1.5 | |
| 156 | 1.22 | CYKY 2x1.5 | |
| 152 | 1.16 | CYKY 2x2.5 | (40 is connected to 152) |
| 154 | 1.22 | CYKY 2x2.5 | (155 is connected to 154) |
| 140 | 1.12 | CYKY 2x2.5 | to the attic, out above the wall plate (141, 142 connected) |
| 143 | 1.15 | CYKY 2x2.5 | to the attic, out above the wall plate (144, 145 connected) |
| 159 | 1.22 | CYKY 2x2.5 | outside under the insulation or through the attic (160 connected) |

## Heights and distances

Original, the yellow note under Poznámky:

> TODO: Není-li uvedeno jinak, zásuvky ve výšce _ a vypínače ve výšce _, obojí odsazené _ od přilehlého rohu/dveří/nábytku apod.

English: TODO. Unless noted otherwise, sockets at height `_` and buttons at height `_`, both set off `_` from the nearest corner, door, or furniture.

The three underscores are empty on the plan. No corner distance and no mounting height is given there. One local exception, original, on the living-room TV note:

> Výška může být jako okolní zásuvky (cca 110, potvrdím).

English: The height can match the nearby sockets, about 110 mm, to be confirmed. That sentence is on the TV, not on room 1.11.

Other height notes that do name a number:

| Original | English |
| --- | --- |
| U7 Pro na SDK ve výšce 2.5 m | One access point is noted at 2.5 m. The bedroom note says "na stropě" |
| Podhled 200 mm nebo více / 30 mm nebo 45 mm / 20 mm nebo 35 mm (ještě potvrdím kolik) | Suspended-ceiling zones. The thickness is still to be confirmed. Room 1.11 is not named on these three |
| K světlům D600 a D800 … mezi světlo a strop … ohebný profil s LED páskem | An LED tape in a flexible profile between a D600 or D800 and the ceiling, switched separately |

## House defaults

Petr filled the three blank underscores, as house-wide centres in millimetres. The 1.11 plan uses these. Exceptions come later, room by room.

| What | Centre |
| --- | --- |
| First socket | 300 |
| Next module | one Jung LS 990 pitch above the one below. The pitch is 71 mm: a 1-gang frame is 81 mm and each added gang adds 71 mm (2-gang 152, 3-gang 223) |
| Two sockets, then ethernet | centres 300, 371, and 442 |
| First button | 1350 |
| Next button | stacked above the one below, 71 mm |
| Sockets above a counter (kitchen, bathroom, laundry) | 1400 |

Along the wall: 150 mm from a door edge, or from an outer corner when the device is indoors. 300 mm from an inner corner, or from an outer corner when the device is outdoors.

At one wall position the plates share x and y. Power is the lowest, starting at 300. Ethernet is right above it. Switches are a separate stack, starting at 1350.

Routing, for later wiring, not drawn here: 24 V and ethernet go up through ceilings, soffits, and attics, with rare exceptions. All 230 V runs in the floors.

## Rules used for the 1.11 plan

The drawing cites the short name.

| Short name | Rule |
| --- | --- |
| `300` | First socket centre. |
| `371` | Second socket, one 71 mm pitch above. |
| `442` | Ethernet, two pitches above the first socket. |
| `1350` | First button centre. |
| `1350+71` | Next button, one pitch above. |
| `in box` | The mmWave has no position of its own. It sits in the named switch box. |
| `frame` | A contact is in the window or door frame, at the jamb. |
| `facade` | A blind motor is outside, on the outer face, beside the window. The cloth is not drawn. |
| `ceiling` | A light or the access point, in the room, off the wall. |
| `bed-edge` | The LED strip follows the unfinished bed outline. |
| `rail-up` | The LED strip runs the garnýž L along the west and south walls, on top of the rail, shining up. |
| `rail-down` | The same L, under the rail, shining down. |
| `unused` | The fixture is parked. It is not wired, not on a panel, and not counted. |
| `corridor` | The hallway button is on the other face of the bedroom door. |

## Room 1.11, as answered

Cable 12 is the 120 W pendant above the bed, a 4-core CCT light on `CYKY 4x2.5` (see Indoor lights are CCT on 4-core cable). Cable 3 is the LED strip on the foot and the two long sides of the bed, not the headboard. Cable 32 is the contact and the two switches of OP09. Cable 16 stays the blind for the narrow west window. Cable 6 and cable 11 are off the plan for now. The bed is 2000 mm by 1800 mm with the headboard on the east wall. Each bedside stack is a socket at 750, a switch at 821, and a lamp at 892. C7 and C8 are the two curtain-rail (garnýž) strips. Each is one continuous L along the west and the south wall: from 50 mm past the north jamb of OP01 to the south-west corner, then to 50 mm past the east jamb of OP05. One shines up from the top of the garnýž, the other down from under it (Petr, Cody chat, 2026-11-12: "Theyre continuous west and south, but one is shining upward, other one downward (from the garnyz)"; this replaces the earlier "one west, other one south"). Which cable is the uplight was not stated; the model assumes C7 up and C8 down. The access point is on the 2.50 m ceiling at x=1.100, y=8.725. The bedroom outline is the L in `rooms/1.11-geometry.md`, 22.98 m².

Power sockets have no cable number and no circuit. They are positions only. The two outdoor lamps stay where they were and are marked UNUSED. The west lamp's cable number is still a TODO.

The bed is 2000×1800 with the headboard on the east wall. Cable 3 runs the foot and the two long sides.

The room table's 22.98 m² is the area to follow. The wall model closes 15.43 m². The drawing extends the room north to W-018 and hatches the part the model does not close. That rectangle is 20.54 m². The other 2.44 m² is not drawn.

## Other notes that bound the work

Original:

> Netahej silnoproud a slaboproud dohromady. Není-li důvod jinak: silnoproud spodem, slaboproud horem.

English: Do not run power and data together. Power below, data above, unless there is a reason.

Original:

> U vypínačů záleží na tom, do kterého rozvaděče jsou zapojeny (aby alespoň světla a žaluzie řízené ze stejného rozvaděče zaručeně fungovaly). U mmWave radarů a magnetů je to jedno, lze je zapojit do nejbližšího, netřeba dodržet co jsem nakreslil. U venkovních vypínačů a světel na tom taky tolik nezáleží.

English: Buttons must stay on the panel that feeds their lights and blinds. Radars and contacts may move to the nearest panel. Outdoor buttons and lights are less strict.

Original:

> Vestavné skříně budou dodělány později. … ovlivní odsazení rozvodnic od boční stěny.

English: Built-in cupboards come later and will change how far a board sits from the side wall. Room 1.11 has no cupboard in the model.

Original:

> Povoluje česká norma německé SCHUKO bez kolíku?

English: Does the Czech code allow a German SCHUKO socket without the earth pin? Unanswered on the plan.

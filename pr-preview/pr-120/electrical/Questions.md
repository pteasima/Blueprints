# Open questions

## All rooms except 1.11 (2026-11-19)

Raised while placing every fixture from FixturePlan.pdf and the Soupis sheet. Each item names the fixture id; the room pages in [rooms/](rooms/) carry the same question next to the fixture, and the YAML has it as `Pset_YamlIfc.Question`. Fix positions in edit mode ([EditMode.md](EditMode.md)).

1. Blinds: the plan marks every blind cable 4(…) (CYKY 3x1.5, the gutter cable), Soupis says CYKY 4x1.5. The YAML stores the Soupis spec. Which is right?
2. Model gaps: the model has no wall on the 1.01 west pier between OP32 and OP33 (y 9.65–10.25) and none on the corridor east side between W-051 and the OP24 jamb (y 9.65–10.25). C90-V and C87-V sit at the plan dots there and float in the model.
3. Cable 15: Soupis says the 400 W garage lights (1.16, CYKY 4x6, into a box); the plan has no garage light and instead marks 2(015) on a bedroom north-band light. C15-S is listed in 1.16 with no position. Where is the garage box, and which cable feeds the bedroom north-band lights (2(015), 2(016))?
4. No position on the plan: C191–C194 (pergola, future), C200-V and C201-E (1.02, added 3.4.2026), C164 (Topas 8 Modbus link, garden). They are in the table without a body; place them with edit mode later or tell me where.
5. 1.15 desk and bed drives (gear symbols, "přes ethernet") have no cable rows, so they are not modelled. Do they need their own data outlets?
6. Plan notes that are not fixtures yet: a socket at every distribution board (none drawn by panels 1–4), the 400 V EV-charging and spray-plaster socket in the garage (todo), "indukce 3" in the kitchen, the hood power in the shelf (C183 note), and "2x sekční garážová vrata možná potřebují zásuvku". Should any of these become sockets now?
7. Bedroom items still parked (not changed by this work): C6 (outdoor 532-4U at the south-west corner), C11 (entry light), the two north-band LP170R lights, the west facade lamp (plan 5(012), but C12 is the pendant), and the south-west outdoor socket.
8. **1.01** `Q133-S`: 1.01 lights are marked 2(132) and 2(133). Soupis 132 is the 1.20 V,M,R cable and 133 the 1.08 gutter; Soupis has no light row for 1.01. Which cables?
9. **1.01** `Q92-V`: Button by the 1.01→1.17 door is marked 1(092); Soupis 92 is the 1.14 blind. Which cable?
10. **1.01** `NC-1.01-A`: Key symbols at the entrance (OP39a), the 1.01→1.17 door and the garzonka door have no cable. Door locks fed from the Aliro boxes? Remove them if not fixtures.
11. **1.02** `C182-S`: C182 island strips: plinth (0.10 m) or under the worktop overhang?
12. **1.02** `C183-S`: C183 panel in the shelf over the hood: what height is the shelf?
13. **1.02** `C186-S`: C186 strip follows a drawn outline from the north wall round to x 29.1 (sofa?). Floor level assumed.
14. **1.02** `NC-1.02-S`: 1.02 "Panel 200x2500" by the north wall has no cable mark. Which cable?
15. **1.03** `C59-R`: Pantry radar is marked 1(061); Soupis 61 is the 1.12 blind and the R is on cable 59 (V,M,R). Modelled as C59-R on the ceiling.
16. **1.05** `Q64-S`: Corridor-east lights marked 2(064) and 2(065): Soupis 64 and 65 are 1.03 pantry lights (also marked 2(064)/2(065) there). Which cables feed these two?
17. **1.05** `Q66-R`: Corridor-east radar marked 1(066): Soupis 66 is the 1.13 blind (marked 4(66) there). Which cable?
18. **1.06** `C198-S-1`: C198 outdoor-kitchen panels: Soupis room is 1.06 (WC), the panels are in the outdoor kitchen; ceiling height unknown (2.50 used).
19. **1.06** `C196-M`: C196-M contact in the outdoor kitchen (plan dot at the east corner, x 19.02, y 7.66): there is no door or window there. What does it sense?
20. **1.07** `NC-1.07-S`: 1.07 U-shaped LED strip around the vanity pre-wall has no cable (red note "LED pásek do přizdívky? todo"). Is it wanted, and on which cable? Height 1.10 is a guess.
21. **1.09** `C129-S`: C129 strip along x 4.84 m (9.66 to 12.00): drawn as a line across 1.09. Modelled on the ceiling (2.47 m). Is it a ceiling cove, a mirror light, or in the pre-wall?
22. **1.09** `Q130-S`: North facade lamp above 1.08/1.09 is marked 5(130). Soupis 130 is the 1.23 blind (also marked 4(130) by 1.23). Which cable feeds this lamp?
23. **1.10** `C24-V`: Cable 24: Soupis says V (single button), the plan draws an outdoor 532-4U (double). Modelled as a double.
24. **1.10** `C17-M`: Door contact for the OP03 double pocket door: placed at the head, centre of the opening, where the two leaves meet. Where should the reed go on a pocket door?
25. **1.12** `C34-S`: C34/C75/C76 L strips in 1.12–1.14 follow the drawn bed outline. Floor level (under the bed) assumed — or are they something else?
26. **1.12** `C141-S`: C141 is the bedroom south-facade lamp (LAMP-X-S, parked in the bedroom work). The plan marks it 7(141); I placed it as C141-S. Delete in edit mode if it should stay parked.
27. **1.15** `NC-1.15-S`: 1.15 has a strip drawn around the bed outline with no cable number. Is it a fixture, and on which cable?
28. **1.15** `NC-1.15-V`: Unlabelled button by the 1.15 desk: which cable, and is it on the desk?
29. **1.15** `C83-M`: 1.15 contacts C83 and C84 sit in the room near the west wall with no door or window there. What do they sense (furniture doors?)
30. **1.15** `C86-E`: C86 ethernet and its socket by the 1.15 window: the wall there is full-height glazing, so they are modelled as a floor box. Right?
31. **1.16** `C128-2V`: Cable 128 (garage) is V,2V; the plan draws one button. The 2V is stacked above as a guess.
32. **1.17** `C107-2V`: Cable 107 (1.17) is V,2V,M but the plan draws one button. The 2V is stacked above C107-V as a guess.
33. **1.19** `NC-1.19-R`: 1.19 WC: a radar is drawn by the switch but cable 93 is V,M. Add R to 93?
34. **1.22** `C115-S`: 1.22 light mark reads only "2(" — assumed cable 115 (Soupis 1.22 S, 4x1.5).
35. **1.23** `Q125-S`: Kitchenette strip in 1.23 is marked 2(125); Soupis 125 is the 1.09 gutter. Which cable? (Height 1.50 under the cabinets assumed.)
36. **1.23** `C122-M`: 1.23: the plan draws a window contact on cable 122, but Soupis 122 is V,V (no M).

## Room 1.11

Nothing in the latest review is unresolved. Cable 6 and cable 11 stay off the plan until they are added back. The bedroom header called the green plan mark panel(cable); it is cabletype(cable) (see PlanNotes.md). Only that comment changed.

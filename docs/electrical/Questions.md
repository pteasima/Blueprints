# Questions for Petr — room 1.11

The 2D plan is a reading of the sketch. These are the points that change a device if the answer differs. Heights and the corner offset are blank on the plan (`zásuvky ve výšce _`, `vypínače ve výšce _`, `odsazené _`), so none of those distances was filled in.

1. What are the three missing numbers, in millimetres: socket height, button height, and the set-off from a corner, door, or cupboard? Until those exist, every wall device is on the wall face at the sketch's place along the wall, and the label cites `face` or `stack`.

2. In a stack (button, power socket, data socket), what is the order from top to bottom? The plan only says they share one place. Power is supposed to run below data (`silnoproud spodem, slaboproud horem`). Is that the order of the plates too?

3. The red SCHUKO marks have no row in the cable schedule. They are drawn as `1.11-Z1` (north cluster), `1.11-Z2` (upper east), `1.11-Z3` (lower east), and `1.11-XZ1` (southwest, outside). Which cable feeds each, or are they outside this schedule?

4. Cable 12 is the only 2-core light (CYKY 2×1.5) and is drawn on the pendant, because that bulb is marked `?`. A west outdoor lamp also reads as something like `(012)`, and the note says an exterior lamp gets a 2-core cable plus a UTP. Which device is cable 12?

5. Cable 3 is written in the same east cluster as lamp 5, and the plan shows one bulb there. `C3-S` / `1.11-L4` is a second ceiling light 0.45 m from `C5-S`. Is it a separate light, or the same one?

6. Cable 6 is one single button and one double (532-4U), drawn as one plate outside the southwest corner. `C6-V` is in that same stack and has no mark of its own. Is the single button there, or somewhere else?

7. Cable 32 is shared with room 1.05, 2 m long, devices V, V, and M, and no `(032)` mark was readable. The contact and one button are at the northwest corner; the second button is on the corridor side. The wall model has no door in 1.11. Where is the door, and which device is on which side?

8. There are three blind motors and two windows (west OP01, south OP05). `C46-B` is on the south facade just west of the south window. `C18-B` is on the west facade just north of the west window. `C16-B` is further north on the west facade, and no opening was found for it. Which opening does 16 belong to?

9. Two outdoor lamps sit on the 1.11 facades: one on the west face at the southwest (`1.11-XL1`, stacked with the outdoor buttons) and one on the south face west of the window (`1.11-XL2`). A third outdoor lamp on the sheet falls east of the room, toward 1.12, and is not drawn here. Which cables, and is `1.11-XL2` really a second lamp?

10. The clear bay of the wall model is 3.300 × 4.675 m, 15.43 m². The room table lists 22.98 m². Which outline is the room?

11. The north wall of 1.11 is not in the wall model: W-013 starts at the partition. The plan draws it dashed, 250 mm thick, the same as W-013. Is that the wall, and is 250 mm right?

12. The access point note says `U7 Pro na stropě`, and the sticker sits on the corridor side of the line. The plan puts `C14-W` inside 1.11, on the ceiling. Is that where it goes?

13. The mmWave icon is drawn at the south window, next to the contact. The plan puts it inside the room, just north of that window, not in the frame. Is it a ceiling sensor there, or does it share the frame with the contact?

14. Ids. The model still uses `C<cable>-<letter>`. The other column is `<room>-<type><n>`, with `X` for an exterior device (`1.11-XL1`) and the cable number only as a property. Which one should the next edit use?

15. The bed rectangle is traced from the floor-plan screenshot. It is not a solid in the model, and `furnishings.yaml` has no bedroom furniture. Should the plan keep that outline, or drop it until the furniture is modelled?

# Remembered visibility, the Enclosure group and locks

Source: Petr, 2026-11-19 (Cody chat, after the visibility plan):

- "proceed on remembering state locally (doesn't get reflected in URL, as that would be super verbose)"
- "add an "enclosure" group (or whatever you would call it) that includes, walls, windows, doors"
- "I also envision a lock feature where I can e.g. lock the enclosure group from being hidden. Im not sure how the UI would look, suggest something. For now, my usecase would be locking enclosure group and leaving it so forever, but make this generic if you can."

Code: `src/blueprints/viewer/visibilityState.js` (pure, tested in `visibilityState.test.mjs`), wired in `main.js`, `ifcHide.js` and `ifcInspector.js`.

## Remembered state

The viewer keeps one `localStorage` entry per model, `blueprints.visibility.<model>`, on that device and browser:

- every Parts leaf's opacity (cables and on-demand layers such as Gridfinity included), the leaves detached from their group slider, and the group sliders' last values;
- the locks;
- the IFC inspector's hides ("Hide", "Hide all others");
- the room isolate ([RoomIsolate.md](RoomIsolate.md)).

It is written a moment after each change and on page hide, and put back when the model loads. Nothing goes into the URL. An explicit `?cables=1` / `?cables=0` / `?gridfinity=1` still wins on load, and `?scene=` still applies its scene on top. A different viewer version that changes the shape bumps `v` and the old entry is ignored.

**Reset visibility** (button at the bottom of Parts) clears the entry and restores the defaults: every part on, cables and Gridfinity off, no inspector hides, no room isolate, and only the model's default locks.

## Enclosure

`ground_floor`'s first Parts group, formerly "Shell", is now **Enclosure** (cs "Obálka"): masonry (walls), glazing (windows) and doors (`models/ground_floor.py` `part_groups`). Its slider toggles all three; each leaf keeps its own slider. Other models keep their "Shell".

Enclosure is **locked by default** (`"locked": true` on the group in `ground_floor.parts.json`), since Petr's use is to lock it and leave it. Reset brings that lock back. Unlock it with its padlock to hide walls.

## Locks

**UI.** Every Parts row (group or leaf) ends in a padlock button, 44 pt square, at the right edge:

- open padlock, faint grey: unlocked; tap to lock;
- closed padlock, accent blue: locked by this row; tap to unlock;
- closed padlock, dimmed blue: locked because its group is locked; inert (unlock the group).

A locked row's slider is dimmed and does not respond. In the IFC inspector, a locked row shows a 🔒 at its right; the row's long-press menu has **Lock** / **Unlock**, so any spatial row, IfcGroup or element can be locked too (stored as `ifc:<GlobalId>`). An inspector lock covers the element, everything contained in or aggregated under it, and the members of a locked IfcGroup.

Why a padlock per row: it is the familiar layer-lock from CAD and design tools (AutoCAD, Figma, Illustrator), it sits where the eye already is (the row being protected), it needs no extra mode or screen, and the three states read at a glance. A separate "locked items" list was considered and rejected: one more place to look for a feature Petr sets once.

**Meaning.** A lock freezes visibility. A locked item keeps the opacity it had when locked, and nothing else changes it: not its group's slider, not a scene, not Iso/Front/Side/Top, not the inspector's Hide or Hide all others, not room isolate. Its own slider is disabled until it is unlocked. Only Reset overrides locks (it puts the defaults back). Locks persist with the rest of the state.

Implementation: a locked Parts leaf is skipped by `setPartOpacity` (unless `force`), `setGroupOpacity`, Sync and the built-in views. `ifcHide.createVisibility` takes `isLocked` and never adds a locked element; `applyInspectorVisibility` also keeps any element with a mesh on a locked leaf drawn, so a lock taken after a hide brings it back.

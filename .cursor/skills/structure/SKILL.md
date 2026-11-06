---
name: structure
description: >-
  Use when a prompt asks for structural reasoning (roofs, framing,
  load-bearing or stacked assemblies).
---

# Structure

The risk is parts floating in mid-air, or making no physical sense. This came from a gable roof where agents produced physically impossible models. It does not apply to surface finishes (tiling, cladding, furniture placement).

These are **building assemblies**, not decorative meshes. Before coding solids, reason as a house designer / structural engineer / contractor:

- Every layer needs a real thickness, a load path or attachment, and a reason to exist (structure, weather, vapour, acoustics, finish, tolerance).
- Do not invent geometry that cannot be built, hang, or drain. If a detail is load-bearing, say what carries it (rafters, hangers, masonry) and what must *not* carry it (e.g. furniture under a self-supporting soffit).
- Acoustic faces (e.g. NaturHeld + StoSilent on šikminy) are continuous room-facing layers with stated thickness — not paint on a zero-thickness shell.
- When transferring from a řez/detail sheet: if clearances, hangers, vapour order, or bearing are inconsistent, **push back** and say what must change in the structure before modelling. If the sheet is coherent, transfer the stack and tweak later.
- Prefer labelled solids that match contractor language (`NaturHeld 140`,
  `cd`, `zaves`, `paska`, `sdk`, `vata`, `krov`)
  over anonymous blobs. On šikminy: no slope latě and no NaturHeld Flex; CD ⊥ krokvím;
  hangers CD→krokve; pásky on rafter faces. Roofing latě stay above the rafters.
  Keep `krov` separate from the ceiling steel.
  Soffit bay: 40 mm NaturHeld on the side face, plain GKB on the underside. The lid
  sits on the wall plate and widens until the slope GKF, cut level, lands on it.
  That joint is floating (no angle, no UD). The kastlík CD/UD rost hangs from the
  lid CD and braces to the eave wall — not from furniture or the wall plate.
  Facts: `docs/design/obyvak.md`.

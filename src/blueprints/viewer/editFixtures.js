/**
 * Fixture binding, placement edits, selection, and duplicate/delete/revert.
 * Structural split from editMode.js; behavior is unchanged.
 */
import * as THREE from "three";
import {
  addElementFrom,
  facingOf,
  nextFixtureId,
  pruneAbsorbed,
} from "./fixtureEdits.js";
import { pruneCables } from "./cableEdits.js";
import { cssEscape, FRAME_WALL_M, WALL_SNAP_MAX_M } from "./editModeUtils.js";

/**
 * @param {object} em edit-mode session bag shared with createEditMode and the other attach* modules
 */
export function attachEditFixtures(em) {
  const ctx = em.ctx;
  const canvas = em.canvas;
  const controls = em.controls;
  const t = em.t;

  // --- model binding ---
  function meshesOf(id) {
    if (em.addedMeshes.has(id)) return em.addedMeshes.get(id);
    const element = em.elementsById.get(id);
    return element ? ctx.meshesForElement(element) : [];
  }

  /** Meshes to draw for a row; an in-box sensor shows its host switch. */
  function displayMeshes(id) {
    const own = meshesOf(id);
    if (own.length) return own;
    const row = em.rowsById.get(id);
    return row?.hostId ? meshesOf(row.hostId) : [];
  }

  function bind() {
    if (em.bound || !ctx.getRoot()) return;
    em.bound = true;
    for (const row of em.rows) {
      const meshes = meshesOf(row.id);
      for (const mesh of meshes) em.meshBase.set(mesh, mesh.position.clone());
      if (row.placement) em.deployedBase.set(row.id, row.placement.origin.slice());
      else if (meshes.length) {
        const box = em.worldBox(meshes);
        em.deployedBase.set(row.id, box.isEmpty() ? null : em.worldToHouse(box.getCenter(new THREE.Vector3())));
      } else em.deployedBase.set(row.id, null);
    }
    const deployed = new Map();
    for (const row of em.rows) {
      deployed.set(row.id, { base: em.deployedBase.get(row.id), props: row.props, exists: true });
    }
    for (const id of Object.keys(em.store.fixtures)) {
      if (!deployed.has(id)) deployed.set(id, { base: null, props: {}, exists: false });
    }
    const dropped = pruneAbsorbed(em.store, deployed);
    if (dropped.length) em.save();
    for (const [id, edit] of Object.entries(em.store.fixtures)) {
      if (edit.add) em.materializeAdd(id, edit);
    }
    for (const id of Object.keys(em.store.fixtures)) em.applyEdit(id);
    if (pruneCables(em.store, em.routes, em.fixtureDelta).length) em.save();
    for (const route of em.routes) em.cableLayer.update(route, em.routePoints(route.id));
  }

  /** How far a fixture has moved from the deployed model (house metres), or null. */
  function fixtureDelta(id) {
    if (!id || !em.bound) return null;
    const base = em.deployedBase.get(id);
    const now = em.currentTarget(id);
    if (!base || !now) return null;
    const d = now.map((v, i) => v - base[i]);
    return d.some((v) => Math.abs(v) > 1e-9) ? d : null;
  }

  function materializeAdd(id, edit) {
    const source = em.rowsById.get(edit.source);
    const sourceMeshes = source ? meshesOf(source.id) : [];
    if (!source || !sourceMeshes.length) return;
    const clones = [];
    for (const mesh of sourceMeshes) {
      const clone = mesh.clone(true);
      const part = mesh.userData.bpPart || "part";
      clone.name = `${part}__${id}__`;
      clone.userData = { ...mesh.userData, bpElementKey: id, bpEditAddedId: id };
      clone.visible = true;
      mesh.parent?.add(clone);
      em.meshBase.set(clone, (em.meshBase.get(mesh) || mesh.position).clone());
      clones.push(clone);
    }
    em.addedMeshes.set(id, clones);
    const row = {
      ...source,
      globalId: `added:${id}`,
      id,
      name: edit.add?.Name || `${source.name} (copy)`,
      added: true,
      props: { ...source.props },
      placement: source.placement
        ? { ...source.placement, origin: source.placement.origin.slice() }
        : null,
    };
    em.rows.push(row);
    em.rowsById.set(id, row);
    em.deployedBase.set(id, em.deployedBase.get(source.id)?.slice() || null);
  }

  /** Where the fixture is now (house metres), or null if it has no body. */
  function currentTarget(id) {
    const edit = em.store.fixtures[id];
    if (edit?.target) return edit.target.slice();
    const base = em.deployedBase.get(id);
    return base ? base.slice() : null;
  }

  function applyEdit(id) {
    const edit = em.store.fixtures[id];
    const meshes = meshesOf(id);
    const base = em.deployedBase.get(id);
    const delta = edit?.target && base ? edit.target.map((v, i) => v - base[i]) : [0, 0, 0];
    const world = em.houseDirToWorld(delta);
    for (const mesh of meshes) {
      const start = em.meshBase.get(mesh);
      if (!start) continue;
      const parent = mesh.parent;
      const local = world.clone();
      if (parent) {
        parent.updateWorldMatrix(true, false);
        local.applyMatrix3(new THREE.Matrix3().setFromMatrix4(parent.matrixWorld).invert());
      }
      mesh.position.copy(start).add(local);
      const deleted = Boolean(edit?.deleted);
      // Only flip visibility on delete and restore; a part faded to 0 stays hidden.
      if (deleted) mesh.visible = false;
      else if (mesh.userData.bpEditDeleted) mesh.visible = true;
      mesh.userData.bpEditDeleted = deleted;
      mesh.updateMatrixWorld(true);
    }
    em.revision += 1;
    em.refreshCablesAt(id);
    ctx.markDirty();
  }

  function editOf(id) {
    if (!em.store.fixtures[id]) em.store.fixtures[id] = {};
    return em.store.fixtures[id];
  }

  function tidy(id) {
    const edit = em.store.fixtures[id];
    if (!edit) return;
    if (edit.add || edit.deleted) return;
    const base = em.deployedBase.get(id);
    if (edit.target && base && edit.target.every((v, i) => Math.abs(v - base[i]) < 1e-6)) {
      delete edit.target;
      delete edit.base;
    }
    if (edit.props && !Object.keys(edit.props).length) delete edit.props;
    if (!edit.target && !edit.props) delete em.store.fixtures[id];
  }

  function setTarget(id, target, opts = {}) {
    const base = em.deployedBase.get(id);
    if (!base) return;
    const edit = editOf(id);
    edit.base = base.slice();
    edit.target = target.map((v) => Math.round(v * 10000) / 10000);
    tidy(id);
    applyEdit(id);
    em.updateSelectionBox();
    em.renderRow(id);
    em.renderPosition();
    em.syncDetailState();
    if (opts.save !== false) em.save();
  }

  function setProp(id, key, raw) {
    const row = em.rowsById.get(id);
    if (!row) return;
    let value = raw;
    if (["CableNumber", "CableLength", "Panel"].includes(key)) {
      const n = Number(String(raw).replace(",", "."));
      value = raw === "" ? null : Number.isFinite(n) ? n : raw;
    }
    const edit = editOf(id);
    if (edit.add) {
      edit.props = { ...(edit.props || {}), [key]: value };
    } else {
      const deployed = row.props?.[key] ?? null;
      edit.props = { ...(edit.props || {}) };
      if (String(deployed ?? "") === String(value ?? "")) delete edit.props[key];
      else edit.props[key] = value;
    }
    tidy(id);
    em.save();
    em.renderRow(id);
  }

  function propValue(id, key) {
    const edit = em.store.fixtures[id];
    if (edit?.props && Object.prototype.hasOwnProperty.call(edit.props, key)) return edit.props[key];
    return em.rowsById.get(id)?.props?.[key] ?? null;
  }

  // --- selection ---
  function select(id, opts = {}) {
    em.selectedId = id && em.rowsById.has(id) ? id : null;
    if (em.cableSel) em.cableSel = null;
    if (em.selectedId && em.view !== "fixtures") em.setView("fixtures");
    const meshes = em.selectedId ? displayMeshes(em.selectedId) : [];
    const movable = Boolean(em.selectedId && em.deployedBase.get(em.selectedId) && !em.store.fixtures[em.selectedId]?.deleted);
    if (movable) {
      em.gizmo.camera = ctx.getCamera();
      em.gizmo.attach(em.anchor);
      em.gizmo.enabled = true;
      em.helper.visible = true;
    } else {
      em.gizmo.detach();
      em.gizmo.enabled = false;
      em.helper.visible = false;
    }
    em.updateSelectionBox();
    for (const tr of em.tbody.querySelectorAll("tr.is-selected")) tr.classList.remove("is-selected");
    const tr = em.selectedId ? em.tbody.querySelector(`tr[data-id="${cssEscape(em.selectedId)}"]`) : null;
    if (tr) {
      tr.classList.add("is-selected");
      if (opts.scroll) tr.scrollIntoView({ block: "center", behavior: opts.instant ? "auto" : "smooth" });
    }
    if (opts.frame && meshes.length) em.frameOn(em.selectedId, meshes);
    else if (meshes.length && opts.pulse !== false) ctx.pulse(meshes);
    em.cableLayer.setSelection(em.selectionState());
    em.renderDetail();
    ctx.markDirty();
  }


  /** Fly to a fixture: in front of a wall device, else keep the view direction. */
  function frameOn(id, meshes) {
    const box = em.worldBox(meshes);
    if (box.isEmpty()) return;
    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());
    const span = Math.max(size.x, size.y, size.z, 0.25);
    const row = em.rowsById.get(id);
    const facing = facingOf(row?.placement?.refDirection);
    const camera = ctx.getCamera();
    let position;
    if (facing && span < 1) {
      const c = em.worldToHouse(center);
      position = em.houseToWorld([c[0] + facing[0] * FRAME_WALL_M, c[1] + facing[1] * FRAME_WALL_M, c[2] + 0.25]);
    } else {
      const dir = camera.position.clone().sub(controls.target);
      if (dir.lengthSq() < 1e-8) dir.set(0.6, 0.7, 0.6);
      dir.normalize();
      const dist = Math.max(1.6, span * 1.4);
      position = center.clone().addScaledVector(dir, dist);
    }
    ctx.flyTo({ center, position, span: Math.max(span, 0.8) });
    ctx.pulse(meshes);
  }

  function rowState(id) {
    const edit = em.store.fixtures[id];
    if (!edit) return "";
    if (edit.add) return "added";
    if (edit.deleted) return "deleted";
    return "edited";
  }

  function snapToWall(id) {
    const meshes = meshesOf(id);
    const root = ctx.getRoot();
    if (!meshes.length || !root) return;
    const box = em.worldBox(meshes);
    const center = box.getCenter(new THREE.Vector3());
    const half = box.getSize(new THREE.Vector3()).multiplyScalar(0.5);
    const row = em.rowsById.get(id);
    const facing = facingOf(row?.placement?.refDirection);
    const dirs = facing
      ? [[-facing[0], -facing[1], 0]]
      : [
          [1, 0, 0],
          [-1, 0, 0],
          [0, 1, 0],
          [0, -1, 0],
          [0, 0, 1],
        ];
    const own = new Set(meshes);
    let best = null;
    for (const d of dirs) {
      const dir = em.houseDirToWorld(d).normalize();
      em.raycaster.set(center, dir);
      em.raycaster.far = WALL_SNAP_MAX_M + Math.max(half.x, half.y, half.z);
      const hit = em.raycaster
        .intersectObject(root, true)
        .find((h) => !own.has(h.object) && !em.fixtureIdOf(h.object) && ctx.isSceneSolid(h.object) && ctx.isRenderedHit(h) && ctx.isOpaque(h.object));
      em.raycaster.far = Infinity;
      if (!hit) continue;
      const extent = Math.abs(dir.x) * half.x + Math.abs(dir.y) * half.y + Math.abs(dir.z) * half.z;
      const gap = hit.distance - extent;
      if (!best || Math.abs(gap) < Math.abs(best.gap)) best = { dir, gap };
    }
    if (!best) {
      em.flash(t("edit.noWall"));
      return;
    }
    const move = em.worldDirToHouse(best.dir.clone().multiplyScalar(best.gap));
    const pos = currentTarget(id);
    setTarget(
      id,
      pos.map((v, i) => Math.round((v + move[i]) * 10000) / 10000),
    );
  }

  function duplicate(id) {
    const row = em.rowsById.get(id);
    if (!row?.placement || !row.list) return;
    const sourceId = row.added ? em.store.fixtures[id]?.source : row.id;
    const source = em.rowsById.get(sourceId);
    if (!source) return;
    const taken = new Set([...rowsById.keys(), ...elementsById.keys()]);
    const newId = nextFixtureId({ ...row, props: { ...row.props, ...(em.store.fixtures[id]?.props || {}) } }, taken);
    const add = addElementFrom({ ...source, props: { ...source.props, ...(em.store.fixtures[id]?.props || {}) } }, newId);
    if (!add) return;
    const pos = currentTarget(id);
    // Beside the original, along the wall (or east for a ceiling device).
    const ref = row.placement.refDirection || [1, 0];
    const offset = 0.1;
    const target = [pos[0] + ref[0] * offset, pos[1] + ref[1] * offset, pos[2]];
    em.store.fixtures[newId] = { add, source: source.id, base: em.deployedBase.get(source.id)?.slice(), target };
    const props = em.store.fixtures[id]?.props;
    if (props) em.store.fixtures[newId].props = { ...props };
    materializeAdd(newId, em.store.fixtures[newId]);
    applyEdit(newId);
    em.save();
    em.renderRows();
    select(newId, { scroll: true });
  }

  function toggleDelete(id) {
    const edit = em.store.fixtures[id];
    if (edit?.add) {
      for (const mesh of em.addedMeshes.get(id) || []) mesh.parent?.remove(mesh);
      em.addedMeshes.delete(id);
      delete em.store.fixtures[id];
      em.rows = em.rows.filter((row) => row.id !== id);
      em.rowsById.delete(id);
      em.revision += 1;
      em.save();
      em.renderRows();
      select(null);
      return;
    }
    if (edit?.deleted) {
      delete edit.deleted;
      tidy(id);
    } else {
      editOf(id).deleted = true;
    }
    applyEdit(id);
    em.save();
    em.renderRow(id);
    select(id);
  }

  function revert(id) {
    const edit = em.store.fixtures[id];
    if (!edit || edit.add) return;
    delete em.store.fixtures[id];
    applyEdit(id);
    em.save();
    em.renderRow(id);
    select(id);
  }

  Object.assign(em, {
    meshesOf,
    displayMeshes,
    bind,
    fixtureDelta,
    materializeAdd,
    currentTarget,
    applyEdit,
    editOf,
    tidy,
    setTarget,
    setProp,
    propValue,
    rowState,
    select,
    frameOn,
    snapToWall,
    duplicate,
    toggleDelete,
    revert,
  });
}

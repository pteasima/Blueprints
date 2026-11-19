/**
 * Edit mode: correct fixture positions and cable-schedule values in the
 * viewer (Petr, 2026-11-19: "I need an edit mode where I can drag replace
 * items you get wrong. Ideally, Id see a table with the same data we have in
 * the excel/spreadsheet. ... Tapping in table highligts it in model and vice
 * versa. I get arrows to move it along all 3 axes.").
 *
 * - The Edit button replaces taps on doors, switches and lights with
 *   selection, and swaps the controls sheet for the fixture panel.
 * - The panel lists every fixture as a row (fixtureEdits.js). Tapping a row
 *   selects it and flies the camera to it; tapping a fixture in the model
 *   selects its row and scrolls to it.
 * - The selected fixture gets three arrows (three.js TransformControls in
 *   world space, plane handles removed): red x (east), blue y (north),
 *   green z (up). Drags snap the move to 1 cm (or 1 mm, or off).
 * - Edits live in localStorage and export as a JSON patch for
 *   inputs/ground_floor/fixture_overrides.json (docs/electrical/EditMode.md).
 * - The Cables tab lists the cable routes (cables.js draws them). Select a
 *   route from the table or by tapping it, then drag a vertex or a whole
 *   segment with the same arrows (docs/electrical/CableRoutes.md).
 */
import * as THREE from "three";
import { TransformControls } from "three/addons/controls/TransformControls.js";
import {
  EDITABLE_PROPS,
  STORAGE_PREFIX,
  addElementFrom,
  buildPatch,
  facingOf,
  fixtureRows,
  nextFixtureId,
  parseStore,
  pruneAbsorbed,
  rowSearchText,
  snap,
} from "./fixtureEdits.js";
import { createCableLayer } from "./cables.js";
import {
  cablePatch,
  cleanPoints,
  currentPoints,
  deleteVertex,
  editFor,
  endAnchors,
  insertVertex,
  isLocked,
  moveSegment,
  moveVertex,
  polylineLength,
  prepareSegmentMove,
  pruneCables,
  routeRecords,
  routeSearchText,
  samePoint,
} from "./cableEdits.js";

const PANEL_WIDE_PX = 560;
const WALL_SNAP_MAX_M = 0.8;
const FRAME_WALL_M = 1.1;
const SELECT_COLOR = 0xffb020;

/** Removed from the translate gizmo: Petr asked for arrows, not planes. */
const PLANE_HANDLES = new Set(["XY", "YZ", "XZ", "XYZ"]);

/**
 * @param {{
 *   canvas: HTMLCanvasElement,
 *   renderer: THREE.WebGLRenderer,
 *   controls: { enabled: boolean, target: THREE.Vector3 },
 *   getCamera: () => THREE.Camera,
 *   getRoot: () => THREE.Object3D | null,
 *   index: object,
 *   modelId: string,
 *   meshesForElement: (element: object) => THREE.Mesh[],
 *   elementFromMesh: (obj: object) => object | null,
 *   isSceneSolid: (obj: object) => boolean,
 *   isRenderedHit: (hit: object) => boolean,
 *   isOpaque: (obj: object) => boolean,
 *   centerOccluded: Function,
 *   projectTarget: Function,
 *   flyTo: (pose: { center: THREE.Vector3, position: THREE.Vector3, span: number }) => void,
 *   pulse: (meshes: THREE.Mesh[]) => void,
 *   markDirty: () => void,
 *   onActiveChange?: (active: boolean) => void,
 *   onLayout?: () => void,
 *   t: (key: string) => string,
 *   cables?: { routes?: object[], boards?: object[] } | null,
 * }} ctx
 */
export function createEditMode(ctx) {
  const { canvas, controls, t } = ctx;
  const storageKey = STORAGE_PREFIX + (ctx.modelId || "model");
  const wideMq = window.matchMedia("(min-width: 768px)");

  let active = false;
  /** Bumped on every geometry change, so the peel batches rebuild. */
  let revision = 0;
  let rows = fixtureRows(ctx.index);
  /** @type {Map<string, object>} */
  const rowsById = new Map(rows.map((row) => [row.id, row]));
  /** yaml id → IFC element. */
  const elementsById = new Map();
  for (const element of Object.values(ctx.index.elements || {})) {
    if (element?.id) elementsById.set(String(element.id), element);
  }
  /** Mesh → its local position in the deployed model. */
  const meshBase = new Map();
  /** Fixture id → deployed position (house metres), or null. */
  const deployedBase = new Map();
  /** Added fixture id → cloned meshes. */
  const addedMeshes = new Map();
  let store = parseStore(readStorage(), ctx.modelId);
  /** @type {string | null} */
  let selectedId = null;
  let snapStep = 0.01;
  let filterText = "";
  let collapsed = false;
  let bound = false;
  /** Phone: the schedule fields start folded; remember when Petr opens them. */
  let detailsOpen = false;

  // --- cable routes (cables.js draws, cableEdits.js edits) ---
  const routes = routeRecords(ctx.cables);
  const routesById = new Map(routes.map((r) => [r.id, r]));
  if (!store.cables) store.cables = {};
  /** What the table lists: "fixtures" or "cables". */
  let view = "fixtures";
  /** The Cables switch in edit mode. */
  let cablesOn = true;
  /** `?cables=1` shows the cables outside edit mode too. */
  const cablesParam = (() => {
    try {
      return new URLSearchParams(window.location.search).get("cables") === "1";
    } catch {
      return false;
    }
  })();
  /** @type {{ id: string, mode: "vertex" | "segment", vertex: number, segment: number } | null} */
  let cableSel = null;
  const cableLayer = createCableLayer({ routes, boards: ctx.cables?.boards || [], getRoot: ctx.getRoot });

  // --- three.js overlay: gizmo and selection box ---
  const overlay = new THREE.Scene();
  overlay.name = "EditOverlay";
  const anchor = new THREE.Object3D();
  anchor.name = "EditAnchor";
  overlay.add(anchor);
  const selBox = new THREE.Box3();
  const selHelper = new THREE.Box3Helper(selBox, SELECT_COLOR);
  selHelper.material.depthTest = false;
  selHelper.material.transparent = true;
  selHelper.renderOrder = 999;
  selHelper.visible = false;
  overlay.add(selHelper);

  const gizmo = new TransformControls(ctx.getCamera(), canvas);
  gizmo.setMode("translate");
  gizmo.setSpace("world");
  gizmo.size = 1;
  gizmo.enabled = false;
  const helper = gizmo.getHelper();
  helper.visible = false;
  overlay.add(helper);
  for (const group of [gizmo._gizmo?.gizmo?.translate, gizmo._gizmo?.picker?.translate]) {
    if (!group) continue;
    for (const child of group.children.slice()) {
      if (PLANE_HANDLES.has(child.name)) group.remove(child);
    }
  }

  let dragStart = null;
  /** Orbit is off from the press on an arrow until the drag ends. */
  let orbitHeld = false;
  let orbitPrev = true;
  function holdOrbit() {
    if (orbitHeld) return;
    orbitHeld = true;
    orbitPrev = controls.enabled;
    controls.enabled = false;
  }
  function releaseOrbit() {
    if (!orbitHeld) return;
    orbitHeld = false;
    controls.enabled = orbitPrev;
  }
  gizmo.addEventListener("dragging-changed", (event) => {
    if (event.value) {
      holdOrbit();
      if (cableSel) {
        dragStart = { anchor: anchor.position.clone(), cable: { points: routePoints(cableSel.id), prepared: null } };
      } else {
        const edit = selectedId ? currentTarget(selectedId) : null;
        dragStart = edit ? { anchor: anchor.position.clone(), target: edit.slice() } : null;
      }
    } else {
      releaseOrbit();
      const wasCable = Boolean(dragStart?.cable);
      dragStart = null;
      if (wasCable) finishCableMove();
      save();
      renderDetail();
    }
    ctx.markDirty();
  });
  gizmo.addEventListener("change", () => ctx.markDirty());
  gizmo.addEventListener("objectChange", () => {
    if (dragStart?.cable && cableSel) {
      const world = anchor.position.clone().sub(dragStart.anchor);
      const house = worldDirToHouse(world);
      const axis = { X: 0, Y: 1, Z: 2 }[gizmo.axis] ?? house.map(Math.abs).indexOf(Math.max(...house.map(Math.abs)));
      const d = [0, 0, 0];
      d[axis] = snapStep ? snap(house[axis], snapStep) : house[axis];
      anchor.position.copy(dragStart.anchor).add(houseDirToWorld(d));
      applyCableDelta(dragStart.cable, d, axis, { save: false });
      return;
    }
    if (!dragStart || !selectedId) return;
    const world = anchor.position.clone().sub(dragStart.anchor);
    const house = worldDirToHouse(world);
    const step = snapStep;
    const next = dragStart.target.map((v, i) => v + (step ? snap(house[i], step) : house[i]));
    // The gizmo follows the snapped position, not the raw pointer.
    const snapped = houseDirToWorld(next.map((v, i) => v - dragStart.target[i]));
    anchor.position.copy(dragStart.anchor).add(snapped);
    setTarget(selectedId, next, { save: false });
  });

  // --- coordinates ---
  /** The glTF node whose frame is the house frame (Z up, metres). */
  function houseFrame() {
    const root = ctx.getRoot();
    if (!root) return null;
    return root.children.length === 1 ? root.children[0] : root;
  }

  function houseToWorld(p) {
    const frame = houseFrame();
    const v = new THREE.Vector3(p[0], p[1], p[2]);
    if (frame) {
      frame.updateWorldMatrix(true, false);
      v.applyMatrix4(frame.matrixWorld);
    }
    return v;
  }

  function worldToHouse(v) {
    const frame = houseFrame();
    const out = v.clone();
    if (frame) {
      frame.updateWorldMatrix(true, false);
      out.applyMatrix4(frame.matrixWorld.clone().invert());
    }
    return [out.x, out.y, out.z];
  }

  function houseDirToWorld(d) {
    const frame = houseFrame();
    const v = new THREE.Vector3(d[0], d[1], d[2]);
    if (frame) {
      frame.updateWorldMatrix(true, false);
      v.applyMatrix3(new THREE.Matrix3().setFromMatrix4(frame.matrixWorld));
    }
    return v;
  }

  function worldDirToHouse(v) {
    const frame = houseFrame();
    const out = v.clone();
    if (frame) {
      frame.updateWorldMatrix(true, false);
      out.applyMatrix3(new THREE.Matrix3().setFromMatrix4(frame.matrixWorld).invert());
    }
    return [out.x, out.y, out.z];
  }

  function worldBox(meshes) {
    const box = new THREE.Box3();
    for (const mesh of meshes) {
      if (!mesh.visible && !mesh.userData.bpEditDeleted) continue;
      mesh.updateWorldMatrix(true, false);
      const geom = mesh.geometry;
      if (!geom) continue;
      if (!geom.boundingBox) geom.computeBoundingBox();
      const bb = geom.boundingBox.clone().applyMatrix4(mesh.matrixWorld);
      box.union(bb);
    }
    return box;
  }

  // --- model binding ---
  function meshesOf(id) {
    if (addedMeshes.has(id)) return addedMeshes.get(id);
    const element = elementsById.get(id);
    return element ? ctx.meshesForElement(element) : [];
  }

  /** Meshes to draw for a row; an in-box sensor shows its host switch. */
  function displayMeshes(id) {
    const own = meshesOf(id);
    if (own.length) return own;
    const row = rowsById.get(id);
    return row?.hostId ? meshesOf(row.hostId) : [];
  }

  function bind() {
    if (bound || !ctx.getRoot()) return;
    bound = true;
    for (const row of rows) {
      const meshes = meshesOf(row.id);
      for (const mesh of meshes) meshBase.set(mesh, mesh.position.clone());
      if (row.placement) deployedBase.set(row.id, row.placement.origin.slice());
      else if (meshes.length) {
        const box = worldBox(meshes);
        deployedBase.set(row.id, box.isEmpty() ? null : worldToHouse(box.getCenter(new THREE.Vector3())));
      } else deployedBase.set(row.id, null);
    }
    const deployed = new Map();
    for (const row of rows) {
      deployed.set(row.id, { base: deployedBase.get(row.id), props: row.props, exists: true });
    }
    for (const id of Object.keys(store.fixtures)) {
      if (!deployed.has(id)) deployed.set(id, { base: null, props: {}, exists: false });
    }
    const dropped = pruneAbsorbed(store, deployed);
    if (dropped.length) save();
    for (const [id, edit] of Object.entries(store.fixtures)) {
      if (edit.add) materializeAdd(id, edit);
    }
    for (const id of Object.keys(store.fixtures)) applyEdit(id);
    if (pruneCables(store, routes, fixtureDelta).length) save();
    for (const route of routes) cableLayer.update(route, routePoints(route.id));
  }

  // --- cable routes ---
  /** How far a fixture has moved from the deployed model (house metres), or null. */
  function fixtureDelta(id) {
    if (!id || !bound) return null;
    const base = deployedBase.get(id);
    const now = currentTarget(id);
    if (!base || !now) return null;
    const d = now.map((v, i) => v - base[i]);
    return d.some((v) => Math.abs(v) > 1e-9) ? d : null;
  }

  function routePoints(id) {
    const route = routesById.get(id);
    return route ? currentPoints(route, store.cables[id], fixtureDelta) : null;
  }

  function cablesVisible() {
    return routes.length > 0 && bound && ((active && cablesOn) || cablesParam);
  }

  /** Redraw the routes that end at this fixture (it moved). */
  function refreshCablesAt(fixtureId) {
    if (!bound) return;
    for (const route of routes) {
      const a = endAnchors(route);
      if (a.to !== fixtureId && a.from !== fixtureId) continue;
      cableLayer.update(route, routePoints(route.id));
      renderCableRow(route.id);
    }
  }

  function routeEdited(id) {
    return Boolean(store.cables[id]);
  }

  /** Store these points for a route (or drop the edit if they are the deployed ones). */
  function setRoutePoints(id, points, opts = {}) {
    const route = routesById.get(id);
    if (!route) return;
    const deployed = currentPoints(route, null, fixtureDelta);
    const same = points.length === deployed.length && points.every((p, i) => samePoint(p, deployed[i]));
    if (same) delete store.cables[id];
    else store.cables[id] = editFor(route, points, fixtureDelta);
    cableLayer.update(route, routePoints(id));
    clampCableSel();
    syncCableGizmo();
    renderCableRow(id);
    renderCablePosition();
    syncCableState();
    ctx.markDirty();
    if (opts.save !== false) save();
  }

  /** Move the selected vertex or segment by `d` (house metres) along `axis`. */
  function applyCableDelta(state, d, axis, opts = {}) {
    if (!cableSel) return;
    const base = state.points;
    let next;
    if (cableSel.mode === "vertex") {
      if (isLocked(cableSel.vertex, base.length)) return;
      const p = base[cableSel.vertex];
      next = moveVertex(base, cableSel.vertex, [p[0] + d[0], p[1] + d[1], p[2] + d[2]]);
    } else {
      if (!state.prepared) {
        state.prepared = prepareSegmentMove(base, cableSel.segment, axis);
        state.moved = [state.prepared.a, state.prepared.b];
      }
      next = moveSegment(state.prepared.points, state.prepared.a, state.prepared.b, d);
      cableSel.segment = state.prepared.a;
    }
    state.last = next;
    setRoutePoints(cableSel.id, next, opts);
  }

  /** After a drag or a nudge: drop collapsed jogs, keep the moved part selected. */
  function finishCableMove() {
    if (!cableSel) return;
    const pts = routePoints(cableSel.id);
    if (!pts) return;
    const keepA = cableSel.mode === "vertex" ? pts[cableSel.vertex] : pts[cableSel.segment];
    const keepB = cableSel.mode === "vertex" ? null : pts[cableSel.segment + 1];
    const clean = cleanPoints(pts);
    if (clean.length !== pts.length) {
      if (cableSel.mode === "vertex") {
        const i = clean.findIndex((p) => samePoint(p, keepA));
        if (i >= 0) cableSel.vertex = i;
      } else {
        const i = clean.findIndex((p, k) => k + 1 < clean.length && samePoint(p, keepA) && samePoint(clean[k + 1], keepB));
        if (i >= 0) cableSel.segment = i;
      }
      setRoutePoints(cableSel.id, clean, { save: false });
    }
    cableLayer.setSelection(selectionState());
  }

  function cableMove(axis, amount) {
    const state = { points: routePoints(cableSel.id), prepared: null };
    const d = [0, 0, 0];
    d[axis] = amount;
    applyCableDelta(state, d, axis, { save: false });
    finishCableMove();
  }

  /** Where the selected vertex / segment midpoint is (house metres). */
  function cableSelPoint() {
    if (!cableSel) return null;
    const pts = routePoints(cableSel.id);
    if (!pts) return null;
    if (cableSel.mode === "vertex") return pts[cableSel.vertex]?.slice() || null;
    const a = pts[cableSel.segment];
    const b = pts[cableSel.segment + 1];
    return a && b ? a.map((v, i) => (v + b[i]) / 2) : null;
  }

  function clampCableSel() {
    if (!cableSel) return;
    const n = routePoints(cableSel.id)?.length || 2;
    cableSel.vertex = Math.max(0, Math.min(cableSel.vertex, n - 1));
    cableSel.segment = Math.max(0, Math.min(cableSel.segment, n - 2));
  }

  function cableMovable() {
    if (!cableSel) return false;
    const n = routePoints(cableSel.id)?.length || 0;
    return cableSel.mode === "segment" ? n >= 2 : !isLocked(cableSel.vertex, n);
  }

  function selectionState() {
    if (cableSel) {
      return {
        routeId: cableSel.id,
        vertex: cableSel.mode === "vertex" ? cableSel.vertex : null,
        segment: cableSel.mode === "segment" ? cableSel.segment : null,
      };
    }
    if (selectedId) {
      const related = new Set(
        routes.filter((r) => [r.to, r.from, r.toBox, r.fromBox].includes(selectedId)).map((r) => r.id),
      );
      return { related };
    }
    return {};
  }

  function syncCableGizmo() {
    if (!cableSel || dragStart) return;
    const p = cableSelPoint();
    if (p && cableMovable()) {
      anchor.position.copy(houseToWorld(p));
      anchor.updateMatrixWorld(true);
      gizmo.camera = ctx.getCamera();
      gizmo.attach(anchor);
      gizmo.enabled = true;
      helper.visible = true;
    } else {
      gizmo.detach();
      gizmo.enabled = false;
      helper.visible = false;
    }
  }

  /**
   * Select a cable route (null clears it).
   * @param {string | null} id
   * @param {{ mode?: "vertex" | "segment", vertex?: number, segment?: number, frame?: boolean, scroll?: boolean }} [opts]
   */
  function selectRoute(id, opts = {}) {
    const route = id ? routesById.get(id) : null;
    if (selectedId) {
      selectedId = null;
      selHelper.visible = false;
    }
    if (!route) {
      cableSel = null;
      gizmo.detach();
      gizmo.enabled = false;
      helper.visible = false;
    } else {
      const keep = cableSel?.id === route.id ? cableSel : null;
      const n = routePoints(route.id).length;
      cableSel = {
        id: route.id,
        mode: opts.mode || keep?.mode || "segment",
        vertex: opts.vertex ?? keep?.vertex ?? Math.min(1, n - 1),
        segment: opts.segment ?? keep?.segment ?? Math.floor((n - 1) / 2),
      };
      clampCableSel();
      if (view !== "cables") setView("cables");
      syncCableGizmo();
    }
    cableLayer.setSelection(selectionState());
    for (const tr of tbody.querySelectorAll("tr.is-selected")) tr.classList.remove("is-selected");
    const tr = cableSel ? tbody.querySelector(`tr[data-route="${cssEscape(cableSel.id)}"]`) : null;
    if (tr) {
      tr.classList.add("is-selected");
      if (opts.scroll) tr.scrollIntoView({ block: "center", behavior: "smooth" });
    }
    if (opts.frame && cableSel) frameRoute(cableSel.id);
    renderDetail();
    ctx.markDirty();
  }

  /** Fly to one route, or to all of them (no id). */
  function frameRoute(id) {
    const box = new THREE.Box3();
    const list = Array.isArray(id) ? id.map((k) => routesById.get(k)) : id ? [routesById.get(id)] : routes;
    for (const r of list) if (r) box.union(cableLayer.worldBox(r.id));
    if (box.isEmpty()) return;
    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());
    const span = Math.max(size.x, size.y, size.z, 1);
    const camera = ctx.getCamera();
    // From above and to the side, so the risers and the ceiling runs both read.
    const dir = camera.position.clone().sub(controls.target);
    dir.y = Math.max(dir.y, dir.length() * 0.8);
    if (dir.lengthSq() < 1e-8) dir.set(0.5, 1, 0.6);
    dir.normalize();
    ctx.flyTo({ center, position: center.clone().addScaledVector(dir, Math.max(3, span * 1.3)), span });
  }

  function setView(next) {
    if (next === view || (next === "cables" && !routes.length)) return;
    view = next;
    if (view === "fixtures" && cableSel) {
      cableSel = null;
      gizmo.detach();
      gizmo.enabled = false;
      helper.visible = false;
      cableLayer.setSelection({});
    }
    if (active) {
      renderTabs();
      renderHead();
      renderRows();
      renderDetail();
    }
  }

  function materializeAdd(id, edit) {
    const source = rowsById.get(edit.source);
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
      meshBase.set(clone, (meshBase.get(mesh) || mesh.position).clone());
      clones.push(clone);
    }
    addedMeshes.set(id, clones);
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
    rows.push(row);
    rowsById.set(id, row);
    deployedBase.set(id, deployedBase.get(source.id)?.slice() || null);
  }

  /** Where the fixture is now (house metres), or null if it has no body. */
  function currentTarget(id) {
    const edit = store.fixtures[id];
    if (edit?.target) return edit.target.slice();
    const base = deployedBase.get(id);
    return base ? base.slice() : null;
  }

  function applyEdit(id) {
    const edit = store.fixtures[id];
    const meshes = meshesOf(id);
    const base = deployedBase.get(id);
    const delta = edit?.target && base ? edit.target.map((v, i) => v - base[i]) : [0, 0, 0];
    const world = houseDirToWorld(delta);
    for (const mesh of meshes) {
      const start = meshBase.get(mesh);
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
    revision += 1;
    refreshCablesAt(id);
    ctx.markDirty();
  }

  // --- store ---
  function readStorage() {
    try {
      return localStorage.getItem(storageKey);
    } catch {
      return null;
    }
  }

  function save() {
    try {
      if (Object.keys(store.fixtures).length || Object.keys(store.cables || {}).length) {
        localStorage.setItem(storageKey, JSON.stringify(store));
      }
      else localStorage.removeItem(storageKey);
    } catch {
      /* private mode: edits stay for this session */
    }
    renderExportCount();
  }

  function editOf(id) {
    if (!store.fixtures[id]) store.fixtures[id] = {};
    return store.fixtures[id];
  }

  function tidy(id) {
    const edit = store.fixtures[id];
    if (!edit) return;
    if (edit.add || edit.deleted) return;
    const base = deployedBase.get(id);
    if (edit.target && base && edit.target.every((v, i) => Math.abs(v - base[i]) < 1e-6)) {
      delete edit.target;
      delete edit.base;
    }
    if (edit.props && !Object.keys(edit.props).length) delete edit.props;
    if (!edit.target && !edit.props) delete store.fixtures[id];
  }

  function setTarget(id, target, opts = {}) {
    const base = deployedBase.get(id);
    if (!base) return;
    const edit = editOf(id);
    edit.base = base.slice();
    edit.target = target.map((v) => Math.round(v * 10000) / 10000);
    tidy(id);
    applyEdit(id);
    updateSelectionBox();
    renderRow(id);
    renderPosition();
    syncDetailState();
    if (opts.save !== false) save();
  }

  /**
   * Badge and Revert after a move, without rebuilding the pane: a rebuild
   * would replace the − / + button Petr is holding. (Revert used to stay
   * disabled after the first nudge until another fixture was selected.)
   */
  function syncDetailState() {
    if (!selectedId || detail.hidden) return;
    const edit = store.fixtures[selectedId];
    const state = rowState(selectedId);
    const head = detail.querySelector(".edit-detail-head");
    let badge = head?.querySelector(".edit-badge");
    if (edit && head) {
      if (!badge) {
        badge = document.createElement("span");
        badge.className = "edit-badge";
        head.appendChild(badge);
      }
      badge.dataset.state = state;
      badge.textContent = t(`edit.state.${state}`);
    } else badge?.remove();
    const revertBtn = detail.querySelector('button[data-role="revert"]');
    if (revertBtn) revertBtn.disabled = !(edit && !edit.add);
  }

  function setProp(id, key, raw) {
    const row = rowsById.get(id);
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
    save();
    renderRow(id);
  }

  function propValue(id, key) {
    const edit = store.fixtures[id];
    if (edit?.props && Object.prototype.hasOwnProperty.call(edit.props, key)) return edit.props[key];
    return rowsById.get(id)?.props?.[key] ?? null;
  }

  // --- selection ---
  function select(id, opts = {}) {
    selectedId = id && rowsById.has(id) ? id : null;
    if (cableSel) cableSel = null;
    if (selectedId && view !== "fixtures") setView("fixtures");
    const meshes = selectedId ? displayMeshes(selectedId) : [];
    const movable = Boolean(selectedId && deployedBase.get(selectedId) && !store.fixtures[selectedId]?.deleted);
    if (movable) {
      gizmo.camera = ctx.getCamera();
      gizmo.attach(anchor);
      gizmo.enabled = true;
      helper.visible = true;
    } else {
      gizmo.detach();
      gizmo.enabled = false;
      helper.visible = false;
    }
    updateSelectionBox();
    for (const tr of tbody.querySelectorAll("tr.is-selected")) tr.classList.remove("is-selected");
    const tr = selectedId ? tbody.querySelector(`tr[data-id="${cssEscape(selectedId)}"]`) : null;
    if (tr) {
      tr.classList.add("is-selected");
      if (opts.scroll) tr.scrollIntoView({ block: "center", behavior: opts.instant ? "auto" : "smooth" });
    }
    if (opts.frame && meshes.length) frameOn(selectedId, meshes);
    else if (meshes.length && opts.pulse !== false) ctx.pulse(meshes);
    cableLayer.setSelection(selectionState());
    renderDetail();
    ctx.markDirty();
  }

  function updateSelectionBox() {
    if (!selectedId) {
      selHelper.visible = false;
      return;
    }
    const box = worldBox(displayMeshes(selectedId));
    if (box.isEmpty()) {
      selHelper.visible = false;
      return;
    }
    // A few millimetres out, so the outline does not sit inside the faces.
    box.expandByScalar(0.006);
    selBox.copy(box);
    selHelper.visible = true;
    if (!dragStart) box.getCenter(anchor.position);
    anchor.updateMatrixWorld(true);
  }

  /** Fly to a fixture: in front of a wall device, else keep the view direction. */
  function frameOn(id, meshes) {
    const box = worldBox(meshes);
    if (box.isEmpty()) return;
    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());
    const span = Math.max(size.x, size.y, size.z, 0.25);
    const row = rowsById.get(id);
    const facing = facingOf(row?.placement?.refDirection);
    const camera = ctx.getCamera();
    let position;
    if (facing && span < 1) {
      const c = worldToHouse(center);
      position = houseToWorld([c[0] + facing[0] * FRAME_WALL_M, c[1] + facing[1] * FRAME_WALL_M, c[2] + 0.25]);
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

  /** Fixture id a mesh belongs to, or null. */
  function fixtureIdOf(obj) {
    let node = obj;
    while (node) {
      if (node.userData?.bpEditAddedId) return node.userData.bpEditAddedId;
      node = node.parent;
    }
    const element = ctx.elementFromMesh(obj);
    const id = element?.id ? String(element.id) : null;
    return id && rowsById.has(id) ? id : null;
  }

  const raycaster = new THREE.Raycaster();
  const ndc = new THREE.Vector2();

  function pickAt(clientX, clientY) {
    const root = ctx.getRoot();
    const camera = ctx.getCamera();
    if (!root || !camera) return null;
    const rect = canvas.getBoundingClientRect();
    const w = rect.width || 1;
    const h = rect.height || 1;
    ndc.set(((clientX - rect.left) / w) * 2 - 1, -((clientY - rect.top) / h) * 2 + 1);
    raycaster.setFromCamera(ndc, camera);
    const hits = raycaster
      .intersectObject(root, true)
      .filter((hit) => ctx.isSceneSolid(hit.object) && ctx.isRenderedHit(hit));
    // Direct hit: the nearest fixture unless an opaque solid is in front.
    for (const hit of hits) {
      const id = fixtureIdOf(hit.object);
      if (id) return id;
      if (ctx.isOpaque(hit.object)) break;
    }
    // 44 pt circle around each visible fixture centre.
    let top = root;
    while (top.parent) top = top.parent;
    const tap = { x: clientX - rect.left, y: clientY - rect.top };
    let best = null;
    for (const row of rows) {
      const meshes = meshesOf(row.id).filter((m) => m.visible);
      if (!meshes.length) continue;
      const center = worldBox(meshes).getCenter(new THREE.Vector3());
      const at = ctx.projectTarget(center, camera, { w, h });
      if (!at) continue;
      const d = Math.hypot(at.x - tap.x, at.y - tap.y);
      if (d > 22 || (best && d >= best.d)) continue;
      const own = new Set(meshes);
      const occluded = ctx.centerOccluded(center, camera, top, (obj) => own.has(obj), {
        keep: (obj) => ctx.isSceneSolid(obj),
      });
      if (!occluded) best = { id: row.id, d };
    }
    return best ? best.id : null;
  }

  /** The cable (and vertex of the selected one) under a tap. */
  function pickCable(clientX, clientY) {
    if (!cablesVisible()) return null;
    const camera = ctx.getCamera();
    const rect = canvas.getBoundingClientRect();
    const w = rect.width || 1;
    const h = rect.height || 1;
    const at = { x: clientX - rect.left, y: clientY - rect.top };
    if (cableSel) {
      const screen = cableLayer.screenPoints(cableSel.id, camera, w, h);
      let best = null;
      screen.forEach((p, i) => {
        if (!p) return;
        const d = Math.hypot(p.x - at.x, p.y - at.y);
        if (d <= 20 && (!best || d < best.d)) best = { i, d };
      });
      if (best) return { routeId: cableSel.id, vertex: best.i };
    }
    return cableLayer.pick(camera, at, w, h, 14);
  }

  // Pointer: a press on an arrow turns orbit off before OrbitControls sees it.
  /** @type {{ id: number, x: number, y: number, t: number, onGizmo: boolean } | null} */
  let press = null;
  let pointers = 0;
  function gizmoAxisAt(ev) {
    if (!gizmo.enabled || !gizmo.object) return null;
    const rect = canvas.getBoundingClientRect();
    gizmo.camera = ctx.getCamera();
    gizmo.pointerHover({
      x: ((ev.clientX - rect.left) / (rect.width || 1)) * 2 - 1,
      y: -((ev.clientY - rect.top) / (rect.height || 1)) * 2 + 1,
      button: 0,
    });
    return gizmo.axis;
  }
  window.addEventListener(
    "pointerdown",
    (ev) => {
      if (!active || ev.target !== canvas) return;
      pointers += 1;
      const onGizmo = pointers === 1 && Boolean(gizmoAxisAt(ev));
      if (onGizmo) holdOrbit();
      press = pointers === 1 ? { id: ev.pointerId, x: ev.clientX, y: ev.clientY, t: performance.now(), onGizmo } : null;
    },
    true,
  );
  window.addEventListener(
    "pointerup",
    (ev) => {
      if (!active) return;
      pointers = Math.max(0, pointers - 1);
      const p = press;
      if (!p || ev.pointerId !== p.id) return;
      press = null;
      if (p.onGizmo) {
        // A drag releases orbit in dragging-changed, after this listener.
        if (!gizmo.dragging) releaseOrbit();
        return;
      }
      const moved = Math.hypot(ev.clientX - p.x, ev.clientY - p.y);
      if (moved > 8 || performance.now() - p.t > 700) return;
      const cableHit = pickCable(ev.clientX, ev.clientY);
      if (cableHit?.vertex != null) {
        selectRoute(cableHit.routeId, { mode: "vertex", vertex: cableHit.vertex });
        return;
      }
      // In the Cables tab a cable wins over the fixture behind it.
      if (cableHit && view === "cables") {
        selectRoute(cableHit.routeId, { mode: "segment", segment: cableHit.segment, scroll: true });
        return;
      }
      const id = pickAt(ev.clientX, ev.clientY);
      if (id) select(id, { scroll: true });
      else if (cableHit) selectRoute(cableHit.routeId, { mode: "segment", segment: cableHit.segment, scroll: true });
      else if (selectedId) select(null);
      else if (cableSel) selectRoute(null);
    },
    true,
  );
  window.addEventListener(
    "pointercancel",
    () => {
      pointers = Math.max(0, pointers - 1);
      press = null;
      // iOS cancels a touch when a system gesture takes it: end the drag.
      if (gizmo.dragging) gizmo.pointerUp({ x: 0, y: 0, button: 0 });
      releaseOrbit();
    },
    true,
  );

  // --- DOM ---
  injectStyles();
  const button = document.createElement("button");
  button.type = "button";
  button.id = "edit";
  button.className = "chrome-btn";
  button.hidden = true;
  button.setAttribute("aria-pressed", "false");
  const startBar = document.querySelector(".top-chrome-start") || document.getElementById("top-chrome");
  if (startBar) {
    const walkBtn = document.getElementById("walk");
    if (walkBtn && walkBtn.parentElement === startBar) walkBtn.after(button);
    else startBar.appendChild(button);
  }
  button.addEventListener("click", () => setActive(!active));

  const panel = document.createElement("aside");
  panel.id = "edit-panel";
  panel.className = "edit-panel";
  panel.hidden = true;
  panel.innerHTML = `
    <header class="edit-head">
      <button type="button" class="edit-btn edit-collapse" data-role="collapse" aria-expanded="true">▾</button>
      <h2 class="edit-title" data-role="title"></h2>
      <div class="edit-tabs" data-role="tabs" role="tablist" hidden>
        <button type="button" class="edit-seg" role="tab" data-view="fixtures"></button>
        <button type="button" class="edit-seg" role="tab" data-view="cables"></button>
      </div>
      <span class="edit-count" data-role="count"></span>
      <span class="edit-spacer"></span>
      <button type="button" class="edit-btn" data-role="export"></button>
    </header>
    <div class="edit-export" data-role="export-box" hidden>
      <p class="edit-hint" data-role="export-hint"></p>
      <textarea readonly rows="6" data-role="export-text"></textarea>
      <div class="edit-row">
        <button type="button" class="edit-btn edit-share" data-role="share" hidden></button>
        <button type="button" class="edit-btn" data-role="share-file" hidden></button>
        <button type="button" class="edit-btn" data-role="copy"></button>
        <button type="button" class="edit-btn" data-role="download"></button>
        <span class="edit-spacer"></span>
        <button type="button" class="edit-btn edit-danger" data-role="discard"></button>
        <button type="button" class="edit-btn" data-role="export-close">✕</button>
      </div>
    </div>
    <section class="edit-detail" data-role="detail" hidden></section>
    <div class="edit-search">
      <input type="search" data-role="search" autocomplete="off" spellcheck="false"/>
      <label class="edit-cables-on" data-role="cables-label" hidden><input type="checkbox" data-role="cables-on" checked/><span data-role="cables-on-text"></span></label>
    </div>
    <div class="edit-table-wrap" data-role="wrap">
      <table class="edit-table">
        <thead><tr data-role="head"></tr></thead>
        <tbody data-role="body"></tbody>
      </table>
    </div>`;
  document.body.appendChild(panel);
  const $ = (role) => panel.querySelector(`[data-role="${role}"]`);
  const tbody = $("body");
  const detail = $("detail");
  const exportBox = $("export-box");
  const exportText = $("export-text");

  const COLUMNS = [
    { key: "room", label: "edit.colRoom" },
    { key: "cable", label: "edit.colCable" },
    { key: "code", label: "edit.colDevice" },
    { key: "id", label: "edit.colId" },
    { key: "name", label: "edit.colName" },
    { key: "spec", label: "edit.colSpec" },
    { key: "length", label: "edit.colLength" },
    { key: "panel", label: "edit.colPanel" },
    { key: "note", label: "edit.colNote" },
    { key: "x", label: "x", axis: 0 },
    { key: "y", label: "y", axis: 1 },
    { key: "z", label: "z", axis: 2 },
  ];
  const PROP_OF = { cable: "CableNumber", code: "DeviceCode", spec: "CableSpec", length: "CableLength", panel: "Panel", note: "Note" };

  function fmt(v) {
    return v == null || v === "" ? "" : String(v);
  }

  function fmtM(v) {
    return Number.isFinite(v) ? v.toFixed(3) : "";
  }

  function cellText(row, col) {
    if (col.axis != null) {
      const pos = currentTarget(row.id);
      return pos ? fmtM(pos[col.axis]) : row.hostId ? `→ ${row.hostId}` : "";
    }
    if (PROP_OF[col.key]) return fmt(propValue(row.id, PROP_OF[col.key]));
    if (col.key === "room") return row.room;
    return fmt(row[col.key]);
  }

  function rowState(id) {
    const edit = store.fixtures[id];
    if (!edit) return "";
    if (edit.add) return "added";
    if (edit.deleted) return "deleted";
    return "edited";
  }

  const CABLE_COLUMNS = [
    { key: "room", label: "edit.colRoom" },
    { key: "cable", label: "edit.colCable" },
    { key: "id", label: "edit.colRoute" },
    { key: "ends", label: "edit.colEnds" },
    { key: "spec", label: "edit.colSpec" },
    { key: "schedule", label: "edit.colScheduleLength", num: true },
    { key: "modelled", label: "edit.colModelled", num: true },
    { key: "vertices", label: "edit.colVertices", num: true },
  ];

  function cableCell(route, key) {
    if (key === "room") return route.room;
    if (key === "cable") return route.tail ? `${route.cable ?? ""} ↳` : fmt(route.cable);
    if (key === "id") return route.id;
    if (key === "ends") return `${route.fromBox || route.from || "?"} → ${route.toBox && !route.tail ? `${route.to} (${route.toBox})` : route.to || "?"}`;
    if (key === "spec") return route.lead ? `${route.spec} · ${route.lead}` : route.spec;
    if (key === "schedule") return route.tail || route.schedule == null ? "" : fmt(route.schedule);
    const pts = routePoints(route.id) || route.points;
    if (key === "modelled") return polylineLength(pts).toFixed(1);
    if (key === "vertices") return String(pts.length);
    return "";
  }

  function fillCableRow(tr, route) {
    tr.innerHTML = "";
    tr.dataset.state = routeEdited(route.id) ? "edited" : "";
    tr.dataset.kind = route.kind;
    tr.title = route.note || route.id;
    for (const col of CABLE_COLUMNS) {
      const td = document.createElement("td");
      td.textContent = cableCell(route, col.key);
      if (col.num) td.className = "num";
      if (col.key === "id") td.className = "mono";
      tr.appendChild(td);
    }
  }

  function renderCableRow(id) {
    if (!active || view !== "cables") return;
    const tr = tbody.querySelector(`tr[data-route="${cssEscape(id)}"]`);
    const route = routesById.get(id);
    if (tr && route) fillCableRow(tr, route);
    if (tr && cableSel?.id === id) tr.classList.add("is-selected");
  }

  function renderCableRows() {
    tbody.innerHTML = "";
    const needle = filterText.trim().toLowerCase();
    let shown = 0;
    for (const route of routes) {
      if (needle && !routeSearchText(route).includes(needle)) continue;
      const tr = document.createElement("tr");
      tr.dataset.route = route.id;
      if (route.tail) tr.classList.add("is-tail");
      fillCableRow(tr, route);
      tbody.appendChild(tr);
      shown += 1;
    }
    $("count").textContent = needle ? `${shown} / ${routes.length}` : String(routes.length);
    if (cableSel) tbody.querySelector(`tr[data-route="${cssEscape(cableSel.id)}"]`)?.classList.add("is-selected");
  }

  function renderTabs() {
    const tabs = $("tabs");
    tabs.hidden = !routes.length;
    $("title").hidden = routes.length > 0;
    for (const b of tabs.querySelectorAll("button[data-view]")) {
      b.textContent = t(b.dataset.view === "cables" ? "edit.tabCables" : "edit.tabFixtures");
      b.classList.toggle("is-on", b.dataset.view === view);
      b.setAttribute("aria-selected", b.dataset.view === view ? "true" : "false");
    }
    $("cables-label").hidden = !routes.length;
    $("cables-on").checked = cablesOn;
    $("cables-on-text").textContent = t("edit.showCables");
  }

  function renderHead() {
    $("head").innerHTML = "";
    if (view === "cables") {
      for (const col of CABLE_COLUMNS) {
        const th = document.createElement("th");
        th.textContent = t(col.label);
        $("head").appendChild(th);
      }
      return;
    }
    for (const col of COLUMNS) {
      const th = document.createElement("th");
      th.textContent = col.axis != null ? col.label : t(col.label);
      if (col.axis != null) th.className = `axis axis-${col.key}`;
      $("head").appendChild(th);
    }
  }

  function renderRows() {
    if (view === "cables") {
      renderCableRows();
      return;
    }
    tbody.innerHTML = "";
    const needle = filterText.trim().toLowerCase();
    let shown = 0;
    let lastCable = null;
    for (const row of rows) {
      if (needle && !rowSearchText(row).includes(needle)) continue;
      const tr = document.createElement("tr");
      tr.dataset.id = row.id;
      const cableNow = `${row.room}|${propValue(row.id, "CableNumber") ?? row.id}`;
      if (cableNow === lastCable) tr.classList.add("same-cable");
      lastCable = cableNow;
      fillRow(tr, row);
      tbody.appendChild(tr);
      shown += 1;
    }
    $("count").textContent = needle ? `${shown} / ${rows.length}` : String(rows.length);
    if (selectedId) {
      const tr = tbody.querySelector(`tr[data-id="${cssEscape(selectedId)}"]`);
      tr?.classList.add("is-selected");
    }
  }

  function fillRow(tr, row) {
    tr.innerHTML = "";
    tr.dataset.state = rowState(row.id);
    tr.title = row.description || row.name;
    for (const col of COLUMNS) {
      const td = document.createElement("td");
      td.textContent = cellText(row, col);
      if (col.axis != null) td.className = "num";
      if (col.key === "id") td.className = "mono";
      tr.appendChild(td);
    }
  }

  function renderRow(id) {
    const tr = tbody.querySelector(`tr[data-id="${cssEscape(id)}"]`);
    const row = rowsById.get(id);
    if (tr && row) fillRow(tr, row);
    if (tr && id === selectedId) tr.classList.add("is-selected");
  }

  tbody.addEventListener("click", (ev) => {
    const routeTr = ev.target.closest?.("tr[data-route]");
    if (routeTr) {
      selectRoute(routeTr.dataset.route, { frame: true });
      return;
    }
    const tr = ev.target.closest?.("tr[data-id]");
    if (!tr) return;
    select(tr.dataset.id, { frame: true });
  });

  function renderExportCount() {
    const n = Object.keys(store.fixtures).length + Object.keys(store.cables || {}).length;
    $("export").textContent = n ? `${t("edit.export")} (${n})` : t("edit.export");
    $("export").classList.toggle("has-edits", n > 0);
  }

  function renderCablePosition() {
    if (!cableSel || detail.hidden) return;
    const pos = cableSelPoint();
    for (const input of detail.querySelectorAll("input[data-axis]")) {
      if (document.activeElement === input) continue;
      input.value = pos ? fmtM(pos[Number(input.dataset.axis)]) : "";
    }
    const pts = routePoints(cableSel.id) || [];
    const len = detail.querySelector('[data-role="cable-length"]');
    if (len) len.textContent = cableLengthText(routesById.get(cableSel.id), pts);
  }

  function cableLengthText(route, pts) {
    const m = polylineLength(pts).toFixed(1);
    if (route?.tail || route?.schedule == null) return `${m} m`;
    return `${m} m · ${t("edit.soupis")} ${route.schedule} m`;
  }

  function syncCableState() {
    if (!cableSel || detail.hidden) return;
    const head = detail.querySelector(".edit-detail-head");
    let badge = head?.querySelector(".edit-badge");
    if (routeEdited(cableSel.id) && head) {
      if (!badge) {
        badge = document.createElement("span");
        badge.className = "edit-badge";
        head.appendChild(badge);
      }
      badge.dataset.state = "edited";
      badge.textContent = t("edit.state.edited");
    } else badge?.remove();
    const reset = detail.querySelector('button[data-cable="reset"]');
    if (reset) reset.disabled = !routeEdited(cableSel.id);
    const n = routePoints(cableSel.id)?.length || 0;
    const del = detail.querySelector('button[data-cable="delete"]');
    if (del) del.disabled = cableSel.mode !== "vertex" || isLocked(cableSel.vertex, n) || n <= 2;
    const pos = detail.querySelector('[data-role="cable-index"]');
    if (pos) pos.textContent = cableIndexText(n);
  }

  function cableIndexText(n) {
    return cableSel.mode === "vertex"
      ? `${t("edit.vertex")} ${cableSel.vertex + 1} / ${n}`
      : `${t("edit.segment")} ${cableSel.segment + 1} / ${n - 1}`;
  }

  function renderCableDetail() {
    const route = routesById.get(cableSel.id);
    const pts = routePoints(cableSel.id);
    const n = pts.length;
    const pos = cableSelPoint();
    const movable = cableMovable();
    detail.hidden = false;
    const dis = movable && pos ? "" : "disabled";
    const axes = ["x", "y", "z"]
      .map(
        (axis, i) => `
        <div class="edit-axis axis-${axis}">
          <label class="edit-axis-top"><span class="edit-axis-label">${axis}</span>
          <input type="text" inputmode="decimal" data-axis="${i}" value="${pos ? fmtM(pos[i]) : ""}" ${dis}/></label>
          <div class="edit-axis-nudges">
          <button type="button" class="edit-btn edit-nudge" data-nudge="${i}" data-sign="-1" ${dis} aria-label="${axis} −">−</button>
          <button type="button" class="edit-btn edit-nudge" data-nudge="${i}" data-sign="1" ${dis} aria-label="${axis} +">+</button>
          </div>
        </div>`,
      )
      .join("");
    const snaps = [
      [0.01, "1 cm"],
      [0.001, "1 mm"],
      [0, t("edit.snapOff")],
    ]
      .map(([step, label]) => `<button type="button" class="edit-seg ${snapStep === step ? "is-on" : ""}" data-snap="${step}">${label}</button>`)
      .join("");
    const locked = cableSel.mode === "vertex" && isLocked(cableSel.vertex, n);
    const hint = locked
      ? t("edit.cableEndHint")
      : cableSel.mode === "segment"
        ? t("edit.segmentHint")
        : t("edit.vertexHint");
    detail.innerHTML = `
      <div class="edit-detail-head">
        <strong class="mono">${escapeHtml(route.id)}</strong>
        <span class="edit-detail-name"><span class="edit-kind" data-kind="${route.kind}"></span>${escapeHtml(route.spec)} · ${escapeHtml(cableCell(route, "ends"))} · <span data-role="cable-length">${escapeHtml(cableLengthText(route, pts))}</span></span>
        ${routeEdited(route.id) ? `<span class="edit-badge" data-state="edited">${escapeHtml(t("edit.state.edited"))}</span>` : ""}
      </div>
      <div class="edit-row edit-tools">
        <button type="button" class="edit-seg ${cableSel.mode === "segment" ? "is-on" : ""}" data-cable="mode-segment">${escapeHtml(t("edit.segment"))}</button>
        <button type="button" class="edit-seg ${cableSel.mode === "vertex" ? "is-on" : ""}" data-cable="mode-vertex">${escapeHtml(t("edit.vertex"))}</button>
        <span class="edit-spacer"></span>
        <button type="button" class="edit-btn" data-cable="prev" aria-label="${escapeHtml(t("edit.prev"))}">◀</button>
        <span class="edit-snap mono" data-role="cable-index">${escapeHtml(cableIndexText(n))}</span>
        <button type="button" class="edit-btn" data-cable="next" aria-label="${escapeHtml(t("edit.next"))}">▶</button>
      </div>
      <p class="edit-hint">${escapeHtml(hint)}${route.lead ? ` ${escapeHtml(t("edit.leadHint"))} ${escapeHtml(route.lead)}.` : ""}</p>
      <div class="edit-axes">${axes}</div>
      <div class="edit-row edit-tools">
        <span class="edit-snap">${escapeHtml(t("edit.snap"))}</span>${snaps}
      </div>
      <div class="edit-row">
        <button type="button" class="edit-btn" data-cable="insert">${escapeHtml(t("edit.insertVertex"))}</button>
        <button type="button" class="edit-btn edit-danger" data-cable="delete" ${cableSel.mode === "vertex" && !locked && n > 2 ? "" : "disabled"}>${escapeHtml(t("edit.deleteVertex"))}</button>
        <span class="edit-spacer"></span>
        <button type="button" class="edit-btn" data-cable="reset" ${routeEdited(route.id) ? "" : "disabled"}>${escapeHtml(t("edit.resetRoute"))}</button>
      </div>
      ${route.note ? `<p class="edit-hint">${escapeHtml(route.note)}</p>` : ""}`;
    notifyLayout();
  }

  function cableAction(action) {
    if (!cableSel) return;
    const pts = routePoints(cableSel.id);
    const n = pts.length;
    if (action === "mode-segment" || action === "mode-vertex") {
      cableSel.mode = action === "mode-vertex" ? "vertex" : "segment";
      if (cableSel.mode === "vertex" && isLocked(cableSel.vertex, n)) cableSel.vertex = Math.min(Math.max(1, cableSel.segment + 1), n - 1);
    } else if (action === "prev" || action === "next") {
      const step = action === "next" ? 1 : -1;
      if (cableSel.mode === "vertex") cableSel.vertex = (cableSel.vertex + step + n) % n;
      else cableSel.segment = (cableSel.segment + step + (n - 1)) % (n - 1);
    } else if (action === "insert") {
      const at = cableSel.mode === "vertex" ? Math.min(cableSel.vertex, n - 2) : cableSel.segment;
      const out = insertVertex(pts, at);
      cableSel.mode = "vertex";
      cableSel.vertex = out.index;
      setRoutePoints(cableSel.id, out.points);
    } else if (action === "delete") {
      const out = deleteVertex(pts, cableSel.vertex);
      cableSel.vertex = Math.max(1, Math.min(out.index, out.points.length - 2));
      setRoutePoints(cableSel.id, out.points);
    } else if (action === "reset") {
      delete store.cables[cableSel.id];
      const route = routesById.get(cableSel.id);
      cableLayer.update(route, routePoints(cableSel.id));
      clampCableSel();
      renderCableRow(cableSel.id);
      save();
    }
    clampCableSel();
    syncCableGizmo();
    cableLayer.setSelection(selectionState());
    renderDetail();
    ctx.markDirty();
  }

  function renderPosition() {
    if (cableSel) {
      renderCablePosition();
      return;
    }
    if (!selectedId) return;
    const pos = currentTarget(selectedId);
    for (const input of detail.querySelectorAll("input[data-axis]")) {
      if (document.activeElement === input) continue;
      const axis = Number(input.dataset.axis);
      input.value = pos ? fmtM(pos[axis]) : "";
    }
  }

  function renderDetail() {
    if (cableSel && !selectedId) {
      renderCableDetail();
      return;
    }
    if (!selectedId) {
      detail.hidden = true;
      detail.innerHTML = "";
      notifyLayout();
      return;
    }
    const row = rowsById.get(selectedId);
    const edit = store.fixtures[selectedId];
    const pos = currentTarget(selectedId);
    const deleted = Boolean(edit?.deleted);
    detail.hidden = false;
    const axes = ["x", "y", "z"]
      .map(
        (axis, i) => `
        <div class="edit-axis axis-${axis}">
          <label class="edit-axis-top"><span class="edit-axis-label">${axis}</span>
          <input type="text" inputmode="decimal" data-axis="${i}" value="${pos ? fmtM(pos[i]) : ""}" ${pos && !deleted ? "" : "disabled"}/></label>
          <div class="edit-axis-nudges">
          <button type="button" class="edit-btn edit-nudge" data-nudge="${i}" data-sign="-1" ${pos && !deleted ? "" : "disabled"} aria-label="${axis} −">−</button>
          <button type="button" class="edit-btn edit-nudge" data-nudge="${i}" data-sign="1" ${pos && !deleted ? "" : "disabled"} aria-label="${axis} +">+</button>
          </div>
        </div>`,
      )
      .join("");
    const props = EDITABLE_PROPS.map(
      (key) => `
        <label class="edit-prop"><span>${escapeHtml(t(`edit.prop.${key}`))}</span>
          <input type="text" data-prop="${key}" value="${escapeHtml(fmt(propValue(selectedId, key)))}" ${deleted ? "disabled" : ""}/></label>`,
    ).join("");
    const snaps = [
      [0.01, "1 cm"],
      [0.001, "1 mm"],
      [0, t("edit.snapOff")],
    ]
      .map(([step, label]) => `<button type="button" class="edit-seg ${snapStep === step ? "is-on" : ""}" data-snap="${step}">${label}</button>`)
      .join("");
    detail.innerHTML = `
      <div class="edit-detail-head">
        <strong class="mono">${escapeHtml(row.id)}</strong>
        <span class="edit-detail-name">${escapeHtml(row.name)}${row.room ? ` · ${escapeHtml(row.roomName || row.room)}` : ""}</span>
        ${edit ? `<span class="edit-badge" data-state="${rowState(selectedId)}">${escapeHtml(t(`edit.state.${rowState(selectedId)}`))}</span>` : ""}
      </div>
      ${row.hostId && !meshesOf(row.id).length ? `<p class="edit-hint">${escapeHtml(t("edit.inHost"))} ${escapeHtml(row.hostId)}</p>` : ""}
      <div class="edit-axes">${axes}</div>
      <div class="edit-row edit-tools">
        <span class="edit-snap">${escapeHtml(t("edit.snap"))}</span>${snaps}
        <span class="edit-spacer"></span>
        <button type="button" class="edit-btn" data-role="to-wall" ${pos && !deleted ? "" : "disabled"}>${escapeHtml(t("edit.toWall"))}</button>
      </div>
      <details class="edit-more" ${!collapsed && (wideMq.matches || detailsOpen) ? "open" : ""}>
        <summary>${escapeHtml(t("edit.schedule"))}</summary>
        <div class="edit-props">${props}</div>
        <div class="edit-row">
          <button type="button" class="edit-btn" data-role="duplicate" ${row.placement && row.list && !deleted ? "" : "disabled"}>${escapeHtml(t("edit.duplicate"))}</button>
          <button type="button" class="edit-btn edit-danger" data-role="delete">${escapeHtml(t(deleted ? "edit.restore" : edit?.add ? "edit.remove" : "edit.delete"))}</button>
          <span class="edit-spacer"></span>
          <button type="button" class="edit-btn" data-role="revert" ${edit && !edit.add ? "" : "disabled"}>${escapeHtml(t("edit.revert"))}</button>
        </div>
      </details>`;
    notifyLayout();
  }

  detail.addEventListener("click", (ev) => {
    const target = ev.target.closest?.("button");
    if (!target || (!selectedId && !cableSel)) return;
    if (target.dataset.nudge != null) {
      // Pointer presses are handled by the hold-to-repeat below; a click
      // with no pointer press (keyboard, VoiceOver) steps once.
      if (ev.detail === 0 && !hold) nudge(target, 1);
      return;
    }
    if (target.dataset.snap != null) {
      snapStep = Number(target.dataset.snap);
      renderDetail();
      return;
    }
    if (target.dataset.cable) {
      cableAction(target.dataset.cable);
      return;
    }
    if (!selectedId) return;
    const role = target.dataset.role;
    if (role === "to-wall") snapToWall(selectedId);
    else if (role === "duplicate") duplicate(selectedId);
    else if (role === "delete") toggleDelete(selectedId);
    else if (role === "revert") revert(selectedId);
  });

  // --- − / + hold to repeat (Petr, 2026-11-19: "I need to long press those
  // position buttons to move faster") ---
  /** @type {{ button: HTMLButtonElement, pointerId: number, t0: number, timer: ReturnType<typeof setTimeout> | null } | null} */
  let hold = null;

  function nudge(button, factor) {
    if (cableSel) {
      if (!cableMovable()) return;
      const step = (snapStep || 0.001) * factor;
      cableMove(Number(button.dataset.nudge), Number(button.dataset.sign) * step);
      return;
    }
    if (!selectedId) return;
    const pos = currentTarget(selectedId);
    if (!pos) return;
    const axis = Number(button.dataset.nudge);
    const step = (snapStep || 0.001) * factor;
    pos[axis] += Number(button.dataset.sign) * step;
    setTarget(selectedId, pos, { save: false });
  }

  function stopHold() {
    if (!hold) return;
    if (hold.timer) clearTimeout(hold.timer);
    hold.button.classList.remove("is-held");
    hold = null;
    save();
  }

  function holdTick() {
    if (!hold) return;
    const held = performance.now() - hold.t0;
    const { factor, interval } = holdRate(held);
    nudge(hold.button, factor);
    hold.timer = setTimeout(holdTick, interval);
  }

  detail.addEventListener("pointerdown", (ev) => {
    const button = ev.target.closest?.("button[data-nudge]");
    if (!button || button.disabled || (ev.button !== undefined && ev.button !== 0)) return;
    ev.preventDefault();
    stopHold();
    hold = { button, pointerId: ev.pointerId, t0: performance.now(), timer: null };
    button.classList.add("is-held");
    nudge(button, 1);
    hold.timer = setTimeout(holdTick, HOLD_DELAY_MS);
  });
  // Released anywhere, cancelled by the system, or slid off the button.
  for (const type of ["pointerup", "pointercancel"]) {
    window.addEventListener(type, (ev) => {
      if (hold && ev.pointerId === hold.pointerId) stopHold();
    }, true);
  }
  detail.addEventListener("pointerleave", (ev) => {
    if (hold && ev.pointerId === hold.pointerId && ev.target === hold.button) stopHold();
  }, true);
  window.addEventListener("blur", stopHold);
  // A long press must not open the iOS callout or the context menu.
  panel.addEventListener("contextmenu", (ev) => {
    if (ev.target.closest?.("button")) ev.preventDefault();
  });

  detail.addEventListener("change", (ev) => {
    const input = ev.target;
    if (!(input instanceof HTMLInputElement)) return;
    if (cableSel && !selectedId && input.dataset.axis != null) {
      const v = Number(String(input.value).replace(",", "."));
      const pos = cableSelPoint();
      const axis = Number(input.dataset.axis);
      if (pos && Number.isFinite(v) && cableMovable()) cableMove(axis, v - pos[axis]);
      save();
      renderCablePosition();
      return;
    }
    if (!selectedId) return;
    if (input.dataset.axis != null) {
      const v = Number(String(input.value).replace(",", "."));
      const pos = currentTarget(selectedId);
      if (!pos || !Number.isFinite(v)) {
        renderPosition();
        return;
      }
      pos[Number(input.dataset.axis)] = v;
      setTarget(selectedId, pos);
      renderPosition();
    } else if (input.dataset.prop) {
      setProp(selectedId, input.dataset.prop, input.value.trim());
      renderDetail();
    }
  });
  detail.addEventListener("toggle", (ev) => {
    if (ev.target?.classList?.contains("edit-more")) {
      detailsOpen = ev.target.open;
      notifyLayout();
    }
  }, true);
  detail.addEventListener("keydown", (ev) => {
    if (ev.key === "Enter" && ev.target instanceof HTMLInputElement) ev.target.blur();
  });

  function snapToWall(id) {
    const meshes = meshesOf(id);
    const root = ctx.getRoot();
    if (!meshes.length || !root) return;
    const box = worldBox(meshes);
    const center = box.getCenter(new THREE.Vector3());
    const half = box.getSize(new THREE.Vector3()).multiplyScalar(0.5);
    const row = rowsById.get(id);
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
      const dir = houseDirToWorld(d).normalize();
      raycaster.set(center, dir);
      raycaster.far = WALL_SNAP_MAX_M + Math.max(half.x, half.y, half.z);
      const hit = raycaster
        .intersectObject(root, true)
        .find((h) => !own.has(h.object) && !fixtureIdOf(h.object) && ctx.isSceneSolid(h.object) && ctx.isRenderedHit(h) && ctx.isOpaque(h.object));
      raycaster.far = Infinity;
      if (!hit) continue;
      const extent = Math.abs(dir.x) * half.x + Math.abs(dir.y) * half.y + Math.abs(dir.z) * half.z;
      const gap = hit.distance - extent;
      if (!best || Math.abs(gap) < Math.abs(best.gap)) best = { dir, gap };
    }
    if (!best) {
      flash(t("edit.noWall"));
      return;
    }
    const move = worldDirToHouse(best.dir.clone().multiplyScalar(best.gap));
    const pos = currentTarget(id);
    setTarget(
      id,
      pos.map((v, i) => Math.round((v + move[i]) * 10000) / 10000),
    );
  }

  function duplicate(id) {
    const row = rowsById.get(id);
    if (!row?.placement || !row.list) return;
    const sourceId = row.added ? store.fixtures[id]?.source : row.id;
    const source = rowsById.get(sourceId);
    if (!source) return;
    const taken = new Set([...rowsById.keys(), ...elementsById.keys()]);
    const newId = nextFixtureId({ ...row, props: { ...row.props, ...(store.fixtures[id]?.props || {}) } }, taken);
    const add = addElementFrom({ ...source, props: { ...source.props, ...(store.fixtures[id]?.props || {}) } }, newId);
    if (!add) return;
    const pos = currentTarget(id);
    // Beside the original, along the wall (or east for a ceiling device).
    const ref = row.placement.refDirection || [1, 0];
    const offset = 0.1;
    const target = [pos[0] + ref[0] * offset, pos[1] + ref[1] * offset, pos[2]];
    store.fixtures[newId] = { add, source: source.id, base: deployedBase.get(source.id)?.slice(), target };
    const props = store.fixtures[id]?.props;
    if (props) store.fixtures[newId].props = { ...props };
    materializeAdd(newId, store.fixtures[newId]);
    applyEdit(newId);
    save();
    renderRows();
    select(newId, { scroll: true });
  }

  function toggleDelete(id) {
    const edit = store.fixtures[id];
    if (edit?.add) {
      for (const mesh of addedMeshes.get(id) || []) mesh.parent?.remove(mesh);
      addedMeshes.delete(id);
      delete store.fixtures[id];
      rows = rows.filter((row) => row.id !== id);
      rowsById.delete(id);
      revision += 1;
      save();
      renderRows();
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
    save();
    renderRow(id);
    select(id);
  }

  function revert(id) {
    const edit = store.fixtures[id];
    if (!edit || edit.add) return;
    delete store.fixtures[id];
    applyEdit(id);
    save();
    renderRow(id);
    select(id);
  }

  function currentPatch() {
    return buildPatch(store, rowsById, { cables: cablePatch(store, routes, fixtureDelta) });
  }

  function patchText() {
    return JSON.stringify(currentPatch(), null, 2) + "\n";
  }

  $("export").addEventListener("click", () => {
    exportBox.hidden = !exportBox.hidden;
    if (!exportBox.hidden) exportText.value = patchText();
    notifyLayout();
  });
  $("export-close").addEventListener("click", () => {
    exportBox.hidden = true;
    notifyLayout();
  });
  function compactPatchText() {
    return JSON.stringify(buildPatch(store, rowsById));
  }
  const canShareAny = typeof navigator !== "undefined" && typeof navigator.share === "function";
  if (canShareAny) $("share").hidden = false;
  // "Share file" only where the browser says it can share a JSON file.
  try {
    if (canShareAny && typeof navigator.canShare === "function" &&
        navigator.canShare({ files: [new File(["{}"], "x.json", { type: "application/json" })] })) {
      $("share-file").hidden = false;
    }
  } catch {
    /* no File constructor or canShare threw: keep it hidden */
  }

  /** Runs navigator.share synchronously (no await first: iOS Safari opens
   * the sheet only inside the tap's user activation) and reports back. */
  function runShare(data) {
    let promise = null;
    try {
      promise = navigator.share(data);
    } catch (err) {
      promise = Promise.reject(err);
    }
    Promise.resolve(promise).then(
      () => flash(t("edit.shared")),
      (err) => {
        if (err && err.name === "AbortError") return;
        // The share sheet refused: leave the text selected for Copy.
        exportText.focus();
        exportText.select();
        flash(t("edit.shareFailed"));
      },
    );
  }
  // Share the JSON itself as text, with no title: a real iPhone sharing a
  // file + title into the Grok Bot app delivered only the title (2026-11-19).
  $("share").addEventListener("click", () => {
    const text = compactPatchText();
    exportText.value = patchText();
    runShare({ text });
  });
  $("share-file").addEventListener("click", () => {
    const text = patchText();
    exportText.value = text;
    runShare({ files: [new File([text], shareFileName(new Date()), { type: "application/json" })] });
  });
  $("copy").addEventListener("click", async () => {
    const text = patchText();
    exportText.value = text;
    try {
      await navigator.clipboard.writeText(text);
      flash(t("edit.copied"));
    } catch {
      exportText.focus();
      exportText.select();
      flash(t("edit.copyManual"));
    }
  });
  $("download").addEventListener("click", () => {
    const text = patchText();
    const blob = new Blob([text], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = shareFileName(new Date());
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 2000);
  });
  $("discard").addEventListener("click", () => {
    if (!Object.keys(store.fixtures).length && !Object.keys(store.cables || {}).length) return;
    if (!window.confirm(t("edit.discardConfirm"))) return;
    discardAll();
    exportText.value = patchText();
  });
  $("search").addEventListener("input", (ev) => {
    filterText = ev.target.value || "";
    renderRows();
  });
  $("tabs").addEventListener("click", (ev) => {
    const b = ev.target.closest?.("button[data-view]");
    if (!b) return;
    if (b.dataset.view === "cables" && selectedId) select(null);
    const opening = b.dataset.view === "cables" && view !== "cables";
    setView(b.dataset.view);
    // Opening the Cables tab shows every route.
    if (opening && !cableSel) frameRoute(null);
  });
  $("cables-on").addEventListener("change", (ev) => {
    cablesOn = Boolean(ev.target.checked);
    if (!cablesOn && cableSel) selectRoute(null);
    ctx.markDirty();
  });
  $("collapse").addEventListener("click", () => {
    collapsed = !collapsed;
    panel.classList.toggle("is-collapsed", collapsed);
    $("collapse").setAttribute("aria-expanded", collapsed ? "false" : "true");
    $("collapse").textContent = collapsed ? "▴" : "▾";
    renderDetail();
    notifyLayout();
  });

  function discardAll() {
    for (const [id, meshes] of addedMeshes) {
      for (const mesh of meshes) mesh.parent?.remove(mesh);
      rowsById.delete(id);
    }
    addedMeshes.clear();
    rows = rows.filter((row) => !row.added);
    const ids = Object.keys(store.fixtures);
    store.fixtures = {};
    store.cables = {};
    for (const id of ids) if (rowsById.has(id)) applyEdit(id);
    for (const route of routes) cableLayer.update(route, routePoints(route.id));
    save();
    renderRows();
    if (cableSel) selectRoute(cableSel.id);
    else select(selectedId && rowsById.has(selectedId) ? selectedId : null);
  }

  let flashTimer = null;
  const flashEl = document.createElement("div");
  flashEl.className = "edit-flash";
  flashEl.hidden = true;
  panel.appendChild(flashEl);
  function flash(text) {
    flashEl.textContent = text;
    flashEl.hidden = false;
    clearTimeout(flashTimer);
    flashTimer = setTimeout(() => {
      flashEl.hidden = true;
    }, 1800);
  }

  function renderStatic() {
    button.textContent = t("ui.edit");
    $("title").textContent = t("edit.title");
    $("search").placeholder = t("edit.search");
    $("share").textContent = t("edit.share");
    $("share-file").textContent = t("edit.shareFile");
    $("copy").textContent = t("edit.copy");
    $("download").textContent = t("edit.download");
    $("discard").textContent = t("edit.discard");
    $("export-hint").textContent = t("edit.exportHint");
    renderTabs();
    renderHead();
    renderExportCount();
  }

  function notifyLayout() {
    if (active) ctx.onLayout?.();
  }

  const sheet = document.getElementById("sheet");
  const sheetToggle = document.getElementById("sheet-toggle");

  function setActive(on) {
    if (on === active) return;
    if (on) ctx.beforeEnter?.();
    active = on;
    bind();
    button.classList.toggle("is-active", on);
    button.setAttribute("aria-pressed", on ? "true" : "false");
    panel.hidden = !on;
    document.body.classList.toggle("bp-editing", on);
    if (sheet) sheet.style.display = on ? "none" : "";
    if (sheetToggle) sheetToggle.style.visibility = on ? "hidden" : "";
    if (on) {
      renderStatic();
      renderRows();
      renderDetail();
    } else {
      gizmo.detach();
      gizmo.enabled = false;
      helper.visible = false;
      selHelper.visible = false;
      selectedId = null;
      cableSel = null;
      cableLayer.setSelection({});
      exportBox.hidden = true;
    }
    ctx.onActiveChange?.(on);
    ctx.onLayout?.();
    ctx.markDirty();
  }

  /** Space the panel covers, for the viewer's safe framing offset. */
  function getSafeInsets() {
    if (!active || panel.hidden) return { bottom: 0, right: 0 };
    const rect = panel.getBoundingClientRect();
    if (wideMq.matches) return { bottom: 0, right: Math.min(rect.width, PANEL_WIDE_PX) };
    return { bottom: Math.max(0, window.innerHeight - rect.top), right: 0 };
  }

  function renderOverlay(renderer, camera) {
    const showCables = cablesVisible();
    cableLayer.setVisible(showCables);
    if (showCables) cableLayer.render(renderer, camera);
    if (!active || (!selHelper.visible && !helper.visible)) return;
    gizmo.camera = camera;
    gizmo.size = gizmoSize();
    if (selectedId && !dragStart) updateSelectionBox();
    if (cableSel && !dragStart) syncCableGizmo();
    const autoClear = renderer.autoClear;
    renderer.autoClear = false;
    renderer.setRenderTarget(null);
    renderer.clearDepth();
    renderer.render(overlay, camera);
    renderer.autoClear = autoClear;
  }

  /**
   * TransformControls sizes the arrows from the full canvas height. On a
   * portrait phone the panel covers the lower half and the width is narrow,
   * so scale them to the visible part (an arrow is about a quarter of it).
   */
  function gizmoSize() {
    const rect = canvas.getBoundingClientRect();
    const h = rect.height || 1;
    const insets = getSafeInsets();
    const visible = Math.min((rect.width || 1) - insets.right, h - insets.bottom);
    return Math.max(0.35, Math.min(1, (1.3 * visible) / h));
  }

  /** Screen point (CSS px) of an arrow, for headless checks. */
  function arrowScreen(axis, along = 0.75) {
    const camera = ctx.getCamera();
    if (!gizmo.object) return null;
    helper.updateMatrixWorld(true);
    const handle = gizmo._gizmo.gizmo.translate.children.find((c) => c.name === axis && c.visible !== false);
    const scale = gizmo._gizmo.gizmo.translate.scale?.x || 1;
    const dir = { X: [1, 0, 0], Y: [0, 1, 0], Z: [0, 0, 1] }[axis];
    if (!dir) return null;
    const worldScale = handle ? handle.getWorldScale(new THREE.Vector3()).x : scale;
    const p = anchor.position.clone().add(new THREE.Vector3(...dir).multiplyScalar(along * worldScale));
    const rect = canvas.getBoundingClientRect();
    const at = ctx.projectTarget(p, camera, { w: rect.width, h: rect.height });
    return at ? { x: at.x + rect.left, y: at.y + rect.top } : null;
  }

  function onLocale() {
    button.textContent = t("ui.edit");
    if (!active) return;
    renderStatic();
    renderRows();
    renderDetail();
  }

  return {
    get active() {
      return active;
    },
    setActive,
    toggle: () => setActive(!active),
    showButton(show) {
      button.hidden = !show;
      if (show) {
        button.textContent = t("ui.edit");
        // Saved edits show in the model outside edit mode too.
        bind();
      }
    },
    blocksTaps: () => active,
    hasFixtures: () => rows.length > 0,
    revision: () => revision,
    getSafeInsets,
    renderOverlay,
    refreshLocale: onLocale,
    select: (id, opts) => select(id, opts),
    get selectedId() {
      return selectedId;
    },
    rows: () => rows.map((row) => ({ ...row, position: currentTarget(row.id), state: rowState(row.id) })),
    store: () => JSON.parse(JSON.stringify(store)),
    patch: () => currentPatch(),
    cables: {
      routes: () => routes.map((r) => ({ ...r, points: routePoints(r.id), edited: routeEdited(r.id) })),
      select: (id, opts) => selectRoute(id, opts),
      get selection() {
        return cableSel ? { ...cableSel } : null;
      },
      points: (id) => routePoints(id),
      /** Screen points (CSS px, page) of a route's vertices. */
      screen: (id) => {
        const rect = canvas.getBoundingClientRect();
        return cableLayer
          .screenPoints(id, ctx.getCamera(), rect.width, rect.height)
          .map((p) => (p ? { x: p.x + rect.left, y: p.y + rect.top } : null));
      },
      visible: () => cablesVisible(),
      frame: (id) => frameRoute(id || null),
      setView,
      get view() {
        return view;
      },
    },
    patchText,
    compactPatchText,
    position: (id) => currentTarget(id),
    worldCenter: (id) => {
      const box = worldBox(displayMeshes(id));
      return box.isEmpty() ? null : box.getCenter(new THREE.Vector3()).toArray();
    },
    arrowScreen,
    gizmoAxis: () => gizmo.axis,
  };
}

/** Hold − / +: first repeat after this delay. */
export const HOLD_DELAY_MS = 400;

/**
 * Repeat rate for a held − / + button, by how long it has been held: the
 * step grows from 1× to 5× to 10× the snap step (1 cm → 5 cm → 10 cm at
 * the 1 cm snap) and the interval shortens.
 * @param {number} heldMs
 */
export function holdRate(heldMs) {
  if (heldMs < 1200) return { factor: 1, interval: 110 };
  if (heldMs < 2400) return { factor: 5, interval: 90 };
  return { factor: 10, interval: 70 };
}

/** `FixtureEdits-YYYYMMDD-HHMM.json`, local time. */
export function shareFileName(date) {
  const pad = (n) => String(n).padStart(2, "0");
  const d = date instanceof Date ? date : new Date();
  return `FixtureEdits-${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}-${pad(d.getHours())}${pad(d.getMinutes())}.json`;
}

function cssEscape(value) {
  if (typeof CSS !== "undefined" && CSS.escape) return CSS.escape(value);
  return String(value).replace(/["\\]/g, "\\$&");
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
}

let stylesInjected = false;
function injectStyles() {
  if (stylesInjected || typeof document === "undefined") return;
  stylesInjected = true;
  const style = document.createElement("style");
  style.id = "bp-edit-styles";
  style.textContent = `
  .edit-panel { position: fixed; z-index: 30; left: 0; right: 0; bottom: 0; height: 56vh;
    display: flex; flex-direction: column; box-sizing: border-box;
    padding: 0 0 env(safe-area-inset-bottom);
    background: rgba(28, 28, 30, 0.92); color: #f5f5f7;
    -webkit-backdrop-filter: blur(18px) saturate(1.4); backdrop-filter: blur(18px) saturate(1.4);
    border-top: 1px solid rgba(255,255,255,0.12); border-radius: 14px 14px 0 0;
    font-size: 14px; }
  .edit-panel[hidden] { display: none; }
  .edit-panel.is-collapsed { height: auto; max-height: 52vh; }
  .edit-panel.is-collapsed .edit-search, .edit-panel.is-collapsed .edit-table-wrap { display: none; }
  @media (min-width: 768px) {
    .edit-panel { left: auto; top: 0; width: ${PANEL_WIDE_PX}px; max-width: 60vw; height: auto;
      border-top: none; border-left: 1px solid rgba(255,255,255,0.12); border-radius: 0;
      padding-top: calc(env(safe-area-inset-top) + 56px); }
    .edit-panel.is-collapsed { max-height: none; }
  }
  @media (prefers-color-scheme: light) {
    .edit-panel { background: rgba(246, 246, 248, 0.94); color: #1c1c1e; border-color: rgba(0,0,0,0.12); }
    .edit-table th { background: rgba(246, 246, 248, 0.98) !important; }
    .edit-btn, .edit-seg, .edit-panel input, .edit-panel textarea { color: #1c1c1e !important;
      background: rgba(0,0,0,0.06) !important; border-color: rgba(0,0,0,0.14) !important; }
    .edit-table tr.is-selected td { background: rgba(255,176,32,0.35) !important; }
    .edit-seg.is-on { background: #0a84ff !important; border-color: #0a84ff !important; color: #fff !important; }
    .edit-panel .edit-share { background: #0a84ff !important; border-color: #0a84ff !important; color: #fff !important; }
  }
  .edit-head { display: flex; align-items: center; gap: 8px; padding: 6px 10px; min-height: 48px; box-sizing: border-box; }
  .edit-title { margin: 0; font-size: 16px; font-weight: 600; }
  .edit-count { opacity: 0.65; font-size: 13px; }
  .edit-spacer { flex: 1 1 auto; }
  .edit-btn, .edit-seg { min-height: 44px; min-width: 44px; padding: 0 12px; border-radius: 10px;
    border: 1px solid rgba(255,255,255,0.16); background: rgba(255,255,255,0.08); color: inherit;
    font: inherit; cursor: pointer; touch-action: manipulation; -webkit-tap-highlight-color: transparent; }
  .edit-btn:active, .edit-seg:active, .edit-btn.is-held { transform: scale(0.96); filter: brightness(1.3); }
  /* A long press on a button must not select its text or open the callout. */
  .edit-panel button, .edit-panel summary, .edit-head, .edit-axis-label {
    -webkit-user-select: none; user-select: none; -webkit-touch-callout: none; touch-action: manipulation; }
  .edit-btn:disabled { opacity: 0.4; }
  .edit-btn[hidden] { display: none; }
  .edit-share { background: #0a84ff; border-color: #0a84ff; color: #fff; }
  .edit-btn.has-edits { background: #0a84ff; border-color: #0a84ff; color: #fff; }
  .edit-danger { color: #ff6961 !important; }
  .edit-seg { min-width: 0; padding: 0 10px; }
  .edit-seg.is-on { background: #0a84ff; border-color: #0a84ff; color: #fff !important; }
  .edit-row { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; padding: 4px 0; }
  .edit-export { padding: 4px 10px 8px; }
  .edit-export textarea { width: 100%; box-sizing: border-box; font: 12px ui-monospace, Menlo, monospace;
    background: rgba(0,0,0,0.3); color: inherit; border: 1px solid rgba(255,255,255,0.16); border-radius: 8px; }
  .edit-hint { margin: 2px 0 6px; font-size: 13px; opacity: 0.8; }
  .edit-detail { padding: 2px 10px 6px; border-bottom: 1px solid rgba(127,127,127,0.25); overflow-y: auto; max-height: 36vh; flex: 0 0 auto; }
  .edit-panel.is-collapsed .edit-detail { max-height: none; }
  .edit-detail-head { display: flex; gap: 8px; align-items: baseline; flex-wrap: wrap; padding: 2px 0 4px; }
  .edit-detail-name { opacity: 0.75; font-size: 13px; }
  .edit-badge { font-size: 12px; padding: 1px 8px; border-radius: 8px; background: #0a84ff; color: #fff; }
  .edit-badge[data-state="deleted"] { background: #ff453a; }
  .edit-badge[data-state="added"] { background: #30d158; color: #000; }
  .edit-axes { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 6px; }
  .edit-axis { display: flex; flex-direction: column; gap: 4px; padding-left: 6px;
    border-left: 4px solid currentColor; }
  .edit-axis-top { display: flex; align-items: center; gap: 4px; }
  .edit-axis-nudges { display: flex; gap: 4px; }
  .edit-axis-nudges .edit-btn { flex: 1 1 0; }
  .edit-axis-label { font-weight: 700; width: 12px; }
  .edit-axis input { min-width: 0; width: 100%; min-height: 44px; box-sizing: border-box; text-align: center;
    font: 14px ui-monospace, Menlo, monospace; color: inherit; background: rgba(0,0,0,0.25);
    border: 1px solid rgba(255,255,255,0.16); border-radius: 8px; padding: 0 2px; }
  .edit-nudge { padding: 0; min-width: 36px; font-size: 18px; }
  .axis-x { color: #ff5a52; } .axis-y { color: #4b8bff; } .axis-z { color: #3ccf5a; }
  .edit-axis input, .edit-axis button { color: inherit; }
  .edit-panel .edit-axis input { color: #f5f5f7; }
  .edit-snap { font-size: 13px; opacity: 0.75; }
  .edit-more summary { min-height: 36px; line-height: 36px; cursor: pointer; opacity: 0.85; }
  .edit-props { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 6px; }
  .edit-prop { display: flex; flex-direction: column; font-size: 12px; gap: 2px; opacity: 0.95; }
  .edit-prop input { min-height: 40px; box-sizing: border-box; font: inherit; font-size: 14px; color: inherit;
    background: rgba(0,0,0,0.25); border: 1px solid rgba(255,255,255,0.16); border-radius: 8px; padding: 0 8px; }
  .edit-search { padding: 6px 10px; display: flex; gap: 8px; align-items: center; }
  .edit-search input[type="search"] { flex: 1 1 auto; }
  .edit-cables-on { display: flex; align-items: center; gap: 6px; white-space: nowrap; font-size: 13px; min-height: 40px; }
  .edit-cables-on[hidden] { display: none; }
  .edit-cables-on input { width: 22px; height: 22px; margin: 0; }
  .edit-tabs { display: flex; gap: 4px; }
  .edit-tabs[hidden] { display: none; }
  .edit-tabs .edit-seg { font-weight: 600; }
  .edit-kind { display: inline-block; width: 10px; height: 10px; border-radius: 5px; margin-right: 6px; vertical-align: 0; }
  .edit-kind[data-kind="data"] { background: #0a84ff; }
  .edit-kind[data-kind="lv"] { background: #ffc400; }
  .edit-kind[data-kind="power"] { background: #ff3b30; }
  .edit-table tr[data-kind="data"] td:first-child { box-shadow: inset 4px 0 0 #0a84ff; }
  .edit-table tr[data-kind="lv"] td:first-child { box-shadow: inset 4px 0 0 #ffc400; }
  .edit-table tr[data-kind="power"] td:first-child { box-shadow: inset 4px 0 0 #ff3b30; }
  .edit-table tr.is-tail td { opacity: 0.8; }
  .edit-search input { width: 100%; box-sizing: border-box; min-height: 40px; font: inherit; font-size: 16px;
    color: inherit; background: rgba(0,0,0,0.25); border: 1px solid rgba(255,255,255,0.16); border-radius: 10px; padding: 0 10px; }
  .edit-table-wrap { flex: 1 1 auto; overflow: auto; -webkit-overflow-scrolling: touch; min-height: 0; }
  .edit-table { border-collapse: collapse; width: max-content; min-width: 100%; font-size: 13px; }
  .edit-table th { position: sticky; top: 0; z-index: 1; text-align: left; font-weight: 600; padding: 6px 8px;
    background: rgba(28, 28, 30, 0.98); border-bottom: 1px solid rgba(127,127,127,0.35); white-space: nowrap; }
  .edit-table td { padding: 0 8px; height: 44px; border-bottom: 1px solid rgba(127,127,127,0.18); white-space: nowrap;
    max-width: 220px; overflow: hidden; text-overflow: ellipsis; cursor: pointer; }
  .edit-table td.num { text-align: right; font-family: ui-monospace, Menlo, monospace; }
  .edit-table tr.same-cable td:nth-child(-n+2) { color: transparent; text-shadow: none; }
  .edit-table tr.same-cable td { border-top: none; }
  .edit-table tr[data-state="edited"] td:nth-child(4) { box-shadow: inset 4px 0 0 #0a84ff; }
  .edit-table tr[data-state="added"] td:nth-child(4) { box-shadow: inset 4px 0 0 #30d158; }
  .edit-table tr[data-state="deleted"] td { text-decoration: line-through; opacity: 0.55; }
  .edit-table tr.is-selected td { background: rgba(255,176,32,0.28); }
  .mono { font-family: ui-monospace, Menlo, monospace; }
  .edit-flash { position: absolute; left: 50%; top: 52px; transform: translateX(-50%); padding: 8px 14px;
    border-radius: 10px; background: #0a84ff; color: #fff; font-size: 14px; pointer-events: none; }
  body.bp-editing #walk-hint { display: none; }
  `;
  document.head.appendChild(style);
}

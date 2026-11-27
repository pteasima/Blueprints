/**
 * Cable-route editing: vertices and segments, selection, and route actions.
 * Structural split from editMode.js; behavior is unchanged.
 */
import * as THREE from "three";
import {
  cleanPoints,
  currentPoints,
  deleteVertex,
  editFor,
  endAnchors,
  insertVertex,
  isLocked,
  moveSegment,
  moveVertex,
  prepareSegmentMove,
  samePoint,
} from "./cableEdits.js";
import { cssEscape } from "./editModeUtils.js";

/**
 * @param {object} em edit-mode session bag shared with createEditMode and the other attach* modules
 */
export function attachEditCables(em) {
  const ctx = em.ctx;
  const canvas = em.canvas;
  const controls = em.controls;
  const t = em.t;

  function routePoints(id) {
    const route = em.routesById.get(id);
    return route ? currentPoints(route, em.store.cables[id], em.fixtureDelta) : null;
  }

  function cablesVisible() {
    // The Electrical › cables layer (main.js) shows them everywhere; in edit
    // mode the Cables switch shows them too.
    const layer = typeof ctx.cablesLayer === "function" ? ctx.cablesLayer() : em.cablesParam;
    return em.routes.length > 0 && em.bound && ((em.active && em.cablesOn) || layer);
  }

  /** Redraw the routes that end at this fixture (it moved). */
  function refreshCablesAt(fixtureId) {
    if (!em.bound) return;
    for (const route of em.routes) {
      const a = endAnchors(route);
      if (a.to !== fixtureId && a.from !== fixtureId) continue;
      em.cableLayer.update(route, routePoints(route.id));
      em.renderCableRow(route.id);
    }
  }

  function routeEdited(id) {
    return Boolean(em.store.cables[id]);
  }

  /** Store these points for a route (or drop the edit if they are the deployed ones). */
  function setRoutePoints(id, points, opts = {}) {
    const route = em.routesById.get(id);
    if (!route) return;
    const deployed = currentPoints(route, null, em.fixtureDelta);
    const same = points.length === deployed.length && points.every((p, i) => samePoint(p, deployed[i]));
    if (same) delete em.store.cables[id];
    else em.store.cables[id] = editFor(route, points, em.fixtureDelta);
    em.cableLayer.update(route, routePoints(id));
    em.clampCableSel();
    em.syncCableGizmo();
    em.renderCableRow(id);
    em.renderCablePosition();
    em.syncCableState();
    ctx.markDirty();
    if (opts.save !== false) em.save();
  }

  /** Move the selected vertex or segment by `d` (house metres) along `axis`. */
  function applyCableDelta(state, d, axis, opts = {}) {
    if (!em.cableSel) return;
    const base = state.points;
    let next;
    if (em.cableSel.mode === "vertex") {
      if (isLocked(em.cableSel.vertex, base.length)) return;
      const p = base[em.cableSel.vertex];
      next = moveVertex(base, em.cableSel.vertex, [p[0] + d[0], p[1] + d[1], p[2] + d[2]]);
    } else {
      if (!state.prepared) {
        state.prepared = prepareSegmentMove(base, em.cableSel.segment, axis);
        state.moved = [state.prepared.a, state.prepared.b];
      }
      next = moveSegment(state.prepared.points, state.prepared.a, state.prepared.b, d);
      em.cableSel.segment = state.prepared.a;
    }
    state.last = next;
    setRoutePoints(em.cableSel.id, next, opts);
  }

  /** After a drag or a nudge: drop collapsed jogs, keep the moved part selected. */
  function finishCableMove() {
    if (!em.cableSel) return;
    const pts = routePoints(em.cableSel.id);
    if (!pts) return;
    const keepA = em.cableSel.mode === "vertex" ? pts[em.cableSel.vertex] : pts[em.cableSel.segment];
    const keepB = em.cableSel.mode === "vertex" ? null : pts[em.cableSel.segment + 1];
    const clean = cleanPoints(pts);
    if (clean.length !== pts.length) {
      if (em.cableSel.mode === "vertex") {
        const i = clean.findIndex((p) => samePoint(p, keepA));
        if (i >= 0) em.cableSel.vertex = i;
      } else {
        const i = clean.findIndex((p, k) => k + 1 < clean.length && samePoint(p, keepA) && samePoint(clean[k + 1], keepB));
        if (i >= 0) em.cableSel.segment = i;
      }
      setRoutePoints(em.cableSel.id, clean, { save: false });
    }
    em.cableLayer.setSelection(em.selectionState());
  }

  function cableMove(axis, amount) {
    const state = { points: routePoints(em.cableSel.id), prepared: null };
    const d = [0, 0, 0];
    d[axis] = amount;
    applyCableDelta(state, d, axis, { save: false });
    finishCableMove();
  }

  /** Where the selected vertex / segment midpoint is (house metres). */
  function cableSelPoint() {
    if (!em.cableSel) return null;
    const pts = routePoints(em.cableSel.id);
    if (!pts) return null;
    if (em.cableSel.mode === "vertex") return pts[em.cableSel.vertex]?.slice() || null;
    const a = pts[em.cableSel.segment];
    const b = pts[em.cableSel.segment + 1];
    return a && b ? a.map((v, i) => (v + b[i]) / 2) : null;
  }

  function clampCableSel() {
    if (!em.cableSel) return;
    const n = routePoints(em.cableSel.id)?.length || 2;
    em.cableSel.vertex = Math.max(0, Math.min(em.cableSel.vertex, n - 1));
    em.cableSel.segment = Math.max(0, Math.min(em.cableSel.segment, n - 2));
  }

  function cableMovable() {
    if (!em.cableSel) return false;
    const n = routePoints(em.cableSel.id)?.length || 0;
    return em.cableSel.mode === "segment" ? n >= 2 : !isLocked(em.cableSel.vertex, n);
  }

  function selectionState() {
    if (em.cableSel) {
      return {
        routeId: em.cableSel.id,
        vertex: em.cableSel.mode === "vertex" ? em.cableSel.vertex : null,
        segment: em.cableSel.mode === "segment" ? em.cableSel.segment : null,
      };
    }
    if (em.selectedId) {
      const related = new Set(
        em.routes.filter((r) => [r.to, r.from, r.toBox, r.fromBox].includes(em.selectedId)).map((r) => r.id),
      );
      return { related };
    }
    return {};
  }

  function syncCableGizmo() {
    if (!em.cableSel || em.dragStart) return;
    const p = cableSelPoint();
    if (p && cableMovable()) {
      em.anchor.position.copy(em.houseToWorld(p));
      em.anchor.updateMatrixWorld(true);
      em.gizmo.camera = ctx.getCamera();
      em.gizmo.attach(em.anchor);
      em.gizmo.enabled = true;
      em.helper.visible = true;
    } else {
      em.gizmo.detach();
      em.gizmo.enabled = false;
      em.helper.visible = false;
    }
  }

  /**
   * Select a cable route (null clears it).
   * @param {string | null} id
   * @param {{ mode?: "vertex" | "segment", vertex?: number, segment?: number, frame?: boolean, scroll?: boolean }} [opts]
   */
  function selectRoute(id, opts = {}) {
    const route = id ? em.routesById.get(id) : null;
    if (em.selectedId) {
      em.selectedId = null;
      em.selHelper.visible = false;
    }
    if (!route) {
      em.cableSel = null;
      em.gizmo.detach();
      em.gizmo.enabled = false;
      em.helper.visible = false;
    } else {
      const keep = em.cableSel?.id === route.id ? em.cableSel : null;
      const n = routePoints(route.id).length;
      em.cableSel = {
        id: route.id,
        mode: opts.mode || keep?.mode || "segment",
        vertex: opts.vertex ?? keep?.vertex ?? Math.min(1, n - 1),
        segment: opts.segment ?? keep?.segment ?? Math.floor((n - 1) / 2),
      };
      clampCableSel();
      if (em.view !== "cables") em.setView("cables");
      syncCableGizmo();
    }
    em.cableLayer.setSelection(selectionState());
    for (const tr of em.tbody.querySelectorAll("tr.is-selected")) tr.classList.remove("is-selected");
    const tr = em.cableSel ? em.tbody.querySelector(`tr[data-route="${cssEscape(em.cableSel.id)}"]`) : null;
    if (tr) {
      tr.classList.add("is-selected");
      if (opts.scroll) tr.scrollIntoView({ block: "center", behavior: "smooth" });
    }
    if (opts.frame && em.cableSel) em.frameRoute(em.cableSel.id);
    em.renderDetail();
    ctx.markDirty();
  }

  /** Fly to one route, or to all of them (no id). */
  function frameRoute(id) {
    const box = new THREE.Box3();
    const list = Array.isArray(id) ? id.map((k) => em.routesById.get(k)) : id ? [em.routesById.get(id)] : em.routes;
    for (const r of list) if (r) box.union(em.cableLayer.worldBox(r.id));
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
    if (next === em.view || (next === "cables" && !em.routes.length)) return;
    em.view = next;
    if (em.view === "fixtures" && em.cableSel) {
      em.cableSel = null;
      em.gizmo.detach();
      em.gizmo.enabled = false;
      em.helper.visible = false;
      em.cableLayer.setSelection({});
    }
    if (em.active) {
      em.renderTabs();
      em.renderHead();
      em.renderRows();
      em.renderDetail();
    }
  }

  /** The cable (and vertex of the selected one) under a tap. */
  function pickCable(clientX, clientY) {
    if (!cablesVisible()) return null;
    const camera = ctx.getCamera();
    const rect = canvas.getBoundingClientRect();
    const w = rect.width || 1;
    const h = rect.height || 1;
    const at = { x: clientX - rect.left, y: clientY - rect.top };
    if (em.cableSel) {
      const screen = em.cableLayer.screenPoints(em.cableSel.id, camera, w, h);
      let best = null;
      screen.forEach((p, i) => {
        if (!p) return;
        const d = Math.hypot(p.x - at.x, p.y - at.y);
        if (d <= 20 && (!best || d < best.d)) best = { i, d };
      });
      if (best) return { routeId: em.cableSel.id, vertex: best.i };
    }
    return em.cableLayer.pick(camera, at, w, h, 14);
  }

  function cableAction(action) {
    if (!em.cableSel) return;
    const pts = routePoints(em.cableSel.id);
    const n = pts.length;
    if (action === "mode-segment" || action === "mode-vertex") {
      em.cableSel.mode = action === "mode-vertex" ? "vertex" : "segment";
      if (em.cableSel.mode === "vertex" && isLocked(em.cableSel.vertex, n)) em.cableSel.vertex = Math.min(Math.max(1, em.cableSel.segment + 1), n - 1);
    } else if (action === "prev" || action === "next") {
      const step = action === "next" ? 1 : -1;
      if (em.cableSel.mode === "vertex") em.cableSel.vertex = (em.cableSel.vertex + step + n) % n;
      else em.cableSel.segment = (em.cableSel.segment + step + (n - 1)) % (n - 1);
    } else if (action === "insert") {
      const at = em.cableSel.mode === "vertex" ? Math.min(em.cableSel.vertex, n - 2) : em.cableSel.segment;
      const out = insertVertex(pts, at);
      em.cableSel.mode = "vertex";
      em.cableSel.vertex = out.index;
      setRoutePoints(em.cableSel.id, out.points);
    } else if (action === "delete") {
      const out = deleteVertex(pts, em.cableSel.vertex);
      em.cableSel.vertex = Math.max(1, Math.min(out.index, out.points.length - 2));
      setRoutePoints(em.cableSel.id, out.points);
    } else if (action === "reset") {
      delete em.store.cables[em.cableSel.id];
      const route = em.routesById.get(em.cableSel.id);
      em.cableLayer.update(route, routePoints(em.cableSel.id));
      clampCableSel();
      em.renderCableRow(em.cableSel.id);
      em.save();
    }
    clampCableSel();
    syncCableGizmo();
    em.cableLayer.setSelection(selectionState());
    em.renderDetail();
    ctx.markDirty();
  }

  Object.assign(em, {
    routePoints,
    cablesVisible,
    refreshCablesAt,
    routeEdited,
    setRoutePoints,
    applyCableDelta,
    finishCableMove,
    cableMove,
    cableSelPoint,
    clampCableSel,
    cableMovable,
    selectionState,
    syncCableGizmo,
    selectRoute,
    frameRoute,
    setView,
    pickCable,
    cableAction,
  });
}

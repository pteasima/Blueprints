/**
 * Cable route edits: pure functions, no three.js and no DOM
 * (tests: cableEdits.test.mjs).
 *
 * The routes come from `docs/models/<id>.cables.json`, which
 * `python -m blueprints.cable_routes` writes from
 * inputs/ground_floor/cable-routes.yaml plus the committed overrides.
 * A route is a polyline in house metres (x east, y north, z up) from a
 * distribution board (or the box a tail starts at) to a fixture. Its first
 * and last vertex belong to those ends and are not dragged on their own.
 *
 * Petr, 2026-11-19: "Editor should let me adjust each segment of a cable.
 * ... Maybe naively moving the last cable segment is fine". So a fixture
 * move drags only the end vertex of every route that ends (or starts) at it.
 *
 * Store entry per edited route (inside the edit store, key `cables`):
 *   { points: [[x, y, z], ...], toDelta: [dx, dy, dz], fromDelta: [...] }
 * `points` are absolute; the deltas are the end fixtures' moves when the
 * points were stored, so a later fixture move still drags the end.
 * docs/electrical/CableRoutes.md has the whole round trip.
 */

/** Two points closer than this are the same vertex. */
export const SAME_M = 1e-4;

/** Tolerance for "the deployed model already has this route". */
export const ROUTE_ABSORBED_M = 0.0015;

/** Colours by cable kind (docs/electrical/CableRoutes.md). */
export const KIND_COLORS = {
  data: 0x0a84ff,
  lv: 0xffc400,
  power: 0xff3b30,
};

const ZERO = [0, 0, 0];

function clonePoints(points) {
  return (points || []).map((p) => [Number(p[0]), Number(p[1]), Number(p[2])]);
}

function add3(a, b) {
  return [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
}

function sub3(a, b) {
  return [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
}

function r4(v) {
  return Math.round(v * 10000) / 10000;
}

export function round3(p) {
  return [r4(p[0]), r4(p[1]), r4(p[2])];
}

export function samePoint(a, b, tol = SAME_M) {
  return Math.abs(a[0] - b[0]) <= tol && Math.abs(a[1] - b[1]) <= tol && Math.abs(a[2] - b[2]) <= tol;
}

/**
 * Normalised route records from the cables JSON.
 * @param {{ routes?: object[] } | null | undefined} data
 */
export function routeRecords(data) {
  const out = [];
  for (const r of data?.routes || []) {
    if (!r || !r.id || !Array.isArray(r.points) || r.points.length < 2) continue;
    out.push({
      id: String(r.id),
      cable: r.cable ?? null,
      room: r.room ? String(r.room) : "",
      kind: KIND_COLORS[r.kind] != null ? r.kind : "data",
      spec: r.spec || "",
      from: r.from ? String(r.from) : null,
      to: r.to ? String(r.to) : null,
      toBox: r.toBox ? String(r.toBox) : null,
      fromBox: r.fromBox ? String(r.fromBox) : null,
      tail: Boolean(r.tail),
      lead: r.lead || null,
      note: r.note || "",
      schedule: r.schedule ?? null,
      cableModelled: r.cableModelled ?? null,
      points: clonePoints(r.points),
    });
  }
  out.sort((a, b) => {
    const room = a.room.localeCompare(b.room, "cs", { numeric: true });
    if (room) return room;
    const cable = Number(a.cable ?? 1e9) - Number(b.cable ?? 1e9);
    if (cable) return cable;
    if (a.tail !== b.tail) return a.tail ? 1 : -1;
    return a.id.localeCompare(b.id, "en", { numeric: true });
  });
  return out;
}

/** Fixture whose move drags the route's last / first vertex. */
export function endAnchors(route) {
  return { to: route.toBox || route.to, from: route.fromBox || route.from };
}

/**
 * The route as drawn now: the stored edit (or the deployed points) with the
 * end vertices dragged by their fixtures' moves.
 * @param {object} route record
 * @param {{ points: number[][], toDelta?: number[], fromDelta?: number[] } | null | undefined} edit
 * @param {(fixtureId: string | null) => number[] | null} delta current fixture move, house metres
 */
export function currentPoints(route, edit, delta) {
  const anchors = endAnchors(route);
  const dTo = (anchors.to && delta(anchors.to)) || ZERO;
  const dFrom = (anchors.from && delta(anchors.from)) || ZERO;
  const points = clonePoints(edit?.points || route.points);
  const n = points.length;
  const toShift = edit?.points ? sub3(dTo, edit.toDelta || ZERO) : dTo;
  const fromShift = edit?.points ? sub3(dFrom, edit.fromDelta || ZERO) : dFrom;
  points[n - 1] = round3(add3(points[n - 1], toShift));
  points[0] = round3(add3(points[0], fromShift));
  return points;
}

/** A store entry for these absolute points. */
export function editFor(route, points, delta) {
  const anchors = endAnchors(route);
  return {
    points: clonePoints(points).map(round3),
    toDelta: round3((anchors.to && delta(anchors.to)) || ZERO),
    fromDelta: round3((anchors.from && delta(anchors.from)) || ZERO),
  };
}

export function isLocked(index, count) {
  return index <= 0 || index >= count - 1;
}

export function polylineLength(points) {
  let total = 0;
  for (let i = 1; i < points.length; i += 1) {
    total += Math.hypot(...sub3(points[i], points[i - 1]));
  }
  return total;
}

/** Dominant axis of a segment (0 x, 1 y, 2 z), or -1 when it is a diagonal. */
export function segmentAxis(a, b, tol = SAME_M) {
  const d = sub3(b, a).map(Math.abs);
  const moving = d.filter((v) => v > tol).length;
  if (moving !== 1) return -1;
  return d.indexOf(Math.max(...d));
}

/** Drop repeated vertices (a collapsed jog), never the ends. */
export function cleanPoints(points) {
  const out = [];
  for (let i = 0; i < points.length; i += 1) {
    const p = points[i];
    if (out.length && samePoint(out[out.length - 1], p) && i !== points.length - 1) continue;
    if (out.length && i === points.length - 1 && samePoint(out[out.length - 1], p) && out.length > 1) {
      out[out.length - 1] = p.slice();
      continue;
    }
    out.push(p.slice());
  }
  return out.length >= 2 ? out : clonePoints(points.slice(0, 1).concat(points.slice(-1)));
}

/** Move one inner vertex to an absolute point. */
export function moveVertex(points, index, target) {
  if (isLocked(index, points.length)) return clonePoints(points);
  const out = clonePoints(points);
  out[index] = round3(target);
  return out;
}

/**
 * New vertex in the middle of segment `index` → `index + 1` (or the one
 * before it when `index` is the last vertex). Returns the points and the
 * new vertex's index.
 */
export function insertVertex(points, index) {
  const out = clonePoints(points);
  let i = Math.max(0, Math.min(index, out.length - 2));
  const a = out[i];
  const b = out[i + 1];
  const mid = round3([(a[0] + b[0]) / 2, (a[1] + b[1]) / 2, (a[2] + b[2]) / 2]);
  out.splice(i + 1, 0, mid);
  return { points: out, index: i + 1 };
}

/** Remove an inner vertex; the ends stay. */
export function deleteVertex(points, index) {
  if (isLocked(index, points.length) || points.length <= 2) return { points: clonePoints(points), index };
  const out = clonePoints(points);
  out.splice(index, 1);
  return { points: out, index: Math.min(index, out.length - 2) };
}

/**
 * Get a segment ready to slide along `axis` without tilting its
 * neighbours. A neighbour that already runs along `axis` just stretches.
 * Otherwise (or when the segment touches a locked end) a connector vertex
 * is inserted, so the move grows a short jog along `axis` and every
 * segment stays axis-aligned (Petr's brief: "moving a segment shifts its
 * two endpoints, keeping axis-alignment").
 * @returns {{ points: number[][], a: number, b: number }} a, b: the vertices that move
 */
export function prepareSegmentMove(points, segment, axis) {
  const out = clonePoints(points);
  let a = segment;
  let b = segment + 1;
  // End b first, so the index of a does not shift.
  const after = b + 1 < out.length ? segmentAxis(out[b], out[b + 1]) : -2;
  if (isLocked(b, out.length) || after !== axis) {
    out.splice(b + 1, 0, out[b].slice());
  }
  const before = a - 1 >= 0 ? segmentAxis(out[a - 1], out[a]) : -2;
  if (isLocked(a, out.length) || before !== axis) {
    out.splice(a, 0, out[a].slice());
    a += 1;
    b += 1;
  }
  return { points: out, a, b };
}

/** Both ends of a prepared segment moved by `delta` from `base` points. */
export function moveSegment(base, a, b, delta) {
  const out = clonePoints(base);
  out[a] = round3(add3(base[a], delta));
  out[b] = round3(add3(base[b], delta));
  return out;
}

/**
 * Patch entries for the overrides file: the absolute polyline of every
 * route Petr edited and of every route whose end fixture moved.
 * @param {{ cables?: Record<string, object> }} store
 * @param {object[]} routes
 * @param {(fixtureId: string | null) => number[] | null} delta
 */
export function cablePatch(store, routes, delta) {
  const out = {};
  for (const route of routes) {
    const edit = store.cables?.[route.id];
    const now = currentPoints(route, edit, delta);
    if (edit || !route.points.every((p, i) => samePoint(p, now[i]))) {
      out[route.id] = { points: now.map(round3) };
    }
  }
  return Object.fromEntries(Object.entries(out).sort(([a], [b]) => a.localeCompare(b, "en", { numeric: true })));
}

/**
 * Drop stored route edits the deployed model already has, or whose route
 * is gone. Run after the fixture edits are pruned.
 * @returns {string[]} route ids dropped
 */
export function pruneCables(store, routes, delta) {
  const byId = new Map(routes.map((r) => [r.id, r]));
  const dropped = [];
  for (const [id, edit] of Object.entries(store.cables || {})) {
    const route = byId.get(id);
    if (!route || !Array.isArray(edit?.points) || edit.points.length < 2) {
      delete store.cables[id];
      dropped.push(id);
      continue;
    }
    const now = currentPoints(route, edit, delta);
    const deployed = currentPoints(route, null, delta);
    if (now.length === deployed.length && now.every((p, i) => samePoint(p, deployed[i], ROUTE_ABSORBED_M))) {
      delete store.cables[id];
      dropped.push(id);
    }
  }
  return dropped;
}

/** Text a route row matches in the table filter. */
export function routeSearchText(route) {
  return [route.room, route.cable, route.id, route.from, route.to, route.spec, route.kind, route.tail ? "tail" : "main"]
    .filter((v) => v != null && v !== "")
    .join(" ")
    .toLowerCase();
}

/**
 * Closest segment of a projected polyline to a screen point.
 * @param {{ x: number, y: number }[]} screen projected vertices (null when behind the camera)
 * @param {{ x: number, y: number }} at
 * @returns {{ segment: number, distance: number, t: number } | null}
 */
export function nearestSegment(screen, at) {
  let best = null;
  for (let i = 1; i < screen.length; i += 1) {
    const a = screen[i - 1];
    const b = screen[i];
    if (!a || !b) continue;
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    const len2 = dx * dx + dy * dy;
    const t = len2 > 1e-9 ? Math.max(0, Math.min(1, ((at.x - a.x) * dx + (at.y - a.y) * dy) / len2)) : 0;
    const d = Math.hypot(a.x + dx * t - at.x, a.y + dy * t - at.y);
    if (!best || d < best.distance) best = { segment: i - 1, distance: d, t };
  }
  return best;
}

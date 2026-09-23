/**
 * Clip indexed/non-indexed BufferGeometry against planes (keep positive half-space).
 * Used to bake WebGL section cuts into meshes for USDZ export, to derive
 * cut-face silhouette segments, and to fill those cuts with solid caps.
 * Three.js clipping only discards fragments — it does not create a face.
 */
import * as THREE from "three";
import { toArExportMaterial } from "./materials.js";

const EPS = 1e-5;

/** @type {WeakMap<THREE.BufferGeometry, Array<[THREE.Vector3, THREE.Vector3, THREE.Vector3]>>} */
const localTriCache = new WeakMap();

/** @param {THREE.Vector3} a @param {THREE.Vector3} b @param {number} da @param {number} db */
function lerpVertex(a, b, da, db) {
  const t = da / (da - db);
  return a.clone().lerp(b, t);
}

/**
 * @param {[THREE.Vector3, THREE.Vector3, THREE.Vector3]} tri
 * @param {THREE.Plane} plane
 * @param {Array<[THREE.Vector3, THREE.Vector3, THREE.Vector3]>} out
 */
function clipTriangle(tri, plane, out) {
  const [v0, v1, v2] = tri;
  const d0 = plane.distanceToPoint(v0);
  const d1 = plane.distanceToPoint(v1);
  const d2 = plane.distanceToPoint(v2);
  const in0 = d0 >= -EPS;
  const in1 = d1 >= -EPS;
  const in2 = d2 >= -EPS;
  const count = (in0 ? 1 : 0) + (in1 ? 1 : 0) + (in2 ? 1 : 0);

  if (count === 3) {
    out.push([v0, v1, v2]);
    return;
  }
  if (count === 0) return;

  const verts = [v0, v1, v2];
  const dists = [d0, d1, d2];
  const inside = [in0, in1, in2];

  if (count === 1) {
    const i0 = inside.findIndex(Boolean);
    const i1 = (i0 + 1) % 3;
    const i2 = (i0 + 2) % 3;
    const a = verts[i0];
    const b = lerpVertex(verts[i0], verts[i1], dists[i0], dists[i1]);
    const c = lerpVertex(verts[i0], verts[i2], dists[i0], dists[i2]);
    out.push([a, b, c]);
    return;
  }

  // Two vertices inside → clip to a quad (two triangles).
  const o0 = inside.findIndex((v) => !v);
  const o1 = (o0 + 1) % 3;
  const o2 = (o0 + 2) % 3;
  if (inside[o1]) {
    const a = verts[o1];
    const b = verts[o2];
    const c = lerpVertex(verts[o0], verts[o1], dists[o0], dists[o1]);
    const d = lerpVertex(verts[o0], verts[o2], dists[o0], dists[o2]);
    out.push([a, b, c]);
    out.push([b, d, c]);
  } else {
    const a = verts[o2];
    const b = lerpVertex(verts[o0], verts[o1], dists[o0], dists[o1]);
    const c = lerpVertex(verts[o0], verts[o2], dists[o0], dists[o2]);
    out.push([a, b, c]);
  }
}

/**
 * Cut-face edge where a triangle straddles `plane` (the two lerp points).
 * @param {[THREE.Vector3, THREE.Vector3, THREE.Vector3]} tri
 * @param {THREE.Plane} plane
 * @returns {[THREE.Vector3, THREE.Vector3] | null}
 */
function trianglePlaneCutSegment(tri, plane) {
  const [v0, v1, v2] = tri;
  const d0 = plane.distanceToPoint(v0);
  const d1 = plane.distanceToPoint(v1);
  const d2 = plane.distanceToPoint(v2);
  const in0 = d0 >= -EPS;
  const in1 = d1 >= -EPS;
  const in2 = d2 >= -EPS;
  const count = (in0 ? 1 : 0) + (in1 ? 1 : 0) + (in2 ? 1 : 0);
  if (count === 0 || count === 3) return null;

  const verts = [v0, v1, v2];
  const dists = [d0, d1, d2];
  const inside = [in0, in1, in2];

  if (count === 1) {
    const i0 = inside.findIndex(Boolean);
    const i1 = (i0 + 1) % 3;
    const i2 = (i0 + 2) % 3;
    return [
      lerpVertex(verts[i0], verts[i1], dists[i0], dists[i1]),
      lerpVertex(verts[i0], verts[i2], dists[i0], dists[i2]),
    ];
  }

  const o0 = inside.findIndex((v) => !v);
  const o1 = (o0 + 1) % 3;
  const o2 = (o0 + 2) % 3;
  if (inside[o1]) {
    return [
      lerpVertex(verts[o0], verts[o1], dists[o0], dists[o1]),
      lerpVertex(verts[o0], verts[o2], dists[o0], dists[o2]),
    ];
  }
  return [
    lerpVertex(verts[o0], verts[o1], dists[o0], dists[o1]),
    lerpVertex(verts[o0], verts[o2], dists[o0], dists[o2]),
  ];
}

/**
 * Trim segment to the intersection of positive half-spaces.
 * @param {THREE.Vector3} a
 * @param {THREE.Vector3} b
 * @param {THREE.Plane[]} planes
 * @returns {[THREE.Vector3, THREE.Vector3] | null}
 */
function clipSegmentAgainstPlanes(a, b, planes) {
  let p = a.clone();
  let q = b.clone();
  for (const plane of planes) {
    const dp = plane.distanceToPoint(p);
    const dq = plane.distanceToPoint(q);
    const inp = dp >= -EPS;
    const inq = dq >= -EPS;
    if (inp && inq) continue;
    if (!inp && !inq) return null;
    const hit = lerpVertex(p, q, dp, dq);
    if (inp) q = hit;
    else p = hit;
  }
  if (p.distanceToSquared(q) < EPS * EPS) return null;
  return [p, q];
}

/**
 * @param {Array<[THREE.Vector3, THREE.Vector3, THREE.Vector3]>} tris
 * @param {THREE.Plane[]} planes
 */
function clipTriangles(tris, planes) {
  let current = tris;
  for (const plane of planes) {
    const next = [];
    for (const tri of current) clipTriangle(tri, plane, next);
    current = next;
    if (current.length === 0) break;
  }
  return current;
}

/**
 * @param {THREE.BufferGeometry} geometry
 * @param {THREE.Matrix4} matrixWorld
 * @returns {Array<[THREE.Vector3, THREE.Vector3, THREE.Vector3]>}
 */
function extractWorldTriangles(geometry, matrixWorld) {
  const pos = geometry.getAttribute("position");
  if (!pos) return [];
  const tmp = new THREE.Vector3();
  const tris = [];
  const index = geometry.getIndex();

  function pushTri(i0, i1, i2) {
    tris.push([
      tmp.fromBufferAttribute(pos, i0).applyMatrix4(matrixWorld).clone(),
      tmp.fromBufferAttribute(pos, i1).applyMatrix4(matrixWorld).clone(),
      tmp.fromBufferAttribute(pos, i2).applyMatrix4(matrixWorld).clone(),
    ]);
  }

  if (index) {
    for (let i = 0; i < index.count; i += 3) {
      pushTri(index.getX(i), index.getX(i + 1), index.getX(i + 2));
    }
  } else {
    for (let i = 0; i < pos.count; i += 3) {
      pushTri(i, i + 1, i + 2);
    }
  }
  return tris;
}

/**
 * Local-space triangles (no matrix).
 * @param {THREE.BufferGeometry} geometry
 * @returns {Array<[THREE.Vector3, THREE.Vector3, THREE.Vector3]>}
 */
function extractLocalTriangles(geometry) {
  const pos = geometry.getAttribute("position");
  if (!pos) return [];
  const tmp = new THREE.Vector3();
  /** @type {Array<[THREE.Vector3, THREE.Vector3, THREE.Vector3]>} */
  const tris = [];
  const index = geometry.getIndex();

  function pushTri(i0, i1, i2) {
    tris.push([
      tmp.fromBufferAttribute(pos, i0).clone(),
      tmp.fromBufferAttribute(pos, i1).clone(),
      tmp.fromBufferAttribute(pos, i2).clone(),
    ]);
  }

  if (index) {
    for (let i = 0; i < index.count; i += 3) {
      pushTri(index.getX(i), index.getX(i + 1), index.getX(i + 2));
    }
  } else {
    for (let i = 0; i < pos.count; i += 3) {
      pushTri(i, i + 1, i + 2);
    }
  }
  return tris;
}

/**
 * Weld tolerance in mesh-local units (glTF metres). Smaller than any real
 * layer (foil is 1 mm) and larger than shared-edge lerp noise.
 */
const CAP_WELD = 1e-6;

/**
 * Push the filled face into the kept half-space so it survives the clip
 * (distance 0 is legal, but log-depth and the other planes eat a coplanar
 * fragment) without opening a visible gap at the silhouette.
 */
const CAP_PUSH_M = 2e-4;

/** @type {WeakMap<THREE.BufferGeometry, { key: string, segments: Float32Array, perPlane: THREE.Vector3[][][] }>} */
const cutDataCache = new WeakMap();

/**
 * @param {THREE.Plane[]} planes
 * @returns {string}
 */
function planesKey(planes) {
  let s = "";
  for (const p of planes) {
    s += `${p.normal.x.toFixed(6)},${p.normal.y.toFixed(6)},${p.normal.z.toFixed(6)},${p.constant.toFixed(6)};`;
  }
  return s;
}

/**
 * @param {THREE.Vector3} v
 * @returns {string}
 */
function weldKey(v) {
  const q = (x) => Math.round(x / CAP_WELD);
  return `${q(v.x)},${q(v.y)},${q(v.z)}`;
}

/**
 * One walk: cut silhouettes plus the untrimmed-per-plane segment lists
 * the solid caps are stitched from.
 * @param {THREE.BufferGeometry} geometry
 * @param {THREE.Plane[]} localPlanes
 */
function ensureCutData(geometry, localPlanes) {
  const key = planesKey(localPlanes);
  const cached = cutDataCache.get(geometry);
  if (cached && cached.key === key) return cached;

  /** @type {number[]} */
  const packed = [];
  /** @type {THREE.Vector3[][][]} */
  const perPlane = [];

  let tris = localTriCache.get(geometry);
  if (!tris) {
    tris = extractLocalTriangles(geometry);
    localTriCache.set(geometry, tris);
  }

  if (tris.length && localPlanes?.length) {
    for (let pi = 0; pi < localPlanes.length; pi++) {
      const plane = localPlanes[pi];
      const others = localPlanes.filter((_, j) => j !== pi);
      /** @type {THREE.Vector3[][]} */
      const segs = [];
      for (const tri of tris) {
        const seg = trianglePlaneCutSegment(tri, plane);
        if (!seg) continue;
        const trimmed = others.length
          ? clipSegmentAgainstPlanes(seg[0], seg[1], others)
          : seg;
        if (!trimmed) continue;
        segs.push(trimmed);
        packed.push(
          trimmed[0].x,
          trimmed[0].y,
          trimmed[0].z,
          trimmed[1].x,
          trimmed[1].y,
          trimmed[1].z,
        );
      }
      perPlane.push(segs);
    }
  }

  const data = {
    key,
    segments: new Float32Array(packed),
    perPlane,
  };
  cutDataCache.set(geometry, data);
  return data;
}

/**
 * Chain undirected cut segments into closed loops.
 * Open chains (T-junctions, clip slivers) are dropped.
 * @param {THREE.Vector3[][]} segments
 * @returns {THREE.Vector3[][]}
 */
function stitchLoops(segments) {
  /** @type {Map<string, THREE.Vector3>} */
  const points = new Map();
  /** @type {{ a: string, b: string, used: boolean }[]} */
  const edges = [];
  /** @type {Map<string, number[]>} */
  const adj = new Map();

  for (const [a, b] of segments) {
    const ka = weldKey(a);
    const kb = weldKey(b);
    if (ka === kb) continue;
    if (!points.has(ka)) points.set(ka, a.clone());
    if (!points.has(kb)) points.set(kb, b.clone());
    const id = edges.length;
    edges.push({ a: ka, b: kb, used: false });
    if (!adj.has(ka)) adj.set(ka, []);
    if (!adj.has(kb)) adj.set(kb, []);
    adj.get(ka).push(id);
    adj.get(kb).push(id);
  }

  /**
   * @param {string} at
   * @param {string | null} prev
   */
  function takeEdge(at, prev) {
    const ids = adj.get(at) || [];
    let best = -1;
    let bestDot = -Infinity;
    const here = points.get(at);
    const pin = prev ? points.get(prev) : null;
    for (const id of ids) {
      if (edges[id].used) continue;
      if (!pin) return id;
      const e = edges[id];
      const nk = e.a === at ? e.b : e.a;
      const np = points.get(nk);
      const inx = here.x - pin.x;
      const iny = here.y - pin.y;
      const inz = here.z - pin.z;
      const ox = np.x - here.x;
      const oy = np.y - here.y;
      const oz = np.z - here.z;
      const dot = inx * ox + iny * oy + inz * oz;
      if (dot > bestDot) {
        bestDot = dot;
        best = id;
      }
    }
    return best;
  }

  /** @type {THREE.Vector3[][]} */
  const loops = [];
  for (let i = 0; i < edges.length; i++) {
    if (edges[i].used) continue;
    /** @type {THREE.Vector3[]} */
    const loop = [];
    /** @type {number[]} */
    const usedIds = [];
    let eid = i;
    let at = edges[eid].a;
    const start = at;
    /** @type {string | null} */
    let prev = null;
    let closed = false;
    const guardMax = edges.length + 2;
    for (let guard = 0; guard < guardMax; guard++) {
      edges[eid].used = true;
      usedIds.push(eid);
      loop.push(points.get(at).clone());
      const next = edges[eid].a === at ? edges[eid].b : edges[eid].a;
      if (next === start) {
        closed = true;
        break;
      }
      const nid = takeEdge(next, at);
      if (nid < 0) break;
      prev = at;
      at = next;
      eid = nid;
    }
    if (closed && loop.length >= 3) loops.push(loop);
    else {
      // Leave the failed chain consumed — an open cut is not a face.
      void prev;
      void usedIds;
    }
  }
  return loops;
}

/**
 * @param {THREE.Vector3} normal
 * @returns {{ u: THREE.Vector3, v: THREE.Vector3, n: THREE.Vector3 }}
 */
function planeBasis(normal) {
  const n = normal.clone().normalize();
  const ref =
    Math.abs(n.x) < 0.9 ? new THREE.Vector3(1, 0, 0) : new THREE.Vector3(0, 1, 0);
  const u = new THREE.Vector3().crossVectors(ref, n).normalize();
  const v = new THREE.Vector3().crossVectors(n, u).normalize();
  return { u, v, n };
}

/**
 * @param {THREE.Vector3[]} loop
 * @param {THREE.Vector3} origin
 * @param {THREE.Vector3} u
 * @param {THREE.Vector3} v
 */
function loopTo2D(loop, origin, u, v) {
  return loop.map((p) => {
    const d = p.clone().sub(origin);
    return { x: d.dot(u), y: d.dot(v), p3: p };
  });
}

/**
 * @param {{ x: number, y: number }[]} ring
 */
function signedArea(ring) {
  let a = 0;
  for (let i = 0; i < ring.length; i++) {
    const j = (i + 1) % ring.length;
    a += ring[i].x * ring[j].y - ring[j].x * ring[i].y;
  }
  return a * 0.5;
}

/**
 * @param {{ x: number, y: number, p3: THREE.Vector3 }[]} ring
 */
function ensureCCW(ring) {
  if (signedArea(ring) < 0) ring.reverse();
  return ring;
}

/**
 * @param {number} px
 * @param {number} py
 * @param {{ x: number, y: number }[]} ring
 */
function pointInRing(px, py, ring) {
  let inside = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const yi = ring[i].y;
    const yj = ring[j].y;
    const xi = ring[i].x;
    const xj = ring[j].x;
    const hit =
      yi > py !== yj > py &&
      px < ((xj - xi) * (py - yi)) / (yj - yi + 0) + xi;
    if (hit) inside = !inside;
  }
  return inside;
}

/**
 * @param {{ x: number, y: number }} a
 * @param {{ x: number, y: number }} b
 * @param {{ x: number, y: number }} c
 */
function orient2(a, b, c) {
  return (b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x);
}

/**
 * Proper intersection only — shared endpoints do not count.
 * @param {{ x: number, y: number }} a
 * @param {{ x: number, y: number }} b
 * @param {{ x: number, y: number }} c
 * @param {{ x: number, y: number }} d
 */
function segmentsCross(a, b, c, d) {
  const o1 = orient2(a, b, c);
  const o2 = orient2(a, b, d);
  const o3 = orient2(c, d, a);
  const o4 = orient2(c, d, b);
  return o1 * o2 < 0 && o3 * o4 < 0;
}

/**
 * @param {{ x: number, y: number }} a
 * @param {{ x: number, y: number }} b
 * @param {{ x: number, y: number }[]} ring
 * @param {number} skipIndex endpoint of `ring` that the segment may touch
 */
function crossesRing(a, b, ring, skipIndex) {
  const n = ring.length;
  for (let i = 0; i < n; i++) {
    const j = (i + 1) % n;
    if (skipIndex >= 0 && (i === skipIndex || j === skipIndex)) continue;
    if (segmentsCross(a, b, ring[i], ring[j])) return true;
  }
  return false;
}

/**
 * Splice a CCW hole into a CCW outer so the result is one weakly-simple CCW ring.
 * @param {{ x: number, y: number, p3: THREE.Vector3 }[]} outer
 * @param {{ x: number, y: number, p3: THREE.Vector3 }[]} hole
 */
function bridgeHole(outer, hole) {
  let hi = 0;
  for (let i = 1; i < hole.length; i++) {
    if (hole[i].x > hole[hi].x) hi = i;
  }
  const hp = hole[hi];
  let bestEdge = -1;
  let bestX = Infinity;
  const n = outer.length;
  for (let i = 0; i < n; i++) {
    const a = outer[i];
    const b = outer[(i + 1) % n];
    if (a.y > hp.y === b.y > hp.y) continue;
    const denom = b.y - a.y;
    if (Math.abs(denom) < 1e-15) continue;
    const t = (hp.y - a.y) / denom;
    if (t < -1e-8 || t > 1 + 1e-8) continue;
    const x = a.x + t * (b.x - a.x);
    if (x >= hp.x - 1e-8 && x < bestX) {
      bestX = x;
      bestEdge = i;
    }
  }

  /** @type {number[]} */
  const candidates = [];
  if (bestEdge >= 0) {
    candidates.push(bestEdge, (bestEdge + 1) % n);
  }
  let nearest = 0;
  let nearestD = Infinity;
  for (let i = 0; i < n; i++) {
    const d = (outer[i].x - hp.x) ** 2 + (outer[i].y - hp.y) ** 2;
    if (d < nearestD) {
      nearestD = d;
      nearest = i;
    }
  }
  candidates.push(nearest);

  let bi = -1;
  for (const idx of candidates) {
    if (crossesRing(hp, outer[idx], outer, idx)) continue;
    if (crossesRing(hp, outer[idx], hole, hi)) continue;
    bi = idx;
    break;
  }
  if (bi < 0) return null;

  /** @type {typeof outer} */
  const merged = [];
  for (let i = 0; i < n; i++) {
    merged.push(outer[i]);
    if (i !== bi) continue;
    for (let k = 0; k < hole.length; k++) {
      merged.push(hole[(hi - k + hole.length) % hole.length]);
    }
    merged.push(hole[hi]);
    merged.push(outer[i]);
  }
  return merged;
}

/**
 * @param {{ x: number, y: number }} p
 * @param {{ x: number, y: number }} a
 * @param {{ x: number, y: number }} b
 * @param {{ x: number, y: number }} c
 */
function same2(p, q) {
  return (p.x - q.x) ** 2 + (p.y - q.y) ** 2 <= CAP_WELD * CAP_WELD;
}

function pointInTri(p, a, b, c) {
  // The bridge repeats a vertex. That copy is the corner, not an interior point.
  if (same2(p, a) || same2(p, b) || same2(p, c)) return false;
  const c1 = orient2(a, b, p);
  const c2 = orient2(b, c, p);
  const c3 = orient2(c, a, p);
  const hasNeg = c1 < -1e-14 || c2 < -1e-14 || c3 < -1e-14;
  const hasPos = c1 > 1e-14 || c2 > 1e-14 || c3 > 1e-14;
  return !(hasNeg && hasPos);
}

/**
 * Ear-clip a CCW ring. Collinear vertices are dropped. Reflex chains that
 * refuse to clip return whatever triangles were produced.
 * @param {{ x: number, y: number, p3: THREE.Vector3 }[]} ring
 * @returns {THREE.Vector3[][]}
 */
function earClip(ring) {
  /** @type {{ x: number, y: number, p3: THREE.Vector3 }[]} */
  const verts = [];
  for (const p of ring) {
    const prev = verts[verts.length - 1];
    if (prev && (prev.x - p.x) ** 2 + (prev.y - p.y) ** 2 < CAP_WELD * CAP_WELD) {
      continue;
    }
    verts.push(p);
  }
  if (verts.length >= 2) {
    const a = verts[0];
    const b = verts[verts.length - 1];
    if ((a.x - b.x) ** 2 + (a.y - b.y) ** 2 < CAP_WELD * CAP_WELD) verts.pop();
  }
  /** @type {THREE.Vector3[][]} */
  const tris = [];
  let guard = verts.length * verts.length + 8;
  while (verts.length > 3 && guard-- > 0) {
    let clipped = false;
    const n = verts.length;
    for (let i = 0; i < n; i++) {
      const ia = (i + n - 1) % n;
      const ic = (i + 1) % n;
      const a = verts[ia];
      const b = verts[i];
      const c = verts[ic];
      const turn = orient2(a, b, c);
      if (turn < -1e-14) continue;
      if (turn <= 1e-14) {
        verts.splice(i, 1);
        clipped = true;
        break;
      }
      let blocked = false;
      for (let j = 0; j < n; j++) {
        if (j === i || j === ia || j === ic) continue;
        if (pointInTri(verts[j], a, b, c)) {
          blocked = true;
          break;
        }
      }
      if (blocked) continue;
      tris.push([a.p3, b.p3, c.p3]);
      verts.splice(i, 1);
      clipped = true;
      break;
    }
    if (!clipped) break;
  }
  if (verts.length === 3) {
    const turn = orient2(verts[0], verts[1], verts[2]);
    if (turn > 1e-14) tris.push([verts[0].p3, verts[1].p3, verts[2].p3]);
  }
  return tris;
}

/**
 * @param {THREE.Vector3[][]} loops
 * @param {THREE.Plane} plane
 * @param {number} push
 * @returns {THREE.Vector3[][]}
 */
function triangulateLoops(loops, plane, push) {
  if (!loops.length) return [];
  const { u, v, n } = planeBasis(plane.normal);
  const origin = loops[0][0];
  const rings = loops.map((loop) => ensureCCW(loopTo2D(loop, origin, u, v)));

  /** @type {number[]} */
  const depth = rings.map((ring, i) => {
    const p = ring[0];
    let d = 0;
    for (let j = 0; j < rings.length; j++) {
      if (j === i) continue;
      if (pointInRing(p.x, p.y, rings[j])) d++;
    }
    return d;
  });

  /** @type {THREE.Vector3[][]} */
  const tris = [];
  for (let i = 0; i < rings.length; i++) {
    if (depth[i] % 2 !== 0) continue;
    let ring = rings[i].slice();
    for (let h = 0; h < rings.length; h++) {
      if (depth[h] !== depth[i] + 1) continue;
      if (!pointInRing(rings[h][0].x, rings[h][0].y, ring)) continue;
      const merged = bridgeHole(ring, rings[h]);
      if (merged) ring = merged;
    }
    const piece = earClip(ring);
    for (const tri of piece) {
      tris.push(
        tri.map((p) => p.clone().addScaledVector(n, push)),
      );
    }
  }
  return tris;
}

/**
 * Per-plane cut segments in geometry-local space (same walk as the silhouettes).
 * @param {THREE.BufferGeometry} geometry
 * @param {THREE.Plane[]} localPlanes
 * @returns {THREE.Vector3[][][]}
 */
export function cutPlaneSegments(geometry, localPlanes) {
  if (!geometry || !localPlanes?.length) return [];
  return ensureCutData(geometry, localPlanes).perPlane;
}

/**
 * Filled polygon for one cut, from segments already in the same space as `plane`.
 * Open chains are dropped. Loops inside other loops stay open (window openings).
 * @param {THREE.Vector3[][]} segments
 * @param {THREE.Plane} plane
 * @param {number} [pushM]
 * @returns {Float32Array}
 */
export function triangulateCutSegments(segments, plane, pushM = 0) {
  if (!segments?.length || !plane) return new Float32Array(0);
  const loops = stitchLoops(segments);
  const tris = triangulateLoops(
    loops,
    plane,
    CAP_PUSH_M + Math.max(0, pushM),
  );
  if (!tris.length) return new Float32Array(0);
  const positions = new Float32Array(tris.length * 9);
  let o = 0;
  for (const [a, b, c] of tris) {
    positions[o++] = a.x;
    positions[o++] = a.y;
    positions[o++] = a.z;
    positions[o++] = b.x;
    positions[o++] = b.y;
    positions[o++] = b.z;
    positions[o++] = c.x;
    positions[o++] = c.y;
    positions[o++] = c.z;
  }
  return positions;
}

/**
 * Plane∩mesh silhouette segments in geometry-local space.
 * Each cut plane contributes intersection segments, trimmed by the other planes.
 *
 * @param {THREE.BufferGeometry} geometry
 * @param {THREE.Plane[]} localPlanes — already transformed into mesh local space
 * @returns {Float32Array} packed xyzxyz per segment (may be empty)
 */
export function cutEdgeSegmentPositions(geometry, localPlanes) {
  if (!geometry || !localPlanes?.length) return new Float32Array(0);
  return ensureCutData(geometry, localPlanes).segments;
}

/**
 * Solid cut faces in geometry-local space, one buffer per plane.
 * Triangles sit just inside the kept half-space. Holes (a window punched
 * through a wall) stay open.
 *
 * @param {THREE.BufferGeometry} geometry
 * @param {THREE.Plane[]} localPlanes
 * @param {number} [pushM] extra push along the kept normal (metres)
 * @returns {{ planeIndex: number, positions: Float32Array }[]}
 */
export function cutCapBuffers(geometry, localPlanes, pushM = 0) {
  if (!geometry || !localPlanes?.length) return [];
  const data = ensureCutData(geometry, localPlanes);
  /** @type {{ planeIndex: number, positions: Float32Array }[]} */
  const out = [];
  const push = CAP_PUSH_M + Math.max(0, pushM);
  for (let pi = 0; pi < data.perPlane.length; pi++) {
    const loops = stitchLoops(data.perPlane[pi]);
    const tris = triangulateLoops(loops, localPlanes[pi], push);
    if (!tris.length) continue;
    const positions = new Float32Array(tris.length * 9);
    let o = 0;
    for (const [a, b, c] of tris) {
      positions[o++] = a.x;
      positions[o++] = a.y;
      positions[o++] = a.z;
      positions[o++] = b.x;
      positions[o++] = b.y;
      positions[o++] = b.z;
      positions[o++] = c.x;
      positions[o++] = c.y;
      positions[o++] = c.z;
    }
    out.push({ planeIndex: pi, positions });
  }
  return out;
}

/**
 * @param {THREE.Plane[]} worldPlanes
 * @param {THREE.Matrix4} matrixWorld
 * @returns {THREE.Plane[]}
 */
export function worldPlanesToLocal(worldPlanes, matrixWorld) {
  if (!worldPlanes?.length) return [];
  const inv = new THREE.Matrix4().copy(matrixWorld).invert();
  return worldPlanes.map((p) => p.clone().applyMatrix4(inv));
}

/**
 * @param {Array<[THREE.Vector3, THREE.Vector3, THREE.Vector3]>} tris
 * @returns {THREE.BufferGeometry}
 */
function trianglesToGeometry(tris) {
  const positions = new Float32Array(tris.length * 9);
  let o = 0;
  for (const [a, b, c] of tris) {
    positions[o++] = a.x;
    positions[o++] = a.y;
    positions[o++] = a.z;
    positions[o++] = b.x;
    positions[o++] = b.y;
    positions[o++] = b.z;
    positions[o++] = c.x;
    positions[o++] = c.y;
    positions[o++] = c.z;
  }
  const geom = new THREE.BufferGeometry();
  geom.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geom.computeVertexNormals();
  return geom;
}

/**
 * Bake clipping planes into mesh geometry (world space).
 * @param {THREE.Mesh} mesh
 * @param {THREE.Plane[]} planes
 * @returns {THREE.Mesh | null}
 */
export function meshToClippedExportMesh(mesh, planes) {
  if (!mesh.visible || !mesh.geometry) return null;
  const tris = extractWorldTriangles(mesh.geometry, mesh.matrixWorld);
  if (tris.length === 0) return null;
  const clipped = planes.length ? clipTriangles(tris, planes) : tris;
  if (clipped.length === 0) return null;

  const geom = trianglesToGeometry(clipped);
  // MeshBasic (Solid) and other non-standard mats must become MeshStandardMaterial
  // or THREE.USDZExporter silently drops the mesh → empty/broken AR.
  const exportMat = toArExportMaterial(mesh.material, geom);
  const out = new THREE.Mesh(geom, exportMat);
  out.name = mesh.name;
  return out;
}

/**
 * Solid vs Realistic material modes for the WebGL viewer.
 * SOLID_COLORS must stay in sync with SECTION_LAYERS fill/line RGB in export_utils.py.
 */
import * as THREE from "three";

export const MATERIAL_MODE_KEY = "blueprints.materialMode";
export const MODE_SOLID = "solid";
export const MODE_REALISTIC = "realistic";

/** @type {Record<string, [number, number, number]>} 0–255 RGB — near-max chroma */
export const SOLID_COLORS = {
  podlaha: [230, 115, 20],
  eps: [70, 230, 25],
  zdivo: [225, 70, 40],
  omitka: [255, 225, 120],
  nabytek: [255, 150, 0],
  pozednice: [200, 85, 10],
  koruna: [200, 85, 10],
  predstena: [0, 195, 245],
  pouzdro: [235, 185, 80],
  krov: [200, 85, 10],
  vata: [0, 210, 155],
  soffit: [35, 175, 15],
  podhled: [15, 85, 245],
  krytina: [235, 15, 15],
};

/**
 * Nested Parts outline. A child is a leaf CAD label (string) or a group
 * `{ id, label, children }`. Nesting is arbitrary; current data is one group
 * level plus leaves. Keep leaf ids in sync with SOLID_COLORS / SECTION_LAYERS.
 *
 * @typedef {{ id: string, label: string, children: PartTreeNode[] }} PartTreeGroup
 * @typedef {string | PartTreeGroup} PartTreeNode
 * @typedef {{ type: "leaf", id: string, label: string }} OutlineLeaf
 * @typedef {{ type: "group", id: string, label: string, children: OutlineNode[] }} OutlineGroup
 * @typedef {OutlineLeaf | OutlineGroup} OutlineNode
 */

/** @type {PartTreeGroup[]} */
export const PART_GROUPS = [
  {
    id: "walls",
    label: "Walls",
    children: ["zdivo", "eps", "omitka", "predstena", "pouzdro"],
  },
  {
    id: "roof",
    label: "Roof",
    children: [
      "pozednice",
      "koruna",
      "krov",
      "vata",
      "soffit",
      "podhled",
      "krytina",
    ],
  },
  {
    id: "interior",
    label: "Interior",
    children: ["podlaha", "nabytek"],
  },
];

/**
 * Filter PART_GROUPS to labels present in the loaded GLB; stash leftovers in Other.
 * @param {Iterable<string>} availableLabels
 * @returns {OutlineNode[]}
 */
export function resolvePartOutline(availableLabels) {
  const remaining = new Set(availableLabels);

  /**
   * @param {PartTreeNode[]} nodes
   * @returns {OutlineNode[]}
   */
  function walk(nodes) {
    /** @type {OutlineNode[]} */
    const out = [];
    for (const node of nodes) {
      if (typeof node === "string") {
        if (!remaining.has(node)) continue;
        remaining.delete(node);
        out.push({ type: "leaf", id: node, label: node });
        continue;
      }
      const kids = walk(node.children || []);
      if (!kids.length) continue;
      out.push({
        type: "group",
        id: node.id,
        label: node.label,
        children: kids,
      });
    }
    return out;
  }

  const tree = walk(PART_GROUPS);
  if (remaining.size) {
    const otherLeaves = [...remaining]
      .sort((a, b) => a.localeCompare(b))
      .map((id) => /** @type {OutlineLeaf} */ ({ type: "leaf", id, label: id }));
    tree.push({
      type: "group",
      id: "other",
      label: "Other",
      children: otherLeaves,
    });
  }
  return tree;
}

/**
 * @param {OutlineNode} node
 * @returns {string[]}
 */
export function collectLeafIds(node) {
  if (node.type === "leaf") return [node.id];
  /** @type {string[]} */
  const ids = [];
  for (const child of node.children) {
    ids.push(...collectLeafIds(child));
  }
  return ids;
}

/**
 * Apply opacity to meshes. opacity 0 → hidden (visible=false) for perf / AR omit.
 * Translucent meshes keep depthWrite so nearer surfaces still occlude (no
 * punch-through). Tradeoff: you will not see a faded layer *behind* another
 * faded layer until the front one is hidden — true OIT was too unstable here.
 * @param {THREE.Object3D[]} meshes
 * @param {number} opacity 0–1
 */
export function applyOpacityToMeshes(meshes, opacity) {
  const o = Math.max(0, Math.min(1, Number(opacity) || 0));
  for (const mesh of meshes) {
    if (!mesh) continue;
    if (o <= 0) {
      mesh.visible = false;
      continue;
    }
    mesh.visible = true;
    if (!mesh.isMesh) continue;
    const list = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
    for (const mat of list) {
      if (!mat) continue;
      if (o < 1) {
        mat.transparent = true;
        mat.opacity = o;
        mat.depthWrite = true;
        mat.depthTest = true;
        mat.side = THREE.DoubleSide;
        mat.blending = THREE.NormalBlending;
      } else {
        mat.transparent = false;
        mat.opacity = 1;
        mat.depthWrite = true;
        mat.depthTest = true;
        mat.side = THREE.DoubleSide;
        mat.blending = THREE.NormalBlending;
      }
      mat.needsUpdate = true;
    }
  }
}

/**
 * Stable depth bias for stacked layers (outside → inside / below → above).
 * Higher wins when faces are nearly coplanar (polygonOffset + renderOrder).
 * @type {Record<string, number>}
 */
export const LAYER_DEPTH_BIAS = {
  podlaha: 0,
  eps: 1,
  zdivo: 2,
  omitka: 3,
  pouzdro: 4,
  predstena: 5,
  nabytek: 6,
  soffit: 7,
  pozednice: 8,
  koruna: 9,
  vata: 10,
  krov: 11,
  krytina: 12,
  podhled: 13,
};

/**
 * @typedef {{
 *   color: [number, number, number],
 *   roughness: number,
 *   metalness: number,
 *   clearcoat?: number,
 *   clearcoatRoughness?: number,
 *   map?: 'wood' | 'foam' | 'plaster' | 'wool' | 'metal' | 'masonry' | 'none',
 * }} RealisticPreset
 */

/** @type {Record<string, RealisticPreset>} */
export const REALISTIC_PRESETS = {
  podlaha: {
    color: [230, 115, 20],
    roughness: 0.68,
    metalness: 0.0,
    map: "wood",
  },
  eps: {
    color: [70, 230, 25],
    roughness: 0.94,
    metalness: 0.0,
    map: "foam",
  },
  zdivo: {
    color: [225, 70, 40],
    roughness: 0.9,
    metalness: 0.0,
    map: "masonry",
  },
  omitka: {
    color: [255, 225, 120],
    roughness: 0.92,
    metalness: 0.0,
    map: "plaster",
  },
  nabytek: {
    color: [255, 150, 0],
    roughness: 0.38,
    metalness: 0.0,
    clearcoat: 0.35,
    clearcoatRoughness: 0.28,
    map: "wood",
  },
  pozednice: {
    color: [200, 85, 10],
    roughness: 0.55,
    metalness: 0.0,
    map: "wood",
  },
  koruna: {
    color: [200, 85, 10],
    roughness: 0.55,
    metalness: 0.0,
    map: "wood",
  },
  predstena: {
    color: [0, 195, 245],
    roughness: 0.84,
    metalness: 0.0,
    map: "plaster",
  },
  pouzdro: {
    color: [235, 185, 80],
    roughness: 0.7,
    metalness: 0.0,
    map: "plaster",
  },
  krov: {
    color: [200, 85, 10],
    roughness: 0.55,
    metalness: 0.0,
    map: "wood",
  },
  vata: {
    color: [0, 210, 155],
    roughness: 0.97,
    metalness: 0.0,
    map: "wool",
  },
  soffit: {
    color: [35, 175, 15],
    roughness: 0.72,
    metalness: 0.0,
    map: "plaster",
  },
  podhled: {
    color: [15, 85, 245],
    roughness: 0.78,
    metalness: 0.08,
    map: "plaster",
  },
  krytina: {
    color: [235, 15, 15],
    roughness: 0.32,
    metalness: 0.45,
    map: "metal",
  },
};

/** @type {Map<string, THREE.CanvasTexture>} */
const textureCache = new Map();

/**
 * @param {string} kind
 * @returns {THREE.CanvasTexture | null}
 */
function getMapTexture(kind) {
  if (!kind || kind === "none") return null;
  const cached = textureCache.get(kind);
  if (cached) return cached;

  const size = 128;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;

  if (kind === "wood") {
    ctx.fillStyle = "#c49858";
    ctx.fillRect(0, 0, size, size);
    for (let i = 0; i < size; i++) {
      const n = Math.sin(i * 0.35) * 8 + Math.sin(i * 0.11) * 4;
      const g = 130 + ((i * 17) % 50);
      ctx.strokeStyle = `rgba(${g - 40}, ${g - 60}, ${g - 100}, 0.55)`;
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.moveTo(0, i + n * 0.15);
      ctx.lineTo(size, i - n * 0.1);
      ctx.stroke();
    }
    for (let k = 0; k < 60; k++) {
      const x = (k * 37) % size;
      const y = (k * 53) % size;
      ctx.fillStyle = "rgba(70, 40, 15, 0.22)";
      ctx.fillRect(x, y, 2, 7 + (k % 5));
    }
  } else if (kind === "foam") {
    ctx.fillStyle = "#9ed468";
    ctx.fillRect(0, 0, size, size);
    for (let y = 0; y < size; y += 7) {
      for (let x = 0; x < size; x += 7) {
        const ox = ((y / 7) % 2) * 3.5;
        const r = 2.4 + ((x * y) % 5) * 0.2;
        ctx.beginPath();
        ctx.arc(x + ox + 3.5, y + 3.5, r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255,0.55)";
        ctx.fill();
        ctx.strokeStyle = "rgba(40,90,30,0.35)";
        ctx.stroke();
      }
    }
  } else if (kind === "plaster") {
    const img = ctx.createImageData(size, size);
    for (let i = 0; i < img.data.length; i += 4) {
      const n = 200 + ((i * 13) % 45);
      img.data[i] = n;
      img.data[i + 1] = n - 10;
      img.data[i + 2] = n - 22;
      img.data[i + 3] = 255;
    }
    ctx.putImageData(img, 0, 0);
  } else if (kind === "wool") {
    ctx.fillStyle = "#88c860";
    ctx.fillRect(0, 0, size, size);
    for (let i = 0; i < 1400; i++) {
      const x = (i * 47) % size;
      const y = (i * 91) % size;
      ctx.fillStyle = i % 3 === 0 ? "rgba(255,255,255,0.4)" : "rgba(30,70,20,0.28)";
      ctx.fillRect(x, y, 1 + (i % 2), 2 + (i % 3));
    }
  } else if (kind === "metal") {
    const grad = ctx.createLinearGradient(0, 0, size, size);
    grad.addColorStop(0, "#a02820");
    grad.addColorStop(0.4, "#f07060");
    grad.addColorStop(0.55, "#701810");
    grad.addColorStop(1, "#d04838");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, size, size);
    for (let y = 0; y < size; y += 9) {
      ctx.fillStyle = "rgba(255,255,255,0.22)";
      ctx.fillRect(0, y, size, 2);
      ctx.fillStyle = "rgba(0,0,0,0.28)";
      ctx.fillRect(0, y + 4, size, 2);
    }
  } else if (kind === "masonry") {
    ctx.fillStyle = "#b88868";
    ctx.fillRect(0, 0, size, size);
    const brickH = 16;
    const brickW = 32;
    for (let row = 0; row < size / brickH; row++) {
      const offset = (row % 2) * (brickW / 2);
      for (let col = -1; col < size / brickW + 1; col++) {
        const x = col * brickW + offset;
        const y = row * brickH;
        ctx.fillStyle = `rgba(${170 + ((row + col) % 3) * 18}, ${110 + (row % 4) * 10}, ${70 + (col % 3) * 12}, 0.75)`;
        ctx.fillRect(x + 1, y + 1, brickW - 2, brickH - 2);
        ctx.strokeStyle = "rgba(70,45,30,0.55)";
        ctx.strokeRect(x + 0.5, y + 0.5, brickW - 1, brickH - 1);
      }
    }
  } else {
    return null;
  }

  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(2.5, 2.5);
  tex.needsUpdate = true;
  textureCache.set(kind, tex);
  return tex;
}

/**
 * @param {[number, number, number]} rgb
 * @returns {THREE.Color}
 */
function solidColor(rgb) {
  return new THREE.Color(rgb[0] / 255, rgb[1] / 255, rgb[2] / 255);
}

/**
 * @param {string} label
 * @returns {[number, number, number]}
 */
function colorForLabel(label) {
  return SOLID_COLORS[label] || [160, 160, 160];
}

/**
 * @param {THREE.Material} mat
 * @param {THREE.Plane[] | null | undefined} planes
 * @param {number} depthBias
 */
function finishMaterial(mat, planes, depthBias = 0) {
  mat.side = THREE.DoubleSide;
  // Bias nested/abutting CAD faces so one layer consistently wins in the
  // depth buffer (cuts make coplanar interfaces much more visible).
  if (depthBias > 0) {
    mat.polygonOffset = true;
    mat.polygonOffsetFactor = -depthBias;
    mat.polygonOffsetUnits = -depthBias * 2;
  } else {
    mat.polygonOffset = false;
    mat.polygonOffsetFactor = 0;
    mat.polygonOffsetUnits = 0;
  }
  if (planes) {
    mat.clippingPlanes = planes;
    mat.clipIntersection = false;
  } else {
    mat.clippingPlanes = [];
  }
  mat.needsUpdate = true;
}

/**
 * CAD GLBs from build123d/OCCT ship without UVs; project box UVs so maps show.
 * @param {THREE.BufferGeometry} geometry
 * @returns {number} characteristic span (mm) for texture repeat
 */
function ensureBoxUVs(geometry) {
  geometry.computeBoundingBox();
  const bb = geometry.boundingBox;
  const size = new THREE.Vector3();
  bb.getSize(size);
  const sx = Math.max(size.x, 1e-6);
  const sy = Math.max(size.y, 1e-6);
  const sz = Math.max(size.z, 1e-6);
  const span = Math.max(sx, sy, sz);

  if (!geometry.getAttribute("normal")) {
    geometry.computeVertexNormals();
  }
  const pos = geometry.getAttribute("position");
  const nrm = geometry.getAttribute("normal");
  if (!pos) return span;

  const existing = geometry.getAttribute("uv");
  if (existing && existing.count === pos.count) return span;

  const uvs = new Float32Array(pos.count * 2);
  const v = new THREE.Vector3();
  for (let i = 0; i < pos.count; i++) {
    v.fromBufferAttribute(pos, i);
    const nx = Math.abs(nrm.getX(i));
    const ny = Math.abs(nrm.getY(i));
    const nz = Math.abs(nrm.getZ(i));
    let u;
    let vv;
    if (ny >= nx && ny >= nz) {
      u = (v.x - bb.min.x) / sx;
      vv = (v.z - bb.min.z) / sz;
    } else if (nx >= nz) {
      u = (v.z - bb.min.z) / sz;
      vv = (v.y - bb.min.y) / sy;
    } else {
      u = (v.x - bb.min.x) / sx;
      vv = (v.y - bb.min.y) / sy;
    }
    uvs[i * 2] = u;
    uvs[i * 2 + 1] = vv;
  }
  geometry.setAttribute("uv", new THREE.BufferAttribute(uvs, 2));
  return span;
}

/**
 * @param {string} kind
 * @param {number} spanMm
 * @returns {THREE.CanvasTexture | null}
 */
function mapForSpan(kind, spanMm) {
  const base = getMapTexture(kind);
  if (!base) return null;
  // Clone so each label can use its own repeat without fighting the cache.
  const tex = base.clone();
  tex.needsUpdate = true;
  // ~1 tile per 400 mm of largest edge (readable wood/foam at room scale).
  const tiles = Math.max(1.2, Math.min(12, spanMm / 400));
  tex.repeat.set(tiles, tiles);
  return tex;
}

/**
 * @param {Map<string, THREE.Object3D[]>} partsMap
 * @param {string} mode
 * @param {{
 *   isDark?: boolean,
 *   clippingPlanes?: THREE.Plane[] | null,
 *   opacityByLabel?: Map<string, number> | Record<string, number> | null,
 * }} [opts]
 */
export function applyMaterialMode(partsMap, mode, opts = {}) {
  const planes = opts.clippingPlanes ?? null;
  const realistic = mode === MODE_REALISTIC;
  const opacityByLabel = opts.opacityByLabel ?? null;

  for (const [label, meshes] of partsMap) {
    const rgb = colorForLabel(label);
    const depthBias = LAYER_DEPTH_BIAS[label] ?? 0;
    let spanMm = 1000;
    if (realistic) {
      for (const mesh of meshes) {
        if (mesh.isMesh && mesh.geometry) {
          spanMm = Math.max(spanMm, ensureBoxUVs(mesh.geometry));
        }
      }
    }

    /** @type {THREE.Material} */
    let mat;
    if (realistic) {
      const preset = REALISTIC_PRESETS[label] || {
        color: rgb,
        roughness: 0.7,
        metalness: 0.0,
        map: "none",
      };
      const color = solidColor(preset.color);
      const map = mapForSpan(preset.map || "none", spanMm);
      if (preset.clearcoat) {
        mat = new THREE.MeshPhysicalMaterial({
          color,
          map,
          roughness: preset.roughness,
          metalness: preset.metalness,
          clearcoat: preset.clearcoat,
          clearcoatRoughness: preset.clearcoatRoughness ?? 0.3,
          envMapIntensity: 0.85,
        });
      } else {
        mat = new THREE.MeshStandardMaterial({
          color,
          map,
          roughness: preset.roughness,
          metalness: preset.metalness,
          envMapIntensity: preset.metalness > 0.05 ? 1.1 : 0.55,
        });
      }
    } else {
      // Unlit: ACES + Standard lighting was washing the diagrammatic palette.
      mat = new THREE.MeshBasicMaterial({
        color: solidColor(rgb),
      });
    }
    finishMaterial(mat, planes, depthBias);

    /** @type {Set<THREE.Material>} */
    const previous = new Set();
    for (const mesh of meshes) {
      if (!mesh.isMesh) continue;
      const prev = mesh.material;
      if (prev) {
        const list = Array.isArray(prev) ? prev : [prev];
        for (const m of list) previous.add(m);
      }
      mesh.material = mat;
      mesh.renderOrder = depthBias;
    }
    for (const m of previous) {
      if (m === mat) continue;
      if (m.map && [...textureCache.values()].includes(m.map)) {
        m.map = null;
      } else if (m.map) {
        // Cloned procedural maps from mapForSpan — dispose the clone.
        m.map.dispose?.();
        m.map = null;
      }
      m.dispose?.();
    }

    let opacity = 1;
    if (opacityByLabel) {
      if (opacityByLabel instanceof Map) {
        opacity = opacityByLabel.has(label) ? opacityByLabel.get(label) : 1;
      } else if (typeof opacityByLabel[label] === "number") {
        opacity = opacityByLabel[label];
      }
    }
    applyOpacityToMeshes(meshes, opacity);
  }
}

/**
 * Three.js USDZExporter only emits MeshStandardMaterial meshes; Solid mode uses
 * MeshBasicMaterial (unlit) which would otherwise produce an empty USDZ.
 * Clone into a Quick Look–friendly standard material for AR export.
 *
 * @param {THREE.Material | THREE.Material[]} material
 * @param {THREE.BufferGeometry} [geometry] — re-box-UV when keeping a map
 * @returns {THREE.Material | THREE.Material[]}
 */
export function toArExportMaterial(material, geometry) {
  const list = Array.isArray(material) ? material : [material];
  const out = list.map((src) => {
    if (!src) {
      return new THREE.MeshStandardMaterial({
        color: 0xcccccc,
        roughness: 0.65,
        metalness: 0.0,
        side: THREE.FrontSide,
      });
    }

    const color = src.color ? src.color.clone() : new THREE.Color(0xcccccc);
    const roughness = typeof src.roughness === "number" ? src.roughness : 0.65;
    const metalness = typeof src.metalness === "number" ? src.metalness : 0.0;

    /** @type {THREE.Texture | null} */
    let map = null;
    if (src.map && geometry) {
      ensureBoxUVs(geometry);
      // Clone so export dispose does not tear down the live viewer map.
      map = src.map.clone();
      map.needsUpdate = true;
    }

    const mat = new THREE.MeshStandardMaterial({
      color,
      map,
      roughness,
      metalness,
      // USDZ / Quick Look do not support double-sided materials.
      side: THREE.FrontSide,
      transparent: Boolean(src.transparent),
      opacity: typeof src.opacity === "number" ? src.opacity : 1,
    });
    mat.clippingPlanes = null;
    mat.clipIntersection = false;
    return mat;
  });
  return Array.isArray(material) ? out : out[0];
}

/**
 * @returns {string}
 */
export function loadMaterialMode() {
  try {
    const v = localStorage.getItem(MATERIAL_MODE_KEY);
    if (v === MODE_REALISTIC || v === MODE_SOLID) return v;
  } catch {
    /* ignore */
  }
  return MODE_SOLID;
}

/**
 * @param {string} mode
 */
export function saveMaterialMode(mode) {
  try {
    localStorage.setItem(MATERIAL_MODE_KEY, mode);
  } catch {
    /* ignore */
  }
}

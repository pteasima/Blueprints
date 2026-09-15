/**
 * Solid vs Realistic material modes for the WebGL viewer.
 * SOLID_COLORS must stay in sync with SECTION_LAYERS fill/line RGB in export_utils.py.
 */
import * as THREE from "three";

export const MATERIAL_MODE_KEY = "blueprints.materialMode";
export const MODE_SOLID = "solid";
export const MODE_REALISTIC = "realistic";

/** @type {Record<string, [number, number, number]>} 0–255 RGB — high contrast */
export const SOLID_COLORS = {
  podlaha: [210, 130, 45],
  eps: [100, 215, 50],
  zdivo: [200, 95, 60],
  omitka: [245, 215, 160],
  nabytek: [255, 165, 30],
  pozednice: [185, 105, 30],
  koruna: [185, 105, 30],
  predstena: [30, 185, 230],
  pouzdro: [210, 175, 120],
  krov: [185, 105, 30],
  vata: [70, 200, 140],
  soffit: [55, 160, 25],
  podhled: [25, 110, 220],
  krytina: [215, 30, 25],
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
    color: [210, 130, 45],
    roughness: 0.68,
    metalness: 0.0,
    map: "wood",
  },
  eps: {
    color: [100, 215, 50],
    roughness: 0.94,
    metalness: 0.0,
    map: "foam",
  },
  zdivo: {
    color: [200, 95, 60],
    roughness: 0.9,
    metalness: 0.0,
    map: "masonry",
  },
  omitka: {
    color: [245, 215, 160],
    roughness: 0.92,
    metalness: 0.0,
    map: "plaster",
  },
  nabytek: {
    color: [255, 165, 30],
    roughness: 0.38,
    metalness: 0.0,
    clearcoat: 0.35,
    clearcoatRoughness: 0.28,
    map: "wood",
  },
  pozednice: {
    color: [185, 105, 30],
    roughness: 0.55,
    metalness: 0.0,
    map: "wood",
  },
  koruna: {
    color: [185, 105, 30],
    roughness: 0.55,
    metalness: 0.0,
    map: "wood",
  },
  predstena: {
    color: [30, 185, 230],
    roughness: 0.84,
    metalness: 0.0,
    map: "plaster",
  },
  pouzdro: {
    color: [210, 175, 120],
    roughness: 0.7,
    metalness: 0.0,
    map: "plaster",
  },
  krov: {
    color: [185, 105, 30],
    roughness: 0.55,
    metalness: 0.0,
    map: "wood",
  },
  vata: {
    color: [70, 200, 140],
    roughness: 0.97,
    metalness: 0.0,
    map: "wool",
  },
  soffit: {
    color: [55, 160, 25],
    roughness: 0.72,
    metalness: 0.0,
    map: "plaster",
  },
  podhled: {
    color: [25, 110, 220],
    roughness: 0.78,
    metalness: 0.08,
    map: "plaster",
  },
  krytina: {
    color: [215, 30, 25],
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
 * @param {boolean} isDark
 * @returns {THREE.Color}
 */
function solidColor(rgb, isDark) {
  const c = new THREE.Color(rgb[0] / 255, rgb[1] / 255, rgb[2] / 255);
  if (isDark) {
    // Slight lift so mid-chroma solids stay vivid on dark glass chrome.
    c.offsetHSL(0, 0.02, 0.04);
  } else {
    c.offsetHSL(0, 0.03, -0.02);
  }
  return c;
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
 */
function finishMaterial(mat, planes) {
  mat.side = THREE.DoubleSide;
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
 * @param {{ isDark?: boolean, clippingPlanes?: THREE.Plane[] | null }} [opts]
 */
export function applyMaterialMode(partsMap, mode, opts = {}) {
  const isDark = Boolean(opts.isDark);
  const planes = opts.clippingPlanes ?? null;
  const realistic = mode === MODE_REALISTIC;

  for (const [label, meshes] of partsMap) {
    const rgb = colorForLabel(label);
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
      const color = solidColor(preset.color, isDark);
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
      mat = new THREE.MeshStandardMaterial({
        color: solidColor(rgb, isDark),
        roughness: 0.78,
        metalness: 0.0,
        envMapIntensity: 0.25,
      });
    }
    finishMaterial(mat, planes);

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
  }
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

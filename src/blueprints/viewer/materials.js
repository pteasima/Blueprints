/**
 * Solid vs Realistic material modes for the WebGL viewer.
 * SOLID_COLORS must stay in sync with SECTION_LAYERS fill/line RGB in export_utils.py.
 */
import * as THREE from "three";

export const MATERIAL_MODE_KEY = "blueprints.materialMode";
export const MODE_SOLID = "solid";
export const MODE_REALISTIC = "realistic";

/** @type {Record<string, [number, number, number]>} 0–255 RGB */
export const SOLID_COLORS = {
  podlaha: [196, 158, 98],
  eps: [168, 220, 120],
  zdivo: [198, 148, 112],
  omitka: [236, 220, 196],
  nabytek: [232, 176, 72],
  pozednice: [204, 140, 64],
  koruna: [204, 140, 64],
  predstena: [96, 196, 224],
  pouzdro: [220, 200, 168],
  krov: [204, 140, 64],
  vata: [148, 208, 112],
  soffit: [96, 176, 48],
  podhled: [40, 128, 196],
  krytina: [180, 48, 36],
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
    color: [196, 158, 98],
    roughness: 0.68,
    metalness: 0.0,
    map: "wood",
  },
  eps: {
    color: [168, 220, 120],
    roughness: 0.94,
    metalness: 0.0,
    map: "foam",
  },
  zdivo: {
    color: [198, 148, 112],
    roughness: 0.9,
    metalness: 0.0,
    map: "masonry",
  },
  omitka: {
    color: [236, 220, 196],
    roughness: 0.92,
    metalness: 0.0,
    map: "plaster",
  },
  nabytek: {
    color: [232, 176, 72],
    roughness: 0.38,
    metalness: 0.0,
    clearcoat: 0.35,
    clearcoatRoughness: 0.28,
    map: "wood",
  },
  pozednice: {
    color: [204, 140, 64],
    roughness: 0.55,
    metalness: 0.0,
    map: "wood",
  },
  koruna: {
    color: [204, 140, 64],
    roughness: 0.55,
    metalness: 0.0,
    map: "wood",
  },
  predstena: {
    color: [96, 196, 224],
    roughness: 0.84,
    metalness: 0.0,
    map: "plaster",
  },
  pouzdro: {
    color: [220, 200, 168],
    roughness: 0.7,
    metalness: 0.0,
    map: "plaster",
  },
  krov: {
    color: [204, 140, 64],
    roughness: 0.55,
    metalness: 0.0,
    map: "wood",
  },
  vata: {
    color: [148, 208, 112],
    roughness: 0.97,
    metalness: 0.0,
    map: "wool",
  },
  soffit: {
    color: [96, 176, 48],
    roughness: 0.72,
    metalness: 0.0,
    map: "plaster",
  },
  podhled: {
    color: [40, 128, 196],
    roughness: 0.78,
    metalness: 0.08,
    map: "plaster",
  },
  krytina: {
    color: [180, 48, 36],
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
    ctx.fillStyle = "#c8a060";
    ctx.fillRect(0, 0, size, size);
    for (let i = 0; i < size; i++) {
      const n = Math.sin(i * 0.35) * 8 + Math.sin(i * 0.11) * 4;
      const g = 140 + ((i * 17) % 40);
      ctx.strokeStyle = `rgba(${g - 30}, ${g - 50}, ${g - 90}, 0.35)`;
      ctx.beginPath();
      ctx.moveTo(0, i + n * 0.15);
      ctx.lineTo(size, i - n * 0.1);
      ctx.stroke();
    }
    for (let k = 0; k < 40; k++) {
      const x = (k * 37) % size;
      const y = (k * 53) % size;
      ctx.fillStyle = "rgba(80, 50, 20, 0.12)";
      ctx.fillRect(x, y, 2, 6 + (k % 5));
    }
  } else if (kind === "foam") {
    ctx.fillStyle = "#a8dc78";
    ctx.fillRect(0, 0, size, size);
    for (let y = 0; y < size; y += 8) {
      for (let x = 0; x < size; x += 8) {
        const ox = ((y / 8) % 2) * 4;
        const r = 2.2 + ((x * y) % 5) * 0.15;
        ctx.beginPath();
        ctx.arc(x + ox + 4, y + 4, r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255,0.35)";
        ctx.fill();
        ctx.strokeStyle = "rgba(60,100,40,0.2)";
        ctx.stroke();
      }
    }
  } else if (kind === "plaster") {
    const img = ctx.createImageData(size, size);
    for (let i = 0; i < img.data.length; i += 4) {
      const n = 210 + ((i * 13) % 35);
      img.data[i] = n;
      img.data[i + 1] = n - 8;
      img.data[i + 2] = n - 18;
      img.data[i + 3] = 255;
    }
    ctx.putImageData(img, 0, 0);
  } else if (kind === "wool") {
    ctx.fillStyle = "#94d070";
    ctx.fillRect(0, 0, size, size);
    for (let i = 0; i < 900; i++) {
      const x = (i * 47) % size;
      const y = (i * 91) % size;
      ctx.fillStyle = i % 3 === 0 ? "rgba(255,255,255,0.25)" : "rgba(40,80,30,0.18)";
      ctx.fillRect(x, y, 1 + (i % 2), 2 + (i % 3));
    }
  } else if (kind === "metal") {
    const grad = ctx.createLinearGradient(0, 0, size, size);
    grad.addColorStop(0, "#b03028");
    grad.addColorStop(0.45, "#e06050");
    grad.addColorStop(0.55, "#902820");
    grad.addColorStop(1, "#c04034");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, size, size);
    for (let y = 0; y < size; y += 10) {
      ctx.fillStyle = "rgba(255,255,255,0.12)";
      ctx.fillRect(0, y, size, 2);
      ctx.fillStyle = "rgba(0,0,0,0.15)";
      ctx.fillRect(0, y + 5, size, 1);
    }
  } else if (kind === "masonry") {
    ctx.fillStyle = "#c69470";
    ctx.fillRect(0, 0, size, size);
    const brickH = 16;
    const brickW = 32;
    for (let row = 0; row < size / brickH; row++) {
      const offset = (row % 2) * (brickW / 2);
      for (let col = -1; col < size / brickW + 1; col++) {
        const x = col * brickW + offset;
        const y = row * brickH;
        ctx.fillStyle = `rgba(${180 + ((row + col) % 3) * 12}, ${120 + (row % 4) * 8}, ${80 + (col % 3) * 10}, 0.55)`;
        ctx.fillRect(x + 1, y + 1, brickW - 2, brickH - 2);
        ctx.strokeStyle = "rgba(90,60,40,0.35)";
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
      const map = getMapTexture(preset.map || "none");
      if (preset.clearcoat) {
        mat = new THREE.MeshPhysicalMaterial({
          color,
          map,
          roughness: preset.roughness,
          metalness: preset.metalness,
          clearcoat: preset.clearcoat,
          clearcoatRoughness: preset.clearcoatRoughness ?? 0.3,
        });
      } else {
        mat = new THREE.MeshStandardMaterial({
          color,
          map,
          roughness: preset.roughness,
          metalness: preset.metalness,
        });
      }
    } else {
      mat = new THREE.MeshStandardMaterial({
        color: solidColor(rgb, isDark),
        roughness: 0.78,
        metalness: 0.0,
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
      // Keep cached procedural maps alive across mode switches.
      if (m.map && [...textureCache.values()].includes(m.map)) {
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

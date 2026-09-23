/**
 * A3 landscape plate: PNG from the WebGL canvas, PDF with that image embedded.
 * No extra npm dependency — Flate via CompressionStream when the browser has it.
 */

export const DRAW_W = 2400;
/** 2400 × (297/420), A3 landscape. */
export const DRAW_H = 1697;
export const A3_WIDTH_MM = 420;
export const A3_HEIGHT_MM = 297;

/**
 * @param {number} mm
 */
function mmToPt(mm) {
  return (mm / 25.4) * 72;
}

/**
 * @param {Blob} blob
 * @param {string} filename
 */
export function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 30_000);
}

/**
 * @param {HTMLCanvasElement} canvas
 */
export function canvasToPngBlob(canvas) {
  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (blob) resolve(blob);
      else reject(new Error("PNG capture failed"));
    }, "image/png");
  });
}

/**
 * @param {Blob} pngBlob
 * @returns {Promise<ImageData>}
 */
async function pngToImageData(pngBlob) {
  const bitmap = await createImageBitmap(pngBlob);
  const canvas = document.createElement("canvas");
  canvas.width = bitmap.width;
  canvas.height = bitmap.height;
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  if (!ctx) throw new Error("2D canvas unavailable");
  ctx.drawImage(bitmap, 0, 0);
  bitmap.close?.();
  return ctx.getImageData(0, 0, canvas.width, canvas.height);
}

/**
 * @param {Uint8Array} rgb
 */
async function deflateBytes(rgb) {
  if (typeof CompressionStream === "undefined") return { bytes: rgb, filter: "" };
  const stream = new Blob([rgb]).stream().pipeThrough(new CompressionStream("deflate"));
  const bytes = new Uint8Array(await new Response(stream).arrayBuffer());
  return { bytes, filter: "/Filter /FlateDecode " };
}

/**
 * @param {string | Uint8Array} part
 */
function asBytes(part) {
  if (typeof part === "string") return new TextEncoder().encode(part);
  return part;
}

/**
 * @param {ImageData} image
 */
export async function pdfFromImageData(image) {
  const w = image.width;
  const h = image.height;
  const src = image.data;
  // Canvas rows are top-down; PDF image samples start at the bottom.
  const rgb = new Uint8Array(w * h * 3);
  for (let y = 0; y < h; y++) {
    const srcRow = (h - 1 - y) * w * 4;
    const dstRow = y * w * 3;
    for (let x = 0; x < w; x++) {
      const i = srcRow + x * 4;
      const j = dstRow + x * 3;
      const a = src[i + 3] / 255;
      rgb[j] = Math.round(src[i] * a + 255 * (1 - a));
      rgb[j + 1] = Math.round(src[i + 1] * a + 255 * (1 - a));
      rgb[j + 2] = Math.round(src[i + 2] * a + 255 * (1 - a));
    }
  }
  const { bytes, filter } = await deflateBytes(rgb);
  const pageW = mmToPt(A3_WIDTH_MM);
  const pageH = mmToPt(A3_HEIGHT_MM);
  const content = `q\n${pageW.toFixed(3)} 0 0 ${pageH.toFixed(3)} 0 0 cm\n/Im0 Do\nQ\n`;
  const contentBytes = new TextEncoder().encode(content);

  /** @type {Uint8Array[]} */
  const chunks = [];
  let pos = 0;
  /** @param {Uint8Array} u8 */
  function add(u8) {
    chunks.push(u8);
    pos += u8.length;
  }
  /** @type {number[]} */
  const xref = [0];
  /**
   * @param {number} n
   * @param {Array<string | Uint8Array>} body
   */
  function obj(n, body) {
    xref[n] = pos;
    add(asBytes(`${n} 0 obj\n`));
    for (const part of body) add(asBytes(part));
    add(asBytes("\nendobj\n"));
  }

  add(asBytes("%PDF-1.4\n"));
  obj(1, ["<< /Type /Catalog /Pages 2 0 R >>"]);
  obj(2, ["<< /Type /Pages /Kids [3 0 R] /Count 1 >>"]);
  obj(3, [
    `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${pageW.toFixed(3)} ${pageH.toFixed(3)}] `,
    "/Contents 4 0 R /Resources << /XObject << /Im0 5 0 R >> >> >>",
  ]);
  obj(4, [
    `<< /Length ${contentBytes.length} >>\nstream\n`,
    contentBytes,
    "\nendstream",
  ]);
  obj(5, [
    `<< /Type /XObject /Subtype /Image /Width ${w} /Height ${h} `,
    `/ColorSpace /DeviceRGB /BitsPerComponent 8 ${filter}/Length ${bytes.length} >>\nstream\n`,
    bytes,
    "\nendstream",
  ]);

  const xrefPos = pos;
  let xrefBody = `xref\n0 6\n0000000000 65535 f \n`;
  for (let n = 1; n <= 5; n++) {
    xrefBody += `${String(xref[n]).padStart(10, "0")} 00000 n \n`;
  }
  xrefBody += `trailer\n<< /Size 6 /Root 1 0 R >>\nstartxref\n${xrefPos}\n%%EOF\n`;
  add(asBytes(xrefBody));

  const out = new Uint8Array(pos);
  let off = 0;
  for (const chunk of chunks) {
    out.set(chunk, off);
    off += chunk.length;
  }
  return new Blob([out], { type: "application/pdf" });
}

/**
 * @param {HTMLCanvasElement} canvas
 */
export async function plateFromCanvas(canvas) {
  const png = await canvasToPngBlob(canvas);
  const image = await pngToImageData(png);
  const pdf = await pdfFromImageData(image);
  return { png, pdf };
}

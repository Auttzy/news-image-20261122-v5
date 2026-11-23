// The Sunday Ledger — 22 November 2026 (Version E).
// Copies the rendered broadsheet (entry.png) into the grader's output
// directory, verifying it is a real 1024x1024 PNG first.
import { copyFileSync, existsSync, mkdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  console.error("MAKEFUN_OUTPUT_DIR is not set");
  process.exit(1);
}
if (!existsSync(source)) {
  console.error("entry.png is missing next to main.ts");
  process.exit(1);
}
const bytes = readFileSync(source);
// PNG signature: 89 50 4E 47 0D 0A 1A 0A
const signature = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (!bytes.subarray(0, 8).equals(signature)) {
  console.error("entry.png is not a PNG file");
  process.exit(1);
}
// IHDR chunk: width and height are big-endian uint32 at offsets 16 and 20.
const width = bytes.readUInt32BE(16);
const height = bytes.readUInt32BE(20);
if (width !== 1024 || height !== 1024) {
  console.error(`entry.png must be 1024x1024, got ${width}x${height}`);
  process.exit(1);
}
if (bytes.length > 1024 * 1024) {
  console.error(`entry.png is ${bytes.length} bytes, over the 1 MiB limit`);
  process.exit(1);
}
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.png");
copyFileSync(source, target);
// Byte-level integrity check: the copy must be identical to the source.
const written = readFileSync(target);
if (!written.equals(bytes)) {
  console.error("copied entry.png differs from the source");
  process.exit(1);
}
if (statSync(target).size !== bytes.length) {
  console.error("copied entry.png has the wrong size");
  process.exit(1);
}
console.log(`wrote ${target} (${bytes.length} bytes, ${width}x${height})`);

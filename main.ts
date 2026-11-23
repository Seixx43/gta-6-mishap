// GTA 6 Mishap entry: prints the one-sentence entry and writes it to the output dir.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = dirname(fileURLToPath(import.meta.url));
const sentence = readFileSync(join(root, "ENTRY.md"), "utf8").trim();
console.log(sentence);
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(root, "out");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), sentence + "\n");

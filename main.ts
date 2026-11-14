import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
const dir = dirname(fileURLToPath(import.meta.url));
const launch = JSON.parse(readFileSync(join(dir, "LAUNCH.json"), "utf8"));
if (typeof launch.mint !== "string" || launch.mint.length === 0) {
  throw new Error("LAUNCH.json is missing a non-empty mint field");
}
if (typeof launch.create_signature !== "string" || launch.create_signature.length === 0) {
  throw new Error("LAUNCH.json is missing a non-empty create_signature field");
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/LAUNCH.json", JSON.stringify(launch));

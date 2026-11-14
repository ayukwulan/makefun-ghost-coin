import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
const data = readFileSync("LAUNCH.json");
mkdirSync("/output", { recursive: true });
writeFileSync("/output/LAUNCH.json", data);

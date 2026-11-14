import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
const launch = JSON.parse(readFileSync("LAUNCH.json", "utf8"));
mkdirSync("/output", { recursive: true });
writeFileSync("/output/LAUNCH.json", JSON.stringify(launch));

// Funniest Autocorrect Fail — entry for make.fun
// u-zeroxfive-funniest-autocorrect-fail-ddf82154
// The slip: "earnings" became "erections" — the intended word is obvious
// from "quarterly ... down 12% ... report", and it still reads like a real
// work text gone wrong. One line, no explanation, punch lands on first read.

import { mkdirSync, writeFileSync } from "node:fs";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const ENTRY =
  "The quarterly erections are down 12% this year, I'll send the full report by 5pm.";

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(`${OUTPUT_DIR}/entry.txt`, ENTRY, "utf8");

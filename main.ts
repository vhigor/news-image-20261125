// The Daily Globe — 25 November 2026 (Node 22, standard library only).
// The front page was rendered from src/frontpage.html into entry.png;
// this program copies that image to the output directory.

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));

#!/usr/bin/env node
/**
 * Step 3: Replace Wix image URLs in games_data.json with Supabase Storage public URLs.
 *
 * Reads backend/image-manifest.json (uploaded images only) and writes
 * backend/games_data_migrated.json — the original export is never modified.
 *
 * Usage:
 *   node scripts/patch-games-data.mjs
 */

import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import {
	GAMES_DATA_MIGRATED_PATH,
	GAMES_DATA_PATH,
	IMAGE_FIELDS,
	MANIFEST_PATH,
	parseWixImageUrl
} from './lib/wix-images.mjs';

if (!existsSync(MANIFEST_PATH)) {
	console.error(`Manifest not found. Run extract + migrate first.`);
	process.exit(1);
}

const manifest = JSON.parse(readFileSync(MANIFEST_PATH, 'utf8'));
const games = JSON.parse(readFileSync(GAMES_DATA_PATH, 'utf8'));

/** @type {Map<string, string>} */
const urlMap = new Map();
for (const image of manifest.images) {
	if (image.status === 'uploaded' && image.public_url) {
		urlMap.set(image.wix_url, image.public_url);
	}
}

let replaced = 0;
let missing = 0;

const patched = games.map((game) => {
	const copy = { ...game };

	for (const field of IMAGE_FIELDS) {
		const value = copy[field];
		if (!value) continue;

		const parsed = parseWixImageUrl(value);
		if (!parsed) continue;

		const newUrl = urlMap.get(parsed.wix_url);
		if (newUrl) {
			copy[field] = newUrl;
			replaced++;
		} else {
			missing++;
		}
	}

	return copy;
});

writeFileSync(GAMES_DATA_MIGRATED_PATH, JSON.stringify(patched, null, 2));

console.log(`Wrote ${GAMES_DATA_MIGRATED_PATH}`);
console.log(`  Games: ${games.length}`);
console.log(`  Image fields replaced: ${replaced}`);
console.log(`  Image fields not yet migrated: ${missing}`);
console.log(`\nImport with:`);
console.log(`  node scripts/import-games.mjs`);

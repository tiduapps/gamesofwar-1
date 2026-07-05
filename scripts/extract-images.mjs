#!/usr/bin/env node
/**
 * Step 1: Extract unique Wix images from games_data.json into a manifest.
 *
 * Usage:
 *   node scripts/extract-images.mjs
 *   SUPABASE_URL=https://xxx.supabase.co node scripts/extract-images.mjs
 */

import { readFileSync, writeFileSync } from 'node:fs';
import { relative } from 'node:path';
import {
	DEFAULT_STORAGE_BUCKET,
	GAMES_DATA_PATH,
	IMAGE_FIELDS,
	MANIFEST_PATH,
	ROOT_DIR,
	parseWixImageUrl,
	storagePathForMediaId,
	supabasePublicUrl
} from './lib/wix-images.mjs';

const supabaseUrl = process.env.SUPABASE_URL ?? '';
const storageBucket = process.env.SUPABASE_STORAGE_BUCKET ?? DEFAULT_STORAGE_BUCKET;

/** @type {Map<string, object>} */
const images = new Map();

const games = JSON.parse(readFileSync(GAMES_DATA_PATH, 'utf8'));

for (const game of games) {
	for (const field of IMAGE_FIELDS) {
		const parsed = parseWixImageUrl(game[field]);
		if (!parsed) continue;

		const storagePath = storagePathForMediaId(parsed.wix_media_id);
		const existing = images.get(parsed.wix_media_id) ?? {
			wix_media_id: parsed.wix_media_id,
			wix_url: parsed.wix_url,
			download_url: parsed.download_url,
			storage_path: storagePath,
			storage_bucket: storageBucket,
			public_url: supabaseUrl
				? supabasePublicUrl(supabaseUrl, storageBucket, storagePath)
				: null,
			used_in: [],
			status: 'pending',
			error: null,
			byte_size: null,
			migrated_at: null
		};

		existing.used_in.push({
			wix_id: game.ID,
			title: game.Title,
			field
		});

		images.set(parsed.wix_media_id, existing);
	}
}

const manifest = {
	generated_at: new Date().toISOString(),
	source: relative(ROOT_DIR, GAMES_DATA_PATH),
	storage_provider: 'supabase',
	storage_bucket: storageBucket,
	supabase_url: supabaseUrl || null,
	stats: {
		games: games.length,
		unique_images: images.size,
		total_references: [...images.values()].reduce((sum, img) => sum + img.used_in.length, 0)
	},
	images: [...images.values()].sort((a, b) => a.wix_media_id.localeCompare(b.wix_media_id))
};

writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2));

console.log(`Wrote ${manifest.stats.unique_images} unique images to ${MANIFEST_PATH}`);
console.log(`  Games scanned: ${manifest.stats.games}`);
console.log(`  Total image references: ${manifest.stats.total_references}`);
console.log(`  Storage bucket: ${storageBucket}`);
if (supabaseUrl) {
	console.log(`  Public URL base: ${supabasePublicUrl(supabaseUrl, storageBucket, 'originals/…')}`);
} else {
	console.log('  Set SUPABASE_URL to pre-fill public_url fields in the manifest.');
}

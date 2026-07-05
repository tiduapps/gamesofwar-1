#!/usr/bin/env node
/**
 * Re-compress images already in Supabase (originals/) into optimized WebP covers/.
 *
 * Uses local downloads when available; otherwise fetches from the manifest public_url.
 * Updates manifest public_url to point at covers/ and sets optimized: true.
 *
 * Usage:
 *   node --env-file=scripts/.env scripts/reoptimize-images.mjs
 *   node --env-file=scripts/.env scripts/reoptimize-images.mjs --limit=20
 *   node --env-file=scripts/.env scripts/reoptimize-images.mjs --force
 */

import { createClient } from '@supabase/supabase-js';
import { createWriteStream, existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { pipeline } from 'node:stream/promises';
import { Readable } from 'node:stream';
import { optimizeImage, optimizedLocalPath } from './lib/optimize-image.mjs';
import {
	DEFAULT_STORAGE_BUCKET,
	DOWNLOAD_DIR,
	MANIFEST_PATH,
	getOptimizedStoragePath,
	supabasePublicUrl
} from './lib/wix-images.mjs';

/** @param {string} mediaId */
function localPathFor(mediaId) {
	return join(DOWNLOAD_DIR, mediaId);
}

const args = process.argv.slice(2);
const limitArg = args.find((a) => a.startsWith('--limit='));
const force = args.includes('--force');
const limit = limitArg ? Number.parseInt(limitArg.split('=')[1], 10) : Infinity;

const supabaseUrl = process.env.SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const storageBucket = process.env.SUPABASE_STORAGE_BUCKET ?? DEFAULT_STORAGE_BUCKET;

if (!supabaseUrl || !serviceRoleKey) {
	console.error('Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY');
	process.exit(1);
}

if (!existsSync(MANIFEST_PATH)) {
	console.error(`Manifest not found at ${MANIFEST_PATH}`);
	process.exit(1);
}

const supabase = createClient(supabaseUrl, serviceRoleKey, {
	auth: { persistSession: false }
});

const manifest = JSON.parse(readFileSync(MANIFEST_PATH, 'utf8'));
mkdirSync(join(DOWNLOAD_DIR, 'optimized'), { recursive: true });

/** @param {string} url @param {string} dest */
async function downloadTo(url, dest) {
	const response = await fetch(url, {
		headers: { 'User-Agent': 'GamesOfWarMigration/1.0', Accept: 'image/*,*/*' }
	});
	if (!response.ok) throw new Error(`HTTP ${response.status}`);
	if (!response.body) throw new Error('Empty body');
	await pipeline(Readable.fromWeb(response.body), createWriteStream(dest));
}

/** @param {string} storagePath */
async function objectExists(storagePath) {
	const folder = storagePath.includes('/') ? storagePath.slice(0, storagePath.lastIndexOf('/')) : '';
	const filename = storagePath.includes('/') ? storagePath.slice(storagePath.lastIndexOf('/') + 1) : storagePath;
	const { data, error } = await supabase.storage.from(storageBucket).list(folder, {
		search: filename,
		limit: 1
	});
	if (error) return false;
	return (data ?? []).some((item) => item.name === filename);
}

/** @param {object} image */
async function reoptimize(image) {
	const coversPath = getOptimizedStoragePath(image.wix_media_id);
	const optimizedPath = optimizedLocalPath(DOWNLOAD_DIR, image.wix_media_id);

	if (!force && image.optimized && image.public_url?.includes('/covers/')) {
		return { skipped: true, reason: 'already optimized' };
	}

	if (!force && (await objectExists(coversPath))) {
		image.storage_path = coversPath;
		image.public_url = supabasePublicUrl(supabaseUrl, storageBucket, coversPath);
		image.optimized = true;
		return { skipped: false, note: 'covers/ already in storage' };
	}

	const localOriginal = localPathFor(image.wix_media_id);
	let sourcePath = localOriginal;

	if (!existsSync(sourcePath)) {
		if (!image.public_url) {
			throw new Error('No local file or public_url');
		}
		mkdirSync(DOWNLOAD_DIR, { recursive: true });
		await downloadTo(image.public_url, sourcePath);
	}

	await optimizeImage(sourcePath, optimizedPath);

	const body = readFileSync(optimizedPath);
	const { error } = await supabase.storage.from(storageBucket).upload(coversPath, body, {
		contentType: 'image/webp',
		upsert: true,
		cacheControl: '31536000'
	});

	if (error) throw new Error(error.message);

	image.storage_path = coversPath;
	image.byte_size = body.length;
	image.public_url = supabasePublicUrl(supabaseUrl, storageBucket, coversPath);
	image.optimized = true;
	image.error = null;

	return { skipped: false };
}

async function main() {
	const targets = manifest.images
		.filter((img) => img.status === 'uploaded')
		.filter((img) => force || !img.optimized || !img.public_url?.includes('/covers/'))
		.slice(0, limit);

	console.log(`Re-optimizing ${targets.length} images → covers/*.webp`);
	console.log(`  max width: ${process.env.IMAGE_MAX_WIDTH ?? 800}px`);
	console.log(`  quality: ${process.env.IMAGE_QUALITY ?? 80}`);

	let ok = 0;
	let skipped = 0;
	let failed = 0;

	for (const image of targets) {
		try {
			const result = await reoptimize(image);
			if (result.skipped) {
				skipped++;
				console.log(`↷ skip  ${image.wix_media_id} (${result.reason})`);
			} else {
				ok++;
				const note = result.note ? ` (${result.note})` : '';
				console.log(`✓ ${image.wix_media_id} → ${image.byte_size} bytes${note}`);
			}
		} catch (error) {
			failed++;
			image.error = error instanceof Error ? error.message : String(error);
			console.error(`✗ ${image.wix_media_id}: ${image.error}`);
		}

		writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2));
	}

	console.log(`\nDone. OK: ${ok}, skipped: ${skipped}, failed: ${failed}`);
	console.log('Next: npm run images:patch && npm run import:games');
}

main().catch((error) => {
	console.error(error);
	process.exit(1);
});

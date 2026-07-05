#!/usr/bin/env node
/**
 * Step 2: Download Wix images and upload to Supabase Storage.
 *
 * Usage:
 *   cp scripts/.env.example scripts/.env   # fill in Supabase credentials
 *   node scripts/extract-images.mjs
 *   node scripts/migrate-images-to-supabase.mjs
 *
 * Options:
 *   --dry-run              List work only, no download/upload
 *   --download-only        Save files locally under backend/image-downloads/
 *   --upload-only          Upload existing local files to Supabase (skip download)
 *   --skip-optimize        Upload raw downloads without WebP compression (not recommended)
 *   --limit=N              Process only N pending images
 *   --concurrency=N        Parallel operations (default 4)
 */

import { createClient } from '@supabase/supabase-js';
import { createWriteStream, existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { pipeline } from 'node:stream/promises';
import { Readable } from 'node:stream';
import {
	DEFAULT_STORAGE_BUCKET,
	DOWNLOAD_DIR,
	MANIFEST_PATH,
	MIGRATION_LOG_PATH,
	getOptimizedStoragePath,
	getStoragePath,
	guessContentType,
	retryDelayMs,
	sleep,
	supabasePublicUrl
} from './lib/wix-images.mjs';
import { optimizeImage, optimizedLocalPath } from './lib/optimize-image.mjs';

const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');
const downloadOnly = args.includes('--download-only');
const uploadOnly = args.includes('--upload-only');
const skipOptimize = args.includes('--skip-optimize');
const limitArg = args.find((a) => a.startsWith('--limit='));
const concurrencyArg = args.find((a) => a.startsWith('--concurrency='));
const limit = limitArg ? Number.parseInt(limitArg.split('=')[1], 10) : Infinity;
const concurrency = concurrencyArg ? Number.parseInt(concurrencyArg.split('=')[1], 10) : 4;

const supabaseUrl = process.env.SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const storageBucket = process.env.SUPABASE_STORAGE_BUCKET ?? DEFAULT_STORAGE_BUCKET;

if (!dryRun && !downloadOnly) {
	if (!supabaseUrl || !serviceRoleKey) {
		console.error('Missing Supabase credentials. Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY.');
		console.error('Use --download-only to fetch locally without Supabase, or --dry-run to preview.');
		process.exit(1);
	}
}

/** @type {import('@supabase/supabase-js').SupabaseClient | null} */
let supabase = null;
if (!dryRun && !downloadOnly && supabaseUrl && serviceRoleKey) {
	supabase = createClient(supabaseUrl, serviceRoleKey, {
		auth: { persistSession: false }
	});
}

if (!existsSync(MANIFEST_PATH)) {
	console.error(`Manifest not found at ${MANIFEST_PATH}. Run: node scripts/extract-images.mjs`);
	process.exit(1);
}

const manifest = JSON.parse(readFileSync(MANIFEST_PATH, 'utf8'));
mkdirSync(DOWNLOAD_DIR, { recursive: true });

/** @param {string} line */
function appendLog(line) {
	writeFileSync(MIGRATION_LOG_PATH, line + '\n', { flag: 'a' });
}

/** @param {string} mediaId */
function localPathFor(mediaId) {
	return join(DOWNLOAD_DIR, mediaId);
}

/** @param {string} url @param {string} destPath @param {number} maxAttempts */
async function downloadFile(url, destPath, maxAttempts = 4) {
	for (let attempt = 0; attempt < maxAttempts; attempt++) {
		try {
			const response = await fetch(url, {
				headers: {
					'User-Agent': 'GamesOfWarMigration/1.0',
					Accept: 'image/*,*/*'
				},
				redirect: 'follow'
			});

			if (!response.ok) {
				throw new Error(`HTTP ${response.status} ${response.statusText}`);
			}

			if (!response.body) {
				throw new Error('Empty response body');
			}

			await pipeline(Readable.fromWeb(response.body), createWriteStream(destPath));
			return response.headers.get('content-type') ?? guessContentType(destPath);
		} catch (error) {
			if (attempt === maxAttempts - 1) throw error;
			await sleep(retryDelayMs(attempt));
		}
	}

	throw new Error('Download failed');
}

/** @param {string} storagePath */
async function objectExists(storagePath) {
	if (!supabase) return false;

	const folder = storagePath.includes('/') ? storagePath.slice(0, storagePath.lastIndexOf('/')) : '';
	const filename = storagePath.includes('/') ? storagePath.slice(storagePath.lastIndexOf('/') + 1) : storagePath;

	const { data, error } = await supabase.storage.from(storageBucket).list(folder, {
		search: filename,
		limit: 1
	});

	if (error) return false;
	return (data ?? []).some((item) => item.name === filename);
}

/** @param {string} storagePath @param {string} filePath @param {string} contentType */
async function uploadFile(storagePath, filePath, contentType) {
	if (!supabase) throw new Error('Supabase client not configured');

	const body = readFileSync(filePath);
	const { error } = await supabase.storage.from(storageBucket).upload(storagePath, body, {
		contentType,
		upsert: true,
		cacheControl: '31536000'
	});

	if (error) throw new Error(error.message);
	return body.length;
}

/** @param {string} localPath @param {string} mediaId */
async function prepareUploadFile(localPath, mediaId) {
	if (skipOptimize) {
		return {
			uploadPath: localPath,
			storagePath: `originals/${mediaId.replace(/[^a-zA-Z0-9._-]/g, '-')}`,
			contentType: guessContentType(mediaId)
		};
	}

	const optimizedPath = optimizedLocalPath(DOWNLOAD_DIR, mediaId);
	await optimizeImage(localPath, optimizedPath);
	return {
		uploadPath: optimizedPath,
		storagePath: getOptimizedStoragePath(mediaId),
		contentType: 'image/webp'
	};
}

/** @param {object} image */
async function processImage(image) {
	if (image.status === 'uploaded' && !uploadOnly) {
		return { skipped: true, reason: 'already uploaded' };
	}

	const localPath = localPathFor(image.wix_media_id);

	if (!uploadOnly) {
		if (!existsSync(localPath)) {
			if (dryRun) {
				console.log(`[dry-run] would download ${image.download_url}`);
			} else {
				await downloadFile(image.download_url, localPath);
				image.status = 'downloaded';
			}
		} else {
			image.status = image.status === 'pending' ? 'downloaded' : image.status;
		}
	}

	if (downloadOnly || dryRun) {
		return { skipped: false, image };
	}

	if (!existsSync(localPath)) {
		throw new Error(`Local file missing: ${localPath}`);
	}

	const prepared = await prepareUploadFile(localPath, image.wix_media_id);
	image.storage_path = prepared.storagePath;
	image.storage_bucket = storageBucket;

	if (await objectExists(prepared.storagePath)) {
		image.byte_size = readFileSync(prepared.uploadPath).length;
		image.status = 'uploaded';
		image.migrated_at = new Date().toISOString();
		image.error = null;
		image.public_url = supabasePublicUrl(supabaseUrl, storageBucket, prepared.storagePath);
		return { skipped: false, image, note: 'already in Supabase Storage' };
	}

	const byteSize = await uploadFile(prepared.storagePath, prepared.uploadPath, prepared.contentType);
	image.byte_size = byteSize;
	image.status = 'uploaded';
	image.migrated_at = new Date().toISOString();
	image.error = null;
	image.public_url = supabasePublicUrl(supabaseUrl, storageBucket, prepared.storagePath);

	return { skipped: false, image };
}

async function runPool(items, worker, poolSize) {
	let index = 0;

	async function runner() {
		while (index < items.length) {
			const current = index++;
			await worker(items[current], current);
		}
	}

	await Promise.all(Array.from({ length: Math.min(poolSize, items.length) }, runner));
}

async function main() {
	const pending = manifest.images
		.filter((img) => img.status !== 'uploaded')
		.slice(0, limit);

	// Recompute storage paths (fixes keys if sanitization rules changed)
	for (const image of pending) {
		if (image.status === 'failed') {
			image.error = null;
			image.status = image.byte_size || existsSync(localPathFor(image.wix_media_id)) ? 'downloaded' : 'pending';
		}
		image.storage_path = getStoragePath(image);
	}

	console.log(`Manifest: ${manifest.images.length} images`);
	console.log(`Processing: ${pending.length} (concurrency ${concurrency})`);
	if (dryRun) console.log('Mode: dry-run');
	else if (downloadOnly) console.log('Mode: download-only');
	else if (uploadOnly) console.log('Mode: upload-only');
	else console.log(`Mode: download + upload → Supabase Storage bucket "${storageBucket}"`);

	let ok = 0;
	let failed = 0;
	let skipped = 0;

	await runPool(
		pending,
		async (image) => {
			const label = image.wix_media_id;
			try {
				const result = await processImage(image);
				if (result.skipped && result.reason) {
					skipped++;
					console.log(`↷ skip  ${label} (${result.reason})`);
				} else if (result.note) {
					ok++;
					console.log(`✓ reuse ${label} (${result.note})`);
				} else if (dryRun) {
					ok++;
				} else {
					ok++;
					console.log(`✓ done  ${label} → ${image.public_url}`);
					appendLog(
						JSON.stringify({
							at: new Date().toISOString(),
							wix_media_id: image.wix_media_id,
							status: image.status,
							public_url: image.public_url,
							byte_size: image.byte_size
						})
					);
				}
			} catch (error) {
				failed++;
				image.status = 'failed';
				image.error = error instanceof Error ? error.message : String(error);
				console.error(`✗ fail  ${label}: ${image.error}`);
				appendLog(
					JSON.stringify({
						at: new Date().toISOString(),
						wix_media_id: image.wix_media_id,
						status: 'failed',
						error: image.error
					})
				);
			}

			writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2));
		},
		concurrency
	);

	const uploaded = manifest.images.filter((img) => img.status === 'uploaded').length;
	const failedTotal = manifest.images.filter((img) => img.status === 'failed').length;

	console.log('\nSummary');
	console.log(`  Processed this run: ${pending.length}`);
	console.log(`  OK: ${ok}  Failed this run: ${failed}  Skipped: ${skipped}`);
	console.log(`  Manifest totals — uploaded: ${uploaded}, failed: ${failedTotal}, pending: ${manifest.images.length - uploaded - failedTotal}`);
	console.log(`\nNext: node scripts/patch-games-data.mjs`);
}

main().catch((error) => {
	console.error(error);
	process.exit(1);
});

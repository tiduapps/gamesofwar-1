import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

export const ROOT_DIR = join(dirname(fileURLToPath(import.meta.url)), '../..');
export const GAMES_DATA_PATH = join(ROOT_DIR, 'backend/games_data.json');
export const GAMES_DATA_MIGRATED_PATH = join(ROOT_DIR, 'backend/games_data_migrated.json');
export const MANIFEST_PATH = join(ROOT_DIR, 'backend/image-manifest.json');
export const DOWNLOAD_DIR = join(ROOT_DIR, 'backend/image-downloads');
export const MIGRATION_LOG_PATH = join(ROOT_DIR, 'backend/image-migration.log.jsonl');

export const DEFAULT_STORAGE_BUCKET = 'games';
export const IMAGE_FIELDS = ['coverPhoto', 'photo1', 'photo2', 'photo3', 'photo4', 'photo5', 'photo6'];

const WIX_IMAGE_RE = /^wix:image:\/\/v1\/([^/#]+)\/[^#]*(?:#.*)?$/;

/** @param {string | null | undefined} wixUrl */
export function parseWixImageUrl(wixUrl) {
	if (!wixUrl || typeof wixUrl !== 'string' || !wixUrl.startsWith('wix:image://')) {
		return null;
	}

	const match = wixUrl.match(WIX_IMAGE_RE);
	if (!match) return null;

	const mediaId = match[1];
	return {
		wix_url: wixUrl,
		wix_media_id: mediaId,
		download_url: `https://static.wixstatic.com/media/${mediaId}`
	};
}

/** Sanitize Wix media ids for Supabase Storage (rejects ~ and other special chars). */
export function sanitizeStorageFileName(mediaId) {
	return mediaId.replace(/[^a-zA-Z0-9._-]/g, '-');
}

/** @param {string} mediaId @param {string} [prefix] */
export function storagePathForMediaId(mediaId, prefix = 'originals') {
	return `${prefix}/${sanitizeStorageFileName(mediaId)}`;
}

/** @param {string} supabaseUrl @param {string} bucket @param {string} storagePath */
export function supabasePublicUrl(supabaseUrl, bucket, storagePath) {
	return `${supabaseUrl.replace(/\/$/, '')}/storage/v1/object/public/${bucket}/${storagePath}`;
}

/** @param {object} image */
export function getStoragePath(image) {
	return getOptimizedStoragePath(image.wix_media_id);
}

/** @param {string} mediaId */
export function getOptimizedStoragePath(mediaId) {
	return `covers/${sanitizeStorageFileName(mediaId)}.webp`;
}

/** @param {string} url */
export function originalsToCoversUrl(url) {
	if (!url || typeof url !== 'string') return url;
	if (!url.includes('/originals/')) return url;
	return url.replace('/originals/', '/covers/').replace(/\.(jpe?g|png|gif|webp)$/i, '.webp');
}

/** @param {string} ms */
export function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

/** @param {number} attempt @param {number} baseMs */
export function retryDelayMs(attempt, baseMs = 1000) {
	return baseMs * 2 ** attempt;
}

/** @param {string} filename */
export function guessContentType(filename) {
	const ext = filename.split('.').pop()?.toLowerCase();
	const map = {
		jpg: 'image/jpeg',
		jpeg: 'image/jpeg',
		png: 'image/png',
		webp: 'image/webp',
		gif: 'image/gif'
	};
	return map[ext ?? ''] ?? 'application/octet-stream';
}

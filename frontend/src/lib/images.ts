/**
 * Resolve game cover URLs for display.
 * Maps legacy originals/ URLs to optimized covers/ WebP when possible.
 */

const COVERS_PATH = '/covers/';
const ORIGINALS_PATH = '/originals/';

/** Rewrite originals/*.jpg → covers/*.webp (after re-optimization). */
export function toOptimizedStorageUrl(url: string | null | undefined): string | null {
	if (!url) return null;
	if (!url.includes(ORIGINALS_PATH)) return url;
	return url.replace(ORIGINALS_PATH, COVERS_PATH).replace(/\.(jpe?g|png|gif|webp)$/i, '.webp');
}

/** Card grid: ~400px display × 2 retina ≈ 800px source. */
export function gameCoverUrl(url: string | null | undefined): string | null {
	return toOptimizedStorageUrl(url);
}

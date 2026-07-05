import type { SupabaseClient } from '@supabase/supabase-js';
import { adminGameImagePath, storageBucketName, storagePublicUrl } from '$lib/images/storage-url';
import type { Game } from '$lib/types/database';

const ALLOWED_IMAGE_TYPES = new Set(['image/webp', 'image/png', 'image/jpeg']);

function extensionForMime(type: string): string {
	if (type === 'image/png') return 'png';
	if (type === 'image/jpeg') return 'jpg';
	return 'webp';
}

export async function fetchAdminGameBySlug(
	supabase: SupabaseClient,
	slug: string
): Promise<Game | null> {
	const { data, error } = await supabase
		.from('games')
		.select(
			'id, title, slug, year, country, publisher, description, mechanism, rules, theme, cover_photo_url, photo_urls, wix_id'
		)
		.eq('slug', slug)
		.maybeSingle();

	if (error || !data) return null;

	return {
		...data,
		photo_urls: data.photo_urls ?? []
	};
}

export async function uploadGameImage(
	supabase: SupabaseClient,
	gameId: string,
	file: File
): Promise<{ url: string; path: string } | { error: string }> {
	if (file.size === 0) {
		return { error: 'No image file provided.' };
	}

	if (!ALLOWED_IMAGE_TYPES.has(file.type)) {
		return { error: 'Upload a PNG, JPEG, or WebP image.' };
	}

	const extension = extensionForMime(file.type);
	const path = adminGameImagePath(gameId, extension);
	const bucket = storageBucketName();
	const body = new Uint8Array(await file.arrayBuffer());

	const { error } = await supabase.storage.from(bucket).upload(path, body, {
		contentType: file.type,
		cacheControl: '31536000',
		upsert: false
	});

	if (error) {
		return { error: error.message };
	}

	return { url: storagePublicUrl(path), path };
}

export function swapPhotoOrder(urls: string[], photoUrl: string, direction: 'up' | 'down'): string[] {
	const index = urls.indexOf(photoUrl);
	if (index < 0) return urls;

	const swapIndex = direction === 'up' ? index - 1 : index + 1;
	if (swapIndex < 0 || swapIndex >= urls.length) return urls;

	const next = [...urls];
	[next[index], next[swapIndex]] = [next[swapIndex], next[index]];
	return next;
}

export function removePhotoUrl(urls: string[], photoUrl: string): string[] {
	return urls.filter((url) => url !== photoUrl);
}

export function appendPhotoUrl(urls: string[], photoUrl: string): string[] {
	if (urls.includes(photoUrl)) return urls;
	return [...urls, photoUrl];
}

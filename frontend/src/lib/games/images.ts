import type { SupabaseClient } from '@supabase/supabase-js';
import {
	adminGameImagePath,
	storagePublicUrl,
	submissionImagePath
} from '$lib/images/storage-url';

const ALLOWED_IMAGE_TYPES = new Set(['image/webp', 'image/png', 'image/jpeg']);

function extensionForMime(type: string): string {
	if (type === 'image/png') return 'png';
	if (type === 'image/jpeg') return 'jpg';
	return 'webp';
}

export async function uploadImageFile(
	supabase: SupabaseClient,
	storagePath: string,
	file: File,
	supabaseUrl: string,
	bucket = 'games'
): Promise<{ url: string; path: string } | { error: string }> {
	if (file.size === 0) {
		return { error: 'No image file provided.' };
	}

	if (!ALLOWED_IMAGE_TYPES.has(file.type)) {
		return { error: 'Upload a PNG, JPEG, or WebP image.' };
	}

	const body = new Uint8Array(await file.arrayBuffer());
	const { error } = await supabase.storage.from(bucket).upload(storagePath, body, {
		contentType: file.type,
		cacheControl: '31536000',
		upsert: false
	});

	if (error) {
		return { error: error.message };
	}

	return { url: storagePublicUrl(storagePath, supabaseUrl, bucket), path: storagePath };
}

export async function uploadSubmissionPhotos(
	supabase: SupabaseClient,
	submissionId: string,
	files: File[],
	supabaseUrl: string,
	bucket = 'games'
): Promise<{ urls: string[] } | { error: string }> {
	const urls: string[] = [];

	for (const file of files) {
		const extension = extensionForMime(file.type);
		const path = submissionImagePath(submissionId, extension);
		const uploaded = await uploadImageFile(supabase, path, file, supabaseUrl, bucket);
		if ('error' in uploaded) {
			return { error: uploaded.error };
		}
		urls.push(uploaded.url);
	}

	return { urls };
}

export async function uploadAdminGamePhotos(
	supabase: SupabaseClient,
	gameId: string,
	files: File[],
	supabaseUrl: string,
	bucket = 'games'
): Promise<{ urls: string[] } | { error: string }> {
	const urls: string[] = [];

	for (const file of files) {
		const extension = extensionForMime(file.type);
		const path = adminGameImagePath(gameId, extension);
		const uploaded = await uploadImageFile(supabase, path, file, supabaseUrl, bucket);
		if ('error' in uploaded) {
			return { error: uploaded.error };
		}
		urls.push(uploaded.url);
	}

	return { urls };
}

export function slugifyTitle(title: string): string {
	return (
		title
			.toLowerCase()
			.replace(/[^a-z0-9]+/g, '-')
			.replace(/-+/g, '-')
			.replace(/^-|-$/g, '') || 'game'
	);
}

export async function uniqueGameSlug(supabase: SupabaseClient, title: string): Promise<string> {
	const base = slugifyTitle(title);
	let candidate = base;
	let suffix = 0;

	while (true) {
		const { data } = await supabase.from('games').select('id').eq('slug', candidate).maybeSingle();
		if (!data) return candidate;
		suffix += 1;
		candidate = `${base}-${suffix}`;
	}
}

export function coverFromPhotoUrls(
	photoUrls: string[],
	coverIndex: number
): { cover_photo_url: string | null; photo_urls: string[] } {
	if (photoUrls.length === 0) {
		return { cover_photo_url: null, photo_urls: [] };
	}

	const index = Number.isFinite(coverIndex) ? Math.min(Math.max(0, coverIndex), photoUrls.length - 1) : 0;
	return {
		cover_photo_url: photoUrls[index] ?? photoUrls[0],
		photo_urls: photoUrls
	};
}

import { publicEnv } from '$lib/env/public';

export function storageBucketName(): string {
	return publicEnv('PUBLIC_STORAGE_BUCKET') || 'games';
}

export function storagePublicUrl(storagePath: string): string {
	const base = publicEnv('PUBLIC_SUPABASE_URL').replace(/\/$/, '');
	const bucket = storageBucketName();
	return `${base}/storage/v1/object/public/${bucket}/${storagePath}`;
}

export function adminGameImagePath(gameId: string, extension = 'webp'): string {
	const ext = extension.replace(/^\./, '').toLowerCase();
	return `covers/admin/${gameId}/${crypto.randomUUID()}.${ext}`;
}

export function storageBucketName(bucket?: string): string {
	return bucket || 'games';
}

export function storagePublicUrl(storagePath: string, supabaseUrl: string, bucket = 'games'): string {
	const base = supabaseUrl.replace(/\/$/, '');
	return `${base}/storage/v1/object/public/${bucket}/${storagePath}`;
}

export function adminGameImagePath(gameId: string, extension = 'webp'): string {
	const ext = extension.replace(/^\./, '').toLowerCase();
	return `covers/admin/${gameId}/${crypto.randomUUID()}.${ext}`;
}

export function submissionImagePath(submissionId: string, extension = 'webp'): string {
	const ext = extension.replace(/^\./, '').toLowerCase();
	return `submissions/${submissionId}/${crypto.randomUUID()}.${ext}`;
}

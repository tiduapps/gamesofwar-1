import { getRequestEvent } from '$app/server';
import { env } from '$env/dynamic/public';

type PublicEnvKey = 'PUBLIC_SUPABASE_URL' | 'PUBLIC_SUPABASE_ANON_KEY' | 'PUBLIC_STORAGE_BUCKET';

export function publicEnv(
	name: PublicEnvKey,
	platformEnv: App.Platform['env'] | undefined = getRequestEvent()?.platform?.env
): string {
	const record = platformEnv as Record<string, string | undefined> | undefined;
	return record?.[name] ?? env[name] ?? '';
}

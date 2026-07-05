import { createServerClient } from '@supabase/ssr';
import type { Cookies } from '@sveltejs/kit';
import { publicEnv } from '$lib/env/public';

export function createSupabaseServerClient(cookies: Cookies) {
	const url = publicEnv('PUBLIC_SUPABASE_URL');
	const key = publicEnv('PUBLIC_SUPABASE_ANON_KEY');

	return createServerClient(url, key, {
		cookies: {
			getAll: () => cookies.getAll(),
			setAll: (cookiesToSet) => {
				cookiesToSet.forEach(({ name, value, options }) => {
					cookies.set(name, value, { ...options, path: '/' });
				});
			}
		}
	});
}

export function isSupabaseConfigured(): boolean {
	const url = publicEnv('PUBLIC_SUPABASE_URL');
	const key = publicEnv('PUBLIC_SUPABASE_ANON_KEY');

	return Boolean(
		url &&
			key &&
			!url.includes('your-project') &&
			!key.includes('your-anon-key')
	);
}

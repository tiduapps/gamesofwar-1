import { createServerClient } from '@supabase/ssr';
import type { Cookies } from '@sveltejs/kit';

export function createSupabaseServerClient(cookies: Cookies, url: string, key: string) {
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

import { createSupabaseServerClient } from '$lib/supabase/server';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const cfEnv = event.platform?.env as Record<string, string | undefined> | undefined;
	const url = cfEnv?.PUBLIC_SUPABASE_URL ?? '';
	const key = cfEnv?.PUBLIC_SUPABASE_ANON_KEY ?? '';

	if (url && key && !url.includes('your-project') && !key.includes('your-anon-key')) {
		event.locals.supabase = createSupabaseServerClient(event.cookies, url, key);
		event.locals.supabaseReady = true;
		const {
			data: { user }
		} = await event.locals.supabase.auth.getUser();
		event.locals.user = user;
	} else {
		event.locals.supabaseReady = false;
		event.locals.user = null;
	}

	return resolve(event, {
		filterSerializedResponseHeaders(name) {
			return name === 'content-range' || name === 'x-supabase-api-version';
		}
	});
};

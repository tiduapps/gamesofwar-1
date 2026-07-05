import { createSupabaseServerClient } from '$lib/supabase/server';
import type { Handle } from '@sveltejs/kit';
import { env } from '$env/dynamic/public';

export const handle: Handle = async ({ event, resolve }) => {
	const url = env.PUBLIC_SUPABASE_URL ?? '';
	const key = env.PUBLIC_SUPABASE_ANON_KEY ?? '';

	if (url && key && !url.includes('your-project') && !key.includes('your-anon-key')) {
		event.locals.supabase = createSupabaseServerClient(event.cookies);
		const {
			data: { user }
		} = await event.locals.supabase.auth.getUser();
		event.locals.user = user;
	} else {
		event.locals.user = null;
	}

	return resolve(event, {
		filterSerializedResponseHeaders(name) {
			return name === 'content-range' || name === 'x-supabase-api-version';
		}
	});
};

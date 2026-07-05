import { createSupabaseServerClient } from '$lib/supabase/server';
import { publicEnv } from '$lib/env/public';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const url = publicEnv('PUBLIC_SUPABASE_URL', event.platform?.env);
	const key = publicEnv('PUBLIC_SUPABASE_ANON_KEY', event.platform?.env);

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

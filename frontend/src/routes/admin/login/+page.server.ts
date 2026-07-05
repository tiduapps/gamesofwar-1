import { fail, redirect } from '@sveltejs/kit';
import { getAdminAuth } from '$lib/admin/auth';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals, url }) => {
	const redirectTo = url.searchParams.get('redirect') ?? '/admin';

	if (locals.supabase) {
		const { isAdmin } = await getAdminAuth(locals.supabase);
		if (isAdmin) {
			throw redirect(303, redirectTo);
		}
	}

	return { redirect: redirectTo };
};

export const actions: Actions = {
	default: async ({ request, locals }) => {
		const formData = await request.formData();
		const email = String(formData.get('email') ?? '').trim();
		const password = String(formData.get('password') ?? '');
		const redirectTo = String(formData.get('redirect') ?? '/admin');

		if (!email || !password) {
			return fail(400, { error: 'Email and password are required.', email });
		}

		if (!locals.supabase) {
			return fail(503, { error: 'Supabase is not configured.', email });
		}

		const supabase = locals.supabase;
		const { error } = await supabase.auth.signInWithPassword({ email, password });

		if (error) {
			return fail(401, { error: 'Incorrect email or password.', email });
		}

		const { isAdmin } = await getAdminAuth(supabase);
		if (!isAdmin) {
			await supabase.auth.signOut();
			return fail(403, {
				error: "You don't have access to the admin area.",
				email
			});
		}

		throw redirect(303, redirectTo);
	}
};

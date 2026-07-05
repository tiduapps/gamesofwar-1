import { redirect } from '@sveltejs/kit';
import { createSupabaseServerClient } from '$lib/supabase/server';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ cookies }) => {
	const supabase = createSupabaseServerClient(cookies);
	await supabase.auth.signOut();
	throw redirect(303, '/admin/login');
};

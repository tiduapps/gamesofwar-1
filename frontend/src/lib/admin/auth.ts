import { createSupabaseServerClient } from '$lib/supabase/server';
import type { User } from '@supabase/supabase-js';

export type AdminAuth = {
	user: User | null;
	isAdmin: boolean;
};

export async function getAdminAuth(cookies: import('@sveltejs/kit').Cookies): Promise<AdminAuth> {
	const supabase = createSupabaseServerClient(cookies);
	const {
		data: { user }
	} = await supabase.auth.getUser();

	if (!user) {
		return { user: null, isAdmin: false };
	}

	const { data } = await supabase
		.from('admin_profiles')
		.select('is_admin')
		.eq('user_id', user.id)
		.maybeSingle();

	return { user, isAdmin: Boolean(data?.is_admin) };
}

export async function requireAdmin(cookies: import('@sveltejs/kit').Cookies): Promise<AdminAuth | null> {
	const auth = await getAdminAuth(cookies);
	return auth.isAdmin ? auth : null;
}

export function adminLoginUrl(redirectTo = '/admin'): string {
	return `/admin/login?redirect=${encodeURIComponent(redirectTo)}`;
}

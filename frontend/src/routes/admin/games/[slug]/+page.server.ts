import { fail, redirect } from '@sveltejs/kit';
import { adminLoginUrl, requireAdmin } from '$lib/admin/auth';
import {
	appendPhotoUrl,
	fetchAdminGameBySlug,
	removePhotoUrl,
	swapPhotoOrder,
	uploadGameImage
} from '$lib/admin/games';
import type { Actions, PageServerLoad } from './$types';

function parseOptionalInt(value: FormDataEntryValue | null): number | null {
	const raw = String(value ?? '').trim();
	if (!raw) return null;
	const n = Number.parseInt(raw, 10);
	return Number.isFinite(n) ? n : null;
}

export const load: PageServerLoad = async ({ params, locals }) => {
	if (!locals.supabase) {
		throw redirect(303, '/admin/games');
	}

	if (!(await requireAdmin(locals.supabase))) {
		throw redirect(303, adminLoginUrl(`/admin/games/${params.slug}`));
	}

	const game = await fetchAdminGameBySlug(locals.supabase, params.slug);

	if (!game) {
		throw redirect(303, '/admin/games');
	}

	return { game, supabaseReady: true };
};

export const actions: Actions = {
	updateGame: async ({ request, params, locals }) => {
		if (!locals.supabase || !(await requireAdmin(locals.supabase))) return fail(403, { error: 'Not authorized' });

		const formData = await request.formData();
		const title = String(formData.get('title') ?? '').trim();
		if (!title) return fail(400, { error: 'Title is required.' });

		const supabase = locals.supabase;
		const game = await fetchAdminGameBySlug(supabase, params.slug);
		if (!game) return fail(404, { error: 'Game not found.' });

		const { error } = await supabase
			.from('games')
			.update({
				title,
				year: parseOptionalInt(formData.get('year')),
				country: String(formData.get('country') ?? '').trim() || null,
				publisher: String(formData.get('publisher') ?? '').trim() || null,
				theme: String(formData.get('theme') ?? '').trim() || null,
				mechanism: String(formData.get('mechanism') ?? '').trim() || null,
				description: String(formData.get('description') ?? '').trim() || null,
				rules: String(formData.get('rules') ?? '').trim() || null
			})
			.eq('id', game.id);

		if (error) return fail(500, { error: error.message });
		throw redirect(303, `/admin/games/${params.slug}`);
	},

	uploadImage: async ({ request, params, locals, platform }) => {
		if (!locals.supabase || !(await requireAdmin(locals.supabase))) return fail(403, { error: 'Not authorized' });

		const formData = await request.formData();
		const file = formData.get('image');
		const setCover = formData.get('set_cover') === 'on';

		if (!(file instanceof File) || file.size === 0) {
			return fail(400, { error: 'Choose an image to upload.' });
		}

		const supabase = locals.supabase;
		const game = await fetchAdminGameBySlug(supabase, params.slug);
		if (!game) return fail(404, { error: 'Game not found.' });

		const cfEnv = platform?.env as Record<string, string | undefined> | undefined;
		const supabaseUrl = cfEnv?.PUBLIC_SUPABASE_URL ?? '';
		const bucket = cfEnv?.PUBLIC_STORAGE_BUCKET ?? 'games';

		const uploaded = await uploadGameImage(supabase, game.id, file, supabaseUrl, bucket);
		if ('error' in uploaded) return fail(500, { error: uploaded.error });

		const photoUrls = appendPhotoUrl(game.photo_urls, uploaded.url);
		const updates: {
			photo_urls: string[];
			cover_photo_url?: string;
		} = { photo_urls: photoUrls };

		if (setCover || !game.cover_photo_url) {
			updates.cover_photo_url = uploaded.url;
		}

		const { error } = await supabase.from('games').update(updates).eq('id', game.id);
		if (error) return fail(500, { error: error.message });

		throw redirect(303, `/admin/games/${params.slug}`);
	},

	setCover: async ({ request, params, locals }) => {
		if (!locals.supabase || !(await requireAdmin(locals.supabase))) return fail(403, { error: 'Not authorized' });

		const photoUrl = String((await request.formData()).get('photo_url') ?? '').trim();
		if (!photoUrl) return fail(400, { error: 'Missing photo URL.' });

		const game = await fetchAdminGameBySlug(locals.supabase, params.slug);
		if (!game) return fail(404, { error: 'Game not found.' });

		const { error } = await locals.supabase
			.from('games')
			.update({ cover_photo_url: photoUrl })
			.eq('id', game.id);

		if (error) return fail(500, { error: error.message });
		throw redirect(303, `/admin/games/${params.slug}`);
	},

	removePhoto: async ({ request, params, locals }) => {
		if (!locals.supabase || !(await requireAdmin(locals.supabase))) return fail(403, { error: 'Not authorized' });

		const photoUrl = String((await request.formData()).get('photo_url') ?? '').trim();
		if (!photoUrl) return fail(400, { error: 'Missing photo URL.' });

		const game = await fetchAdminGameBySlug(locals.supabase, params.slug);
		if (!game) return fail(404, { error: 'Game not found.' });

		const photoUrls = removePhotoUrl(game.photo_urls, photoUrl);
		let coverPhotoUrl = game.cover_photo_url;
		if (coverPhotoUrl === photoUrl) {
			coverPhotoUrl = photoUrls[0] ?? null;
		}

		const { error } = await locals.supabase
			.from('games')
			.update({ photo_urls: photoUrls, cover_photo_url: coverPhotoUrl })
			.eq('id', game.id);

		if (error) return fail(500, { error: error.message });
		throw redirect(303, `/admin/games/${params.slug}`);
	},

	movePhoto: async ({ request, params, locals }) => {
		if (!locals.supabase || !(await requireAdmin(locals.supabase))) return fail(403, { error: 'Not authorized' });

		const formData = await request.formData();
		const photoUrl = String(formData.get('photo_url') ?? '').trim();
		const direction = String(formData.get('direction') ?? '') === 'down' ? 'down' : 'up';

		if (!photoUrl) return fail(400, { error: 'Missing photo URL.' });

		const game = await fetchAdminGameBySlug(locals.supabase, params.slug);
		if (!game) return fail(404, { error: 'Game not found.' });

		const photoUrls = swapPhotoOrder(game.photo_urls, photoUrl, direction);
		const { error } = await locals.supabase.from('games').update({ photo_urls: photoUrls }).eq('id', game.id);

		if (error) return fail(500, { error: error.message });
		throw redirect(303, `/admin/games/${params.slug}`);
	}
};

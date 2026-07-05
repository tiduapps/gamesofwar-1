import { error, fail } from '@sveltejs/kit';
import { fetchApprovedGameComments, fetchGameBySlug } from '$lib/games/detail';
import type { Actions, PageServerLoad } from './$types';

type CommentFields = {
	author_name: string;
	author_email: string;
	body: string;
};

function readCommentFields(formData: FormData): CommentFields {
	return {
		author_name: String(formData.get('author_name') ?? '').trim(),
		author_email: String(formData.get('author_email') ?? '').trim(),
		body: String(formData.get('body') ?? '').trim()
	};
}

function validateComment(fields: CommentFields): Record<string, string> {
	const errors: Record<string, string> = {};

	if (!fields.author_name) {
		errors.author_name = 'Please enter your name.';
	}

	if (!fields.author_email) {
		errors.author_email = 'Email is required.';
	} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.author_email)) {
		errors.author_email = 'Enter a valid email address.';
	}

	if (!fields.body) {
		errors.body = 'Please write a comment.';
	} else if (fields.body.length < 3) {
		errors.body = 'Comment is too short.';
	}

	return errors;
}

export const load: PageServerLoad = async ({ params, locals }) => {
	if (!locals.supabase) {
		throw error(404, 'Game not found');
	}

	const supabase = locals.supabase;
	const game = await fetchGameBySlug(supabase, params.slug);

	if (!game) {
		throw error(404, 'Game not found');
	}

	const comments = await fetchApprovedGameComments(supabase, game.id);

	return {
		game,
		comments,
		supabaseReady: true
	};
};

export const actions: Actions = {
	comment: async ({ request, params, locals }) => {
		const fields = readCommentFields(await request.formData());
		const errors = validateComment(fields);

		if (Object.keys(errors).length > 0) {
			return fail(400, { errors, fields, success: false });
		}

		if (!locals.supabase) {
			return fail(503, {
				errors: { form: 'Comments are unavailable right now.' },
				fields,
				success: false
			});
		}

		const supabase = locals.supabase;
		const game = await fetchGameBySlug(supabase, params.slug);

		if (!game) {
			return fail(404, { errors: { form: 'Game not found.' }, fields, success: false });
		}

		const { error: insertError } = await supabase.from('game_comments').insert({
			game_id: game.id,
			author_name: fields.author_name,
			author_email: fields.author_email,
			body: fields.body,
			status: 'pending'
		});

		if (insertError) {
			return fail(500, {
				errors: { form: 'Could not submit your comment. Please try again.' },
				fields,
				success: false
			});
		}

		return { success: true, fields: null, errors: null };
	}
};

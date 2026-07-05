import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

type SubmissionFields = {
	title: string;
	year: string;
	country: string;
	publisher: string;
	description: string;
	mechanism: string;
	rules: string;
	theme: string;
	submitter_name: string;
	submitter_email: string;
	submitter_notes: string;
};

function readFields(formData: FormData): SubmissionFields {
	return {
		title: String(formData.get('title') ?? '').trim(),
		year: String(formData.get('year') ?? '').trim(),
		country: String(formData.get('country') ?? '').trim(),
		publisher: String(formData.get('publisher') ?? '').trim(),
		description: String(formData.get('description') ?? '').trim(),
		mechanism: String(formData.get('mechanism') ?? '').trim(),
		rules: String(formData.get('rules') ?? '').trim(),
		theme: String(formData.get('theme') ?? '').trim(),
		submitter_name: String(formData.get('submitter_name') ?? '').trim(),
		submitter_email: String(formData.get('submitter_email') ?? '').trim(),
		submitter_notes: String(formData.get('submitter_notes') ?? '').trim()
	};
}

function validate(fields: SubmissionFields): Record<string, string> {
	const errors: Record<string, string> = {};

	if (!fields.title) {
		errors.title = 'Game title is required.';
	}

	if (!fields.submitter_email) {
		errors.submitter_email = 'Email is required so we can follow up.';
	} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.submitter_email)) {
		errors.submitter_email = 'Enter a valid email address.';
	}

	if (fields.year && !/^\d{3,4}$/.test(fields.year)) {
		errors.year = 'Enter a valid year (e.g. 1942).';
	}

	return errors;
}

export const actions: Actions = {
	default: async ({ request, locals }) => {
		const fields = readFields(await request.formData());
		const errors = validate(fields);

		if (Object.keys(errors).length > 0) {
			return fail(400, { errors, fields, success: false });
		}

		if (!locals.supabase) {
			return fail(503, {
				errors: { form: 'Submissions are unavailable until Supabase is configured.' },
				fields,
				success: false
			});
		}

		const year = fields.year ? Number.parseInt(fields.year, 10) : null;

		const { error } = await locals.supabase.from('game_submissions').insert({
			title: fields.title,
			year: Number.isFinite(year) ? year : null,
			country: fields.country || null,
			publisher: fields.publisher || null,
			description: fields.description || null,
			mechanism: fields.mechanism || null,
			rules: fields.rules || null,
			theme: fields.theme || null,
			submitter_name: fields.submitter_name || null,
			submitter_email: fields.submitter_email,
			submitter_notes: fields.submitter_notes || null,
			status: 'pending'
		});

		if (error) {
			return fail(500, {
				errors: { form: 'Could not submit your game. Please try again later.' },
				fields,
				success: false
			});
		}

		return { success: true, fields: null, errors: null };
	}
};

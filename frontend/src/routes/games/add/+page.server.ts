import { fail, redirect } from '@sveltejs/kit';
import { requireAdmin } from '$lib/admin/auth';
import {
	coverFromPhotoUrls,
	uploadAdminGamePhotos,
	uploadSubmissionPhotos,
	uniqueGameSlug
} from '$lib/games/images';
import type { Actions, PageServerLoad } from './$types';

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

function parseOptionalInt(value: FormDataEntryValue | null): number | null {
	const raw = String(value ?? '').trim();
	if (!raw) return null;
	const n = Number.parseInt(raw, 10);
	return Number.isFinite(n) ? n : null;
}

function readImageFiles(formData: FormData): File[] {
	return formData
		.getAll('images')
		.filter((entry): entry is File => entry instanceof File && entry.size > 0);
}

function readCoverIndex(formData: FormData): number {
	const raw = String(formData.get('cover_index') ?? '0').trim();
	const n = Number.parseInt(raw, 10);
	return Number.isFinite(n) ? n : 0;
}

function validate(fields: SubmissionFields, publishImmediately: boolean): Record<string, string> {
	const errors: Record<string, string> = {};

	if (!fields.title) {
		errors.title = 'Game title is required.';
	}

	if (!publishImmediately) {
		if (!fields.submitter_email) {
			errors.submitter_email = 'Email is required so we can follow up.';
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.submitter_email)) {
			errors.submitter_email = 'Enter a valid email address.';
		}
	}

	if (fields.year && !/^\d{3,4}$/.test(fields.year)) {
		errors.year = 'Enter a valid year (e.g. 1942).';
	}

	return errors;
}

function gameFieldsFromSubmission(fields: SubmissionFields) {
	const year = fields.year ? Number.parseInt(fields.year, 10) : null;

	return {
		title: fields.title,
		year: Number.isFinite(year) ? year : null,
		country: fields.country || null,
		publisher: fields.publisher || null,
		description: fields.description || null,
		mechanism: fields.mechanism || null,
		rules: fields.rules || null,
		theme: fields.theme || null
	};
}

export const load: PageServerLoad = async ({ locals }) => {
	if (!locals.supabase) {
		return { isAdmin: false, userEmail: null, supabaseReady: false };
	}

	const admin = await requireAdmin(locals.supabase);
	return {
		isAdmin: Boolean(admin),
		userEmail: locals.user?.email ?? null,
		supabaseReady: true
	};
};

export const actions: Actions = {
	default: async ({ request, locals, platform }) => {
		const formData = await request.formData();
		const publishImmediately = formData.get('publish_immediately') === 'on';
		const fields = readFields(formData);
		const errors = validate(fields, publishImmediately);

		if (Object.keys(errors).length > 0) {
			return fail(400, { errors, fields, success: false, publishedSlug: null });
		}

		if (!locals.supabase) {
			return fail(503, {
				errors: { form: 'Submissions are unavailable until Supabase is configured.' },
				fields,
				success: false,
				publishedSlug: null
			});
		}

		const supabase = locals.supabase;
		const cfEnv = platform?.env as Record<string, string | undefined> | undefined;
		const supabaseUrl = cfEnv?.PUBLIC_SUPABASE_URL ?? '';
		const bucket = cfEnv?.PUBLIC_STORAGE_BUCKET ?? 'games';
		const imageFiles = readImageFiles(formData);
		const coverIndex = readCoverIndex(formData);
		const gameFields = gameFieldsFromSubmission(fields);

		if (publishImmediately) {
			if (!(await requireAdmin(supabase))) {
				return fail(403, {
					errors: { form: 'Only admins can publish games directly.' },
					fields,
					success: false,
					publishedSlug: null
				});
			}

			const slug = await uniqueGameSlug(supabase, fields.title);
			const { data: game, error: insertError } = await supabase
				.from('games')
				.insert({ ...gameFields, slug })
				.select('id')
				.single();

			if (insertError || !game) {
				return fail(500, {
					errors: { form: insertError?.message ?? 'Could not create the game.' },
					fields,
					success: false,
					publishedSlug: null
				});
			}

			let photoUrls: string[] = [];
			if (imageFiles.length > 0) {
				const uploaded = await uploadAdminGamePhotos(
					supabase,
					game.id,
					imageFiles,
					supabaseUrl,
					bucket
				);
				if ('error' in uploaded) {
					return fail(500, {
						errors: { form: uploaded.error },
						fields,
						success: false,
						publishedSlug: null
					});
				}
				photoUrls = uploaded.urls;
			}

			const photos = coverFromPhotoUrls(photoUrls, coverIndex);
			if (photoUrls.length > 0) {
				const { error: updateError } = await supabase
					.from('games')
					.update({
						cover_photo_url: photos.cover_photo_url,
						photo_urls: photos.photo_urls
					})
					.eq('id', game.id);

				if (updateError) {
					return fail(500, {
						errors: { form: updateError.message },
						fields,
						success: false,
						publishedSlug: null
					});
				}
			}

			throw redirect(303, `/admin/games/${slug}`);
		}

		const submissionId = crypto.randomUUID();
		let photoUrls: string[] = [];

		if (imageFiles.length > 0) {
			const uploaded = await uploadSubmissionPhotos(
				supabase,
				submissionId,
				imageFiles,
				supabaseUrl,
				bucket
			);
			if ('error' in uploaded) {
				return fail(500, {
					errors: { form: uploaded.error },
					fields,
					success: false,
					publishedSlug: null
				});
			}
			photoUrls = uploaded.urls;
		}

		const photos = coverFromPhotoUrls(photoUrls, coverIndex);

		const { error } = await supabase.from('game_submissions').insert({
			id: submissionId,
			...gameFields,
			cover_photo_url: photos.cover_photo_url,
			photo_urls: photos.photo_urls,
			submitter_name: fields.submitter_name || null,
			submitter_email: fields.submitter_email,
			submitter_notes: fields.submitter_notes || null,
			status: 'pending'
		});

		if (error) {
			return fail(500, {
				errors: { form: 'Could not submit your game. Please try again later.' },
				fields,
				success: false,
				publishedSlug: null
			});
		}

		return { success: true, fields: null, errors: null, publishedSlug: null };
	}
};

import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ platform }) => {
	const cfEnv = platform?.env as Record<string, string | undefined> | undefined;
	const url = cfEnv?.PUBLIC_SUPABASE_URL ?? '';
	const key = cfEnv?.PUBLIC_SUPABASE_ANON_KEY ?? '';

	const keys = cfEnv ? Object.keys(cfEnv) : [];

	return new Response(
		JSON.stringify(
			{
				hasPlatform: !!platform,
				hasCfEnv: !!cfEnv,
				envKeys: keys,
				PUBLIC_SUPABASE_URL: url ? `${url.slice(0, 30)}...` : '(empty)',
				PUBLIC_SUPABASE_ANON_KEY: key ? `${key.slice(0, 20)}...` : '(empty)',
				PUBLIC_STORAGE_BUCKET: cfEnv?.PUBLIC_STORAGE_BUCKET ?? '(empty)'
			},
			null,
			2
		),
		{ headers: { 'content-type': 'application/json' } }
	);
};

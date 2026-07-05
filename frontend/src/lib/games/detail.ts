import type { SupabaseClient } from '@supabase/supabase-js';
import type { Game } from '$lib/types/database';
import type { GameComment, GameCommentPublic } from '$lib/types/database';

export async function fetchGameBySlug(
	supabase: SupabaseClient,
	slug: string
): Promise<Game | null> {
	const { data, error } = await supabase
		.from('games')
		.select(
			'id, title, slug, year, country, publisher, description, mechanism, rules, theme, cover_photo_url, photo_urls'
		)
		.eq('slug', slug)
		.maybeSingle();

	if (error || !data) return null;

	return {
		...data,
		wix_id: null,
		photo_urls: data.photo_urls ?? []
	};
}

export async function fetchApprovedGameComments(
	supabase: SupabaseClient,
	gameId: string
): Promise<GameCommentPublic[]> {
	const { data, error } = await supabase
		.from('game_comments')
		.select('id, author_name, body, created_at')
		.eq('game_id', gameId)
		.eq('status', 'approved')
		.order('created_at', { ascending: true });

	if (error) return [];
	return data ?? [];
}

export type PendingGameComment = GameComment & {
	games: { title: string; slug: string } | null;
};

export async function fetchPendingGameComments(
	supabase: SupabaseClient
): Promise<PendingGameComment[]> {
	const { data, error } = await supabase
		.from('game_comments')
		.select('*, games(title, slug)')
		.eq('status', 'pending')
		.order('created_at', { ascending: true });

	if (error) return [];
	return (data ?? []) as PendingGameComment[];
}

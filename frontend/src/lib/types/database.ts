export type FeaturedCollection = {
	id: string;
	title: string;
	href: string;
	position: 'left' | 'right';
	sort_order: number;
	is_active: boolean;
};

export type AnnouncementPlacement = 'homepage' | 'news';

export type Announcement = {
	id: string;
	placement?: AnnouncementPlacement;
	fact: string;
	game_id: string | null;
	button_label: string;
	sort_order: number;
	is_active: boolean;
	eyebrow?: string | null;
	headline?: string | null;
	date_range?: string | null;
	location_name?: string | null;
	location_address?: string | null;
	link_intro?: string | null;
	link_url?: string | null;
	link_label?: string | null;
	games?: {
		slug: string;
		title: string;
	} | null;
};

export type Game = {
	id: string;
	wix_id: string | null;
	title: string;
	slug: string;
	year: number | null;
	country: string | null;
	publisher: string | null;
	description: string | null;
	mechanism: string | null;
	rules: string | null;
	theme: string | null;
	cover_photo_url: string | null;
	photo_urls: string[];
};

export type GameSubmissionStatus = 'pending' | 'approved' | 'rejected';

export type GameSubmissionInput = {
	title: string;
	year?: number | null;
	country?: string | null;
	publisher?: string | null;
	description?: string | null;
	mechanism?: string | null;
	rules?: string | null;
	theme?: string | null;
	cover_photo_url?: string | null;
	photo_urls?: string[];
	submitter_name?: string | null;
	submitter_email: string;
	submitter_notes?: string | null;
};

export type GameSubmission = GameSubmissionInput & {
	id: string;
	status: GameSubmissionStatus;
	admin_notes: string | null;
	reviewed_by: string | null;
	reviewed_at: string | null;
	approved_game_id: string | null;
	created_at: string;
	updated_at: string;
};

export type GameCommentStatus = 'pending' | 'approved' | 'rejected';

export type GameCommentInput = {
	author_name: string;
	author_email: string;
	body: string;
};

export type GameCommentPublic = {
	id: string;
	author_name: string;
	body: string;
	created_at: string;
};

export type GameComment = GameCommentInput & {
	id: string;
	game_id: string;
	status: GameCommentStatus;
	admin_notes: string | null;
	reviewed_by: string | null;
	reviewed_at: string | null;
	created_at: string;
	updated_at: string;
};

export type Story = {
	id: string;
	title: string;
	slug: string;
	sort_order: number;
	is_active: boolean;
};

export type StoryGameLink = {
	id: string;
	story_id: string;
	game_id: string;
	sort_order: number;
};

export type StoryGame = {
	id: string;
	title: string;
	slug: string;
	year: number | null;
	cover_photo_url?: string | null;
};

export type StoryWithGames = Story & {
	games: Array<StoryGameLink & { game: StoryGame | null }>;
};

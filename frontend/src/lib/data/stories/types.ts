export type StoryFigure = {
	src: string;
	alt: string;
	caption?: string;
};

export type StoryBlock =
	| { type: 'paragraph'; text: string }
	| { type: 'list'; items: string[] }
	| { type: 'figure'; align: 'left' | 'right' | 'center'; figure: StoryFigure }
	| { type: 'figure-stack'; align: 'left' | 'right'; figures: StoryFigure[] };

export type StoryContent = {
	slug: string;
	title: string;
	subtitle?: string;
	epigraph?: {
		quote: string;
		attribution: string;
	};
	blocks: StoryBlock[];
};

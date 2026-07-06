#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const outDir = join(root, 'frontend/src/lib/data/stories');
const images = JSON.parse(readFileSync(join(__dirname, '.wwii-chapter-images.json'), 'utf8'));

function esc(s) {
	return s.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

function fig(slug, src, alt, caption) {
	const c = caption ? `,\n\t\t\t\tcaption: '${esc(caption)}'` : '';
	return `{\n\t\t\t\tsrc: img('${src}'),\n\t\t\t\talt: '${esc(alt)}'${c}\n\t\t\t}`;
}

function figureBlock(slug, src, alt, caption) {
	return `{\n\t\t\ttype: 'figure',\n\t\t\talign: 'right',\n\t\t\tfigure: ${fig(slug, src, alt, caption)}\n\t\t}`;
}

function figureStackBlock(slug, figures) {
	const figs = figures.map((f) => fig(slug, f.src, f.alt, f.caption)).join(',\n\t\t\t\t');
	return `{\n\t\t\ttype: 'figure-stack',\n\t\t\talign: 'right',\n\t\t\tfigures: [\n\t\t\t\t${figs}\n\t\t\t]\n\t\t}`;
}

function para(text) {
	return `{\n\t\t\ttype: 'paragraph',\n\t\t\ttext: '${esc(text)}'\n\t\t}`;
}

function generate({ exportName, slug, title, blocks }) {
	const body = blocks
		.map((b) => {
			if (b.type === 'paragraph') return para(b.text);
			if (b.type === 'figure') return figureBlock(slug, b.src, b.alt, b.caption);
			if (b.type === 'figure-stack') return figureStackBlock(slug, b.figures);
			throw new Error(`unknown block in ${slug}`);
		})
		.join(',\n\t\t');

	return `import type { StoryContent } from './types';

const img = (name: string) => \`/images/stories/${slug}/\${name}\`;

export const ${exportName}: StoryContent = {
\tslug: '${slug}',
\ttitle: '${esc(title)}',
\tblocks: [
\t\t${body}
\t]
};
`;
}

function normalizeImageName(line) {
	return line
		.trim()
		.replace(/\.jpg$/i, '')
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-|-$/g, '') + '.jpg';
}

function findManifestName(slug, normalized) {
	const list = images[slug];
	const exact = list.find((n) => n === normalized);
	if (exact) return exact;
	const loose = list.find((n) => n.replace(/-/g, '') === normalized.replace(/-/g, ''));
	if (loose) return loose;
	throw new Error(`Image not in manifest for ${slug}: ${normalized} (from line)`);
}

function captionFromFilename(filename) {
	return filename
		.replace(/\.jpg$/i, '')
		.replace(/-/g, ' ')
		.replace(/\b\w/g, (c) => c.toUpperCase());
}

function parseMarkdownArticle(slug, mdPath, imageGroups = {}) {
	const raw = readFileSync(mdPath, 'utf8');
	const lines = raw.split('\n');
	const blocks = [];
	let buffer = [];
	const usedImages = new Set();

	const skipLines = new Set([
		'',
		'​',
		'top of page',
		'bottom of page',
		'Home',
		'Stories',
		'Games',
		'News & Events',
		'Community',
		'About Us',
		'## GAMES OF WAR'
	]);

	function shouldSkipParagraph(t) {
		if (!t) return true;
		if (skipLines.has(t)) return true;
		if (t.startsWith('Source URL:')) return true;
		if (t.startsWith('Title:')) return true;
		if (t.startsWith('Next:')) return true;
		if (t.startsWith('Copyright')) return true;
		if (t.includes('website builder')) return true;
		if (t.includes('built on Wix')) return true;
		if (t === 'Get Started' || t.endsWith('Get Started')) return true;
		return false;
	}

	function flushParagraphs() {
		const text = buffer.join('\n').trim();
		if (text) {
			for (const p of text.split(/\n\n+/)) {
				const t = p.trim();
				if (!shouldSkipParagraph(t)) {
					blocks.push({ type: 'paragraph', text: t });
				}
			}
		}
		buffer = [];
	}

	for (let i = 0; i < lines.length; i++) {
		const line = lines[i].trim();
		if (/\.jpg\s*$/i.test(line) && line.length < 120) {
			flushParagraphs();
			const normalized = normalizeImageName(line);
			const src = findManifestName(slug, normalized);
			if (usedImages.has(src)) continue;
			const group = imageGroups[src];
			if (group) {
				if (!group.used) {
					for (const f of group.figures) usedImages.add(f);
					blocks.push({
						type: 'figure-stack',
						figures: group.figures.map((f) => ({
							src: f,
							alt: captionFromFilename(f),
							caption: captionFromFilename(f)
						}))
					});
					group.used = true;
				}
				continue;
			}
			usedImages.add(src);
			blocks.push({
				type: 'figure',
				src,
				alt: captionFromFilename(src),
				caption: captionFromFilename(src)
			});
			continue;
		}
		if (line.startsWith('# ')) continue;
		if (line.startsWith('## ')) continue;
		if (line.startsWith('### ')) {
			flushParagraphs();
			const heading = line.replace(/^###\s+/, '');
			if (!shouldSkipParagraph(heading)) {
				blocks.push({ type: 'paragraph', text: heading });
			}
			continue;
		}
		if (!line || line === '​') {
			if (buffer.length) flushParagraphs();
			continue;
		}
		if (skipLines.has(line)) continue;
		buffer.push(line);
	}
	flushParagraphs();
	return blocks;
}

import { battleOfBritainBlocks } from './wwii-chapter-data/battle-of-britain.mjs';
import { battleOfTheAtlanticBlocks } from './wwii-chapter-data/battle-of-the-atlantic.mjs';

const chapters = [
	{ exportName: 'battleOfBritain', slug: 'battle-of-britain', title: 'The Battle of Britain', blocks: battleOfBritainBlocks },
	{ exportName: 'battleOfTheAtlantic', slug: 'battle-of-the-atlantic', title: 'Battle of the Atlantic', blocks: battleOfTheAtlanticBlocks },
	{
		exportName: 'bombingTheReich',
		slug: 'bombing-the-reich',
		title: 'Bombing the Reich',
		blocks: parseMarkdownArticle(
			'bombing-the-reich',
			'/Users/udit/.cursor/projects/Users-udit-projects-gamesofwar-1/uploads/bombing-the-reich-3.md',
			{
				'bomb-berlin-box-cover.jpg': {
					figures: ['bomb-berlin-box-cover.jpg', 'bomb-berlin-board.jpg'],
					used: false
				},
				'bomber-cover-scan.jpg': {
					figures: ['bomber-cover-scan.jpg', 'bomber-board.jpg'],
					used: false
				},
				'spot-a-plane-box-top.jpg': {
					figures: ['spot-a-plane-box-top.jpg', 'spot-a-plane-master-card.jpg'],
					used: false
				},
				'squadron-scramble-box-cropped.jpg': {
					figures: ['squadron-scramble-box-cropped.jpg', 'squadron-scramble-109-spit.jpg'],
					used: false
				},
				'act-box-cover.jpg': {
					figures: ['act-box-cover.jpg', 'act-us-planes.jpg'],
					used: false
				},
				'act-axis-silhouettes.jpg': {
					figures: ['act-axis-silhouettes.jpg', 'act-dogfighting-eg.jpg', 'act-bombing-egs.jpg'],
					used: false
				},
				'army-air-box.jpg': { figures: ['army-air-box.jpg', 'army-air-board.jpg'], used: false },
				'air-attack-box-cover.jpg': {
					figures: ['air-attack-box-cover.jpg', 'air-attack-board.jpg'],
					used: false
				},
				'air-attack-objective-platforms.jpg': {
					figures: ['air-attack-objective-platforms.jpg', 'air-attack-crt.jpg'],
					used: false
				},
				'victory-bomber-box.jpg': {
					figures: ['victory-bomber-box.jpg', 'victory-bomber-box-contents-with-launcher-and-pieces.jpg'],
					used: false
				},
				'hornet-flip-board-and-pieces.jpg': {
					figures: ['hornet-flip-board-and-pieces.jpg', 'hornet-box-top.jpg'],
					used: false
				},
				'wings-target-board-horizontal.jpg': {
					figures: ['wings-target-board-horizontal.jpg', 'wings-rules-diagram.jpg', 'wings-repeating-rifle.jpg'],
					used: false
				},
				'bombs-away-box-cover.jpg': {
					figures: ['bombs-away-box-cover.jpg', 'bombs-away-board.jpg'],
					used: false
				},
				'eagle-bombsight-mirror-view-2-better.jpg': {
					figures: [
						'eagle-bombsight-mirror-view-2-better.jpg',
						'eagle-bombsight-oblique.jpg',
						'eagle-bombsight-bombs-in-target.jpg'
					],
					used: false
				},
				'bomber-box.jpg': {
					figures: ['bomber-box.jpg', 'bomber-ball-box.jpg'],
					used: false
				},
				'bomber-ball-ships.jpg': {
					figures: ['bomber-ball-ships.jpg', 'bomber-ball-bomber-suspended.jpg'],
					used: false
				},
				'adler-luftverdigungspiel.jpg': {
					figures: ['adler-luftverdigungspiel.jpg', 'adler-luftverdigungspiel-board-example.jpg'],
					used: false
				},
				'flak-box.jpg': { figures: ['flak-box.jpg', 'flak-board.jpg'], used: false },
				'marsch-box-cover.jpg': {
					figures: ['marsch-box-cover.jpg', 'marsch-hy.jpg', 'marsch-full-board.jpg'],
					used: false
				},
				'adler-ad-1943.jpg': { figures: ['adler-ad-1943.jpg', 'grafe-game-ad-1944.jpg'], used: false }
			}
		)
	},
	{
		exportName: 'liberatingEurope',
		slug: 'liberating-europe',
		title: 'Liberating Europe',
		blocks: parseMarkdownArticle(
			'liberating-europe',
			'/Users/udit/.cursor/projects/Users-udit-projects-gamesofwar-1/uploads/liberating-europe-4.md',
			{
				'battle-checkers-box-cover.jpg': {
					figures: ['battle-checkers-box-cover.jpg', 'battle-checkers-board.jpg'],
					used: false
				},
				'liberty-box.jpg': { figures: ['liberty-box.jpg', 'liberty-card-pairs.jpg'], used: false },
				'dawson-box-cover.jpg': {
					figures: ['dawson-box-cover.jpg', 'dawson-board.jpg', 'dawson-slider.jpg'],
					used: false
				},
				'ferry-command-box-cover.jpg': {
					figures: ['ferry-command-box-cover.jpg', 'ferry-command-board-and-pieces.jpg'],
					used: false
				},
				'land-and-sea-box-top.jpg': {
					figures: ['land-and-sea-box-top.jpg', 'land-sea-and-air-dex-board.jpg', 'land-and-sea-board-2.jpg'],
					used: false
				},
				'battle-box-cover.jpg': { figures: ['battle-box-cover.jpg', 'battle-board.jpg'], used: false },
				'electric-patrol-box.jpg': {
					figures: ['electric-patrol-box.jpg', 'electric-patrol-board.jpg'],
					used: false
				},
				'unknown-us-army-board.jpg': {
					figures: ['unknown-us-army-board.jpg', 'unknown-us-army-glider.jpg', 'unknown-us-army-walkietalkie.jpg'],
					used: false
				},
				'jeep-patrol-box.jpg': { figures: ['jeep-patrol-box.jpg', 'jeep-patrol-90mm-mortar.jpg'], used: false },
				'blindee-box-cover.jpg': {
					figures: ['blindee-box-cover.jpg', 'blindee-attacker-setup.jpg', 'blindee-defender-setup.jpg'],
					used: false
				},
				'maquis-box.jpg': { figures: ['maquis-box.jpg', 'maquis-board.jpg'], used: false },
				'liberation-board-empty.jpg': {
					figures: ['liberation-board-empty.jpg', 'liberation-pieces-diagonal.jpg'],
					used: false
				},
				'goose-de-gaulle-full-board.jpg': {
					figures: ['goose-de-gaulle-full-board.jpg', 'goose-de-gaulle-start.jpg', 'goose-de-gaulle-centre.jpg'],
					used: false
				}
			}
		)
	},
	{
		exportName: 'warInThePacific',
		slug: 'war-in-the-pacific',
		title: 'War in the Pacific',
		blocks: parseMarkdownArticle(
			'war-in-the-pacific',
			'/Users/udit/.cursor/projects/Users-udit-projects-gamesofwar-1/uploads/war-in-the-pacific-5.md',
			{
				'ranger-box-top.jpg': {
					figures: ['ranger-box-top.jpg', 'ranger-board.jpg'],
					used: false
				},
				'commando-spinner.jpg': { figures: ['commando-spinner.jpg', 'ranger-pieces.jpg'], used: false },
				'slide-em-japanese.jpg': {
					figures: ['slide-em-japanese.jpg', 'slide-em-japanese-contents.jpg'],
					used: false
				},
				'game-of-defense-atlantic-board.jpg': {
					figures: ['game-of-defense-atlantic-board.jpg', 'game-of-defense-pieces-horizontal.jpg'],
					used: false
				},
				'defense-american-objective-cards.jpg': {
					figures: ['defense-american-objective-cards.jpg', 'defense-european-objective-cards.jpg'],
					used: false
				},
				'two-ocean-envelope-cover.jpg': {
					figures: ['two-ocean-envelope-cover.jpg', 'two-ocean-back-ad-for-all-three.jpg'],
					used: false
				},
				'blast-em-3-blue-boards.jpg': {
					figures: ['blast-em-3-blue-boards.jpg', 'blast-em-cover.jpg'],
					used: false
				},
				'blast-em-midway-full.jpg': { figures: ['blast-em-midway-full.jpg', 'blast-em-solomons-cover.jpg'], used: false },
				'navy-bob-box.jpg': {
					figures: ['navy-bob-box.jpg', 'navy-bob-ball-and-cue.jpg', 'navy-bob-ball-and-target.jpg', 'navy-bob-torpedo-tube.jpg'],
					used: false
				},
				'squadron-fighting-chiefs.jpg': {
					figures: ['squadron-fighting-chiefs.jpg', 'squadron-box-cover.jpg', 'squadron-fighters-and-scouts.jpg'],
					used: false
				},
				'junior-bombsight-box-cover.jpg': {
					figures: [
						'junior-bombsight-box-cover.jpg',
						'junior-bombsight-bombsight.jpg',
						'junior-bombsight-board-and-contents.jpg'
					],
					used: false
				},
				'air-defense-full-game.jpg': {
					figures: ['air-defense-full-game.jpg', 'air-raid-defense-target-board.jpg', 'spin-em-target.jpg'],
					used: false
				},
				'batailles-box-top.jpg': {
					figures: ['batailles-box-top.jpg', 'batailles-box-contents.jpg', 'batailles-map.jpg', 'batailles-sur-mer-rules-1.jpg'],
					used: false
				},
				'trap-a-sap.jpg': { figures: ['trap-a-sap.jpg', 'trap-jap-box-top.jpg', 'trap-jap-full-board.jpg'], used: false }
			}
		)
	}
];

function verifyImages(slug, blocks) {
	const used = new Set();
	for (const b of blocks) {
		if (b.type === 'figure') used.add(b.src);
		if (b.type === 'figure-stack') b.figures.forEach((f) => used.add(f.src));
	}
	const manifest = images[slug];
	const missing = manifest.filter((n) => !used.has(n));
	const extra = [...used].filter((n) => !manifest.includes(n));
	if (missing.length) throw new Error(`${slug}: unused manifest images: ${missing.join(', ')}`);
	if (extra.length) throw new Error(`${slug}: images not in manifest: ${extra.join(', ')}`);
}

for (const ch of chapters) {
	verifyImages(ch.slug, ch.blocks);
	const path = join(outDir, `${ch.slug}.ts`);
	writeFileSync(path, generate(ch));
	console.log(`Wrote ${path} (${ch.blocks.length} blocks)`);
}

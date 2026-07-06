#!/usr/bin/env node
/**
 * Fetch Cold War chapter articles from Wix and generate StoryContent TS files.
 */
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { execSync, spawnSync } from 'child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const outDir = join(root, 'frontend/src/lib/data/stories');
const images = JSON.parse(readFileSync(join(__dirname, '.cold-war-chapter-images.json'), 'utf8'));

const WIX_BASE = 'https://dspsands.wixsite.com/my-site-2';

const chapters = [
	{
		exportName: 'madAboutWar',
		slug: 'mad-about-war',
		title: 'MAD about War',
		wixTitle: 'MAD about War'
	},
	{
		exportName: 'jetsComeOfAge',
		slug: 'jets-come-of-age',
		title: 'Jets Come of Age',
		wixTitle: 'Jets Come of Age'
	},
	{
		exportName: 'theRaceForSpace',
		slug: 'the-race-for-space',
		title: 'The Race for Space',
		wixTitle: 'The Race for Space'
	},
	{
		exportName: 'communistPlotting',
		slug: 'communist-plotting',
		title: 'Communist Plotting',
		wixTitle: 'Communist Plotting'
	},
	{
		exportName: 'heartsAndMindsVietNam',
		slug: 'hearts-and-minds-viet-nam',
		title: 'Hearts and Minds',
		subtitle: 'Viet Nam',
		wixTitle: 'Hearts and Minds'
	},
	{
		exportName: 'religionAndOilTheMiddleEast',
		slug: 'religion-and-oil-the-middle-east',
		title: 'Religion and Oil: The Middle East',
		wixTitle: 'Religion and Oil: The Middle East'
	},
	{
		exportName: 'despotsAndDecolonializationAfrica',
		slug: 'despots-and-decolonialization-africa',
		title: 'Despots and Decolonialization: Africa',
		wixTitle: 'Despots and Decolonialization: Africa'
	},
	{
		exportName: 'missivesAndMissilesTheFalklands',
		slug: 'missives-and-missiles-the-falklands',
		title: 'Missives and Missiles: The Falklands',
		wixTitle: 'Missives and Missiles: The Falklands'
	},
	{
		exportName: 'communistsAndContrasLatinAmerica',
		slug: 'communists-and-contras-latin-america',
		title: 'Communists and Contras: Latin America',
		wixTitle: 'Communists and Contras: Latin America'
	},
	{
		exportName: 'worldsOfIf',
		slug: 'worlds-of-if',
		title: 'Worlds of If',
		wixTitle: 'Worlds of If'
	}
];

function esc(s) {
	return s.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

function captionFromFilename(filename) {
	return filename
		.replace(/\.jpg$/i, '')
		.replace(/-/g, ' ')
		.replace(/\b\w/g, (c) => c.toUpperCase());
}

function fig(src, alt, caption) {
	const c = caption ? `,\n\t\t\t\tcaption: '${esc(caption)}'` : '';
	return `{\n\t\t\t\tsrc: img('${src}'),\n\t\t\t\talt: '${esc(alt)}'${c}\n\t\t\t}`;
}

function generateBlocksTs(blocks) {
	return blocks
		.map((b) => {
			if (b.type === 'paragraph') {
				return `{\n\t\t\ttype: 'paragraph',\n\t\t\ttext: '${esc(b.text)}'\n\t\t}`;
			}
			if (b.type === 'figure') {
				const cap = captionFromFilename(b.src);
				return `{\n\t\t\ttype: 'figure',\n\t\t\talign: 'right',\n\t\t\tfigure: ${fig(b.src, cap, cap)}\n\t\t}`;
			}
			if (b.type === 'figure-stack') {
				const figs = b.figures
					.map((f) => {
						const cap = captionFromFilename(f);
						return fig(f, cap, cap);
					})
					.join(',\n\t\t\t\t');
				return `{\n\t\t\ttype: 'figure-stack',\n\t\t\talign: 'right',\n\t\t\tfigures: [\n\t\t\t\t${figs}\n\t\t\t]\n\t\t}`;
			}
			throw new Error(`unknown block type: ${b.type}`);
		})
		.join(',\n\t\t');
}

function generate(ch) {
	const subtitleLine = ch.subtitle ? `\n\tsubtitle: '${esc(ch.subtitle)}',` : '';
	return `import type { StoryContent } from './types';

const img = (name: string) => \`/images/stories/${ch.slug}/\${name}\`;

export const ${ch.exportName}: StoryContent = {
\tslug: '${ch.slug}',
\ttitle: '${esc(ch.title)}',${subtitleLine}
\tblocks: [
\t\t${generateBlocksTs(ch.blocks)}
\t]
};
`;
}

function verifyImages(slug, blocks) {
	const used = new Set();
	for (const b of blocks) {
		if (b.type === 'figure') used.add(b.src);
		if (b.type === 'figure-stack') b.figures.forEach((f) => used.add(f));
	}
	const manifest = images[slug];
	const missing = manifest.filter((n) => !used.has(n));
	const extra = [...used].filter((n) => !manifest.includes(n));
	if (missing.length) throw new Error(`${slug}: unused manifest images: ${missing.join(', ')}`);
	if (extra.length) throw new Error(`${slug}: images not in manifest: ${extra.join(', ')}`);
}

function parseWixPage(slug, wixTitle, html) {
	const result = spawnSync(
		'python3',
		[join(__dirname, 'parse-wix-story.py'), slug, wixTitle, JSON.stringify(images[slug])],
		{ input: html, encoding: 'utf8', maxBuffer: 10 * 1024 * 1024 }
	);
	if (result.status !== 0) {
		throw new Error(`parse failed for ${slug}: ${result.stderr}`);
	}
	return JSON.parse(result.stdout.trim());
}

for (const ch of chapters) {
	console.log(`Fetching ${ch.slug}...`);
	const html = execSync(`curl -sL "${WIX_BASE}/${ch.slug}"`, {
		encoding: 'utf8',
		maxBuffer: 10 * 1024 * 1024
	});
	ch.blocks = parseWixPage(ch.slug, ch.wixTitle, html);
	verifyImages(ch.slug, ch.blocks);
	const path = join(outDir, `${ch.slug}.ts`);
	writeFileSync(path, generate(ch));
	console.log(`  Wrote ${path} (${ch.blocks.length} blocks)`);
}

console.log('Done.');

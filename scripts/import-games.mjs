#!/usr/bin/env node
/**
 * Import games from JSON into Supabase.
 *
 * Uses backend/games_data_migrated.json when present (post image migration),
 * otherwise backend/games_data.json.
 *
 * Usage:
 *   SUPABASE_URL=... SUPABASE_SERVICE_ROLE_KEY=... node scripts/import-games.mjs
 *   GAMES_DATA_PATH=backend/games_data.json node scripts/import-games.mjs
 */

import { createClient } from '@supabase/supabase-js';
import { existsSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { GAMES_DATA_MIGRATED_PATH, GAMES_DATA_PATH } from './lib/wix-images.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));

const supabaseUrl = process.env.SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !serviceRoleKey) {
	console.error('Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY environment variables.');
	process.exit(1);
}

const dataPath =
	process.env.GAMES_DATA_PATH ??
	(existsSync(GAMES_DATA_MIGRATED_PATH) ? GAMES_DATA_MIGRATED_PATH : GAMES_DATA_PATH);

const supabase = createClient(supabaseUrl, serviceRoleKey, {
	auth: { persistSession: false }
});

function slugify(title) {
	return title
		.toLowerCase()
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '')
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-+|-+$/g, '')
		.slice(0, 80);
}

function normalizeImageUrl(url) {
	if (!url || typeof url !== 'string') return null;
	// Already migrated to https URL
	if (url.startsWith('http://') || url.startsWith('https://')) return url;
	// Legacy Wix URL left unchanged (migration incomplete)
	if (url.startsWith('wix:image://')) return url;
	return url;
}

const rawGames = JSON.parse(readFileSync(dataPath, 'utf8'));
const seenSlugs = new Map();

const rows = rawGames.map((game) => {
	const baseSlug = slugify(game.Title || 'untitled');
	const count = seenSlugs.get(baseSlug) ?? 0;
	seenSlugs.set(baseSlug, count + 1);
	const slug = count === 0 ? baseSlug : `${baseSlug}-${count + 1}`;

	const photos = [game.photo1, game.photo2, game.photo3, game.photo4, game.photo5, game.photo6]
		.map(normalizeImageUrl)
		.filter(Boolean);

	return {
		wix_id: game.ID || null,
		title: game.Title,
		slug,
		year: typeof game.year === 'number' ? game.year : null,
		country: game.country || null,
		publisher: game.publisher || null,
		description: game.description || null,
		mechanism: game.mechanism || null,
		rules: game.rules || null,
		theme: game.theme || null,
		cover_photo_url: normalizeImageUrl(game.coverPhoto),
		photo_urls: photos,
		legacy_numeric_id: typeof game.id === 'number' ? game.id : null,
		owner_id: game.Owner || null,
		wix_created_at: game['Created Date'] || null,
		wix_updated_at: game['Updated Date'] || null
	};
});

const BATCH_SIZE = 100;

async function importGames() {
	console.log(`Importing ${rows.length} games from ${dataPath}...`);

	for (let i = 0; i < rows.length; i += BATCH_SIZE) {
		const batch = rows.slice(i, i + BATCH_SIZE);
		const { error } = await supabase.from('games').upsert(batch, { onConflict: 'wix_id' });

		if (error) {
			console.error(`Batch ${i / BATCH_SIZE + 1} failed:`, error.message);
			process.exit(1);
		}

		console.log(`Imported ${Math.min(i + BATCH_SIZE, rows.length)} / ${rows.length}`);
	}

	console.log('Done.');
}

importGames();

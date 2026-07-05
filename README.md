# Games of War

A fast SvelteKit website for showcasing a historical war-games collection. Replaces the slow Wix site with Supabase (database + image storage) and Cloudflare Pages hosting.

## Stack

| Layer | Technology |
|-------|------------|
| Frontend | SvelteKit (Svelte 5) |
| Database, Auth & Images | Supabase (PostgreSQL + Storage) |
| Hosting | Cloudflare Pages |

## Project structure

```
gamesofwar/
├── backend/
│   └── games_data.json      # Exported Wix game data (untouched backup)
├── frontend/                # SvelteKit app
├── scripts/                 # Data & image migration scripts
└── frontend/supabase/migrations/
```

## Image migration (Wix → Supabase Storage)

Migrate images **before** importing games into Supabase.

Supabase free tier includes **1 GB storage** — enough for this collection if you avoid storing oversized originals everywhere (the migration script uploads Wix originals as-is; monitor usage in the Supabase dashboard).

### 1. Install script dependencies

```bash
npm install
cp scripts/.env.example scripts/.env
# Edit scripts/.env with Supabase URL + service role key
```

### 2. Create the storage bucket

Run Supabase migrations (includes the public `games` storage bucket):

```bash
cd frontend/supabase
supabase db push
```

Or create a public bucket named `games` in Supabase Dashboard → Storage.

### 3. Extract image manifest (~1,464 unique images)

```bash
npm run images:extract
```

Creates `backend/image-manifest.json` with Wix download URLs and Supabase public URL targets.

### 4. Download & upload to Supabase Storage

```bash
# Preview
npm run images:migrate:dry-run

# Download only (no Supabase credentials needed)
npm run images:migrate:download

# Full migration (download + upload, resumable)
npm run images:migrate

# Process in batches while testing
node --env-file=scripts/.env scripts/migrate-images-to-supabase.mjs --limit=20
```

Progress is saved back to `backend/image-manifest.json`. Re-run to resume.

Public URL format:
`https://YOUR_PROJECT.supabase.co/storage/v1/object/public/games/originals/{media-id}`

### 5. Patch master data with Supabase URLs

```bash
npm run images:patch
```

Writes `backend/games_data_migrated.json` (original Wix export is untouched).

### 6. Import games into Supabase

```bash
npm run import:games
```

Auto-uses `games_data_migrated.json` when present.

---

## Quick start

### 1. Supabase setup

1. Create a project at [supabase.com](https://supabase.com).
2. Install the [Supabase CLI](https://supabase.com/docs/guides/cli) (optional, for local dev):
   ```bash
   brew install supabase/tap/supabase
   ```
3. Link your project and run migrations:
   ```bash
   cd frontend/supabase
   supabase link --project-ref YOUR_PROJECT_REF
   supabase db push
   ```
   Or paste the SQL from `frontend/supabase/migrations/` into the Supabase SQL editor.

4. Copy your project URL and anon key into the frontend env:
   ```bash
   cp frontend/.env.example frontend/.env
   # Edit frontend/.env with your Supabase credentials
   ```

5. Create an admin user in Supabase Auth, then grant admin access:
   ```sql
   INSERT INTO admin_profiles (user_id, is_admin)
   VALUES ('YOUR_AUTH_USER_UUID', true);
   ```

### 2. Run the frontend

```bash
cd frontend
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173). Without Supabase configured, the homepage uses built-in fallback content matching the current Wix site.

### 3. Import game data

Run the [image migration](#image-migration-wix--supabase-storage) first, then:

```bash
npm run import:games
```

### 4. Deploy to Cloudflare Pages

1. Connect your repo to Cloudflare Pages.
2. Set build command: `npm run build` (in `frontend/`)
3. Set output directory: `.svelte-kit/cloudflare`
4. Add environment variables:
   - `PUBLIC_SUPABASE_URL`
   - `PUBLIC_SUPABASE_ANON_KEY`

## Homepage (dynamic sections)

These sections are loaded from Supabase and will be editable via the admin panel (next phase):

| Table | Purpose |
|-------|---------|
| `featured_collections` | Top links like "Don Cermak Collection" and "Latest Additions" |
| `announcements` | "Did you know?" facts with optional game links |
| `game_submissions` | Visitor-submitted games pending admin review |

Seed data matching the current Wix homepage is in `frontend/supabase/migrations/20260701000002_seed_homepage.sql`.

## Game submissions

Visitors (no login required) can submit games at `/games/add`. Submissions land in `game_submissions` with `status = 'pending'`.

**RLS summary:**
- `game_submissions`: public **insert only** (pending rows); no public read/update/delete
- `games`: public read; admin write
- Admins approve via `approve_game_submission(id)` RPC — copies the row into `games` and marks it approved
- Admins reject via `reject_game_submission(id, note)` RPC

## Theme

Colors match the original Wix site:

- Background: `#E8F0E8`
- Primary green: `#3E6B4D`
- Accent green: `#558B6E`
- Text: `#2F5239`

## Next steps

- [ ] Admin panel for featured collections, announcements & submission review
- [ ] Games browse/search pages
- [x] Migrate images from Wix to Supabase Storage (scripts in `scripts/`)
- [ ] Game detail pages

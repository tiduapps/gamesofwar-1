-- Supabase Storage bucket for game images (public read)

INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'games',
  'games',
  true,
  10485760,
  ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/gif']
)
ON CONFLICT (id) DO UPDATE SET
  public = EXCLUDED.public,
  file_size_limit = EXCLUDED.file_size_limit,
  allowed_mime_types = EXCLUDED.allowed_mime_types;

-- Public read for game images
CREATE POLICY "games_storage_public_read"
  ON storage.objects FOR SELECT
  TO public
  USING (bucket_id = 'games');

-- Admins can manage game images
CREATE POLICY "games_storage_admin_insert"
  ON storage.objects FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id = 'games' AND public.is_admin());

CREATE POLICY "games_storage_admin_update"
  ON storage.objects FOR UPDATE
  TO authenticated
  USING (bucket_id = 'games' AND public.is_admin())
  WITH CHECK (bucket_id = 'games' AND public.is_admin());

CREATE POLICY "games_storage_admin_delete"
  ON storage.objects FOR DELETE
  TO authenticated
  USING (bucket_id = 'games' AND public.is_admin());

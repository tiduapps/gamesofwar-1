-- Allow visitors to upload submission photos (server action uses anon client)

CREATE POLICY "games_storage_submission_insert"
  ON storage.objects FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    bucket_id = 'games'
    AND (storage.foldername(name))[1] = 'submissions'
  );

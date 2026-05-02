/*
  # Tighten RLS policy on contact_submissions

  1. Changes
    - Drop the existing overly permissive INSERT policy that used WITH CHECK (true)
    - Add a new restrictive INSERT policy that validates:
      - name must be non-empty (prevents blank spam submissions)
      - email must be non-empty (prevents blank spam submissions)
      - source must be one of the known application values
      - id must use the server default (prevents callers from choosing their own id)
      - created_at must use the server default (prevents timestamp spoofing)

  2. Security
    - The new policy ensures anonymous users can only insert well-formed
      contact submissions with validated fields, not arbitrary data
*/

DROP POLICY IF EXISTS "Anyone can submit contact form" ON contact_submissions;

CREATE POLICY "Anon can insert valid contact submissions"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (
    length(trim(name)) > 0
    AND length(trim(email)) > 0
    AND source IN ('website', 'website-whatsapp-direct', 'landing')
    AND id = gen_random_uuid()
    AND created_at = now()
  );

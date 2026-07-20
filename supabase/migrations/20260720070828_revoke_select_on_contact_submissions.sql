/*
# Revoke SELECT on contact_submissions from public roles

1. Security Changes
   - Revoke SELECT privilege from `anon` role on `contact_submissions` table.
   - Revoke SELECT privilege from `authenticated` role on `contact_submissions` table.
   - This hides the table from the GraphQL schema for both anonymous and signed-in users.
   - The table remains INSERT-only for the `anon` role (contact form still works).

2. Important Notes
   - The existing INSERT policy ("Anyone can submit contact form") is unchanged.
   - Submissions can still be read via the Supabase Dashboard or service_role key.
   - This migration is idempotent — safe to re-run.
*/

REVOKE SELECT ON public.contact_submissions FROM anon;
REVOKE SELECT ON public.contact_submissions FROM authenticated;

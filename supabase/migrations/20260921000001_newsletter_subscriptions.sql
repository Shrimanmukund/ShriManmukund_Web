-- =============================================================================
-- NEWSLETTER SUBSCRIPTIONS TABLE & RLS POLICIES
-- =============================================================================

CREATE TABLE IF NOT EXISTS newsletter_subscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  source_page TEXT DEFAULT '/knowledge/',
  status TEXT NOT NULL DEFAULT 'active', -- 'active', 'unsubscribed'
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE newsletter_subscriptions ENABLE ROW LEVEL SECURITY;

-- Public can subscribe
DROP POLICY IF EXISTS "Public can insert newsletter subscriptions" ON newsletter_subscriptions;
CREATE POLICY "Public can insert newsletter subscriptions" ON newsletter_subscriptions
  FOR INSERT WITH CHECK (true);

-- Admins have full access
DROP POLICY IF EXISTS "Admins have full access to newsletter subscriptions" ON newsletter_subscriptions;
CREATE POLICY "Admins have full access to newsletter subscriptions" ON newsletter_subscriptions
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM admin_users
      WHERE email = auth.jwt() ->> 'email'
    )
  ) WITH CHECK (
    EXISTS (
      SELECT 1 FROM admin_users
      WHERE email = auth.jwt() ->> 'email'
    )
  );

-- Index for email lookups
CREATE INDEX IF NOT EXISTS idx_newsletter_email ON newsletter_subscriptions(email);
CREATE INDEX IF NOT EXISTS idx_newsletter_status ON newsletter_subscriptions(status);

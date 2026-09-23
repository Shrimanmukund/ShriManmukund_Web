-- Migration: Add CMS fields to knowledge_pieces and configure blog-images storage
-- Purpose: Complete Content Management System for Knowledge Hub Articles & Blogs

-- 1. Safely add any new CMS columns to existing knowledge_pieces table
ALTER TABLE knowledge_pieces ADD COLUMN IF NOT EXISTS category_tag TEXT NOT NULL DEFAULT 'General';
ALTER TABLE knowledge_pieces ADD COLUMN IF NOT EXISTS author TEXT NOT NULL DEFAULT 'Dr. Vipin Tongale';
ALTER TABLE knowledge_pieces ADD COLUMN IF NOT EXISTS medical_reviewer TEXT DEFAULT 'Dr. Swati Tongale';
ALTER TABLE knowledge_pieces ADD COLUMN IF NOT EXISTS cover_image_url TEXT;
ALTER TABLE knowledge_pieces ADD COLUMN IF NOT EXISTS body_content TEXT NOT NULL DEFAULT '';
ALTER TABLE knowledge_pieces ADD COLUMN IF NOT EXISTS status TEXT NOT NULL DEFAULT 'published';
ALTER TABLE knowledge_pieces ADD COLUMN IF NOT EXISTS read_time TEXT NOT NULL DEFAULT '5 min';
ALTER TABLE knowledge_pieces ADD COLUMN IF NOT EXISTS date_published DATE NOT NULL DEFAULT CURRENT_DATE;
ALTER TABLE knowledge_pieces ADD COLUMN IF NOT EXISTS date_updated DATE NOT NULL DEFAULT CURRENT_DATE;
ALTER TABLE knowledge_pieces ADD COLUMN IF NOT EXISTS views INT NOT NULL DEFAULT 0;

-- 2. Create Indexes for fast querying
CREATE INDEX IF NOT EXISTS idx_knowledge_pieces_status ON knowledge_pieces(status);
CREATE INDEX IF NOT EXISTS idx_knowledge_pieces_cluster ON knowledge_pieces(cluster);
CREATE INDEX IF NOT EXISTS idx_knowledge_pieces_slug ON knowledge_pieces(slug);
CREATE INDEX IF NOT EXISTS idx_knowledge_pieces_date ON knowledge_pieces(date_published DESC);

-- 3. Row Level Security (RLS)
ALTER TABLE knowledge_pieces ENABLE ROW LEVEL SECURITY;

-- Allow public read access to published articles
DROP POLICY IF EXISTS "Public can view published knowledge pieces" ON knowledge_pieces;
CREATE POLICY "Public can view published knowledge pieces" ON knowledge_pieces
  FOR SELECT USING (status = 'published');

-- Allow admins full access
DROP POLICY IF EXISTS "Admins have full access to knowledge pieces" ON knowledge_pieces;
CREATE POLICY "Admins have full access to knowledge pieces" ON knowledge_pieces
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM admin_users
      WHERE email = auth.jwt() ->> 'email'
    ) OR auth.role() = 'authenticated' OR auth.role() = 'service_role'
  ) WITH CHECK (
    EXISTS (
      SELECT 1 FROM admin_users
      WHERE email = auth.jwt() ->> 'email'
    ) OR auth.role() = 'authenticated' OR auth.role() = 'service_role'
  );

-- 4. Storage Bucket for Blog Images (Safe execution)
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM information_schema.schemata WHERE schema_name = 'storage') THEN
    INSERT INTO storage.buckets (id, name, public)
    VALUES ('blog-images', 'blog-images', true)
    ON CONFLICT (id) DO UPDATE SET public = true;
  END IF;
EXCEPTION
  WHEN OTHERS THEN NULL;
END $$;

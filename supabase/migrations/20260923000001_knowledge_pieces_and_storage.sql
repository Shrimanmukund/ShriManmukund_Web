-- Migration: Add knowledge_pieces table and blog-images storage bucket
-- Purpose: Complete Content Management System for Knowledge Hub Articles & Blogs

-- 1. Create knowledge_pieces table (if not exists with new structure)
CREATE TABLE IF NOT EXISTS knowledge_pieces (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  cluster TEXT NOT NULL DEFAULT 'article', -- playbook | article | insights | blog | whitepaper | research
  category_tag TEXT NOT NULL DEFAULT 'General',
  author TEXT NOT NULL DEFAULT 'Dr. Vipin Tongale',
  medical_reviewer TEXT DEFAULT 'Dr. Swati Tongale',
  cover_image_url TEXT,
  excerpt TEXT NOT NULL DEFAULT '',
  body_content TEXT NOT NULL DEFAULT '',
  meta_title TEXT,
  meta_description TEXT,
  status TEXT NOT NULL DEFAULT 'published' CHECK (status IN ('draft', 'published')),
  read_time TEXT NOT NULL DEFAULT '5 min',
  date_published DATE NOT NULL DEFAULT CURRENT_DATE,
  date_updated DATE NOT NULL DEFAULT CURRENT_DATE,
  views INT NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Indexes for lightning fast queries
CREATE INDEX IF NOT EXISTS idx_knowledge_pieces_status ON knowledge_pieces(status);
CREATE INDEX IF NOT EXISTS idx_knowledge_pieces_cluster ON knowledge_pieces(cluster);
CREATE INDEX IF NOT EXISTS idx_knowledge_pieces_slug ON knowledge_pieces(slug);
CREATE INDEX IF NOT EXISTS idx_knowledge_pieces_date ON knowledge_pieces(date_published DESC);

-- 2. Row Level Security (RLS)
ALTER TABLE knowledge_pieces ENABLE ROW LEVEL SECURITY;

-- Allow public read access to published articles
DROP POLICY IF EXISTS "Public can view published knowledge pieces" ON knowledge_pieces;
CREATE POLICY "Public can view published knowledge pieces" ON knowledge_pieces
  FOR SELECT USING (status = 'published');

-- Allow admin full access (using service role or is_admin function)
DROP POLICY IF EXISTS "Admins have full access to knowledge pieces" ON knowledge_pieces;
CREATE POLICY "Admins have full access to knowledge pieces" ON knowledge_pieces
  FOR ALL USING (true) WITH CHECK (true);

-- 3. Storage Bucket for Blog Images
INSERT INTO storage.buckets (id, name, public)
VALUES ('blog-images', 'blog-images', true)
ON CONFLICT (id) DO UPDATE SET public = true;

-- Public access policy for blog images storage bucket
DROP POLICY IF EXISTS "Public can view blog images" ON storage.objects;
CREATE POLICY "Public can view blog images" ON storage.objects
  FOR SELECT USING (bucket_id = 'blog-images');

DROP POLICY IF EXISTS "Admins can upload blog images" ON storage.objects;
CREATE POLICY "Admins can upload blog images" ON storage.objects
  FOR ALL USING (bucket_id = 'blog-images') WITH CHECK (bucket_id = 'blog-images');

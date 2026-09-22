-- =============================================================================
-- SHRI MANMUKUND HOSPITAL, AMRAVATI - SUPABASE POSTGRESQL SCHEMA MIGRATION
-- Authoritative Schema supporting 93 Pages, Doctors, Services, Conditions,
-- Procedures, Knowledge Pieces, Testimonials, Enquiries, and Admin Operations
-- =============================================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. CUSTOM ENUM TYPES
DO $$ BEGIN
  CREATE TYPE knowledge_cluster AS ENUM (
    'playbook', 'whitepaper', 'research', 'blog', 'article', 'insights'
  );
EXCEPTION
  WHEN duplicate_object THEN NULL;
END $$;

DO $$ BEGIN
  CREATE TYPE enquiry_status AS ENUM (
    'new', 'contacted', 'scheduled', 'archived'
  );
EXCEPTION
  WHEN duplicate_object THEN NULL;
END $$;

DO $$ BEGIN
  CREATE TYPE review_source AS ENUM (
    'google', 'in-person', 'email'
  );
EXCEPTION
  WHEN duplicate_object THEN NULL;
END $$;

-- 2. DOCTORS TABLE
CREATE TABLE IF NOT EXISTS doctors (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  full_name TEXT NOT NULL,
  honorific TEXT NOT NULL DEFAULT 'Dr.',
  credentials TEXT[] NOT NULL DEFAULT '{}',
  registration_numbers JSONB NOT NULL DEFAULT '[]'::jsonb,
  designations TEXT[] NOT NULL DEFAULT '{}',
  specialties TEXT[] NOT NULL DEFAULT '{}',
  years_of_experience INT NOT NULL DEFAULT 0,
  procedures_performed INT NOT NULL DEFAULT 0,
  languages_spoken TEXT[] NOT NULL DEFAULT '{}',
  photograph_url TEXT,
  portrait_url TEXT,
  short_bio TEXT NOT NULL,
  full_bio_markdown TEXT NOT NULL,
  journey JSONB NOT NULL DEFAULT '[]'::jsonb,
  awards JSONB NOT NULL DEFAULT '[]'::jsonb,
  memberships JSONB NOT NULL DEFAULT '[]'::jsonb,
  consultation_timings JSONB NOT NULL DEFAULT '{}'::jsonb,
  meta_title TEXT,
  meta_description TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 3. SERVICE CATEGORIES TABLE
CREATE TABLE IF NOT EXISTS service_categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  name_sanskrit TEXT,
  short_description TEXT NOT NULL,
  full_description_markdown TEXT,
  icon_name TEXT NOT NULL DEFAULT 'activity',
  lead_doctor_id UUID REFERENCES doctors(id) ON DELETE SET NULL,
  order_index INT NOT NULL DEFAULT 0,
  meta_title TEXT,
  meta_description TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 4. CONDITIONS TABLE
CREATE TABLE IF NOT EXISTS conditions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  category_id UUID NOT NULL REFERENCES service_categories(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  name_sanskrit TEXT,
  name_hindi TEXT,
  name_marathi TEXT,
  answer_first_summary TEXT NOT NULL,
  definition_markdown TEXT NOT NULL,
  symptoms_markdown TEXT NOT NULL,
  causes_risk_factors_markdown TEXT NOT NULL,
  when_to_see_specialist_markdown TEXT NOT NULL,
  diagnosis_markdown TEXT NOT NULL,
  treatment_options JSONB NOT NULL DEFAULT '[]'::jsonb,
  recovery_markdown TEXT NOT NULL,
  prevention_markdown TEXT NOT NULL,
  faqs JSONB NOT NULL DEFAULT '[]'::jsonb,
  related_condition_slugs TEXT[] NOT NULL DEFAULT '{}',
  lead_doctor_id UUID REFERENCES doctors(id) ON DELETE SET NULL,
  medically_reviewed_by_id UUID REFERENCES doctors(id) ON DELETE SET NULL,
  emergency_callout_required BOOLEAN NOT NULL DEFAULT false,
  emergency_callout_text TEXT,
  order_index INT NOT NULL DEFAULT 0,
  is_published BOOLEAN NOT NULL DEFAULT true,
  meta_title TEXT,
  meta_description TEXT,
  canonical_url TEXT,
  last_reviewed_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 5. PROCEDURES TABLE
CREATE TABLE IF NOT EXISTS procedures (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  category_id UUID NOT NULL REFERENCES service_categories(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  answer_first_summary TEXT NOT NULL,
  overview_markdown TEXT NOT NULL,
  indications_markdown TEXT NOT NULL,
  procedure_steps JSONB NOT NULL DEFAULT '[]'::jsonb,
  duration TEXT,
  anaesthesia TEXT,
  recovery_markdown TEXT NOT NULL,
  risks_markdown TEXT,
  alternatives_markdown TEXT,
  cost_framework_guidance TEXT,
  faqs JSONB NOT NULL DEFAULT '[]'::jsonb,
  lead_doctor_id UUID REFERENCES doctors(id) ON DELETE SET NULL,
  medically_reviewed_by_id UUID REFERENCES doctors(id) ON DELETE SET NULL,
  order_index INT NOT NULL DEFAULT 0,
  is_published BOOLEAN NOT NULL DEFAULT true,
  meta_title TEXT,
  meta_description TEXT,
  canonical_url TEXT,
  last_reviewed_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 6. KNOWLEDGE PIECES TABLE
CREATE TABLE IF NOT EXISTS knowledge_pieces (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  cluster knowledge_cluster NOT NULL,
  title TEXT NOT NULL,
  subtitle TEXT,
  author_id UUID REFERENCES doctors(id) ON DELETE SET NULL,
  medically_reviewed_by_id UUID REFERENCES doctors(id) ON DELETE SET NULL,
  published_date DATE NOT NULL DEFAULT CURRENT_DATE,
  last_updated_date DATE NOT NULL DEFAULT CURRENT_DATE,
  estimated_read_time_mins INT NOT NULL DEFAULT 5,
  featured_image_url TEXT,
  excerpt TEXT NOT NULL,
  body_markdown TEXT NOT NULL,
  categories TEXT[] NOT NULL DEFAULT '{}',
  tags TEXT[] NOT NULL DEFAULT '{}',
  citations JSONB NOT NULL DEFAULT '[]'::jsonb,
  downloadable_pdf_url TEXT,
  is_published BOOLEAN NOT NULL DEFAULT true,
  meta_title TEXT,
  meta_description TEXT,
  canonical_url TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 7. PATIENT RESOURCES TABLE
CREATE TABLE IF NOT EXISTS patient_resources (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  summary TEXT NOT NULL,
  body_markdown TEXT NOT NULL,
  faqs JSONB NOT NULL DEFAULT '[]'::jsonb,
  order_index INT NOT NULL DEFAULT 0,
  meta_title TEXT,
  meta_description TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 8. TESTIMONIALS TABLE (Medical Advertising Compliant)
CREATE TABLE IF NOT EXISTS testimonials (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_name TEXT NOT NULL,
  city TEXT,
  service_category_id UUID REFERENCES service_categories(id) ON DELETE SET NULL,
  rating INT NOT NULL CHECK (rating >= 1 AND rating <= 5),
  review_text TEXT NOT NULL,
  review_date DATE NOT NULL DEFAULT CURRENT_DATE,
  source review_source NOT NULL DEFAULT 'google',
  source_url TEXT,
  display_permission_granted BOOLEAN NOT NULL DEFAULT false,
  is_approved BOOLEAN NOT NULL DEFAULT false,
  is_featured BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 9. ENQUIRIES & APPOINTMENT SUBMISSIONS TABLE
CREATE TABLE IF NOT EXISTS enquiries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  age TEXT,
  preferred_date DATE,
  preferred_time_slot TEXT,
  doctor_slug TEXT,
  service_category_slug TEXT,
  condition_slug TEXT,
  reason_for_visit TEXT,
  message TEXT,
  status enquiry_status NOT NULL DEFAULT 'new',
  admin_notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 10. ADMIN USERS ALLOWLIST
CREATE TABLE IF NOT EXISTS admin_users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  role TEXT NOT NULL DEFAULT 'admin',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- INDEXES FOR HIGH-PERFORMANCE QUERYING & SEARCH
CREATE INDEX IF NOT EXISTS idx_conditions_category ON conditions(category_id);
CREATE INDEX IF NOT EXISTS idx_conditions_slug ON conditions(slug);
CREATE INDEX IF NOT EXISTS idx_procedures_category ON procedures(category_id);
CREATE INDEX IF NOT EXISTS idx_procedures_slug ON procedures(slug);
CREATE INDEX IF NOT EXISTS idx_knowledge_cluster ON knowledge_pieces(cluster);
CREATE INDEX IF NOT EXISTS idx_knowledge_slug ON knowledge_pieces(slug);
CREATE INDEX IF NOT EXISTS idx_testimonials_approved ON testimonials(is_approved, display_permission_granted);
CREATE INDEX IF NOT EXISTS idx_enquiries_status ON enquiries(status);
CREATE INDEX IF NOT EXISTS idx_enquiries_created_at ON enquiries(created_at DESC);

-- =============================================================================
-- SHRI MANMUKUND HOSPITAL, AMRAVATI
-- COMPLETE SUPABASE MASTER SETUP SCRIPT (SCHEMA + RLS + SEED DATA)
-- Run this entire script in Supabase Dashboard -> SQL Editor -> Click 'Run'
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

-- 6. KNOWLEDGE PIECES (BLOGS, ARTICLES, PLAYBOOKS, RESEARCH, INSIGHTS) TABLE
CREATE TABLE IF NOT EXISTS knowledge_pieces (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  cluster knowledge_cluster NOT NULL,
  title TEXT NOT NULL,
  subtitle TEXT,
  author_id UUID REFERENCES doctors(id) ON DELETE SET NULL,
  author_slug TEXT NOT NULL DEFAULT 'dr-vipin',
  medically_reviewed_by_id UUID REFERENCES doctors(id) ON DELETE SET NULL,
  medically_reviewed_by_slug TEXT NOT NULL DEFAULT 'dr-swati',
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

-- 8. TESTIMONIALS TABLE
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

-- 9. ENQUIRIES / CONTACT FORM SUBMISSIONS TABLE
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

-- 10. NEWSLETTER SUBSCRIPTIONS TABLE
CREATE TABLE IF NOT EXISTS newsletter_subscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  source_page TEXT DEFAULT '/knowledge/',
  status TEXT NOT NULL DEFAULT 'active',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 11. ADMIN USERS TABLE
CREATE TABLE IF NOT EXISTS admin_users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  role TEXT NOT NULL DEFAULT 'admin',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- INDEXES
CREATE INDEX IF NOT EXISTS idx_conditions_category ON conditions(category_id);
CREATE INDEX IF NOT EXISTS idx_conditions_slug ON conditions(slug);
CREATE INDEX IF NOT EXISTS idx_procedures_category ON procedures(category_id);
CREATE INDEX IF NOT EXISTS idx_procedures_slug ON procedures(slug);
CREATE INDEX IF NOT EXISTS idx_knowledge_cluster ON knowledge_pieces(cluster);
CREATE INDEX IF NOT EXISTS idx_knowledge_slug ON knowledge_pieces(slug);
CREATE INDEX IF NOT EXISTS idx_testimonials_approved ON testimonials(is_approved, display_permission_granted);
CREATE INDEX IF NOT EXISTS idx_enquiries_status ON enquiries(status);
CREATE INDEX IF NOT EXISTS idx_enquiries_created_at ON enquiries(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_newsletter_email ON newsletter_subscriptions(email);

-- =============================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- =============================================================================

ALTER TABLE doctors ENABLE ROW LEVEL SECURITY;
ALTER TABLE service_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE conditions ENABLE ROW LEVEL SECURITY;
ALTER TABLE procedures ENABLE ROW LEVEL SECURITY;
ALTER TABLE knowledge_pieces ENABLE ROW LEVEL SECURITY;
ALTER TABLE patient_resources ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE enquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION is_admin()
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM admin_users
    WHERE email = auth.jwt() ->> 'email'
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Public Read Policies
CREATE POLICY "Public can view doctors" ON doctors FOR SELECT USING (true);
CREATE POLICY "Public can view service categories" ON service_categories FOR SELECT USING (true);
CREATE POLICY "Public can view published conditions" ON conditions FOR SELECT USING (is_published = true);
CREATE POLICY "Public can view published procedures" ON procedures FOR SELECT USING (is_published = true);
CREATE POLICY "Public can view published knowledge pieces" ON knowledge_pieces FOR SELECT USING (is_published = true);
CREATE POLICY "Public can view patient resources" ON patient_resources FOR SELECT USING (true);
CREATE POLICY "Public can view approved testimonials" ON testimonials FOR SELECT USING (is_approved = true AND display_permission_granted = true);

-- Public Write Policies (Contact Form & Newsletter)
CREATE POLICY "Public can submit enquiries" ON enquiries FOR INSERT WITH CHECK (true);
CREATE POLICY "Public can insert newsletter subscriptions" ON newsletter_subscriptions FOR INSERT WITH CHECK (true);

-- Admin Full Access Policies
CREATE POLICY "Admins have full access to doctors" ON doctors FOR ALL USING (is_admin()) WITH CHECK (is_admin());
CREATE POLICY "Admins have full access to service categories" ON service_categories FOR ALL USING (is_admin()) WITH CHECK (is_admin());
CREATE POLICY "Admins have full access to conditions" ON conditions FOR ALL USING (is_admin()) WITH CHECK (is_admin());
CREATE POLICY "Admins have full access to procedures" ON procedures FOR ALL USING (is_admin()) WITH CHECK (is_admin());
CREATE POLICY "Admins have full access to knowledge pieces" ON knowledge_pieces FOR ALL USING (is_admin()) WITH CHECK (is_admin());
CREATE POLICY "Admins have full access to patient resources" ON patient_resources FOR ALL USING (is_admin()) WITH CHECK (is_admin());
CREATE POLICY "Admins have full access to testimonials" ON testimonials FOR ALL USING (is_admin()) WITH CHECK (is_admin());
CREATE POLICY "Admins have full access to enquiries" ON enquiries FOR ALL USING (is_admin()) WITH CHECK (is_admin());
CREATE POLICY "Admins have full access to newsletter subscriptions" ON newsletter_subscriptions FOR ALL USING (is_admin()) WITH CHECK (is_admin());
CREATE POLICY "Admins have full access to admin_users" ON admin_users FOR ALL USING (is_admin()) WITH CHECK (is_admin());

-- =============================================================================
-- SEED DATA (DOCTORS, SERVICES, KNOWLEDGE ARTICLES, TESTIMONIALS)
-- =============================================================================

BEGIN;

-- 1. Seed Doctors
INSERT INTO doctors (slug, full_name, honorific, credentials, registration_numbers, designations, specialties, years_of_experience, procedures_performed, languages_spoken, short_bio, full_bio_markdown, consultation_timings, meta_title, meta_description)
VALUES 
(
  'dr-vipin',
  'Vipin Tongale',
  'Dr.',
  ARRAY['MS Ayurveda Shalya Tantra', 'PhD Shalya Tantra'],
  '[{"council": "Maharashtra Council of Indian Medicine", "number": "I-57434-A"}]'::jsonb,
  ARRAY['General Surgeon', 'Proctologist', 'Ayurvedic Shalya Tantra Specialist'],
  ARRAY['Anorectal Surgery', 'Complex and Recurrent Fistula', 'Ksharsutra', 'Laser Proctology', 'Uttarbasti (Stricture Urethra)', 'General Surgery', 'Ayurvedic Wound Management'],
  15,
  16000,
  ARRAY['English', 'Marathi', 'Hindi'],
  'Senior Ayurvedic Surgeon and Proctologist with over 15 years of surgical experience, 12 years of AYUSH government service, and 16,000+ procedures.',
  'Dr. Vipin Tongale is an Ayurvedic Surgeon, Proctologist, and Shalya Tantra specialist with over 15 years of continuous surgical practice in Vidarbha. He holds an MS in Ayurveda (Shalya Tantra - Surgery) and a PhD in Shalya Tantra. Having served for 12 years at District Hospital Amravati and as honorary surgeon at Shri Gurudev Ayurved Mahavidyalaya, he combines classical Ksharsutra with modern minimally invasive laser proctology and general surgery.',
  '{"morning": "Morning surgical hours for planned procedures", "evening": "1:00 PM to 4:30 PM and 6:00 PM to 8:30 PM", "sunday": "Prior Appointment Only", "emergency": "24 Hours"}'::jsonb,
  'Dr. Vipin Tongale | Ayurvedic Surgeon and Proctologist | Amravati',
  'Dr. Vipin Tongale, MS (Ayurveda Shalya Tantra), PhD. 15+ years experience, 16,000+ surgeries. Specialist in piles, fistula, Ksharsutra, laser proctology in Amravati.'
),
(
  'dr-swati',
  'Swati Tongale (Wankhade)',
  'Dr.',
  ARRAY['MS Ayurveda Shalya Tantra'],
  '[{"council": "Maharashtra Council of Indian Medicine", "number": "I-62189-A"}]'::jsonb,
  ARRAY['Ayurvedic Surgeon', 'Female Proctologist', 'Uttarbasti and Gynaecological Care Specialist'],
  ARRAY['Female Proctology', 'Uttarbasti for Infertility', 'Panchakarma for Women', 'Ayurvedic Gynaecology', 'General Surgery'],
  14,
  8000,
  ARRAY['English', 'Marathi', 'Hindi'],
  'Specialist Female Ayurvedic Surgeon and Proctologist providing dignified, private care for women with anorectal conditions and Ayurvedic fertility solutions.',
  'Dr. Swati Tongale (Wankhade) is an Ayurvedic Surgeon specializing in Female Proctology, Uttarbasti for Infertility, and Women''s Health. An MS in Ayurveda (Shalya Tantra), Dr. Swati provides a comfortable, private consultation environment for women suffering from piles, fissure, fistula, and gynaecological disorders in Vidarbha.',
  '{"morning": "Morning surgical hours", "evening": "2:30 PM to 4:30 PM and 6:00 PM to 8:00 PM", "sunday": "Prior Appointment Only", "emergency": "24 Hours"}'::jsonb,
  'Dr. Swati Tongale | Female Proctologist & Ayurvedic Surgeon | Amravati',
  'Dr. Swati Tongale, MS (Ayurveda Shalya Tantra). Dedicated female proctologist and Ayurvedic surgeon specializing in women''s anorectal care and Uttarbasti for infertility.'
)
ON CONFLICT (slug) DO UPDATE SET
  full_name = EXCLUDED.full_name,
  credentials = EXCLUDED.credentials,
  designations = EXCLUDED.designations,
  specialties = EXCLUDED.specialties,
  short_bio = EXCLUDED.short_bio,
  full_bio_markdown = EXCLUDED.full_bio_markdown;

-- 2. Seed Service Categories
INSERT INTO service_categories (slug, name, name_sanskrit, short_description, icon_name, order_index, meta_title, meta_description)
VALUES
  ('anorectal-care', 'Advanced Anorectal Care', 'Guda Roga Chikitsa', 'Specialist treatment for piles, fissures, fistulas, pilonidal sinus, and complex recurrent anorectal conditions.', 'shield-plus', 1, 'Advanced Anorectal Care Unit | Shri Manmukund Hospital, Amravati', 'Expert treatment for piles, fissure, fistula, and pilonidal sinus in Amravati. Ksharsutra, laser, and modern surgical options.'),
  ('ksharsutra', 'Ksharsutra and Ksharkarma', 'Ksharasutra Chikitsa', 'The gold standard classical Ayurvedic parasurgical treatment for simple and complex anal fistulas with near-zero recurrence.', 'activity', 2, 'Ksharsutra Treatment in Amravati | Shri Manmukund Hospital', 'Classical Ayurvedic Ksharsutra treatment for fistula-in-ano and pilonidal sinus. Minimal pain, sphincter preservation, and negligible recurrence rate.'),
  ('laser-proctology', 'Laser Proctology', 'Laser Shalya Chikitsa', 'Minimally invasive, day-care diode laser surgery for piles, fissures, fistulas, and pilonidal sinus.', 'zap', 3, 'Laser Piles and Fistula Surgery in Amravati | Shri Manmukund Hospital', 'Advanced diode laser proctology (LHP, FiLaC, SiLaC) in Amravati. Painless, stitchless day-care procedures with rapid return to daily routine.'),
  ('non-surgical-piles-treatment', 'Non-Surgical Piles Interventions', 'A-Shastra Arsha Chikitsa', 'Office-based OPD procedures including rubber band ligation and injection sclerotherapy for early to moderate piles.', 'check-circle', 4, 'Non-Surgical Piles Treatment in Amravati | Shri Manmukund Hospital', 'OPD non-surgical treatments for piles in Amravati. Rubber band ligation and injection sclerotherapy without hospitalisation or downtime.'),
  ('general-surgery', 'General Surgery', 'Samanya Shalya Karma', 'Comprehensive modern general surgical care for hernia, hydrocele, gallbladder, appendicitis, and swellings.', 'scissors', 5, 'General Surgery in Amravati | Shri Manmukund Hospital', 'Safe and modern general surgical procedures in Amravati including hernia repair, hydrocele surgery, appendicitis, and lump excisions.'),
  ('ayurveda', 'Ayurveda Unit', 'Ayurveda Chikitsa', 'Holistic classical Ayurvedic treatment for chronic disorders, hyperacidity, skin diseases, spine ailments, and healing wounds.', 'leaf', 6, 'Ayurveda Treatment Unit in Amravati | Shri Manmukund Hospital', 'Classical Ayurvedic diagnosis and treatment for metabolic, gastric, dermatological, and chronic health conditions by Ayurvedic surgeons.'),
  ('panchakarma', 'Panchakarma Unit', 'Panchakarma Shodhana', 'Authentic classical detox and rejuvenation therapies including Basti, Uttarbasti, Jalaukavacharana, and Virechana.', 'sparkles', 7, 'Panchakarma Unit in Amravati | Shri Manmukund Hospital', 'Authentic 5-fold Panchakarma therapies in Amravati including Uttarbasti, Leech Therapy (Jalauka), and medical enemas by certified experts.'),
  ('spine-care', 'Spine Care Unit', 'Merdanda Chikitsa', 'Non-surgical Ayurvedic spine rehabilitation for sciatica, cervical and lumbar spondylosis with Kati Basti.', 'align-center', 8, 'Ayurvedic Spine Care & Sciatica Treatment in Amravati | Shri Manmukund Hospital', 'Integrated Ayurvedic spine care in Amravati for cervical spondylosis, lumbar spondylosis, and sciatica using Kati Basti and Panchakarma.'),
  ('female-care', 'Female Specialty Care', 'Stri Roga & Shalya Chikitsa', 'Dedicated care for women led by Dr. Swati Tongale: female proctology, Uttarbasti for infertility, and hormonal balance.', 'heart', 9, 'Female Proctology & Women''s Health in Amravati | Dr. Swati Tongale', 'Dedicated female surgeon for anorectal diseases, Uttarbasti for fertility, and Ayurvedic gynaecological care in Amravati.'),
  ('specialty-care', 'Specialty Units', 'Vishesha Chikitsa', 'Specialized protocols for non-healing diabetic wounds, paediatric care, and Suvarna Prashan immunity drops.', 'star', 10, 'Specialty Care Units | Shri Manmukund Hospital, Amravati', 'Specialized treatments including diabetic wound salvage, paediatric Ayurvedic care, and monthly Suvarna Prashan in Amravati.')
ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  short_description = EXCLUDED.short_description;

-- 3. Seed Knowledge Pieces (Blogs, Playbooks, Articles, Insights)
INSERT INTO knowledge_pieces (slug, cluster, title, author_slug, medically_reviewed_by_slug, published_date, estimated_read_time_mins, excerpt, body_markdown, categories, tags, is_published, meta_title, meta_description)
VALUES
(
  'ksharsutra-day-1-to-complete-healing',
  'playbook',
  'Ksharsutra treatment, week by week',
  'dr-vipin',
  'dr-swati',
  '2026-07-15',
  12,
  'A practical, day-by-day guide for patients considering or currently undergoing Ksharsutra. What to expect at each stage, how to prepare, and when to call the hospital.',
  'Ksharsutra treatment for anal fistula typically takes 6 to 8 weeks from first application to complete healing. It involves weekly changes of a medicated thread (Kshar Sutra) that gradually cuts through and heals the fistula tract.',
  ARRAY['Playbook', 'Ksharsutra', 'Proctology'],
  ARRAY['Fistula', 'Ayurveda', 'Surgery', 'Amravati'],
  true,
  'Ksharsutra Treatment Week-by-Week Guide | What to Expect',
  'Complete week-by-week guide to Ksharsutra treatment for anal fistula. Every phase from first application to complete healing.'
),
(
  'complete-recovery-after-piles-surgery',
  'playbook',
  'Complete Recovery After Piles Surgery',
  'dr-vipin',
  'dr-swati',
  '2026-07-20',
  12,
  'Day-by-day and week-by-week recovery guide after piles surgery. Diet, activity, wound care, warning signs. For office-based, laser, and conventional surgery.',
  'Recovery after piles surgery varies significantly by procedure type. Office-based procedures (rubber band ligation, sclerotherapy) typically allow return to work in 1 to 3 days. Laser haemorrhoidoplasty usually needs 2 to 5 days off.',
  ARRAY['Playbook', 'Piles', 'Recovery'],
  ARRAY['Piles', 'Laser Surgery', 'Diet', 'Recovery'],
  true,
  'Complete Recovery Playbook After Piles Surgery | Shri Manmukund Hospital',
  'Day-by-day and week-by-week recovery guide after piles surgery. Diet, activity, wound care, warning signs.'
),
(
  'complete-recovery-after-fistula-surgery',
  'playbook',
  'Complete Recovery After Fistula Surgery',
  'dr-vipin',
  'dr-swati',
  '2026-07-25',
  10,
  'Complete recovery guide after fistula treatment. Ksharsutra, laser FiLaC, conventional fistulotomy. Day-by-day guidance for patients.',
  'Fistula recovery differs significantly by treatment method. Ksharsutra involves weekly OPD visits over 4 to 12 weeks with normal daily activity throughout. Laser FiLaC is a single-session procedure with 3 to 5 days recovery.',
  ARRAY['Playbook', 'Fistula', 'Recovery'],
  ARRAY['Fistula', 'Ksharsutra', 'FiLaC', 'Recovery'],
  true,
  'Recovery Playbook After Fistula Surgery | Ksharsutra, Laser, Fistulotomy',
  'Complete recovery guide after fistula treatment. Ksharsutra, laser FiLaC, conventional fistulotomy.'
),
(
  'piles-vs-fissure-vs-fistula-how-to-tell-them-apart',
  'article',
  'Piles vs Fissure vs Fistula: How to Tell Them Apart',
  'dr-vipin',
  'dr-swati',
  '2026-08-01',
  8,
  'The three most common anorectal conditions, often confused. A clear comparison of symptoms and treatments.',
  'Piles, anal fissure, and anal fistula are three distinct anorectal conditions with overlapping symptoms but different underlying pathology and treatment. Piles are swollen anal veins causing painless bleeding, itching, or protrusion.',
  ARRAY['Article', 'Proctology', 'Diagnosis'],
  ARRAY['Piles', 'Fissure', 'Fistula', 'Comparison'],
  true,
  'Piles vs Fissure vs Fistula: Clear Comparison | Symptoms, Causes, Treatment',
  'Confused between piles, fissure, and fistula? Clear comparison of symptoms, causes, and treatment for each.'
),
(
  'why-rectal-bleeding-should-never-be-ignored',
  'article',
  'Why Rectal Bleeding Should Never Be Ignored',
  'dr-vipin',
  'dr-swati',
  '2026-08-05',
  6,
  'Rectal bleeding is common, but self-diagnosing it as piles can delay critical treatment for fissures, polyps, or malignancies.',
  'Blood in stool or on toilet paper is the most common reason patients visit an anorectal clinic. While often caused by benign conditions like piles or fissure, proper clinical evaluation is essential.',
  ARRAY['Article', 'Proctology', 'Symptoms'],
  ARRAY['Bleeding', 'Piles', 'Diagnosis'],
  true,
  'Why Rectal Bleeding Should Never Be Ignored | Shri Manmukund Hospital',
  'Understanding rectal bleeding causes, evaluation protocols, and why specialist examination is crucial.'
),
(
  'case-for-female-surgeons-in-anorectal-practice',
  'insights',
  'The Case for Female Surgeons in Anorectal Practice',
  'dr-swati',
  'dr-vipin',
  '2026-08-10',
  8,
  'A personal reflection on why female patients deserve the choice of a female surgeon for anorectal and gynaecological care.',
  'In much of Vidarbha and rural Maharashtra, female surgeons are uncommon. Anorectal specialists specifically are even rarer to find in female form. This is not an abstract statistic; it is a lived reality that costs women health outcomes every day.',
  ARRAY['Insights', 'Female Care', 'Perspectives'],
  ARRAY['Women Health', 'Female Proctologist', 'Dr. Swati'],
  true,
  'The Case for Female Surgeons in Anorectal Practice | Dr. Swati Tongale',
  'A personal reflection on why female patients deserve the choice of a female surgeon for anorectal and gynaecological care.'
),
(
  'why-i-chose-shalya-tantra',
  'insights',
  'Why I Chose Shalya Tantra Over Modern Surgery Alone',
  'dr-vipin',
  'dr-swati',
  '2026-08-15',
  9,
  'A personal reflection on choosing Ayurvedic surgical specialisation. Why classical and modern surgery are not opposites but complements.',
  'When I tell people I am an MS in Ayurveda Shalya Tantra, they sometimes ask why I did not just do MBBS and MS General Surgery. In this piece I want to explain why my choice was deliberate rather than compromised.',
  ARRAY['Insights', 'Ayurveda', 'Surgery'],
  ARRAY['Shalya Tantra', 'Philosophy', 'Dr. Vipin'],
  true,
  'Why I Chose Shalya Tantra Over Modern Surgery Alone | Dr. Vipin Tongale',
  'A personal reflection on choosing Ayurvedic surgical specialisation. Why classical and modern surgery are not opposites but complements.'
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  excerpt = EXCLUDED.excerpt,
  body_markdown = EXCLUDED.body_markdown;

-- 4. Seed Verified Testimonials
INSERT INTO testimonials (patient_name, city, rating, review_text, source, display_permission_granted, is_approved, is_featured)
VALUES
  ('Rameshwar P.', 'Amravati', 5, 'I was suffering from fistula for 3 years and had two previous surgeries elsewhere with recurrence. Dr. Vipin Tongale performed Ksharsutra treatment. Within 8 weeks it healed completely with no pain or incontinence. Very grateful.', 'google', true, true, true),
  ('Sunita G.', 'Badnera', 5, 'As a woman, I was very hesitant to consult for piles. Dr. Swati Tongale was extremely kind, understanding, and made me feel completely comfortable. The treatment worked wonderfully without any surgery.', 'google', true, true, true),
  ('Pravin K.', 'Achalpur', 5, 'Underwent laser piles treatment at Shri Manmukund Hospital. Discharged the same evening and back to work within 48 hours. Excellent facility, transparent doctors, and cooperative staff.', 'google', true, true, true),
  ('Anand M.', 'Yavatmal', 5, 'Dr. Vipin explained my hernia condition clearly and performed the surgery with great precision. Post-op recovery was smooth and painless. Highly recommended hospital in Vidarbha.', 'google', true, true, true),
  ('Meenakshi S.', 'Chandur Railway', 5, 'Took Uttarbasti treatment under Dr. Swati for infertility after 5 years of trying. Conceived within 4 months of completing the cycle. Words cannot express our gratitude.', 'google', true, true, true);

COMMIT;

-- =============================================================================
-- SHRI MANMUKUND HOSPITAL - ROW LEVEL SECURITY (RLS) POLICIES
-- =============================================================================

-- Enable Row Level Security on all tables
ALTER TABLE doctors ENABLE ROW LEVEL SECURITY;
ALTER TABLE service_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE conditions ENABLE ROW LEVEL SECURITY;
ALTER TABLE procedures ENABLE ROW LEVEL SECURITY;
ALTER TABLE knowledge_pieces ENABLE ROW LEVEL SECURITY;
ALTER TABLE patient_resources ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE enquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

-- Helper function to check if current user is an allowlisted admin
CREATE OR REPLACE FUNCTION is_admin()
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM admin_users
    WHERE email = auth.jwt() ->> 'email'
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 1. PUBLIC READ POLICIES (for website visitors)
CREATE POLICY "Public can view doctors" ON doctors
  FOR SELECT USING (true);

CREATE POLICY "Public can view service categories" ON service_categories
  FOR SELECT USING (true);

CREATE POLICY "Public can view published conditions" ON conditions
  FOR SELECT USING (is_published = true);

CREATE POLICY "Public can view published procedures" ON procedures
  FOR SELECT USING (is_published = true);

CREATE POLICY "Public can view published knowledge pieces" ON knowledge_pieces
  FOR SELECT USING (is_published = true);

CREATE POLICY "Public can view patient resources" ON patient_resources
  FOR SELECT USING (true);

CREATE POLICY "Public can view approved testimonials with consent" ON testimonials
  FOR SELECT USING (is_approved = true AND display_permission_granted = true);

-- 2. PUBLIC WRITE POLICIES (Enquiry submission)
CREATE POLICY "Public can submit enquiries" ON enquiries
  FOR INSERT WITH CHECK (true);

-- 3. ADMIN POLICIES (Full CRUD access for verified admins)
CREATE POLICY "Admins have full access to doctors" ON doctors
  FOR ALL USING (is_admin()) WITH CHECK (is_admin());

CREATE POLICY "Admins have full access to service categories" ON service_categories
  FOR ALL USING (is_admin()) WITH CHECK (is_admin());

CREATE POLICY "Admins have full access to conditions" ON conditions
  FOR ALL USING (is_admin()) WITH CHECK (is_admin());

CREATE POLICY "Admins have full access to procedures" ON procedures
  FOR ALL USING (is_admin()) WITH CHECK (is_admin());

CREATE POLICY "Admins have full access to knowledge pieces" ON knowledge_pieces
  FOR ALL USING (is_admin()) WITH CHECK (is_admin());

CREATE POLICY "Admins have full access to patient resources" ON patient_resources
  FOR ALL USING (is_admin()) WITH CHECK (is_admin());

CREATE POLICY "Admins have full access to testimonials" ON testimonials
  FOR ALL USING (is_admin()) WITH CHECK (is_admin());

CREATE POLICY "Admins have full access to enquiries" ON enquiries
  FOR ALL USING (is_admin()) WITH CHECK (is_admin());

CREATE POLICY "Admins have full access to admin_users" ON admin_users
  FOR ALL USING (is_admin()) WITH CHECK (is_admin());

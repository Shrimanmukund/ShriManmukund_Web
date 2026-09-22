-- =============================================================================
-- SHRI MANMUKUND HOSPITAL - SEED DATA FOR SUPABASE
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
  short_description = EXCLUDED.short_description,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description;


-- 3. Seed Verified Testimonials

INSERT INTO testimonials (patient_name, city, rating, review_text, source, display_permission_granted, is_approved, is_featured)
VALUES
  ('Rameshwar P.', 'Amravati', 5, 'I was suffering from fistula for 3 years and had two previous surgeries elsewhere with recurrence. Dr. Vipin Tongale performed Ksharsutra treatment. Within 8 weeks it healed completely with no pain or incontinence. Very grateful.', 'google', true, true, true),
  ('Sunita G.', 'Badnera', 5, 'As a woman, I was very hesitant to consult for piles. Dr. Swati Tongale was extremely kind, understanding, and made me feel completely comfortable. The treatment worked wonderfully without any surgery.', 'google', true, true, true),
  ('Pravin K.', 'Achalpur', 5, 'Underwent laser piles treatment at Shri Manmukund Hospital. Discharged the same evening and back to work within 48 hours. Excellent facility, transparent doctors, and cooperative staff.', 'google', true, true, true),
  ('Anand M.', 'Yavatmal', 5, 'Dr. Vipin explained my hernia condition clearly and performed the surgery with great precision. Post-op recovery was smooth and painless. Highly recommended hospital in Vidarbha.', 'google', true, true, true),
  ('Meenakshi S.', 'Chandur Railway', 5, 'Took Uttarbasti treatment under Dr. Swati for infertility after 5 years of trying. Conceived within 4 months of completing the cycle. Words cannot express our gratitude.', 'google', true, true, true);


COMMIT;
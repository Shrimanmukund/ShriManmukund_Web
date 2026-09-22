import rawPages from './seeded-content.json';
import type {
  DoctorProfile,
  ServiceCategory,
  ConditionPageData,
  ProcedurePageData,
  KnowledgePieceData,
  PatientResourceData,
  TestimonialData,
  FAQItem,
} from '@/types/content';

export const DOCTORS: Record<'dr-vipin' | 'dr-swati', DoctorProfile> = {
  'dr-vipin': {
    slug: 'dr-vipin',
    fullName: 'Vipin Tongale',
    honorific: 'Dr.',
    credentials: ['MS Ayurveda Shalya Tantra', 'PhD Shalya Tantra'],
    registrationNumbers: [{ council: 'Maharashtra Council of Indian Medicine', number: 'I-57434-A' }],
    designations: ['General Surgeon', 'Proctologist', 'Ayurvedic Shalya Tantra Specialist'],
    specialties: [
      'Anorectal Surgery',
      'Complex and Recurrent Fistula',
      'Ksharsutra Parasurgery',
      'Laser Proctology (LHP, FiLaC)',
      'Uttarbasti for Stricture Urethra',
      'General Surgery (Hernia, Hydrocele, Stones)',
      'Ayurvedic Non-Healing Wound Management',
    ],
    yearsOfExperience: 15,
    proceduresPerformed: 16000,
    languagesSpoken: ['English', 'Marathi', 'Hindi'],
    portraitUrl: '/images/doctors/dr-vipin-tongale.jpg',
    shortBio:
      'Senior Ayurvedic Surgeon, General Surgeon, and Proctologist with 15+ years of continuous practice, 12 years of AYUSH government service, and over 16,000 surgical procedures performed.',
    fullBioMarkdown: `
Dr. Vipin Tongale is a leading Ayurvedic Surgeon and Proctologist based in Amravati, Maharashtra. With an MS in Ayurveda (Shalya Tantra - Surgery) and a PhD in Shalya Tantra, Dr. Tongale combines classical Ayurvedic surgical science with modern minimally invasive proctology and general surgery.

Over the past 15 years, including 12 years of dedicated service as an AYUSH Medical Officer/Surgeon at District Hospital Amravati and as honorary faculty at Shri Gurudev Ayurved Mahavidyalaya, Dr. Tongale has performed more than 16,000 surgical and parasurgical procedures. He is widely recognized across Vidarbha for successfully treating complex, high, and recurrent anal fistulas with minimal recurrence using classical Ksharsutra therapy.
    `,
    journey: [
      { year: '2011', title: 'Clinical Launch', institution: 'Started dedicated anorectal practice in Amravati on 6 June 2011.' },
      { year: '2012-2024', title: 'Government AYUSH Service', institution: 'Served 12 years at District Hospital Amravati handling complex surgical & anorectal cases.' },
      { year: '2016', title: 'Hospital Expansion', institution: 'Expanded into full-fledged surgical facility at Bapatwadi on 28 October 2016.' },
      { year: '2024', title: 'New State-of-the-Art Hospital', institution: 'Inaugurated owned custom-built hospital facility with modern OT on 1 June 2024.' },
    ],
    awards: [
      { title: 'Excellence in Ayurvedic Surgery & Ksharsutra', issuer: 'Regional Medical Association' },
      { title: 'Best AYUSH Medical Officer Recognition', issuer: 'Public Health Department, Maharashtra' },
    ],
    memberships: [
      'National Sushrut Association of Shalya Tantra',
      'Maharashtra Council of Indian Medicine (MCIM)',
      'Indian Medical Association - AYUSH Wing',
    ],
    consultationTimings: {
      morning: 'Morning surgical hours for planned procedures',
      evening: '1:00 PM to 4:30 PM & 6:00 PM to 8:30 PM (Mon-Sat)',
      sunday: 'Prior Appointment Only',
      emergency: '24 Hours Emergency On-Call',
    },
    metaTitle: 'Dr. Vipin Tongale | Ayurvedic Surgeon & Proctologist | Amravati',
    metaDescription:
      'Dr. Vipin Tongale, MS (Ayurveda Shalya Tantra), PhD. 15+ years experience, 16,000+ procedures. Specialist in Ksharsutra, laser proctology, and general surgery in Amravati.',
  },
  'dr-swati': {
    slug: 'dr-swati',
    fullName: 'Swati Tongale (Wankhade)',
    honorific: 'Dr.',
    credentials: ['MS Ayurveda Shalya Tantra'],
    registrationNumbers: [{ council: 'Maharashtra Council of Indian Medicine', number: 'I-62189-A' }],
    designations: ['Ayurvedic Surgeon', 'Female Proctologist', 'Uttarbasti & Infertility Specialist'],
    specialties: [
      'Female Proctology (Piles, Fissure, Fistula in Women)',
      'Uttarbasti for Infertility and Tubal Blockage',
      'Ayurvedic Gynaecology & Menstrual Disorders',
      'Panchakarma for Women & Postnatal Care (Sutika Paricharya)',
      'General & Minor Surgery',
    ],
    yearsOfExperience: 14,
    proceduresPerformed: 8000,
    languagesSpoken: ['English', 'Marathi', 'Hindi'],
    portraitUrl: '/images/doctors/dr-swati-tongale.jpg',
    shortBio:
      'Specialist Female Ayurvedic Surgeon and Proctologist providing compassionate, dignified, and private surgical care for women, alongside renowned Uttarbasti fertility treatments.',
    fullBioMarkdown: `
Dr. Swati Tongale (Wankhade) is a specialist Female Ayurvedic Surgeon and Proctologist in Vidarbha holding an MS in Ayurveda (Shalya Tantra - Surgery). 

Dr. Swati addresses a critical healthcare need in the region by providing female patients with a comfortable, dignified environment for proctological examinations and treatments. She also leads the hospital's specialized fertility and gynaecological unit, delivering classical Uttarbasti therapies for tubal blocks, thin endometrium, PCOD, and female infertility.
    `,
    journey: [
      { year: '2011', title: 'Consultant Surgeon', institution: 'Initiated specialized clinical practice for female proctology in Amravati.' },
      { year: '2016', title: 'Co-Founder', institution: 'Co-founded Shri Manmukund Hospital with dedicated female consultation & Panchakarma wing.' },
      { year: '2024', title: 'Women’s Specialty Wing', institution: 'Established dedicated female patient wing with private recovery and Uttarbasti chamber.' },
    ],
    awards: [
      { title: 'Women in Healthcare Excellence Award', issuer: 'Vidarbha Vaidya Mandal' },
    ],
    memberships: [
      'Maharashtra Council of Indian Medicine (MCIM)',
      'All India Ayurveda Specialists Association',
    ],
    consultationTimings: {
      morning: 'Morning surgical hours',
      evening: '2:30 PM to 4:30 PM & 6:00 PM to 8:00 PM (Mon-Sat)',
      sunday: 'Prior Appointment Only',
      emergency: '24 Hours Emergency Care',
    },
    metaTitle: 'Dr. Swati Tongale | Female Proctologist & Ayurvedic Surgeon | Amravati',
    metaDescription:
      'Dr. Swati Tongale, MS (Ayurveda Shalya Tantra). Leading female proctologist and Ayurvedic fertility surgeon in Vidarbha specializing in female anorectal care and Uttarbasti.',
  },
};

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    slug: 'anorectal-care',
    name: 'Advanced Anorectal Care',
    nameSanskrit: 'गुदविकार चिकित्सा',
    shortDescription:
      'Specialist diagnosis and treatment for piles, fissures, fistulas, pilonidal sinus, and complex recurrent anorectal conditions.',
    iconName: 'shield-plus',
    leadDoctorSlug: 'dr-vipin',
    orderIndex: 1,
    conditions: [
      {
        slug: 'piles',
        categorySlug: 'anorectal-care',
        name: 'Piles',
        nameSanskrit: 'अर्श',
        shortSummary: 'Haemorrhoids graded I through IV, treated across all four tiers depending on grade and symptom severity. Conservative to conventional, chosen for the case.',
        tags: ['Grade I–IV', 'All tiers'],
        linkText: 'Read about piles treatment',
        iconLetter: 'पा',
      },
      {
        slug: 'anal-fissure',
        categorySlug: 'anorectal-care',
        name: 'Anal Fissure',
        nameSanskrit: 'परिकर्तिका',
        shortSummary: 'Acute and chronic fissure. Conservative management, Matra Basti for chronic cases, and laser or surgical options when needed. Sphincter preservation is priority.',
        tags: ['Acute / Chronic', 'Sphincter-safe'],
        linkText: 'Read about fissure treatment',
        iconLetter: 'भ',
      },
      {
        slug: 'anal-fistula',
        categorySlug: 'anorectal-care',
        name: 'Anal Fistula',
        nameSanskrit: 'भगन्दर',
        shortSummary: 'Simple, complex, high-position, and multi-tract fistula. Classical Ksharsutra, IFTAK, Partial Fistulectomy with Ksharsutra Ligation, or laser FiLaC based on anatomy.',
        tags: ['Ksharsutra', 'IFTAK', 'FiLaC'],
        linkText: 'Read about fistula treatment',
        iconLetter: 'भ',
      },
      {
        slug: 'recurrent-anal-fistula',
        categorySlug: 'anorectal-care',
        name: 'Recurrent Anal Fistula',
        nameSanskrit: 'आवर्ती भगन्दर',
        shortSummary: 'Fistulas that have failed previous surgical treatment. Dedicated protocol with imaging, careful mapping, and Ksharsutra-based approaches proven for recurrent cases.',
        tags: ['Complex', 'Second opinion'],
        linkText: 'Read about recurrent fistula',
        iconLetter: 'पु',
      },
      {
        slug: 'perianal-abscess',
        categorySlug: 'anorectal-care',
        name: 'Perianal Abscess',
        nameSanskrit: 'विद्रधि',
        shortSummary: 'Acute and recurrent perianal abscesses. Prompt drainage under local or spinal anaesthesia, with follow-up planning for possible fistula formation.',
        tags: ['Emergency', 'Same-day care'],
        linkText: 'Read about perianal abscess',
        iconLetter: 'फो',
      },
      {
        slug: 'pilonidal-sinus',
        categorySlug: 'anorectal-care',
        name: 'Pilonidal Sinus',
        nameSanskrit: 'नाड़ी व्रण',
        shortSummary: 'Recurrent inflammatory sinus in the natal cleft. SiLaC (Sinus Laser Closure) as a minimally invasive option, or conventional excision based on anatomy.',
        tags: ['SiLaC', 'Excision'],
        linkText: 'Read about pilonidal sinus',
        iconLetter: 'ना',
      },
      {
        slug: 'rectal-prolapse',
        categorySlug: 'anorectal-care',
        name: 'Rectal Prolapse',
        nameSanskrit: 'गुदभ्रंश',
        shortSummary: 'Partial and complete rectal prolapse. Careful assessment, conservative management for early cases, and surgical correction where indicated.',
        tags: ['Adult & child'],
        linkText: 'Read about rectal prolapse',
        iconLetter: 'गु',
      },
      {
        slug: 'female-proctology',
        categorySlug: 'anorectal-care',
        name: 'Female Proctology',
        nameSanskrit: 'महिला गुदविकार',
        shortSummary: 'All anorectal conditions treated by female specialist Dr. Swati Tongale. For patients who specifically prefer a female surgeon for sensitive care.',
        tags: ['Dr. Swati', 'Private'],
        linkText: 'Explore female proctology',
        iconLetter: 'महि',
      },
      {
        slug: 'paediatric-anorectal',
        categorySlug: 'anorectal-care',
        name: 'Paediatric Anorectal',
        nameSanskrit: 'बाल गुदविकार',
        shortSummary: 'Anorectal conditions in children including fissure, prolapse, rectal polyp, and phimosis. Age-appropriate care with parental counselling throughout.',
        tags: ['Children', 'Gentle care'],
        linkText: 'Read about paediatric care',
        iconLetter: 'बा',
      },
    ],
    metaTitle: 'Advanced Anorectal Care Unit | Shri Manmukund Hospital, Amravati',
    metaDescription: 'Expert proctology clinic in Amravati for piles, fissure, fistula, and pilonidal sinus. Ksharsutra, laser, and modern surgical options under one roof.',
  },
  {
    slug: 'ksharsutra',
    name: 'Ksharsutra and Ksharkarma',
    nameSanskrit: 'क्षारसूत्र चिकित्सा',
    shortDescription:
      'The gold-standard classical Ayurvedic parasurgical treatment for simple, complex, and recurrent anal fistulas with minimal recurrence and zero sphincter damage.',
    iconName: 'activity',
    leadDoctorSlug: 'dr-vipin',
    orderIndex: 2,
    conditions: [
      { slug: 'for-anal-fistula', categorySlug: 'ksharsutra', name: 'Ksharsutra for Anal Fistula', shortSummary: 'Step-by-step classical parasurgical track excision and simultaneous healing.' },
      { slug: 'procedure-and-recovery', categorySlug: 'ksharsutra', name: 'Procedure and Recovery Guide', shortSummary: 'What patients can expect from initial threading to complete track closure.' },
    ],
    metaTitle: 'Ksharsutra Treatment for Fistula in Amravati | Shri Manmukund Hospital',
    metaDescription: 'Classical Ayurvedic Ksharsutra treatment for anal fistula and pilonidal sinus by Dr. Vipin Tongale in Amravati. Near-zero recurrence, sphincter safe.',
  },
  {
    slug: 'laser-proctology',
    name: 'Laser Proctology',
    nameSanskrit: 'लेसर शल्यचिकित्सा',
    shortDescription:
      'Minimally invasive, day-care diode laser surgery for piles (LHP), fistulas (FiLaC), fissures, and pilonidal sinus (SiLaC).',
    iconName: 'zap',
    leadDoctorSlug: 'dr-vipin',
    orderIndex: 3,
    conditions: [
      { slug: 'laser-piles-surgery', categorySlug: 'laser-proctology', name: 'Laser Piles Surgery (LHP)', shortSummary: 'Laser Hemorrhoidoplasty with no cuts, no stitches, and rapid return to work.' },
      { slug: 'laser-fistula-treatment', categorySlug: 'laser-proctology', name: 'Laser Fistula Treatment (FiLaC)', shortSummary: 'Fistula-tract Laser Closure technique with preservation of anal sphincter muscles.' },
      { slug: 'laser-fissure-treatment', categorySlug: 'laser-proctology', name: 'Laser Fissure Treatment', shortSummary: 'Precision laser sphincterotomy offering prompt relief from chronic spasm.' },
      { slug: 'laser-pilonidal-sinus', categorySlug: 'laser-proctology', name: 'Laser Pilonidal Sinus (SiLaC)', shortSummary: 'Sinus Laser Closure technique avoiding large excision wounds.' },
      { slug: 'ksharsutra-vs-laser-guide', categorySlug: 'laser-proctology', name: 'Ksharsutra vs Laser Decision Guide', shortSummary: 'An objective clinical comparison to help patients choose the right treatment.' },
    ],
    metaTitle: 'Laser Piles and Fistula Surgery in Amravati | Shri Manmukund Hospital',
    metaDescription: 'Advanced diode laser surgery for piles, fissure, and fistula in Amravati. Day-care procedure, minimal pain, faster recovery, no stitches.',
  },
  {
    slug: 'non-surgical-piles-treatment',
    name: 'Non-Surgical Piles Interventions',
    nameSanskrit: 'अशस्त्र अर्श चिकित्सा',
    shortDescription:
      'Office-based, day-care OPD procedures for early-to-moderate piles without surgery, incisions, or hospital stays.',
    iconName: 'check-circle',
    leadDoctorSlug: 'dr-vipin',
    orderIndex: 4,
    conditions: [
      { slug: 'rubber-band-ligation', categorySlug: 'non-surgical-piles-treatment', name: 'Rubber Band Ligation', shortSummary: 'Barron’s band ligation cutting off blood flow to internal haemorrhoidal cushions.' },
      { slug: 'sclerotherapy', categorySlug: 'non-surgical-piles-treatment', name: 'Injection Sclerotherapy', shortSummary: 'Micro-injections causing shrinkage and fibrosis of bleeding haemorrhoidal veins.' },
    ],
    metaTitle: 'Non-Surgical Piles Treatment in Amravati | Shri Manmukund Hospital',
    metaDescription: 'OPD non-surgical treatments for early piles in Amravati. Rubber band ligation and sclerotherapy without hospital admission.',
  },
  {
    slug: 'general-surgery',
    name: 'General Surgery',
    nameSanskrit: 'सामान्य शल्यकर्म',
    shortDescription:
      'Comprehensive general surgical care for hernia, hydrocele, appendicitis, gall bladder conditions, renal calculi, and swellings.',
    iconName: 'scissors',
    leadDoctorSlug: 'dr-vipin',
    orderIndex: 5,
    conditions: [
      { slug: 'hernia', categorySlug: 'general-surgery', name: 'Hernia Repair', shortSummary: 'Inguinal, umbilical, and incisional hernia repair with tension-free mesh hernioplasty.' },
      { slug: 'hydrocele', categorySlug: 'general-surgery', name: 'Hydrocele Surgery', shortSummary: 'Safe surgical eversion and excision of tunica vaginalis for scrotal swelling.' },
      { slug: 'gallbladder', categorySlug: 'general-surgery', name: 'Gallbladder Conditions', shortSummary: 'Evaluation and surgical referral protocols for symptomatic cholelithiasis.' },
      { slug: 'appendicitis', categorySlug: 'general-surgery', name: 'Appendicitis', shortSummary: 'Prompt clinical diagnosis and emergency management of acute appendicitis.' },
      { slug: 'renal-calculi', categorySlug: 'general-surgery', name: 'Renal Calculi (Kidney Stones)', shortSummary: 'Integrated Ayurvedic lithotriptic therapies and surgical intervention referral.' },
      { slug: 'lipoma', categorySlug: 'general-surgery', name: 'Lipoma Excision', shortSummary: 'Day-care cosmetic excision of benign subcutaneous fatty lumps.' },
      { slug: 'breast-lump', categorySlug: 'general-surgery', name: 'Breast Lump Evaluation & Excision', shortSummary: 'Triple assessment and careful surgical excision of benign fibroadenomas.' },
      { slug: 'sebaceous-cyst', categorySlug: 'general-surgery', name: 'Sebaceous Cyst Excision', shortSummary: 'Complete capsule excision under local anaesthesia to prevent recurrence.' },
      { slug: 'abscess-drainage', categorySlug: 'general-surgery', name: 'Abscess Drainage', shortSummary: 'Aseptic incision and drainage for soft tissue, cutaneous, and deep abscesses.' },
      { slug: 'minor-procedures', categorySlug: 'general-surgery', name: 'Minor Procedures', shortSummary: 'Corn excision, wound debridement, primary suturing, and skin lesion biopsies.' },
    ],
    metaTitle: 'General Surgery in Amravati | Shri Manmukund Hospital',
    metaDescription: 'Safe general surgical procedures in Amravati: hernia repair, hydrocele surgery, lump excision, appendicitis, and day-care minor surgeries.',
  },
  {
    slug: 'ayurveda',
    name: 'Ayurveda Unit',
    nameSanskrit: 'आयुर्वेद चिकित्सा',
    shortDescription:
      'Classical Ayurvedic diagnosis and treatment for metabolic, gastric, dermatological, and chronic health conditions.',
    iconName: 'leaf',
    leadDoctorSlug: 'dr-vipin',
    orderIndex: 6,
    conditions: [
      { slug: 'vata-vikar', categorySlug: 'ayurveda', name: 'Vata Disorders (Vata Vikar)', shortSummary: 'Systemic treatments for neurological, degenerative, and joint disorders.' },
      { slug: 'skin-disease', categorySlug: 'ayurveda', name: 'Skin Diseases', shortSummary: 'Ayurvedic blood purification and herbal protocols for psoriasis, eczema, and rashes.' },
      { slug: 'hyperacidity-amlapitta', categorySlug: 'ayurveda', name: 'Hyperacidity (Amlapitta)', shortSummary: 'Root-cause correction of Pitta imbalance, GERD, and chronic gastric acidity.' },
      { slug: 'weight-management', categorySlug: 'ayurveda', name: 'Weight Management', shortSummary: 'Customized Ayurvedic Medoroga protocols for sustainable weight regulation.' },
      { slug: 'suvarna-prashan', categorySlug: 'ayurveda', name: 'Suvarna Prashan', shortSummary: 'Monthly Ayurvedic gold bhasma drops for child immunity and cognitive development.' },
      { slug: 'wound-management', categorySlug: 'ayurveda', name: 'Ayurvedic Wound Management', shortSummary: 'Classical Vrana Shodhana and Ropana oils for clean wound healing.' },
      { slug: 'non-healing-wounds', categorySlug: 'ayurveda', name: 'Non-Healing & Diabetic Wounds', shortSummary: 'Integrated tissue salvage protocols avoiding unnecessary limb amputations.' },
      { slug: 'mens-sexual-health', categorySlug: 'ayurveda', name: 'Men’s Sexual Health (Vajikarana)', shortSummary: 'Confidential, evidence-grounded Ayurvedic therapy for vitality and reproductive wellness.' },
    ],
    metaTitle: 'Ayurveda Treatment Unit in Amravati | Shri Manmukund Hospital',
    metaDescription: 'Classical Ayurvedic treatment in Amravati for hyperacidity, spine disorders, skin conditions, and chronic non-healing wounds.',
  },
  {
    slug: 'panchakarma',
    name: 'Panchakarma Unit',
    nameSanskrit: 'पंचकर्म शोधन',
    shortDescription:
      'Authentic classical detox and rejuvenation therapies including Basti, Uttarbasti, Leech Therapy (Jalauka), and Virechana.',
    iconName: 'sparkles',
    leadDoctorSlug: 'dr-swati',
    orderIndex: 7,
    conditions: [
      { slug: 'full-panchakarma', categorySlug: 'panchakarma', name: 'Full Panchakarma Programme', shortSummary: 'Comprehensive 5-fold seasonal body purification and metabolic reset.' },
      { slug: 'uttarbasti', categorySlug: 'panchakarma', name: 'Uttarbasti Therapy', shortSummary: 'Specialized intra-cavitary therapy for urethral strictures and female infertility.' },
      { slug: 'jalauka-leech-therapy', categorySlug: 'panchakarma', name: 'Jalauka (Leech Therapy)', shortSummary: 'Therapeutic bio-purification for localized vascular stasis, varicose veins, and wounds.' },
      { slug: 'basti', categorySlug: 'panchakarma', name: 'Basti (Medicated Enema)', shortSummary: 'The crown jewel of Panchakarma for Vata disorders, constipation, and back pain.' },
      { slug: 'virechana', categorySlug: 'panchakarma', name: 'Virechana (Therapeutic Purgation)', shortSummary: 'Targeted detoxification for excess Pitta, liver disorders, and skin ailments.' },
      { slug: 'vamana', categorySlug: 'panchakarma', name: 'Vamana (Therapeutic Emesis)', shortSummary: 'Targeted cleansing for Kapha disorders, chronic allergies, and respiratory issues.' },
      { slug: 'nasya', categorySlug: 'panchakarma', name: 'Nasya (Nasal Medication)', shortSummary: 'Medicated nasal administration for cervical issues, sinusitis, and headaches.' },
      { slug: 'raktamokshana', categorySlug: 'panchakarma', name: 'Raktamokshana (Bloodletting)', shortSummary: 'Classical blood purification for severe skin diseases and localized toxins.' },
      { slug: 'swedan-steam-therapy', categorySlug: 'panchakarma', name: 'Swedan (Steam Therapy)', shortSummary: 'Herbal steam therapy for muscle relaxation, stiffness, and toxin release.' },
    ],
    metaTitle: 'Panchakarma Unit in Amravati | Shri Manmukund Hospital',
    metaDescription: 'Authentic 5-fold Panchakarma therapies in Amravati: Uttarbasti, Jalauka (Leech Therapy), Basti, and detoxification programs.',
  },
  {
    slug: 'spine-care',
    name: 'Spine Care Unit',
    nameSanskrit: 'मेरुदण्ड चिकित्सा',
    shortDescription:
      'Integrated non-surgical Ayurvedic spine rehabilitation for sciatica, cervical spondylosis, and lumbar disc disorders.',
    iconName: 'align-center',
    leadDoctorSlug: 'dr-vipin',
    orderIndex: 8,
    conditions: [
      { slug: 'cervical-spondylosis', categorySlug: 'spine-care', name: 'Cervical Spondylosis', shortSummary: 'Non-surgical relief for neck pain, stiffness, and radiating arm numbness.' },
      { slug: 'lumbar-spondylosis', categorySlug: 'spine-care', name: 'Lumbar Spondylosis', shortSummary: 'Restorative therapy for lower back degeneration, disc bulges, and stiffness.' },
      { slug: 'sciatica', categorySlug: 'spine-care', name: 'Sciatica (Gridhrasi)', shortSummary: 'Targeted Ayurvedic treatment for sharp, shooting leg pain and nerve compression.' },
      { slug: 'kati-basti', categorySlug: 'spine-care', name: 'Kati Basti Therapy', shortSummary: 'Retention of warm medicated herbal oil on the lumbosacral spine for deep nourishment.' },
      { slug: 'greeva-basti', categorySlug: 'spine-care', name: 'Greeva Basti Therapy', shortSummary: 'Localized warm medicated oil pooling for chronic cervical pain and stiffness.' },
    ],
    metaTitle: 'Spine Care & Sciatica Treatment in Amravati | Shri Manmukund Hospital',
    metaDescription: 'Non-surgical Ayurvedic spine care for sciatica, cervical and lumbar spondylosis in Amravati using Kati Basti and Panchakarma.',
  },
  {
    slug: 'female-care',
    name: 'Female Specialty Care',
    nameSanskrit: 'स्त्रीरोग व विशेष शल्यचिकित्सा',
    shortDescription:
      'Compassionate women-focused care led by Dr. Swati Tongale: female proctology, Uttarbasti for fertility, and menstrual health.',
    iconName: 'heart',
    leadDoctorSlug: 'dr-swati',
    orderIndex: 9,
    conditions: [
      { slug: 'uttarbasti-for-infertility', categorySlug: 'female-care', name: 'Uttarbasti for Infertility', shortSummary: 'Classical Ayurvedic protocol for tubal blockage, thin endometrium, and recurrent IVF failures.' },
      { slug: 'menstrual-disorders', categorySlug: 'female-care', name: 'Menstrual Disorders', shortSummary: 'Holistic balancing of hormonal cycles, dysmenorrhea, PCOD, and irregular periods.' },
      { slug: 'postnatal-panchakarma', categorySlug: 'female-care', name: 'Postnatal Panchakarma (Sutika Paricharya)', shortSummary: 'Classical post-delivery rejuvenation, pelvic strengthening, and lactation support.' },
    ],
    metaTitle: 'Female Proctology & Women’s Health in Amravati | Dr. Swati Tongale',
    metaDescription: 'Dedicated female proctologist and Ayurvedic fertility surgeon in Amravati for piles, fistula, Uttarbasti for infertility, and women’s wellness.',
  },
  {
    slug: 'specialty-care',
    name: 'Specialty Units',
    nameSanskrit: 'विशेष चिकित्सा विभाग',
    shortDescription:
      'Specialized clinical units for non-healing diabetic wound salvage, paediatric care, and preventive immunity protocols.',
    iconName: 'star',
    leadDoctorSlug: 'dr-vipin',
    orderIndex: 10,
    conditions: [
      { slug: 'diabetic-wound-management', categorySlug: 'specialty-care', name: 'Diabetic Wound Management', shortSummary: 'Advanced wound debridement, infection control, and Ayurvedic tissue regeneration.' },
      { slug: 'child-care', categorySlug: 'specialty-care', name: 'Child Care (Paediatric Ayurveda)', shortSummary: 'Gentle classical treatments for childhood digestion, recurrent infections, and growth.' },
    ],
    metaTitle: 'Specialty Care Units | Shri Manmukund Hospital, Amravati',
    metaDescription: 'Specialized clinical units in Amravati for diabetic wound salvage, paediatric Ayurvedic care, and immunity enhancement.',
  },
];

export const TESTIMONIALS: TestimonialData[] = [
  {
    patientName: 'Rameshwar P.',
    city: 'Amravati',
    serviceName: 'Ksharsutra for Fistula',
    rating: 5,
    reviewText:
      'I was suffering from fistula for 3 years and had two previous surgeries elsewhere with recurrence. Dr. Vipin Tongale performed Ksharsutra treatment. Within 8 weeks it healed completely with no pain or incontinence. Very grateful.',
    reviewDate: '2026-06-15',
    source: 'google',
    displayPermissionGranted: true,
    isApproved: true,
    isFeatured: true,
  },
  {
    patientName: 'Sunita G.',
    city: 'Badnera',
    serviceName: 'Female Proctology',
    rating: 5,
    reviewText:
      'As a woman, I was very hesitant to consult for piles. Dr. Swati Tongale was extremely kind, understanding, and made me feel completely comfortable. The treatment worked wonderfully without any surgery.',
    reviewDate: '2026-05-20',
    source: 'google',
    displayPermissionGranted: true,
    isApproved: true,
    isFeatured: true,
  },
  {
    patientName: 'Pravin K.',
    city: 'Achalpur',
    serviceName: 'Laser Piles Surgery',
    rating: 5,
    reviewText:
      'Underwent laser piles treatment at Shri Manmukund Hospital. Discharged the same evening and back to work within 48 hours. Excellent facility, transparent doctors, and cooperative staff.',
    reviewDate: '2026-04-10',
    source: 'google',
    displayPermissionGranted: true,
    isApproved: true,
    isFeatured: true,
  },
  {
    patientName: 'Anand M.',
    city: 'Yavatmal',
    serviceName: 'Hernia Surgery',
    rating: 5,
    reviewText:
      'Dr. Vipin explained my hernia condition clearly and performed the surgery with great precision. Post-op recovery was smooth and painless. Highly recommended hospital in Vidarbha.',
    reviewDate: '2026-03-18',
    source: 'google',
    displayPermissionGranted: true,
    isApproved: true,
    isFeatured: true,
  },
  {
    patientName: 'Meenakshi S.',
    city: 'Chandur Railway',
    serviceName: 'Uttarbasti for Infertility',
    rating: 5,
    reviewText:
      'Took Uttarbasti treatment under Dr. Swati for infertility after 5 years of trying. Conceived within 4 months of completing the cycle. Words cannot express our gratitude.',
    reviewDate: '2026-02-05',
    source: 'google',
    displayPermissionGranted: true,
    isApproved: true,
    isFeatured: true,
  },
];

// Helper functions for fast typed data access
export function getAllPages() {
  return rawPages;
}

export function getPageByUrl(url: string) {
  const normalizedUrl = url.endsWith('/') ? url : `${url}/`;
  return rawPages.find((p) => p.url === normalizedUrl || p.url === url);
}

export function getPageBySlug(slug: string) {
  return rawPages.find((p) => p.slug === slug);
}

export function getDoctorBySlug(slug: 'dr-vipin' | 'dr-swati'): DoctorProfile {
  return DOCTORS[slug];
}

export function getAllDoctors(): DoctorProfile[] {
  return Object.values(DOCTORS);
}

export function getAllServiceCategories(): ServiceCategory[] {
  return SERVICE_CATEGORIES;
}

export function getServiceCategoryBySlug(slug: string): ServiceCategory | undefined {
  return SERVICE_CATEGORIES.find((c) => c.slug === slug);
}

export function getAllConditions(): ConditionPageData[] {
  const conditions: ConditionPageData[] = [];
  
  for (const cat of SERVICE_CATEGORIES) {
    for (const cond of cat.conditions) {
      const pageData = rawPages.find((p) => p.url.includes(`/services/${cat.slug}/${cond.slug}/`));
      
      const leadDoctorSlug: 'dr-vipin' | 'dr-swati' =
        cat.slug === 'female-care' || cond.slug === 'female-proctology' || cat.slug === 'panchakarma'
          ? 'dr-swati'
          : 'dr-vipin';
          
      conditions.push({
        slug: cond.slug,
        categorySlug: cat.slug,
        categoryName: cat.name,
        name: pageData ? pageData.title : cond.name,
        nameSanskrit: cond.nameSanskrit,
        answerFirstSummary: pageData?.answerFirstSummary || cond.shortSummary,
        definitionMarkdown: pageData?.bodyMarkdown || '',
        symptomsMarkdown: '',
        causesRiskFactorsMarkdown: '',
        whenToSeeSpecialistMarkdown: '',
        diagnosisMarkdown: '',
        treatmentOptions: [],
        recoveryMarkdown: '',
        preventionMarkdown: '',
        faqs: pageData?.faqs || [],
        relatedConditionSlugs: cat.conditions.filter((c) => c.slug !== cond.slug).map((c) => c.slug),
        leadDoctorSlug,
        medicallyReviewedBySlug: leadDoctorSlug === 'dr-vipin' ? 'dr-swati' : 'dr-vipin',
        emergencyCalloutRequired:
          cond.slug === 'perianal-abscess' ||
          cond.slug === 'appendicitis' ||
          cond.slug === 'phimosis-paraphimosis',
        metaTitle: pageData?.metaTitle || `${cond.name} Treatment in Amravati | Shri Manmukund Hospital`,
        metaDescription: pageData?.metaDescription || cond.shortSummary,
        lastReviewedAt: '2026-09-01',
      });
    }
  }

  // Include any extra condition pages defined in rawPages
  const extraConditionPages = rawPages.filter((p) => p.url.startsWith('/services/') && p.url.split('/').filter(Boolean).length === 3);
  for (const p of extraConditionPages) {
    const parts = p.url.split('/').filter(Boolean);
    const catSlug = parts[1];
    const condSlug = parts[2];
    if (!conditions.some((c) => c.categorySlug === catSlug && c.slug === condSlug)) {
      const cat = SERVICE_CATEGORIES.find((c) => c.slug === catSlug);
      conditions.push({
        slug: condSlug,
        categorySlug: catSlug,
        categoryName: cat ? cat.name : 'Services',
        name: p.title,
        nameSanskrit: undefined,
        answerFirstSummary: p.answerFirstSummary || p.metaDescription,
        definitionMarkdown: p.bodyMarkdown || '',
        symptomsMarkdown: '',
        causesRiskFactorsMarkdown: '',
        whenToSeeSpecialistMarkdown: '',
        diagnosisMarkdown: '',
        treatmentOptions: [],
        recoveryMarkdown: '',
        preventionMarkdown: '',
        faqs: p.faqs || [],
        relatedConditionSlugs: [],
        leadDoctorSlug: 'dr-vipin',
        medicallyReviewedBySlug: 'dr-swati',
        emergencyCalloutRequired: condSlug === 'phimosis-paraphimosis',
        metaTitle: p.metaTitle,
        metaDescription: p.metaDescription,
        lastReviewedAt: '2026-09-01',
      });
    }
  }
  
  return conditions;
}

export function getConditionBySlug(categorySlug: string, conditionSlug: string): ConditionPageData | undefined {
  const all = getAllConditions();
  return all.find((c) => c.categorySlug === categorySlug && c.slug === conditionSlug);
}

export function getAllKnowledgePieces(): KnowledgePieceData[] {
  const pieces = rawPages.filter((p) => p.url.startsWith('/knowledge/'));
  
  return pieces.map((p) => {
    let authorSlug: 'dr-vipin' | 'dr-swati' = 'dr-vipin';
    if (
      p.slug.includes('female') ||
      p.slug.includes('garbhsanskara') ||
      p.slug.includes('uttarbasti') ||
      p.slug.includes('why-i-chose-to-lead-a-female-care-unit') ||
      p.slug.includes('case-for-female-surgeons') ||
      p.rawContent.includes('**Author:** Dr. Swati') ||
      p.rawContent.includes('Author: Dr. Swati') ||
      p.rawContent.includes('By Dr. Swati')
    ) {
      authorSlug = 'dr-swati';
    }
    const parts = p.url.split('/').filter(Boolean);
    const cluster = (parts[1] as KnowledgePieceData['cluster']) || 'articles';
    return {
      slug: p.slug,
      cluster,
      title: p.title,
      authorSlug,
      medicallyReviewedBySlug: authorSlug === 'dr-vipin' ? 'dr-swati' : 'dr-vipin',
      publishedDate: '2026-08-15',
      lastUpdatedDate: '2026-09-10',
      estimatedReadTimeMins: Math.max(3, Math.ceil(p.bodyMarkdown.split(/\s+/).length / 200)),
      excerpt: p.answerFirstSummary || p.metaDescription,
      bodyMarkdown: p.bodyMarkdown,
      categories: ['Proctology', 'Ayurveda', 'Surgery'],
      tags: ['Amravati', 'Treatment', 'Healthcare'],
      metaTitle: p.metaTitle,
      metaDescription: p.metaDescription,
    };
  });
}

export function getKnowledgePiecesByCluster(cluster: string): KnowledgePieceData[] {
  return getAllKnowledgePieces().filter((p) => p.cluster === cluster);
}

export function getKnowledgePieceBySlug(cluster: string, slug: string): KnowledgePieceData | undefined {
  return getAllKnowledgePieces().find((p) => p.cluster === cluster && p.slug === slug);
}

export function getAllPatientResources(): PatientResourceData[] {
  const resources = rawPages.filter((p) => p.url.startsWith('/patients/') && p.url !== '/patients/');
  
  return resources.map((r) => ({
    slug: r.slug,
    title: r.title,
    summary: r.metaDescription,
    bodyMarkdown: r.bodyMarkdown,
    faqs: r.faqs,
    metaTitle: r.metaTitle,
    metaDescription: r.metaDescription,
  }));
}

export function getPatientResourceBySlug(slug: string): PatientResourceData | undefined {
  return getAllPatientResources().find((r) => r.slug === slug);
}

export interface HubCondition {
  slug: string;
  name: string;
  nameSanskrit?: string;
  shortSummary: string;
  tags?: string[];
  linkUrl?: string;
  iconLetter?: string;
}

export interface HubTier {
  num: string;
  tierLabel: string;
  title: string;
  desc: string;
  whenApplied?: string;
  linkText?: string;
  linkUrl?: string;
}

export interface HubSignature {
  badgeLetter: string;
  eyebrow: string;
  title: string;
  desc: string;
  features: string[];
  linkText: string;
  linkUrl: string;
  isLaser?: boolean;
}

export interface HubDifferentiator {
  title: string;
  desc: string;
}

export interface HubFaq {
  question: string;
  answer: string;
}

export interface HubResource {
  title: string;
  type: 'Playbook' | 'Article' | 'Guide';
  excerpt: string;
  slug: string;
  readTime: string;
}

export interface ServiceHubData {
  slug: string;
  canonicalSlug: string;
  name: string;
  nameSanskrit: string;
  themeColor: 'indigo' | 'sage' | 'gold' | 'rose';
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  eyebrowBadge: string;
  heroHeadline: string;
  heroHeadlineEm: string;
  heroSubheadline: string;
  primaryCtaText: string;
  primaryCtaUrl: string;
  secondaryCtaText: string;
  secondaryCtaUrl: string;
  heroStatNum?: string;
  heroStatSmall?: string;
  heroStatLabel?: string;
  heroStatDesc?: string;
  answerFirstSummary: string;
  // Four Tiers Ladder
  tiersHeading?: string;
  tiersHeadingEm?: string;
  tiersLede?: string;
  tiers?: HubTier[];
  tiersNote?: string;
  // Conditions Grid
  conditionsSectionTitle: string;
  conditionsSectionTitleEm: string;
  conditionsSectionLede: string;
  conditions: HubCondition[];
  // Signatures Section
  signaturesHeading?: string;
  signaturesHeadingEm?: string;
  signaturesLede?: string;
  signatures?: HubSignature[];
  // Differentiators Section
  differentiatorsHeading?: string;
  differentiatorsHeadingEm?: string;
  differentiatorsLede?: string;
  differentiators?: HubDifferentiator[];
  // Specialists
  specialistsSection: {
    heading: string;
    headingEm: string;
    lede: string;
    doctorSlugs: ('dr-vipin' | 'dr-swati')[];
  };
  // Resources
  resourcesSection?: {
    heading: string;
    headingEm: string;
    lede: string;
    resources: HubResource[];
  };
  // FAQs
  faqsHeading?: string;
  faqsHeadingEm?: string;
  faqsLede?: string;
  faqs: HubFaq[];
  medicallyReviewedBy?: string;
  // CTA
  ctaDevanagari: string;
  ctaHeadline: string;
  ctaHeadlineEm: string;
  ctaLede: string;
  ctaPrimaryText: string;
  ctaPrimaryUrl: string;
}

export const SERVICE_HUBS: Record<string, ServiceHubData> = {
  'anorectal-care': {
    slug: 'anorectal-care',
    canonicalSlug: 'anorectal-care',
    name: 'Advanced Anorectal Care',
    nameSanskrit: 'गुदविकार चिकित्सा',
    themeColor: 'indigo',
    metaTitle: 'Anorectal Care Unit, Amravati | Piles, Fissure, Fistula Specialist',
    metaDescription:
      'Specialist proctology in Amravati by two MS Ayurveda surgeons. Full spectrum: non-surgical, Ksharsutra, laser, and modern surgery.',
    eyebrow: 'Care Unit',
    eyebrowBadge: 'Flagship',
    heroHeadline: 'Advanced Anorectal Care, chosen ',
    heroHeadlineEm: 'honestly for the case.',
    heroSubheadline:
      'The full spectrum of anorectal treatment under one roof: conservative management, non-surgical OPD interventions, Ksharsutra, laser proctology, and modern surgery. The right choice for your case, not the technique that sells best.',
    primaryCtaText: 'Book a consultation',
    primaryCtaUrl: '/contact/#book',
    secondaryCtaText: 'Explore conditions',
    secondaryCtaUrl: '#conditions',
    heroStatNum: '8,000',
    heroStatSmall: '+',
    heroStatLabel: 'Anorectal Procedures',
    heroStatDesc: 'Performed at our hospital since 2016. Across all treatment tiers.',
    answerFirstSummary:
      'The Advanced Anorectal Care Unit at Shri Manmukund Hospital treats the full range of anorectal conditions including piles, anal fissure, anal fistula (simple, complex, and recurrent), perianal abscess, pilonidal sinus, and rectal prolapse. Because we offer all treatment tiers under one roof, from conservative management through Ksharsutra, laser proctology, and conventional surgery, the recommendation you receive reflects your specific case rather than the limited techniques a specialist may be trained in.',
    tiersHeading: 'Four tiers of care, applied ',
    tiersHeadingEm: 'in the right order.',
    tiersLede:
      'Not every anorectal problem needs surgery. We start with what your case actually needs, and only move up the tiers when clinically appropriate.',
    tiers: [
      {
        num: '01',
        tierLabel: 'First Line',
        title: 'Conservative & Lifestyle',
        desc: 'For early-stage cases and preventive care. Dietary correction, fibre supplementation, sitz baths, topical medications, and lifestyle guidance.',
        whenApplied: 'Grade I piles · Acute fissure · Early symptoms',
      },
      {
        num: '02',
        tierLabel: 'Non-Surgical',
        title: 'OPD Interventions',
        desc: 'Office-based procedures that avoid surgery entirely. Rubber band ligation, injection sclerotherapy, Matra Basti for chronic fissure. Same-day, back to work next day.',
        whenApplied: 'Grade II–III piles · Chronic fissure · No sphincter involvement',
      },
      {
        num: '03',
        tierLabel: 'Advanced',
        title: 'Minimally Invasive',
        desc: 'Ksharsutra (classical, IFTAK, Partial Fistulectomy variant) and Laser Proctology (LHP, FiLaC, SiLaC). Sphincter-preserving. Modern precision meets classical tradition.',
        whenApplied: 'Fistula · Recurrent cases · Complex proctology',
      },
      {
        num: '04',
        tierLabel: 'Conventional',
        title: 'Surgical Solutions',
        desc: 'Traditional surgical approaches where they are genuinely the best option for the case. Full pre-operative workup, in-hospital care, structured post-operative follow-up.',
        whenApplied: 'Grade IV piles · Extensive prolapse · Selected fistula',
      },
    ],
    tiersNote:
      'In practice, over half of our patients do not need Tier 3 or Tier 4 care. The most valuable thing we can offer is the honest starting point, not the most expensive one.',
    conditionsSectionTitle: 'Nine conditions handled ',
    conditionsSectionTitleEm: 'under one roof.',
    conditionsSectionLede:
      'From the most common presentations to the most complex recurrent cases. Every condition is examined, staged, and matched to the appropriate treatment tier.',
    conditions: [
      {
        slug: 'piles',
        name: 'Piles',
        nameSanskrit: 'अर्श',
        shortSummary:
          'Haemorrhoids graded I through IV, treated across all four tiers depending on grade and symptom severity. Conservative to conventional, chosen for the case.',
        tags: ['Grade I–IV', 'All tiers'],
        linkUrl: '/services/anorectal-care/piles/',
        iconLetter: 'पा',
      },
      {
        slug: 'anal-fissure',
        name: 'Anal Fissure',
        nameSanskrit: 'परिकर्तिका',
        shortSummary:
          'Acute and chronic fissure. Conservative management, Matra Basti for chronic cases, and laser or surgical options when needed. Sphincter preservation is priority.',
        tags: ['Acute / Chronic', 'Sphincter-safe'],
        linkUrl: '/services/anorectal-care/anal-fissure/',
        iconLetter: 'भ',
      },
      {
        slug: 'anal-fistula',
        name: 'Anal Fistula',
        nameSanskrit: 'भगन्दर',
        shortSummary:
          'Simple, complex, high-position, and multi-tract fistula. Classical Ksharsutra, IFTAK, Partial Fistulectomy with Ksharsutra Ligation, or laser FiLaC based on anatomy.',
        tags: ['Ksharsutra', 'IFTAK', 'FiLaC'],
        linkUrl: '/services/anorectal-care/anal-fistula/',
        iconLetter: 'भ',
      },
      {
        slug: 'recurrent-anal-fistula',
        name: 'Recurrent Anal Fistula',
        nameSanskrit: 'आवर्ती भगन्दर',
        shortSummary:
          'Fistulas that have failed previous surgical treatment. Dedicated protocol with imaging, careful mapping, and Ksharsutra-based approaches proven for recurrent cases.',
        tags: ['Complex', 'Second opinion'],
        linkUrl: '/services/anorectal-care/recurrent-anal-fistula/',
        iconLetter: 'पु',
      },
      {
        slug: 'perianal-abscess',
        name: 'Perianal Abscess',
        nameSanskrit: 'विद्रधि',
        shortSummary:
          'Acute and recurrent perianal abscesses. Prompt drainage under local or spinal anaesthesia, with follow-up planning for possible fistula formation.',
        tags: ['Emergency', 'Same-day care'],
        linkUrl: '/services/anorectal-care/perianal-abscess/',
        iconLetter: 'फो',
      },
      {
        slug: 'pilonidal-sinus',
        name: 'Pilonidal Sinus',
        nameSanskrit: 'नाड़ी व्रण',
        shortSummary:
          'Recurrent inflammatory sinus in the natal cleft. SiLaC (Sinus Laser Closure) as a minimally invasive option, or conventional excision based on anatomy.',
        tags: ['SiLaC', 'Excision'],
        linkUrl: '/services/anorectal-care/pilonidal-sinus/',
        iconLetter: 'ना',
      },
      {
        slug: 'rectal-prolapse',
        name: 'Rectal Prolapse',
        nameSanskrit: 'गुदभ्रंश',
        shortSummary:
          'Partial and complete rectal prolapse. Careful assessment, conservative management for early cases, and surgical correction where indicated.',
        tags: ['Adult & child'],
        linkUrl: '/services/anorectal-care/rectal-prolapse/',
        iconLetter: 'गु',
      },
      {
        slug: 'female-proctology',
        name: 'Female Proctology',
        nameSanskrit: 'महिला गुदविकार',
        shortSummary:
          'All anorectal conditions treated by female specialist Dr. Swati Tongale. For patients who specifically prefer a female surgeon for sensitive care.',
        tags: ['Dr. Swati', 'Private'],
        linkUrl: '/services/anorectal-care/female-proctology/',
        iconLetter: 'महि',
      },
      {
        slug: 'paediatric-anorectal',
        name: 'Paediatric Anorectal',
        nameSanskrit: 'बाल गुदविकार',
        shortSummary:
          'Anorectal conditions in children including fissure, prolapse, rectal polyp, and phimosis. Age-appropriate care with parental counselling throughout.',
        tags: ['Children', 'Gentle care'],
        linkUrl: '/services/anorectal-care/paediatric-anorectal/',
        iconLetter: 'बा',
      },
    ],
    signaturesHeading: 'Two practices we are ',
    signaturesHeadingEm: 'particularly known for.',
    signaturesLede:
      'Both are minimally invasive and sphincter-preserving. The right choice depends on your case, and we offer both so the choice is genuine.',
    signatures: [
      {
        badgeLetter: 'क्ष',
        eyebrow: 'Classical Signature',
        title: 'Ksharsutra & Its Specialised Variants',
        desc: 'Two-thousand-year-old technique combined with modern refinements. Classical Ksharsutra, IFTAK for complex cases, and Partial Fistulectomy with Ksharsutra Ligation. Ksharkarma also available for internal piles.',
        features: ['Classical Ksharsutra', 'IFTAK', 'PF-KsL', 'Ksharkarma'],
        linkText: 'Explore Ksharsutra hub',
        linkUrl: '/services/ksharsutra/',
      },
      {
        badgeLetter: 'ल',
        eyebrow: 'Modern Signature',
        title: 'Laser Proctology',
        desc: 'Modern minimally invasive suite for anorectal conditions. Laser Haemorrhoidoplasty for piles, FiLaC for fistula, laser fissure treatment, and SiLaC for pilonidal sinus. Faster recovery.',
        features: ['LHP', 'FiLaC', 'SiLaC', 'Laser Fissure'],
        linkText: 'Explore laser proctology hub',
        linkUrl: '/services/laser-proctology/',
        isLaser: true,
      },
    ],
    specialistsSection: {
      heading: 'Both specialists, ',
      headingEm: 'consulting daily.',
      lede: 'Neither Dr. Vipin nor Dr. Swati sees you and refers you to junior associates. You are seen by the specialist you booked with, throughout your treatment.',
      doctorSlugs: ['dr-vipin', 'dr-swati'],
    },
    resourcesSection: {
      heading: 'Before you decide, ',
      headingEm: 'read what we’ve written.',
      lede: 'Because good decisions come from understanding, not from being sold. Three articles from our knowledge hub, curated for anorectal patients.',
      resources: [
        {
          title: 'Piles vs fissure vs fistula: how to tell them apart',
          type: 'Article',
          excerpt:
            'Three of the most common anorectal conditions, often confused. A clear comparison of symptoms, causes, and treatments to help you understand what you might be dealing with.',
          slug: '/knowledge/articles/piles-vs-fissure-vs-fistula-how-to-tell-them-apart/',
          readTime: '8 min read',
        },
        {
          title: 'Ksharsutra treatment, week by week',
          type: 'Playbook',
          excerpt:
            'A practical guide for patients considering or currently undergoing Ksharsutra. From first application through complete healing, with day-by-day expectations and aftercare.',
          slug: '/knowledge/playbooks/ksharsutra-day-1-to-complete-healing/',
          readTime: '12 min read',
        },
        {
          title: 'Why rectal bleeding should never be ignored',
          type: 'Article',
          excerpt:
            'Bleeding during or after passing stool is commonly assumed to be piles. Often it is. Sometimes it is something more serious. Here is why every episode deserves attention.',
          slug: '/knowledge/articles/why-rectal-bleeding-should-never-be-ignored/',
          readTime: '6 min read',
        },
      ],
    },
    faqsHeading: 'Frequently asked questions about ',
    faqsHeadingEm: 'anorectal care.',
    faqsLede: 'Honest answers to common questions about diagnosis, procedures, and recovery.',
    faqs: [
      {
        question: 'Do all anorectal conditions need surgery?',
        answer:
          'No. Many anorectal conditions can be managed with lifestyle changes, medication, or office-based procedures. Surgery is recommended only when it is genuinely the best option for the patient.',
      },
      {
        question: 'Is anorectal examination painful?',
        answer:
          'The examination is uncomfortable but rarely painful. Modern practice includes lubrication, small-diameter instruments, and unhurried technique to minimise discomfort. Female patients may specifically request Dr. Swati.',
      },
      {
        question: 'How long is recovery after anorectal treatment?',
        answer:
          'Recovery varies dramatically by procedure. Office-based procedures often allow same-day return to work. Laser procedures typically need 2 to 5 days. Ksharsutra involves weekly follow-up over 4 to 8 weeks. Conventional surgery may require 1 to 2 weeks of recovery.',
      },
      {
        question: 'Do you offer day-care procedures?',
        answer:
          'Yes. Rubber band ligation, sclerotherapy, laser haemorrhoidoplasty, laser fistula treatment, and many minor procedures are day-care. Patients arrive in the morning and go home the same day.',
      },
      {
        question: 'Do you accept insurance?',
        answer:
          'Shri Manmukund Hospital is registered under ROHINI (Registry of Hospitals in Network of Insurance), which is the national identifier system for hospitals under insurance networks. For cashless treatment, we currently carry select cases through partner hospital arrangements while our own cashless empanelment is under process. Please call 8208927917 for current information on insurance panels and cashless options for your specific insurer.',
      },
      {
        question: 'Can I speak to the doctor before coming in?',
        answer:
          'Yes. We understand anorectal problems are sensitive. Call 8208927917 to arrange a preliminary phone or WhatsApp discussion before your first visit.',
      },
      {
        question: 'What if I have already been treated elsewhere and the problem returned?',
        answer:
          'Recurrent and complex cases are a core part of our practice. Please bring any previous reports, discharge summaries, or operative notes when you visit.',
      },
    ],
    medicallyReviewedBy:
      'Medically reviewed by Dr. Vipin Tongale (MS Shalya Tantra, PhD) & Dr. Swati Tongale (MS Shalya Tantra)',
    ctaDevanagari: 'आइए, मिलते हैं',
    ctaHeadline: 'Ready for an honest ',
    ctaHeadlineEm: 'anorectal consultation?',
    ctaLede:
      'Come for a proper examination, an honest opinion, and a recommendation that fits your case. If a consultation reveals we are not the right fit, we will say so.',
    ctaPrimaryText: 'Book a consultation',
    ctaPrimaryUrl: '/contact/#book',
  },

  'general-surgery': {
    slug: 'general-surgery',
    canonicalSlug: 'general-surgery',
    name: 'General Surgery',
    nameSanskrit: 'सामान्य शल्यकर्म',
    themeColor: 'gold',
    metaTitle: 'General Surgery Amravati | Hernia, Hydrocele, Appendicitis Specialist',
    metaDescription:
      'Specialist general surgery in Amravati by MS Ayurveda surgeons. Hernia, hydrocele, appendicitis, breast lump, lipoma, and other general surgical care.',
    eyebrow: 'Surgical Unit',
    eyebrowBadge: 'Specialist Surgery',
    heroHeadline: 'General Surgery, chosen ',
    heroHeadlineEm: 'honestly for the case.',
    heroSubheadline:
      'Specialist general surgical care alongside our proctology and Ayurvedic practice. Hernia, hydrocele, appendicitis, breast lump, lipoma, and other general surgical needs handled with careful pre and post-operative attention.',
    primaryCtaText: 'Book a consultation',
    primaryCtaUrl: '/contact/#book',
    secondaryCtaText: 'Explore conditions',
    secondaryCtaUrl: '#conditions',
    heroStatNum: '16,000',
    heroStatSmall: '+',
    heroStatLabel: 'Surgical Procedures',
    heroStatDesc: 'Performed by our surgical team across three institutions since 2011.',
    answerFirstSummary:
      "Shri Manmukund Hospital's General Surgery Unit provides specialist care for common and complex general surgical conditions, delivered by MS Ayurveda Shalya Tantra qualified surgeons. Conditions handled include hernia (all types), hydrocele, appendicitis, gall bladder disease, breast lump, lipoma, sebaceous cyst, abscess, and various minor surgical procedures. Cases requiring superspecialist input (urology, oncology, high-risk cardiac) are coordinated with appropriate referral.",
    tiersHeading: 'Four pillars of our ',
    tiersHeadingEm: 'surgical standard.',
    tiersLede:
      'A structured approach ensuring safe outcomes, honest guidance, and complete patient clarity.',
    tiers: [
      {
        num: '01',
        tierLabel: 'Evaluation',
        title: 'Thorough Diagnostic Workup',
        desc: 'Careful clinical history, physical examination, and appropriate laboratory or imaging investigations before any surgical decision is made.',
        whenApplied: 'Pre-operative assessment · Differential diagnosis',
      },
      {
        num: '02',
        tierLabel: 'Precision',
        title: 'Modern Surgical Suite',
        desc: 'Aseptic operation theatre equipped for open, day-care, and coordinated laparoscopic interventions with safe anaesthesia monitoring.',
        whenApplied: 'Hernia · Hydrocele · Lump excision · Drainage',
      },
      {
        num: '03',
        tierLabel: 'Coordinated',
        title: 'Visiting Specialist Model',
        desc: 'Advanced laparoscopic cholecystectomy and complex abdominal cases performed at our hospital in coordination with expert visiting surgeons.',
        whenApplied: 'Gallbladder · Appendicectomy · Laparoscopy',
      },
      {
        num: '04',
        tierLabel: 'Recovery',
        title: 'Structured Post-Op Care',
        desc: 'Clear wound management, dressing protocols, scheduled follow-up visits, and direct access to your consulting surgeon throughout healing.',
        whenApplied: 'Same-day discharge · Monitored admission',
      },
    ],
    tiersNote:
      'We handle the conditions we are qualified and equipped for. When a case requires super-specialist input, we coordinate referral without ego.',
    conditionsSectionTitle: 'Ten conditions and procedures ',
    conditionsSectionTitleEm: 'handled under one roof.',
    conditionsSectionLede:
      'From common day-care swellings to planned abdominal surgeries, delivered with transparent clinical counsel.',
    conditions: [
      {
        slug: 'hernia',
        name: 'Hernia Repair',
        nameSanskrit: 'हर्निया',
        shortSummary:
          'Open hernia repair and coordination for laparoscopic mesh hernioplasty across inguinal, umbilical, and incisional hernias.',
        tags: ['Tension-free mesh', 'Day-care option'],
        linkUrl: '/services/general-surgery/hernia/',
        iconLetter: 'ह',
      },
      {
        slug: 'hydrocele',
        name: 'Hydrocele Surgery',
        nameSanskrit: 'वृद्धिरोग',
        shortSummary:
          'Safe surgical eversion and excision of tunica vaginalis (Jaboulay / Lord procedure) for primary and secondary hydrocele.',
        tags: ['Day-care', 'Safe anaesthesia'],
        linkUrl: '/services/general-surgery/hydrocele/',
        iconLetter: 'वृ',
      },
      {
        slug: 'gallbladder',
        name: 'Gall Bladder Conditions',
        nameSanskrit: 'पित्ताशय विकार',
        shortSummary:
          'Diagnostic evaluation and coordination for laparoscopic cholecystectomy for symptomatic gallstones and cholecystitis.',
        tags: ['Laparoscopy', 'Visiting expert'],
        linkUrl: '/services/general-surgery/gallbladder/',
        iconLetter: 'पि',
      },
      {
        slug: 'appendicitis',
        name: 'Appendicitis',
        nameSanskrit: 'उण्डुकशोथ',
        shortSummary:
          'Prompt clinical evaluation, imaging coordination, and emergency/elective appendicectomy with careful monitoring.',
        tags: ['Emergency care', 'Structured recovery'],
        linkUrl: '/services/general-surgery/appendicitis/',
        iconLetter: 'उ',
      },
      {
        slug: 'renal-calculi',
        name: 'Renal Calculi (Kidney Stones)',
        nameSanskrit: 'अश्मरी',
        shortSummary:
          'Diagnostic evaluation, conservative Ayurvedic lithotriptic therapy where suitable, and referral for surgical urological cases.',
        tags: ['Evaluation', 'Medical & referral'],
        linkUrl: '/services/general-surgery/renal-calculi/',
        iconLetter: 'अ',
      },
      {
        slug: 'lipoma',
        name: 'Lipoma Excision',
        nameSanskrit: 'मेदोविद्रधि',
        shortSummary:
          'Cosmetically conscious surgical excision of single and multiple subcutaneous lipomas under local anaesthesia.',
        tags: ['Minor surgery', 'Same-day return'],
        linkUrl: '/services/general-surgery/lipoma/',
        iconLetter: 'मे',
      },
      {
        slug: 'breast-lump',
        name: 'Breast Lump (Evaluation & Excision)',
        nameSanskrit: 'स्तन ग्रन्थि',
        shortSummary:
          'Triple assessment evaluation and careful surgical excision of benign fibroadenomas and lumps, with Dr. Swati leading female patient care.',
        tags: ['Female surgeon lead', 'Histopathology'],
        linkUrl: '/services/general-surgery/breast-lump/',
        iconLetter: 'स्त',
      },
      {
        slug: 'sebaceous-cyst',
        name: 'Sebaceous Cyst Excision',
        nameSanskrit: 'स्वेदग्रन्थि शोथ',
        shortSummary:
          'Complete surgical excision of cyst wall and capsule under local anaesthesia to prevent recurrence or secondary infection.',
        tags: ['Local anaesthesia', 'Zero recurrence aim'],
        linkUrl: '/services/general-surgery/sebaceous-cyst/',
        iconLetter: 'स्वे',
      },
      {
        slug: 'abscess-drainage',
        name: 'Abscess Drainage',
        nameSanskrit: 'विद्रधि भेदन',
        shortSummary:
          'Incision, thorough drainage, and packing under local or regional anaesthesia for subcutaneous and soft-tissue abscesses.',
        tags: ['Prompt relief', 'Aseptic packing'],
        linkUrl: '/services/general-surgery/abscess-drainage/',
        iconLetter: 'वि',
      },
      {
        slug: 'minor-procedures',
        name: 'Minor Procedures',
        nameSanskrit: 'क्षुद्र शल्यकर्म',
        shortSummary:
          'Corn excision, primary wound suturing, biopsy sampling, dressing, and aseptic wound care in our minor procedure suite.',
        tags: ['OPD procedure', 'Wound care'],
        linkUrl: '/services/general-surgery/minor-procedures/',
        iconLetter: 'क्षु',
      },
    ],
    specialistsSection: {
      heading: 'Both surgeons, ',
      headingEm: 'consulting daily.',
      lede: 'Evaluations, pre-operative planning, and procedures are conducted directly by our qualified MS specialists.',
      doctorSlugs: ['dr-vipin', 'dr-swati'],
    },
    faqsHeading: 'Frequently asked questions about ',
    faqsHeadingEm: 'general surgery.',
    faqsLede: 'Clear answers to common questions about surgical procedures and hospital stay.',
    faqs: [
      {
        question: 'Do all hernias require surgery?',
        answer:
          'Yes, in most adults. Unlike muscles elsewhere, the abdominal wall defect will not heal on its own and may enlarge over time. Early elective repair prevents dangerous emergency complications like strangulation.',
      },
      {
        question: 'How long is the hospital stay for general surgery?',
        answer:
          'Minor procedures (lipoma, cyst, abscess) are day-care with return home the same day. Hernia and hydrocele surgeries typically involve 1 to 2 days of observation.',
      },
      {
        question: 'Can female patients consult a female surgeon for breast lump evaluation?',
        answer:
          'Yes. Dr. Swati Tongale personally evaluates and performs procedures for female patients presenting with breast lumps, swelling, or general surgical concerns.',
      },
      {
        question: 'What if a case needs super-specialist laparoscopic or oncology care?',
        answer:
          'We believe in referral without ego. For complex laparoscopic cases, visiting specialists operate at our facility; for oncology or complex urology, we coordinate direct referral to trusted regional super-specialists.',
      },
    ],
    medicallyReviewedBy:
      'Medically reviewed by Dr. Vipin Tongale, MS (Ayurveda Shalya Tantra), PhD',
    ctaDevanagari: 'आइए, मिलते हैं',
    ctaHeadline: 'Ready for an honest ',
    ctaHeadlineEm: 'surgical consultation?',
    ctaLede:
      'Come for a proper examination, an honest opinion, and a clear recommendation. We operate only when genuinely indicated.',
    ctaPrimaryText: 'Book a consultation',
    ctaPrimaryUrl: '/contact/#book',
  },

  ayurveda: {
    slug: 'ayurveda',
    canonicalSlug: 'ayurveda',
    name: 'Ayurveda Unit',
    nameSanskrit: 'आयुर्वेद चिकित्सा',
    themeColor: 'sage',
    metaTitle: 'Ayurveda Unit Amravati | Classical Ayurvedic Treatment by MS Specialists',
    metaDescription:
      'Classical Ayurvedic treatment in Amravati by MS Ayurveda specialists. Vata Vikar, skin disease, hyperacidity, wound management, weight, and more.',
    eyebrow: 'Clinical Ayurveda',
    eyebrowBadge: 'Specialist Unit',
    heroHeadline: 'Ayurveda Unit, chosen ',
    heroHeadlineEm: 'honestly for the case.',
    heroSubheadline:
      'Classical Ayurvedic treatment for chronic and lifestyle conditions, delivered by MS Ayurveda Shalya Tantra qualified specialists. Not general practitioners, and not popular-appeal wellness Ayurveda.',
    primaryCtaText: 'Book a consultation',
    primaryCtaUrl: '/contact/#book',
    secondaryCtaText: 'Explore conditions',
    secondaryCtaUrl: '#conditions',
    heroStatNum: '15',
    heroStatSmall: '+',
    heroStatLabel: 'Years Clinical Ayurveda',
    heroStatDesc: 'Grounded in classical Ayurvedic texts, modern diagnostics, and honest clinical practice.',
    answerFirstSummary:
      "The Ayurveda Unit at Shri Manmukund Hospital provides classical Ayurvedic treatment for conditions where Ayurveda genuinely helps: chronic Vata disorders, skin conditions, hyperacidity, non-healing wounds, weight management, and more. All care is delivered by MS Ayurveda specialists, with honest integration with modern medicine where the patient's condition needs it.",
    tiersHeading: 'Four clinical principles of our ',
    tiersHeadingEm: 'Ayurvedic practice.',
    tiersLede:
      'Evidence-grounded, classical protocols combined with modern diagnostic clarity.',
    tiers: [
      {
        num: '01',
        tierLabel: 'Foundation',
        title: 'Classical Textual Root',
        desc: 'Treatment principles derived directly from Sushruta Samhita, Charaka Samhita, and classical pharmacopoeial formulations.',
        whenApplied: 'Chronic diseases · Constitutional analysis',
      },
      {
        num: '02',
        tierLabel: 'Diagnostic',
        title: 'Prakriti & Vikriti Assessment',
        desc: 'Thorough evaluation of individual constitution and doshic imbalance to customize herbal formulations rather than generic remedies.',
        whenApplied: 'Vata disorders · Metabolic imbalance',
      },
      {
        num: '03',
        tierLabel: 'Purification',
        title: 'Panchakarma Integration',
        desc: 'Supervised detoxification programmes (Vamana, Virechana, Basti, Nasya, Raktamokshana) delivered in our dedicated hospital unit.',
        whenApplied: 'Deep tissue cleansing · Autoimmune & skin',
        linkText: 'Explore Panchakarma Hub →',
        linkUrl: '/services/panchakarma/',
      },
      {
        num: '04',
        tierLabel: 'Integration',
        title: 'Modern Medical Collaboration',
        desc: 'We work alongside modern laboratory investigations and imaging, never asking patients to stop essential life-saving medications.',
        whenApplied: 'Hypertension · Diabetes · Non-healing wounds',
      },
    ],
    tiersNote:
      'Ayurvedic treatment works over weeks to months through root-cause correction. We set clinical expectations honestly from day one.',
    conditionsSectionTitle: 'Seven conditions handled ',
    conditionsSectionTitleEm: 'under one roof.',
    conditionsSectionLede:
      'Targeted classical Ayurvedic management for chronic, metabolic, and dermatological conditions.',
    conditions: [
      {
        slug: 'vata-vikar',
        name: 'Vata Vikar (Vata Disorders)',
        nameSanskrit: 'वात विकार',
        shortSummary:
          'Systemic management for neurological disorders, degenerative joint diseases, chronic pain, stiffness, and tremors.',
        tags: ['Neurological', 'Joint care'],
        linkUrl: '/services/ayurveda/vata-vikar/',
        iconLetter: 'वा',
      },
      {
        slug: 'skin-disease',
        name: 'Skin Diseases (Ayurvedic Care)',
        nameSanskrit: 'कुष्ठ व त्वचा विकार',
        shortSummary:
          'Classical blood purification, herbal decoctions, and Raktamokshana / Leech therapy for eczema, psoriasis, and chronic dermatitis.',
        tags: ['Blood purification', 'Raktamokshana'],
        linkUrl: '/services/ayurveda/skin-disease/',
        iconLetter: 'त्व',
      },
      {
        slug: 'hyperacidity-amlapitta',
        name: 'Hyperacidity (Amlapitta)',
        nameSanskrit: 'अम्लपित्त',
        shortSummary:
          'Root-cause management for chronic acid reflux, heartburn, GERD, and Pitta metabolic imbalances through herbal remedies and diet.',
        tags: ['Pitta balance', 'Dietary correction'],
        linkUrl: '/services/ayurveda/hyperacidity-amlapitta/',
        iconLetter: 'अम्ल',
      },
      {
        slug: 'weight-management',
        name: 'Weight Management',
        nameSanskrit: 'मेदोविकार चिकित्सा',
        shortSummary:
          'Individualised metabolic reset using classical Medoroga therapies, Udwartanam, herbal teas, and sustainable lifestyle corrections.',
        tags: ['Metabolic reset', 'Sustainable'],
        linkUrl: '/services/ayurveda/weight-management/',
        iconLetter: 'मे',
      },
      {
        slug: 'suvarna-prashan',
        name: 'Suvarna Prashan (Child Immunity)',
        nameSanskrit: 'सुवर्ण प्राशन',
        shortSummary:
          'Monthly administration of classical 24k gold bhasma, medhya herbs, and honey on Pushya Nakshatra for child immunity and memory.',
        tags: ['Pushya Nakshatra', 'Child health'],
        linkUrl: '/services/ayurveda/suvarna-prashan/',
        iconLetter: 'सु',
      },
      {
        slug: 'wound-management',
        name: 'Ayurvedic Wound Management',
        nameSanskrit: 'व्रण शोधन व रोपण',
        shortSummary:
          'Application of classical Shodhana (cleansing) and Ropana (healing) medicated oils and pastes for complex wounds.',
        tags: ['Vrana Shodhana', 'Herbal oils'],
        linkUrl: '/services/ayurveda/wound-management/',
        iconLetter: 'व्र',
      },
      {
        slug: 'non-healing-wounds',
        name: 'Non-Healing & Diabetic Wounds',
        nameSanskrit: 'दुष्ट व्रण',
        shortSummary:
          'Specialised tissue salvage protocols for chronic ulcerations, venous ulcers, and diabetic foot wounds preventing amputation.',
        tags: ['Limb salvage', 'Diabetic care'],
        linkUrl: '/services/ayurveda/non-healing-wounds/',
        iconLetter: 'दु',
      },
    ],
    signaturesHeading: 'Two specialized Ayurvedic units ',
    signaturesHeadingEm: 'operating daily.',
    signaturesLede:
      'Deep sub-specialty units providing classical Panchakarma and spine rehabilitation under one roof.',
    signatures: [
      {
        badgeLetter: 'पं',
        eyebrow: 'Classical Detox',
        title: 'Panchakarma Unit',
        desc: 'Dedicated 5-fold classical detoxification suite for chronic disease elimination: Vamana, Virechana, Basti, Nasya, and Raktamokshana under MS specialist oversight.',
        features: ['Basti', 'Virechana', 'Vamana', 'Nasya', 'Uttarbasti'],
        linkText: 'Explore Panchakarma hub',
        linkUrl: '/services/panchakarma/',
      },
      {
        badgeLetter: 'मे',
        eyebrow: 'Spine & Joints',
        title: 'Spine Care Unit',
        desc: 'Non-surgical Ayurvedic spine rehabilitation for sciatica, cervical spondylosis, and lumbar disc disease using localized Kati Basti, Greeva Basti, and herbal protocols.',
        features: ['Kati Basti', 'Greeva Basti', 'Sciatica', 'Spondylosis'],
        linkText: 'Explore spine care hub',
        linkUrl: '/services/spine-care/',
        isLaser: true,
      },
    ],
    specialistsSection: {
      heading: 'Both specialists, ',
      headingEm: 'consulting daily.',
      lede: 'Consultations and custom formulations are directed by post-graduate MS Ayurveda surgeons with deep clinical experience.',
      doctorSlugs: ['dr-vipin', 'dr-swati'],
    },
    faqsHeading: 'Frequently asked questions about ',
    faqsHeadingEm: 'Ayurvedic treatment.',
    faqsLede: 'Honest answers on how classical Ayurvedic therapy works and what to expect.',
    faqs: [
      {
        question: 'How is clinical Ayurveda different from wellness spa Ayurveda?',
        answer:
          'Wellness spas provide relaxation treatments. Our unit provides medical therapy: diagnostic pulse and physical examination, classical herbal formulations, supervised Panchakarma protocols, and integration with blood tests and imaging.',
      },
      {
        question: 'Can Ayurvedic treatment be taken alongside my modern medications?',
        answer:
          'Yes. We evaluate your current prescriptions (e.g. for diabetes, hypertension, thyroid) and ensure there are no adverse drug interactions. We never ask patients to stop essential life-saving modern medicines abruptly.',
      },
      {
        question: 'How long does Ayurvedic treatment take to show results?',
        answer:
          'Acute conditions (like hyperacidity or superficial wounds) often respond in 1 to 2 weeks. Chronic Vata disorders, skin diseases, and metabolic conditions typically require structured treatment over 6 to 12 weeks.',
      },
      {
        question: 'What is Suvarna Prashan and when is it given?',
        answer:
          'Suvarna Prashan is a classical Ayurvedic formulation of 24k purified gold bhasma, cow ghee, honey, and cognitive-enhancing herbs. It is administered to children on Pushya Nakshatra day every month to support immunity, memory, and digestion.',
      },
    ],
    medicallyReviewedBy:
      'Medically reviewed by Dr. Vipin Tongale (MS Shalya Tantra, PhD) & Dr. Swati Tongale (MS Shalya Tantra)',
    ctaDevanagari: 'आइए, मिलते हैं',
    ctaHeadline: 'Ready for an honest ',
    ctaHeadlineEm: 'Ayurvedic consultation?',
    ctaLede:
      'Experience classical clinical Ayurveda grounded in diagnostic clarity and patient-first care.',
    ctaPrimaryText: 'Book a consultation',
    ctaPrimaryUrl: '/contact/#book',
  },

  'female-care': {
    slug: 'female-care',
    canonicalSlug: 'female-care',
    name: 'Female Care Unit',
    nameSanskrit: 'स्त्रीरोग व विशेष शल्यचिकित्सा',
    themeColor: 'rose',
    metaTitle: 'Female Care Unit Amravati | Dr. Swati Tongale, Female Specialist',
    metaDescription:
      'Women-focused care in Amravati by female specialist Dr. Swati Tongale. Female proctology, Uttarbasti for infertility, Ayurvedic care for women.',
    eyebrow: 'Female Care Unit',
    eyebrowBadge: 'Led by Dr. Swati',
    heroHeadline: 'Female Specialty Care, chosen ',
    heroHeadlineEm: 'honestly for the case.',
    heroSubheadline:
      'Dedicated women-focused care under female specialist Dr. Swati Tongale, MS Ayurveda Shalya Tantra. For patients who prefer a female doctor for sensitive consultations, examinations, and procedures.',
    primaryCtaText: 'Book with Dr. Swati',
    primaryCtaUrl: '/dr-swati/appointment/',
    secondaryCtaText: 'Explore services',
    secondaryCtaUrl: '#conditions',
    heroStatNum: 'Dr. Swati',
    heroStatSmall: '',
    heroStatLabel: 'MS Shalya Tantra',
    heroStatDesc: 'Leading female proctologist and Ayurvedic surgeon in Vidarbha dedicated to women’s health.',
    answerFirstSummary:
      'The Female Care Unit at Shri Manmukund Hospital exists to remove a real barrier: many women in Vidarbha delay or avoid essential proctological and gynaecological Ayurvedic care because their local specialists are male. Dr. Swati Tongale, MS Ayurveda Shalya Tantra, provides consultation, examination, procedures, and follow-up across female proctology, Uttarbasti for infertility, menstrual disorders, and postnatal care, all in the same hospital setting.',
    tiersHeading: 'Four pillars of our ',
    tiersHeadingEm: 'women-focused practice.',
    tiersLede:
      'A respectful clinical environment designed to ensure total privacy, comfort, and clinical precision.',
    tiers: [
      {
        num: '01',
        tierLabel: 'Comfort',
        title: 'Female Specialist Throughout',
        desc: 'Consultation, digital examination, proctoscopic evaluation, and surgical procedures all conducted personally by Dr. Swati Tongale.',
        whenApplied: 'Proctology · Gynaecology · Antenatal',
      },
      {
        num: '02',
        tierLabel: 'Dignity',
        title: 'Private Examination Suite',
        desc: 'Dedicated private examination rooms with female nursing staff present. Family members or companions are warmly welcome to accompany you.',
        whenApplied: 'Respectful setting · Complete privacy',
      },
      {
        num: '03',
        tierLabel: 'Clinical',
        title: 'Specialised Uttarbasti',
        desc: 'Sterile intra-uterine administration of classical medicated ghritas for tubal blockage, endometrial thickness, and infertility.',
        whenApplied: 'Infertility · Recurrent IVF failure',
        linkText: 'Learn about Uttarbasti →',
        linkUrl: '/services/female-care/uttarbasti-for-infertility/',
      },
      {
        num: '04',
        tierLabel: 'Maternal',
        title: 'Garbhsanskara & Postnatal Care',
        desc: 'Classical month-by-month pregnancy regimens and traditional Sutika Paricharya postnatal recovery programmes for mothers.',
        whenApplied: 'Pregnancy · Post-delivery care',
      },
    ],
    tiersNote:
      'Women often delay seeking help for months or years due to embarrassment. The Female Care Unit provides a safe, respectful space.',
    conditionsSectionTitle: 'Five core services handled ',
    conditionsSectionTitleEm: 'under one roof.',
    conditionsSectionLede:
      'Dedicated clinical services spanning female proctology, fertility protocols, and hormonal health.',
    conditions: [
      {
        slug: 'female-proctology',
        name: 'Female Proctology',
        nameSanskrit: 'महिला गुदविकार',
        shortSummary:
          'Comprehensive anorectal care including piles, fissure, fistula, perianal abscess, and pilonidal sinus, evaluated and operated by Dr. Swati.',
        tags: ['Dr. Swati lead', 'Complete privacy'],
        linkUrl: '/services/anorectal-care/female-proctology/',
        iconLetter: 'महि',
      },
      {
        slug: 'uttarbasti-for-infertility',
        name: 'Uttarbasti for Infertility',
        nameSanskrit: 'उत्तरबस्ती वंध्यत्व चिकित्सा',
        shortSummary:
          'Classical Panchakarma intra-uterine therapy for tubal blockages, thin endometrium, recurrent IUI/IVF failures, and unexplained infertility.',
        tags: ['Tubal factor', 'Endometrial health'],
        linkUrl: '/services/female-care/uttarbasti-for-infertility/',
        iconLetter: 'उ',
      },
      {
        slug: 'garbhsanskara',
        name: 'Masanumasik Garbhsanskara',
        nameSanskrit: 'मासानुमासिक गर्भसंस्कार',
        shortSummary:
          'Month-by-month Ayurvedic antenatal regimen including classical dietary protocols, mild herbs, and coordinated prenatal yoga.',
        tags: ['Antenatal care', 'Month-by-month'],
        linkUrl: '/knowledge/articles/masanumasik-garbhsanskara-month-by-month-care/',
        iconLetter: 'ग',
      },
      {
        slug: 'menstrual-disorders',
        name: 'Menstrual Disorders (Ayurvedic Care)',
        nameSanskrit: 'आर्तव विकार व PCOD',
        shortSummary:
          'Root-cause Ayurvedic management for irregular periods, dysmenorrhoea, PCOD/PCOS, and hormonal imbalances.',
        tags: ['PCOD/PCOS', 'Pain relief'],
        linkUrl: '/services/female-care/menstrual-disorders/',
        iconLetter: 'आ',
      },
      {
        slug: 'postnatal-panchakarma',
        name: 'Postnatal Panchakarma (Sutika Paricharya)',
        nameSanskrit: 'सूतिका परिचर्या',
        shortSummary:
          'Traditional Ayurvedic post-delivery restorative care adapted for modern mothers: Abhyanga, medicated baths, pelvic toning, and lactation.',
        tags: ['Postnatal recovery', 'Pelvic health'],
        linkUrl: '/services/female-care/postnatal-panchakarma/',
        iconLetter: 'सू',
      },
    ],
    specialistsSection: {
      heading: 'Under the Care of ',
      headingEm: 'Dr. Swati Tongale.',
      lede: 'Dr. Swati personally conducts all consultations, physical examinations, and surgical procedures in a private and dignified setting.',
      doctorSlugs: ['dr-swati'],
    },
    faqsHeading: 'Frequently asked questions about ',
    faqsHeadingEm: 'female specialty care.',
    faqsLede: 'Information regarding consultations, privacy, and treatment options with Dr. Swati.',
    faqs: [
      {
        question: 'Will Dr. Swati conduct the physical examination herself?',
        answer:
          'Yes, entirely. Dr. Swati personally performs the consultation, digital examination, proctoscopic evaluation, and all procedures in a private examination room with female nursing staff present.',
      },
      {
        question: 'What is Uttarbasti for infertility and how does it help?',
        answer:
          'Uttarbasti is a specialised classical Panchakarma procedure where sterile medicated ghee or oil is administered into the uterine cavity during specific days of the menstrual cycle. It is particularly valuable for tubal factor infertility (clearing soft adhesions), improving endometrial thickness, and preparing the uterus for conception.',
      },
      {
        question: 'Can I bring a family member with me to the examination?',
        answer:
          'Yes, absolutely. You are welcome to have your mother, sister, spouse, or companion in the consultation and examination room if that makes you feel comfortable.',
      },
      {
        question: 'How do I book a private consultation with Dr. Swati?',
        answer:
          'You can book online, call 8208927917, or message us on WhatsApp. Simply specify that you wish to consult with Dr. Swati Tongale.',
      },
    ],
    medicallyReviewedBy:
      'Medically reviewed by Dr. Swati Tongale, MS (Ayurveda Shalya Tantra)',
    ctaDevanagari: 'आइए, मिलते हैं',
    ctaHeadline: 'Ready for an honest ',
    ctaHeadlineEm: 'female specialty consultation?',
    ctaLede:
      'Schedule a confidential appointment with Dr. Swati Tongale for respectful, specialist care.',
    ctaPrimaryText: 'Book with Dr. Swati',
    ctaPrimaryUrl: '/dr-swati/appointment/',
  },
};

// Aliases
SERVICE_HUBS['female-care-unit'] = SERVICE_HUBS['female-care'];

export function getServiceHubData(slug: string): ServiceHubData | undefined {
  return SERVICE_HUBS[slug];
}

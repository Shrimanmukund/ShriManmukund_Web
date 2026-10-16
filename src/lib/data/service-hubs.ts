export interface HubCondition {
  slug: string;
  name: string;
  nameSanskrit?: string;
  shortSummary: string;
  tags?: string[];
  linkUrl?: string;
  iconLetter?: string;
}

export interface HubConditionGroup {
  eyebrow?: string;
  title: string;
  lede?: string;
  conditions: HubCondition[];
}

export interface HubTier {
  num: string;
  tierLabel: string;
  title: string;
  desc: string;
  whenApplied?: string;
  linkText?: string;
  linkUrl?: string;
  links?: { text: string; url: string }[];
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
  conditionGroups?: HubConditionGroup[];
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
      'Specialist proctology in Amravati by two MS Ayurveda surgeons. Full spectrum: para surgical, Ksharsutra, laser, and modern surgery.',
    eyebrow: 'Care Unit',
    eyebrowBadge: 'Flagship',
    heroHeadline: 'Advanced Anorectal Care, chosen ',
    heroHeadlineEm: 'honestly for the case.',
    heroSubheadline:
      'The full spectrum of anorectal treatment under one roof: conservative management, para surgical OPD interventions, Ksharsutra, laser proctology, and modern surgery. The right choice for your case, not the technique that sells best.',
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
        tierLabel: 'Para Surgical',
        title: 'OPD Para Surgical Interventions',
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
    signaturesHeading: 'Three treatment approaches ',
    signaturesHeadingEm: 'under one roof.',
    signaturesLede:
      'From classical Ksharsutra and Ksharkarma to modern diode laser and office-based para surgical OPD procedures — matched honestly to your case.',
    signatures: [
      {
        badgeLetter: 'क्ष',
        eyebrow: 'Classical Para Surgical',
        title: 'Ksharsutra and Ksharkarma',
        desc: 'Gold-standard classical para surgical techniques for simple, complex, and recurrent fistulas, piles, and chronic fissures with minimal recurrence and preserved sphincter function.',
        features: ['Classical Ksharsutra', 'Ksharkarma Therapy', 'IFTAK Protocol', 'PF-KsL Variant'],
        linkText: 'Explore Ksharsutra hub',
        linkUrl: '/services/ksharsutra/',
      },
      {
        badgeLetter: 'ल',
        eyebrow: 'Modern Minimally Invasive',
        title: 'Laser Proctology',
        desc: 'Modern minimally invasive suite for anorectal conditions. Laser Haemorrhoidoplasty (LHP) for piles, FiLaC for fistula, laser fissure treatment, and SiLaC for pilonidal sinus. Faster recovery.',
        features: ['LHP Piles Laser', 'FiLaC Fistula Laser', 'SiLaC Pilonidal', 'Laser Fissure'],
        linkText: 'Explore laser proctology hub',
        linkUrl: '/services/laser-proctology/',
        isLaser: true,
      },
      {
        badgeLetter: 'अ',
        eyebrow: 'Day-Care OPD',
        title: 'Para Surgical Piles Interventions',
        desc: 'Office-based, day-care OPD procedures for early-to-moderate piles without surgery, incisions, or hospital stays: Rubber Band Ligation, Injection Sclerotherapy, and Matra Basti.',
        features: ['Rubber Band Ligation', 'Injection Sclerotherapy', 'Matra Basti', 'Zero Cuts / No Stitches'],
        linkText: 'Explore Para Surgical Interventions',
        linkUrl: '/services/non-surgical-piles-treatment/',
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
        tags: ['Local anaesthesia', 'Near-zero recurrence aim'],
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

  panchakarma: {
    slug: 'panchakarma',
    canonicalSlug: 'panchakarma',
    name: 'Panchakarma Unit',
    nameSanskrit: 'पंचकर्म शोधन चिकित्सा',
    themeColor: 'gold',
    metaTitle: 'Panchakarma Unit Amravati | Classical 5-Fold Detox & Shodhana Therapies',
    metaDescription:
      'Authentic classical Panchakarma in Amravati by MS Ayurveda specialists. Basti, Uttarbasti, Jalauka (Leech Therapy), Vamana, Virechana, and full detox regimens.',
    eyebrow: 'Classical Shodhana & Detox',
    eyebrowBadge: 'Specialist Unit',
    heroHeadline: 'Panchakarma Unit, delivered ',
    heroHeadlineEm: 'with authentic clinical rigour.',
    heroSubheadline:
      'Supervised hospital-based 5-fold purification therapies and specialised procedures (Basti, Uttarbasti, Jalauka, Virechana, Vamana, Nasya, Raktamokshana) performed in dedicated therapy suites under direct MS Ayurveda surgeon supervision.',
    primaryCtaText: 'Book a consultation',
    primaryCtaUrl: '/contact/#book',
    secondaryCtaText: 'Explore therapies',
    secondaryCtaUrl: '#conditions',
    heroStatNum: '15',
    heroStatSmall: '+',
    heroStatLabel: 'Years Panchakarma Practice',
    heroStatDesc: 'Administered with classical Purvakarma, Pradhanakarma, and Paschatkarma protocols.',
    answerFirstSummary:
      'The Panchakarma Unit at Shri Manmukund Hospital provides classical five-fold purification therapies and specialised restorative procedures including Basti, Uttarbasti, Jalauka (Leech Therapy), Virechana, and Nasya. Supervised directly by MS Ayurveda specialists Dr. Swati Tongale and Dr. Vipin Tongale, every regimen follows authentic Ayurvedic Shodhana protocols in dedicated hospital therapy rooms.',
    tiersHeading: 'Four stages of our ',
    tiersHeadingEm: 'clinical Panchakarma protocol.',
    tiersLede:
      'Classical procedural integrity ensuring safe, effective detoxification and cellular rejuvenation.',
    tiers: [
      {
        num: '01',
        tierLabel: 'Preparation',
        title: 'Purvakarma (Deepana & Snehana)',
        desc: 'Digestive fire activation (Deepana/Pachana) followed by internal/external oleation (Snehana) and medicated steam (Swedana) to loosen doshas.',
        whenApplied: 'Pre-procedure phase · Essential for all major cleanses',
      },
      {
        num: '02',
        tierLabel: 'Purification',
        title: 'Pradhanakarma (Main Therapy)',
        desc: 'Precise administration of primary classical Shodhana: Basti, Virechana, Vamana, Nasya, or Raktamokshana according to individual constitution and doshic state.',
        whenApplied: 'Chronic conditions · Doshic accumulation · Seasonal detox',
      },
      {
        num: '03',
        tierLabel: 'Specialised',
        title: 'Specialised Intra-cavitary & Bio-therapies',
        desc: 'High-precision Uttarbasti for urethral strictures and infertility, and medicinal leech therapy (Jalauka) for localised vascular stasis.',
        whenApplied: 'Stricture urethra · Infertility · Varicose veins & ulcers',
      },
      {
        num: '04',
        tierLabel: 'Restoration',
        title: 'Paschatkarma (Samsarjana Krama)',
        desc: 'Graduated post-cleansing dietary and lifestyle regimen restoring metabolic fire (Agni) and preventing toxic rebound.',
        whenApplied: 'Post-procedure recovery · Metabolic stabilisation',
      },
    ],
    tiersNote:
      'Every Panchakarma protocol is individualized based on pulse diagnosis (Nadi Pariksha) and Prakriti evaluation. Never standardized or rushed.',
    conditionsSectionTitle: 'Panchakarma therapies ',
    conditionsSectionTitleEm: 'managed under one roof.',
    conditionsSectionLede:
      'Authentic classical Shodhana and specialised bio-purification therapies delivered by MS specialists.',
    conditions: [
      {
        slug: 'full-panchakarma',
        name: 'Full Panchakarma Programme',
        nameSanskrit: 'पंचकर्म संपूर्ण शोधन',
        shortSummary:
          'Comprehensive classical 5-fold seasonal and therapeutic body purification and metabolic reset in a dedicated hospital setting.',
        tags: ['5-Fold Detox', 'Seasonal Reset'],
        linkUrl: '/services/panchakarma/full-panchakarma/',
        iconLetter: 'पं',
      },
      {
        slug: 'basti',
        name: 'Basti (Medicated Enema Therapy)',
        nameSanskrit: 'बस्ति चिकित्सा',
        shortSummary:
          'The crown jewel of Panchakarma for Vata disorders, chronic constipation, sciatica, and lower back degeneration.',
        tags: ['Vata pacification', 'Spine health'],
        linkUrl: '/services/panchakarma/basti/',
        iconLetter: 'ब',
      },
      {
        slug: 'uttarbasti',
        name: 'Uttarbasti Therapy',
        nameSanskrit: 'उत्तरबस्ति',
        shortSummary:
          'Specialised intra-cavitary therapy for urethral strictures (led by Dr. Vipin) and female infertility / tubal blockages (led by Dr. Swati).',
        tags: ['Stricture Urethra', 'Infertility Care'],
        linkUrl: '/services/panchakarma/uttarbasti/',
        iconLetter: 'उ',
      },
      {
        slug: 'jalauka-leech-therapy',
        name: 'Jalauka (Leech Therapy)',
        nameSanskrit: 'जलौकावचारण',
        shortSummary:
          'Therapeutic bio-purification for localised vascular stasis, varicose veins, thrombosed veins, and non-healing ulcers.',
        tags: ['Vascular stasis', 'Varicose veins'],
        linkUrl: '/services/panchakarma/jalauka-leech-therapy/',
        iconLetter: 'ज',
      },
      {
        slug: 'virechana',
        name: 'Virechana (Therapeutic Purgation)',
        nameSanskrit: 'विरेचन शोधन',
        shortSummary:
          'Targeted Pitta detoxification for liver disorders, chronic skin ailments, acidity, and metabolic heat.',
        tags: ['Pitta detox', 'Skin & liver'],
        linkUrl: '/services/panchakarma/virechana/',
        iconLetter: 'वि',
      },
      {
        slug: 'vamana',
        name: 'Vamana (Therapeutic Emesis)',
        nameSanskrit: 'वमन शोधन',
        shortSummary:
          'Targeted cleansing for excess Kapha disorders, chronic respiratory allergies, asthma, and metabolic sluggishness.',
        tags: ['Kapha detox', 'Respiratory care'],
        linkUrl: '/services/panchakarma/vamana/',
        iconLetter: 'व',
      },
      {
        slug: 'nasya',
        name: 'Nasya (Nasal Medication)',
        nameSanskrit: 'नस्य कर्म',
        shortSummary:
          'Medicated herbal administration through nasal passages for cervical spondylosis, sinusitis, migraine, and ENT disorders.',
        tags: ['ENT & Head', 'Cervical relief'],
        linkUrl: '/services/panchakarma/nasya/',
        iconLetter: 'न',
      },
      {
        slug: 'raktamokshana',
        name: 'Raktamokshana (Bloodletting)',
        nameSanskrit: 'रक्तमोक्षण',
        shortSummary:
          'Classical blood purification techniques for severe chronic skin diseases, localized toxic stagnation, and inflammatory disorders.',
        tags: ['Blood purification', 'Dermatology'],
        linkUrl: '/services/panchakarma/raktamokshana/',
        iconLetter: 'र',
      },
      {
        slug: 'swedan-steam-therapy',
        name: 'Swedan (Steam Therapy)',
        nameSanskrit: 'स्वेदन चिकित्सा',
        shortSummary:
          'Herbal steam bath and localized fomentation for muscle relaxation, stiffness, pain relief, and deep toxin release.',
        tags: ['Steam fomentation', 'Pain relief'],
        linkUrl: '/services/panchakarma/swedan-steam-therapy/',
        iconLetter: 'स्वे',
      },
    ],
    signaturesHeading: 'Signature therapies & specialised ',
    signaturesHeadingEm: 'hospital facilities.',
    signaturesLede:
      'Delivered in dedicated therapy suites under direct MS Ayurveda surgeon supervision.',
    signatures: [
      {
        badgeLetter: 'पं',
        eyebrow: 'Classical Detox',
        title: '5-Fold Panchakarma Suite',
        desc: 'Dedicated clinical purification rooms for Vamana, Virechana, Basti, Nasya, and Raktamokshana protocols with trained therapists.',
        features: ['Purvakarma Preparation', 'Pradhanakarma Procedures', 'Paschatkarma Diet', 'In-hospital Monitored Care'],
        linkText: 'Learn about Panchakarma',
        linkUrl: '/services/panchakarma/full-panchakarma/',
      },
      {
        badgeLetter: 'उ',
        eyebrow: 'Dual Specialty',
        title: 'Uttarbasti Therapy Suite',
        desc: 'High-precision intra-cavitary therapy: urethral strictures treated by Dr. Vipin, and fertility/tubal blockage treated by Dr. Swati.',
        features: ['Stricture Urethra Relief', 'Tubal Factor Infertility', 'Endometrial Receptivity', 'Aseptic Clinical OT'],
        linkText: 'Explore Uttarbasti',
        linkUrl: '/services/panchakarma/uttarbasti/',
      },
      {
        badgeLetter: 'ज',
        eyebrow: 'Para Surgical Bio-Purification',
        title: 'Jalauka (Leech) Therapy Suite',
        desc: 'Aseptic medical leech therapy for rapid relief of vascular congestion, non-healing ulcers, varicose veins, and localized inflammation.',
        features: ['Medical-grade Leeches', 'Aseptic Dressing', 'Rapid Decongestion', 'Tissue Salvage'],
        linkText: 'Explore Leech Therapy',
        linkUrl: '/services/panchakarma/jalauka-leech-therapy/',
      },
    ],
    specialistsSection: {
      heading: 'Both specialists, ',
      headingEm: 'consulting daily.',
      lede: 'Panchakarma regimens are directly designed and supervised by MS Ayurveda surgeons.',
      doctorSlugs: ['dr-vipin', 'dr-swati'],
    },
    faqsHeading: 'Frequently asked questions about ',
    faqsHeadingEm: 'Panchakarma therapy.',
    faqsLede: 'Honest answers on how classical Panchakarma detoxification works and what to expect.',
    faqs: [
      {
        question: 'How long does a Panchakarma treatment take?',
        answer:
          'A targeted procedure course (like Basti or Kati Basti) typically takes 7 to 14 days. A comprehensive full Panchakarma detox program lasts 21 to 28 days with proper preparatory (Purvakarma) and restorative dietary (Samsarjana Krama) phases.',
      },
      {
        question: 'What is Uttarbasti and who performs it?',
        answer:
          'Uttarbasti is an advanced classical procedure where sterile medicated ghee or oil is administered into the urinary or reproductive tract. At our hospital, male urethral stricture cases are performed by Dr. Vipin Tongale, while gynaecological and infertility cases are performed privately by Dr. Swati Tongale.',
      },
      {
        question: 'Is Jalauka (Leech Therapy) safe and hygienic?',
        answer:
          'Yes. We use medically bred, single-use, purified medicinal leeches (Jalauka) in an aseptic hospital environment. It provides natural anticoagulant enzymes that rapidly relieve localised vascular congestion, varicose stasis, and non-healing ulcers.',
      },
      {
        question: 'Is hospital admission required for Panchakarma?',
        answer:
          'Most Panchakarma procedures (Basti, Nasya, Leech therapy, localized therapies) can be taken on a day-care OPD basis with daily 60–90 minute sessions. For intensive full 5-fold purification, admission is available for comprehensive monitoring.',
      },
    ],
    medicallyReviewedBy:
      'Medically reviewed by Dr. Vipin Tongale (MS Shalya Tantra, PhD) & Dr. Swati Tongale (MS Shalya Tantra)',
    ctaDevanagari: 'आइए, मिलते हैं',
    ctaHeadline: 'Ready for authentic ',
    ctaHeadlineEm: 'Panchakarma care?',
    ctaLede:
      'Experience classical clinical Panchakarma grounded in diagnostic clarity and patient-first care.',
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
    signaturesHeading: 'Two specialised Ayurvedic units ',
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
        desc: 'Non-surgical Ayurvedic spine rehabilitation for sciatica, cervical spondylosis, and lumbar disc disease using localised Kati Basti, Greeva Basti, and herbal protocols.',
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
        linkUrl: '/services/female-care/female-proctology/',
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
        linkUrl: '/services/female-care/garbhasanskar-antenatal-care/',
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

  'ayurveda-panchakarma': {
    slug: 'ayurveda-panchakarma',
    canonicalSlug: 'ayurveda-panchakarma',
    name: 'Ayurveda & Panchakarma Unit',
    nameSanskrit: 'आयुर्वेद व पंचकर्म शोधन',
    themeColor: 'gold',
    metaTitle: 'Ayurveda & Panchakarma Unit Amravati | Shri Manmukund Hospital',
    metaDescription:
      'Classical Ayurvedic medicine and five-fold Panchakarma therapies in Amravati by MS Ayurveda specialists. Chronic diseases, spine care, skin diseases, Uttarbasti, and full detox regimens.',
    eyebrow: 'Classical Traditional Medicine',
    eyebrowBadge: 'Specialist Unit',
    heroHeadline: 'Classical Ayurveda & Panchakarma, ',
    heroHeadlineEm: 'delivered with clinical rigour.',
    heroSubheadline:
      'Authentic classical Ayurvedic treatments and five-fold Panchakarma purification protocols delivered by MS Ayurveda Shalya Tantra specialists in a modern hospital setting. Serious clinical medicine, not wellness spa.',
    primaryCtaText: 'Book a consultation',
    primaryCtaUrl: '/contact/#book',
    secondaryCtaText: 'Explore disciplines',
    secondaryCtaUrl: '#conditions',
    heroStatNum: '15',
    heroStatSmall: '+',
    heroStatLabel: 'Years Clinical Experience',
    heroStatDesc: 'Grounded in classical Ayurvedic texts, modern diagnostics, and honest clinical practice.',
    answerFirstSummary:
      'The Ayurveda & Panchakarma Department at Shri Manmukund Hospital combines classical internal medicine and structured hospital-based purification therapies under one roof. Directed directly by MS Ayurveda specialists Dr. Vipin Tongale and Dr. Swati Tongale, patients receive individualised care for chronic diseases through our Clinical Ayurveda Unit, or targeted bio-purification through our dedicated 5-Fold Panchakarma Suite.',
    tiersHeading: 'Four clinical pillars of our ',
    tiersHeadingEm: 'Ayurveda & Panchakarma practice.',
    tiersLede:
      'Evidence-grounded, classical protocols combined with modern diagnostic clarity.',
    tiers: [
      {
        num: '01',
        tierLabel: 'Foundation',
        title: 'Classical Textual Root',
        desc: 'Treatment principles derived directly from Sushruta Samhita, Charaka Samhita, and authentic pharmacopoeial formulations.',
        whenApplied: 'Chronic conditions · Constitutional analysis',
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
        title: '5-Fold Panchakarma Therapies',
        desc: 'Supervised hospital-based detoxification (Vamana, Virechana, Basti, Nasya, Raktamokshana) delivered with dedicated therapist care.',
        whenApplied: 'Deep tissue cleansing · Autoimmune & skin',
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
      'Ayurvedic and Panchakarma therapies work through structured root-cause correction. We set clinical expectations honestly from day one.',
    conditionsSectionTitle: 'Disciplines & therapies ',
    conditionsSectionTitleEm: 'under one roof.',
    conditionsSectionLede:
      'Structured between Clinical Ayurvedic disease management and dedicated hospital-based Panchakarma bio-purification procedures.',
    conditions: [
      {
        slug: 'vata-vikar',
        name: 'Vata Vikar (Vata Disorders)',
        nameSanskrit: 'वात विकार',
        shortSummary:
          'Systemic management for neurological disorders, degenerative joint diseases, chronic pain, stiffness, and tremors.',
        tags: ['Ayurveda Medicine', 'Joint & Nerve'],
        linkUrl: '/services/ayurveda/vata-vikar/',
        iconLetter: 'वा',
      },
      {
        slug: 'skin-disease',
        name: 'Skin Diseases (Ayurvedic Care)',
        nameSanskrit: 'कुष्ठ व त्वचा विकार',
        shortSummary:
          'Classical blood purification, herbal decoctions, and dietary correction for eczema, psoriasis, and chronic dermatitis.',
        tags: ['Ayurveda Medicine', 'Dermatology'],
        linkUrl: '/services/ayurveda/skin-disease/',
        iconLetter: 'त्व',
      },
      {
        slug: 'hyperacidity-amlapitta',
        name: 'Hyperacidity (Amlapitta)',
        nameSanskrit: 'अम्लपित्त',
        shortSummary:
          'Root-cause management for chronic acid reflux, heartburn, GERD, and Pitta metabolic imbalances through herbal remedies and diet.',
        tags: ['Ayurveda Medicine', 'Pitta Balance'],
        linkUrl: '/services/ayurveda/hyperacidity-amlapitta/',
        iconLetter: 'अम्ल',
      },
      {
        slug: 'weight-management',
        name: 'Weight Management (Medoroga)',
        nameSanskrit: 'मेदोविकार चिकित्सा',
        shortSummary:
          'Individualised metabolic reset using classical Medoroga therapies, Udwartanam, herbal teas, and sustainable lifestyle corrections.',
        tags: ['Ayurveda Medicine', 'Metabolic Reset'],
        linkUrl: '/services/ayurveda/weight-management/',
        iconLetter: 'मे',
      },
      {
        slug: 'full-panchakarma',
        name: 'Full Panchakarma Programme',
        nameSanskrit: 'पंचकर्म संपूर्ण शोधन',
        shortSummary:
          'Comprehensive classical 5-fold seasonal and therapeutic body purification and metabolic reset in a dedicated hospital setting.',
        tags: ['Panchakarma Procedure', '5-Fold Detox'],
        linkUrl: '/services/panchakarma/full-panchakarma/',
        iconLetter: 'पं',
      },
      {
        slug: 'basti',
        name: 'Basti (Medicated Enema Therapy)',
        nameSanskrit: 'बस्ति चिकित्सा',
        shortSummary:
          'The crown jewel of Panchakarma for Vata disorders, chronic constipation, sciatica, and lower back degeneration.',
        tags: ['Panchakarma Procedure', 'Vata Pacification'],
        linkUrl: '/services/panchakarma/basti/',
        iconLetter: 'ब',
      },
      {
        slug: 'uttarbasti',
        name: 'Uttarbasti Therapy',
        nameSanskrit: 'उत्तरबस्ति',
        shortSummary:
          'Specialised intra-cavitary therapy for urethral strictures (led by Dr. Vipin) and female infertility / tubal blockages (led by Dr. Swati).',
        tags: ['Panchakarma Procedure', 'Stricture & Fertility'],
        linkUrl: '/services/panchakarma/uttarbasti/',
        iconLetter: 'उ',
      },
      {
        slug: 'jalauka-leech-therapy',
        name: 'Jalauka (Leech Therapy)',
        nameSanskrit: 'जलौकावचारण',
        shortSummary:
          'Therapeutic bio-purification for localised vascular stasis, varicose veins, thrombosed veins, and non-healing ulcers.',
        tags: ['Panchakarma Procedure', 'Vascular Stasis'],
        linkUrl: '/services/panchakarma/jalauka-leech-therapy/',
        iconLetter: 'ज',
      },
    ],
    conditionGroups: [
      {
        eyebrow: 'Clinical Medicine (Kaya Chikitsa)',
        title: 'Clinical Ayurveda (Chronic Disease Management)',
        lede: 'Targeted internal herbal medicine, dietary correction, and metabolic reset for chronic constitutional ailments.',
        conditions: [
          {
            slug: 'vata-vikar',
            name: 'Vata Vikar (Vata Disorders)',
            nameSanskrit: 'वात विकार',
            shortSummary:
              'Systemic management for neurological disorders, degenerative joint diseases, chronic pain, stiffness, and tremors.',
            tags: ['Ayurveda Medicine', 'Joint & Nerve'],
            linkUrl: '/services/ayurveda/vata-vikar/',
            iconLetter: 'वा',
          },
          {
            slug: 'skin-disease',
            name: 'Skin Diseases (Ayurvedic Care)',
            nameSanskrit: 'कुष्ठ व त्वचा विकार',
            shortSummary:
              'Classical blood purification, herbal decoctions, and dietary correction for eczema, psoriasis, and chronic dermatitis.',
            tags: ['Ayurveda Medicine', 'Dermatology'],
            linkUrl: '/services/ayurveda/skin-disease/',
            iconLetter: 'त्व',
          },
          {
            slug: 'hyperacidity-amlapitta',
            name: 'Hyperacidity (Amlapitta)',
            nameSanskrit: 'अम्लपित्त',
            shortSummary:
              'Root-cause management for chronic acid reflux, heartburn, GERD, and Pitta metabolic imbalances through herbal remedies and diet.',
            tags: ['Ayurveda Medicine', 'Pitta Balance'],
            linkUrl: '/services/ayurveda/hyperacidity-amlapitta/',
            iconLetter: 'अम्ल',
          },
          {
            slug: 'weight-management',
            name: 'Weight Management (Medoroga)',
            nameSanskrit: 'मेदोविकार चिकित्सा',
            shortSummary:
              'Individualised metabolic reset using classical Medoroga therapies, Udwartanam, herbal teas, and sustainable lifestyle corrections.',
            tags: ['Ayurveda Medicine', 'Metabolic Reset'],
            linkUrl: '/services/ayurveda/weight-management/',
            iconLetter: 'मे',
          },
        ],
      },
      {
        eyebrow: 'Bio-Purification (Shodhana Chikitsa)',
        title: 'Panchakarma Therapies (Purification Procedures)',
        lede: 'Dedicated hospital-based bio-cleansing and intra-cavitary procedures performed under direct MS specialist supervision.',
        conditions: [
          {
            slug: 'full-panchakarma',
            name: 'Full Panchakarma Programme',
            nameSanskrit: 'पंचकर्म संपूर्ण शोधन',
            shortSummary:
              'Comprehensive classical 5-fold seasonal and therapeutic body purification and metabolic reset in a dedicated hospital setting.',
            tags: ['Panchakarma Procedure', '5-Fold Detox'],
            linkUrl: '/services/panchakarma/full-panchakarma/',
            iconLetter: 'पं',
          },
          {
            slug: 'basti',
            name: 'Basti (Medicated Enema Therapy)',
            nameSanskrit: 'बस्ति चिकित्सा',
            shortSummary:
              'The crown jewel of Panchakarma for Vata disorders, chronic constipation, sciatica, and lower back degeneration.',
            tags: ['Panchakarma Procedure', 'Vata Pacification'],
            linkUrl: '/services/panchakarma/basti/',
            iconLetter: 'ब',
          },
          {
            slug: 'uttarbasti',
            name: 'Uttarbasti Therapy',
            nameSanskrit: 'उत्तरबस्ति',
            shortSummary:
              'Specialised intra-cavitary therapy for urethral strictures (led by Dr. Vipin) and female infertility / tubal blockages (led by Dr. Swati).',
            tags: ['Panchakarma Procedure', 'Stricture & Fertility'],
            linkUrl: '/services/panchakarma/uttarbasti/',
            iconLetter: 'उ',
          },
          {
            slug: 'jalauka-leech-therapy',
            name: 'Jalauka (Leech Therapy)',
            nameSanskrit: 'जलौकावचारण',
            shortSummary:
              'Therapeutic bio-purification for localised vascular stasis, varicose veins, thrombosed veins, and non-healing ulcers.',
            tags: ['Panchakarma Procedure', 'Vascular Stasis'],
            linkUrl: '/services/panchakarma/jalauka-leech-therapy/',
            iconLetter: 'ज',
          },
        ],
      },
    ],
    signaturesHeading: 'Three clinical units ',
    signaturesHeadingEm: 'operating daily.',
    signaturesLede:
      'Explore our dedicated Clinical Ayurveda Unit for disease management, our 5-Fold Panchakarma Suite for bio-purification, and our non-surgical Spine Care Unit.',
    signatures: [
      {
        badgeLetter: 'आ',
        eyebrow: 'Clinical Internal Medicine',
        title: 'Clinical Ayurveda Unit',
        desc: 'Evidence-grounded classical Ayurvedic treatment for chronic diseases: Vata Disorders (Vata Vikar), Skin Diseases, Hyperacidity (Amlapitta), Medoroga, Suvarna Prashan, and Non-Healing Wounds.',
        features: ['Vata Vikar', 'Skin Diseases', 'Hyperacidity', 'Wound Management', 'Suvarna Prashan'],
        linkText: 'Explore Ayurveda Unit',
        linkUrl: '/services/ayurveda/',
      },
      {
        badgeLetter: 'पं',
        eyebrow: 'Classical Bio-Purification',
        title: 'Panchakarma Unit',
        desc: 'Dedicated hospital-based 5-fold purification suites: Vamana, Virechana, Basti (Medicated Enema), Nasya, and Raktamokshana, plus specialized Uttarbasti and Leech Therapy (Jalauka).',
        features: ['5-Fold Detox', 'Basti Therapy', 'Uttarbasti Suite', 'Jalauka (Leech)', 'Virechana'],
        linkText: 'Explore Panchakarma Hub',
        linkUrl: '/services/panchakarma/',
      },
      {
        badgeLetter: 'मे',
        eyebrow: 'Spine & Joints',
        title: 'Spine Care Unit',
        desc: 'Non-surgical classical Ayurvedic spine rehabilitation for sciatica, cervical and lumbar disc compression with targeted Kati Basti, Greeva Basti, and herbal protocols.',
        features: ['Kati Basti', 'Greeva Basti', 'Sciatica Protocol', 'Pinda Sweda'],
        linkText: 'Explore Spine Care Unit',
        linkUrl: '/services/spine-care/',
        isLaser: true,
      },
    ],
    specialistsSection: {
      heading: 'Both specialists, ',
      headingEm: 'consulting daily.',
      lede: 'Consultations, constitutional evaluations, and Panchakarma regimens are directly designed and supervised by MS Ayurveda surgeons.',
      doctorSlugs: ['dr-vipin', 'dr-swati'],
    },
    faqsHeading: 'Frequently asked questions about ',
    faqsHeadingEm: 'Ayurveda & Panchakarma.',
    faqsLede: 'Honest answers on how classical Ayurvedic therapy and Panchakarma work.',
    faqs: [
      {
        question: 'What is the difference between the Ayurveda Unit and Panchakarma Unit?',
        answer:
          'The Ayurveda Unit focuses on diagnosis, internal herbal formulations, diet, and lifestyle protocols for chronic conditions (like Vata disorders, acidity, skin disease). The Panchakarma Unit provides hospital-based, procedural bio-cleansing therapies (like Basti, Virechana, Vamana, Uttarbasti, Leech therapy) to physically eliminate deep-seated toxins.',
      },
      {
        question: 'Can Ayurvedic treatment be taken alongside modern medications?',
        answer:
          'Yes. We evaluate your current prescriptions (e.g. for diabetes, hypertension, thyroid) and ensure there are no adverse drug interactions. We never ask patients to stop essential life-saving modern medicines abruptly.',
      },
      {
        question: 'How long does a Panchakarma treatment take?',
        answer:
          'A targeted procedure course (like Basti or Kati Basti) typically takes 7 to 14 days. A comprehensive full Panchakarma detox program lasts 21 to 28 days with proper preparatory (Purvakarma) and restorative dietary (Samsarjana Krama) phases.',
      },
    ],
    medicallyReviewedBy:
      'Medically reviewed by Dr. Vipin Tongale (MS Shalya Tantra, PhD) & Dr. Swati Tongale (MS Shalya Tantra)',
    ctaDevanagari: 'आइए, मिलते हैं',
    ctaHeadline: 'Ready for authentic ',
    ctaHeadlineEm: 'Ayurveda & Panchakarma care?',
    ctaLede:
      'Experience classical clinical Ayurveda and authentic Panchakarma grounded in diagnostic clarity and patient-first care.',
    ctaPrimaryText: 'Book a consultation',
    ctaPrimaryUrl: '/contact/#book',
  },

  'specialty-care': {
    slug: 'specialty-care',
    canonicalSlug: 'specialty-care',
    name: 'Specialty Care Units',
    nameSanskrit: 'विशेष चिकित्सा विभाग',
    themeColor: 'sage',
    metaTitle: 'Specialty Care Units Amravati | Shri Manmukund Hospital',
    metaDescription:
      'Specialised clinical units in Amravati for female care, non-surgical spine care, and paediatric Ayurvedic care led by MS Ayurveda specialists.',
    eyebrow: 'Specialised Departments',
    eyebrowBadge: 'Specialist Units',
    heroHeadline: 'Specialty Care Units, tailored ',
    heroHeadlineEm: 'for specific patient needs.',
    heroSubheadline:
      'Dedicated sub-specialty units providing compassionate women-focused care, non-surgical spine rehabilitation, and paediatric care under qualified MS Ayurveda specialists.',
    primaryCtaText: 'Book a consultation',
    primaryCtaUrl: '/contact/#book',
    secondaryCtaText: 'Explore units',
    secondaryCtaUrl: '#conditions',
    heroStatNum: '15',
    heroStatSmall: '+',
    heroStatLabel: 'Years Specialist Experience',
    heroStatDesc: 'Delivered in dedicated private clinical spaces with specialist doctor attention throughout.',
    answerFirstSummary:
      'The Specialty Care Units at Shri Manmukund Hospital house specialized clinical practices including our Female Specialty Care Unit led by Dr. Swati Tongale, our Spine Care Unit offering non-surgical rehabilitation, and our Child Health and Diabetic Wound Care services.',
    tiersHeading: 'Three pillars of our ',
    tiersHeadingEm: 'Specialty Care Units.',
    tiersLede:
      'Focus areas designed to address specific patient barriers with dignity, privacy, and clinical expertise.',
    tiers: [
      {
        num: '01',
        tierLabel: 'Female Care',
        title: 'Complete Female Privacy & Dignity',
        desc: 'Female proctology, Uttarbasti for infertility, and Garbhsanskara conducted exclusively by female surgeon Dr. Swati Tongale with female staff.',
        whenApplied: 'Female proctology · Infertility · Antenatal care',
        linkText: 'Explore Female Care Unit →',
        linkUrl: '/services/female-care/',
      },
      {
        num: '02',
        tierLabel: 'Spine Care',
        title: 'Non-Surgical Spine Rehabilitation',
        desc: 'Kati Basti, Greeva Basti, and classical Ayurvedic protocols for disc herniations, sciatica, and cervical spondylosis without surgery.',
        whenApplied: 'Sciatica · Disc bulges · Spondylosis',
        linkText: 'Explore Spine Care Unit →',
        linkUrl: '/services/spine-care/',
      },
      {
        num: '03',
        tierLabel: 'Paediatric & Wounds',
        title: 'Paediatric Care & Tissue Salvage',
        desc: 'Monthly Pushya Nakshatra Suvarna Prashan for child immunity, and specialized Ayurvedic tissue regeneration for non-healing diabetic wounds.',
        whenApplied: 'Child immunity · Diabetic ulcers · Tissue salvage',
        linkText: 'Explore Diabetic Wound Management →',
        linkUrl: '/services/specialty-care/diabetic-wound-management/',
        links: [
          {
            text: 'Explore Diabetic Wound Management →',
            url: '/services/specialty-care/diabetic-wound-management/',
          },
          {
            text: 'Explore Child Care & Immunity →',
            url: '/services/specialty-care/child-care/',
          },
        ],
      },
    ],
    tiersNote:
      'All specialty procedures are performed directly by our senior consultants in dedicated, sanitized clinical spaces.',
    conditionsSectionTitle: 'Specialised care areas ',
    conditionsSectionTitleEm: 'managed under one roof.',
    conditionsSectionLede:
      'Explore conditions treated across our female specialty, spine care, and specialised clinical units.',
    conditions: [
      {
        slug: 'female-proctology',
        name: 'Female Proctology',
        nameSanskrit: 'महिला गुदविकार',
        shortSummary:
          'Gentle, private examination and surgical care of piles, fissure, and fistula by female specialist Dr. Swati Tongale.',
        tags: ['Female Care', 'Dr. Swati'],
        linkUrl: '/services/female-care/female-proctology/',
        iconLetter: 'महि',
      },
      {
        slug: 'uttarbasti-for-infertility',
        name: 'Uttarbasti for Infertility',
        nameSanskrit: 'उत्तरबस्ती वंध्यत्व चिकित्सा',
        shortSummary:
          'Classical Ayurvedic intrauterine protocol for tubal factor infertility, thin endometrium, and recurrent IVF failures.',
        tags: ['Female Care', 'Infertility'],
        linkUrl: '/services/female-care/uttarbasti-for-infertility/',
        iconLetter: 'उ',
      },
      {
        slug: 'sciatica',
        name: 'Sciatica (Gridhrasi)',
        nameSanskrit: 'गृध्रसी',
        shortSummary:
          'Targeted non-surgical Ayurvedic treatment for sharp shooting leg pain, lumbar disc bulges, and nerve compression.',
        tags: ['Spine Care', 'Kati Basti'],
        linkUrl: '/services/spine-care/sciatica/',
        iconLetter: 'मे',
      },
      {
        slug: 'cervical-spondylosis',
        name: 'Cervical Spondylosis',
        nameSanskrit: 'ग्रीवागत वात',
        shortSummary:
          'Relief from chronic neck stiffness, radiating arm numbness, and vertigo using Greeva Basti and herbal medicines.',
        tags: ['Spine Care', 'Greeva Basti'],
        linkUrl: '/services/spine-care/cervical-spondylosis/',
        iconLetter: 'ग्री',
      },
      {
        slug: 'suvarna-prashan',
        name: 'Suvarna Prashan (Child Immunity)',
        nameSanskrit: 'सुवर्ण प्राशन',
        shortSummary:
          'Monthly administration of 24k gold bhasma on Pushya Nakshatra for child brain development and immunity.',
        tags: ['Paediatric', 'Pushya Nakshatra'],
        linkUrl: '/services/ayurveda/suvarna-prashan/',
        iconLetter: 'सु',
      },
      {
        slug: 'child-care',
        name: 'Child Care (Paediatric Ayurveda)',
        nameSanskrit: 'कौमारभृत्य',
        shortSummary:
          'Paediatric Ayurvedic care for common childhood ailments, recurrent respiratory infections, digestion, and developmental support.',
        tags: ['Paediatrics', 'Kaumarbhritya'],
        linkUrl: '/services/specialty-care/child-care/',
        iconLetter: 'बा',
      },
      {
        slug: 'diabetic-wound-management',
        name: 'Diabetic Wound Management',
        nameSanskrit: 'मधुमेह व्रण',
        shortSummary:
          'Specialised tissue salvage protocols for chronic ulcerations and diabetic foot wounds preventing amputation.',
        tags: ['Wound Care', 'Limb Salvage'],
        linkUrl: '/services/specialty-care/diabetic-wound-management/',
        iconLetter: 'दु',
      },
    ],
    signaturesHeading: 'Three dedicated specialty units ',
    signaturesHeadingEm: 'operating daily.',
    signaturesLede:
      'Direct access to specialist doctors with complete clinical privacy and dedicated equipment.',
    signatures: [
      {
        badgeLetter: 'ऋ',
        eyebrow: 'Led by Dr. Swati',
        title: 'Female Care Unit',
        desc: 'Private female proctology, Uttarbasti for infertility & tubal blockages, Masanumasik Garbhsanskara, and postnatal care.',
        features: ['Female Proctology', 'Uttarbasti for Infertility', 'Garbhsanskara', 'Sutika Paricharya'],
        linkText: 'Explore Female Care',
        linkUrl: '/services/female-care/',
      },
      {
        badgeLetter: 'मे',
        eyebrow: 'Non-Surgical Spine',
        title: 'Spine Care Unit',
        desc: 'Targeted Ayurvedic spine rehabilitation for sciatica, cervical spondylosis, and lumbar disc disease using warm herbal therapies (Kati Basti, Greeva Basti, Janu Basti).',
        features: ['Kati Basti', 'Greeva Basti', 'Sciatica Protocol', 'Spondylosis Care'],
        linkText: 'Explore Spine Care',
        linkUrl: '/services/spine-care/',
        isLaser: true,
      },
      {
        badgeLetter: 'बा',
        eyebrow: 'Specialized Clinical Care',
        title: 'Paediatric & Diabetic Wound Care',
        desc: 'Monthly Suvarna Prashan drops for child immunity, gentle paediatric Ayurvedic care, and limb-salvage protocols for non-healing diabetic wounds.',
        features: ['Suvarna Prashan', 'Paediatric Care', 'Diabetic Foot Salvage', 'Aseptic Dressing'],
        linkText: 'Explore Specialty Care',
        linkUrl: '/services/specialty-care/',
      },
    ],
    specialistsSection: {
      heading: 'Both specialists, ',
      headingEm: 'consulting daily.',
      lede: 'Specialty units are led personally by Dr. Vipin Tongale and Dr. Swati Tongale.',
      doctorSlugs: ['dr-vipin', 'dr-swati'],
    },
    faqsHeading: 'Frequently asked questions about ',
    faqsHeadingEm: 'our specialty units.',
    faqsLede: 'Common questions on appointments and specialised treatment options.',
    faqs: [
      {
        question: 'How do I book an appointment with Dr. Swati for female care?',
        answer:
          'You can book online, call 8208927917, or message us on WhatsApp. Simply specify that you wish to consult with Dr. Swati Tongale.',
      },
      {
        question: 'Can spine disc problems really be treated without surgery?',
        answer:
          'Yes, over 80% of lumbar and cervical disc conditions respond very well to conservative Ayurvedic therapy (Kati Basti, Greeva Basti, Matra Basti, and internal anti-inflammatory formulations) without surgical intervention.',
      },
    ],
    medicallyReviewedBy:
      'Medically reviewed by Dr. Vipin Tongale (MS Shalya Tantra, PhD) & Dr. Swati Tongale (MS Shalya Tantra)',
    ctaDevanagari: 'आइए, मिलते हैं',
    ctaHeadline: 'Ready for specialised ',
    ctaHeadlineEm: 'clinical care?',
    ctaLede:
      'Experience respectful, private, and evidence-grounded treatment tailored to your condition.',
    ctaPrimaryText: 'Book a consultation',
    ctaPrimaryUrl: '/contact/#book',
  },

  'spine-care': {
    slug: 'spine-care',
    canonicalSlug: 'spine-care',
    name: 'Spine Care Unit',
    nameSanskrit: 'मेरुदण्ड चिकित्सा',
    themeColor: 'indigo',
    metaTitle: 'Spine Care & Sciatica Treatment Amravati | Shri Manmukund Hospital',
    metaDescription:
      'Non-surgical Ayurvedic spine rehabilitation in Amravati for sciatica, lumbar spondylosis, cervical spondylosis, and disc herniation using Kati Basti and Panchakarma.',
    eyebrow: 'Non-Surgical Spine Unit',
    eyebrowBadge: 'Specialist Unit',
    heroHeadline: 'Non-Surgical Spine Care, chosen ',
    heroHeadlineEm: 'honestly for the case.',
    heroSubheadline:
      'Targeted classical Ayurvedic spine rehabilitation for sciatica, lumbar disc prolapse, cervical spondylosis, and chronic back pain using warm medicated herbal oil reservoirs and classical therapies.',
    primaryCtaText: 'Book a consultation',
    primaryCtaUrl: '/contact/#book',
    secondaryCtaText: 'Explore spine therapies',
    secondaryCtaUrl: '#conditions',
    heroStatNum: '15',
    heroStatSmall: '+',
    heroStatLabel: 'Years Spine Care Practice',
    heroStatDesc: 'Over 80% of patients achieve long-term pain relief without surgical spine intervention.',
    answerFirstSummary:
      'The Spine Care Unit at Shri Manmukund Hospital provides comprehensive, non-surgical Ayurvedic therapy for degenerative and compressive spinal conditions: sciatica (Gridhrasi), lumbar disc prolapse, cervical spondylosis, and chronic back spasm. Led by MS Ayurveda surgeons, treatment combines targeted oil pooling (Kati Basti, Greeva Basti, Janu Basti) with specialized Basti regimens and internal nerve-strengthening medicines.',
    tiersHeading: 'Four pillars of our ',
    tiersHeadingEm: 'spine care protocol.',
    tiersLede:
      'Structured rehabilitation aimed at reducing nerve inflammation, nourishing disc tissue, and restoring mobility.',
    tiers: [
      {
        num: '01',
        tierLabel: 'Diagnosis',
        title: 'Diagnostic & MRI Assessment',
        desc: 'Clinical neurological examination correlated with MRI lumbar/cervical spine imaging to assess the exact degree of root compression.',
        whenApplied: 'Sciatica · Disc prolapse · Spondylosis',
      },
      {
        num: '02',
        tierLabel: 'Oil Pooling',
        title: 'Kati Basti & Greeva Basti',
        desc: 'Retention of warm, medicated herbal oils in a herbal dough ring over the affected spinal segment for deep transdermal tissue nourishment.',
        whenApplied: 'Lumbosacral pain · Cervical stiffness · Disc bulges',
        linkText: 'Explore Kati Basti →',
        linkUrl: '/services/spine-care/kati-basti/',
      },
      {
        num: '03',
        tierLabel: 'Systemic Care',
        title: 'Targeted Basti Panchakarma',
        desc: 'Classical medicated enema series (Matra Basti, Tikta Ksheera Basti) to pacify aggravated Vata dosha at its root seat in the pelvic girdle.',
        whenApplied: 'Radiating sciatica · Chronic degenerative spine',
        linkText: 'Explore Basti Therapy →',
        linkUrl: '/services/panchakarma/basti/',
      },
      {
        num: '04',
        tierLabel: 'Rehab',
        title: 'Postural & Lifestyle Rehabilitation',
        desc: 'Strengthening exercises, ergonomic corrections, and long-term joint health guidance to prevent recurrence.',
        whenApplied: 'Long-term maintenance · Post-pain recovery',
      },
    ],
    tiersNote:
      'If MRI or clinical examination indicates severe red-flag neurological deficits (cauda equina syndrome), we provide honest neurosurgical referrals immediately.',
    conditionsSectionTitle: 'Spine conditions handled ',
    conditionsSectionTitleEm: 'under one roof.',
    conditionsSectionLede:
      'From acute sciatica nerve compression to chronic cervical stiffness, treated without surgery.',
    conditions: [
      {
        slug: 'sciatica',
        name: 'Sciatica (Gridhrasi)',
        nameSanskrit: 'गृध्रसी',
        shortSummary:
          'Targeted Ayurvedic treatment for sharp, shooting leg pain, numbness, and lumbar disc compression.',
        tags: ['Sciatica', 'Kati Basti'],
        linkUrl: '/services/spine-care/sciatica/',
        iconLetter: 'मे',
      },
      {
        slug: 'lumbar-spondylosis',
        name: 'Lumbar Spondylosis',
        nameSanskrit: 'कटिगत वात',
        shortSummary:
          'Restorative therapy for lower back degeneration, disc space narrowing, and morning back stiffness.',
        tags: ['Lower Back', 'Degeneration'],
        linkUrl: '/services/spine-care/lumbar-spondylosis/',
        iconLetter: 'क',
      },
      {
        slug: 'cervical-spondylosis',
        name: 'Cervical Spondylosis',
        nameSanskrit: 'ग्रीवागत वात',
        shortSummary:
          'Non-surgical relief for neck pain, shoulder spasm, radiating arm numbness, and cervical headaches.',
        tags: ['Neck Pain', 'Greeva Basti'],
        linkUrl: '/services/spine-care/cervical-spondylosis/',
        iconLetter: 'ग्री',
      },
      {
        slug: 'kati-basti',
        name: 'Kati Basti Therapy',
        nameSanskrit: 'कटिबस्ति',
        shortSummary:
          'Continuous warm herbal oil pooling on the lower back to relieve disc compression and relax deep lumbar muscles.',
        tags: ['Warm Oil Pooling', 'Lumbosacral'],
        linkUrl: '/services/spine-care/kati-basti/',
        iconLetter: 'क',
      },
      {
        slug: 'greeva-basti',
        name: 'Greeva Basti Therapy',
        nameSanskrit: 'ग्रीवाबस्ति',
        shortSummary:
          'Specialised retention of medicated oil over the cervical vertebrae for neck stiffness, pain, and vertigo.',
        tags: ['Cervical Pooling', 'Spasm Relief'],
        linkUrl: '/services/spine-care/greeva-basti/',
        iconLetter: 'ग्री',
      },
    ],
    signaturesHeading: 'Two core spine therapies ',
    signaturesHeadingEm: 'delivered daily.',
    signaturesLede:
      'Non-invasive, deeply soothing classical procedures for rapid spine pain relief.',
    signatures: [
      {
        badgeLetter: 'क',
        eyebrow: 'Lumbar Spine Therapy',
        title: 'Kati Basti Therapy Suite',
        desc: 'Deep warm herbal oil retention on the lumbosacral spine providing rapid pain relief and disc rehydration for sciatica and spondylosis.',
        features: ['Medicated Herbal Oils', 'Deep Disc Nourishment', 'Spasm Relief', 'No Downtime'],
        linkText: 'Explore Kati Basti',
        linkUrl: '/services/spine-care/kati-basti/',
      },
      {
        badgeLetter: 'ग्री',
        eyebrow: 'Cervical Spine Therapy',
        title: 'Greeva Basti Therapy Suite',
        desc: 'Specialised cervical spine oil retention for chronic neck stiffness, vertigo, radiating arm pain, and cervical spondylosis.',
        features: ['Cervical Decompression', 'Relief from Numbness', 'Gentle & Non-invasive', 'Direct Doctor Oversight'],
        linkText: 'Explore Greeva Basti',
        linkUrl: '/services/spine-care/greeva-basti/',
        isLaser: true,
      },
    ],
    specialistsSection: {
      heading: 'Both specialists, ',
      headingEm: 'consulting daily.',
      lede: 'Spine evaluations and treatment plans are directed by MS Ayurveda surgeons.',
      doctorSlugs: ['dr-vipin', 'dr-swati'],
    },
    faqsHeading: 'Frequently asked questions about ',
    faqsHeadingEm: 'non-surgical spine care.',
    faqsLede: 'Clear, honest medical answers on our spine rehabilitation protocols.',
    faqs: [
      {
        question: 'Can Kati Basti help with severe disc slip and sciatica?',
        answer:
          'Yes. Kati Basti works by providing sustained heat and transdermal penetration of anti-inflammatory, Vata-pacifying herbal oils. Combined with internal medication and Matra Basti, it significantly reduces nerve root inflammation and promotes disc rehydration.',
      },
      {
        question: 'How many days of spine treatment are required?',
        answer:
          'A standard course of Kati Basti or Greeva Basti is 7 to 14 days, with daily 45-minute sessions. Most patients experience significant pain relief within 3 to 5 days.',
      },
    ],
    medicallyReviewedBy:
      'Medically reviewed by Dr. Vipin Tongale, MS (Ayurveda Shalya Tantra), PhD',
    ctaDevanagari: 'आइए, मिलते हैं',
    ctaHeadline: 'Ready for non-surgical ',
    ctaHeadlineEm: 'spine care?',
    ctaLede:
      'Experience effective, classical Ayurvedic spine therapy tailored to your MRI and clinical symptoms.',
    ctaPrimaryText: 'Book a consultation',
    ctaPrimaryUrl: '/contact/#book',
  },
};

// Aliases
SERVICE_HUBS['female-care-unit'] = SERVICE_HUBS['female-care'];

export function getServiceHubData(slug: string): ServiceHubData | undefined {
  return SERVICE_HUBS[slug];
}

export interface SymptomItem {
  icon: string;
  title: string;
  desc: string;
}

export interface GradeItem {
  badge: string;
  label: string;
  title: string;
  desc: string;
  treatment: string;
}

export interface DiagnosisStep {
  stepNum: string;
  icon: string;
  title: string;
  desc: string;
}

export interface TreatmentFact {
  label: string;
  value: string;
}

export interface TreatmentItem {
  tierNum: string;
  tierLabel: string;
  modifierClass?: string;
  title: string;
  suitability: string;
  desc: string;
  facts: TreatmentFact[];
  linkText: string;
  linkHref?: string;
}

export interface ExpectStep {
  stepNum: string;
  time: string;
  title: string;
  desc: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface RelatedConditionItem {
  icon: string;
  title: string;
  desc: string;
  linkText: string;
  href: string;
}

export interface ConditionDetailData {
  eyebrow: string;
  devanagari: string;
  titleMain: string;
  titleAccent: string;
  subtitle: string;
  lede: string;
  glance: {
    sanskrit: string;
    grades: string;
    commonIn: string;
    treatmentTier: string;
    recovery: string;
    consultation: string;
  };
  answerSummary: string;
  symptoms: {
    sectionTitle: string;
    sectionLede: string;
    items: SymptomItem[];
    warningTitle: string;
    warningBody: string;
  };
  grades: {
    sectionTag: string;
    sectionTitle: string;
    sectionLede: string;
    items: GradeItem[];
  };
  causes: {
    leadHeadline: string;
    leadParagraphs: string[];
    causesList: Array<{ title: string; desc: string }>;
  };
  diagnosis: {
    sectionTitle: string;
    sectionLede: string;
    steps: DiagnosisStep[];
  };
  treatments: {
    sectionTitle: string;
    sectionLede: string;
    items: TreatmentItem[];
  };
  expect: {
    sectionTitle: string;
    sectionLede: string;
    steps: ExpectStep[];
  };
  faqs: FAQItem[];
  related: RelatedConditionItem[];
}

export const PILES_DETAIL: ConditionDetailData = {
  eyebrow: 'Anorectal Care · Condition',
  devanagari: 'अर्श',
  titleMain: 'Piles & Haemorrhoid',
  titleAccent: 'Treatment',
  subtitle: 'Advanced care across all grades and severity, in Amravati',
  lede: 'Haemorrhoids, commonly called piles, affect nearly one in three adults at some point in their lives. Most cases are treatable without surgery when caught early. Even advanced cases have modern minimally invasive options. Here is what we do, and how we decide what is right for you.',
  glance: {
    sanskrit: 'Arsha (अर्श)',
    grades: 'I, II, III, IV',
    commonIn: 'Adults 30 – 60 years',
    treatmentTier: 'All four tiers offered',
    recovery: '1 day to 3 weeks',
    consultation: '30 – 45 minutes',
  },
  answerSummary:
    'Piles (also called haemorrhoids, or Arsha in Ayurveda) are swollen blood vessels in and around the anus. They are graded I through IV based on how much they prolapse. At Shri Manmukund Hospital, treatment is chosen based on grade and symptoms: conservative management for early grades, non-surgical OPD procedures like rubber band ligation and sclerotherapy for moderate cases, Ksharkarma or laser haemorrhoidoplasty for advanced grades, and conventional surgery only when clinically warranted. Most patients do not need surgery.',
  symptoms: {
    sectionTitle: 'What piles usually <em>look and feel like.</em>',
    sectionLede:
      'Not everyone experiences the same symptoms. If any two or more of these are present for more than a week, an examination is advisable.',
    items: [
      {
        icon: 'रु',
        title: 'Bleeding during passing stool',
        desc: 'Bright red blood on toilet paper, in the toilet bowl, or on the surface of the stool. Usually painless. Most common in Grade I.',
      },
      {
        icon: 'दु',
        title: 'Anal discomfort or pain',
        desc: 'Ranging from mild aching to sharp pain during or after bowel movement. May indicate thrombosed or strangulated piles.',
      },
      {
        icon: 'प्र',
        title: 'Prolapse or lump',
        desc: 'A lump felt or seen protruding from the anus. May reduce on its own (Grade II), need manual reduction (Grade III), or stay prolapsed (Grade IV).',
      },
      {
        icon: 'खु',
        title: 'Itching around anus',
        desc: 'Persistent itching in the perianal region, often worse at night. Related to mucus discharge from prolapsed piles.',
      },
      {
        icon: 'स्रा',
        title: 'Mucus discharge',
        desc: 'Wet feeling around the anus, staining of underwear, especially after bowel movements. Sign of prolapsed internal piles.',
      },
      {
        icon: 'भा',
        title: 'Feeling of incomplete evacuation',
        desc: 'Persistent sensation that the bowel is not fully emptied even after passing stool. Sign of larger internal haemorrhoids.',
      },
    ],
    warningTitle: 'When to see a doctor immediately',
    warningBody:
      'Bleeding is often assumed to be piles, but <strong>persistent or heavy bleeding, dark blood, weight loss, change in bowel habits, or bleeding without straining</strong> can indicate more serious conditions including colorectal cancer. Any rectal bleeding lasting more than a few days should be examined by a specialist. Do not self-diagnose.',
  },
  grades: {
    sectionTag: 'Understanding the Grades',
    sectionTitle: 'Piles are staged <em>I through IV.</em>',
    sectionLede:
      'Grading is based on prolapse behaviour, not on symptom severity. Correct grading is essential to choosing the right treatment.',
    items: [
      {
        badge: 'I',
        label: 'Mildest',
        title: 'Grade I',
        desc: 'Internal haemorrhoids that bleed but do not prolapse. Visible only on internal examination. Bleeding is the main symptom.',
        treatment: 'Conservative management, dietary correction, topical medications',
      },
      {
        badge: 'II',
        label: 'Moderate',
        title: 'Grade II',
        desc: 'Prolapse during straining but return on their own. Bleeding and discomfort. Often noticed only during bowel movement.',
        treatment: 'Rubber band ligation, sclerotherapy, conservative management',
      },
      {
        badge: 'III',
        label: 'Advanced',
        title: 'Grade III',
        desc: 'Prolapse during straining and require manual pushing back. Persistent bleeding, discomfort, and mucus discharge.',
        treatment: 'Ksharkarma, Laser Haemorrhoidoplasty (LHP), surgical options',
      },
      {
        badge: 'IV',
        label: 'Severe',
        title: 'Grade IV',
        desc: 'Permanently prolapsed, cannot be pushed back. Constant discomfort, bleeding, and risk of strangulation.',
        treatment: 'Laser Haemorrhoidoplasty, Haemorrhoidectomy, urgent care',
      },
    ],
  },
  causes: {
    leadHeadline: 'Increased pressure on rectal veins is the <em>underlying mechanism.</em>',
    leadParagraphs: [
      'Almost every risk factor for piles reduces down to one physiological problem: repeated or prolonged pressure on the veins in and around the anus. When this pressure exceeds what the veins can tolerate, they enlarge, weaken, and eventually prolapse.',
      'Not all risk factors are avoidable. Pregnancy and genetic predisposition are not modifiable. But most other factors can be addressed through simple changes, and doing so often prevents progression from mild to severe grades.',
    ],
    causesList: [
      {
        title: 'Chronic constipation.',
        desc: 'Straining during bowel movements is the single biggest contributor to piles.',
      },
      {
        title: 'Low-fibre diet.',
        desc: 'Insufficient fibre leads to harder stools and greater straining, damaging rectal veins.',
      },
      {
        title: 'Prolonged sitting.',
        desc: 'Especially on the toilet. Modern habits like scrolling on the phone during bowel movements are a major contributor.',
      },
      {
        title: 'Pregnancy.',
        desc: 'Both hormonal changes and physical pressure of the growing uterus contribute.',
      },
      {
        title: 'Heavy lifting.',
        desc: 'Occupational or gym-related straining that increases abdominal pressure.',
      },
      {
        title: 'Obesity.',
        desc: 'Increases baseline pressure on rectal veins.',
      },
      {
        title: 'Ageing.',
        desc: 'Weakening of connective tissue in the anal canal reduces natural support.',
      },
      {
        title: 'Genetic predisposition.',
        desc: 'Family history of piles substantially increases risk.',
      },
      {
        title: 'Chronic diarrhoea.',
        desc: 'Repeated bowel movements can also irritate and enlarge haemorrhoidal veins.',
      },
    ],
  },
  diagnosis: {
    sectionTitle: 'Four steps to confirm the <em>grade and cause.</em>',
    sectionLede:
      'Every consultation follows this same structure. Nothing is prescribed or planned before we have completed all four.',
    steps: [
      {
        stepNum: 'Step 01',
        icon: 'प्र',
        title: 'History',
        desc: 'Detailed discussion of symptoms, duration, family history, diet, and previous treatments.',
      },
      {
        stepNum: 'Step 02',
        icon: 'प',
        title: 'Physical Exam',
        desc: 'Perianal inspection and digital rectal examination in private. Completed with dignity and consent.',
      },
      {
        stepNum: 'Step 03',
        icon: 'यं',
        title: 'Proctoscopy',
        desc: 'If needed, a short in-clinic procedure to visualise internal haemorrhoids and confirm the grade.',
      },
      {
        stepNum: 'Step 04',
        icon: 'रि',
        title: 'Investigation',
        desc: 'Blood tests or colonoscopy if red flags are present. Ruled out before piles diagnosis is finalised.',
      },
    ],
  },
  treatments: {
    sectionTitle: 'Five paths, chosen by <em>your specific case.</em>',
    sectionLede:
      'This is the full range we offer. The right choice for you will be decided together after your examination, not before it.',
    items: [
      {
        tierNum: 'Tier 1',
        tierLabel: 'First Line',
        title: 'Conservative Management',
        suitability: 'Best suited for: Grade I piles, early symptoms, prevention of progression',
        desc: 'Dietary correction (high fibre, adequate water intake), stool softeners, sitz baths, topical medications, and specific lifestyle adjustments. This is where every patient starts, regardless of grade, because it addresses the underlying cause. For Grade I patients, conservative management alone often resolves the problem completely.',
        facts: [
          { label: 'Duration', value: '4 – 8 weeks' },
          { label: 'Cost', value: 'Minimal' },
          { label: 'Effectiveness', value: 'Grade I: 80%' },
        ],
        linkText: 'Read about conservative management',
        linkHref: '/knowledge/articles/piles-vs-fissure-vs-fistula-how-to-tell-them-apart/',
      },
      {
        tierNum: 'Tier 2',
        tierLabel: 'Non-Surgical OPD',
        modifierClass: 'treatment-card--nonsurgical',
        title: 'Rubber Band Ligation & Sclerotherapy',
        suitability: 'Best suited for: Grade II and select Grade III piles, patients wanting no-surgery option',
        desc: 'Office-based procedures with no cuts, no stitches, no admission. Rubber band ligation places a small band at the base of the haemorrhoid to cut off its blood supply. Sclerotherapy uses an injection to achieve the same effect. Both procedures take 10 to 15 minutes. You walk in, get treated, and walk out.',
        facts: [
          { label: 'Duration', value: '10 – 15 min' },
          { label: 'Recovery', value: 'Same day' },
          { label: 'Effectiveness', value: 'Grade II–III: 85%' },
        ],
        linkText: 'Read about non-surgical options',
        linkHref: '/knowledge/articles/why-rectal-bleeding-should-never-be-ignored/',
      },
      {
        tierNum: 'Tier 3',
        tierLabel: 'Advanced Classical',
        modifierClass: 'treatment-card--ksharsutra',
        title: 'Ksharkarma (Ayurvedic Cauterisation)',
        suitability: 'Best suited for: Internal piles across grades, patients preferring classical approach',
        desc: "Ancient Ayurvedic parasurgical technique using medicated caustic paste (Kshara) applied to the base of internal haemorrhoids. Causes them to shrink and detach. Dr. Vipin's PhD research was on the safety and efficacy of Apamarga Kshara ointment for this exact indication. Excellent results for Grade II and III with minimal complications.",
        facts: [
          { label: 'Duration', value: '20 – 30 min' },
          { label: 'Recovery', value: '7 – 14 days' },
          { label: 'Effectiveness', value: 'Grade II–III: 90%+' },
        ],
        linkText: 'Read about Ksharkarma',
        linkHref: '/knowledge/articles/understanding-ksharsutra-in-simple-terms/',
      },
      {
        tierNum: 'Tier 3',
        tierLabel: 'Advanced Modern',
        modifierClass: 'treatment-card--laser',
        title: 'Laser Haemorrhoidoplasty (LHP)',
        suitability: 'Best suited for: Grade III and IV piles, patients wanting faster recovery',
        desc: 'Modern minimally invasive laser technique that shrinks haemorrhoids from within, without cutting or excision. Preserves the anal cushions (which serve an important physiological function). Performed under short anaesthesia. Most patients return to work within 3 to 5 days. Substantially less pain than conventional surgery.',
        facts: [
          { label: 'Duration', value: '30 – 45 min' },
          { label: 'Recovery', value: '3 – 7 days' },
          { label: 'Effectiveness', value: 'Grade III–IV: 90%' },
        ],
        linkText: 'Read about Laser Haemorrhoidoplasty',
        linkHref: '/knowledge/articles/laser-piles-surgery-what-it-is-what-it-is-not/',
      },
      {
        tierNum: 'Tier 4',
        tierLabel: 'Conventional',
        modifierClass: 'treatment-card--surgery',
        title: 'Surgical Haemorrhoidectomy',
        suitability: 'Best suited for: Selected Grade IV cases, thrombosis, complications',
        desc: 'Traditional surgical removal of haemorrhoidal tissue. Considered where less invasive options are not suitable, such as strangulated Grade IV piles, extensive thrombosis, or when previous treatments have failed. Requires 1 to 2 day hospital stay and 2 to 3 weeks of recovery. Used judiciously, not by default.',
        facts: [
          { label: 'Duration', value: '45 – 60 min' },
          { label: 'Recovery', value: '2 – 3 weeks' },
          { label: 'Effectiveness', value: 'Grade IV: 95%' },
        ],
        linkText: 'Read about surgical haemorrhoidectomy',
        linkHref: '/knowledge/playbooks/complete-recovery-after-piles-surgery/',
      },
    ],
  },
  expect: {
    sectionTitle: 'From first phone call to <em>full recovery.</em>',
    sectionLede:
      'A typical journey through our care pathway. Your specific pathway may differ based on grade, treatment chosen, and recovery.',
    steps: [
      {
        stepNum: '01',
        time: 'Day 1 · Consultation',
        title: 'First visit and examination',
        desc: '30 to 45 minutes. History taken, examination completed, grade determined. All treatment options honestly explained. No pressure to decide the same day.',
      },
      {
        stepNum: '02',
        time: 'Days 2 – 14 · Preparation',
        title: 'Planning your treatment',
        desc: 'Time to consult family, seek a second opinion, or reflect. Once decided, pre-procedure blood tests and dietary preparation are guided.',
      },
      {
        stepNum: '03',
        time: 'Day of Procedure',
        title: 'Treatment day',
        desc: 'Procedure performed as planned. Whether OPD, day-care, or admission is decided based on the technique chosen and your general health.',
      },
      {
        stepNum: '04',
        time: 'Days 3, 7, 14, 28 · Follow-up',
        title: 'Structured follow-up visits',
        desc: 'Scheduled reviews at day 3, 7, 14, and 28. Recovery monitored, wound care guided, dietary correction reinforced.',
      },
      {
        stepNum: '05',
        time: 'Day 42 · Discharge review',
        title: 'Full recovery review',
        desc: 'Final review at 6 weeks. Complete healing confirmed. Preventive plan given to avoid recurrence.',
      },
    ],
  },
  faqs: [
    {
      question: 'Do I necessarily need surgery for piles?',
      answer:
        '<p><strong>No, most patients do not.</strong> Grade I piles usually resolve with conservative management alone. Grade II and III often respond well to non-surgical office procedures like rubber band ligation, sclerotherapy, or Ksharkarma. Surgical haemorrhoidectomy is reserved for advanced Grade IV cases or complications like strangulation or extensive thrombosis. In our practice, roughly 60 to 70 percent of piles patients avoid surgery entirely.</p>',
    },
    {
      question: 'Is laser treatment for piles painful?',
      answer:
        '<p>Laser Haemorrhoidoplasty is performed under short anaesthesia, so there is no pain during the procedure. Post-procedure discomfort is significantly less than conventional surgery. Most patients report mild to moderate discomfort for 2 to 4 days, well managed with oral analgesics. Compared to traditional haemorrhoidectomy, laser recovery is substantially easier.</p>',
    },
    {
      question: 'What is Ksharkarma and how is it different from surgery?',
      answer:
        "<p><strong>Ksharkarma is a classical Ayurvedic parasurgical technique</strong> that uses a medicated caustic paste (Kshara) to shrink and detach internal haemorrhoids without cutting. Unlike surgery, there is no excision, no stitches, and no wound. The tissue simply falls off in 7 to 14 days as it heals internally.</p><p>Dr. Vipin's PhD research was on the safety and efficacy of Apamarga Kshara ointment for this exact indication. It is particularly effective for Grade II and III internal piles, with success rates comparable to modern techniques and less risk of anal stricture or sphincter damage.</p>",
    },
    {
      question: 'How long is the recovery from piles treatment?',
      answer:
        '<p>Recovery depends entirely on the treatment chosen:</p><p><strong>Rubber band ligation / sclerotherapy:</strong> Same day, back to normal activities in 24 hours.<br><strong>Ksharkarma:</strong> 7 to 14 days for full healing, mostly outpatient.<br><strong>Laser Haemorrhoidoplasty:</strong> 3 to 7 days back to work, 2 to 3 weeks full recovery.<br><strong>Surgical haemorrhoidectomy:</strong> 2 to 3 weeks minimum, sometimes longer.</p>',
    },
    {
      question: 'Can piles come back after treatment?',
      answer:
        '<p>Yes, piles can recur, though good treatment paired with preventive care substantially reduces this risk. Recurrence is most common when underlying causes (chronic constipation, straining, low fibre diet, prolonged toilet time) are not addressed. This is why we do not stop at removing the current piles: every patient receives a preventive care plan targeting the underlying cause, and we follow up at 42 days specifically to reinforce that plan.</p>',
    },
    {
      question: 'Are piles serious? Can they turn into cancer?',
      answer:
        '<p>Piles themselves do not turn into cancer. However, <strong>rectal bleeding is a symptom shared with more serious conditions</strong> including colorectal cancer. This is why we insist on proper examination for every case of bleeding, especially in patients over 40, patients with family history of colon cancer, or when bleeding is accompanied by weight loss, change in bowel habits, or dark blood. Never self-diagnose rectal bleeding as piles without professional examination.</p>',
    },
    {
      question: 'What is the cost of piles treatment?',
      answer:
        '<p>Costs vary widely based on the treatment chosen and grade of piles. Conservative management is minimal. Non-surgical office procedures are moderately priced. Ksharkarma and laser are in a similar mid-range band. Surgical haemorrhoidectomy involves admission costs. We are ROHINI registered and offer cashless treatment through partner insurance providers. Detailed cost estimates are provided at the consultation, not before, because they depend on your specific case.</p>',
    },
  ],
  related: [
    {
      icon: 'भ',
      title: 'Anal Fissure',
      desc: 'A small tear in the anal lining. Often confused with piles because both can cause bleeding and pain.',
      linkText: 'Read about fissure',
      href: '/services/anorectal-care/anal-fissure/',
    },
    {
      icon: 'भ',
      title: 'Anal Fistula',
      desc: 'An abnormal tunnel between anal canal and skin. Different mechanism from piles but similar location.',
      linkText: 'Read about fistula',
      href: '/services/anorectal-care/anal-fistula/',
    },
    {
      icon: 'गु',
      title: 'Rectal Prolapse',
      desc: 'Full rectum protruding through anus. Sometimes mistaken for advanced piles but requires different treatment.',
      linkText: 'Read about prolapse',
      href: '/services/anorectal-care/rectal-prolapse/',
    },
  ],
};

export const FISSURE_DETAIL: ConditionDetailData = {
  eyebrow: 'Anorectal Care · Condition',
  devanagari: 'परिकर्तिका',
  titleMain: 'Anal Fissure',
  titleAccent: 'Treatment',
  subtitle: 'Sphincter-preserving healing for acute and chronic fissures in Amravati',
  lede: 'An anal fissure is a small tear in the lining of the anal canal causing intense burning pain during and after bowel movements. With specialized Ayurvedic Matra Basti and precision laser techniques, over 90% of fissures heal completely without cut-surgery.',
  glance: {
    sanskrit: 'Parikartika (परिकर्तिका)',
    grades: 'Acute / Chronic',
    commonIn: 'All age groups, post-partum women',
    treatmentTier: 'Conservative to Laser Sphincterotomy',
    recovery: '3 days to 2 weeks',
    consultation: '30 – 45 minutes',
  },
  answerSummary:
    'Anal fissure is an ulcerated split in the anoderm caused by passing hard stools or chronic spasm of the internal anal sphincter. At Shri Manmukund Hospital, treatment focuses on relieving sphincter spasm and promoting rapid tissue healing. Early fissures respond excellently to high-fibre diet, sitz baths, and Ayurvedic Matra Basti with Jatyadi Taila. For chronic non-healing fissures with sentinel tags, diode laser sphincterotomy or gentle Ksharkarma offers instant pain relief with zero risk of incontinence.',
  symptoms: {
    sectionTitle: 'How an anal fissure <em>presents.</em>',
    sectionLede:
      'Sharp, cutting pain during bowel movements is the hallmark symptom. Recognizing early signs prevents transition into a chronic fissure.',
    items: [
      {
        icon: 'ती',
        title: 'Severe cutting pain',
        desc: 'Sharp, knife-like pain during stool passage that can persist as a throbbing ache for hours afterwards.',
      },
      {
        icon: 'रु',
        title: 'Streaks of bright red blood',
        desc: 'Fresh red blood seen on the surface of stool or toilet tissue, typically separate from stool mass.',
      },
      {
        icon: 'सं',
        title: 'Anal sphincter spasm',
        desc: 'Involuntary, painful clenching of the anal canal making subsequent bowel movements increasingly traumatic.',
      },
      {
        icon: 'म',
        title: 'Sentinel skin tag',
        desc: 'A small fleshy swelling or skin tag at the lower edge of the tear, indicating a chronic fissure.',
      },
      {
        icon: 'खु',
        title: 'Burning and itching',
        desc: 'Post-defecation irritation caused by acidic stool contact with raw mucosal nerve endings.',
      },
      {
        icon: 'भ',
        title: 'Fear of bowel movements',
        desc: 'Patients often delay toilet visits due to severe pain, creating a vicious cycle of harder stools.',
      },
    ],
    warningTitle: 'When to seek specialized care',
    warningBody:
      'If anal pain lasts more than an hour after defecation or persists beyond 2 weeks despite OTC ointments, you likely have a chronic fissure with high sphincter tone. Professional sphincter-preserving therapy is needed to prevent deep ulceration.',
  },
  grades: {
    sectionTag: 'Types & Staging',
    sectionTitle: 'Fissures are classified as <em>Acute or Chronic.</em>',
    sectionLede:
      'Understanding whether your fissure is fresh or chronic dictates whether medical or minimally invasive care is needed.',
    items: [
      {
        badge: 'A',
        label: 'Early Stage',
        title: 'Acute Fissure',
        desc: 'Fresh superficial tear with sharp margins. Present for less than 4 to 6 weeks without fibrotic changes.',
        treatment: 'Matra Basti, sitz baths, stool regulation, topical soothing ointments',
      },
      {
        badge: 'C',
        label: 'Advanced',
        title: 'Chronic Fissure',
        desc: 'Deep ulcer with raised edges, visible sphincter fibers, sentinel tag, and hypertrophied anal papilla.',
        treatment: 'Ayurvedic Matra Basti regimen, Laser Sphincterotomy, Ksharkarma application',
      },
      {
        badge: 'R',
        label: 'Complex',
        title: 'Recurrent Fissure',
        desc: 'Repeated breakdown of healed scar tissue triggered by constipation or high sphincter baseline pressure.',
        treatment: 'Internal sphincter relaxation, diet overhaul, personalized Panchakarma',
      },
      {
        badge: 'S',
        label: 'Secondary',
        title: 'Secondary Fissure',
        desc: 'Fissures associated with Crohn’s disease, inflammatory bowel disorders, or post-surgical scarring.',
        treatment: 'Integrated medical therapy, systemic Ayurveda, conservative management',
      },
    ],
  },
  causes: {
    leadHeadline: 'High sphincter hypertonicity and hard stools create the <em>chronic cycle.</em>',
    leadParagraphs: [
      'The anal canal lining is fragile. When a hard, dry stool tears the anoderm, the exposed internal sphincter muscle goes into a protective reflex spasm. This spasm reduces local blood flow (ischemia) to the posterior midline of the anus, preventing the tear from healing naturally.',
      'To cure a fissure permanently, we must break this cycle by relaxing the sphincter muscle and restoring healthy microcirculation to the ulcer.',
    ],
    causesList: [
      {
        title: 'Hard, dehydrated stools.',
        desc: 'Passing hard stools stretches and lacerates the delicate posterior anoderm.',
      },
      {
        title: 'Hyperactive internal sphincter.',
        desc: 'Elevated resting pressure restricts capillary blood supply to the wound bed.',
      },
      {
        title: 'Childbirth and vaginal delivery.',
        desc: 'Perineal pressure during labor can cause anterior midline fissures in postpartum mothers.',
      },
      {
        title: 'Chronic recurrent diarrhoea.',
        desc: 'Frequent liquid stools cause chemical irritation and inflammation of the anal lining.',
      },
      {
        title: 'Prolonged sitting on toilet seats.',
        desc: 'Hanging pelvic floor posture engorges anal tissues and worsens mucosal friction.',
      },
    ],
  },
  diagnosis: {
    sectionTitle: 'Gentle, painless <em>examination protocol.</em>',
    sectionLede:
      'We understand how sensitive and painful a fissure is. We never perform aggressive or painful examinations.',
    steps: [
      {
        stepNum: 'Step 01',
        icon: 'इ',
        title: 'Symptom Review',
        desc: 'Detailed history of pain timing, stool consistency, and duration of symptoms.',
      },
      {
        stepNum: 'Step 02',
        icon: 'नि',
        title: 'Gentle Visual Inspection',
        desc: 'Gentle parting of buttocks to visualize the tear without inserting instruments.',
      },
      {
        stepNum: 'Step 03',
        icon: 'स्ने',
        title: 'Topical Anaesthesia (If Needed)',
        desc: 'Lignocaine gel application before any gentle digital assessment, ensuring zero discomfort.',
      },
      {
        stepNum: 'Step 04',
        icon: 'यो',
        title: 'Personalized Care Plan',
        desc: 'Clear grading and immediate relief prescription tailored to your pain level.',
      },
    ],
  },
  treatments: {
    sectionTitle: 'Tailored pathways for <em>complete fissure healing.</em>',
    sectionLede:
      'Our priority is always sphincter preservation and rapid pain relief without cutting muscular rings.',
    items: [
      {
        tierNum: 'Tier 1',
        tierLabel: 'Non-Invasive',
        title: 'Matra Basti & Conservative Protocol',
        suitability: 'Best suited for: Acute fissures and mild-to-moderate chronic cases',
        desc: 'Administration of warm medicated Jatyadi Taila directly into the anal canal via a soft micro-catheter. Lubricates the passage, reduces sphincter spasm, and accelerates tissue granulation.',
        facts: [
          { label: 'Duration', value: '7 – 14 days' },
          { label: 'Relief', value: 'Within 48 hours' },
          { label: 'Success Rate', value: '92% in acute cases' },
        ],
        linkText: 'Read about Matra Basti for fissure',
        linkHref: '/services/ayurveda-panchakarma/',
      },
      {
        tierNum: 'Tier 2',
        tierLabel: 'Classical Parasurgery',
        modifierClass: 'treatment-card--ksharsutra',
        title: 'Ksharkarma for Chronic Fissure',
        suitability: 'Best suited for: Chronic fissures with hypertrophied sentinel tags',
        desc: 'Application of mild alkaline Kshara to cauterize the unhealthy fibrotic base and excise sentinel tags without scalpel cuts. Stimulates fresh, healthy mucosal healing.',
        facts: [
          { label: 'Duration', value: '15 – 20 min' },
          { label: 'Hospital Stay', value: 'Day-care OPD' },
          { label: 'Recovery', value: '5 – 7 days' },
        ],
        linkText: 'Read about Ksharkarma',
        linkHref: '/knowledge/articles/understanding-ksharsutra-in-simple-terms/',
      },
      {
        tierNum: 'Tier 3',
        tierLabel: 'Advanced Laser',
        modifierClass: 'treatment-card--laser',
        title: 'Precision Laser Sphincterotomy',
        suitability: 'Best suited for: Severe chronic spasm unresponsive to medications',
        desc: 'Diode laser energy delivers controlled thermal relaxation to a few hypertonic muscle fibers of the internal sphincter. Immediately abolishes spasm while 100% preserving continence.',
        facts: [
          { label: 'Duration', value: '15 – 20 min' },
          { label: 'Pain Relief', value: 'Immediate' },
          { label: 'Continence Risk', value: 'Zero' },
        ],
        linkText: 'Read about Laser Fissure Treatment',
        linkHref: '/knowledge/articles/laser-piles-surgery-what-it-is-what-it-is-not/',
      },
    ],
  },
  expect: {
    sectionTitle: 'What to expect on your <em>healing journey.</em>',
    sectionLede:
      'From severe morning pain to comfortable, regular bowel movements in a matter of days.',
    steps: [
      {
        stepNum: '01',
        time: 'Day 1 · Assessment',
        title: 'Gentle exam & immediate pain relief',
        desc: 'Accurate staging, soothing local therapy, and prescription for stool softeners and sitz baths.',
      },
      {
        stepNum: '02',
        time: 'Days 2 – 7 · Active Therapy',
        title: 'Matra Basti or Laser procedure',
        desc: 'Targeted relaxation of internal sphincter; daily bowel movements become painless.',
      },
      {
        stepNum: '03',
        time: 'Day 14 · Follow-Up',
        title: 'Mucosal healing confirmation',
        desc: 'Visual inspection confirms re-epithelialization of the anal lining.',
      },
      {
        stepNum: '04',
        time: 'Day 30 · Preventive Stabilization',
        title: 'Long-term dietary balance',
        desc: 'Ayurvedic gut-toning herbs ensure regular soft stools and prevent recurrence.',
      },
    ],
  },
  faqs: [
    {
      question: 'How do I know if I have piles or an anal fissure?',
      answer:
        '<p>While both cause bleeding, <strong>pain is the key differentiator</strong>. Piles are usually painless unless thrombosed. An anal fissure causes sharp, intense, burning pain during and for hours after stool passage. A gentle examination easily distinguishes between the two.</p>',
    },
    {
      question: 'Will surgery for fissure cause loss of bowel control (incontinence)?',
      answer:
        '<p><strong>No, not at our hospital.</strong> Traditional open surgical sphincterotomy carried a small risk if too much muscle was divided. We use non-surgical Ayurvedic Matra Basti, mild Ksharkarma, or ultra-precise diode laser energy, which completely protect the anal sphincter and maintain 100% continence.</p>',
    },
    {
      question: 'How does Matra Basti cure chronic fissures?',
      answer:
        '<p>Matra Basti introduces nourishing medicated herbal oil (such as Jatyadi Taila) into the rectum. This lubricates the anal canal, pacifies Vata dosha, relaxes muscular spasm, and provides localized wound-healing phyto-compounds directly to the fissure bed.</p>',
    },
  ],
  related: [
    {
      icon: 'पा',
      title: 'Piles (Haemorrhoids)',
      desc: 'Swollen vascular cushions that cause painless bleeding and prolapse.',
      linkText: 'Read about piles',
      href: '/services/anorectal-care/piles/',
    },
    {
      icon: 'भ',
      title: 'Anal Fistula',
      desc: 'Infected tunnel between the anal canal and external skin requiring Ksharsutra.',
      linkText: 'Read about fistula',
      href: '/services/anorectal-care/anal-fistula/',
    },
    {
      icon: 'वि',
      title: 'Perianal Abscess',
      desc: 'Acute painful swelling near the anus needing immediate drainage.',
      linkText: 'Read about abscess',
      href: '/services/anorectal-care/perianal-abscess/',
    },
  ],
};

export const FISTULA_DETAIL: ConditionDetailData = {
  eyebrow: 'Anorectal Care · Condition',
  devanagari: 'भगन्दर',
  titleMain: 'Anal Fistula & Ksharsutra',
  titleAccent: 'Treatment',
  subtitle: 'Near-zero recurrence Ksharsutra & laser proctology in Amravati',
  lede: 'An anal fistula is an abnormal tunnel connecting an infected gland inside the anal canal to the skin around the anus. Treated by Dr. Vipin Tongale with classical Ayurvedic Ksharsutra and FiLaC laser, with over 16,000 surgical procedures performed.',
  glance: {
    sanskrit: 'Bhagandara (भगन्दर)',
    grades: 'Low, High, Complex, Recurrent',
    commonIn: 'Adults 20 – 55 years (3:1 male ratio)',
    treatmentTier: 'Ksharsutra, FiLaC, IFTAK',
    recovery: 'Ambulation same day, healing 3–8 wks',
    consultation: '30 – 45 minutes',
  },
  answerSummary:
    'An anal fistula (Bhagandara) develops following an untreated perianal abscess. Because the tract passes through the anal sphincter muscles, conventional surgical cutting (fistulectomy) risks fecal incontinence. At Shri Manmukund Hospital, we specialize in classical Ksharsutra parasurgery and FiLaC (Fistula Laser Closure). The medicated Ksharsutra thread cuts and heals the tract simultaneously from the inside out, preserving sphincter integrity with less than 2% recurrence rate.',
  symptoms: {
    sectionTitle: 'Recognizing an anal <em>fistula.</em>',
    sectionLede:
      'Fistulas typically manifest as recurring boils that burst, discharge pus or blood, and refill.',
    items: [
      {
        icon: 'पू',
        title: 'Pus & fluid discharge',
        desc: 'Continuous or intermittent pus, watery fluid, or blood staining undergarments.',
      },
      {
        icon: 'शो',
        title: 'Recurrent painful swelling',
        desc: 'A tender lump near the anus that swells painfully until it discharges and temporarily relieves pressure.',
      },
      {
        icon: 'ज्वा',
        title: 'Fever and chills',
        desc: 'Systemic signs when the external opening closes and pus accumulates under pressure.',
      },
      {
        icon: 'क',
        title: 'Perianal skin irritation',
        desc: 'Redness, itching, and excoriation of skin caused by chronic exposure to discharge.',
      },
      {
        icon: 'वे',
        title: 'Pain with sitting & walking',
        desc: 'Deep, throbbing discomfort in the gluteal and perineal area that intensifies with movement.',
      },
      {
        icon: 'दु',
        title: 'Foul odor from perineum',
        desc: 'Offensive smell due to chronic bacterial colonization of the anorectal tract.',
      },
    ],
    warningTitle: 'Why fistulas should never be ignored',
    warningBody:
      'An untreated fistula will continue to branch, creating horseshoe tracts, high suprasphincteric extensions, and multiple external openings that become significantly harder to treat. Early Ksharsutra ligation resolves simple tracts in weeks.',
  },
  grades: {
    sectionTag: 'Classification & Staging',
    sectionTitle: 'Fistulas are staged by <em>anatomical depth.</em>',
    sectionLede:
      'The relationship of the fistula tract to the external sphincter muscle determines the safest surgical technique.',
    items: [
      {
        badge: 'I',
        label: 'Low Fistula',
        title: 'Intersphincteric',
        desc: 'Tract lies between internal and external sphincter layers. Most common and straightforward to treat.',
        treatment: 'Classical Ksharsutra, FiLaC Laser closure',
      },
      {
        badge: 'II',
        label: 'Mid-Level',
        title: 'Transsphincteric',
        desc: 'Tract passes through both sphincter muscles. Traditional surgery risks incontinence; Ksharsutra is gold standard.',
        treatment: 'Ksharsutra parasurgery, IFTAK technique',
      },
      {
        badge: 'III',
        label: 'High Complex',
        title: 'Suprasphincteric',
        desc: 'Tract curves above the puborectalis muscle before exiting downwards. Requires expert sequential threading.',
        treatment: 'Gradual Ksharsutra cutting-seton protocol',
      },
      {
        badge: 'IV',
        label: 'Complicated',
        title: 'Horseshoe / Recurrent',
        desc: 'Tract wraps around both sides of the rectum with multiple openings. Patients previously operated elsewhere.',
        treatment: 'Comprehensive mapping with MRI & staged Ksharsutra',
      },
    ],
  },
  causes: {
    leadHeadline: 'Infected anal cryptoglandular crypts form the <em>originating focus.</em>',
    leadParagraphs: [
      'Over 90% of anal fistulas originate from infection of the small crypt glands located at the dentate line inside the anal canal. When a gland duct becomes blocked by stool or debris, an abscess forms in the intersphincteric space.',
      'When the abscess bursts or is drained externally, a chronic epithelialized tunnel remains connecting the internal source to the skin.',
    ],
    causesList: [
      {
        title: 'Prior perianal abscess.',
        desc: 'Up to 50% of acute perianal abscesses leave behind a permanent fistula tract.',
      },
      {
        title: 'Cryptoglandular bacterial infection.',
        desc: 'Stagnant secretions in anal glands become colonized by fecal bacteria.',
      },
      {
        title: 'Failed previous fistula surgeries.',
        desc: 'Incomplete excision or missed secondary branches cause persistent recurrence.',
      },
      {
        title: 'Crohn’s disease & colitis.',
        desc: 'Inflammatory bowel disorders causing transmural intestinal ulceration.',
      },
    ],
  },
  diagnosis: {
    sectionTitle: 'Precise tract mapping for <em>zero recurrence.</em>',
    sectionLede:
      'We identify every primary opening, secondary branch, and cavity before beginning treatment.',
    steps: [
      {
        stepNum: 'Step 01',
        icon: 'अ',
        title: 'Clinical Probing with Goodsall’s Rule',
        desc: 'Careful anatomical evaluation to predict internal opening location.',
      },
      {
        stepNum: 'Step 02',
        icon: 'प्र',
        title: 'High-Definition Anoscopy',
        desc: 'Visualizing the internal crypt opening with magnification.',
      },
      {
        stepNum: 'Step 03',
        icon: 'चि',
        title: 'Pelvic MRI Fistulogram',
        desc: 'For complex, recurrent, or high fistulas to map occult horseshoe extensions.',
      },
      {
        stepNum: 'Step 04',
        icon: 'यो',
        title: 'Ksharsutra Sizing & Planning',
        desc: 'Selecting the appropriate medicated linen thread thickness and chemical potency.',
      },
    ],
  },
  treatments: {
    sectionTitle: 'Specialized interventions for <em>anal fistula.</em>',
    sectionLede:
      'Dr. Vipin Tongale has over 15 years of experience resolving thousands of complex and recurrent fistulas.',
    items: [
      {
        tierNum: 'Tier 1',
        tierLabel: 'Gold Standard',
        modifierClass: 'treatment-card--ksharsutra',
        title: 'Classical Ksharsutra Parasurgery',
        suitability: 'Best suited for: All grades of simple, complex, and recurrent fistulas',
        desc: 'A specially prepared linen thread coated 21 times with Snuhi Ksheera, Apamarga Kshara, and Haridra powder. Cuts the infected tract mechanically and chemically while laying down healthy fibrous tissue behind it, preserving 100% sphincter continence.',
        facts: [
          { label: 'Weekly Change', value: 'Simple OPD procedure' },
          { label: 'Recurrence Rate', value: 'Less than 2%' },
          { label: 'Hospital Stay', value: 'Day-care / 1 night' },
        ],
        linkText: 'Read the complete Ksharsutra Playbook',
        linkHref: '/knowledge/playbooks/ksharsutra-day-1-to-complete-healing/',
      },
      {
        tierNum: 'Tier 2',
        tierLabel: 'Minimally Invasive Laser',
        modifierClass: 'treatment-card--laser',
        title: 'FiLaC (Fistula-tract Laser Closure)',
        suitability: 'Best suited for: Straight, uncomplicated low-to-mid transsphincteric tracts',
        desc: 'A 360° radial emitting laser fiber is introduced along the fistula tract. Emitted laser energy seals and ablates the epithelial lining from inside without creating external wounds.',
        facts: [
          { label: 'Procedure Time', value: '20 – 30 min' },
          { label: 'Recovery', value: '3 – 5 days' },
          { label: 'Wound Care', value: 'Minimal dressing' },
        ],
        linkText: 'Read about FiLaC Laser Treatment',
        linkHref: '/knowledge/articles/choosing-between-ksharsutra-and-laser-for-fistula/',
      },
      {
        tierNum: 'Tier 3',
        tierLabel: 'Hybrid Technique',
        modifierClass: 'treatment-card--nonsurgical',
        title: 'IFTAK (Interception of Fistulous Tract & Ksharsutra)',
        suitability: 'Best suited for: High transsphincteric and suprasphincteric fistulas',
        desc: 'Combines modern tissue dissection of the lateral tract with Ksharsutra ligation only across the sphincter-traversing segment, significantly shortening overall healing time.',
        facts: [
          { label: 'Healing Time', value: '30% faster' },
          { label: 'Safety Profile', value: 'Maximum sphincter protection' },
          { label: 'Effectiveness', value: 'High complex cases: 96%' },
        ],
        linkText: 'Read about IFTAK Protocol',
        linkHref: '/knowledge/playbooks/ksharsutra-day-1-to-complete-healing/',
      },
    ],
  },
  expect: {
    sectionTitle: 'What to expect during <em>Ksharsutra therapy.</em>',
    sectionLede:
      'A structured, step-by-step healing process where patients continue normal daily work.',
    steps: [
      {
        stepNum: '01',
        time: 'Day 1 · Thread Placement',
        title: 'Initial Ksharsutra insertion',
        desc: 'Minor procedure under local or spinal anesthesia. Medicated thread is gently routed through the tract.',
      },
      {
        stepNum: '02',
        time: 'Weekly · OPD Review',
        title: 'Sequential thread replacement',
        desc: '5-minute weekly visit to replace thread. The old thread guides the new one through with minimal discomfort.',
      },
      {
        stepNum: '03',
        time: 'Week 3 to 8 · Track Cut-Through',
        title: 'Gradual tract excision & healing',
        desc: 'The thread cuts through the tract millimetre by millimetre while healthy granulation tissue seals the base.',
      },
      {
        stepNum: '04',
        time: 'Week 8 · Final Discharge',
        title: 'Permanent closure confirmed',
        desc: 'Thread comes off naturally once tract is completely healed. Scar is strong, clean, and sphincter is intact.',
      },
    ],
  },
  faqs: [
    {
      question: 'Why is Ksharsutra better than open surgery for fistula?',
      answer:
        '<p>Open surgery (fistulectomy) cuts through the anal sphincter muscle in one go, carrying a high risk of stool leakage or fecal incontinence, and has a 20-30% recurrence rate. <strong>Ksharsutra cuts through the muscle gradually (1 mm per week)</strong>, allowing the divided muscle to scar down and fuse before the next fiber is cut. This guarantees 100% sphincter continence and brings recurrence down to under 2%.</p>',
    },
    {
      question: 'Can I go to office and do routine activities during Ksharsutra?',
      answer:
        '<p><strong>Yes, absolutely.</strong> Ksharsutra is an ambulatory treatment. Most patients return to their desk job or business within 24 to 48 hours after thread placement and continue work normally throughout the weekly changes.</p>',
    },
    {
      question: 'What happens if a fistula is left untreated?',
      answer:
        '<p>Fistulas do not heal with oral antibiotics or ointments. Untreated fistulas lead to recurrent painful abscesses, additional branching tracts (horseshoe fistulas), complex high extensions, and permanent damage to sphincter muscles.</p>',
    },
  ],
  related: [
    {
      icon: 'पु',
      title: 'Recurrent Anal Fistula',
      desc: 'Dedicated protocol for fistulas that recurred after previous surgery elsewhere.',
      linkText: 'Read about recurrent fistula',
      href: '/services/anorectal-care/recurrent-anal-fistula/',
    },
    {
      icon: 'फो',
      title: 'Perianal Abscess',
      desc: 'Acute painful collection of pus requiring immediate surgical drainage.',
      linkText: 'Read about perianal abscess',
      href: '/services/anorectal-care/perianal-abscess/',
    },
    {
      icon: 'ना',
      title: 'Pilonidal Sinus',
      desc: 'Infected sinus cavity in the natal cleft treated with Ksharsutra or SiLaC laser.',
      linkText: 'Read about pilonidal sinus',
      href: '/services/anorectal-care/pilonidal-sinus/',
    },
  ],
};

export const FEMALE_PROCTOLOGY_DETAIL: ConditionDetailData = {
  eyebrow: 'Female Specialty Care · Anorectal Unit',
  devanagari: 'महिला गुदविकार',
  titleMain: 'Female Proctology & Anorectal',
  titleAccent: 'Care',
  subtitle: 'Compassionate, private surgical & conservative care by Dr. Swati Tongale',
  lede: 'Anorectal conditions like piles, fissures after childbirth, and fistulas are extremely common among women. Yet many endure chronic suffering for years due to social hesitation or the lack of a female surgeon. Dr. Swati Tongale provides gentle, dignity-centered consultation, examination, and treatment with complete female clinical support in Amravati.',
  glance: {
    sanskrit: 'Mahila Guda Vikara (महिला गुदविकार)',
    grades: 'Piles (I–IV), Acute/Chronic Fissure, Fistula',
    commonIn: 'Women (Peripartum, Postnatal & All ages)',
    treatmentTier: 'Conservative, Ksharsutra & Diode Laser',
    recovery: 'Same day to 2 weeks',
    consultation: '30 – 45 minutes (Private & Unhurried)',
  },
  answerSummary:
    'Female Proctology at Shri Manmukund Hospital is a specialized clinical service led exclusively by Dr. Swati Tongale, MS (Ayurveda Shalya Tantra). Designed for women who prefer a female surgeon, it provides unhurried private consultations, gentle examinations in a confidential room with female nursing staff, and the complete spectrum of advanced treatments—from soothing Ayurvedic Matra Basti to Ksharsutra and minimally invasive day-care laser procedures.',
  symptoms: {
    sectionTitle: 'Common female anorectal symptoms <em>needing clinical review.</em>',
    sectionLede:
      'If you are experiencing any of the following symptoms, an early, private examination by a female specialist ensures simple and effective resolution.',
    items: [
      {
        icon: 'रु',
        title: 'Postpartum or Severe Anal Pain',
        desc: 'Sharp, tearing pain during or after bowel movements, frequently triggered after delivery or chronic constipation.',
      },
      {
        icon: 'र',
        title: 'Rectal Bleeding',
        desc: 'Bright red blood on toilet tissue or in the bowl during stool passage, commonly caused by piles or fissures.',
      },
      {
        icon: 'प्र',
        title: 'Perianal Lumps or Prolapse',
        desc: 'Swollen venous cushions or mucosal protrusions that emerge during bowel movements or prolonged standing.',
      },
      {
        icon: 'स्रा',
        title: 'Recurrent Discharge or Boil',
        desc: 'Persistent pus, moisture, or recurrent painful boils around the anal verge signaling a potential fistula tract.',
      },
      {
        icon: 'खु',
        title: 'Perianal Pruritus & Itching',
        desc: 'Persistent moisture, burning, and severe itching that worsens at night or during warm weather.',
      },
      {
        icon: 'सं',
        title: 'Pelvic Floor Heaviness',
        desc: 'Chronic pelvic pressure, incomplete evacuation feeling, or mild sphincter laxity following childbirth.',
      },
    ],
    warningTitle: 'When to seek timely medical attention',
    warningBody:
      'Sudden throbbing perianal pain with fever, continuous active bleeding, or painful irreducible lumps require immediate evaluation. Do not suffer in silence or rely on unverified over-the-counter ointments.',
  },
  grades: {
    sectionTag: 'Clinical Spectrum',
    sectionTitle: 'Conditions managed in the <em>Female Care Unit.</em>',
    sectionLede:
      'Every condition is accurately staged to select the gentlest and most effective therapy.',
    items: [
      {
        badge: '01',
        label: 'Haemorrhoids',
        title: 'Piles (Grade I – IV)',
        desc: 'Internal and external piles, peripartum venous engorgement, and thrombosed piles treated with conservative care, sclerotherapy, or laser.',
        treatment: 'Dietary fiber, Matra Basti, OPD sclerotherapy, Laser Haemorrhoidoplasty',
      },
      {
        badge: '02',
        label: 'Anal Fissure',
        title: 'Acute & Chronic Fissure',
        desc: 'Superficial tears in the anal lining causing intense post-defecation spasm. 90%+ heal conservatively without sphincter cuts.',
        treatment: 'Medicated Sitz bath (Avagaha), Jatyadi ghrita basti, sphincter-relaxing protocols',
      },
      {
        badge: '03',
        label: 'Anal Fistula',
        title: 'Simple & Complex Fistula',
        desc: 'Infected perianal tracks treated with classical Ksharsutra or FiLaC laser, ensuring zero damage to pelvic sphincters.',
        treatment: 'Gradual Ksharsutra ligation, IFTAK, FiLaC laser closure',
      },
      {
        badge: '04',
        label: 'Pelvic & Postnatal',
        title: 'Postnatal Anorectal Recovery',
        desc: 'Dedicated healing protocols for episiotomy-adjacent tears, perineal laxity, and bowel dysfunctions post-delivery.',
        treatment: 'Pelvic strengthening, Sutika Paricharya oils, classical Kashaya douching',
      },
    ],
  },
  causes: {
    leadHeadline: 'Pregnancy, pelvic biomechanics, and hormonal shifts <em>drive female proctology conditions.</em>',
    leadParagraphs: [
      'Women experience unique physiological milestones—such as pregnancy, hormonal fluctuations during the luteal phase, labor strain, and menopause—that place distinct mechanical stress on pelvic floor veins and tissues.',
      'Recognizing these distinct anatomical dynamics allows us to formulate treatment plans that protect pelvic floor integrity while delivering rapid, lasting relief.',
    ],
    causesList: [
      {
        title: 'Pregnancy & Uterine Pressure.',
        desc: 'Increased intra-abdominal pressure and progesterone-induced venous relaxation during pregnancy.',
      },
      {
        title: 'Labor & Delivery Straining.',
        desc: 'Intense pushing during vaginal delivery can cause sudden acute fissure tears or prolapse of haemorrhoidal cushions.',
      },
      {
        title: 'Chronic Postpartum Constipation.',
        desc: 'Dehydration during lactation, iron supplements, and fear of pain leading to withholding stool and hard stools.',
      },
      {
        title: 'Hormonal Fluctuations.',
        desc: 'Progesterone slowing gut motility during premenstrual and perimenopausal phases.',
      },
      {
        title: 'Pelvic Floor Muscle Tightness.',
        desc: 'Hypertonic pelvic floor spasm preventing natural sphincter relaxation during defecation.',
      },
    ],
  },
  diagnosis: {
    sectionTitle: 'Dignified 4-step <em>examination protocol.</em>',
    sectionLede:
      'We understand your hesitation. Our diagnostic process is completely private, unhurried, and conducted exclusively by female clinical staff.',
    steps: [
      {
        stepNum: 'Step 01',
        icon: 'सं',
        title: 'Private Discussion',
        desc: 'Detailed discussion in Dr. Swati’s private cabin. You are welcome to have a family member accompany you.',
      },
      {
        stepNum: 'Step 02',
        icon: 'प',
        title: 'Comfortable Inspection',
        desc: 'Gentle external visual inspection in a screened examination suite with female nursing attendance.',
      },
      {
        stepNum: 'Step 03',
        icon: 'यं',
        title: 'Painless Proctoscopy',
        desc: 'If required, an illuminated mini-scope with local anaesthetic gel visualises internal cushions with minimal discomfort.',
      },
      {
        stepNum: 'Step 04',
        icon: 'यो',
        title: 'Collaborative Plan',
        desc: 'Transparent discussion of findings, staging, and non-surgical to surgical options without any pressure.',
      },
    ],
  },
  treatments: {
    sectionTitle: 'Tailored treatments protecting <em>dignity and sphincter tone.</em>',
    sectionLede:
      'From soothing herbal oils to cutting-edge diode lasers, we choose the gentlest option for your case.',
    items: [
      {
        tierNum: 'Tier 1',
        tierLabel: 'First Line',
        title: 'Conservative Ayurvedic Care & Matra Basti',
        suitability: 'Best suited for: Grade I piles, acute postpartum fissures, and early digestive sluggishness',
        desc: 'Classical Jatyadi oil retention enemas (Matra Basti), herbal stool modulators, warm medicinal sitz baths (Avagaha Sweda), and pelvic relaxation guidance.',
        facts: [
          { label: 'Approach', value: '100% Non-invasive' },
          { label: 'Hospital Stay', value: 'None (OPD)' },
          { label: 'Comfort', value: 'Immediate soothing' },
        ],
        linkText: 'Read about Ayurvedic care',
        linkHref: '/services/ayurveda-panchakarma/',
      },
      {
        tierNum: 'Tier 2',
        tierLabel: 'OPD Procedure',
        modifierClass: 'treatment-card--nonsurgical',
        title: 'Rubber Band Ligation & Sclerotherapy',
        suitability: 'Best suited for: Bleeding Grade II piles seeking rapid resolution without hospital stay',
        desc: 'Quick 10-minute office procedures that interrupt blood flow to prolapsing piles cushions. Performed painlessly above the dentate line with zero stitches.',
        facts: [
          { label: 'Duration', value: '10 – 15 min' },
          { label: 'Recovery', value: 'Same day return' },
          { label: 'Incision', value: 'No cuts or stitches' },
        ],
        linkText: 'Read about non-surgical options',
        linkHref: '/services/non-surgical-piles-treatment/',
      },
      {
        tierNum: 'Tier 3',
        tierLabel: 'Advanced Parasurgery',
        modifierClass: 'treatment-card--ksharsutra',
        title: 'Classical Ksharsutra for Complex Fistula',
        suitability: 'Best suited for: Simple & complex anal fistulas, high tracts, and recurrent infections',
        desc: 'Gold-standard Ayurvedic parasurgical technique utilizing medicated alkaline threads to gently excise the tract while allowing simultaneously healthy granulation with near-zero recurrence.',
        facts: [
          { label: 'Sphincter Safety', value: '100% Preserved' },
          { label: 'Recurrence', value: 'Near Zero' },
          { label: 'Anesthesia', value: 'Local / Spinal' },
        ],
        linkText: 'Read about Ksharsutra therapy',
        linkHref: '/services/ksharsutra/',
      },
      {
        tierNum: 'Tier 3',
        tierLabel: 'Modern Minimally Invasive',
        modifierClass: 'treatment-card--laser',
        title: 'Precision Diode Laser Proctology (LHP & FiLaC)',
        suitability: 'Best suited for: Grade III/IV piles, chronic fissures, and cosmetic sphincter preservation',
        desc: 'Advanced day-care 1470nm laser energy delivered directly to diseased venous cushions or fistula tracts without large open wounds, stitches, or prolonged dressing.',
        facts: [
          { label: 'Procedure Time', value: '20 – 30 min' },
          { label: 'Discharge', value: 'Same day (4–6 hrs)' },
          { label: 'Return to Routine', value: 'Within 48–72 hours' },
        ],
        linkText: 'Read about Laser Proctology',
        linkHref: '/services/laser-proctology/',
      },
    ],
  },
  expect: {
    sectionTitle: 'Your confidential care journey with <em>Dr. Swati.</em>',
    sectionLede:
      'From your first call to complete healing, every interaction is private, gentle, and respectful.',
    steps: [
      {
        stepNum: '01',
        time: 'Day 1 · First Visit',
        title: 'Confidential Consultation & Staging',
        desc: 'Unhurried private discussion of symptoms, dietary review, gentle physical examination, and clear explanation of findings.',
      },
      {
        stepNum: '02',
        time: 'Treatment Phase',
        title: 'Personalized Clinical Therapy',
        desc: 'Whether starting conservative Basti therapy or scheduling a 30-minute day-care laser procedure, Dr. Swati guides you personally.',
      },
      {
        stepNum: '03',
        time: 'Same Day / Day 2',
        title: 'Comfortable Recovery & Discharge',
        desc: 'Step-by-step instructions on sitz baths, dietary fiber, and hygiene routines given before returning home.',
      },
      {
        stepNum: '04',
        time: 'Weeks 1 – 4',
        title: 'Structured Doctor Follow-Up',
        desc: 'Review visits to verify complete mucosal healing and reinforce lifelong gut health habits.',
      },
    ],
  },
  faqs: [
    {
      question: 'Will Dr. Swati conduct the examination and procedure herself?',
      answer:
        '<p><strong>Yes, 100%.</strong> Dr. Swati Tongale personally conducts the consultation, physical examination, proctoscopy, procedures, and all follow-up visits. Female nursing staff are always present in the examination room.</p>',
    },
    {
      question: 'Can I bring my mother, sister, or husband with me?',
      answer:
        '<p><strong>Absolutely.</strong> Companions and family members are warmly welcome inside both the consultation cabin and the examination suite based on your personal comfort.</p>',
    },
    {
      question: 'Are piles and fissures common after normal or caesarean delivery?',
      answer:
        '<p>Yes, postpartum piles and fissures affect over 40% of new mothers due to pelvic strain, hormonal changes, and constipation. Most cases resolve quickly with non-surgical Ayurvedic care and do not require surgery if treated early.</p>',
    },
    {
      question: 'How do I book a private appointment with Dr. Swati?',
      answer:
        '<p>You can book an appointment by calling <strong>8208927917</strong> or through our online booking form. You can explicitly request Dr. Swati Tongale when speaking with our team.</p>',
    },
  ],
  related: [
    {
      icon: 'उ',
      title: 'Uttarbasti for Infertility',
      desc: 'Classical intra-uterine therapy for tubal blocks, thin endometrium, and fertility support.',
      linkText: 'Read about Uttarbasti',
      href: '/services/female-care/uttarbasti-for-infertility/',
    },
    {
      icon: 'आ',
      title: 'Menstrual Disorders & PCOD',
      desc: 'Holistic Ayurvedic hormone balancing for irregular cycles and PCOD.',
      linkText: 'Read about PCOD care',
      href: '/services/female-care/menstrual-disorders/',
    },
    {
      icon: 'सू',
      title: 'Postnatal Panchakarma',
      desc: 'Classical Sutika Paricharya 45-day restorative recovery for new mothers.',
      linkText: 'Read about Postnatal care',
      href: '/services/female-care/postnatal-panchakarma/',
    },
  ],
};

export const UTTARBASTI_DETAIL: ConditionDetailData = {
  eyebrow: 'Female Specialty Care · Fertility Protocol',
  devanagari: 'उत्तरबस्ती',
  titleMain: 'Uttarbasti for Infertility &',
  titleAccent: 'Tubal Blockage',
  subtitle: 'Classical intrauterine Panchakarma procedure by Dr. Swati Tongale in Amravati',
  lede: 'Uttarbasti is a revered classical Ayurvedic procedure involving the sterile administration of medicated herbal oils and ghritas directly into the uterine cavity. Practiced with modern aseptic standards by Dr. Swati Tongale, it is widely utilized for tubal factor infertility, thin endometrium, recurrent IVF implantation failures, and chronic pelvic inflammatory conditions.',
  glance: {
    sanskrit: 'Uttarbasti (उत्तरबस्ती चिकित्सा)',
    grades: 'Unilateral/Bilateral Tubal Block, Endometrial <7mm',
    commonIn: 'Women facing primary or secondary infertility',
    treatmentTier: 'Specialised Intrauterine Panchakarma',
    recovery: 'Same-day OPD procedure (20–40 min)',
    consultation: '30 – 45 min with modern HSG/USG review',
  },
  answerSummary:
    'Uttarbasti for infertility is a specialized classical Ayurvedic Panchakarma therapy where sterile, heated medicated ghritas (such as Phala Ghrita, Kshara Taila, or Dhanwantaram Taila) are administered through the cervical canal into the uterus during the follicular phase (days 6 to 11 of the menstrual cycle). Performed by Dr. Swati Tongale, MS (Ayurveda Shalya Tantra), it acts locally to dissolve soft inflammatory tubal adhesions, enhance endometrial vascularity, and restore ovarian-uterine receptivity.',
  symptoms: {
    sectionTitle: 'Clinical indications where Uttarbasti is <em>most effective.</em>',
    sectionLede:
      'Uttarbasti is considered when modern gynaecological evaluations identify specific structural or functional pelvic barriers to conception.',
    items: [
      {
        icon: 'वा',
        title: 'Tubal Blockages (Cornual / Fimbrial)',
        desc: 'Unilateral or bilateral fallopian tube blocks due to post-infectious inflammatory mucus plugs, pelvic spasms, or mild adhesions.',
      },
      {
        icon: 'गर्',
        title: 'Thin Endometrium (< 7mm)',
        desc: 'Poor endometrial receptivity and inadequate endometrial thickness refractory to conventional estrogen therapy.',
      },
      {
        icon: 'पु',
        title: 'Recurrent IVF / IUI Failures',
        desc: 'Repeated unsuccessful assisted reproduction cycles despite good embryo quality, requiring uterine micro-environment rejuvenation.',
      },
      {
        icon: 'शो',
        title: 'Chronic Pelvic Inflammatory Disease (PID)',
        desc: 'Chronic pelvic congestion, dull lower abdominal pain, and cervical erosion compromising reproductive health.',
      },
      {
        icon: 'अ',
        title: 'Anovulatory Cycles & PCOD',
        desc: 'Follicular growth arrest and poor oocyte quality benefiting from localized tissue nourishment (Dhatu Poshana).',
      },
      {
        icon: 'अ',
        title: 'Unexplained Infertility',
        desc: 'Normal diagnostic reports in both partners but inability to conceive naturally over 2+ years of trying.',
      },
    ],
    warningTitle: 'Important clinical prerequisites',
    warningBody:
      'Uttarbasti must always be preceded by proper modern diagnostic evaluation (Hysterosalpingography - HSG, Pelvic Sonography, Semen Analysis of the male partner, and routine blood/hormonal panels). Active acute pelvic infections must be treated prior to procedure initiation.',
  },
  grades: {
    sectionTag: 'Protocol Phasing',
    sectionTitle: 'Structured three-cycle <em>Uttarbasti roadmap.</em>',
    sectionLede:
      'A classical course is administered across consecutive menstrual cycles timed precisely to the proliferative phase.',
    items: [
      {
        badge: '01',
        label: 'Cycle 1',
        title: 'Preparatory Deepana & Snehana',
        desc: 'Internal metabolic purification (Agni Deepana) followed by 3–6 consecutive post-menstrual Uttarbasti sessions using specialized Sukshma oils.',
        treatment: 'Dosha pacification, cervical clearance, and initial tubal mucosal softening',
      },
      {
        badge: '02',
        label: 'Cycle 2',
        title: 'Active Tubal Recanalization & Endometrial Toning',
        desc: 'Second cycle of 3–6 sessions using medicated Kshara Taila or Phala Ghrita tailored to HSG findings to reopen lumen and boost blood flow.',
        treatment: 'Adhesion clearance, vascular enhancement, and endometrial thickening',
      },
      {
        badge: '03',
        label: 'Cycle 3',
        title: 'Receptivity & Conception Support',
        desc: 'Consolidation cycle focused on Garbhashaya Shodhana and Snehana, preparing optimal endometrial bed for natural conception or IVF transfer.',
        treatment: 'Endometrial trilaminar pattern optimization and ovulation support',
      },
      {
        badge: '04',
        label: 'Review',
        title: 'Post-Procedure HSG / USG Evaluation',
        desc: 'Follow-up sonography or repeat HSG to clinically verify tubal patency and endometrial readiness.',
        treatment: 'Objective verification of reproductive status and planning next steps',
      },
    ],
  },
  causes: {
    leadHeadline: 'Restoring local micro-circulation and clearing tubal stasis <em>at the cellular level.</em>',
    leadParagraphs: [
      'In Ayurvedic pathology, tubal blockages and fertility barriers are primarily attributed to Apana Vayu dysfunction accompanied by Kapha-Pitta avarana (mucous and inflammatory debris).',
      'Because the fallopian tubes and uterine cavity are highly sensitive mucosal structures, targeted local instillation of lipid-soluble medicated ghritas delivers pharmacological actives directly across the mucosal barrier without systemic drug degradation.',
    ],
    causesList: [
      {
        title: 'Kshara & Sukshma Properties.',
        desc: 'Alkaline and penetrating herbal lipids dissolve tenacious mucous plugs and inflammatory fibrous bands within the tubal lumen.',
      },
      {
        title: 'Endometrial Hyperemia.',
        desc: 'Medicated ghritas promote local neovascularization, supporting robust secretory endometrium growth (>8mm).',
      },
      {
        title: 'Antispasmodic Effect on Tubal Musculature.',
        desc: 'Relaxes chronic smooth muscle spasm in the cornual and isthmic regions of the fallopian tubes.',
      },
      {
        title: 'Neutralization of Cervical Hostility.',
        desc: 'Corrects acidic, hostile cervical mucus, enhancing sperm motility and longevity.',
      },
    ],
  },
  diagnosis: {
    sectionTitle: 'Pre-procedure evaluation and <em>safety standards.</em>',
    sectionLede:
      'We integrate classical Ayurvedic parameters with modern gynaecological imaging to ensure safe, effective therapy.',
    steps: [
      {
        stepNum: 'Step 01',
        icon: 'रि',
        title: 'Review of HSG & Sonography',
        desc: 'Detailed examination of your HSG films, follicular studies, AMH levels, and husband’s semen analysis.',
      },
      {
        stepNum: 'Step 02',
        icon: 'क',
        title: 'Pelvic Examination & Pap Smear',
        desc: 'Gentle physical examination to rule out acute vaginitis, cervicitis, or active infection.',
      },
      {
        stepNum: 'Step 03',
        icon: 'दि',
        title: 'Cycle Scheduling',
        desc: 'Precise scheduling starting on day 6, 7, or 8 immediately following complete cessation of menses (Ritukala).',
      },
      {
        stepNum: 'Step 04',
        icon: 'श',
        title: 'Aseptic In-Clinic Administration',
        desc: 'Performed in our dedicated, sterile minor OT using autoclaved instruments and single-use cannula.',
      },
    ],
  },
  treatments: {
    sectionTitle: 'Integrated fertility protocol <em>customized for your case.</em>',
    sectionLede:
      'Uttarbasti is paired with internal rasayanas and lifestyle guidance for optimal reproductive outcomes.',
    items: [
      {
        tierNum: 'Tier 1',
        tierLabel: 'Primary Therapy',
        title: 'Classical Intrauterine Uttarbasti',
        suitability: 'Best suited for: Tubal blockage, thin endometrium, and unexplained infertility',
        desc: 'Administration of 3 to 5 ml of sterile Phala Ghrita, Kshara Taila, or Kalyanaka Ghrita under gentle aseptic intrauterine technique. Painless, requiring 20 minutes rest before walking home.',
        facts: [
          { label: 'Session Time', value: '20 – 30 min' },
          { label: 'Cycle Timing', value: 'Days 6 – 11 of cycle' },
          { label: 'Course', value: '3 – 6 days per cycle' },
        ],
        linkText: 'Read about Uttarbasti technique',
        linkHref: '/services/female-care/uttarbasti-for-infertility/',
      },
      {
        tierNum: 'Tier 2',
        tierLabel: 'Metabolic Support',
        title: 'Ayurvedic Internal Rasayana & Ovarian Tonics',
        suitability: 'Best suited for: Hormonal imbalance, low AMH, PCOD, and egg quality improvement',
        desc: 'Targeted classical herbal formulations including Shatavari Ghrita, Ashwagandha, Pushpadhanwa Rasa, and Lodhrasava to balance the hypothalamic-pituitary-ovarian axis.',
        facts: [
          { label: 'Duration', value: '3 – 6 months' },
          { label: 'Effect', value: 'Regulates ovulation' },
          { label: 'Safety', value: 'Non-hormonal herbs' },
        ],
        linkText: 'Read about PCOD & hormonal care',
        linkHref: '/services/female-care/menstrual-disorders/',
      },
      {
        tierNum: 'Tier 3',
        tierLabel: 'Systemic Detox',
        modifierClass: 'treatment-card--ksharsutra',
        title: 'Systemic Panchakarma (Virechana & Matra Basti)',
        suitability: 'Best suited for: Patients with high BMI, chronic metabolic toxins (Ama), or PCOD',
        desc: 'Full-body therapeutic purgation (Virechana) or specialized enema cycles (Yoga Basti) performed before starting Uttarbasti to eliminate systemic metabolic congestion.',
        facts: [
          { label: 'Timing', value: 'Prior to Uttarbasti cycle' },
          { label: 'Benefit', value: 'Boosts tissue absorption' },
          { label: 'Supervision', value: 'Dr. Swati lead' },
        ],
        linkText: 'Read about Panchakarma Unit',
        linkHref: '/services/panchakarma/',
      },
    ],
  },
  expect: {
    sectionTitle: 'What to expect during your <em>Uttarbasti cycle.</em>',
    sectionLede:
      'A serene, comfortable experience designed to make your journey toward parenthood hopeful and stress-free.',
    steps: [
      {
        stepNum: '01',
        time: 'Day 1 of Period',
        title: 'Notify the Hospital Clinic',
        desc: 'Inform our team on Day 1 of your menses so your 3 to 6 procedure slots can be scheduled from Day 6 onwards.',
      },
      {
        stepNum: '02',
        time: 'Days 6 – 10 · Procedure',
        title: 'Daily Intrauterine Instillation',
        desc: 'Arrive at the clinic. Gentle abdominal warmth (Swedana) is applied, followed by 5-minute sterile instillation. Rest for 20 minutes.',
      },
      {
        stepNum: '03',
        time: 'Post-Procedure',
        title: 'Resume Normal Day Routine',
        desc: 'Walk out comfortably and continue regular domestic or work activities with simple dietary guidelines.',
      },
      {
        stepNum: '04',
        time: 'Post 3 Cycles',
        title: 'Repeat Diagnostic Verification',
        desc: 'Sonography to measure endometrial lining or repeat HSG to confirm tubal reopening.',
      },
    ],
  },
  faqs: [
    {
      question: 'Is Uttarbasti painful?',
      answer:
        '<p><strong>No, Uttarbasti is generally painless.</strong> It feels similar to a routine gynaecological swab or mild menstrual fullness. No general anaesthesia is needed, and patients walk home immediately after 20 minutes of rest.</p>',
    },
    {
      question: 'How successful is Uttarbasti for tubal blockages?',
      answer:
        '<p>Clinical studies and our hospital data show a <strong>recanalization success rate of 65% to 80%</strong> for corneal and mid-tubal inflammatory blocks after 2 to 3 consecutive cycles. Severe hydrosalpinx or extensive dense pelvic adhesions are evaluated honestly for surgical or IVF referral.</p>',
    },
    {
      question: 'Can Uttarbasti be combined with IVF treatment?',
      answer:
        '<p>Yes. Many patients take a 2-cycle course of Uttarbasti prior to frozen embryo transfer (FET) to improve thin, unresponsive endometrium and optimize uterine blood flow.</p>',
    },
    {
      question: 'How many sessions are in one course?',
      answer:
        '<p>A standard course consists of 3 to 6 consecutive days per menstrual cycle, repeated across 2 to 3 menstrual cycles depending on the severity of the tubal block or endometrial thickness.</p>',
    },
  ],
  related: [
    {
      icon: 'महि',
      title: 'Female Proctology',
      desc: 'Private piles, fissure, and fistula surgical care with Dr. Swati Tongale.',
      linkText: 'Read about Female Proctology',
      href: '/services/female-care/female-proctology/',
    },
    {
      icon: 'ग',
      title: 'Masanumasik Garbhsanskara',
      desc: 'Month-by-month Ayurvedic antenatal care for healthy pregnancy and baby.',
      linkText: 'Read about Garbhsanskara',
      href: '/services/female-care/garbhasanskar-antenatal-care/',
    },
    {
      icon: 'आ',
      title: 'Menstrual Disorders & PCOD',
      desc: 'Root-cause Ayurvedic hormone balancing and cycle regulation.',
      linkText: 'Read about PCOD care',
      href: '/services/female-care/menstrual-disorders/',
    },
  ],
};

export const GARBHSANSKARA_DETAIL: ConditionDetailData = {
  eyebrow: 'Female Specialty Care · Antenatal Program',
  devanagari: 'गर्भसंस्कार',
  titleMain: 'Masanumasik Garbhsanskara &',
  titleAccent: 'Pregnancy Care',
  subtitle: 'Month-by-month classical Ayurvedic antenatal care (Masanumasik Paricharya) in Amravati',
  lede: 'Garbhsanskara is the classical Ayurvedic science of nurturing both mother and developing baby throughout the 9 months of pregnancy. Led by Dr. Swati Tongale with coordinated prenatal yoga guidance, this program combines month-specific herbal nutrition, dietary protocols (Ahara), mental well-being (Vihara), and natural labor preparation.',
  glance: {
    sanskrit: 'Masanumasik Garbhsanskara (मासानुमासिक गर्भसंस्कार)',
    grades: 'Trimester 1, 2, and 3 Month-by-Month Care',
    commonIn: 'Expectant mothers from conception to delivery',
    treatmentTier: 'Antenatal Nutrition, Herbs & Prenatal Yoga',
    recovery: 'Continuous 9-month pregnancy support',
    consultation: 'Monthly dedicated clinical sessions',
  },
  answerSummary:
    'Masanumasik Garbhsanskara at Shri Manmukund Hospital is a structured 9-month Ayurvedic antenatal care protocol grounded in classical Charaka and Sushruta Samhita texts. Under Dr. Swati Tongale’s clinical guidance, expectant mothers receive month-specific herbal formulations, custom satvic nutritional plans, fetal sensory stimulation techniques, and coordinated prenatal yoga to promote a healthy pregnancy, optimal fetal growth (Supraja Janana), and natural, uncomplicated childbirth.',
  symptoms: {
    sectionTitle: 'Supporting you through every <em>trimester milestone.</em>',
    sectionLede:
      'Garbhsanskara provides proactive nutritional and therapeutic care to manage common pregnancy discomforts and nurture fetal vitality.',
    items: [
      {
        icon: 'उ',
        title: 'First Trimester Morning Sickness',
        desc: 'Relief from nausea, vomiting, hyperacidity, and metallic taste using gentle classical herbal combinations (Drakshadi, Madiphala).',
      },
      {
        icon: 'वृ',
        title: 'Fetal Organogenesis & Growth',
        desc: 'Month-specific micro-nutrients supporting rapid brain, heart, spine, and sensory organ development during months 1 to 4.',
      },
      {
        icon: 'र',
        title: 'Gestational Anemia & Fatigue',
        desc: 'Natural bioavailable iron and calcium tonics (Dhatri Lauha, Praval Pishti) supporting optimal maternal hemoglobin levels.',
      },
      {
        icon: 'सू',
        title: 'Backache & Pelvic Strain',
        desc: 'Relief from sacroiliac joint pain, muscle cramps, and spinal lordosis through safe herbal oils and customized prenatal yoga.',
      },
      {
        icon: 'शां',
        title: 'Maternal Stress & Anxiety',
        desc: 'Mindfulness practices, Vedic chants, and Garbha Samvada to maintain serene maternal cortisol levels.',
      },
      {
        icon: 'प्र',
        title: 'Natural Delivery Preparation',
        desc: 'Third-trimester perineal oiling (Pichu dharana) and pelvic toning to encourage smooth cervical dilation and normal labor.',
      },
    ],
    warningTitle: 'Full obstetric coordination',
    warningBody:
      'Garbhsanskara is an integrative wellness protocol that complements standard modern obstetric care. Routine prenatal sonography (NT scan, Anomaly scan, Growth scan), routine blood tests, and obstetrician visits proceed as scheduled.',
  },
  grades: {
    sectionTag: 'Trimester Breakdown',
    sectionTitle: 'Nine-month journey of <em>Masanumasik Paricharya.</em>',
    sectionLede:
      'Each month features tailored Ayurvedic nutrition and herbs aligning with embryonic growth stages.',
    items: [
      {
        badge: 'M1–3',
        label: 'First Trimester',
        title: 'Months 1 to 3: Implantation & Organogenesis',
        desc: 'Focus on uterine stabilization, preventing early spotting, satvic cold foods (sweet milk, ghee, madhu), and nausea relief.',
        treatment: 'Garbhadharana Rasayanas, cold-potency herbal tonics, gentle resting',
      },
      {
        badge: 'M4–6',
        label: 'Second Trimester',
        title: 'Months 4 to 6: Muscle, Heart & Bone Formation',
        desc: 'Enhanced protein and calcium nutrition (Shashtika Shali, milk, butter), brain tonics (Brahmi, Medhya herbs), and active prenatal yoga.',
        treatment: 'Fetal sensory stimulation (Garbha Samvada), iron-calcium supplementation',
      },
      {
        badge: 'M7–9',
        label: 'Third Trimester',
        title: 'Months 7 to 9: Vitality & Normal Labor Preparation',
        desc: 'Pacification of Vata dosha, Sukha Prasava ghee preparations, medicated oil vaginal swabs (Anuvasana Basti / Pichu) from week 36.',
        treatment: 'Pelvic elasticity exercises, perineal preparation for normal delivery',
      },
      {
        badge: 'Post',
        label: 'Postpartum',
        title: 'Transition to Sutika Paricharya',
        desc: 'Smooth handover to traditional postnatal recovery, lactation support, and pelvic restorative care.',
        treatment: 'Lactation enhancement, abdominal binding, restorative Abhyanga',
      },
    ],
  },
  causes: {
    leadHeadline: 'The four classical pillars of <em>Garbha Sambhava Samagri.</em>',
    leadParagraphs: [
      'Ayurveda compares fetal development to the germination of a seed, requiring four vital factors: Ritu (fertile timing), Kshetra (healthy maternal uterus), Ambu (adequate nourishment/amniotic fluid), and Beeja (healthy ovum and sperm).',
      'Masanumasik Garbhsanskara systematically enriches maternal Dhatus (tissues) so that the growing child receives balanced physical, cognitive, and psychological nourishment.',
    ],
    causesList: [
      {
        title: 'Ahara (Month-by-Month Nutrition).',
        desc: 'Specific seasonal diets providing natural vitamins, iron, and calcium suited to each gestational stage.',
      },
      {
        title: 'Vihara (Mindful Lifestyle).',
        desc: 'Adequate rest, posture correction, avoiding heavy physical strain, and soothing sleep patterns.',
      },
      {
        title: 'Manovritti (Psychological Harmony).',
        desc: 'Positive auditory stimulation, classical music, uplifting literature, and calm maternal thoughts.',
      },
      {
        title: 'Yoga & Pranayama.',
        desc: 'Trimester-safe pelvic opening asanas and gentle breathing exercises under certified guidance.',
      },
    ],
  },
  diagnosis: {
    sectionTitle: 'Monthly consultation & <em>monitoring roadmap.</em>',
    sectionLede:
      'Structured monthly visits with Dr. Swati ensure steady maternal health and fetal vitality.',
    steps: [
      {
        stepNum: 'Step 01',
        icon: 'प',
        title: 'Monthly Clinical Assessment',
        desc: 'Weight monitoring, blood pressure check, abdominal examination, and review of obstetric sonography reports.',
      },
      {
        stepNum: 'Step 02',
        icon: 'औ',
        title: 'Month-Specific Herbal Prescription',
        desc: 'Dispensing safe, classical Ayurvedic medicines corresponding to the exact gestational week.',
      },
      {
        stepNum: 'Step 03',
        icon: 'यो',
        title: 'Prenatal Yoga & Asana Guidance',
        desc: 'Customized prenatal stretching and pelvic strengthening guidance adapted to your pregnancy trimester.',
      },
      {
        stepNum: 'Step 04',
        icon: 'सं',
        title: 'Couples Counseling & Delivery Prep',
        desc: 'Guidance for both parents on emotional bonding, birth preparedness, and labor breathing techniques.',
      },
    ],
  },
  treatments: {
    sectionTitle: 'Core components of our <em>Garbhsanskara programme.</em>',
    sectionLede:
      'A complete holistic package designed for the health of mother and child.',
    items: [
      {
        tierNum: 'Tier 1',
        tierLabel: 'Nutritional Care',
        title: 'Masanumasik Herbal & Satvic Nutrition',
        suitability: 'Best suited for: Every pregnant woman seeking natural wellness and vitality',
        desc: 'Prescription of traditional month-by-month herbs (such as Yashtimadhu, Shatavari, Bala, Gokshura, Sariva) combined with tailored high-nutrition dietary plans.',
        facts: [
          { label: 'Frequency', value: 'Daily home regimen' },
          { label: 'Safety', value: 'Classical, 100% natural' },
          { label: 'Review', value: 'Monthly OPD checkup' },
        ],
        linkText: 'Read about antenatal care',
        linkHref: '/services/female-care/garbhasanskar-antenatal-care/',
      },
      {
        tierNum: 'Tier 2',
        tierLabel: 'Physical Prep',
        title: 'Certified Prenatal Yoga & Pranayama',
        suitability: 'Best suited for: Managing back pain, maintaining pelvic flexibility, and preparing for natural birth',
        desc: 'Supervised gentle asanas (Baddha Konasana, Marjariasana, Tadasana) and calming Pranayama that expand lung capacity and relax pelvic floor muscles.',
        facts: [
          { label: 'Format', value: 'Guided weekly sessions' },
          { label: 'Trimester', value: 'Adapted 1st to 3rd' },
          { label: 'Focus', value: 'Pelvic opening & calm' },
        ],
        linkText: 'Read about yoga guidance',
        linkHref: '/dr-swati/',
      },
      {
        tierNum: 'Tier 3',
        tierLabel: 'Labor Preparation',
        modifierClass: 'treatment-card--ksharsutra',
        title: 'Ninth Month Sukha Prasava Protocol',
        suitability: 'Best suited for: Expectant mothers entering week 36 aiming for normal, smooth delivery',
        desc: 'Classical medicated oil vaginal tamponade (Yoni Pichu) and gentle Anuvasana Basti to lubricate the birth canal, soften the cervix, and normalize downward Apana Vayu.',
        facts: [
          { label: 'Timing', value: 'Weeks 36 to 40' },
          { label: 'Benefit', value: 'Shortens active labor' },
          { label: 'Administration', value: 'Clinical guidance' },
        ],
        linkText: 'Read about postnatal recovery',
        linkHref: '/services/female-care/postnatal-panchakarma/',
      },
    ],
  },
  expect: {
    sectionTitle: 'A calming 9-month pregnancy <em>support circle.</em>',
    sectionLede:
      'We stand beside you at every step of your journey to welcoming your child.',
    steps: [
      {
        stepNum: '01',
        time: 'Trimester 1',
        title: 'Enrollment & Conception Care',
        desc: 'Initial health review, gentle morning sickness control, and foundational embryonic nourishment.',
      },
      {
        stepNum: '02',
        time: 'Trimester 2',
        title: 'Vitality & Prenatal Yoga',
        desc: 'Active fetal bonding, mental harmony practices, and steady musculoskeletal strengthening.',
      },
      {
        stepNum: '03',
        time: 'Trimester 3',
        title: 'Labor Readiness & Pichu Protocol',
        desc: 'Perineal softening therapies, birth plan discussions, and calming breathing techniques.',
      },
      {
        stepNum: '04',
        time: 'Post-Delivery',
        title: 'Postnatal Recovery & Baby Care',
        desc: 'Traditional 45-day Sutika Paricharya and baby massage (Abhyanga) guidance.',
      },
    ],
  },
  faqs: [
    {
      question: 'When should I start the Garbhsanskara programme?',
      answer:
        '<p>You can join the programme at <strong>any time during your pregnancy</strong>. Starting in the first trimester (weeks 4 to 8) allows you to gain the maximum benefits from the month-by-month nutritional regimen, but mothers joining in the 2nd or 3rd trimester also benefit greatly from targeted prenatal care.</p>',
    },
    {
      question: 'Is Garbhsanskara safe alongside modern obstetric medications?',
      answer:
        '<p><strong>Yes, completely safe.</strong> All Ayurvedic preparations used in Masanumasik Garbhsanskara are time-tested, mild, food-grade rasayanas and safe herbs. We coordinate with your obstetrician and do not stop any essential obstetric vitamins or supplements.</p>',
    },
    {
      question: 'Can Garbhsanskara guarantee a normal delivery?',
      answer:
        '<p>While no medical discipline can guarantee a normal delivery (as emergencies like fetal distress or cord around the neck may require caesarean section), Garbhsanskara significantly improves maternal stamina, pelvic flexibility, and cervical softening, which greatly increases the likelihood of a smooth, uncomplicated vaginal birth.</p>',
    },
    {
      question: 'How do I consult Dr. Swati for Garbhsanskara?',
      answer:
        '<p>You can book an appointment by calling <strong>8208927917</strong> or filling out our online appointment form to begin your monthly antenatal visits.</p>',
    },
  ],
  related: [
    {
      icon: 'सू',
      title: 'Postnatal Panchakarma',
      desc: 'Classical Sutika Paricharya 45-day restorative recovery for new mothers.',
      linkText: 'Read about Postnatal care',
      href: '/services/female-care/postnatal-panchakarma/',
    },
    {
      icon: 'उ',
      title: 'Uttarbasti for Infertility',
      desc: 'Classical intra-uterine therapy for tubal blocks, thin endometrium, and fertility support.',
      linkText: 'Read about Uttarbasti',
      href: '/services/female-care/uttarbasti-for-infertility/',
    },
    {
      icon: 'महि',
      title: 'Female Proctology',
      desc: 'Private piles, fissure, and fistula surgical care with Dr. Swati Tongale.',
      linkText: 'Read about Female Proctology',
      href: '/services/female-care/female-proctology/',
    },
  ],
};

export const MENSTRUAL_PCOD_DETAIL: ConditionDetailData = {
  eyebrow: 'Female Specialty Care · Gynaecology Unit',
  devanagari: 'आर्तव विकार',
  titleMain: 'PCOD & Menstrual Disorders:',
  titleAccent: 'Ayurvedic Care',
  subtitle: 'Root-cause metabolic correction and cycle regulation by Dr. Swati Tongale',
  lede: 'Polycystic Ovarian Disease (PCOD/PCOS), irregular periods, painful cramps (dysmenorrhea), and heavy bleeding are metabolic and hormonal disorders that require comprehensive root-cause treatment rather than temporary hormonal suppression. Dr. Swati Tongale provides evidence-based Ayurvedic management combining herbal formulations, dietary correction, and Panchakarma therapies.',
  glance: {
    sanskrit: 'Artava Vikara & Granthi (आर्तव विकार)',
    grades: 'PCOD, Oligomenorrhea, Dysmenorrhea, Menorrhagia',
    commonIn: 'Women aged 15 – 45 years',
    treatmentTier: 'Metabolic Detox, Herbal Regimens & Basti',
    recovery: 'Cycle regulation in 3 to 6 months',
    consultation: '30 – 45 min with hormonal & USG review',
  },
  answerSummary:
    'Menstrual disorders and PCOD at Shri Manmukund Hospital are treated through classical Ayurvedic protocols addressing insulin resistance, metabolic sluggishness (Manda Agni), and doshic imbalances (Vata-Kapha vitiation). Led by Dr. Swati Tongale, treatment focuses on restoring natural spontaneous ovulation, dissolving ovarian follicular cysts, balancing androgen levels, and establishing regular 28-to-30-day menstrual cycles without synthetic hormone dependence.',
  symptoms: {
    sectionTitle: 'Signs of hormonal and metabolic <em>imbalance.</em>',
    sectionLede:
      'If you suffer from irregular periods, painful cramps, or skin changes, our holistic evaluation uncovers the root cause.',
    items: [
      {
        icon: 'का',
        title: 'Irregular or Delayed Periods',
        desc: 'Cycles spaced 40 to 90+ days apart (oligomenorrhea) or periods that occur only with withdrawal pills.',
      },
      {
        icon: 'दु',
        title: 'Severe Painful Cramps (Dysmenorrhea)',
        desc: 'Debilitating lower abdominal cramps, backache, and nausea during the first 48 hours of menstruation (Kashtartava).',
      },
      {
        icon: 'र',
        title: 'Heavy or Prolonged Bleeding',
        desc: 'Excessive flow lasting over 7 days with large clots (Asrigdara/Menorrhagia) causing weakness and anemia.',
      },
      {
        icon: 'भा',
        title: 'Unexplained Weight Gain & Cravings',
        desc: 'Stubborn weight gain, difficulty losing weight around the abdomen, and intense sugar cravings due to insulin resistance.',
      },
      {
        icon: 'के',
        title: 'Acne, Facial Hair & Hair Thinning',
        desc: 'Signs of hyperandrogenism including cystic jawline acne, facial hirsutism, and male-pattern scalp hair fall.',
      },
      {
        icon: 'म',
        title: 'Mood Swings & Fatigue',
        desc: 'Premenstrual dysphoria, chronic daytime fatigue, brain fog, and severe anxiety before menstruation.',
      },
    ],
    warningTitle: 'When to seek specialized gynaecological review',
    warningBody:
      'Sudden heavy continuous bleeding soaking a pad every hour, severe acute pelvic pain, or periods absent for more than 3 consecutive months warrant prompt clinical evaluation and pelvic sonography.',
  },
  grades: {
    sectionTag: 'Condition Spectrum',
    sectionTitle: 'Menstrual conditions treated in our <em>Female Unit.</em>',
    sectionLede:
      'Accurate diagnostic differentiation between metabolic, hormonal, and structural factors guides therapy.',
    items: [
      {
        badge: '01',
        label: 'Metabolic',
        title: 'PCOD / PCOS (Granthi Bhuta Artava)',
        desc: 'Multiple immature follicles in ovaries with insulin resistance, androgen excess, and anovulation.',
        treatment: 'Metabolic stimulants (Kanchanar, Varunadi), Agni Deepana, dietary carb reduction',
      },
      {
        badge: '02',
        label: 'Functional',
        title: 'Painful Periods (Kashtartava / Dysmenorrhea)',
        desc: 'Vata-induced uterine muscle spasm and pelvic congestion causing debilitating monthly pain.',
        treatment: 'Matra Basti with Dhanwantaram oil, Shatapushpa, Dashamoola Kashaya',
      },
      {
        badge: '03',
        label: 'Bleeding',
        title: 'Heavy Bleeding (Raktapradara / Menorrhagia)',
        desc: 'Pitta-vitiated excessive blood flow, endometrial hyperplasia, or hormonal imbalance.',
        treatment: 'Hemostatic Ayurvedic herbs (Lodhra, Ashoka, Pushyanuga Churna), cooling diet',
      },
      {
        badge: '04',
        label: 'Structural',
        title: 'Uterine Fibroids & Adenomyosis (Select Cases)',
        desc: 'Benign myometrial growths causing pelvic fullness and pain, managed conservatively where surgery is not immediately indicated.',
        treatment: 'Lekhana Ayurvedic therapies, Basti cycles, and gynaecological monitoring',
      },
    ],
  },
  causes: {
    leadHeadline: 'Restoring Agni (Metabolism) and clearing <em>Kapha-Vata blockage.</em>',
    leadParagraphs: [
      'In Ayurveda, the menstrual cycle (Artava Chakra) is governed by Vata (movement and rhythm) and Pitta (transformation and bleeding), while ovarian structure is supported by Kapha.',
      'When sedentary lifestyle, refined carbohydrates, and chronic stress impair digestive fire (Manda Agni), toxins (Ama) accumulate in the Artavavaha Srotas (reproductive channels), preventing normal follicle maturation.',
    ],
    causesList: [
      {
        title: 'Insulin Resistance & High Glycemic Diet.',
        desc: 'Refined sugar, fast food, and excess carbohydrates spike insulin, triggering ovarian overproduction of androgens.',
      },
      {
        title: 'Chronic Psychological Stress.',
        desc: 'Elevated cortisol disrupts the hypothalamic-pituitary-ovarian axis, suppressing LH surge and ovulation.',
      },
      {
        title: 'Sedentary Habits & Lack of Movement.',
        desc: 'Slows pelvic lymphatic circulation and metabolic expenditure, aggravating Kapha dosha.',
      },
      {
        title: 'Thyroid & Hormonal Crosstalk.',
        desc: 'Hypothyroidism and elevated prolactin frequently coexist with menstrual irregularity.',
      },
    ],
  },
  diagnosis: {
    sectionTitle: 'Comprehensive 4-step <em>diagnostic protocol.</em>',
    sectionLede:
      'We combine modern hormonal blood panels and pelvic ultrasound with classical pulse and constitution analysis.',
    steps: [
      {
        stepNum: 'Step 01',
        icon: 'इ',
        title: 'Detailed Menstrual & Lifestyle History',
        desc: 'Detailed discussion of cycle length, bleeding duration, pain severity, dietary habits, and stress patterns.',
      },
      {
        stepNum: 'Step 02',
        icon: 'र',
        title: 'Hormonal & Blood Investigation',
        desc: 'Review of LH/FSH ratio, AMH, Thyroid (TSH), Fasting Insulin, and CBC to pinpoint exact endocrine imbalances.',
      },
      {
        stepNum: 'Step 03',
        icon: 'य',
        title: 'Pelvic Sonography (USG)',
        desc: 'Evaluation of ovarian morphology (polycystic appearance), ovarian volume, and endometrial thickness.',
      },
      {
        stepNum: 'Step 04',
        icon: 'य',
        title: 'Custom Treatment Plan',
        desc: 'Formulation of an individual herbal, dietary, and Panchakarma protocol with clear 3-to-6-month milestones.',
      },
    ],
  },
  treatments: {
    sectionTitle: 'Targeted Ayurvedic therapies for <em>hormonal harmony.</em>',
    sectionLede:
      'Restoring your body’s natural rhythm through sustainable, natural, non-hormonal solutions.',
    items: [
      {
        tierNum: 'Tier 1',
        tierLabel: 'Herbal Formulations',
        title: 'Ovarian Stimulating & Anti-Cystic Formulations',
        suitability: 'Best suited for: PCOD, irregular cycles, and mild hormonal dysregulation',
        desc: 'Targeted classical medicines (Kanchanar Guggulu, Varunadi Kashaya, Latakaranj, Pushpadhanwa Rasa, Shatapushpa) that shrink ovarian cysts and trigger natural ovulation.',
        facts: [
          { label: 'Form', value: 'Tablets, Kashayas & Ghee' },
          { label: 'Duration', value: '3 – 6 months' },
          { label: 'Effect', value: 'Natural ovulation' },
        ],
        linkText: 'Read about PCOD care',
        linkHref: '/services/female-care/infertility-and-pcod/',
      },
      {
        tierNum: 'Tier 2',
        tierLabel: 'Panchakarma',
        modifierClass: 'treatment-card--ksharsutra',
        title: 'Matra Basti & Virechana Therapy',
        suitability: 'Best suited for: Severe dysmenorrhea, metabolic stagnation, and stubborn PCOD',
        desc: 'Targeted rectal administration of medicated Dhanwantaram or Sahacharadi oils (Matra Basti) to pacify Apana Vata, combined with seasonal therapeutic purgation (Virechana) to clear liver metabolic congestion.',
        facts: [
          { label: 'Procedure', value: 'Outpatient (OPD)' },
          { label: 'Comfort', value: 'Painless, rapid relief' },
          { label: 'Impact', value: 'Regulates pelvic Vata' },
        ],
        linkText: 'Read about Panchakarma Unit',
        linkHref: '/services/panchakarma/',
      },
      {
        tierNum: 'Tier 3',
        tierLabel: 'Nutritional Medicine',
        title: 'Insulin-Sensitizing Diet & Pathya Protocol',
        suitability: 'Best suited for: Weight management, insulin resistance, and long-term sustainability',
        desc: 'Personalized meal plans rich in fiber, low glycemic index foods, seeds cycling, and stress-reduction routines that keep hormonal balance permanent.',
        facts: [
          { label: 'Guidance', value: 'Doctor-guided charts' },
          { label: 'Approach', value: 'No starvation diets' },
          { label: 'Outcome', value: 'Sustained vitality' },
        ],
        linkText: 'Read about Dr. Swati',
        linkHref: '/dr-swati/',
      },
    ],
  },
  expect: {
    sectionTitle: 'Your path to regular, <em>pain-free cycles.</em>',
    sectionLede:
      'A structured 3 to 6-month journey with observable improvements at every menstrual cycle.',
    steps: [
      {
        stepNum: '01',
        time: 'Month 1 · Kickoff',
        title: 'Metabolic Reset & Digestion Correction',
        desc: 'Relief from bloating, digestive sluggishness, and initial cycle initiation using Agni-enhancing herbs.',
      },
      {
        stepNum: '02',
        time: 'Months 2 – 3',
        title: 'Pain Relief & Ovulation Resumption',
        desc: 'Noticeable reduction in dysmenorrhea cramps and spontaneous natural menstrual bleed without pills.',
      },
      {
        stepNum: '03',
        time: 'Months 4 – 6',
        title: 'Cycle Regularization & Cyst Shrinkage',
        desc: 'Consistent 28–32 day cycles established; repeat sonography shows reduction in ovarian cyst clusters.',
      },
      {
        stepNum: '04',
        time: 'Long Term',
        title: 'Maintenance & Metabolic Freedom',
        desc: 'Tapering of Ayurvedic medications while maintaining lifestyle habits for permanent health.',
      },
    ],
  },
  faqs: [
    {
      question: 'Can PCOD be cured permanently with Ayurveda?',
      answer:
        '<p>PCOD is a metabolic tendency. With structured Ayurvedic treatment, dietary correction, and lifestyle adjustments, you can <strong>completely reverse symptoms, shrink ovarian cysts, achieve regular natural periods, and conceive naturally</strong> without needing lifelong birth control or hormone pills.</p>',
    },
    {
      question: 'Will I need to take birth control pills while on Ayurvedic treatment?',
      answer:
        '<p>No. Our goal is to stimulate your ovaries to produce natural estrogen and progesterone on their own. We systematically wean patients off artificial hormone withdrawal pills under medical supervision.</p>',
    },
    {
      question: 'How long does it take to see results for irregular periods?',
      answer:
        '<p>Most patients experience noticeable improvements in energy, bloating, and cramp reduction within the first 30 days. Regularization of spontaneous menstrual cycles typically takes <strong>3 to 6 months</strong> of disciplined therapy.</p>',
    },
    {
      question: 'How do I book an appointment with Dr. Swati?',
      answer:
        '<p>Call <strong>8208927917</strong> or use our online appointment form. Walk-ins during OPD hours (2:30 PM–4:30 PM & 6:00 PM–8:00 PM Mon-Sat) are also welcome.</p>',
    },
  ],
  related: [
    {
      icon: 'उ',
      title: 'Uttarbasti for Infertility',
      desc: 'Classical intra-uterine therapy for tubal blocks, thin endometrium, and fertility support.',
      linkText: 'Read about Uttarbasti',
      href: '/services/female-care/uttarbasti-for-infertility/',
    },
    {
      icon: 'महि',
      title: 'Female Proctology',
      desc: 'Private piles, fissure, and fistula surgical care with Dr. Swati Tongale.',
      linkText: 'Read about Female Proctology',
      href: '/services/female-care/female-proctology/',
    },
    {
      icon: 'ग',
      title: 'Masanumasik Garbhsanskara',
      desc: 'Month-by-month Ayurvedic antenatal care for healthy pregnancy and baby.',
      linkText: 'Read about Garbhsanskara',
      href: '/services/female-care/garbhasanskar-antenatal-care/',
    },
  ],
};

export const POSTNATAL_CARE_DETAIL: ConditionDetailData = {
  eyebrow: 'Female Specialty Care · Postnatal Unit',
  devanagari: 'सूतिका परिचर्या',
  titleMain: 'Postnatal Panchakarma &',
  titleAccent: 'Sutika Paricharya',
  subtitle: 'Classical 45-day traditional Ayurvedic recovery and rejuvenation for new mothers in Amravati',
  lede: 'Childbirth is a profound physiological transformation that demands dedicated restorative care. Sutika Paricharya is the time-honored classical Ayurvedic science of postnatal rehabilitation. Under Dr. Swati Tongale’s clinical guidance, new mothers receive structured 45-day restorative therapy combining medicated Abhyanga, pelvic toning, uterine involution herbs, and lactation enhancement.',
  glance: {
    sanskrit: 'Sutika Paricharya (सूतिका परिचर्या)',
    grades: 'Normal Vaginal & Caesarean Delivery Protocols',
    commonIn: 'New mothers from Day 3 to 6 months postpartum',
    treatmentTier: 'Therapeutic Abhyanga, Swedana & Herbal Care',
    recovery: '45-day classical restoration cycle',
    consultation: 'Dedicated new mother & baby-friendly visits',
  },
  answerSummary:
    'Postnatal Panchakarma (Sutika Paricharya) at Shri Manmukund Hospital is a specialized restorative healthcare programme designed by Dr. Swati Tongale, MS (Ayurveda Shalya Tantra). Adapted for both normal and caesarean deliveries, it combines full-body medicated oil massages (Abhyanga with Bala Taila), herbal steam, gentle pelvic binding (Udaraveshtana), classical uterine toning formulations, and galactagogues to replenish maternal vitality, relieve back pain, and support rich lactation.',
  symptoms: {
    sectionTitle: 'Common postpartum concerns <em>resolved with Sutika Paricharya.</em>',
    sectionLede:
      'The fourth trimester places immense physical, hormonal, and emotional demands on a mother’s body.',
    items: [
      {
        icon: 'क',
        title: 'Severe Lower Back & Joint Pain',
        desc: 'Sacroiliac joint laxity, postural strain from nursing, and muscular exhaustion across neck, shoulders, and lower back.',
      },
      {
        icon: 'दु',
        title: 'Lactation Insufficiency & Breast Engorgement',
        desc: 'Low milk supply, painful letdown, or duct congestion benefiting from classical Galactagogue herbs (Stanya Janana).',
      },
      {
        icon: 'उ',
        title: 'Delayed Uterine Involution & Lochia',
        desc: 'Prolonged postpartum lochial discharge, uterine subinvolution, and abdominal muscle diastasis recti.',
      },
      {
        icon: 'गु',
        title: 'Postpartum Piles & Fissure Spasm',
        desc: 'Perianal tearing, hemorrhoidal flare-ups, and painful constipation following labor straining and dehydration.',
      },
      {
        icon: 'म',
        title: 'Postpartum Fatigue & Emotional Blues',
        desc: 'Severe sleep deprivation, hormonal crashes, and postpartum exhaustion treated with soothing nerve tonics.',
      },
      {
        icon: 'त्व',
        title: 'Abdominal Laxity & Stretch Marks',
        desc: 'Loss of core pelvic floor tone and skin laxity addressed through specialized traditional abdominal binding.',
      },
    ],
    warningTitle: 'Full obstetric clearance and coordination',
    warningBody:
      'We coordinate closely with your obstetrician. For caesarean deliveries, deep abdominal therapies begin after wound healing clearance, while gentle limb massages and oral restorative herbs can commence immediately.',
  },
  grades: {
    sectionTag: 'Programme Phasing',
    sectionTitle: 'The classical 45-day <em>Sutika Paricharya cycle.</em>',
    sectionLede:
      'Divided into three structured 15-day recovery stages for comprehensive maternal rejuvenation.',
    items: [
      {
        badge: '01',
        label: 'Days 1 – 15',
        title: 'Phase 1: Digestive Fire & Uterine Cleansing',
        desc: 'Focus on restoring digestive fire (Agni Deepana), gentle uterine cleansing (Yoni Shodhana), and warm satvic soups with Dashamoola.',
        treatment: 'Jeerakarishta, Panchakola Phanta, gentle warm fomentation',
      },
      {
        badge: '02',
        label: 'Days 16 – 30',
        title: 'Phase 2: Muscle Toning & Full Body Abhyanga',
        desc: 'Daily warm medicated oil massage with Bala Ashwagandhadi and Dhanwantaram taila to tone muscles and strengthen spine.',
        treatment: 'Full body Abhyanga, herbal steam, traditional cotton cloth abdominal binding',
      },
      {
        badge: '03',
        label: 'Days 31 – 45',
        title: 'Phase 3: Deep Dhatu Rejuvenation & Vitality',
        desc: 'Rebuilding deep bone, muscle, and marrow tissues with nourishing rasayanas, Shatavari Gulam, and lactation tonics.',
        treatment: 'Shatavari, Ashwagandha Rasayana, gentle pelvic floor strengthening',
      },
      {
        badge: '04',
        label: 'Lifelong',
        title: 'Phase 4: Transition to Full Wellness',
        desc: 'Restored core strength, vibrant energy, rich breast milk supply, and prevention of long-term maternal arthritis.',
        treatment: 'Postnatal diet guidelines and sustainable fitness habits',
      },
    ],
  },
  causes: {
    leadHeadline: 'Pacifying aggravated Vata dosha <em>after the void of childbirth.</em>',
    leadParagraphs: [
      'In Ayurvedic pathology, the sudden physical void created inside the uterus and pelvic cavity following delivery severely aggravates Vata dosha (the principle of movement and space).',
      'If not treated with warm unctuous oils (Snehana), heat (Swedana), and nourishing foods, aggravated Vata can lead to chronic maternal joint pain, digestive weakness, and emotional vulnerability for years to come.',
    ],
    causesList: [
      {
        title: 'Loss of Blood & Fluid (Dhatu Kshaya).',
        desc: 'Depletion of bodily tissues during labor requires rich, easily digestible nourishing tonics.',
      },
      {
        title: 'Pelvic Floor & Core Overstretching.',
        desc: 'Relaxin hormone and delivery strain weaken ligamentous pelvic floor support.',
      },
      {
        title: 'Lactational Metabolic Drain.',
        desc: 'Breastfeeding demands an additional 500+ calories daily of vital micronutrients and healthy fats.',
      },
      {
        title: 'Circadian Rhythm Disruption.',
        desc: 'Frequent newborn waking aggravates nervous system Vata, requiring calming herbal support.',
      },
    ],
  },
  diagnosis: {
    sectionTitle: 'Personalized postnatal <em>recovery evaluation.</em>',
    sectionLede:
      'Consultations with Dr. Swati are baby-friendly, compassionate, and timed around your feeding schedule.',
    steps: [
      {
        stepNum: 'Step 01',
        icon: 'प',
        title: 'Post-Delivery Health Review',
        desc: 'Assessment of delivery type (normal vs C-section), episiotomy or scar healing, lochia color, and blood pressure.',
      },
      {
        stepNum: 'Step 02',
        icon: 'स्त',
        title: 'Lactation & Breast Examination',
        desc: 'Gentle check for nipple health, milk flow, engorgement, and baby latching comfort.',
      },
      {
        stepNum: 'Step 03',
        icon: 'पे',
        title: 'Pelvic & Perineal Assessment',
        desc: 'Screening for postpartum piles, fissures, or pelvic heaviness in complete privacy.',
      },
      {
        stepNum: 'Step 04',
        icon: 'यो',
        title: 'Custom Care Programme',
        desc: 'Prescription of home herbal medicines, oil recommendations, and OPD Panchakarma massage schedules.',
      },
    ],
  },
  treatments: {
    sectionTitle: 'Holistic restorative therapies for <em>mother and baby.</em>',
    sectionLede:
      'Combining authentic Ayurvedic healing rituals with modern maternal safety.',
    items: [
      {
        tierNum: 'Tier 1',
        tierLabel: 'Physical Recovery',
        title: 'Therapeutic Postnatal Abhyanga & Swedana',
        suitability: 'Best suited for: Body aches, joint stiffness, back pain, and deep relaxation',
        desc: 'Full-body rhythmic medicated massage with warm classical Bala and Dhanwantaram oils, followed by gentle herbal steam to flush toxins and relieve muscle fatigue.',
        facts: [
          { label: 'Session Time', value: '45 – 60 min' },
          { label: 'Oils Used', value: 'Bala, Dhanwantaram, Ksheerabala' },
          { label: 'Format', value: 'OPD / Home guidance' },
        ],
        linkText: 'Read about postnatal care',
        linkHref: '/services/female-care/sutika-paricharya-postnatal-care/',
      },
      {
        tierNum: 'Tier 2',
        tierLabel: 'Internal Rejuvenation',
        title: 'Uterine Involution & Lactation Rasayanas',
        suitability: 'Best suited for: Enhancing breast milk production and speeding uterine recovery',
        desc: 'Prescription of classical formulations such as Shatavari Gulam, Dashamoolarishta, Jeerakarishta, and Soubhagya Shunti Lehyam to promote healthy milk supply and core vitality.',
        facts: [
          { label: 'Form', value: 'Herbal arishtas & lehyas' },
          { label: 'Safety', value: '100% safe for baby' },
          { label: 'Duration', value: '45 – 90 days' },
        ],
        linkText: 'Read about Dr. Swati',
        linkHref: '/dr-swati/',
      },
      {
        tierNum: 'Tier 3',
        tierLabel: 'Core Support',
        modifierClass: 'treatment-card--ksharsutra',
        title: 'Traditional Udaraveshtana (Abdominal Binding)',
        suitability: 'Best suited for: Core muscle realignment, back support, and preventing visceral sagging',
        desc: 'Gentle binding of the abdomen with soft, long cotton cloth after massage to provide structural support to stretched abdominal muscles and promote visceral repositioning.',
        facts: [
          { label: 'Technique', value: 'Classical cotton wrap' },
          { label: 'Benefit', value: 'Relieves lower back strain' },
          { label: 'Caesarean', value: 'Applied after scar heal' },
        ],
        linkText: 'Read about Female Specialty Care',
        linkHref: '/services/female-care/',
      },
    ],
  },
  expect: {
    sectionTitle: 'Your serene 45-day <em>postnatal journey.</em>',
    sectionLede:
      'We nurture the mother so she can joyfully nurture her newborn.',
    steps: [
      {
        stepNum: '01',
        time: 'Week 1',
        title: 'Gentle Initiation & Lactation Boost',
        desc: 'Digestive tonics, soothing herbal drinks, and gentle perineal care to establish comfortable breastfeeding.',
      },
      {
        stepNum: '02',
        time: 'Weeks 2 – 4',
        title: 'Restorative Oil Therapy & Core Binding',
        desc: 'Regular Abhyanga sessions, abdominal binding, and steady relief from backache and fatigue.',
      },
      {
        stepNum: '03',
        time: 'Weeks 5 – 6',
        title: 'Deep Tissue Strengthening',
        desc: 'Nourishing rasayanas, bone-toning herbs, and gentle pelvic floor strengthening exercises.',
      },
      {
        stepNum: '04',
        time: 'Day 45 · Celebration',
        title: 'Full Recovery & Vitality Review',
        desc: 'Final health assessment confirming complete uterine involution, robust energy, and thriving lactation.',
      },
    ],
  },
  faqs: [
    {
      question: 'Can I start postnatal Panchakarma if I had a Caesarean delivery (C-section)?',
      answer:
        '<p><strong>Yes, absolutely.</strong> For Caesarean births, we begin with gentle limb and back massage, lactation herbs, and digestive tonics in the first two weeks. Direct abdominal massage and binding commence once your obstetrician confirms that the surgical incision has healed cleanly.</p>',
    },
    {
      question: 'Are the Ayurvedic medicines safe for my breastfed baby?',
      answer:
        '<p><strong>Yes, 100% safe.</strong> Classical Sutika Paricharya formulations like Shatavari, Jeerakarishta, and Dashamoolarishta enhance breast milk quality and volume while passing gentle digestive benefits to the baby, reducing infant colic and gas.</p>',
    },
    {
      question: 'Can I bring my newborn baby with me for consultations?',
      answer:
        '<p>Yes, our Female Care Unit is completely baby-friendly. We have comfortable nursing spaces, and appointment timings can easily be adapted around your feeding schedules.</p>',
    },
    {
      question: 'How do I book a consultation with Dr. Swati?',
      answer:
        '<p>You or a family member can call <strong>8208927917</strong> or use our online appointment form to schedule a dedicated postnatal consultation.</p>',
    },
  ],
  related: [
    {
      icon: 'ग',
      title: 'Masanumasik Garbhsanskara',
      desc: 'Month-by-month Ayurvedic antenatal care for healthy pregnancy and baby.',
      linkText: 'Read about Garbhsanskara',
      href: '/services/female-care/garbhasanskar-antenatal-care/',
    },
    {
      icon: 'महि',
      title: 'Female Proctology',
      desc: 'Private piles, fissure, and fistula surgical care with Dr. Swati Tongale.',
      linkText: 'Read about Female Proctology',
      href: '/services/female-care/female-proctology/',
    },
    {
      icon: 'उ',
      title: 'Uttarbasti for Infertility',
      desc: 'Classical intra-uterine therapy for tubal blocks, thin endometrium, and fertility support.',
      linkText: 'Read about Uttarbasti',
      href: '/services/female-care/uttarbasti-for-infertility/',
    },
  ],
};

export const JALAUKA_DETAIL: ConditionDetailData = {
  eyebrow: 'Ayurveda & Panchakarma · Parasurgical Therapy',
  devanagari: 'जलौकावचारण',
  titleMain: 'Jalauka (Leech Therapy) &',
  titleAccent: 'Raktamokshana',
  subtitle: 'Classical Ayurvedic bio-purification and bloodletting with medicinal leeches in Amravati',
  lede: 'Jalaukavacharana (medicinal leech therapy) is one of the most sophisticated classical Ayurvedic parasurgical procedures described in Sushruta Samhita. By utilizing specially cultivated, sterile medicinal leeches (Hirudo medicinalis), it delivers targeted bio-purification for localized vascular congestion, varicose eczema, chronic non-healing ulcers, venous stasis, and severe dermatological diseases.',
  glance: {
    sanskrit: 'Jalaukavacharana (जलौकावचारण)',
    grades: 'Sterile Single-Patient Medicinal Leech Application',
    commonIn: 'Varicose ulcers, chronic eczema, non-healing wounds, vascular stasis',
    treatmentTier: 'Classical Ayurvedic Parasurgery (Anushalya)',
    recovery: 'Same-day OPD procedure (30–60 min)',
    consultation: '30 – 45 min clinical & vascular evaluation',
  },
  answerSummary:
    'Jalauka (Medicinal Leech Therapy) at Shri Manmukund Hospital is a specialized classical Ayurvedic bloodletting procedure (Raktamokshana) performed under strict aseptic surgical protocols. As the medicinal leech feeds on locally stagnant venous blood, its saliva releases over 100 bioactive compounds—including hirudin (a potent anticoagulant), hyaluronidase, histamine-like vasodilators, and natural anti-inflammatory enzymes—providing immediate decompression of congested tissues, boosting micro-vascular circulation, and accelerating tissue regeneration.',
  symptoms: {
    sectionTitle: 'Conditions treated with <em>Jalaukavacharana.</em>',
    sectionLede:
      'Medicinal leech therapy provides profound therapeutic benefits in conditions driven by vitiated Pitta and Rakta (blood stasis).',
    items: [
      {
        icon: 'शि',
        title: 'Varicose Veins & Stasis Dermatitis',
        desc: 'Chronic lower limb venous congestion, hyperpigmentation, swelling, and burning eczema in legs.',
      },
      {
        icon: 'व्र',
        title: 'Non-Healing & Diabetic Ulcers',
        desc: 'Sluggish, dusky wounds with poor arterial-venous circulation that resist conventional healing.',
      },
      {
        icon: 'त्व',
        title: 'Severe Chronic Skin Diseases',
        desc: 'Localized plaque psoriasis, chronic eczema, lichen planus, and deep cystic acne refractory to oral medications.',
      },
      {
        icon: 'शो',
        title: 'Localized Inflammatory Swellings',
        desc: 'Cellulitis, perianal inflammatory congestion, painful thrombosed piles, and localized tissue hematomas.',
      },
      {
        icon: 'सं',
        title: 'Osteoarthritis & Joint Inflammation',
        desc: 'Chronic inflammatory joint effusion, localized redness, and intense peri-articular pain.',
      },
      {
        icon: 'ना',
        title: 'Filariasis & Lymphoedema (Early)',
        desc: 'Early lymphatic stasis and micro-vascular stagnation causing limb heaviness and localized thickening.',
      },
    ],
    warningTitle: 'Strict clinical safety standards',
    warningBody:
      'At Shri Manmukund Hospital, we use exclusively certified non-poisonous medicinal leeches (Nirvisha Jalauka). Every leech is single-patient, single-use and disposed of ethically following biomedical protocols. Leech therapy is contraindicated in hemophilia, severe anemia, and patients on active high-dose systemic anticoagulants.',
  },
  grades: {
    sectionTag: 'Therapeutic Actions',
    sectionTitle: 'Bio-mechanisms of <em>medicinal leech saliva.</em>',
    sectionLede:
      'Leech saliva is a natural pharmacological complex containing dozens of therapeutic enzymes.',
    items: [
      {
        badge: '01',
        label: 'Hirudin',
        title: 'Direct Anticoagulant & Micro-Thrombolytic',
        desc: 'Hirudin selectively binds thrombin, preventing clot propagation and breaking micro-thrombi in sluggish capillary beds.',
        treatment: 'Decongests stagnant venous pools and enhances capillary perfusion',
      },
      {
        badge: '02',
        label: 'Hyaluronidase',
        title: 'Tissue Penetration & Anti-Edema',
        desc: 'Breaks down intercellular ground substance, promoting deep penetration of healing compounds and rapid fluid drainage.',
        treatment: 'Reduces localized inflammatory edema and induration',
      },
      {
        badge: '03',
        label: 'Vasodilators',
        title: 'Histamine-Like Substances & Calin',
        desc: 'Dilates local arterioles while inhibiting platelet aggregation at the wound site to restore healthy arterial blood influx.',
        treatment: 'Brings fresh oxygenated blood to ischemic tissue beds',
      },
      {
        badge: '04',
        label: 'Analgesics',
        title: 'Natural Anti-Inflammatory & Anesthetic Peptides',
        desc: 'Eglins and bdellins inhibit elastase and cathepsin, providing natural pain relief and suppressing destructive tissue inflammation.',
        treatment: 'Soothes throbbing pain and burning sensations immediately',
      },
    ],
  },
  causes: {
    leadHeadline: 'Raktamokshana: The classical surgical remedy for <em>Dushita Rakta (toxic blood).</em>',
    leadParagraphs: [
      'According to Sushruta Samhita, when vitiated Pitta combines with Rakta (blood), it creates localized inflammation, burning, discoloration, and tissue necrosis.',
      'Jalauka is described as the supreme, gentlest method of Raktamokshana for delicate patients, women, and sensitive anatomical regions because it extracts only vitiated blood without painful cutting or surgical trauma.',
    ],
    causesList: [
      {
        title: 'Venous Valve Incompetence & Stasis.',
        desc: 'Elevated hydrostatic pressure in leg veins leads to extravasation of red blood cells and severe tissue hypoxia.',
      },
      {
        title: 'Microvascular Micro-Thrombosis.',
        desc: 'Capillary occlusions in chronic diabetic wounds that prevent healing factors from reaching the wound edge.',
      },
      {
        title: 'Accumulation of Metabolic Toxins (Ama).',
        desc: 'Circulating inflammatory mediators depositing in cutaneous and subcutaneous tissues.',
      },
      {
        title: 'Localized Tissue Ischemia & Congestion.',
        desc: 'Dark dusky skin surrounding non-healing ulcers signaling urgent need for capillary decompression.',
      },
    ],
  },
  diagnosis: {
    sectionTitle: 'Aseptic 4-step <em>procedure protocol.</em>',
    sectionLede:
      'Conducted in our dedicated minor surgical suite under the direct supervision of our Ayurvedic surgeons.',
    steps: [
      {
        stepNum: 'Step 01',
        icon: 'प',
        title: 'Pre-Procedure Screening & CBC',
        desc: 'Confirmation of hemoglobin (>9 g/dL), coagulation profile (PT/INR), and skin disinfection with sterile turmeric wash.',
      },
      {
        stepNum: 'Step 02',
        icon: 'ज',
        title: 'Leech Application (Purvakarma)',
        desc: 'The medicinal leech is activated in fresh water with Haridra and gently placed on the target congested tissue.',
      },
      {
        stepNum: 'Step 03',
        icon: 'र',
        title: 'Therapeutic Bloodletting (Pradhana Karma)',
        desc: 'The leech attaches with an inverted ‘Y’ bite and feeds for 20 to 45 minutes until full, then detaches naturally.',
      },
      {
        stepNum: 'Step 04',
        icon: 'ब',
        title: 'Antiseptic Dressing (Paschat Karma)',
        desc: 'The site is dusted with classical Shatadhouta Ghrita or turmeric powder and dressed securely with sterile gauze.',
      },
    ],
  },
  treatments: {
    sectionTitle: 'Integrated parasurgical care for <em>vascular & skin health.</em>',
    sectionLede:
      'Leech therapy is paired with specialized classical herbal washes and wound-healing oils.',
    items: [
      {
        tierNum: 'Tier 1',
        tierLabel: 'Bio-Purification',
        title: 'Classical Jalaukavacharana (Leech Application)',
        suitability: 'Best suited for: Varicose ulcers, eczema, chronic skin diseases, and thrombosed piles',
        desc: 'Application of 2 to 6 sterile medicinal leeches per session depending on the surface area of pathology. Painless sensation, minimal downtime.',
        facts: [
          { label: 'Duration', value: '30 – 45 min per session' },
          { label: 'Safety', value: 'Single-use certified leeches' },
          { label: 'Frequency', value: '1 to 2 sessions per week' },
        ],
        linkText: 'Read about Leech therapy',
        linkHref: '/services/ayurveda-panchakarma/leech-therapy-jalaukavacharana/',
      },
      {
        tierNum: 'Tier 2',
        tierLabel: 'Wound Healing',
        modifierClass: 'treatment-card--ksharsutra',
        title: 'Vrana Shodhana & Ropana (Herbal Dressing)',
        suitability: 'Best suited for: Chronic venous and diabetic ulcers requiring tissue regeneration',
        desc: 'Cleansing with Triphala or Panchavalkala Kashaya followed by sterile application of Jatyadi Taila or Shuddha Gandhaka formulations to accelerate granulation tissue.',
        facts: [
          { label: 'Action', value: 'Anti-microbial & healing' },
          { label: 'Regimen', value: 'Daily / Alternate day' },
          { label: 'Outcome', value: 'Prevents amputations' },
        ],
        linkText: 'Read about Ayurvedic Wound Care',
        linkHref: '/services/ayurveda/',
      },
      {
        tierNum: 'Tier 3',
        tierLabel: 'Systemic Blood Purifiers',
        title: 'Raktashodhaka Internal Ayurvedic Formulations',
        suitability: 'Best suited for: Systemic skin diseases, chronic Pitta vitiation, and recurring inflammation',
        desc: 'Prescription of classical blood-cleansing herbal decoctions such as Mahamanjishtadi Kashaya, Khadirarishta, Kaishore Guggulu, and Sarivadyasava.',
        facts: [
          { label: 'Duration', value: '1 – 3 months' },
          { label: 'Form', value: 'Classical liquids & tablets' },
          { label: 'Benefit', value: 'Prevents recurrence' },
        ],
        linkText: 'Read about Panchakarma Unit',
        linkHref: '/services/panchakarma/',
      },
    ],
  },
  expect: {
    sectionTitle: 'What to expect during a <em>leech therapy session.</em>',
    sectionLede:
      'A hygienic, painless, and deeply restorative therapeutic experience.',
    steps: [
      {
        stepNum: '01',
        time: 'Pre-Session',
        title: 'Area Preparation',
        desc: 'The affected skin is cleaned with sterile saline and mild herbal wash. No chemicals or soaps are used.',
      },
      {
        stepNum: '02',
        time: 'Attachment',
        title: 'Mild Pinch & Secretion',
        desc: 'A brief, mild sensation similar to an ant bite as the leech releases its natural anesthetic saliva, followed by total numbness.',
      },
      {
        stepNum: '03',
        time: '20 – 45 min',
        title: 'Rhythmic Bio-Feeding',
        desc: 'The leech steadily decompresses the dark stagnant blood while infusing active therapeutic hirudin enzymes.',
      },
      {
        stepNum: '04',
        time: 'Post-Session',
        title: 'Sterile Dressing & Healing',
        desc: 'Mild oozing for 6 to 12 hours (a normal therapeutic sign of venous decompression) followed by rapid reduction in swelling and discoloration.',
      },
    ],
  },
  faqs: [
    {
      question: 'Does leech therapy hurt?',
      answer:
        '<p><strong>No.</strong> The initial attachment feels like a very mild prick or ant bite for a few seconds. The leech immediately secretes natural anesthetic compounds in its saliva, making the remainder of the 30-minute session completely painless.</p>',
    },
    {
      question: 'Are leeches reused on other patients?',
      answer:
        '<p><strong>Absolutely not.</strong> Shri Manmukund Hospital maintains a strict zero-reuse policy. Each medicinal leech is used on a single patient for a single session and is subsequently purified and disposed of in accordance with biomedical protocols.</p>',
    },
    {
      question: 'How many sessions of leech therapy will I need?',
      answer:
        '<p>This depends on the condition being treated. Acute swelling or thrombosed piles may require only <strong>1 or 2 sessions</strong>, whereas chronic varicose eczema or non-healing ulcers typically benefit from a course of <strong>4 to 8 sessions</strong> spaced over 3 to 4 weeks.</p>',
    },
    {
      question: 'Why does the bite site ooze blood after the leech is removed?',
      answer:
        '<p>Post-procedure oozing of serosanguinous fluid for 6 to 12 hours is an intentional, highly beneficial therapeutic mechanism caused by the anticoagulant hirudin. It decompresses congested capillary beds and is safely managed with a standard sterile absorbent dressing.</p>',
    },
  ],
  related: [
    {
      icon: 'महि',
      title: 'Female Proctology',
      desc: 'Private piles, fissure, and fistula surgical care with Dr. Swati Tongale.',
      linkText: 'Read about Female Proctology',
      href: '/services/female-care/female-proctology/',
    },
    {
      icon: 'उ',
      title: 'Uttarbasti for Infertility',
      desc: 'Classical intra-uterine therapy for tubal blocks, thin endometrium, and fertility support.',
      linkText: 'Read about Uttarbasti',
      href: '/services/female-care/uttarbasti-for-infertility/',
    },
    {
      icon: 'सू',
      title: 'Postnatal Panchakarma',
      desc: 'Classical Sutika Paricharya 45-day restorative recovery for new mothers.',
      linkText: 'Read about Postnatal care',
      href: '/services/female-care/postnatal-panchakarma/',
    },
  ],
};

const CONDITION_REGISTRY: Record<string, ConditionDetailData> = {
  piles: PILES_DETAIL,
  'anal-fissure': FISSURE_DETAIL,
  'anal-fistula': FISTULA_DETAIL,
  'for-anal-fistula': FISTULA_DETAIL,
  'laser-piles-surgery': PILES_DETAIL,
  'laser-fissure-treatment': FISSURE_DETAIL,
  'laser-fistula-treatment': FISTULA_DETAIL,
  'female-proctology': FEMALE_PROCTOLOGY_DETAIL,
  'uttarbasti-for-infertility': UTTARBASTI_DETAIL,
  'uttarbasti-therapy': UTTARBASTI_DETAIL,
  uttarbasti: UTTARBASTI_DETAIL,
  'garbhasanskar-antenatal-care': GARBHSANSKARA_DETAIL,
  'masanumasik-garbhsanskara': GARBHSANSKARA_DETAIL,
  garbhsanskara: GARBHSANSKARA_DETAIL,
  'infertility-and-pcod': MENSTRUAL_PCOD_DETAIL,
  'menstrual-disorders': MENSTRUAL_PCOD_DETAIL,
  'sutika-paricharya-postnatal-care': POSTNATAL_CARE_DETAIL,
  'postnatal-panchakarma': POSTNATAL_CARE_DETAIL,
  'leech-therapy-jalaukavacharana': JALAUKA_DETAIL,
  'jalauka-leech-therapy': JALAUKA_DETAIL,
};

export function getConditionDetailData(
  categorySlug: string,
  conditionSlug: string,
  fallbackName: string,
  fallbackSanskrit?: string,
  fallbackSummary?: string,
  fallbackCategoryName?: string
): ConditionDetailData {
  if (CONDITION_REGISTRY[conditionSlug]) {
    return CONDITION_REGISTRY[conditionSlug];
  }

  // Generate a structured high-fidelity clinical profile matching template design
  const cleanName = fallbackName.replace(/\s*\(.*?\)\s*/g, '').trim();
  const sanskrit = fallbackSanskrit || 'आयुर्वेदीय चिकित्सा';
  const catName = fallbackCategoryName || 'Specialist Care';

  return {
    eyebrow: `${catName} · Condition`,
    devanagari: sanskrit.split(' ')[0] || 'चिकित्सा',
    titleMain: cleanName,
    titleAccent: 'Treatment',
    subtitle: `Specialized diagnosis and integrated care in Amravati`,
    lede:
      fallbackSummary ||
      `${cleanName} diagnosis and treatment at Shri Manmukund Hospital, Amravati. Combining classical Ayurvedic surgical science with modern minimally invasive options.`,
    glance: {
      sanskrit: `${cleanName} (${sanskrit})`,
      grades: 'Clinical Grade I – IV / Severity Staged',
      commonIn: 'Adults across all age groups',
      treatmentTier: 'Comprehensive Multitier Care',
      recovery: '1 day to 3 weeks',
      consultation: '30 – 45 minutes',
    },
    answerSummary:
      fallbackSummary ||
      `${cleanName} is carefully evaluated through clinical history, physical examination, and appropriate diagnostic investigation. Treatment plans are customized based on severity, personal health factors, and patient preference between classical Ayurvedic parasurgery and modern surgical care.`,
    symptoms: {
      sectionTitle: `What ${cleanName.toLowerCase()} usually <em>look and feel like.</em>`,
      sectionLede:
        'Not everyone experiences identical symptoms. If any two or more symptoms persist, a clinical consultation is advised.',
      items: [
        {
          icon: 'रु',
          title: 'Discomfort & Pain',
          desc: 'Localized discomfort, soreness, or aching sensations that worsen during physical strain.',
        },
        {
          icon: 'शो',
          title: 'Swelling or Inflammation',
          desc: 'Noticeable fullness, swelling, or palpable lumps in the affected anatomical region.',
        },
        {
          icon: 'स्रा',
          title: 'Discharge or Bleeding',
          desc: 'Periodic staining, abnormal moisture, or bleeding during routine function.',
        },
        {
          icon: 'सं',
          title: 'Functional Impairment',
          desc: 'Difficulty with sitting, walking, or performing everyday domestic and occupational activities.',
        },
        {
          icon: 'खु',
          title: 'Burning & Irritation',
          desc: 'Persistent mucosal or cutaneous irritation exacerbated by friction or hygiene challenges.',
        },
        {
          icon: 'भा',
          title: 'Recurrent Episodes',
          desc: 'Temporary remission followed by recurring flare-ups when underlying causes remain untreated.',
        },
      ],
      warningTitle: 'When to seek immediate attention',
      warningBody:
        'Sudden acute pain, fever, spreading redness, or persistent bleeding require timely clinical evaluation. Do not delay examination or attempt unverified home remedies.',
    },
    grades: {
      sectionTag: 'Clinical Staging',
      sectionTitle: `${cleanName} is staged by <em>clinical severity.</em>`,
      sectionLede:
        'Accurate staging ensures you receive the most conservative yet effective therapy suited to your case.',
      items: [
        {
          badge: 'I',
          label: 'Mild',
          title: 'Stage I (Early)',
          desc: 'Early onset with localized symptoms and minimal anatomical disruption.',
          treatment: 'Conservative dietary regimen, lifestyle adjustments, herbal formulations',
        },
        {
          badge: 'II',
          label: 'Moderate',
          title: 'Stage II',
          desc: 'Recurrent symptoms with noticeable anatomical changes during exertion.',
          treatment: 'OPD procedures, specialized Ayurvedic local therapies, targeted medication',
        },
        {
          badge: 'III',
          label: 'Advanced',
          title: 'Stage III',
          desc: 'Persistent discomfort requiring specialized surgical or parasurgical intervention.',
          treatment: 'Classical Ksharsutra, Laser proctology, or precision day-care procedures',
        },
        {
          badge: 'IV',
          label: 'Complex',
          title: 'Stage IV / Recurrent',
          desc: 'Chronic or secondary complications requiring comprehensive surgical reconstruction.',
          treatment: 'Integrated operative care, inpatient monitoring, preventive rehabilitation',
        },
      ],
    },
    causes: {
      leadHeadline: `Anatomical and lifestyle factors form the <em>underlying etiology.</em>`,
      leadParagraphs: [
        `Development of ${cleanName.toLowerCase()} is often multifactorial, involving localized biomechanical stress, constitutional vulnerability (Prakriti), and chronic digestive or metabolic imbalances.`,
        'Addressing both the immediate anatomical lesion and the root systemic causes ensures durable, recurrence-free healing.',
      ],
      causesList: [
        {
          title: 'Digestive & Bowel Irregularities.',
          desc: 'Chronic constipation or irregular bowel habits creating repetitive pelvic congestion.',
        },
        {
          title: 'Sedentary Habits & Posture.',
          desc: 'Prolonged sitting without adequate physical movement weakening supportive connective tissues.',
        },
        {
          title: 'Dietary Incompatibilities.',
          desc: 'Low-fiber, spicy, or processed foods aggravating Vata and Pitta doshas.',
        },
        {
          title: 'Occupational Straining.',
          desc: 'Heavy physical exertion or long commuting hours increasing intra-abdominal pressure.',
        },
      ],
    },
    diagnosis: {
      sectionTitle: 'Structured four-step <em>diagnostic protocol.</em>',
      sectionLede:
        'Every consultation follows an unhurried, private, and dignity-centered examination structure.',
      steps: [
        {
          stepNum: 'Step 01',
          icon: 'प्र',
          title: 'Detailed Clinical History',
          desc: 'Discussion of onset, symptom pattern, previous interventions, and family health background.',
        },
        {
          stepNum: 'Step 02',
          icon: 'प',
          title: 'Private Physical Examination',
          desc: 'Gentle, respectful physical inspection conducted in complete privacy with informed consent.',
        },
        {
          stepNum: 'Step 03',
          icon: 'यं',
          title: 'Specialized In-Clinic Assessment',
          desc: 'Proctoscopy or localized assessment to visually confirm pathology and staging.',
        },
        {
          stepNum: 'Step 04',
          icon: 'रि',
          title: 'Diagnostic Investigations',
          desc: 'Blood panels, imaging, or differential screening ordered only when clinically necessary.',
        },
      ],
    },
    treatments: {
      sectionTitle: `Tailored options for <em>${cleanName.toLowerCase()}.</em>`,
      sectionLede:
        'We offer the complete spectrum of care, helping you choose the treatment that fits your body and schedule.',
      items: [
        {
          tierNum: 'Tier 1',
          tierLabel: 'First Line',
          title: 'Conservative & Ayurvedic Management',
          suitability: 'Best suited for: Early stages, mild symptoms, and preventive stabilization',
          desc: 'Dietary corrections, gut-toning herbal preparations, localized herbal fomentation, and pathya guidelines that address root causes without surgery.',
          facts: [
            { label: 'Duration', value: '2 – 6 weeks' },
            { label: 'Cost', value: 'Minimal' },
            { label: 'Approach', value: '100% Non-invasive' },
          ],
          linkText: 'Read about conservative care',
          linkHref: '/services/ayurveda-panchakarma/',
        },
        {
          tierNum: 'Tier 2',
          tierLabel: 'Classical Parasurgery',
          modifierClass: 'treatment-card--ksharsutra',
          title: 'Ayurvedic Shalya Tantra / Ksharsutra',
          suitability: 'Best suited for: Moderate-to-severe conditions, complex tracts, and recurrence prevention',
          desc: 'Classical techniques practiced by MS Ayurvedic surgeons that utilize medicated alkaline preparations for precise anatomical excision and rapid healing.',
          facts: [
            { label: 'Hospital Stay', value: 'Day-care / OPD' },
            { label: 'Recurrence', value: 'Extremely low' },
            { label: 'Tissue Safety', value: 'Preserves natural tone' },
          ],
          linkText: 'Read about Shalya Tantra care',
          linkHref: '/knowledge/articles/understanding-ksharsutra-in-simple-terms/',
        },
        {
          tierNum: 'Tier 3',
          tierLabel: 'Advanced Surgical',
          modifierClass: 'treatment-card--laser',
          title: 'Modern Minimally Invasive Surgery',
          suitability: 'Best suited for: Patients requiring immediate resolution and rapid return to work',
          desc: 'Advanced surgical and laser interventions performed in our modern operation theatre with minimal incisions, minimal blood loss, and rapid recovery.',
          facts: [
            { label: 'Duration', value: '30 – 60 min' },
            { label: 'Recovery', value: '3 – 7 days' },
            { label: 'Anesthesia', value: 'Safe day-care protocol' },
          ],
          linkText: 'Read about surgical options',
          linkHref: '/services/general-surgery/',
        },
      ],
    },
    expect: {
      sectionTitle: 'From first consultation to <em>full recovery.</em>',
      sectionLede:
        'A transparent care journey with dedicated doctor follow-ups at every milestone.',
      steps: [
        {
          stepNum: '01',
          time: 'Day 1 · Consultation',
          title: 'In-depth assessment & staging',
          desc: 'Thorough evaluation, honest treatment discussion, and zero-pressure decision timeline.',
        },
        {
          stepNum: '02',
          time: 'Pre-Procedure',
          title: 'Preparation & counseling',
          desc: 'Clear guidance on dietary preparation, blood investigations, and procedural schedule.',
        },
        {
          stepNum: '03',
          time: 'Procedure Day',
          title: 'Precision clinical treatment',
          desc: 'Procedure conducted in our purpose-built operation theatre or specialized therapy wing.',
        },
        {
          stepNum: '04',
          time: 'Follow-Up Visits',
          title: 'Monitored recovery & wound review',
          desc: 'Scheduled check-ups to track tissue healing and reinforce preventive dietary habits.',
        },
      ],
    },
    faqs: [
      {
        question: `Will I definitely need surgery for ${cleanName}?`,
        answer: `<p><strong>No, surgery is not always required.</strong> Early stages often resolve with dietary adjustments, specialized Ayurvedic medications, and non-surgical procedures. We recommend surgical intervention only when clinically necessary.</p>`,
      },
      {
        question: 'How do I book a consultation with the specialist?',
        answer:
          '<p>You can book an appointment by calling <strong>8208927917</strong> or using our online booking form. Walk-ins are also welcome during OPD hours.</p>',
      },
      {
        question: 'Are treatments covered by insurance?',
        answer:
          '<p>Shri Manmukund Hospital is ROHINI registered and partners with major insurance providers and TPAs for cashless surgical hospitalization.</p>',
      },
    ],
    related: [
      {
        icon: 'पा',
        title: 'Piles (Haemorrhoids)',
        desc: 'Advanced care across all grades of haemorrhoids in Amravati.',
        linkText: 'Read about piles',
        href: '/services/anorectal-care/piles/',
      },
      {
        icon: 'भ',
        title: 'Anal Fissure',
        desc: 'Sphincter-preserving healing for acute and chronic anal fissures.',
        linkText: 'Read about fissure',
        href: '/services/anorectal-care/anal-fissure/',
      },
      {
        icon: 'भ',
        title: 'Anal Fistula',
        desc: 'Near-zero recurrence Ksharsutra and laser proctology.',
        linkText: 'Read about fistula',
        href: '/services/anorectal-care/anal-fistula/',
      },
    ],
  };
}

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

const CONDITION_REGISTRY: Record<string, ConditionDetailData> = {
  piles: PILES_DETAIL,
  'anal-fissure': FISSURE_DETAIL,
  'anal-fistula': FISTULA_DETAIL,
  'for-anal-fistula': FISTULA_DETAIL,
  'laser-piles-surgery': PILES_DETAIL,
  'laser-fissure-treatment': FISSURE_DETAIL,
  'laser-fistula-treatment': FISTULA_DETAIL,
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

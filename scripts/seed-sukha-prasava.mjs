import { createClient } from '@supabase/supabase-js';
import fs from 'fs';

if (!process.env.NEXT_PUBLIC_SUPABASE_URL && fs.existsSync('.env.local')) {
  const envContent = fs.readFileSync('.env.local', 'utf8');
  for (const line of envContent.split('\n')) {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith('#') && trimmed.includes('=')) {
      const [key, ...vals] = trimmed.split('=');
      process.env[key.trim()] = vals.join('=').trim();
    }
  }
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('Missing Supabase credentials in .env.local');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

const ARTICLE = {
  title: 'Ninth Month Sukha Prasava Protocol: Ayurvedic Preparation for Normal, Smooth Delivery',
  slug: 'ninth-month-sukha-prasava-protocol-labor-preparation',
  cluster: 'article',
  author: 'Dr. Swati',
  author_slug: 'dr-swati',
  category_tag: 'Garbhsanskara',
  read_time: '8 min',
  estimated_read_time_mins: 8,
  date_published: '2026-09-23',
  date_updated: '2026-09-23',
  meta_title: 'Ninth Month Sukha Prasava Protocol Amravati | Normal Delivery Preparation',
  meta_description: 'Classical Ninth Month Sukha Prasava protocol by Dr. Swati Tongale. Yoni Pichu, gentle Anuvasana Basti, and pelvic relaxation techniques for safe, smooth natural birth.',
  excerpt: 'How classical Yoni Pichu (medicated vaginal tamponade) and gentle Anuvasana Basti from week 36 lubricate the birth canal, soften cervical tissues, and regulate downward Apana Vayu to facilitate natural childbirth.',
  views: 0,
  body_content: `## The Classical Philosophy of Sukha Prasava

In classical Ayurvedic obstetrics (*Prasuti Tantra*), childbirth is revered as a monumental natural milestone rather than an inherently pathological condition. The Sanskrit phrase **Sukha Prasava** literally translates to *"easy, joyful, and uncomplicated childbirth."*

Acharya Charaka and Acharya Sushruta emphasize that during the **Ninth Month (Navama Masa)** of gestation—spanning **Week 36 to Week 40**—the primary physiological priority of prenatal care shifts from nourishing fetal growth to **preparing the maternal body for smooth, natural delivery**.

At Shri Manmukund Hospital, Amravati, Dr. Swati Tongale, MS (Ayurveda Shalya Tantra), provides the structured **Ninth Month Sukha Prasava Protocol**, combining classical treatments with modern obstetric monitoring to promote cervical ripening, soften pelvic ligaments, and optimize natural labor progress.

---

## The Biomechanics of Natural Childbirth & Apana Vayu

From both modern physiological and Ayurvedic perspectives, natural childbirth depends on two primary mechanical factors:
1. **Uninhibited Expulsive Forces**: The downward uterine muscular contractions that guide the baby through the pelvis. In Ayurveda, this kinetic action is governed entirely by **Apana Vayu** (the biological sub-dosha controlling downward pelvic movements).
2. **Supple Soft-Tissue Compliance**: The elasticity and hydration of the cervix, vaginal canal, and perineal floor muscles.

If maternal anxiety, physical fatigue, chronic constipation, or pelvic tissue dehydration is present in late pregnancy, **Apana Vayu becomes vitiated and obstructed (*Vimarga-Gamana*)**. This leads to:
- Painful, uncoordinated uterine spasms without efficient cervical dilation.
- Prolonged, exhausting active labor.
- Increased risk of cervical dystocia and severe perineal tears requiring extensive episiotomies.

The Sukha Prasava protocol specifically pacifies Vata dosha, lubricates maternal soft tissues, and normalizes the directional vector of Apana Vayu so that labor progresses naturally and rhythmically.

---

## Core Components of the Ninth Month Protocol

Initiated at the completion of the 36th gestational week, the protocol incorporates two classical, non-invasive therapies administered under doctor guidance:

### 1. Yoni Pichu (Medicated Vaginal Tamponade)
*Yoni Pichu* is the classical technique of placing a sterile cotton swab or gauze soaked in warm, authenticated Ayurvedic medicated oil (*Bala Taila* or *Sukumara Taila*) at the vaginal introitus at bedtime.
- **Cervical Softening & Ripening**: The warm lipid molecules penetrate the lower reproductive mucosa, relaxing myofascial tension and encouraging natural physiological cervical ripening.
- **Birth Canal Lubrication**: Continuous gentle oleation prevents dryness and enhances the elasticity of the vaginal walls and vulval tissues.
- **Preventing Perineal Tears**: Tissues with optimal lipid hydration stretch smoothly during fetal crowning, substantially reducing the incidence of severe perineal lacerations.

### 2. Gentle Anuvasana Basti (Pelvic Medicated Oil Enema)
*Anuvasana Basti* involves administering a low-volume (30 to 50 ml) retention enema of warm medicated oil (*Sukumara Taila* or *Dhanwantaram Taila*) into the lower rectum.
- **Direct Apana Vayu Pacification**: The colon is the primary anatomical seat of Vata dosha. Gentle rectal oleation directly calms pelvic hypertonicity.
- **Eliminating Late-Pregnancy Constipation**: Hard, impacted stools in the rectosigmoid colon physically obstruct fetal descent. Anuvasana Basti ensures effortless, complete bowel evacuation.
- **Coordinating Uterine Muscle Action**: By calming local pelvic autonomic nerves, it encourages synchronized, productive labor contractions when labor spontaneously commences.

---

## Ninth Month Dietary & Lifestyle Guidelines

Alongside procedural therapies, Dr. Swati prescribes tailored nutritional support for weeks 36 to 40:
- **Snigdha Yavagu (Medicated Warm Rice Gruels)**: Light, easily assimilable rice gruels prepared with milk and pure cow's ghee to sustain maternal stamina without overloading digestion (*Agni*).
- **Adequate Warm Hydration**: Decoctions of *Gokshura* and *Yashtimadhu* to prevent lower-limb fluid retention while keeping tissues supple.
- **Gentle Pelvic Mobility**: Classical supported pelvic opening postures (such as *Baddha Konasana* / Butterfly pose) to encourage optimal fetal head engagement.

---

## Seamless Integration with Modern Obstetric Care

At Shri Manmukund Hospital, the Sukha Prasava protocol is delivered with strict medical ethics and transparency:
- **Obstetric Coordination**: The protocol is conducted in full knowledge of and coordination with your primary obstetrician.
- **Prerequisite Clearances**: We verify normal singleton cephalic presentation, reassuring amniotic fluid volume (AFI), and healthy placental maturity before initiating therapies.
- **Contraindications Respected**: If placenta previa, active vaginal infection, unexplained bleeding, or premature rupture of membranes (PROM) is present, local procedures are strictly avoided.
- **Natural Readiness, Not Chemical Induction**: Unlike medical labor induction with synthetic oxytocin or prostaglandins, the Ayurvedic protocol does not artificially force contractions; rather, it prepares maternal tissues so that when your baby is ready, labor unfolds smoothly.

---

## Consultations at Shri Manmukund Hospital

Expectant mothers entering their third trimester can schedule a dedicated evaluation with **Dr. Swati Tongale, MS (Ayurveda Shalya Tantra)** at the **Female Care Unit**, Shri Manmukund Hospital, Amravati.

- **Location**: Shri Manmukund Hospital, Amravati
- **Consultation Line**: **8208927917**
- **Format**: Private OPD consultations with individualized home guidance.`,
};

async function seed() {
  console.log(`Seeding Ninth Month Sukha Prasava article to Supabase...`);

  const record = {
    slug: ARTICLE.slug,
    title: ARTICLE.title,
    cluster: ARTICLE.cluster,
    category_tag: ARTICLE.category_tag,
    author: ARTICLE.author,
    author_slug: ARTICLE.author_slug,
    medical_reviewer: 'Dr. Vipin Tongale',
    medically_reviewed_by_slug: 'dr-vipin',
    published_date: ARTICLE.date_published,
    last_updated_date: ARTICLE.date_updated,
    date_published: ARTICLE.date_published,
    date_updated: ARTICLE.date_updated,
    read_time: ARTICLE.read_time,
    estimated_read_time_mins: ARTICLE.estimated_read_time_mins,
    excerpt: ARTICLE.excerpt,
    body_content: ARTICLE.body_content,
    body_markdown: ARTICLE.body_content,
    categories: ['Garbhsanskara', 'Pregnancy Care', 'Female Care'],
    tags: ['Sukha Prasava', 'Garbhsanskara', 'Normal Delivery', 'Yoni Pichu', 'Dr Swati Tongale'],
    is_published: true,
    status: 'published',
    meta_title: ARTICLE.meta_title,
    meta_description: ARTICLE.meta_description,
    views: 0,
    created_at: new Date(ARTICLE.date_published).toISOString(),
    updated_at: new Date().toISOString(),
  };

  console.log('Sending upsert to Supabase...');
  const { data, error } = await supabase
    .from('knowledge_pieces')
    .upsert(record, { onConflict: 'slug' })
    .select('id, slug');

  if (error) {
    console.error(`Error inserting ${ARTICLE.slug}:`, error.message);
  } else {
    console.log(`Success: ${ARTICLE.slug} (ID: ${data?.[0]?.id})`);
  }

  const { count } = await supabase
    .from('knowledge_pieces')
    .select('*', { count: 'exact', head: true });
  console.log(`Total knowledge pieces in Supabase: ${count}`);
  process.exit(0);
}

seed().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});

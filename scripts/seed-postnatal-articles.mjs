import { createClient } from '@supabase/supabase-js';
import fs from 'fs';

// Parse .env.local if not already set in process.env
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

const POSTNATAL_PIECES = [
  {
    title: 'Postnatal Abhyanga & Swedana: Medicated Oil Massage & Gentle Herbal Steam for Maternal Rejuvenation',
    slug: 'postnatal-abhyanga-and-swedana-recovery-guide',
    cluster: 'article',
    author: 'Dr. Swati',
    author_slug: 'dr-swati',
    category_tag: 'Female Care',
    read_time: '7 min',
    estimated_read_time_mins: 7,
    date_published: '2026-09-20',
    date_updated: '2026-09-20',
    meta_title: 'Postnatal Abhyanga & Swedana Amravati | Ayurvedic Massage for New Mothers',
    meta_description: 'Classical Postnatal Abhyanga and Swedana protocol by Dr. Swati Tongale. Warm Bala and Dhanwantaram medicated oil massage and gentle steam for maternal muscle and joint recovery.',
    excerpt: 'Full-body rhythmic medicated massage with classical Bala and Dhanwantaram oils followed by gentle herbal steam to relieve muscle fatigue, soothe joint stiffness, and restore vitality in Sutika Paricharya.',
    views: 0,
    body_content: `## The Physical Recovery of Childbirth

Childbirth is one of the most intense physiological events a woman's body will ever experience. The sudden emptiness created within the pelvic cavity, combined with profound blood and fluid loss (*Dhatu Kshaya*) and sleep disruption, severely aggravates **Vata dosha**—the biological principle governing the nervous system, pelvic musculature, and circulation.

In classical Ayurveda, this transitional window is known as **Sutika Kala** (the postnatal phase). Rather than viewing this period as mere rest, Ayurveda prescribes **Sutika Paricharya**: a dedicated, structured 45-day clinical recovery regimen. Central to this rehabilitation are two external therapeutic cornerstones: **Abhyanga (medicated full-body oil massage)** and **Swedana (gentle herbal steam therapy)**.

---

## Why Postnatal Abhyanga Matters

During the final weeks of gestation and through active labor, pelvic joints and spinal ligaments undergo maximal laxity due to the relaxin hormone. Following delivery, nursing postures and frequent lifting place continuous strain on the upper back, shoulders, and sacroiliac joints.

Postnatal Abhyanga provides targeted physiological benefits:
- **Pacifying Pelvic Vata**: Warm medicated oils permeate the subcutaneous tissues, relaxing hypertonic muscles and soothing irritated nerve endings.
- **Relieving Musculoskeletal Fatigue**: Full-body rhythmic massage flushes out accumulated metabolic waste from exhausted muscle groups.
- **Enhancing Microcirculation**: Gentle downward and circular strokes stimulate blood and lymph flow, accelerating tissue repair across the perineum and abdomen.
- **Promoting Deep Rest**: Classical medicated sesame-based oils calm the central nervous system, helping exhausted new mothers achieve restorative sleep despite fractured night-time waking.

### Classical Medicated Oils Prescribed
At Shri Manmukund Hospital, Dr. Swati Tongale selects authentic classical oils matched to maternal constitution:
- **Bala Taila**: Made with Sida cordifolia (*Bala*), renowned for strengthening muscle fibers, toning ligaments, and preventing postpartum joint weakness.
- **Dhanwantaram Taila**: The premier classical Ayurvedic formulation for postpartum care, containing forty botanical ingredients designed specifically to restore neuro-muscular tensile tone.
- **Ksheerabala Taila**: Processed with country mallow, milk, and sesame oil, offering deeply cooling and restorative relief for maternal fatigue and insomnia.

---

## Gentle Swedana: Medicated Steam Therapy

Following Abhyanga, **Swedana (gentle sudation)** is administered using warm, herbalized steam. Unlike intense sauna heat, postnatal Swedana is mild and comforting:
- Opens cellular micro-channels (*Srotas*), enabling the medicated oils to penetrate deeper into myofascial layers.
- Relieves persistent stiffness in the lumbar spine, hips, and lower limbs.
- Aids natural detox and elimination of postpartum water retention (*Shotha*).

---

## Programme Timing & Session Structure

- **Session Duration**: Each treatment session lasts **45 to 60 minutes**, conducted in a calm, temperature-controlled environment.
- **Initiation Window**: In normal vaginal deliveries, Abhyanga and gentle fomentation typically begin within the **first week to 10 days** after delivery, following obstetric clearance.
- **Total Programme**: Traditionally spans **30 to 45 days**, providing comprehensive restorative rehabilitation during the vulnerable fourth trimester.

---

## Adaptation for Normal vs Caesarean Deliveries

Postnatal care is never one-size-fits-all. We adapt therapies strictly to the mode of delivery:
- **Normal Vaginal Delivery**: Full-body massage including gentle abdominal work begins early once lochia is normal and the mother feels comfortable.
- **Caesarean Section (C-Section)**: Extreme surgical caution is maintained. Gentle massage of the arms, legs, upper back, and neck begins early to relieve nursing fatigue. However, **direct abdominal massage and local steam are strictly avoided until your obstetrician confirms complete healing of the surgical incision**.

---

## Obstetric Coordination & Outpatient Setting

Postnatal Panchakarma at Shri Manmukund Hospital is delivered under strict medical ethics:
- We coordinate closely with your primary obstetrician and respect all obstetric guidelines and surgical clearances.
- **Outpatient OPD Format**: Admission is not required. Mothers attend scheduled appointments or receive structured home guidance.
- **Baby-Friendly Consultations**: Our Female Care Unit accommodates baby-in-arms consultations, with appointments thoughtfully timed around your newborn's feeding and sleeping rhythms.

To discuss a tailored postnatal recovery schedule with **Dr. Swati Tongale**, call **8208927917** or visit the Female Care Unit at Shri Manmukund Hospital, Amravati.`,
  },
  {
    title: 'Uterine Involution & Lactation Rasayanas: Classical Ayurvedic Herbal Recovery in Sutika Paricharya',
    slug: 'uterine-involution-and-lactation-rasayanas-postnatal-guide',
    cluster: 'article',
    author: 'Dr. Swati',
    author_slug: 'dr-swati',
    category_tag: 'Female Care',
    read_time: '8 min',
    estimated_read_time_mins: 8,
    date_published: '2026-09-21',
    date_updated: '2026-09-21',
    meta_title: 'Uterine Involution & Lactation Rasayanas Amravati | Postnatal Care',
    meta_description: 'Classical Ayurvedic herbs for uterine involution and breast milk production by Dr. Swati Tongale. Dashamoolarishta, Jeerakarishta, Shatavari, and safe lactation protocols.',
    excerpt: 'How classical Ayurvedic formulations like Dashamoolarishta, Jeerakarishta, Shatavari, and Soubhagya Shunti Lehyam support uterine involution, hormonal rebalancing, and healthy lactation during the 45-day postnatal period.',
    views: 0,
    body_content: `## The Biological Demands of the Postnatal Period

Immediately following delivery, the mother's body undergoes one of the fastest anatomical and hormonal transformations in human physiology. In the span of just six weeks:
1. **Uterine Involution**: The uterus, which expanded to accommodate a full-term fetus, must contract down from roughly 1,000 grams back to its pre-pregnancy weight of approximately 60 grams.
2. **Lochia Clearance**: The placental site must shed residual decidual tissue, blood, and lochial fluid cleanly and without secondary infection or retention.
3. **Hormonal Rebalancing**: High gestational progesterone and estrogen plunge dramatically, while prolactin and oxytocin surge to establish lactation.
4. **Metabolic & Lactational Demands**: Exclusive breastfeeding burns an estimated 500 or more calories every single day, placing an enormous nutritional demand on maternal tissues.

Classical Ayurveda recognizes this period (*Sutika Kala*) as requiring dedicated internal herbal care—**Sutika Paricharya**—spanning **30 to 45 days** to prevent long-term maternal depletion (*Dhatu Kshaya*), chronic back pain, and emotional vulnerability.

---

## Why Internal Herbal Rasayanas are Essential

Childbirth leaves an acute physical void inside the pelvic cavity, causing a sharp surge in **Vata dosha**. If this aggravated Vata is not pacified with warm, easily digestible, and unctuous herbal preparations, it can impair digestion (*Mandaagni*), delay uterine shrinking, and lead to poor breast milk volume.

Sutika Paricharya utilizes classical herbal elixirs designed to:
- Accelerate healthy uterine involution without painful spasm.
- Cleanse and normalize postpartum discharge (*Yoni Shodhana*).
- Promote rich, unobstructed breast milk production (*Stanya Janana*).
- Rekindle maternal digestive fire (*Agni Deepana*) to assimilate essential nutrients.

---

## Classical Ayurvedic Formulations Prescribed

Under the clinical guidance of **Dr. Swati Tongale, MS (Ayurveda Shalya Tantra)**, mothers receive time-honored formulations from trusted classical pharmacies:

### 1. Dashamoolarishta (Pelvic Toning & Involution)
A venerable fermented herbal tonic prepared from ten medicinal roots (*Dashamoola*). It acts as a premier uterine tonic, pacifying aggravated Vata, reducing lower abdominal cramps, facilitating smooth lochial drainage, and strengthening the pelvic floor.

### 2. Jeerakarishta (Digestive Warmth & Lochial Cleansing)
Formulated with cumin seed decoction, Jeerakarishta is exceptionally effective in the first two weeks postpartum. It kindles the mother's digestive fire, alleviates bloating, eases uterine afterpains, and promotes healthy lactation.

### 3. Shatavari Gulam & Formulations (Galactagogue & Tissue Nutritive)
*Shatavari* (Asparagus racemosus) is the foremost feminine nutritive rasayana in classical Ayurveda. It naturally increases prolactin output, ensuring a plentiful, high-quality milk supply while replenishing reproductive fluids and cooling systemic inflammation.

### 4. Soubhagya Shunti Lehyam (Strength & Core Stamina)
A traditional postnatal herbal jam formulated with sun-dried ginger (*Shunti*), jaggery, and revitalizing spices. It provides deep internal warmth, prevents maternal chill and joint aches, and restores energy.

---

## Safety for Breastfeeding and Neonatal Health

A frequent and important question asked by new mothers:
> **Will these Ayurvedic medicines affect my breastfed baby?**
> **No.** In fact, classical Sutika Paricharya preparations are specifically chosen to support lactation. All medications prescribed are completely safe for breastfeeding.

The beneficial carminative and digestive properties of herbs like *Jeeraka* and *Shunti* pass gently into breast milk, helping soothe infantile colic, gas, and tummy cramps in the newborn.

---

## Structured 45-Day Phasing

The internal recovery protocol progresses through three distinct 15-day phases:
- **Phase 1 (Days 1 – 15): Agni Deepana & Uterine Cleansing**: Gentle carminative teas, Jeerakarishta, and light, easily assimilated soups to clear residual lochia and settle the digestive tract.
- **Phase 2 (Days 16 – 30): Pelvic Toning & Lactation Stabilization**: Dashamoolarishta, Shatavari preparations, and nourishing herbal gruels to strengthen pelvic tissues and optimize milk supply.
- **Phase 3 (Days 31 – 45): Deep Dhatu Rejuvenation**: Rich rasayanas like Soubhagya Shunti Lehyam to rebuild bone, muscle, and marrow tissues, ensuring robust, lasting maternal vitality.

---

## Coordination with Your Obstetrician

At Shri Manmukund Hospital, we coordinate with your obstetrician throughout:
- We ensure that programme timing and medication components complement your delivery details.
- We never conflict with prescribed modern medications; all treatments integrate safely alongside standard obstetric care.
- Adapted for both normal vaginal deliveries and Caesarean sections.

Consultations at our Female Care Unit are baby-friendly and timed around your feeding routine. For personalized guidance with **Dr. Swati Tongale**, call **8208927917** or visit Shri Manmukund Hospital in Amravati.`,
  },
  {
    title: 'Traditional Udaraveshtana (Abdominal Binding): Ayurvedic Core Realignment & Pelvic Support After Childbirth',
    slug: 'traditional-udaraveshtana-abdominal-binding-postnatal-recovery',
    cluster: 'article',
    author: 'Dr. Swati',
    author_slug: 'dr-swati',
    category_tag: 'Female Care',
    read_time: '7 min',
    estimated_read_time_mins: 7,
    date_published: '2026-09-22',
    date_updated: '2026-09-22',
    meta_title: 'Traditional Udaraveshtana Amravati | Ayurvedic Abdominal Binding',
    meta_description: 'Classical Udaraveshtana (abdominal binding) protocol by Dr. Swati Tongale. Gentle cotton wrap technique for core realignment, lumbar support, and post-delivery pelvic recovery.',
    excerpt: 'The classical Ayurvedic technique of Udaraveshtana (abdominal wrapping) with soft cotton cloth to realign overstretched abdominal muscles, support the lumbar spine, and prevent visceral sagging after delivery.',
    views: 0,
    body_content: `## What is Traditional Udaraveshtana?

**Udaraveshtana** is the classical Ayurvedic practice of gently wrapping and supporting the maternal abdomen with a clean, soft, breathable cotton cloth (*Vastra*) during the postnatal period. Described in classical texts including the *Charaka Samhita* and *Sushruta Samhita*, Udaraveshtana is one of the most practical and immediate structural recovery rituals of **Sutika Paricharya** (postnatal care).

Far from a modern cosmetic waist trainer, traditional Udaraveshtana is a functional therapeutic procedure designed to stabilize overstretched core musculature, support the lumbar spine, and pacify internal Vata dosha following delivery.

---

## Why Abdominal Binding is Essential After Childbirth

During nine months of pregnancy, the maternal abdominal wall stretches up to 50% beyond its resting baseline, often resulting in *diastasis recti* (separation of the left and right rectus abdominis muscles). Simultaneously, the hormone relaxin softens pelvic joints and sacroiliac ligaments.

When the baby and placenta are delivered:
1. **The Sudden Abdominal Void**: The rapid reduction in intrauterine volume leaves a large empty space in the lower abdominal cavity. In Ayurvedic medicine, empty spaces are immediately occupied by **Vata dosha**, predisposing the mother to abdominal bloating, gas, digestive weakness, and visceral instability.
2. **Loss of Core Mechanical Support**: Without external support, stretched abdominal muscles sag forward, placing tremendous compensatory strain on the lower back muscles whenever the mother stands, walks, or nurses her baby.
3. **Visceral Ptosis**: The stomach, intestines, and pelvic organs lack firm muscular containment until muscle tone naturally recovers over several weeks.

By providing gentle, even external counter-pressure, Udaraveshtana prevents visceral sagging, brings separated abdominal muscle edges closer together, and stabilizes the lumbar spine.

---

## Technique: The Classical Cotton Wrap Protocol

Traditional Udaraveshtana is practiced with deliberate clinical care:

### 1. Preparation Post-Abhyanga
Udaraveshtana is performed immediately after the mother's daily warm medicated oil massage (Abhyanga with *Bala Taila* or *Dhanwantaram Taila*) and gentle herbal fomentation (Swedana). This ensures that the abdominal tissues are warm, pliable, and relaxed.

### 2. The Wrap Material
We utilize a long, wide, unbleached, breathable natural cotton cloth or soft muslin wrap. Synthetic, rigid, or boned corsets are strictly avoided as they generate excessive heat and unphysiological abdominal pressures.

### 3. Application Method
- The wrap is applied while the mother lies flat in a comfortable supine position.
- Binding begins low down across the pubic bone and pelvis, gently moving upward toward the lower costal margin (ribcage).
- **Firm Yet Comfortable**: The binding must provide reassuring support without compressing the organs, restricting diaphragmatic breathing, or interfering with nursing.

---

## Delivery Adaptation: Normal vs Caesarean Sections

A crucial safety principle stressed by **Dr. Swati Tongale** is timing based on the type of delivery:

### Normal Vaginal Delivery
In uncomplicated vaginal births, gentle abdominal binding can begin as early as **Day 7 to Day 10 postpartum**, once normal lochial flow is established and obstetric clearance for gentle physical therapies has been provided.

### Caesarean Section (C-Section)
For mothers who deliver via Caesarean section, **direct abdominal binding is strictly delayed until the surgical scar has healed cleanly**. Applying pressure over a fresh surgical incision risks wound breakdown, seroma formation, or stitch irritation.
- During the first 2 to 4 weeks, Caesarean mothers benefit from gentle limb massages, nursing back support, and oral digestive tonics.
- Abdominal binding and gentle abdominal massage commence **only after explicit obstetric clearance** confirming that the deep and superficial incision sites have healed (typically 3 to 6 weeks postpartum).

---

## Part of the 30 to 45-Day Sutika Paricharya Programme

Udaraveshtana is not an isolated measure; it works synergistically within our comprehensive 45-day postnatal programme:
- Combined with internal rasayanas (*Dashamoolarishta*, *Jeerakarishta*, *Shatavari*) to hasten uterine involution.
- Reinforced with progressive pelvic floor and core rehabilitation exercises once initial healing is complete.
- Supported by nutritious, warm postnatal dietary guidance.

---

## OPD Care at Shri Manmukund Hospital

At Shri Manmukund Hospital in Amravati, Dr. Swati Tongale leads the **Female Care Unit**, providing specialized, private care for new mothers:
- Consultations and sessions are outpatient (no hospitalization needed).
- Baby-friendly environment accommodating nursing schedules.
- Full coordination with your primary obstetrician.

To book a consultation or learn more about our postnatal care packages, call **8208927917** or visit Shri Manmukund Hospital, Amravati.`,
  },
];

async function seed() {
  console.log(`Seeding ${POSTNATAL_PIECES.length} postnatal knowledge pieces to Supabase...`);

  for (const piece of POSTNATAL_PIECES) {
    const record = {
      slug: piece.slug,
      title: piece.title,
      cluster: piece.cluster,
      category_tag: piece.category_tag,
      author: piece.author,
      author_slug: piece.author_slug,
      medical_reviewer: 'Dr. Vipin Tongale',
      medically_reviewed_by_slug: 'dr-vipin',
      published_date: piece.date_published,
      last_updated_date: piece.date_updated,
      date_published: piece.date_published,
      date_updated: piece.date_updated,
      read_time: piece.read_time,
      estimated_read_time_mins: piece.estimated_read_time_mins,
      excerpt: piece.excerpt,
      body_content: piece.body_content,
      body_markdown: piece.body_content,
      categories: ['Female Care', 'Postnatal Panchakarma'],
      tags: ['Sutika Paricharya', 'Postnatal Care', 'Dr Swati Tongale', 'Ayurveda'],
      is_published: true,
      status: 'published',
      meta_title: piece.meta_title,
      meta_description: piece.meta_description,
      views: 0,
      created_at: new Date(piece.date_published).toISOString(),
      updated_at: new Date().toISOString(),
    };

    const { data, error } = await supabase
      .from('knowledge_pieces')
      .upsert(record, { onConflict: 'slug' })
      .select('id, slug');

    if (error) {
      console.error(`Error inserting ${piece.slug}:`, error.message);
    } else {
      console.log(`Success: ${piece.slug} (ID: ${data?.[0]?.id})`);
    }
  }

  const { count } = await supabase
    .from('knowledge_pieces')
    .select('*', { count: 'exact', head: true });
  console.log(`Total knowledge pieces in Supabase: ${count}`);
}

seed().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});

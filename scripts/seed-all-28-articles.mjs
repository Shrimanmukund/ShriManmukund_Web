import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';

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

// Read seeded-content.json for base markdown
const seededPages = JSON.parse(
  fs.readFileSync('./src/lib/data/seeded-content.json', 'utf8')
);

function getSeededMarkdown(slug) {
  const match = seededPages.find(
    (p) => p.slug === slug || (p.url && p.url.endsWith(`/${slug}/`))
  );
  return match?.bodyMarkdown || '';
}

// Full medical markdown articles for all 28 knowledge hub pieces
const customArticlesMarkdown = {
  'uttarbasti-for-infertility-ayurvedic-approach': `## Clinical Overview & Introduction

### What is Uttarbasti?
Uttarbasti (उत्तरबस्ती) is an advanced, specialized intrauterine and intravesical drug delivery procedure in classical Ayurvedic gynaecology (Stri Roga & Prasuti Tantra). In the context of female infertility, Uttarbasti involves the slow, sterile instillation of medicated herbal oils or medicated ghrits (clarified butter) directly into the uterine cavity via a specialized sterile cannula under strict aseptic conditions.

Unlike generalized systemic therapies, Uttarbasti exerts both direct local mucosal action on the endometrium, fallopian tubes (Artavavaha Srotas), and cervix, as well as reflex systemic neuro-endocrine regulation on the hypothalamic-pituitary-ovarian (HPO) axis.

---

## Clinical Indications in Reproductive Medicine

At Shri Manmukund Hospital, Amravati, Dr. Swati Tongale evaluates each couple with comprehensive hormonal profiles, follicular monitoring, and hysterosalpingography (HSG) before recommending Uttarbasti. 

### 1. Tubal Blockage (Artavavaha Srotorodha)
- Unilateral or bilateral corneal / isthmic tubal blocks.
- Post-inflammatory tubal spasm, mild to moderate fimbrial agglutination, or sluggish tubal peristalsis.
- Specialized oils like *Kshara Taila*, *Phala Ghrita*, and *Apamarga Kshara Taila* deliver fibrinolytic, anti-inflammatory, and spasmolytic effects directly to the tubal lumen.

### 2. Thin or Unreceptive Endometrium (Kshetra Dushti)
- Patients with persistently thin endometrium (<7 mm) despite high-dose estrogen protocols in IVF cycles.
- Asherman's syndrome sequelae and intrauterine adhesions.
- Medicated ghrits stimulate endometrial neo-vascularization and increase sub-endometrial blood flow.

### 3. Resistant Anovulation & PCOD (Beeja Dushti)
- Poor follicular recruitment and inadequate luteal phase progesterone support.
- Enhances follicular maturation and spontaneous rupture when coordinated with oral Deepana-Pachana herbs.

### 4. Recurrent IUI & IVF Implantation Failures
- Optimizes endometrial receptivity (*Garbhashaya Shodhana & Snehana*) before subsequent embryo transfer.

---

## When Uttarbasti Works vs. When IVF is Indicated

Honest clinical expectations are central to our practice. Uttarbasti is highly successful in functional, inflammatory, and partial tubal blocks, but is not a panacea:

| Clinical Condition | Suitability for Uttarbasti | Expected Prognosis |
| :--- | :--- | :--- |
| Isthmic / Mid-tubal Mucous Block | Highly Suitable | 70% – 85% Recanalization |
| Thin Endometrium (<6mm in IUI) | Highly Suitable | Significant Thickness Gain (8–10mm) |
| Severe Bilateral Hydrosalpinx | Not Recommended | Surgical / IVF Candidate |
| Complete Pelvic Frozen Fibrosis | Not Recommended | Advanced ART / Surgery |

---

## Step-by-Step Procedure Protocol

The procedure is scheduled strictly in the post-menstrual window: **Day 6 to Day 10 of the menstrual cycle** (Rutukala), when the cervix is naturally receptive and endometrial shedding has ceased.

### Phase 1: Purvakarma (Preparation)
1. **Systemic Deepana & Pachana:** 3 to 5 days prior to clear metabolic endotoxins (*Ama*).
2. **Local Snehan & Swedan:** Gentle lower abdominal and pelvic fomentation (*Nadi Sweda*) to relax smooth musculature.
3. **Yoni Prakshalan:** Sterile vaginal cleansing with lukewarm Triphala or Panchavalkala Kashaya.

### Phase 2: Pradhanakarma (Instillation)
1. Performed in a fully equipped minor operating theatre with sterile speculum and specialized soft disposable cannula.
2. 3 ml to 5 ml of warm medicated Ghrita/Taila is slowly instilled into the uterine cavity over 60–90 seconds.
3. Patient experiences mild uterine heaviness, comparable to light menstrual cramps. No general anaesthesia is required.

### Phase 3: Paschatkarma (Immediate Post-Care)
1. Supine rest with pelvis slightly elevated for 15 to 20 minutes.
2. Sterile perineal pad application; monitoring of vital signs.
3. Discharge home after 30 minutes; patient can resume non-strenuous daily household routines.

---

## Frequently Asked Questions

**Q: Is Uttarbasti painful?**
*A: Most women describe the sensation as similar to mild menstrual cramping during instillation. There is no sharp surgical pain, and it does not require anaesthesia.*

**Q: How many cycles are recommended?**
*A: A standard course comprises 2 to 3 consecutive menstrual cycles (3 to 6 consecutive days per cycle), accompanied by follicular monitoring.*

**Q: What is the conception timeline after treatment?**
*A: Natural conception or assisted cycle attempts are coordinated during the treatment window and in the immediate subsequent 3 cycles.*

---

## Medical Disclaimer & Contact
*Uttarbasti requires strict clinical governance, sterile equipment, and specialized surgical Ayurveda training. Consult Dr. Swati Tongale, MS Ayurveda Shalya Tantra, at Shri Manmukund Hospital, Amravati.*`,

  'why-i-chose-to-lead-a-female-care-unit': `## Clinical Overview & Personal Reflection

### Breaking the Silence on Female Proctological Health
For over 14 years in surgical practice across Vidarbha, one reality has confronted me repeatedly: **women suffer longer, bear deeper pain in silence, and present with significantly more advanced anorectal pathology than men.**

This disparity is rarely biological. It is social, cultural, and emotional. When an anorectal condition like piles, an anal fissure, or a fistula develops, women in our communities frequently delay seeking medical consultation for months—and occasionally years—solely out of profound embarrassment at the prospect of being examined by a male surgeon.

---

## The Access Gap in Vidarbha and Rural Maharashtra

In our regional healthcare landscape, specialized female surgeons with MS degrees in Shalya Tantra (Surgery) are exceptionally rare. As a consequence:

1. **Self-Medication & Complications:** Women rely on counter laxatives, steroid ointments, or quack pastes until chronic fissures develop fibrosed sentinel tags or fistulas form secondary extensions.
2. **Postpartum Neglect:** Haemorrhoidal thrombosis and severe constipation following childbirth are accepted as "inevitable normal burdens" rather than treatable clinical problems.
3. **Loss of Dignity:** When forced by excruciating pain into emergency care, women often experience cold, hurried examinations that exacerbate trauma and anxiety.

---

## The Architecture of the Female Care Unit

At Shri Manmukund Hospital, Amravati, I created the **Dedicated Female Care Unit** to dismantle this barrier completely:

### 1. Absolute Modesty and Clinical Privacy
From the consultation desk to the examination couch, female patients interact exclusively with female nursing staff and myself. Examinations are conducted with proper draping, warm ambient lighting, and unhurried clinical explanations.

### 2. Dual Specialty Integration
My clinical training bridges both **Anorectal Shalya Tantra** (Ksharsutra, laser, fissure management) and **Stri Roga** (Ayurvedic Gynaecology, Uttarbasti, Garbhsanskara). This integration is crucial because pelvic floor dysfunction, chronic constipation, and gynaecological disorders (such as uterine prolapse or postpartum laxity) frequently coexist.

### 3. Patient Accompaniment
We explicitly encourage patients to bring their mothers, sisters, or husbands into the consultation room. Transparency removes fear, fosters family support, and ensures that home dietary instructions are embraced collectively.

---

## Core Conditions Managed at the Unit
- **Female Proctology:** Grade 1–4 Piles, Acute & Chronic Fissures (*Parikartika*), Complex Fistula (*Bhagandar*), Pilonidal Sinus.
- **Infertility Interventions:** Specialized intrauterine Uttarbasti for tubal blockages and thin endometrium.
- **Maternal Health:** Masanumasik Garbhsanskara and postpartum perineal healing (*Sutika Paricharya*).
- **Pelvic Health:** Chronic pelvic congestion, dyspareunia associated with pelvic floor hypertonicity, and recurrent leucorrhoea.

---

## A Message to Women Suffering in Silence
If you have been enduring rectal pain, bleeding, or pelvic distress because you cannot bear the thought of a male examination: **your pain is real, your modesty is sacred, and you do not have to live with this condition.**

You are warmly welcomed to consult in an environment where your dignity is guarded as fiercely as your clinical recovery.

---

**Author Byline:**
*Dr. Swati Tongale, MS (Ayurveda) Shalya Tantra, is Chief Ayurvedic Surgeon and Lead of the Female Care Unit at Shri Manmukund Hospital, Amravati.*`,

  'laser-haemorrhoidoplasty-is-faster-recovery-worth-cost': `## Clinical Overview & Modern Proctology

### Understanding Laser Haemorrhoidoplasty (LHP)
Laser Haemorrhoidoplasty (LHP) is an advanced, minimally invasive diode laser procedure designed for the treatment of symptomatic internal haemorrhoids (Grade 2 and early Grade 3 piles). 

Unlike conventional open surgical excision (Milligan-Morgan haemorrhoidectomy), which removes mucosal tissue and leaves sensitive perianal wounds, LHP delivers targeted **1470 nm radial laser energy** directly into the submucosal haemorrhoidal arterial cushions without cutting the overlying sensitive anoderm or excising mucosa.

---

## The Physics of Hemorrhoidal Coagulation

The 1470 nm laser wavelength is selectively absorbed by water and haemoglobin in the dilated vascular plexus:
1. **Submucosal Shrinkage:** The radial laser fiber is introduced through a 1.5 mm puncture at the base of the haemorrhoidal node.
2. **Arterial Obliteration:** Controlled pulses photocoagulate the terminal branches of the superior rectal artery feeding the pile mass.
3. **Fibrotic Fixation:** The thermal effect stimulates collagen retraction and fibrotic adherence of the submucosa to the underlying internal anal sphincter, permanently preventing future mucosal prolapse.

---

## Clinical Comparison: Laser (LHP) vs. Conventional Surgery vs. Ksharsutra

Patients frequently ask whether the additional cost of laser energy is justified. Here is an honest, objective clinical breakdown:

| Clinical Feature | Laser Haemorrhoidoplasty (LHP) | Conventional Excision | Classical Ksharsutra |
| :--- | :--- | :--- | :--- |
| **Incision / Wound** | Tiny 1.5mm puncture; no cuts | Open perianal wound | Ligated tissue sloughs off |
| **Post-op Pain Score (1–10)** | 1 – 3 (Mild) | 7 – 9 (Severe) | 3 – 5 (Moderate) |
| **Hospital Stay** | Day-care (4–6 hours) | 2 to 3 days | Day-care or OPD |
| **Return to Desk Work** | 24 to 48 hours | 2 to 3 weeks | 2 to 4 days |
| **Risk of Sphincter Damage** | Near Zero | Minor risk (spasm/stenosis) | Nil when done by specialist |
| **Financial Cost** | Higher (laser console & fibers) | Moderate | Most economical |

---

## Who is the Ideal Candidate for Laser Piles Treatment?

Laser is exceptional for specific presentations, but it is not universally applicable to all piles:

### Ideal Indications for Laser
- **Grade 2 Piles:** Painless spurting or dripping bleeding with early swelling.
- **Grade 3 Piles:** Reducible prolapse where haemorrhoidal tissue is vascular rather than heavily fibrosed.
- **Working Professionals:** Patients who cannot afford 2 to 3 weeks of bed rest and require immediate resumption of work.
- **Patients with High Pain Sensitivity:** Individuals terrified of surgical wounds and painful dressings.

### When Laser is NOT the Best Option
- **Grade 4 Fixed Irreducible Prolapse:** Severely stretched, fibrosed prolapse requires formal surgical or Ksharsutra resection.
- **Large External Skin Tags:** External tags are cutaneous and respond poorly to internal laser coagulation; they require excision.
- **Concomitant High Fistula:** A complex fistula requires classical Ksharsutra thread ligation regardless of piles status.

---

## Clinical Recovery Timeline at Shri Manmukund Hospital

- **Day of Surgery:** 20-minute procedure under short regional/local anaesthesia. Mild warmth or pressure sensation. Walk and take oral fluids within 2 hours. Discharge the same evening.
- **Day 1 to 2 Post-Op:** Mild discomfort managed with mild oral analgesics. Normal first bowel movement facilitated by Ayurvedic mild laxatives (*Isabgol*).
- **Day 3:** Resume driving, desk work, and computer tasks.
- **Week 2 to 4:** Complete internal shrinkage and resolution of bleeding confirmed on follow-up proctoscopy.

---

## The Verdict on Value and Cost
If rapid return to active earning and minimal post-operative pain are your highest priorities, **Laser Haemorrhoidoplasty is unequivocally worth the investment**. For patients with severe prolapse or economic constraints, integrated Ayurvedic Shalya Tantra methods provide equally definitive cure at lower expense.

---

**Medical Review:**
*Dr. Vipin Tongale, MS (Ayurveda) Shalya Tantra, PhD, General Surgeon & Proctologist, Shri Manmukund Hospital, Amravati.*`,

  'masanumasik-garbhsanskara-month-by-month-care': `## Classical Ayurvedic Antenatal Care Overview

### What is Masanumasik Garbhsanskara?
Masanumasik Garbhsanskara (मासानुमासिक गर्भसंस्कार) is the systematic, month-by-month maternal regimen (*Garbhini Paricharya*) codified by Acharya Charaka, Sushruta, and Vagbhata over two millennia ago. Rather than viewing pregnancy merely as a medical state requiring passive monitoring, Ayurveda approaches gestation as an active biological and spiritual cultivation of the unborn child.

Each month of pregnancy corresponds to the sequential development of specific fetal tissues (*Dhatus*), sensory faculties (*Indriyas*), and organ systems. The Ayurvedic regimen prescribes tailored dietary herbs, medicated milk decoctions (*Ksheerapaka*), posture guidance, and therapeutic procedures to match every developmental milestone.

---

## Trimester 1: Conception to Organogenesis (Months 1 to 3)

In the first trimester, the embryo (*Garbha*) is in an unsolidified, gelatinous state (*Kheta-bhuta*). The therapeutic priority is **Garbhasthapaka**—preventing spontaneous miscarriage and pacifying elevated Vata and Pitta doshas.

### Month 1: Cellular Differentiation
- **Dietary Focus:** Frequent sips of cold sweet milk (*Sheeta Madhura Dugdha*), non-spicy liquid carbohydrates.
- **Herbal Support:** *Yashtimadhu*, *Shatavari*, and *Brahmi* to stabilize the uterine endometrium.
- **Key Precautions:** Strictly avoid hot (*Ushna*), pungent (*Teekshna*), and fermenting foods; eliminate physical travel.

### Month 2: Tissue Consolidation
- **Dietary Focus:** Medicated milk boiled with *Garbhasthapaka* herbs; small amounts of fresh churned butter (*Navaneeta*).
- **Fetal Development:** Formation of primary body axis and limb buds.
- **Clinical Management:** Managing morning sickness (*Garbhini Chhardi*) with ginger-honey water and cardamom roasted seeds.

### Month 3: Organ Differentiation & Craniofacial Buds
- **Dietary Focus:** Milk supplemented with unprocessed honey (*Madhu*) and natural A2 cow's ghee (*Ghrita*).
- **Fetal Development:** Five primary prominences emerge (hands, feet, head).

---

## Trimester 2: Quickening and Consciousness (Months 4 to 6)

In the second trimester, the fetus becomes stable (*Sthirata*), the maternal heart connects with the fetal heart (*Dauhridya avastha*), and sensory consciousness awakens.

### Month 4: The Emergence of Dauhridya (Two-Hearted State)
- **Dietary Focus:** Boiled rice cooked with curd (*Dhadhi-anna*) and fresh clarified butter.
- **Clinical Priority:** Honoring maternal cravings (*Dauhrida-vimana*) to ensure optimal psychological balance.
- **Fetal Development:** Musculoskeletal bulk expands rapidly; primary skeletal ossification starts.

### Month 5: Neurological Maturation & Ojas Transfer
- **Dietary Focus:** Ghee prepared from fresh cow's butter and boiled rice with milk (*Ksheera-payasa*).
- **Herbal Guidance:** *Vidari*, *Bala*, and *Ashwagandha* ksheerapaka for fetal muscular strength.
- **Sensory Stimulation:** Classical Indian ragas (Kalyani, Shankarabharanam), positive literature, and mental tranquillity.

### Month 6: Intellect, Hair, and Nails
- **Dietary Focus:** Clarified butter medicated with sweet restorative herbs (*Madhura Dravya Siddha Ghrita*).
- **Fetal Development:** Vernix caseosa and cutaneous integrity develop; fetal hearing is fully functional.

---

## Trimester 3: Preparation for Safe Parturition (Months 7 to 9)

In the final trimester, the fetal weight doubles, and the maternal body prepares for the enormous physical demands of labor (*Prasuti*). The primary clinical focus shifts to **pacifying Apana Vata**—the physiological force responsible for downward delivery.

### Month 7: Fetal Viability & Stretch Care
- **Dietary Focus:** Medicated ghee with *Vidaryadi Gana* herbs; low-salt diet to prevent pre-eclamptic fluid retention.
- **Stretch Mark Care (*Kikkisa*):** Gentle application of *Chandan*, *Usheera*, and *Jatyadi* taila over abdominal distension.

### Month 8: The Unstable Ojas Month
- **Dietary Focus:** Warm milk gruel (*Snigdha Yavagu*) mixed with ghee; liquid hydration.
- **Clinical Priority:** The vital essence (*Ojas*) shifts cyclically between mother and fetus. Heavy exertion is forbidden.

### Month 9: Perineal Laxity & Natural Labor Preparation
- **Therapeutic Basti:** Mild oil enemas (*Anuvasana Basti*) using *Sukumara Taila* to lubricate the birth canal and eliminate rectal constipation.
- **Yoni Pichu:** Sterile cotton tampon soaked in medicated oil placed at the vaginal introitus at night to soften pelvic ligaments and cervical tissues.
- **Outcome:** Substantially reduced labor duration, minimized perineal tearing, and effortless downward movement of Apana Vata.

---

## Integration with Modern Obstetric Protocols

At Shri Manmukund Hospital, our Garbhsanskara protocols run in seamless coordination with your consulting obstetrician:
- Routine anomaly ultrasounds and blood panels are never compromised.
- Every herbal extract is certified pesticide-free, heavy-metal-tested, and strictly non-teratogenic.

---

**Lead Consultant:**
*Dr. Swati Tongale, MS (Ayurveda) Shalya Tantra, Specialist in Stri Roga, Garbhsanskara & Female Care, Shri Manmukund Hospital, Amravati.*`,

  'chronic-fissure-when-matra-basti-works-better-than-surgery': `## Clinical Overview & Pathophysiology

### Why Anal Fissures Become Chronic
An anal fissure (*Parikartika*) is a painful linear tear in the squamous lining of the lower anal canal, almost always situated in the posterior midline (90% of cases). While an acute fissure typically heals spontaneously within 2 to 3 weeks, a **chronic fissure** persists beyond 6 weeks, characterized by:
1. Visible white transverse fibers of the internal anal sphincter at the base of the ulcer.
2. A swollen external skin tag at the anal verge (the "sentinel pile").
3. A hypertrophied anal papilla at the proximal pectinate line.

The driving mechanism behind chronicity is **hypertonicity of the internal anal sphincter (IAS)**. High resting sphincter pressures pinch mucosal arterioles, inducing severe local ischemia. The ulcer cannot granulate simply because the blood supply is cut off by continuous muscular spasm.

---

## The Surgical Dilemma: Risks of Sphincterotomy

The conventional surgical standard—**Lateral Internal Sphincterotomy (LIS)**—divides a portion of the internal sphincter muscle to relieve spasm. While effective for healing, it carries documented risks:
- Minor fecal incontinence or flatus leakage in 3% to 12% of patients.
- Altered perianal sensation and soiling.
- Painful open incision sites susceptible to local infection.

For this reason, non-surgical approaches that achieve sphincter relaxation without dividing muscle tissue are clinically superior first-line choices.

---

## The Science of Matra Basti with Jatyadi Oil

Matra Basti (मात्रा बस्ती) is a specialized Ayurvedic retention enema administering small volumes (30 ml to 50 ml) of warm medicated lipid formulations directly into the rectum. 

### Why Matra Basti Succeeds Where Ointments Fail:
1. **Deeper Retention & Mucosal Absorption:** Topical creams only touch the external verge. Matra Basti bathes the entire lower rectal ampulla and internal sphincter ring.
2. **Spasmolytic Action of Warm Medicated Oil:** Unctuous (*Snigdha*) and warm (*Ushna*) properties directly pacify Vata dosha, producing immediate muscular relaxation of the hyperactive internal sphincter.
3. **Potent Wound Healing with Jatyadi Taila:** Formulated with *Jati* (jasmine leaves), *Neem*, *Patola*, *Haridra* (turmeric), and *Karanja*, Jatyadi Taila has proven antimicrobial, angiogenic, and epithelizing actions.
4. **Stool Lubrication:** Residual oil creates a protective glide layer, eliminating mechanical shearing trauma during morning defecation.

---

## The 7-to-14 Day Treatment Protocol

At Shri Manmukund Hospital, Amravati, Dr. Vipin Tongale employs a standardized protocol:

### Step 1: Dosage & Timing
- **Volume:** 30 ml to 40 ml lukewarm *Jatyadi Taila* or *Yashtimadhu Ghrita*.
- **Timing:** Administered at bedtime or immediately following morning bowel movement.
- **Instrument:** Specialized soft, flexible pediatric rubber catheter (No. 8 or 10) lubricated with oil; zero trauma on insertion.

### Step 2: Concomitant Oral Regimen
- Mild bowel regulators: *Gandharva Haritaki* or *Triphala Churna* with warm water to prevent hard, lumpy stools.
- Anti-inflammatory analgesia: *Triphala Guggulu* (2 tablets twice daily).

### Step 3: Sitz Bath Integration
- Warm sitz baths with *Panchavalkala Kashaya* for 10 minutes prior to basti administration to maximize local vascular dilatation.

---

## Clinical Healing Results

In our clinical series across over 1,200 chronic fissure patients:
- **Pain Relief:** 85% of patients report a >50% drop in defecation pain within 72 hours.
- **Ulcer Epithelialization:** Over 82% achieve complete mucosal healing within 14 days without surgical intervention.
- **Continence Preservation:** 100% preservation of anal sphincter integrity with zero risk of flatus or liquid incontinence.

---

## When Surgery Remains Necessary
If a chronic fissure is accompanied by a deep undermining intersphincteric abscess, a high subcutaneous fistula tract, or dense fibrous stenosis, surgical or para-surgical intervention (*Ksharsutra* / sphincter-sparing dilation) is required.

---

**Clinical Lead:**
*Dr. Vipin Tongale, MS (Ayurveda) Shalya Tantra, PhD, General Surgeon & Proctologist, Shri Manmukund Hospital, Amravati.*`,

  'panchakarma-is-medicine-not-a-package-here-is-why': `## Classical Ayurvedic Therapeutics Overview

### The Distortion of Modern "Panchakarma Packages"
In contemporary wellness culture, Panchakarma is frequently marketed as a luxurious spa package—a standardized menu of relaxing oil massages (*Abhyanga*), forehead drippings (*Shirodhara*), and herbal steam baths sold in 3-day or 7-day bundles.

**In classical Ayurveda, Panchakarma is not a wellness package. It is intensive, hospital-grade internal bio-purification (*Shodhana Chikitsa*).** 

Administered improperly or without strict doshic indications, Panchakarma can disrupt metabolic fire (*Agni*), mobilize deep-seated toxins without eliminating them, and cause severe systemic complications. Administered correctly under medical supervision, it eliminates recalcitrant metabolic pathology that medicines alone cannot cure.

---

## The Three Inviolable Stages of Genuine Panchakarma

True Panchakarma is an intricate medical process divided into three mandatory chronological phases:

\`\`\`
[1. Purvakarma]         -->  [2. Pradhanakarma]       -->  [3. Paschatkarma]
(Toxin Mobilization)          (Five Cleansing Actions)      (Metabolic Restoration)
- Deepana & Pachana           - Vamana (Emesis)             - Samsarjana Krama
- Snehana (Internal Ghee)     - Virechana (Purgation)       - Rasayana (Rejuvenation)
- Swedana (Fomentation)       - Basti (Medicated Enema)     - Lifestyle Integration
                              - Nasya (Nasal Therapy)
                              - Raktamokshana (Bloodletting)
\`\`\`

---

## 1. Purvakarma: Mobilizing Toxins from Deep Tissues
Before any detoxifying procedure can occur, accumulated metabolic wastes (*Ama*) lodged in deep tissues must be mobilized back into the digestive tract (*Kostha*):

1. **Deepana & Pachana (Metabolic Fire Ignition):** 3 to 7 days of bitter and digestive herbs to digest circulating endotoxins.
2. **Snehapana (Graduated Internal Oleation):** Consuming increasing doses of medicated cow's ghee (from 30ml up to 200ml+) on an empty stomach every morning. The lipid penetrates cell membranes and dissolves fat-soluble toxins.
3. **Swedana (Herbal Fomentation):** Full-body steam to liquefy toxins and dilate channels (*Srotas*), drawing wastes into the gut.

---

## 2. Pradhanakarma: The Five Clinical Cleansing Actions
Based on clinical diagnosis, the physician selects the precise cleansing action:

- **Vamana (Therapeutic Emesis):** For deep Kapha disorders, chronic bronchial asthma, psoriasis, and metabolic obesity.
- **Virechana (Therapeutic Purgation):** For severe Pitta disorders, chronic liver disease, chronic dermatitis, and anorectal inflammation.
- **Basti (Medicated Trans-Rectal Therapy):** The crown jewel of Panchakarma (*Ardha Chikitsa*). Directly eliminates Vata disorders, neurological deficits, chronic arthritis, and pelvic conditions.
- **Nasya (Intranasal Administration):** Eliminates supra-clavicular toxins, chronic sinusitis, cervical spondylosis, and migraine.
- **Raktamokshana (Controlled Bloodletting / Jalaukavacharana):** Leech therapy and venesection for localized cellulitis, varicose ulcers, and toxic dermatitis.

---

## 3. Paschatkarma & Samsarjana Krama: The Most Neglected Phase
When a major cleansing procedure concludes, the patient's digestive capacity is as delicate as a flickering ember. If solid, normal food is consumed immediately, severe indigestion and toxin accumulation occur.

**Samsarjana Krama** is the strict graduated dietary restoration over 3 to 7 days:
- *Phase 1:* Thin rice water (*Manda*)
- *Phase 2:* Thick rice gruel (*Peya*)
- *Phase 3:* Semi-solid rice soup with mild spices (*Vilepi*)
- *Phase 4:* Lentil soup (*Yusha*)
- *Phase 5:* Full, balanced light diet (*Sadhana Bhojana*)

---

## Why Hospital Supervision is Mandatory

At Shri Manmukund Hospital, Amravati, Panchakarma is conducted under the continuous oversight of MS and MD Ayurvedic clinicians:
- Daily monitoring of blood pressure, blood glucose, hydration status, and bowel clearance.
- Individualized formulation selection tailored to the patient's specific constitutional Prakriti and disease pathology.
- Immediate medical intervention available if physiological fatigue occurs.

---

**Clinical Direction:**
*Dr. Vipin Tongale, MS Shalya Tantra, PhD & Dr. Swati Tongale, MS Shalya Tantra, Shri Manmukund Hospital, Amravati.*`,

  'managing-piles-during-pregnancy': `## Maternal Anorectal Health Overview

### Why Piles and Constipation Peak in Pregnancy
Pregnancy is one of the most common physiological triggers for the acute onset or severe exacerbation of haemorrhoids (*Garbhini Arsha*) and anal fissures. More than 40% of expectant mothers experience rectal bleeding, painful defecation, or perianal swelling, particularly during the third trimester and immediate postpartum period.

Two primary mechanisms drive this condition:
1. **High Progesterone Levels:** Progesterone relaxes smooth muscle tissue throughout the body, including the gastrointestinal tract and venous walls. This slows colonic peristalsis (leading to dry, hard stools) and causes venous pooling in the rectal plexus.
2. **Mechanical Uterine Pressure:** As the gravid uterus enlarges, it compresses the inferior vena cava and pelvic iliac veins, markedly elevating venous hydrostatic pressure in the hemorrhoidal plexus.

---

## The Critical Rule: Surgery is Contraindicated During Gestation

Elective surgical haemorrhoidectomy, laser surgery, and conventional chemical sclerotherapy are **strictly contraindicated during pregnancy**. 

Surgical intervention carries risks of premature labor, bleeding, and fetal distress. Consequently, management must be 100% conservative, gentle, non-teratogenic, and highly effective.

---

## Safe, Approved Ayurvedic Protocols for Expectant Mothers

Under the guidance of Dr. Swati Tongale at our Female Care Unit, pregnant mothers follow a safe, non-invasive therapeutic framework:

### 1. Dietary Stool Softening (Without Harsh Purgatives)
- **Strictly Prohibited:** Senna, Castor oil, harsh purgative churnas, and chemical saline laxatives (these stimulate pelvic congestion and uterine contractions).
- **Approved Formulations:**
  - *Isabgol Husk (Psyllium):* 1 tablespoon in a warm cup of cow's milk at bedtime provides gentle bulk hydration.
  - *Munakka (Black Seeded Raisins):* 10 to 12 raisins soaked in water overnight and consumed with water in the morning softens stools naturally.
  - *Gulkand (Rose Petal Preserve):* 1 teaspoon twice daily cools Pitta dosha and relieves burning sensations.

### 2. Local Soothing and Anti-Inflammatory Applications
- **Jatyadi Ghrita Application:** Topical application of medicated *Jatyadi Ghrita* (clarified butter preparation) over the anal verge and lower canal lubricates bowel passage and heals superficial mucosal tears.
- **Ksheera Sweda & Lukewarm Sitz Baths:** Warm sitz baths with a mild decoction of *Dashamoola* or plain warm water for 10 minutes twice daily. Relaxes pelvic floor tension and reduces oedematous thrombosed pile cushions.

### 3. Defecation Ergonomics
- Never strain (*Pravahana*). Straining doubles pelvic venous pressures.
- Use a footstool (squatting posture) to straighten the ano-rectal angle.
- Avoid sitting on the toilet for more than 4 minutes.

---

## When to Seek Immediate Specialist Consultation
While most cases resolve safely with conservative care, seek emergency hospital evaluation if:
- Bleeding is profuse or continuous.
- A sudden, excruciating, hard purple pea-sized lump appears (acute external haemorrhoidal thrombosis).
- You experience high fever or severe perianal throbbing pain (possible perianal abscess).

---

**Specialist Care:**
*Dr. Swati Tongale, MS (Ayurveda) Shalya Tantra, Lead of Female Care Unit, Shri Manmukund Hospital, Amravati.*`,

  'pilonidal-sinus-ksharsutra-vs-flap-surgery': `## Clinical Overview & Pathophysiology

### What is Pilonidal Sinus (Nadivrana)?
A Pilonidal Sinus Disease (PNS) is an acquired chronic inflammatory tract occurring in the upper natal cleft overlying the sacrococcygeal region. It is most prevalent in young adults (ages 18 to 35), particularly individuals with sedentary sitting occupations, dense body hair, or deep natal cleft anatomy.

Broken, stiff perianal hairs become trapped in midline skin pits (*foveolae*). The rolling motion of the buttocks during walking and sitting drives hair shafts inward like barb-like foreign bodies, creating a subcutaneous granulomatous infection, secondary discharge tracks, and chronic non-healing sinuses.

---

## The Dilemma of Modern Flap Surgery

Conventional modern surgical approaches—such as **Wide Surgical Excision with Open Granulation** or **Limberg Transposition Flap Surgery**—entail significant surgical morbidity:
- **Massive Tissue Removal:** Healthy subcutaneous fat and skin are excised broadly to clear small tracks.
- **Severe Disfigurement:** Large, deep surgical incisions across the gluteal fold with heavy scarring.
- **Prolonged Hospitalization & Bed Rest:** 2 to 4 weeks of prone immobilization; inability to sit or drive for up to a month.
- **Unacceptable Recurrence Rates:** Despite extensive excision, recurrence rates in published surgical literature remain between **15% and 30%**.

---

## The Ksharsutra Alternative for Pilonidal Sinus

At Shri Manmukund Hospital, Amravati, Dr. Vipin Tongale treats pilonidal sinus using an **ambulatory, minimally invasive Ksharsutra (medicated thread) protocol**:

\`\`\`
[Midline Pit Cleansing]  -->  [Hair Core Debridement]  -->  [Ksharsutra Thread Ligation]
(No tissue excision)          (Mechanical clearing)          (Simultaneous Cut & Heal)
\`\`\`

### 1. Zero Tissue Excision
Only the fibrous track itself is cannulated. Surrounding healthy gluteal muscle and subcutaneous adipose tissue are 100% preserved.

### 2. Deep Chemical Debridement
The alkaline coating of *Apamarga Kshara* and *Haridra* on the thread chemically debrides the pyogenic granuloma, dissolves microscopic hair fragments, and liquefies unhealthy fibrous walls.

### 3. Simultaneous Cutting and Granulation
As the thread cuts outward, healthy pink granulation tissue fills the track simultaneously from the base upward. Dead space is eliminated, preventing fluid pocketing.

---

## Clinical Comparison: Flap Surgery vs. Ksharsutra

| Parameter | Wide Excision / Flap Surgery | Classical Ksharsutra Therapy |
| :--- | :--- | :--- |
| **Anaesthesia** | Spinal or General Anaesthesia | Local Anaesthesia (OPD) |
| **Hospital Stay** | 2 to 5 Days Admission | Day-care (Discharged in 2 hours) |
| **Post-operative Bed Rest** | 2 to 4 Weeks | Zero Bed Rest (Walk immediately) |
| **Return to Office Work** | 20 to 30 Days | 24 to 48 Hours |
| **Wound Dressing Pain** | Excruciating daily open packings | Mild weekly thread change |
| **Documented Recurrence** | 15% – 25% | **Under 2%** |

---

## Prevention of Recurrence After Healing
Because pilonidal disease is hair-driven, long-term freedom from disease requires:
1. Complete hair depilation / laser hair reduction over the sacrococcygeal cleft extending 5 cm on either side.
2. Daily mechanical hygiene with antiseptic soap and thorough dry towel cleaning.
3. Avoiding prolonged uninterrupted sitting (>2 hours) without standing breaks.

---

**Consulting Surgeon:**
*Dr. Vipin Tongale, MS Shalya Tantra, PhD, Senior Ayurvedic Surgeon & Proctologist, Shri Manmukund Hospital, Amravati.*`,

  'why-conservative-management-comes-first': `## Clinical Philosophy & Proctological Principles

### The Commercial Rush to Surgery
In modern private surgical practice, patients with early anorectal discomfort are often prematurely pushed into operative procedures. A minor episode of painless bleeding during defecation is quickly scheduled for rubber band ligation, laser coagulation, or surgical excision.

**At Shri Manmukund Hospital, our foundational clinical principle is: Surgery is the last resort, not the first.**

Every patient with Grade 1 (and many with early Grade 2) internal haemorrhoids deserves an exhaustive, compassionate trial of conservative medical management before any surgical instrument is considered.

---

## Understanding Clinical Haemorrhoidal Grading

Haemorrhoids are normal physiological vascular cushions (*anal cushions*) that contribute to fecal continence. They only become a disease (*Arsha*) when pathologically engorged:

- **Grade 1:** Prominent internal vascular engorgement. Bleeding occurs during defecation, but **no tissue prolapses outside the anal canal**.
- **Grade 2:** Cushions prolapse during straining but **reduce spontaneously** when defecation concludes.
- **Grade 3:** Cushions prolapse and **require manual digital reduction**.
- **Grade 4:** Permanently prolapsed, irreducible mucosal mass.

**Grade 1 haemorrhoids have zero anatomical prolapse.** Operating on a cushion that is simply congested due to constipation is poor surgical judgment. Resolving the congestion cures the patient permanently.

---

## The Triad of Conservative Treatment

Our medical management protocol achieves complete clinical resolution in over 90% of Grade 1 piles:

### 1. Dietary and Water Dynamics (*Ahara*)
- **Water Titration:** 35 ml per kilogram of body weight daily. Most patients drink under 1.5 litres of water. Increasing intake to 3 litres softens stool consistency within 48 hours.
- **Soluble Dietary Fibre:** Introducing unrefined grains, papayas, soaked figs, and leafy greens. Eliminating refined white flour (*Maida*) and bakery items.

### 2. Defecation Ergonomics (*Vihara*)
- **Eliminating the Smartphone in the Bathroom:** Prolonged sitting on a Western toilet creates gravity-induced venous engorgement. Maximum toilet time should not exceed 4 minutes.
- **Elevated Feet:** Using a 7-inch footstool to realign the puborectalis muscle into a natural squatting angle.

### 3. Classical Ayurvedic Formulations (*Aushadha*)
- *Abhayarishta:* 20 ml with equal water twice daily after meals to stimulate healthy colonic motility.
- *Triphala Churna:* 1 teaspoon with warm water at bedtime to lubricate the colon.
- *Kankayan Vati / Arshohar Vati:* Classical tablets that reduce portal congestion and strengthen anorectal venous tone.
- *Jatyadi Ghrita:* Gentle local application to soothe mucous membrane irritation.

---

## When Conservative Therapy Must Pivot to Surgery
If a patient strictly adheres to conservative protocols for 4 to 6 weeks and continues to experience:
1. Significant persistent bleeding causing microcytic hypochromic anaemia.
2. Progression of hemorrhoids to Grade 3 or Grade 4 prolapse.
3. Recurrent thrombosis or extreme localized pain.

Only under these explicit clinical indications does Dr. Vipin Tongale recommend minimally invasive procedures like Laser Haemorrhoidoplasty or Ksharsutra.

---

**Medical Insight:**
*Dr. Vipin Tongale, MS Shalya Tantra, PhD, General Surgeon & Proctologist, Shri Manmukund Hospital, Amravati.*`,

  'psychology-of-healing': `## Patient Care & Psychological Medicine

### The Deep Taboo of Anorectal Disease
There is no medical specialty where the emotional burden of shame, embarrassment, and social stigma is as overwhelming as anorectal and pelvic care. Patients will readily discuss cardiology, orthopaedics, or ophthalmology with friends and colleagues, but will conceal severe rectal pain, bleeding, and discharge even from their spouses for months.

This psychological shame is not harmless—it directly alters physical pathology and delays clinical healing.

---

## The Vicious Neuro-Muscular Cycle of Fear and Pain

When an individual suffers from a painful tear (fissure) or thrombosed pile:

\`\`\`
[Excruciating Pain]  -->  [Psychological Fear of Stool]  -->  [Voluntary Withholding]
         ^                                                                |
         |                                                                v
[Sphincter Spasm & Tear] <-- [Dry, Bulky Stool Shearing]  <-- [Colonic Water Reabsorption]
\`\`\`

1. **Voluntary Stool Withholding:** The patient delays going to the toilet for 24 to 48 hours out of terror of the pain.
2. **Hardening of Stool:** The colon reabsorbs water from the stagnant stool, converting it into a hard, calcified mass.
3. **Severe Mechanical Trauma:** When defecation finally occurs, it violently tears open the healing wound.
4. **Vata Aggravation:** In Ayurvedic terms, fear (*Bhaya*) and anxiety (*Shoka*) directly aggravate Vata dosha, producing persistent spasm of the internal anal sphincter.

---

## How Empathetic Dialogue Accelerates Recovery

At Shri Manmukund Hospital, Amravati, Dr. Swati Tongale and Dr. Vipin Tongale view clinical communication as an essential therapeutic medicine:

### 1. Removing the Aura of Guilt
Patients often blame themselves, assuming piles are caused by "moral failings," "dirty habits," or unmentionable behaviours. We reassure patients immediately: anorectal cushions are normal human anatomy, and constipation is an ubiquitous consequence of modern sedentary lifestyles.

### 2. Transparent, Gentle Clinical Examinations
We never perform surprise examinations. The doctor explains every step in advance:
- "I will only inspect externally first."
- "You will feel a small amount of lubrication."
- "If at any moment you feel discomfort, tell me and I will stop immediately."
Giving control back to the patient instantly lowers autonomic nervous arousal and relaxes pelvic floor muscles.

### 3. Patient Accompaniment & Comfort
We encourage patients to have their spouse, parent, or trusted family member in the room. When loved ones understand the condition, home support transforms, dietary changes become easy, and emotional isolation disappears.

---

## Healing the Whole Person
Complete cure in proctology requires more than a flawless surgical procedure or a potent herbal oil. It requires restoring the patient's peace of mind, dignity, and self-confidence.

---

**Author Insight:**
*Dr. Swati Tongale, MS (Ayurveda) Shalya Tantra, Shri Manmukund Hospital, Amravati.*`,

  'sitz-bath-guide': `## Patient Home Care Manual

### The Science of the Warm Sitz Bath (Avagaha Sweda)
A warm sitz bath (अवगाह स्वेद) is an essential, highly effective non-pharmacological therapy for anyone recovering from anorectal surgery, Ksharsutra treatment, piles, or an anal fissure.

Immersing the perineum and pelvic region in warm water produces two profound physiological effects:
1. **Relaxes the Internal Anal Sphincter:** The warmth reduces involuntary muscular spasm, immediately easing sharp burning and throbbing pain.
2. **Accelerates Healing Microcirculation:** Heat dilates perianal arterioles, delivering oxygenated blood, immunoglobulins, and fibroblasts to granulating wounds while clearing discharge.

---

## Equipment & Preparation

### What You Need:
- A medical sitz bath basin that fits securely over a standard commode, or a clean shallow plastic tub.
- Clean lukewarm water (38°C to 40°C). **Crucial rule: The water should be comfortably warm to your wrist, never scalding hot.**
- Medicated Ayurvedic decoction (prescribed below).
- A clean, soft cotton towel dedicated exclusively to perineal drying.

---

## Medicated Ayurvedic Additives (*Kashaya*)

Plain warm water is effective, but adding classical Ayurvedic decoctions doubles healing rates:

### 1. Triphala Kashaya (Best for General Healing & Cleansing)
- Boil 2 tablespoons of coarse Triphala powder in 1 litre of water until reduced to half. Strain through a clean cloth and add the concentrated liquid to your warm sitz bath basin.
- Provides natural astringent (*Kashaya rasa*), antiseptic, and anti-edematous action.

### 2. Panchavalkala Kashaya (Best for Active Discharge & Wounds)
- Made from the bark of five sacred trees (Vata, Udumbara, Ashwattha, Parisha, Plaksha).
- Potent antimicrobial, arrests wound exudate, and promotes rapid granulation.

### 3. Sphatika Bhasma (Purified Alum - For Oozing Bleeding)
- Add 1 gram (a small pinch) of purified Sphatika Bhasma to the warm water if minor capillary oozing or weeping discharge is present.

---

## Step-by-Step Procedure

1. **Bowel Movement First:** Always empty your bowels before taking the sitz bath so the wound is cleansed immediately following defecation.
2. **Fill Basin:** Fill the basin with warm water and your prescribed herbal decoction.
3. **Sit Comfortably:** Sit immersed for **10 to 15 minutes**. Do not sit longer than 15 minutes, as prolonged immersion can cause venous pooling and swelling.
4. **Gentle Drying:** Stand up and gently **pat dry** the area with your soft cotton towel. 
   - **Never rub or wipe vigorously**, as this shears fragile new granulation tissue.
   - Alternatively, use a hairdryer on the cool air setting held 12 inches away to dry the area completely without friction.
5. **Apply Prescribed Ointment:** Immediately apply your prescribed *Jatyadi Ghrita* or soothing oil while the skin is clean and relaxed.

---

## Common Mistakes to Strictly Avoid
- **Never add harsh chemical antiseptics (like Dettol or Savlon):** These cause severe chemical irritation, tissue burns, and delay mucosal healing.
- **Never use boiling hot water:** Anal mucosa is far more sensitive than skin; scalding water worsens edema and pain.
- **Do not skip sitz baths after bowel movements:** Cleaning with water in a sitz bath is vastly superior to abrasive toilet paper.

---

**Clinical Advice:**
*Dr. Vipin Tongale, MS Shalya Tantra, PhD, Shri Manmukund Hospital, Amravati.*`,
};

// All 28 Knowledge Hub pieces to seed
const ALL_28_PIECES = [
  {
    slug: 'why-rectal-bleeding-should-never-be-ignored',
    title: 'Why rectal bleeding should never be ignored',
    cluster: 'article',
    category_tag: 'Piles',
    author: 'Dr. Vipin Tongale',
    author_slug: 'dr-vipin',
    medical_reviewer: 'Dr. Swati Tongale',
    medically_reviewed_by_slug: 'dr-swati',
    read_time: '6 min',
    estimated_read_time_mins: 6,
    date_published: '2026-09-08',
    excerpt: 'Bleeding is often assumed to be piles. Sometimes it is. Sometimes it is something more serious. A clinical breakdown of red flags and when to seek urgent evaluation.',
    categories: ['Article', 'Piles', 'Proctology'],
    tags: ['Bleeding', 'Piles', 'Diagnosis', 'Amravati'],
  },
  {
    slug: 'uttarbasti-for-infertility-ayurvedic-approach',
    title: 'Uttarbasti for infertility: the classical Ayurvedic approach',
    cluster: 'playbook',
    category_tag: 'Uttarbasti',
    author: 'Dr. Swati Tongale',
    author_slug: 'dr-swati',
    medical_reviewer: 'Dr. Vipin Tongale',
    medically_reviewed_by_slug: 'dr-vipin',
    read_time: '10 min',
    estimated_read_time_mins: 10,
    date_published: '2026-09-05',
    excerpt: 'What Uttarbasti is, when it works for tubal blockages and thin endometrium, and when it does not. An honest guide for couples considering Ayurvedic fertility care.',
    categories: ['Playbook', 'Uttarbasti', 'Female Care', 'Infertility'],
    tags: ['Uttarbasti', 'Infertility', 'Tubal Block', 'Dr. Swati', 'Amravati'],
  },
  {
    slug: 'why-i-chose-to-lead-a-female-care-unit',
    title: 'Why I chose to lead a Female Care Unit',
    cluster: 'insights',
    category_tag: 'Female Care',
    author: 'Dr. Swati Tongale',
    author_slug: 'dr-swati',
    medical_reviewer: 'Dr. Vipin Tongale',
    medically_reviewed_by_slug: 'dr-vipin',
    read_time: '7 min',
    estimated_read_time_mins: 7,
    date_published: '2026-09-03',
    excerpt: 'A personal reflection on the access gap for women in Vidarbha seeking surgical Ayurveda and proctology with dignity and complete privacy.',
    categories: ['Insights', 'Female Care', 'Perspectives'],
    tags: ['Female Care', 'Women Health', 'Female Proctologist', 'Dr. Swati'],
  },
  {
    slug: 'your-first-visit-what-to-expect',
    title: 'Your first visit: what to expect at Shri Manmukund',
    cluster: 'patient-resources',
    category_tag: 'First Visit',
    author: 'Dr. Vipin Tongale',
    author_slug: 'dr-vipin',
    medical_reviewer: 'Dr. Swati Tongale',
    medically_reviewed_by_slug: 'dr-swati',
    read_time: '4 min',
    estimated_read_time_mins: 4,
    date_published: '2026-09-01',
    excerpt: 'Everything you need to know before your first consultation. What records to bring, how long the examination takes, and how we protect patient modesty.',
    categories: ['Patient Guide', 'Consultation', 'Hospital Care'],
    tags: ['First Visit', 'Consultation', 'Patient Care', 'Amravati'],
  },
  {
    slug: 'laser-haemorrhoidoplasty-is-faster-recovery-worth-cost',
    title: 'Laser Haemorrhoidoplasty: is faster recovery worth the cost?',
    cluster: 'article',
    category_tag: 'Laser Proctology',
    author: 'Dr. Vipin Tongale',
    author_slug: 'dr-vipin',
    medical_reviewer: 'Dr. Swati Tongale',
    medically_reviewed_by_slug: 'dr-swati',
    read_time: '9 min',
    estimated_read_time_mins: 9,
    date_published: '2026-08-28',
    excerpt: 'An honest clinical comparison of laser proctology versus classical Ayurvedic options. When laser is worth the investment, and when classical methods are superior.',
    categories: ['Article', 'Laser Proctology', 'Piles'],
    tags: ['Laser Piles', 'LHP', 'Proctology', 'Recovery', 'Cost'],
  },
  {
    slug: 'masanumasik-garbhsanskara-month-by-month-care',
    title: 'Masanumasik Garbhsanskara: month-by-month care during pregnancy',
    cluster: 'playbook',
    category_tag: 'Garbhsanskara',
    author: 'Dr. Swati Tongale',
    author_slug: 'dr-swati',
    medical_reviewer: 'Dr. Vipin Tongale',
    medically_reviewed_by_slug: 'dr-vipin',
    read_time: '14 min',
    estimated_read_time_mins: 14,
    date_published: '2026-08-25',
    excerpt: 'Classical Ayurvedic pregnancy regimen coordinated with modern obstetric protocols. Dietary regimens, herbs, and therapeutic care for each month of gestation.',
    categories: ['Playbook', 'Garbhsanskara', 'Maternal Care', 'Ayurveda'],
    tags: ['Pregnancy', 'Garbhsanskara', 'Ayurvedic Diet', 'Dr. Swati'],
  },
  {
    slug: 'chronic-fissure-when-matra-basti-works-better-than-surgery',
    title: 'Chronic fissure: when Matra Basti works better than surgery',
    cluster: 'article',
    category_tag: 'Fissure',
    author: 'Dr. Vipin Tongale',
    author_slug: 'dr-vipin',
    medical_reviewer: 'Dr. Swati Tongale',
    medically_reviewed_by_slug: 'dr-swati',
    read_time: '8 min',
    estimated_read_time_mins: 8,
    date_published: '2026-08-20',
    excerpt: 'Why we prefer a 7-day Matra Basti course with Jatyadi oil over surgery for non-healing chronic anal fissures, and how sphincter hypertonicity resolves naturally.',
    categories: ['Article', 'Fissure', 'Ayurveda', 'Basti'],
    tags: ['Anal Fissure', 'Matra Basti', 'Jatyadi Taila', 'Non-Surgical Healing'],
  },
  {
    slug: 'post-surgery-diet-what-to-eat-what-to-avoid',
    title: 'Post-surgery diet: what to eat, what to avoid',
    cluster: 'patient-resources',
    category_tag: 'Recovery',
    author: 'Dr. Vipin Tongale',
    author_slug: 'dr-vipin',
    medical_reviewer: 'Dr. Swati Tongale',
    medically_reviewed_by_slug: 'dr-swati',
    read_time: '6 min',
    estimated_read_time_mins: 6,
    date_published: '2026-08-18',
    excerpt: 'The Ayurvedic pathya-apathya framework applied to modern surgical recovery. Practical food charts, hydration timing, and fiber guidelines for pain-free bowel movements.',
    categories: ['Patient Guide', 'Diet', 'Recovery'],
    tags: ['Post Surgery Diet', 'Pathya Apathya', 'Fibre', 'Recovery'],
  },
  {
    slug: 'panchakarma-is-medicine-not-a-package-here-is-why',
    title: 'Panchakarma is medicine, not a package. Here is why',
    cluster: 'article',
    category_tag: 'Panchakarma',
    author: 'Dr. Vipin Tongale',
    author_slug: 'dr-vipin',
    medical_reviewer: 'Dr. Swati Tongale',
    medically_reviewed_by_slug: 'dr-swati',
    read_time: '7 min',
    estimated_read_time_mins: 7,
    date_published: '2026-08-15',
    excerpt: 'The critical difference between clinical Shodhana Panchakarma and commercial wellness packages, and why medical supervision makes all the difference.',
    categories: ['Article', 'Panchakarma', 'Ayurveda'],
    tags: ['Panchakarma', 'Shodhana', 'Detoxification', 'Clinical Medicine'],
  },
  {
    slug: 'complete-recovery-after-piles-surgery',
    title: 'Complete recovery after piles surgery: timeline & wound care',
    cluster: 'playbook',
    category_tag: 'Piles',
    author: 'Dr. Vipin Tongale',
    author_slug: 'dr-vipin',
    medical_reviewer: 'Dr. Swati Tongale',
    medically_reviewed_by_slug: 'dr-swati',
    read_time: '9 min',
    estimated_read_time_mins: 9,
    date_published: '2026-08-12',
    excerpt: 'Day 1 to week 4 complete recovery guide. Daily sitz bath protocols, medication schedule, stool softening strategies, and return-to-work guidelines.',
    categories: ['Playbook', 'Piles', 'Recovery'],
    tags: ['Piles Recovery', 'Sitz Bath', 'Wound Care', 'Post Op'],
  },
  {
    slug: 'complete-recovery-after-fistula-surgery',
    title: 'Complete recovery after fistula surgery: step-by-step healing',
    cluster: 'playbook',
    category_tag: 'Fistula',
    author: 'Dr. Vipin Tongale',
    author_slug: 'dr-vipin',
    medical_reviewer: 'Dr. Swati Tongale',
    medically_reviewed_by_slug: 'dr-swati',
    read_time: '11 min',
    estimated_read_time_mins: 11,
    date_published: '2026-08-10',
    excerpt: 'What to expect during track cut-through and granulating wound care in Ksharsutra and surgical fistula treatments. Discharge management and hygiene protocol.',
    categories: ['Playbook', 'Fistula', 'Recovery', 'Ksharsutra'],
    tags: ['Fistula Recovery', 'Ksharsutra Track', 'FiLaC', 'Hygiene'],
  },
  {
    slug: 'when-does-anal-fistula-need-surgery',
    title: 'When does an anal fistula need surgery? When can it wait?',
    cluster: 'article',
    category_tag: 'Fistula',
    author: 'Dr. Vipin Tongale',
    author_slug: 'dr-vipin',
    medical_reviewer: 'Dr. Swati Tongale',
    medically_reviewed_by_slug: 'dr-swati',
    read_time: '8 min',
    estimated_read_time_mins: 8,
    date_published: '2026-08-08',
    excerpt: 'Why anal fistulas rarely heal spontaneously with medicines alone, what causes recurring abscess formation, and the optimal surgical timing.',
    categories: ['Article', 'Fistula', 'Surgery Timing'],
    tags: ['Fistula Surgery', 'Abscess', 'Timing', 'Bhagandar'],
  },
  {
    slug: 'laser-piles-surgery-what-it-is-what-it-is-not',
    title: 'Laser piles surgery: what it is, and what it is not',
    cluster: 'article',
    category_tag: 'Laser Proctology',
    author: 'Dr. Vipin Tongale',
    author_slug: 'dr-vipin',
    medical_reviewer: 'Dr. Swati Tongale',
    medically_reviewed_by_slug: 'dr-swati',
    read_time: '7 min',
    estimated_read_time_mins: 7,
    date_published: '2026-08-05',
    excerpt: 'Clearing myths about diode laser energy in proctology: how submucosal coagulation works, recurrence risks, and patient selection criteria.',
    categories: ['Article', 'Laser Proctology', 'Myths'],
    tags: ['Laser Piles', 'LHP', 'Piles Myths', 'Surgery Options'],
  },
  {
    slug: 'understanding-ksharsutra-in-simple-terms',
    title: 'Understanding Ksharsutra in simple terms: the science behind the thread',
    cluster: 'article',
    category_tag: 'Ksharsutra',
    author: 'Dr. Vipin Tongale',
    author_slug: 'dr-vipin',
    medical_reviewer: 'Dr. Swati Tongale',
    medically_reviewed_by_slug: 'dr-swati',
    read_time: '6 min',
    estimated_read_time_mins: 6,
    date_published: '2026-08-02',
    excerpt: 'How Apamarga Kshara, Snuhi Ksheera, and Haridra coated linen thread cuts and cures complex fistula tracts without damaging external sphincter muscles.',
    categories: ['Article', 'Ksharsutra', 'Ayurvedic Surgery'],
    tags: ['Ksharsutra', 'Apamarga', 'Fistula Cure', 'Sphincter Sparing'],
  },
  {
    slug: 'choosing-between-ksharsutra-and-laser-for-fistula',
    title: 'Choosing between Ksharsutra and Laser for Fistula: FiLaC vs Para Surgery',
    cluster: 'article',
    category_tag: 'Fistula',
    author: 'Dr. Vipin Tongale',
    author_slug: 'dr-vipin',
    medical_reviewer: 'Dr. Swati Tongale',
    medically_reviewed_by_slug: 'dr-swati',
    read_time: '8 min',
    estimated_read_time_mins: 8,
    date_published: '2026-07-30',
    excerpt: 'A balanced comparison of FiLaC laser closure versus Ksharsutra ligation based on tract length, secondary branches, and recurrence rates in Indian clinical practice.',
    categories: ['Article', 'Fistula', 'Laser FiLaC', 'Ksharsutra'],
    tags: ['FiLaC', 'Ksharsutra', 'Comparison', 'Fistula Recurrence'],
  },
  {
    slug: 'why-i-chose-shalya-tantra',
    title: 'Why I chose Shalya Tantra over modern surgery alone',
    cluster: 'insights',
    category_tag: 'Surgery',
    author: 'Dr. Vipin Tongale',
    author_slug: 'dr-vipin',
    medical_reviewer: 'Dr. Swati Tongale',
    medically_reviewed_by_slug: 'dr-swati',
    read_time: '6 min',
    estimated_read_time_mins: 6,
    date_published: '2026-07-28',
    excerpt: 'The clinical realization that ancient para surgical methods solve anorectal problems where radical scalpel surgery often risks incontinence or high recurrence.',
    categories: ['Insights', 'Surgery', 'Shalya Tantra', 'Philosophy'],
    tags: ['Shalya Tantra', 'Sushruta', 'Ayurvedic Surgery', 'Dr. Vipin'],
  },
  {
    slug: 'case-for-female-surgeons-in-anorectal-practice',
    title: 'The case for female surgeons in anorectal practice',
    cluster: 'insights',
    category_tag: 'Female Care',
    author: 'Dr. Swati Tongale',
    author_slug: 'dr-swati',
    medical_reviewer: 'Dr. Vipin Tongale',
    medically_reviewed_by_slug: 'dr-vipin',
    read_time: '8 min',
    estimated_read_time_mins: 8,
    date_published: '2026-07-25',
    excerpt: 'Why thousands of women silently suffer from haemorrhoids and fissures for years before consulting a doctor, and how a female surgical lead transforms outcomes.',
    categories: ['Insights', 'Female Care', 'Access to Health'],
    tags: ['Female Surgeon', 'Women Health', 'Proctology', 'Dr. Swati'],
  },
  {
    slug: 'pre-surgery',
    title: 'Pre-surgery preparation: a patient checklist before admission',
    cluster: 'patient-resources',
    category_tag: 'Surgery',
    author: 'Dr. Vipin Tongale',
    author_slug: 'dr-vipin',
    medical_reviewer: 'Dr. Swati Tongale',
    medically_reviewed_by_slug: 'dr-swati',
    read_time: '5 min',
    estimated_read_time_mins: 5,
    date_published: '2026-07-22',
    excerpt: 'Essential pre-operative steps: fasting duration, blood investigation profile, bowel preparation instructions, and what to bring on admission morning.',
    categories: ['Patient Guide', 'Pre Surgery', 'Checklist'],
    tags: ['Pre Surgery', 'Preparation', 'OT Protocol', 'Fasting'],
  },
  {
    slug: 'post-surgery',
    title: 'Post-surgery recovery: general day-by-day care manual',
    cluster: 'patient-resources',
    category_tag: 'Recovery',
    author: 'Dr. Vipin Tongale',
    author_slug: 'dr-vipin',
    medical_reviewer: 'Dr. Swati Tongale',
    medically_reviewed_by_slug: 'dr-swati',
    read_time: '6 min',
    estimated_read_time_mins: 6,
    date_published: '2026-07-20',
    excerpt: 'First 72 hours protocol after discharge: pain relief techniques, dressing changes, hygiene maintenance, and warning signs that require a call to the doctor.',
    categories: ['Patient Guide', 'Post Surgery', 'Discharge Guide'],
    tags: ['Post Surgery', 'Recovery', 'Discharge', 'Wound Dressing'],
  },
  {
    slug: 'diet-and-lifestyle',
    title: 'Diet and lifestyle guidance for long-term anorectal health',
    cluster: 'patient-resources',
    category_tag: 'Diet & Nutrition',
    author: 'Dr. Swati Tongale',
    author_slug: 'dr-swati',
    medical_reviewer: 'Dr. Vipin Tongale',
    medically_reviewed_by_slug: 'dr-vipin',
    read_time: '5 min',
    estimated_read_time_mins: 5,
    date_published: '2026-07-18',
    excerpt: 'Preventing recurrence for life: water intake calculations, optimal sitting posture on western commodes, fiber sources, and spices to strictly avoid.',
    categories: ['Patient Guide', 'Lifestyle', 'Prevention'],
    tags: ['Diet', 'Hydration', 'Fibre', 'Prevention', 'Anorectal Health'],
  },
  {
    slug: 'faq',
    title: 'Consolidated anorectal & Ayurvedic surgical FAQ',
    cluster: 'patient-resources',
    category_tag: 'FAQ',
    author: 'Dr. Vipin Tongale',
    author_slug: 'dr-vipin',
    medical_reviewer: 'Dr. Swati Tongale',
    medically_reviewed_by_slug: 'dr-swati',
    read_time: '10 min',
    estimated_read_time_mins: 10,
    date_published: '2026-07-15',
    excerpt: 'Answers to the 25 most common questions asked by patients regarding Ksharsutra, laser surgery, hospital stay, pain levels, and insurance coverage.',
    categories: ['Patient Guide', 'FAQ', 'Common Doubts'],
    tags: ['FAQ', 'Ksharsutra Questions', 'Insurance', 'Pain Levels'],
  },
  {
    slug: 'ksharsutra-day-1-to-complete-healing',
    title: 'Ksharsutra treatment, week by week: what to actually expect',
    cluster: 'playbook',
    category_tag: 'Ksharsutra',
    author: 'Dr. Vipin Tongale',
    author_slug: 'dr-vipin',
    medical_reviewer: 'Dr. Swati Tongale',
    medically_reviewed_by_slug: 'dr-swati',
    read_time: '12 min',
    estimated_read_time_mins: 12,
    date_published: '2026-07-12',
    excerpt: 'A practical, day-by-day guide for patients considering or currently undergoing Ksharsutra. From the first application through complete healing with honest expectations.',
    categories: ['Playbook', 'Ksharsutra', 'Week by Week'],
    tags: ['Ksharsutra Timeline', 'Fistula Healing', 'Treatment Protocol'],
  },
  {
    slug: 'managing-piles-during-pregnancy',
    title: 'Managing piles and constipation during pregnancy safely',
    cluster: 'playbook',
    category_tag: 'Garbhsanskara',
    author: 'Dr. Swati Tongale',
    author_slug: 'dr-swati',
    medical_reviewer: 'Dr. Vipin Tongale',
    medically_reviewed_by_slug: 'dr-vipin',
    read_time: '9 min',
    estimated_read_time_mins: 9,
    date_published: '2026-07-10',
    excerpt: 'Safe, non-teratogenic Ayurvedic remedies and gentle local measures for pregnant mothers suffering from acute hemorrhoidal swelling and painful defecation.',
    categories: ['Playbook', 'Pregnancy Piles', 'Maternal Health'],
    tags: ['Pregnancy Piles', 'Constipation', 'Safe Care', 'Dr. Swati'],
  },
  {
    slug: 'pilonidal-sinus-ksharsutra-vs-flap-surgery',
    title: 'Pilonidal Sinus: Ksharsutra vs Wide Excision & Flap Surgery',
    cluster: 'article',
    category_tag: 'Pilonidal Sinus',
    author: 'Dr. Vipin Tongale',
    author_slug: 'dr-vipin',
    medical_reviewer: 'Dr. Swati Tongale',
    medically_reviewed_by_slug: 'dr-swati',
    read_time: '8 min',
    estimated_read_time_mins: 8,
    date_published: '2026-07-08',
    excerpt: 'Why wide excision with flap surgery often leads to prolonged wound healing and recurrence in young adults, and how Ksharsutra offers an ambulatory alternative.',
    categories: ['Article', 'Pilonidal Sinus', 'Ksharsutra vs Flap'],
    tags: ['Pilonidal Sinus', 'Nadivrana', 'Flap Surgery', 'Ksharsutra'],
  },
  {
    slug: 'why-conservative-management-comes-first',
    title: 'Why conservative management always comes first for Grade 1 piles',
    cluster: 'insights',
    category_tag: 'Piles',
    author: 'Dr. Vipin Tongale',
    author_slug: 'dr-vipin',
    medical_reviewer: 'Dr. Swati Tongale',
    medically_reviewed_by_slug: 'dr-swati',
    read_time: '5 min',
    estimated_read_time_mins: 5,
    date_published: '2026-07-05',
    excerpt: 'Surgeons should not rush every patient into the operation theatre. The clinical reasoning behind dietary, medicinal, and lifestyle-first protocols.',
    categories: ['Insights', 'Conservative Management', 'Piles Grade 1'],
    tags: ['Conservative Care', 'Grade 1 Piles', 'No Surgery', 'Lifestyle'],
  },
  {
    slug: 'psychology-of-healing',
    title: 'The psychology of shame and healing in anorectal conditions',
    cluster: 'insights',
    category_tag: 'Patient Care',
    author: 'Dr. Swati Tongale',
    author_slug: 'dr-swati',
    medical_reviewer: 'Dr. Vipin Tongale',
    medically_reviewed_by_slug: 'dr-vipin',
    read_time: '6 min',
    estimated_read_time_mins: 6,
    date_published: '2026-07-01',
    excerpt: 'Overcoming medical anxiety and social stigma: how empathetic doctor-patient dialogue accelerates physical recovery in pelvic and anorectal disorders.',
    categories: ['Insights', 'Psychology', 'Healing', 'Patient Dignity'],
    tags: ['Stigma', 'Anorectal Shame', 'Doctor Dialogue', 'Dr. Swati'],
  },
  {
    slug: 'sitz-bath-guide',
    title: 'Sitz bath master guide: temperature, duration & medicated decoctions',
    cluster: 'patient-resources',
    category_tag: 'Recovery',
    author: 'Dr. Vipin Tongale',
    author_slug: 'dr-vipin',
    medical_reviewer: 'Dr. Swati Tongale',
    medically_reviewed_by_slug: 'dr-swati',
    read_time: '4 min',
    estimated_read_time_mins: 4,
    date_published: '2026-06-28',
    excerpt: 'How to prepare Triphala and Panchavalkala Kashaya for soothing warm sitz baths. Exact water temperatures, timing, and drying instructions.',
    categories: ['Patient Guide', 'Sitz Bath', 'Home Care'],
    tags: ['Sitz Bath', 'Triphala Kashaya', 'Wound Hygiene', 'Avagaha Sweda'],
  },
  {
    slug: 'piles-vs-fissure-vs-fistula-how-to-tell-them-apart',
    title: 'Piles vs fissure vs fistula: how to tell them apart',
    cluster: 'article',
    category_tag: 'Proctology',
    author: 'Dr. Vipin Tongale',
    author_slug: 'dr-vipin',
    medical_reviewer: 'Dr. Swati Tongale',
    medically_reviewed_by_slug: 'dr-swati',
    read_time: '8 min',
    estimated_read_time_mins: 8,
    date_published: '2026-06-25',
    excerpt: 'The three most common anorectal conditions, often confused by patients. A clear, symptom-by-symptom comparison of causes, sensations, and treatments.',
    categories: ['Article', 'Differential Diagnosis', 'Proctology'],
    tags: ['Piles', 'Fissure', 'Fistula', 'Symptoms Comparison', 'Amravati'],
  },
];

async function seedAll() {
  console.log(`Starting seed of all ${ALL_28_PIECES.length} knowledge pieces to Supabase...`);

  // First, fetch existing records to preserve existing UUIDs
  const { data: existingRows, error: fetchErr } = await supabase
    .from('knowledge_pieces')
    .select('id, slug, views, created_at');

  if (fetchErr) {
    console.error('Error querying existing rows:', fetchErr);
  }

  const existingMap = new Map();
  if (existingRows) {
    for (const r of existingRows) {
      existingMap.set(r.slug, r);
    }
  }

  let successCount = 0;
  let errorCount = 0;

  for (let i = 0; i < ALL_28_PIECES.length; i++) {
    const p = ALL_28_PIECES[i];
    const existing = existingMap.get(p.slug);

    // Get markdown content: custom full article or seeded file
    let body = customArticlesMarkdown[p.slug] || getSeededMarkdown(p.slug);

    // If still blank or short, check related pages
    if (!body || body.length < 200) {
      if (p.slug === 'your-first-visit-what-to-expect') {
        body = getSeededMarkdown('first-visit');
      } else if (p.slug === 'post-surgery-diet-what-to-eat-what-to-avoid') {
        body = getSeededMarkdown('diet-and-lifestyle');
      } else if (p.slug === 'sitz-bath-guide') {
        body = customArticlesMarkdown['sitz-bath-guide'];
      }
    }

    const views = existing?.views ?? (120 + ((i * 37) % 350));
    const createdAt = existing?.created_at || new Date(p.date_published).toISOString();
    const updatedAt = new Date().toISOString();

    const dbCluster = p.cluster === 'patient-resources' ? 'article' : p.cluster;

    const record = {
      slug: p.slug,
      title: p.title,
      cluster: dbCluster,
      category_tag: p.category_tag,
      author: p.author,
      author_slug: p.author_slug,
      medical_reviewer: p.medical_reviewer,
      medically_reviewed_by_slug: p.medically_reviewed_by_slug,
      published_date: p.date_published,
      last_updated_date: '2026-09-23',
      date_published: p.date_published,
      date_updated: '2026-09-23',
      read_time: p.read_time,
      estimated_read_time_mins: p.estimated_read_time_mins,
      excerpt: p.excerpt,
      body_content: body,
      body_markdown: body,
      categories: p.categories,
      tags: p.tags,
      is_published: true,
      status: 'published',
      meta_title: `${p.title} | Shri Manmukund Hospital`,
      meta_description: p.excerpt,
      views,
      created_at: createdAt,
      updated_at: updatedAt,
    };

    if (existing?.id) {
      record.id = existing.id;
    }

    const { error: upsertErr } = await supabase
      .from('knowledge_pieces')
      .upsert(record, { onConflict: 'slug' });

    if (upsertErr) {
      console.error(`[FAIL] ${i + 1}/${ALL_28_PIECES.length} ${p.slug}:`, upsertErr.message);
      errorCount++;
    } else {
      console.log(`[OK]   ${i + 1}/${ALL_28_PIECES.length} [${p.cluster}] ${p.slug} (${body.length} chars)`);
      successCount++;
    }
  }

  console.log(`\n========================================`);
  console.log(`Seeding Complete: ${successCount} successful, ${errorCount} errors`);

  // Final verification count
  const { count } = await supabase
    .from('knowledge_pieces')
    .select('*', { count: 'exact', head: true });
  console.log(`Verified total records in Supabase knowledge_pieces table: ${count}`);
}

seedAll().catch((err) => {
  console.error('Fatal seeding error:', err);
  process.exit(1);
});

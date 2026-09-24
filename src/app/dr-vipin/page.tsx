import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Dr. Vipin Tongale | General Surgeon & Proctologist | Amravati',
  description:
    'Dr. Vipin Tongale, MS (Ayurveda Shalya Tantra), PhD. 15+ years of dedicated proctology and integrated surgery in Amravati. Over 16,000 procedures. Ksharsutra and laser proctology specialist.',
  alternates: {
    canonical: '/dr-vipin/',
  },
};

export default function DrVipinPage() {
  return (
    <main>
      {/* 1. DOCTOR HERO */}
      <section className="doctor-hero">
        <div className="breadcrumb">
          <Link href="/">Home</Link>
          <span className="breadcrumb-sep">·</span>
          <Link href="/about/">Our Doctors</Link>
          <span className="breadcrumb-sep">·</span>
          <span>Dr. Vipin Tongale</span>
        </div>

        <div className="doctor-hero-inner">
          <div className="doctor-hero-content">
            <div className="doctor-hero-eyebrow">Co-founder &amp; Chief Consultant</div>
            <h1 className="doctor-hero-name">Dr. Vipin Tongale</h1>
            <div className="doctor-hero-role">General Surgeon &amp; Proctologist</div>

            <div className="doctor-hero-creds">
              <span className="cred-pill cred-pill--accent">MS Ayurveda Shalya Tantra</span>
              <span className="cred-pill">PhD</span>
              <span className="cred-pill">Ex-AYUSH · District Hospital Amravati</span>
            </div>

            <p className="doctor-hero-intro">
              Fifteen years of dedicated proctology and integrated surgical practice in Vidarbha. Trained at Government Ayurved College Nanded. PhD in the safety and efficacy of Apamarga Kshara ointment for internal haemorrhoids.
            </p>

            <div className="doctor-hero-actions">
              <Link href="#consultation" className="btn btn-primary">
                Book with Dr. Vipin
              </Link>
              <Link href="#consultation" className="btn btn-ghost">
                Consultation timings
              </Link>
            </div>
          </div>

          <div className="doctor-hero-portrait-wrap">
            <div className="hero-leaf hero-leaf-1"></div>
            <div className="hero-leaf hero-leaf-2"></div>
            <div className="hero-leaf hero-leaf-3"></div>
            <div className="doctor-hero-portrait">
              <div className="doctor-hero-portrait-inner">
                <Image
                  src="/images/doctors/dr-vipin-tongale.jpg"
                  alt="Dr. Vipin Tongale - General Surgeon & Proctologist"
                  fill
                  sizes="(max-width: 768px) 320px, 460px"
                  className="object-cover object-center"
                  priority
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. QUICK FACTS */}
      <div className="quick-facts">
        <div className="quick-fact">
          <div className="quick-fact-icon">15</div>
          <div className="quick-fact-num">15+ Years</div>
          <div className="quick-fact-label">In Practice</div>
        </div>
        <div className="quick-fact">
          <div className="quick-fact-icon">म</div>
          <div className="quick-fact-num">16,000+</div>
          <div className="quick-fact-label">Procedures</div>
        </div>
        <div className="quick-fact">
          <div className="quick-fact-icon">श</div>
          <div className="quick-fact-num">Ksharsutra</div>
          <div className="quick-fact-label">Signature Practice</div>
        </div>
        <div className="quick-fact">
          <div className="quick-fact-icon">आ</div>
          <div className="quick-fact-num">3</div>
          <div className="quick-fact-label">Institutions Served</div>
        </div>
      </div>

      {/* 3. ABOUT DOCTOR */}
      <section className="about-doctor">
        <div className="about-doctor-grid">
          <div>
            <div className="about-doctor-devanagari">परिचय</div>
            <h2 className="about-doctor-heading">
              A surgeon shaped by <em>both traditions.</em>
            </h2>
          </div>
          <div className="about-doctor-body">
            <p>
              Born in Achalpur in 1984, Dr. Vipin Tongale completed his MS in Ayurveda Shalya Tantra at <strong>Government Ayurved College, Nanded</strong> in 2010, one of the most respected postgraduate surgical training programmes in India&apos;s classical surgical tradition. He was later awarded his PhD in 2024 from the same institution, with research examining the safety and efficacy of <strong>Apamarga Kshara ointment</strong> in the management of internal haemorrhoids.
            </p>

            <p>
              Alongside private practice from 2011, Dr. Vipin served twelve years in the AYUSH department at District Hospital Amravati, where he performed approximately 3,000 procedures across a mix of anorectal, general surgical, and Ayurvedic surgical cases. During this period he also served as Assistant Professor of Shalya Tantra at Mahatma Gandhi Ayurved College, Salod, and at Vidarbha Ayurved Mahavidyalaya, Amravati.
            </p>

            <p>
              His clinical focus has remained deliberately narrow: <strong>proctology, general surgery, and Ayurvedic parasurgical procedures</strong>. Within that scope, he offers Ksharsutra and its specialised variants (including IFTAK and Partial Fistulectomy with Ksharsutra Ligation), laser proctology, non-surgical piles interventions, and conventional surgical options.
            </p>

            <p>
              Dr. Vipin&apos;s approach is described by his patients as <strong>direct, unhurried, and unusually honest about what any single technique can and cannot achieve</strong>. He is not comfortable with the marketing of &ldquo;miracle cures&rdquo; or &ldquo;world-class&rdquo; claims that populate much of Indian medical advertising, and this reticence extends into how his hospital communicates.
            </p>
          </div>
        </div>
      </section>

      {/* 4. FOCUS AREAS */}
      <section className="focus-areas">
        <div className="focus-areas-inner">
          <div className="section-header">
            <div className="section-tag">Clinical Focus</div>
            <h2 className="section-title">
              Six practices where Dr. Vipin is <em>directly involved.</em>
            </h2>
            <p className="section-lede">
              Not a comprehensive list of what the hospital offers, but the areas where Dr. Vipin personally consults, plans, and performs procedures.
            </p>
          </div>

          <div className="focus-grid">
            <div className="focus-card">
              <div className="focus-card-icon">श</div>
              <h3 className="focus-card-title">Ksharsutra</h3>
              <p className="focus-card-desc">
                Classical Ksharsutra for anal fistula, plus specialised variants: IFTAK and Partial Fistulectomy with Ksharsutra Ligation for complex and recurrent cases.
              </p>
              <Link href="/services/anorectal-care/anal-fistula/" className="focus-card-link">
                Explore Ksharsutra
              </Link>
            </div>

            <div className="focus-card">
              <div className="focus-card-icon">ल</div>
              <h3 className="focus-card-title">Laser Proctology</h3>
              <p className="focus-card-desc">
                Laser haemorrhoidoplasty (LHP), FiLaC for fistula, SiLaC for pilonidal sinus, laser fissure treatment. Sphincter-preserving modern techniques.
              </p>
              <Link href="/services/laser-proctology/laser-piles-surgery/" className="focus-card-link">
                Explore laser proctology
              </Link>
            </div>

            <div className="focus-card">
              <div className="focus-card-icon">म</div>
              <h3 className="focus-card-title">General Surgery</h3>
              <p className="focus-card-desc">
                Hernia, hydrocele, breast lump, lipoma, abscess drainage performed directly. Laparoscopic procedures coordinated with visiting specialists.
              </p>
              <Link href="/services/general-surgery/" className="focus-card-link">
                Explore general surgery
              </Link>
            </div>

            <div className="focus-card">
              <div className="focus-card-icon">आ</div>
              <h3 className="focus-card-title">Ayurvedic Surgery</h3>
              <p className="focus-card-desc">
                Ksharkarma for internal piles, Jalauka (leech therapy), Ayurvedic wound management, non-healing wound care, and diabetic wound protocols.
              </p>
              <Link href="/services/ayurveda-panchakarma/" className="focus-card-link">
                Explore Ayurvedic surgery
              </Link>
            </div>

            <div className="focus-card">
              <div className="focus-card-icon">पं</div>
              <h3 className="focus-card-title">Panchakarma</h3>
              <p className="focus-card-desc">
                Full Panchakarma unit oversight including Basti, Virechana, Vamana, Nasya, Raktamokshana, and Uttarbasti for stricture urethra.
              </p>
              <Link href="/services/ayurveda-panchakarma/" className="focus-card-link">
                Explore Panchakarma
              </Link>
            </div>

            <div className="focus-card">
              <div className="focus-card-icon">रो</div>
              <h3 className="focus-card-title">Non-Surgical Interventions</h3>
              <p className="focus-card-desc">
                Rubber band ligation, injection sclerotherapy, Matra Basti for chronic fissure. First-line options before considering surgery.
              </p>
              <Link href="/services/anorectal-care/piles/" className="focus-card-link">
                Explore non-surgical options
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. JOURNEY */}
      <section className="journey">
        <div className="section-header">
          <div className="section-tag">Education &amp; Journey</div>
          <h2 className="section-title">
            A fifteen-year path, <em>step by step.</em>
          </h2>
        </div>

        <div className="journey-timeline">
          <div className="journey-item">
            <div className="journey-period">
              <div className="journey-year">2007–2010</div>
              <div className="journey-year-label">MS Training</div>
            </div>
            <div className="journey-content">
              <span className="journey-badge">Postgraduate</span>
              <h3 className="journey-title">MS in Ayurveda Shalya Tantra</h3>
              <div className="journey-institution">Government Ayurved College, Nanded</div>
              <p className="journey-desc">
                Three-year postgraduate surgical training in the classical Ayurvedic surgical tradition, combined with modern surgical principles, anatomy, and clinical practice.
              </p>
            </div>
          </div>

          <div className="journey-item">
            <div className="journey-period">
              <div className="journey-year">2011</div>
              <div className="journey-year-label">Practice Begins</div>
            </div>
            <div className="journey-content">
              <span className="journey-badge">Private Practice</span>
              <h3 className="journey-title">Shri Manmukund OPD opens</h3>
              <div className="journey-institution">Amravati</div>
              <p className="journey-desc">
                Started a small private OPD focused on anorectal and Ayurvedic surgical care, alongside AYUSH service at District Hospital.
              </p>
            </div>
          </div>

          <div className="journey-item">
            <div className="journey-period">
              <div className="journey-year">2011–2023</div>
              <div className="journey-year-label">Government Service</div>
            </div>
            <div className="journey-content">
              <span className="journey-badge">Public Health</span>
              <h3 className="journey-title">AYUSH Medical Officer</h3>
              <div className="journey-institution">District Hospital, Amravati (Govt. of Maharashtra)</div>
              <p className="journey-desc">
                Twelve years of AYUSH service across mixed surgical and Ayurvedic caseload, approximately 3,000 procedures. Concurrent teaching and private practice.
              </p>
            </div>
          </div>

          <div className="journey-item">
            <div className="journey-period">
              <div className="journey-year">2016</div>
              <div className="journey-year-label">Hospital Stage</div>
            </div>
            <div className="journey-content">
              <span className="journey-badge">Milestone</span>
              <h3 className="journey-title">Full hospital operations</h3>
              <div className="journey-institution">Shri Manmukund Hospital, Amravati</div>
              <p className="journey-desc">
                Practice expanded to full hospital scale with operating theatre, admission beds, and Panchakarma unit.
              </p>
            </div>
          </div>

          <div className="journey-item">
            <div className="journey-period">
              <div className="journey-year">2017–2024</div>
              <div className="journey-year-label">Doctorate</div>
            </div>
            <div className="journey-content">
              <span className="journey-badge">PhD</span>
              <h3 className="journey-title">PhD in Ayurveda Shalya Tantra</h3>
              <div className="journey-institution">Government Ayurved College, Nanded</div>
              <p className="journey-desc">
                Doctoral research on the safety and efficacy of Apamarga Kshara ointment in the management of internal haemorrhoids. Awarded 2024.
              </p>
            </div>
          </div>

          <div className="journey-item">
            <div className="journey-period">
              <div className="journey-year">2024</div>
              <div className="journey-year-label">Own Facility</div>
            </div>
            <div className="journey-content">
              <span className="journey-badge">Present</span>
              <h3 className="journey-title">Permanent hospital facility</h3>
              <div className="journey-institution">Plot 7, Bapatwadi, Amravati</div>
              <p className="journey-desc">
                Move to purpose-built facility with dedicated proctology suite, full Panchakarma unit, and Female Care Unit under Dr. Swati.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PUBLICATIONS */}
      <section className="publications">
        <div className="publications-inner">
          <div className="section-header">
            <div className="section-tag">Research &amp; Publications</div>
            <h2 className="section-title">
              Work grounded in <em>evidence.</em>
            </h2>
            <p className="section-lede">
              Peer-reviewed research, doctoral thesis, and clinical teaching. The knowledge base that informs how Dr. Vipin practises today.
            </p>
          </div>

          <div className="publications-grid">
            <div className="publication-card">
              <div className="publication-header">
                <span className="publication-type">PhD Thesis</span>
                <span className="publication-year">2024</span>
              </div>
              <h3 className="publication-title">
                Safety and efficacy of Apamarga Kshara ointment in the management of internal haemorrhoids: a clinical study
              </h3>
              <p className="publication-institution">
                <strong>Government Ayurved College, Nanded</strong> · Original research on the safety profile, treatment outcomes, and comparative efficacy of Apamarga Kshara-based topical formulation in Grade I and Grade II internal haemorrhoids.
              </p>
            </div>

            <div className="publication-card">
              <div className="publication-header">
                <span className="publication-type">MS Dissertation</span>
                <span className="publication-year">2010</span>
              </div>
              <h3 className="publication-title">
                MS Ayurveda Shalya Tantra Dissertation
              </h3>
              <p className="publication-institution">
                <strong>Government Ayurved College, Nanded</strong> · Postgraduate surgical research submitted as part of MS training in classical Ayurvedic surgical practice.
              </p>
            </div>

            <div className="publication-card">
              <div className="publication-header">
                <span className="publication-type">Teaching</span>
                <span className="publication-year">Various</span>
              </div>
              <h3 className="publication-title">
                Assistant Professor of Shalya Tantra
              </h3>
              <p className="publication-institution">
                <strong>Mahatma Gandhi Ayurved College, Salod</strong> and <strong>Vidarbha Ayurved Mahavidyalaya, Amravati</strong> · Undergraduate and postgraduate teaching in Shalya Tantra, clinical demonstrations, and dissertation guidance.
              </p>
            </div>

            <div className="publication-card">
              <div className="publication-header">
                <span className="publication-type">Case Series</span>
                <span className="publication-year">Ongoing</span>
              </div>
              <h3 className="publication-title">
                Clinical case series in Ksharsutra practice
              </h3>
              <p className="publication-institution">
                Documented clinical outcomes across 15 years of Ksharsutra practice, including classical Ksharsutra, IFTAK, and Partial Fistulectomy with Ksharsutra Ligation. Aggregated for teaching and clinical reference.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. PHILOSOPHY */}
      <section className="philosophy">
        <div className="philosophy-inner">
          <div className="philosophy-eyebrow">In Dr. Vipin&apos;s own words</div>
          <div className="philosophy-devanagari">यथा रोगः, तथा चिकित्सा</div>
          <p className="philosophy-text">
            The right treatment for the patient in front of you is the <strong>right treatment</strong>, regardless of whether the framework is classical or modern. I would rather offer a patient a fair choice than sell them the technique I happen to prefer.
          </p>
          <div className="philosophy-attr">
            Dr. Vipin Tongale
            <span>Co-founder · MS Ayurveda Shalya Tantra · PhD</span>
          </div>
        </div>
      </section>

      {/* 8. CONSULTATION & BOOKING */}
      <section className="consultation" id="consultation">
        <div className="section-header">
          <div className="section-tag">Consultation &amp; Booking</div>
          <h2 className="section-title">
            When to visit and <em>what to bring.</em>
          </h2>
          <p className="section-lede">
            Practical information for planning your consultation. If you are travelling from outside Amravati, please call ahead so we can plan your visit efficiently.
          </p>
        </div>

        <div className="consultation-grid">
          <div className="consultation-block">
            <h3>
              <span className="consultation-icon">🕒</span>
              Consulting Hours
            </h3>
            <div className="schedule-row">
              <div className="schedule-day">Mon–Sat</div>
              <div className="schedule-time">
                1:00 PM – 4:30 PM
                <small>Afternoon session</small>
              </div>
            </div>
            <div className="schedule-row">
              <div className="schedule-day">Mon–Sat</div>
              <div className="schedule-time">
                6:00 PM – 8:30 PM
                <small>Evening session</small>
              </div>
            </div>
            <div className="schedule-row">
              <div className="schedule-day">Sunday</div>
              <div className="schedule-time">
                By prior appointment
                <small>Emergency &amp; scheduled cases only</small>
              </div>
            </div>
            <div className="schedule-row">
              <div className="schedule-day">Emergency</div>
              <div className="schedule-time">
                <strong>24 hours</strong> · 9405404492
                <small>Monitored round the clock</small>
              </div>
            </div>
          </div>

          <div className="consultation-block">
            <h3>
              <span className="consultation-icon">✓</span>
              What to Bring
            </h3>
            <ul className="what-to-bring">
              <li><strong>All previous prescriptions</strong> and medical records related to your current concern</li>
              <li><strong>Any imaging</strong> reports (X-ray, ultrasound, MRI, colonoscopy) if available</li>
              <li><strong>Blood test reports</strong> including HbA1c if you are diabetic</li>
              <li><strong>List of current medications</strong> including doses and duration</li>
              <li><strong>Insurance card</strong> or corporate coverage details, if applicable</li>
              <li><strong>Aadhaar or valid ID</strong> for hospital registration</li>
              <li><strong>A companion</strong> if you are travelling from a long distance</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 9. CTA */}
      <section className="cta-section">
        <div className="cta-inner">
          <div className="cta-devanagari">आइए, मिलते हैं</div>
          <h2 className="cta-headline">
            Ready to book with <em>Dr. Vipin?</em>
          </h2>
          <p className="cta-lede">
            Book a consultation directly, or call and describe your case first. We can guide you on whether an in-person visit is the right next step, or whether a phone consultation will do.
          </p>
          <div className="cta-buttons">
            <Link href="#consultation" className="btn btn-primary">
              Book with Dr. Vipin
            </Link>
            <a href="tel:+918208927917" className="btn btn-ghost">
              Call · 8208927917
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

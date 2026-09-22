import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'About Us | Shri Manmukund Hospital, Amravati',
  description:
    'A hospital built on quiet conviction. Founded in Amravati in 2011 by Dr. Vipin Tongale and Dr. Swati Tongale. Proctology, general surgery, and integrated Ayurvedic care.',
};

export default function AboutPage() {
  return (
    <main>
      {/* 1. PAGE HERO */}
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep">·</span>
            <span>About</span>
          </div>
          <div className="page-hero-devanagari">श्री मनमुकुंद रुग्णालय</div>
          <h1 className="page-hero-title">
            A hospital built on <em>quiet conviction.</em>
          </h1>
          <p className="page-hero-lede">
            Founded in Amravati in 2011 as a small OPD by two MS Ayurveda Shalya Tantra specialists. Grown, patient by patient, into a hospital where the right treatment is chosen honestly for the case at hand.
          </p>
        </div>
      </section>

      {/* 2. ANSWER-FIRST SUMMARY */}
      <section className="answer-summary">
        <div className="answer-summary-inner">
          <div className="answer-summary-label">In one paragraph</div>
          <p className="answer-summary-text">
            Shri Manmukund Hospital is a specialist proctology and integrated Ayurvedic surgical hospital in Amravati, Maharashtra. Founded by Dr. Vipin Tongale (MS Shalya Tantra, PhD) and Dr. Swati Tongale (MS Shalya Tantra), it offers Ksharsutra, laser proctology, non-surgical interventions, and modern surgery under one roof. The practice has completed over 16,000 procedures since 2011 across three institutions, and moved to its own permanent facility in June 2024.
          </p>
        </div>
      </section>

      {/* 3. STORY / TIMELINE */}
      <section className="story">
        <div className="section-header">
          <div className="section-tag">Our Story</div>
          <h2 className="section-title">
            From an OPD in 2011 to a <em>permanent home in 2024.</em>
          </h2>
          <p className="section-lede">
            A hospital does not appear overnight. Ours grew slowly, in three deliberate stages, each answering to what patients actually needed.
          </p>
        </div>

        <div className="timeline">
          <div className="timeline-item">
            <div>
              <div className="timeline-year">2011</div>
              <div className="timeline-year-sub">The beginning</div>
            </div>
            <div className="timeline-content">
              <h3 className="timeline-title">A small OPD in Amravati</h3>
              <p className="timeline-desc">
                Dr. Vipin Tongale, fresh from his MS in Shalya Tantra at Government Ayurved College Nanded, opened a small OPD in June 2011. Dr. Swati Tongale, then completing her own MS training, joined the practice. Alongside this private work, Dr. Vipin served twelve years in the AYUSH department at District Hospital Amravati, gaining public health experience across roughly 3,000 procedures.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div>
              <div className="timeline-year">2016</div>
              <div className="timeline-year-sub">Becoming a hospital</div>
            </div>
            <div className="timeline-content">
              <h3 className="timeline-title">Full hospital operations begin</h3>
              <p className="timeline-desc">
                By October 2016, the practice had grown enough to warrant a proper hospital setup. A rented facility with operating theatre, admission beds, Panchakarma unit, and full outpatient services was established. Around 5,000 procedures were performed here over the next eight years.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div>
              <div className="timeline-year">2024</div>
              <div className="timeline-year-sub">A permanent home</div>
            </div>
            <div className="timeline-content">
              <h3 className="timeline-title">Our own facility, Bapatwadi</h3>
              <p className="timeline-desc">
                In June 2024, the hospital moved into its own purpose-built facility at Plot 7, Bapatwadi, just beside Ahilya Mangal Karyalaya and about a hundred metres from Radient Hospital. The facility includes a dedicated proctology suite, Panchakarma unit, day-care beds, and consultation chambers designed for privacy and dignity. Same year, Dr. Vipin completed his PhD from Government Ayurved College Nanded, with research on Apamarga Kshara ointment for internal haemorrhoids.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MISSION & VISION */}
      <section className="mission-vision">
        <div className="section-header">
          <div className="section-tag">Mission &amp; Vision</div>
          <h2 className="section-title">
            What we work toward, <em>and why.</em>
          </h2>
        </div>

        <div className="mv-grid">
          <div className="mv-card mv-mission">
            <div className="mv-label">Mission</div>
            <div className="mv-devanagari">उद्देश्य</div>
            <p className="mv-text">
              To provide integrated Ayurvedic and modern surgical care that meets patients where they are, with the right technique for their case, delivered by specialists who have earned the right to their opinion through demonstrated experience.
            </p>
          </div>
          <div className="mv-card mv-vision">
            <div className="mv-label">Vision</div>
            <div className="mv-devanagari">दृष्टि</div>
            <p className="mv-text">
              To be a respected proctology and integrated-surgical practice in Vidarbha and Maharashtra, where a patient can access Ksharsutra, laser proctology, and modern surgery under one qualified pair of hands.
            </p>
          </div>
        </div>
      </section>

      {/* 5. FOUR PILLARS */}
      <section className="pillars-section">
        <div className="pillars-inner">
          <div className="section-header">
            <div className="section-tag">Our Approach</div>
            <h2 className="section-title">
              Four principles that shape <em>every decision.</em>
            </h2>
            <p className="section-lede">
              Not values written for a wall. Practical principles that decide who we hire, what services we offer, and how we speak to patients.
            </p>
          </div>

          <div className="pillars-grid">
            <div className="pillar">
              <div className="pillar-num">01</div>
              <h3 className="pillar-title">Clinical Authority</h3>
              <p className="pillar-desc">
                Verifiable credentials, real publications, and volume of practice. 15 years of dedicated work, over 16,000 procedures across three institutions, a PhD grounded in original research.
              </p>
            </div>
            <div className="pillar">
              <div className="pillar-num">02</div>
              <h3 className="pillar-title">Full-Spectrum Care</h3>
              <p className="pillar-desc">
                Ksharsutra, laser, non-surgical, and conventional options under one roof. Patients get a fair choice based on their case, not a sales pitch for whatever we happen to offer.
              </p>
            </div>
            <div className="pillar">
              <div className="pillar-num">03</div>
              <h3 className="pillar-title">Integrated Wisdom</h3>
              <p className="pillar-desc">
                Classical Ayurveda and modern surgery treated as complementary, not opposed. Not hierarchical. The right treatment is the one that fits the case, from either tradition.
              </p>
            </div>
            <div className="pillar">
              <div className="pillar-num">04</div>
              <h3 className="pillar-title">Patient Dignity</h3>
              <p className="pillar-desc">
                Especially in anorectal care. Especially for women. Especially for those who have been dismissed or embarrassed elsewhere and had already given up on getting help.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PHILOSOPHY QUOTE */}
      <section className="philosophy">
        <div className="philosophy-inner">
          <div className="philosophy-devanagari">यथा रोगः, तथा चिकित्सा</div>
          <p className="philosophy-text">
            The right treatment for the patient in front of you is the <strong>right treatment</strong>, regardless of whether the framework is classical or modern.
          </p>
          <div className="philosophy-attr">
            Dr. Vipin Tongale
            <span>Co-founder · MS Ayurveda Shalya Tantra · PhD</span>
          </div>
        </div>
      </section>

      {/* 7. THE PRACTICE TODAY */}
      <section className="practice-today">
        <div className="section-header">
          <div className="section-tag">The Practice Today</div>
          <h2 className="section-title">
            Fifteen years in, the numbers <em>tell one story.</em>
          </h2>
        </div>

        <div className="practice-today-grid">
          <div className="practice-today-content">
            <h3>A specialist hospital, not a general one.</h3>
            <p>
              We deliberately kept the practice narrow. Proctology, general surgery, Ayurveda, Panchakarma, spine care, and female specialty care. Not everything for everyone. Just what we are qualified to do well, done consistently for fifteen years.
            </p>
            <p>
              This narrowness is why the numbers on the right add up the way they do. It is also why our patients travel from across Vidarbha, and why doctors from other hospitals refer to us for cases that fall within our scope.
            </p>
            <Link href="/services/" className="btn btn-primary">
              Explore our services
            </Link>
          </div>

          <div className="practice-stats">
            <div className="stat">
              <div className="stat-num">2011</div>
              <div className="stat-label">Established</div>
            </div>
            <div className="stat">
              <div className="stat-num">16,000<small>+</small></div>
              <div className="stat-label">Procedures</div>
            </div>
            <div className="stat">
              <div className="stat-num">2</div>
              <div className="stat-label">MS Specialists</div>
            </div>
            <div className="stat">
              <div className="stat-num">24<small>h</small></div>
              <div className="stat-label">Emergency Care</div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FACILITY */}
      <section className="facility">
        <div className="facility-inner">
          <div className="section-header">
            <div className="section-tag">Our Facility</div>
            <h2 className="section-title">
              A hospital built for <em>proctology and integrated care.</em>
            </h2>
            <p className="section-lede">
              Every room, every piece of equipment, every workflow was chosen for the kind of medicine we practise. Not a general hospital retrofitted for specialty use.
            </p>
          </div>

          <div className="facility-grid">
            <div className="facility-card">
              <div className="facility-icon">श</div>
              <h3 className="facility-title">Dedicated proctology suite</h3>
              <p className="facility-desc">
                Purpose-built consulting chamber, examination room with privacy for anorectal examinations, and a procedure room equipped for Ksharsutra applications, laser proctology, and OPD interventions like rubber band ligation and sclerotherapy.
              </p>
            </div>
            <div className="facility-card">
              <div className="facility-icon">आ</div>
              <h3 className="facility-title">Full Panchakarma unit</h3>
              <p className="facility-desc">
                Six-therapy Panchakarma bay for Basti, Virechana, Vamana, Nasya, Raktamokshana, Swedan. Separate Uttarbasti procedure room. Trained Panchakarma therapists. Classical formulations from trusted manufacturers.
              </p>
            </div>
            <div className="facility-card">
              <div className="facility-icon">ऋ</div>
              <h3 className="facility-title">Female Care Unit</h3>
              <p className="facility-desc">
                Dedicated consultation and examination room for female patients preferring a female specialist. Private access, women-only waiting area, Dr. Swati as primary consulting specialist. Companions welcome throughout.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. DOCTORS OVERVIEW */}
      <section className="doctors">
        <div className="section-header">
          <div className="section-tag">Meet Your Doctors</div>
          <h2 className="section-title">
            Two specialists, <em>one clinical philosophy.</em>
          </h2>
          <p className="section-lede">
            A husband-and-wife surgical partnership. Distinct clinical roles, shared standards, honest counselling.
          </p>
        </div>

        <div className="doctors-grid">
          <div className="doctor-card">
            <div className="doctor-portrait">
              <div className="doctor-portrait-inner"></div>
            </div>
            <div className="doctor-info">
              <h3 className="doctor-name">Dr. Vipin Tongale</h3>
              <div className="doctor-role">General Surgeon &amp; Proctologist</div>
              <div className="doctor-creds">MS Ayurveda Shalya Tantra · PhD</div>
              <p className="doctor-bio">
                Fifteen years of dedicated proctology and integrated surgical practice. Trained at Government Ayurved College Nanded. PhD in Apamarga Kshara for internal piles. 12 years of AYUSH service at District Hospital Amravati.
              </p>
              <Link href="/dr-vipin/" className="doctor-link">
                View Dr. Vipin&apos;s full profile
              </Link>
            </div>
          </div>

          <div className="doctor-card doctor-card-swati">
            <div className="doctor-portrait">
              <div className="doctor-portrait-inner"></div>
            </div>
            <div className="doctor-info">
              <h3 className="doctor-name">Dr. Swati Tongale</h3>
              <div className="doctor-role">Female Care Unit Lead</div>
              <div className="doctor-creds">MS Ayurveda Shalya Tantra</div>
              <p className="doctor-bio">
                Specialist in female proctology, Uttarbasti-based fertility care, and Masanumasik Garbhsanskara. Practice built to ensure women across Vidarbha receive specialized surgical care with complete dignity.
              </p>
              <Link href="/dr-swati/" className="doctor-link">
                View Dr. Swati&apos;s full profile
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 10. CTA */}
      <section className="cta-section">
        <div className="cta-inner">
          <div className="cta-devanagari">आइए, मिलते हैं</div>
          <h2 className="cta-headline">
            Ready to come and <em>see us?</em>
          </h2>
          <p className="cta-lede">
            Book a consultation, or just call and ask a question. We are open six days a week, and our emergency line is monitored around the clock.
          </p>
          <div className="cta-buttons">
            <Link href="/contact/#book" className="btn btn-primary">
              Book a consultation
            </Link>
            <Link href="/contact/" className="btn btn-ghost">
              Find our location
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

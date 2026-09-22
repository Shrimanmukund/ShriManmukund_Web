import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Dr. Swati Tongale (Wankhade) | Female Care Unit Lead & Proctologist | Amravati',
  description:
    'Dr. Swati Tongale (Wankhade), MS (Ayurveda Shalya Tantra). Lead of Female Care Unit at Shri Manmukund Hospital, Amravati. Female proctology, Uttarbasti fertility care, Garbhsanskara.',
};

export default function DrSwatiPage() {
  return (
    <div className="doctor-page-swati">
      <main>
        {/* 1. DOCTOR HERO */}
        <section className="doctor-hero">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep">·</span>
            <Link href="/about/">Our Doctors</Link>
            <span className="breadcrumb-sep">·</span>
            <span>Dr. Swati Tongale</span>
          </div>

          <div className="doctor-hero-inner">
            <div className="doctor-hero-content">
              <div className="doctor-hero-eyebrow">Co-founder &amp; Female Care Unit Lead</div>
              <h1 className="doctor-hero-name">Dr. Swati Tongale</h1>
              <div className="doctor-hero-role">Ayurvedic Surgeon &amp; Infertility Specialist</div>

              <div className="doctor-hero-creds">
                <span className="cred-pill cred-pill--accent">MS Ayurveda Shalya Tantra</span>
                <span className="cred-pill">Uttarbasti Specialist</span>
                <span className="cred-pill">Streeroga &amp; Prasuti Care</span>
              </div>

              <p className="doctor-hero-intro">
                Dedicated surgical and clinical care for women across Vidarbha. Specialising in female proctology (piles, fissure, fistula), Uttarbasti-based fertility treatment, and Masanumasik Garbhsanskara. Practice designed around dignity, privacy, and compassionate unhurried consultations.
              </p>

              <div className="doctor-hero-actions">
                <Link href="#consultation" className="btn btn-primary">
                  Book with Dr. Swati
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
                <div className="doctor-hero-portrait-inner"></div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. QUICK FACTS */}
        <div className="quick-facts">
          <div className="quick-fact">
            <div className="quick-fact-icon">15</div>
            <div className="quick-fact-num">15+ Years</div>
            <div className="quick-fact-label">Clinical Experience</div>
          </div>
          <div className="quick-fact">
            <div className="quick-fact-icon">ऋ</div>
            <div className="quick-fact-num">5,000+</div>
            <div className="quick-fact-label">Female Patients</div>
          </div>
          <div className="quick-fact">
            <div className="quick-fact-icon">उ</div>
            <div className="quick-fact-num">Uttarbasti</div>
            <div className="quick-fact-label">Fertility Protocol</div>
          </div>
          <div className="quick-fact">
            <div className="quick-fact-icon">मा</div>
            <div className="quick-fact-num">9 Months</div>
            <div className="quick-fact-label">Garbhsanskara</div>
          </div>
        </div>

        {/* 3. ABOUT DOCTOR */}
        <section className="about-doctor">
          <div className="about-doctor-grid">
            <div>
              <div className="about-doctor-devanagari">स्त्रीरोग व शल्य</div>
              <h2 className="about-doctor-heading">
                Specialised care designed for <em>women&apos;s dignity.</em>
              </h2>
            </div>
            <div className="about-doctor-body">
              <p>
                Dr. Swati Tongale completed her postgraduate surgical degree, <strong>MS in Ayurveda Shalya Tantra</strong>, from Vidarbha Ayurved Mahavidyalaya, Amravati. She co-founded Shri Manmukund Hospital in 2011 with the goal of creating a dedicated, private space where women can seek proctological and gynaecological care without hesitation or embarrassment.
              </p>

              <p>
                Many women suffering from anorectal problems like piles, fissures after childbirth, or fistulas delay seeking treatment for years due to social stigma or lack of female surgeons. Dr. Swati has treated thousands of female patients from Amravati, Akola, Yavatmal, Wardha, and Nagpur, providing complete privacy with female clinical staff.
              </p>

              <p>
                Her clinical practice also integrates classical <strong>Uttarbasti therapy</strong> for tubal blockages, thin endometrium, PCOD, and secondary infertility, alongside structured <strong>Masanumasik Garbhsanskara</strong> antenatal care protocols.
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
                Six practices where Dr. Swati is <em>directly involved.</em>
              </h2>
              <p className="section-lede">
                Tailored therapies for anorectal, reproductive, and general women&apos;s health.
              </p>
            </div>

            <div className="focus-grid">
              <div className="focus-card">
                <div className="focus-card-icon">ऋ</div>
                <h3 className="focus-card-title">Female Proctology</h3>
                <p className="focus-card-desc">
                  Gentle, private examination and treatment of piles, postpartum fissure, and fistula exclusively by a female specialist.
                </p>
                <Link href="/services/female-care/female-proctology/" className="focus-card-link">
                  Explore female proctology
                </Link>
              </div>

              <div className="focus-card">
                <div className="focus-card-icon">उ</div>
                <h3 className="focus-card-title">Uttarbasti Therapy</h3>
                <p className="focus-card-desc">
                  Intrauterine medicated oil/ghee instillation for tubal blockage recanalization, thin endometrium, and unexplained infertility.
                </p>
                <Link href="/services/female-care/uttarbasti-therapy/" className="focus-card-link">
                  Explore Uttarbasti
                </Link>
              </div>

              <div className="focus-card">
                <div className="focus-card-icon">ग</div>
                <h3 className="focus-card-title">Garbhsanskara</h3>
                <p className="focus-card-desc">
                  Month-by-month Ayurvedic antenatal regimen (Masanumasik Ahara-Vihara), fetal music, and natural labor preparation.
                </p>
                <Link href="/services/female-care/garbhasanskar-antenatal-care/" className="focus-card-link">
                  Explore Garbhsanskara
                </Link>
              </div>

              <div className="focus-card">
                <div className="focus-card-icon">पी</div>
                <h3 className="focus-card-title">PCOD &amp; Infertility</h3>
                <p className="focus-card-desc">
                  Root-cause Ayurvedic metabolic correction, ovarian stimulation with herbal formulations, and cycle regulation.
                </p>
                <Link href="/services/female-care/infertility-and-pcod/" className="focus-card-link">
                  Explore PCOD care
                </Link>
              </div>

              <div className="focus-card">
                <div className="focus-card-icon">सू</div>
                <h3 className="focus-card-title">Postnatal Recovery</h3>
                <p className="focus-card-desc">
                  Sutika Paricharya traditional postnatal recovery, Abhyanga, pelvic toning, and lactation optimization protocols.
                </p>
                <Link href="/services/female-care/sutika-paricharya-postnatal-care/" className="focus-card-link">
                  Explore postnatal care
                </Link>
              </div>

              <div className="focus-card">
                <div className="focus-card-icon">ज</div>
                <h3 className="focus-card-title">Leech Therapy (Jalauka)</h3>
                <p className="focus-card-desc">
                  Ayurvedic parasurgical bloodletting for chronic skin conditions, varicose eczema, non-healing wounds, and local stasis.
                </p>
                <Link href="/services/ayurveda-panchakarma/leech-therapy-jalaukavacharana/" className="focus-card-link">
                  Explore Leech therapy
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
              A dedicated path in <em>women&apos;s clinical care.</em>
            </h2>
          </div>

          <div className="journey-timeline">
            <div className="journey-item">
              <div className="journey-period">
                <div className="journey-year">2008–2011</div>
                <div className="journey-year-label">Postgraduate</div>
              </div>
              <div className="journey-content">
                <span className="journey-badge">Postgraduate</span>
                <h3 className="journey-title">MS in Ayurveda Shalya Tantra</h3>
                <div className="journey-institution">Vidarbha Ayurved Mahavidyalaya, Amravati</div>
                <p className="journey-desc">
                  Specialized training in Ayurvedic surgical procedures, gynecological parasurgical applications, and classical operative techniques.
                </p>
              </div>
            </div>

            <div className="journey-item">
              <div className="journey-period">
                <div className="journey-year">2011</div>
                <div className="journey-year-label">Founding</div>
              </div>
              <div className="journey-content">
                <span className="journey-badge">Clinical Practice</span>
                <h3 className="journey-title">Shri Manmukund Hospital Co-founded</h3>
                <div className="journey-institution">Amravati</div>
                <p className="journey-desc">
                  Co-established the hospital and established the dedicated Female Care Unit for confidential women&apos;s healthcare.
                </p>
              </div>
            </div>

            <div className="journey-item">
              <div className="journey-period">
                <div className="journey-year">2024</div>
                <div className="journey-year-label">New Facility</div>
              </div>
              <div className="journey-content">
                <span className="journey-badge">Modern Infrastructure</span>
                <h3 className="journey-title">Dedicated Women&apos;s Suite at Bapatwadi</h3>
                <div className="journey-institution">Plot 7, Bapatwadi, Amravati</div>
                <p className="journey-desc">
                  Designed an exclusive private consulting room, Uttarbasti procedure chamber, and Panchakarma recovery suite for women.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. PHILOSOPHY */}
        <section className="philosophy">
          <div className="philosophy-inner">
            <div className="philosophy-eyebrow">In Dr. Swati&apos;s own words</div>
            <div className="philosophy-devanagari">स्त्रीणां स्वास्थ्यं, कुलस्य स्वास्थ्यम्</div>
            <p className="philosophy-text">
              When a woman receives timely, dignified healthcare without fear or hesitation, the entire family prospers.
            </p>
            <div className="philosophy-attr">
              Dr. Swati Tongale
              <span>Co-founder · MS Ayurveda Shalya Tantra · Lead, Female Care Unit</span>
            </div>
          </div>
        </section>

        {/* 7. CONSULTATION */}
        <section className="consultation" id="consultation">
          <div className="section-header">
            <div className="section-tag">Consultation &amp; Visit</div>
            <h2 className="section-title">
              Consult with <em>Dr. Swati Tongale.</em>
            </h2>
            <p className="section-lede">
              Private, confidential consultations for women at Shri Manmukund Hospital, Bapatwadi, Amravati.
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
                <li><strong>All previous prescriptions</strong> and medical records related to your concern</li>
                <li><strong>USG / Sonography reports</strong> if consulting for infertility, PCOD, or pelvic conditions</li>
                <li><strong>Hormonal or blood test reports</strong> (AMH, Thyroid, CBC, etc.)</li>
                <li><strong>List of current medications</strong> including fertility drugs or supplements</li>
                <li><strong>Aadhaar or valid ID</strong> for hospital registration</li>
                <li><strong>A family member or companion</strong> if travelling from outside Amravati</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 8. CTA */}
        <section className="cta-section">
          <div className="cta-inner">
            <div className="cta-devanagari">महिला आरोग्य सेवा</div>
            <h2 className="cta-headline">
              Ready to book with <em>Dr. Swati?</em>
            </h2>
            <p className="cta-lede">
              Schedule a confidential consultation in our dedicated Female Care Unit. Call or fill out the appointment form above.
            </p>
            <div className="cta-buttons">
              <Link href="#consultation" className="btn btn-primary">
                Book with Dr. Swati
              </Link>
              <a href="tel:+918208927917" className="btn btn-ghost">
                Call · 8208927917
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { DOCTORS } from '@/lib/data/content-store';
import { generateDoctorSchema } from '@/lib/seo/schemas';

export const metadata = {
  title: 'Dr. Swati Tongale | Female Care Lead & Proctologist',
  description:
    'Dr. Swati Tongale (Wankhade), MS (Ayurveda Shalya Tantra). Lead of Female Care Unit at Shri Manmukund Hospital, Amravati. Female proctology, Uttarbasti fertility care, Garbhsanskara.',
  authors: [{ name: 'Shri Manmukund Hospital' }],
  alternates: {
    canonical: '/dr-swati/',
  },
  openGraph: {
    title: 'Dr. Swati Tongale | Female Care Lead & Proctologist | Shri Manmukund Hospital',
    description:
      'Dr. Swati Tongale (Wankhade), MS (Ayurveda Shalya Tantra). Lead of Female Care Unit at Shri Manmukund Hospital, Amravati. Female proctology, Uttarbasti fertility care, Garbhsanskara.',
    url: 'https://shrimanmukundhospital.com/dr-swati/',
    siteName: 'Shri Manmukund Hospital',
    locale: 'en_IN',
    type: 'profile',
    images: [
      {
        url: '/images/doctors/dr-swati-tongale.jpg',
        width: 800,
        height: 800,
        alt: 'Dr. Swati Tongale, MS (Ayu)',
      },
    ],
  },
};

export default function DrSwatiPage() {
  const doctor = DOCTORS['dr-swati'];
  const doctorSchema = generateDoctorSchema(doctor);

  return (
    <div className="doctor-page-swati">
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(doctorSchema) }}
        />

        {/* 1. DOCTOR HERO */}
        <section className="doctor-hero">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep">·</span>
            <Link href="/doctors/">Our Doctors</Link>
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
                <div className="doctor-hero-portrait-inner">
                  <Image
                    src="/images/doctors/dr-swati-tongale.jpg"
                    alt="Dr. Swati Tongale - Female Care Unit Lead"
                    fill
                    sizes="(max-width: 768px) 320px, 460px"
                    className="object-cover object-center"
                    priority
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
                <div className="journey-year">2011</div>
                <div className="journey-year-label">Founding</div>
              </div>
              <div className="journey-content">
                <span className="journey-badge">Clinical Practice</span>
                <h3 className="journey-title">Outpatient Practice Begins</h3>
                <div className="journey-institution">Amravati</div>
                <p className="journey-desc">
                  Dr. Vipin and Dr. Swati Tongale begin outpatient practice in Amravati, blending the advances of modern surgery with the depth of Ayurveda.
                </p>
              </div>
            </div>

            <div className="journey-item">
              <div className="journey-period">
                <div className="journey-year">2016</div>
                <div className="journey-year-label">Inpatient Care</div>
              </div>
              <div className="journey-content">
                <span className="journey-badge">Hospital Operations</span>
                <h3 className="journey-title">Inpatient Care &amp; OT Facility</h3>
                <div className="journey-institution">Amravati</div>
                <p className="journey-desc">
                  The hospital opens inpatient care with its own operation theatre.
                </p>
              </div>
            </div>

            <div className="journey-item">
              <div className="journey-period">
                <div className="journey-year">2017</div>
                <div className="journey-year-label">Postgraduate</div>
              </div>
              <div className="journey-content">
                <span className="journey-badge">Postgraduate</span>
                <h3 className="journey-title">MS in Ayurveda (Shalya Tantra)</h3>
                <div className="journey-institution">Vidarbha Ayurved Mahavidyalaya, Amravati</div>
                <p className="journey-desc">
                  In July 2017 Dr. Swati Tongale completes her MS in Ayurveda (Shalya Tantra).
                </p>
              </div>
            </div>

            <div className="journey-item">
              <div className="journey-period">
                <div className="journey-year">2024</div>
                <div className="journey-year-label">Permanent Home</div>
              </div>
              <div className="journey-content">
                <span className="journey-badge">Modern Facility</span>
                <h3 className="journey-title">Permanent Hospital Facility at Bapatwadi</h3>
                <div className="journey-institution">Plot No. 7, Bapatwadi, Amravati</div>
                <p className="journey-desc">
                  In June, the hospital moves to its permanent premises in Bapatwadi.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5B. APPROVED HONOURS */}
        <section className="honours-section py-12 border-t border-[#6B7F5F]/15">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="section-header mb-8">
              <div className="section-tag">Recognition &amp; Credentials</div>
              <h2 className="section-title">
                Honours &amp; <em>Academic Work.</em>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-lg border border-[#6B7F5F]/20 shadow-sm">
                <div className="text-xs font-bold text-[#C08477] uppercase tracking-wider mb-1">2025 · State Honour</div>
                <h3 className="font-serif text-lg font-bold text-[#1B3A5B]">Prabhavshali Ayurvedacharya of Vidarbha</h3>
                <p className="text-xs text-[#5C4F3A] mt-1">Sakal Gauravagatha 2025, Nagpur</p>
              </div>
              <div className="bg-white p-5 rounded-lg border border-[#6B7F5F]/20 shadow-sm">
                <div className="text-xs font-bold text-[#C08477] uppercase tracking-wider mb-1">July 2017 · Postgraduate Degree</div>
                <h3 className="font-serif text-lg font-bold text-[#1B3A5B]">MS Ayurveda, Shalya Tantra</h3>
                <p className="text-xs text-[#5C4F3A] mt-1">Postgraduate degree in surgery, Vidarbha Ayurved Mahavidyalaya</p>
              </div>
              <div className="bg-white p-5 rounded-lg border border-[#6B7F5F]/20 shadow-sm">
                <div className="text-xs font-bold text-[#C08477] uppercase tracking-wider mb-1">2016 · Conference Paper</div>
                <h3 className="font-serif text-lg font-bold text-[#1B3A5B]">Research Paper Presentation</h3>
                <p className="text-xs text-[#5C4F3A] mt-1">8th World Ayurveda Congress, Ahmedabad</p>
              </div>
              <div className="bg-white p-5 rounded-lg border border-[#6B7F5F]/20 shadow-sm">
                <div className="text-xs font-bold text-[#C08477] uppercase tracking-wider mb-1">Recognition</div>
                <h3 className="font-serif text-lg font-bold text-[#1B3A5B]">Felicitated for Women’s Healthcare</h3>
                <p className="text-xs text-[#5C4F3A] mt-1">JCI Amravati Golden</p>
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
                  2:30 PM – 4:30 PM
                  <small>Afternoon consultation</small>
                </div>
              </div>
              <div className="schedule-row">
                <div className="schedule-day">Mon–Sat</div>
                <div className="schedule-time">
                  6:00 PM – 8:00 PM
                  <small>Evening consultation</small>
                </div>
              </div>
              <div className="schedule-row">
                <div className="schedule-day">Sunday</div>
                <div className="schedule-time">
                  Closed
                  <small>Prior appointment for emergencies only</small>
                </div>
              </div>
              <div className="schedule-row">
                <div className="schedule-day">Booking</div>
                <div className="schedule-time">
                  <a href="tel:+918208927917" className="hover:underline">
                    Call 8208927917
                  </a>
                  <small>To book with Dr. Swati specifically</small>
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

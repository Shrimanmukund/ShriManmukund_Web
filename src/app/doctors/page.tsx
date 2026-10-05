import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Doctors & Surgeons | Shri Manmukund Hospital, Amravati',
  description:
    'Meet Dr. Vipin Tongale and Dr. Swati Tongale, MS Ayurveda (Shalya Tantra) surgeons and proctologists at Shri Manmukund Hospital in Amravati. Over 15 years of dedicated surgical care.',
  alternates: {
    canonical: '/doctors/',
  },
  openGraph: {
    title: 'Our Doctors & Surgeons | Shri Manmukund Hospital, Amravati',
    description:
      'Meet Dr. Vipin Tongale and Dr. Swati Tongale, MS Ayurveda (Shalya Tantra) surgeons and proctologists at Shri Manmukund Hospital in Amravati.',
    url: 'https://shrimanmukundhospital.com/doctors/',
    siteName: 'Shri Manmukund Hospital',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/doctors/doctors-reception.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Vipin Tongale and Dr. Swati Tongale at Shri Manmukund Hospital',
      },
    ],
  },
};

export default function DoctorsPage() {
  return (
    <main style={{ paddingTop: '1rem' }}>
      {/* 1. DOCTORS CARDS SECTION */}
      <section className="specialists" id="specialists-grid" style={{ paddingTop: '1rem' }}>
        <div className="breadcrumb" style={{ justifyContent: 'center', marginBottom: '1.5rem' }}>
          <Link href="/">Home</Link>
          <span className="breadcrumb-sep">·</span>
          <span>Our Doctors</span>
        </div>

        <div className="specialists-header text-center">
          <div className="section-tag" style={{ justifyContent: 'center' }}>Meet Your Doctors</div>
          <h1 className="section-title text-center">
            Two specialists, <em>one clinical philosophy.</em>
          </h1>
          <p className="specialists-lede text-center mx-auto" style={{ maxWidth: '680px' }}>
            A husband-and-wife surgical partnership. Distinct clinical roles, shared standards, honest counselling.
          </p>
        </div>

        <div className="specialists-grid">
          {/* DR. VIPIN TONGALE CARD */}
          <article className="specialist">
            <div className="specialist-portrait">
              <div className="specialist-portrait-inner">
                <Image
                  src="/images/doctors/dr-vipin-tongale.jpg"
                  alt="Dr. Vipin Tongale - General Surgeon & Proctologist"
                  width={220}
                  height={220}
                  sizes="220px"
                  className="w-full h-full object-cover object-center"
                  priority
                />
              </div>
            </div>
            <h3 className="specialist-name">Dr. Vipin Tongale</h3>
            <p className="specialist-role">General Surgeon &amp; Proctologist · Co-Founder</p>
            <div className="specialist-creds">MS Ayurveda (Shalya Tantra) · PhD</div>
            <p className="specialist-bio">
              Senior Ayurvedic Surgeon, General Surgeon, and Proctologist with 15+ years of continuous practice, 12 years of AYUSH government surgical service at District Hospital Amravati, and over 16,000 procedures performed. Widely recognized for successfully treating complex and recurrent fistulas with Ksharsutra and laser proctology.
            </p>
            <div className="specialist-tags">
              <span className="specialist-tag">Ksharsutra Parasurgery</span>
              <span className="specialist-tag">Laser Proctology</span>
              <span className="specialist-tag">Complex Fistula</span>
              <span className="specialist-tag">General Surgery</span>
            </div>
            <Link href="/dr-vipin/" className="specialist-link">
              View Dr. Vipin&apos;s full profile &rarr;
            </Link>
          </article>

          {/* DR. SWATI TONGALE CARD */}
          <article className="specialist specialist-swati">
            <div className="specialist-portrait">
              <div className="specialist-portrait-inner">
                <Image
                  src="/images/doctors/dr-swati-tongale.jpg"
                  alt="Dr. Swati Tongale - Female Care Unit Lead"
                  width={220}
                  height={220}
                  sizes="220px"
                  className="w-full h-full object-cover object-center"
                  priority
                />
              </div>
            </div>
            <h3 className="specialist-name">Dr. Swati Tongale</h3>
            <p className="specialist-role">Female Care Unit Lead · Co-Founder</p>
            <div className="specialist-creds">MS Ayurveda (Shalya Tantra)</div>
            <p className="specialist-bio">
              Specialist Female Ayurvedic Surgeon and Proctologist with 14+ years of surgical practice and over 8,000 procedures. Leads the dedicated Women&apos;s Health and Infertility wing, delivering classical Uttarbasti therapies for tubal blocks, PCOD, and female anorectal conditions with complete comfort and dignity.
            </p>
            <div className="specialist-tags">
              <span className="specialist-tag">Female Proctology</span>
              <span className="specialist-tag">Uttarbasti (Infertility)</span>
              <span className="specialist-tag">Women&apos;s Wellness</span>
              <span className="specialist-tag">Garbhsanskara</span>
            </div>
            <Link href="/dr-swati/" className="specialist-link">
              View Dr. Swati&apos;s full profile &rarr;
            </Link>
          </article>
        </div>
      </section>

      {/* 3. PHILOSOPHY & CLINICAL APPROACH */}
      <section className="tiers" style={{ background: 'var(--cream-warm, #F7F3E8)' }}>
        <div className="tiers-inner">
          <div className="section-header text-center">
            <div className="section-tag" style={{ justifyContent: 'center' }}>Our Shared Standards</div>
            <h2 className="section-title text-center">
              How our doctors <em>practise care.</em>
            </h2>
            <p className="section-lede text-center mx-auto" style={{ maxWidth: '640px' }}>
              Four principles guide every consultation, examination, and surgical recommendation at Shri Manmukund Hospital.
            </p>
          </div>

          <div className="tier-ladder">
            <div className="tier-card">
              <div className="tier-num">01</div>
              <div className="tier-label">Diagnostic Depth</div>
              <h3 className="tier-title">Two Systems, One Plan</h3>
              <p className="tier-desc">
                We combine modern diagnostics (high-resolution imaging, proctoscopy, laboratory work) with classical Ayurvedic examination (Prakriti, Nadi, Dosha assessment).
              </p>
            </div>

            <div className="tier-card">
              <div className="tier-num">02</div>
              <div className="tier-label">Honest Choice</div>
              <h3 className="tier-title">Conservative First</h3>
              <p className="tier-desc">
                We only recommend surgical or parasurgical procedures when conservative lifestyle and medical management are insufficient for the clinical grade.
              </p>
            </div>

            <div className="tier-card">
              <div className="tier-num">03</div>
              <div className="tier-label">Safety Priority</div>
              <h3 className="tier-title">Sphincter Preservation</h3>
              <p className="tier-desc">
                In every anorectal procedure—from Ksharsutra to diode laser—our priority is protecting anal continence and avoiding unnecessary muscle cutting.
              </p>
            </div>

            <div className="tier-card">
              <div className="tier-num">04</div>
              <div className="tier-label">Patient Comfort</div>
              <h3 className="tier-title">Privacy &amp; Dignity</h3>
              <p className="tier-desc">
                Dedicated consultation suites and private recovery areas. Female patients have direct access to Dr. Swati Tongale for complete peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OPD & CONSULTATION HOURS */}
      <section className="consultation" id="timings">
        <div className="section-header">
          <div className="section-tag">OPD Hours</div>
          <h2 className="section-title">
            Consultation schedule in <em>Amravati.</em>
          </h2>
          <p className="section-lede">
            Both doctors consult Monday through Saturday at Shri Manmukund Hospital, Bapatwadi.
          </p>
        </div>

        <div className="consultation-grid">
          <div className="consultation-block">
            <h3>
              <span className="consultation-icon">👨‍⚕️</span>
              Dr. Vipin Tongale
            </h3>
            <ul className="consultation-hours">
              <li>
                <span>Monday – Saturday (Afternoon)</span>
                <strong>1:00 PM – 4:30 PM</strong>
              </li>
              <li>
                <span>Monday – Saturday (Evening)</span>
                <strong>6:00 PM – 8:30 PM</strong>
              </li>
              <li>
                <span>Sunday</span>
                <strong>Prior Appointment Only</strong>
              </li>
              <li>
                <span>Morning Hours</span>
                <strong>Dedicated OT &amp; Planned Surgery</strong>
              </li>
            </ul>
          </div>

          <div className="consultation-block">
            <h3>
              <span className="consultation-icon">👩‍⚕️</span>
              Dr. Swati Tongale
            </h3>
            <ul className="consultation-hours">
              <li>
                <span>Monday – Saturday (Afternoon)</span>
                <strong>2:30 PM – 4:30 PM</strong>
              </li>
              <li>
                <span>Monday – Saturday (Evening)</span>
                <strong>6:00 PM – 8:00 PM</strong>
              </li>
              <li>
                <span>Sunday</span>
                <strong>Prior Appointment Only</strong>
              </li>
              <li>
                <span>Morning Hours</span>
                <strong>Uttarbasti &amp; Panchakarma Procedures</strong>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="cta-section">
        <div className="cta-inner">
          <div className="cta-devanagari">आइए, मिलते हैं</div>
          <h2 className="cta-headline">
            Ready to consult with our <em>surgeons?</em>
          </h2>
          <p className="cta-lede">
            Book an appointment directly with Dr. Vipin Tongale or Dr. Swati Tongale at Shri Manmukund Hospital, Bapatwadi, Amravati.
          </p>
          <div className="cta-buttons">
            <Link href="/contact/#book" className="btn btn-primary">
              Book an appointment
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

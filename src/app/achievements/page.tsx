import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Hospital Milestones & Achievements',
  description:
    'Key surgical milestones, academic recognitions, and community health contributions of Shri Manmukund Hospital and its surgical team since 2011.',
  alternates: {
    canonical: '/achievements/',
  },
};

export default function AchievementsPage() {
  const achievements = [
    {
      number: '16,000+',
      title: 'Surgical Procedures Completed',
      description:
        'Over 16,000 anorectal, general surgical, and parasurgical procedures performed across 15 years by Dr. Vipin Tongale and Dr. Swati Tongale.',
    },
    {
      number: '12 Years',
      title: 'Dedicated Public Health Service',
      description:
        '12 continuous years of government AYUSH surgical service at District Hospital Amravati, managing critical proctological and emergency surgical cases.',
    },
    {
      number: '< 3.0%',
      title: 'Fistula Recurrence Rate',
      description:
        'Consistently maintaining under 3% recurrence in complex and high anal fistulas using classical Sushruta Ksharsutra parasurgical therapy.',
    },
    {
      number: '100%',
      title: 'Female Proctology Dignity Standard',
      description:
        'Pioneering a dedicated female-led anorectal consultation and treatment unit under Dr. Swati Tongale to eliminate patient stigma and fear.',
    },
  ];

  return (
    <main>
      {/* 1. PAGE HERO */}
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep">·</span>
            <span>Achievements</span>
          </div>
          <div className="page-hero-devanagari">यशगाथा</div>
          <h1 className="page-hero-title">
            Hospital Milestones &amp; <em>Clinical Achievements.</em>
          </h1>
          <p className="page-hero-lede">
            Fifteen years of evidence-grounded surgical care, community health initiatives, and clinical leadership in Vidarbha.
          </p>
        </div>
      </section>

      {/* 2. ACHIEVEMENTS GRID */}
      <section className="py-16 bg-[#FBF7EC]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-warm-xl border border-[#6B7F5F]/20 shadow-warm-sm flex items-start gap-5"
              >
                <div className="p-4 rounded-warm bg-[#FBF7EC] border border-[#B8894A]/30 text-center flex-shrink-0 min-w-[120px]">
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-[#1B3A5B] block">
                    {item.number}
                  </span>
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#1B3A5B] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5C4F3A] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Academic & Community Section */}
          <div className="mt-16 bg-white p-8 sm:p-10 rounded-warm-xl border border-[#6B7F5F]/20 shadow-warm-md">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1B3A5B] mb-4">
              Academic Contributions &amp; Community Camps
            </h2>
            <div className="space-y-4 text-xs sm:text-sm text-[#2D2A20] leading-relaxed">
              <p>
                <strong>Academic Lectures:</strong> Dr. Vipin Tongale has delivered guest clinical lectures on Ksharsutra management of high complex fistulas and urethral stricture Uttarbasti at various state and national Ayurvedic surgical conferences.
              </p>
              <p>
                <strong>Free Diagnostic Camps:</strong> Shri Manmukund Hospital regularly conducts free piles and general surgical screening camps across rural and peri-urban Amravati to promote early diagnosis of anorectal disorders.
              </p>
              <p>
                <strong>Suvarna Prashan Initiatives:</strong> Monthly community administration of Suvarna Prashan drops for hundreds of children on Pushya Nakshatra days for pediatric immunity and cognitive wellness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CTA */}
      <section className="cta-section">
        <div className="cta-inner">
          <div className="cta-devanagari">आइए, मिलते हैं</div>
          <h2 className="cta-headline">
            Consult with our <em>specialists.</em>
          </h2>
          <p className="cta-lede">
            Book an appointment at Shri Manmukund Hospital, Bapatwadi, Amravati.
          </p>
          <div className="cta-buttons">
            <Link href="/contact/#book" className="btn btn-primary">
              Book a consultation
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

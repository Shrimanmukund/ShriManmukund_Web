import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Patient Resources & Guides | Shri Manmukund Hospital, Amravati',
  description:
    'Helpful guides for patients: what to expect on your first visit, pre-surgery preparation, post-surgery recovery, diet advice, and FAQs.',
};

export default function PatientResourcesHubPage() {
  const resources = [
    {
      slug: 'first-visit',
      title: 'First Visit Guide',
      icon: '🩺',
      summary:
        'What to expect at your first consultation: registration, examination privacy, what reports to bring, and doctor consultation steps.',
    },
    {
      slug: 'pre-surgery',
      title: 'Pre-Surgery Preparation',
      icon: '📋',
      summary:
        'Essential preparation steps before undergoing anorectal or general surgery, fasting guidelines, and medication instructions.',
    },
    {
      slug: 'post-surgery',
      title: 'Post-Surgery Recovery Guide',
      icon: '🌿',
      summary:
        'General day-by-day recovery principles, wound hygiene, sitz bath guidance, pain management, and activity restrictions.',
    },
    {
      slug: 'diet-and-lifestyle',
      title: 'Diet & Lifestyle Guidance',
      icon: '🥗',
      summary:
        'Evidence-based dietary advice for preventing constipation, promoting bowel smoothness, and supporting surgical healing.',
    },
    {
      slug: 'faq',
      title: 'Consolidated Hospital FAQs',
      icon: '❓',
      summary:
        'All frequently asked patient questions regarding timings, doctors, surgery, costs, and treatments in one place.',
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
            <span>Patient Resources</span>
          </div>
          <div className="page-hero-devanagari">रुग्ण मार्गदर्शिका</div>
          <h1 className="page-hero-title">
            Patient Resources &amp; <em>Clinical Guidance.</em>
          </h1>
          <p className="page-hero-lede">
            Everything you need to know before, during, and after your visit to Shri Manmukund Hospital, Amravati.
          </p>
        </div>
      </section>

      {/* 2. RESOURCES GRID */}
      <section className="py-16 bg-[#FBF7EC]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((res) => (
              <div
                key={res.slug}
                className="bg-white p-8 rounded-warm-xl border border-[#6B7F5F]/20 shadow-warm-sm hover:shadow-warm-md transition flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-full bg-[#E5EBDD] text-2xl flex items-center justify-center mb-4">
                    {res.icon}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#1B3A5B] mb-2">
                    <Link href={`/patients/${res.slug}/`} className="hover:underline">
                      {res.title}
                    </Link>
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5C4F3A] leading-relaxed mb-6">
                    {res.summary}
                  </p>
                </div>

                <Link
                  href={`/patients/${res.slug}/`}
                  className="btn btn-ghost btn-small text-center"
                >
                  Read guide &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CTA */}
      <section className="cta-section">
        <div className="cta-inner">
          <div className="cta-devanagari">आइए, मिलते हैं</div>
          <h2 className="cta-headline">
            Need help planning your <em>hospital visit?</em>
          </h2>
          <p className="cta-lede">
            Our hospital desk is happy to help with appointment booking, directions, and pre-consultation questions.
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

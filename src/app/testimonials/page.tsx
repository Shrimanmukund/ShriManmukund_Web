import React from 'react';
import Link from 'next/link';
import { TESTIMONIALS } from '@/lib/data/content-store';

export const metadata = {
  title: 'Patient Stories & Testimonials | Shri Manmukund Hospital, Amravati',
  description:
    'Verified patient reviews and experiences at Shri Manmukund Hospital, Amravati. Published with explicit consent under NMC and AYUSH guidelines.',
};

export default function TestimonialsPage() {
  const verifiedReviews = TESTIMONIALS.filter((t) => t.displayPermissionGranted && t.isApproved);

  return (
    <main>
      {/* 1. PAGE HERO */}
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep">·</span>
            <span>Testimonials</span>
          </div>
          <div className="page-hero-devanagari">रुग्ण अनुभव</div>
          <h1 className="page-hero-title">
            Patient Stories &amp; <em>Verified Experiences.</em>
          </h1>
          <p className="page-hero-lede">
            Real feedback from patients treated at Shri Manmukund Hospital. Published with verified consent in compliance with NMC regulations.
          </p>
        </div>
      </section>

      {/* 2. TESTIMONIALS GRID */}
      <section className="py-16 bg-[#FBF7EC]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {verifiedReviews.map((t, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-warm-xl border border-[#6B7F5F]/20 shadow-warm-sm flex flex-col justify-between"
              >
                <div>
                  <div className="text-sm text-[#B8894A] font-bold mb-3">
                    ★★★★★ <span className="text-xs text-[#8B7355]">({t.rating}/5)</span>
                  </div>
                  <p className="text-sm text-[#2D2A20] italic leading-relaxed mb-6">
                    &ldquo;{t.reviewText}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-[#6B7F5F]/15 flex items-center justify-between text-xs">
                  <div>
                    <h3 className="font-serif font-bold text-[#1B3A5B]">{t.patientName}</h3>
                    <span className="text-[11px] text-[#8B7355] block">
                      {t.city} · {t.serviceName}
                    </span>
                  </div>
                  <span className="text-[10px] text-[#6B7F5F] font-semibold uppercase bg-[#E5EBDD] px-2 py-0.5 rounded">
                    Verified
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Compliance Notice */}
          <div className="mt-12 p-6 bg-[#F5EDD5] rounded-warm border border-[#B8894A]/30 text-xs text-[#5C4F3A] leading-relaxed">
            <strong>Regulatory Compliance Notice:</strong> Clinical outcomes vary depending on individual anatomy, severity of illness, and recovery adherence. Testimonials reflect individual experiences and do not constitute a guarantee of outcome.
          </div>
        </div>
      </section>

      {/* 3. CTA */}
      <section className="cta-section">
        <div className="cta-inner">
          <div className="cta-devanagari">आइए, मिलते हैं</div>
          <h2 className="cta-headline">
            Ready to consult with our <em>specialists?</em>
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

import React from 'react';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { DOCTORS } from '@/lib/data/content-store';

export const metadata = {
  title: 'Professional Journey | Dr. Swati Tongale, MS',
  description: 'Learn about Dr. Swati Tongale’s professional background, education in Ayurvedic Shalya Tantra, and clinical focus on female proctology and fertility.',
  alternates: {
    canonical: '/dr-swati/journey/',
  },
};

export default function DrSwatiJourneyPage() {
  const doctor = DOCTORS['dr-swati'];

  return (
    <div className="py-8 bg-[#FBF7EC]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: 'Dr. Swati Tongale', url: '/dr-swati/' },
            { name: 'Professional Journey', url: '/dr-swati/journey/' },
          ]}
        />

        <section className="my-8">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#C08477]">Biography & Background</span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#1B3A5B] mt-1 mb-4">
            Professional Journey of Dr. Swati Tongale
          </h1>
          <p className="text-base text-[#5C4F3A] leading-relaxed mb-8">
            Dedicated to eliminating social stigma and fear surrounding anorectal examinations for women, while advancing classical Ayurvedic fertility therapies.
          </p>

          <div className="bg-white p-8 rounded-warm-xl border border-[#6B7F5F]/20 shadow-warm-md space-y-6">
            <h2 className="font-serif text-2xl font-bold text-[#1B3A5B] border-b border-[#6B7F5F]/15 pb-3">
              Clinical Background
            </h2>

            <div className="space-y-6">
              {doctor.journey.map((j, idx) => (
                <div key={idx} className="border-l-4 border-[#C08477] pl-4 py-1">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-bold text-[#C08477] bg-[#E8CFC8] px-2 py-0.5 rounded">{j.year}</span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#1B3A5B]">{j.title}</h3>
                  <p className="text-xs sm:text-sm text-[#5C4F3A] mt-1">{j.institution}</p>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-[#6B7F5F]/15 space-y-4 text-xs sm:text-sm text-[#2D2A20] leading-relaxed">
              <h3 className="font-serif text-xl font-bold text-[#1B3A5B]">Dignity in Women's Healthcare</h3>
              <p>
                Dr. Swati Tongale holds an MS in Ayurveda (Shalya Tantra - Surgery). Throughout her clinical practice across Vidarbha, Dr. Swati observed that thousands of female patients suffer in silence from bleeding piles, painful fissures, or fistulas for years due to embarrassment and hesitation in consulting male practitioners.
              </p>
              <p>
                At Shri Manmukund Hospital, Dr. Swati has pioneered a fully private clinical environment for women, accompanied by female nursing staff. In addition, she has developed an authoritative practice in Uttarbasti—a specialized Ayurvedic therapy for tubal blockage, thin endometrium, PCOD, and female infertility.
              </p>
            </div>
          </div>

          <div className="mt-8 flex justify-between">
            <Link href="/dr-swati/" className="text-xs font-semibold text-[#1B3A5B] hover:underline">
              &larr; Back to Dr. Swati Profile
            </Link>
            <Link href="/dr-swati/appointment/" className="text-xs font-semibold text-[#C08477] hover:underline">
              Book Consultation &rarr;
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

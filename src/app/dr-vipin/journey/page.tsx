import React from 'react';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { DOCTORS } from '@/lib/data/content-store';
import { Clock, Award, ShieldCheck, ChevronRight } from 'lucide-react';

export const metadata = {
  title: 'Professional Journey | Dr. Vipin Tongale, MS, PhD',
  description: 'Detailed professional biography and institutional history of Dr. Vipin Tongale across Gurudev Ayurved Mahavidyalaya, District Hospital Amravati, and Shri Manmukund Hospital.',
};

export default function DrVipinJourneyPage() {
  const doctor = DOCTORS['dr-vipin'];

  return (
    <div className="py-8 bg-[#FBF7EC]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: 'Dr. Vipin Tongale', url: '/dr-vipin/' },
            { name: 'Professional Journey', url: '/dr-vipin/journey/' },
          ]}
        />

        <section className="my-8">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#B8894A]">Biography & Heritage</span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#1B3A5B] mt-1 mb-4">
            Professional Journey of Dr. Vipin Tongale
          </h1>
          <p className="text-base text-[#5C4F3A] leading-relaxed mb-8">
            A 15-year career dedicated to mastering and evolving Ayurvedic Shalya Tantra, delivering complex anorectal surgeries, and serving the public health sector in Vidarbha.
          </p>

          <div className="bg-white p-8 rounded-warm-xl border border-[#6B7F5F]/20 shadow-warm-md space-y-6">
            <h2 className="font-serif text-2xl font-bold text-[#1B3A5B] border-b border-[#6B7F5F]/15 pb-3">
              Institutional History & Practice
            </h2>

            <div className="space-y-6">
              {doctor.journey.map((j, idx) => (
                <div key={idx} className="border-l-4 border-[#1B3A5B] pl-4 py-1">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-bold text-[#B8894A] bg-[#F5EDD5] px-2 py-0.5 rounded">{j.year}</span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#1B3A5B]">{j.title}</h3>
                  <p className="text-xs sm:text-sm text-[#5C4F3A] mt-1">{j.institution}</p>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-[#6B7F5F]/15 space-y-4 text-xs sm:text-sm text-[#2D2A20] leading-relaxed">
              <h3 className="font-serif text-xl font-bold text-[#1B3A5B]">Clinical Milestones</h3>
              <p>
                Dr. Vipin Tongale earned his Bachelor of Ayurvedic Medicine and Surgery (BAMS) and went on to complete his post-graduation (MS in Ayurveda - Shalya Tantra) specializing in surgical and parasurgical procedures. He subsequently completed his PhD in Shalya Tantra, contributing valuable clinical research on parasurgical Ksharsutra interventions for complex fistulas.
              </p>
              <p>
                For 12 years (2012 to 2024), Dr. Tongale served as AYUSH Medical Officer at District Hospital Amravati, managing thousands of general surgical cases, minor emergency trauma, and complex proctology referrals from across the Amravati district and broader Vidarbha region.
              </p>
            </div>
          </div>

          <div className="mt-8 flex justify-between">
            <Link href="/dr-vipin/" className="text-xs font-semibold text-[#1B3A5B] hover:underline">
              &larr; Back to Dr. Vipin Profile
            </Link>
            <Link href="/dr-vipin/appointment/" className="text-xs font-semibold text-[#B8894A] hover:underline">
              Book Consultation &rarr;
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

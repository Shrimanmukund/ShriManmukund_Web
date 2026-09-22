'use client';

import React, { useState } from 'react';
import { HubFaq } from '@/lib/data/service-hubs';

interface ServiceFaqSectionProps {
  heading: string;
  headingEm: string;
  lede?: string;
  faqs: HubFaq[];
  medicallyReviewedBy?: string;
}

export function ServiceFaqSection({
  heading,
  headingEm,
  lede,
  faqs,
  medicallyReviewedBy,
}: ServiceFaqSectionProps) {
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggleIndex = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="service-faq-section py-16 px-4 md:px-8 max-w-5xl mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      
      <div className="section-header text-center mb-12">
        <div className="section-tag inline-flex items-center justify-center gap-3 font-semibold uppercase tracking-widest text-xs text-[#6B7F5F] mb-4">
          Frequently Asked Questions
        </div>
        <h2 className="section-title text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-[#1B3A5B] leading-tight mb-4">
          {heading}
          <em className="italic font-normal text-[#6B7F5F]">{headingEm}</em>
        </h2>
        {lede && (
          <p className="section-lede font-serif italic text-lg text-[#5C4F3A] max-w-2xl mx-auto">
            {lede}
          </p>
        )}
      </div>

      <div className="faq-list space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIndices.includes(idx);
          return (
            <div
              key={idx}
              className="faq-item bg-white rounded-2xl border border-[rgba(107,127,95,0.18)] shadow-sm overflow-hidden transition-all duration-200"
            >
              <button
                type="button"
                onClick={() => toggleIndex(idx)}
                className="w-full py-5 px-6 text-left flex justify-between items-center gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6B7F5F]"
                aria-expanded={isOpen}
              >
                <span className="font-serif font-medium text-lg md:text-xl text-[#1B3A5B]">
                  {faq.question}
                </span>
                <span className="w-8 h-8 rounded-full bg-[#F7F3EB] text-[#6B7F5F] flex items-center justify-center font-bold text-xl flex-shrink-0 transition-transform duration-200">
                  {isOpen ? '−' : '+'}
                </span>
              </button>
              {isOpen && (
                <div className="faq-answer px-6 pb-6 pt-1 text-[#5C4F3A] text-base leading-relaxed border-t border-[rgba(107,127,95,0.08)]">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {medicallyReviewedBy && (
        <div className="faq-byline mt-8 pt-6 border-t border-[rgba(107,127,95,0.15)] flex flex-wrap items-center justify-between gap-4 text-xs font-sans text-[#7A8F70]">
          <span className="inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#6B7F5F]"></span>
            {medicallyReviewedBy}
          </span>
          <span className="text-[#A69880]">Last reviewed: September 2026</span>
        </div>
      )}
    </section>
  );
}

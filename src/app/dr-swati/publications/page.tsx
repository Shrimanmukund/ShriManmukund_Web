import React from 'react';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { getAllKnowledgePieces } from '@/lib/data/content-store';

export const metadata = {
  title: 'Articles & Guides | Dr. Swati Tongale, MS',
  description: 'Articles and clinical insights authored by Dr. Swati Tongale on female proctology, Uttarbasti for infertility, and women’s Ayurvedic healthcare.',
};

export default function DrSwatiPublicationsPage() {
  const pieces = getAllKnowledgePieces().filter((p) => p.authorSlug === 'dr-swati');

  return (
    <div className="py-8 bg-[#FBF7EC]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: 'Dr. Swati Tongale', url: '/dr-swati/' },
            { name: 'Articles & Guides', url: '/dr-swati/publications/' },
          ]}
        />

        <section className="my-8">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#C08477]">Women’s Clinical Health</span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#1B3A5B] mt-1 mb-4">
            Articles & Insights by Dr. Swati Tongale
          </h1>
          <p className="text-sm sm:text-base text-[#5C4F3A] leading-relaxed mb-8 max-w-3xl">
            Educational articles and clinical perspectives on addressing the healthcare access gap for female anorectal patients and Ayurvedic fertility protocols.
          </p>

          <div className="space-y-4">
            {pieces.map((p) => (
              <div
                key={p.slug}
                className="bg-white p-6 rounded-warm border border-[#6B7F5F]/20 shadow-warm-sm hover:shadow-warm-md transition flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div>
                  <div className="flex items-center gap-2 text-[11px] text-[#8B7355] mb-1">
                    <span className="uppercase font-bold tracking-wider">{p.cluster}</span>
                    <span>&bull;</span>
                    <span>{p.estimatedReadTimeMins} min read</span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#1B3A5B]">
                    <Link href={`/knowledge/${p.cluster}/${p.slug}/`} className="hover:text-[#B8894A]">
                      {p.title}
                    </Link>
                  </h3>
                  <p className="text-xs text-[#5C4F3A] mt-1 line-clamp-2 max-w-2xl">{p.excerpt}</p>
                </div>

                <Link
                  href={`/knowledge/${p.cluster}/${p.slug}/`}
                  className="px-4 py-2 bg-[#E8CFC8] text-[#1B3A5B] hover:bg-[#C08477] hover:text-white rounded-warm text-xs font-semibold transition flex-shrink-0 text-center"
                >
                  Read Article &rarr;
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

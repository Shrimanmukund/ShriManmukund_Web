import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { getKnowledgePiecesByCluster, getAllKnowledgePieces } from '@/lib/data/content-store';
import { ChevronRight, BookOpen } from 'lucide-react';

interface ClusterPageProps {
  params: {
    cluster: string;
  };
}

export function generateStaticParams() {
  const clusters = ['playbooks', 'articles', 'insights', 'whitepapers', 'research', 'blog'];
  return clusters.map((c) => ({ cluster: c }));
}

export function generateMetadata({ params }: ClusterPageProps) {
  const titles: Record<string, string> = {
    playbooks: 'Patient Recovery Playbooks | Shri Manmukund Hospital',
    articles: 'Clinical Articles & Guides | Shri Manmukund Hospital',
    insights: 'Doctor Insights & Perspectives | Shri Manmukund Hospital',
    whitepapers: 'Clinical Whitepapers | Shri Manmukund Hospital',
    research: 'Research & Publications | Shri Manmukund Hospital',
    blog: 'Hospital Blog & Updates | Shri Manmukund Hospital',
  };

  return {
    title: titles[params.cluster] || 'Knowledge Hub | Shri Manmukund Hospital',
    description: `Browse all ${params.cluster} authored by Dr. Vipin Tongale and Dr. Swati Tongale at Shri Manmukund Hospital, Amravati.`,
  };
}

export default function KnowledgeClusterPage({ params }: ClusterPageProps) {
  // Normalize singular/plural (e.g. playbook -> playbooks)
  const clusterKey = params.cluster.endsWith('s') ? params.cluster.slice(0, -1) : params.cluster;
  const pieces = getAllKnowledgePieces().filter(
    (p) => p.cluster === params.cluster || p.cluster === clusterKey
  );

  return (
    <div className="py-8 bg-[#FBF7EC]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: 'Knowledge Hub', url: '/knowledge/' },
            { name: params.cluster.charAt(0).toUpperCase() + params.cluster.slice(1), url: `/knowledge/${params.cluster}/` },
          ]}
        />

        <section className="my-8">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#B8894A]">Clinical Archive</span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#1B3A5B] mt-1 mb-4 capitalize">
            {params.cluster}
          </h1>
          <p className="text-sm sm:text-base text-[#5C4F3A] leading-relaxed mb-8">
            Medically reviewed guides and clinical pieces written to help patients make informed decisions.
          </p>

          <div className="space-y-4">
            {pieces.length === 0 ? (
              <div className="bg-white p-8 rounded-warm text-center text-[#5C4F3A] border border-[#6B7F5F]/15">
                <p>New {params.cluster} are currently being prepared and reviewed by Dr. Vipin and Dr. Swati Tongale.</p>
              </div>
            ) : (
              pieces.map((p) => (
                <div
                  key={p.slug}
                  className="bg-white p-6 rounded-warm border border-[#6B7F5F]/20 shadow-warm-sm hover:shadow-warm-md transition flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div>
                    <div className="flex items-center gap-2 text-[11px] text-[#8B7355] mb-1">
                      <span>By {p.authorSlug === 'dr-vipin' ? 'Dr. Vipin Tongale' : 'Dr. Swati Tongale'}</span>
                      <span>&bull;</span>
                      <span>{p.estimatedReadTimeMins} min read</span>
                    </div>
                    <h3 className="font-serif text-lg font-bold text-[#1B3A5B]">
                      <Link href={`/knowledge/${params.cluster}/${p.slug}/`} className="hover:text-[#B8894A]">
                        {p.title}
                      </Link>
                    </h3>
                    <p className="text-xs text-[#5C4F3A] mt-1 line-clamp-2 max-w-2xl">{p.excerpt}</p>
                  </div>

                  <Link
                    href={`/knowledge/${params.cluster}/${p.slug}/`}
                    className="px-4 py-2 bg-[#E5EBDD] text-[#1B3A5B] hover:bg-[#1B3A5B] hover:text-white rounded-warm text-xs font-semibold transition flex-shrink-0 text-center"
                  >
                    Read Guide &rarr;
                  </Link>
                </div>
              ))
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

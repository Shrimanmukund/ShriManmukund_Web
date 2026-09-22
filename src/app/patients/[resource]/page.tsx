import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MarkdownRenderer } from '@/components/content/MarkdownRenderer';
import { FAQAccordion } from '@/components/content/FAQAccordion';
import { getAllPages, getPatientResourceBySlug } from '@/lib/data/content-store';

interface PatientResourcePageProps {
  params: {
    resource: string;
  };
}

export function generateStaticParams() {
  const resources = ['first-visit', 'pre-surgery', 'post-surgery', 'diet-and-lifestyle', 'faq'];
  return resources.map((r) => ({ resource: r }));
}

export function generateMetadata({ params }: PatientResourcePageProps) {
  const rawPage = getAllPages().find((p) => p.url === `/patients/${params.resource}/`);
  const resource = getPatientResourceBySlug(params.resource);

  if (!rawPage && !resource) return {};

  return {
    title: rawPage?.metaTitle || resource?.metaTitle,
    description: rawPage?.metaDescription || resource?.metaDescription,
  };
}

export default function PatientResourceDetailPage({ params }: PatientResourcePageProps) {
  const rawPage = getAllPages().find((p) => p.url === `/patients/${params.resource}/`);
  const resource = getPatientResourceBySlug(params.resource);

  if (!rawPage && !resource) {
    notFound();
  }

  const title = rawPage ? rawPage.title : resource?.title || '';
  const bodyContent = rawPage?.bodyMarkdown || resource?.bodyMarkdown || '';
  const faqs = rawPage?.faqs || resource?.faqs || [];

  return (
    <main>
      {/* 1. PAGE HERO */}
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep">·</span>
            <Link href="/patients/">Patient Resources</Link>
            <span className="breadcrumb-sep">·</span>
            <span>{title}</span>
          </div>
          <div className="page-hero-devanagari">रुग्ण मार्गदर्शिका</div>
          <h1 className="page-hero-title">{title}</h1>
          <p className="page-hero-lede">
            Step-by-step guidance for patients undergoing consultation, surgery, or recovery at Shri Manmukund Hospital, Amravati.
          </p>
        </div>
      </section>

      {/* 2. BODY CONTENT */}
      <section className="py-12 bg-white border-t border-b border-[#6B7F5F]/15">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-[#2D2A20] leading-relaxed">
            <MarkdownRenderer content={bodyContent} />
          </div>
        </div>
      </section>

      {/* 3. FAQS */}
      {faqs.length > 0 && (
        <section className="py-16 bg-[#FBF7EC]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <div className="section-tag inline-block">Frequently Asked Questions</div>
              <h2 className="section-title text-2xl font-serif text-[#1B3A5B] mt-2">
                Questions about <em>{title}</em>
              </h2>
            </div>
            <FAQAccordion items={faqs} />
          </div>
        </section>
      )}

      {/* 4. CTA */}
      <section className="cta-section">
        <div className="cta-inner">
          <div className="cta-devanagari">आइए, मिलते हैं</div>
          <h2 className="cta-headline">
            Ready to come and <em>see us?</em>
          </h2>
          <p className="cta-lede">
            We consult at Plot 7, Bapatwadi, Amravati. Monday to Saturday. Appointments are unhurried, and you will speak directly with Dr. Vipin or Dr. Swati.
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

import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { LEGAL_DOCUMENTS } from '@/lib/data/legal-documents';

interface LegalPageProps {
  params: {
    document: string;
  };
}

export function generateStaticParams() {
  return Object.keys(LEGAL_DOCUMENTS).map((doc) => ({ document: doc }));
}

export function generateMetadata({ params }: LegalPageProps) {
  const doc = LEGAL_DOCUMENTS[params.document];
  if (!doc) return {};

  return {
    title: doc.metaTitle,
    description: doc.metaDescription,
    alternates: {
      canonical: `/legal/${params.document}/`,
    },
  };
}

export default function LegalDocumentPage({ params }: LegalPageProps) {
  const doc = LEGAL_DOCUMENTS[params.document];

  if (!doc) {
    notFound();
  }

  const otherLegal = [
    { title: 'Terms of Use', slug: 'terms-of-use', icon: '§' },
    { title: 'Medical Disclaimer', slug: 'medical-disclaimer', icon: '⚕' },
    { title: 'Cookie Policy', slug: 'cookie-policy', icon: '⌘' },
    { title: 'Privacy Policy', slug: 'privacy-policy', icon: '🔒' },
  ].filter((l) => l.slug !== params.document);

  return (
    <main>
      {/* 1. LEGAL HERO */}
      <section className="legal-hero">
        <div className="breadcrumb">
          <Link href="/">Home</Link>
          <span className="breadcrumb-sep">·</span>
          <Link href="/legal/privacy-policy/">Legal</Link>
          <span className="breadcrumb-sep">·</span>
          <span>
            {doc.title} {doc.titleEm}
          </span>
        </div>

        <div className="legal-eyebrow">{doc.eyebrow}</div>
        <h1 className="legal-title">
          {doc.title} <em>{doc.titleEm}</em>
        </h1>
        <p className="legal-deck">{doc.deck}</p>

        <div className="legal-meta">
          <div className="legal-meta-item">
            <span className="legal-meta-label">Effective Date</span>
            <span className="legal-meta-value">{doc.effectiveDate}</span>
          </div>
          <div className="legal-meta-item">
            <span className="legal-meta-label">Last Updated</span>
            <span className="legal-meta-value">{doc.lastUpdated}</span>
          </div>
          <div className="legal-meta-item">
            <span className="legal-meta-label">Version</span>
            <span className="legal-meta-value">{doc.version}</span>
          </div>
          <div className="legal-meta-item">
            <span className="legal-meta-label">Jurisdiction</span>
            <span className="legal-meta-value">{doc.jurisdiction}</span>
          </div>
        </div>
      </section>

      {/* 2. TABLE OF CONTENTS */}
      <section className="legal-toc">
        <div className="legal-toc-inner">
          <div className="legal-toc-title">On this page</div>
          <ol className="legal-toc-list">
            {doc.toc.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>
                  <span className="legal-toc-num">{item.num}</span>
                  {item.title}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 3. LEGAL BODY */}
      <article className="legal-body">{doc.renderBody()}</article>

      {/* 4. GRIEVANCE / CONTACT BLOCK */}
      <section className="grievance">
        <div className="grievance-inner">
          <div className="grievance-lead">
            <div className="grievance-eyebrow">{doc.grievance.eyebrow}</div>
            <h3 className="grievance-title">
              {doc.grievance.title} <em>{doc.grievance.titleEm}</em>
            </h3>
            <p className="grievance-desc">{doc.grievance.desc}</p>
          </div>

          <div className="grievance-contacts">
            <div className="grievance-contact-row">
              <div className="grievance-contact-label">Grievance Officer</div>
              <div className="grievance-contact-value">
                {doc.grievance.officer}
                <br />
                {doc.grievance.officerRole}
              </div>
            </div>
            <div className="grievance-contact-row">
              <div className="grievance-contact-label">Email</div>
              <div className="grievance-contact-value">
                <a href={`mailto:${doc.grievance.email}`}>{doc.grievance.email}</a>
              </div>
            </div>
            <div className="grievance-contact-row">
              <div className="grievance-contact-label">Phone</div>
              <div className="grievance-contact-value">{doc.grievance.phone}</div>
            </div>
            <div className="grievance-contact-row">
              <div className="grievance-contact-label">Postal Address</div>
              <div className="grievance-contact-value">{doc.grievance.address}</div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. RELATED LEGAL LINKS */}
      <section className="related-legal">
        <div className="related-legal-title">Other Legal Documents</div>
        <div className="related-legal-grid">
          {otherLegal.map((item) => (
            <Link
              key={item.slug}
              href={`/legal/${item.slug}/`}
              className="related-legal-card"
            >
              <span className="related-legal-card-icon">{item.icon}</span>
              <span className="related-legal-card-text">{item.title}</span>
              <span className="related-legal-card-arrow">→</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

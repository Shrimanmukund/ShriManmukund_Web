import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import {
  SERVICE_CATEGORIES,
  getServiceCategoryBySlug,
  DOCTORS,
} from '@/lib/data/content-store';
import { getServiceHubData } from '@/lib/data/service-hubs';
import { ServiceHubLayout } from '@/components/services/ServiceHubLayout';

interface CategoryPageProps {
  params: {
    category: string;
  };
}

export function generateStaticParams() {
  const slugs = new Set([
    ...SERVICE_CATEGORIES.map((cat) => cat.slug),
    'ayurveda-panchakarma',
    'female-care-unit',
    'panchakarma',
  ]);
  return Array.from(slugs).map((slug) => ({
    category: slug,
  }));
}

export function generateMetadata({ params }: CategoryPageProps) {
  const hub = getServiceHubData(params.category);
  if (hub) {
    return {
      title: hub.metaTitle,
      description: hub.metaDescription,
      alternates: {
        canonical: `/services/${hub.canonicalSlug}/`,
      },
      openGraph: {
        title: hub.metaTitle,
        description: hub.metaDescription,
        url: `https://shrimanmukundhospital.com/services/${hub.canonicalSlug}/`,
      },
    };
  }

  const category = getServiceCategoryBySlug(params.category);
  if (!category) return {};

  return {
    title: `${category.name} — Shri Manmukund Hospital, Amravati`,
    description: category.shortDescription,
    alternates: {
      canonical: `/services/${params.category}/`,
    },
  };
}

export default function ServiceCategoryPage({ params }: CategoryPageProps) {
  // Check for dedicated rich service hub layout first
  const hubData = getServiceHubData(params.category);
  if (hubData) {
    return <ServiceHubLayout hub={hubData} />;
  }

  const category = getServiceCategoryBySlug(params.category);
  if (!category) {
    notFound();
  }

  const isSwatiCategory = category.slug === 'female-care';
  const isAnorectal = category.slug === 'anorectal-care';
  const iconLetters: string[] = ['पा', 'भ', 'भ', 'पु', 'फो', 'ना', 'गु', 'महि', 'बा'];

  return (
    <div className={isSwatiCategory ? 'doctor-page-swati' : ''}>
      <main>
        {/* 1. UNIT HERO */}
        <section className="unit-hero">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep">·</span>
            <Link href="/services/">Services</Link>
            <span className="breadcrumb-sep">·</span>
            <span>{category.slug === 'anorectal-care' ? 'Anorectal Care' : category.name}</span>
          </div>

          <div className="unit-hero-inner">
            <div className="unit-hero-content">
              <div className="unit-hero-eyebrow">
                Care Unit
                <span className="unit-hero-eyebrow-badge">
                  {isAnorectal ? 'Flagship' : 'Specialist Unit'}
                </span>
              </div>
              <div className="unit-hero-devanagari font-devanagari">
                {category.nameSanskrit || 'गुदविकार चिकित्सा'}
              </div>
              <h1 className="unit-hero-title">
                {isAnorectal
                  ? 'Advanced Anorectal Care, chosen '
                  : `${category.name}, chosen `}
                <em>honestly for the case.</em>
              </h1>
              <p className="unit-hero-lede">{category.shortDescription}</p>
              <div className="unit-hero-ctas">
                <Link href="/contact/#book" className="btn btn-primary">
                  Book a consultation
                </Link>
                <a href="#conditions" className="btn btn-ghost">
                  Explore conditions
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 2. ANSWER-FIRST SUMMARY */}
        <section className="answer-summary">
          <div className="answer-summary-inner">
            <div className="answer-summary-label">In one paragraph</div>
            <p className="answer-summary-text">
              The {category.name} Unit at Shri Manmukund Hospital treats conditions ranging from early presentations to complex cases. Because we offer all treatment tiers under one roof—from conservative medical management and classical Ayurvedic therapies through Ksharsutra, laser proctology, and modern surgery—the recommendation you receive reflects your specific case rather than commercial bias toward any single technique.
            </p>
          </div>
        </section>

        {/* 3. CONDITIONS */}
        <section className="conditions" id="conditions">
          <div className="section-header">
            <div className="section-tag">Conditions We Treat</div>
            <h2 className="section-title">
              {category.conditions.length} conditions handled <em>under one roof.</em>
            </h2>
            <p className="section-lede">
              From the most common presentations to the most complex recurrent cases. Every condition is examined, staged, and matched to the appropriate treatment tier.
            </p>
          </div>

          <div className="conditions-grid">
            {category.conditions.map((cond, idx) => (
              <div key={cond.slug} className="condition-card">
                <div className="condition-icon font-devanagari">
                  {cond.iconLetter || iconLetters[idx % iconLetters.length]}
                </div>
                <h3 className="condition-title">{cond.name}</h3>
                {cond.nameSanskrit && (
                  <div className="condition-sanskrit font-devanagari">{cond.nameSanskrit}</div>
                )}
                <p className="condition-desc">{cond.shortSummary}</p>
                <div className="condition-tags">
                  {cond.tags && cond.tags.length > 0 ? (
                    cond.tags.map((tag) => (
                      <span key={tag} className="condition-tag">
                        {tag}
                      </span>
                    ))
                  ) : (
                    <>
                      <span className="condition-tag">Clinical Guide</span>
                      <span className="condition-tag">All tiers</span>
                    </>
                  )}
                </div>
                <Link
                  href={`/services/${category.slug}/${cond.slug}/`}
                  className="condition-link"
                >
                  {cond.linkText || `Read about ${cond.name.toLowerCase()}`}
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* 4. SPECIALISTS */}
        <section className="specialists">
          <div className="section-header">
            <div className="section-tag">Under the Care Of</div>
            <h2 className="section-title">
              Both specialists, <em>consulting daily.</em>
            </h2>
            <p className="section-lede">
              Neither Dr. Vipin nor Dr. Swati sees you and refers you to junior associates. You are seen by the specialist you booked with, throughout your treatment.
            </p>
          </div>

          <div className="specialists-grid">
            <article className="specialist">
              <div className="specialist-portrait">
                <div className="specialist-portrait-inner">
                  <Image
                    src="/images/doctors/dr-vipin-tongale.jpg"
                    alt="Dr. Vipin Tongale - General Surgeon & Proctologist"
                    width={220}
                    height={220}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
              <h3 className="specialist-name">Dr. Vipin Tongale</h3>
              <p className="specialist-role">General Surgeon &amp; Proctologist</p>
              <div className="specialist-creds">MS Ayurveda Shalya Tantra · PhD</div>
              <p className="specialist-bio">
                Fifteen years of dedicated practice, including twelve years of AYUSH service at District Hospital Amravati. Over 16,000 procedures performed across Vidarbha.
              </p>
              <div className="specialist-tags">
                <span className="specialist-tag">Ksharsutra</span>
                <span className="specialist-tag">Laser Proctology</span>
                <span className="specialist-tag">General Surgery</span>
              </div>
              <Link href="/dr-vipin/" className="specialist-link">
                Read profile →
              </Link>
            </article>

            <article className="specialist specialist-swati">
              <div className="specialist-portrait">
                <div className="specialist-portrait-inner">
                  <Image
                    src="/images/doctors/dr-swati-tongale.jpg"
                    alt="Dr. Swati Tongale - Female Care Unit Lead"
                    width={220}
                    height={220}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
              <h3 className="specialist-name">Dr. Swati Tongale</h3>
              <p className="specialist-role">Female Care Unit Lead</p>
              <div className="specialist-creds">MS Ayurveda Shalya Tantra</div>
              <p className="specialist-bio">
                Female proctology, Uttarbasti-based fertility care, and Masanumasik Garbhsanskara. Practice built to remove access barriers women face with complete privacy.
              </p>
              <div className="specialist-tags">
                <span className="specialist-tag">Female Proctology</span>
                <span className="specialist-tag">Uttarbasti</span>
                <span className="specialist-tag">Garbhsanskara</span>
              </div>
              <Link href="/dr-swati/" className="specialist-link">
                Read profile →
              </Link>
            </article>
          </div>
        </section>

        {/* 5. CTA */}
        <section className="cta-section">
          <div className="cta-inner">
            <div className="cta-devanagari font-devanagari">आइए, मिलते हैं</div>
            <h2 className="cta-headline">
              Ready for an honest{' '}
              <em>
                {category.slug === 'anorectal-care'
                  ? 'anorectal consultation?'
                  : `${category.name.toLowerCase().replace(/^(advanced|specialist)\s+/i, '')} consultation?`}
              </em>
            </h2>
            <p className="cta-lede">
              Come for a proper examination, an honest opinion, and a recommendation that fits your case. If a consultation reveals we are not the right fit, we will say so.
            </p>
            <div className="cta-buttons">
              <Link href="/contact/#book" className="btn btn-primary">
                Book a consultation
              </Link>
              <a href="tel:+918208927917" className="btn btn-ghost">
                Speak with our team
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

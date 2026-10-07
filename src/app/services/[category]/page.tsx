import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import {
  SERVICE_CATEGORIES,
  getServiceCategoryBySlug,
  DOCTORS,
  getAllPages,
} from '@/lib/data/content-store';
import { getServiceHubData } from '@/lib/data/service-hubs';
import { ServiceHubLayout } from '@/components/services/ServiceHubLayout';
import { MarkdownRenderer } from '@/components/content/MarkdownRenderer';

interface CategoryPageProps {
  params: {
    category: string;
  };
}

function cleanServiceMarkdown(rawMd?: string) {
  if (!rawMd) return '';
  const sections = rawMd.split(/(?=\n##\s+)/);
  const filtered = sections.filter((sec) => {
    const headerMatch = sec.match(/^\s*##\s+([^\n]+)/);
    if (!headerMatch) return true;
    const header = headerMatch[1].trim().toLowerCase();
    const skipHeaders = [
      'hero',
      'answer-first summary',
      'answer first summary',
      'frequently asked questions',
      'faqs',
      'faq',
      'meet your specialists',
      'meet your specialist',
      'cta',
      'call to action',
      'related resources',
      'related services',
      'related content',
    ];
    return !skipHeaders.includes(header);
  });
  return filtered.join('').trim();
}

export function generateStaticParams() {
  const slugs = new Set([
    ...SERVICE_CATEGORIES.map((cat) => cat.slug),
    'ayurveda-panchakarma',
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
  const rawPage = getAllPages().find((p) => p.url === `/services/${params.category}/`);
  if (!category && !rawPage) return {};

  const title = rawPage?.metaTitle || `${category?.name || 'Specialist Care'} | Shri Manmukund Hospital, Amravati`;
  const cleanTitle = title.replace(/\s*\|\s*Shri Manmukund Hospital.*$/i, '').trim();
  const description = rawPage?.metaDescription || category?.shortDescription || `${cleanTitle} at Shri Manmukund Hospital.`;

  return {
    title: cleanTitle,
    description,
    alternates: {
      canonical: `/services/${params.category}/`,
    },
    openGraph: {
      title: `${cleanTitle} | Shri Manmukund Hospital`,
      description,
      url: `https://shrimanmukundhospital.com/services/${params.category}/`,
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
  const rawPage = getAllPages().find((p) => p.url === `/services/${params.category}/`);

  if (!category && !rawPage) {
    notFound();
  }

  const categoryName = category?.name || rawPage?.title || 'Specialist Care';
  const categorySanskrit = category?.nameSanskrit;
  const shortDescription = rawPage?.answerFirstSummary || rawPage?.metaDescription || category?.shortDescription || '';
  const cleanBodyMarkdown = cleanServiceMarkdown(rawPage?.bodyMarkdown);
  const faqs = rawPage?.faqs || [];

  const isSwatiCategory = params.category === 'female-care' || params.category === 'female-care-unit';
  const isAnorectal = params.category === 'anorectal-care';
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
            <span>{params.category === 'anorectal-care' ? 'Anorectal Care' : categoryName}</span>
          </div>

          <div className="unit-hero-inner">
            <div className="unit-hero-content">
              <div className="unit-hero-eyebrow">
                Care Unit
                <span className="unit-hero-eyebrow-badge">
                  {isAnorectal ? 'Flagship' : 'Specialist Unit'}
                </span>
              </div>
              {categorySanskrit && (
                <div className="unit-hero-devanagari font-devanagari">
                  {categorySanskrit}
                </div>
              )}
              <h1 className="unit-hero-title">
                {isAnorectal
                  ? 'Advanced Anorectal Care, chosen '
                  : `${categoryName}, chosen `}
                <em>honestly for the case.</em>
              </h1>
              <p className="unit-hero-lede">{shortDescription}</p>
              <div className="unit-hero-ctas">
                <Link href="/contact/#book" className="btn btn-primary">
                  Book a consultation
                </Link>
                {category && category.conditions.length > 0 && (
                  <a href="#conditions" className="btn btn-ghost">
                    Explore conditions
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* 2. ANSWER-FIRST SUMMARY */}
        {shortDescription && (
          <section className="answer-summary">
            <div className="answer-summary-inner">
              <div className="answer-summary-label">In one paragraph</div>
              <p className="answer-summary-text">
                {rawPage?.answerFirstSummary ||
                  `The ${categoryName} Unit at Shri Manmukund Hospital treats conditions ranging from early presentations to complex cases. Because we offer all treatment tiers under one roof, from conservative medical management and classical Ayurvedic therapies through Ksharsutra, laser proctology, and modern surgery, the recommendation you receive reflects your specific case rather than commercial bias toward any single technique.`}
              </p>
            </div>
          </section>
        )}

        {/* 3. CONDITIONS (IF PRESENT) */}
        {category && category.conditions.length > 0 && (
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
        )}

        {/* 3B. DEDICATED MARKDOWN BODY (IF NO CONDITIONS BUT HAS MARKDOWN) */}
        {(!category || category.conditions.length === 0) && cleanBodyMarkdown && (
          <section
            className="procedure-content"
            style={{
              padding: '3.5rem 0',
              background: 'var(--cream, #FAF7F2)',
            }}
          >
            <div
              style={{
                maxWidth: '860px',
                margin: '0 auto',
                padding: '0 1.5rem',
              }}
            >
              <article className="article-body">
                <MarkdownRenderer content={cleanBodyMarkdown} />
              </article>
            </div>
          </section>
        )}

        {/* 3C. FAQ (IF AVAILABLE) */}
        {faqs && faqs.length > 0 && (
          <section className="faq">
            <div className="section-header">
              <div className="section-tag">Frequently Asked Questions</div>
              <h2 className="section-title">
                Common questions, <em>honestly answered.</em>
              </h2>
            </div>

            <div className="faq-list">
              {faqs.map((faq, idx) => (
                <details key={idx} className="faq-item">
                  <summary className="faq-question">{faq.question}</summary>
                  <div
                    className="faq-answer"
                    dangerouslySetInnerHTML={{ __html: faq.answer }}
                  />
                </details>
              ))}
            </div>
          </section>
        )}

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
                {params.category === 'anorectal-care'
                  ? 'anorectal consultation?'
                  : `${categoryName.toLowerCase().replace(/^(advanced|specialist)\s+/i, '')} consultation?`}
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

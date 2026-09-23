import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  SERVICE_CATEGORIES,
  getServiceCategoryBySlug,
  getConditionBySlug,
  DOCTORS,
  getAllPages,
} from '@/lib/data/content-store';
import { getConditionDetailData } from '@/lib/data/condition-data';
import { generateConditionSchema } from '@/lib/seo/schemas';

interface ConditionPageProps {
  params: {
    category: string;
    slug: string;
  };
}

export function generateStaticParams() {
  const params: Array<{ category: string; slug: string }> = [];

  for (const cat of SERVICE_CATEGORIES) {
    for (const cond of cat.conditions) {
      params.push({
        category: cat.slug,
        slug: cond.slug,
      });
      if (cat.slug === 'female-care') {
        params.push({
          category: 'female-care-unit',
          slug: cond.slug,
        });
      }
      if (cat.slug === 'panchakarma') {
        params.push({
          category: 'ayurveda-panchakarma',
          slug: cond.slug,
        });
      }
    }
  }

  return params;
}

export function generateMetadata({ params }: ConditionPageProps) {
  const condition = getConditionBySlug(params.category, params.slug);
  const rawPage = getAllPages().find((p) =>
    p.url.includes(`/services/${params.category}/${params.slug}/`)
  );

  if (!condition && !rawPage) return {};

  const rawTitle = rawPage?.metaTitle || condition?.metaTitle || `${condition?.name || ''} Treatment`;
  const cleanTitle = rawTitle.replace(/\s*\|\s*Shri Manmukund Hospital.*$/i, '').trim();

  return {
    title: cleanTitle,
    description: rawPage?.metaDescription || condition?.metaDescription,
  };
}

export default function ConditionDetailPage({ params }: ConditionPageProps) {
  const category = getServiceCategoryBySlug(params.category);
  const condition = getConditionBySlug(params.category, params.slug);
  const rawPage = getAllPages().find((p) =>
    p.url.includes(`/services/${params.category}/${params.slug}/`)
  );

  if (!category || (!condition && !rawPage)) {
    notFound();
  }

  const rawName = rawPage ? rawPage.title : condition?.name || '';
  const conditionName = rawName.replace(/\s*\(.*?\)\s*/g, '').trim();
  const leadDoctorSlug = condition?.leadDoctorSlug || (category.slug === 'female-care' ? 'dr-swati' : 'dr-vipin');
  const isSwatiTheme = category.slug === 'female-care';

  const detail = getConditionDetailData(
    category.slug,
    params.slug,
    rawName,
    condition?.nameSanskrit,
    condition?.answerFirstSummary || rawPage?.answerFirstSummary,
    category.name
  );

  const conditionData = condition || {
    slug: params.slug,
    categorySlug: category.slug,
    categoryName: category.name,
    name: conditionName,
    answerFirstSummary: detail.answerSummary,
    definitionMarkdown: '',
    symptomsMarkdown: '',
    causesRiskFactorsMarkdown: '',
    whenToSeeSpecialistMarkdown: '',
    diagnosisMarkdown: '',
    treatmentOptions: [],
    recoveryMarkdown: '',
    preventionMarkdown: '',
    faqs: detail.faqs,
    relatedConditionSlugs: [],
    leadDoctorSlug,
    medicallyReviewedBySlug: leadDoctorSlug === 'dr-vipin' ? 'dr-swati' : 'dr-vipin',
    emergencyCalloutRequired:
      params.slug === 'perianal-abscess' ||
      params.slug === 'appendicitis' ||
      params.slug === 'phimosis-paraphimosis',
    metaTitle: rawPage?.metaTitle || `${conditionName} Treatment | Shri Manmukund Hospital`,
    metaDescription: rawPage?.metaDescription || detail.answerSummary,
    lastReviewedAt: '2026-09-01',
  };

  const schema = generateConditionSchema(conditionData);

  return (
    <div className={isSwatiTheme ? 'doctor-page-swati' : ''}>
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />

        {/* 1. CONDITION HERO */}
        <section className="condition-hero">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep">·</span>
            <Link href="/services/">Services</Link>
            <span className="breadcrumb-sep">·</span>
            <Link href={`/services/${category.slug}/`}>{category.name}</Link>
            <span className="breadcrumb-sep">·</span>
            <span>{conditionName}</span>
          </div>

          <div className="condition-hero-inner">
            <div>
              <div className="condition-hero-eyebrow">{detail.eyebrow}</div>
              <div className="condition-hero-devanagari">{detail.devanagari}</div>
              <h1 className="condition-hero-title">
                {detail.titleMain} <em>{detail.titleAccent}</em>
              </h1>
              <div className="condition-hero-subtitle">{detail.subtitle}</div>
              <p className="condition-hero-lede">{detail.lede}</p>
              <div className="condition-hero-ctas">
                <Link href="/contact/#book" className="btn btn-primary">
                  Book a consultation
                </Link>
                <a href="tel:+918208927917" className="btn btn-ghost">
                  Speak with our team
                </a>
              </div>
            </div>

            {/* At a Glance Card */}
            <aside className="glance-card">
              <div className="glance-card-title">At a Glance</div>
              <div className="glance-row">
                <span className="glance-label">Sanskrit</span>
                <span className="glance-value">{detail.glance.sanskrit}</span>
              </div>
              <div className="glance-row">
                <span className="glance-label">Grades</span>
                <span className="glance-value">{detail.glance.grades}</span>
              </div>
              <div className="glance-row">
                <span className="glance-label">Common in</span>
                <span className="glance-value">{detail.glance.commonIn}</span>
              </div>
              <div className="glance-row">
                <span className="glance-label">Treatment tier</span>
                <span className="glance-value">{detail.glance.treatmentTier}</span>
              </div>
              <div className="glance-row">
                <span className="glance-label">Typical recovery</span>
                <span className="glance-value">{detail.glance.recovery}</span>
              </div>
              <div className="glance-row">
                <span className="glance-label">Consultation</span>
                <span className="glance-value">
                  <strong>{detail.glance.consultation}</strong>
                </span>
              </div>
              <div className="glance-cta">
                <Link
                  href="/contact/#book"
                  className="btn btn-primary btn-small"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  Book with a specialist
                </Link>
              </div>
            </aside>
          </div>
        </section>

        {/* 2. ANSWER-FIRST SUMMARY */}
        {detail.answerSummary && (
          <section className="answer-summary">
            <div className="answer-summary-inner">
              <div className="answer-summary-label">In one paragraph</div>
              <p className="answer-summary-text">{detail.answerSummary}</p>
            </div>
          </section>
        )}

        {/* 3. SYMPTOMS */}
        {detail.symptoms && detail.symptoms.items.length > 0 && (
          <section className="symptoms">
            <div className="section-header--left">
              <div className="section-tag">Common Symptoms</div>
              <h2
                className="section-title"
                dangerouslySetInnerHTML={{ __html: detail.symptoms.sectionTitle }}
              />
              <p className="section-lede">{detail.symptoms.sectionLede}</p>
            </div>

            <div className="symptoms-grid">
              {detail.symptoms.items.map((symptom, idx) => (
                <div key={idx} className="symptom-card">
                  <div className="symptom-icon">{symptom.icon}</div>
                  <h3 className="symptom-title">{symptom.title}</h3>
                  <p className="symptom-desc">{symptom.desc}</p>
                </div>
              ))}
            </div>

            {detail.symptoms.warningTitle && (
              <div className="warning-callout">
                <div className="warning-icon">!</div>
                <div>
                  <div className="warning-title">{detail.symptoms.warningTitle}</div>
                  <p
                    className="warning-body"
                    dangerouslySetInnerHTML={{ __html: detail.symptoms.warningBody }}
                  />
                </div>
              </div>
            )}
          </section>
        )}

        {/* 4. GRADES / STAGING */}
        {detail.grades && detail.grades.items.length > 0 && (
          <section className="grades">
            <div className="grades-inner">
              <div className="section-header">
                <div className="section-tag">{detail.grades.sectionTag}</div>
                <h2
                  className="section-title"
                  dangerouslySetInnerHTML={{ __html: detail.grades.sectionTitle }}
                />
                <p className="section-lede">{detail.grades.sectionLede}</p>
              </div>

              <div className="grades-ladder">
                {detail.grades.items.map((grade, idx) => (
                  <div key={idx} className="grade-card">
                    <div className="grade-badge">{grade.badge}</div>
                    <div className="grade-label">{grade.label}</div>
                    <h3 className="grade-title">{grade.title}</h3>
                    <p className="grade-desc">{grade.desc}</p>
                    <div className="grade-treatment">
                      <strong>Typical Treatment</strong>
                      {grade.treatment}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 5. CAUSES */}
        {detail.causes && (
          <section className="causes">
            <div className="section-header--left">
              <div className="section-tag">Causes &amp; Risk Factors</div>
              <h2 className="section-title">
                Why {conditionName.toLowerCase()} <em>develop.</em>
              </h2>
            </div>

            <div className="causes-grid">
              <div className="causes-lead">
                <h3 dangerouslySetInnerHTML={{ __html: detail.causes.leadHeadline }} />
                {detail.causes.leadParagraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              <ul className="causes-list">
                {detail.causes.causesList.map((cause, idx) => (
                  <li key={idx}>
                    <strong>{cause.title}</strong> {cause.desc}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* 6. DIAGNOSIS */}
        {detail.diagnosis && detail.diagnosis.steps.length > 0 && (
          <section className="diagnosis">
            <div className="diagnosis-inner">
              <div className="section-header">
                <div className="section-tag">How We Diagnose</div>
                <h2
                  className="section-title"
                  dangerouslySetInnerHTML={{ __html: detail.diagnosis.sectionTitle }}
                />
                <p className="section-lede">{detail.diagnosis.sectionLede}</p>
              </div>

              <div className="diagnosis-steps">
                {detail.diagnosis.steps.map((step, idx) => (
                  <div key={idx} className="diagnosis-step">
                    <span className="diagnosis-step-num">{step.stepNum}</span>
                    <div className="diagnosis-step-icon">{step.icon}</div>
                    <h3 className="diagnosis-step-title">{step.title}</h3>
                    <p className="diagnosis-step-desc">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 7. TREATMENT OPTIONS */}
        {detail.treatments && detail.treatments.items.length > 0 && (
          <section className="treatments">
            <div className="section-header--left">
              <div className="section-tag">Treatment Options</div>
              <h2
                className="section-title"
                dangerouslySetInnerHTML={{ __html: detail.treatments.sectionTitle }}
              />
              <p className="section-lede">{detail.treatments.sectionLede}</p>
            </div>

            <div className="treatment-list">
              {detail.treatments.items.map((treatment, idx) => (
                <div
                  key={idx}
                  className={`treatment-card ${treatment.modifierClass || ''}`}
                >
                  <div className="treatment-head">
                    <div className="treatment-tier">
                      <span className="treatment-tier-num">{treatment.tierNum}</span>
                      <span>{treatment.tierLabel}</span>
                    </div>
                    <h3 className="treatment-title">{treatment.title}</h3>
                    <p className="treatment-suitability">{treatment.suitability}</p>
                  </div>
                  <div className="treatment-body">
                    <p>{treatment.desc}</p>
                    <div className="treatment-facts">
                      {treatment.facts.map((fact, fIdx) => (
                        <div key={fIdx} className="treatment-fact">
                          <div className="treatment-fact-label">{fact.label}</div>
                          <div className="treatment-fact-value">{fact.value}</div>
                        </div>
                      ))}
                    </div>
                    <Link
                      href={treatment.linkHref || '/knowledge/'}
                      className="treatment-link"
                    >
                      {treatment.linkText}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 8. WHAT TO EXPECT */}
        {detail.expect && detail.expect.steps.length > 0 && (
          <section className="expect">
            <div className="expect-inner">
              <div className="section-header">
                <div className="section-tag">What to Expect</div>
                <h2
                  className="section-title"
                  dangerouslySetInnerHTML={{ __html: detail.expect.sectionTitle }}
                />
                <p className="section-lede">{detail.expect.sectionLede}</p>
              </div>

              <div className="expect-journey">
                {detail.expect.steps.map((step, idx) => (
                  <div key={idx} className="expect-step">
                    <div className="expect-step-num">{step.stepNum}</div>
                    <div className="expect-step-content">
                      <div className="expect-step-time">{step.time}</div>
                      <h3 className="expect-step-title">{step.title}</h3>
                      <p className="expect-step-desc">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 9. FAQ */}
        {detail.faqs && detail.faqs.length > 0 && (
          <section className="faq">
            <div className="section-header">
              <div className="section-tag">Frequently Asked Questions</div>
              <h2 className="section-title">
                Common questions, <em>honestly answered.</em>
              </h2>
            </div>

            <div className="faq-list">
              {detail.faqs.map((faq, idx) => (
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

        {/* 10. RELATED CONDITIONS */}
        {detail.related && detail.related.length > 0 && (
          <section className="related">
            <div className="related-inner">
              <div className="section-header">
                <div className="section-tag">Related Conditions</div>
                <h2 className="section-title">
                  Often confused with, or <em>occurring alongside.</em>
                </h2>
              </div>

              <div className="related-grid">
                {detail.related.map((rel, idx) => (
                  <Link key={idx} href={rel.href} className="related-card">
                    <div className="related-icon">{rel.icon}</div>
                    <h3 className="related-title">{rel.title}</h3>
                    <p className="related-desc">{rel.desc}</p>
                    <span className="related-link">{rel.linkText}</span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 11. CTA SECTION */}
        <section className="cta-section">
          <div className="cta-inner">
            <div className="cta-devanagari">आइए, मिलते हैं</div>
            <h2 className="cta-headline">
              Ready for an honest <em>opinion on your case?</em>
            </h2>
            <p className="cta-lede">
              Book a consultation. We will examine, grade, explain, and give you an honest recommendation. If we think you should be seen by a different type of specialist, we will say so.
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
    </div>
  );
}

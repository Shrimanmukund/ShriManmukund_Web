import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ServiceHubData } from '@/lib/data/service-hubs';

interface ServiceHubLayoutProps {
  hub: ServiceHubData;
}

export function ServiceHubLayout({ hub }: ServiceHubLayoutProps) {
  const isSwatiTheme = hub.themeColor === 'rose' || hub.slug === 'female-care' || hub.slug === 'female-care-unit';

  return (
    <div className={`service-hub-page ${isSwatiTheme ? 'doctor-page-swati' : ''}`}>
      <main>
        {/* 1. UNIT HERO */}
        <section className="unit-hero">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep">·</span>
            <Link href="/services/">Services</Link>
            <span className="breadcrumb-sep">·</span>
            <span>{hub.name}</span>
          </div>

          <div className="unit-hero-inner">
            <div className="unit-hero-content">
              <div className="unit-hero-eyebrow">
                <span>{hub.eyebrow}</span>
                <span className="unit-hero-eyebrow-badge">
                  {hub.eyebrowBadge}
                </span>
              </div>
              <div className="unit-hero-devanagari font-devanagari">
                {hub.nameSanskrit}
              </div>
              <h1 className="unit-hero-title">
                {hub.heroHeadline}
                <em>{hub.heroHeadlineEm}</em>
              </h1>
              <p className="unit-hero-lede">{hub.heroSubheadline}</p>
              
              <div className="unit-hero-ctas">
                <Link href={hub.primaryCtaUrl} className="btn btn-primary">
                  {hub.primaryCtaText}
                </Link>
                <a href={hub.secondaryCtaUrl} className="btn btn-ghost">
                  {hub.secondaryCtaText}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 2. ANSWER-FIRST SUMMARY */}
        <section className="answer-summary">
          <div className="answer-summary-inner">
            <div className="answer-summary-label">In one paragraph</div>
            <p className="answer-summary-text">{hub.answerFirstSummary}</p>
          </div>
        </section>

        {/* 3. TREATMENT TIERS (Four Tiers of Care) */}
        {hub.tiers && hub.tiers.length > 0 && (
          <section className="tiers">
            <div className="tiers-inner">
              <div className="section-header">
                <div className="section-tag">Our Approach</div>
                <h2 className="section-title">
                  {hub.tiersHeading}
                  <em>{hub.tiersHeadingEm}</em>
                </h2>
                {hub.tiersLede && <p className="section-lede">{hub.tiersLede}</p>}
              </div>

              <div className="tier-ladder">
                {hub.tiers.map((tier) => (
                  <div key={tier.num} className="tier-card">
                    <div className="tier-num">{tier.num}</div>
                    <div className="tier-label">{tier.tierLabel}</div>
                    <h3 className="tier-title">{tier.title}</h3>
                    <p className="tier-desc">{tier.desc}</p>
                    
                    {tier.whenApplied && (
                      <div className="tier-examples">
                        <div className="tier-examples-label">When Applied</div>
                        <div className="tier-examples-list">{tier.whenApplied}</div>
                      </div>
                    )}

                    {tier.linkUrl && tier.linkText && (
                      <div className="mt-4 pt-3 border-t border-[rgba(107,127,95,0.12)]">
                        <Link
                          href={tier.linkUrl}
                          className="text-xs font-semibold text-[#6B7F5F] hover:underline"
                        >
                          {tier.linkText}
                        </Link>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {hub.tiersNote && <p className="tiers-note">{hub.tiersNote}</p>}
            </div>
          </section>
        )}

        {/* 4. CONDITIONS WE TREAT (Nine Conditions Handled Under One Roof) */}
        {hub.conditions && hub.conditions.length > 0 && (
          <section className="conditions" id="conditions">
            <div className="section-header">
              <div className="section-tag">Conditions We Treat</div>
              <h2 className="section-title">
                {hub.conditionsSectionTitle}
                <em>{hub.conditionsSectionTitleEm}</em>
              </h2>
              <p className="section-lede">{hub.conditionsSectionLede}</p>
            </div>

            <div className="conditions-grid">
              {hub.conditions.map((cond) => (
                <div key={cond.slug} className="condition-card">
                  {cond.iconLetter && (
                    <div className="condition-icon font-devanagari">
                      {cond.iconLetter}
                    </div>
                  )}
                  <h3 className="condition-title">{cond.name}</h3>
                  {cond.nameSanskrit && (
                    <div className="condition-sanskrit font-devanagari">
                      {cond.nameSanskrit}
                    </div>
                  )}
                  <p className="condition-desc">{cond.shortSummary}</p>
                  
                  {cond.tags && cond.tags.length > 0 && (
                    <div className="condition-tags">
                      {cond.tags.map((tag) => (
                        <span key={tag} className="condition-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {cond.linkUrl ? (
                    <Link href={cond.linkUrl} className="condition-link">
                      Read about {cond.name.toLowerCase()}
                    </Link>
                  ) : (
                    <Link
                      href={`/services/${hub.canonicalSlug}/${cond.slug}/`}
                      className="condition-link"
                    >
                      Read about {cond.name.toLowerCase()}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 5. SIGNATURE TECHNIQUES */}
        {hub.signatures && hub.signatures.length > 0 && (
          <section className="signatures">
            <div className="signatures-inner">
              <div className="section-header">
                <div className="section-tag">Signature Techniques</div>
                <h2 className="section-title">
                  {hub.signaturesHeading || 'Two practices we are '}
                  <em>{hub.signaturesHeadingEm || 'particularly known for.'}</em>
                </h2>
                {hub.signaturesLede && (
                  <p className="section-lede">{hub.signaturesLede}</p>
                )}
              </div>

              <div className="signatures-grid">
                {hub.signatures.map((sig, idx) => (
                  <div
                    key={idx}
                    className={`signature-card ${sig.isLaser ? 'signature-card--laser' : ''}`}
                  >
                    <div className="signature-badge font-devanagari">
                      {sig.badgeLetter}
                    </div>
                    <div>
                      <div className="signature-eyebrow">{sig.eyebrow}</div>
                      <h3 className="signature-title">{sig.title}</h3>
                      <p className="signature-desc">{sig.desc}</p>
                      
                      {sig.features && sig.features.length > 0 && (
                        <div className="signature-features">
                          {sig.features.map((feat) => (
                            <span key={feat} className="signature-feature">
                              {feat}
                            </span>
                          ))}
                        </div>
                      )}

                      <Link href={sig.linkUrl} className="signature-link">
                        {sig.linkText}
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 6. SPECIALISTS */}
        <section className="specialists">
          <div className="section-header">
            <div className="section-tag">Under the Care Of</div>
            <h2 className="section-title">
              {hub.specialistsSection.heading}
              <em>{hub.specialistsSection.headingEm}</em>
            </h2>
            <p className="section-lede">{hub.specialistsSection.lede}</p>
          </div>

          <div
            className={`specialists-grid ${
              hub.specialistsSection.doctorSlugs.length === 1 ? 'specialists-grid--single' : ''
            }`}
          >
            {hub.specialistsSection.doctorSlugs.includes('dr-vipin') && (
              <article className="specialist">
                <div className="specialist-portrait">
                  <div className="specialist-portrait-inner">
                    <Image
                      src="/images/doctors/dr-vipin-tongale.jpg"
                      alt="Dr. Vipin Tongale - General Surgeon & Proctologist"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover object-center"
                      unoptimized
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
            )}

            {hub.specialistsSection.doctorSlugs.includes('dr-swati') && (
              <article className="specialist specialist-swati">
                <div className="specialist-portrait">
                  <div className="specialist-portrait-inner">
                    <Image
                      src="/images/doctors/dr-swati-tongale.jpg"
                      alt="Dr. Swati Tongale - Female Care Unit Lead"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover object-center"
                      unoptimized
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
            )}
          </div>
        </section>

        {/* 7. RELATED KNOWLEDGE PREVIEW */}
        {hub.resourcesSection && (
          <section className="knowledge-preview">
            <div className="knowledge-inner">
              <div className="section-header">
                <div className="section-tag">Understand Your Options</div>
                <h2 className="section-title">
                  {hub.resourcesSection.heading}
                  <em>{hub.resourcesSection.headingEm}</em>
                </h2>
                <p className="section-lede">{hub.resourcesSection.lede}</p>
              </div>

              <div className="knowledge-grid">
                {hub.resourcesSection.resources.map((res, idx) => (
                  <article key={idx} className="article-card">
                    <span className="article-type">{res.type}</span>
                    <h3 className="article-title">
                      <Link href={res.slug}>{res.title}</Link>
                    </h3>
                    <p className="article-excerpt">{res.excerpt}</p>
                    <div className="article-meta">
                      <span className="article-time">{res.readTime}</span>
                      <Link href={res.slug} className="article-more">
                        Read more →
                      </Link>
                    </div>
                  </article>
                ))}
              </div>

              <div className="knowledge-cta">
                <Link href="/knowledge/" className="btn btn-ghost">
                  Explore all knowledge articles
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* 8. FAQ SECTION */}
        {hub.faqs && hub.faqs.length > 0 && (
          <section className="faq">
            <div className="section-header">
              <div className="section-tag">Frequently Asked Questions</div>
              <h2 className="section-title">
                {hub.faqsHeading || 'Common questions, '}
                <em>{hub.faqsHeadingEm || 'honestly answered.'}</em>
              </h2>
              {hub.faqsLede && <p className="section-lede">{hub.faqsLede}</p>}
            </div>

            <div className="faq-list">
              {hub.faqs.map((faq, idx) => (
                <details key={idx} className="faq-item" open={idx === 0}>
                  <summary className="faq-question">{faq.question}</summary>
                  <div className="faq-answer">{faq.answer}</div>
                </details>
              ))}
            </div>
          </section>
        )}

        {/* 9. CTA SECTION */}
        <section className="cta-section">
          <div className="cta-inner">
            <div className="cta-devanagari font-devanagari">
              {hub.ctaDevanagari || 'आइए, मिलते हैं'}
            </div>
            <h2 className="cta-headline">
              {hub.ctaHeadline}
              <em>{hub.ctaHeadlineEm}</em>
            </h2>
            <p className="cta-lede">{hub.ctaLede}</p>
            <div className="cta-buttons">
              <Link href={hub.ctaPrimaryUrl} className="btn btn-primary">
                {hub.ctaPrimaryText}
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

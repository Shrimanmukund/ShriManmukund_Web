import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import {
  SERVICE_CATEGORIES,
  getServiceCategoryBySlug,
  DOCTORS,
} from '@/lib/data/content-store';

interface CategoryPageProps {
  params: {
    category: string;
  };
}

export function generateStaticParams() {
  return SERVICE_CATEGORIES.map((cat) => ({
    category: cat.slug,
  }));
}

export function generateMetadata({ params }: CategoryPageProps) {
  const category = getServiceCategoryBySlug(params.category);
  if (!category) return {};

  return {
    title: `${category.name} — Shri Manmukund Hospital, Amravati`,
    description: category.shortDescription,
  };
}

export default function ServiceCategoryPage({ params }: CategoryPageProps) {
  const category = getServiceCategoryBySlug(params.category);
  if (!category) {
    notFound();
  }

  const isSwatiCategory = category.slug === 'female-care';
  const isAnorectal = category.slug === 'anorectal-care';
  const leadDoctor = isSwatiCategory ? DOCTORS['dr-swati'] : DOCTORS['dr-vipin'];

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
              <div className="unit-hero-devanagari">
                {category.nameSanskrit || 'गुदविकार चिकित्सा'}
              </div>
              <h1 className="unit-hero-title">
                {isAnorectal
                  ? 'Advanced Anorectal Care, chosen '
                  : `${category.name}, chosen `}
                <em>honestly for the case.</em>
              </h1>
              <p className="unit-hero-lede">
                {isAnorectal
                  ? 'The full spectrum of anorectal treatment under one roof: conservative management, non-surgical OPD interventions, Ksharsutra, laser proctology, and modern surgery. The right choice for your case, not the technique that sells best.'
                  : category.shortDescription}
              </p>
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
              {isAnorectal
                ? 'The Advanced Anorectal Care Unit at Shri Manmukund Hospital treats the full range of anorectal conditions including piles, anal fissure, anal fistula (simple, complex, and recurrent), perianal abscess, pilonidal sinus, and rectal prolapse. Because we offer all treatment tiers under one roof, from conservative management through Ksharsutra, laser proctology, and conventional surgery, the recommendation you receive reflects your specific case rather than the limited techniques a specialist may be trained in.'
                : `The ${category.name} Unit at Shri Manmukund Hospital treats conditions ranging from early presentations to complex cases. Because we offer all treatment tiers under one roof—from conservative medical management and classical Ayurvedic therapies through Ksharsutra, laser proctology, and modern surgery—the recommendation you receive reflects your specific case rather than commercial bias toward any single technique.`}
            </p>
          </div>
        </section>

        {/* 3. TREATMENT TIERS */}
        <section className="tiers">
          <div className="tiers-inner">
            <div className="section-header">
              <div className="section-tag">Our Approach</div>
              <h2 className="section-title">
                Four tiers of care, applied <em>in the right order.</em>
              </h2>
              <p className="section-lede">
                Not every anorectal problem needs surgery. We start with what your case actually needs, and only move up the tiers when clinically appropriate.
              </p>
            </div>

            <div className="tier-ladder">
              <div className="tier-card">
                <div className="tier-num">01</div>
                <div className="tier-label">First Line</div>
                <h3 className="tier-title">Conservative &amp; Lifestyle</h3>
                <p className="tier-desc">
                  For early-stage cases and preventive care. Dietary correction, fibre supplementation, sitz baths, topical medications, and lifestyle guidance.
                </p>
                <div className="tier-examples">
                  <div className="tier-examples-label">When Applied</div>
                  <div className="tier-examples-list">
                    Grade I piles · Acute fissure · Early symptoms
                  </div>
                </div>
              </div>

              <div className="tier-card">
                <div className="tier-num">02</div>
                <div className="tier-label">Non-Surgical</div>
                <h3 className="tier-title">OPD Interventions</h3>
                <p className="tier-desc">
                  Office-based procedures that avoid surgery entirely. Rubber band ligation, injection sclerotherapy, Matra Basti for chronic fissure. Same-day, back to work next day.
                </p>
                <div className="tier-examples">
                  <div className="tier-examples-label">When Applied</div>
                  <div className="tier-examples-list">
                    Grade II–III piles · Chronic fissure · No sphincter involvement
                  </div>
                </div>
              </div>

              <div className="tier-card">
                <div className="tier-num">03</div>
                <div className="tier-label">Advanced</div>
                <h3 className="tier-title">Minimally Invasive</h3>
                <p className="tier-desc">
                  Ksharsutra (classical, IFTAK, Partial Fistulectomy variant) and Laser Proctology (LHP, FiLaC, SiLaC). Sphincter-preserving. Modern precision meets classical tradition.
                </p>
                <div className="tier-examples">
                  <div className="tier-examples-label">When Applied</div>
                  <div className="tier-examples-list">
                    Fistula · Recurrent cases · Complex proctology
                  </div>
                </div>
              </div>

              <div className="tier-card">
                <div className="tier-num">04</div>
                <div className="tier-label">Conventional</div>
                <h3 className="tier-title">Surgical Solutions</h3>
                <p className="tier-desc">
                  Traditional surgical approaches where they are genuinely the best option for the case. Full pre-operative workup, in-hospital care, structured post-operative follow-up.
                </p>
                <div className="tier-examples">
                  <div className="tier-examples-label">When Applied</div>
                  <div className="tier-examples-list">
                    Grade IV piles · Extensive prolapse · Selected fistula
                  </div>
                </div>
              </div>
            </div>

            <p className="tiers-note">
              In practice, over half of our patients do not need Tier 3 or Tier 4 care. The most valuable thing we can offer is the honest starting point, not the most expensive one.
            </p>
          </div>
        </section>

        {/* 4. CONDITIONS */}
        <section className="conditions" id="conditions">
          <div className="section-header">
            <div className="section-tag">Conditions We Treat</div>
            <h2 className="section-title">
              {category.conditions.length === 9
                ? 'Nine conditions handled '
                : `${category.conditions.length} conditions handled `}
              <em>under one roof.</em>
            </h2>
            <p className="section-lede">
              From the most common presentations to the most complex recurrent cases. Every condition is examined, staged, and matched to the appropriate treatment tier.
            </p>
          </div>

          <div className="conditions-grid">
            {category.conditions.map((cond, idx) => (
              <div key={cond.slug} className="condition-card">
                <div className="condition-icon">
                  {cond.iconLetter || iconLetters[idx % iconLetters.length]}
                </div>
                <h3 className="condition-title">{cond.name}</h3>
                <div className="condition-sanskrit">
                  {cond.nameSanskrit ||
                    (cond.slug === 'piles' || cond.slug === 'piles-haemorrhoids'
                      ? 'अर्श'
                      : cond.slug === 'anal-fissure'
                      ? 'परिकर्तिका'
                      : cond.slug === 'anal-fistula'
                      ? 'भगन्दर'
                      : cond.slug === 'recurrent-anal-fistula' || cond.slug === 'recurrent-fistula'
                      ? 'आवर्ती भगन्दर'
                      : cond.slug === 'perianal-abscess'
                      ? 'विद्रधि'
                      : cond.slug === 'pilonidal-sinus'
                      ? 'नाड़ी व्रण'
                      : cond.slug === 'rectal-prolapse'
                      ? 'गुदभ्रंश'
                      : cond.slug === 'female-proctology'
                      ? 'महिला गुदविकार'
                      : cond.slug === 'paediatric-anorectal'
                      ? 'बाल गुदविकार'
                      : '')}
                </div>
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
                  {cond.linkText ||
                    (cond.slug === 'female-proctology'
                      ? 'Explore female proctology'
                      : `Read about ${cond.name.toLowerCase()}`)}
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* 5. SIGNATURE TECHNIQUES */}
        <section className="signatures">
          <div className="signatures-inner">
            <div className="section-header">
              <div className="section-tag">Signature Techniques</div>
              <h2 className="section-title">
                Two practices we are <em>particularly known for.</em>
              </h2>
              <p className="section-lede">
                Both are minimally invasive and sphincter-preserving. The right choice depends on your case, and we offer both so the choice is genuine.
              </p>
            </div>

            <div className="signatures-grid">
              <div className="signature-card">
                <div className="signature-badge">क्ष</div>
                <div>
                  <div className="signature-eyebrow">Classical Signature</div>
                  <h3 className="signature-title">Ksharsutra &amp; Its Specialised Variants</h3>
                  <p className="signature-desc">
                    Two-thousand-year-old technique combined with modern refinements. Classical Ksharsutra, IFTAK for complex cases, and Partial Fistulectomy with Ksharsutra Ligation. Ksharkarma also available for internal piles.
                  </p>
                  <div className="signature-features">
                    <span className="signature-feature">Classical Ksharsutra</span>
                    <span className="signature-feature">IFTAK</span>
                    <span className="signature-feature">PF-KsL</span>
                    <span className="signature-feature">Ksharkarma</span>
                  </div>
                  <Link
                    href="/knowledge/playbooks/ksharsutra-day-1-to-complete-healing/"
                    className="signature-link"
                  >
                    Explore Ksharsutra hub
                  </Link>
                </div>
              </div>

              <div className="signature-card signature-card--laser">
                <div className="signature-badge">ल</div>
                <div>
                  <div className="signature-eyebrow">Modern Signature</div>
                  <h3 className="signature-title">Laser Proctology</h3>
                  <p className="signature-desc">
                    Modern minimally invasive suite for anorectal conditions. Laser Haemorrhoidoplasty for piles, FiLaC for fistula, laser fissure treatment, and SiLaC for pilonidal sinus. Faster recovery.
                  </p>
                  <div className="signature-features">
                    <span className="signature-feature">LHP</span>
                    <span className="signature-feature">FiLaC</span>
                    <span className="signature-feature">SiLaC</span>
                    <span className="signature-feature">Laser Fissure</span>
                  </div>
                  <Link
                    href="/knowledge/articles/laser-haemorrhoidoplasty-is-faster-recovery-worth-cost/"
                    className="signature-link"
                  >
                    Explore laser proctology hub
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. SPECIALISTS */}
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
            <div className="specialist-card">
              <div className="specialist-portrait">
                <div className="specialist-portrait-inner">
                  <Image
                    src="/images/doctors/dr-vipin-tongale.jpg"
                    alt="Dr. Vipin Tongale"
                    width={110}
                    height={110}
                    className="w-full h-full object-cover object-top rounded-full"
                  />
                </div>
              </div>
              <div>
                <h3 className="specialist-name">Dr. Vipin Tongale</h3>
                <div className="specialist-role">Chief Consultant · Proctology</div>
                <div className="specialist-creds">MS Shalya Tantra · PhD</div>
                <Link href="/dr-vipin/" className="specialist-link">
                  Read Dr. Vipin's profile
                </Link>
              </div>
            </div>

            <div className="specialist-card specialist-card--swati">
              <div className="specialist-portrait">
                <div className="specialist-portrait-inner">
                  <Image
                    src="/images/doctors/dr-swati-tongale.jpg"
                    alt="Dr. Swati Tongale"
                    width={110}
                    height={110}
                    className="w-full h-full object-cover object-top rounded-full"
                  />
                </div>
              </div>
              <div>
                <h3 className="specialist-name">Dr. Swati Tongale</h3>
                <div className="specialist-role">Female Care Lead · Proctology</div>
                <div className="specialist-creds">MS Shalya Tantra</div>
                <Link href="/dr-swati/" className="specialist-link">
                  Read Dr. Swati's profile
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 7. KNOWLEDGE PREVIEW */}
        <section className="knowledge-preview">
          <div className="knowledge-inner">
            <div className="section-header">
              <div className="section-tag">Understand Your Options</div>
              <h2 className="section-title">
                Before you decide, <em>read what we've written.</em>
              </h2>
              <p className="section-lede">
                Because good decisions come from understanding, not from being sold. Three articles from our knowledge hub, curated for anorectal patients.
              </p>
            </div>

            <div className="knowledge-grid">
              <article className="article-card">
                <span className="article-type">Article</span>
                <h3 className="article-title">
                  <Link href="/knowledge/articles/piles-vs-fissure-vs-fistula-how-to-tell-them-apart/">
                    Piles vs fissure vs fistula: how to tell them apart
                  </Link>
                </h3>
                <p className="article-excerpt">
                  Three of the most common anorectal conditions, often confused. A clear comparison of symptoms, causes, and treatments to help you understand what you might be dealing with.
                </p>
                <div className="article-meta">
                  <span className="article-time">8 min read</span>
                  <Link
                    href="/knowledge/articles/piles-vs-fissure-vs-fistula-how-to-tell-them-apart/"
                    className="article-more"
                  >
                    Read more →
                  </Link>
                </div>
              </article>

              <article className="article-card">
                <span className="article-type">Playbook</span>
                <h3 className="article-title">
                  <Link href="/knowledge/playbooks/ksharsutra-day-1-to-complete-healing/">
                    Ksharsutra treatment, week by week
                  </Link>
                </h3>
                <p className="article-excerpt">
                  A practical guide for patients considering or currently undergoing Ksharsutra. From first application through complete healing, with day-by-day expectations and aftercare.
                </p>
                <div className="article-meta">
                  <span className="article-time">12 min read</span>
                  <Link
                    href="/knowledge/playbooks/ksharsutra-day-1-to-complete-healing/"
                    className="article-more"
                  >
                    Read more →
                  </Link>
                </div>
              </article>

              <article className="article-card">
                <span className="article-type">Article</span>
                <h3 className="article-title">
                  <Link href="/knowledge/articles/why-rectal-bleeding-should-never-be-ignored/">
                    Why rectal bleeding should never be ignored
                  </Link>
                </h3>
                <p className="article-excerpt">
                  Bleeding during or after passing stool is commonly assumed to be piles. Often it is. Sometimes it is something more serious. Here is why every episode deserves attention.
                </p>
                <div className="article-meta">
                  <span className="article-time">6 min read</span>
                  <Link
                    href="/knowledge/articles/why-rectal-bleeding-should-never-be-ignored/"
                    className="article-more"
                  >
                    Read more →
                  </Link>
                </div>
              </article>
            </div>

            <div className="knowledge-cta">
              <Link href="/knowledge/" className="btn btn-ghost">
                Explore all knowledge articles
              </Link>
            </div>
          </div>
        </section>

        {/* 8. CTA */}
        <section className="cta-section">
          <div className="cta-inner">
            <div className="cta-devanagari">आइए, मिलते हैं</div>
            <h2 className="cta-headline">
              Ready for an honest <em>{category.name.toLowerCase()} consultation?</em>
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


import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  getAllKnowledgePieces,
  DOCTORS,
  getAllPages,
} from '@/lib/data/content-store';
import { generateArticleSchema } from '@/lib/seo/schemas';
import { MarkdownRenderer } from '@/components/content/MarkdownRenderer';
import { ShareBar } from '@/components/knowledge/ShareBar';

interface KnowledgePiecePageProps {
  params: {
    cluster: string;
    slug: string;
  };
}

export function generateStaticParams() {
  const pieces = getAllKnowledgePieces();
  return pieces.map((p) => ({
    cluster: p.cluster,
    slug: p.slug,
  }));
}

export function generateMetadata({ params }: KnowledgePiecePageProps) {
  const rawPage = getAllPages().find((p) =>
    p.url.includes(`/knowledge/${params.cluster}/${params.slug}/`)
  );
  const pieces = getAllKnowledgePieces();
  const piece = pieces.find((p) => p.slug === params.slug);

  if (!rawPage && !piece) return {};

  return {
    title: rawPage?.metaTitle || piece?.title || 'Knowledge Guide | Shri Manmukund Hospital',
    description: rawPage?.metaDescription || piece?.excerpt,
  };
}

export default function KnowledgeDetailPage({ params }: KnowledgePiecePageProps) {
  const rawPage = getAllPages().find((p) =>
    p.url.includes(`/knowledge/${params.cluster}/${params.slug}/`)
  );
  const pieces = getAllKnowledgePieces();
  const piece = pieces.find((p) => p.slug === params.slug);

  if (!rawPage && !piece && params.slug !== 'ksharsutra-day-1-to-complete-healing') {
    notFound();
  }

  const isKsharsutraPlaybook =
    params.slug === 'ksharsutra-day-1-to-complete-healing' ||
    params.slug.includes('ksharsutra');

  const title = isKsharsutraPlaybook
    ? 'Ksharsutra treatment, week by week'
    : rawPage
    ? rawPage.title
    : piece?.title || 'Clinical Guide';

  const excerpt = isKsharsutraPlaybook
    ? 'A practical, day-by-day guide for patients considering or currently undergoing Ksharsutra. What to expect at each stage, how to prepare, and when to call the hospital.'
    : rawPage?.metaDescription || piece?.excerpt || '';

  const answerFirstSummary = isKsharsutraPlaybook
    ? 'Ksharsutra treatment for anal fistula typically takes 6 to 8 weeks from first application to complete healing. It involves weekly changes of a medicated thread (Kshar Sutra) that gradually cuts through and heals the fistula tract. Most patients continue working throughout, with 2 to 3 days of light activity around each thread change. Pain is manageable with oral analgesics. Complete healing rates are excellent when the technique is applied correctly and follow-up is maintained.'
    : rawPage?.answerFirstSummary || piece?.excerpt || '';

  const bodyContent = rawPage?.bodyMarkdown || piece?.bodyMarkdown || '';
  const clusterLabel =
    params.cluster.charAt(0).toUpperCase() + params.cluster.slice(1);
  const clusterSingular = params.cluster.endsWith('s')
    ? clusterLabel.slice(0, -1)
    : clusterLabel;

  const authorSlug = piece?.authorSlug || 'dr-vipin';
  const author = DOCTORS[authorSlug] || DOCTORS['dr-vipin'];
  const reviewer = authorSlug === 'dr-vipin' ? DOCTORS['dr-swati'] : DOCTORS['dr-vipin'];

  const devanagariWatermark = isKsharsutraPlaybook
    ? 'क्षारसूत्र'
    : params.slug.includes('piles')
    ? 'अर्श'
    : params.slug.includes('fissure')
    ? 'परिकर्तिका'
    : params.slug.includes('fistula')
    ? 'भगन्दर'
    : params.slug.includes('garbh')
    ? 'गर्भ'
    : params.slug.includes('uttarbasti')
    ? 'उत्तरबस्ती'
    : 'ज्ञान संग्रह';

  const relatedPieces = pieces
    .filter((p) => p.slug !== params.slug)
    .slice(0, 3);

  const pieceData = {
    slug: params.slug,
    cluster: params.cluster as any,
    title,
    authorSlug,
    publishedDate: '2026-07-15',
    lastUpdatedDate: '2026-09-02',
    estimatedReadTimeMins: piece?.estimatedReadTimeMins || 12,
    excerpt,
    bodyMarkdown: bodyContent,
    categories: [clusterLabel, 'Clinical Care'],
    tags: ['Amravati', 'Surgery'],
    metaTitle: `${title} | Shri Manmukund Hospital`,
    metaDescription: excerpt,
  };

  const schema = generateArticleSchema(pieceData);

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* 1. PROGRESS BAR */}
      <div className="progress-bar" style={{ width: '45%' }}></div>

      {/* 2. ARTICLE HEADER */}
      <section className="article-header">
        <div className="breadcrumb">
          <Link href="/">Home</Link>
          <span className="breadcrumb-sep">·</span>
          <Link href="/knowledge/">Knowledge</Link>
          <span className="breadcrumb-sep">·</span>
          <Link href={`/knowledge/${params.cluster}/`}>{clusterLabel}</Link>
          <span className="breadcrumb-sep">·</span>
          <span>
            {isKsharsutraPlaybook ? 'Ksharsutra Week by Week' : title}
          </span>
        </div>

        <div className="article-badges">
          <span className="article-badge">{clusterSingular}</span>
          <span className="article-badge article-badge--topic">
            {isKsharsutraPlaybook ? 'Ksharsutra' : 'Clinical Care'}
          </span>
        </div>

        <h1 className="article-title">
          {isKsharsutraPlaybook ? (
            <>
              Ksharsutra treatment, <em>week by week</em>
            </>
          ) : (
            title
          )}
        </h1>

        <p className="article-deck">{excerpt}</p>

        <div className="article-meta">
          <div className="article-authors">
            <div className="author-avatars">
              <div className="author-avatar">
                {authorSlug === 'dr-swati' ? 'S' : 'V'}
              </div>
              <div className="author-avatar author-avatar--swati">
                {authorSlug === 'dr-swati' ? 'V' : 'S'}
              </div>
            </div>
            <div className="article-author-text">
              <div className="article-author-line">
                Dr. {authorSlug === 'dr-swati' ? 'Swati Tongale' : 'Vipin Tongale'}
              </div>
              <div className="article-reviewer-line">
                Medically reviewed by Dr.{' '}
                {authorSlug === 'dr-swati' ? 'Vipin Tongale' : 'Swati Tongale'}
              </div>
            </div>
          </div>

          <div className="article-meta-divider"></div>

          <div className="article-meta-item">
            <span className="article-meta-label">Published</span>
            <span className="article-meta-value">15 July 2026</span>
          </div>

          <div className="article-meta-item">
            <span className="article-meta-label">Updated</span>
            <span className="article-meta-value">2 September 2026</span>
          </div>

          <div className="article-meta-item">
            <span className="article-meta-label">Reading Time</span>
            <span className="article-meta-value">
              {piece?.estimatedReadTimeMins || 12} minutes
            </span>
          </div>
        </div>
      </section>

      {/* 3. HERO VISUAL */}
      <div className="article-hero-visual">
        <div className="article-hero-visual-inner">
          <div className="article-hero-visual-devanagari">{devanagariWatermark}</div>
        </div>
      </div>

      {/* 4. ANSWER-FIRST SUMMARY */}
      {answerFirstSummary && (
        <section className="answer-summary">
          <div className="answer-summary-inner">
            <div className="answer-summary-label">In one paragraph</div>
            <p className="answer-summary-text">{answerFirstSummary}</p>
          </div>
        </section>
      )}

      {/* 5. TABLE OF CONTENTS */}
      <section className="toc">
        <div className="toc-inner">
          <div className="toc-title">In this guide</div>
          <ol className="toc-list">
            <li>
              <a href="#section-1">What is Ksharsutra and how does it work</a>
            </li>
            <li>
              <a href="#section-2">Who is Ksharsutra suitable for</a>
            </li>
            <li>
              <a href="#section-3">Before you start: preparation week</a>
            </li>
            <li>
              <a href="#section-4">Week 1: First thread application</a>
            </li>
            <li>
              <a href="#section-5">Weeks 2 to 4: Continued applications</a>
            </li>
            <li>
              <a href="#section-6">Weeks 5 to 6: Cutting through</a>
            </li>
            <li>
              <a href="#section-7">Weeks 7 to 8: Complete healing</a>
            </li>
            <li>
              <a href="#section-8">What to expect throughout</a>
            </li>
            <li>
              <a href="#section-9">When to call the hospital</a>
            </li>
            <li>
              <a href="#section-10">After healing: preventing recurrence</a>
            </li>
          </ol>
        </div>
      </section>

      {/* 6. ARTICLE BODY */}
      <article className="article-body">
        {isKsharsutraPlaybook ? (
          <>
            <h2 id="section-1">
              What is Ksharsutra and <em>how does it work?</em>
            </h2>
            <p>
              Ksharsutra is a <strong>two-thousand-year-old Ayurvedic surgical technique</strong> refined in modern practice, used primarily for the treatment of anal fistula. It involves a medicated thread — the Ksharsutra — that is passed through the fistula tract and tied. Over the following weeks, the thread slowly cuts through the fistula tissue while simultaneously promoting healing behind it.
            </p>
            <p>
              Unlike conventional fistula surgery, Ksharsutra <strong>preserves the anal sphincter</strong>. This is crucial: the sphincter controls continence, and damage to it during traditional fistula surgery is a well-documented complication. Because Ksharsutra works gradually and heals as it cuts, this risk is substantially reduced.
            </p>

            <div className="callout callout-info">
              <div className="callout-icon">i</div>
              <div className="callout-body">
                <div className="callout-title">Why we recommend Ksharsutra</div>
                <p>
                  Ksharsutra is not the fastest fistula treatment available. Laser (FiLaC) is faster in terms of one-time procedure. But Ksharsutra has significantly lower recurrence rates for complex fistulae, and near-zero risk of sphincter damage. For most patients with straightforward fistula, it remains our first recommendation.
                </p>
              </div>
            </div>

            <h2 id="section-2">
              Who is <em>Ksharsutra suitable for?</em>
            </h2>
            <p>Ksharsutra is our recommended approach for:</p>
            <ul>
              <li>
                <strong>Simple anal fistula</strong> (low, single tract)
              </li>
              <li>
                <strong>Complex fistula</strong> with multiple tracts or branching
              </li>
              <li>
                <strong>Recurrent fistula</strong> that has failed previous surgical treatment
              </li>
              <li>
                <strong>High-position fistula</strong> where traditional surgery would risk sphincter damage
              </li>
              <li>
                Patients who <strong>cannot afford long time off work</strong> since work is possible throughout
              </li>
              <li>
                Patients who prefer to <strong>avoid a single major surgery</strong>
              </li>
            </ul>
            <p>
              It may not be the best choice if you have very superficial fistula (where a simple lay-open procedure would heal in days), or if you are unable to attend weekly hospital visits for 6 to 8 weeks.
            </p>

            <h2 id="section-3">
              Before you start: <em>preparation week</em>
            </h2>
            <div className="week-block">
              <div className="week-block-header">
                <span className="week-block-num">Week 0</span>
                <h3 className="week-block-title">Preparation and pre-procedure workup</h3>
              </div>
              <p>
                Once Ksharsutra has been recommended after your consultation, you will be scheduled for a preparation week. During this time we will complete:
              </p>
              <ul>
                <li>Blood tests including HbA1c (if you are diabetic, your sugar control must be optimised first)</li>
                <li>MRI fistulogram or endoanal ultrasound if the anatomy is complex</li>
                <li>Detailed counselling about what to expect at each stage</li>
                <li>Dietary preparation guidance (high fibre, plenty of water, avoiding spicy and oily foods)</li>
              </ul>
              <p>
                You will also be given a written booklet to take home, so that family members can support you through the treatment. If you have any concerns after reading it, you can call us before proceeding.
              </p>
            </div>

            <h2 id="section-4">
              Week 1: <em>First thread application</em>
            </h2>
            <div className="week-block">
              <div className="week-block-header">
                <span className="week-block-num">Week 1</span>
                <h3 className="week-block-title">Initial thread application under anaesthesia</h3>
              </div>
              <p>
                The first application is done under <strong>spinal or short general anaesthesia</strong>, since we need to carefully identify the entire fistula tract, its internal opening, and any branches. This is typically a day-care procedure. You come in the morning and go home the same evening.
              </p>
              <h4>What happens on the day</h4>
              <ul>
                <li>Arrive at hospital fasted (no food for 6 hours before)</li>
                <li>Pre-procedure examination and consent</li>
                <li>Procedure itself takes 30 to 45 minutes</li>
                <li>Recovery for 2 to 3 hours</li>
                <li>Discharge with detailed post-procedure care instructions</li>
              </ul>
              <h4>The next 3 days</h4>
              <ul>
                <li>Mild to moderate discomfort, managed with oral pain medication</li>
                <li>Some clear or slightly blood-tinged discharge from the area — this is normal</li>
                <li>Rest for 2 days, then gradual return to normal light activity</li>
                <li>Sitz baths (warm water) 2 to 3 times daily</li>
                <li>No heavy lifting, no cycling, no long walks</li>
              </ul>
            </div>

            <div className="callout callout-tip">
              <div className="callout-icon">✓</div>
              <div className="callout-body">
                <div className="callout-title">A quiet week works best</div>
                <p>
                  Schedule your Week 1 for a time when you can genuinely rest for 3 to 4 days. Even though pain is manageable, your body is healing, and stressing it with meetings or travel slows down the process. Many of our patients take Week 1 as leave and are back to work by Week 2.
                </p>
              </div>
            </div>

            <h2 id="section-5">
              Weeks 2 to 4: <em>continued applications</em>
            </h2>
            <div className="week-block">
              <div className="week-block-header">
                <span className="week-block-num">Weeks 2 – 4</span>
                <h3 className="week-block-title">Weekly thread changes in OPD</h3>
              </div>
              <p>
                From Week 2 onwards, the thread is changed <strong>once every 7 days in the OPD</strong>, without anaesthesia. Each change takes about 10 to 15 minutes. There is brief discomfort during the change itself, but no post-procedure pain most times.
              </p>
              <p>Between changes, you can continue almost all normal activities:</p>
              <ul>
                <li>
                  <strong>Work:</strong> Desk work is fine from the day of the change. Manual work with heavy lifting should still be avoided.
                </li>
                <li>
                  <strong>Travel:</strong> Short trips are fine. Long-distance travel can be timed around thread change days.
                </li>
                <li>
                  <strong>Sitting:</strong> A soft cushion helps for long sitting periods. Avoid hard chairs.
                </li>
                <li>
                  <strong>Bathing:</strong> Regular showers are fine. Sitz baths after each bowel movement.
                </li>
                <li>
                  <strong>Diet:</strong> Continue high fibre, plenty of water. Avoid constipation-inducing foods.
                </li>
              </ul>
            </div>

            <div className="pull-quote">
              <p>
                Ksharsutra is a slow treatment that lets you keep living your life. Most of our patients tell us, by Week 3, that they had expected it to be harder than it is.
              </p>
              <span className="pull-quote-attr">Dr. Vipin Tongale</span>
            </div>

            <h2 id="section-6">
              Weeks 5 to 6: <em>cutting through</em>
            </h2>
            <div className="week-block">
              <div className="week-block-header">
                <span className="week-block-num">Weeks 5 – 6</span>
                <h3 className="week-block-title">Thread completes the cut, healing begins</h3>
              </div>
              <p>By Week 5 or 6, the thread has progressively cut through most of the fistula tract. You may notice:</p>
              <ul>
                <li>The area where the fistula was is beginning to feel firmer and less sensitive</li>
                <li>Discharge has reduced substantially</li>
                <li>The thread may fall off on its own, which is a sign that cutting is complete</li>
                <li>New tissue can be seen forming where the tract was</li>
              </ul>
              <p>
                We continue weekly follow-up during this phase, but the interventions become minimal — mainly monitoring healing progress.
              </p>
            </div>

            <h2 id="section-7">
              Weeks 7 to 8: <em>complete healing</em>
            </h2>
            <div className="week-block">
              <div className="week-block-header">
                <span className="week-block-num">Weeks 7 – 8</span>
                <h3 className="week-block-title">Final healing and discharge from care</h3>
              </div>
              <p>By Week 7 or 8, the fistula tract has completely healed. The area is examined at your final visit. If healing is confirmed:</p>
              <ul>
                <li>You are formally discharged from active Ksharsutra care</li>
                <li>A preventive care plan is given for long-term maintenance</li>
                <li>Follow-up review scheduled at 3 months and 6 months</li>
                <li>You are given a hospital contact for any concerns</li>
              </ul>
              <p>
                Occasionally, complex or high-position fistulae may need one or two additional weeks. Very rarely, a second Ksharsutra course may be needed for particularly deep tracts. Your case will determine this — and if it is likely, we will tell you at the start, not surprise you at Week 8.
              </p>
            </div>

            <h2 id="section-8">
              What to expect <em>throughout</em>
            </h2>
            <h3>Pain</h3>
            <p>
              Mild to moderate. Well controlled with oral paracetamol or, occasionally, weak analgesics for the first few days after Week 1. Most patients rate pain at 3 to 4 out of 10 during the first week, dropping to 1 to 2 out of 10 for subsequent weeks.
            </p>
            <h3>Discharge</h3>
            <p>
              Some clear or slightly blood-tinged discharge is normal, especially in the first 3 weeks. It progressively reduces. Wearing a small gauze dressing is often helpful. Yellow or foul-smelling discharge is not normal and requires a call to the hospital.
            </p>
            <h3>Bowel movements</h3>
            <p>
              Continue as normal. Do not delay bowel movements, and do not strain. Fibre and water are your priorities. Sitz baths after each bowel movement help substantially.
            </p>
            <h3>Work and daily life</h3>
            <p>
              Most patients continue work from Week 2 onwards. Long meetings, long drives, and long flights are best avoided in Week 1. From Week 3 onwards, most activities can be resumed with judgement.
            </p>

            <h2 id="section-9">
              When to <em>call the hospital</em>
            </h2>
            <div className="callout callout-warning">
              <div className="callout-icon">!</div>
              <div className="callout-body">
                <div className="callout-title">Call us immediately if any of these occur</div>
                <p>
                  Any of the following symptoms warrant an urgent call to our emergency line at{' '}
                  <strong>9405404492</strong>:
                </p>
                <ul style={{ marginTop: '0.5rem' }}>
                  <li>Fever above 100°F (37.8°C)</li>
                  <li>Heavy bleeding (soaking through pads within an hour)</li>
                  <li>Severe pain that is not controlled by oral medication</li>
                  <li>Foul-smelling discharge</li>
                  <li>Difficulty urinating or passing stool</li>
                  <li>Signs of infection (spreading redness, swelling, warmth)</li>
                </ul>
              </div>
            </div>
            <p>
              For non-urgent questions or reassurance, our appointment line at <strong>8208927917</strong> is available during OPD hours.
            </p>

            <h2 id="section-10">
              After healing: <em>preventing recurrence</em>
            </h2>
            <p>
              Once healed, your fistula is unlikely to recur if the underlying factors that led to it are addressed. This is why we do not stop at healing. Every Ksharsutra patient receives a preventive care plan that includes:
            </p>
            <ol>
              <li>
                <strong>Long-term dietary guidance:</strong> High fibre, adequate water, and avoiding constipation as a permanent priority
              </li>
              <li>
                <strong>Local hygiene:</strong> Gentle perianal cleaning after every bowel movement, avoiding rough wiping
              </li>
              <li>
                <strong>Prompt attention to any anal abscess or swelling</strong> in future, since untreated abscesses are the most common source of new fistulae
              </li>
              <li>
                <strong>Annual review:</strong> A quick anorectal examination once a year to catch any early recurrence
              </li>
              <li>
                <strong>Blood sugar control</strong> if you are diabetic (diabetes substantially increases fistula risk)
              </li>
            </ol>
            <p>
              With this care, most patients never see a fistula again. And if it does happen, you know exactly where to come.
            </p>
            <h3>A final note</h3>
            <p>
              Ksharsutra requires <strong>patience</strong>. It is not the fastest treatment. But it is one of the most effective, safest, and most sphincter-preserving options available for fistula. Two thousand years of clinical experience, refined by modern research, applied honestly to the case in front of us. If you are considering Ksharsutra, we are happy to discuss whether it is genuinely the right choice for you.
            </p>
          </>
        ) : (
          <MarkdownRenderer content={bodyContent} />
        )}
      </article>

      {/* 7. MEDICAL REVIEW DISCLOSURE */}
      <section className="medical-review">
        <div className="medical-review-inner">
          <div className="medical-review-icon">✓</div>
          <div>
            <div className="medical-review-label">Medically Reviewed</div>
            <p className="medical-review-text">
              This article has been written and medically reviewed by{' '}
              <strong>
                Dr. {authorSlug === 'dr-swati' ? 'Swati Tongale (MS Ayurveda Shalya Tantra)' : 'Vipin Tongale (MS Ayurveda Shalya Tantra, PhD)'}
              </strong>{' '}
              and{' '}
              <strong>
                Dr. {authorSlug === 'dr-swati' ? 'Vipin Tongale (MS Ayurveda Shalya Tantra, PhD)' : 'Swati Tongale (MS Ayurveda Shalya Tantra)'}
              </strong>
              .
            </p>
            <p className="medical-review-meta">
              Published 15 July 2026 · Last reviewed and updated 2 September 2026 · Next scheduled review: March 2027. If you have questions about the content, please call our team at 8208927917.
            </p>
          </div>
        </div>
      </section>

      {/* 8. AUTHOR BIO */}
      <section className="author-bio">
        <Link href={`/${authorSlug === 'dr-swati' ? 'dr-swati' : 'dr-vipin'}/`} className="author-bio-inner">
          <div className="author-bio-portrait">
            <div className="author-bio-portrait-inner"></div>
          </div>
          <div>
            <div className="author-bio-label">Written by</div>
            <h3 className="author-bio-name">
              Dr. {authorSlug === 'dr-swati' ? 'Swati Tongale' : 'Vipin Tongale'}
            </h3>
            <div className="author-bio-role">
              {authorSlug === 'dr-swati'
                ? 'Ayurvedic Surgeon & Female Proctologist · MS Shalya Tantra'
                : 'General Surgeon & Proctologist · MS Shalya Tantra, PhD'}
            </div>
            <p className="author-bio-text">
              {authorSlug === 'dr-swati'
                ? 'Specialist Female Ayurvedic Surgeon and Proctologist in Vidarbha. Expert in female anorectal conditions and classical Uttarbasti protocols. Co-founder of Shri Manmukund Hospital.'
                : 'Fifteen years of dedicated proctology and integrated surgical practice in Amravati. PhD research on Apamarga Kshara for internal piles. Co-founder of Shri Manmukund Hospital.'}
            </p>
            <span className="author-bio-link">
              Read Dr. {authorSlug === 'dr-swati' ? 'Swati' : 'Vipin'}&apos;s full profile
            </span>
          </div>
        </Link>
      </section>

      {/* 9. SHARE BAR */}
      <ShareBar title={title} />

      {/* 10. RELATED ARTICLES */}
      <section className="related">
        <div className="related-inner">
          <div className="related-header">
            <div className="section-tag">Continue Reading</div>
            <h2 className="section-title">
              More on <em>{isKsharsutraPlaybook ? 'Ksharsutra and fistula.' : 'integrated care.'}</em>
            </h2>
          </div>

          <div className="related-grid">
            {isKsharsutraPlaybook ? (
              <>
                <article className="related-card">
                  <div className="related-card-image">
                    <div className="related-card-devanagari">भ</div>
                  </div>
                  <div className="related-card-body">
                    <div className="related-card-badges">
                      <span className="related-card-type">Article</span>
                      <span className="related-card-topic">Fistula</span>
                    </div>
                    <h3 className="related-card-title">
                      <Link href="/knowledge/articles/piles-vs-fissure-vs-fistula/">
                        Piles vs fissure vs fistula: how to tell them apart
                      </Link>
                    </h3>
                    <p className="related-card-excerpt">
                      The three most common anorectal conditions, often confused. A clear comparison of symptoms and treatments.
                    </p>
                    <div className="related-card-footer">
                      <span className="related-card-author">Dr. Vipin</span>
                      <span className="related-card-time">8 min</span>
                    </div>
                  </div>
                </article>

                <article className="related-card">
                  <div className="related-card-image related-card-image--gold">
                    <div className="related-card-devanagari">IFTAK</div>
                  </div>
                  <div className="related-card-body">
                    <div className="related-card-badges">
                      <span className="related-card-type">Article</span>
                      <span className="related-card-topic">Recurrent Fistula</span>
                    </div>
                    <h3 className="related-card-title">
                      <Link href="/knowledge/articles/iftak-for-recurrent-fistula/">
                        IFTAK for recurrent fistula: when standard Ksharsutra needs a modification
                      </Link>
                    </h3>
                    <p className="related-card-excerpt">
                      A refined variant of Ksharsutra for complex and recurrent fistula cases. When it is indicated.
                    </p>
                    <div className="related-card-footer">
                      <span className="related-card-author">Dr. Vipin</span>
                      <span className="related-card-time">7 min</span>
                    </div>
                  </div>
                </article>

                <article className="related-card">
                  <div className="related-card-image related-card-image--rose">
                    <div className="related-card-devanagari">पथ्य</div>
                  </div>
                  <div className="related-card-body">
                    <div className="related-card-badges">
                      <span className="related-card-type">Patient Guide</span>
                      <span className="related-card-topic">Recovery</span>
                    </div>
                    <h3 className="related-card-title">
                      <Link href="/knowledge/articles/diet-after-anorectal-surgery/">
                        Post-procedure diet: eating for good healing
                      </Link>
                    </h3>
                    <p className="related-card-excerpt">
                      The Ayurvedic pathya-apathya framework for post-surgical recovery. Simple, practical food guidance.
                    </p>
                    <div className="related-card-footer">
                      <span className="related-card-author">Dr. Vipin</span>
                      <span className="related-card-time">6 min</span>
                    </div>
                  </div>
                </article>
              </>
            ) : (
              relatedPieces.map((rel, idx) => {
                const cleanRelTitle = rel.title.replace(/^(Article|Playbook|Whitepaper|Guide):\s*/i, '');
                return (
                  <article key={rel.slug} className="related-card">
                    <div
                      className={`related-card-image ${
                        idx === 1
                          ? 'related-card-image--gold'
                          : idx === 2
                          ? 'related-card-image--rose'
                          : ''
                      }`}
                    >
                      <div className="related-card-devanagari">
                        {idx === 0 ? 'भ' : idx === 1 ? 'IFTAK' : 'पथ्य'}
                      </div>
                    </div>
                    <div className="related-card-body">
                      <div className="related-card-badges">
                        <span className="related-card-type">{rel.cluster.charAt(0).toUpperCase() + rel.cluster.slice(1, -1)}</span>
                        <span className="related-card-topic">
                          {idx === 0 ? 'Fistula' : idx === 1 ? 'Recurrent Fistula' : 'Patient Guide'}
                        </span>
                      </div>
                      <h3 className="related-card-title">
                        <Link href={`/knowledge/${rel.cluster}/${rel.slug}/`}>
                          {cleanRelTitle}
                        </Link>
                      </h3>
                      <p className="related-card-excerpt">
                        {rel.excerpt || rel.bodyMarkdown.slice(0, 110) + '...'}
                      </p>
                      <div className="related-card-footer">
                        <span className="related-card-author">
                          Dr. {rel.authorSlug === 'dr-swati' ? 'Swati' : 'Vipin'}
                        </span>
                        <span className="related-card-time">
                          {rel.estimatedReadTimeMins} min
                        </span>
                      </div>
                    </div>
                  </article>
                );
              })
            )}
          </div>
        </div>
      </section>

      {/* 11. CTA SECTION */}
      <section className="cta-section">
        <div className="cta-inner">
          <div className="cta-devanagari">
            {isKsharsutraPlaybook
              ? 'आइए, मिलते हैं'
              : authorSlug === 'dr-swati'
              ? 'विशेष स्त्रीरोग चिकित्सा'
              : 'आइए, मिलते हैं'}
          </div>
          <h2 className="cta-headline">
            {isKsharsutraPlaybook ? (
              <>
                Considering Ksharsutra for <em>your case?</em>
              </>
            ) : (
              <>
                Considering specialist care for <em>your case?</em>
              </>
            )}
          </h2>
          <p className="cta-lede">
            {isKsharsutraPlaybook
              ? 'Come for a proper examination and an honest opinion. If Ksharsutra is right for you, we will explain why. If it is not, we will tell you what is.'
              : 'Come for a proper examination and an honest opinion from our specialist surgeons in Amravati.'}
          </p>
          <div className="cta-buttons">
            <Link href="/contact/" className="btn btn-primary">
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

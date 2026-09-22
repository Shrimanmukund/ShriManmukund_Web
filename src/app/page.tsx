import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Shri Manmukund Hospital, Amravati | Advanced Proctology & Surgery',
  description:
    'Where classical Ayurveda meets modern surgical care. 15 years of proctology and integrated surgery in Amravati. Ksharsutra, laser, and modern surgery under one roof.',
};

export default function HomePage() {
  const featuredArticles = [
    {
      type: 'Playbook',
      badgeClass: 'article-type--playbook',
      title: 'What to expect from Ksharsutra treatment, week by week',
      excerpt:
        'A practical guide for patients considering Ksharsutra. From first application through complete healing, with day-by-day expectations.',
      readTime: '12 min read',
      href: '/knowledge/playbooks/ksharsutra-day-1-to-complete-healing/',
    },
    {
      type: 'Article',
      badgeClass: 'article-type--article',
      title: 'Piles vs fissure vs fistula: how to tell them apart',
      excerpt:
        'Three of the most common anorectal conditions, often confused. A clear comparison of symptoms, causes, and treatments.',
      readTime: '8 min read',
      href: '/knowledge/articles/piles-vs-fissure-vs-fistula-how-to-tell-them-apart/',
    },
    {
      type: 'Insight',
      badgeClass: 'article-type--insight',
      title: 'Why I chose Shalya Tantra over modern surgery alone',
      excerpt:
        'A personal reflection on the choice of specialisation, and why classical and modern surgery are not opposites but complements.',
      readTime: '6 min read',
      href: '/knowledge/insights/why-i-chose-shalya-tantra/',
    },
  ];

  return (
    <main>
      {/* 1. HERO */}
      <section className="hero">
        <div className="hero-inner">
          <div>
            <div className="hero-devanagari">श्री मनमुकुंद रुग्णालय</div>
            <h1 className="hero-headline">
              Where classical Ayurveda meets <em className="whitespace-nowrap inline-block">modern surgical care.</em>
            </h1>
            <p className="hero-sub">
              Fifteen years of proctology and integrated surgery in Amravati. Ksharsutra, laser, non-surgical, and modern surgery available under one roof, chosen honestly for your case.
            </p>
            <div className="hero-ctas">
              <Link href="/contact/#book" className="btn btn-primary">
                Book a consultation
              </Link>
              <Link href="/about/" className="btn btn-ghost">
                Meet our doctors
              </Link>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-leaf hero-leaf-1"></div>
            <div className="hero-leaf hero-leaf-2"></div>
            <div className="hero-circle">
              <div className="hero-circle-inner">
                <div className="hero-circle-devanagari">आयुर्वेद</div>
                <div className="hero-circle-label">
                  Integrated Care
                  <br />
                  Since 2011
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-creds">
          <div className="hero-cred">
            <div className="hero-cred-num">15+</div>
            <div className="hero-cred-label">Years of Practice</div>
          </div>
          <div className="hero-cred">
            <div className="hero-cred-num">16,000+</div>
            <div className="hero-cred-label">Procedures</div>
          </div>
          <div className="hero-cred">
            <div className="hero-cred-num">2 MS</div>
            <div className="hero-cred-label">Specialists</div>
          </div>
          <div className="hero-cred">
            <div className="hero-cred-num">24 h</div>
            <div className="hero-cred-label">Emergency Care</div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES / CARE UNITS */}
      <section className="services">
        <div className="services-header">
          <div className="section-tag">Our Practice</div>
          <h2 className="section-title">
            Care that respects <em>both traditions.</em>
          </h2>
          <p className="services-lede">
            Not either / or. Not the fashionable one. The technique that genuinely fits your case, chosen after honest evaluation.
          </p>
        </div>

        <div className="services-grid">
          <article className="service service-1">
            <div className="service-icon">श</div>
            <div className="service-eyebrow">Flagship Practice</div>
            <h3 className="service-title">Advanced Anorectal Care</h3>
            <p className="service-desc">
              Piles, fissure, fistula, and complex cases. Full range from conservative management through Ksharsutra, laser proctology, and modern surgery. Every option honestly explained.
            </p>
            <Link href="/services/anorectal-care/" className="service-cta">
              Explore anorectal care
            </Link>
          </article>

          <article className="service service-2">
            <div className="service-icon">आ</div>
            <div className="service-eyebrow">Rooted in Classical</div>
            <h3 className="service-title">Ayurveda &amp; Panchakarma</h3>
            <p className="service-desc">
              Clinical Ayurveda for hyperacidity, spine, sciatica, skin, and non-healing wounds. Full Panchakarma unit with careful case selection. Delivered as medicine, not as lifestyle.
            </p>
            <Link href="/services/ayurveda-panchakarma/" className="service-cta">
              Explore Ayurveda
            </Link>
          </article>

          <article className="service service-3">
            <div className="service-icon">म</div>
            <div className="service-eyebrow">Modern Range</div>
            <h3 className="service-title">General Surgery</h3>
            <p className="service-desc">
              Hernia, hydrocele, breast lump, lipoma performed by our team. Gall bladder, appendicectomy, and laparoscopic procedures coordinated with visiting specialists at the hospital.
            </p>
            <Link href="/services/general-surgery/" className="service-cta">
              Explore general surgery
            </Link>
          </article>

          <article className="service service-4">
            <div className="service-icon">ऋ</div>
            <div className="service-eyebrow">Led by Dr. Swati</div>
            <h3 className="service-title">Female Care Unit</h3>
            <p className="service-desc">
              Female proctology, Uttarbasti for infertility, menstrual care, Masanumasik Garbhsanskara, and postnatal Panchakarma. For patients who prefer a female specialist throughout.
            </p>
            <Link href="/services/female-care/" className="service-cta">
              Explore female care
            </Link>
          </article>
        </div>
      </section>

      {/* 3. PHILOSOPHY BLOCK */}
      <section className="philosophy">
        <div className="philosophy-inner">
          <div className="philosophy-devanagari">सुप्रजा जनन</div>
          <p className="philosophy-text">
            The right treatment for the patient in front of you is the <strong>right treatment</strong>, regardless of whether the framework is classical or modern.
          </p>
          <div className="philosophy-attr">
            Dr. Vipin Tongale
            <span>Co-founder · MS Ayurveda Shalya Tantra · PhD</span>
          </div>
        </div>
      </section>

      {/* 4. SPECIALISTS / DOCTORS */}
      <section className="specialists">
        <div className="specialists-header">
          <div className="section-tag">Meet Your Doctors</div>
          <h2 className="section-title">
            Two specialists, <em>one clinical philosophy.</em>
          </h2>
          <p className="specialists-lede">
            A husband-and-wife surgical partnership. Distinct clinical roles, shared standards, honest counselling.
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
                  priority
                />
              </div>
            </div>
            <h3 className="specialist-name">Dr. Vipin Tongale</h3>
            <p className="specialist-role">General Surgeon &amp; Proctologist</p>
            <div className="specialist-creds">MS Ayurveda Shalya Tantra · PhD</div>
            <p className="specialist-bio">
              Fifteen years of dedicated practice, including twelve years of AYUSH service at District Hospital Amravati. PhD research on Apamarga Kshara for internal piles. Over 16,000 procedures.
            </p>
            <div className="specialist-tags">
              <span className="specialist-tag">Ksharsutra</span>
              <span className="specialist-tag">Laser Proctology</span>
              <span className="specialist-tag">General Surgery</span>
            </div>
            <Link href="/dr-vipin/" className="specialist-link">
              Read profile
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
                  priority
                />
              </div>
            </div>
            <h3 className="specialist-name">Dr. Swati Tongale</h3>
            <p className="specialist-role">Female Care Unit Lead</p>
            <div className="specialist-creds">MS Ayurveda Shalya Tantra</div>
            <p className="specialist-bio">
              Female proctology, Uttarbasti-based fertility care, and Masanumasik Garbhsanskara. Practice built to remove access barriers women face across Vidarbha with complete privacy.
            </p>
            <div className="specialist-tags">
              <span className="specialist-tag">Female Proctology</span>
              <span className="specialist-tag">Uttarbasti</span>
              <span className="specialist-tag">Garbhsanskara</span>
            </div>
            <Link href="/dr-swati/" className="specialist-link">
              Read profile
            </Link>
          </article>
        </div>
      </section>

      {/* 5. KNOWLEDGE HUB PREVIEW */}
      <section className="knowledge">
        <div className="knowledge-inner">
          <div className="knowledge-header">
            <div>
              <div className="section-tag">From the Knowledge Hub</div>
              <h2 className="section-title">
                Take your <em>time.</em> Understand your options.
              </h2>
            </div>
            <p className="knowledge-lede">
              Because informed patients make better decisions, and because good decisions take reading.
            </p>
          </div>

          <div className="knowledge-grid">
            {featuredArticles.map((article) => (
              <article key={article.href} className="article-card">
                <span className={`article-type ${article.badgeClass}`}>
                  {article.type}
                </span>
                <h3 className="article-title">{article.title}</h3>
                <p className="article-excerpt">{article.excerpt}</p>
                <div className="article-meta">
                  <span className="article-time">{article.readTime}</span>
                  <Link href={article.href} className="article-more">
                    Read more &rarr;
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CONTACT & APPOINTMENT ENQUIRY */}
      <section className="contact" id="contact">
        <div className="contact-inner">
          <div>
            <div className="contact-devanagari">आइए, मिलते हैं</div>
            <h2 className="contact-headline">
              Come and <em>see us.</em>
            </h2>
            <p className="contact-lede">
              Just beside Ahilya Mangal Karyalaya in Bapatwadi, Amravati. About a hundred metres from Radient Hospital. Free parking available.
            </p>
            <Link href="/contact/#book" className="btn btn-primary">
              Book a consultation
            </Link>
          </div>

          <div className="contact-details">
            <div className="contact-row">
              <div className="contact-icon">📞</div>
              <div className="contact-row-text">
                <div className="contact-row-label">Appointment</div>
                <div className="contact-row-value">
                  <a href="tel:8208927917">8208927917</a>
                </div>
              </div>
            </div>
            <div className="contact-row">
              <div className="contact-icon">🚨</div>
              <div className="contact-row-text">
                <div className="contact-row-label">Emergency · 24 hours</div>
                <div className="contact-row-value">
                  <a href="tel:9405404492">9405404492</a>
                </div>
              </div>
            </div>
            <div className="contact-row">
              <div className="contact-icon">🕒</div>
              <div className="contact-row-text">
                <div className="contact-row-label">OPD Timings</div>
                <div className="contact-row-value">
                  Mon–Sat
                  <br />
                  1:00–4:30 pm · 6:00–8:30 pm
                </div>
              </div>
            </div>
            <div className="contact-row">
              <div className="contact-icon">📍</div>
              <div className="contact-row-text">
                <div className="contact-row-label">Address</div>
                <div className="contact-row-value">
                  Plot 7, Bapatwadi
                  <br />
                  Amravati 444604
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SERVICE_CATEGORIES } from '@/lib/data/content-store';

export const metadata = {
  title: 'Clinical Services & Specialised Departments',
  description:
    'Advanced Anorectal Care, Ayurveda & Panchakarma, General Surgery, Female Proctology, and Women\'s Healthcare. Full spectrum of treatment tiers chosen honestly for your case.',
  alternates: {
    canonical: '/services/',
  },
};

export default function ServicesHubPage() {
  const iconMap: Record<string, string> = {
    'anorectal-care': 'श',
    'ksharsutra': 'क्ष',
    'laser-proctology': 'ले',
    'non-surgical-piles-treatment': 'अ',
    'general-surgery': 'म',
    'ayurveda': 'आ',
    'ayurveda-panchakarma': 'आ',
    'panchakarma': 'प',
    'spine-care': 'मे',
    'female-care': 'ऋ',
    'specialty-care': 'वि',
  };

  const eyebrowMap: Record<string, string> = {
    'anorectal-care': 'Flagship Practice',
    'ksharsutra': 'Classical Parasurgery',
    'laser-proctology': 'Minimally Invasive Laser',
    'non-surgical-piles-treatment': 'Day-Care OPD Care',
    'general-surgery': 'Modern Surgical Range',
    'ayurveda': 'Rooted in Classical',
    'ayurveda-panchakarma': 'Rooted in Classical',
    'panchakarma': 'Detox & Rejuvenation',
    'spine-care': 'Non-Surgical Spine Care',
    'female-care': 'Led by Dr. Swati',
    'specialty-care': 'Specialized Clinical Units',
  };

  return (
    <main>
      {/* 1. UNIT HERO */}
      <section className="unit-hero">
        <div className="breadcrumb">
          <Link href="/">Home</Link>
          <span className="breadcrumb-sep">·</span>
          <span>Services</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 lg:gap-14 items-center relative z-10 max-w-7xl mx-auto">
          <div className="md:col-span-7 flex flex-col justify-center">
            <div className="unit-hero-eyebrow">
              Clinical Services
              <span className="unit-hero-eyebrow-badge">Comprehensive Specialties</span>
            </div>
            <div className="unit-hero-devanagari">चिकित्सा विभाग</div>
            <h1 className="unit-hero-title">
              Specialist care, chosen <em>honestly for the case.</em>
            </h1>
            <p className="unit-hero-lede">
              The full spectrum of treatment under one roof: conservative management, non-surgical OPD interventions, Ksharsutra, laser proctology, and modern surgery. The right choice for your case, not the technique that sells best.
            </p>
            <div className="unit-hero-ctas">
              <Link href="/contact/#book" className="btn btn-primary">
                Book a consultation
              </Link>
              <a href="#units" className="btn btn-ghost">
                Explore clinical specialties
              </a>
            </div>
          </div>

          <div className="md:col-span-5 flex justify-center md:justify-end">
            <div className="w-full max-w-[480px] bg-white rounded-3xl p-2.5 shadow-2xl border border-[#6B7F5F]/20 relative overflow-hidden group">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#EAE5D9]">
                <Image
                  src="/images/doctors/doctors-reception.jpg"
                  alt="Dr. Vipin Tongale and Dr. Swati Tongale at Shri Manmukund Hospital, Amravati"
                  fill
                  sizes="(max-width: 768px) 100vw, 480px"
                  priority
                  className="object-cover object-[center_20%] group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="mt-2.5 px-2 pb-0.5 flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#6B7F5F]">
                  Direct Specialist Care
                </span>
                <span className="font-serif text-base font-semibold text-[#1B3A5B] mt-0.5">
                  Dr. Vipin Tongale &amp; Dr. Swati Tongale
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ANSWER-FIRST SUMMARY */}
      <section className="answer-summary">
        <div className="answer-summary-inner">
          <div className="answer-summary-label">In one paragraph</div>
          <p className="answer-summary-text">
            Shri Manmukund Hospital provides comprehensive, integrated clinical care across specialized departments: Advanced Proctology &amp; Anorectal Surgery, Classical Ayurveda &amp; Panchakarma, General &amp; Minimally Invasive Surgery, Female Care &amp; Women&apos;s Health, Infertility (Uttarbasti), and Day-Care Surgery. Because we offer all treatment tiers under one roof—from lifestyle correction and classical herbal therapies through Ksharsutra, diode laser, and conventional open/laparoscopic surgery—our specialists recommend what is genuinely optimal for the patient, without commercial bias toward any single technique.
          </p>
        </div>
      </section>

      {/* 3. UNITS GRID */}
      <section className="services" id="units">
        <div className="services-header">
          <div className="section-tag">Clinical Specialties</div>
          <h2 className="section-title">
            Comprehensive clinical specialties, <em>one standard of care.</em>
          </h2>
          <p className="services-lede">
            Click into any specialty department to explore specific conditions, grading criteria, treatment options, and recovery timelines.
          </p>
        </div>

        <div className="services-grid">
          {SERVICE_CATEGORIES.map((cat, idx) => (
            <article key={cat.slug} className={`service service-${(idx % 4) + 1}`}>
              <div className="service-icon">{iconMap[cat.slug] || 'श'}</div>
              <div className="service-eyebrow">
                {eyebrowMap[cat.slug] || 'Specialized Clinical Care'}
              </div>
              <h3 className="service-title">{cat.name}</h3>
              <p className="service-desc">{cat.shortDescription}</p>
              <Link href={`/services/${cat.slug}/`} className="service-cta">
                Explore {cat.name}
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* 4. TREATMENT TIERS */}
      <section className="tiers">
        <div className="tiers-inner">
          <div className="section-header">
            <div className="section-tag">Our Philosophy</div>
            <h2 className="section-title">
              Four tiers of care, applied <em>in the right order.</em>
            </h2>
            <p className="section-lede">
              We start with what your condition actually needs, and only move up the tiers when clinically indicated.
            </p>
          </div>

          <div className="tier-ladder">
            <div className="tier-card">
              <div className="tier-num">01</div>
              <div className="tier-label">First Line</div>
              <h3 className="tier-title">Conservative &amp; Lifestyle</h3>
              <p className="tier-desc">
                For early-stage cases and preventive care. Dietary correction, fibre supplementation, sitz baths, topical herbal formulations, and lifestyle guidance.
              </p>
              <div className="tier-examples">
                <div className="tier-examples-label">When Applied</div>
                <div className="tier-examples-list">Grade I piles · Acute fissure · Early symptoms</div>
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
                <div className="tier-examples-list">Grade II–III piles · Chronic fissure · No sphincter involvement</div>
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
                <div className="tier-examples-list">Fistula · Recurrent cases · Complex proctology</div>
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
                <div className="tier-examples-list">Grade IV piles · Extensive prolapse · Complex hernia</div>
              </div>
            </div>
          </div>

          <p className="tiers-note">
            In practice, over half of our patients do not need Tier 3 or Tier 4 care. The most valuable thing we can offer is the honest starting point, not the most expensive one.
          </p>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="cta-section">
        <div className="cta-inner">
          <div className="cta-devanagari">आइए, मिलते हैं</div>
          <h2 className="cta-headline">
            Not sure which department <em>fits your case?</em>
          </h2>
          <p className="cta-lede">
            Call our hospital reception or book an initial OPD consultation. Our specialists will perform an honest clinical examination and guide you to the right treatment.
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

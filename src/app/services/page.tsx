import React from 'react';
import '@/app/templates.css';
import Link from 'next/link';
import Image from 'next/image';
import { SERVICE_CATEGORIES } from '@/lib/data/content-store';

export const metadata = {
  title: 'Clinical Services & Specialised Departments',
  description:
    'Advanced Anorectal Care, Ayurveda & Panchakarma, General Surgery, Female Proctology, and Women\'s Healthcare. Full spectrum of treatment tiers chosen honestly for your case.',
  authors: [{ name: 'Shri Manmukund Hospital' }],
  alternates: {
    canonical: '/services/',
  },
  openGraph: {
    title: 'Clinical Services & Specialised Departments | Shri Manmukund Hospital',
    description:
      'Advanced Anorectal Care, Ayurveda & Panchakarma, General Surgery, Female Proctology, and Women\'s Healthcare in Amravati.',
    url: 'https://shrimanmukundhospital.com/services/',
    siteName: 'Shri Manmukund Hospital',
    locale: 'en_IN',
    type: 'website',
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
    'ksharsutra': 'Classical Para Surgery',
    'laser-proctology': 'Minimally Invasive Laser',
    'non-surgical-piles-treatment': 'Day-Care OPD Care',
    'general-surgery': 'Modern Surgical Range',
    'ayurveda': 'Rooted in Classical',
    'ayurveda-panchakarma': 'Rooted in Classical',
    'panchakarma': 'Detox & Rejuvenation',
    'spine-care': 'Non-Surgical Spine Care',
    'female-care': 'Led by Dr. Swati',
    'specialty-care': 'Specialised Clinical Units',
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
            <div className="unit-hero-devanagari font-devanagari">चिकित्सा विभाग</div>
            <h1 className="unit-hero-title">
              Specialist care, chosen <em>honestly for the case.</em>
            </h1>
            <p className="unit-hero-lede">
              The full spectrum of treatment under one roof: conservative management, para surgical OPD interventions, Ksharsutra, laser proctology, and modern surgery. The right choice for your case, not the technique that sells best.
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
            Shri Manmukund Hospital provides comprehensive, integrated clinical care across specialised departments: Advanced Proctology &amp; Anorectal Surgery, Classical Ayurveda &amp; Panchakarma, General &amp; Minimally Invasive Surgery, Female Care &amp; Women&apos;s Health, Infertility (Uttarbasti), and Day-Care Surgery. Because we offer all treatment tiers under one roof, from lifestyle correction and classical herbal therapies through Ksharsutra, diode laser, and conventional open/laparoscopic surgery, our specialists recommend what is genuinely optimal for the patient, without commercial bias toward any single technique.
          </p>
        </div>
      </section>

      {/* 3. FOUR CORE CLINICAL UNITS (Client requested 4 Units at start) */}
      <section className="services" id="units">
        <div className="services-header">
          <div className="section-tag">Clinical Architecture</div>
          <h2 className="section-title">
            Four core clinical units, <em>one standard of care.</em>
          </h2>
          <p className="services-lede">
            Specialist care organised into four primary clinical departments. Explore each unit and its dedicated treatment modalities below.
          </p>
        </div>

        {/* 4 Core Clinical Units Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto px-4 sm:px-6 mb-16">
          {/* Unit I: Advanced Anorectal Unit */}
          <article className="service service-1 flex flex-col justify-between border border-[#6B7F5F]/20 shadow-sm hover:shadow-lg transition-all rounded-3xl p-8 bg-white relative">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="service-icon font-devanagari !mb-0">श</div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#6B7F5F] bg-[#6B7F5F]/10 px-3 py-1 rounded-full">
                  Unit I · Flagship Department
                </span>
              </div>
              <div className="text-xs font-semibold uppercase tracking-widest text-[#8C6226] mb-1 font-devanagari">
                उच्चस्तरीय गुदचिकित्सा विभाग
              </div>
              <h3 className="service-title text-2xl font-serif text-[#1B3A5B] mb-3">
                Advanced Anorectal Unit
              </h3>
              <p className="service-desc text-[#4A5568] text-sm leading-relaxed mb-6">
                Super-specialised proctology care integrating classical Ksharsutra with modern diode laser technology. Full spectrum of conservative, OPD, minimally invasive, and surgical proctology.
              </p>

              {/* Sub-modalities / Pillars */}
              <div className="pt-4 border-t border-[rgba(107,127,95,0.15)] mb-6">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#6B7F5F] mb-3">
                  Core Treatment Modalities:
                </div>
                <div className="flex flex-col gap-2.5">
                  <Link
                    href="/services/ksharsutra/"
                    className="group flex items-center justify-between p-2.5 rounded-xl bg-[#FAF7F2] hover:bg-[#6B7F5F]/10 transition-colors"
                  >
                    <div>
                      <span className="text-xs font-bold text-[#1B3A5B] block">1. Ksharsutra &amp; Ksharkarma</span>
                      <span className="text-[11px] text-[#4A5568]">Classical para surgical sphincter-saving cure for fistula &amp; fissure</span>
                    </div>
                    <span className="text-xs font-semibold text-[#6B7F5F] group-hover:translate-x-1 transition-transform">→</span>
                  </Link>

                  <Link
                    href="/services/laser-proctology/"
                    className="group flex items-center justify-between p-2.5 rounded-xl bg-[#FAF7F2] hover:bg-[#6B7F5F]/10 transition-colors"
                  >
                    <div>
                      <span className="text-xs font-bold text-[#1B3A5B] block">2. Laser Proctology</span>
                      <span className="text-[11px] text-[#4A5568]">Minimally invasive diode laser (LHP, FiLaC, SiLaC) with zero cuts</span>
                    </div>
                    <span className="text-xs font-semibold text-[#6B7F5F] group-hover:translate-x-1 transition-transform">→</span>
                  </Link>

                  <Link
                    href="/services/non-surgical-piles-treatment/"
                    className="group flex items-center justify-between p-2.5 rounded-xl bg-[#FAF7F2] hover:bg-[#6B7F5F]/10 transition-colors"
                  >
                    <div>
                      <span className="text-xs font-bold text-[#1B3A5B] block">3. Para Surgical Piles Interventions</span>
                      <span className="text-[11px] text-[#4A5568]">Day-care OPD rubber band ligation, sclerotherapy &amp; Matra Basti</span>
                    </div>
                    <span className="text-xs font-semibold text-[#6B7F5F] group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[rgba(107,127,95,0.15)]">
              <Link href="/services/anorectal-care/" className="service-cta font-bold text-sm text-[#6B7F5F] flex items-center gap-1.5 hover:gap-2.5 transition-all">
                Explore Full Anorectal Unit
              </Link>
            </div>
          </article>

          {/* Unit II: General Surgery Unit */}
          <article className="service service-2 flex flex-col justify-between border border-[#B8894A]/25 shadow-sm hover:shadow-lg transition-all rounded-3xl p-8 bg-white relative">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="service-icon font-devanagari !mb-0">म</div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#8C6226] bg-[#B8894A]/10 px-3 py-1 rounded-full">
                  Unit II · Modern Surgical Range
                </span>
              </div>
              <div className="text-xs font-semibold uppercase tracking-widest text-[#8C6226] mb-1 font-devanagari">
                सामान्य शल्यकर्म विभाग
              </div>
              <h3 className="service-title text-2xl font-serif text-[#1B3A5B] mb-3">
                General Surgery Unit
              </h3>
              <p className="service-desc text-[#4A5568] text-sm leading-relaxed mb-6">
                Comprehensive surgical care directed by MS qualified surgeons with honest clinical selection. Day-care minor surgeries, tension-free hernia repair, hydrocele, and acute abdominal emergencies.
              </p>

              {/* Sub-modalities / Focus */}
              <div className="pt-4 border-t border-[rgba(184,137,74,0.18)] mb-6">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#8C6226] mb-3">
                  Key Surgical Spectrum:
                </div>
                <div className="flex flex-col gap-2.5">
                  <Link
                    href="/services/general-surgery/hernia/"
                    className="group flex items-center justify-between p-2.5 rounded-xl bg-[#FAF7F2] hover:bg-[#B8894A]/10 transition-colors"
                  >
                    <div>
                      <span className="text-xs font-bold text-[#1B3A5B] block">1. Hernia Repair (Hernioplasty)</span>
                      <span className="text-[11px] text-[#4A5568]">Tension-free mesh repair for inguinal, umbilical &amp; incisional hernias</span>
                    </div>
                    <span className="text-xs font-semibold text-[#8C6226] group-hover:translate-x-1 transition-transform">→</span>
                  </Link>

                  <Link
                    href="/services/general-surgery/hydrocele/"
                    className="group flex items-center justify-between p-2.5 rounded-xl bg-[#FAF7F2] hover:bg-[#B8894A]/10 transition-colors"
                  >
                    <div>
                      <span className="text-xs font-bold text-[#1B3A5B] block">2. Hydrocele, Gallbladder &amp; Appendix</span>
                      <span className="text-[11px] text-[#4A5568]">Eversion surgery, cholelithiasis evaluation, and appendicectomy</span>
                    </div>
                    <span className="text-xs font-semibold text-[#8C6226] group-hover:translate-x-1 transition-transform">→</span>
                  </Link>

                  <Link
                    href="/services/general-surgery/minor-procedures/"
                    className="group flex items-center justify-between p-2.5 rounded-xl bg-[#FAF7F2] hover:bg-[#B8894A]/10 transition-colors"
                  >
                    <div>
                      <span className="text-xs font-bold text-[#1B3A5B] block">3. Day-Care Minor Surgeries</span>
                      <span className="text-[11px] text-[#4A5568]">Cosmetic lipoma excision, sebaceous cysts, abscess drainage &amp; biopsies</span>
                    </div>
                    <span className="text-xs font-semibold text-[#8C6226] group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[rgba(184,137,74,0.18)]">
              <Link href="/services/general-surgery/" className="service-cta font-bold text-sm text-[#8C6226] flex items-center gap-1.5 hover:gap-2.5 transition-all">
                Explore General Surgery Unit
              </Link>
            </div>
          </article>

          {/* Unit III: Ayurved & Panchakarma Unit */}
          <article className="service service-3 flex flex-col justify-between border border-[#6B7F5F]/20 shadow-sm hover:shadow-lg transition-all rounded-3xl p-8 bg-white relative">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="service-icon font-devanagari !mb-0">आ</div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#6B7F5F] bg-[#6B7F5F]/10 px-3 py-1 rounded-full">
                  Unit III · Classical Traditional Medicine
                </span>
              </div>
              <div className="text-xs font-semibold uppercase tracking-widest text-[#8C6226] mb-1 font-devanagari">
                आयुर्वेद व पंचकर्म विभाग
              </div>
              <h3 className="service-title text-2xl font-serif text-[#1B3A5B] mb-3">
                Ayurved &amp; Panchakarma Unit
              </h3>
              <p className="service-desc text-[#4A5568] text-sm leading-relaxed mb-6">
                Clinical Ayurvedic medicine for chronic diseases combined with our dedicated hospital-based 5-fold Panchakarma purification suite, under direct MS Ayurveda surgeon supervision.
              </p>

              {/* Sub-divisions */}
              <div className="pt-4 border-t border-[rgba(107,127,95,0.15)] mb-6">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#6B7F5F] mb-3">
                  Clinical Divisions &amp; Procedures:
                </div>
                <div className="flex flex-col gap-2.5">
                  <Link
                    href="/services/ayurveda/"
                    className="group flex items-center justify-between p-2.5 rounded-xl bg-[#FAF7F2] hover:bg-[#6B7F5F]/10 transition-colors"
                  >
                    <div>
                      <span className="text-xs font-bold text-[#1B3A5B] block">1. Clinical Ayurveda (Disease Management)</span>
                      <span className="text-[11px] text-[#4A5568]">Vata Vikar, chronic skin diseases, hyperacidity (Amlapitta) &amp; Medoroga</span>
                    </div>
                    <span className="text-xs font-semibold text-[#6B7F5F] group-hover:translate-x-1 transition-transform">→</span>
                  </Link>

                  <Link
                    href="/services/panchakarma/"
                    className="group flex items-center justify-between p-2.5 rounded-xl bg-[#FAF7F2] hover:bg-[#6B7F5F]/10 transition-colors"
                  >
                    <div>
                      <span className="text-xs font-bold text-[#1B3A5B] block">2. Panchakarma Hub (5-Fold Detox Suite)</span>
                      <span className="text-[11px] text-[#4A5568]">Dedicated purification suites for Vamana, Virechana, Nasya &amp; Raktamokshana</span>
                    </div>
                    <span className="text-xs font-semibold text-[#6B7F5F] group-hover:translate-x-1 transition-transform">→</span>
                  </Link>

                  <Link
                    href="/services/panchakarma/basti/"
                    className="group flex items-center justify-between p-2.5 rounded-xl bg-[#FAF7F2] hover:bg-[#6B7F5F]/10 transition-colors"
                  >
                    <div>
                      <span className="text-xs font-bold text-[#1B3A5B] block">3. Panchakarma Procedures: Basti, Uttarbasti, Jalauka</span>
                      <span className="text-[11px] text-[#4A5568]">Medicated enema therapy, intra-cavitary Uttarbasti &amp; medicinal leech therapy</span>
                    </div>
                    <span className="text-xs font-semibold text-[#6B7F5F] group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[rgba(107,127,95,0.15)]">
              <Link href="/services/ayurveda-panchakarma/" className="service-cta font-bold text-sm text-[#6B7F5F] flex items-center gap-1.5 hover:gap-2.5 transition-all">
                Explore Ayurved &amp; Panchakarma Hub
              </Link>
            </div>
          </article>

          {/* Unit IV: Speciality Care Unit */}
          <article className="service service-4 flex flex-col justify-between border border-[#C08477]/25 shadow-sm hover:shadow-lg transition-all rounded-3xl p-8 bg-white relative">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="service-icon font-devanagari !mb-0">वि</div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#9E4B3E] bg-[#C08477]/10 px-3 py-1 rounded-full">
                  Unit IV · Dedicated Sub-Specialties
                </span>
              </div>
              <div className="text-xs font-semibold uppercase tracking-widest text-[#9E4B3E] mb-1 font-devanagari">
                विशेष चिकित्सा विभाग
              </div>
              <h3 className="service-title text-2xl font-serif text-[#1B3A5B] mb-3">
                Speciality Care Unit
              </h3>
              <p className="service-desc text-[#4A5568] text-sm leading-relaxed mb-6">
                Specialised clinical units addressing conditions requiring dedicated focus: non-surgical spine care, private female healthcare, paediatric immunity, and diabetic wound salvage.
              </p>

              {/* Sub-specialties */}
              <div className="pt-4 border-t border-[rgba(192,132,119,0.2)] mb-6">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#9E4B3E] mb-3">
                  Featured Specialty Units:
                </div>
                <div className="flex flex-col gap-2.5">
                  <Link
                    href="/services/spine-care/"
                    className="group flex items-center justify-between p-2.5 rounded-xl bg-[#FAF7F2] hover:bg-[#C08477]/10 transition-colors"
                  >
                    <div>
                      <span className="text-xs font-bold text-[#1B3A5B] block">1. Spine Care Unit</span>
                      <span className="text-[11px] text-[#4A5568]">Non-surgical Kati Basti &amp; Greeva Basti for sciatica, spondylosis &amp; disc disease</span>
                    </div>
                    <span className="text-xs font-semibold text-[#9E4B3E] group-hover:translate-x-1 transition-transform">→</span>
                  </Link>

                  <Link
                    href="/services/female-care/"
                    className="group flex items-center justify-between p-2.5 rounded-xl bg-[#FAF7F2] hover:bg-[#C08477]/10 transition-colors"
                  >
                    <div>
                      <span className="text-xs font-bold text-[#1B3A5B] block">2. Female Speciality Care</span>
                      <span className="text-[11px] text-[#4A5568]">Led by Dr. Swati Tongale: female proctology, Uttarbasti for fertility &amp; Garbhsanskara</span>
                    </div>
                    <span className="text-xs font-semibold text-[#9E4B3E] group-hover:translate-x-1 transition-transform">→</span>
                  </Link>

                  <Link
                    href="/services/ayurveda/suvarna-prashan/"
                    className="group flex items-center justify-between p-2.5 rounded-xl bg-[#FAF7F2] hover:bg-[#C08477]/10 transition-colors"
                  >
                    <div>
                      <span className="text-xs font-bold text-[#1B3A5B] block">3. Paediatric Care &amp; Suvarna Prashan</span>
                      <span className="text-[11px] text-[#4A5568]">Monthly gold bhasma child immunity drops &amp; gentle Ayurvedic paediatric care</span>
                    </div>
                    <span className="text-xs font-semibold text-[#9E4B3E] group-hover:translate-x-1 transition-transform">→</span>
                  </Link>

                  <Link
                    href="/services/specialty-care/diabetic-wound-management/"
                    className="group flex items-center justify-between p-2.5 rounded-xl bg-[#FAF7F2] hover:bg-[#C08477]/10 transition-colors"
                  >
                    <div>
                      <span className="text-xs font-bold text-[#1B3A5B] block">4. Non-Healing &amp; Diabetic Wounds</span>
                      <span className="text-[11px] text-[#4A5568]">Tissue salvage and Vrana Shodhana protocols preventing limb amputations</span>
                    </div>
                    <span className="text-xs font-semibold text-[#9E4B3E] group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[rgba(192,132,119,0.2)]">
              <Link href="/services/specialty-care/" className="service-cta font-bold text-sm text-[#9E4B3E] flex items-center gap-1.5 hover:gap-2.5 transition-all">
                Explore Speciality Care Unit
              </Link>
            </div>
          </article>
        </div>

        {/* Secondary Directory: All 10 Individual Department Portals */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 border-t border-[rgba(107,127,95,0.18)]">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#6B7F5F]">Complete Directory</span>
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#1B3A5B] mt-1">
              All 10 Specialised Department Portals
            </h3>
            <p className="text-sm text-[#4A5568] max-w-2xl mx-auto mt-2">
              Direct access to all individual specialty portals, condition guides, and procedure suites.
            </p>
          </div>

          <div className="services-grid">
            {SERVICE_CATEGORIES.map((cat, idx) => (
              <article key={cat.slug} className={`service service-${(idx % 4) + 1}`}>
                <div className="service-icon font-devanagari">{iconMap[cat.slug] || 'श'}</div>
                <div className="service-eyebrow">
                  {eyebrowMap[cat.slug] || 'Specialised Clinical Care'}
                </div>
                <h3 className="service-title">{cat.name}</h3>
                <p className="service-desc">{cat.shortDescription}</p>
                <Link href={`/services/${cat.slug}/`} className="service-cta">
                  Explore {cat.name}
                </Link>
              </article>
            ))}
          </div>
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
              <div className="tier-label">Para Surgical</div>
              <h3 className="tier-title">OPD Interventions</h3>
              <p className="tier-desc">
                Office-based para surgical procedures that avoid surgery entirely. Rubber band ligation, injection sclerotherapy, Matra Basti for chronic fissure. Same-day, back to work next day.
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
          <div className="cta-devanagari font-devanagari">आइए, मिलते हैं</div>
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

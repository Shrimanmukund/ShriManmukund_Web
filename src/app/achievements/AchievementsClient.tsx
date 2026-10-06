'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './achievements.css';

type FilterCategory = 'all' | 'academic' | 'award' | 'community' | 'media';

interface HonourItem {
  id: string;
  categories: ('academic' | 'award' | 'community' | 'media')[];
  tag: string;
  year: string;
  marathiLine?: string;
  title: string;
  issuer: string;
  quote?: string;
  desc?: string;
  image: string;
  alt: string;
  who: string;
  whoType: 'vipin' | 'swati' | 'hosp';
  isFeatured?: boolean;
  isFullWidth?: boolean;
}

interface MosaicItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  alt: string;
  sizeClass: string;
  imagePosition?: string;
}

const HONOURS_DATA: HonourItem[] = [
  // ROW 1: Card 1 (Span 2) + Card 2 (Span 1) = 3 cols (Full Row)
  {
    id: 'prabhavshali-2025',
    categories: ['award'],
    tag: 'Featured Award',
    year: '2025',
    marathiLine: 'प्रभावशाली आयुर्वेदाचार्य',
    title: 'Prabhavshali Ayurvedacharya of Vidarbha',
    issuer: 'Sakal Gauravagatha 2025, Nagpur',
    quote:
      'Honoured for extraordinary clinical dedication in proctology, Ayurvedic surgery, and uplifting healthcare standards across Vidarbha.',
    image: '/images/achievements/0C0A6891-1.jpg',
    alt: 'Dr. Swati Tongale receiving the Prabhavshali Ayurvedacharya of Vidarbha award at Sakal Gauravagatha 2025, Nagpur',
    who: 'Dr. Swati Tongale, MS (Ayu)',
    whoType: 'swati',
    isFeatured: true,
  },
  {
    id: 'sakal-idols-2022',
    categories: ['award', 'academic'],
    tag: 'State Award',
    year: '2022',
    marathiLine: 'सकाळ आयडॉल्स ऑफ महाराष्ट्र',
    title: 'Sakal Idols of Maharashtra',
    issuer: 'Sakal Media Group',
    desc: 'Recognised as an inspirational healthcare institution for integrating ancient Shalya Tantra surgical principles with modern proctology diagnostics.',
    image: '/images/achievements/Sakal.gif',
    alt: 'Dr. Vipin Tongale receiving the Sakal Idols of Maharashtra 2022 award',
    who: 'Dr. Vipin Tongale, MS (Ayu), PhD',
    whoType: 'vipin',
    isFeatured: false,
  },

  // ROW 2: 3 Standard Single Cards = 3 cols
  {
    id: 'wac-best-paper-2022',
    categories: ['award', 'academic'],
    tag: 'Academic Award',
    year: '2022',
    title: 'Best Paper of the Session',
    issuer: '9th World Ayurveda Congress, Panaji, Goa',
    desc: 'Awarded Best Research Paper for clinical presentation on Sushruta Ksharsutra therapy for complex anal fistulas.',
    image: '/images/achievements/9th-world-Ayurved-congres.jpg',
    alt: 'Best Paper of the Session certificate, 9th World Ayurveda Congress, Goa, 2022',
    who: 'Shri Manmukund Hospital',
    whoType: 'hosp',
  },
  {
    id: 'ayush-surgery-award',
    categories: ['award'],
    tag: 'Clinical Award',
    year: 'Doctor\'s Day',
    title: 'Award for Surgical Work under AYUSH',
    issuer: 'Department of AYUSH, Maharashtra',
    desc: 'Felicitation for 12+ continuous years of dedicated government AYUSH surgical service at District Hospital Amravati.',
    image: '/images/achievements/Awarded-for-surgical-work-under-AYUSH.jpg',
    alt: 'Award to Dr. Vipin Tongale for surgical work under AYUSH',
    who: 'Dr. Vipin Tongale',
    whoType: 'vipin',
  },
  {
    id: 'amol-kolhe-visit',
    categories: ['community'],
    tag: 'Dignitary Visit',
    year: 'Hospital Visit',
    title: 'Visit by Hon. MP Dr. Amol Kolhe',
    issuer: 'Shri Manmukund Hospital Panchakarma Unit',
    desc: 'Hon. MP and Veteran Actor Dr. Amol Kolhe visited and commended the hospital’s integrated proctology and Panchakarma facilities.',
    image: '/images/achievements/achievement-img-10.jpg',
    alt: 'Honorable MP and Veteran Actor Dr. Amol Kolhe visit at Panchakarma Unit of Shri Manmukund Hospital',
    who: 'Shri Manmukund Hospital',
    whoType: 'hosp',
  },

  // ROW 3: 3 Standard Single Cards = 3 cols
  {
    id: 'jci-amravati-felicitation',
    categories: ['award', 'community'],
    tag: 'Felicitation',
    year: '2021',
    title: 'Felicitated by JCI Amravati Golden',
    issuer: 'Junior Chamber International, Amravati Golden Chapter',
    desc: 'Dr. Swati Tongale honoured at the 22nd Installation Ceremony for extensive community healthcare and women\'s wellness initiatives.',
    image: '/images/achievements/achievement-img-8.jpg',
    alt: 'Dr. Swati Tongale felicitated at JCI Amravati Golden 22nd Installation Ceremony',
    who: 'Dr. Swati Tongale, MS (Ayu)',
    whoType: 'swati',
  },
  {
    id: 'basticon-judge-2023',
    categories: ['academic'],
    tag: 'Jury Appointment',
    year: '2023',
    title: 'Judge for Paper Presentations at Basticon',
    issuer: 'National Ayurveda Conference Basticon 2023',
    desc: 'Appointed as session chair and paper evaluation judge for clinical research on Basti and Shalya Tantra.',
    image: '/images/achievements/Judge-at-Basticon-2023.jpg',
    alt: 'Dr. Vipin Tongale as judge for paper presentations at Basticon 2023',
    who: 'Dr. Vipin Tongale',
    whoType: 'vipin',
  },
  {
    id: 'wac-judge-2024',
    categories: ['academic'],
    tag: 'International Jury',
    year: '2024',
    title: 'Judge for Poster Presentations',
    issuer: '10th World Ayurveda Congress, Dehradun',
    desc: 'Invited as expert jury evaluator for international research papers and scientific poster presentations.',
    image: '/images/achievements/20241214_194213-scaled.jpg',
    alt: 'Dr. Vipin Tongale judging poster presentations at the 10th World Ayurveda Congress, Dehradun, 2024',
    who: 'Dr. Vipin Tongale',
    whoType: 'vipin',
  },

  // ROW 4: 3 Standard Single Cards = 3 cols
  {
    id: 'gurusmaran-2024',
    categories: ['community'],
    tag: 'Organising Committee',
    year: '2024',
    title: 'Gurusmaran 2024',
    issuer: 'Gurusmaran 2024, Amravati',
    desc: 'Dr. Vipin Tongale on the organising committee of Gurusmaran 2024 in Amravati.',
    image: '/images/achievements/achievement-img-11.jpg',
    alt: 'Dr. Vipin Tongale at Gurusmaran 2024, Amravati',
    who: 'Dr. Vipin Tongale',
    whoType: 'vipin',
  },
  {
    id: 'wac-felicitation-2014',
    categories: ['academic', 'award'],
    tag: 'Academic Award',
    year: '2014',
    title: 'Felicitation for Research Paper at 6th WAC',
    issuer: '6th World Ayurveda Congress, New Delhi',
    desc: 'Felicitation for research contribution to Ayurvedic surgery and clinical proctology protocols.',
    image: '/images/achievements/achievement-img-2.jpg',
    alt: 'Felicitation for Research paper at 6th World Ayurved Congress 2014, New Delhi',
    who: 'Dr. Vipin Tongale',
    whoType: 'vipin',
  },
  {
    id: 'wac-presentation-2014',
    categories: ['academic'],
    tag: 'Research',
    year: '2014',
    title: 'Presentation of Research Paper at 6th WAC',
    issuer: '6th World Ayurveda Congress 2014, New Delhi',
    desc: 'Clinical presentation on Ayurvedic surgical principles and modern proctology techniques at Pragati Maidan, New Delhi.',
    image: '/images/achievements/achievement-img-9.jpg',
    alt: 'Presentation of Research paper at 6th World Ayurved Congress 2014, New Delhi',
    who: 'Dr. Vipin Tongale',
    whoType: 'vipin',
  },

  // ROW 5: 3 Standard Single Cards = 3 cols
  {
    id: 'wac-presentation-8th-swati',
    categories: ['academic'],
    tag: 'Research',
    year: '2016',
    title: 'Presentation of Research Paper at 8th WAC',
    issuer: '8th World Ayurved Congress 2016, Ahmedabad',
    desc: 'Presentation of research paper at the 8th World Ayurved Congress in Ahmedabad.',
    image: '/images/achievements/achievement-img-6.jpg',
    alt: 'Presentation of Research paper at 8th World Ayurved Congress 2016, Ahmedabad',
    who: 'Dr. Swati Tongale, MS (Ayu)',
    whoType: 'swati',
  },
  {
    id: 'wac-presentation-8th-vipin',
    categories: ['academic'],
    tag: 'Research',
    year: '2018',
    title: 'Research Papers at 8th World Ayurveda Congress',
    issuer: '8th World Ayurveda Congress 2018, Ahmedabad',
    desc: 'Presentations on minimal invasive parasurgical protocols and clinical safety in chronic fissure and fistula.',
    image: '/images/achievements/achievement-img-5.jpg',
    alt: 'Presentation of Research paper at 8th World Ayurved Congress 2018, Ahmedabad',
    who: 'Dr. Vipin Tongale',
    whoType: 'vipin',
  },
  {
    id: 'wac-poster-2008',
    categories: ['academic'],
    tag: 'Research Poster',
    year: '2008',
    title: 'Research Poster at 3rd World Ayurveda Congress',
    issuer: '3rd World Ayurveda Congress 2008, Jaipur',
    desc: 'First steps in surgical research presented at the international forum in Jaipur.',
    image: '/images/achievements/achievement-img-1.jpg',
    alt: 'Research Poster presented at 3rd World Ayurved Congress, Jaipur',
    who: 'Dr. Vipin Tongale',
    whoType: 'vipin',
  },

  // ROW 6: Full-Width Patient Trust Card
  {
    id: 'patient-trust-card',
    categories: ['media'],
    tag: 'Patient Trust',
    year: '2026',
    title: 'Rated 4.6 out of 5 by 191 patients',
    issuer: 'Justdial, where the hospital carries the "15 Years in Healthcare" mark',
    desc: 'Every award, research paper, and felicitation above began with our patients who trusted us with their care and shared their recovery journeys.',
    image: '/images/achievements/0C0A72311.jpg',
    alt: 'Rated 4.6 out of 5 by 191 patients on Justdial',
    who: 'Shri Manmukund Hospital',
    whoType: 'hosp',
    isFullWidth: true,
  },
];

const MOSAIC_ITEMS: MosaicItem[] = [
  {
    id: 'mosaic-1',
    title: 'Our new home',
    subtitle: 'Bapatwadi, Vivekanand Colony, June 2024',
    image: '/images/achievements/photo_2025-08-17_22-57-17-2.jpg',
    alt: 'Shri Manmukund Hospital building, Bapatwadi, Amravati',
    sizeClass: 'tile big',
  },
  {
    id: 'mosaic-2',
    title: 'Operation theatre',
    subtitle: 'Fully equipped for day-care surgery',
    image: '/images/achievements/facility-operation-theatre.jpg',
    alt: 'Well equipped Operation Theater at Shri Manmukund Hospital',
    sizeClass: 'tile',
  },
  {
    id: 'mosaic-3',
    title: 'Panchakarma & Swedan',
    subtitle: 'Dedicated therapy rooms',
    image: '/images/achievements/facility-panchakarma-droni.jpg',
    alt: 'Panchakarma and Swedan therapy facility at Shri Manmukund Hospital',
    sizeClass: 'tile',
  },
  {
    id: 'mosaic-4',
    title: 'Gurusmaran 2024',
    subtitle: 'Gurusmaran 2024, Amravati',
    image: '/images/achievements/gurusmaran-2024.jpg',
    alt: 'Gurusmaran 2024, Amravati',
    sizeClass: 'tile wide',
  },
];

export const AchievementsClient: React.FC = () => {
  const [filter, setFilter] = useState<FilterCategory>('all');
  const [lightbox, setLightbox] = useState<{
    isOpen: boolean;
    title: string;
    image: string;
    issuer?: string;
    desc?: string;
  }>({
    isOpen: false,
    title: '',
    image: '',
    issuer: '',
    desc: '',
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    const elements = document.querySelectorAll('.rv');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [filter]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightbox((prev) => ({ ...prev, isOpen: false }));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const openLightbox = (
    title: string,
    image: string,
    issuer?: string,
    desc?: string
  ) => {
    setLightbox({
      isOpen: true,
      title,
      image,
      issuer,
      desc,
    });
  };

  const closeLightbox = () => {
    setLightbox((prev) => ({ ...prev, isOpen: false }));
  };

  const filteredHonours = HONOURS_DATA.filter((item) => {
    if (filter === 'all') return true;
    return item.categories.includes(filter);
  });

  return (
    <div className="achievements-page">
      <main>
        {/* 1. HERO */}
        <section className="hero">
          <div className="wrap">
            <div className="crumbs">
              <Link href="/">Home</Link> &nbsp;/&nbsp; <Link href="/about/">About</Link> &nbsp;/&nbsp; Achievements
            </div>
            <div className="hero-grid">
              <div>
                <div className="eyebrow">Achievements &amp; Recognition</div>
                <h1>
                  Fifteen years of care, <em>recognised</em> one patient at a time.
                </h1>
                <p className="lede">
                  From a single OPD in 2011 to a full surgical and Ayurvedic hospital in Amravati, every milestone here was earned in the consulting room and the operation theatre. Here are the milestones, credentials and patient trust that mark that journey.
                </p>
                <div className="hero-actions">
                  <a href="#honours" className="btn btn-primary">
                    View honours
                  </a>
                  <a href="#journey" className="btn btn-ghost">
                    Our journey
                  </a>
                </div>
                <div className="sanskrit">
                  <b className="deva">कीर्ति</b> Kirti: recognition that follows good work
                </div>
              </div>
              <div className="medal" aria-hidden="true">
                <svg viewBox="0 0 400 400">
                  <defs>
                    <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0" stopColor="#D4AA6E" />
                      <stop offset="1" stopColor="#B8894A" />
                    </linearGradient>
                  </defs>
                  <circle cx="200" cy="190" r="168" fill="none" stroke="#E5DCC6" strokeWidth="1.5" strokeDasharray="3 7" />
                  <circle cx="200" cy="190" r="138" fill="#FFFDF7" stroke="#E5DCC6" />
                  <g fill="#6B7F5F" opacity=".9">
                    {/* laurel left */}
                    <path d="M118 250c-22-30-24-70-6-104 4 36 12 70 6 104z" />
                    <path d="M104 214c-24-12-36-36-34-62 16 18 30 38 34 62z" />
                    <path d="M110 176c-20-18-24-44-16-68 12 22 18 44 16 68z" />
                    <path d="M126 140c-12-22-8-48 8-66 2 24 0 46-8 66z" />
                    {/* laurel right */}
                    <path d="M282 250c22-30 24-70 6-104-4 36-12 70-6 104z" />
                    <path d="M296 214c24-12 36-36 34-62-16 18-30 38-34 62z" />
                    <path d="M290 176c20-18 24-44 16-68-12 22-18 44-16 68z" />
                    <path d="M274 140c12-22 8-48-8-66-2 24 0 46 8 66z" />
                  </g>
                  <circle cx="200" cy="180" r="70" fill="url(#g1)" />
                  <circle cx="200" cy="180" r="58" fill="none" stroke="#FBF7EC" strokeWidth="1.5" opacity=".7" />
                  <text x="200" y="174" textAnchor="middle" fontFamily="Fraunces, serif" fontSize="40" fill="#FBF7EC">
                    15
                  </text>
                  <text x="200" y="200" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" letterSpacing="2.5" fill="#FBF7EC">
                    YEARS
                  </text>
                  <path d="M168 244l-14 64 24-14 14 24 12-70z" fill="#1B3A5B" />
                  <path d="M232 244l14 64-24-14-14 24-12-70z" fill="#C08477" />
                </svg>
                <div className="medal-caption">
                  <strong>Since 2011</strong>
                  <span>Serving Amravati and Vidarbha</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. JOURNEY */}
        <section id="journey">
          <div className="wrap">
            <div className="sec-head center sec-head-center" style={{ justifyContent: 'center', textAlign: 'center', alignItems: 'center' }}>
              <div style={{ textAlign: 'center' }}>
                <div className="eyebrow" style={{ textAlign: 'center' }}>Our Journey</div>
                <h2 style={{ textAlign: 'center' }}>Milestones that built the hospital</h2>
              </div>
            </div>
            <div className="timeline">
              <div className="tl-item rv">
                <div className="tl-card">
                  <div className="tl-year">2011</div>
                  <h3>The first OPD opens</h3>
                  <p>
                    Dr. Vipin and Dr. Swati Tongale begin outpatient practice in Amravati, blending the advances of modern surgery with the depth of Ayurveda.
                  </p>
                </div>
                <div className="tl-dot"></div>
              </div>
              <div className="tl-item rv">
                <div className="tl-dot"></div>
                <div className="tl-card">
                  <div className="tl-year">2016</div>
                  <h3>A full inpatient hospital</h3>
                  <p>
                    The hospital opens inpatient care with its own operation theatre.
                  </p>
                </div>
              </div>
              <div className="tl-item rv">
                <div className="tl-card">
                  <div className="tl-year">Jan 2024</div>
                  <h3>Gurusmaran 2024</h3>
                  <p>
                    Dr. Vipin Tongale serves on the organising committee of Gurusmaran 2024 in Amravati.
                  </p>
                </div>
                <div className="tl-dot"></div>
              </div>
              <div className="tl-item rv">
                <div className="tl-dot"></div>
                <div className="tl-card">
                  <div className="tl-year">Jun 2024</div>
                  <h3>Our permanent home in Bapatwadi</h3>
                  <p>
                    In June, the hospital moves to its permanent premises in Bapatwadi.
                  </p>
                </div>
              </div>
              <div className="tl-item now rv">
                <div className="tl-card">
                  <div className="tl-year">Today</div>
                  <h3>Advanced Proctology &amp; Integrated Care</h3>
                  <p>
                    Five specialty units, from anorectal and general surgery to Panchakarma and a dedicated Gynaecology &amp; Women&apos;s Wellness Unit led by Dr. Swati Tongale.
                  </p>
                </div>
                <div className="tl-dot"></div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. HONOURS */}
        <section className="honours" id="honours">
          <div className="wrap">
            <div className="sec-head">
              <div>
                <div className="eyebrow">Recognition &amp; Credentials</div>
                <h2>What fifteen years have earned</h2>
              </div>
              <div className="filters" role="group" aria-label="Filter recognition">
                <button
                  className={`chip ${filter === 'all' ? 'on' : ''}`}
                  onClick={() => setFilter('all')}
                >
                  All
                </button>
                <button
                  className={`chip ${filter === 'award' ? 'on' : ''}`}
                  onClick={() => setFilter('award')}
                >
                  Awards
                </button>
                <button
                  className={`chip ${filter === 'academic' ? 'on' : ''}`}
                  onClick={() => setFilter('academic')}
                >
                  Academic &amp; Research
                </button>
                <button
                  className={`chip ${filter === 'community' ? 'on' : ''}`}
                  onClick={() => setFilter('community')}
                >
                  Community
                </button>
                <button
                  className={`chip ${filter === 'media' ? 'on' : ''}`}
                  onClick={() => setFilter('media')}
                >
                  Patient trust
                </button>
              </div>
            </div>

            <div className="h-grid">
              {filteredHonours.map((item) => (
                <article
                  key={item.id}
                  className={`h-card ${item.isFeatured ? 'featured' : ''} ${
                    item.isFullWidth ? 'featured full' : ''
                  } rv`}
                >
                  <button
                    className="h-cert"
                    onClick={() =>
                      openLightbox(
                        item.title,
                        item.image,
                        item.issuer,
                        item.quote || item.desc
                      )
                    }
                    aria-label={`View ${item.title}`}
                  >
                    <Image
                      src={item.image}
                      alt={item.alt}
                      width={600}
                      height={450}
                      className="w-full h-full object-cover"
                    />
                    <span className="zoom">View</span>
                  </button>
                  <div className="h-body">
                    <div className="h-meta">
                      <span
                        className={`tag ${
                          item.tag.toLowerCase().includes('award')
                            ? 'tag-award'
                            : item.tag.toLowerCase().includes('research') ||
                              item.tag.toLowerCase().includes('academic') ||
                              item.tag.toLowerCase().includes('jury') ||
                              item.tag.toLowerCase().includes('doctorate')
                            ? 'tag-academic'
                            : item.tag.toLowerCase().includes('trust')
                            ? 'tag-media'
                            : 'tag-community'
                        }`}
                      >
                        {item.tag}
                      </span>
                      <span className="h-year">{item.year}</span>
                    </div>
                    {item.marathiLine && (
                      <blockquote className="deva font-medium">{item.marathiLine}</blockquote>
                    )}
                    <h3>{item.title}</h3>
                    <div className="h-issuer">{item.issuer}</div>
                    {item.quote && <blockquote>&ldquo;{item.quote}&rdquo;</blockquote>}
                    {item.desc && <p className="h-desc">{item.desc}</p>}
                    <div className="h-who">
                      <span
                        className={`who-dot ${
                          item.whoType === 'swati'
                            ? 'swati'
                            : item.whoType === 'hosp'
                            ? 'hosp'
                            : ''
                        }`}
                      ></span>
                      {item.who}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 5. ACADEMIC */}
        <section id="academic">
          <div className="wrap">
            <div className="sec-head">
              <div>
                <div className="eyebrow">The Doctors</div>
                <h2>Two surgeons, one shared discipline</h2>
              </div>
              <p className="lede">
                Both founders trained in Shalya Tantra, the surgical branch of Ayurveda described by Sushruta, and practise it alongside modern surgical technique.
              </p>
            </div>
            <div className="acad-grid">
              <div className="doc-panel rv">
                <div className="doc-head">
                  <div className="doc-av">
                    <Image
                      src="/images/doctors/dr-vipin-tongale.jpg"
                      alt="Dr. Vipin Tongale"
                      width={80}
                      height={80}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <h3>Dr. Vipin Tongale</h3>
                    <p>MS Ayurveda (Shalya Tantra), PhD · Consultant Surgeon &amp; Proctologist</p>
                  </div>
                </div>
                <ul className="acad-list">
                  <li>
                    <span className="yr">PhD</span>
                    <div>
                      <strong>Doctorate in Ayurveda</strong>
                      <span>Research-led approach to surgical and anorectal care</span>
                    </div>
                  </li>
                  <li>
                    <span className="yr">MS</span>
                    <div>
                      <strong>Ayurveda, Shalya Tantra</strong>
                      <span>Postgraduate specialisation in surgery</span>
                    </div>
                  </li>
                  <li>
                    <span className="yr">2024</span>
                    <div>
                      <strong>Gurusmaran 2024</strong>
                      <span>Organising committee, Gurusmaran 2024</span>
                    </div>
                  </li>
                  <li>
                    <span className="yr">Focus</span>
                    <div>
                      <strong>Anorectal and general surgery</strong>
                      <span>Ksharasutra, piles, fissure, fistula, hernia, hydrocele, gallbladder, renal calculi</span>
                    </div>
                  </li>
                </ul>
                <Link href="/dr-vipin/" className="doc-link">
                  Full profile &rarr;
                </Link>
              </div>

              <div className="doc-panel swati rv">
                <div className="doc-head">
                  <div className="doc-av">
                    <Image
                      src="/images/doctors/dr-swati-tongale.jpg"
                      alt="Dr. Swati Tongale"
                      width={80}
                      height={80}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <h3>Dr. Swati Tongale</h3>
                    <p>MS Ayurveda (Shalya Tantra) · Consultant Surgeon &amp; Proctologist</p>
                  </div>
                </div>
                <ul className="acad-list">
                  <li>
                    <span className="yr">MS</span>
                    <div>
                      <strong>Ayurveda, Shalya Tantra</strong>
                      <span>Postgraduate specialisation in surgery</span>
                    </div>
                  </li>
                  <li>
                    <span className="yr">2011</span>
                    <div>
                      <strong>Co-founder</strong>
                      <span>Building Shri Manmukund Hospital from OPD to inpatient hospital</span>
                    </div>
                  </li>
                  <li>
                    <span className="yr">Lead</span>
                    <div>
                      <strong>Gynaecology &amp; Women&apos;s Wellness Unit</strong>
                      <span>Uttarbasti, infertility care, menstrual and hormonal health</span>
                    </div>
                  </li>
                  <li>
                    <span className="yr">Focus</span>
                    <div>
                      <strong>Care for women, by a woman surgeon</strong>
                      <span>Female proctology and Masanumasik Garbhasanskar</span>
                    </div>
                  </li>
                </ul>
                <Link href="/dr-swati/" className="doc-link">
                  Full profile &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 6. FACILITY (photo mosaic) */}
        <section className="community" id="community">
          <div className="wrap">
            <div className="sec-head">
              <div>
                <div className="eyebrow">Built for Recovery</div>
                <h2 style={{ color: '#fff' }}>A hospital we built around our patients</h2>
              </div>
              <p className="lede">
                Our Bapatwadi premises, opened in June 2024, bring every stage of care into one building: consultation, surgery, Panchakarma and recovery.
              </p>
            </div>
            <div className="mosaic">
              {MOSAIC_ITEMS.map((tile) => (
                <button
                  key={tile.id}
                  className={`${tile.sizeClass} rv`}
                  onClick={() => openLightbox(tile.title, tile.image, tile.title, tile.subtitle)}
                  aria-label={`View ${tile.title}`}
                >
                  <Image
                    src={tile.image}
                    alt={tile.alt}
                    width={800}
                    height={600}
                    className="object-cover w-full h-full"
                    style={tile.imagePosition ? { objectPosition: tile.imagePosition } : undefined}
                  />
                  <span className="cap">
                    <b>{tile.title}</b>
                    {tile.subtitle}
                  </span>
                </button>
              ))}
            </div>
            <div className="comm-stats">
              <div>
                <strong>6</strong>
                <span>care spaces: OT, Panchakarma, Swedan, ward, AC rooms, pharmacy</span>
              </div>
              <div>
                <strong>24h</strong>
                <span>emergency line, 94054 04492</span>
              </div>
              <div>
                <strong>Mon to Sat</strong>
                <span>OPD 1 to 4:30 pm and 6 to 8 pm</span>
              </div>
            </div>
          </div>
        </section>

        {/* 7. PATIENT TRUST */}
        <section id="media">
          <div className="wrap">
            <div className="sec-head">
              <div>
                <div className="eyebrow">Patient Trust</div>
                <h2>The recognition that matters most</h2>
              </div>
              <p className="lede">
                What patients mention again and again in their reviews.
              </p>
            </div>
            <div className="press">
              <div className="clip rv">
                <span className="lang">Theme</span>
                <span className="outlet">Skilled surgical care</span>
                <p>Patients repeatedly name Dr. Vipin Tongale&apos;s expertise and the surgical team&apos;s skill.</p>
              </div>
              <div className="clip rv">
                <span className="lang">Theme</span>
                <span className="outlet">Quick recovery</span>
                <p>Reviews often mention same-day discharge after anorectal surgery.</p>
              </div>
              <div className="clip rv">
                <span className="lang">Theme</span>
                <span className="outlet">Two systems, one plan</span>
                <p>Patients value modern surgery and Ayurvedic treatment working together.</p>
              </div>
              <div className="clip rv">
                <span className="lang">Theme</span>
                <span className="outlet">Clean, caring, fair</span>
                <p>A clean facility, attentive staff and affordable treatment come up often.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 8. CTA */}
        <section className="cta">
          <div className="wrap">
            <div className="cta-box rv">
              <div>
                <h2>The same care that earned these honours is available to you.</h2>
                <p>
                  Consult Dr. Vipin or Dr. Swati Tongale for piles, fissure, fistula and integrated Ayurvedic treatment.
                </p>
              </div>
              <div className="cta-actions">
                <Link href="/contact/#book" className="btn btn-light">
                  Book an appointment
                </Link>
                <a href="tel:+918208927917" className="btn btn-outline-light">
                  Call 82089 27917
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Lightbox Modal */}
      {lightbox.isOpen && (
        <div
          className="lb"
          role="dialog"
          aria-modal="true"
          aria-label="Certificate viewer"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeLightbox();
          }}
        >
          <div className="lb-inner">
            <div className="lb-img-wrap">
              <Image
                src={lightbox.image}
                alt={lightbox.title}
                width={1200}
                height={900}
                className="object-contain"
              />
            </div>
            <div className="lb-txt">
              <div>
                <strong>{lightbox.title}</strong>
                {lightbox.issuer && <p>{lightbox.issuer}</p>}
                {lightbox.desc && <p style={{ marginTop: '4px', fontSize: '13px' }}>{lightbox.desc}</p>}
              </div>
              <button className="lb-close" onClick={closeLightbox}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

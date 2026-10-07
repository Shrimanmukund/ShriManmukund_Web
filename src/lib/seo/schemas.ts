import type {
  DoctorProfile,
  ConditionPageData,
  ProcedurePageData,
  KnowledgePieceData,
  FAQItem,
} from '@/types/content';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://shrimanmukundhospital.com';

export function generateHospitalSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['Hospital', 'MedicalOrganization', 'LocalBusiness', 'MedicalBusiness'],
    '@id': `${SITE_URL}/#hospital`,
    name: 'Shri Manmukund Hospital',
    alternateName: [
      'Shri Manmukund Hospital, Amravati',
      'श्री मनमुकूंद हाॅस्पिटल',
      'Shri Manmukund Proctology & Integrated Surgical Hospital',
    ],
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo/logo.jpg`,
    image: [
      `${SITE_URL}/images/logo/logo.jpg`,
      `${SITE_URL}/images/hero/ayurveda-meets-modern-surgery.webp`,
    ],
    description:
      'Premier proctology, general surgery, and integrated Ayurvedic hospital in Amravati, Maharashtra led by MS Ayurveda Shalya Tantra specialists Dr. Vipin Tongale and Dr. Swati Tongale. Over 16,000 surgeries performed since 2011.',
    telephone: '+91-8208927917',
    emergencyTelephone: '+91-9405404492',
    priceRange: '$$',
    currenciesAccepted: 'INR',
    paymentAccepted: 'Cash, UPI, Net Banking, Bank Transfer',
    isAcceptingNewPatients: true,
    hasMap: 'https://maps.google.com/?q=Shri+Manmukund+Hospital+Amravati',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Plot No. 7, Bapatwadi, Vivekanand Colony to Radient Hospital Road',
      addressLocality: 'Amravati',
      addressRegion: 'Maharashtra',
      postalCode: '444604',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '20.9374',
      longitude: '77.7796',
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Amravati',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Vidarbha',
      },
      {
        '@type': 'State',
        name: 'Maharashtra',
      },
      {
        '@type': 'Country',
        name: 'India',
      },
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '13:00',
        closes: '16:30',
        description: 'Afternoon OPD Consultations',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '18:00',
        closes: '20:30',
        description: 'Evening OPD Consultations',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: '10:00',
        closes: '13:00',
        description: 'Prior Appointment Only',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
        description: '24-Hour Emergency Surgical Services',
      },
    ],
    medicalSpecialty: [
      'Proctology',
      'GeneralSurgery',
      'AyurvedicSurgery',
      'Panchakarma',
    ],
    availableService: [
      {
        '@type': 'MedicalProcedure',
        name: 'Ksharsutra Treatment for Anal Fistula and Piles',
        description: 'Gold-standard Ayurvedic parasurgical ligation for high, complex, and recurrent anal fistulas.',
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Laser Proctology (LHP, FiLaC, SiLaC)',
        description: 'Minimally invasive laser surgery for haemorrhoids, fistulas, and pilonidal sinuses.',
      },
      {
        '@type': 'MedicalProcedure',
        name: 'General Surgery',
        description: 'Surgical repair of inguinal/umbilical hernia, hydrocele, lipoma, and emergency abscess drainage.',
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Uttarbasti Therapy & Female Care',
        description: 'Specialised intrauterine therapy for tubal blockage, thin endometrium, PCOD, and female infertility.',
      },
    ],
  };
}

export function generateDoctorSchema(doctor: DoctorProfile) {
  return {
    '@context': 'https://schema.org',
    '@type': ['Physician', 'Person'],
    '@id': `${SITE_URL}/${doctor.slug}/#doctor`,
    name: `${doctor.honorific} ${doctor.fullName}`,
    url: `${SITE_URL}/${doctor.slug}/`,
    image: doctor.portraitUrl ? (doctor.portraitUrl.startsWith('http') ? doctor.portraitUrl : `${SITE_URL}${doctor.portraitUrl}`) : `${SITE_URL}/images/doctors/${doctor.slug}-portrait.webp`,
    jobTitle: doctor.designations[0] || 'Ayurvedic Surgeon and Proctologist',
    worksFor: {
      '@type': 'Hospital',
      name: 'Shri Manmukund Hospital',
      url: SITE_URL,
    },
    medicalSpecialty: doctor.specialties,
    knowsLanguage: doctor.languagesSpoken,
    description: doctor.shortBio,
    gender: doctor.slug === 'dr-swati' ? 'Female' : 'Male',
    telephone: '+91-8208927917',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Plot No. 7, Bapatwadi, Vivekanand Colony to Radient Hospital Road',
      addressLocality: 'Amravati',
      addressRegion: 'Maharashtra',
      postalCode: '444604',
      addressCountry: 'IN',
    },
  };
}

export function generateConditionSchema(condition: ConditionPageData) {
  return {
    '@context': 'https://schema.org',
    '@type': ['MedicalCondition', 'MedicalWebPage'],
    name: condition.name,
    alternateName: [condition.nameSanskrit, condition.nameHindi, condition.nameMarathi].filter(Boolean),
    description: condition.answerFirstSummary,
    url: `${SITE_URL}/services/${condition.categorySlug}/${condition.slug}/`,
    lastReviewed: condition.lastReviewedAt,
    reviewedBy: {
      '@type': 'Physician',
      name: condition.medicallyReviewedBySlug === 'dr-vipin' ? 'Dr. Vipin Tongale' : 'Dr. Swati Tongale',
    },
    publisher: {
      '@type': 'Hospital',
      name: 'Shri Manmukund Hospital',
      url: SITE_URL,
    },
  };
}

export function generateProcedureSchema(procedure: ProcedurePageData) {
  return {
    '@context': 'https://schema.org',
    '@type': ['MedicalProcedure', 'MedicalWebPage'],
    name: procedure.name,
    description: procedure.answerFirstSummary,
    url: `${SITE_URL}/services/${procedure.categorySlug}/${procedure.slug}/`,
    lastReviewed: procedure.lastReviewedAt,
    bodyLocation: procedure.categoryName,
    reviewedBy: {
      '@type': 'Physician',
      name: procedure.medicallyReviewedBySlug === 'dr-vipin' ? 'Dr. Vipin Tongale' : 'Dr. Swati Tongale',
    },
    publisher: {
      '@type': 'Hospital',
      name: 'Shri Manmukund Hospital',
      url: SITE_URL,
    },
  };
}

export function generateFAQSchema(faqs: FAQItem[]) {
  if (!faqs || faqs.length === 0) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer.replace(/<[^>]*>/g, '').trim(),
      },
    })),
  };
}

export function generateArticleSchema(piece: KnowledgePieceData) {
  const schemaType = piece.cluster === 'playbook' ? 'HowTo' : 'Article';
  return {
    '@context': 'https://schema.org',
    '@type': schemaType,
    headline: piece.title,
    description: piece.excerpt,
    datePublished: piece.publishedDate,
    dateModified: piece.lastUpdatedDate,
    author: {
      '@type': 'Physician',
      name: piece.authorSlug === 'dr-vipin' ? 'Dr. Vipin Tongale' : 'Dr. Swati Tongale',
      url: `${SITE_URL}/${piece.authorSlug}/`,
    },
    publisher: {
      '@type': 'Hospital',
      name: 'Shri Manmukund Hospital',
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/images/logo/logo.jpg`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/knowledge/${piece.cluster}/${piece.slug}/`,
    },
  };
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url.startsWith('/') ? item.url : `/${item.url}`}`,
    })),
  };
}

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
    '@type': ['Hospital', 'MedicalOrganization', 'LocalBusiness'],
    '@id': `${SITE_URL}/#hospital`,
    name: 'Shri Manmukund Hospital',
    alternateName: 'Shri Manmukund Hospital, Amravati',
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo/logo.jpg`,
    image: `${SITE_URL}/images/logo/logo.jpg`,
    description:
      'Premier surgical, anorectal, and integrated Ayurvedic hospital in Amravati led by MS Ayurveda Shalya Tantra specialists Dr. Vipin Tongale and Dr. Swati Tongale.',
    telephone: '+91-8208927917',
    emergencyTelephone: '+91-9405404492',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Plot No 7, Bapatwadi, Near Tapovan Gate',
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
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '13:00',
        closes: '20:30',
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
        description: '24-Hour Emergency Services',
      },
    ],
    medicalSpecialty: [
      'Proctology',
      'GeneralSurgery',
      'AyurvedicSurgery',
      'Panchakarma',
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
    image: doctor.portraitUrl || `${SITE_URL}/images/doctors/${doctor.slug}-portrait.webp`,
    jobTitle: doctor.designations[0] || 'Ayurvedic Surgeon and Proctologist',
    worksFor: {
      '@type': 'Hospital',
      name: 'Shri Manmukund Hospital',
      url: SITE_URL,
    },
    medicalSpecialty: doctor.specialties,
    knowsLanguage: doctor.languagesSpoken,
    description: doctor.shortBio,
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
        text: faq.answer,
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
      item: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
}

export interface DoctorProfile {
  slug: 'dr-vipin' | 'dr-swati';
  fullName: string;
  honorific: string;
  credentials: string[];
  registrationNumbers: Array<{ council: string; number: string }>;
  designations: string[];
  specialties: string[];
  yearsOfExperience: number;
  proceduresPerformed: number;
  languagesSpoken: string[];
  photographUrl?: string;
  portraitUrl?: string;
  shortBio: string;
  fullBioMarkdown: string;
  journey: Array<{ year: string; title: string; institution: string; description?: string }>;
  awards: Array<{ title: string; year?: string; issuer?: string }>;
  memberships: string[];
  consultationTimings: {
    morning?: string;
    evening?: string;
    sunday?: string;
    emergency?: string;
  };
  metaTitle: string;
  metaDescription: string;
}

export interface ServiceCategory {
  slug: string;
  name: string;
  nameSanskrit?: string;
  shortDescription: string;
  fullDescriptionMarkdown?: string;
  iconName: string;
  leadDoctorSlug?: 'dr-vipin' | 'dr-swati';
  orderIndex: number;
  conditions: ConditionSummary[];
  procedures?: ProcedureSummary[];
  metaTitle: string;
  metaDescription: string;
}

export interface TreatmentOption {
  title: string;
  category: 'conservative' | 'opd' | 'ksharsutra' | 'laser' | 'surgery' | 'ayurveda' | 'panchakarma';
  shortSummary: string;
  detailsMarkdown: string;
  isAvailableAtManmukund: boolean;
  idealFor?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ConditionSummary {
  slug: string;
  categorySlug: string;
  name: string;
  nameSanskrit?: string;
  shortSummary: string;
  tags?: string[];
  linkText?: string;
  iconLetter?: string;
}

export interface ConditionPageData {
  slug: string;
  categorySlug: string;
  categoryName: string;
  name: string;
  nameSanskrit?: string;
  nameHindi?: string;
  nameMarathi?: string;
  answerFirstSummary: string;
  definitionMarkdown: string;
  symptomsMarkdown: string;
  causesRiskFactorsMarkdown: string;
  whenToSeeSpecialistMarkdown: string;
  diagnosisMarkdown: string;
  treatmentOptions: TreatmentOption[];
  recoveryMarkdown: string;
  preventionMarkdown: string;
  faqs: FAQItem[];
  relatedConditionSlugs: string[];
  leadDoctorSlug: 'dr-vipin' | 'dr-swati';
  medicallyReviewedBySlug: 'dr-vipin' | 'dr-swati';
  emergencyCalloutRequired: boolean;
  emergencyCalloutText?: string;
  metaTitle: string;
  metaDescription: string;
  canonicalUrl?: string;
  lastReviewedAt: string;
}

export interface ProcedureStep {
  stepNumber: number;
  title: string;
  descriptionMarkdown: string;
}

export interface ProcedureSummary {
  slug: string;
  categorySlug: string;
  name: string;
  shortSummary: string;
}

export interface ProcedurePageData {
  slug: string;
  categorySlug: string;
  categoryName: string;
  name: string;
  answerFirstSummary: string;
  overviewMarkdown: string;
  indicationsMarkdown: string;
  procedureSteps: ProcedureStep[];
  duration?: string;
  anaesthesia?: string;
  recoveryMarkdown: string;
  risksMarkdown?: string;
  alternativesMarkdown?: string;
  costFrameworkGuidance?: string;
  faqs: FAQItem[];
  leadDoctorSlug: 'dr-vipin' | 'dr-swati';
  medicallyReviewedBySlug: 'dr-vipin' | 'dr-swati';
  metaTitle: string;
  metaDescription: string;
  canonicalUrl?: string;
  lastReviewedAt: string;
}

export interface KnowledgePieceData {
  slug: string;
  cluster: 'playbook' | 'whitepaper' | 'research' | 'blog' | 'article' | 'insights';
  title: string;
  subtitle?: string;
  authorSlug: 'dr-vipin' | 'dr-swati';
  medicallyReviewedBySlug?: 'dr-vipin' | 'dr-swati';
  publishedDate: string;
  lastUpdatedDate: string;
  estimatedReadTimeMins: number;
  featuredImageUrl?: string;
  excerpt: string;
  bodyMarkdown: string;
  categories: string[];
  tags: string[];
  citations?: Array<{ text: string; url?: string; source?: string }>;
  downloadablePdfUrl?: string;
  metaTitle: string;
  metaDescription: string;
}

export interface PatientResourceData {
  slug: string;
  title: string;
  summary: string;
  bodyMarkdown: string;
  faqs: FAQItem[];
  metaTitle: string;
  metaDescription: string;
}

export interface TestimonialData {
  id?: string;
  patientName: string;
  city?: string;
  serviceCategorySlug?: string;
  serviceName?: string;
  rating: number;
  reviewText: string;
  reviewDate: string;
  source: 'google' | 'in-person' | 'email';
  sourceUrl?: string;
  displayPermissionGranted: boolean;
  isApproved: boolean;
  isFeatured: boolean;
}

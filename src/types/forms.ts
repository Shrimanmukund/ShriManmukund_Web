export interface AppointmentEnquiryInput {
  patientName: string;
  age?: string;
  phone: string;
  email?: string;
  preferredDate?: string;
  preferredTimeSlot?: string;
  doctorSlug?: string;
  reasonForVisit?: string;
  serviceCategorySlug?: string;
  conditionSlug?: string;
  message?: string;
  honeypot?: string; // Anti-spam trap
}

export interface FormSubmissionResult {
  success: boolean;
  message: string;
  errors?: Record<string, string>;
}

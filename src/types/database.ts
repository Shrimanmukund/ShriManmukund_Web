export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type KnowledgeCluster =
  | 'playbook'
  | 'whitepaper'
  | 'research'
  | 'blog'
  | 'article'
  | 'insights';

export type EnquiryStatus = 'new' | 'contacted' | 'scheduled' | 'archived';

export type ReviewSource = 'google' | 'in-person' | 'email';

export interface Database {
  public: {
    Tables: {
      doctors: {
        Row: {
          id: string;
          slug: string;
          full_name: string;
          honorific: string;
          credentials: string[];
          registration_numbers: Json;
          designations: string[];
          specialties: string[];
          years_of_experience: number;
          procedures_performed: number;
          languages_spoken: string[];
          photograph_url: string | null;
          portrait_url: string | null;
          short_bio: string;
          full_bio_markdown: string;
          journey: Json;
          awards: Json;
          memberships: Json;
          consultation_timings: Json;
          meta_title: string | null;
          meta_description: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          slug: string;
          full_name: string;
          honorific?: string;
          credentials: string[];
          registration_numbers?: Json;
          designations: string[];
          specialties: string[];
          years_of_experience: number;
          procedures_performed: number;
          languages_spoken: string[];
          photograph_url?: string | null;
          portrait_url?: string | null;
          short_bio: string;
          full_bio_markdown: string;
          journey?: Json;
          awards?: Json;
          memberships?: Json;
          consultation_timings?: Json;
          meta_title?: string | null;
          meta_description?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          slug?: string;
          full_name?: string;
          honorific?: string;
          credentials?: string[];
          registration_numbers?: Json;
          designations?: string[];
          specialties?: string[];
          years_of_experience?: number;
          procedures_performed?: number;
          languages_spoken?: string[];
          photograph_url?: string | null;
          portrait_url?: string | null;
          short_bio?: string;
          full_bio_markdown?: string;
          journey?: Json;
          awards?: Json;
          memberships?: Json;
          consultation_timings?: Json;
          meta_title?: string | null;
          meta_description?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      service_categories: {
        Row: {
          id: string;
          slug: string;
          name: string;
          name_sanskrit: string | null;
          short_description: string;
          full_description_markdown: string | null;
          icon_name: string;
          lead_doctor_id: string | null;
          order_index: number;
          meta_title: string | null;
          meta_description: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          slug: string;
          name: string;
          name_sanskrit?: string | null;
          short_description: string;
          full_description_markdown?: string | null;
          icon_name?: string;
          lead_doctor_id?: string | null;
          order_index?: number;
          meta_title?: string | null;
          meta_description?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          slug?: string;
          name?: string;
          name_sanskrit?: string | null;
          short_description?: string;
          full_description_markdown?: string | null;
          icon_name?: string;
          lead_doctor_id?: string | null;
          order_index?: number;
          meta_title?: string | null;
          meta_description?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      conditions: {
        Row: {
          id: string;
          slug: string;
          category_id: string;
          name: string;
          name_sanskrit: string | null;
          name_hindi: string | null;
          name_marathi: string | null;
          answer_first_summary: string;
          definition_markdown: string;
          symptoms_markdown: string;
          causes_risk_factors_markdown: string;
          when_to_see_specialist_markdown: string;
          diagnosis_markdown: string;
          treatment_options: Json;
          recovery_markdown: string;
          prevention_markdown: string;
          faqs: Json;
          related_condition_slugs: string[];
          lead_doctor_id: string | null;
          medically_reviewed_by_id: string | null;
          emergency_callout_required: boolean;
          emergency_callout_text: string | null;
          order_index: number;
          is_published: boolean;
          meta_title: string | null;
          meta_description: string | null;
          canonical_url: string | null;
          last_reviewed_at: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          slug: string;
          category_id: string;
          name: string;
          name_sanskrit?: string | null;
          name_hindi?: string | null;
          name_marathi?: string | null;
          answer_first_summary: string;
          definition_markdown: string;
          symptoms_markdown: string;
          causes_risk_factors_markdown: string;
          when_to_see_specialist_markdown: string;
          diagnosis_markdown: string;
          treatment_options?: Json;
          recovery_markdown: string;
          prevention_markdown: string;
          faqs?: Json;
          related_condition_slugs?: string[];
          lead_doctor_id?: string | null;
          medically_reviewed_by_id?: string | null;
          emergency_callout_required?: boolean;
          emergency_callout_text?: string | null;
          order_index?: number;
          is_published?: boolean;
          meta_title?: string | null;
          meta_description?: string | null;
          canonical_url?: string | null;
          last_reviewed_at?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          slug?: string;
          category_id?: string;
          name?: string;
          name_sanskrit?: string | null;
          name_hindi?: string | null;
          name_marathi?: string | null;
          answer_first_summary?: string;
          definition_markdown?: string;
          symptoms_markdown?: string;
          causes_risk_factors_markdown?: string;
          when_to_see_specialist_markdown?: string;
          diagnosis_markdown?: string;
          treatment_options?: Json;
          recovery_markdown?: string;
          prevention_markdown?: string;
          faqs?: Json;
          related_condition_slugs?: string[];
          lead_doctor_id?: string | null;
          medically_reviewed_by_id?: string | null;
          emergency_callout_required?: boolean;
          emergency_callout_text?: string | null;
          order_index?: number;
          is_published?: boolean;
          meta_title?: string | null;
          meta_description?: string | null;
          canonical_url?: string | null;
          last_reviewed_at?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
      procedures: {
        Row: {
          id: string;
          slug: string;
          category_id: string;
          name: string;
          answer_first_summary: string;
          overview_markdown: string;
          indications_markdown: string;
          procedure_steps: Json;
          duration: string | null;
          anaesthesia: string | null;
          recovery_markdown: string;
          risks_markdown: string | null;
          alternatives_markdown: string | null;
          cost_framework_guidance: string | null;
          faqs: Json;
          lead_doctor_id: string | null;
          medically_reviewed_by_id: string | null;
          order_index: number;
          is_published: boolean;
          meta_title: string | null;
          meta_description: string | null;
          canonical_url: string | null;
          last_reviewed_at: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          slug: string;
          category_id: string;
          name: string;
          answer_first_summary: string;
          overview_markdown: string;
          indications_markdown: string;
          procedure_steps?: Json;
          duration?: string | null;
          anaesthesia?: string | null;
          recovery_markdown: string;
          risks_markdown?: string | null;
          alternatives_markdown?: string | null;
          cost_framework_guidance?: string | null;
          faqs?: Json;
          lead_doctor_id?: string | null;
          medically_reviewed_by_id?: string | null;
          order_index?: number;
          is_published?: boolean;
          meta_title?: string | null;
          meta_description?: string | null;
          canonical_url?: string | null;
          last_reviewed_at?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          slug?: string;
          category_id?: string;
          name?: string;
          answer_first_summary?: string;
          overview_markdown?: string;
          indications_markdown?: string;
          procedure_steps?: Json;
          duration?: string | null;
          anaesthesia?: string | null;
          recovery_markdown?: string;
          risks_markdown?: string | null;
          alternatives_markdown?: string | null;
          cost_framework_guidance?: string | null;
          faqs?: Json;
          lead_doctor_id?: string | null;
          medically_reviewed_by_id?: string | null;
          order_index?: number;
          is_published?: boolean;
          meta_title?: string | null;
          meta_description?: string | null;
          canonical_url?: string | null;
          last_reviewed_at?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
      knowledge_pieces: {
        Row: {
          id: string;
          slug: string;
          cluster: KnowledgeCluster;
          title: string;
          subtitle: string | null;
          author_id: string | null;
          medically_reviewed_by_id: string | null;
          published_date: string;
          last_updated_date: string;
          estimated_read_time_mins: number;
          featured_image_url: string | null;
          excerpt: string;
          body_markdown: string;
          categories: string[];
          tags: string[];
          citations: Json;
          downloadable_pdf_url: string | null;
          is_published: boolean;
          meta_title: string | null;
          meta_description: string | null;
          canonical_url: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          slug: string;
          cluster: KnowledgeCluster;
          title: string;
          subtitle?: string | null;
          author_id?: string | null;
          medically_reviewed_by_id?: string | null;
          published_date?: string;
          last_updated_date?: string;
          estimated_read_time_mins?: number;
          featured_image_url?: string | null;
          excerpt: string;
          body_markdown: string;
          categories?: string[];
          tags?: string[];
          citations?: Json;
          downloadable_pdf_url?: string | null;
          is_published?: boolean;
          meta_title?: string | null;
          meta_description?: string | null;
          canonical_url?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          slug?: string;
          cluster?: KnowledgeCluster;
          title?: string;
          subtitle?: string | null;
          author_id?: string | null;
          medically_reviewed_by_id?: string | null;
          published_date?: string;
          last_updated_date?: string;
          estimated_read_time_mins?: number;
          featured_image_url?: string | null;
          excerpt?: string;
          body_markdown?: string;
          categories?: string[];
          tags?: string[];
          citations?: Json;
          downloadable_pdf_url?: string | null;
          is_published?: boolean;
          meta_title?: string | null;
          meta_description?: string | null;
          canonical_url?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      patient_resources: {
        Row: {
          id: string;
          slug: string;
          title: string;
          summary: string;
          body_markdown: string;
          faqs: Json;
          order_index: number;
          meta_title: string | null;
          meta_description: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          slug: string;
          title: string;
          summary: string;
          body_markdown: string;
          faqs?: Json;
          order_index?: number;
          meta_title?: string | null;
          meta_description?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          slug?: string;
          title?: string;
          summary?: string;
          body_markdown?: string;
          faqs?: Json;
          order_index?: number;
          meta_title?: string | null;
          meta_description?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      testimonials: {
        Row: {
          id: string;
          patient_name: string;
          city: string | null;
          service_category_id: string | null;
          rating: number;
          review_text: string;
          review_date: string;
          source: ReviewSource;
          source_url: string | null;
          display_permission_granted: boolean;
          is_approved: boolean;
          is_featured: boolean;
          created_at: string;
        };
        Insert: {
          id?: string;
          patient_name: string;
          city?: string | null;
          service_category_id?: string | null;
          rating: number;
          review_text: string;
          review_date?: string;
          source?: ReviewSource;
          source_url?: string | null;
          display_permission_granted?: boolean;
          is_approved?: boolean;
          is_featured?: boolean;
          created_at?: string;
        };
        Update: {
          id?: string;
          patient_name?: string;
          city?: string | null;
          service_category_id?: string | null;
          rating?: number;
          review_text?: string;
          review_date?: string;
          source?: ReviewSource;
          source_url?: string | null;
          display_permission_granted?: boolean;
          is_approved?: boolean;
          is_featured?: boolean;
          created_at?: string;
        };
      };
      enquiries: {
        Row: {
          id: string;
          patient_name: string;
          phone: string;
          email: string | null;
          age: string | null;
          preferred_date: string | null;
          preferred_time_slot: string | null;
          doctor_slug: string | null;
          service_category_slug: string | null;
          condition_slug: string | null;
          reason_for_visit: string | null;
          message: string | null;
          status: EnquiryStatus;
          admin_notes: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          patient_name: string;
          phone: string;
          email?: string | null;
          age?: string | null;
          preferred_date?: string | null;
          preferred_time_slot?: string | null;
          doctor_slug?: string | null;
          service_category_slug?: string | null;
          condition_slug?: string | null;
          reason_for_visit?: string | null;
          message?: string | null;
          status?: EnquiryStatus;
          admin_notes?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          patient_name?: string;
          phone?: string;
          email?: string | null;
          age?: string | null;
          preferred_date?: string | null;
          preferred_time_slot?: string | null;
          doctor_slug?: string | null;
          service_category_slug?: string | null;
          condition_slug?: string | null;
          reason_for_visit?: string | null;
          message?: string | null;
          status?: EnquiryStatus;
          admin_notes?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      admin_users: {
        Row: {
          id: string;
          email: string;
          role: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          email: string;
          role?: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          role?: string;
          created_at?: string;
        };
      };
      newsletter_subscriptions: {
        Row: {
          id: string;
          email: string;
          source_page: string | null;
          status: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          email: string;
          source_page?: string | null;
          status?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          source_page?: string | null;
          status?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
    };
  };
}

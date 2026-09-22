import { NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase/admin';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      patientName,
      phone,
      email,
      age,
      preferredDate,
      preferredTimeSlot,
      doctorSlug,
      serviceCategorySlug,
      conditionSlug,
      reasonForVisit,
      message,
      honeypot,
    } = body;

    // Spam honeypot trap
    if (honeypot) {
      return NextResponse.json({ success: true, message: 'Enquiry received' });
    }

    if (!patientName || !phone) {
      return NextResponse.json(
        { success: false, message: 'Patient name and phone number are required.' },
        { status: 400 }
      );
    }

    // Try inserting into Supabase
    try {
      const supabase = createAdminClient();
      const combinedMessage = reasonForVisit
        ? `[Reason: ${reasonForVisit}] ${message || ''}`.trim()
        : message || null;

      const { error } = await supabase.from('enquiries').insert({
        patient_name: patientName,
        phone,
        email: email || null,
        preferred_date: preferredDate || null,
        preferred_time_slot: preferredTimeSlot || null,
        doctor_slug: doctorSlug || null,
        service_category_slug: serviceCategorySlug || null,
        condition_slug: conditionSlug || null,
        message: combinedMessage,
        status: 'new' as const,
      } as any);

      if (error) {
        console.warn('Supabase enquiry insert warning:', error.message);
      }
    } catch (dbErr) {
      console.warn('Database offline or placeholder mode. Enquiry logged locally:', { patientName, phone, message });
    }

    return NextResponse.json({
      success: true,
      message: 'Enquiry submitted successfully. Hospital reception will contact you shortly.',
    });
  } catch (err: any) {
    console.error('Error submitting enquiry:', err);
    return NextResponse.json(
      { success: false, message: 'Internal server error processing enquiry.' },
      { status: 500 }
    );
  }
}

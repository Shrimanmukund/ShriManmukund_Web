import { NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase/admin';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, sourcePage, honeypot } = body;

    // Spam honeypot trap
    if (honeypot) {
      return NextResponse.json({ success: true, message: 'Subscription received.' });
    }

    if (!email || !email.includes('@') || !email.includes('.')) {
      return NextResponse.json(
        { success: false, message: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    const cleanEmail = email.trim().toLowerCase();

    // Insert or update subscription in Supabase
    try {
      const supabase = createAdminClient();
      const { error } = await supabase.from('newsletter_subscriptions' as any).upsert(
        {
          email: cleanEmail,
          source_page: sourcePage || '/knowledge/',
          status: 'active',
          updated_at: new Date().toISOString(),
        } as any,
        { onConflict: 'email' }
      );

      if (error) {
        console.warn('Supabase newsletter subscription warning:', error.message);
      }
    } catch (dbErr) {
      console.warn('Database in fallback mode. Newsletter subscription logged locally:', cleanEmail);
    }

    return NextResponse.json({
      success: true,
      message: 'Thank you for subscribing to our clinical newsletter.',
    });
  } catch (err: any) {
    console.error('Error processing newsletter subscription:', err);
    return NextResponse.json(
      { success: false, message: 'Internal server error processing subscription.' },
      { status: 500 }
    );
  }
}

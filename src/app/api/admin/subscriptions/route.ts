import { NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase/admin';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const supabase = createAdminClient();
    const { data, error } = await (supabase.from('newsletter_subscriptions') as any)
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.warn('Error fetching subscriptions from Supabase:', error.message);
      return NextResponse.json({ success: true, subscriptions: [] });
    }

    return NextResponse.json({ success: true, subscriptions: data || [] });
  } catch (err: any) {
    console.error('Failed to load subscriptions:', err);
    return NextResponse.json({ success: true, subscriptions: [] });
  }
}

export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    const { id, status } = body;

    if (!id || !status) {
      return NextResponse.json({ success: false, message: 'ID and status required' }, { status: 400 });
    }

    const supabase = createAdminClient();
    const { error } = await (supabase.from('newsletter_subscriptions') as any)
      .update({ status, updated_at: new Date().toISOString() })
      .eq('id', id);

    if (error) {
      return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: 'Status updated' });
  } catch (err: any) {
    return NextResponse.json({ success: false, message: err.message }, { status: 500 });
  }
}

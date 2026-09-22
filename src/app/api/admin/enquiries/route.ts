import { NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase/admin';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const supabase = createAdminClient();
    const { data, error } = await supabase
      .from('enquiries')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.warn('Error fetching enquiries from Supabase:', error.message);
      return NextResponse.json({ success: true, enquiries: [] });
    }

    return NextResponse.json({ success: true, enquiries: data || [] });
  } catch (err: any) {
    console.error('Failed to load enquiries:', err);
    return NextResponse.json({ success: true, enquiries: [] });
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
    const { error } = await (supabase.from('enquiries') as any)
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

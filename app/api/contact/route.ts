import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '../../../lib/supabase';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, org, phone, email, service, location, message } = body;

    if (!name || !phone || !message) {
      return NextResponse.json({ error: 'Name, phone and message are required.' }, { status: 400 });
    }

    const { data, error } = await supabase.from('inquiries').insert({
      name,
      org: org || null,
      phone,
      email: email || null,
      service: service || null,
      location: location || null,
      message,
      status: 'new',
    }).select().single();

    if (error) {
      console.error('Inquiry insert error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data.id });
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}

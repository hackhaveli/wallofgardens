import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '../../../lib/supabase';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, org, phone, email, service, location, area, timeline, budget, message } = body;

    if (!name || !phone) {
      return NextResponse.json({ error: 'Name and mobile number are required.' }, { status: 400 });
    }

    const metadataParts = [
      message ? `Notes: ${message}` : null,
      area ? `Approx Area: ${area}` : null,
      timeline ? `Timeline: ${timeline}` : null,
      budget ? `Indicative Budget: ${budget}` : null,
    ].filter(Boolean);

    const formattedMessage = metadataParts.length > 0 ? metadataParts.join('\n') : 'Direct website inquiry';

    const { data, error } = await supabase.from('inquiries').insert({
      name,
      org: org || null,
      phone,
      email: email || null,
      service: service || null,
      location: location || null,
      message: formattedMessage,
      status: 'new',
    }).select().single();

    if (error) {
      console.error('Inquiry insert error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error('Inquiry submission error:', err);
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}

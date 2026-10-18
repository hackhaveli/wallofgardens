import { NextRequest, NextResponse } from 'next/server';
import { saveInquiry } from '../../../lib/inquiries';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, org, phone, email, service, location, area, timeline, budget, message } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { error: 'Name and phone number are required.' },
        { status: 400 }
      );
    }

    const { inquiry, whatsappUrl } = await saveInquiry({
      name,
      org,
      phone,
      email,
      service,
      location,
      area,
      timeline,
      budget,
      message,
    });

    return NextResponse.json({
      success: true,
      id: inquiry.id,
      whatsappUrl,
      message: 'Inquiry received successfully and logged in studio queue.',
    });
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json(
      { error: 'Could not process inquiry. Please message us on WhatsApp directly.' },
      { status: 500 }
    );
  }
}

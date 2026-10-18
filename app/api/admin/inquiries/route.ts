import { NextRequest, NextResponse } from 'next/server';
import { getAllInquiries, updateInquiry, deleteInquiry } from '../../../../lib/inquiries';

export async function GET() {
  try {
    const inquiries = await getAllInquiries();
    return NextResponse.json({ inquiries });
  } catch (err) {
    console.error('Admin inquiries GET error:', err);
    return NextResponse.json({ error: String(err), inquiries: [] }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, status, admin_notes } = body;

    if (!id) {
      return NextResponse.json({ error: 'Inquiry ID is required' }, { status: 400 });
    }

    await updateInquiry(id, { status, admin_notes });
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Admin inquiries PATCH error:', err);
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Inquiry ID is required' }, { status: 400 });
    }

    await deleteInquiry(id);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Admin inquiries DELETE error:', err);
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}

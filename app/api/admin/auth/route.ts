import { NextRequest, NextResponse } from 'next/server';
import { verifyAdminPassword, setAdminSession, clearAdminSession } from '../../../../lib/admin-auth';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { action, password } = body;

  if (action === 'login') {
    if (!verifyAdminPassword(password)) {
      return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
    }
    await setAdminSession();
    return NextResponse.json({ success: true });
  }

  if (action === 'logout') {
    await clearAdminSession();
    return NextResponse.json({ success: true });
  }

  return NextResponse.json({ error: 'Unknown action' }, { status: 400 });
}

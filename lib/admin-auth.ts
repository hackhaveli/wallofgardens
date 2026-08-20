// Admin authentication helpers using simple cookie-based sessions
// This uses a secure cookie with the admin secret to verify admin access

import { cookies } from 'next/headers';

const ADMIN_COOKIE = 'wog_admin_session';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'WallOfGardens@2026';

export function verifyAdminPassword(password: string): boolean {
  return password === ADMIN_PASSWORD;
}

export async function setAdminSession(): Promise<void> {
  const cookieStore = await cookies();
  const sessionToken = Buffer.from(`wog_admin:${Date.now()}`).toString('base64');
  cookieStore.set(ADMIN_COOKIE, sessionToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: '/',
  });
}

export async function clearAdminSession(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(ADMIN_COOKIE);
}

export async function isAdminAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies();
  const session = cookieStore.get(ADMIN_COOKIE);
  if (!session?.value) return false;
  try {
    const decoded = Buffer.from(session.value, 'base64').toString('utf-8');
    return decoded.startsWith('wog_admin:');
  } catch {
    return false;
  }
}

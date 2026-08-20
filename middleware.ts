import { NextRequest, NextResponse } from 'next/server';

const ADMIN_COOKIE = 'wog_admin_session';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Only protect /admin routes (but not /admin/login or /api/admin/auth)
  if (
    pathname.startsWith('/admin') &&
    !pathname.startsWith('/admin/login') &&
    !pathname.startsWith('/api/admin/auth')
  ) {
    const session = req.cookies.get(ADMIN_COOKIE);
    if (!session?.value) {
      const loginUrl = new URL('/admin/login', req.url);
      return NextResponse.redirect(loginUrl);
    }
    // Validate session format
    try {
      const decoded = Buffer.from(session.value, 'base64').toString('utf-8');
      if (!decoded.startsWith('wog_admin:')) {
        const loginUrl = new URL('/admin/login', req.url);
        return NextResponse.redirect(loginUrl);
      }
    } catch {
      const loginUrl = new URL('/admin/login', req.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};

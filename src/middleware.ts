import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const SESSION_COOKIE_NAME = 'smh_admin_session';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Only apply to /admin routes
  if (pathname.startsWith('/admin')) {
    const sessionCookie = request.cookies.get(SESSION_COOKIE_NAME)?.value;
    let isAuthenticated = false;

    if (sessionCookie) {
      try {
        const parts = sessionCookie.split('.');
        if (parts.length === 2) {
          const payloadJson = atob(parts[0].replace(/-/g, '+').replace(/_/g, '/'));
          const payload = JSON.parse(payloadJson);
          if (payload.expiresAt && Date.now() < payload.expiresAt) {
            isAuthenticated = true;
          }
        }
      } catch {
        isAuthenticated = false;
      }
    }

    // If visiting the login page while already authenticated -> redirect to dashboard
    if (pathname === '/admin/login' || pathname === '/admin/login/') {
      if (isAuthenticated) {
        return NextResponse.redirect(new URL('/admin/enquiries/', request.url));
      }
      return NextResponse.next();
    }

    // If visiting any protected admin route without authentication -> redirect to login
    if (!isAuthenticated) {
      const loginUrl = new URL('/admin/login/', request.url);
      loginUrl.searchParams.set('next', pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};

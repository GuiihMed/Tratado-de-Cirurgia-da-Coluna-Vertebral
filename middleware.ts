import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["pt", "en", "es"];
const defaultLocale = "pt";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Ignore static files, assets, API routes, and admin routes
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/assets") ||
    pathname.startsWith("/admin") ||
    pathname.includes(".") // e.g. favicon.ico, images
  ) {
    return NextResponse.next();
  }

  // Check if pathname already contains a supported locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // Redirect to localized path (e.g. / -> /pt, /indice -> /pt/indice)
  const localizedUrl = new URL(
    `/${defaultLocale}${pathname.startsWith("/") ? pathname : `/${pathname}`}`,
    request.url
  );

  return NextResponse.redirect(localizedUrl);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - assets (static images)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|assets).*)",
  ],
};

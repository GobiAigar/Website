import { NextRequest, NextResponse } from "next/server";
import { routing } from "./src/i18n/routing";

const locales = routing.locales;
const defaultLocale = routing.defaultLocale;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/_vercel") ||
    pathname.includes(".")
  ) {
    return;
  }

  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}`)
  );

  if (pathnameIsMissingLocale) {
    const redirectTo = new URL(`/${defaultLocale}${pathname}`, request.url);
    return NextResponse.redirect(redirectTo);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/((?!api|_next|_vercel|.*\\..*).*)",
};

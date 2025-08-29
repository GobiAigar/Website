import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const localeCookie = request.cookies.get("NEXT_LOCALE")?.value;

  if (!localeCookie) {
    const response = NextResponse.next();
    response.cookies.set("NEXT_LOCALE", "mn", { path: "/" });
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/((?!api|_next|_vercel|.*\\..*).*)",
};

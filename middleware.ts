import { NextRequest, NextResponse } from "next/server";

const PROBE =
  /(?:^|\/)(?:wp-admin|wp-login\.php|wp-content|wp-includes|xmlrpc\.php|phpmyadmin|administrator|\.env|\.git|cgi-bin|vendor\/phpunit|eval-stdin|autodiscover|\.aws)(?:\/|$)|\.php(?:$|\?)/i;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (PROBE.test(pathname)) {
    return new NextResponse(null, {
      status: 404,
      headers: {
        "X-Robots-Tag": "noindex, nofollow",
        "Cache-Control": "no-store",
      },
    });
  }

  const hostname = (request.headers.get("host") ?? "").split(":")[0];
  if (hostname.startsWith("www.") && !hostname.includes("localhost")) {
    const url = request.nextUrl.clone();
    url.hostname = hostname.slice(4);
    url.protocol = "https:";
    url.port = "";
    return NextResponse.redirect(url, 301);
  }

  // Same document for every client. Do not branch on User-Agent.
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|images/|favicon.svg).*)"],
};

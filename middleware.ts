import { NextRequest, NextResponse } from "next/server";

const PROBE =
  /(?:^|\/)(?:wp-admin|wp-login\.php|wp-content|wp-includes|xmlrpc\.php|phpmyadmin|administrator|\.env|\.git|cgi-bin|vendor\/phpunit|eval-stdin|autodiscover|\.aws)(?:\/|$)|\.php(?:$|\?)/i;

const ALLOWED_QUERY = new Set([
  "_rsc",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "utm_id",
  "gclid",
  "gbraid",
  "wbraid",
  "fbclid",
  "msclkid",
  "ttclid",
  "srsltid",
]);

function gone() {
  return new NextResponse("Gone", {
    status: 410,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "X-Robots-Tag": "noindex, nofollow",
      "Cache-Control": "public, max-age=86400",
    },
  });
}

function hasJunkQuery(searchParams: URLSearchParams, search: string) {
  if (!search || search === "?") return false;
  const keys = [...searchParams.keys()];
  if (keys.length === 0) return true;
  return keys.some((key) => !key || !ALLOWED_QUERY.has(key.toLowerCase()));
}

export function middleware(request: NextRequest) {
  const { pathname, searchParams, search } = request.nextUrl;

  if (PROBE.test(pathname)) {
    return new NextResponse(null, {
      status: 404,
      headers: {
        "X-Robots-Tag": "noindex, nofollow",
        "Cache-Control": "no-store",
      },
    });
  }

  if (hasJunkQuery(searchParams, search)) {
    return gone();
  }

  const hostname = (request.headers.get("host") ?? "").split(":")[0];
  if (hostname.startsWith("www.") && !hostname.includes("localhost")) {
    const url = request.nextUrl.clone();
    url.hostname = hostname.slice(4);
    url.protocol = "https:";
    url.port = "";
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|images/|favicon.svg).*)"],
};

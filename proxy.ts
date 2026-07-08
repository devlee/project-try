import { NextRequest, NextResponse } from "next/server";

// Redirect the bare root to the visitor's preferred language.
export function proxy(request: NextRequest) {
  const acceptLanguage = request.headers.get("accept-language") ?? "";
  const prefersChinese = /\bzh\b|zh-/i.test(acceptLanguage.split(",")[0] ?? "");
  const locale = prefersChinese ? "zh" : "en";
  return NextResponse.redirect(new URL(`/${locale}`, request.url));
}

export const config = {
  matcher: ["/"],
};

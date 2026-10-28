import { NextResponse, type NextRequest } from "next/server";
import { WHATSAPP_NUMBER } from "@/config/site";

/**
 * /go/whatsapp?text=... -> wa.me chat with the pre-filled message.
 * Pages link here instead of wa.me directly; robots.ts disallows /go/ so site-audit crawlers
 * stop fetching wa.me (which answers bots with 429 and gets reported as broken links).
 */
export function GET(request: NextRequest) {
  const text = request.nextUrl.searchParams.get("text") ?? "";
  const target = `https://wa.me/${WHATSAPP_NUMBER}${text ? `?text=${encodeURIComponent(text)}` : ""}`;
  return NextResponse.redirect(target, 302);
}

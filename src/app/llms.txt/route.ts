import { llmsTxt } from "@/lib/seo/llms";

/** /llms.txt - prerendered at build time from the content registry (see lib/seo/llms.ts). */
export const dynamic = "force-static";

export function GET() {
  return new Response(llmsTxt(), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}

import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { pageMetadata } from "@/lib/seo";
import credits from "../../../public/images/industries/CREDITS.json";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Image Credits",
    description: "Attribution for the Creative Commons photographs used on IndiaB2BData.com.",
    path: "/image-credits",
  }),
  robots: { index: false, follow: true },
};

const LICENSE_URLS: Record<string, string> = {
  "CC BY 2.0": "https://creativecommons.org/licenses/by/2.0/",
  "CC BY 3.0": "https://creativecommons.org/licenses/by/3.0/",
  "CC BY 4.0": "https://creativecommons.org/licenses/by/4.0/",
  "CC BY-SA 2.0": "https://creativecommons.org/licenses/by-sa/2.0/",
  "CC BY-SA 3.0": "https://creativecommons.org/licenses/by-sa/3.0/",
  "CC BY-SA 4.0": "https://creativecommons.org/licenses/by-sa/4.0/",
  CC0: "https://creativecommons.org/publicdomain/zero/1.0/",
};

export default function ImageCreditsPage() {
  return (
    <>
      <PageHero
        eyebrow="Attribution"
        title="Image Credits"
        description="Sector photographs on our homepage come from Wikimedia Commons and are used under the licences below."
        compact
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Image Credits" }]}
      />
      <section className="mx-auto max-w-4xl px-5 py-16 md:px-8">
        <ul className="divide-y divide-[#DCEAF3] rounded-2xl border border-[#DCEAF3] bg-white">
          {credits.map((c) => (
            <li key={c.key} className="p-5 text-sm leading-relaxed text-muted">
              <a href={c.source} target="_blank" rel="noopener noreferrer" className="font-semibold text-navy hover:text-teal">
                {c.title.replace(/^File:/, "").replace(/\.[a-z]+$/i, "")}
              </a>{" "}
              by {c.author || "Unknown author"}, licensed under{" "}
              {LICENSE_URLS[c.license] ? (
                <a href={LICENSE_URLS[c.license]} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">
                  {c.license}
                </a>
              ) : (
                c.license
              )}
              . Resized for web.
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

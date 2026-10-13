import Link from "next/link";
import { MapPin, Layers } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { databaseStates } from "@/lib/database-pages";
import { cities, cityPath } from "@/components/city-pages/city-data.mjs";

const chip =
  "inline-flex items-center gap-1.5 text-navy text-sm font-medium bg-white border border-[#DCEAF3] rounded-full px-4 py-2 shadow-sm transition-colors hover:border-teal/50 hover:text-teal";

/** Hub-and-spoke interlinking block: sibling products, every state hub and every city page. */
export function CoverageLinks({
  topic,
  categoryHeading,
  categoryLinks = [],
}: {
  topic: string;
  categoryHeading?: string;
  categoryLinks?: { href: string; label: string }[];
}) {
  return (
    <section className="py-16 md:py-20 bg-bgsoft">
      <div className="max-w-7xl mx-auto px-5 md:px-8 space-y-10">
        {categoryLinks.length > 0 && (
          <Reveal>
            <span className="text-teal text-xs font-semibold uppercase tracking-[0.16em]">{categoryHeading}</span>
            <h2 className="font-display font-extrabold text-2xl md:text-3xl text-navy mt-3 tracking-tight">
              More {categoryHeading} Databases
            </h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {categoryLinks.map((link) => (
                <Link key={link.href} href={link.href} className={chip}>
                  <Layers className="w-3.5 h-3.5 text-teal" strokeWidth={2} />
                  {link.label} Database
                </Link>
              ))}
            </div>
          </Reveal>
        )}

        <Reveal>
          <span className="text-teal text-xs font-semibold uppercase tracking-[0.16em]">Pan-India Coverage</span>
          <h2 className="font-display font-extrabold text-2xl md:text-3xl text-navy mt-3 tracking-tight">
            {topic} by State &amp; City
          </h2>
          <p className="mt-3 text-muted leading-relaxed max-w-3xl">
            This data is available across all Indian states and 700+ cities. Browse our state and city hubs to see local
            coverage, key industries and business clusters, or{" "}
            <Link href="/database" className="text-teal font-semibold hover:underline">
              view every state database
            </Link>
            .
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {databaseStates.map((state) => (
              <Link key={state.slug} href={`/database/${state.slug}`} className={chip}>
                <MapPin className="w-3.5 h-3.5 text-teal" strokeWidth={2} />
                {state.name}
              </Link>
            ))}
            {Object.values(cities).map((city) => (
              <Link key={city.slug} href={cityPath(city)} className={chip}>
                <MapPin className="w-3.5 h-3.5 text-teal" strokeWidth={2} />
                {city.city}
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

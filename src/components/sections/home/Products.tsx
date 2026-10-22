import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { IndustryDirectory } from "@/components/sections/home/IndustryDirectory";
import { liveKeywordPages } from "@/content";
import { isHeldFromIndex } from "@/config/indexing";
import { HOME } from "@/content/pages/home";

const COPY = HOME.products;

/** One-line card blurb: the part of each meta description after the dash, up to the first sentence. */
const CARD_DESCRIPTIONS = Object.fromEntries(
  liveKeywordPages.filter((page) => !isHeldFromIndex(page.slug)).map((page) => {
    const afterDash = page.metaDescription.split(/ [-—] /)[1] ?? page.metaDescription;
    const sentence = afterDash.split(/\.\s/)[0].replace(/\.$/, "");
    return [`/${page.slug}`, COPY.blurbOverrides[`/${page.slug}`] ?? sentence.charAt(0).toUpperCase() + sentence.slice(1)];
  })
);

export function Products() {
  return (
    <section id="offer" className="py-20 md:py-28 max-w-7xl mx-auto px-5 md:px-8">
      <Reveal className="max-w-2xl mb-14">
        <span className="text-teal-dark text-xs font-semibold uppercase tracking-[0.16em]">
          {COPY.eyebrow}
        </span>
        <h2 className="font-display font-extrabold text-3xl md:text-4xl text-navy mt-3 tracking-tight">
          {COPY.title}
        </h2>
        <p className="mt-4 text-muted leading-relaxed">
          {COPY.text}
        </p>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {COPY.items.map((product, i) => (
          <Reveal key={product.title} delay={(i % 3) * 0.08}>
            <Link
              href={product.href}
              className="group relative block h-full bg-white rounded-2xl p-7 border border-[#DCEAF3] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-teal/40 overflow-hidden">
              <div
                className="absolute -top-16 -right-16 w-32 h-32 rounded-full bg-teal/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                aria-hidden="true"
              />
              <div className="relative w-12 h-12 rounded-xl bg-teal/10 text-teal flex items-center justify-center mb-5 transition-colors group-hover:bg-teal group-hover:text-white">
                <product.icon className="w-6 h-6" strokeWidth={1.6} />
              </div>
              <h3 className="relative font-display font-bold text-lg text-navy">{product.title}</h3>
              <p className="relative mt-2 text-sm text-muted leading-relaxed">{product.description}</p>
            </Link>
          </Reveal>
        ))}
      </div>

      <IndustryDirectory descriptions={CARD_DESCRIPTIONS} />
    </section>
  );
}

import { CLAIMS } from "@/config/claims";
import { trustFaqs } from "@/content/shared/trust-faqs";
import type { CoverageRow, IconCard, Faq, LandingPage, LinkItem, StateContent } from "@/types/landing";

/** Inputs that are genuinely different for each state. Everything shared is filled in by `stateLanding`. */
export type StateInput = {
  slug: string;
  name: string;
  title: string;
  metaDescription: string;
  lead: string;
  segmentSummary: string;
  segmentCards: [IconCard, IconCard, IconCard];
  /** Top cities / clusters with their dominant industries. */
  cities: { city: string; detail: string; href?: string }[];
  useCases: IconCard[];
  faqs: Faq[];
  related: LinkItem[];
  cityPages?: LinkItem[];
  cityPagesHeading?: string;
  bands: [string, string, string];
  h1?: string;
  coverageHeading?: string;
  coverageLabel?: string;
  guide?: LandingPage["guide"];
  authoredFaqsOnly?: boolean;
  showCoverageFigures?: boolean;
};

const STATE_FIELDS = [
  "Company / business name",
  "Contact person and designation",
  "Business mobile number",
  "Business email ID",
  "Industry and business category",
  "Full address, city, district, pincode",
  "Website, where available",
  "GSTIN, where available",
];

/** Builds the full landing page for a state from its inputs plus the shared state-page copy. */
export function stateLanding(s: StateInput): LandingPage {
  const rows: CoverageRow[] = s.cities.map((c) => ({ segment: c.city, href: c.href, detail: c.detail, records: "{{COUNT}}", fillRate: "{{FILL}}" }));
  return {
    path: `/database/${s.slug}`,
    name: `${s.name} Business Database`,
    title: s.title,
    metaDescription: s.metaDescription,
    eyebrow: `${s.name} B2B Data`,
    h1: s.h1 ?? `${s.name} Business Database: B2B Contacts by City & Industry`,
    lead: s.lead,
    breadcrumbs: [
      { label: "Databases", href: "/database" },
      { label: s.name, href: `/database/${s.slug}` },
    ],
    segmentSummary: s.segmentSummary,
    segmentCards: s.segmentCards,
    coverageTable: { heading: s.coverageHeading ?? `${s.name} coverage by city`, segmentLabel: s.coverageLabel ?? "City", rows, showFigures: s.showCoverageFigures },
    guide: s.guide,
    dataFields: STATE_FIELDS,
    sample: { profile: "stateIllustration", csvSlug: `${s.slug}-business-database`, state: s.name },
    useCases: s.useCases,
    buyerFaqs: s.authoredFaqsOnly ? s.faqs : [
      ...s.faqs,
      ...trustFaqs({
        name: `${s.name} Business Database`,
        subjects: `${s.name} business`,
        kind: "business",
        fields: STATE_FIELDS,
        segments: s.cities.map((c) => c.city),
        segmentLabel: "City",
        pricingNote: `Ask for a written quote for the requested ${s.name} locations, business types and fields. Confirm availability, counting unit and total before purchase.`,
        notIncluded: `It covers businesses located in ${s.name}; consumers and residents of the state are not in it.`,
      }),
    ],
    pricingHint: {
      from: "{{PRICE}}",
      unit: "per record",
      note: `Ask for a written quote for the requested ${s.name} locations, business types and fields. Confirm availability, counting unit and total before purchase.`,
    },
    relatedLinks: s.related,
    locationLinks: s.cityPages?.length ? { heading: s.cityPagesHeading ?? `City Databases in ${s.name}`, links: s.cityPages } : undefined,
    lastUpdated: "2026-10",
    totalRecords: "{{COUNT}}",
    disclaimer: `The listed cities describe a selection brief; they do not confirm current inventory. Ask which location and business fields are available in a dated sample. ${CLAIMS.dndScrubbing ? "Records are DND-checked before delivery, and any" : "Any"} business can request removal at any time.`,
    areaServed: { type: "State", name: s.name },
    image: { src: "/images/keywords/city-skyline.jpg", alt: `Business district skyline in ${s.name}` },
    cta: {
      formTitle: `Ask About a ${s.name} Data Sample`,
      formSubtitle: `Name the ${s.name} cities, industries and roles you need. Ask which fields, sample options and coverage can be confirmed.`,
      buttonLabel: "Ask About a Sample",
      whatsappMessage: `Hi, I need a ${s.name} business database sample. Cities / industries:`,
      bands: s.bands,
      footerTitle: `Build Your ${s.name} Prospect List`,
      footerText: `Tell us the ${s.name} cities, industries, company size and quantity. Ask for available fields, a matching count and written quote.`,
    },
  };
}

/** A content/states file: the hub-card city list plus the state's landing-page inputs. */
export function stateContent(meta: { updated: string; hubCities: string[]; moreCities: number }, s: StateInput): StateContent {
  return { slug: s.slug, name: s.name, ...meta, landing: stateLanding(s) };
}

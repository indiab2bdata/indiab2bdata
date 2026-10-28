import { CLAIMS } from "@/config/claims";
import { trustFaqs } from "@/content/shared/trust-faqs";
import type { CityContent, IconCard, Faq, LandingPage, LinkItem, SegmentTab } from "@/types/landing";

/** Inputs that are genuinely different for each city. Everything shared is filled in by `cityLanding`. */
export type CityInput = {
  slug: string;
  city: string;
  state: string;
  stateSlug: string;
  title: string;
  metaDescription: string;
  lead: string;
  segmentSummary: string;
  segmentCards: [IconCard, IconCard, IconCard];
  segmentTabs: { heading: string; tabs: SegmentTab[] };
  /** Localities / business areas with what is concentrated there. */
  areas: { area: string; detail: string }[];
  useCases: IconCard[];
  faqs: Faq[];
  related: LinkItem[];
  siblings: LinkItem[];
  bands: [string, string, string];
};

const CITY_FIELDS = [
  "Company / establishment name",
  "Contact person and designation",
  "Business mobile number",
  "Business email ID",
  "Industry and business category",
  "Locality, sector / area and pincode",
  "Office vs. operating-unit flag, where recorded",
  "Website, where available",
];

/** Builds the full landing page for a city from its inputs plus the shared city-page copy. */
export function cityLanding(c: CityInput): LandingPage {
  const path = `/database/${c.stateSlug}/${c.slug}`;
  return {
    path,
    name: `${c.city} Company Database`,
    title: c.title,
    metaDescription: c.metaDescription,
    eyebrow: `${c.city} B2B Data`,
    h1: `${c.city} Company Database: Business Contacts by Area & Industry`,
    lead: c.lead,
    breadcrumbs: [
      { label: "Databases", href: "/database" },
      { label: c.state, href: `/database/${c.stateSlug}` },
      { label: c.city, href: path },
    ],
    segmentSummary: c.segmentSummary,
    segmentCards: c.segmentCards,
    segmentTabs: c.segmentTabs,
    coverageTable: { heading: `${c.city} coverage by area`, segmentLabel: "Area", rows: c.areas.map((a) => ({ segment: a.area, detail: a.detail, records: "{{COUNT}}", fillRate: "{{FILL}}" })) },
    dataFields: CITY_FIELDS,
    sample: { profile: "cityIllustration", csvSlug: `${c.slug}-company-database`, city: c.city, state: c.state },
    useCases: c.useCases,
    buyerFaqs: [
      ...c.faqs,
      ...trustFaqs({
        name: `${c.city} Company Database`,
        subjects: `${c.city} business`,
        kind: "business",
        fields: CITY_FIELDS,
        segments: c.areas.map((a) => a.area),
        segmentLabel: "Area",
        pricingNote: `Ask for a written quote for the requested ${c.city} areas, business types and fields. Confirm availability, counting unit and total before purchase.`,
        notIncluded: `It covers business establishments in ${c.city}, not households or consumers.`,
      }),
    ],
    pricingHint: {
      from: "{{PRICE}}",
      unit: "per record",
      note: `Ask for a written quote for the requested ${c.city} areas, business types and fields. Confirm availability, counting unit and total before purchase.`,
    },
    relatedLinks: c.related,
    locationLinks: {
      heading: `More Location Databases Near ${c.city}`,
      links: [{ label: `${c.state} Business Database`, href: `/database/${c.stateSlug}` }, ...c.siblings],
    },
    lastUpdated: "2026-10",
    totalRecords: "{{COUNT}}",
    disclaimer: `The listed city areas describe a selection brief; they do not confirm current inventory. Ask which location, sector and site-type fields are available in a dated sample. ${CLAIMS.dndScrubbing ? "Mobile numbers are DND-checked before delivery, and any" : "Any"} business can request removal at any time.`,
    areaServed: { type: "City", name: c.city },
    image: { src: "/images/keywords/city-skyline.jpg", alt: `Business district in ${c.city}` },
    cta: {
      formTitle: `Ask About a ${c.city} Data Sample`,
      formSubtitle: `Name the ${c.city} areas, industries and roles you need. Ask which fields, sample options and coverage can be confirmed.`,
      buttonLabel: "Ask About a Sample",
      whatsappMessage: `Hi, I need a ${c.city} company database sample. Areas / industries:`,
      bands: c.bands,
      footerTitle: `Build Your ${c.city} Prospect List`,
      footerText: `Send the ${c.city} areas, industries, company size and quantity. Ask for available fields, a matching count and written quote.`,
    },
  };
}

/** A content/cities file: the city's landing-page inputs. */
export function cityContent(meta: { updated: string }, c: CityInput): CityContent {
  return { slug: c.slug, city: c.city, state: c.state, stateSlug: c.stateSlug, ...meta, landing: cityLanding(c) };
}

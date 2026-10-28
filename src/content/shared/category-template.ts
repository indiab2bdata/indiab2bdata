import { trustFaqs, type TrustInput } from "@/content/shared/trust-faqs";
import type { CoverageRow, Faq, IconCard, LandingGuide, LandingPage, LinkItem, SegmentTab } from "@/types/landing";
import type { SampleProfile } from "@/lib/sample-data";

/**
 * Input for a category page on the landing template. The category pages overlap in topic, so each one is
 * written around a different buyer intent (see the comment at the top of each content/categories file):
 *   b2b          - the hub: every kind of business, any role, any location
 *   company      - firmographic, account-level company lists
 *   corporate    - mid/large corporates and their department heads
 *   mca          - Companies Act registry fields (CIN, ROC, capital, directors)
 *   gst          - GST registration fields (GSTIN, type, status)
 *   b2b-leads    - campaign-ready decision-maker contacts
 *   industry     - browse and buy by industry taxonomy
 *   newly-reg    - recent incorporations as a recurring feed
 *   manufacturer - by product category and plant location
 */
export type CategoryInput = {
  slug: string;
  name: string;
  title: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  lead: string;
  segmentSummary: string;
  segmentCards: [IconCard, IconCard, IconCard];
  segmentTabs?: { heading: string; tabs: SegmentTab[] };
  coverage: { heading: string; label: string; rows: [string, string][] };
  dataFields: string[];
  sample: SampleProfile;
  useCases: IconCard[];
  guide?: LandingGuide;
  faqs: Faq[];
  pricingNote: string;
  related: LinkItem[];
  disclaimer: string;
  formTitle: string;
  bands: [string, string, string];
  footerTitle: string;
};

/** Who each record describes, for the shared buyer-trust FAQs. `notIncluded` only repeats facts stated elsewhere on the page. */
export type CategoryTrust = Pick<TrustInput, "subjects" | "kind" | "notIncluded">;

/** Builds the full landing page for a category: shared CTA copy, breadcrumbs, image path and the trust FAQs. */
export function categoryLanding(c: CategoryInput, trust: CategoryTrust): LandingPage {
  const path = `/${c.slug}`;
  const rows: CoverageRow[] = c.coverage.rows.map(([segment, detail]) => ({ segment, detail, records: "{{COUNT}}", fillRate: "{{FILL}}" }));
  return {
    path,
    name: c.name,
    title: c.title,
    metaDescription: c.metaDescription,
    eyebrow: c.eyebrow,
    h1: c.h1,
    lead: c.lead,
    breadcrumbs: [
      { label: "Databases", href: "/database" },
      { label: c.name, href: path },
    ],
    segmentSummary: c.segmentSummary,
    segmentCards: c.segmentCards,
    segmentTabs: c.segmentTabs,
    coverageTable: { heading: c.coverage.heading, segmentLabel: c.coverage.label, rows },
    dataFields: c.dataFields,
    sample: { profile: c.sample, csvSlug: c.slug },
    useCases: c.useCases,
    guide: c.guide,
    buyerFaqs: [
      ...c.faqs,
      ...trustFaqs({
        name: c.name,
        ...trust,
        fields: c.dataFields,
        segments: c.coverage.rows.map(([segment]) => segment),
        segmentLabel: c.coverage.label,
        pricingNote: c.pricingNote,
      }),
    ],
    pricingHint: { from: "{{PRICE}}", unit: "per record", note: c.pricingNote },
    relatedLinks: c.related,
    lastUpdated: "2026-10",
    totalRecords: "{{COUNT}}",
    disclaimer: c.disclaimer,
    image: { src: `/images/topics/${c.slug}.jpg`, alt: `${c.name} - IndiaB2BData.com` },
    cta: {
      formTitle: c.formTitle,
      formSubtitle: "Describe the industries, locations and roles you need, then ask which fields, sample options and coverage can be confirmed.",
      buttonLabel: "Ask About a Sample",
      whatsappMessage: `Hi, I need a ${c.name} sample. Industries / locations / roles:`,
      bands: c.bands,
      footerTitle: c.footerTitle,
      footerText: "Send your industries, locations, company size, roles and quantity. Ask for the available fields, a matching count and written quote.",
    },
  };
}

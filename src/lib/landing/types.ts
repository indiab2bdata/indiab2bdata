import type { LucideIcon } from "lucide-react";
import type { SampleProfile } from "@/lib/sample-data";

/**
 * Data model for every database landing page (category, state and city).
 *
 * Numbers we don't have yet are written as {{COUNT}} / {{PRICE}} / {{FILL}} placeholders.
 * Never replace a placeholder with a guessed figure - the page renders placeholders as
 * "On request" and `npm run seo:check` lists every one still waiting for a real value.
 */

export type IconCard = { icon: LucideIcon; title: string; description: string };

export type LinkItem = { label: string; href: string };

export type CoverageRow = {
  /** Sub-segment, department, role group, city or industry. */
  segment: string;
  /** What this row contains, in a few words. */
  detail: string;
  /** Approximate record count - "{{COUNT}}" until a real figure is supplied. */
  records: string;
  /** Share of records with a mobile / email / both - "{{FILL}}" until supplied. */
  fillRate: string;
};

export type SegmentTab = {
  id: string;
  label: string;
  summary: string;
  /** Typical roles / sub-groups in this tab. */
  examples: string[];
  /** Short line on who usually buys this tab. */
  bestFor: string;
};

export type LandingFaq = { question: string; answer: string };

export type LandingTestimonial = { quote: string; name: string; role: string };

/** Long-form, page-specific buying guide (rendered as H2 + H3 sections). Real substance only - no filler. */
export type LandingGuide = {
  heading: string;
  intro?: string;
  sections: { heading: string; paragraphs?: string[]; bullets?: string[] }[];
};

export type LandingProfile = {
  /** Canonical path, e.g. "/government-employees-database-india". */
  path: string;
  /** Product name used in headings, e.g. "Government Employees Database". */
  name: string;
  title: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  /** Hero paragraph - one direct answer to "what is this?". */
  lead: string;
  /** Breadcrumb trail below Home. The last item is this page. */
  breadcrumbs: LinkItem[];
  /** 2-3 specific sentences about this audience. */
  segmentSummary: string;
  /** Three segment cards shown under "Who's in this database". */
  segmentCards: [IconCard, IconCard, IconCard];
  /** Optional tabbed breakdown (e.g. Central / State / PSU / Local bodies). */
  segmentTabs?: { heading: string; tabs: SegmentTab[] };
  coverageTable: { heading: string; segmentLabel: string; rows: CoverageRow[] };
  /** Fields delivered in each record. */
  dataFields: string[];
  /** Which fictional sample generator builds the preview table and CSV. */
  sample: { profile: SampleProfile; csvSlug: string; city?: string; state?: string };
  useCases: IconCard[];
  buyerFaqs: LandingFaq[];
  pricingHint: { from: string; unit: string; note: string };
  /** Max 6, Title Case anchors. */
  relatedLinks: LinkItem[];
  /** Max 8 - only pages that exist and genuinely relate (state -> its cities, city -> its state). */
  locationLinks?: { heading: string; links: LinkItem[] };
  /** "YYYY-MM" - shown as "Data last refreshed: Month YYYY". Bump only when the data or copy really changes. */
  lastUpdated: string;
  /** Total records for this page's audience - "{{COUNT}}" until supplied. */
  totalRecords: string;
  /** One short, page-specific disclaimer. */
  disclaimer: string;
  guide?: LandingGuide;
  /** Only real, attributable reviews for this category. Empty or omitted hides the section. */
  testimonials?: LandingTestimonial[];
  /** For Service schema areaServed. */
  areaServed?: { type: "State" | "City"; name: string };
  image: { src: string; alt: string };
  cta: {
    formTitle: string;
    formSubtitle: string;
    buttonLabel: string;
    whatsappMessage: string;
    /** Two inline CTA bands, placed after every second major section. */
    bands: [string, string, string];
    footerTitle: string;
    footerText: string;
  };
};

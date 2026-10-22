import type { ReactNode } from "react";
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

/** `link` turns one phrase of the answer into an internal link (max one per answer); the answer text itself is what FAQPage schema uses. */
export type Faq = { question: string; answer: string; link?: { text: string; href: string } };

export type LandingTestimonial = { quote: string; name: string; role: string };

/** Long-form, page-specific buying guide (rendered as H2 + H3 sections). Real substance only - no filler. */
export type LandingGuide = {
  heading: string;
  intro?: string;
  sections: { heading: string; paragraphs?: string[]; bullets?: string[] }[];
};

export type LandingPage = {
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
  buyerFaqs: Faq[];
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

/* ---------- Legacy keyword template (category pages not yet migrated to LandingPage) ---------- */

export type KeywordContentLink = { text: string; href: string };
export type KeywordHighlight = { icon: LucideIcon; title: string; description: string };
export type KeywordSection = {
  heading: string;
  paragraphs: string[];
  /** Rendered as H3 + paragraph under the section heading. */
  subsections?: { heading: string; text: string }[];
  /** Rendered as a bulleted list after the paragraphs. */
  bullets?: string[];
  /** Paragraphs rendered after the bullets/subsections. */
  closing?: string[];
};

export type KeywordPage = {
  slug: string;
  keyword: string;
  title: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  /** Short, direct, quotable answer for AEO/GEO - the first thing a reader (or an AI answer engine) sees. */
  answer: string;
  intro: string[];
  /** Explicit phrases to link within the introduction and section paragraphs. */
  contentLinks?: KeywordContentLink[];
  highlights: KeywordHighlight[];
  useCases: string[];
  faqs: Faq[];
  useCasesIntro?: string;
  cta?: {
    heroTitle: string;
    heroSubtitle: string;
    buttonLabel: string;
    text: string;
    footerTitle: string;
    footerText: string;
  };
  /** Fields delivered in each record - rendered as a "What's included" checklist. */
  dataFields?: string[];
  /** Long-form H2 sections for topical depth. */
  sections?: KeywordSection[];
  /** Show the existing site-wide client testimonials on this page. */
  showTestimonials?: boolean;
  /** Hand-picked related slugs; falls back to the first few pages when omitted. */
  related?: string[];
};

/* ---------- Content files ---------- */

/** One file in src/content/categories. */
export type CategoryContent = {
  /** Which template renders the page: "landing" (new template, needs `landing`) or "keyword" (legacy template). */
  template: "landing" | "keyword";
  /** Sitemap <lastmod> ("YYYY-MM-DD"). Bump when this page's main copy changes. */
  updated: string;
  /** Legacy keyword-template data. Every page keeps it: it also feeds listings (homepage, llms.txt, related links). */
  keyword: KeywordPage;
  /** New-template page. Present only when template is "landing". */
  landing?: LandingPage;
};

/** One file in src/content/states. */
export type StateContent = {
  slug: string;
  name: string;
  /** Sitemap <lastmod> ("YYYY-MM-DD"). */
  updated: string;
  /** Cities shown on the /database hub card: the first three are named, the rest counted. */
  hubCities: string[];
  /** Further cities covered beyond `hubCities`, added to the hub card's "+N more". */
  moreCities: number;
  landing: LandingPage;
};

/** One file in src/content/cities. */
export type CityContent = {
  slug: string;
  city: string;
  state: string;
  stateSlug: string;
  /** Sitemap <lastmod> ("YYYY-MM-DD"). */
  updated: string;
  landing: LandingPage;
};

/** A long-form legal page in src/content/pages (compliance, privacy, terms). */
export type LegalPageContent = {
  meta: { title: string; description: string; path: string };
  /** WebPage schema name. */
  schemaName: string;
  breadcrumb: string;
  hero: { eyebrow: string; title: string; description: string };
  /** The card's contents, authored as JSX: <LegalSection> blocks, plain links and <ProtectedEmail>. */
  body: ReactNode;
};

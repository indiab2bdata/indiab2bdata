import { z } from "zod";

/**
 * Build-time validation for every content file. The content registry (src/content/index.ts) runs these
 * on import, so `next build` fails on missing fields, wrong shapes or a {{PLACEHOLDER}} in published copy.
 *
 * Placeholders are allowed only where the type says a figure may still be pending ({{COUNT}}, {{FILL}},
 * {{PRICE}}): coverage records / fill rate, pricing "from" and total records. Everywhere else is a fact.
 */

const PLACEHOLDER = /\{\{[A-Z_]+\}\}/;

/** Published copy: non-empty, no {{PLACEHOLDER}}. */
const text = z
  .string()
  .trim()
  .min(1, "required")
  .refine((s) => !PLACEHOLDER.test(s), "contains a {{PLACEHOLDER}} - supply the real value or remove the sentence");

/** A figure that may still be a {{PLACEHOLDER}} (rendered as "On request"). */
const figure = z.string().min(1, "required");

const path = text.regex(/^\/(?!.*\/\/)[a-z0-9\-/]*$/, "must be a site path like /slug");
const href = text.regex(/^(\/|#|https?:\/\/)/, "must start with /, # or http(s)://");
const month = z.string().regex(/^\d{4}-(0[1-9]|1[0-2])$/, 'must be "YYYY-MM"');
export const date = z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'must be "YYYY-MM-DD"');

/** Lucide icons are React components (functions or forwardRef objects). */
const icon = z.custom<unknown>((v) => typeof v === "function" || (typeof v === "object" && v !== null && "$$typeof" in v), "must be a lucide-react icon");

const iconCard = z.object({ icon, title: text, description: text });
const link = z.object({ label: text, href });
export const faq = z.object({ question: text, answer: text, link: z.object({ text, href }).optional() }).refine(
  (f) => !f.link || f.answer.includes(f.link.text),
  "link.text must appear in the answer"
);

export const landingPageSchema = z.object({
  path,
  name: text,
  title: text,
  metaDescription: text,
  eyebrow: text,
  h1: text,
  lead: text,
  breadcrumbs: z.array(link).min(1),
  segmentSummary: text,
  segmentCards: z.tuple([iconCard, iconCard, iconCard]),
  segmentTabs: z
    .object({
      heading: text,
      tabs: z.array(z.object({ id: text, label: text, summary: text, examples: z.array(text).min(1), bestFor: text })).min(2),
    })
    .optional(),
  coverageTable: z.object({
    heading: text,
    segmentLabel: text,
    rows: z.array(z.object({ segment: text, detail: text, records: figure, fillRate: figure })).min(1),
  }),
  dataFields: z.array(text).min(1),
  sample: z.object({ profile: text, csvSlug: text, city: text.optional(), state: text.optional() }),
  useCases: z.array(iconCard).min(1),
  buyerFaqs: z.array(faq).min(1),
  pricingHint: z.object({ from: figure, unit: text, note: text }),
  relatedLinks: z.array(link).max(6),
  locationLinks: z.object({ heading: text, links: z.array(link).min(1).max(8) }).optional(),
  lastUpdated: month,
  totalRecords: figure,
  disclaimer: text,
  guide: z
    .object({
      heading: text,
      intro: text.optional(),
      sections: z.array(z.object({ heading: text, paragraphs: z.array(text).optional(), bullets: z.array(text).optional() })).min(1),
    })
    .optional(),
  testimonials: z.array(z.object({ quote: text, name: text, role: text })).optional(),
  areaServed: z.object({ type: z.enum(["State", "City"]), name: text }).optional(),
  image: z.object({ src: path.or(text.regex(/^\/images\//)), alt: text }),
  cta: z.object({
    formTitle: text,
    formSubtitle: text,
    buttonLabel: text,
    whatsappMessage: text,
    bands: z.tuple([text, text, text]),
    footerTitle: text,
    footerText: text,
  }),
});

const sectionImage = z.object({ src: text.regex(/^\/images\//), alt: text, width: z.number().int().positive(), height: z.number().int().positive() });

const block = z.discriminatedUnion("type", [
  z.object({ type: z.literal("prose"), id: text.optional(), heading: text, paragraphs: z.array(text).min(1), bullets: z.array(text).optional(), closing: z.array(text).optional(), image: sectionImage.optional() }),
  z.object({ type: z.literal("table"), id: text.optional(), heading: text, intro: text.optional(), columns: z.array(text).min(2), rows: z.array(z.array(text)).min(1), note: text.optional() }),
  z.object({ type: z.literal("steps"), id: text.optional(), heading: text, intro: text.optional(), steps: z.array(z.object({ title: text, text })).min(2) }),
  z.object({ type: z.literal("points"), id: text.optional(), heading: text, intro: text.optional(), tone: z.enum(["neutral", "warning"]).optional(), items: z.array(z.object({ title: text, text })).min(2) }),
  z.object({ type: z.literal("scenario"), id: text.optional(), heading: text, label: text, paragraphs: z.array(text).min(1), image: sectionImage.optional() }),
  z.object({ type: z.literal("sample"), id: text.optional(), heading: text, intro: text }),
  z.object({ type: z.literal("sourcing"), id: text.optional(), heading: text, paragraphs: z.array(text).min(1), image: sectionImage.optional() }),
  z.object({ type: z.literal("cta"), text, buttonLabel: text.optional() }),
]);

export const customPageSchema = z
  .object({
    path,
    name: text,
    title: text,
    metaDescription: text,
    eyebrow: text,
    h1: text,
    lead: text,
    image: z.object({ src: text.regex(/^\/images\//), alt: text, width: z.number().int().positive(), height: z.number().int().positive() }),
    sampleProfile: text,
    links: z.array(z.object({ text, href })),
    blocks: z.array(block).min(4),
    faqs: z.array(faq).min(1),
    related: z.array(link).max(6),
    cta: z.object({ formTitle: text, formSubtitle: text, buttonLabel: text, whatsappMessage: text, footerTitle: text, footerText: text }),
    disclaimer: text,
  })
  .refine((p) => p.blocks.some((b) => b.type === "sourcing"), "needs a `sourcing` block (how the data is sourced and checked)")
  .refine((p) => p.blocks.filter((b) => b.type === "table").length >= 2, "needs at least two tables (data fields and segments)")
  .refine((p) => p.blocks.some((b) => b.type === "sample"), "needs a `sample` block");

export const keywordPageSchema = z.object({
  slug: text.regex(/^[a-z0-9-]+$/),
  keyword: text,
  title: text,
  metaDescription: text,
  eyebrow: text,
  h1: text,
  answer: text,
  intro: z.array(text).min(1),
  contentLinks: z.array(z.object({ text, href })).optional(),
  highlights: z.array(iconCard).min(1),
  useCases: z.array(text).min(1),
  faqs: z.array(faq).min(1),
  useCasesIntro: text.optional(),
  cta: z.object({ heroTitle: text, heroSubtitle: text, buttonLabel: text, text, footerTitle: text, footerText: text }).optional(),
  dataFields: z.array(text).optional(),
  sections: z
    .array(
      z.object({
        heading: text,
        paragraphs: z.array(text),
        subsections: z.array(z.object({ heading: text, text })).optional(),
        bullets: z.array(text).optional(),
        closing: z.array(text).optional(),
      })
    )
    .optional(),
  showTestimonials: z.boolean().optional(),
  related: z.array(text).optional(),
});

/**
 * Validate without transforming: the original object is returned untouched (zod would otherwise strip
 * unknown keys and rebuild arrays), so rendering uses exactly the data that was authored.
 */
export function validate<T>(schema: z.ZodType, data: T, label: string): T {
  const result = schema.safeParse(data);
  if (!result.success) throw new Error(`Invalid content in ${label}:\n${z.prettifyError(result.error)}`);
  return data;
}

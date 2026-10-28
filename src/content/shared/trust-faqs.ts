import { CLAIMS } from "@/config/claims";
import { removalSentence } from "@/content/shared/claims-copy";
import type { Faq } from "@/types/landing";

const COMPLIANCE = { text: "Data Sourcing & Compliance page", href: "/data-sourcing-compliance" };

export type TrustInput = {
  /** Product name, e.g. "Importers Database". */
  name: string;
  /** What each record describes, used as an adjective: "importer" records, "Pune business" contacts. */
  subjects: string;
  /** "people" for role-based contact lists, "business" for company / establishment lists. */
  kind: "people" | "business";
  fields: string[];
  /** Coverage table rows and their column label (e.g. "Sector"). */
  segments: string[];
  segmentLabel: string;
  pricingNote: string;
  priceFrom?: string;
  /** Page-specific facts about what the data does not contain. */
  notIncluded?: string;
};

const list = (items: string[]) => (items.length < 2 ? items.join("") : `${items.slice(0, -1).join(", ")} and ${items[items.length - 1]}`);
/** Lower-case a leading capital for mid-sentence use, but keep acronyms and proper nouns (GSTIN, IEC, Mumbai) as written. */
const lower = (s: string) => (/^[A-Z][a-z]/.test(s) && !/^[A-Z][a-z]+ [A-Z]/.test(s) ? s.charAt(0).toLowerCase() + s.slice(1) : s);
const bare = (f: string) => f.replace(/,? where (available|recorded)/i, "");

/**
 * The buyer-trust questions every database page must answer: source, checks, fields, freshness (only when
 * CLAIMS.showRefreshDates is on), compliance, opt-out, pricing, sample, delivery and exclusions.
 * Each answer leads with the direct answer and then uses this page's own fields, segments and pricing basis.
 */
export function trustFaqs(t: TrustInput): Faq[] {
  const seg = lower(t.segmentLabel);
  const segs = list(t.segments.slice(0, 3));
  const partial = t.fields.filter((f) => /where (available|recorded)/i.test(f)).map((f) => lower(bare(f)));
  const role = t.kind === "people" ? "the professional role each person holds" : "the business each record describes";

  const faqs: (Faq | false)[] = [
    {
      question: `Where does the ${t.name} come from?`,
      answer: `It is compiled from business-context sources: information tied to ${role}, not to anyone's private life. We do not buy, accept or sell data obtained through breaches, hacking or scraping of private accounts. For ${t.subjects} records, that means names, roles and work contact details linked to the ${seg} the record sits in. Ask us to describe the sources behind any segment, such as ${segs}, before you buy, or read our ${COMPLIANCE.text}.`,
      link: COMPLIANCE,
    },
    {
      question: `How are ${t.subjects} records checked before delivery?`,
      answer: `Ask which source, field and contact checks apply to the ${t.name} selection, how they are documented and when they were performed. Public examples are fictional and do not establish completeness or current contactability. Confirm any quality measure and its scope in writing before purchase.`,
    },
    {
      question: `Which fields does each ${t.name} record include?`,
      answer: `Possible fields to discuss for the ${t.name} include ${list(t.fields.map((f) => lower(bare(f))))}. Availability, completeness and combinations depend on the selected segment and must be confirmed against a matching sample and written field list. The public preview is fictional; it illustrates a format and does not establish inventory.`,
    },
    CLAIMS.showRefreshDates && {
      question: `How often is the ${t.name} updated?`,
      answer: `Ask for the applicable review or update date for the ${t.name} selection, what information was checked and how recently it was checked. Do not treat the page-edit date or fictional sample as evidence of dataset freshness.`,
    },
    {
      question: `Can I legally call or email the ${t.subjects} contacts in this list?`,
      answer: `Buying the ${t.name} does not by itself establish permission to contact these ${t.subjects}. Review the source context and the rules for your purpose, audience and communication channel before outreach.`,
    },
    {
      question: `How is a record removed from the ${t.name}?`,
      answer: `Anyone listed can ask for removal by sending the mobile number or email address to be removed through the process on our ${COMPLIANCE.text}. ${removalSentence()} Buyers of the ${t.name} must also stop contacting anyone who opts out of their own campaign, and tell us so the record can be removed at source.`,
      link: COMPLIANCE,
    },
    {
      question: `How is the ${t.name} priced?`,
      answer: `For the ${t.name}, request a written quote for your chosen ${seg} filters, fields and volume. Confirm the counting unit, available fields, record count, delivery terms and total price before purchase.`,
    },
    {
      question: `Can I see ${t.subjects} sample data before buying?`,
      answer: `The on-page table and CSV contain fictional, masked rows that illustrate possible columns only. They do not verify available inventory or confirm that the fields can be supplied. Ask whether a real sample matching the ${t.name} filters is available; request its field list, dated count and written quote before purchase.`,
    },
    {
      question: `What format is the ${t.name} delivered in?`,
      answer: `Confirm the agreed file format, delivery method, field order, counting unit and timing in the written quote for the ${t.name}. The fictional public CSV demonstrates one possible format and does not define paid-delivery terms.`,
    },
    {
      question: `What does the ${t.name} not include?`,
      answer: `The ${t.name} contains only the fields listed on this page, for B2B use. ${t.kind === "people" ? "There are no home addresses, family details, salary or personal financial data, and no identity-document numbers." : "There are no personal home addresses of owners or staff, and no financial, health or identity-document data."}${t.notIncluded ? ` ${t.notIncluded}` : ""} ${partial.length ? `Where the source does not record the ${list(partial)}, that cell is left blank rather than guessed.` : "Where a source does not record a field, that cell is left blank rather than guessed."}`,
    },
  ];
  return faqs.filter((f): f is Faq => Boolean(f));
}

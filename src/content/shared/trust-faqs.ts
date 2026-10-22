import { CLAIMS } from "@/config/claims";
import { deliveryPhrase, removalSentence } from "@/content/shared/claims-copy";
import { isPlaceholder } from "@/lib/utils";
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
      answer: `Invalid numbers are removed from every order before the file is sent.${CLAIMS.dndScrubbing ? " Mobile numbers are also checked against the National Do Not Call registry, and registered numbers are flagged or removed." : ""} The check runs on the exact ${seg} mix in your brief, so a file covering ${segs} is cleaned as one delivery. Mobile and email fill rates differ by ${seg}, and are available on request with your record count. Use the sample rows to check designations and addresses yourself before you order.`,
    },
    {
      question: `Which fields does each ${t.name} record include?`,
      answer: `Each record can include ${list(t.fields.map((f) => lower(bare(f))))}. ${partial.length ? `The ${list(partial)} ${partial.length > 1 ? "fields are" : "field is"} filled only when the source records ${partial.length > 1 ? "them" : "it"}, so not every row has ${partial.length > 1 ? "them" : "it"}. ` : ""}Every field can be combined with a filter by ${seg}, such as ${segs}. We deliver only the fields your brief needs, and dropping a field you don't use can lower the price. The preview table on this page shows the same columns in the same order.`,
    },
    CLAIMS.showRefreshDates && {
      question: `How often is the ${t.name} updated?`,
      answer: `It is refreshed on a rolling basis, and the month of the latest refresh is shown on this page. Invalid numbers are removed again before each delivery, so a file is cleaned on the day it is sent, not only when the database was last refreshed. If your segment changes fast, ask when its ${seg} records were last updated.`,
    },
    {
      question: `Can I legally call or email the ${t.subjects} contacts in this list?`,
      answer: `Yes, for lawful B2B outreach, provided you follow India's telemarketing and data-protection rules yourself. Under the DPDP Act 2023 you act as a data fiduciary for the records you buy: use ${t.name} records only for the purpose you stated and only in connection with ${role}, whether you target ${segs} or one segment. ${CLAIMS.dndScrubbing ? "We DND-check mobile numbers before delivery, but" : "Before calling or sending SMS, scrub the mobile numbers against the NCPR (DND) registry, and"} follow TRAI's TCCCPR 2018 rules on calling hours, sender IDs and consent. Honour every opt-out you receive at once and pass it back to us.`,
    },
    {
      question: `How is a record removed from the ${t.name}?`,
      answer: `Anyone listed can ask for removal by sending the mobile number or email address to be removed through the process on our ${COMPLIANCE.text}. ${removalSentence()} Buyers of the ${t.name} must also stop contacting anyone who opts out of their own campaign, and tell us so the record can be removed at source.`,
      link: COMPLIANCE,
    },
    {
      question: `How is the ${t.name} priced?`,
      answer: `It is priced per record${t.priceFrom && !isPlaceholder(t.priceFrom) ? `, from ${t.priceFrom}` : ""}, based on the segments, fields and volume you choose. ${t.pricingNote} Your quote arrives with the sample rows and a record count for your exact ${seg} mix, so you see the total before you pay. The sample itself is free.`,
    },
    {
      question: `Can I see ${t.subjects} sample data before buying?`,
      answer: `Yes. The preview table on this page shows 5 fictional rows in the same column layout as a real ${t.name} file, and the CSV download has 20. The rows are fictional so no real person's details are published here. For real records, send the ${seg} choices, locations and roles you need, and we reply with matching sample rows, a record count and a quote.`,
    },
    {
      question: `What format is the ${t.name} delivered in?`,
      answer: `You receive an Excel or CSV file by email or WhatsApp, ${deliveryPhrase()} after you approve the sample and quote. Each row is one ${t.subjects} record, with columns such as ${list(t.fields.slice(0, 3).map((f) => lower(bare(f))))} in the order shown in the preview table. The file is ready to import into a CRM, dialler or email tool.`,
    },
    {
      question: `What does the ${t.name} not include?`,
      answer: `The ${t.name} contains only the fields listed on this page, for B2B use. ${t.kind === "people" ? "There are no home addresses, family details, salary or personal financial data, and no identity-document numbers." : "There are no personal home addresses of owners or staff, and no financial, health or identity-document data."}${t.notIncluded ? ` ${t.notIncluded}` : ""} ${partial.length ? `Where the source does not record the ${list(partial)}, that cell is left blank rather than guessed.` : "Where a source does not record a field, that cell is left blank rather than guessed."}`,
    },
  ];
  return faqs.filter((f): f is Faq => Boolean(f));
}

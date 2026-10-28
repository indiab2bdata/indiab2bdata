import Link from "next/link";
import { LegalSection } from "@/components/sections/LegalSection";
import { ProtectedEmail } from "@/components/ui/ProtectedEmail";
import { CLAIMS } from "@/config/claims";
import { siteConfig } from "@/config/site";
import { isPlaceholder, monthYear } from "@/lib/utils";
import type { LegalPageContent } from "@/types/landing";

const PATH = "/data-sourcing-compliance";
const TITLE = "Data Sourcing & Compliance";
const DESCRIPTION =
  `Published information about data sourcing, handling and removal requests. Confirm dataset-specific sources and the designated grievance contact before purchase.`;

const c = siteConfig.compliance;
const sources = c.dataSources.filter((s) => !isPlaceholder(s));
const removalDays = isPlaceholder(c.removalDays) ? null : c.removalDays;
const grievanceContactConfigured = !isPlaceholder(c.grievanceOfficerName) && !isPlaceholder(c.grievanceOfficerEmail);

/**
 * /data-sourcing-compliance. Long-form legal copy is authored as JSX: <LegalSection> blocks, plain links and
 * <ProtectedEmail>. Every sentence that depends on a claim reads config/claims.ts; section numbers shift by one
 * when the DND section (CLAIMS.dndScrubbing) is shown.
 */
export const COMPLIANCE_PAGE: LegalPageContent = {
  meta: { title: TITLE, description: DESCRIPTION, path: PATH, updated: "2026-10-28" },
  schemaName: `${TITLE} | ${siteConfig.name}`,
  breadcrumb: TITLE,
  hero: {
    eyebrow: "Trust & Compliance",
    title: "Data Sourcing & Compliance",
    description: `How we collect, check, deliver and remove data. Last reviewed: ${monthYear(c.lastReviewed)}.`,
  },
  body: (
    <>
      <p className="max-w-[70ch]">
        IndiaB2BData.com supplies business-contact data for B2B sales and marketing. This page describes the sourcing and removal
        information currently published by the business. Ask about the source, date and fields for a specific dataset before purchase.
      </p>

      <LegalSection title="1. How the data is collected">
        <p className="max-w-[70ch]">
          Our databases hold business-context information: a person&apos;s name, their role, their organisation and the work contact
          details linked to that role. We do not buy, accept or sell data obtained through breaches, hacking or scraping of private
          accounts.
        </p>
        {sources.length > 0 ? (
          <ul className="mt-3 list-disc space-y-1.5 pl-5">
            {sources.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        ) : (
          <p className="mt-3 max-w-[70ch]">
            Contact us for a description of the sources behind any dataset before you buy it. Our{" "}
            <Link href="/data-sourcing-methodology" className="font-semibold text-teal hover:underline">
              data sourcing methodology
            </Link>{" "}
            explains how records are collected, checked and where their limits are.
          </p>
        )}
      </LegalSection>

      <LegalSection title="2. Published data-handling practices">
        <ul className="list-disc space-y-1.5 pl-5">
          <li>
            <strong>Purpose limitation:</strong> data is supplied for lawful B2B outreach only. Our terms prohibit resale, fraud,
            harassment and any use unrelated to the recipient&apos;s professional role.
          </li>
          <li>
            <strong>Data minimisation:</strong> we deliver only the fields a buyer&apos;s brief needs, and never sensitive data such as
            financial, health or identity-document details.
          </li>
          <li>
            <strong>Record information:</strong> ask for the source, relevant fields and an as-of date for the selected dataset; this page does not establish that every record has been recently checked.
          </li>
          <li>
            <strong>Rights of individuals:</strong> any person can ask what we hold about them, correct it or have it erased, using the
            process below.
          </li>
        </ul>
      </LegalSection>

      {CLAIMS.dndScrubbing && (<LegalSection title="3. DND scrubbing">
        <p className="max-w-[70ch]">
          Before delivery, mobile numbers are checked against the National Do Not Call registry
          {isPlaceholder(c.dndMethod) ? "" : ` (${c.dndMethod})`}, and registered numbers are flagged or removed. Buyers must still follow
          TRAI&apos;s commercial-communication rules (TCCCPR 2018) when they call or message.
        </p>
      </LegalSection>)}

      <LegalSection title={`${CLAIMS.dndScrubbing ? 4 : 3}. Opt-out and removal requests`}>
        <ol className="list-decimal space-y-1.5 pl-5">
          <li>
            Email <ProtectedEmail className="font-semibold text-teal hover:underline" /> or call{" "}
            <a href={siteConfig.phoneHref} className="font-semibold text-teal hover:underline">
              {siteConfig.phoneDisplay}
            </a>{" "}
            with the mobile number or email address you want removed.
          </li>
          <li>We confirm the request and delete the matching records{removalDays ? ` within ${removalDays} working days` : ""}.</li>
          {CLAIMS.suppressionList && <li>The number or email goes on a permanent suppression list, so it is excluded from every future delivery.</li>}
        </ol>
      </LegalSection>

      <LegalSection title={`${CLAIMS.dndScrubbing ? 5 : 4}. Grievance officer`}>
        {grievanceContactConfigured ? (
          <>
            <p className="max-w-[70ch]">Use the designated contact below for grievances about data handling.</p>
            <address className="mt-3 not-italic">
              <strong>{c.grievanceOfficerName}</strong>, {siteConfig.name}
              <br />
              <a href={`mailto:${c.grievanceOfficerEmail}`} className="text-teal hover:underline">{c.grievanceOfficerEmail}</a>
            </address>
          </>
        ) : (
          <p className="max-w-[70ch]">A named grievance-officer contact is not configured for publication. General business contact details appear on the <Link href="/contact" className="font-semibold text-teal hover:underline">Contact page</Link>; they are not identified here as grievance-officer details.</p>
        )}
      </LegalSection>

      <LegalSection title={`${CLAIMS.dndScrubbing ? 6 : 5}. Buyer responsibilities`}>
        <p className="max-w-[70ch]">
          A buyer&apos;s obligations depend on the buyer&apos;s role, the data and the intended processing. Confirm your responsibilities under applicable law and the written terms before use. Honour opt-outs and use communications channels only when lawfully permitted.
        </p>
      </LegalSection>
    </>
  ),
};

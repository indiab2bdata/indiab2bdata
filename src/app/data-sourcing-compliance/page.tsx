import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { LegalSection } from "@/components/legal-section";
import { JsonLd } from "@/components/json-ld";
import { ProtectedEmail } from "@/components/protected-email";
import { siteConfig } from "@/lib/site-config";
import { CLAIMS } from "@/lib/claims";
import { isPlaceholder, monthYear, shown } from "@/lib/landing/display";
import { pageMetadata, breadcrumbJsonLd, webPageJsonLd } from "@/lib/seo";

const PATH = "/data-sourcing-compliance";
const TITLE = "Data Sourcing & Compliance";
const DESCRIPTION =
  `How IndiaB2BData.com sources business contact data, aligns with the DPDP Act 2023${CLAIMS.dndScrubbing ? ", checks numbers against DND" : ""} and handles opt-out and removal requests, with grievance officer contact details.`;

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

const c = siteConfig.compliance;
const sources = c.dataSources.filter((s) => !isPlaceholder(s));
const removalDays = isPlaceholder(c.removalDays) ? null : c.removalDays;

export default function DataSourcingCompliancePage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", url: siteConfig.url },
            { name: TITLE, url: `${siteConfig.url}${PATH}` },
          ]),
          webPageJsonLd({ name: `${TITLE} | ${siteConfig.name}`, description: DESCRIPTION, url: `${siteConfig.url}${PATH}` }),
        ]}
      />

      <PageHero
        eyebrow="Trust & Compliance"
        title="Data Sourcing & Compliance"
        description={`How we collect, check, deliver and remove data. Last reviewed: ${monthYear(c.lastReviewed)}.`}
        compact
        breadcrumbs={[{ label: "Home", href: "/" }, { label: TITLE }]}
      />

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="space-y-9 rounded-2xl border border-[#DCEAF3] bg-white p-7 text-sm leading-relaxed text-navy/85 md:p-12 md:text-base">
          <p className="max-w-[70ch]">
            IndiaB2BData.com supplies business-contact data for B2B sales and marketing. This page explains where the data comes from, how
            it is processed under India&apos;s Digital Personal Data Protection Act, 2023 (DPDP Act), and how any person or business can
            have their details removed.
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
              <p className="mt-3 max-w-[70ch]">Contact us for a description of the sources behind any dataset before you buy it.</p>
            )}
          </LegalSection>

          <LegalSection title="2. DPDP Act 2023 alignment">
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
                <strong>Accuracy:</strong> {CLAIMS.showRefreshDates ? "records are refreshed on a rolling basis, and " : ""}invalid numbers are removed before each delivery.
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
            <p className="max-w-[70ch]">
              For complaints about how your data is processed, contact our grievance officer. We acknowledge every complaint and respond
              within the timelines required by law.
            </p>
            <address className="mt-3 not-italic">
              <strong>{shown(c.grievanceOfficerName, "Grievance Officer")}</strong>, {siteConfig.name}
              <br />
              {siteConfig.address.display}
              <br />
              Phone: {siteConfig.phoneDisplay}
              <br />
              Email:{" "}
              {isPlaceholder(c.grievanceOfficerEmail) ? (
                <ProtectedEmail className="text-teal hover:underline" />
              ) : (
                <a href={`mailto:${c.grievanceOfficerEmail}`} className="text-teal hover:underline">
                  {c.grievanceOfficerEmail}
                </a>
              )}
            </address>
          </LegalSection>

          <LegalSection title={`${CLAIMS.dndScrubbing ? 6 : 5}. Buyer responsibilities`}>
            <p className="max-w-[70ch]">
              Buyers act as data fiduciaries for the data they receive. They must use it for the stated B2B purpose, honour opt-outs
              immediately and follow DND and TRAI rules. We may refuse or end service when data is misused.
            </p>
          </LegalSection>
        </div>
      </section>
    </>
  );
}

import Link from "next/link";
import { LegalSection } from "@/components/sections/LegalSection";
import { siteConfig } from "@/config/site";
import type { LegalPageContent } from "@/types/landing";

const TITLE = "Data Sourcing & Verification Methodology";
const DESCRIPTION =
  "How IndiaB2BData.com sources, organises and checks business contact data: research and third-party sources, manual quality checks, data limitations and how to report errors.";

/**
 * /data-sourcing-methodology. What we do to build and check datasets, and what that does not guarantee.
 * Opt-out, DPDP alignment and the grievance officer stay on /data-sourcing-compliance; this page links there.
 * Keep every sentence true for every dataset - no claim stronger than the process behind it.
 */
export const METHODOLOGY_PAGE: LegalPageContent = {
  meta: { title: TITLE, description: DESCRIPTION, path: "/data-sourcing-methodology", updated: "2026-10-23" },
  schemaName: `${TITLE} | ${siteConfig.name}`,
  breadcrumb: "Data Sourcing Methodology",
  hero: {
    eyebrow: "How We Build Our Data",
    title: "Our Data Sourcing & Verification Methodology",
    description: "Where our business data comes from, how we check it, and the limits you should know about before you buy.",
  },
  body: (
    <>
      <p className="max-w-[70ch]">
        At IndiaB2BData.com, we compile business contact and company information using a combination of our own research and data
        obtained from third-party providers. Our aim is to organise business information into useful datasets and apply practical
        checks before making the data available to customers.
      </p>

      <LegalSection title="1. Data sources">
        <p className="max-w-[70ch]">Our datasets may contain information gathered through:</p>
        <ul className="mt-3 list-disc space-y-1.5 pl-5">
          <li>
            <strong>Independent research:</strong> business information researched and organised manually using relevant business
            information sources.
          </li>
          <li>
            <strong>Third-party data providers:</strong> data supplied by external vendors, subject to the source information and usage
            terms available to us.
          </li>
          <li>
            <strong>Business information sources:</strong> depending on the dataset, research may involve company websites, business
            directories, industry listings and other relevant sources.
          </li>
        </ul>
        <p className="mt-3 max-w-[70ch]">
          The source and coverage of information vary by dataset. We do not claim that every record comes from a single source or that
          every field can be independently verified. Ask us for a description of the sources behind any dataset before you buy it.
        </p>
      </LegalSection>

      <LegalSection title="2. Data collection and organisation">
        <p className="max-w-[70ch]">
          We use manual research and spreadsheet-based workflows to collect, organise and review business information. This can include
          arranging records into categories, standardising fields and flagging information that needs further review.
        </p>
        <p className="mt-3 max-w-[70ch]">
          Information supplied by third-party vendors may be reviewed before it is added to a dataset. The extent of that review depends
          on the information provided and the checks available.
        </p>
      </LegalSection>

      <LegalSection title="3. Manual checks before delivery">
        <p className="max-w-[70ch]">
          Before a file is delivered, records are deduplicated and invalid numbers are removed. Where practical, we also cross-check
          selected business records - for example by comparing them with relevant business sources or contacting the business by phone.
        </p>
        <p className="mt-3 max-w-[70ch]">
          The checks performed vary by dataset and by the type of information. A manual review does not establish that every field is
          accurate, current or complete.
        </p>
      </LegalSection>

      <LegalSection title="4. Email and phone data limitations">
        <p className="max-w-[70ch]">
          A business email address or phone number can change, become inactive or stop belonging to the listed contact. A record that
          looks valid during a review may become outdated later.
        </p>
        <p className="mt-3 max-w-[70ch]">
          Unless a specific verification method and result are stated for a dataset, the presence of an email address or phone number is
          not a guarantee of deliverability, reachability or continued ownership.
        </p>
      </LegalSection>

      <LegalSection title="5. Data freshness">
        <p className="max-w-[70ch]">
          Business information changes as companies update their contact details, people, locations and operations. Where available, we
          share dataset-specific coverage and update information with your sample and quote. Do not assume that every record in a file
          was checked on the same date.
        </p>
      </LegalSection>

      <LegalSection title="6. Third-party data limitations">
        <p className="max-w-[70ch]">
          Third-party data can have limitations in completeness, accuracy, source coverage and recency. We review supplied information as
          far as is practical, but checks on a dataset do not establish the accuracy of every individual record. We do not describe a
          dataset as independently audited or fully verified unless the process and evidence support that claim.
        </p>
      </LegalSection>

      <LegalSection title="7. Reporting incorrect information">
        <p className="max-w-[70ch]">
          If you find incorrect, outdated or inappropriate information in a dataset, contact us through the details on our{" "}
          <Link href="/contact" className="font-semibold text-teal hover:underline">
            contact page
          </Link>
          . Include the dataset name and enough detail to identify the record, without sending unnecessary personal information. We review
          each report and decide whether correction, removal or another action is needed. To have your own details removed, follow the
          process on our{" "}
          <Link href="/data-sourcing-compliance" className="font-semibold text-teal hover:underline">
            Data Sourcing &amp; Compliance
          </Link>{" "}
          page.
        </p>
      </LegalSection>

      <LegalSection title="8. Responsible use of business data">
        <p className="max-w-[70ch]">
          Buyers are responsible for making sure their use of the data complies with applicable privacy, data-protection, telemarketing
          (DND / TRAI) and email-marketing rules. Having a contact&apos;s details does not by itself establish consent or authorisation to
          contact that person; assess the permitted purpose and legal basis before you start outreach.
        </p>
      </LegalSection>

      <LegalSection title="Our commitment to transparency">
        <p className="max-w-[70ch]">
          We aim to describe our collection and review practices accurately, acknowledge the limits of business contact information and
          share dataset-specific details wherever available. This methodology may change as our research and review practices evolve.
        </p>
      </LegalSection>
    </>
  ),
};

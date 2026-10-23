import { BadgeCheck, Filter, ShieldCheck, UserX } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { CLAIMS } from "@/config/claims";

/** Short note on legacy keyword pages, linking to /data-sourcing-methodology. */
export const METHODOLOGY_NOTE = {
  eyebrow: "Data Sourcing",
  title: "Where This Data Comes From",
  text: "We compile records from our own research and from third-party providers, then deduplicate them and remove invalid numbers before delivery. Coverage, sources and freshness vary by dataset, and no business contact list is 100% accurate - ask for the details behind any dataset with your sample.",
  link: "Read our data sourcing methodology",
};

/** The dark "Data Sourcing & Compliance" block on every landing page. Points follow the claim switches. */
export const COMPLIANCE_BLOCK = {
  eyebrow: "Trust & compliance",
  title: "Data Sourcing & Compliance",
  text: `Every list we deliver follows the same sourcing, ${CLAIMS.dndScrubbing ? "DND scrubbing" : "checking"} and removal rules. Read the full policy, including our grievance officer contact.`,
  link: "Read our data sourcing & compliance policy",
  methodologyLink: "How we source and check data",
  points: [
    { icon: BadgeCheck, title: "Lawfully sourced", text: "Compiled from business-context sources. We never use leaked or hacked data." },
    { icon: ShieldCheck, title: "DPDP Act 2023 aligned", text: "Purpose-limited B2B use, minimal fields and documented processing." },
    CLAIMS.dndScrubbing && { icon: Filter, title: "DND scrubbing", text: "Each delivery is checked against the DND registry before it is sent." },
    {
      icon: UserX,
      title: "Opt-out honoured",
      text: CLAIMS.suppressionList ? "Removal requests are actioned and suppressed from all future files." : "Removal requests are actioned promptly.",
    },
  ].filter(Boolean) as { icon: LucideIcon; title: string; text: string }[],
};

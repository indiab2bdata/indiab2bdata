import { BadgeCheck, Filter, ShieldCheck, UserX } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { CLAIMS } from "@/config/claims";

/** The dark "Data Sourcing & Compliance" block on every landing page. Points follow the claim switches. */
export const COMPLIANCE_BLOCK = {
  eyebrow: "Trust & compliance",
  title: "Data Sourcing & Compliance",
  text: `Every list we deliver follows the same sourcing, ${CLAIMS.dndScrubbing ? "DND scrubbing" : "checking"} and removal rules. Read the full policy, including our grievance officer contact.`,
  link: "Read our data sourcing & compliance policy",
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

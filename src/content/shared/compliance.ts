import { BadgeCheck, Filter, ShieldCheck, UserX } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { CLAIMS } from "@/config/claims";

/** Short note on legacy keyword pages, linking to /data-sourcing-methodology. */
export const METHODOLOGY_NOTE = {
  eyebrow: "Data Sourcing",
  title: "Where This Data Comes From",
  text: "Sources, fields and checks vary by dataset. Review the published sourcing methodology and limitations, then ask which checks and source context apply to the segment you are considering.",
  link: "Read our data sourcing methodology",
};

/** The dark "Data Sourcing & Compliance" block on every landing page. Points follow the claim switches. */
export const COMPLIANCE_BLOCK = {
  eyebrow: "Trust & compliance",
  title: "Data Sourcing & Compliance",
  text: "Review the published sourcing information, limitations and process for raising a removal request before planning outreach.",
  link: "Read our data sourcing & compliance policy",
  methodologyLink: "How we source and check data",
  points: [
    { icon: BadgeCheck, title: "Sourcing information", text: "Ask about the sources and limits that apply to the dataset you are considering." },
    { icon: ShieldCheck, title: "Purpose and limitations", text: "Review the published terms and sourcing information before planning outreach." },
    CLAIMS.dndScrubbing && { icon: Filter, title: "DND scrubbing", text: "Each delivery is checked against the DND registry before it is sent." },
    {
      icon: UserX,
      title: "Removal process",
      text: "See the published process for submitting a removal request.",
    },
  ].filter(Boolean) as { icon: LucideIcon; title: string; text: string }[],
};

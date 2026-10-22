import { ClipboardList, Filter, Send, ShieldCheck } from "lucide-react";
import { CLAIMS } from "@/config/claims";

/** "How it works" on landing pages. Wording follows the claim switches in config/claims.ts. */
export const LANDING_PROCESS = {
  eyebrow: "How it works",
  title: "From Brief to File in Four Steps",
  steps: [
    { icon: Send, title: "Share Your Brief", text: "Audience, locations, fields and quantity.", label: "2 minutes" },
    { icon: Filter, title: "Get Sample & Quote", text: "Matching sample rows, record count and price.", label: "Same working day" },
    {
      icon: ShieldCheck,
      title: CLAIMS.dndScrubbing ? "Verify & Scrub" : "Verify & Clean",
      text: CLAIMS.dndScrubbing ? "Deduplicated, invalid numbers removed, DND-checked." : "Deduplicated and invalid numbers removed.",
      label: "Before every delivery",
    },
    { icon: ClipboardList, title: "Receive Your File", text: "CRM-ready Excel / CSV by email or WhatsApp.", label: CLAIMS.deliveryTime ? `Typically ${CLAIMS.deliveryTime}` : "On an agreed timeline" },
  ],
};

/** "How It Works" on legacy keyword-template pages. */
export const KEYWORD_PROCESS = {
  eyebrow: "How It Works",
  title: "How We Build & Deliver Your Data",
  steps: [
    { icon: Send, title: "Share Your Target", text: "Tell us the audience, city or state, filters and quantity you need." },
    { icon: Filter, title: "Filter & Segment", text: "We build your list with the exact industry, location and role filters." },
    { icon: ShieldCheck, title: "Verify & Clean", text: "Records are deduplicated and checked for invalid numbers before delivery." },
    { icon: ClipboardList, title: "Receive Your File", text: "Get a CRM-ready Excel / CSV by email or WhatsApp - sample first." },
  ],
};

/** Shown in front of each step number ("Step 1"). */
export const STEP_PREFIX = "Step ";

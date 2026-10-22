import { CLAIMS } from "@/config/claims";
import type { LinkItem, SegmentTab } from "@/types/landing";

/** Link to another top-level page: L("GST Database", "gst-database-india"). */
export const L = (label: string, slug: string): LinkItem => ({ label, href: `/${slug}` });

/** Compact segment-tab literal. */
export const T = (id: string, label: string, summary: string, examples: string[], bestFor: string): SegmentTab => ({ id, label, summary, examples, bestFor });

/** Appended to disclaimers; empty unless CLAIMS.dndScrubbing is on. */
export const dnd = CLAIMS.dndScrubbing ? " Mobile numbers are DND-checked before delivery." : "";

/** Shared page disclaimers. */
export const legal = "Business contact data for lawful B2B outreach only. Any business or person can request removal at any time.";
export const work = "Work-context contact data for lawful B2B outreach to professionals in their business role. Any person can request removal at any time.";

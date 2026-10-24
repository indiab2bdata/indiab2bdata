/**
 * Consumer / personal-data pages held back from indexing.
 *
 * PREPARED, NOT APPLIED: while CONSUMER_NOINDEX is false nothing changes. Set it to true and, in one step:
 *   - each page below gets <meta name="robots" content="noindex, follow">
 *   - it drops out of every sitemap
 *   - internal links to it disappear (footer, /database hub, contact-modal product list, related links,
 *     in-copy links, llms.txt). The page itself stays reachable at its URL, so "follow" still passes equity out.
 * These slugs are also excluded from the category rewrite rollout.
 */
export const CONSUMER_NOINDEX = false;

export const CONSUMER_PAGE_SLUGS = [
  "credit-card-holders-database-india",
  "debit-card-holders-database-india",
  "demat-account-holders-database-india",
  "hni-high-income-employees-database-india",
  "facebook-users-database-india",
  "club-mahindra-members-database",
  "females-database-india",
  "male-gents-database-india",
  "female-consumer-bangalore-database",
  "car-owners-database",
  "frequent-flyer-database-india",
  "cab-users-database-india",
  "dining-leisure-customers-database-india",
  "students-database",
  "job-seekers-database",
] as const;

const held = new Set<string>(CONSUMER_PAGE_SLUGS);

/** True if this slug is a consumer page (regardless of the switch) - used to keep it out of the rewrite rollout. */
export function isConsumerPage(slug: string) {
  return held.has(slug.replace(/^\//, ""));
}

/** True when the page should be noindexed and unlinked right now. */
export function isHeldFromIndex(slugOrHref: string) {
  return CONSUMER_NOINDEX && isConsumerPage(slugOrHref);
}

/** Drop links to held pages. Works with any { href } list. */
export function indexableLinks<T extends { href: string }>(links: T[]): T[] {
  return CONSUMER_NOINDEX ? links.filter((l) => !isConsumerPage(l.href)) : links;
}

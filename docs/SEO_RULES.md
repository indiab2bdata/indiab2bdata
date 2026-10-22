# SEO rules

These rules apply to every page. Most are enforced by the build or by `npm run content:check`,
`overlap:check` and `seo:check` (see `docs/ARCHITECTURE.md`).

## Copy

1. **No duplicate copy.** Each page is written for one search intent (see the intent notes in
   `src/content/index.ts`). Never paste paragraphs, FAQ answers or segment-tab text between pages; a
   tab's panels must each have their own description, roles and fields. `overlap:check` fails if a
   page's unique wording drops.
2. **Shared copy only in `content/shared/`.** Process steps, the compliance block, form copy and
   disclaimers are the only text allowed to repeat across pages.
3. **Claims follow `config/claims.ts`.** DND scrubbing, suppression lists, delivery times and refresh
   dates may only be stated when their switch is on, and only for things true for every order.
   Components never hardcode a claim: they read the switch or render copy from `content/shared`.
4. **No placeholders in published copy.** `{{COUNT}}`, `{{FILL}}` and `{{PRICE}}` render as "On
   request" and are allowed only in figure fields. The build fails on any other placeholder.

## FAQs and structured data

5. **FAQ schema = visible text.** FAQPage JSON-LD is built from the same array the FAQ section renders.
   Never write schema text separately.
6. **FAQ answers:** first sentence answers the question; then 2-4 sentences of page-specific detail; at
   most one natural internal link (`link: { text, href }`).
7. **Metadata and JSON-LD come from the content object** that renders the page (`lib/seo/metadata.ts`,
   `lib/seo/jsonld.ts`).

## Rendering

8. **Accordion and tab content must be in the server HTML.** `components/ui/Accordion` and `Tabs`
   always render every panel and hide inactive ones with CSS / the `hidden` attribute. Never render
   panel content conditionally (`{open && ...}`) or fetch it on click.
9. **Primary content is never collapsed:** the intro, coverage table and sample table are always open.
10. **One H1 per page.**

## URLs, links and indexing

11. **Self-canonical** on every page (set by `buildMetadata`). No root canonical in the layout.
12. **Titles ≤ 60 and descriptions ≤ 155 characters** (including the " | IndiaB2BData.com" suffix).
    `seo:check` warns; run it with `--strict` to fail.
13. **At most 6 related links** per page and **at most 8 location links**; every link points to a live
    page directly (no redirect hops, no 404s).
14. **Noindex:** consumer pages listed in `config/indexing.ts` (while `CONSUMER_NOINDEX` is on) and the
    utility pages `/thank-you` and `/image-credits` are noindex, absent from every sitemap and not
    linked from other pages.
15. **Sitemap = indexable routes.** Every indexable route is in exactly one child sitemap and every
    sitemap URL is a live route. `<lastmod>` comes from the content file's `updated` date - bump it
    only when the page's main copy changes.
16. **All 301s live in `config/redirects.ts`.** Retire or rename a slug there, never by deleting a page
    silently.

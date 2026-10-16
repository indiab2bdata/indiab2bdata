# IndiaB2BData.com: SEO Audit Report (2026-10-16)

## Executive summary
The site is **technically eligible for indexing**: all 72 sitemap URLs return 200, are `index, follow`, self-canonicalise to `https://www.` lowercase no-slash URLs, and are fully server-rendered (static generation; content appears in the initial HTML). robots.txt allows crawling, hostname and protocol variants redirect permanently, and unknown slugs return real 404s. This was checked on the local production build and on the live site.

The likely reasons for weak indexing and ranking are **not code defects**:
1. The site is about seven weeks old and grew by dozens of templated pages in one week.
2. Its marketing claims have no evidence behind them (on 64 of 72 pages).
3. Six pages sell consumer personal-data lists.
4. The blog has no posts.
5. Head-term pages overlap, and the state pages are templated.

None of this can be confirmed without Search Console data, which was unavailable.

## Stack
Next.js 16.3.3, App Router, npm, Vercel. There's no middleware/proxy, CMS or database: page data is static TypeScript/MJS (`src/lib/keyword-pages.ts`, `database-pages.ts`, `components/city-pages/city-data.mjs`). Metadata comes from `pageMetadata()` in `src/lib/seo.ts`; city pages use `metadataFor()` in `render-city.mjs`.

## Changes made (details in SEO_CHANGELOG.md)
- Removed the root-layout canonical and hreflang defaults.
- Made `Reveal` content visible without JavaScript.
- Turned the homepage `#offer` section into a linked directory of all 52 products and slimmed the sitewide footer.
- Shortened 14 long titles.
- Added the `npm run seo:check` regression test.

## Verified vs. unverified
| Check | Status |
|---|---|
| Status codes, canonicals, robots, titles, descriptions, H1s, internal links, sitemap (local + live) | VERIFIED |
| Google index status, page-indexing reasons, query data, sitemap processing | **UNVERIFIED**: the Advanced GSC connector returned ECONNRESET twice |
| Core Web Vitals (field/lab) | **UNVERIFIED**: not measured |
| Rich Results / Schema validator | **UNVERIFIED**: JSON-LD inspected in code only. Organization, WebSite, BreadcrumbList, WebPage, Service and FAQPage, with FAQ markup matching visible FAQs. Note: since 2023 Google shows FAQ rich results only for authoritative government/health sites, so FAQPage won't produce rich results here (it's harmless). |

## Remaining risks
Consumer-data pages (legal), unsupported claims and testimonials (trust/legal), the empty blog, near-duplicate state copy, and head-term cannibalisation. See SEO_ISSUES_REGISTER.md.

## Other files in this folder
`URL_AUDIT.csv` (72 URLs), `KEYWORD_URL_MAP.csv` (provisional; no query data), `INTERNAL_LINK_AUDIT.csv` (deduplicated links by source/destination/area), `SITEMAP_VALIDATION.md`, `SEO_ISSUES_REGISTER.md`, `SEO_CHANGELOG.md`, `SEO_30_DAY_ROADMAP.md`.

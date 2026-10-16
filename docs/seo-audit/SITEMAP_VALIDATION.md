# Sitemap Validation (2026-10-16)

Source: `src/app/sitemap.ts`. It reads the same data that generates the routes (`liveKeywordPages`, `databaseStates`, `cities`), so the sitemap and the built pages cannot drift apart. Every dynamic route sets `dynamicParams = false`.

| Count | Value | How obtained |
|---|---|---|
| Routes discovered in the app (indexable HTML pages) | 72 | `next build` route list: 7 static + 52 `[slug]` + 8 `[state]` + 5 `[city]` (+ utility routes: robots, sitemap, llms.txt, icons, `/api/contact`, `/about-us` redirect stub) |
| URLs in `/sitemap.xml` (local and live) | 72 | `<loc>` count |
| App pages missing from the sitemap | 0 | set comparison |
| Duplicate sitemap URLs | 0 | `seo:check` |
| Redirecting sitemap URLs | 0 | fetched with `redirect: manual` |
| 4xx/5xx sitemap URLs | 0 | same |
| `noindex` sitemap URLs | 0 | meta robots + no `X-Robots-Tag` header seen live |
| Non-canonical sitemap URLs (canonical ≠ loc) | 0 | `seo:check` |
| Low-value URLs requiring review | 7 | `/blog` + six consumer-data pages (see SEO-05, SEO-01) |

- All URLs are absolute `https://www.` URLs, lowercase, with no trailing slash, matching the canonical tags. `/about/` → 308 → `/about` on live.
- `lastModified` comes from a hand-maintained per-section date map (`CONTENT_UPDATED`), not a build timestamp. That's correct, but it's set per *section*: all 52 keyword pages share one date (2026-10-15). If you edit one page, consider per-page dates.
- `robots.txt` (live): `Allow: /`, `Sitemap: https://www.indiab2bdata.com/sitemap.xml`. The `Host:` line is ignored by Google (harmless).
- Retired and legacy URLs (26 rules in `src/lib/redirects.ts`) redirect permanently to intent-matched targets. None go to the homepage except the two "data provider" pages, which matched the homepage's intent. No chains or loops.
- **Sitemap processing in Search Console: UNVERIFIED** (connector unavailable).

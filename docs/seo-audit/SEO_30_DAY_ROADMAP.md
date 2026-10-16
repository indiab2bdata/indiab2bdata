# 30-Day SEO Roadmap

There's no Search Console baseline yet, so the indicators below are things to track, not targets. Google decides whether and when eligible pages are indexed.

## Week 1: validation and decisions
- Deploy the reviewed changes. Run `npm run seo:check -- https://www.indiab2bdata.com` after deploy.
- Reconnect Search Console. Export **Pages** (all not-indexed reasons with examples) and **Performance** (query + page, 3 months). Record the baseline: indexed count, the count per reason, impressions.
- Decide on the six consumer-data pages with legal/privacy counsel (SEO-01).
- Decide on `/blog`: real guides vs. noindex (SEO-05).
- Request indexing (URL Inspection) for the ~10 core pages: `/`, `/database`, the head-term pages, and the 5 city pages.

## Week 2: trust and claims
- Replace or substantiate "700+ cities", "500+ industries", "50L+ records", "10K+ businesses", "2–6 hours" (SEO-03), and verify the testimonials (SEO-04).
- Add a short "How our data is compiled" section (sources, refresh cycle, limitations), but only with facts the business confirms. Link it from the About page and product pages.

## Week 3: content differentiation
- Use Search Console queries to assign distinct intents to the six head-term pages (SEO-06). Rewrite intros and H2s accordingly.
- Improve state pages with verified, state-specific coverage (SEO-07). Add more city pages only where you have real, distinct local information (the existing 5 city pages are the best template).

## Week 4: review and iterate
- Compare against the Week-1 export: movement between "Discovered/Crawled – currently not indexed" and "Indexed", plus impressions per page group.
- Pages still "Crawled – not indexed" after improvements are candidates for consolidation (with 301s and a migration plan, after approval).
- Run PageSpeed Insights / CrUX for `/`, one keyword page, one state page and one city page. Record field vs. lab data separately.

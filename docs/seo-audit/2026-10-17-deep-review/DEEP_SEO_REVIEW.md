# Deep SEO review — IndiaB2BData.com
Date: 17 October 2026 (Asia/Kolkata). Public origin: https://www.indiab2bdata.com. Local preview: http://localhost:3100.

## Main finding
The redirect system is healthy. All 29 configured old URLs return a permanent 308, go directly to the intended 200 destination on the canonical HTTPS/www origin, and end on an indexable, self-canonical page. There are no redirect loops, redirected URLs in the sitemap, or internal links pointing to these retired source URLs.

The immediate gap is deployment: the local sitemap contains 96 pages, while the live sitemap has 90. Six completed local pages return 404 publicly. The five other recently rewritten pages are live, but still show earlier titles/content. This is a deployment difference, not a failure of the redirect file.

## Scope and method
- Fetched all 96 distinct sitemap paths against both environments: 192 page responses.
- Tested all 29 redirect mappings in both environments, including their destinations and final canonicals.
- Examined 6,152 local and 5,790 live internal link occurrences. Counts include navigation and repeated template links; they are not counts of unique editorial links.
- Checked 52 distinct same-origin image/OG asset paths per environment; all returned 200.
- Parsed titles, descriptions, canonicals, robots directives, H1/H2 headings and JSON-LD.
- Inventoried all 76 local keyword pages by topic, section headings, explicit editorial links, CTA settings and image source.
- Checked HTTP/apex/www variants, a trailing-slash legacy URL, query-string retention, a genuine unknown 404, robots.txt and excluded utility pages.
- Used the existing seo:check script as a baseline; it passed for the local production build.
- Measured raw HTML bytes and single-run request durations only. No Lighthouse, field Core Web Vitals, backlink audit or Search Console data was available.
- Read-only audit of application behavior. Created this report and CSV/JSON evidence; did not change application code or publish a deployment.

## Verified technical results
| Check | Local | Live |
|---|---:|---:|
| URLs listed in sitemap | 96 | 90 |
| Sitemap URLs returning 200 | 96/96 | 90/90 |
| Correct self-canonical, one H1, nonempty unique title/description on sitemap URLs | Pass | Pass |
| Unexpected noindex on sitemap URLs | 0 | 0 |
| Permanent redirect mappings passing | 29/29 | 29/29 |
| Orphan sitemap pages in observed link graph | 0 | 0 |
| Malformed JSON-LD blocks | 0 | 0 |
| Same-origin image/OG asset failures | 0/52 | 0/52 |
| Image elements missing an alt attribute | 0 | 0 |
| Internal links to configured retired source URLs | 0 | 0 |

The public six 404s below are not in the live sitemap. Do not describe the current live sitemap as containing broken entries. They are unpublished routes that were requested as public URLs.

## P1 — Publish and verify the intended pages
### Six public URLs currently returning 404
- [/food-beverage-stores-database-india](https://www.indiab2bdata.com/food-beverage-stores-database-india)
- [/freelancers-database-india](https://www.indiab2bdata.com/freelancers-database-india)
- [/frequent-flyer-database-india](https://www.indiab2bdata.com/frequent-flyer-database-india)
- [/furniture-stores-dealers-database-india](https://www.indiab2bdata.com/furniture-stores-dealers-database-india)
- [/gas-petroleum-companies-database-india](https://www.indiab2bdata.com/gas-petroleum-companies-database-india)
- [/gems-jewellery-shops-database-india](https://www.indiab2bdata.com/gems-jewellery-shops-database-india)

For each: publish the intended local route, confirm HTTP 200 and its self-canonical, confirm live sitemap inclusion, and check the relevant directory links. Do not redirect these newly intended pages to the homepage merely to conceal their missing deployment.

### Five live URLs still serving earlier content
| URL path | Live title | Local title |
|---|---|---|
| /fabric-clothing-stores-database-india | Fabric & Clothing Stores Database India  /  Garment Shops List  /  IndiaB2BData.com | Fabric & Clothing Stores Database India  /  Retail Contacts  /  IndiaB2BData.com |
| /facebook-users-database-india | Facebook Users Database India  /  Social Media Users Data  /  IndiaB2BData.com | Facebook Users Database India  /  Consumer Audience Enquiries  /  IndiaB2BData.com |
| /females-database-india | Females Database India  /  Women Consumers Data List  /  IndiaB2BData.com | Females Database India  /  Women Consumer Audience Lists  /  IndiaB2BData.com |
| /female-consumer-bangalore-database | Female Consumer Bangalore Database  /  Women Consumers  /  IndiaB2BData.com | Female Consumer Bangalore Database  /  Local Audience Enquiries  /  IndiaB2BData.com |
| /financial-analysts-managers-industry-database | Financial Analysts & Managers Industry Database India  /  IndiaB2BData.com | Financial Analysts & Finance Managers Database India  /  IndiaB2BData.com |

The local changes include updated page copy, 65 editorial links across the eleven requested pages, tailored enquiry CTAs and contextual WhatsApp links. These should be checked on the public deployment after release. No release was made during this audit.

## P2 — Fix location-specific content and linking
The shared CoverageLinks component states that “This data is available across all Indian states and 700+ cities” and renders every configured state and city link on every keyword page. This contradicts the narrower scope of:
- /female-consumer-bangalore-database
- /bank-employees-database-delhi-ncr
- /energy-power-sector-database-delhi-ncr

Use geography-specific wording and links on these pages. Keep a clearly labelled route to the broader India-wide catalogue without presenting all states as the specific dataset's coverage. The shared keyword-page Service schema defaults to Country: India; refine areaServed for the city/NCR-specific offerings when their actual scope is confirmed.

Relevant files: src/components/coverage-links.tsx, src/app/[slug]/page.tsx and src/lib/seo.ts. This is an accuracy and topical-focus issue; the current markup is not a JSON syntax error.

## P2 — Improve evidence and page purpose
### Make proof clearer
The rendered template repeats 50L+ records, 700+ cities and typical delivery figures on individual product pages. These appear to be site-level figures, not measured product-specific counts. Label catalogue-wide statistics clearly, verify business-owned claims and avoid making a small or local dataset look like it contains the site's total record count.

The existing named testimonials are reused across these categories. Their presence is verified; authenticity is not independently verified by this audit. Retain business-approved evidence and avoid implying that a general review is a category-specific case study.

### Give /blog a clear purpose
The live/local page advertises guides, but its primary cards lead to commercial database landing pages, not standalone articles. Publish useful, original guides or accurately present the page as a database-resource hub. Do not call it an article library without articles.

### Separate head-term intent
Review the homepage, B2B database, company database, corporate database, B2B leads and B2B/B2C hub as one content cluster. Suggested roles:
- Homepage: provider/service overview and trust.
- B2B database: broad business-contact dataset.
- Company database: organisation and registration records.
- Corporate database: enterprise accounts and executive roles.
- B2B leads: prospecting filters and sales use.
- B2B/B2C page: explain the distinction and route visitors to the right audience.

This is an intent-planning recommendation, not proven keyword cannibalisation. Search Console query/page data is needed before merging more pages. A five-word shingle comparison found only one keyword-page pair above 0.18 Jaccard similarity (business analysts versus sales/BD professionals: 0.253); similar wording alone does not prove duplicate intent.

## P2/P3 — Extend useful editorial links
Eleven of 76 keyword pages have explicit in-text link definitions; the remaining 65 rely on the related-database and coverage components. They are not orphaned, but phrases such as “see our ... database” in older page copy may still be plain text.

Add a few genuinely useful inline links where a related dataset helps the reader make a choice. Do not link every keyword or force all eleven new categories to cross-link. Preserve clear distinctions between:
- Retail business contacts and individual consumer audiences.
- Freelancer enquiries and employee hiring.
- Finance functions, economic research and business-analysis roles.
- Manufacturers, wholesalers/distributors and retail stockists.

The per-URL recommendations identify pages lacking the explicit editorial-link configuration. Links counted as “content” by the crawler include directory blocks; that metric alone is not proof of strong editorial linking.

## P3 — Title and snippet refinements
- 36 local titles and 29 live titles exceed 70 characters after the automatic “| IndiaB2BData.com” suffix.
- Six local descriptions exceed 170 characters.
- These are editing-review thresholds, not Google indexing rules. Google has no fixed character limit for a title link; display truncation varies by device and available width.
- The recent local rewrite also contributes long titles. Shorten the page-specific title or adjust the title strategy before publication; do not assume a 55-character input remains 55 characters after branding.
- Preserve the main topic at the front and remove redundant lists of synonyms.

Longest local examples:
| Path | Characters | Full title |
|---|---:|---|
| /engineers-service-engineers-database-india | 95 | Engineers & Service Engineers Database India  /  Field & Maintenance Engineers  /  IndiaB2BData.com |
| /energy-power-sector-database-delhi-ncr | 94 | Energy & Power Sector Database Delhi NCR  /  Power, Solar & Utility Companies  /  IndiaB2BData.com |
| /entertainment-media-database-india | 93 | Entertainment & Media Database India  /  Production Houses, Agencies & Media  /  IndiaB2BData.com |
| /educational-institutes-database-india | 92 | Educational Institutes Database India  /  Coaching, Training & Universities  /  IndiaB2BData.com |
| /designers-database-india | 87 | Designers Database India  /  Graphic, Fashion, Web & Product Designers  /  IndiaB2BData.com |
| /digital-photography-studios-database-india | 84 | Photography Studios Database India  /  Photographers & Studios List  /  IndiaB2BData.com |
| /economic-analysts-database-india | 84 | Economic Analysts Database India  /  Economists & Research Analysts  /  IndiaB2BData.com |
| /event-management-organisers-database-india | 84 | Event Management Companies Database India  /  Event Organisers List  /  IndiaB2BData.com |
| /credit-card-holders-database-india | 82 | Credit Card Holders Database India  /  Affluent Consumer Audience  /  IndiaB2BData.com |
| /dtp-operators-database-india | 82 | DTP Operators Database India  /  Desktop Publishing Professionals  /  IndiaB2BData.com |

Google guidance: [Title links](https://developers.google.com/search/docs/appearance/title-link).

## P3 — Images, repeated UI and performance
Thirty-nine of the 76 keyword pages use a shared category image. The images and alt attributes work technically; a relevant photograph may still communicate the product better than a generic warehouse, handshake or skyline.

The largest raw HTML responses measured approximately 245–257 KB, including Next.js hydration payloads and repeated UI. This is not a Core Web Vitals failure. Measure LCP, INP and CLS with PageSpeed Insights/CrUX and investigate only if the results show a problem. Check repeated testimonial rows and broad template link lists when profiling page weight.

## Important current Google guidance: FAQ rich results
Google's documentation update says FAQ rich results stopped appearing in Google Search starting 7 May 2026. Its FAQ feature documentation has since been removed. Keep useful FAQs for readers, but do not prioritise FAQPage markup as a way to obtain Google FAQ rich results.

The project's SEO-GUIDE.md contains older statements about FAQ/AEO/GEO benefits. Update those expectations. Valid JSON-LD is not a guarantee of rich-result eligibility or rankings.

Source: [Google Search documentation updates](https://developers.google.com/search/updates).

## Redirect relevance review — all 29 mappings
Every row below passed the live and local HTTP/canonical/indexability tests. The final column is an editorial intent review, not a report of a broken redirect.

| Old path | Destination | Live response | Redirect hops | SEO assessment |
|---|---|---|---:|---|
| /b2b-data-provider-india | / | 308 → 200 | 1 | Provider intent fits the service homepage; retain a clear data-provider proposition. |
| /business-data-provider-india | / | 308 → 200 | 1 | Provider intent fits the service homepage. Homepage redirects are not inherently wrong when relevant. |
| /business-database-india | /b2b-database-india | 308 → 200 | 1 | Good consolidation into the general B2B dataset page. |
| /verified-business-database-india | /b2b-database-india | 308 → 200 | 1 | Relevant consolidation; target should explain what verification means and provide evidence. |
| /b2b-companies-database-india | /b2b-database-india | 308 → 200 | 1 | Relevant B2B-company consolidation. Distinguish company records from sales-ready lead data. |
| /company-contact-database-india | /b2b-database-india | 308 → 200 | 1 | Relevant broad target; keep contact fields and business-contact use prominent. |
| /indian-company-database | /company-database-india | 308 → 200 | 1 | Good country-wide company-record match. |
| /business-directory-india | /company-database-india | 308 → 200 | 1 | Review directory search intent: destination sells datasets rather than offering a searchable directory. |
| /company-directory-india | /company-database-india | 308 → 200 | 1 | Review directory versus paid-dataset intent; explain the offer clearly on the destination. |
| /city-wise-company-database-india | /database | 308 → 200 | 1 | Hub is a relevant navigational target. Make the available city routes easy to discover. |
| /state-wise-company-database-india | /database | 308 → 200 | 1 | State directory is the appropriate hub target. |
| /registered-companies-database-india | /mca-company-database-india | 308 → 200 | 1 | MCA company-record target preserves registration intent. |
| /business-leads-india | /b2b-leads-database-india | 308 → 200 | 1 | Sales-leads target preserves lead-generation intent. |
| /service-providers-database-india | /industry-wise-company-database-india | 308 → 200 | 1 | Broader industry target is functional; strengthen service-sector navigation and links to IT and consulting categories. |
| /doctors-database-india | /doctors-database | 308 → 200 | 1 | Exact renamed/legacy replacement; relevant destination. |
| /dealers-database-india | /dealers-distributors-database-india | 308 → 200 | 1 | Exact renamed/legacy replacement; relevant destination. |
| /dealers-database | /dealers-distributors-database-india | 308 → 200 | 1 | Exact renamed/legacy replacement; relevant destination. |
| /exporters-database-india | /importers-exporters-database-india | 308 → 200 | 1 | Exact renamed/legacy replacement; relevant destination. |
| /exporters-database | /importers-exporters-database-india | 308 → 200 | 1 | Exact renamed/legacy replacement; relevant destination. |
| /d-mat-account-holders-database-india | /demat-account-holders-database-india | 308 → 200 | 1 | Exact renamed/legacy replacement; relevant destination. |
| /about-us | /about | 308 → 200 | 1 | Exact renamed/legacy replacement; relevant destination. |
| /about-us.html | /about | 308 → 200 | 1 | Exact renamed/legacy replacement; relevant destination. |
| /about.html | /about | 308 → 200 | 1 | Exact renamed/legacy replacement; relevant destination. |
| /index.html | / | 308 → 200 | 1 | Exact renamed/legacy replacement; relevant destination. |
| /contact.html | /contact | 308 → 200 | 1 | Exact renamed/legacy replacement; relevant destination. |
| /contact-us | /contact | 308 → 200 | 1 | Exact renamed/legacy replacement; relevant destination. |
| /contact-us.html | /contact | 308 → 200 | 1 | Exact renamed/legacy replacement; relevant destination. |
| /privacy-policy.html | /privacy-policy | 308 → 200 | 1 | Exact renamed/legacy replacement; relevant destination. |
| /terms-and-conditions.html | /terms-and-conditions | 308 → 200 | 1 | Exact renamed/legacy replacement; relevant destination. |

The two provider queries landing on the homepage are not automatically bad redirects: the homepage is a provider/service landing page. Review intent and preserve useful provider information; only irrelevant catch-all redirects warrant the soft-404 concern.

Google explicitly treats both 301 and 308 as permanent redirects. There is no need to change working 308 redirects to 301 for SEO alone. Prefer relevant final destinations and keep these redirects available long-term.

Sources: [Permanent redirects](https://developers.google.com/search/docs/crawling-indexing/301-redirects), [Site moves and URL mappings](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes).

## Host and path normalisation
Verified examples:
- http://indiab2bdata.com/ → https://indiab2bdata.com/ → https://www.indiab2bdata.com/ (two redirects).
- http://indiab2bdata.com/doctors-database-india takes three redirects before the final doctors page.
- The trailing-slash /doctors-database-india/ variant takes two redirects because slash normalisation happens before the legacy-path redirect.
- A utm_source query parameter is retained through the tested business-database redirect.
- A made-up URL returns a genuine 404.

Flatten the hosting-level HTTP/apex redirects to the final HTTPS/www URL where practical. This is a latency improvement, not a critical indexing failure. The 29 configured redirects already go directly to their final destinations when requested at the canonical origin.

## Indexing and measurement limits
- “Indexable” here means HTTP 200, a suitable canonical and no observed noindex; it does not mean Google has indexed the URL.
- Search Console URL Inspection, Pages, Sitemaps, query/page performance and Links reports were not available.
- No traffic loss, Google-selected canonical, manual action or ranking penalty is established.
- The thank-you and image-credits pages correctly use noindex and are excluded from the sitemap.
- JSON-LD syntax checks do not replace a semantic/schema or eligible rich-result review.
- Email delivery and form submission were not tested in this audit.
- Do not equate response timing from one audit run with field Core Web Vitals.

## Recommended order
1. Publish the reviewed local build when ready; verify the six missing routes and five revised live pages.
2. Align location-specific coverage copy, links and service geography.
3. Validate catalogue statistics and review evidence; clarify the blog's purpose.
4. Tighten overlong titles, including the recent drafts, and continue relevant editorial linking.
5. Use Search Console and real performance data to guide further consolidation or technical work.

## Evidence files
- URL_RECOMMENDATIONS.csv — one recommendation row for each of the 96 sitemap-path candidates.
- live-pages.csv / local-pages.csv — response, metadata, headings, schema and link measurements.
- live-redirects.csv / local-redirects.csv — every configured old URL, destination and test result.
- live-links.csv / local-links.csv — observed internal link edges and page areas.
- live-assets.csv / local-assets.csv — same-origin image and OG-asset responses.
- keyword-content-inventory.json — topic and content structure for all 76 keyword pages.
- audit-data.json / summary.json — machine-readable evidence and comparison.

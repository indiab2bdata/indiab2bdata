# Content guide

Every word on the site lives in `src/content`. You should never need to edit a component or a route to
add or change page copy.

## Add a category page

1. Copy an existing file in `src/content/categories/` that uses the same template:
   - landing template: `government-employees-database-india.ts` (fully hand-written) or
     `importers-database-india.ts` (built with `categoryLanding()` from `content/shared/category-template.ts`);
   - legacy keyword template: any file with `template: "keyword"`.
2. Save it as `<slug>.ts`. The slug becomes the URL: `/<slug>`.
3. Fill every field. Keep `keyword` even on landing pages - it feeds the homepage directory, llms.txt and
   related-page cards. For a landing page, pass the trust settings (`subjects`, `kind`, optional
   `notIncluded`) as the second argument of `categoryLanding()`; they generate the buyer-trust FAQs.
4. Set `updated` to today's date (`YYYY-MM-DD`). It is the sitemap `<lastmod>`.
5. Register it: import the file in `src/content/categories/index.ts` and add it to the list at the
   position where it should appear in listings.
6. If it belongs in a product group, add its link in `src/config/navigation.ts`.
7. Run the checks:

   ```
   npm run content:check
   npm run build
   npm run overlap:check
   npm run start   # then, in another terminal:
   npm run seo:check -- http://localhost:3000
   ```

## Add a state or city page

- State: copy a file in `src/content/states/`, save it as `<state-slug>.ts`, fill it, register it in
  `src/content/states/index.ts`. `hubCities` / `moreCities` drive the card on `/database`.
- City: copy a file in `src/content/cities/`, save it as `<state-slug>-<city-slug>.ts`, register it in
  `src/content/cities/index.ts`. The state must already exist.

State and city copy that is identical on every page (form subtitles, footer text, data fields) lives in
`content/shared/state-template.ts` and `city-template.ts`.

## Edit one-off pages

Home, about, contact, blog, the `/database` hub, thank-you and image credits are in
`src/content/pages/*.ts`. The three legal pages (`data-sourcing-compliance`, `privacy-policy`,
`terms-and-conditions`) are `.tsx` files because their long-form copy is JSX; inside them use only
`<LegalSection>`, plain links and `<ProtectedEmail>`. Bump `meta.updated` when you change a page's copy.

FAQ sets for the homepage (also shown on /contact), about, blog and the hub are in
`content/pages/faqs.ts`.

## Shared copy

`src/content/shared/` is the only place for copy that appears on many pages: the process steps, the
compliance block, form copy and disclaimers, header/footer text, landing-template headings and the
buyer-trust FAQ generator. Change it there and every page updates.

## Rules that the build and checks enforce

- No `{{PLACEHOLDER}}` in published copy. Placeholders are allowed only in record counts, fill rates,
  `pricingHint.from` and `totalRecords`; they render as "On request". Never replace one with a guess.
- No claim that `src/config/claims.ts` has switched off (DND scrubbing, suppression list, delivery
  time, refresh dates). Wording that depends on a switch must read the switch (see `claims-copy.ts`).
- No FAQ answer copied verbatim from another page. FAQ answers render exactly as written in FAQPage
  schema; at most one internal link per answer (`link: { text, href }`, where `text` appears in the answer).
- At most 6 related links per page; every link must point to a live page.
- Pages may not lose unique wording (`overlap:check`).

Known problems that predate these checks are listed in `scripts/baselines/content-check.json`. When you
fix one, run `npm run content:check -- --update-baseline` so it can never come back.

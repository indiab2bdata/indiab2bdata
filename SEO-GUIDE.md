# SEO / AEO / GEO Guide for IndiaB2BData.com

This is the reference checklist for making **any** page on this site — new or existing — fully
optimized for classic search engines (SEO), answer engines like Google's AI Overviews and
Perplexity (AEO), and generative AI assistants like ChatGPT and Gemini that cite sources (GEO).

It documents what's already implemented sitewide, and exactly what a new page must include to
match that standard. Everything here refers to real files in this repo — copy the patterns, don't
reinvent them.

---

## 1. The three disciplines, briefly

| | Optimizes for | What it rewards |
|---|---|---|
| **SEO** (Search Engine Optimization) | Google/Bing ranking & rich results | Keywords, backlinks, canonical URLs, crawlable structure, page speed, schema |
| **AEO** (Answer Engine Optimization) | Featured snippets, AI Overviews, voice assistants | A direct, quotable answer near the top of the page; `FAQPage`/`Q&A` schema; clear question→answer pairs |
| **GEO** (Generative Engine Optimization) | Being cited by ChatGPT, Perplexity, Gemini, Claude | Unambiguous entity data (`Organization`/`WebSite` schema), citable facts/numbers, structured data richness, consistent brand facts across the whole site |

In practice these overlap heavily — a page built well for AEO (clear answer + FAQ schema) is
already most of the way to being GEO-friendly too. Treat this doc as one combined checklist.

---

## 2. Sitewide foundation (already implemented — don't duplicate, extend)

These live once, at the root, and apply to every page automatically:

- **`src/app/layout.tsx`** — global `<html>` metadata (title template, default description,
  Google Search Console verification, `metadataBase`), plus sitewide `Organization` and `WebSite`
  JSON-LD (from `src/lib/seo.ts`) rendered once via `<JsonLd data={[organizationJsonLd, websiteJsonLd]} />`.
- **`src/app/sitemap.ts`** — auto-generates `/sitemap.xml` from `keywordPages` and
  `databaseStates`. **Any new statically-generated route must be added here**, or it will never be
  discovered by crawlers except through internal links.
- **`src/app/robots.ts`** — allows all crawling, points to the sitemap.
- **`src/lib/site-config.ts`** — single source of truth for brand name, canonical URL, phone,
  WhatsApp, email, default title/description. Never hardcode these values in a page.
- **`src/lib/seo.ts`** — the helper library every page should use (see §3).
- Global `FloatingButtons` (call + WhatsApp) and footer `Quick Links` give every page baseline
  interlinking and contact affordance regardless of page-specific content.

---

## 3. `src/lib/seo.ts` — use these helpers, don't write raw JSON-LD

| Helper | Use for |
|---|---|
| `pageMetadata({ title, description, path, keywords?, image? })` | The `export const metadata` (or `generateMetadata`) of **every** page. Produces `<title>`, `description`, canonical `alternates`, and a matching `openGraph` + `twitter` block in one call. |
| `breadcrumbJsonLd(items)` | `BreadcrumbList` schema — pass the same items you give the visible `<Breadcrumbs>`/`PageHero breadcrumbs=`. |
| `webPageJsonLd({ type, name, description, url, about? })` | `WebPage` / `AboutPage` / `ContactPage` / `CollectionPage` schema depending on page purpose. |
| `faqJsonLd(faqs)` | `FAQPage` schema. **The array passed here must be the exact same array rendered on the page** — Google disallows FAQ schema that doesn't match visible content. |
| `serviceJsonLd({ name, description, areaServed? })` | `Service` schema for a data-product/landing page. |
| `itemListJsonLd(items, name?)` | `ItemList` schema for any hub/category page listing sub-pages (states, guides, products) — this is a strong GEO signal because it gives an AI crawler an explicit, structured list of what the site offers. |

### Why a helper instead of inline metadata objects

Next's metadata resolution is only a **shallow merge** per field (see
`node_modules/next/dist/docs/01-app/03-api-reference/04-functions/generate-metadata.md#merging`).
If a page defines its own `openGraph` object, it fully replaces the parent's — it does **not**
inherit the default OG image. That means every page must define its own complete
`openGraph`/`twitter` block, or it silently ships with no social preview at all. `pageMetadata()`
exists specifically so nobody has to remember this.

### The one exception: the homepage

The homepage must **not** set its own `<title>` — it should keep inheriting
`metadata.title.default` from the layout, otherwise Next's `title.template` (`"%s | IndiaB2BData.com"`)
gets applied on top of an already-complete title. Call `pageMetadata()` with `titleTag: null` to
skip the `<title>` tag while still setting the Open Graph/Twitter title (see `src/app/page.tsx`).

---

## 4. Required checklist — every single page

Copy this list when building a page. Every item maps to a concrete pattern already in the repo.

- [ ] **Unique `<title>`** — 50–60 characters, includes the primary keyword, human-readable (not
      keyword-stuffed). Set via `pageMetadata()`.
- [ ] **Unique meta description** — 140–160 characters, states the concrete offer (coverage,
      format, speed) not generic fluff. Same string is reused as the `og:description`/
      `twitter:description` by the helper — write it to work in both places.
- [ ] **Canonical URL** — always absolute, always via `pageMetadata({ path })`. Never leave it out;
      a missing canonical is the #1 cause of duplicate-content dilution on programmatic sites like
      this one (700+ keyword/state pages).
- [ ] **Open Graph + Twitter Card** — via `pageMetadata({ image })`. Use the most specific real
      image available for that page (see `getKeywordImage()` for keyword pages,
      `/images/keywords/city-skyline.jpg` for state pages, `/images/about/team.jpg` for About). Falls
      back to the homepage hero image if you pass nothing.
- [ ] **One `<h1>`** — set by `PageHero`/`KeywordHero`'s `title` prop. Never render a second `<h1>`
      anywhere else on the page.
- [ ] **Breadcrumbs — visible + schema, together.** Pass `breadcrumbs` to `PageHero` (or use
      `KeywordHero`, which has it built in) **and** render the matching `breadcrumbJsonLd(...)` in a
      `<JsonLd>` at the top of the page. These two must describe the same path — never add schema
      breadcrumbs without a visible breadcrumb trail (Google may ignore/penalize mismatched schema).
- [ ] **Page-type JSON-LD** — at minimum a `webPageJsonLd(...)` call with the right `type`. See §6
      for which type each page kind should use.
- [ ] **`FAQPage` schema only if there's a visible FAQ on the page**, built from the *exact same*
      array via `faqJsonLd(...)`. Don't invent FAQ schema for a page with no FAQ UI.
- [ ] **At least one AEO "Quick Answer"** for any page targeting a search query (keyword pages,
      state pages) — use `<AnswerBox answer={...} />` directly under the hero. One or two sentences,
      self-contained, would make sense read aloud with no other context. See §5.
- [ ] **At least 3 contextual internal links** to other real pages on the site (not just nav/footer)
      — via `<RelatedLinks pages={...} />` or inline links in body copy. See §7.
- [ ] **A CTA path to conversion** — `<InlineCta>` mid-page and `<ContactCta>` at the bottom (this
      also gives every page the sitewide short lead-capture form, per site convention).
- [ ] **Every `<Image>` has descriptive, non-generic `alt` text** — describe what's in the image
      and how it relates to the query, not just "photo" or the filename.
- [ ] **Route registered in `src/app/sitemap.ts`** if it's a new static route pattern.
- [ ] **No orphan pages** — anything you add must be linked from at least one hub page
      (`/database`, `/blog`, or the homepage's `RelatedLinks`) in addition to the sitemap.

---

## 5. AEO specifics: writing the "Quick Answer"

AI Overviews, Perplexity, and featured snippets pull the sentence(s) that most directly answer the
implied question, *verbatim*. `AnswerBox` (`src/components/answer-box.tsx`) exists purely for this.

Rules for the `answer` field on every `KeywordPage`/`DatabaseState` entry:

1. **Answer the question in the first sentence.** Lead with "A B2B database is…" not "At
   IndiaB2BData.com, we believe…".
2. **Self-contained.** It must make sense with zero surrounding context — assume it's the only
   sentence an AI engine quotes.
3. **Concrete numbers over adjectives.** "50L+ verified records across 700+ cities" beats "a huge
   database."
4. **60–90 words.** Long enough to be substantive, short enough to be quotable whole.
5. **Third person, brand-named.** Refer to "IndiaB2BData.com" by name so citation/attribution is
   unambiguous — this is also a GEO signal (see §8).

The FAQ blocks below the fold reinforce this: each `question`/`answer` pair should also stand
alone as a quotable unit, phrased as a real question a buyer would type or speak ("Which Gujarat
cities are covered?", not "Coverage details").

---

## 6. JSON-LD by page type

| Page kind | Example route | `webPageJsonLd` type | Extra schema |
|---|---|---|---|
| Homepage | `/` | *(none — Organization/WebSite already global)* | `FAQPage` (matching visible FAQ), `ItemList` of product/category pages |
| Keyword landing page | `/[slug]` | `WebPage` | `FAQPage`, `Service` |
| State database page | `/database/[state]` | `WebPage` | `FAQPage`, `Service` (with `areaServed`) |
| Hub / category page | `/database`, `/blog` | `CollectionPage` | `ItemList` of the child pages it lists |
| About | `/about-us` | `AboutPage` | — |
| Contact | `/contact` | `ContactPage` | `FAQPage` if it renders one |
| Legal (Privacy/Terms) | `/privacy-policy`, `/terms-and-conditions` | `WebPage` | — |

All of these also get a `BreadcrumbList`. Every route in the table above is already implemented
this way — use it as the reference implementation for the next page kind you add.

---

## 7. Interlinking rules

Programmatic SEO sites live or die on internal linking — it's how PageRank (and an AI crawler's
sense of topical authority) flows from your strong pages (home, hub pages) into the long tail
(individual keyword/state pages), and back.

- **Hub → child**: `/database` links to every `/database/[state]`; `/blog` links to a curated set
  of `/[slug]` guides. Keep these lists exhaustive — a hub page that doesn't link to all its
  children creates orphans.
- **Child → siblings**: every keyword/state page ends with `<RelatedLinks pages={otherPages} />`
  showing other pages in the same family (`getOtherKeywordPages()`), so a crawler/reader can
  traverse the whole cluster.
- **Child → hub**: breadcrumbs handle this automatically.
- **Utility pages → money pages**: About, Contact, and legal pages should never be link
  dead-ends. Each links back to 2–3 relevant keyword pages via `RelatedLinks` — a visitor (or
  crawler) landing on `/contact` from a branded search should be one click from a product page.
- **Anchor text**: use the actual keyword/state name as link text (`page.keyword`, `state.name`),
  never "click here" / "learn more".

---

## 8. GEO specifics: getting cited by AI assistants

Generative engines answer by synthesizing across sources and (increasingly) citing them. To be a
citable source:

1. **One unambiguous entity.** The `Organization` schema in the root layout (`@id`:
   `https://indiab2bdata.com/#organization`) is the canonical description of who we are. Every
   page's `WebSite`/`WebPage` schema references it via `isPartOf`/`publisher` rather than
   redefining brand facts — keep it that way. Don't let a new page introduce a slightly different
   phone number, record count, or city count anywhere; inconsistency across pages is the fastest
   way to lose GEO trust.
2. **Numbers should match everywhere.** "50L+ verified records", "700+ cities", "500+ industries"
   appear in the Hero, About, layout `Organization` description, and JSON-LD. If you update one,
   update all of them (search the repo for the old figure before changing it).
3. **Structured > prose for facts.** Cities lists, FAQs, highlight grids (`FeatureGrid`,
   `Checklist`) are all rendered as distinct DOM elements, not a single paragraph — this makes them
   trivially easy for an LLM crawler to extract as discrete facts.
4. **Avoid marketing fluff in the first 2–3 sentences of any section.** "Industry-leading,
   best-in-class data" is not a citable fact and gets filtered out by extraction models. "Every
   record checked and refreshed monthly" is.
5. **Freshness signals.** `sitemap.ts` sets `lastModified` to build time for every route — keep
   this working. If a page's underlying data materially changes (new cities added, pricing
   changed), that's also worth a visible "last updated" note on pages where it matters (already
   done on Privacy/Terms).
6. **contactPoint schema** (already in `organizationJsonLd`) gives assistants a structured way to
   answer "how do I contact IndiaB2BData.com" without guessing from prose.

### Known gaps (not yet done — do these next for full GEO maturity)

- No dedicated 1200×630 Open Graph banner image exists yet; pages currently reuse content photos
  (`hero.jpg`, `team.jpg`, `city-skyline.jpg`) as a stand-in. A proper branded OG card would
  improve social-share CTR.
- `organizationJsonLd` has no `sameAs` (no linked social profiles exist yet) — add it as soon as
  real social profiles exist. Don't fabricate placeholder URLs. (`logo` is now set from
  `public/images/favicon.png`; the header itself still renders an inline colored `<div>` rather
  than that image file — swap it in if/when a header redesign is in scope.)
- No authored blog articles with bylines/publish dates yet (`/blog` is a guide hub linking to
  keyword pages, not dated articles) — real dated articles with an `author` would add E-E-A-T
  signal Google increasingly weights for YMYL-adjacent (data/compliance) content.
- No customer `Review`/`AggregateRating` schema — only add this once testimonials are backed by a
  verifiable source; fabricated ratings schema is a Google spam violation.

---

## 9. Adding a new page — step by step

1. **Decide the page kind** from the table in §6 and copy the closest existing route as a
   starting point (`src/app/[slug]/page.tsx` for a new landing-page pattern, `src/app/about-us/page.tsx`
   for a static informational page).
2. Write `title`/`description` as constants, pass them into `pageMetadata()`.
3. Build the breadcrumb array once, use it for both the visible `<Breadcrumbs>`/`PageHero` prop
   and `breadcrumbJsonLd()`.
4. Pick the right `webPageJsonLd` `type` and any extra schema (`faqJsonLd`, `serviceJsonLd`,
   `itemListJsonLd`) per §6, and render them all in one `<JsonLd data={[...]} />` at the top of the
   returned JSX.
5. Include `<AnswerBox>` if the page targets a search query.
6. Include at least one `<InlineCta>` and end with `<ContactCta>`.
7. Add `<RelatedLinks>` pointing at real sibling/parent pages.
8. If it's a new static route (not covered by an existing `generateStaticParams()` loop), add it
   to `src/app/sitemap.ts`.
9. Link to it from at least one hub page or the homepage.
10. Run `npx next build` — a broken JSON-LD reference or missing canonical will still build
    successfully (schema isn't type-checked at build time), so also spot-check with:
    `curl -s http://localhost:PORT/your-page | grep -oE '<script type="application/ld\+json">.*?</script>'`
    and paste one block into Google's [Rich Results Test](https://search.google.com/test/rich-results)
    before shipping anything you're unsure about.

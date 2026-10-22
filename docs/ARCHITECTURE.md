# Architecture

IndiaB2BData.com is a Next.js App Router site of statically generated SEO landing pages. Every page's
words live in `src/content` as typed data; routes only look content up and hand it to a template.

## Request flow

```
app/<route>/page.tsx  ──getCategory(slug)──▶  content/index.ts (registry, zod-validated at build)
        │                                           │
        │ buildMetadata / landingMetadata           │ content/categories/<slug>.ts
        ▼                                           ▼
components/templates/*Template.tsx  ──renders──▶  components/sections/*  ──▶ components/ui/*
        │
        └─ JsonLd(landingJsonLd(page))   ← same content object as the visible page
```

Metadata, JSON-LD, sitemaps and `llms.txt` are all generated from the same content objects the page
renders, so titles, FAQ text and breadcrumbs cannot drift from what visitors see.

## Folders

```
src/
├── app/                 Routing only. Each page.tsx fetches content and renders a template.
│   ├── [slug]/          Category pages (landing template once migrated, legacy keyword template until then)
│   ├── database/        Hub, /database/[state], /database/[state]/[city]
│   ├── sitemap*.xml/    Sitemap index + core / states / guides child sitemaps
│   ├── llms.txt/        Prerendered from the registry
│   └── api/contact/     Form submissions (all forms post here)
├── content/             ALL page copy, as typed data
│   ├── categories/      One file per category slug (113, incl. retired slugs that now 301) + index.ts
│   ├── states/          One file per state + index.ts
│   ├── cities/          <state>-<city>.ts + index.ts
│   ├── pages/           One-off pages: home, about, contact, blog, database hub, legal, thank-you, FAQs
│   ├── shared/          The only shared copy: process steps, compliance block, form copy, site chrome,
│   │                    template builders (category/state/city) and the buyer-trust FAQ generator
│   └── index.ts         Registry: getAllCategories(), getCategory(), getState(), getCity(), ... + validation
├── config/              site.ts (NAP, URLs), claims.ts (claim switches), indexing.ts (noindex lists),
│                        redirects.ts (all 301s, imported by next.config.ts), navigation.ts (menus, product groups)
├── types/landing.ts     LandingPage, KeywordPage, CategoryContent, StateContent, CityContent, Faq, ...
├── schemas/             zod schemas for every content file
├── components/
│   ├── layout/          Header, Footer, MobileCtaBar, FloatingButtons, Breadcrumbs, ContactModal, JsonLd
│   ├── sections/        One component per page section; home/, keyword/ (legacy template), hub/ subfolders
│   ├── templates/       Category/State/City/Landing/Keyword templates; pages/ for one-off pages
│   ├── forms/           LeadForm, SubmitButton, useContactForm
│   └── ui/              Accordion, Tabs, Button, Card, SectionHead, Reveal, icons, ...
├── lib/
│   ├── seo/             metadata.ts, jsonld.ts, sitemap.ts, llms.ts
│   ├── analytics.ts     GA4 id and snippet (loaded lazyOnload by the layout)
│   ├── sample-data.ts   Fictional, masked sample rows / CSV per data profile
│   └── utils.ts         isPlaceholder, shown, monthYear, formatDataProduct
└── styles/globals.css   Tailwind v4 + design tokens
scripts/                 Checks wired to npm scripts and CI (see below)
docs/                    This file, CONTENT_GUIDE.md, SEO_RULES.md
```

## Templates

| Template | Used by | Content type |
| --- | --- | --- |
| `LandingTemplate` (via `CategoryTemplate`, `StateTemplate`, `CityTemplate`) | migrated category pages, all state and city pages | `LandingPage` |
| `KeywordTemplate` | category pages not yet migrated (`template: "keyword"`) | `KeywordPage` |
| `templates/pages/*` | home, about, contact, blog, /database, legal pages, thank-you, image credits | `content/pages/*` |

A category file keeps its `keyword` data even after migration: it still feeds listings (homepage
directory, llms.txt, related-page cards). `template` says which layout renders the page.

## Server vs client components

Interactive parts are client components: `Accordion`, `Tabs`, `Button` (opens the sample modal),
`CsvDownloadButton`, `LeadForm`, `ContactModal`, `Header` (mobile menu), `IndustryDirectory`,
`DirectoryBrowser`. Some section-level components are also client components for historical reasons
(`Faq`, `InlineCta`, `SampleDownload`, `HomeHero`, `WhyUs`, `DataFolders`, `ContactCta`): splitting them
changes the page's RSC payload, which the byte-identical refactor did not allow. Split them in a
follow-up when output changes are acceptable.

Two React details matter when editing templates:

- **`useId`** (FAQ and tab ids) depends on a component's position among its siblings. Keep the child
  order of templates stable, and pass ids into `Accordion` / `Tabs` from the caller.
- **Client component props are serialized** into every page. Client components import their own copy
  from `content/` instead of receiving new props, and a client component's export name is part of the
  payload (that is why `ThankYouTemplate.tsx` still exports `ThankYouContent`).

## Validation

`content/index.ts` validates every content file against `schemas/landing.schema.ts` when it loads, so
`next build` fails on a missing field, a wrong shape, a `{{PLACEHOLDER}}` in published copy, a
category whose `template` disagrees with its data, or a duplicate slug. Placeholders are allowed only
in figure fields (`records`, `fillRate`, `pricingHint.from`, `totalRecords`), where they render as
"On request".

## Checks

| npm script | What it does | Needs |
| --- | --- | --- |
| `content:check` | zod + placeholder report + claims vs `config/claims.ts` + duplicate FAQ answers + max 6 related links + link targets. Ratchets against `scripts/baselines/content-check.json`. | nothing (also scans `.next` if present) |
| `build` | Fails on invalid content (registry validation) | - |
| `overlap:check` | Five-word-sequence uniqueness per page vs `scripts/baselines/overlap.json` | build |
| `seo:check` | 200s, one H1, self-canonical, unique titles/descriptions, length limits (warnings, `--strict` to fail), noindex rules, sitemap = indexable routes, no broken internal links, no orphans | running server |
| `snapshot` / `snapshot:diff` | Save / diff normalised HTML of every route, redirects and compiled CSS | build |
| `lh` | Lighthouse on home, a category page and a city page with fixed settings | running server |

CI (`.github/workflows/checks.yml`) runs lint, typecheck, `content:check`, build, `overlap:check` and
`seo:check` on every pull request and push to `main`.

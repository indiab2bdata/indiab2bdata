# SEO Changelog: 2026-10-16

Baseline commit: `3aac544`. Nothing deployed.

| File | Change | Before → After |
|---|---|---|
| `src/app/layout.tsx` | Removed root `alternates` (canonical `"/"` + `en-IN` hreflang) | A page without its own metadata would have inherited a homepage canonical → it now has none (safe default). All current pages still self-canonicalise via `pageMetadata()`. |
| `src/components/reveal.tsx` | Opacity no longer animated; slide reduced to 16px; honours `prefers-reduced-motion` | Server HTML had content at `opacity:0` → fully visible without JS |
| `src/components/sections/products.tsx` | The 6 homepage product cards are now links. Added a grouped directory of all 52 products (from `PRODUCT_GROUPS`) | The homepage had no contextual links to products → the hub links to every product |
| `src/components/footer.tsx` | Removed the 52-link product grid and the city list; added a "Core Databases" column (6 hubs + link to the directory) | 72 links on every page → ~22 hub links |
| `src/lib/keyword-pages.ts` | Shortened 14 over-long `title` values (no slug, H1 or body changes) | 74–94 → ≤ 72 chars incl. suffix |
| `scripts/seo-check.mjs` (new), `package.json` | `npm run seo:check -- <base-url>` regression test | n/a |
| `docs/seo-audit/*` (new) | Audit deliverables | n/a |

## Tests (after changes)
- `npx tsc --noEmit`: pass
- `npm run lint`: 0 errors, 1 pre-existing warning (`cityPath` unused in `render-city.mjs`, untouched)
- `next build`: pass, 81 routes, same route list as baseline
- `npm run seo:check -- http://localhost:3123`: **passed**. 72 URLs; status 200, single self canonical, no noindex, unique titles/descriptions, exactly one H1, no broken/redirecting internal links, no orphans.

## Not done: requires approval
Consumer-data pages, claim wording, testimonials, blog index, page merges, deleting `src/app/about-us/page.tsx` (the delete was blocked by the permission system), Vercel apex redirect.

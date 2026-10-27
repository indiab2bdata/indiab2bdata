import type { Metadata } from "next";
import { isHeldFromIndex } from "@/config/indexing";
import { siteConfig } from "@/config/site";
import { getKeywordImage } from "@/content/shared/keyword-images";
import type { CustomPage, KeywordPage, LandingPage } from "@/types/landing";

export type OgImage = { url: string; width?: number; height?: number; alt?: string };

/** Official X/Twitter account (https://x.com/indiab2bdata); TWITTER_SITE env var overrides it. */
const TWITTER_SITE = process.env.TWITTER_SITE?.trim() || "@indiab2bdata";

export const DEFAULT_OG_IMAGE: OgImage = {
  url: `${siteConfig.url}/images/home/hero.jpg`,
  width: 1200,
  height: 900,
  alt: `${siteConfig.name} - B2B business data across India`,
};

/** Resolves a site-relative path to an absolute https://... URL. */
export function absoluteUrl(path: string) {
  if (path.startsWith("http")) return path;
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}

/** Site-wide defaults, set once in the root layout. */
export const rootMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.defaultTitle,
    template: siteConfig.titleTemplate,
  },
  description: siteConfig.defaultDescription,
  // No root canonical: every page sets its own via buildMetadata(), and a root default of "/"
  // would silently canonicalise any page that forgets to override it to the homepage.
  verification: {
    google: siteConfig.googleSiteVerification,
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "geo.region": "IN",
    "geo.placename": "India",
  },
};

/**
 * Builds the full title/description/canonical/OG/Twitter block for a page.
 * Every route should call this so canonical + social previews are never
 * silently missing (Next.js metadata is only shallow-merged from the root
 * layout, so a page that skips `openGraph` entirely loses it - see
 * node_modules/next/dist/docs/.../generate-metadata.md#merging).
 * Length limits (title, description) are checked by `npm run seo:check`, not enforced here.
 */
export function buildMetadata({
  title,
  titleTag = title,
  description,
  path,
  keywords,
  image,
}: {
  title: string;
  /** Overrides the <title> tag independently of the OG/Twitter title - pass
   * `null` to skip the <title> tag entirely and let it inherit the layout's
   * default (used on the homepage, which shouldn't get the title template
   * applied twice). */
  titleTag?: string | null;
  description: string;
  path: string;
  keywords?: string[];
  image?: OgImage;
}): Metadata {
  const url = absoluteUrl(path);
  const ogImage = image ?? DEFAULT_OG_IMAGE;

  return {
    ...(titleTag ? { title: titleTag } : {}),
    description,
    ...(keywords ? { keywords } : {}),
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_IN",
      type: "website",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      site: TWITTER_SITE,
      creator: TWITTER_SITE,
      title,
      description,
      images: [{ url: ogImage.url, alt: ogImage.alt }],
    },
  };
}

/** Metadata for a category, state or city page on the landing template. */
export function landingMetadata(page: LandingPage): Metadata {
  return buildMetadata({
    title: page.title,
    description: page.metaDescription,
    path: page.path,
    image: { url: `${siteConfig.url}${page.image.src}`, width: 1200, height: 800, alt: page.image.alt },
  });
}

/** Metadata for a category page on the legacy keyword template (noindex when held from indexing). */
export function keywordMetadata(page: KeywordPage): Metadata {
  const visual = getKeywordImage(page.slug, page.keyword);
  const meta = buildMetadata({
    title: page.title,
    description: page.metaDescription,
    path: `/${page.slug}`,
    keywords: [page.keyword],
    image: { url: `${siteConfig.url}${visual.src}`, width: visual.width, height: visual.height, alt: visual.alt },
  });
  return isHeldFromIndex(page.slug) ? { ...meta, robots: { index: false, follow: true } } : meta;
}

/** Metadata for a custom (block-based) category page. */
export function customMetadata(page: CustomPage): Metadata {
  return buildMetadata({
    title: page.title,
    description: page.metaDescription,
    path: page.path,
    image: { url: `${siteConfig.url}${page.image.src}`, width: page.image.width, height: page.image.height, alt: page.image.alt },
  });
}

import { ContentImage } from "@/components/ui/ContentImage";
import { DataNetwork } from "@/components/ui/DataNetwork";
import { SITE_COPY } from "@/content/shared/site-copy";

export const DEFAULT_HERO_IMAGE = "/images/home/hero.jpg";

/** Photo + brand-blue overlay behind inner-page heroes. The image is the LCP element, so it's preloaded. */
export function HeroBackground({
  image = DEFAULT_HERO_IMAGE,
  alt = SITE_COPY.heroImageAlt,
}: {
  image?: string;
  alt?: string;
}) {
  return (
    <>
      <ContentImage src={image} alt={alt} width={1600} height={1067} preload sizes="100vw" className="absolute inset-0 h-full w-full object-cover" />
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#0a2347]/75 via-[#123b72]/50 to-[#0b78d0]/30"
        aria-hidden="true"
      />
      <DataNetwork variant="cta" className="opacity-60" />
    </>
  );
}

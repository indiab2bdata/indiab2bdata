import Image from "next/image";
import { DataNetwork } from "@/components/data-network";

export const DEFAULT_HERO_IMAGE = "/images/home/hero.jpg";

/** Photo + brand-blue overlay behind inner-page heroes. The image is the LCP element, so it's preloaded. */
export function HeroBackground({ image = DEFAULT_HERO_IMAGE }: { image?: string }) {
  return (
    <>
      <Image src={image} alt="" fill preload sizes="100vw" className="object-cover" />
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#0a2347]/75 via-[#123b72]/50 to-[#0b78d0]/30"
        aria-hidden="true"
      />
      <DataNetwork variant="cta" className="opacity-60" />
    </>
  );
}

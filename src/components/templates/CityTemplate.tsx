import { LandingTemplate } from "@/components/templates/LandingTemplate";
import type { CityContent } from "@/types/landing";

/** A city database page (/database/[state]/[city]). */
export function CityTemplate({ city }: { city: CityContent }) {
  return <LandingTemplate page={city.landing} />;
}

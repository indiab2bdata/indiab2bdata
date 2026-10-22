import { KeywordTemplate } from "@/components/templates/KeywordTemplate";
import { LandingTemplate } from "@/components/templates/LandingTemplate";
import type { CategoryContent } from "@/types/landing";

/** A category page: the landing template once migrated, the legacy keyword template until then. */
export function CategoryTemplate({ category }: { category: CategoryContent }) {
  return category.landing ? <LandingTemplate page={category.landing} /> : <KeywordTemplate page={category.keyword} />;
}

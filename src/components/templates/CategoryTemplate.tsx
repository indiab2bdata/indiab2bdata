import { CustomTemplate } from "@/components/templates/CustomTemplate";
import { KeywordTemplate } from "@/components/templates/KeywordTemplate";
import { LandingTemplate } from "@/components/templates/LandingTemplate";
import type { CategoryContent } from "@/types/landing";

/** A category page: a hand-built custom page, the landing template, or the legacy keyword template. */
export function CategoryTemplate({ category }: { category: CategoryContent }) {
  if (category.custom) return <CustomTemplate page={category.custom} updated={category.updated} />;
  return category.landing ? <LandingTemplate page={category.landing} /> : <KeywordTemplate page={category.keyword} />;
}

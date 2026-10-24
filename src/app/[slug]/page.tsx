import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CategoryTemplate } from "@/components/templates/CategoryTemplate";
import { getCategory, liveCategories } from "@/content";
import { customMetadata, keywordMetadata, landingMetadata } from "@/lib/seo/metadata";

export const dynamicParams = false;

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return liveCategories.map((c) => ({ slug: c.keyword.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const category = getCategory((await params).slug);
  if (!category) return {};
  if (category.custom) return customMetadata(category.custom);
  return category.landing ? landingMetadata(category.landing) : keywordMetadata(category.keyword);
}

export default async function CategoryPage({ params }: { params: Params }) {
  const category = getCategory((await params).slug);
  if (!category) notFound();
  return <CategoryTemplate category={category} />;
}

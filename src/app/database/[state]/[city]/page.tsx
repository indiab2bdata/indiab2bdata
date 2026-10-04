import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CityPage from "@/components/city-pages/CityPage.js";
import { cities } from "@/components/city-pages/city-data.mjs";
import { metadataFor } from "@/components/city-pages/render-city.mjs";

const cityPages = Object.values(cities);

export const dynamicParams = false;

type Params = Promise<{ state: string; city: string }>;

export function generateStaticParams() {
  return cityPages.map(({ stateSlug, slug }) => ({ state: stateSlug, city: slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { state, city } = await params;
  const page = cityPages.find((entry) => entry.stateSlug === state && entry.slug === city);

  return page ? metadataFor(page.slug) : {};
}

export default async function CityDatabasePage({ params }: { params: Params }) {
  const { state, city } = await params;
  const page = cityPages.find((entry) => entry.stateSlug === state && entry.slug === city);

  if (!page) notFound();

  return <CityPage cityKey={page.slug} />;
}
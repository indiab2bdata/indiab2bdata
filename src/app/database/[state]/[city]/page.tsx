import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CityTemplate } from "@/components/templates/CityTemplate";
import { landingMetadata } from "@/components/templates/LandingTemplate";
import { getAllCities, getCity } from "@/content";

export const dynamicParams = false;

type Params = Promise<{ state: string; city: string }>;

export function generateStaticParams() {
  return getAllCities().map(({ stateSlug, slug }) => ({ state: stateSlug, city: slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { state, city } = await params;
  const page = getCity(state, city);
  return page ? landingMetadata(page.landing) : {};
}

export default async function CityPage({ params }: { params: Params }) {
  const { state, city } = await params;
  const page = getCity(state, city);
  if (!page) notFound();
  return <CityTemplate city={page} />;
}

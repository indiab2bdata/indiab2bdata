import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { cities } from "@/components/city-pages/city-data.mjs";
import { getCityProfile } from "@/lib/landing";
import { DatabaseLanding, landingMetadata } from "@/components/landing-v2/database-landing";

export const dynamicParams = false;

type Params = Promise<{ state: string; city: string }>;

export function generateStaticParams() {
  return Object.values(cities).map(({ stateSlug, slug }) => ({ state: stateSlug, city: slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { state, city } = await params;
  const profile = getCityProfile(state, city);
  return profile ? landingMetadata(profile) : {};
}

export default async function CityDatabasePage({ params }: { params: Params }) {
  const { state, city } = await params;
  const profile = getCityProfile(state, city);
  if (!profile) notFound();

  return <DatabaseLanding profile={profile} />;
}

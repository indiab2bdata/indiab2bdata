import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { databaseStates } from "@/lib/database-pages";
import { getStateProfile } from "@/lib/landing";
import { DatabaseLanding, landingMetadata } from "@/components/landing-v2/database-landing";

export const dynamicParams = false;

type Params = Promise<{ state: string }>;

export function generateStaticParams() {
  return databaseStates.map((s) => ({ state: s.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { state } = await params;
  const profile = getStateProfile(state);
  return profile ? landingMetadata(profile) : {};
}

export default async function DatabaseStatePage({ params }: { params: Params }) {
  const { state } = await params;
  const profile = getStateProfile(state);
  if (!profile) notFound();

  return <DatabaseLanding profile={profile} />;
}

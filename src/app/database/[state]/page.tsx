import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { landingMetadata } from "@/lib/seo/metadata";
import { StateTemplate } from "@/components/templates/StateTemplate";
import { getAllStates, getState } from "@/content";

export const dynamicParams = false;

type Params = Promise<{ state: string }>;

export function generateStaticParams() {
  return getAllStates().map((s) => ({ state: s.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const state = getState((await params).state);
  return state ? landingMetadata(state.landing) : {};
}

export default async function StatePage({ params }: { params: Params }) {
  const state = getState((await params).state);
  if (!state) notFound();
  return <StateTemplate state={state} />;
}

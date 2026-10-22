import type { LandingProfile } from "@/lib/landing/types";
import { governmentEmployees } from "@/lib/landing/profiles/government-employees";
import { stateProfiles } from "@/lib/landing/profiles/states";
import { cityProfiles } from "@/lib/landing/profiles/cities";
import { coreProfiles } from "@/lib/landing/profiles/core";
import { batch1Profiles } from "@/lib/landing/profiles/batch1";

/** Category pages migrated to the new template, keyed by slug. Unmigrated slugs fall back to the legacy keyword template. */
const categoryProfiles: Record<string, LandingProfile> = {
  "government-employees-database-india": governmentEmployees,
  ...coreProfiles,
  ...batch1Profiles,
};

export function getCategoryProfile(slug: string) {
  return categoryProfiles[slug];
}

export function getStateProfile(slug: string) {
  return stateProfiles[slug];
}

export function getCityProfile(stateSlug: string, citySlug: string) {
  return cityProfiles[`${stateSlug}/${citySlug}`];
}

export const migratedPaths = [...Object.values(categoryProfiles), ...Object.values(stateProfiles), ...Object.values(cityProfiles)].map((p) => p.path);

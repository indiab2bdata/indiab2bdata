import { LandingTemplate } from "@/components/templates/LandingTemplate";
import type { StateContent } from "@/types/landing";

/** A state database page (/database/[state]). */
export function StateTemplate({ state }: { state: StateContent }) {
  return <LandingTemplate page={state.landing} />;
}

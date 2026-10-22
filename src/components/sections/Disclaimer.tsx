import { Info } from "lucide-react";
import { shell } from "@/components/ui/styles";
import { CLAIMS } from "@/config/claims";
import { LANDING_COPY } from "@/content/shared/landing-copy";
import { monthYear } from "@/lib/utils";

/** The page's single, short disclaimer + (when CLAIMS.showRefreshDates) the visible refresh date. */
export function Disclaimer({ text, lastUpdated }: { text: string; lastUpdated: string }) {
  return (
    <div className="bg-white">
      <div className={`flex flex-col gap-3 border-t border-[#DCEAF3] py-6 text-sm text-muted md:flex-row md:items-start md:justify-between ${shell}`}>
        <p className="flex max-w-[80ch] items-start gap-2">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
          {text}
        </p>
        {CLAIMS.showRefreshDates && (
          <p className="shrink-0 font-semibold text-navy">
            {LANDING_COPY.disclaimer.refreshedPrefix}
            {monthYear(lastUpdated)}
          </p>
        )}
      </div>
    </div>
  );
}

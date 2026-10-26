import Link from "next/link";
import { CalendarClock, FileCheck2, ShieldCheck } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { LeadForm } from "@/components/forms/LeadForm";
import { SampleButton, WhatsAppButton } from "@/components/ui/Button";
import { shell } from "@/components/ui/styles";
import { CLAIMS } from "@/config/claims";
import { COMPLIANCE_PATH } from "@/config/navigation";
import { LANDING_COPY } from "@/content/shared/landing-copy";
import { monthYear } from "@/lib/utils";
import type { LandingPage } from "@/types/landing";

const COPY = LANDING_COPY.hero;

/** Abstract "records flowing into a table" visual - pure SVG, no image request, so it never competes for LCP. */
function DataVisual() {
  return (
    <svg aria-hidden="true" viewBox="0 0 600 600" className="pointer-events-none absolute -right-40 -top-24 h-[640px] w-[640px] opacity-70 md:-right-24">
      <defs>
        <radialGradient id="lv-glow" cx="50%" cy="45%" r="55%">
          <stop offset="0%" stopColor="#16b8e8" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#16b8e8" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="300" cy="280" r="280" fill="url(#lv-glow)" />
      {[0, 1, 2, 3, 4, 5].map((r) => (
        <rect key={r} x={150 + (r % 2) * 24} y={130 + r * 52} width={300 - (r % 3) * 40} height="30" rx="8" fill="#0b78d0" fillOpacity={0.05 + r * 0.012} stroke="#0b78d0" strokeOpacity="0.14" />
      ))}
      {[
        [110, 120],
        [490, 170],
        [470, 430],
        [120, 450],
        [300, 70],
      ].map(([cx, cy]) => (
        <g key={`${cx}-${cy}`}>
          <line x1={cx} y1={cy} x2="300" y2="280" stroke="#0b78d0" strokeOpacity="0.12" strokeDasharray="4 6" />
          <circle cx={cx} cy={cy} r="7" fill="#fff" stroke="#0b78d0" strokeOpacity="0.45" strokeWidth="2" />
        </g>
      ))}
    </svg>
  );
}

/** Light hero: message, trust row and two CTAs on the left; lead form on the right. */
export function Hero({ page, source }: { page: LandingPage; source: string }) {
  const crumbs = [{ label: "Home", href: "/" }, ...page.breadcrumbs.map((b, i, all) => (i === all.length - 1 ? { label: b.label } : b))];
  return (
    <section className="relative overflow-hidden border-b border-[#DCEAF3] bg-[linear-gradient(180deg,#f2f9fd_0%,#ffffff_70%)] pb-14 pt-28 md:pb-20 md:pt-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(#dcEAF3_1px,transparent_1px),linear-gradient(90deg,#dcEAF3_1px,transparent_1px)] bg-[size:44px_44px] opacity-40 [mask-image:radial-gradient(ellipse_at_top_left,black_20%,transparent_70%)]"
      />
      <DataVisual />
      <div className={`relative grid items-center gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-14 ${shell}`}>
        <div>
          <Breadcrumbs items={crumbs} tone="light" />
          <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-teal/20 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-teal shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-teal" aria-hidden="true" />
            {page.eyebrow}
          </span>
          <h1 className="mt-5 font-display text-[2rem] font-extrabold leading-[1.1] tracking-tight text-navy md:text-5xl">{page.h1}</h1>
          <p className="mt-5 max-w-[60ch] text-[1.05rem] leading-relaxed text-muted">{page.lead}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <SampleButton source={`${source}-primary`} />
            <WhatsAppButton message={page.cta.whatsappMessage} />
          </div>

          <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-navy">
            {!page.path.startsWith("/database/") && <li className="inline-flex items-center gap-2 rounded-full bg-[#e8f7ee] px-3 py-1.5 font-semibold text-[#17784a] ring-1 ring-[#bfe6cf]">
              <ShieldCheck className="h-4 w-4" />
              <Link href={COMPLIANCE_PATH} className="hover:underline">
                {COPY.complianceBadge}
              </Link>
            </li>}
            <li className="inline-flex items-center gap-2">
              <FileCheck2 className="h-4 w-4 text-teal" />
              {COPY.sampleBadge}
            </li>
            {CLAIMS.showRefreshDates && (
              <li className="inline-flex items-center gap-2">
                <CalendarClock className="h-4 w-4 text-teal" />
                {COPY.refreshedPrefix}
                {monthYear(page.lastUpdated)}
              </li>
            )}
          </ul>
        </div>
        <div className="lg:w-full lg:max-w-[460px] lg:justify-self-end">
          <LeadForm
            source={`${source}-hero-form`}
            requirement={page.name}
            title={page.cta.formTitle}
            subtitle={page.cta.formSubtitle}
            buttonLabel={page.cta.buttonLabel}
          />
        </div>
      </div>
    </section>
  );
}

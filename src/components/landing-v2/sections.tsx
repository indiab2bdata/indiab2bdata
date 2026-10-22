import Link from "next/link";
import {
  ArrowUpRight,
  BadgeCheck,
  CalendarClock,
  CheckCircle2,
  ClipboardList,
  FileCheck2,
  Filter,
  Info,
  LayoutGrid,
  MapPin,
  Send,
  ShieldCheck,
  Star,
  UserX,
} from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Reveal } from "@/components/reveal";
import { LeadForm } from "@/components/landing/lead-form";
import { SampleButton, WhatsAppButton, SegmentTabs, CsvDownloadButton } from "@/components/landing-v2/client";
import { PRODUCT_GROUPS } from "@/lib/product-groups";
import { indexableLinks } from "@/lib/indexing";
import { isPlaceholder, monthYear, shown } from "@/lib/landing/display";
import { CLAIMS } from "@/lib/claims";
import type { CoverageRow, IconCard, LandingProfile, LandingTestimonial, LinkItem, SegmentTab } from "@/lib/landing/types";

export const COMPLIANCE_PATH = "/data-sourcing-compliance";

const shell = "mx-auto max-w-7xl px-5 md:px-8";

export function SectionHead({
  eyebrow,
  title,
  text,
  center = false,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  center?: boolean;
  dark?: boolean;
}) {
  return (
    <Reveal className={`mb-10 max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      <span className={`text-xs font-semibold uppercase tracking-[0.16em] ${dark ? "text-teal-light" : "text-teal-dark"}`}>{eyebrow}</span>
      <h2 className={`mt-3 font-display text-[1.75rem] font-extrabold leading-tight tracking-tight md:text-4xl ${dark ? "text-white" : "text-navy"}`}>
        {title}
      </h2>
      {text && <p className={`mt-4 max-w-[70ch] leading-relaxed ${center ? "mx-auto" : ""} ${dark ? "text-white/75" : "text-muted"}`}>{text}</p>}
    </Reveal>
  );
}

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
export function LandingHero({ profile, source }: { profile: LandingProfile; source: string }) {
  const crumbs = [{ label: "Home", href: "/" }, ...profile.breadcrumbs.map((b, i, all) => (i === all.length - 1 ? { label: b.label } : b))];
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
            {profile.eyebrow}
          </span>
          <h1 className="mt-5 font-display text-[2rem] font-extrabold leading-[1.1] tracking-tight text-navy md:text-5xl">{profile.h1}</h1>
          <p className="mt-5 max-w-[60ch] text-[1.05rem] leading-relaxed text-muted">{profile.lead}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <SampleButton source={`${source}-primary`} />
            <WhatsAppButton message={profile.cta.whatsappMessage} />
          </div>

          <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-navy">
            <li className="inline-flex items-center gap-2 rounded-full bg-[#e8f7ee] px-3 py-1.5 font-semibold text-[#17784a] ring-1 ring-[#bfe6cf]">
              <ShieldCheck className="h-4 w-4" />
              <Link href={COMPLIANCE_PATH} className="hover:underline">
                DPDP Act 2023 aligned
              </Link>
            </li>
            <li className="inline-flex items-center gap-2">
              <FileCheck2 className="h-4 w-4 text-teal" />
              Free sample before you pay
            </li>
            {CLAIMS.showRefreshDates && (
              <li className="inline-flex items-center gap-2">
                <CalendarClock className="h-4 w-4 text-teal" />
                Refreshed {monthYear(profile.lastUpdated)}
              </li>
            )}
          </ul>
        </div>
        <div className="lg:w-full lg:max-w-[460px] lg:justify-self-end">
          <LeadForm
            source={`${source}-hero-form`}
            requirement={profile.name}
            title={profile.cta.formTitle}
            subtitle={profile.cta.formSubtitle}
            buttonLabel={profile.cta.buttonLabel}
          />
        </div>
      </div>
    </section>
  );
}

/** Per-page stats. Placeholder figures are skipped, never shown as fake numbers. */
export function StatsBar({ profile }: { profile: LandingProfile }) {
  const items = [
    !isPlaceholder(profile.totalRecords) && { value: profile.totalRecords, label: `${profile.name.replace(/ Database$/, "")} Records` },
    { value: String(profile.coverageTable.rows.length), label: `${profile.coverageTable.segmentLabel}s Covered` },
    { value: String(profile.dataFields.length), label: "Data Fields per Record" },
    CLAIMS.showRefreshDates && { value: monthYear(profile.lastUpdated), label: "Data Last Refreshed" },
  ].filter(Boolean) as { value: string; label: string }[];

  return (
    <div className="border-b border-[#DCEAF3] bg-white">
      <dl className={`grid grid-cols-2 gap-y-6 py-7 ${["", "", "md:grid-cols-2", "md:grid-cols-3", "md:grid-cols-4"][items.length]} ${shell}`}>
        {items.map((s) => (
          <div key={s.label} className="text-center md:border-l md:border-[#DCEAF3] md:first:border-l-0">
            <dd className="font-display text-2xl font-extrabold text-navy md:text-3xl">{s.value}</dd>
            <dt className="mt-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">{s.label}</dt>
          </div>
        ))}
      </dl>
    </div>
  );
}

function IconCardItem({ card, index }: { card: IconCard; index: number }) {
  return (
    <Reveal delay={(index % 3) * 0.06} className="h-full">
      <div className="flex h-full flex-col rounded-2xl border border-[#DCEAF3] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal/30 hover:shadow-[0_20px_40px_-24px_rgba(11,120,208,0.55)]">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal/10 text-teal">
          <card.icon className="h-5 w-5" strokeWidth={1.9} />
        </span>
        <h3 className="mt-4 font-display text-lg font-bold leading-snug text-navy">{card.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{card.description}</p>
      </div>
    </Reveal>
  );
}

/** Segment summary + 3 segment cards + (optional) employer-type tabs. */
export function SegmentSection({ profile }: { profile: LandingProfile }) {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className={shell}>
        <SectionHead eyebrow="Who's in this database" title={`Inside the ${profile.name}`} text={profile.segmentSummary} />
        <div className="grid gap-5 md:grid-cols-3">
          {profile.segmentCards.map((card, i) => (
            <IconCardItem key={card.title} card={card} index={i} />
          ))}
        </div>
        {profile.segmentTabs && (
          <div className="mt-14">
            <Reveal>
              <h3 className="mb-5 font-display text-xl font-bold text-navy md:text-2xl">{profile.segmentTabs.heading}</h3>
              <SegmentTabs tabs={profile.segmentTabs.tabs} label={profile.segmentTabs.heading} />
            </Reveal>
          </div>
        )}
      </div>
    </section>
  );
}

/** Live sample table (5 masked rows) + CSV download + compliance link right beside it. */
export function SamplePreview({
  profile,
  headers,
  rows,
  csv,
}: {
  profile: LandingProfile;
  headers: string[];
  rows: string[][];
  csv: string;
}) {
  return (
    <section id="sample" className="scroll-mt-24 bg-bgsoft py-16 md:py-24">
      <div className={shell}>
        <SectionHead
          eyebrow="Sample data preview"
          title="See the Exact Columns You'll Receive"
          text="These 5 rows are fictional and masked. They show the format only. Your paid file has the same columns, filled with real records that match your filters."
        />
        <Reveal>
          <div className="overflow-hidden rounded-2xl border border-[#DCEAF3] bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <caption className="sr-only">Sample {profile.name} records (fictional, masked)</caption>
                <thead className="bg-navy text-white">
                  <tr>
                    {headers.map((h) => (
                      <th key={h} scope="col" className="whitespace-nowrap px-4 py-3 text-xs font-semibold uppercase tracking-wide">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EEF4F8]">
                  {rows.map((row, r) => (
                    <tr key={r} className="odd:bg-white even:bg-[#f8fbfd]">
                      {row.map((cell, c) => (
                        <td key={c} className="whitespace-nowrap px-4 py-3 text-navy/85">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex flex-col gap-4 border-t border-[#DCEAF3] p-5 md:flex-row md:items-center md:justify-between">
              <p className="flex items-start gap-2 text-sm text-muted">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#17784a]" />
                <span>
                  How we source, scrub and remove records:{" "}
                  <Link href={COMPLIANCE_PATH} className="font-semibold text-teal hover:underline">
                    Data Sourcing &amp; Compliance
                  </Link>
                </span>
              </p>
              <CsvDownloadButton csv={csv} filename={`${profile.sample.csvSlug}-sample-data.csv`} />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/** Coverage table + fields included + pricing hint. */
export function CoverageSection({ profile }: { profile: LandingProfile }) {
  const { coverageTable: t, pricingHint } = profile;
  return (
    <section className="bg-white py-16 md:py-24">
      <div className={shell}>
        <SectionHead
          eyebrow="Coverage & fields"
          title={t.heading}
          text={`Each record is tagged by ${t.segmentLabel.toLowerCase()}, so you pay only for the slices you need. Record counts for your exact filters come with your quote.`}
        />
        <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
          <Reveal>
            <div className="overflow-x-auto rounded-2xl border border-[#DCEAF3]">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-bgsoft text-navy">
                  <tr>
                    <th scope="col" className="px-5 py-3.5 font-semibold">{t.segmentLabel}</th>
                    <th scope="col" className="px-5 py-3.5 font-semibold">Includes</th>
                    <th scope="col" className="px-5 py-3.5 text-right font-semibold">Approx. records</th>
                    <th scope="col" className="px-5 py-3.5 text-right font-semibold">Mobile / email fill</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EEF4F8]">
                  {t.rows.map((row: CoverageRow) => (
                    <tr key={row.segment}>
                      <th scope="row" className="px-5 py-3.5 font-semibold text-navy">{row.segment}</th>
                      <td className="px-5 py-3.5 text-muted">{row.detail}</td>
                      <td className="px-5 py-3.5 text-right font-medium text-navy">{shown(row.records)}</td>
                      <td className="px-5 py-3.5 text-right text-muted">{shown(row.fillRate)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="h-full rounded-2xl bg-navy-dark p-6 text-white md:p-7">
              <p className="flex items-center gap-2 text-sm font-semibold text-teal-light">
                <ClipboardList className="h-4 w-4" />
                Fields in every record
              </p>
              <ul className="mt-4 grid gap-2.5">
                {profile.dataFields.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-white/85">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal-light" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-6 border-t border-white/10 pt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/60">Indicative pricing</p>
                <p className="mt-1 font-display text-2xl font-extrabold">
                  {isPlaceholder(pricingHint.from) ? "Custom quote" : `From ${pricingHint.from}`}
                  {!isPlaceholder(pricingHint.from) && <span className="ml-1 text-sm font-medium text-white/70">{pricingHint.unit}</span>}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{pricingHint.note}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function UseCaseSection({ profile }: { profile: LandingProfile }) {
  return (
    <section className="bg-bgsoft py-16 md:py-24">
      <div className={shell}>
        <SectionHead eyebrow="Use cases" title={`What Teams Do With the ${profile.name}`} />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {profile.useCases.map((card, i) => (
            <IconCardItem key={card.title} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

const STEPS = [
  { icon: Send, title: "Share Your Brief", text: "Audience, locations, fields and quantity.", label: "2 minutes" },
  { icon: Filter, title: "Get Sample & Quote", text: "Matching sample rows, record count and price.", label: "Same working day" },
  {
    icon: ShieldCheck,
    title: CLAIMS.dndScrubbing ? "Verify & Scrub" : "Verify & Clean",
    text: CLAIMS.dndScrubbing ? "Deduplicated, invalid numbers removed, DND-checked." : "Deduplicated and invalid numbers removed.",
    label: "Before every delivery",
  },
  { icon: ClipboardList, title: "Receive Your File", text: "CRM-ready Excel / CSV by email or WhatsApp.", label: CLAIMS.deliveryTime ? `Typically ${CLAIMS.deliveryTime}` : "On an agreed timeline" },
];

export function Stepper() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className={shell}>
        <SectionHead eyebrow="How it works" title="From Brief to File in Four Steps" center />
        <ol className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div aria-hidden="true" className="absolute left-[12.5%] right-[12.5%] top-7 hidden h-px bg-[#DCEAF3] lg:block" />
          {STEPS.map((s, i) => (
            <li key={s.title} className="relative text-center">
              <span className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-navy text-white ring-8 ring-white">
                <s.icon className="h-5 w-5" />
              </span>
              <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-teal-dark">Step {i + 1}</p>
              <p className="mt-1 font-display font-bold text-navy">{s.title}</p>
              <p className="mx-auto mt-2 max-w-[240px] text-sm leading-relaxed text-muted">{s.text}</p>
              <span className="mt-3 inline-block rounded-full bg-teal/10 px-3 py-1 text-xs font-semibold text-teal-dark">{s.label}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/** Inline CTA band - placed after every second major section. */
export function CtaBand({ text, source, whatsappMessage }: { text: string; source: string; whatsappMessage: string }) {
  return (
    <div className="bg-white py-6 md:py-8">
      <div className={shell}>
        <Reveal>
          <div className="flex flex-col items-center justify-between gap-5 rounded-2xl bg-[linear-gradient(110deg,#0b78d0,#123b72)] px-6 py-6 text-center md:flex-row md:px-10 md:text-left">
            <p className="max-w-[60ch] font-display text-base font-bold leading-snug text-white md:text-lg">{text}</p>
            <div className="flex shrink-0 flex-wrap justify-center gap-3">
              <SampleButton source={source} className="!bg-white !text-navy hover:!bg-bgsoft" />
              <WhatsAppButton message={whatsappMessage} label="WhatsApp" className="!border-white/40 !bg-transparent !text-white hover:!bg-white/10" />
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

/** Sitewide trust block - the page's one dark section. */
export function ComplianceBlock() {
  const points = [
    { icon: BadgeCheck, title: "Lawfully sourced", text: "Compiled from business-context sources. We never use leaked or hacked data." },
    { icon: ShieldCheck, title: "DPDP Act 2023 aligned", text: "Purpose-limited B2B use, minimal fields and documented processing." },
    CLAIMS.dndScrubbing && { icon: Filter, title: "DND scrubbing", text: "Each delivery is checked against the DND registry before it is sent." },
    {
      icon: UserX,
      title: "Opt-out honoured",
      text: CLAIMS.suppressionList ? "Removal requests are actioned and suppressed from all future files." : "Removal requests are actioned promptly.",
    },
  ].filter(Boolean) as { icon: typeof Filter; title: string; text: string }[];
  return (
    <section className="relative overflow-hidden bg-navy-dark py-16 md:py-20">
      <div className={shell}>
        <SectionHead
          dark
          eyebrow="Trust & compliance"
          title="Data Sourcing & Compliance"
          text="Every list we deliver follows the same sourcing, scrubbing and removal rules. Read the full policy, including our grievance officer contact."
        />
        <div className={`grid gap-5 sm:grid-cols-2 ${points.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
          {points.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <p.icon className="h-5 w-5 text-teal-light" />
                <p className="mt-3 font-display font-bold text-white">{p.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-white/70">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Link
          href={COMPLIANCE_PATH}
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
        >
          Read our data sourcing &amp; compliance policy
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

/** Real, category-specific reviews only - renders nothing when there are none. */
export function TestimonialsGrid({ items }: { items?: LandingTestimonial[] }) {
  if (!items?.length) return null;
  return (
    <section className="bg-white py-16 md:py-20">
      <div className={shell}>
        <SectionHead eyebrow="Client feedback" title="What Buyers of This Data Say" />
        <div className="grid gap-5 md:grid-cols-3">
          {items.map((t) => (
            <figure key={t.name} className="flex h-full flex-col rounded-2xl border border-[#DCEAF3] bg-bgsoft p-6">
              <div className="flex gap-0.5 text-amber" aria-hidden="true">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-navy">&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption className="mt-4 text-sm">
                <span className="font-semibold text-navy">{t.name}</span>
                <span className="text-muted"> - {t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Max 6 related pages + (optional) max 8 contextual location links + compact category browser. */
export function ExploreSection({ related, locations }: { related: LinkItem[]; locations?: { heading: string; links: LinkItem[] } }) {
  const card =
    "group flex items-center justify-between gap-3 rounded-xl border border-[#DCEAF3] bg-white px-5 py-4 text-sm font-semibold text-navy shadow-sm transition-all hover:-translate-y-0.5 hover:border-teal/40 hover:shadow-md";
  const topGroups = ["professionals", "company-records", "trade-industry", "consumer", "education-web", "registry"]
    .map((id) => PRODUCT_GROUPS.find((g) => g.id === id))
    .filter((g): g is (typeof PRODUCT_GROUPS)[number] => Boolean(g));

  return (
    <section className="bg-bgsoft py-16 md:py-24">
      <div className={`space-y-14 ${shell}`}>
        <div>
          <SectionHead eyebrow="Related databases" title="Often Bought Together" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {indexableLinks(related).slice(0, 6).map((l) => (
              <Link key={l.href} href={l.href} className={card}>
                {l.label}
                <ArrowUpRight className="h-4 w-4 shrink-0 text-muted transition-colors group-hover:text-teal" />
              </Link>
            ))}
          </div>
        </div>

        {locations && locations.links.length > 0 && (
          <div>
            <h2 className="mb-5 font-display text-xl font-bold text-navy md:text-2xl">{locations.heading}</h2>
            <div className="flex flex-wrap gap-3">
              {locations.links.slice(0, 8).map((l) => (
                <Link key={l.href} href={l.href} className="inline-flex items-center gap-1.5 rounded-full border border-[#DCEAF3] bg-white px-4 py-2 text-sm font-medium text-navy shadow-sm transition-colors hover:border-teal/50 hover:text-teal">
                  <MapPin className="h-3.5 w-3.5 text-teal" />
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        )}

        <BrowseByCategory groups={topGroups} />
      </div>
    </section>
  );
}

export function BrowseByCategory({ groups }: { groups: { id: string; heading: string; description: string; links: unknown[] }[] }) {
  return (
    <div className="rounded-2xl border border-[#DCEAF3] bg-white p-6 md:p-8">
      <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-teal-dark">
            <LayoutGrid className="h-4 w-4" />
            Browse by category
          </p>
          <h2 className="mt-2 font-display text-xl font-bold text-navy md:text-2xl">Explore Other Database Categories</h2>
        </div>
        <Link href="/database" className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal hover:underline">
          View all databases
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((g) => (
          <Link key={g.id} href={`/database#${g.id}`} className="group rounded-xl border border-[#EEF4F8] p-4 transition-colors hover:border-teal/40 hover:bg-bgsoft">
            <span className="flex items-center justify-between font-semibold text-navy">
              {g.heading}
              <span className="text-xs font-medium text-muted">{g.links.length} lists</span>
            </span>
            <span className="mt-1 block text-sm leading-relaxed text-muted">{g.description}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

/** The page's single, short disclaimer + visible refresh date. */
export function Disclaimer({ text, lastUpdated }: { text: string; lastUpdated: string }) {
  return (
    <div className="bg-white">
      <div className={`flex flex-col gap-3 border-t border-[#DCEAF3] py-6 text-sm text-muted md:flex-row md:items-start md:justify-between ${shell}`}>
        <p className="flex max-w-[80ch] items-start gap-2">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
          {text}
        </p>
        {CLAIMS.showRefreshDates && <p className="shrink-0 font-semibold text-navy">Data last refreshed: {monthYear(lastUpdated)}</p>}
      </div>
    </div>
  );
}

export type { SegmentTab };

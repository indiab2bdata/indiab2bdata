import { CheckCircle2, ClipboardList, Filter, ShieldCheck, Send, Mail, Phone, MapPin } from "lucide-react";
import { HeroBackground } from "@/components/hero-background";
import { Breadcrumbs, type BreadcrumbItem } from "@/components/breadcrumbs";
import { Reveal } from "@/components/reveal";
import { LeadForm } from "@/components/landing/lead-form";
import { siteConfig } from "@/lib/site-config";
import { ProtectedEmail } from "@/components/protected-email";

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <span className={`text-xs font-semibold uppercase tracking-[0.16em] ${light ? "text-teal-light" : "text-teal"}`}>{children}</span>
  );
}

function SectionHead({ eyebrow, title, text, center = true }: { eyebrow: string; title: string; text?: string; center?: boolean }) {
  return (
    <Reveal className={`mb-12 max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-navy md:text-4xl">{title}</h2>
      {text && <p className="mt-4 leading-relaxed text-muted">{text}</p>}
    </Reveal>
  );
}

/** Two-column hero: message + trust chips on the left, lead form on the right. */
export function SplitHero({
  breadcrumbs,
  eyebrow,
  title,
  description,
  chips,
  image,
  imageAlt,
  source,
  requirement,
  formTitle,
  formSubtitle,
  formButtonLabel,
}: {
  breadcrumbs: BreadcrumbItem[];
  eyebrow: string;
  title: string;
  description: string;
  chips: string[];
  image?: string;
  imageAlt?: string;
  source: string;
  requirement: string;
  formTitle?: string;
  formSubtitle?: string;
  formButtonLabel?: string;
}) {
  return (
    <section className="relative overflow-hidden mesh-navy pb-16 pt-28 md:pb-20 md:pt-36">
      <HeroBackground image={image} alt={imageAlt} />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 md:px-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-14">
        <div>
          <Breadcrumbs items={breadcrumbs} />
          <span className="mt-5 inline-flex items-center gap-2 rounded-full border border-teal-light/40 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-teal-light">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-light" aria-hidden="true" />
            {eyebrow}
          </span>
          <h1 className="mt-5 font-display text-3xl font-extrabold leading-[1.12] tracking-tight text-white md:text-5xl">{title}</h1>
          <p className="mt-5 max-w-xl leading-relaxed text-white/80">{description}</p>
          <ul className="mt-7 flex flex-wrap gap-2.5">
            {chips.map((chip) => (
              <li key={chip} className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
                <CheckCircle2 className="h-3.5 w-3.5 text-teal-light" />
                {chip}
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:justify-self-end lg:w-full lg:max-w-[460px]">
          <LeadForm source={source} requirement={requirement} title={formTitle} subtitle={formSubtitle} buttonLabel={formButtonLabel} />
        </div>
      </div>
    </section>
  );
}

/** Three key numbers directly under the hero. */
export function StatStrip({ items }: { items: { value: string; label: string }[] }) {
  return (
    <div className="border-b border-[#DCEAF3] bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-[#DCEAF3] px-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 md:px-8">
        {items.map((s) => (
          <div key={s.label} className="py-6 text-center">
            <p className="font-display text-3xl font-extrabold text-navy">{s.value}</p>
            <p className="mt-1 text-xs font-medium uppercase tracking-[0.12em] text-muted">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/** "What is it" copy on the left, a dark "what's in every record" spec card on the right. */
export function RecordAnatomy({
  eyebrow,
  title,
  paragraphs,
  fields,
  cardTitle = "What's inside every record",
}: {
  eyebrow: string;
  title: string;
  paragraphs: React.ReactNode[];
  fields: string[];
  cardTitle?: string;
}) {
  return (
    <section className="mx-auto grid max-w-7xl items-start gap-10 px-5 py-20 md:px-8 md:py-24 lg:grid-cols-2 lg:gap-14">
      <Reveal>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-navy md:text-4xl">{title}</h2>
        <div className="mt-5 space-y-4">
          {paragraphs.map((p, i) => (
            <p key={i} className="leading-relaxed text-muted">
              {p}
            </p>
          ))}
        </div>
      </Reveal>
      <Reveal delay={0.1}>
        <div className="rounded-2xl bg-navy-dark p-7 text-white shadow-xl md:p-8">
          <p className="flex items-center gap-2 text-sm font-semibold text-teal-light">
            <ClipboardList className="h-4 w-4" />
            {cardTitle}
          </p>
          <ul className="mt-5 divide-y divide-white/10">
            {fields.map((f) => (
              <li key={f} className="flex items-start gap-3 py-3 text-sm text-white/85">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal-light" />
                {f}
              </li>
            ))}
          </ul>
          <div className="mt-6 grid grid-cols-3 gap-3 border-t border-white/10 pt-6 text-center">
            {[
              ["Excel / CSV", "CRM-ready"],
              ["2-6 hrs", "Typical delivery"],
              ["Free", "Sample first"],
            ].map(([a, b]) => (
              <div key={a}>
                <p className="font-display text-sm font-bold text-white">{a}</p>
                <p className="mt-0.5 text-[11px] text-white/60">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/** Numbered use-case cards (01, 02, ...). */
export function NumberedCards({ eyebrow, title, text, items }: { eyebrow: string; title: string; text?: string; items: string[] }) {
  return (
    <section className="bg-bgsoft py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead eyebrow={eyebrow} title={title} text={text} />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item} delay={(i % 3) * 0.06}>
              <div className="h-full rounded-2xl border border-[#DCEAF3] bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
                <span className="font-display text-3xl font-extrabold text-teal/20">{String(i + 1).padStart(2, "0")}</span>
                <p className="mt-2 font-display text-base font-bold leading-snug text-navy">{item}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const STEPS = [
  { icon: Send, title: "Share Your Target", text: "Tell us the audience, city or state, filters and quantity you need." },
  { icon: Filter, title: "Filter & Segment", text: "We build your list with the exact industry, location and role filters." },
  { icon: ShieldCheck, title: "Verify & Clean", text: "Records are deduplicated, checked and DND-scrubbed before delivery." },
  { icon: ClipboardList, title: "Receive Your File", text: "Get a CRM-ready Excel / CSV by email or WhatsApp - sample first." },
];

/** Four-step process strip. */
export function HowItWorks({ title = "How We Build & Deliver Your Data" }: { title?: string }) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
      <SectionHead eyebrow="How It Works" title={title} />
      <ol className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div aria-hidden="true" className="absolute left-[12.5%] right-[12.5%] top-7 hidden h-px bg-[#DCEAF3] lg:block" />
        {STEPS.map((s, i) => (
          <li key={s.title} className="relative text-center">
            <span className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-navy text-white ring-8 ring-white">
              <s.icon className="h-5 w-5" />
            </span>
            <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-teal">Step {i + 1}</p>
            <p className="mt-1 font-display font-bold text-navy">{s.title}</p>
            <p className="mx-auto mt-2 max-w-[240px] text-sm leading-relaxed text-muted">{s.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

/** Contact details on the left, lead form on the right - closes every landing page. */
export function ContactSplit({ title, text, source, requirement, formTitle, formSubtitle, formButtonLabel }: { title: string; text: string; source: string; requirement: string; formTitle?: string; formSubtitle?: string; formButtonLabel?: string }) {
  const items = [
    { icon: Phone, label: "Call / WhatsApp", value: siteConfig.phoneDisplay, href: siteConfig.phoneHref },
    { icon: Mail, label: "Email", value: "email", href: "" },
    { icon: MapPin, label: "Address", value: siteConfig.address.display },
  ];
  return (
    <section className="bg-bgsoft py-20 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 md:px-8 lg:grid-cols-2 lg:gap-14">
        <Reveal>
          <Eyebrow>Get In Touch</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-navy md:text-4xl">{title}</h2>
          <p className="mt-4 leading-relaxed text-muted">{text}</p>
          <ul className="mt-8 space-y-5">
            {items.map((it) => (
              <li key={it.label} className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-teal ring-1 ring-[#DCEAF3]">
                  <it.icon className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-navy">{it.label}</span>
                  {it.label === "Email" ? (
                    <ProtectedEmail className="text-sm text-muted transition-colors hover:text-teal" />
                  ) : it.href ? (
                    <a href={it.href} className="text-sm text-muted transition-colors hover:text-teal">
                      {it.value}
                    </a>
                  ) : (
                    <span className="text-sm text-muted">{it.value}</span>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.1}>
          <LeadForm source={source} requirement={requirement} title={formTitle ?? "Send Your Data Requirement"} subtitle={formSubtitle ?? "We reply to every enquiry within working hours."} buttonLabel={formButtonLabel} />
        </Reveal>
      </div>
    </section>
  );
}

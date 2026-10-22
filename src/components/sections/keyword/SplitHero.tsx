import { CheckCircle2 } from "lucide-react";
import { Breadcrumbs, type BreadcrumbItem } from "@/components/layout/Breadcrumbs";
import { LeadForm } from "@/components/forms/LeadForm";
import { HeroBackground } from "@/components/ui/HeroBackground";

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
          {chips.length > 0 && (<ul className="mt-7 flex flex-wrap gap-2.5">
            {chips.map((chip) => (
              <li key={chip} className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
                <CheckCircle2 className="h-3.5 w-3.5 text-teal-light" />
                {chip}
              </li>
            ))}
          </ul>)}
        </div>
        <div className="lg:justify-self-end lg:w-full lg:max-w-[460px]">
          <LeadForm source={source} requirement={requirement} title={formTitle} subtitle={formSubtitle} buttonLabel={formButtonLabel} />
        </div>
      </div>
    </section>
  );
}

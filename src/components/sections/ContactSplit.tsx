import { Mail, MapPin, Phone } from "lucide-react";
import { LeadForm } from "@/components/forms/LeadForm";
import { ProtectedEmail } from "@/components/ui/ProtectedEmail";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/SectionHead";
import { siteConfig } from "@/config/site";
import { FORM_COPY } from "@/content/shared/forms";

const COPY = FORM_COPY.contactSplit;

/** Contact details on the left, lead form on the right - closes every landing page. */
export function ContactSplit({ title, text, source, requirement, formTitle, formSubtitle, formButtonLabel }: { title: string; text: string; source: string; requirement: string; formTitle?: string; formSubtitle?: string; formButtonLabel?: string }) {
  const items = [
    { icon: Phone, label: COPY.phoneLabel, value: siteConfig.phoneDisplay, href: siteConfig.phoneHref },
    { icon: Mail, label: COPY.emailLabel, value: "email", href: "", email: true },
    { icon: MapPin, label: COPY.addressLabel, value: siteConfig.address.display },
  ];
  return (
    <section className="bg-bgsoft py-20 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 md:px-8 lg:grid-cols-2 lg:gap-14">
        <Reveal>
          <Eyebrow>{COPY.eyebrow}</Eyebrow>
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
                  {it.email ? (
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
          <LeadForm source={source} requirement={requirement} title={formTitle ?? COPY.formTitle} subtitle={formSubtitle ?? COPY.formSubtitle} buttonLabel={formButtonLabel} />
        </Reveal>
      </div>
    </section>
  );
}

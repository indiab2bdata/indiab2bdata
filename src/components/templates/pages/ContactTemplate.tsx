import { Mail, MapPin, Phone } from "lucide-react";
import { JsonLd } from "@/components/layout/JsonLd";
import { ContactCta } from "@/components/sections/ContactCta";
import { Faq } from "@/components/sections/Faq";
import { PageHero } from "@/components/sections/PageHero";
import { RelatedPages } from "@/components/sections/RelatedPages";
import { SampleDownload } from "@/components/sections/SampleDownload";
import { WhatsAppIcon } from "@/components/ui/icons/WhatsAppIcon";
import { ProtectedEmail } from "@/components/ui/ProtectedEmail";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/config/site";
import { getKeywordPagesBySlug } from "@/content";
import { CONTACT } from "@/content/pages/contact";
import { DEFAULT_FAQS } from "@/content/pages/faqs";
import { breadcrumbJsonLd, faqJsonLd, webPageJsonLd } from "@/lib/seo/jsonld";

const ICONS = { phone: Phone, whatsapp: WhatsAppIcon, email: Mail, office: MapPin };

const cardClass =
  "group h-full flex flex-col bg-white rounded-2xl p-7 border border-[#DCEAF3] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-teal/40";

export function ContactTemplate() {
  const url = `${siteConfig.url}${CONTACT.meta.path}`;
  const schema = [
    breadcrumbJsonLd([
      { name: "Home", url: siteConfig.url },
      { name: CONTACT.breadcrumb, url },
    ]),
    webPageJsonLd({ type: "ContactPage", name: CONTACT.schemaName, description: CONTACT.meta.description, url }),
    faqJsonLd(DEFAULT_FAQS),
  ];
  const { nap } = CONTACT;

  return (
    <>
      <JsonLd data={schema} />

      <PageHero
        eyebrow={CONTACT.hero.eyebrow}
        title={CONTACT.hero.title}
        description={CONTACT.hero.description}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: CONTACT.breadcrumb }]}
      />

      <section className="py-16 md:py-20 max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {CONTACT.methods.map((method, i) => {
            const Icon = ICONS[method.kind];
            const body = (
              <>
                <div className="w-12 h-12 rounded-xl bg-teal/10 text-teal flex items-center justify-center mb-5 transition-colors group-hover:bg-teal group-hover:text-white">
                  <Icon className="w-6 h-6" strokeWidth={1.6} />
                </div>
                <h3 className="font-display font-bold text-lg text-navy">{method.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed flex-1">{method.detail}</p>
                <span className="mt-4 text-sm font-semibold text-teal">{method.cta} →</span>
              </>
            );
            return (
              <Reveal key={method.title} delay={i * 0.08}>
                {method.kind === "email" ? (
                  // mailto is built in the browser so the address never sits in the static HTML
                  <ProtectedEmail showAddress={false} className={cardClass}>
                    {body}
                  </ProtectedEmail>
                ) : (
                  <a
                    href={method.href}
                    target={method.external ? "_blank" : undefined}
                    rel={method.external ? "noopener noreferrer" : undefined}
                    className={cardClass}
                  >
                    {body}
                  </a>
                )}
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="bg-white py-4 md:py-8">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-start">
          <div className="rounded-2xl border border-[#DCEAF3] bg-bgsoft p-6 shadow-sm">
            <span className="text-teal-dark text-xs font-semibold uppercase tracking-[0.16em]">
              {nap.eyebrow}
            </span>
            <h3 className="font-display font-extrabold text-2xl text-navy mt-3">
              {nap.title}
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-muted">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 text-teal shrink-0" strokeWidth={1.8} />
                <span>
                  <strong className="block text-navy">{nap.phone}</strong>
                  {siteConfig.phoneDisplay}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 text-teal shrink-0" strokeWidth={1.8} />
                <span>
                  <strong className="block text-navy">{nap.email}</strong>
                  <ProtectedEmail className="hover:text-teal transition-colors" />
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-teal shrink-0" strokeWidth={1.8} />
                <span>
                  <strong className="block text-navy">{nap.address}</strong>
                  {siteConfig.address.display}
                </span>
              </li>
            </ul>

            <div className="mt-6 rounded-xl border border-[#DCEAF3] bg-white p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal">{nap.responseLabel}</p>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                {nap.response}
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-[#DCEAF3] bg-white shadow-sm">
            <iframe
              title={CONTACT.map.title}
              src={CONTACT.map.src}
              className="h-[420px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <SampleDownload {...CONTACT.sample} />

      <Faq {...CONTACT.faq} background="bgsoft" />

      <RelatedPages pages={getKeywordPagesBySlug(CONTACT.related.slugs)} eyebrow={CONTACT.related.eyebrow} heading={CONTACT.related.heading} />

      <ContactCta />
    </>
  );
}

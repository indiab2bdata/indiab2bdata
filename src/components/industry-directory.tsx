"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Keyboard, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { PRODUCT_GROUPS } from "@/lib/product-groups";
import { siteConfig } from "@/lib/site-config";
import { getKeywordImage } from "@/lib/keyword-images";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";

/** India photo + one-line summary per industry group (photos: Wikimedia Commons, see /images/industries/CREDITS.json). */
const GROUP_META: Record<string, { image: string; alt: string; summary: string }> = {
  General: {
    image: "/images/industries/general.jpg",
    alt: "Bandra Kurla Complex business district, Mumbai",
    summary: "Pan-India B2B and company data for any sales or marketing team.",
  },
  "Company Records": {
    image: "/images/industries/company.jpg",
    alt: "Corporate office towers in DLF Cyber City, Gurugram",
    summary: "Corporate, industry-wise and owner-level company records.",
  },
  Registry: {
    image: "/images/industries/registry.jpg",
    alt: "HITEC City business district, Hyderabad",
    summary: "GST, MCA/ROC and newly registered company data.",
  },
  "Trade & Industry": {
    image: "/images/industries/trade.jpg",
    alt: "Container handling at JNPT port, Navi Mumbai",
    summary: "Manufacturers, exporters, dealers, retailers and contractors.",
  },
  Professionals: {
    image: "/images/industries/professionals.jpg",
    alt: "IT professionals at a technology campus in Bengaluru",
    summary: "Decision-makers and specialists across every function.",
  },
  Channel: {
    image: "/images/industries/channel.jpg",
    alt: "Mobile phone market in Kochi, Kerala",
    summary: "Mobile, email, WhatsApp and bulk SMS-ready contact data.",
  },
  Consumer: {
    image: "/images/industries/consumer.jpg",
    alt: "Busy shopping street in Mumbai",
    summary: "Consumer audience segments for B2C and premium campaigns.",
  },
  "Education & Web": {
    image: "/images/industries/education.jpg",
    alt: "Main gate of IIT Bombay campus, Mumbai",
    summary: "Students, schools, colleges, teachers and domain data.",
  },
};

/** Above this many items a sector becomes a slider; at or below it's a static grid. */
const GRID_LIMIT = 3;
const tabId = (heading: string) => `industry-${heading.toLowerCase().replace(/[^a-z]+/g, "-")}`;

function ProductCard({ href, label, description, index }: { href: string; label: string; description?: string; index: number }) {
  const visual = getKeywordImage(href.slice(1), `${label} database India`);
  return (
    <div className="group relative isolate flex h-full flex-col overflow-hidden rounded-2xl border border-[#DCEAF3] bg-white p-6 transition-all duration-300 hover:border-teal/40 hover:shadow-[0_18px_40px_-20px_rgba(11,43,78,0.35)]">
      <Image
        src={visual.src}
        alt=""
        aria-hidden="true"
        fill
        sizes="(min-width: 1280px) 360px, (min-width: 640px) 50vw, 90vw"
        className="-z-20 object-cover opacity-[0.14] grayscale-[30%] transition-all duration-500 group-hover:scale-105 group-hover:opacity-25"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-white via-white/85 to-white/40" />
      <span className="font-display text-xs font-bold tracking-[0.16em] text-teal/70">{String(index + 1).padStart(2, "0")}</span>
      <Link href={href} className="mt-3 block after:absolute after:inset-0 after:rounded-2xl">
        <h5 className="font-display text-lg font-bold leading-snug text-navy transition-colors group-hover:text-teal">
          {label}
        </h5>
      </Link>
      {description && <p className="mt-2 mb-5 line-clamp-2 text-sm leading-relaxed text-muted">{description}</p>}

      <div className="mt-auto flex items-center justify-between gap-3 border-t border-[#EEF4F8] pt-4">
        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy transition-colors group-hover:text-teal">
          View database
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
        </span>
        <a
          href={siteConfig.whatsappHref(`Hi, I'm interested in the ${label} database. Please share a free sample and pricing.`)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Enquire about ${label} database on WhatsApp`}
          title="Enquire on WhatsApp"
          className="relative z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366]/10 text-[#1DA851] transition-colors hover:bg-[#25D366] hover:text-white"
        >
          <WhatsAppIcon className="h-[18px] w-[18px]" />
        </a>
      </div>
    </div>
  );
}

export function IndustryDirectory({ descriptions = {} }: { descriptions?: Record<string, string> }) {
  const [active, setActive] = useState(PRODUCT_GROUPS[0].heading);
  const total = PRODUCT_GROUPS.reduce((n, g) => n + g.links.length, 0);

  return (
    <div className="mt-24">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-teal">Browse by Industry</span>
          <h3 className="mt-3 font-display text-2xl font-extrabold tracking-tight text-navy md:text-3xl">
            Every Database, Organised by Sector
          </h3>
        </div>
        <p className="text-sm text-muted md:max-w-sm md:text-right">
          {total} verified data products across {PRODUCT_GROUPS.length} sectors.
        </p>
      </div>

      {/* Tabs - every panel stays in the HTML so all links remain crawlable. */}
      <div
        role="tablist"
        aria-label="Industry sectors"
        className="-mx-5 flex gap-1 overflow-x-auto border-b border-[#DCEAF3] px-5 [scrollbar-width:none] md:mx-0 md:px-0"
      >
        {PRODUCT_GROUPS.map((group) => {
          const selected = group.heading === active;
          return (
            <button
              key={group.heading}
              type="button"
              role="tab"
              id={`${tabId(group.heading)}-tab`}
              aria-selected={selected}
              aria-controls={tabId(group.heading)}
              onClick={() => setActive(group.heading)}
              className={`-mb-px shrink-0 cursor-pointer whitespace-nowrap border-b-2 px-4 py-3 text-sm font-semibold transition-colors ${
                selected ? "border-teal text-navy" : "border-transparent text-muted hover:text-navy"
              }`}
            >
              {group.heading}
              <span className={`ml-2 rounded-full px-2 py-0.5 text-[11px] ${selected ? "bg-teal text-white" : "bg-[#EEF4F8] text-muted"}`}>
                {group.links.length}
              </span>
            </button>
          );
        })}
      </div>

      {PRODUCT_GROUPS.map((group) => {
        const meta = GROUP_META[group.heading];
        const id = tabId(group.heading);
        const useSlider = group.links.length > GRID_LIMIT;
        const cards = group.links.map((link, i) => (
          <ProductCard key={link.href} index={i} href={link.href} label={link.label} description={descriptions[link.href]} />
        ));

        return (
          <div key={group.heading} id={id} role="tabpanel" aria-labelledby={`${id}-tab`} hidden={group.heading !== active} className="mt-8">
            <div className="grid gap-6 lg:grid-cols-[300px_minmax(0,1fr)]">
              {meta && (
                <div className="relative isolate flex min-h-[240px] flex-col justify-end overflow-hidden rounded-2xl bg-navy-dark p-7 lg:min-h-full">
                  <Image src={meta.image} alt={meta.alt} fill sizes="(min-width: 1024px) 300px, 100vw" className="-z-10 object-cover opacity-55" />
                  <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-dark via-navy-dark/80 to-navy-dark/30" />
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-light">
                    {group.links.length} {group.links.length === 1 ? "database" : "databases"}
                  </p>
                  <h4 className="mt-2 font-display text-2xl font-extrabold text-white">{group.heading}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-white/80">{meta.summary}</p>
                  {useSlider && (
                    <div className="mt-6 hidden gap-2 lg:flex">
                      <button id={`${id}-prev`} type="button" aria-label={`Previous ${group.heading} databases`} className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:bg-white hover:text-navy disabled:cursor-default disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-white">
                        <ChevronLeft className="h-5 w-5" />
                      </button>
                      <button id={`${id}-next`} type="button" aria-label={`Next ${group.heading} databases`} className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:bg-white hover:text-navy disabled:cursor-default disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-white">
                        <ChevronRight className="h-5 w-5" />
                      </button>
                    </div>
                  )}
                </div>
              )}

              {useSlider ? (
                <Swiper
                  modules={[Navigation, Pagination, Keyboard, A11y]}
                  observer
                  observeParents
                  keyboard={{ enabled: true }}
                  navigation={{ prevEl: `#${id}-prev`, nextEl: `#${id}-next` }}
                  pagination={{ clickable: true }}
                  spaceBetween={16}
                  slidesPerView={1.1}
                  breakpoints={{ 640: { slidesPerView: 2.1 }, 1280: { slidesPerView: 3 } }}
                  style={{ "--swiper-theme-color": "var(--color-teal)" } as React.CSSProperties}
                  className="w-full !pb-10 [&_.swiper-pagination]:!bottom-0"
                >
                  {cards.map((card) => (
                    <SwiperSlide key={card.key} className="!h-auto">
                      {card}
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : (
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">{cards}</div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

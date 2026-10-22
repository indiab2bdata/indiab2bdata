"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Keyboard, Navigation, Pagination } from "swiper/modules";
import { PRODUCT_GROUPS } from "@/config/navigation";
import { formatDataProduct, siteConfig } from "@/config/site";
import { getKeywordImage } from "@/lib/keyword-images";
import { WhatsAppIcon } from "@/components/ui/icons/WhatsAppIcon";
import { HOME } from "@/content/pages/home";

const COPY = HOME.industries;
const GROUP_META = COPY.groups;

/** Above this many items a sector becomes a slider; at or below it's a static grid. */
const GRID_LIMIT = 3;
const tabId = (heading: string) => `industry-${heading.toLowerCase().replace(/[^a-z]+/g, "-")}`;

/** Icons drawn once per page and referenced by every card with <use>, instead of repeating the paths 60+ times. */
function IconSprite() {
  return (
    <svg width="0" height="0" className="absolute" aria-hidden="true" focusable="false">
      <defs>
        <symbol id="ind-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </symbol>
        <symbol id="ind-wa" viewBox="0 0 24 24">
          <WhatsAppIcon />
        </symbol>
      </defs>
    </svg>
  );
}

const Icon = ({ id }: { id: string }) => (
  <svg className="ind-icon" aria-hidden="true">
    <use href={`#${id}`} />
  </svg>
);

function ProductCard({
  href,
  label,
  description,
  index,
  showImage,
}: {
  href: string;
  label: string;
  description?: string;
  index: number;
  /** Only the open tab paints its background photos; hidden tabs stay text-only (links still crawlable). */
  showImage: boolean;
}) {
  const visual = showImage ? getKeywordImage(href.slice(1), `${label} database India`) : null;
  return (
    <div className="ind-card">
      {visual && <Image src={visual.src} alt={visual.alt} fill sizes="(min-width: 1280px) 360px, (min-width: 640px) 50vw, 90vw" className="ind-card-bg" style={{ objectFit: "cover" }} />}
      <div aria-hidden="true" className="ind-card-fade" />
      <span className="ind-card-num">{String(index + 1).padStart(2, "0")}</span>
      <Link href={href} className="ind-card-link">
        <h5 className="ind-card-title">{label}</h5>
      </Link>
      {description && <p className="ind-card-desc">{description}</p>}
      <div className="ind-card-foot">
        <span className="ind-card-cta">
          {COPY.viewDatabase}
          <Icon id="ind-arrow" />
        </span>
        <a
          href={siteConfig.whatsappHref(COPY.whatsapp(formatDataProduct(label)))}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={COPY.whatsappLabel(formatDataProduct(label))}
          className="ind-card-wa"
        >
          <Icon id="ind-wa" />
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
      <IconSprite />
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-teal">{COPY.eyebrow}</span>
          <h3 className="mt-3 font-display text-2xl font-extrabold tracking-tight text-navy md:text-3xl">
            {COPY.title}
          </h3>
        </div>
        <p className="text-sm text-muted md:max-w-sm md:text-right">
          {total}
          {COPY.countMid}
          {PRODUCT_GROUPS.length}
          {COPY.countEnd}
        </p>
      </div>

      {/* Tabs - every panel stays in the HTML so all links remain crawlable. */}
      <div
        role="tablist"
        aria-label={COPY.tabsLabel}
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

        // Closed tabs keep only a flat link list (2 nodes per link instead of ~14 per card), so every product
        // stays crawlable without bloating the DOM. Full cards render when the tab is opened.
        if (group.heading !== active) {
          return (
            <div key={group.heading} id={id} role="tabpanel" aria-labelledby={`${id}-tab`} hidden>
              <ul>
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        }

        const cards = group.links.map((link, i) => (
          <ProductCard key={link.href} index={i} href={link.href} label={link.label} description={descriptions[link.href]} showImage />
        ));

        return (
          <div key={group.heading} id={id} role="tabpanel" aria-labelledby={`${id}-tab`} hidden={group.heading !== active} className="mt-8">
            <div className="grid gap-6 lg:grid-cols-[300px_minmax(0,1fr)]">
              {meta && (
                <div className="relative isolate flex min-h-[240px] flex-col justify-end overflow-hidden rounded-2xl bg-navy-dark p-7 lg:min-h-full">
                  <Image src={meta.image} alt={meta.alt} fill sizes="(min-width: 1024px) 300px, 100vw" className="-z-10 object-cover opacity-55" style={{ objectFit: "cover" }} />
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

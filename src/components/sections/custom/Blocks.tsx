import { ContentImage } from "@/components/ui/ContentImage";
import type { ReactNode } from "react";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowUpRight,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";
import { SampleButton, WhatsAppButton } from "@/components/ui/Button";
import { LinkedText } from "@/components/ui/LinkedText";
import { Reveal } from "@/components/ui/Reveal";
import { COMPLIANCE_PATH, METHODOLOGY_PATH } from "@/config/navigation";
import { CUSTOM_COPY } from "@/content/shared/custom-copy";
import { buildSampleTable } from "@/lib/sample-data";
import type {
  CustomBlock,
  CustomPage,
  InlineLink,
  SectionImage,
} from "@/types/landing";

const wrap = "mx-auto max-w-5xl px-5 md:px-8";
/** Sections with a photo card get the full page width so the image and copy both have room. */
const wide = "mx-auto max-w-7xl px-5 md:px-8";
const h2 =
  "font-display text-2xl font-extrabold tracking-tight text-navy md:text-3xl";

/** Section with a photo: image and copy side by side in one card (stacked on mobile). Without an image, just the copy. */
function ImageCard({
  image,
  flip = false,
  children,
}: {
  image?: SectionImage;
  flip?: boolean;
  children: ReactNode;
}) {
  if (!image) return <>{children}</>;
  return (
    <div className="grid overflow-hidden rounded-2xl border border-[#DCEAF3] bg-white shadow-sm md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
      <div className={`relative min-h-[220px] ${flip ? "md:order-2" : ""}`}>
        <ContentImage
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes="(min-width: 768px) 45vw, 100vw"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-6 md:p-8">{children}</div>
    </div>
  );
}

function Copy({ text, links }: { text: string; links: InlineLink[] }) {
  return <LinkedText text={text} links={links} />;
}

function Prose({
  block,
  links,
}: {
  block: Extract<CustomBlock, { type: "prose" }>;
  links: InlineLink[];
}) {
  return (
    <section id={block.id} className={`${block.image ? wide : wrap} py-12 md:py-16`}>
      <Reveal>
        <ImageCard image={block.image}>
          <h2 className={h2}>{block.heading}</h2>
          <div className="mt-5 space-y-4 leading-relaxed text-muted">
            {block.paragraphs.map((p, i) => (
              <p key={i} className="max-w-[72ch]">
                <Copy text={p} links={links} />
              </p>
            ))}
          </div>
          {block.bullets && (
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {block.bullets.map((b) => (
                <li
                  key={b}
                  className="flex gap-2.5 rounded-xl bg-bgsoft p-4 text-sm leading-relaxed text-navy/85"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                  <Copy text={b} links={links} />
                </li>
              ))}
            </ul>
          )}
          {block.closing?.map((p, i) => (
            <p key={i} className="mt-4 max-w-[72ch] leading-relaxed text-muted">
              <Copy text={p} links={links} />
            </p>
          ))}
        </ImageCard>
      </Reveal>
    </section>
  );
}

function Table({
  block,
  links,
}: {
  block: Extract<CustomBlock, { type: "table" }>;
  links: InlineLink[];
}) {
  return (
    <section id={block.id} className={`${wrap} py-12 md:py-16`}>
      <Reveal>
        <h2 className={h2}>{block.heading}</h2>
        {block.intro && (
          <p className="mt-4 max-w-[72ch] leading-relaxed text-muted">
            <Copy text={block.intro} links={links} />
          </p>
        )}
        <div className="mt-6 overflow-x-auto rounded-2xl border border-[#DCEAF3] bg-white">
          <table className="min-w-full text-left text-sm">
            <caption className="sr-only">{block.heading}</caption>
            <thead className="bg-bgsoft text-navy">
              <tr>
                {block.columns.map((c) => (
                  <th key={c} scope="col" className="px-5 py-3.5 font-semibold">
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#EEF4F8]">
              {block.rows.map((row) => (
                <tr key={row[0]}>
                  {row.map((cell, i) =>
                    i === 0 ? (
                      <th
                        key={i}
                        scope="row"
                        className="px-5 py-3.5 font-semibold text-navy"
                      >
                        <Copy text={cell} links={links} />
                      </th>
                    ) : (
                      <td key={i} className="px-5 py-3.5 text-muted">
                        <Copy text={cell} links={links} />
                      </td>
                    ),
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {block.note && <p className="mt-3 text-sm text-muted">{block.note}</p>}
      </Reveal>
    </section>
  );
}

function Steps({
  block,
  links,
}: {
  block: Extract<CustomBlock, { type: "steps" }>;
  links: InlineLink[];
}) {
  return (
    <section id={block.id} className="bg-bgsoft py-12 md:py-16">
      <div className={wrap}>
        <Reveal>
          <h2 className={h2}>{block.heading}</h2>
          {block.intro && (
            <p className="mt-4 max-w-[72ch] leading-relaxed text-muted">
              <Copy text={block.intro} links={links} />
            </p>
          )}
          <ol className="mt-6 space-y-4">
            {block.steps.map((s, i) => (
              <li
                key={s.title}
                className="flex gap-4 rounded-2xl border border-[#DCEAF3] bg-white p-5"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy font-display text-sm font-bold text-white">
                  {i + 1}
                </span>
                <span>
                  <span className="block font-display font-bold text-navy">
                    {s.title}
                  </span>
                  <span className="mt-1 block text-sm leading-relaxed text-muted">
                    <Copy text={s.text} links={links} />
                  </span>
                </span>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}

function Points({
  block,
  links,
}: {
  block: Extract<CustomBlock, { type: "points" }>;
  links: InlineLink[];
}) {
  const warning = block.tone === "warning";
  const Icon = warning ? AlertTriangle : CheckCircle2;
  return (
    <section id={block.id} className={`${wrap} py-12 md:py-16`}>
      <Reveal>
        <h2 className={h2}>{block.heading}</h2>
        {block.intro && (
          <p className="mt-4 max-w-[72ch] leading-relaxed text-muted">
            <Copy text={block.intro} links={links} />
          </p>
        )}
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {block.items.map((item) => (
            <div
              key={item.title}
              className={`rounded-2xl border p-5 ${warning ? "border-amber/30 bg-amber/5" : "border-[#DCEAF3] bg-white"}`}
            >
              <p className="flex items-center gap-2 font-display font-bold text-navy">
                <Icon
                  className={`h-4 w-4 shrink-0 ${warning ? "text-amber" : "text-teal"}`}
                />
                <strong className="font-bold">{item.title}</strong>
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                <Copy text={item.text} links={links} />
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

function Scenario({
  block,
  links,
}: {
  block: Extract<CustomBlock, { type: "scenario" }>;
  links: InlineLink[];
}) {
  return (
    <section id={block.id} className={`${block.image ? wide : wrap} py-12 md:py-16`}>
      <Reveal>
        <div
          className={`overflow-hidden rounded-2xl bg-navy-dark text-white ${block.image ? "grid md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]" : ""}`}
        >
          <div className="p-7 md:p-10">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-light">
              {block.label}
            </span>
            <h2 className="mt-3 font-display text-2xl font-extrabold tracking-tight md:text-3xl">
              {block.heading}
            </h2>
            <div className="mt-5 space-y-4 leading-relaxed text-white/80">
              {block.paragraphs.map((p, i) => (
                <p key={i} className="max-w-[72ch]">
                  <Copy text={p} links={links} />
                </p>
              ))}
            </div>
          </div>
          {block.image && (
            <div className="relative min-h-[220px]">
              <ContentImage
                src={block.image.src}
                alt={block.image.alt}
                width={block.image.width}
                height={block.image.height}
                sizes="(min-width: 768px) 40vw, 100vw"
                className="h-full w-full object-cover"
              />
            </div>
          )}
        </div>
      </Reveal>
    </section>
  );
}

function Sample({
  block,
  page,
}: {
  block: Extract<CustomBlock, { type: "sample" }>;
  page: CustomPage;
}) {
  const { headers, rows } = buildSampleTable(page.sampleProfile, 4);
  return (
    <section
      id={block.id ?? "sample"}
      className="scroll-mt-24 bg-bgsoft py-12 md:py-16"
    >
      <div className={wrap}>
        <Reveal>
          <h2 className={h2}>{block.heading}</h2>
          <p className="mt-4 max-w-[72ch] leading-relaxed text-muted">
            {block.intro}
          </p>
          <div className="mt-6 overflow-x-auto rounded-2xl border border-[#DCEAF3] bg-white">
            <table className="min-w-full text-left text-sm">
              <caption className="sr-only">
                {CUSTOM_COPY.sampleCaption(page.name)}
              </caption>
              <thead className="bg-navy text-white">
                <tr>
                  {headers.map((h) => (
                    <th
                      key={h}
                      scope="col"
                      className="whitespace-nowrap px-4 py-3 text-xs font-semibold uppercase tracking-wide"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EEF4F8]">
                {rows.map((row, r) => (
                  <tr key={r}>
                    {row.map((cell, c) => (
                      <td
                        key={c}
                        className="whitespace-nowrap px-4 py-3 text-navy/85"
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm text-muted">{CUSTOM_COPY.sampleNote}</p>
        </Reveal>
      </div>
    </section>
  );
}

function Sourcing({
  block,
  links,
}: {
  block: Extract<CustomBlock, { type: "sourcing" }>;
  links: InlineLink[];
}) {
  return (
    <section id={block.id} className={`${block.image ? wide : wrap} py-12 md:py-16`}>
      <Reveal>
        <ImageCard image={block.image} flip>
          <div
            className={
              block.image
                ? ""
                : "rounded-2xl border border-[#DCEAF3] bg-white p-6 md:p-8"
            }
          >
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-teal-dark">
              <ShieldCheck className="h-4 w-4" />
              {CUSTOM_COPY.sourcingEyebrow}
            </p>
            <h2 className={`mt-3 ${h2}`}>{block.heading}</h2>
            <div className="mt-4 space-y-4 leading-relaxed text-muted">
              {block.paragraphs.map((p, i) => (
                <p key={i} className="max-w-[72ch]">
                  <Copy text={p} links={links} />
                </p>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold">
              <Link
                href={METHODOLOGY_PATH}
                className="inline-flex items-center gap-1.5 text-teal hover:underline"
              >
                {CUSTOM_COPY.methodologyLink}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                href={COMPLIANCE_PATH}
                className="inline-flex items-center gap-1.5 text-teal hover:underline"
              >
                {CUSTOM_COPY.complianceLink}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </ImageCard>
      </Reveal>
    </section>
  );
}

function Cta({
  block,
  page,
  index,
}: {
  block: Extract<CustomBlock, { type: "cta" }>;
  page: CustomPage;
  index: number;
}) {
  const source = `${page.path.slice(1)}-cta-${index + 1}`;
  return (
    <div className={`${wrap} py-6`}>
      <Reveal>
        <div className="flex flex-col items-center justify-between gap-5 rounded-2xl bg-[linear-gradient(110deg,#0b78d0,#123b72)] px-6 py-6 text-center md:flex-row md:px-10 md:text-left">
          <p className="max-w-[60ch] font-display text-base font-bold leading-snug text-white md:text-lg">
            {block.text}
          </p>
          <div className="flex shrink-0 flex-wrap justify-center gap-3">
            <SampleButton
              source={source}
              label={block.buttonLabel}
              className="!bg-white !text-navy hover:!bg-bgsoft"
            />
            <WhatsAppButton
              message={page.cta.whatsappMessage}
              label={CUSTOM_COPY.whatsappShort}
              className="!border-white/40 !bg-transparent !text-white hover:!bg-white/10"
            />
          </div>
        </div>
      </Reveal>
    </div>
  );
}

/** Renders a custom page's blocks in the order the content file lists them. */
export function Blocks({ page }: { page: CustomPage }) {
  return (
    <>
      {page.blocks.map((block, i) => {
        switch (block.type) {
          case "prose":
            return <Prose key={i} block={block} links={page.links} />;
          case "table":
            return <Table key={i} block={block} links={page.links} />;
          case "steps":
            return <Steps key={i} block={block} links={page.links} />;
          case "points":
            return <Points key={i} block={block} links={page.links} />;
          case "scenario":
            return <Scenario key={i} block={block} links={page.links} />;
          case "sample":
            return <Sample key={i} block={block} page={page} />;
          case "sourcing":
            return <Sourcing key={i} block={block} links={page.links} />;
          case "cta":
            return <Cta key={i} block={block} page={page} index={i} />;
        }
      })}
    </>
  );
}

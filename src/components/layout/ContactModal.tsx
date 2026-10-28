"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { Check, ChevronDown, Lock, Plus, X } from "lucide-react";
import { useModal } from "@/components/layout/ModalContext";
import { useContactForm } from "@/components/forms/useContactForm";
import { SubmitButton } from "@/components/forms/SubmitButton";
import { WhatsAppIcon } from "@/components/ui/icons/WhatsAppIcon";
import { PRODUCT_GROUPS } from "@/config/navigation";
import { states } from "@/content/states";
import { buildSampleCsv, sampleProfileFor } from "@/lib/sample-data";
import { siteConfig } from "@/config/site";
import { formatDataProduct } from "@/lib/utils";
import { FORM_COPY } from "@/content/shared/forms";

const COPY = FORM_COPY.modal;
const GENERAL = COPY.general;
const CUSTOM = COPY.custom;
const BENEFITS = COPY.benefits;

type CityEnquiryPage = { href: string; city: string; state: string };
type SampleContext = { requirement: string; slug: string; state?: string; city?: string };

/** Match exact city routes before their parent state, using a lightweight server-supplied list. */
function contextFor(pathname: string, cityPages: CityEnquiryPage[]): SampleContext {
  const route = pathname.replace(/\/+$/, "") || "/";
  for (const group of PRODUCT_GROUPS) {
    const hit = group.links.find((l) => l.href === route);
    if (hit) return { requirement: hit.label, slug: route.slice(1) };
  }
  const city = cityPages.find((page) => page.href === route);
  if (city) return { requirement: `${city.city} Company Database`, slug: "city-sample-preview", state: city.state, city: city.city };
  const state = states.find((s) => route === `/database/${s.slug}`);
  if (state) return { requirement: `${state.name} B2B Database`, slug: "state-sample-preview", state: state.name };
  return { requirement: GENERAL, slug: "b2b-database-india", state: undefined };
}

/** First 3 columns x 3 rows of the fictional preview; it does not establish delivered fields or inventory. */
function previewRows(slug: string, state?: string, city?: string) {
  const lines = buildSampleCsv(sampleProfileFor(slug), 3, state || city ? { state, city } : undefined)
    .replace(/^﻿/, "")
    .split("\r\n")
    .filter(Boolean)
    .slice(0, 4);
  const split = (l: string) => (l.match(/("([^"]|"")*"|[^,]+)/g) ?? []).map((c) => c.replace(/^"|"$/g, "")).slice(0, 3);
  return { head: split(lines[0]), rows: lines.slice(1).map(split) };
}

const field =
  "w-full rounded-xl border border-[#DCEAF3] bg-white px-4 py-3 text-base sm:text-sm text-navy placeholder:text-slate-400 transition focus:border-teal focus:outline-none focus:ring-4 focus:ring-teal/15";
const label = "mb-1.5 block text-xs font-semibold text-navy/70";

export function ContactModal({ cityPages }: { cityPages: CityEnquiryPage[] }) {
  const { isOpen, source, closeModal } = useModal();
  const { status, setStatus, handleSubmit } = useContactForm(closeModal);
  const pathname = usePathname();
  const ctx = contextFor(pathname, cityPages);
  const preview = useMemo(() => previewRows(ctx.slug, ctx.state, ctx.city), [ctx.slug, ctx.state, ctx.city]);

  // Reset per open ("adjusting state on prop change", done during render).
  const [wasOpen, setWasOpen] = useState(isOpen);
  const [openCount, setOpenCount] = useState(0);
  const [showMore, setShowMore] = useState(false);
  if (isOpen !== wasOpen) {
    setWasOpen(isOpen);
    if (isOpen) {
      setStatus({ state: "idle" });
      setOpenCount((n) => n + 1);
      setShowMore(false);
    }
  }

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, closeModal]);

  const product = ctx.requirement === GENERAL ? "B2B Data" : ctx.requirement;
  const whatsappText = `Hi, I'd like to ask about sample options for ${ctx.requirement === GENERAL ? "your B2B data" : `the ${formatDataProduct(ctx.requirement)}`}.`;

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-end justify-center sm:items-center sm:p-5 transition-opacity duration-200 ${
        isOpen ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="sample-modal-title"
      aria-hidden={!isOpen}
      inert={!isOpen}
    >
      <div className="absolute inset-0 bg-navy-dark/60 backdrop-blur-[6px]" onClick={closeModal} aria-hidden="true" />

      <div
        className={`relative grid max-h-[92dvh] w-full overflow-hidden rounded-t-[28px] bg-white shadow-[0_40px_100px_-30px_rgba(10,35,71,0.6)] ring-1 ring-white/40 transition-all duration-300 sm:max-h-[94vh] sm:max-w-[520px] sm:rounded-[28px] lg:max-w-[920px] lg:grid-cols-2 ${
          isOpen ? "translate-y-0 sm:scale-100" : "translate-y-full sm:translate-y-4 sm:scale-[0.98]"
        }`}
      >
        <button
          onClick={closeModal}
          aria-label="Close"
          className="absolute right-3 top-3 z-10 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-muted transition hover:bg-slate-100 hover:text-navy sm:right-4 sm:top-4 sm:h-9 sm:w-9"
        >
          <X className="h-5 w-5" strokeWidth={2} />
        </button>

        {/* Left: show, don't tell - a masked preview of the sample this buyer will get */}
        <aside className="relative hidden flex-col justify-center overflow-hidden bg-gradient-to-br from-[#eaf5fd] via-[#f4f9fe] to-white p-9 lg:flex">
          <div aria-hidden="true" className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-teal/10 blur-3xl" />
          <span className="relative inline-flex w-fit items-center gap-1.5 rounded-full bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-teal ring-1 ring-[#DCEAF3]">
            <span className="h-1.5 w-1.5 rounded-full bg-teal" /> Sample format preview
          </span>
          <p className="relative mt-4 font-display text-[26px] font-extrabold leading-tight text-navy">{COPY.headline}</p>

          <figure className="relative mt-7 overflow-hidden rounded-2xl bg-white shadow-[0_18px_40px_-22px_rgba(10,35,71,0.45)] ring-1 ring-[#DCEAF3]">
            <figcaption className="flex items-center justify-between border-b border-[#EEF4F8] px-4 py-2.5">
              <span className="truncate text-xs font-semibold text-navy">{product} · sample.xlsx</span>
              <span className="flex gap-1" aria-hidden="true">
                <i className="h-2 w-2 rounded-full bg-[#ff5f57]" />
                <i className="h-2 w-2 rounded-full bg-[#febc2e]" />
                <i className="h-2 w-2 rounded-full bg-[#28c840]" />
              </span>
            </figcaption>
            <table className="w-full table-fixed text-left text-[11px]">
              <thead className="bg-bgsoft text-navy/60">
                <tr>
                  {preview.head.map((h) => (
                    <th key={h} className="truncate px-3 py-2 font-semibold">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-navy/80">
                {preview.rows.map((r, i) => (
                  <tr key={i} className="border-t border-[#EEF4F8]">
                    {r.map((c, j) => (
                      <td key={j} className="truncate px-3 py-2">
                        {c}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="border-t border-[#EEF4F8] px-4 py-2 text-[10px] text-muted">{COPY.previewNote}</p>
          </figure>

          <ul className="relative mt-6 grid grid-cols-2 gap-x-4 gap-y-2.5">
            {BENEFITS.map((b) => (
              <li key={b} className="flex items-center gap-2 text-[13px] font-medium text-navy/80">
                <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-teal text-white">
                  <Check className="h-2.5 w-2.5" strokeWidth={4} />
                </span>
                {b}
              </li>
            ))}
          </ul>
        </aside>

        {/* Right: the form, vertically centred so there's no dead space */}
        <div className="flex flex-col justify-center overflow-y-auto px-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-3 sm:p-9">
          <span aria-hidden="true" className="mx-auto mb-4 h-1.5 w-10 rounded-full bg-slate-200 sm:hidden" />
          <span className="mb-2 inline-flex w-fit items-center gap-1.5 rounded-full bg-bgsoft px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-teal lg:hidden">
            <span className="h-1.5 w-1.5 rounded-full bg-teal" /> Sample format preview
          </span>
          <h3 id="sample-modal-title" className="pr-10 font-display text-xl font-extrabold text-navy sm:text-2xl">
            {COPY.title}
          </h3>
          <p className="mt-1.5 text-sm text-muted">{COPY.subtitle}</p>

          <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5 lg:hidden">
            {BENEFITS.map((b) => (
              <li key={b} className="flex items-center gap-1.5 text-xs font-medium text-navy/75">
                <Check className="h-3.5 w-3.5 text-teal" strokeWidth={3} />
                {b}
              </li>
            ))}
          </ul>

          <form key={`${openCount}-${pathname}`} onSubmit={handleSubmit} className="mt-5 space-y-4 sm:mt-6">
            <input type="hidden" name="source" value={source} />

            <div>
              <label htmlFor="sm-requirement" className={label}>
                Data you need
              </label>
              <div className="relative">
                <select id="sm-requirement" required name="requirement" defaultValue={ctx.requirement} className={`${field} cursor-pointer appearance-none pr-10 font-medium`}>
                  {ctx.city && <option value={ctx.requirement}>{ctx.requirement}</option>}
                  <option value={GENERAL}>{GENERAL}</option>
                  {PRODUCT_GROUPS.map((g) => (
                    <optgroup key={g.heading} label={g.heading}>
                      {g.links.map((l) => (
                        <option key={l.href} value={l.label}>
                          {l.label}
                        </option>
                      ))}
                    </optgroup>
                  ))}
                  <optgroup label="By State">
                    {states.map((s) => (
                      <option key={s.slug} value={`${s.name} B2B Database`}>
                        {s.name} B2B Database
                      </option>
                    ))}
                  </optgroup>
                  <option value={CUSTOM}>{CUSTOM}</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
              </div>
            </div>

            <div>
              <label htmlFor="sm-name" className={label}>
                Your name
              </label>
              <input id="sm-name" required type="text" name="name" autoComplete="name" placeholder="Full name" className={field} />
            </div>

            <div>
              <label htmlFor="sm-phone" className={label}>
                Mobile / WhatsApp number
              </label>
              <div className="flex overflow-hidden rounded-xl border border-[#DCEAF3] bg-white transition focus-within:border-teal focus-within:ring-4 focus-within:ring-teal/15">
                <span className="flex items-center border-r border-[#DCEAF3] bg-bgsoft px-3.5 text-sm font-semibold text-navy/70">+91</span>
                <input
                  id="sm-phone"
                  required
                  type="tel"
                  name="phone"
                  inputMode="numeric"
                  autoComplete="tel-national"
                  pattern="[6-9][0-9]{9}"
                  maxLength={10}
                  title="Enter a 10-digit Indian mobile number"
                  placeholder="10-digit mobile number"
                  className="w-full bg-transparent px-3.5 py-3 text-base text-navy placeholder:text-slate-400 focus:outline-none sm:text-sm"
                />
              </div>
            </div>

            {showMore ? (
              <div className="space-y-3">
                <div className="grid gap-3 min-[420px]:grid-cols-2">
                  <input type="email" name="email" autoComplete="email" placeholder="Work email" aria-label="Work email" className={field} />
                  <input type="text" name="company" autoComplete="organization" placeholder="Company" aria-label="Company" className={field} />
                </div>
                <textarea name="message" rows={2} aria-label="Notes" placeholder="City / state, industry, quantity..." className={`${field} resize-none`} />
              </div>
            ) : (
              <button
                type="button"
                onClick={() => setShowMore(true)}
                className="inline-flex cursor-pointer items-center gap-1.5 text-sm font-semibold text-teal transition hover:text-teal-dark"
              >
                <Plus className="h-4 w-4" />
                Add email, company or notes
                <span className="font-normal text-muted">(optional)</span>
              </button>
            )}

            <SubmitButton status={status} className="py-3.5 text-[15px] shadow-lg shadow-teal/25">
              {COPY.submit}
            </SubmitButton>

            {status.state === "error" && status.message && (
              <p className="text-center text-sm text-red-500" role="alert">
                {status.message}
              </p>
            )}

            <div className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.14em] text-muted" aria-hidden="true">
              <span className="h-px flex-1 bg-[#EEF4F8]" />
              or
              <span className="h-px flex-1 bg-[#EEF4F8]" />
            </div>

            <a
              href={siteConfig.whatsappHref(whatsappText)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-full border border-[#1fb355]/40 py-3 text-sm font-semibold text-[#168a42] transition hover:bg-[#1fb355] hover:text-white"
            >
              <WhatsAppIcon className="h-4 w-4" />
              {COPY.whatsapp}
            </a>

            <p className="pt-1 text-center text-[11px] leading-relaxed text-muted">
              <Lock className="-mt-0.5 mr-1 inline h-3 w-3" aria-hidden="true" />
              {FORM_COPY.modalConsent}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

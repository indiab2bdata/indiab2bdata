"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import { ArrowRight, ClipboardCheck, FileSpreadsheet, MessageSquareText, Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { siteConfig } from "@/lib/site-config";
import { THANK_YOU_STORAGE_KEY } from "@/hooks/use-contact-form";

type Lead = { name: string; requirement: string };

function readLead(): string {
  try {
    return sessionStorage.getItem(THANK_YOU_STORAGE_KEY) ?? "";
  } catch {
    return "";
  }
}

const STEPS = [
  { icon: ClipboardCheck, title: "We review your requirement", text: "A data specialist checks your target audience, location and filters." },
  { icon: Phone, title: "We call or WhatsApp you", text: "Usually within a few working hours, to confirm details and quantity." },
  { icon: FileSpreadsheet, title: "You get free sample records", text: "Check the quality yourself before you pay for anything." },
];

const POPULAR = [
  { href: "/b2b-database-india", label: "B2B Database" },
  { href: "/gst-database-india", label: "GST Data" },
  { href: "/mobile-number-database-india", label: "Mobile Numbers" },
  { href: "/ceo-cfo-cmo-it-heads-database-india", label: "CXO Contacts" },
  { href: "/database", label: "Database by State" },
];

export function ThankYouContent() {
  // sessionStorage is client-only: the server snapshot is empty, so the greeting stays generic until hydration
  const raw = useSyncExternalStore(() => () => {}, readLead, () => "");
  let lead: Lead | null = null;
  try {
    lead = raw ? (JSON.parse(raw) as Lead) : null;
  } catch {
    lead = null;
  }
  const firstName = lead?.name?.trim();
  const requirement = lead?.requirement?.trim();
  const whatsappText = `Hi, I just submitted a request${requirement ? ` for ${requirement}` : ""} on IndiaB2BData. My name is ${firstName || ""}.`;

  return (
    <>
      <style>{`
        @keyframes ty-pop { 0% { transform: scale(.4); opacity: 0 } 60% { transform: scale(1.08); opacity: 1 } 100% { transform: scale(1) } }
        @keyframes ty-draw { to { stroke-dashoffset: 0 } }
        @keyframes ty-ring { 0% { transform: scale(.8); opacity: .6 } 100% { transform: scale(1.9); opacity: 0 } }
        @keyframes ty-rise { from { transform: translateY(14px); opacity: 0 } to { transform: none; opacity: 1 } }
        .ty-rise { animation: ty-rise .6s cubic-bezier(.2,.8,.2,1) both }
        @media (prefers-reduced-motion: reduce) { .ty-anim, .ty-rise { animation: none !important; stroke-dashoffset: 0 !important } }
      `}</style>

      <section className="relative overflow-hidden mesh-navy pb-24 pt-32 md:pt-40">
        <div className="relative mx-auto max-w-2xl px-5 text-center md:px-8">
          <div className="relative mx-auto h-24 w-24">
            <span className="ty-anim absolute inset-0 rounded-full bg-[#1fb355]/40" style={{ animation: "ty-ring 1.8s ease-out .5s infinite" }} aria-hidden="true" />
            <span className="ty-anim relative flex h-24 w-24 items-center justify-center rounded-full bg-[#1fb355] shadow-xl shadow-[#1fb355]/40" style={{ animation: "ty-pop .6s cubic-bezier(.34,1.56,.64,1) both" }}>
              <svg viewBox="0 0 52 52" className="h-12 w-12" aria-hidden="true">
                <path
                  className="ty-anim"
                  d="M14 27l8 8 16-17"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="40"
                  strokeDashoffset="40"
                  style={{ animation: "ty-draw .45s ease-out .45s forwards" }}
                />
              </svg>
            </span>
          </div>

          <h1 className="ty-rise mt-8 font-display text-3xl font-extrabold tracking-tight text-white md:text-5xl" style={{ animationDelay: ".55s" }}>
            Thank you{firstName ? `, ${firstName}` : ""}!
          </h1>
          <p className="ty-rise mx-auto mt-4 max-w-lg leading-relaxed text-white/85" style={{ animationDelay: ".7s" }}>
            We&apos;ve received your request{requirement ? <> for <strong className="text-white">{requirement}</strong></> : null}. Our team will reach out shortly with free sample records and a custom quote.
          </p>

          <div className="ty-rise mt-8 flex flex-wrap items-center justify-center gap-3" style={{ animationDelay: ".85s" }}>
            <a
              href={siteConfig.whatsappHref(whatsappText)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#1fb355] px-6 py-3 font-semibold text-white shadow-lg shadow-[#1fb355]/30 transition hover:-translate-y-0.5 hover:bg-[#18a04a]"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Get a faster reply on WhatsApp
            </a>
            <a
              href={siteConfig.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-navy"
            >
              <Phone className="h-4 w-4" />
              {siteConfig.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto -mt-12 max-w-5xl px-5 md:px-8">
        <div className="ty-rise rounded-2xl bg-white p-7 shadow-xl ring-1 ring-[#DCEAF3] md:p-9" style={{ animationDelay: "1s" }}>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal">What happens next</p>
          <ol className="mt-6 grid gap-6 md:grid-cols-3">
            {STEPS.map((s, i) => (
              <li key={s.title} className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal/10 text-teal">
                  <s.icon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">Step {i + 1}</span>
                  <span className="mt-0.5 block font-display font-bold text-navy">{s.title}</span>
                  <span className="mt-1 block text-sm leading-relaxed text-muted">{s.text}</span>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-16 text-center md:px-8">
        <p className="flex items-center justify-center gap-2 text-sm font-semibold text-navy">
          <MessageSquareText className="h-4 w-4 text-teal" />
          While you wait, explore more databases
        </p>
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          {POPULAR.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className="inline-flex items-center gap-1.5 rounded-full border border-[#DCEAF3] bg-white px-4 py-2 text-sm font-medium text-navy transition hover:border-teal hover:text-teal"
            >
              {p.label}
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          ))}
        </div>
        <Link href="/" className="mt-8 inline-block text-sm font-semibold text-teal hover:underline">
          ← Back to homepage
        </Link>
      </section>
    </>
  );
}

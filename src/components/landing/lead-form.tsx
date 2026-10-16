"use client";

import { Send } from "lucide-react";
import { useContactForm } from "@/hooks/use-contact-form";
import { SubmitButton } from "@/components/submit-button";

const field =
  "w-full rounded-lg border border-[#DCEAF3] bg-white px-3.5 py-2.5 text-sm text-navy placeholder:text-slate-400 focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/30";

/** Inline lead form (same /api/contact endpoint as the sample modal). `requirement` pre-fills the product. */
export function LeadForm({
  source,
  requirement,
  title = "Get Your Free Sample",
  subtitle = "Tell us your target - we'll share sample records and a custom quote within a few hours.",
}: {
  source: string;
  requirement: string;
  title?: string;
  subtitle?: string;
}) {
  const { status, handleSubmit } = useContactForm();

  return (
    <div className="rounded-2xl bg-white p-6 shadow-[0_30px_60px_-25px_rgba(10,35,71,0.55)] ring-1 ring-[#DCEAF3] md:p-7">
      <h2 className="font-display text-xl font-extrabold text-navy">{title}</h2>
      <p className="mt-1.5 text-sm leading-relaxed text-muted">{subtitle}</p>
      <div className="mt-5 h-px bg-[#EEF4F8]" />

      <form onSubmit={handleSubmit} className="mt-5 space-y-3">
        <input type="hidden" name="source" value={source} />
        <input type="hidden" name="requirement" value={requirement} />

        <div className="grid gap-3 sm:grid-cols-2">
          <label className="block">
            <span className="sr-only">Full name</span>
            <input required name="name" type="text" placeholder="Full name*" autoComplete="name" className={field} />
          </label>
          <label className="block">
            <span className="sr-only">Company</span>
            <input name="company" type="text" placeholder="Company" autoComplete="organization" className={field} />
          </label>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <label className="block">
            <span className="sr-only">Phone or WhatsApp</span>
            <input required name="phone" type="tel" placeholder="Phone / WhatsApp*" autoComplete="tel" className={field} />
          </label>
          <label className="block">
            <span className="sr-only">Email</span>
            <input name="email" type="email" placeholder="Work email" autoComplete="email" className={field} />
          </label>
        </div>
        <label className="block">
          <span className="sr-only">Your requirement</span>
          <textarea
            name="message"
            rows={3}
            placeholder="Target city / state, filters, approx. quantity..."
            className={`${field} resize-none`}
          />
        </label>

        <SubmitButton status={status} className="py-3 text-sm">
          <Send className="h-4 w-4" />
          Request Free Sample
        </SubmitButton>

        {status.state !== "idle" && status.message ? (
          <p className={`text-center text-sm ${status.state === "success" ? "font-medium text-teal-dark" : "text-red-500"}`} role="status">
            {status.message}
          </p>
        ) : (
          <p className="text-center text-[11px] text-muted">By submitting, you agree to be contacted via call, SMS or WhatsApp.</p>
        )}
      </form>
    </div>
  );
}

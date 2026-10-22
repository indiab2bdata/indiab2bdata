
"use client";

import { Phone } from "lucide-react";
import { DataNetwork } from "@/components/ui/DataNetwork";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppIcon } from "@/components/ui/icons/WhatsAppIcon";
import { useContactForm } from "@/components/forms/useContactForm";
import { siteConfig } from "@/config/site";
import { SubmitButton } from "@/components/forms/SubmitButton";
import { FORM_COPY } from "@/content/shared/forms";

const COPY = FORM_COPY.contactCta;

const inputClass =
  "w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 shadow-sm transition-all focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/15";

const statusClass: Record<string, string> = {
  success: "text-emerald-600 font-medium",
  error: "text-red-500",
  sending: "text-slate-500",
};

export function ContactCta({
  source = "contact-cta-inline",
}: {
  source?: string;
}) {
  const { status, handleSubmit } = useContactForm();

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-50 py-16 md:py-20"
    >
      {/* Subtle background decoration */}
      <div className="absolute inset-0 grid-pattern opacity-[0.18]" aria-hidden="true" />
      <DataNetwork
        variant="cta"
        className="pointer-events-none opacity-[0.08]"
      />

      <Reveal className="relative mx-auto max-w-6xl px-5 md:px-8">
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_15px_50px_rgba(15,23,42,0.08)]">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">

            {/* Left Content */}
            <div className="flex flex-col justify-center p-7 md:p-10 lg:p-12">
              <span className="mb-4 text-sm font-semibold uppercase tracking-wider text-teal">
                {COPY.eyebrow}
              </span>

              <h2 className="font-display text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
                {COPY.title}
              </h2>

              <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
                {COPY.text}
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={siteConfig.phoneHref}
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition-all hover:border-slate-300 hover:shadow-md"
                >
                  <Phone className="h-4 w-4 text-slate-500" strokeWidth={1.8} />
                  {COPY.callPrefix}
                  {siteConfig.phoneDisplay}
                </a>

                <a
                  href={siteConfig.whatsappHref(
                    siteConfig.defaultWhatsappMessage
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition-all hover:border-slate-300 hover:shadow-md"
                >
                  <WhatsAppIcon className="h-4 w-4 text-whats" />
                  {COPY.whatsapp}
                </a>
              </div>
            </div>

            {/* Right Form */}
            <div className="border-t border-slate-100 bg-slate-50/70 p-7 md:p-10 lg:border-l lg:border-t-0">
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
                <div className="mb-5">
                  <h3 className="text-lg font-semibold text-slate-900">
                    {COPY.formTitle}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    {COPY.formSubtitle}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="hidden"
                    name="source"
                    value={source}
                  />

                  <input
                    type="hidden"
                    name="requirement"
                    value={COPY.requirement}
                  />

                  <div>
                    <label
                      htmlFor="contact-name"
                      className="mb-1.5 block text-sm font-medium text-slate-700"
                    >
                      Full Name
                    </label>

                    <input
                      id="contact-name"
                      required
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="mb-1.5 block text-sm font-medium text-slate-700"
                    >
                      Phone / WhatsApp Number
                    </label>

                    <input
                      id="contact-phone"
                      required
                      type="tel"
                      name="phone"
                      placeholder="Enter your phone number"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="mb-1.5 block text-sm font-medium text-slate-700"
                    >
                      Email Address
                    </label>

                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      placeholder="Enter your email address"
                      className={inputClass}
                    />
                  </div>

                  <SubmitButton status={status} className="px-6 py-3 text-sm shadow-md shadow-teal/20">
                    {COPY.button}
                  </SubmitButton>
                </form>

                {status.state !== "idle" && status.message && (
                  <p
                    className={`mt-3 text-center text-sm ${statusClass[status.state] ?? "text-slate-500"
                      }`}
                  >
                    {status.message}
                  </p>
                )}

                <p className="mt-4 text-center text-xs text-slate-400">
                  {COPY.note}
                </p>
              </div>
            </div>

          </div>
        </div>
      </Reveal>
    </section>
  );
}

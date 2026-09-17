
"use client";

import { Phone } from "lucide-react";
import { DataNetwork } from "@/components/data-network";
import { Reveal } from "@/components/reveal";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { useContactForm } from "@/hooks/use-contact-form";
import { siteConfig } from "@/lib/site-config";

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
                Get in Touch
              </span>

              <h2 className="font-display text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
                Looking for Reliable Business Data?
              </h2>

              <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
                Tell us what type of business data you need and our team will
                help you find the right data for your sales and marketing
                requirements.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={siteConfig.phoneHref}
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition-all hover:border-slate-300 hover:shadow-md"
                >
                  <Phone className="h-4 w-4 text-slate-500" strokeWidth={1.8} />
                  Call {siteConfig.phoneDisplay}
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
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Right Form */}
            <div className="border-t border-slate-100 bg-slate-50/70 p-7 md:p-10 lg:border-l lg:border-t-0">
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
                <div className="mb-5">
                  <h3 className="text-lg font-semibold text-slate-900">
                    Request a Free Sample
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    Share your details and we&apos;ll get back to you.
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
                    value="Custom / Pan-India Data"
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

                  <button
                    type="submit"
                    disabled={status.state === "sending"}
                    className="w-full rounded-lg bg-teal px-6 py-3 text-sm font-semibold text-white shadow-md shadow-teal/20 transition-all duration-200 hover:bg-teal-dark hover:shadow-lg hover:shadow-teal/25 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {status.state === "sending"
                      ? "Submitting..."
                      : "Request Free Sample"}
                  </button>
                </form>

                {status.state !== "idle" && status.message && (
                  <p
                    className={`mt-3 text-center text-sm ${
                      statusClass[status.state] ?? "text-slate-500"
                    }`}
                  >
                    {status.message}
                  </p>
                )}

                <p className="mt-4 text-center text-xs text-slate-400">
                  No obligation. We&apos;ll only use your details to respond to
                  your enquiry.
                </p>
              </div>
            </div>

          </div>
        </div>
      </Reveal>
    </section>
  );
}

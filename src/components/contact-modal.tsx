"use client";

import { useEffect, useState, type FormEvent } from "react";
import { X } from "lucide-react";
import { useModal } from "@/components/modal-context";

const REQUIREMENTS = [
  "Mobile Number Database",
  "Email Database",
  "GST & Company Database",
  "Industry-Wise Leads",
  "Bulk WhatsApp/SMS Data",
  "Custom / Pan-India Data",
];

type Status = { state: "idle" | "sending" | "success" | "error"; message?: string };

export function ContactModal() {
  const { isOpen, source, closeModal } = useModal();
  const [status, setStatus] = useState<Status>({ state: "idle" });

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

  useEffect(() => {
    if (isOpen) setStatus({ state: "idle" });
  }, [isOpen]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus({ state: "sending" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: new FormData(form),
      });
      const data = await res.json().catch(() => ({ success: false }));

      if (data.success) {
        setStatus({ state: "success", message: "Thank you! Our team will contact you shortly." });
        form.reset();
        setTimeout(closeModal, 2200);
      } else {
        setStatus({
          state: "error",
          message: data.message || "Something went wrong. Please call or WhatsApp us directly.",
        });
      }
    } catch {
      setStatus({
        state: "error",
        message: "Could not connect. Please call or WhatsApp us directly.",
      });
    }
  }

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className="absolute inset-0 bg-navy-dark/70 backdrop-blur-sm"
        onClick={closeModal}
        aria-hidden="true"
      />

      <div
        className={`relative bg-white w-full max-w-lg rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto transition-transform duration-300 ${
          isOpen ? "translate-y-0 scale-100" : "translate-y-6 scale-[0.98]"
        }`}
      >
        <button
          onClick={closeModal}
          aria-label="Close"
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition"
        >
          <X className="w-4 h-4 text-navy" strokeWidth={2} />
        </button>

        <div className="p-7 md:p-9">
          <span className="text-teal text-xs font-semibold uppercase tracking-[0.16em]">
            Free Sample Request
          </span>
          <h3 className="font-display font-extrabold text-2xl text-navy mt-2">
            Get Your Free Sample Data
          </h3>
          <p className="text-muted text-sm mt-2">
            Fill the form and our team will share sample records on WhatsApp/email within a few
            hours.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <input type="hidden" name="source" value={source} />

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-navy/70">Full Name*</label>
                <input
                  required
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="mt-1.5 w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal/40 focus:border-teal"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-navy/70">Company Name</label>
                <input
                  type="text"
                  name="company"
                  placeholder="Your company"
                  className="mt-1.5 w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal/40 focus:border-teal"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-navy/70">Phone / WhatsApp*</label>
                <input
                  required
                  type="tel"
                  name="phone"
                  placeholder="10-digit mobile number"
                  className="mt-1.5 w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal/40 focus:border-teal"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-navy/70">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@company.com"
                  className="mt-1.5 w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal/40 focus:border-teal"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-navy/70">Data Requirement*</label>
              <select
                required
                name="requirement"
                defaultValue=""
                className="mt-1.5 w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal/40 focus:border-teal bg-white"
              >
                <option value="" disabled>
                  Select data type
                </option>
                {REQUIREMENTS.map((req) => (
                  <option key={req}>{req}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-xs font-semibold text-navy/70">City / State &amp; Notes</label>
              <textarea
                name="message"
                rows={3}
                placeholder="Target city/state, industry, approx. quantity..."
                className="mt-1.5 w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal/40 focus:border-teal"
              />
            </div>

            <button
              type="submit"
              disabled={status.state === "sending"}
              className="w-full bg-teal hover:bg-teal-dark disabled:opacity-60 text-white font-semibold py-3.5 rounded-full transition"
            >
              {status.state === "sending" ? "Sending..." : "Request Free Sample"}
            </button>

            {status.state !== "idle" && status.message && (
              <p
                className={`text-sm text-center ${
                  status.state === "success"
                    ? "text-teal-dark font-medium"
                    : status.state === "error"
                      ? "text-red-500"
                      : "text-muted"
                }`}
              >
                {status.message}
              </p>
            )}

            <p className="text-[11px] text-center text-muted">
              By submitting, you agree to be contacted via call, SMS or WhatsApp.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

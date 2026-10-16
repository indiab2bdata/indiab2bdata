"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { sendGAEvent } from "@next/third-parties/google";

export type ContactFormStatus = {
  state: "idle" | "sending" | "success" | "error";
  message?: string;
};

const SUCCESS_MESSAGE = "Thank you! Our team will contact you shortly.";
const ERROR_MESSAGE = "Something went wrong. Please call or WhatsApp us directly.";
const NETWORK_ERROR_MESSAGE = "Could not connect. Please call or WhatsApp us directly.";

/** Key the thank-you page reads to greet the visitor by name. */
export const THANK_YOU_STORAGE_KEY = "ib2b-last-lead";

export function useContactForm(onSuccess?: () => void) {
  const [status, setStatus] = useState<ContactFormStatus>({ state: "idle" });
  const router = useRouter();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status.state === "sending") return;

    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus({ state: "sending" });
    const toastId = toast.loading("Sending your request...", { description: "This only takes a moment." });

    try {
      const res = await fetch("/api/contact", { method: "POST", body: data });
      const json = await res.json().catch(() => ({ success: false }));

      if (json.success) {
        setStatus({ state: "success", message: SUCCESS_MESSAGE });
        toast.success("Request received!", { id: toastId, description: "Taking you to the confirmation page..." });
        sendGAEvent("event", "generate_lead", {
          form_source: data.get("source")?.toString() || "unknown",
          requirement: data.get("requirement")?.toString() || "unknown",
        });
        try {
          sessionStorage.setItem(
            THANK_YOU_STORAGE_KEY,
            JSON.stringify({
              name: data.get("name")?.toString().split(" ")[0] || "",
              requirement: data.get("requirement")?.toString() || "",
            })
          );
        } catch {
          // storage blocked (private mode) - the thank-you page falls back to a generic greeting
        }
        form.reset();
        onSuccess?.();
        router.push("/thank-you");
      } else {
        const message = json.message || ERROR_MESSAGE;
        setStatus({ state: "error", message });
        toast.error("Couldn't send your request", { id: toastId, description: message });
      }
    } catch {
      setStatus({ state: "error", message: NETWORK_ERROR_MESSAGE });
      toast.error("Connection problem", { id: toastId, description: NETWORK_ERROR_MESSAGE });
    }
  }

  return { status, setStatus, handleSubmit };
}

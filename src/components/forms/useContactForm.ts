"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { sendGAEvent } from "@next/third-parties/google";
import { FORM_COPY } from "@/content/shared/forms";

export type ContactFormStatus = {
  state: "idle" | "sending" | "success" | "error";
  message?: string;
};

const { status: STATUS, toast: TOAST } = FORM_COPY;

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
    const toastId = toast.loading(TOAST.sending.title, { description: TOAST.sending.description });

    try {
      const res = await fetch("/api/contact", { method: "POST", body: data });
      const json = await res.json().catch(() => ({ success: false }));

      if (json.success) {
        setStatus({ state: "success", message: STATUS.success });
        toast.success(TOAST.received.title, { id: toastId, description: TOAST.received.description });
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
        const message = json.message || STATUS.error;
        setStatus({ state: "error", message });
        toast.error(TOAST.failed, { id: toastId, description: message });
      }
    } catch {
      setStatus({ state: "error", message: STATUS.networkError });
      toast.error(TOAST.connection, { id: toastId, description: STATUS.networkError });
    }
  }

  return { status, setStatus, handleSubmit };
}

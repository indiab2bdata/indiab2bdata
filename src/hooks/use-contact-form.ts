"use client";

import { useState, type FormEvent } from "react";

export type ContactFormStatus = {
  state: "idle" | "sending" | "success" | "error";
  message?: string;
};

const SUCCESS_MESSAGE = "Thank you! Our team will contact you shortly.";
const ERROR_MESSAGE = "Something went wrong. Please call or WhatsApp us directly.";
const NETWORK_ERROR_MESSAGE = "Could not connect. Please call or WhatsApp us directly.";

export function useContactForm(onSuccess?: () => void) {
  const [status, setStatus] = useState<ContactFormStatus>({ state: "idle" });

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
        setStatus({ state: "success", message: SUCCESS_MESSAGE });
        form.reset();
        onSuccess?.();
      } else {
        setStatus({ state: "error", message: data.message || ERROR_MESSAGE });
      }
    } catch {
      setStatus({ state: "error", message: NETWORK_ERROR_MESSAGE });
    }
  }

  return { status, setStatus, handleSubmit };
}

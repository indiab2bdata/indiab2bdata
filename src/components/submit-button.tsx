import type { ReactNode } from "react";
import { Check, LoaderCircle } from "lucide-react";
import type { ContactFormStatus } from "@/hooks/use-contact-form";

/** Form submit button with sending spinner and success tick. */
export function SubmitButton({
  status,
  children,
  className = "",
}: {
  status: ContactFormStatus;
  children: ReactNode;
  className?: string;
}) {
  const sending = status.state === "sending";
  const done = status.state === "success";

  return (
    <button
      type="submit"
      disabled={sending || done}
      aria-busy={sending}
      className={`relative inline-flex w-full cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full font-semibold text-white transition disabled:cursor-not-allowed ${
        done ? "bg-[#1fb355]" : "bg-teal hover:bg-teal-dark disabled:opacity-80"
      } ${className}`}
    >
      {sending && (
        <span aria-hidden="true" className="absolute inset-0 animate-[shimmer_1.4s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      )}
      {sending ? (
        <>
          <LoaderCircle className="h-4 w-4 animate-spin" />
          Sending...
        </>
      ) : done ? (
        <>
          <Check className="h-4 w-4" strokeWidth={3} />
          Sent!
        </>
      ) : (
        children
      )}
    </button>
  );
}

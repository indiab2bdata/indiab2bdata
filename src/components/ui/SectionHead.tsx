import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";

/** Eyebrow + H2 + optional intro, used at the top of every landing-template section. */
export function SectionHead({
  eyebrow,
  title,
  text,
  center = false,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  center?: boolean;
  dark?: boolean;
}) {
  return (
    <Reveal className={`mb-10 max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      <span className={`text-xs font-semibold uppercase tracking-[0.16em] ${dark ? "text-teal-light" : "text-teal-dark"}`}>{eyebrow}</span>
      <h2 className={`mt-3 font-display text-[1.75rem] font-extrabold leading-tight tracking-tight md:text-4xl ${dark ? "text-white" : "text-navy"}`}>
        {title}
      </h2>
      {text && <p className={`mt-4 max-w-[70ch] leading-relaxed ${center ? "mx-auto" : ""} ${dark ? "text-white/75" : "text-muted"}`}>{text}</p>}
    </Reveal>
  );
}

/** Small uppercase label above a heading (legacy keyword template and contact split). */
export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <span className={`text-xs font-semibold uppercase tracking-[0.16em] ${light ? "text-teal-light" : "text-teal-dark"}`}>{children}</span>
  );
}

/** Centred section heading used by the legacy keyword template. */
export function KeywordSectionHead({ eyebrow, title, text, center = true }: { eyebrow: string; title: string; text?: string; center?: boolean }) {
  return (
    <Reveal className={`mb-12 max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-navy md:text-4xl">{title}</h2>
      {text && <p className="mt-4 leading-relaxed text-muted">{text}</p>}
    </Reveal>
  );
}

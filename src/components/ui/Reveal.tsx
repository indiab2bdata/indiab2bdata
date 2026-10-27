import type { ReactNode } from "react";

/**
 * Scroll-in fade/slide with zero JavaScript: a CSS scroll-driven animation (see .reveal in globals.css).
 * Browsers without animation-timeline support, and users with prefers-reduced-motion, simply see the
 * content - it is always fully present in the server HTML.
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  /** Staggers sibling cards slightly by shifting where in the scroll range they finish. */
  delay?: number;
  className?: string;
}) {
  const step = delay ? Math.min(5, Math.max(1, Math.round(delay * 20))) : undefined;
  return (
    <div className={`reveal ${className}`} data-reveal-step={step}>
      {children}
    </div>
  );
}

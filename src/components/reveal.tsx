import type { CSSProperties, ReactNode } from "react";

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
  const style = delay ? ({ "--reveal-offset": `${Math.round(delay * 100)}%` } as CSSProperties) : undefined;
  return (
    <div className={`reveal ${className}`} style={style}>
      {children}
    </div>
  );
}

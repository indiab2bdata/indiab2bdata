"use client";

import { useSyncExternalStore, type ReactNode } from "react";
import Link from "next/link";

// Stored in pieces so the full address never appears in server HTML or the RSC payload.
const USER = "info";
const DOMAIN = ["indiab2bdata", "com"];

const subscribe = () => () => {};

/**
 * Email link that scrapers reading static HTML can't harvest. The server renders a neutral
 * "Email us" link to the contact page; the browser swaps in the real mailto + address on hydration.
 */
export function ProtectedEmail({
  className,
  showAddress = true,
  fallback = "Email us",
  children,
}: {
  className?: string;
  /** Show the address as the link text once hydrated (otherwise `children` / fallback stays). */
  showAddress?: boolean;
  fallback?: string;
  children?: ReactNode;
}) {
  const hydrated = useSyncExternalStore(subscribe, () => true, () => false);

  if (!hydrated) {
    return (
      <Link href="/contact" className={className}>
        {children ?? fallback}
      </Link>
    );
  }

  const address = `${USER}@${DOMAIN.join(".")}`;
  return (
    <a href={`mailto:${address}`} className={className}>
      {showAddress ? address : (children ?? fallback)}
    </a>
  );
}

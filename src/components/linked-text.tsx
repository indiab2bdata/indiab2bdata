import type { ReactNode } from "react";
import Link from "next/link";
import type { KeywordContentLink } from "@/lib/keyword-pages";

/** Link only the phrases explicitly chosen for this page's editorial copy. */
export function LinkedText({ text, links = [] }: { text: string; links?: KeywordContentLink[] }) {
  const parts: ReactNode[] = [];
  let cursor = 0;

  while (cursor < text.length) {
    let match: { index: number; link: KeywordContentLink } | undefined;
    for (const link of links) {
      if (!link.text) continue;
      const index = text.indexOf(link.text, cursor);
      if (index !== -1 && (!match || index < match.index || (index === match.index && link.text.length > match.link.text.length))) {
        match = { index, link };
      }
    }
    if (!match) {
      parts.push(text.slice(cursor));
      break;
    }
    parts.push(text.slice(cursor, match.index));
    parts.push(
      <Link
        key={match.index}
        href={match.link.href}
        className="font-semibold text-teal underline decoration-teal/40 underline-offset-4 transition-colors hover:text-navy hover:decoration-navy focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
      >
        {match.link.text}
      </Link>
    );
    cursor = match.index + match.link.text.length;
  }

  return <>{parts}</>;
}

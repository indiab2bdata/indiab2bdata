import type { ReactNode } from "react";

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h2 className="font-display font-bold text-lg md:text-xl text-navy mb-3">{title}</h2>
      {children}
    </div>
  );
}

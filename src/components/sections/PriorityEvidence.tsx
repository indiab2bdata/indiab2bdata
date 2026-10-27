import Link from "next/link";
import { PRIORITY_EVIDENCE, EVIDENCE_COPY as COPY } from "@/content/shared/priority-evidence";

/** Segment-specific source context and crawlable links for the 15 priority pages. */
export function PriorityEvidence({path}:{path:string}) {
  const data=PRIORITY_EVIDENCE[path];
  if(!data) return null;
  return <section className="bg-white py-14 md:py-20" aria-label={data.heading}>
    <div className="mx-auto max-w-5xl px-5 md:px-8">
      <h2 className="font-display text-2xl font-extrabold text-navy md:text-3xl">{data.heading}</h2>
      <p className="mt-4 max-w-[75ch] leading-relaxed text-muted">{data.intro}</p>
      <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200">
        <table className="min-w-full text-left text-sm">
          <caption className="sr-only">{data.heading}</caption>
          <thead className="bg-bgsoft text-navy"><tr><th scope="col" className="px-5 py-4">{COPY.source}</th><th scope="col" className="px-5 py-4">{COPY.kind}</th><th scope="col" className="px-5 py-4">{COPY.detail}</th></tr></thead>
          <tbody className="divide-y divide-slate-100">{data.sources.map(s=><tr key={s.name}><th scope="row" className="px-5 py-4 font-semibold"><Link href={s.href} className="text-teal-dark underline underline-offset-4">{s.name}</Link></th><td className="px-5 py-4 text-muted">{s.kind}</td><td className="px-5 py-4 leading-relaxed text-muted">{s.detail}</td></tr>)}</tbody>
        </table>
      </div>
      <p className="mt-4 max-w-[85ch] text-sm leading-relaxed text-muted">{COPY.note}</p>
      <Link href="/data-sourcing-methodology" className="mt-3 inline-block font-semibold text-teal-dark underline underline-offset-4">{COPY.methodology}</Link>
      <nav aria-label={data.heading+" — "+COPY.navigation} className="mt-8"><h3 className="font-semibold text-navy">{COPY.navigation}</h3><ul className="mt-3 flex flex-wrap gap-2">{data.links.map(link=><li key={link.href}><Link href={link.href} prefetch={false} className="inline-block rounded-lg border border-slate-200 px-4 py-3 text-sm font-semibold text-teal-dark hover:border-teal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal">{link.label}</Link></li>)}</ul></nav>
    </div>
  </section>;
}

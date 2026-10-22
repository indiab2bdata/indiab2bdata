import { HOME } from "@/content/pages/home";

export function TrustStrip() {
  return (
    <section className="bg-white border-b border-[#DCEAF3] py-7">
      <div className="max-w-7xl mx-auto px-5 md:px-8 flex flex-wrap items-center justify-center gap-3">
        <span className="text-muted text-sm font-medium mr-2">{HOME.trustStrip.lead}</span>
        {HOME.trustStrip.industries.map((industry) => (
          <span
            key={industry}
            className="text-navy/80 text-sm font-medium bg-slate-50 border border-[#DCEAF3] rounded-full px-4 py-1.5"
          >
            {industry}
          </span>
        ))}
      </div>
    </section>
  );
}

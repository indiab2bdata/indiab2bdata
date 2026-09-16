const INDUSTRIES = [
  "Real Estate",
  "EdTech",
  "Finance & Insurance",
  "Manufacturing",
  "Healthcare",
  "E-commerce",
];

export function TrustStrip() {
  return (
    <section className="bg-white border-b border-slate-100 py-7">
      <div className="max-w-7xl mx-auto px-5 md:px-8 flex flex-wrap items-center justify-center gap-3">
        <span className="text-muted text-sm font-medium mr-2">Trusted by teams across:</span>
        {INDUSTRIES.map((industry) => (
          <span
            key={industry}
            className="text-navy/80 text-sm font-medium bg-slate-50 border border-slate-200/70 rounded-full px-4 py-1.5"
          >
            {industry}
          </span>
        ))}
      </div>
    </section>
  );
}

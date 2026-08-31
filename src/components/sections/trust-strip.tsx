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
    <section className="bg-white border-b border-slate-100 py-6">
      <div className="max-w-7xl mx-auto px-5 md:px-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-muted text-sm font-medium">
        <span>Trusted by teams across:</span>
        {INDUSTRIES.map((industry, i) => (
          <span key={industry} className="text-navy/70">
            {industry}
            {i < INDUSTRIES.length - 1 ? " ·" : ""}
          </span>
        ))}
      </div>
    </section>
  );
}

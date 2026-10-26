import { HOME } from "@/content/pages/home";

export function SelectionGuide() {
  const copy = HOME.selection;
  return (
    <section className="bg-bgsoft py-14 md:py-20" aria-labelledby="selection-guide-heading">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <h2 id="selection-guide-heading" className="font-display text-2xl font-extrabold text-navy md:text-3xl">{copy.heading}</h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-muted">{copy.intro}</p>
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {copy.items.map((item) => <article key={item.heading} className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-xl font-bold text-navy">{item.heading}</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted">{item.text}</p>
          </article>)}
        </div>
      </div>
    </section>
  );
}

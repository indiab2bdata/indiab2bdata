/** Three key numbers directly under the hero. */
export function StatStrip({ items }: { items: { value: string; label: string }[] }) {
  if (items.length === 0) return null;
  return (
    <div className="border-b border-[#DCEAF3] bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-[#DCEAF3] px-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 md:px-8">
        {items.map((s) => (
          <div key={s.label} className="py-6 text-center">
            <p className="font-display text-3xl font-extrabold text-navy">{s.value}</p>
            <p className="mt-1 text-xs font-medium uppercase tracking-[0.12em] text-muted">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

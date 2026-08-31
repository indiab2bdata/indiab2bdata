import { Reveal } from "@/components/reveal";

const TESTIMONIALS = [
  {
    quote:
      "Connect rate on our tele-calling improved a lot after we switched — numbers were genuinely active.",
    initials: "RS",
    name: "Rohit Sharma",
    role: "Sales Head, Real Estate",
    color: "bg-navy",
  },
  {
    quote:
      "Delivery was quick and the sample matched exactly what we ordered. Great support on WhatsApp too.",
    initials: "PK",
    name: "Priya Kulkarni",
    role: "Marketing Manager, EdTech",
    color: "bg-teal",
  },
  {
    quote:
      "We use their GST database every quarter for lead generation — consistent quality every single time.",
    initials: "AV",
    name: "Amit Verma",
    role: "Founder, Finance Agency",
    color: "bg-amber",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 md:py-28 max-w-7xl mx-auto px-5 md:px-8">
      <Reveal className="max-w-2xl mb-14">
        <span className="text-teal text-xs font-semibold uppercase tracking-[0.16em]">
          Client Feedback
        </span>
        <h2 className="font-display font-extrabold text-3xl md:text-4xl text-navy mt-3 tracking-tight">
          What Our Clients Say
        </h2>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-6">
        {TESTIMONIALS.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.1}>
            <div className="h-full bg-white rounded-2xl p-7 border border-slate-100 transition-shadow hover:shadow-lg">
              <p className="text-navy/80 text-sm leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3 mt-6">
                <span
                  className={`w-10 h-10 rounded-full ${t.color} text-white flex items-center justify-center font-display font-bold text-sm`}
                >
                  {t.initials}
                </span>
                <div>
                  <p className="font-semibold text-navy text-sm">{t.name}</p>
                  <p className="text-muted text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

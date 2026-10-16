import { Reveal } from "@/components/reveal";
import TestimonialMarquee, { type TestimonialCard } from "@/components/ui/testimonial-marquee";

const TESTIMONIALS: TestimonialCard[] = [
  {
    quote:
      "Connect rate on our tele-calling improved a lot after we switched - numbers were genuinely active.",
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
      "We use their GST database every quarter for lead generation - consistent quality every single time.",
    initials: "AV",
    name: "Amit Verma",
    role: "Founder, Finance Agency",
    color: "bg-amber",
  },
];

export function Testimonials() {
  return (
    <section className="bg-bgsoft py-20 md:py-28">
      <Reveal className="mx-auto mb-12 max-w-2xl px-5 text-center md:px-8">
        <span className="text-teal text-xs font-semibold uppercase tracking-[0.16em]">Client Feedback</span>
        <h2 className="font-display font-extrabold text-3xl md:text-4xl text-navy mt-3 tracking-tight">
          What Our Clients Say
        </h2>
      </Reveal>

      <TestimonialMarquee row1={TESTIMONIALS} row2={[...TESTIMONIALS].reverse()} />
    </section>
  );
}

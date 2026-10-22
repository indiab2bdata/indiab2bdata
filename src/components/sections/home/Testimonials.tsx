import { Reveal } from "@/components/ui/Reveal";
import TestimonialMarquee, { type TestimonialCard } from "@/components/ui/TestimonialMarquee";
import { HOME } from "@/content/pages/home";

const COPY = HOME.testimonials;
const TESTIMONIALS: TestimonialCard[] = COPY.items;

export function Testimonials() {
  return (
    <section className="bg-bgsoft py-20 md:py-28">
      <Reveal className="mx-auto mb-12 max-w-2xl px-5 text-center md:px-8">
        <span className="text-teal-dark text-xs font-semibold uppercase tracking-[0.16em]">{COPY.eyebrow}</span>
        <h2 className="font-display font-extrabold text-3xl md:text-4xl text-navy mt-3 tracking-tight">
          {COPY.title}
        </h2>
      </Reveal>

      <TestimonialMarquee row1={TESTIMONIALS} row2={[...TESTIMONIALS].reverse()} />
    </section>
  );
}

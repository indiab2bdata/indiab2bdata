import { Reveal } from "@/components/reveal";

export function AnswerBox({ answer }: { answer: string }) {
  return (
    <Reveal className="max-w-3xl mx-auto px-5 md:px-8 -mt-8 md:-mt-10 relative z-10">
      <div className="bg-white rounded-2xl border-l-4 border-teal shadow-[0_18px_40px_-16px_rgba(11,43,78,0.25)] p-6 md:p-8">
        <span className="text-teal text-xs font-semibold uppercase tracking-[0.16em]">Quick Answer</span>
        <p className="mt-2 text-navy/85 text-sm md:text-base leading-relaxed">{answer}</p>
      </div>
    </Reveal>
  );
}

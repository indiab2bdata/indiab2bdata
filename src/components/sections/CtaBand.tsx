import { SampleButton, WhatsAppButton } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { shell } from "@/components/ui/styles";
import { FORM_COPY } from "@/content/shared/forms";

/** Inline CTA band - placed after every second major section. */
export function CtaBand({ text, source, whatsappMessage }: { text: string; source: string; whatsappMessage: string }) {
  return (
    <div className="bg-white py-6 md:py-8">
      <div className={shell}>
        <Reveal>
          <div className="flex flex-col items-center justify-between gap-5 rounded-2xl bg-[linear-gradient(110deg,#0b78d0,#123b72)] px-6 py-6 text-center md:flex-row md:px-10 md:text-left">
            <p className="max-w-[60ch] font-display text-base font-bold leading-snug text-white md:text-lg">{text}</p>
            <div className="flex shrink-0 flex-wrap justify-center gap-3">
              <SampleButton source={source} className="!bg-white !text-navy hover:!bg-bgsoft" />
              <WhatsAppButton message={whatsappMessage} label={FORM_COPY.cta.whatsappShort} className="!border-white/40 !bg-transparent !text-white hover:!bg-white/10" />
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

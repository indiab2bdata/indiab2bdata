"use client";

import Image from "next/image";
import { IndianRupee, MapPinned, Sparkles, Zap } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { useModal } from "@/components/modal-context";

const POINTS = [
  {
    icon: Sparkles,
    title: "Verified & Fresh",
    description: "Refreshed monthly, de-duplicated and DND scrubbed.",
  },
  {
    icon: IndianRupee,
    title: "Affordable Pricing",
    description: "Pay only for the records and filters you actually need.",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Most orders delivered within 2–6 working hours.",
  },
  {
    icon: MapPinned,
    title: "Pan-India Coverage",
    description: "Data across every state, city and pincode cluster.",
  },
];

export function WhyUs() {
  const { openModal } = useModal();

  return (
    <section id="why" className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-2 gap-14 items-center">
        <Reveal className="rounded-3xl overflow-hidden shadow-xl order-2 lg:order-1">
          <Image
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop"
            alt="Data analytics dashboard on laptop"
            width={1200}
            height={800}
            className="w-full h-[420px] object-cover"
          />
        </Reveal>

        <div className="order-1 lg:order-2">
          <span className="text-teal text-xs font-semibold uppercase tracking-[0.16em]">
            Why Choose Us
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-navy mt-3 tracking-tight">
            Built on Accuracy, Not Guesswork
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Every list is verified, deduplicated and formatted before it reaches you — so your
            team spends time selling, not cleaning spreadsheets.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-6">
            {POINTS.map((point) => (
              <div key={point.title} className="flex gap-3">
                <span className="w-9 h-9 shrink-0 rounded-lg bg-teal/10 text-teal flex items-center justify-center">
                  <point.icon className="w-[18px] h-[18px]" strokeWidth={2} />
                </span>
                <div>
                  <p className="font-semibold text-navy text-sm">{point.title}</p>
                  <p className="text-muted text-sm mt-1">{point.description}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => openModal("why")}
            className="mt-9 bg-navy hover:bg-navy-light text-white font-semibold px-7 py-3.5 rounded-full transition"
          >
            Talk to Our Team
          </button>
        </div>
      </div>
    </section>
  );
}

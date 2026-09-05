"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { useModal } from "@/components/modal-context";

export function KeywordVisual({
  image,
  alt,
  keyword,
  benefits,
  ctaId,
}: {
  image: string;
  alt: string;
  keyword: string;
  benefits: ReactNode;
  ctaId: string;
}) {
  const { openModal } = useModal();

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-2 gap-14 items-center">
        <Reveal className="rounded-3xl overflow-hidden shadow-xl">
          <Image
            src={image}
            alt={alt}
            width={1200}
            height={800}
            className="w-full h-[320px] md:h-[420px] object-cover"
          />
        </Reveal>

        <div>
          <span className="text-teal text-xs font-semibold uppercase tracking-[0.16em]">
            See It In Action
          </span>
          <h2 className="font-display font-extrabold text-2xl md:text-3xl text-navy mt-3 tracking-tight">
            What You Get With {keyword}
          </h2>

          <div className="mt-7 space-y-5">{benefits}</div>

          <button
            onClick={() => openModal(ctaId)}
            className="mt-9 bg-teal hover:bg-teal-dark text-white font-semibold px-7 py-3.5 rounded-full transition inline-flex items-center gap-2 shadow-lg shadow-teal/30 hover:shadow-xl hover:-translate-y-0.5"
          >
            Request Free Sample
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

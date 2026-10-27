"use client";

import { ContentImage } from "@/components/ui/ContentImage";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import { useModal } from "@/components/layout/ModalContext";
import { HEADER_LINKS } from "@/config/navigation";
import { SITE_COPY } from "@/content/shared/site-copy";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { openModal } = useModal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 backdrop-blur-md border-b transition-all duration-300 ${
        scrolled ? "bg-white/85 border-[#DCEAF3] shadow-sm shadow-navy/5" : "bg-white border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-16 md:h-[72px] flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <ContentImage
            src="/images/logo.png"
            alt={`${SITE_COPY.logoAlt} home`}
            width={224}
            height={112}
            preload
            className="h-14 md:h-28 w-auto object-contain"
          />
        </Link>

        <nav
          id="primary-navigation"
          className={`${menuOpen ? "block" : "hidden"} absolute top-full inset-x-0 border-t border-[#DCEAF3] bg-white px-5 py-4 space-y-3 font-medium text-navy lg:static lg:flex lg:items-center lg:gap-8 lg:border-0 lg:bg-transparent lg:p-0 lg:space-y-0 lg:text-sm lg:text-muted`}
        >
          {HEADER_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="relative block py-1 hover:text-teal transition-colors after:absolute after:left-0 after:-bottom-0.5 after:h-[1.5px] after:w-0 after:bg-teal after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={() => {
              setMenuOpen(false);
              openModal("mobile");
            }}
            className="lg:hidden w-full bg-teal text-white font-semibold py-2.5 rounded-full mt-2 cursor-pointer"
          >
            {SITE_COPY.header.sampleCta}
          </button>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={siteConfig.phoneHref}
            className="flex items-center gap-2 text-sm font-medium text-navy hover:text-teal transition-colors"
          >
            <Phone className="w-4 h-4" strokeWidth={1.8} />
            {siteConfig.phoneDisplay}
          </a>
          <button
            onClick={() => openModal("nav")}
            className="bg-teal hover:bg-teal-dark active:scale-[0.98] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 shadow-md shadow-teal/20 hover:shadow-lg hover:shadow-teal/30 hover:scale-[1.02] cursor-pointer"
          >
            {SITE_COPY.header.sampleCta}
          </button>
        </div>

        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="lg:hidden p-2 text-navy cursor-pointer"
          aria-label={SITE_COPY.header.menuLabel}
          aria-controls="primary-navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

    </header>
  );
}

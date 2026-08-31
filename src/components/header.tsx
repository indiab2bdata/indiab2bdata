"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { useModal } from "@/components/modal-context";

const NAV_LINKS = [
  { href: "/#offer", label: "Data Products" },
  { href: "/#why", label: "Why Us" },
  { href: "/#process", label: "Process" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#faq", label: "FAQs" },
  { href: "/about-us", label: "About Us" },
];

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
      className={`fixed top-0 inset-x-0 z-40 bg-white/90 backdrop-blur border-b transition-shadow ${
        scrolled ? "border-slate-200 shadow-sm shadow-navy/5" : "border-slate-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-16 md:h-[72px] flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="w-9 h-9 rounded-lg bg-navy flex items-center justify-center">
            <span className="w-2.5 h-2.5 rounded-full bg-teal-light" />
          </span>
          <span className="font-display font-extrabold text-lg md:text-xl text-navy tracking-tight">
            India<span className="text-teal">B2B</span>Data
            <span className="text-muted font-normal text-sm">.com</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8 font-medium text-sm text-navy/80">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-teal transition">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={siteConfig.phoneHref}
            className="flex items-center gap-2 text-sm font-medium text-navy hover:text-teal transition"
          >
            <Phone className="w-4 h-4" strokeWidth={1.8} />
            {siteConfig.phoneDisplay}
          </a>
          <button
            onClick={() => openModal("nav")}
            className="bg-teal hover:bg-teal-dark text-white text-sm font-semibold px-5 py-2.5 rounded-full transition shadow-sm shadow-teal/30"
          >
            Get Free Sample
          </button>
        </div>

        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="lg:hidden p-2 text-navy"
          aria-label="Menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white px-5 py-4 space-y-3 font-medium text-navy">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-1"
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={() => {
              setMenuOpen(false);
              openModal("mobile");
            }}
            className="w-full bg-teal text-white font-semibold py-2.5 rounded-full mt-2"
          >
            Get Free Sample
          </button>
        </div>
      )}
    </header>
  );
}

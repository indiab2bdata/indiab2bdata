"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { useModal } from "@/components/modal-context";

const NAV_LINKS = [
  { href: "/#offer", label: "Data Products" },
  { href: "/database", label: "Database by State" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
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
      className={`fixed top-0 inset-x-0 z-40 backdrop-blur-md border-b transition-all duration-300 ${
        scrolled ? "bg-white/85 border-[#DCEAF3] shadow-sm shadow-navy/5" : "bg-white border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-16 md:h-[72px] flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.svg"
            alt="IndiaB2BData.com"
            width={400}
            height={200}
            priority
            className="h-14 md:h-28 w-auto object-cover"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8 font-medium text-sm text-muted">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative py-1 hover:text-teal transition-colors after:absolute after:left-0 after:-bottom-0.5 after:h-[1.5px] after:w-0 after:bg-teal after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
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
            Get Free Sample
          </button>
        </div>

        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="lg:hidden p-2 text-navy cursor-pointer"
          aria-label="Menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden border-t border-[#DCEAF3] bg-white px-5 py-4 space-y-3 font-medium text-navy">
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
            className="w-full bg-teal text-white font-semibold py-2.5 rounded-full mt-2 cursor-pointer"
          >
            Get Free Sample
          </button>
        </div>
      )}
    </header>
  );
}

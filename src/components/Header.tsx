"use client";

import Link from "next/link";
import { useState } from "react";
import { SITE_NAME, PHONE, PHONE_HREF } from "@/lib/constants";

const NAV_LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/zones", label: "Zones" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-dark sticky top-0 z-50 border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight text-white">
          {SITE_NAME}
        </Link>

        {/* Badge */}
        <div className="hidden lg:flex items-center gap-2 bg-dark-lighter border border-primary/30 rounded-full px-4 py-1.5 text-sm">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-white/80">Service Disponible 24h/24 - 7j/7</span>
        </div>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-6 text-sm font-medium">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-white/70 hover:text-primary transition-colors py-2"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA desktop */}
        <a
          href={PHONE_HREF}
          className="hidden md:inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-5 py-2.5 rounded-lg transition-colors text-sm"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          {PHONE}
        </a>

        {/* Mobile burger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-white"
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-dark-lighter px-4 pb-4 border-t border-white/10">
          <ul className="flex flex-col gap-1 text-sm font-medium pt-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-3 px-3 rounded-lg text-white/70 hover:text-primary hover:bg-white/5 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={PHONE_HREF}
            className="mt-3 block text-center bg-primary hover:bg-primary-dark text-white font-bold px-5 py-3 rounded-lg transition-colors text-sm"
          >
            Appeler maintenant
          </a>
        </div>
      )}
    </header>
  );
}

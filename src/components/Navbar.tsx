"use client";

import Image from "next/image";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useTranslations } from "@/i18n/use-translations";

export default function Navbar() {
  const { t } = useTranslations();

  const navLinks = [
    { label: t.nav.explore, href: "#explore" },
    { label: t.nav.food, href: "#food" },
    { label: t.nav.survival, href: "#survival" },
    { label: t.nav.transit, href: "#transit" },
    { label: t.nav.assistant, href: "#assistant" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-miami-sand bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3.5 sm:px-6 sm:py-4">
        <a
          href="#top"
          className="flex shrink-0 items-center gap-2 text-xl font-extrabold tracking-tight text-miami-ocean sm:gap-2.5 sm:text-2xl"
        >
          <Image
            src="/images/fwc2026-logo.png"
            alt="Fifa World Cup 2026"
            width={24}
            height={34}
            className="h-7 w-auto sm:h-8"
          />
          Miami <span className="text-miami-teal">26</span>
        </a>

        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          <ul className="flex flex-wrap items-center gap-0 sm:gap-0.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-full px-2 py-2 text-sm font-bold text-slate-800 transition-colors hover:bg-miami-sand hover:text-miami-ocean sm:px-2.5 sm:py-2 sm:text-base"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
}

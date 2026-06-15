"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useTranslations } from "@/i18n/use-translations";

export default function Navbar() {
  const { t } = useTranslations();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: t.nav.explore, href: "#explore" },
    { label: t.nav.food, href: "#food" },
    { label: t.nav.survival, href: "#survival" },
    { label: t.nav.transit, href: "#transit" },
    { label: t.nav.assistant, href: "#assistant" },
  ];

  useEffect(() => {
    if (!menuOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setMenuOpen(false);
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-miami-sand bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-3.5">
        <a
          href="#top"
          className="flex shrink-0 items-center gap-2 text-xl font-extrabold tracking-tight text-miami-ocean sm:gap-2.5 sm:text-2xl"
          onClick={closeMenu}
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

        <div className="flex items-center gap-2">
          <ul className="hidden items-center gap-0.5 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="smooth-btn rounded-full px-2.5 py-2 text-sm font-bold text-slate-800 hover:bg-miami-sand hover:text-miami-ocean lg:px-3 lg:text-base"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <LanguageSwitcher />

          <button
            type="button"
            className="smooth-btn flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-miami-ocean shadow-sm hover:border-miami-teal/40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <>
          <button
            type="button"
            className="fixed inset-0 z-40 bg-black/20 md:hidden"
            onClick={closeMenu}
            aria-label={t.nav.closeMenu}
          />
          <div className="nav-drawer-enter relative z-50 border-t border-slate-100 bg-white px-4 py-3 shadow-lg md:hidden">
            <ul className="space-y-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className="smooth-btn block rounded-xl px-4 py-3 text-base font-bold text-slate-800 hover:bg-miami-sand hover:text-miami-ocean"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </nav>
  );
}

function MenuIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
      <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
      <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
    </svg>
  );
}

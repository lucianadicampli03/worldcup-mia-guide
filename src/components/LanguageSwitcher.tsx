"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale } from "@/i18n/LocaleProvider";
import type { Locale } from "@/i18n/types";

const options: { value: Locale; flag: string }[] = [
  { value: "es", flag: "🇲🇽" },
  { value: "en", flag: "🇺🇸" },
  { value: "fr", flag: "🇫🇷" },
  { value: "pt", flag: "🇧🇷" },
];

export default function LanguageSwitcher() {
  const { locale, setLocale, dict } = useLocale();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function select(next: Locale) {
    setLocale(next);
    setOpen(false);
  }

  const current = options.find((o) => o.value === locale) ?? options[1];

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-bold text-slate-700 shadow-sm transition-colors hover:border-miami-teal/40 hover:text-miami-ocean sm:px-3.5"
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label={dict.ui.nav.changeLanguage}
      >
        <span aria-hidden className="text-base leading-none">
          {current.flag}
        </span>
        <span className="uppercase tracking-wide">{current.value}</span>
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute right-0 z-50 mt-2 min-w-[7.5rem] overflow-hidden rounded-2xl border border-slate-200 bg-white py-1 shadow-lg"
        >
          {options.map((option) => (
            <li
              key={option.value}
              role="option"
              aria-selected={locale === option.value}
            >
              <button
                type="button"
                onClick={() => select(option.value)}
                className={`flex w-full items-center justify-between gap-3 px-4 py-2.5 text-left text-sm font-bold transition-colors hover:bg-miami-sand ${
                  locale === option.value
                    ? "bg-miami-sand/80 text-miami-ocean"
                    : "text-slate-700"
                }`}
              >
                <span aria-hidden className="text-base leading-none">
                  {option.flag}
                </span>
                <span className="uppercase tracking-wide">{option.value}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

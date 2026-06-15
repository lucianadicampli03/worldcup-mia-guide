"use client";

import { InternalTermsButton } from "@/components/TermsOfUseModal";
import ScrollReveal from "@/components/ScrollReveal";
import { useTranslations } from "@/i18n/use-translations";

export default function Footer() {
  const { t } = useTranslations();

  const sectionLinks = [
    { label: t.nav.explore, href: "#explore" },
    { label: t.nav.food, href: "#food" },
    { label: t.nav.survival, href: "#survival" },
    { label: t.nav.transit, href: "#transit" },
    { label: t.nav.assistant, href: "#assistant" },
  ];

  return (
    <footer className="bg-miami-ocean text-white">
      <ScrollReveal variant="fade-up">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14">
        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                {t.footer.title}
              </h2>
              <span className="rounded-full bg-miami-coral px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                {t.footer.forCrew}
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/80 sm:text-base">
              {t.footer.description}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-miami-teal">
              {t.footer.sections}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {sectionLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/90 transition-colors hover:text-white sm:text-base"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-miami-teal">
              {t.footer.support}
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="tel:911"
                  className="flex items-center gap-2 text-sm text-white/90 transition-colors hover:text-white sm:text-base"
                >
                  <PhoneIcon />
                  {t.footer.emergencies}
                </a>
              </li>
              <li>
                <a
                  href="tel:3054765423"
                  className="flex items-center gap-2 text-sm text-white/90 transition-colors hover:text-white sm:text-base"
                >
                  <SupportIcon />
                  {t.footer.police}
                </a>
              </li>
              <li>
                <a
                  href="https://www.miamiandbeaches.com/plan-your-trip/visitor-information"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white/90 transition-colors hover:text-white sm:text-base"
                >
                  <SupportIcon />
                  {t.footer.visitorInfo}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/15 pt-6 text-xs uppercase tracking-wide text-white/50 sm:flex-row sm:items-center sm:justify-between sm:text-sm">
          <p>{t.footer.copyright}</p>
          <InternalTermsButton />
        </div>
        </div>
      </ScrollReveal>
    </footer>
  );
}

function PhoneIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 shrink-0 text-miami-teal"
      aria-hidden
    >
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  );
}

function SupportIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 shrink-0 text-miami-teal"
      aria-hidden
    >
      <path d="M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h1v-8H5c0-3.87 3.13-7 7-7s7 3.13 7 7v8h1c1.66 0 3-1.34 3-3v-7c0-4.97-4.03-9-9-9z" />
    </svg>
  );
}

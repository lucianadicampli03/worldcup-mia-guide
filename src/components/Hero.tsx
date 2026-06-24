"use client";

import Image from "next/image";
import { useTranslations } from "@/i18n/use-translations";

export default function Hero() {
  const { t } = useTranslations();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-miami-ocean via-miami-teal to-miami-ocean text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-4 py-10 text-center sm:px-8 sm:py-12 lg:px-12 lg:py-14">
        <p className="hero-enter hero-enter-1 mb-3 rounded-full bg-white/15 px-5 py-1.5 text-sm font-semibold uppercase tracking-widest backdrop-blur-sm sm:text-base">
          {t.hero.badge}
        </p>

        <h1 className="hero-enter hero-enter-2 w-full max-w-5xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl xl:max-w-6xl xl:text-7xl">
          {t.hero.titleLine1}
          <span className="mt-1 block text-miami-coral sm:mt-2">
            {t.hero.titleLine2}
          </span>
        </h1>

        <p className="hero-enter hero-enter-3 mt-4 max-w-3xl text-lg leading-relaxed text-white/90 sm:text-xl xl:max-w-4xl">
          {t.hero.subtitle}
        </p>

        <a
          href="#explore"
          className="hero-enter hero-enter-4 group relative mt-5 inline-flex overflow-hidden rounded-full bg-miami-coral shadow-lg"
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 -translate-x-full bg-white transition-transform duration-500 ease-out group-hover:translate-x-0"
          />
          <span className="relative z-10 px-6 py-3 text-base font-semibold text-white transition-colors duration-500 group-hover:text-miami-coral sm:px-7 sm:py-3.5 sm:text-lg">
            {t.hero.cta}
          </span>
        </a>

        <Image
          src="/images/hbs-mascot.png"
          alt={t.hero.mascotAlt}
          width={862}
          height={844}
          priority
          unoptimized
          className="hero-mascot-enter relative z-10 mt-6 h-48 w-auto object-contain sm:h-56 lg:h-64"
        />
      </div>
    </section>
  );
}

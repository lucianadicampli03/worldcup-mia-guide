"use client";

import ScrollReveal from "@/components/ScrollReveal";
import TransitCard from "@/components/TransitCard";
import { useTranslations } from "@/i18n/use-translations";

export default function TransitSection() {
  const { dict } = useTranslations();
  const data = dict.transit;
  const [metromover, metrorail, metrobus, brightline] = data.options;

  return (
    <section id="transit" className="bg-white px-4 py-14 sm:px-6 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal variant="fade-up-lg" className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <header>
            <h2 className="text-3xl font-extrabold tracking-tight text-miami-ocean sm:text-4xl lg:text-5xl">
              {data.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              {data.subtitle}
            </p>
          </header>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" delay={80}>
          <p className="mx-auto mb-8 max-w-3xl rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-center text-sm text-amber-900 sm:text-base">
            {data.matchDayNote}
          </p>
        </ScrollReveal>

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          <ScrollReveal variant="fade-up" delay={0} className="lg:col-span-2">
            <TransitCard option={metromover} featured />
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={100}>
            <TransitCard option={metrorail} />
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={200}>
            <TransitCard option={metrobus} />
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={300}>
            <TransitCard option={brightline} />
          </ScrollReveal>
        </div>

        <ScrollReveal variant="fade-in" delay={120}>
          <p className="mt-8 text-center text-sm text-slate-500">
          {data.footerMapsFrom}{" "}
          <a
            href="https://www.miamidade.gov/transportation-public-transit/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-miami-ocean underline-offset-2 hover:underline"
          >
            {data.miamiDadeTransit}
          </a>
          {" · "}
          <a
            href="https://www.gobrightline.com/train-stations/fl/miami"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-miami-ocean underline-offset-2 hover:underline"
          >
            {data.brightlineMiamiCentral}
          </a>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

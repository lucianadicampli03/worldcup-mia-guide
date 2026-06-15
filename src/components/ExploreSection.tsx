"use client";

import { useMemo } from "react";
import ExploreSectionClient from "@/components/ExploreSectionClient";
import exploreData from "@/data/explore.json";
import { localizeExplorePlaces } from "@/i18n/localize";
import ScrollReveal from "@/components/ScrollReveal";
import { useTranslations } from "@/i18n/use-translations";
import type { ExplorePlace } from "@/types/explore";

const basePlaces = exploreData as ExplorePlace[];

export default function ExploreSection() {
  const { t, dict } = useTranslations();
  const places = useMemo(
    () => localizeExplorePlaces(basePlaces, dict),
    [dict]
  );

  return (
    <section id="explore" className="bg-miami-sand px-4 py-14 sm:px-6 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal variant="fade-up-lg" className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <header>
            <h2 className="text-3xl font-extrabold tracking-tight text-miami-ocean sm:text-4xl lg:text-5xl">
              {t.explore.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              {t.explore.subtitle}
            </p>
          </header>
        </ScrollReveal>

        <ExploreSectionClient places={places} />
      </div>
    </section>
  );
}

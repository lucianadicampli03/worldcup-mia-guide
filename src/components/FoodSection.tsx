"use client";

import { useMemo } from "react";
import FoodCard from "@/components/FoodCard";
import foodData from "@/data/food.json";
import { localizeFoodPlaces } from "@/i18n/localize";
import { useTranslations } from "@/i18n/use-translations";
import type { FoodPlace } from "@/types/food";

const basePlaces = foodData as FoodPlace[];

export default function FoodSection() {
  const { t, dict } = useTranslations();
  const places = useMemo(() => localizeFoodPlaces(basePlaces, dict), [dict]);

  return (
    <section id="food" className="bg-white px-4 py-14 sm:px-6 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <header className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-miami-coral sm:text-4xl lg:text-5xl">
            {t.food.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            {t.food.subtitle}
          </p>
        </header>

        <div className="-mx-4 flex gap-5 overflow-x-auto px-4 pb-4 snap-x snap-mandatory scrollbar-thin sm:-mx-6 sm:px-6 lg:mx-0 lg:grid lg:grid-cols-4 lg:gap-6 lg:overflow-visible lg:pb-0 lg:snap-none">
          {places.map((place) => (
            <FoodCard key={place.id} place={place} />
          ))}
        </div>
      </div>
    </section>
  );
}

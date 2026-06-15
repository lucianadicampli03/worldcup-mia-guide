"use client";

import Image from "next/image";
import { useTranslations } from "@/i18n/use-translations";
import type { FoodPlace } from "@/types/food";

type FoodCardProps = {
  place: FoodPlace;
};

export default function FoodCard({ place }: FoodCardProps) {
  const { t } = useTranslations();

  return (
    <article className="flex w-[280px] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-md sm:w-[300px] lg:w-full lg:shrink">
      <div className="relative aspect-[4/3] w-full">
        <Image
          src={place.image}
          alt={place.name}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 300px, 25vw"
        />

        <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-miami-coral px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white sm:text-xs">
          <PinIcon />
          {place.area}
        </span>

        <span className="absolute right-3 top-3 rounded-full bg-white/95 px-2 py-1 text-xs font-bold text-slate-700 shadow-sm">
          {place.price}
        </span>

        <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5">
          {place.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-white/95 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-slate-700 shadow-sm sm:text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-2.5 p-4">
        <div>
          <h3 className="text-lg font-bold text-miami-ocean">{place.name}</h3>
          <p className="mt-1 flex items-center gap-1.5 text-xs font-medium text-miami-teal sm:text-sm">
            {place.commuteType === "walk" ? <WalkIcon /> : <CarIcon />}
            {place.commuteLabel}
          </p>
        </div>

        <p className="text-sm leading-relaxed text-slate-600">
          {place.description}
        </p>

        <p className="text-sm text-slate-600">
          <span className="font-bold uppercase tracking-wide text-miami-ocean">
            {t.food.recommended}{" "}
          </span>
          {place.recommended}
        </p>

        <a
          href={place.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex w-full items-center justify-center gap-2 rounded-xl bg-orange-50 px-4 py-2.5 text-sm font-semibold text-miami-coral transition-colors hover:bg-orange-100"
        >
          <MapIcon />
          {t.food.getDirections}
        </a>
      </div>
    </article>
  );
}

function PinIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3" aria-hidden>
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    </svg>
  );
}

function WalkIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 shrink-0" aria-hidden>
      <path d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9 7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-2.2 0-4.2-1.2-5.2-3.1l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6l1.8-.7" />
    </svg>
  );
}

function CarIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 shrink-0" aria-hidden>
      <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
    </svg>
  );
}

function MapIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
      <path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z" />
    </svg>
  );
}

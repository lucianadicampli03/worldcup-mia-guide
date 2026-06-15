"use client";

import Image from "next/image";
import ExplorePlaceOverview from "@/components/ExplorePlaceOverview";
import WeatherWidget from "@/components/WeatherWidget";
import { useTranslations } from "@/i18n/use-translations";
import type { ExplorePlace } from "@/types/explore";

type ExploreCardProps = {
  place: ExplorePlace;
  onExploreOptions: () => void;
};

export default function ExploreCard({ place, onExploreOptions }: ExploreCardProps) {
  const { t } = useTranslations();

  return (
    <article className="smooth-card flex flex-col overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-md sm:rounded-2xl">
      <div className="relative aspect-[4/3] w-full sm:aspect-[16/10]">
        <Image
          src={place.image}
          alt={place.name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
        />
        <WeatherWidget
          placeName={place.name}
          latitude={place.latitude}
          longitude={place.longitude}
          compact
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent sm:from-black/40 sm:via-transparent sm:to-transparent" />
        <p className="absolute bottom-2.5 left-2.5 right-2.5 text-sm font-bold leading-tight text-white sm:hidden">
          {place.name}
        </p>
        <a
          href={place.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${t.explore.openInMaps}: ${place.name}`}
          className="absolute bottom-3 right-3 hidden h-9 w-9 items-center justify-center rounded-full bg-white shadow-md transition-transform hover:scale-105 sm:flex"
          onClick={(event) => event.stopPropagation()}
        >
          <Image src="/globe.svg" alt="" width={18} height={18} aria-hidden />
        </a>
      </div>

      {/* Mobile tile body */}
      <button
        type="button"
        onClick={onExploreOptions}
        className="smooth-btn w-full p-2.5 text-left sm:hidden"
      >
        <p className="line-clamp-2 text-[11px] leading-snug text-slate-600">
          {place.description}
        </p>
        <span className="mt-2 inline-flex items-center gap-1 text-[11px] font-bold text-miami-ocean">
          {t.explore.exploreOptions}
          <ArrowIcon />
        </span>
      </button>

      {/* Desktop full body */}
      <div className="hidden flex-1 flex-col p-4 sm:flex sm:p-5">
        <ExplorePlaceOverview place={place} />

        <button
          type="button"
          onClick={onExploreOptions}
          className="smooth-btn mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-miami-ocean px-4 py-2.5 text-sm font-semibold text-white hover:bg-miami-teal"
        >
          <SearchIcon />
          {t.explore.exploreOptions}
        </button>
      </div>
    </article>
  );
}

function ArrowIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3" aria-hidden>
      <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
      <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
    </svg>
  );
}

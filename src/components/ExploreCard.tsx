"use client";

import Image from "next/image";
import WeatherWidget from "@/components/WeatherWidget";
import { useTranslations } from "@/i18n/use-translations";
import type { ExplorePlace } from "@/types/explore";

type ExploreCardProps = {
  place: ExplorePlace;
  onExploreOptions: () => void;
};

const downtownDirections = (destination: string) =>
  `https://www.google.com/maps/dir/?api=1&origin=Bayfront+Park+Miami&destination=${encodeURIComponent(destination)}`;

const stadiumDirections = (destination: string) =>
  `https://www.google.com/maps/dir/?api=1&origin=Hard+Rock+Stadium+Miami+Gardens&destination=${encodeURIComponent(destination)}`;

export default function ExploreCard({ place, onExploreOptions }: ExploreCardProps) {
  const { t } = useTranslations();

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-md">
      <div className="relative aspect-[16/10] w-full">
        <Image
          src={place.image}
          alt={place.name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <WeatherWidget
          placeName={place.name}
          latitude={place.latitude}
          longitude={place.longitude}
        />
        <a
          href={place.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${t.explore.openInMaps}: ${place.name}`}
          className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md transition-transform hover:scale-105"
        >
          <Image src="/globe.svg" alt="" width={18} height={18} aria-hidden />
        </a>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4 sm:p-5">
        <div>
          <h3 className="text-xl font-bold text-miami-ocean">{place.name}</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
            {place.description}
          </p>
        </div>

        <div className="rounded-xl bg-slate-100 p-3.5 text-sm leading-relaxed text-slate-700">
          <p className="text-xs font-bold uppercase tracking-wide text-miami-coral">
            {t.explore.insiderHack}
          </p>
          <p className="mt-1">{place.insiderTip}</p>
        </div>

        <div className="rounded-xl bg-slate-100 p-3.5 text-sm leading-relaxed text-slate-700">
          <p className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-miami-ocean">
            <CarIcon />
            {t.explore.commuteFromStadium}
          </p>
          <p className="mt-1.5">{place.commuteFromStadium}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            <a
              href={downtownDirections(place.name + " Miami")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700 transition-colors hover:border-miami-teal hover:text-miami-ocean"
            >
              <PinIcon />
              {t.explore.fromDowntown}
            </a>
            <a
              href={stadiumDirections(place.name + " Miami")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700 transition-colors hover:border-miami-teal hover:text-miami-ocean"
            >
              <PinIcon />
              {t.explore.fromStadium}
            </a>
          </div>
        </div>

        <p className="flex items-start gap-1.5 text-sm text-slate-600">
          <ShieldIcon />
          <span>
            <span className="font-semibold text-miami-teal">{t.explore.safety} </span>
            {place.safety}
          </span>
        </p>

        <button
          type="button"
          onClick={onExploreOptions}
          className="mt-auto inline-flex w-full items-center justify-center gap-2 rounded-full bg-miami-ocean px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-miami-teal"
        >
          <SearchIcon />
          {t.explore.exploreOptions}
        </button>
      </div>
    </article>
  );
}

function CarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 shrink-0"
      aria-hidden
    >
      <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-3 w-3 text-miami-coral"
      aria-hidden
    >
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="mt-0.5 h-4 w-4 shrink-0 text-miami-teal"
      aria-hidden
    >
      <path d="M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4"
      aria-hidden
    >
      <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
    </svg>
  );
}

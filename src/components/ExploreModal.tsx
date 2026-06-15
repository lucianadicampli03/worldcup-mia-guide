"use client";

import Image from "next/image";
import { useEffect } from "react";
import { useTranslations } from "@/i18n/use-translations";
import type { ExploreCategory, ExplorePlace } from "@/types/explore";

type ExploreModalProps = {
  place: ExplorePlace | null;
  onClose: () => void;
};

export default function ExploreModal({ place, onClose }: ExploreModalProps) {
  const { t } = useTranslations();

  useEffect(() => {
    if (!place) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [place, onClose]);

  if (!place) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="explore-modal-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        aria-label={t.explore.closeModal}
      />

      <div className="relative z-10 max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-100 bg-white px-5 py-4 sm:px-6">
          <h2
            id="explore-modal-title"
            className="text-2xl font-bold text-miami-ocean sm:text-3xl"
          >
            {place.name}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-800"
            aria-label={t.explore.closeModal}
          >
            <CloseIcon />
          </button>
        </div>

        <div className="space-y-6 px-5 py-5 sm:space-y-8 sm:px-6 sm:py-6">
          {place.categories.map((category) => (
            <CategoryBlock key={category.id} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
}

function CategoryBlock({ category }: { category: ExploreCategory }) {
  return (
    <section>
      <h3 className="flex items-center gap-2 text-lg font-bold text-miami-ocean">
        <CategoryIcon id={category.id} />
        {category.title}
      </h3>

      <div className="mt-3 grid grid-cols-2 gap-3">
        {category.spots.map((spot) => (
          <a
            key={spot.name}
            href={spot.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative aspect-[4/3] overflow-hidden rounded-xl"
          >
            <Image
              src={spot.image}
              alt={spot.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 640px) 45vw, 280px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
            <p className="absolute bottom-3 left-3 right-3 text-sm font-bold leading-tight text-white sm:text-base">
              {spot.name}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}

function CategoryIcon({ id }: { id: ExploreCategory["id"] }) {
  const className = "h-5 w-5 shrink-0 text-miami-ocean";

  if (id === "culture") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
        <path d="M12 3 1 9l11 6 9-4.91V17h2V9L12 3zm0 11.5L5.5 9.5 12 6l6.5 3.5L12 14.5zM3 17v2h18v-2H3z" />
      </svg>
    );
  }

  if (id === "dining") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
        <path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z" />
      </svg>
    );
  }

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M6 3h12v2H6V3zm0 4h12v2H6V7zm0 4h8v2H6v-2zm-2 8c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4H4v4z" />
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

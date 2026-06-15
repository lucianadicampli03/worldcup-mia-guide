"use client";

import { useTranslations } from "@/i18n/use-translations";
import type { TransitOption } from "@/types/transit";

type TransitCardProps = {
  option: TransitOption;
  featured?: boolean;
};

export default function TransitCard({ option, featured }: TransitCardProps) {
  const { t } = useTranslations();
  const isFree = option.price.toUpperCase().includes("FREE");

  return (
    <article
      className={`flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-md ${
        featured ? "lg:col-span-2" : ""
      }`}
    >
      <div className="border-b border-slate-100 bg-gradient-to-r from-miami-ocean to-miami-teal px-5 py-4 text-white">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-xl font-bold">{option.name}</h3>
            <p className="mt-0.5 text-sm text-white/90">{option.tagline}</p>
          </div>
          <span
            className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-bold uppercase tracking-wide ${
              isFree ? "bg-miami-coral text-white" : "bg-white/20 text-white"
            }`}
          >
            {isFree ? t.transit.free : option.price.split("—")[0].trim()}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5">
        <p className="text-sm leading-relaxed text-slate-600">{option.description}</p>

        <div className="rounded-xl bg-miami-sand p-3.5 text-sm text-slate-700">
          <span className="font-bold uppercase tracking-wide text-miami-coral">
            {t.transit.fanTip}{" "}
          </span>
          {option.fanTip}
        </div>

        <ul className="flex flex-wrap gap-2">
          {option.highlights.map((stop) => (
            <li
              key={stop}
              className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700"
            >
              {stop}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap gap-2">
          {option.mapUrl && (
            <a
              href={option.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-miami-ocean px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-miami-teal"
            >
              <MapIcon />
              {option.mapLabel ?? t.transit.viewMap}
            </a>
          )}
          <a
            href={option.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-miami-ocean transition-colors hover:border-miami-teal hover:bg-miami-sand"
          >
            <LinkIcon />
            {option.websiteLabel}
          </a>
        </div>
      </div>
    </article>
  );
}

function MapIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
      <path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z" />
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
      <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
    </svg>
  );
}

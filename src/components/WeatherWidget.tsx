"use client";

import { useEffect, useState } from "react";

type WeatherWidgetProps = {
  placeName: string;
  latitude: number;
  longitude: number;
};

type WeatherState =
  | { status: "loading" }
  | { status: "error" }
  | { status: "success"; temperature: number; code: number };

function weatherUrl(latitude: number, longitude: number) {
  return `https://weather.com/weather/today/l/${latitude},${longitude}`;
}

export default function WeatherWidget({
  placeName,
  latitude,
  longitude,
}: WeatherWidgetProps) {
  const [weather, setWeather] = useState<WeatherState>({ status: "loading" });
  const forecastUrl = weatherUrl(latitude, longitude);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchWeather() {
      try {
        const url = new URL("https://api.open-meteo.com/v1/forecast");
        url.searchParams.set("latitude", String(latitude));
        url.searchParams.set("longitude", String(longitude));
        url.searchParams.set("current", "temperature_2m,weather_code");
        url.searchParams.set("temperature_unit", "fahrenheit");
        url.searchParams.set("timezone", "America/New_York");

        const response = await fetch(url.toString(), {
          signal: controller.signal,
        });

        if (!response.ok) throw new Error("Weather fetch failed");

        const data = await response.json();

        setWeather({
          status: "success",
          temperature: Math.round(data.current.temperature_2m),
          code: data.current.weather_code,
        });
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") return;
        setWeather({ status: "error" });
      }
    }

    fetchWeather();

    return () => controller.abort();
  }, [latitude, longitude]);

  if (weather.status === "error") return null;

  return (
    <a
      href={forecastUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1.5 text-xs font-semibold text-slate-700 shadow-md backdrop-blur-sm transition-transform hover:scale-105 sm:px-3 sm:py-2 sm:text-sm"
      aria-label={
        weather.status === "success"
          ? `Weather in ${placeName}: ${weather.temperature} degrees Fahrenheit. Open forecast.`
          : `Loading weather for ${placeName}`
      }
    >
      {weather.status === "loading" ? (
        <span className="h-4 w-14 animate-pulse rounded-full bg-slate-200" />
      ) : (
        <>
          <WeatherIcon code={weather.code} />
          <span>{weather.temperature}°F</span>
          <ChevronIcon />
        </>
      )}
    </a>
  );
}

function WeatherIcon({ code }: { code: number }) {
  const className = "h-4 w-4 shrink-0 text-miami-ocean";

  if (code === 0) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
        <path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.8 1.42-1.42zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zm-3.21 13.7 1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.45zm-7.45-3.91 1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8z" />
      </svg>
    );
  }

  if (code <= 3) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
        <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
      </svg>
    );
  }

  if (code >= 51 && code <= 67) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
        <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 17H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h.71C7.37 7.69 9.48 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H18c1.66 0 3 1.34 3 3s-1.34 3-3 3h-4z" />
      </svg>
    );
  }

  if (code >= 80) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
        <path d="M17.66 8 11 14.66 8.34 12l-6 6 1.41 1.41L8.34 14.66 11 17.32l8.66-8.66L17.66 8z" />
      </svg>
    );
  }

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5 text-slate-400" aria-hidden>
      <path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
    </svg>
  );
}

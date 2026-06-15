"use client";

import { useLocale } from "@/i18n/LocaleProvider";

export function useTranslations() {
  const { dict, locale, setLocale } = useLocale();
  return { t: dict.ui, dict, locale, setLocale };
}

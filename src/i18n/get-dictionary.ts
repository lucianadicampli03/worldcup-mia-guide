import { enDictionary } from "@/i18n/dictionaries/en";
import { esDictionary } from "@/i18n/dictionaries/es";
import { frDictionary } from "@/i18n/dictionaries/fr";
import { ptDictionary } from "@/i18n/dictionaries/pt";
import type { Dictionary, Locale } from "@/i18n/types";

const dictionaries: Record<Locale, Dictionary> = {
  en: enDictionary,
  es: esDictionary,
  fr: frDictionary,
  pt: ptDictionary,
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.en;
}

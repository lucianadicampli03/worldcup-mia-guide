import type { SurvivalData } from "@/types/survival";
import type { TransitOption } from "@/types/transit";

export const LOCALES = ["en", "es", "fr", "pt"] as const;
export type Locale = (typeof LOCALES)[number];

export type ExplorePlaceOverlay = {
  description: string;
  insiderTip: string;
  commuteFromStadium: string;
  safety: string;
};

export type FoodPlaceOverlay = {
  area?: string;
  tags?: string[];
  description: string;
  recommended: string;
  commuteLabel: string;
};

export type TransitData = {
  title: string;
  subtitle: string;
  matchDayNote: string;
  options: TransitOption[];
  footerMapsFrom: string;
  miamiDadeTransit: string;
  brightlineMiamiCentral: string;
};

export type AssistantSuggestion = {
  icon: string;
  text: string;
  reply: string;
  href: string;
};

export type TermsSection = {
  title: string;
  body: string;
  accent: "ocean" | "red";
};

export type UIStrings = {
  nav: {
    explore: string;
    food: string;
    survival: string;
    transit: string;
    assistant: string;
    changeLanguage: string;
    openMenu: string;
    closeMenu: string;
  };
  hero: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    cta: string;
    mascotAlt: string;
  };
  explore: {
    title: string;
    subtitle: string;
    insiderHack: string;
    commuteFromStadium: string;
    fromDowntown: string;
    fromStadium: string;
    safety: string;
    exploreOptions: string;
    openInMaps: string;
    closeModal: string;
  };
  food: {
    title: string;
    subtitle: string;
    recommended: string;
    getDirections: string;
  };
  survival: {
    title: string;
    subtitle: string;
    usefulPhrases: string;
    proTravelTip: string;
    gettingAround: string;
    emergency: string;
  };
  transit: {
    fanTip: string;
    free: string;
    viewMap: string;
  };
  footer: {
    title: string;
    forCrew: string;
    description: string;
    sections: string;
    support: string;
    emergencies: string;
    police: string;
    visitorInfo: string;
    copyright: string;
    internalTerms: string;
  };
  assistant: {
    greeting: string;
    name: string;
    aiOnline: string;
    closeAssistant: string;
    openAssistant: string;
    dialogLabel: string;
    thinking: string;
    thinkingPlaceholder: string;
    typePlaceholder: string;
    sendMessage: string;
    disclaimer: string;
    fallbackReply: string;
    errorGeneric: string;
    errorApi: string;
    teaserMessage: string;
    dismissTeaser: string;
    sectionLabels: Record<string, string>;
  };
  terms: {
    title: string;
    understood: string;
    close: string;
    closeAria: string;
    sections: TermsSection[];
  };
  weather: {
    loading: string;
    error: string;
    ariaLabel: string;
  };
  categoryTitles: {
    culture: string;
    dining: string;
    nightlife: string;
  };
};

export type Dictionary = {
  locale: Locale;
  ui: UIStrings;
  explore: Record<string, ExplorePlaceOverlay>;
  food: Record<string, FoodPlaceOverlay>;
  survival: SurvivalData;
  transit: TransitData;
  assistant: {
    suggestions: AssistantSuggestion[];
    greeting: string;
  };
};

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

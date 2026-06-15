import type { Dictionary } from "@/i18n/types";
import type { ExplorePlace } from "@/types/explore";
import type { FoodPlace } from "@/types/food";

export function localizeExplorePlaces(
  places: ExplorePlace[],
  dict: Dictionary
): ExplorePlace[] {
  return places.map((place) => {
    const overlay = dict.explore[place.id];
    if (!overlay) return place;

    return {
      ...place,
      description: overlay.description,
      insiderTip: overlay.insiderTip,
      commuteFromStadium: overlay.commuteFromStadium,
      safety: overlay.safety,
      categories: place.categories.map((category) => ({
        ...category,
        title: dict.ui.categoryTitles[category.id],
      })),
    };
  });
}

export function localizeFoodPlaces(
  places: FoodPlace[],
  dict: Dictionary
): FoodPlace[] {
  return places.map((place) => {
    const overlay = dict.food[place.id];
    if (!overlay) return place;

    return {
      ...place,
      area: overlay.area ?? place.area,
      tags: overlay.tags ?? place.tags,
      description: overlay.description,
      recommended: overlay.recommended,
      commuteLabel: overlay.commuteLabel,
    };
  });
}

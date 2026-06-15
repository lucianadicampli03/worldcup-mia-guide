export type ExploreSpot = {
  name: string;
  image: string;
  mapsUrl: string;
};

export type ExploreCategory = {
  id: "culture" | "dining" | "nightlife";
  title: string;
  spots: ExploreSpot[];
};

export type ExplorePlace = {
  id: string;
  name: string;
  description: string;
  insiderTip: string;
  commuteFromStadium: string;
  safety: string;
  image: string;
  mapsUrl: string;
  latitude: number;
  longitude: number;
  categories: ExploreCategory[];
};

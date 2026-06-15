export type FoodPlace = {
  id: string;
  name: string;
  area: string;
  tags: string[];
  price: "$" | "$$" | "$$$";
  description: string;
  recommended: string;
  commuteLabel: string;
  commuteType: "walk" | "car";
  image: string;
  mapsUrl: string;
};

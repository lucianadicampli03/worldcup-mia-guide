export type SurvivalPhrase = {
  spanish: string;
  english: string;
  tag: string;
};

export type SurvivalLink = {
  name: string;
  description: string;
  url: string;
};

export type SurvivalData = {
  phrases: SurvivalPhrase[];
  proTip: {
    title: string;
    body: string;
  };
  gettingAround: {
    title: string;
    description: string;
    links: SurvivalLink[];
  };
};

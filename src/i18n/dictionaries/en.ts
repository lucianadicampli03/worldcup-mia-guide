import exploreData from "@/data/explore.json";
import foodData from "@/data/food.json";
import survivalData from "@/data/survival.json";
import transitData from "@/data/transit.json";
import type { Dictionary } from "@/i18n/types";
import type { ExplorePlace } from "@/types/explore";
import type { FoodPlace } from "@/types/food";
import type { SurvivalData } from "@/types/survival";
import type { TransitOption } from "@/types/transit";

const explore = exploreData as ExplorePlace[];
const food = foodData as FoodPlace[];
const survival = survivalData as SurvivalData;
const transit = transitData as {
  title: string;
  subtitle: string;
  matchDayNote: string;
  options: TransitOption[];
};

export const enDictionary: Dictionary = {
  locale: "en",
  ui: {
    nav: {
      explore: "Explore",
      food: "Food",
      survival: "Survival Guide",
      transit: "Transit",
      assistant: "Assistant",
      changeLanguage: "Change language",
    },
    hero: {
      badge: "FIFA World Cup 2026™ — Miami Stadium",
      titleLine1: "THE HEAT OF THE GAME.",
      titleLine2: "THE SOUL OF MIAMI.",
      subtitle:
        "Football on the world stage, turquoise water, Cuban coffee, art alleys, and nonstop Miami energy — your guide to the city during World Cup 2026.",
      cta: "Explore Miami →",
      mascotAlt: "Clutch — World Cup 2026 mascot",
    },
    explore: {
      title: "Discover Miami",
      subtitle:
        "Experience the best of Miami without losing a whole day. Curated neighborhoods for fans who want the local vibe between matches.",
      insiderHack: "Insider hack:",
      commuteFromStadium: "Commute from Hard Rock Stadium:",
      fromDowntown: "From Downtown",
      fromStadium: "From Stadium",
      safety: "Safety:",
      exploreOptions: "Explore Options",
      openInMaps: "Open in Google Maps",
      closeModal: "Close",
    },
    food: {
      title: "A Gastronomic World Cup",
      subtitle:
        "Miami is a global food city — Cuban cafés, stone crab, Wynwood tacos, and late-night local spots. Your palate is in for a win.",
      recommended: "Recommended:",
      getDirections: "Get directions",
    },
    survival: {
      title: "Survival Guide",
      subtitle: "Navigate Miami like a pro during the tournament.",
      usefulPhrases: "Useful Phrases",
      proTravelTip: "Pro Travel Tip",
      gettingAround: "Getting Around Miami",
      emergency: "Emergency:",
    },
    transit: {
      fanTip: "Fan tip:",
      free: "Free",
      viewMap: "View map",
    },
    footer: {
      title: "Discover Miami 26",
      forCrew: "For Crew",
      description:
        "Internal digital portal for the crew operating at Hard Rock Stadium during the 2026 FIFA World Cup™.",
      sections: "Sections",
      support: "Support",
      emergencies: "Emergencies: 911",
      police: "Miami-Dade Police (non-emergency): 305-476-5423",
      visitorInfo: "Greater Miami Visitor Information",
      copyright:
        "© 2026 Host Broadcast Services (HBS). Internal and confidential tool.",
      internalTerms: "Internal Terms of Use",
    },
    assistant: {
      greeting:
        "What's up! I'm Clutch™, America's World Cup 2026 mascot. How can I help you live Miami to the fullest? 🦅⚽",
      name: "Clutch™",
      aiOnline: "AI Online",
      closeAssistant: "Close assistant",
      openAssistant: "Open assistant",
      dialogLabel: "Miami World Cup assistant",
      thinking: "Clutch is thinking",
      thinkingPlaceholder: "Clutch is thinking...",
      typePlaceholder: "Type your question...",
      sendMessage: "Send message",
      disclaimer:
        "Chips are curated. Typed answers use AI and can make mistakes — always verify routes and safety with your crew lead.",
      fallbackReply:
        "I'm not sure about that one — check Explore, Food, Survival, or Transit on this page.",
      errorGeneric: "Something went wrong. Try again or tap a suggestion chip.",
      errorApi: "Clutch couldn't answer right now.",
      sectionLabels: {
        explore: "Explore",
        food: "Food",
        survival: "Survival Guide",
        transit: "Transit",
        assistant: "Assistant",
      },
    },
    terms: {
      title: "Terms of Use and Legal Confidentiality Notice",
      understood: "Understood",
      close: "Close",
      closeAria: "Close terms of use",
      sections: [
        {
          title: "1. Operational Confidentiality and Security Logistics",
          body: `This platform contains sensitive information regarding the operational logistics of Host Broadcast Services (HBS) at the Miami (Hard Rock Stadium) venue for the FIFA World Cup 2026™. Data concerning crew accommodation areas, downtown transit corridors, and travel times between hotels, the stadium, and broadcast facilities is strictly confidential.`,
          accent: "ocean",
        },
        {
          title: "2. Intellectual Property and Trademark Use",
          body: `All names, logos, and trademarks — including "FIFA World Cup 2026™", the Hard Rock Stadium brand, and the official mascot "Clutch™" — are the exclusive property of FIFA and their respective rights holders. Their use in this application is strictly for the internal coordination of the HBS crew.`,
          accent: "ocean",
        },
        {
          title: "3. Disclaimer: AI Virtual Assistant (Clutch™)",
          body: `The "Clutch™" virtual assistant uses AI technology to provide suggestions about the city. These responses are not official directives; personnel must verify critical information with their supervisors. HBS is not responsible for any inaccuracies generated by the AI.`,
          accent: "ocean",
        },
        {
          title: "4. Third-Party Recommendations and Personal Safety",
          body: `The "Explore Miami" and "A Gastronomic World Cup" sections are for guidance during free time. HBS has no commercial affiliation with the restaurants, bars, or venues mentioned. Mobility suggestions may reference third-party apps such as Uber or Lyft. In case of emergency, dial 911. For non-emergency police assistance in Miami-Dade County, call 305-476-5423.`,
          accent: "ocean",
        },
        {
          title: "5. Prohibition of Disclosure (NDA)",
          body: `By using this tool, you agree not to take screenshots, record the interface, or share links to this application on social media or with individuals not involved in HBS operations.`,
          accent: "red",
        },
      ],
    },
    weather: {
      loading: "…",
      error: "—",
      ariaLabel: "Weather forecast",
    },
    categoryTitles: {
      culture: "Museums & Culture",
      dining: "Dining & Restaurants",
      nightlife: "Bars & Nightlife",
    },
  },
  explore: Object.fromEntries(
    explore.map((place) => [
      place.id,
      {
        description: place.description,
        insiderTip: place.insiderTip,
        commuteFromStadium: place.commuteFromStadium,
        safety: place.safety,
      },
    ])
  ),
  food: Object.fromEntries(
    food.map((place) => [
      place.id,
      {
        area: place.area,
        tags: place.tags,
        description: place.description,
        recommended: place.recommended,
        commuteLabel: place.commuteLabel,
      },
    ])
  ),
  survival,
  transit: {
    ...transit,
    footerMapsFrom: "Official maps from",
    miamiDadeTransit: "Miami-Dade Transit",
    brightlineMiamiCentral: "Brightline MiamiCentral",
  },
  assistant: {
    greeting:
      "What's up! I'm Clutch™, America's World Cup 2026 mascot. How can I help you live Miami to the fullest? 🦅⚽",
    suggestions: [
      {
        icon: "food",
        text: "What Miami dishes can't I miss?",
        reply:
          "Start with a Cuban sandwich and cafecito in Little Havana — Versailles is the classic. For stone crab, Joe's in South Beach is legendary. Check our Food section for more!",
        href: "#food",
      },
      {
        icon: "explore",
        text: "What neighborhoods should I see?",
        reply:
          "South Beach for Art Deco, Wynwood for street art, Little Havana for culture, and Bayfront Park for the Fan Festival. Tap Explore to browse all nine areas.",
        href: "#explore",
      },
      {
        icon: "party",
        text: "Where's the World Cup fan fest?",
        reply:
          "The official FIFA Fan Festival is at Bayfront Park downtown — big screens, food, and live music on Biscayne Bay. Metromover gets you close for free!",
        href: "#explore",
      },
      {
        icon: "map",
        text: "How do I get around downtown?",
        reply:
          "Metromover is FREE and loops through Brickell, Bayfront, and Bayside. For the stadium, use Uber/Lyft. See our Transit section for maps and links.",
        href: "#transit",
      },
    ],
  },
};

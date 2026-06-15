import type { Dictionary } from "@/i18n/types";

export const ptDictionary: Dictionary = {
  locale: "pt",
  ui: {
    nav: {
      explore: "Explorar",
      food: "Gastronomia",
      survival: "Guia de sobrevivência",
      transit: "Transporte",
      assistant: "Assistente",
      changeLanguage: "Mudar idioma",
      openMenu: "Abrir menu",
      closeMenu: "Fechar menu",
    },
    hero: {
      badge: "Copa do Mundo FIFA 2026™ — Estádio de Miami",
      titleLine1: "O CALOR DO JOGO.",
      titleLine2: "A ALMA DE MIAMI.",
      subtitle:
        "Futebol no palco mundial, água turquesa, café cubano, becos de arte e a energia ininterrupta de Miami — seu guia da cidade durante a Copa do Mundo 2026.",
      cta: "Explorar Miami →",
      mascotAlt: "Clutch — mascote da Copa do Mundo 2026",
    },
    explore: {
      title: "Descubra Miami",
      subtitle:
        "Viva o melhor de Miami sem perder um dia inteiro. Bairros selecionados para torcedores que querem o clima local entre os jogos.",
      insiderHack: "Dica local:",
      commuteFromStadium: "Trajeto do Hard Rock Stadium:",
      fromDowntown: "Do centro",
      fromStadium: "Do estádio",
      safety: "Segurança:",
      exploreOptions: "Opções para explorar",
      openInMaps: "Abrir no Google Maps",
      closeModal: "Fechar",
    },
    food: {
      title: "Uma Copa do Mundo gastronômica",
      subtitle:
        "Miami é uma cidade gastronômica global — cafés cubanos, caranguejo de pedra, tacos de Wynwood e locais noturnos. Seu paladar vai ganhar.",
      recommended: "Recomendado:",
      getDirections: "Como chegar",
    },
    survival: {
      title: "Guia de sobrevivência",
      subtitle: "Navegue Miami como um profissional durante o torneio.",
      usefulPhrases: "Frases úteis",
      proTravelTip: "Dica de viagem pro",
      gettingAround: "Locomoção em Miami",
      emergency: "Emergências:",
    },
    transit: {
      fanTip: "Dica para torcedores:",
      free: "Grátis",
      viewMap: "Ver mapa",
    },
    footer: {
      title: "Discover Miami 26",
      forCrew: "Para a equipe",
      description:
        "Portal digital interno para a equipe que opera no Hard Rock Stadium durante a Copa do Mundo FIFA 2026™.",
      sections: "Seções",
      support: "Suporte",
      emergencies: "Emergências: 911",
      police: "Polícia de Miami-Dade (não urgente): 305-476-5423",
      visitorInfo: "Informações turísticas do Grande Miami",
      copyright:
        "© 2026 Host Broadcast Services (HBS). Ferramenta interna e confidencial.",
      internalTerms: "Termos de uso internos",
    },
    assistant: {
      greeting:
        "E aí! Sou o Clutch™, mascote da Copa do Mundo 2026 nas Américas. Como posso ajudar você a viver Miami ao máximo? 🦅⚽",
      name: "Clutch™",
      aiOnline: "IA online",
      closeAssistant: "Fechar assistente",
      openAssistant: "Abrir assistente",
      dialogLabel: "Assistente Copa do Mundo Miami",
      thinking: "Clutch está pensando",
      thinkingPlaceholder: "Clutch está pensando...",
      typePlaceholder: "Digite sua pergunta...",
      sendMessage: "Enviar mensagem",
      disclaimer:
        "As sugestões são curadas. Respostas digitadas usam IA e podem conter erros — sempre verifique rotas e segurança com seu líder de equipe.",
      fallbackReply:
        "Não tenho certeza sobre isso — confira Explorar, Gastronomia, Sobrevivência ou Transporte nesta página.",
      errorGeneric: "Algo deu errado. Tente de novo ou toque em uma sugestão.",
      errorApi: "Clutch não conseguiu responder agora.",
      teaserMessage:
        "E aí! 🦅 Dúvidas sobre a Copa em Miami? Fala comigo!",
      dismissTeaser: "Fechar mensagem",
      sectionLabels: {
        explore: "Explorar",
        food: "Gastronomia",
        survival: "Guia de sobrevivência",
        transit: "Transporte",
        assistant: "Assistente",
      },
    },
    terms: {
      title: "Termos de uso e aviso legal de confidencialidade",
      understood: "Entendido",
      close: "Fechar",
      closeAria: "Fechar termos de uso",
      sections: [
        {
          title: "1. Confidencialidade operacional e logística de segurança",
          body: `Esta plataforma contém informações sensíveis sobre a logística operacional da Host Broadcast Services (HBS) no local de Miami (Hard Rock Stadium) para a Copa do Mundo FIFA 2026™. Dados sobre áreas de hospedagem da equipe, corredores de trânsito do centro e tempos de viagem entre hotéis, estádio e instalações de transmissão são estritamente confidenciais.`,
          accent: "ocean",
        },
        {
          title: "2. Propriedade intelectual e uso de marcas registradas",
          body: `Todos os nomes, logotipos e marcas — incluindo "Copa do Mundo FIFA 2026™", a marca Hard Rock Stadium e o mascote oficial "Clutch™" — são propriedade exclusiva da FIFA e seus respectivos titulares. Seu uso nesta aplicação é estritamente para a coordenação interna da equipe HBS.`,
          accent: "ocean",
        },
        {
          title: "3. Aviso legal: assistente virtual com IA (Clutch™)",
          body: `O assistente virtual "Clutch™" usa tecnologia de IA para fornecer sugestões sobre a cidade. Essas respostas não são diretivas oficiais; o pessoal deve verificar informações críticas com seus supervisores. A HBS não se responsabiliza por imprecisões geradas pela IA.`,
          accent: "ocean",
        },
        {
          title: "4. Recomendações de terceiros e segurança pessoal",
          body: `As seções "Descubra Miami" e "Uma Copa do Mundo gastronômica" servem de orientação no tempo livre. A HBS não tem afiliação comercial com os restaurantes, bares ou locais mencionados. Sugestões de mobilidade podem referenciar aplicativos de terceiros como Uber ou Lyft. Em caso de emergência, ligue para o 911. Para assistência policial não urgente no condado de Miami-Dade, ligue para 305-476-5423.`,
          accent: "ocean",
        },
        {
          title: "5. Proibição de divulgação (NDA)",
          body: `Ao usar esta ferramenta, você concorda em não tirar capturas de tela, gravar a interface nem compartilhar links desta aplicação em redes sociais ou com pessoas não envolvidas nas operações da HBS.`,
          accent: "red",
        },
      ],
    },
    weather: {
      loading: "…",
      error: "—",
      ariaLabel: "Previsão do tempo",
    },
    categoryTitles: {
      culture: "Museus e cultura",
      dining: "Restaurantes e gastronomia",
      nightlife: "Bares e vida noturna",
    },
  },
  explore: {
    "south-beach": {
      description:
        "Ruas Art Déco, Ocean Drive e a praia — o skyline cartão-postal de Miami.",
      insiderTip:
        "Evite os cafés mais movimentados da Ocean Drive. Caminhe um quarteirão para o interior na Collins para comida melhor e filas menores.",
      commuteFromStadium:
        "Cerca de 45–60 min de carro pela I-95. Saia cedo nos dias de jogo — o trânsito acumula rápido.",
      safety:
        "Área muito turística e patrulhada; cuide dos seus pertences na praia.",
    },
    wynwood: {
      description:
        "Murais de arte de rua, galerias e bares em antigos armazéns — o distrito criativo de Miami.",
      insiderTip:
        "Visite Wynwood Walls cedo de manhã para fotos sem multidões, depois tome um café na NW 2nd Ave antes da agitação noturna.",
      commuteFromStadium:
        "Cerca de 35–50 min de carro. Uber é mais fácil que estacionar — os estacionamentos lotam nos fins de semana.",
      safety:
        "Geralmente seguro e movimentado; fique nas ruas principais bem iluminadas à noite.",
    },
    "design-district": {
      description:
        "Moda de luxo, arte contemporânea e praças projetadas por arquitetos — o corredor criativo de alto padrão de Miami ao norte de Wynwood.",
      insiderTip:
        "Comece no Palm Court para arte pública e arquitetura, depois caminhe pela NE 41st St pelas lojas flagship. As manhãs de semana são as mais tranquilas para fotos.",
      commuteFromStadium:
        "Cerca de 35–50 min de carro. Estacionamento na rua é limitado — use os estacionamentos do Design District ou transporte por aplicativo.",
      safety:
        "Área sofisticada e bem patrulhada; movimentada durante eventos e compras de fim de semana.",
    },
    "little-havana": {
      description:
        "Cultura cubana na Calle Ocho — parques de dominó, música ao vivo e cafecito em cada esquina.",
      insiderTip:
        "Comece no Domino Park, depois caminhe até Versailles para um sanduíche cubano. Evite as lojas de souvenirs da rua principal.",
      commuteFromStadium:
        "Cerca de 40–55 min de carro pela Palmetto ou I-95. Estacionamento na rua é difícil — use um estacionamento na SW 8th St.",
      safety:
        "Acolhedor e animado; atenção urbana normal à noite.",
    },
    brickell: {
      description:
        "Torres de vidro, bares em rooftops e vistas da Biscayne Bay — o centro financeiro de Miami.",
      insiderTip:
        "Happy hour em um rooftop vale mais que um jantar caro. Brickell City Centre é seu refúgio com ar-condicionado nas tardes quentes.",
      commuteFromStadium:
        "Cerca de 30–45 min de carro. O Metromover é grátis no centro se você estacionar na periferia e subir nele.",
      safety:
        "Muito seguro e bem iluminado; movimentado nos dias de semana, mais tranquilo nos fins de semana.",
    },
    bayside: {
      description:
        "Lojas à beira-mar, música ao vivo e cruzeiros pela baía a passos do centro — turístico mas divertido, bem ao lado do Bayfront Park.",
      insiderTip:
        "Evite os restaurantes de rede no interior. Caminhe até a marina para passeios de barco ou tome uma bebida com vista para a baía nos fundos.",
      commuteFromStadium:
        "Cerca de 30–45 min de carro. Considere o Metromover a partir de Brickell ou um transporte curto dos hotéis do centro.",
      safety:
        "Área muito turística com segurança; cuide das suas bolsas em locais lotados.",
    },
    "bayfront-park": {
      description:
        "Espaço verde à beira-mar no centro — sede do Fan Festival oficial da FIFA durante a Copa do Mundo 2026, com telões, comida e música ao vivo na Biscayne Bay.",
      insiderTip:
        "Chegue antes do pico da noite para entrar mais fácil. Combine com um passeio por Bayside ou o Metromover — o estacionamento do centro lota rápido nas noites de festival.",
      commuteFromStadium:
        "Cerca de 30–45 min do Hard Rock Stadium de carro. Dos hotéis do centro, é acessível a pé — ou pegue o Metromover gratuito até Bayfront Park.",
      safety:
        "Grande evento organizado com segurança; guarde seus objetos de valor em multidões e mantenha-se hidratado no calor.",
    },
    "coconut-grove": {
      description:
        "Árvores de figueira, veleiros e uma vila costeira descontraída — o bairro mais antigo de Miami com alma boêmia.",
      insiderTip:
        "Visite o Museu Vizcaya cedo para evitar multidões, depois passeie pela marina ao pôr do sol. CocoWalk é turístico — vá à Main Highway para opções melhores.",
      commuteFromStadium:
        "Cerca de 35–50 min de carro pela US-1. Estacionamento perto da orla lota nos fins de semana — Uber é mais fácil.",
      safety:
        "Geralmente seguro e familiar; mais movimentado e bem iluminado ao longo da rua principal à noite.",
    },
    "coral-gables": {
      description:
        "Arquitetura Mediterranean Revival, ruas arborizadas e gastronomia sofisticada — a 'City Beautiful' ao sul do centro.",
      insiderTip:
        "Caminhe pela Miracle Mile para compras e cafés. Books & Books é uma ótima parada com ar-condicionado. Evite a US-1 no horário de pico — as ruas laterais são mais tranquilas.",
      commuteFromStadium:
        "Cerca de 40–55 min de carro pela Palmetto ou US-1. Estacionamento na rua na Miracle Mile é limitado — use um estacionamento.",
      safety:
        "Área residencial muito segura e sofisticada; atenção normal em zonas comerciais movimentadas.",
    },
  },
  food: {
    versailles: {
      area: "Little Havana",
      tags: ["Cubano", "Icônico"],
      description:
        "O restaurante cubano mais famoso de Miami desde 1971. Cafecito, doces e pratos cubanos completos a qualquer hora.",
      recommended: "Sanduíche cubano + cafecito",
      commuteLabel: "2 min da Calle Ocho",
    },
    "la-carreta": {
      area: "Little Havana",
      tags: ["Cubano", "Tradicional"],
      description:
        "Energia de diner cubano clássico — ropa vieja, lechón e café forte sem as filas do Versailles.",
      recommended: "Ropa vieja com maduros",
      commuteLabel: "5 min do Domino Park",
    },
    "joes-stone-crab": {
      area: "South Beach",
      tags: ["Frutos do mar", "Histórico"],
      description:
        "Uma instituição de Miami desde 1913. A temporada de caranguejo de pedra é o grande evento — reserve com antecedência ou espere fila.",
      recommended: "Pinças de caranguejo de pedra com molho de mostarda",
      commuteLabel: "8 min da Ocean Drive",
    },
    "zak-the-baker": {
      area: "Wynwood",
      tags: ["Padaria", "Brunch"],
      description:
        "Pão artesanal, doces e uma das melhores paradas matinais de Wynwood. As filas andam rápido — vale a pena.",
      recommended: "Babka de chocolate + latte",
      commuteLabel: "3 min do Wynwood Walls",
    },
    "coyo-taco": {
      area: "Wynwood",
      tags: ["Tacos", "Casual"],
      description:
        "Tacos estilo rua em um pátio colorido de Wynwood. Ótimo antes de uma noite no distrito.",
      recommended: "Tacos al pastor",
      commuteLabel: "4 min do Wynwood Walls",
    },
    flanigans: {
      area: "Brickell",
      tags: ["Bar esportivo", "Local"],
      description:
        "A rede de bares esportivos de referência no sul da Flórida. Asas, hambúrgueres e cerveja gelada — perfeito para multidões pós-jogo.",
      recommended: "Costelas baby back",
      commuteLabel: "10 min de Uber do Bayfront",
    },
    sergios: {
      area: "Coral Gables",
      tags: ["Cubano", "Familiar"],
      description:
        "Comida cubana caseira de negócio familiar com várias unidades. Pratos confiáveis e serviço rápido para grupos.",
      recommended: "Picadillo com arroz branco",
      commuteLabel: "15 min de carro do centro",
    },
    "palacio-de-los-jugos": {
      area: "Várias unidades",
      tags: ["Sucos", "Cubano"],
      description:
        "Sucos tropicais frescos e lanches cubanos no balcão. O nome diz tudo — peça um suco de mamey.",
      recommended: "Suco de mamey + empanada",
      commuteLabel: "5 min da Calle Ocho",
    },
  },
  survival: {
    phrases: [
      {
        spanish: "¿Dónde está...?",
        english: "Onde fica...?",
        tag: "Essencial",
      },
      {
        spanish: "La cuenta, por favor",
        english: "A conta, por favor",
        tag: "Muito útil",
      },
      {
        spanish: "¿Cuánto cuesta?",
        english: "Quanto custa?",
        tag: "Muito útil",
      },
      {
        spanish: "¿Habla inglés?",
        english: "Você fala inglês?",
        tag: "Útil",
      },
      {
        spanish: "Un agua, por favor",
        english: "Uma água, por favor",
        tag: "Calor de Miami",
      },
    ],
    proTip: {
      title: "Dica de viagem pro",
      body: "O calor de Miami não é brincadeira — beba água constantemente, use protetor solar e planeje atividades ao ar livre de manhã ou à noite. Tempestades à tarde são comuns de junho a novembro. Gorjeta é padrão: 18–20 % em restaurantes, alguns dólares para motoristas de aplicativo e funcionários de hotel. Cartões são amplamente aceitos, mas leve dinheiro para cafés pequenos e food trucks.",
    },
    gettingAround: {
      title: "Locomoção em Miami",
      description:
        "Veja a seção completa de Transporte para mapas do Metromover, Metrorail, Metrobus e Brightline — ou use os links rápidos abaixo.",
      links: [
        {
          name: "Guia de transporte",
          description:
            "Mapas, dicas para torcedores e links para todas as opções de trem do centro.",
          url: "#transit",
        },
        {
          name: "Uber / Lyft",
          description:
            "Melhor para ir ao estádio, noites em Wynwood e voltas tarde.",
          url: "https://www.uber.com",
        },
      ],
    },
  },
  transit: {
    title: "Locomoção em Miami",
    subtitle:
      "Desloque-se entre o centro, o fan fest e a costa — sem adivinhar qual trem é qual.",
    matchDayNote:
      "Hard Rock Stadium não está no Metromover nem no Metrorail. Planeje Uber/Lyft ou ônibus nos dias de jogo; use as opções abaixo para viagens no centro e regionais.",
    options: [
      {
        id: "metromover",
        name: "Metromover",
        tagline: "Trem automatizado gratuito no centro",
        description:
          "People-mover elevado que percorre o núcleo urbano. Perfeito para Brickell, Bayfront Park, Bayside Marketplace e conexão com Brightline no MiamiCentral.",
        price: "GRÁTIS",
        fanTip:
          "Use o Metromover nas noites de fan fest — sem tarifa, sem estresse de estacionamento no centro.",
        mapUrl:
          "https://www.miamidade.gov/resources/transportation_publicworks/documents/metromover-map.pdf",
        mapLabel: "Mapa do Metromover (PDF)",
        websiteUrl:
          "https://www.miamidade.gov/transportation-public-transit/rail/metromover.asp",
        websiteLabel: "Info do Metromover",
        highlights: ["Brickell", "Bayfront Park", "Bayside", "Government Center"],
      },
      {
        id: "metrorail",
        name: "Metrorail",
        tagline: "Trem elevado pelo condado",
        description:
          "Trem pago do Aeroporto Internacional de Miami passando pelo centro até Dadeland e além. Transfira para o Metromover no Government Center.",
        price: "Pago — EASY Card ou contactless",
        fanTip:
          "Aeroporto → Government Center, depois pegue o Metromover até a orla.",
        mapUrl:
          "https://www.miamidade.gov/resources/transportation_publicworks/documents/metrorail-map.pdf",
        mapLabel: "Mapa do Metrorail (PDF)",
        websiteUrl:
          "https://www.miamidade.gov/transportation-public-transit/rail/metrorail.asp",
        websiteLabel: "Info do Metrorail",
        highlights: ["Aeroporto MIA", "Government Center", "Brickell", "Dadeland"],
      },
      {
        id: "metrobus",
        name: "Metrobus",
        tagline: "Ônibus por todo Miami-Dade",
        description:
          "Rede de ônibus do condado para bairros e rotas que o trem não alcança. Use o planejador de viagens para conexões ao estádio e hotéis.",
        price: "Pago — mesmo sistema de tarifas do Metrorail",
        fanTip:
          "Melhor quando seu hotel ou parada no dia de jogo não está perto de uma estação de trem.",
        mapUrl:
          "https://www.miamidade.gov/resources/transportation_publicworks/documents/system-maps-web.pdf",
        mapLabel: "Mapa do sistema completo (PDF)",
        websiteUrl: "https://www.miamidade.gov/transportation-public-transit/",
        websiteLabel: "Planejador e tarifas",
        highlights: [
          "Rotas em todo o condado",
          "Conectores do centro",
          "Opções noturnas variam por linha",
        ],
      },
      {
        id: "brightline",
        name: "Brightline",
        tagline: "Trem de alta velocidade pela costa",
        description:
          "Trem privado do MiamiCentral no centro até Aventura, Fort Lauderdale, Boca Raton, West Palm Beach e Orlando. A passos de Bayside e Metromover.",
        price: "Pago — reserve com antecedência para melhores tarifas",
        fanTip:
          "MiamiCentral conecta Metrorail, Metrobus e Metromover — um hub no centro.",
        websiteUrl: "https://www.gobrightline.com/train-stations/fl/miami",
        websiteLabel: "Estação MiamiCentral",
        highlights: [
          "MiamiCentral",
          "Fort Lauderdale",
          "West Palm Beach",
          "Orlando",
        ],
      },
    ],
    footerMapsFrom: "Mapas oficiais de",
    miamiDadeTransit: "Miami-Dade Transit",
    brightlineMiamiCentral: "Brightline MiamiCentral",
  },
  assistant: {
    greeting:
      "E aí! Sou o Clutch™, mascote da Copa do Mundo 2026 nas Américas. Como posso ajudar você a viver Miami ao máximo? 🦅⚽",
    suggestions: [
      {
        icon: "food",
        text: "Quais pratos de Miami não posso perder?",
        reply:
          "Comece com um sanduíche cubano e cafecito em Little Havana — Versailles é o clássico. Para caranguejo de pedra, Joe's em South Beach é lendário. Confira nossa seção de Gastronomia para mais!",
        href: "#food",
      },
      {
        icon: "explore",
        text: "Quais bairros devo conhecer?",
        reply:
          "South Beach para Art Déco, Wynwood para arte de rua, Little Havana para cultura e Bayfront Park para o Fan Festival. Toque em Explorar para ver as nove áreas.",
        href: "#explore",
      },
      {
        icon: "party",
        text: "Onde fica o fan fest da Copa do Mundo?",
        reply:
          "O Fan Festival oficial da FIFA está no Bayfront Park no centro — telões, comida e música ao vivo na Biscayne Bay. O Metromover te leva de graça!",
        href: "#explore",
      },
      {
        icon: "map",
        text: "Como me locomover no centro?",
        reply:
          "O Metromover é GRÁTIS e faz o circuito por Brickell, Bayfront e Bayside. Para o estádio, use Uber/Lyft. Veja nossa seção de Transporte para mapas e links.",
        href: "#transit",
      },
    ],
  },
};

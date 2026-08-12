"use client";

import React, { createContext, useContext, useState } from "react";

/**
 * Gerenciamento de Idiomas (i18n) para o Mama Restaurant
 * 
 * Este contexto provê o estado global de idioma (IT/EN) e a função de tradução 't()'.
 * Utiliza o padrão Context API do React para garantir que todos os componentes 
 * respondam instantaneamente à troca de idioma.
 */

type Language = "it" | "en";

/**
 * O dicionário é uma árvore de profundidade arbitrária cujas folhas são strings.
 */
type TranslationTree = { [key: string]: string | TranslationTree };

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  /**
   * Função de tradução que aceita caminhos curtos (ex: 'hero.title')
   */
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

/**
 * Dicionário principal de conteúdo bilíngue
 */
export const translations: Record<Language, TranslationTree> = {
  it: {
    nav: {
      about: "Chi Siamo",
      dishes: "I Nostri Piatti",
      vini: "Vini",
      gallery: "Galleria",
      book: "Prenota",
      menu: "Cardápio",
    },
    hero: {
      subtitle: "Andria, Puglia — Dal 1800",
      title1: "Un'Esperienza",
      title2: "Culinaria Italiana",
      titleCreative: "Creativa",
      description: "Tradizione, innovazione e atmosfera.\nIn un palazzo storico dell'Ottocento.",
      ctaMenu: "Vedi il Menù →",
      ctaBook: "Prenota",
      scopri: "Scopri",
    },
    story: {
      badge: "La Nostra Storia",
      title1: "Dove la creatività",
      title2: "incontra la",
      titleAccent: "tradizione",
      p1: "Siamo felici di ospitarti al Ristorante Mamà! Cuciniamo per te, per offrirti il sapore dei migliori prodotti italiani, freschi e genuini.",
      p2: "Qui troverai i classici della cucina italiana, rivisitati e non, e specialità locali. Con il massimo del servizio, in una location elegante al centro di Andria.",
      p3: "Adoriamo sperimentare: vieni a trovarci!",
      appetito: "Buon appetito!",
    },
    dishes: {
      badge: "I Nostri Piatti",
      title1: "Creazioni dello",
      titleChef: "Chef",
      signature: "Piatto Signature",
      risottoDesc: "Cremosità e freschezza si incontrano in un piatto che celebra il mare pugliese.",
      diMare: "Di Mare",
      diTerra: "Di Terra",
      degustazioneTitle: "Percorso Degustativo Mare",
      degustazioneDesc: "Un viaggio attraverso i sapori dell'Adriatico",
      mixTitle: "Mix Carne e Pesce",
      mixDesc: "Il meglio della terra e del mare in un unico piatto",
      pastaTitle: "Pasta Noci e Speck",
      pastaDesc: "Sapori autunnali con un tocco di creatività pugliese",
      ctaFullMenu: "SCOPRI IL MENÙ COMPLETO →",
    },
    wine: {
      badge: "L'Esperienza",
      title1: "I Nostri",
      titleVini: "Vini",
      p1: "Una selezione curata dei migliori vini pugliesi e italiani, scelti per accompagnare ogni piatto con armonia e carattere.",
      p2: "Dal Primitivo di Manduria al Nero di Troia, ogni calice racconta la storia della terra pugliese.",
    },
    gallery: {
      badge: "Visioni",
      title1: "L'Atmosfera del",
      titleMamma: "Màmà",
    },
    info: {
      badge: "Contatti & Orari",
      title1: "Vieni a",
      titleTrovarci: "Trovarci",
      phoneLabel: "Telefono",
      phone: "0883 885034",
      addressLabel: "Indirizzo",
      address: "Corso Cavour, 27\n76123 Andria (BT), Italia",
      hoursLabel: "Orari",
      hoursTitle: "Orari di Apertura",
      days: "Mar - Dom",
      hours: "12:30 – 15:00 / 19:30 – 23:00",
      closed: "Lunedì Chiuso",
      ctaCall: "Chiama Ora",
    },
    menuPage: {
      back: "← TORNA ALLA HOMEPAGE",
      badge: "IL NOSTRO MENÙ",
      title1: "Cucina Italiana",
      titleCreative: "Creativa",
      quote: "\"Ogni piatto è un viaggio tra tradizione e innovazione. Usiamo solo ingredienti freschi e genuini, selezionati con cura per offrirti il meglio della cucina italiana.\"",
      chef: "LO CHEF",
    },
    categories: {
      antipasti: "Antipasti",
      antipastiDesc: "Per iniziare il viaggio",
      primi: "Primi Piatti",
      primiDesc: "La pasta, il cuore della cucina",
      "secondi-mare": "Secondi di Mare",
      "secondi-mareDesc": "Il pescato del giorno",
      "secondi-terra": "Secondi di Terra",
      "secondi-terraDesc": "Le carni dei nostri pascoli",
      pizze: "Le Nostre Pizze",
      pizzeDesc: "Lievitazione naturale 48h",
      dolci: "Dolci",
      dolciDesc: "Un fine pasto indimenticabile",
      vini: "Carta dei Vini",
      viniDesc: "Eccellenze pugliesi e nazionali",
    },
    footer: {
      rights: "Tutti i diritti riservati",
      redesign: "Demo di Redesign — Proposta di Progettazione UI/UX",
    },
    common: {
      waiter: "Sei pronto per ordinare? Il nostro staff è a tua disposizione.",
      call: "Chiama il cameriere",
      dishNotes: "I prezi sono in Euro e includono IVA. Comunica eventuali allergie o intolleranze al nostro personale. Coperti: €2,50 a persona.",
      bookNow: "Prenota Ora",
      tags: {
        chefpick: "Chef's Pick",
        signature: "Signature",
        perdue: "Per Due",
        specialità: "Specialità",
        speciale: "Speciale",
        classico: "Classico",
      }
    }
  },
  en: {
    nav: {
      about: "About Us",
      dishes: "Our Dishes",
      vini: "Wines",
      gallery: "Gallery",
      book: "Book Now",
      menu: "Menu",
    },
    hero: {
      subtitle: "Andria, Puglia — Since 1800",
      title1: "A Creative",
      title2: "Italian Culinary",
      titleCreative: "Experience",
      description: "Tradition, innovation and atmosphere.\nIn a historic 19th-century building.",
      ctaMenu: "View the Menu →",
      ctaBook: "Book Now",
      scopri: "Discover",
    },
    story: {
      badge: "Our Story",
      title1: "Where creativity",
      title2: "meets",
      titleAccent: "tradition",
      p1: "We are happy to host you at Mama Restaurant! We cook for you to offer the taste of the best fresh and genuine Italian products.",
      p2: "Here you will find the classics of Italian cuisine, revisited and original, alongside local specialties. With impeccable service in an elegant location in the heart of Andria.",
      p3: "We love to experiment: come visit us!",
      appetito: "Enjoy your meal!",
    },
    dishes: {
      badge: "Our Dishes",
      title1: "Chef's",
      titleChef: "Creations",
      signature: "Signature Dish",
      risottoDesc: "Creaminess and freshness meet in a dish that celebrates the Apulian sea.",
      diMare: "Seafood",
      diTerra: "from Land",
      degustazioneTitle: "Seafood Tasting Journey",
      degustazioneDesc: "A journey through the flavors of the Adriatic",
      mixTitle: "Meat & Fish Mix",
      mixDesc: "The best of land and sea in a single dish",
      pastaTitle: "Walnut and Speck Pasta",
      pastaDesc: "Autumn flavors with a touch of Apulian creativity",
      ctaFullMenu: "DISCOVER THE FULL MENU →",
    },
    wine: {
      badge: "The Experience",
      title1: "Our",
      titleVini: "Wines",
      p1: "A curated selection of the best Apulian and Italian wines, chosen to accompany every dish with harmony and character.",
      p2: "From Primitivo di Manduria to Nero di Troia, every glass tells the story of the Apulian land.",
    },
    gallery: {
      badge: "Visions",
      title1: "The Atmosphere of",
      titleMamma: "Màmà",
    },
    info: {
      badge: "Contact & Hours",
      title1: "Come and",
      titleTrovarci: "Visit Us",
      phoneLabel: "Phone",
      phone: "0883 885034",
      addressLabel: "Address",
      address: "Corso Cavour, 27\n76123 Andria (BT), Italy",
      hoursLabel: "Hours",
      hoursTitle: "Opening Hours",
      days: "Tue - Sun",
      hours: "12:30 – 15:00 / 19:30 – 23:00",
      closed: "Closed on Mondays",
      ctaCall: "Call Now",
    },
    menuPage: {
      back: "← BACK TO HOMEPAGE",
      badge: "OUR MENU",
      title1: "Creative Italian",
      titleCreative: "Cuisine",
      quote: "\"Every dish is a journey between tradition and innovation. We use only fresh and genuine ingredients, carefully selected to offer you the best of Italian cuisine.\"",
      chef: "THE CHEF",
    },
    categories: {
      antipasti: "Appetizers",
      antipastiDesc: "To start the journey",
      primi: "First Courses",
      primiDesc: "Pasta, the heart of our kitchen",
      "secondi-mare": "Main Courses (Seafood)",
      "secondi-mareDesc": "Catch of the day",
      "secondi-terra": "Main Courses (Meat)",
      "secondi-terraDesc": "Meats from our pastures",
      pizze: "Our Pizzas",
      pizzeDesc: "48h natural leavening",
      dolci: "Desserts",
      dolciDesc: "An unforgettable end to your meal",
      vini: "Wine List",
      viniDesc: "Apulian and national excellence",
    },
    footer: {
      rights: "All rights reserved",
      redesign: "Redesign Demo — UI/UX Design Proposal",
    },
    common: {
      waiter: "Ready to order? Our staff is at your disposal.",
      call: "Call the waiter",
      dishNotes: "Prices are in Euro and include VAT. Please inform our staff of any allergies or intolerances. Cover charge: €2.50 per person.",
      bookNow: "Book Now",
      tags: {
        chefpick: "Chef's Pick",
        signature: "Signature",
        perdue: "For Two",
        specialità: "Specialty",
        speciale: "Special",
        classico: "Classic",
      }
    }
  }
};

/**
 * Provedor do Contexto de Idioma
 * Envolve a aplicação para disponibilizar as funções de i18n.
 */
export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("it");

  /**
   * Função auxiliar para buscar strings aninhadas no dicionário
   * @param path Caminho no objeto (ex: "info.address")
   */
  const t = (path: string): string => {
    let current: string | TranslationTree = translations[language];
    for (const key of path.split(".")) {
      if (typeof current === "string" || current[key] === undefined) return path;
      current = current[key];
    }
    return typeof current === "string" ? current : path;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

/**
 * Hook customizado para acesso rápido às traduções e estado do idioma
 */
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage deve ser usado dentro de um LanguageProvider");
  }
  return context;
};

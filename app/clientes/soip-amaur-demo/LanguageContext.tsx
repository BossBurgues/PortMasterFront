"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "it" | "en";

interface Translations {
  nav: {
    menu: string;
    concept: string;
    gallery: string;
    contact: string;
    book: string;
  };
  hero: {
    title: string;
    subtitle: string;
    ctaMenu: string;
    ctaBook: string;
  };
  concept: {
    badge: string;
    title: string;
    p1: string;
    p2: string;
  };
  signature: {
    badge: string;
    title: string;
    items: {
      name: string;
      desc: string;
    }[];
  };
  menu: {
    title: string;
    subtitle: string;
    categories: {
      pizze: string;
      antipasti: string;
      drinks: string;
      desserts: string;
    };
    back: string;
  };
  social: {
    badge: string;
    title: string;
    desc: string;
  };
  contact: {
    title: string;
    addressLabel: string;
    address: string;
    hoursLabel: string;
    hours: string;
    whatsappCta: string;
  };
  footer: {
    rights: string;
  };
}

const translations: Record<Language, Translations> = {
  it: {
    nav: {
      menu: "Il Menù",
      concept: "Il Concept",
      gallery: "Galleria",
      contact: "Contattaci",
      book: "Prenota Ora",
    },
    hero: {
      title: "Esperienza Culinaria Italiana Moderna",
      subtitle: "Pizza creativa, ingredienti di altissima qualità e un'atmosfera vibrante.",
      ctaMenu: "Scopri il Menù",
      ctaBook: "Prenota col WhatsApp",
    },
    concept: {
      badge: "Sapore e Passione",
      title: "Molto più di una semplice pizzeria",
      p1: "Soip Amaur nasce per unire la leggerezza dell'impasto gourmet all'energia di un ambiente social e dinamico.",
      p2: "Scegliamo ingredienti freschi per garantire una qualità senza compromessi. Perfetto per giovani, coppie e gruppi alla ricerca di un'esperienza contemporanea ad Andria.",
    },
    signature: {
      badge: "I Nostri Cavalli di Battaglia",
      title: "Le Pizze Gourmet",
      items: [
        { name: "La Tartufata", desc: "Crema di tartufo, fior di latte, funghi porcini e scaglie di grana." },
        { name: "Pistacchio & Mortadella", desc: "Base bianca, mortadella IGP, granella di pistacchio di Bronte e stracciatella." },
        { name: "Margherita Contemporanea", desc: "Pomodoro San Marzano DOP, mozzarella di bufala, basilico fresco e olio EVO." }
      ]
    },
    menu: {
      title: "Digital Menu",
      subtitle: "Esplora i nostri sapori.",
      categories: {
        pizze: "Pizze Gourmet",
        antipasti: "Antipasti & Fritti",
        drinks: "Cocktails & Bevande",
        desserts: "Dolci",
      },
      back: "← Torna alla Home",
    },
    social: {
      badge: "Soip Amaur Vibe",
      title: "Vivi l'Atmosfera",
      desc: "Unisciti a noi per serate indimenticabili, buon cibo e ottima compagnia. Condividi i tuoi momenti taggandoci!",
    },
    contact: {
      title: "Vieni a trovarci",
      addressLabel: "Indirizzo",
      address: "Andria, BT, Italia",
      hoursLabel: "Orari di Apertura",
      hours: "Mar - Dom: 19:00 - 00:00",
      whatsappCta: "Prenota col WhatsApp",
    },
    footer: {
      rights: "Tutti i diritti riservati",
    }
  },
  en: {
    nav: {
      menu: "The Menu",
      concept: "Concept",
      gallery: "Gallery",
      contact: "Contact",
      book: "Book Now",
    },
    hero: {
      title: "Modern Italian Dining Experience",
      subtitle: "Creative pizza, high-quality ingredients, and a vibrant atmosphere.",
      ctaMenu: "View Menu",
      ctaBook: "Book via WhatsApp",
    },
    concept: {
      badge: "Flavor and Passion",
      title: "More than just a pizzeria",
      p1: "Soip Amaur was created to combine the lightness of gourmet dough with the energy of a dynamic, social environment.",
      p2: "We choose fresh ingredients to guarantee uncompromising quality. Perfect for young people, couples, and groups looking for a contemporary experience in Andria.",
    },
    signature: {
      badge: "Our Signature Items",
      title: "Gourmet Pizzas",
      items: [
        { name: "La Tartufata", desc: "Truffle cream, fior di latte, porcini mushrooms, and parmesan shavings." },
        { name: "Pistachio & Mortadella", desc: "White base, IGP mortadella, Bronte pistachio crumbs, and stracciatella cheese." },
        { name: "Contemporary Margherita", desc: "San Marzano DOP tomato, buffalo mozzarella, fresh basil, and EVO oil." }
      ]
    },
    menu: {
      title: "Digital Menu",
      subtitle: "Explore our flavors.",
      categories: {
        pizze: "Gourmet Pizzas",
        antipasti: "Starters & Fried",
        drinks: "Cocktails & Drinks",
        desserts: "Desserts",
      },
      back: "← Back to Home",
    },
    social: {
      badge: "Soip Amaur Vibe",
      title: "Experience the Atmosphere",
      desc: "Join us for unforgettable evenings, great food, and excellent company. Share your moments by tagging us!",
    },
    contact: {
      title: "Come visit us",
      addressLabel: "Address",
      address: "Andria, BT, Italy",
      hoursLabel: "Opening Hours",
      hours: "Tue - Sun: 7:00 PM - 12:00 AM",
      whatsappCta: "Reserve via WhatsApp",
    },
    footer: {
      rights: "All rights reserved",
    }
  }
};

export type SignatureItem = Translations["signature"]["items"][number];

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  /**
   * Acessor por caminho (ex: "hero.title"). Assume `string` por padrão;
   * caminhos que resolvem para uma lista informam o tipo explicitamente
   * (ex: `t<SignatureItem[]>("signature.items")`).
   */
  t: <T = string>(targetPath: string) => T;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("it");

  const t = <T,>(targetPath: string): T => {
    let current: unknown = translations[language];
    for (const key of targetPath.split(".")) {
      if (typeof current !== "object" || current === null || !(key in current)) {
        console.warn(`Translation missing for key: ${targetPath}`);
        return targetPath as T;
      }
      current = (current as Record<string, unknown>)[key];
    }
    return current as T;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

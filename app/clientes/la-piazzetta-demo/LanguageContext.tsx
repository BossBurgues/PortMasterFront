"use client";

import React, { createContext, useContext, useSyncExternalStore } from "react";

type LanguageContextType = {
  language: "it" | "en";
  setLanguage: (lang: "it" | "en") => void;
  t: (key: string) => string;
};

const STORAGE_KEY = "piazzetta_lang";
const LANGUAGE_CHANGE_EVENT = "piazzetta:lang-change";

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  it: {
    "nav.menu": "Menu",
    "nav.gallery": "Galleria",
    "nav.location": "Dove Siamo",
    "nav.contact": "Contattaci",
    "hero.title": "Pizza Italiana Fresca",
    "hero.subtitle": "Semplice, veloce e deliziosa",
    "hero.cta.menu": "Vedi il Menu",
    "hero.cta.contact": "Contattaci",
    "featured.title": "Le Più Amate",
    "featured.subtitle": "Le pizze preferite dai nostri clienti",
    "menu.pizza": "Pizze",
    "menu.drinks": "Bibite",
    "menu.desserts": "Dolci",
    "category.pizza": "Le nostre pizze artigianali fatte a mano",
    "category.drinks": "Bevande fresche e birre",
    "category.desserts": "I nostri dolci fatti in casa",
    "info.hours": "Lun-Dom: 18:00 - 24:00",
    "info.address": "Piazza Navona 42, Andria, Italia",
    "info.phone": "+39 123 456 7891",
  },
  en: {
    "nav.menu": "Menu",
    "nav.gallery": "Gallery",
    "nav.location": "Location",
    "nav.contact": "Contact",
    "hero.title": "Fresh Italian Pizza",
    "hero.subtitle": "Simple, fast, and delicious",
    "hero.cta.menu": "View Menu",
    "hero.cta.contact": "Contact Us",
    "featured.title": "Best Sellers",
    "featured.subtitle": "Our customers' favorite pizzas",
    "menu.pizza": "Pizzas",
    "menu.drinks": "Drinks",
    "menu.desserts": "Desserts",
    "category.pizza": "Our handmade artisanal pizzas",
    "category.drinks": "Cold drinks and beers",
    "category.desserts": "Our homemade sweets",
    "info.hours": "Mon-Sun: 6:00 PM - 12:00 AM",
    "info.address": "Piazza Navona 42, Andria, Italy",
    "info.phone": "+39 123 456 7891",
  }
};

/**
 * O idioma persiste em localStorage, que não existe durante o export estático.
 * `useSyncExternalStore` resolve isso com um snapshot de servidor ("it"), usado
 * no HTML pré-renderizado e na hidratação; logo em seguida o React re-renderiza
 * com o valor real do navegador, sem mismatch e sem guarda de `mounted`.
 */
function subscribe(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange);
  window.addEventListener(LANGUAGE_CHANGE_EVENT, onStoreChange);
  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener(LANGUAGE_CHANGE_EVENT, onStoreChange);
  };
}

const getStoredLanguage = () => localStorage.getItem(STORAGE_KEY);
const getServerLanguage = () => null;

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const stored = useSyncExternalStore(subscribe, getStoredLanguage, getServerLanguage);
  const language: "it" | "en" = stored === "it" || stored === "en" ? stored : "it";

  const changeLanguage = (lang: "it" | "en") => {
    localStorage.setItem(STORAGE_KEY, lang);
    window.dispatchEvent(new Event(LANGUAGE_CHANGE_EVENT));
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations["it"]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};

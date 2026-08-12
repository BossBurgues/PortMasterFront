"use client";

import React, { createContext, useContext, useSyncExternalStore } from "react";

type LanguageContextType = {
  language: "it" | "en";
  setLanguage: (lang: "it" | "en") => void;
  t: (key: string) => string;
};

const STORAGE_KEY = "48sedie_lang";
const LANGUAGE_CHANGE_EVENT = "48sedie:lang-change";

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  it: {
    "nav.menu": "Menu Digitale",
    "nav.experience": "L'Esperienza",
    "nav.gallery": "Galleria",
    "nav.location": "Dove Siamo",
    "nav.book": "Prenota",
    "hero.title": "Autentica Esperienza Culinaria Italiana",
    "hero.subtitle": "Dalla pizza gourmet al pesce e vini pregiati",
    "hero.cta": "Esplora il Menu",
    "experience.title": "Più di un Pasto",
    "experience.desc": "Il 48 Sedie non è solo un ristorante, è un viaggio attraverso i sapori più veri dell'Italia. Offriamo un ambiente accogliente e un servizio professionale per farti sentire a casa.",
    "menu.pizza": "Le Nostre Pizze",
    "menu.seafood": "Pesce Fresco",
    "menu.meat": "Carni Scelte",
    "menu.desserts": "Dolci",
    "menu.wine": "Vini",
    "category.pizza": "Pizze classiche e gourmet",
    "category.seafood": "Pescato del giorno",
    "category.meat": "Le migliori selezioni",
    "category.desserts": "Fatti in casa",
    "category.wine": "La nostra cantina",
    "footer.address": "Via Andria, 12, Italia",
    "footer.phone": "+39 123 456 7890",
    "footer.hours": "Lun-Dom: 19:30 - 23:30",
  },
  en: {
    "nav.menu": "Digital Menu",
    "nav.experience": "The Experience",
    "nav.gallery": "Gallery",
    "nav.location": "Location",
    "nav.book": "Book a Table",
    "hero.title": "Authentic Italian Dining Experience",
    "hero.subtitle": "From gourmet pizza to seafood and fine wines",
    "hero.cta": "View Menu",
    "experience.title": "More Than a Meal",
    "experience.desc": "48 Sedie is not just a restaurant, it's a journey through the truest flavors of Italy. We offer a welcoming environment and professional service to make you feel at home.",
    "menu.pizza": "Our Pizzas",
    "menu.seafood": "Fresh Seafood",
    "menu.meat": "Select Meats",
    "menu.desserts": "Desserts",
    "menu.wine": "Wines",
    "category.pizza": "Classic and gourmet pizzas",
    "category.seafood": "Catch of the day",
    "category.meat": "The finest cuts",
    "category.desserts": "Homemade sweets",
    "category.wine": "Our cellar",
    "footer.address": "Via Andria, 12, Italy",
    "footer.phone": "+39 123 456 7890",
    "footer.hours": "Mon-Sun: 7:30 PM - 11:30 PM",
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

"use client";

import React, { createContext, useContext, useSyncExternalStore } from "react";

type Lang = "en" | "it";

interface LangContextType {
  lang: Lang;
  toggleLang: () => void;
}

const LangContext = createContext<LangContextType | undefined>(undefined);

const STORAGE_KEY = "rest-lang";
const LANG_CHANGE_EVENT = "ritrovo:lang-change";

/**
 * A preferência de idioma vive em localStorage, que não existe durante o export
 * estático. `useSyncExternalStore` fornece um snapshot de servidor ("it") para o
 * HTML pré-renderizado e para a hidratação, e o React re-renderiza em seguida com
 * o valor real do navegador — sem mismatch de hidratação.
 */
function subscribe(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange);
  window.addEventListener(LANG_CHANGE_EVENT, onStoreChange);
  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener(LANG_CHANGE_EVENT, onStoreChange);
  };
}

const getStoredLang = () => localStorage.getItem(STORAGE_KEY);
const getServerLang = () => null;

export function LangProvider({ children }: { children: React.ReactNode }) {
  const stored = useSyncExternalStore(subscribe, getStoredLang, getServerLang);
  // Italiano é o idioma padrão do restaurante
  const lang: Lang = stored === "en" || stored === "it" ? stored : "it";

  const toggleLang = () => {
    localStorage.setItem(STORAGE_KEY, lang === "en" ? "it" : "en");
    window.dispatchEvent(new Event(LANG_CHANGE_EVENT));
  };

  return (
    <LangContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const context = useContext(LangContext);
  if (!context) {
    throw new Error("useLang must be used within a LangProvider");
  }
  return context;
}

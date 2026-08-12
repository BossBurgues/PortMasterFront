import type { Metadata } from "next";
import React from "react";
import "./theme.css";

/**
 * Metadados SEO — Soip Amaur Demo
 */
export const metadata: Metadata = {
  title: "Soip Amaur | Modern Italian Dining Experience",
  description: "Creative pizza, high-quality ingredients, and a vibrant atmosphere in Andria.",
};

import { LanguageProvider } from "./LanguageContext";

/**
 * Layout principal do demo do Soip Amaur.
 * Carrega fontes modernas e aplica o escopo do tema.
 */
export default function SoipLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LanguageProvider>
      {/* Fontes modernas — Outfit para títulos, Inter para textos */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Outfit:wght@400;500;700;800&display=swap"
        rel="stylesheet"
      />
      <div className="soip-theme bg-white text-[#1A1A1A] min-h-screen selection:bg-[#00989F] selection:text-white">
        {children}
      </div>
    </LanguageProvider>
  );
}

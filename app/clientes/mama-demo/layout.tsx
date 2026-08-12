import type { Metadata } from "next";
import React from "react";
import "./theme.css";

/**
 * Metadados SEO — Mama Restaurant Demo
 * Apresentação editorial para redesign de restaurante italiano
 */
export const metadata: Metadata = {
  title: "Màmà Restaurant | La Stazione del Gusto — Andria",
  description:
    "Cucina italiana creativa in un palazzo storico dell'Ottocento. Percorsi degustativi di terra e mare ad Andria, Puglia.",
};

import { LanguageProvider } from "./LanguageContext";

/**
 * Layout principal do demo do Mama Restaurant.
 * Carrega fontes premium e aplica o escopo do tema.
 */
export default function MamaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LanguageProvider>
      {/* Fontes premium — Playfair Display, Cormorant Garamond, DM Sans */}
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&display=swap"
        rel="stylesheet"
      />
      <div className="mama-theme">{children}</div>
    </LanguageProvider>
  );
}

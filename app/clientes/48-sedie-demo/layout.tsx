import type { Metadata } from "next";
import React from "react";
import "./theme.css";
import { LanguageProvider } from "./LanguageContext";

/**
 * Metadados SEO — 48 Sedie
 */
export const metadata: Metadata = {
  title: "48 Sedie | Authentic Italian Dining Experience",
  description: "A complete Italian dining experience in a welcoming atmosphere. From gourmet pizza to seafood and fine wines.",
};

export default function SedieLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LanguageProvider>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      {/* Serif: Playfair Display, Soft Sans-Serif: Lato */}
      <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap" rel="stylesheet" />
      <div className="sedie-theme bg-[#F5F1E8] text-[#3E2C23] min-h-screen selection:bg-[#7A1C1C] selection:text-[#F5F1E8]">
        {children}
      </div>
    </LanguageProvider>
  );
}

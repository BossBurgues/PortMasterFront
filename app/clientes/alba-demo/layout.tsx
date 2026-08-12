import type { Metadata } from "next";
import { Playfair_Display, Inter } from 'next/font/google';
import { ProvedorIdioma } from "./LanguageContext";
import "./theme.css";

export const metadata: Metadata = {
  title: "Ristorante Alba | Cucina Tradizionale Italiana a Torino",
  description:
    "Semplicità e tradizione a Torino: piatti della cucina italiana classica, ingredienti di stagione e accoglienza familiare.",
};

// Títulos tradicionais
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--alba-font-heading',
  style: ['normal', 'italic'],
  weight: ['400', '600', '700'],
  display: 'swap',
});

// Corpo legível e simples
const inter = Inter({
  subsets: ['latin'],
  variable: '--alba-font-body',
  weight: ['300', '400', '600'],
  display: 'swap',
});

/**
 * Layout do Ristorante Alba.
 * Focado em simplicidade, tipografia clássica e cores orgânicas (Verde & Creme).
 */
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ProvedorIdioma>
      <div className={`${playfair.variable} ${inter.variable} min-h-screen bg-[#F5F1E8] text-[#1A1A1A] font-body selection:bg-[#6F8F5E]/20`}>
        {children}
      </div>
    </ProvedorIdioma>
  );
}

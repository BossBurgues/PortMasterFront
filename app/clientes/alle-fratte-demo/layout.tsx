import type { Metadata } from "next";
import { Playfair_Display, Lato } from 'next/font/google';
import { ProvedorIdioma } from "./LanguageContext";
import "./theme.css";

export const metadata: Metadata = {
  title: "Alle Fratte di Trastevere | Trattoria Romana",
  description:
    "Trattoria romana nel cuore di Trastevere: cucina tradizionale, atmosfera familiare e prenotazione rapida.",
};

// Serif élégant pour les titres
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--fratte-font-heading',
  display: 'swap',
});

// Sans-serif propre et super lisible pour touristes (menu clair)
const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--fratte-font-body',
  display: 'swap',
});

/**
 * Layout principal - Alle Fratte di Trastevere
 * Style Roman Trattoria, optimisé Mobile-First.
 */
export default function AlleFratteLayout({ children }: { children: React.ReactNode }) {
  return (
    <ProvedorIdioma>
      <div className={`${playfair.variable} ${lato.variable} min-h-screen selection:bg-(--fratte-primary) selection:text-(--fratte-bg) font-body bg-(--fratte-bg)`}>
        {children}
      </div>
    </ProvedorIdioma>
  );
}

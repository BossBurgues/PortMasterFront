import type { Metadata } from "next";
import { Lora, Inter } from 'next/font/google';
import { ProvedorIdioma } from "./LanguageContext";
import "./theme.css";

export const metadata: Metadata = {
  title: "Ristorante Da Mauro | Le Radici del Gusto",
  description:
    "Classici della cucina italiana in chiave editoriale: le radici del gusto, l'atmosfera e il calore di una tavola di famiglia.",
};

// Fonte Serif Elegante para Títulos Editoriais
const lora = Lora({
  subsets: ['latin'],
  variable: '--mauro-font-heading',
  style: ['normal', 'italic'],
  display: 'swap',
});

// Fonte Sans-Serif Limpa para Leitura Contínua
const inter = Inter({
  subsets: ['latin'],
  variable: '--mauro-font-body',
  weight: ['300', '400', '500'],
  display: 'swap',
});

/**
 * Layout Principal - Ristorante Da Mauro
 * Estética Editorial / Papel, com tipografia carregada via next/font.
 */
export default function DaMauroLayout({ children }: { children: React.ReactNode }) {
  return (
    <ProvedorIdioma>
      <div className={`${lora.variable} ${inter.variable} min-h-screen selection:bg-[#5b0309] selection:text-[#fdf9f0] font-body bg-[#fdf9f0]`}>
        {children}
      </div>
    </ProvedorIdioma>
  );
}

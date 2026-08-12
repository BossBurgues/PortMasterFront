import type { Metadata } from "next";
// Configuração de fontes usando next/font/google para melhor performance e SEO
import { Playfair_Display, Lato } from 'next/font/google';
import { ProvedorIdioma } from "./LanguageContext";
import "./theme.css";

export const metadata: Metadata = {
  title: "Ristorante Valsangone | Cucina Tradizionale a Giaveno",
  description:
    "Tradizione ed esperienza a Giaveno: cucina del territorio, materie prime locali e accoglienza di famiglia.",
};

// Fonte para títulos - Inspirada na sinalização clássica italiana
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--valsangone-font-heading',
  style: ['normal', 'italic'],
  weight: ['400', '600', '700'],
  display: 'swap',
});

// Fonte para o corpo do texto - Limpa e legível
const lato = Lato({
  subsets: ['latin'],
  variable: '--valsangone-font-body',
  weight: ['300', '400', '700'],
  display: 'swap',
});

/**
 * Layout principal do demo do Ristorante Valsangone.
 * Aplica as fontes via variáveis CSS e provê o contexto de idioma.
 */
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ProvedorIdioma>
      <div className={`${playfair.variable} ${lato.variable} min-h-screen bg-[#F5F1E8] text-[#1A1A1A] font-body`}>
        {children}
      </div>
    </ProvedorIdioma>
  );
}

import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./style.css";

export const metadata: Metadata = {
  title: "Landscape Maintenance UK - Especialistas em Manutenção de Áreas Verdes",
  description: "Serviços profissionais de manutenção de jardins, gramados e paisagismo para áreas comerciais e residenciais.",
};

/**
 * Layout principal para a demo Landscape Maintenance UK.
 * @param children Conteúdo da página
 */
export default function LandscapeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-lm-fundo flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}

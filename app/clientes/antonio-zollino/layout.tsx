import type { Metadata } from "next";

/**
 * Layout para a demo do estúdio Antonio Zollino.
 * Define metadados de SEO para um estúdio de engenharia e arquitetura de elite.
 */
export const metadata: Metadata = {
  title: "Antonio Zollino | Ingegneria, Architettura e Restauro nel Salento",
  description: "Redesign premium do estúdio Antonio Zollino. Especialistas em restauro, engenharia civil e planejamento urbano em Muro Leccese, Salento.",
  keywords: ["Antonio Zollino", "Architettura Salento", "Ingegneria Muro Leccese", "Restauro pietra leccese", "Progettazione civile"],
  openGraph: {
    title: "Antonio Zollino | Architettura e Ingegneria",
    description: "La progettazione nasce da uno studio approfondito degli spazi e dai feedback del cliente.",
    images: ["/clientes/antonio-zollino/hero.png"],
  }
};

export default function AntonioZollinoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="antialiased scroll-smooth">
      {children}
    </section>
  );
}

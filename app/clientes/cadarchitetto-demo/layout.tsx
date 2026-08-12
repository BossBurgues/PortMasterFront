import type { Metadata } from "next";
import React from "react";
import "./theme.css";

export const metadata: Metadata = {
  title: "Ca' D'Architetto Salento | Ospitalità e Progetto",
  description:
    "La tua base autentica nel Salento: camere con bagno indipendente, giardino con barbecue e colazione inclusa.",
};

/**
 * Layout de demonstração para CAD Architetto.
 * Focado em uma estrutura limpa e minimalista.
 */
export default function CadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="tema-cadarchitetto selection:bg-blue-100">
      {children}
    </main>
  );
}

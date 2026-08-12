import type { Metadata } from "next";
import "./globals.css";

// Base absoluta para Open Graph/Twitter. Definida no deploy (ex: GitHub Pages)
// via NEXT_PUBLIC_SITE_URL; em desenvolvimento cai para o servidor local.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Gustavo Miguel Nicolodi | Portfólio de Projetos Web",
    template: "%s | Gustavo Miguel Nicolodi",
  },
  description:
    "Portfólio de interfaces e sites construídos do design ao deploy por Gustavo Miguel Nicolodi, engenheiro de software full-stack.",
  authors: [{ name: "Gustavo Miguel Nicolodi" }],
  creator: "Gustavo Miguel Nicolodi",
  openGraph: {
    title: "Gustavo Miguel Nicolodi | Portfólio de Projetos Web",
    description:
      "Coletânea de interfaces e sites construídos do design ao deploy. Next.js, React, TypeScript e Tailwind CSS.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,400;0,700;1,400;1,700&family=Be+Vietnam+Pro:wght@300;400;500;600&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import React from "react";
import "./theme.css";
import { LanguageProvider } from "./LanguageContext";

export const metadata: Metadata = {
  title: "La Piazzetta | Fresh Italian Pizza",
  description: "Simple, fast, and delicious Italian pizza in Andria. High quality, affordable prices.",
};

export default function PiazzettaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LanguageProvider>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      
      <div className="piazzetta-theme bg-[#FFFFFF] text-[#1A1A1A] min-h-screen selection:bg-[#678561] selection:text-white">
        {children}
      </div>
    </LanguageProvider>
  );
}

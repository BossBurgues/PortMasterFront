import type { Metadata } from "next";
import React from "react";
import { LangProvider } from "./LangContext";
import "./theme.css";

export const metadata: Metadata = {
  title: "Ritrovo Dei Lavoratori | Autentica Cucina Italiana a San Marino",
  description:
    "Sapori di famiglia dal 1977: ricette tradizionali, ingredienti locali e la vera essenza della campagna italiana a San Marino.",
};

export default function RestaurantLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LangProvider>{children}</LangProvider>;
}

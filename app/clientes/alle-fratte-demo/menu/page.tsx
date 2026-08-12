"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useIdioma } from "../LanguageContext";

/**
 * Menu Moderno Alle Fratte
 * Respeita GUIDELINES de Design Web (Vercel Guidelines):
 *   - Semantic Lists
 *   - No transition:all
 *   - Focus visible
 *   - Text-wrap: balance
 */

type Category = "Antipasti" | "Primi" | "Secondi" | "Pizze" | "Dolci";

export default function FratteModernMenu() {
  const { idioma, alternarIdioma } = useIdioma();
  // We use scroll spies on a real prod version, but keeping it simple layout here
  const [activeCategory, setActiveCategory] = useState<Category>("Antipasti");

  const menu = {
    Antipasti: [
      { it: "Carciofo alla Giudia", en: "Double-fried whole artichoke, Jewish Roman style", price: "€8", tag: "Traditional" },
      { it: "Tagliere de' Roma", en: "Cold cuts board with pecorino, salami and olives", price: "€15", tag: "Popular" },
      { it: "Bruschetta Tradizionale", en: "Toasted bread with tomatoes, garlic and basil", price: "€5" }
    ],
    Primi: [
      { it: "Spaghetti alla Carbonara", en: "Eggs, pecorino cheese, guanciale pork and black pepper", price: "€14", tag: "Popular" },
      { it: "Bucatini all'Amatriciana", en: "Tomato sauce, crispy guanciale, pecorino and chili", price: "€13" },
      { it: "Tonnarelli Cacio e Pepe", en: "Thick spaghetti, roman pecorino cheese, black pepper", price: "€13", tag: "Traditional" }
    ],
    Secondi: [
      { it: "Saltimbocca alla Romana", en: "Veal scaloppine with prosciutto and sage in wine sauce", price: "€18", tag: "Traditional" },
      { it: "Coda alla Vaccinara", en: "Oxtail stewed slowly with tomatoes, celery and pine nuts", price: "€16", tag: "Chef’s choice" },
      { it: "Trippa alla Romana", en: "Roman style tripe with tomato sauce, mint and pecorino", price: "€14" }
    ],
    Pizze: [
      { it: "Pizza Margherita", en: "Tomato sauce, mozzarella, basil and olive oil", price: "€8", tag: "Popular" },
      { it: "Pizza Napoletana", en: "Tomato sauce, mozzarella, anchovies and oregano", price: "€10" },
      { it: "Focaccia Romana", en: "Oven-baked flatbread with rosemary and sea salt", price: "€5" }
    ],
    Dolci: [
      { it: "Tiramisù della Casa", en: "Homemade mascarpone and espresso cake", price: "€7", tag: "Popular" },
      { it: "Crostata Ricotta e Visciole", en: "Traditional ricotta and sour cherry tart", price: "€7" }
    ]
  };

  const categories: Category[] = Object.keys(menu) as Category[];

  return (
    <div className="min-h-screen bg-(--fratte-bg) text-(--fratte-text) font-body">
      
      {/* HEADER SIMPLISTIC */}
      <header className="sticky top-0 w-full z-40 bg-white/80 backdrop-blur-md border-b border-neutral-200 shadow-sm py-4">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl flex items-center justify-between">
          <Link 
            href="/clientes/alle-fratte-demo" 
            className="text-sm font-semibold text-neutral-600 hover:text-neutral-900 transition-colors duration-200 touch-manipulation focus-visible:ring-2 focus-visible:ring-rose-700"
          >
            {idioma === 'IT' ? '← Ritorna' : '← Back'}
          </Link>
          <h1 className="heading-modern text-xl font-bold text-neutral-900 tracking-tight">Il Menù</h1>
          <button 
            onClick={alternarIdioma} 
            className="text-sm font-semibold text-(--fratte-primary) bg-rose-50 hover:bg-rose-100 rounded-full px-4 py-1.5 transition-colors duration-200 touch-manipulation focus-visible:ring-2 focus-visible:ring-rose-700"
            aria-label={idioma === 'IT' ? 'Switch Menu to English' : 'Passa Menu all\'Italiano'}
          >
            {idioma === 'IT' ? 'EN' : 'IT'}
          </button>
        </div>
      </header>

      <main className="container mx-auto px-4 md:px-8 max-w-5xl py-12 lg:py-20 flex flex-col lg:flex-row gap-12">
        
        {/* Navigation - Horizontal Mobile / Vertical Desktop */}
        <nav className="lg:w-1/4" aria-label="Menu Categories">
          <ul className="flex lg:flex-col overflow-x-auto no-scrollbar gap-2 pb-4 lg:pb-0 lg:sticky lg:top-32">
            {categories.map((cat) => (
              <li key={cat} className="shrink-0">
                <button
                  onClick={() => setActiveCategory(cat)}
                  className={`w-full text-left font-medium text-lg px-4 py-3 rounded-2xl transition-colors duration-200 touch-manipulation focus:outline-none focus-visible:ring-2 focus-visible:ring-(--fratte-primary) ${
                    activeCategory === cat 
                    ? 'bg-neutral-900 text-white shadow-lg' 
                    : 'text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100'
                  }`}
                  aria-pressed={activeCategory === cat}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Content Area */}
        <div className="lg:w-3/4">
          <h2 className="heading-modern text-4xl font-bold text-neutral-900 mb-8 border-b border-neutral-200 pb-4">
            {activeCategory}
          </h2>

          {/* Semantic ul -> li lists for screen readers */}
          <ul className="space-y-6">
            {menu[activeCategory].map((item, idx) => (
              <li key={idx} className="bg-white rounded-3xl p-6 border border-neutral-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] transition-transform duration-300 hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                
                <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-4 mb-3">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="heading-modern text-2xl font-semibold text-neutral-900">
                      {item.it}
                    </h3>
                    {item.tag && (
                      <span className={`modern-tag ${
                        item.tag === 'Popular' ? 'tag-popular' : 
                        item.tag === 'Traditional' ? 'tag-traditional' : 'tag-chef'
                      }`}>
                        {item.tag}
                      </span>
                    )}
                  </div>
                  
                  <span className="text-xl font-bold text-(--fratte-primary)">
                    {item.price}
                  </span>
                </div>
                
                <p className="text-neutral-500 leading-relaxed max-w-xl text-pretty">
                  {item.en}
                </p>
                
              </li>
            ))}
          </ul>
          
          <div className="mt-16 bg-neutral-50 rounded-2xl p-6 border border-neutral-100 text-center text-sm text-neutral-500">
            <span aria-hidden="true" className="block text-2xl mb-2">🥖</span>
            {idioma === 'IT' ? 'Coperto e Pane inclusi: € 3,00' : 'Bread & Cover Charge included: € 3.00'}<br/>
            {idioma === 'IT' ? 'Informazioni su allergeni disponibili su richiesta.' : 'Allergen information available upon request.'}
          </div>
        </div>

      </main>

    </div>
  );
}

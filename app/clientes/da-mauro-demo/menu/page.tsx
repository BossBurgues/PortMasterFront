"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useIdioma } from "../LanguageContext";

export default function DaMauroMenu() {
  const { idioma, alternarIdioma } = useIdioma();
  const [activeTab, setActiveTab] = useState<'Antipasti' | 'Primi' | 'Secondi' | 'Dolci'>('Antipasti');

  const menuData = {
    tabs: ['Antipasti', 'Primi', 'Secondi', 'Dolci'] as const,
    items: {
      Antipasti: [
        { name: "Vitello Tonnato", desc: "Thinly sliced veal served with a creamy tuna sauce", price: "€16" },
        { name: "Battuta di Fassona", desc: "Hand-chopped Fassona beef tartare, aged Castelmagno cheese", price: "€18" },
        { name: "Flan di Peperoni", desc: "Bell pepper flan with warm bagna càuda reduction", price: "€14" }
      ],
      Primi: [
        { name: "Agnolotti al Plin", desc: "Traditional pinched ravioli with roast meat drippings", price: "€18" },
        { name: "Tajarin al Tartufo Bianco", desc: "40-yolk fresh pasta with butter and Alba white truffle", price: "€32" },
        { name: "Risotto al Barolo", desc: "Carnaroli rice slow cooked in Barolo wine and alpine butter", price: "€20" }
      ],
      Secondi: [
        { name: "Brasato al Nebbiolo", desc: "Slow-braised beef chuck in Nebbiolo wine, served with polenta", price: "€24" },
        { name: "Guancia di Vitello", desc: "Veal cheek braised for 12 hours, potato cream", price: "€26" },
        { name: "Fritto Misto alla Piemontese", desc: "Traditional mix of sweet and savory fried bites", price: "€28" }
      ],
      Dolci: [
        { name: "Bonèt della Nonna", desc: "Piedmontese chocolate and amaretti flan", price: "€9" },
        { name: "Panna Cotta Tradizionale", desc: "Vanilla bean panna cotta, fresh berries coulis", price: "€8" },
        { name: "Torta di Nocciole", desc: "Langhe hazelnut cake served with warm zabaglione", price: "€10" }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-(--mauro-bg) py-20 lg:py-32 font-body text-(--mauro-text-dark)">
      
      <div className="container mx-auto px-6 md:px-12 max-w-5xl relative">
        
        {/* Navigation & Toolbar */}
        <div className="flex justify-between items-center mb-16 lg:mb-24">
          <Link href="/clientes/da-mauro-demo" className="text-xs uppercase tracking-[0.2em] font-medium text-(--mauro-secondary) hover:text-(--mauro-primary) transition-colors">
            {idioma === 'IT' ? '← Torna al Ristorante' : '← Back to Homepage'}
          </Link>
          <button onClick={alternarIdioma} className="text-xs uppercase font-bold tracking-widest text-(--mauro-primary) hover:opacity-70">
            {idioma === 'IT' ? 'Read in English' : 'Leggi in Italiano'}
          </button>
        </div>

        {/* Paper Surface "Menu Card" - No borders, just soft shadow and background layer */}
        <div className="paper-surface-1 p-10 md:p-20 xl:p-24 soft-ambient-shadow">
          
          <div className="text-center mb-24">
            <h1 className="heading-serif text-5xl md:text-7xl text-(--mauro-primary) mb-6">
              Il Menù
            </h1>
            <p className="text-(--mauro-secondary) tracking-[0.2em] uppercase text-xs md:text-sm font-light">
               Dal 1985 • Torino
            </p>
          </div>

          {/* Abstract Tab Navigation / Vertical Layout on Mobile, Horizontal on Desktop */}
          <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
            
            {/* Sidebar Categories */}
            <div className="md:w-1/4">
              <ul className="flex flex-row md:flex-col gap-6 md:gap-8 overflow-x-auto no-scrollbar md:sticky top-32">
                {menuData.tabs.map((tab) => (
                  <li key={tab} className="shrink-0">
                    <button 
                      onClick={() => setActiveTab(tab)}
                      className={`text-lg md:text-xl heading-serif transition-colors ${activeTab === tab ? 'text-(--mauro-primary) italic' : 'text-(--mauro-secondary) hover:text-(--mauro-text-dark)'}`}
                    >
                      {tab}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Content Area - Clean, No lines/dividers */}
            <div className="md:w-3/4">
              <h2 className="heading-serif text-3xl md:text-4xl text-(--mauro-primary) mb-16 italic pb-2">
                {activeTab}
              </h2>
              
              <div className="flex flex-col gap-16">
                {menuData.items[activeTab].map((item, idx) => (
                  <div key={idx} className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-2">
                    <div className="max-w-md">
                      <h3 className="heading-serif text-2xl text-(--mauro-text-dark) mb-3">
                        {item.name}
                      </h3>
                      {/* Subtitle in English (per instructions: "Short English description") */}
                      <p className="font-body text-(--mauro-secondary) leading-relaxed italic opacity-80">
                        {item.desc}
                      </p>
                    </div>
                    {/* Price Placeholder */}
                    <span className="font-body font-medium text-lg text-(--mauro-primary) mt-2 md:mt-0">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Footer Note */}
          <div className="mt-32 pt-20 text-center font-body text-xs text-(--mauro-secondary) uppercase tracking-widest opacity-60">
            {idioma === 'IT' ? 'Coperto €4 • Pane a lievitazione naturale incluso' : 'Cover charge €4 • Sourdough bread included'}
          </div>

        </div>

      </div>
    </div>
  );
}

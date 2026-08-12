"use client";

import React, { useState } from "react";
import Link from "next/link";
import { RiArrowLeftLine, RiRestaurantLine } from "@remixicon/react";
import { useIdioma } from "../LanguageContext";

/**
 * Menu Digital do Ristorante Alba
 * Layout limpo, tradicional e ultra-legível.
 */
export default function MenuPage() {
  const { idioma, alternarIdioma } = useIdioma();
  const [activeCategory, setActiveCategory] = useState<string>("Tutto");

  // Dados do menu - Simples e clássicos de Turim
  const menuData = {
    IT: {
      categories: ["Tutto", "Antipasti", "Primi Piatti", "Secondi Piatti", "Dolci"],
      items: [
        { cat: "Antipasti", name: "Albese al Coltello", desc: "Carne cruda di fassona, scaglie di grana e un filo d'olio", price: "12" },
        { cat: "Antipasti", name: "Acciughe al Verde", desc: "Piatto povero della tradizione piemontese con bagnetto verde", price: "8" },
        { cat: "Antipasti", name: "Insalata Russa", desc: "La nostra versione classica fatta in casa ogni mattina", price: "7" },
        { cat: "Primi Piatti", name: "Agnolotti al Ragù Bianco", desc: "Tipici agnolotti ripieni di tre carni, serviti al ragù", price: "12" },
        { cat: "Primi Piatti", name: "Tajarin al Burro di Montagna", desc: "Pasta all'uovo freschissima con burro fuso e salvia", price: "10" },
        { cat: "Primi Piatti", name: "Gnocchi alla Fontina", desc: "Morbidi gnocchi di patate con fonduta di fontina d'alpeggio", price: "11" },
        { cat: "Secondi Piatti", name: "Salsiccia e Polenta Macinata a Pietra", desc: "Salsiccia artigianale cotta nel vino rosso su polenta calda", price: "14" },
        { cat: "Secondi Piatti", name: "Arrosto di Vitello", desc: "Cotto lentamente con il suo fondo di cottura e patate al forno", price: "15" },
        { cat: "Secondi Piatti", name: "Tagliata di Fassona", desc: "Servita con aromi dell'orto e insalatina di stagione", price: "18" },
        { cat: "Dolci", name: "Panna Cotta al Caramello", desc: "La ricetta storica del nostro ristorante", price: "5" },
        { cat: "Dolci", name: "Bonet Monferrino", desc: "Budino tradizionale con cacao, amaretti e rum", price: "6" },
      ]
    },
    EN: {
      categories: ["All", "Starters", "Pasta & Rice", "Main Courses", "Desserts"],
      items: [
        { cat: "Starters", name: "Hand-chopped Albese Beef", desc: "Raw fassona beef, parmesan shavings and local olive oil", price: "12" },
        { cat: "Starters", name: "Anchovies in Green Sauce", desc: "Traditional Piedmontese poor dish with garlic and parsley sauce", price: "8" },
        { cat: "Starters", name: "Russian Salad", desc: "Our own classic version made from scratch every morning", price: "7" },
        { cat: "Pasta & Rice", name: "Agnolotti with White Ragù", desc: "Traditional three-meat ravioli served with roast gravy", price: "12" },
        { cat: "Pasta & Rice", name: "Handmade Tajarin with Grass-fed Butter", desc: "Fresh egg pasta with melted butter and fresh sage", price: "10" },
        { cat: "Pasta & Rice", name: "Fontina Gnocchi", desc: "Soft potato gnocchi with alpine fontina cheese fondue", price: "11" },
        { cat: "Main Courses", name: "Artisanal Sausage and Stone-ground Polenta", desc: "Local sausage cooked in red wine over creamy polenta", price: "14" },
        { cat: "Main Courses", name: "Braised Veal Roast", desc: "Slow-cooked with pan gravy and roasted potatoes", price: "15" },
        { cat: "Main Courses", name: "Fassona Beef Tagliata", desc: "Served with garden herbs and seasonal greens", price: "18" },
        { cat: "Desserts", name: "Caramel Panna Cotta", desc: "The historical recipe of our restaurant", price: "5" },
        { cat: "Desserts", name: "Piedmontese Bonet", desc: "Traditional cocoa pudding with amaretti and rum", price: "6" },
      ]
    }
  };

  const t = menuData[idioma];

  const filteredItems = activeCategory === 'Tutto' || activeCategory === 'All'
    ? t.items
    : t.items.filter(item => item.cat === activeCategory);

  return (
    <div className="min-h-screen bg-[#F5F1E8] pb-32">
      {/* Menu Header */}
      <header className="bg-white border-b-2 border-[#6F8F5E]/10 py-12">
        <div className="container mx-auto px-4 md:px-8">
          <Link 
            href="/clientes/alba-demo" 
            className="inline-flex items-center gap-2 text-gray-400 hover:text-[#6F8F5E] text-xs uppercase tracking-widest font-bold transition-colors mb-6"
          >
            <RiArrowLeftLine className="w-4 h-4" />
            {idioma === "IT" ? "Torna alla Home" : "Back Home"}
          </Link>
          
          <div className="flex justify-between items-end">
            <div>
              <h1 className="text-4xl md:text-7xl heading-serif mb-4">Il Nostro Menù</h1>
              <p className="text-[#6F8F5E] font-bold text-sm tracking-[0.2em] uppercase">Semplice, Fresco, Genuiuino</p>
            </div>
            <button 
                onClick={alternarIdioma}
                className="text-xs font-bold ring-1 ring-[#6F8F5E]/30 px-3 py-1.5 rounded hover:bg-[#6F8F5E] hover:text-white transition-all h-fit"
              >
                {idioma === "IT" ? "EN" : "IT"}
            </button>
          </div>
        </div>
      </header>

      {/* Categories Bar */}
      <div className="sticky top-0 z-40 bg-[#F5F1E8]/90 backdrop-blur-md border-b border-[#6F8F5E]/5 shadow-sm">
        <div className="container mx-auto px-4">
          <ul className="flex overflow-x-auto no-scrollbar gap-10 py-6">
            {t.categories.map((cat) => (
              <li key={cat}>
                <button
                  onClick={() => setActiveCategory(cat)}
                  className={`text-xs uppercase tracking-[0.2em] font-bold transition-all whitespace-nowrap ${
                    activeCategory === cat ? "text-[#6F8F5E] border-b-2 border-[#6F8F5E] pb-2" : "text-gray-400 hover:text-[#1A1A1A]"
                  }`}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Menu Items */}
      <main className="container mx-auto px-4 md:px-8 mt-20 max-w-4xl">
        <div className="space-y-24">
          {t.categories.filter(c => c !== "Tutto" && c !== "All").map((groupLabel) => {
            const groupItems = filteredItems.filter(i => i.cat === groupLabel);
            if (groupItems.length === 0) return null;

            return (
              <section key={groupLabel}>
                <div className="flex items-center gap-6 mb-12">
                  <RiRestaurantLine className="w-6 h-6 text-[#6F8F5E] opacity-40 shrink-0" />
                  <h2 className="text-3xl heading-serif text-[#1A1A1A] italic">{groupLabel}</h2>
                  <div className="flex-1 h-px bg-linear-to-r from-[#6F8F5E]/20 to-transparent" />
                </div>

                <div className="grid gap-12">
                  {groupItems.map((item, idx) => (
                    <div key={idx} className="group">
                      <div className="flex justify-between items-baseline mb-2 gap-4">
                        <h3 className="text-xl font-bold heading-serif text-[#1A1A1A] group-hover:text-[#6F8F5E] transition-colors">{item.name}</h3>
                        <div className="flex-1 border-b border-dotted border-gray-300 mx-4 relative -top-1.5" />
                        <span className="text-xl font-bold text-[#6F8F5E]">€{item.price}</span>
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed max-w-xl italic">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        {/* Footer Info */}
        <div className="mt-32 pt-16 border-t border-gray-200 text-center">
            <p className="text-xs text-gray-400 uppercase tracking-widest leading-loose">
              {idioma === "IT" 
                ? "* Coperto e Pane inclusi: € 2,00 | Prodotti stagionali selezionati" 
                : "* Service & Bread: € 2.00 | Hand-picked seasonal ingredients"}
              <br />
              {idioma === "IT" 
                ? "Per allergeni, rivolgersi al nostro personale di sala" 
                : "Please ask our staff for allergy information"}
            </p>
        </div>
      </main>
    </div>
  );
}

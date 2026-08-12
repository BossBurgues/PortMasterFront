"use client";

import React, { useState } from "react";
import Link from "next/link";
import { RiArrowLeftLine } from "@remixicon/react";
import { useIdioma } from "../LanguageContext";

export default function MenuPage() {
  const { idioma, alternarIdioma } = useIdioma();

  const [activeCategory, setActiveCategory] = useState<string>("Tutto");

  // Reseta a categoria para "Tutto" ou "All" quando o idioma muda para evitar inconsistências
  React.useEffect(() => {
    setActiveCategory(idioma === "IT" ? "Tutto" : "All");
  }, [idioma]);

  const menuData = {
    IT: {
      categories: ["Tutto", "Antipasti", "Primi Piatti", "Secondi Piatti", "I Funghi", "Pizze", "Dolci", "Vini"],
      items: [
        { cat: "Antipasti", name: "Battuta di Fassona", desc: "Tagliata a coltello, scaglie di Castelmagno e nocciole tostate", price: "14" },
        { cat: "Antipasti", name: "Vitello Tonnato", desc: "Girello cotto a bassa temperatura con salsa della tradizione", price: "12" },
        { cat: "Antipasti", name: "Flan di Verdure", desc: "Sformato di stagione con fonduta di toma locale", price: "10" },
        { cat: "Primi Piatti", name: "Agnolotti del Plin", desc: "Fatti a mano, serviti al sugo d'arrosto", price: "14" },
        { cat: "Primi Piatti", name: "Tajarin ai Funghi Porcini", desc: "Pasta fresca all'uovo con sugo ricco di porcini di Giaveno", price: "16" },
        { cat: "Primi Piatti", name: "Risotto al Barolo", desc: "Riso Carnaroli sfumato al Barolo e salsiccia di Bra", price: "15" },
        { cat: "Secondi Piatti", name: "Brasato al Nebbiolo", desc: "Con polenta taragna macinata a pietra", price: "18" },
        { cat: "Secondi Piatti", name: "Cinghiale in Civet", desc: "Lunga cottura nel vino rosso con erbe aromatiche", price: "18" },
        { cat: "I Funghi", name: "Porcini Fritti", desc: "Cappellotto fritto dorato (in stagione)", price: "20" },
        { cat: "I Funghi", name: "Cappelle di Porcini alla Piastra", desc: "Con olio evo, aglio e prezzemolo fresco", price: "18" },
        { cat: "Pizze", name: "La Valsangone", desc: "Pomodoro, mozzarella, porcini freschi, salsiccia, scaglie di pecorino", price: "12" },
        { cat: "Pizze", name: "Margherita Classica", desc: "Pomodoro San Marzano, fiordilatte, basilico fresco", price: "7" },
        { cat: "Dolci", name: "Bunet della Nonna", desc: "Budino piemontese con cacao, amaretti e rum", price: "6" },
        { cat: "Dolci", name: "Tiramisù Artigianale", desc: "Mascarpone fresco, savoiardi e caffè moka", price: "6" },
        { cat: "Vini", name: "Dolcetto d'Alba DOC", desc: "Calice / Bottiglia", price: "5 / 18" },
        { cat: "Vini", name: "Barbera d'Asti Superiore", desc: "Calice / Bottiglia", price: "6 / 22" },
      ]
    },
    EN: {
      categories: ["All", "Starters", "First Courses", "Main Courses", "Mushrooms", "Pizzas", "Desserts", "Wines"],
      items: [
        { cat: "Starters", name: "Fassona Beef Tartare", desc: "Hand-chopped, Castelmagno cheese shavings, roasted hazelnuts", price: "14" },
        { cat: "Starters", name: "Vitello Tonnato", desc: "Slow-cooked veal with traditional tuna sauce", price: "12" },
        { cat: "Starters", name: "Vegetable Flan", desc: "Seasonal vegetable pie with local cheese fondue", price: "10" },
        { cat: "First Courses", name: "Agnolotti del Plin", desc: "Handmade small ravioli served with roast gravy", price: "14" },
        { cat: "First Courses", name: "Tajarin with Porcini Mushrooms", desc: "Fresh egg pasta with rich Giaveno porcini sauce", price: "16" },
        { cat: "First Courses", name: "Barolo Risotto", desc: "Carnaroli rice cooked with Barolo wine and Bra sausage", price: "15" },
        { cat: "Main Courses", name: "Braised Beef in Nebbiolo", desc: "Served with stone-ground taragna polenta", price: "18" },
        { cat: "Main Courses", name: "Wild Boar Civet", desc: "Slow-cooked in red wine with aromatic herbs", price: "18" },
        { cat: "Mushrooms", name: "Fried Porcini", desc: "Golden fried mushroom caps (seasonal)", price: "20" },
        { cat: "Mushrooms", name: "Grilled Porcini Caps", desc: "With extra virgin olive oil, garlic, and fresh parsley", price: "18" },
        { cat: "Pizzas", name: "The Valsangone", desc: "Tomato, mozzarella, fresh porcini, sausage, pecorino shavings", price: "12" },
        { cat: "Pizzas", name: "Classic Margherita", desc: "San Marzano tomato, fiordilatte cheese, fresh basil", price: "7" },
        { cat: "Desserts", name: "Grandma's Bunet", desc: "Piedmontese pudding with cocoa, amaretti, and rum", price: "6" },
        { cat: "Desserts", name: "Artisanal Tiramisù", desc: "Fresh mascarpone, ladyfingers, and moka coffee", price: "6" },
        { cat: "Wines", name: "Dolcetto d'Alba DOC", desc: "Glass / Bottle", price: "5 / 18" },
        { cat: "Wines", name: "Barbera d'Asti Superiore", desc: "Glass / Bottle", price: "6 / 22" },
      ]
    }
  };

  const t = menuData[idioma];

  const filteredItems = activeCategory === 'Tutto' || activeCategory === 'All'
    ? t.items
    : t.items.filter(item => item.cat === activeCategory);

  return (
    <div className="min-h-screen bg-[#F5F1E8] pb-24">
      {/* Menu Header */}
      <header className="bg-[#1A1A1A] py-12 border-b-4 border-[#8B2C2C] relative">
        <div className="absolute top-4 left-4 md:top-8 md:left-8 z-10">
          <Link
            href="/clientes/valsangone-demo"
            className="inline-flex items-center gap-2 text-[#C2A46D] hover:text-[#F5F1E8] transition-colors text-sm uppercase tracking-widest"
          >
            <RiArrowLeftLine className="w-4 h-4" /> 
            {idioma === "IT" ? "Torna alla Home" : "Back to Home"}
          </Link>
        </div>
        
        <div className="absolute top-4 right-4 md:top-8 md:right-8 z-10">
           <button
             onClick={alternarIdioma}
             className="text-[#F5F1E8] text-sm tracking-widest font-semibold hover:text-[#C2A46D] transition-colors"
           >
             {idioma === "IT" ? "EN" : "IT"}
           </button>
        </div>

        <div className="container mx-auto px-4 text-center pt-8">
          <h1 className="text-4xl md:text-6xl heading-serif text-[#F5F1E8] italic mb-4">
            Il Menù
          </h1>
          <div className="w-24 h-px bg-[#C2A46D] mx-auto opacity-50"></div>
        </div>
      </header>

      {/* Categories Filter (Mobile Scrollable) */}
      <div className="border-b border-[rgba(139,44,44,0.1)] bg-[#e8e2d4]/50 sticky top-0 z-40 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <ul className="flex overflow-x-auto py-4 gap-6 no-scrollbar snap-x">
            {t.categories.map((cat, idx) => (
              <li key={idx} className="snap-start shrink-0">
                <button
                  onClick={() => setActiveCategory(cat)}
                  className={`text-sm uppercase tracking-widest px-2 py-1 transition-colors duration-300 ${
                    activeCategory === cat 
                      ? "text-[#8B2C2C] font-bold border-b-2 border-[#8B2C2C]" 
                      : "text-gray-500 hover:text-[#1A1A1A]"
                  }`}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Menu Layout */}
      <main className="container mx-auto px-4 lg:px-8 mt-16 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
          {t.categories.filter(c => c !== "Tutto" && c !== "All").map((groupName) => {
            const groupItems = filteredItems.filter(i => i.cat === groupName);
            
            if (groupItems.length === 0) return null;

            return (
              <section key={groupName} className="mb-8">
                <div className="flex items-center gap-4 mb-8">
                  <h2 className="text-2xl heading-serif text-[#8B2C2C] italic">
                    {groupName}
                  </h2>
                  <div className="flex-1 h-px bg-linear-to-r from-[#8B2C2C]/30 to-transparent"></div>
                </div>

                <ul className="space-y-6">
                  {groupItems.map((item, idx) => (
                    <li key={idx} className="group">
                      <div className="flex justify-between items-baseline mb-1 gap-4">
                        <h3 className="text-lg font-bold text-[#1A1A1A] heading-serif">
                          {item.name}
                        </h3>
                        <div className="flex-1 border-b border-dotted border-gray-400 opacity-40 mx-2 relative -top-1.5"></div>
                        <span className="text-lg font-bold text-[#8B2C2C]">
                          €{item.price}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed max-w-[85%]">
                        {item.desc}
                      </p>
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>
        
        {/* Taxa de serviço / informações adicionais */}
        <div className="mt-24 text-center border-t border-[rgba(139,44,44,0.1)] pt-12">
          <p className="text-sm text-gray-500 uppercase tracking-widest">
             {idioma === "IT" 
               ? "* Coperto: € 2,50 | Per allergie o intolleranze rivolgersi al personale" 
               : "* Cover charge: € 2.50 | Please inform our staff of any food allergies"}
          </p>
        </div>
      </main>

    </div>
  );
}

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "../LanguageContext";

// Mock data now with images and numeric prices for Intl.NumberFormat
const MENU_DATA = [
  {
    category: "pizze",
    items: [
      { id: 1, name: "Margherita Contemporanea", desc: "San Marzano DOP, bufala, basilico, EVO", price: 8.0, image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=800&auto=format&fit=crop" },
      { id: 2, name: "Pistacchio & Mortadella", desc: "Base bianca, mortadella IGP, granella", price: 12.0, image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800&auto=format&fit=crop" },
      { id: 3, name: "La Tartufata", desc: "Crema di tartufo, fior di latte, porcini", price: 14.0, image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop" },
      { id: 4, name: "Diavola 2.0", desc: "Spianata piccante, stracciatella, miele piccante", price: 11.0, image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=800&auto=format&fit=crop" },
    ]
  },
  {
    category: "antipasti",
    items: [
      { id: 5, name: "Crocchetta di Patate Artigianale", desc: "Cuore filante, pepe, parmigiano", price: 3.0, image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?q=80&w=800&auto=format&fit=crop" },
      { id: 6, name: "Montanarina Classica", desc: "Pomodoro, parmigiano, basilico fritto", price: 4.0, image: "https://images.unsplash.com/photo-1541745537411-b8046f8d8f70?q=80&w=800&auto=format&fit=crop" },
      { id: 7, name: "Frittatina di Pasta", desc: "Bucatini, besciamella, piselli, carne", price: 4.5, image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=800&auto=format&fit=crop" },
    ]
  },
  {
    category: "drinks",
    items: [
      { id: 8, name: "Soip Spritz", desc: "Aperol, prosecco, soda, twist arancia", price: 8.0, image: "https://images.unsplash.com/photo-1560508180-03f285f67eed?q=80&w=800&auto=format&fit=crop" },
      { id: 9, name: "Negroni Sbagliato", desc: "Campari, vermouth rosso, prosecco", price: 9.0, image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=800&auto=format&fit=crop" },
      { id: 10, name: "Birra Artigianale IPA", desc: "Alla spina, 33cl", price: 6.0, image: "https://images.unsplash.com/photo-1566816043818-a6d123d6874a?q=80&w=800&auto=format&fit=crop" },
    ]
  },
  {
    category: "desserts",
    items: [
      { id: 11, name: "Tiramisù al Pistacchio", desc: "Savoiardi, mascarpone, crema pistacchio", price: 6.5, image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?q=80&w=800&auto=format&fit=crop" },
      { id: 12, name: "Cheesecake Scomposta", desc: "Crumble, frutti rossi, crema formaggio", price: 6.0, image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=800&auto=format&fit=crop" },
    ]
  }
];

// Proper numeric formatter as per Web Interface Guidelines
const formatCurrency = (value: number) => 
  new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(value);

export default function SoipAmaurMenuPage() {
  const { t, language, setLanguage } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("pizze");

  return (
    <div className="bg-[#f8f9fa] min-h-screen text-[#1a1a1a] pb-24 font-['Inter']">
      
      {/* Header Mobile-First */}
      <header className="bg-white sticky top-0 z-50 shadow-sm border-b border-gray-100">
        <div className="flex justify-between items-center p-4">
          <Link 
            href="/clientes/soip-amaur-demo" 
            className="text-gray-500 hover:text-[#00989F] font-medium text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00989F] rounded-md px-2 py-1"
          >
            {t("menu.back")}
          </Link>
          
          <div className="flex bg-gray-100 rounded-full p-1" role="group" aria-label="Language Options">
            <button 
              onClick={() => setLanguage("it")}
              className={`px-3 py-1 text-xs font-bold rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00989F] ${language === 'it' ? 'bg-white text-[#1a1a1a] shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}
              aria-pressed={language === 'it'}
            >
              IT
            </button>
            <button 
              onClick={() => setLanguage("en")}
              className={`px-3 py-1 text-xs font-bold rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00989F] ${language === 'en' ? 'bg-white text-[#1a1a1a] shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}
              aria-pressed={language === 'en'}
            >
              EN
            </button>
          </div>
        </div>

        {/* Title Area */}
        <div className="px-6 pb-6 pt-2">
          <h1 className="text-3xl font-bold font-['Outfit']">{t("menu.title")}</h1>
          <p className="text-gray-500 text-sm mt-1">{t("menu.subtitle")}</p>
        </div>

        {/* Categories Scroller */}
        <div 
          className="flex overflow-x-auto hide-scrollbar px-6 pb-4 gap-3"
          role="tablist"
          aria-label="Menu Categories"
        >
          {MENU_DATA.map((cat) => (
            <button
              key={cat.category}
              onClick={() => setActiveCategory(cat.category)}
              role="tab"
              aria-selected={activeCategory === cat.category}
              className={`whitespace-nowrap px-5 py-2.5 rounded-2xl text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00989F] ${
                activeCategory === cat.category 
                  ? "bg-[#00989F] text-white shadow-md shadow-[#00989F]/20" 
                  : "bg-white text-gray-600 border border-gray-200 hover:border-[#00989F]/50 hover:text-[#00989F]"
              }`}
            >
              {t(`menu.categories.${cat.category}`)}
            </button>
          ))}
        </div>
      </header>

      {/* Menu Items List */}
      <main className="px-6 pt-8 max-w-3xl mx-auto animate-soip-fade-up">
        <div className="flex flex-col gap-4">
          {MENU_DATA.find(c => c.category === activeCategory)?.items.map((item) => (
            <article key={item.id} className="bg-white p-4 rounded-3xl shadow-xs border border-gray-100 flex gap-4 card-hover items-center">
              {/* Image Thumbnail */}
              <div className="flex-shrink-0 w-24 h-24 overflow-hidden rounded-2xl bg-gray-100">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  loading="lazy" 
                  width={96} 
                  height={96} 
                  className="w-full h-full object-cover rounded-2xl" 
                />
              </div>

              {/* Text Info */}
              <div className="flex-1 min-w-0 flex flex-col justify-center">
                <div className="flex justify-between items-start gap-2">
                  <h3 className="font-bold text-lg text-[#1a1a1a] leading-tight mb-1 truncate">{item.name}</h3>
                  <div className="text-[#00989F] font-bold text-lg whitespace-nowrap pl-2">
                    {formatCurrency(item.price)}
                  </div>
                </div>
                <p className="text-gray-500 text-sm leading-snug line-clamp-2">{item.desc}</p>
              </div>
            </article>
          ))}
        </div>
        
        {/* Floating Action Button for Calling Waiter (UX bonus) */}
        <div className="fixed bottom-6 right-6 z-50">
           <a 
              href="https://wa.me/391234567890" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={t("hero.ctaBook") || "Book via WhatsApp"}
              className="w-16 h-16 bg-[#1a1a1a] text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-[#333] transition-transform hover:scale-105 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#00989F]"
            >
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
             </svg>
           </a>
        </div>
      </main>

      <style jsx global>{`
        /* Hide scrollbar for Chrome, Safari and Opera */
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        /* Hide scrollbar for IE, Edge and Firefox */
        .hide-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>
    </div>
  );
}

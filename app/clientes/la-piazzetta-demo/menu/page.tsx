"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../LanguageContext";
import { useState, useMemo } from "react";

// --- Dados do Menu Mockados para Leitura Ultra Rápida ---
const menuItems = [
  // PIZZA
  {
    id: "p1",
    category: "pizza",
    price: 6.50,
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&auto=format&fit=crop",
    it: { name: "Margherita", desc: "Pomodoro, fior di latte, basilico fresco in uscita." },
    en: { name: "Margherita", desc: "Tomato, fior di latte, fresh basil on top." }
  },
  {
    id: "p2",
    category: "pizza",
    price: 8.00,
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=600&auto=format&fit=crop",
    it: { name: "Diavola", desc: "Pomodoro, fior di latte, salame piccante." },
    en: { name: "Diavola", desc: "Tomato, fior di latte, spicy salami." }
  },
  {
    id: "p3",
    category: "pizza",
    price: 7.50,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&auto=format&fit=crop",
    it: { name: "Ortolana", desc: "Pomodoro, fior di latte, verdure grigliate di stagione." },
    en: { name: "Ortolana", desc: "Tomato, fior di latte, seasonal grilled vegetables." }
  },
  {
    id: "p4",
    category: "pizza",
    price: 9.00,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&auto=format&fit=crop",
    it: { name: "Piazzetta Special", desc: "Mozzarella, salsiccia, funghi freschi, grana padano." },
    en: { name: "Piazzetta Special", desc: "Mozzarella, sausage, fresh mushrooms, grana padano." }
  },
  // DRINKS
  {
    id: "b1",
    category: "drinks",
    price: 2.50,
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=600&auto=format&fit=crop",
    it: { name: "Coca-Cola", desc: "In vetro da 33cl." },
    en: { name: "Coca-Cola", desc: "Glass bottle 33cl." }
  },
  {
    id: "b2",
    category: "drinks",
    price: 4.00,
    image: "https://images.unsplash.com/photo-1614316315516-778f24458f3f?w=600&auto=format&fit=crop",
    it: { name: "Birra Bionda", desc: "Birra alla spina media (40cl)." },
    en: { name: "Blonde Beer", desc: "Medium draft beer (40cl)." }
  },
  // DESSERTS
  {
    id: "d1",
    category: "desserts",
    price: 5.00,
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600&auto=format&fit=crop",
    it: { name: "Tiramisù", desc: "Il classico dolce artigianale." },
    en: { name: "Tiramisu", desc: "The classic artisanal dessert." }
  }
];

export default function PiazzettaMenuPage() {
  const { language, setLanguage, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>("pizza");

  const categories = ["pizza", "drinks", "desserts"];
  const en = language === "en";

  const formater = useMemo(() => new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "EUR"
  }), []);

  const filteredItems = menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#F5F5F5] font-sans pb-32">
      
      {/* HEADER SIMPLES & FAST */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-3xl mx-auto flex items-center justify-between px-4 py-3">
          <Link 
            href="/clientes/la-piazzetta-demo" 
            className="text-lg font-bold text-[#1A1A1A] hover:text-[#678561] focus-visible:ring-2 focus-visible:ring-[#678561] rounded-md outline-none transition-colors pr-2"
          >
            ← La Piazzetta
          </Link>
          <div className="flex bg-gray-100 rounded-full p-1">
            <button
              onClick={() => setLanguage("it")}
              aria-pressed={language === "it"}
              className={`px-3 py-1 text-xs font-black rounded-full transition-colors focus-visible:ring-2 focus-visible:ring-[#678561] outline-none ${!en ? "bg-white text-[#678561] shadow-sm" : "text-gray-400 hover:text-[#1A1A1A]"}`}
            >
              IT
            </button>
            <button
              onClick={() => setLanguage("en")}
              aria-pressed={language === "en"}
              className={`px-3 py-1 text-xs font-black rounded-full transition-colors focus-visible:ring-2 focus-visible:ring-[#678561] outline-none ${en ? "bg-white text-[#678561] shadow-sm" : "text-gray-400 hover:text-[#1A1A1A]"}`}
            >
              EN
            </button>
          </div>
        </div>
      </header>

      {/* HORIZONTAL MENU CATEGORIES */}
      <section className="bg-white border-b border-gray-100 sticky top-14 z-40 shadow-sm">
         <nav className="max-w-3xl mx-auto flex overflow-x-auto gap-4 px-4 py-3 hide-scrollbar snap-x no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                aria-pressed={activeCategory === cat}
                className={`snap-start shrink-0 px-5 py-2 rounded-full text-sm font-bold border-2 transition-colors focus-visible:ring-2 focus-visible:ring-[#678561] outline-none ${
                  activeCategory === cat 
                    ? "border-[#678561] bg-[#678561] text-white" 
                    : "border-gray-200 text-gray-400 bg-white hover:border-gray-300 hover:text-[#1A1A1A]"
                }`}
              >
                {t(`menu.${cat}`)}
              </button>
            ))}
         </nav>
      </section>

      {/* ITEMS LIST */}
      <main className="max-w-3xl mx-auto px-4 py-6">
        <header className="mb-6">
          <h1 className="text-3xl font-extrabold text-[#1A1A1A] tracking-tight">{t(`menu.${activeCategory}`)}</h1>
          <p className="text-gray-500 font-medium text-sm mt-1">{t(`category.${activeCategory}`)}</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredItems.map(item => (
            <article key={item.id} className="bg-white rounded-2xl p-4 flex gap-4 shadow-sm hover:shadow-md transition-shadow border border-gray-50">
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 shrink-0 bg-gray-100 rounded-xl overflow-hidden">
                <Image 
                  src={item.image} 
                  alt={item[language].name} 
                  fill 
                  className="object-cover" 
                  loading="lazy" 
                />
              </div>
              <div className="flex flex-col flex-1 py-1">
                <div className="flex justify-between items-start gap-2 mb-2">
                  <h3 className="font-bold text-[#1A1A1A] text-base leading-tight pr-2">{item[language].name}</h3>
                  <span className="font-extrabold text-[#678561] text-base">{formater.format(item.price)}</span>
                </div>
                <p className="text-xs text-gray-500 font-medium leading-relaxed line-clamp-3">
                  {item[language].desc}
                </p>
              </div>
            </article>
          ))}
          {filteredItems.length === 0 && (
            <div className="col-span-full py-16 text-center text-gray-400 font-bold">
              {en ? "No items found." : "Nessun prodotto trovato."}
            </div>
          )}
        </div>
      </main>

      {/* FLOATING DIRECT CONTACT FOR FAST ORDERS */}
      <a 
        href={`https://wa.me/391234567891?text=${encodeURIComponent(en ? "Hi, I'd like to order a pizza!" : "Ciao, vorrei ordinare una pizza!")}`} 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label={en ? "Order via WhatsApp" : "Ordina via WhatsApp"}
        className="fixed bottom-6 right-6 lg:right-10 bg-[#678561] text-white px-6 py-4 rounded-full font-bold flex items-center justify-center shadow-[0_8px_30px_rgb(103,133,97,0.4)] hover:bg-[#556E50] hover:-translate-y-1 transition-transform focus-visible:ring-4 focus-visible:ring-[#678561]/50 outline-none z-50 flex-row gap-2"
      >
        <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 3.825.001 6.938 3.113 6.938 6.938-.001 3.825-3.114 6.938-6.938 6.938z"/>
        </svg>
        <span className="hidden sm:inline">{en ? "Order Now" : "Ordina Ora"}</span>
      </a>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}

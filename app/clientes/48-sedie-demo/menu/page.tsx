"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../LanguageContext";
import { useState, useMemo } from "react";

// --- Dados do Menu Mockados ---
const menuItems = [
  // PIZZA
  {
    id: "p1",
    category: "pizza",
    price: 9.50,
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&auto=format&fit=crop",
    it: { name: "Margherita Autentica", desc: "Pomodoro San Marzano, fior di latte di Agerola, basilico fresco, olio EVO." },
    en: { name: "Authentic Margherita", desc: "San Marzano tomatoes, Agerola mozzarella, fresh basil, EVOO." }
  },
  {
    id: "p2",
    category: "pizza",
    price: 14.00,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop",
    it: { name: "Tartufo e Funghi", desc: "Crema di tartufo nero, funghi porcini, fior di latte, scaglie di Grana Padano DOP." },
    en: { name: "Truffle & Mushroom", desc: "Black truffle cream, porcini mushrooms, fior di latte, Grana Padano DOP shavings." }
  },
  {
    id: "p3",
    category: "pizza",
    price: 12.00,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format&fit=crop",
    it: { name: "Diavola 48", desc: "Salsa di pomodoro, fior di latte, spianata piccante calabra, olive infornate." },
    en: { name: "Diavola 48", desc: "Tomato sauce, fior di latte, spicy Calabrian salami, oven-baked olives." }
  },
  // SEAFOOD
  {
    id: "s1",
    category: "seafood",
    price: 22.00,
    image: "https://images.unsplash.com/photo-1559981440-621e25e1fe63?w=500&auto=format&fit=crop",
    it: { name: "Polpo Arrostito", desc: "Polpo rosticciato su crema di patate allo zafferano e crumble di olive nere." },
    en: { name: "Roasted Octopus", desc: "Roasted octopus on saffron potato cream with black olive crumble." }
  },
  {
    id: "s2",
    category: "seafood",
    price: 18.00,
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500&auto=format&fit=crop",
    it: { name: "Calamarata di Mare", desc: "Pasta artigianale con frutti di mare, pomodorini confit e prezzemolo fresco." },
    en: { name: "Seafood Calamarata", desc: "Artisanal pasta with mixed seafood, confit tomatoes, and fresh parsley." }
  },
  // MEAT
  {
    id: "m1",
    category: "meat",
    price: 26.00,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=500&auto=format&fit=crop",
    it: { name: "Tagliata di Manzo", desc: "Tagliata di scottona servita con rucola selvatica, pomodorini e scaglie di parmigiano." },
    en: { name: "Beef Tagliata", desc: "Premium beef slices served with wild baby rocket, tomatoes, and parmesan shavings." }
  },
  // DESSERTS
  {
    id: "d1",
    category: "desserts",
    price: 7.00,
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=500&auto=format&fit=crop",
    it: { name: "Tiramisù al Caffè", desc: "Mascarpone fresco, savoiardi inzuppati nel caffè espresso e cacao amaro." },
    en: { name: "Coffee Tiramisu", desc: "Fresh mascarpone, espresso-soaked ladyfingers, and bitter cocoa." }
  },
  // WINE
  {
    id: "w1",
    category: "wine",
    price: 35.00,
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=500&auto=format&fit=crop",
    it: { name: "Primitivo di Manduria DOC", desc: "Corposo, con note di frutti rossi maturi e spezie leggere. 750ml." },
    en: { name: "Primitivo di Manduria DOC", desc: "Full-bodied, with notes of ripe red fruits and light spices. 750ml." }
  }
];

export default function SedieMenuPage() {
  const { language, setLanguage, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>("pizza");

  const categories = ["pizza", "seafood", "meat", "desserts", "wine"];
  const it = language === "it";

  const formater = useMemo(() => new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "EUR"
  }), []);

  const filteredItems = menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#F5F1E8] text-[#3E2C23] font-sans">
      {/* HEADER SIMPLES */}
      <header className="sticky top-0 z-50 bg-[#F5F1E8] border-b border-[#3E2C23]/10 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/clientes/48-sedie-demo" className="text-xl font-serif-custom font-bold text-[#7A1C1C] focus-visible:ring-2 focus-visible:ring-[#7A1C1C] rounded-sm pr-4 outline-none">
            &larr; 48 SEDIE
          </Link>
          <div className="flex gap-2">
            <button
              onClick={() => setLanguage("it")}
              aria-pressed={language === "it"}
              className={`text-xs font-bold w-7 h-7 flex items-center justify-center rounded-full transition-colors focus-visible:ring-2 focus-visible:ring-[#7A1C1C] outline-none ${language === "it" ? "bg-[#7A1C1C] text-[#F5F1E8]" : "hover:bg-[#3E2C23]/10"}`}
            >
              IT
            </button>
            <button
              onClick={() => setLanguage("en")}
              aria-pressed={language === "en"}
              className={`text-xs font-bold w-7 h-7 flex items-center justify-center rounded-full transition-colors focus-visible:ring-2 focus-visible:ring-[#7A1C1C] outline-none ${language === "en" ? "bg-[#7A1C1C] text-[#F5F1E8]" : "hover:bg-[#3E2C23]/10"}`}
            >
              EN
            </button>
          </div>
        </div>

        {/* CATEGORIAS HORIZONTAIS */}
        <div className="w-full bg-[#3E2C23]">
          <nav className="max-w-4xl mx-auto px-4 py-3 flex overflow-x-auto gap-4 hide-scrollbar snap-x no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                aria-pressed={activeCategory === cat}
                className={`snap-start shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-white outline-none ${
                  activeCategory === cat ? "bg-[#F5F1E8] text-[#7A1C1C] shadow-sm" : "text-[#F5F1E8]/70 hover:text-[#F5F1E8] hover:bg-white/10"
                }`}
              >
                {t(`menu.${cat}`)}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* CONTEÚDO DO MENU */}
      <main className="max-w-4xl mx-auto px-4 py-8 pb-32">
        <div className="mb-6">
          <h1 className="text-3xl font-serif-custom text-[#7A1C1C] capitalize">{t(`menu.${activeCategory}`)}</h1>
          <p className="text-[#3E2C23]/70 mt-1">{t(`category.${activeCategory}`)}</p>
        </div>

        <div className="flex flex-col gap-6">
          {filteredItems.map(item => (
            <div key={item.id} className="bg-white rounded-2xl shadow-sm border border-[#3E2C23]/5 overflow-hidden flex flex-row">
              <div className="relative w-28 h-28 sm:w-36 sm:h-auto shrink-0 bg-gray-100">
                <Image 
                  src={item.image} 
                  alt={item[language].name} 
                  fill 
                  className="object-cover" 
                  loading="lazy" 
                />
              </div>
              <div className="p-4 flex flex-col justify-center flex-1 min-w-0">
                <div className="flex justify-between items-start gap-4 mb-1">
                  <h3 className="font-serif-custom font-bold text-lg text-[#3E2C23] truncate">{item[language].name}</h3>
                  <p className="font-semibold text-[#7A1C1C] whitespace-nowrap">{formater.format(item.price)}</p>
                </div>
                <p className="text-sm text-[#3E2C23]/70 leading-snug line-clamp-2 mt-1">
                  {item[language].desc}
                </p>
              </div>
            </div>
          ))}
          {filteredItems.length === 0 && (
            <p className="text-center text-[#3E2C23]/50 py-12">{it ? "Nessun elemento trovato." : "No items found."}</p>
          )}
        </div>
      </main>

      {/* FAB WHATSAPP */}
      <a 
        href={`https://wa.me/391234567890?text=${encodeURIComponent(it ? "Ciao, vorrei prenotare o avere informazioni sul menu." : "Hi, I'd like to book or ask about the menu.")}`} 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label={it ? "Prenota su WhatsApp" : "Book via WhatsApp"}
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-green-600 transition-transform transform hover:-translate-y-1 focus-visible:ring-4 focus-visible:ring-green-400 outline-none z-50 ring-4 ring-white/50"
      >
        <svg className="w-8 h-8 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 3.825.001 6.938 3.113 6.938 6.938-.001 3.825-3.114 6.938-6.938 6.938z"/>
        </svg>
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

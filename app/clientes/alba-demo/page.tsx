"use client";

import React, { useState, useEffect } from "react";
import { RiMenuLine, RiMapPinLine, RiPhoneLine, RiTimeLine } from "@remixicon/react";
import Link from "next/link";
import { useIdioma } from "./LanguageContext";

/**
 * Ristorante Alba - Landing Page
 * Foco: Tradição, comida caseira e praticidade para moradores e trabalhadores de Turim.
 */
export default function AlbaHome() {
  const { idioma, alternarIdioma } = useIdioma();
  const [isScrolled, setIsScrolled] = useState(false);

  // Monitora o scroll para alterar o fundo do cabeçalho
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const content = {
    IT: {
      nav: {
        menu: "Il Menù",
        about: "Chi Siamo",
        contact: "Dove Siamo",
        cta: "Prenota",
      },
      hero: {
        subtitle: "Cucina Tradizionale Italiana a Torino",
        title: "Ristorante Alba",
        description: "Sapori casalinghi, ingredienti freschi e un'atmosfera familiare nel cuore di San Salvario.",
        cta: "Vedi il Menù",
      },
      about: {
        tagline: "La Nostra Storia",
        title: "Semplicità e Tradizione",
        description: "Il Ristorante Alba è un punto di riferimento a Torino per chi cerca piatti onesti e genuini. Dal pranzo di lavoro alla cena tra amici, accogliamo i nostri ospiti con il calore di casa e le migliori ricette della cucina italiana.",
      },
      highlights: {
        title: "I Nostri Punti di Forza",
        items: [
          { title: "Completamente Fatto in Casa", desc: "Dalla pasta fresca ai dolci, tutto nasce nella nostra cucina." },
          { title: "Ingredienti Locali", desc: "Senza compromessi sulla qualità, ogni giorno selezioniamo i migliori prodotti." },
          { title: "Atmosfera Familiare", desc: "Ti sentirai a casa, servito con cura e passione da oltre 30 anni." },
        ],
      },
      info: {
        title: "Informazioni Pratiche",
        address: "Via San Pio V, 8, Torino (TO)",
        phone: "+39 011 650 9876",
        hours: "Lun - Sab: 12:00-14:30 | 19:30-22:30",
        closed: "Domenica Chiuso",
      },
    },
    EN: {
      nav: {
        menu: "Our Menu",
        about: "About us",
        contact: "Location",
        cta: "Reserve",
      },
      hero: {
        subtitle: "Traditional Italian Cuisine in Turin",
        title: "Ristorante Alba",
        description: "Homemade flavors, fresh ingredients, and a family atmosphere in the heart of San Salvario.",
        cta: "View Menu",
      },
      about: {
        tagline: "Our Story",
        title: "Simplicity & Tradition",
        description: "Ristorante Alba is a Turin landmark for those seeking honest and genuine dishes. From business lunches to dinners with friends, we welcome our guests with home-style warmth and the best Italian recipes.",
      },
      highlights: {
        title: "What We Offer",
        items: [
          { title: "Everything Homemade", desc: "From fresh pasta to desserts, everything starts in our kitchen." },
          { title: "Local Ingredients", desc: "No compromise on quality, we select the best products every single day." },
          { title: "Family Atmosphere", desc: "You'll feel at home, served with care and passion for over 30 years." },
        ],
      },
      info: {
        title: "Quick Information",
        address: "Via San Pio V, 8, Turin (TO)",
        phone: "+39 011 650 9876",
        hours: "Mon - Sat: 12:00-14:30 | 19:30-22:30",
        closed: "Closed on Sundays",
      },
    },
  };

  const t = content[idioma];

  return (
    <div className="bg-[#F5F1E8] text-[#1A1A1A] font-body flex flex-col min-h-screen">
      
      {/* Cabeçalho de Navegação */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-[#F5F1E8]/95 backdrop-blur-md shadow-sm border-b border-[#6F8F5E]/10 py-3" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          <Link href="/clientes/alba-demo" className="heading-serif text-2xl md:text-3xl font-bold text-[#6F8F5E] tracking-tight">
            Alba
          </Link>
          
          <nav className="hidden md:flex items-center space-x-10">
            <Link href="/clientes/alba-demo/menu" className="text-sm font-semibold uppercase tracking-widest hover:text-[#6F8F5E] transition-colors">{t.nav.menu}</Link>
            <Link href="#about" className="text-sm font-semibold uppercase tracking-widest hover:text-[#6F8F5E] transition-colors">{t.nav.about}</Link>
            <Link href="#contact" className="text-sm font-semibold uppercase tracking-widest hover:text-[#6F8F5E] transition-colors">{t.nav.contact}</Link>
          </nav>

          <div className="flex items-center gap-6">
            <button 
              onClick={alternarIdioma}
              className="text-xs font-bold ring-1 ring-[#6F8F5E]/30 px-2 py-1 rounded hover:bg-[#6F8F5E] hover:text-white transition-all"
            >
              {idioma === "IT" ? "EN" : "IT"}
            </button>
            <Link href="/clientes/alba-demo/menu" className="bg-[#6F8F5E] text-white px-5 py-2 text-xs uppercase tracking-widest font-bold hover:bg-[#5A744C] transition-all hidden sm:block">
              {t.nav.cta}
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1541544741938-0af808871cc0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Ristorante Alba Atmosfera"
            className="w-full h-full object-cover opacity-15 grayscale-[30%]"
          />
          <div className="absolute inset-0 bg-[#F5F1E8]/40" />
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-3xl">
            <h2 className="text-[#6F8F5E] font-semibold uppercase tracking-[0.3em] text-sm md:text-base mb-6">
              {t.hero.subtitle}
            </h2>
            <h1 className="text-5xl md:text-8xl heading-serif text-[#1A1A1A] mb-8 leading-tight">
              {t.hero.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-12 leading-relaxed max-w-xl">
              {t.hero.description}
            </p>
            <Link 
              href="/clientes/alba-demo/menu" 
              className="inline-flex items-center bg-[#6F8F5E] text-white px-10 py-5 text-sm uppercase tracking-widest font-bold hover:bg-[#5A744C] transition-all shadow-xl shadow-[#6F8F5E]/10"
            >
              <RiMenuLine className="mr-3 w-5 h-5" />
              {t.hero.cta}
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="trattoria-border max-w-md mx-auto lg:mx-0">
              <img 
                src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Chef Preparando Pasta"
                className="w-full grayscale-[20%]"
              />
            </div>
            <div className="space-y-8">
              <span className="text-[#6F8F5E] font-bold text-sm tracking-widest uppercase">{t.about.tagline}</span>
              <h2 className="text-4xl md:text-6xl heading-serif leading-tight">{t.about.title}</h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                {t.about.description}
              </p>
              
              <div className="grid gap-8 mt-12 pt-12 border-t border-gray-100">
                {t.highlights.items.map((item, idx) => (
                  <div key={idx} className="flex gap-6">
                    <div className="w-1.5 h-1.5 bg-[#6F8F5E] rounded-full mt-2.5 shrink-0" />
                    <div>
                      <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                      <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info & Contact Section */}
      <section id="contact" className="py-24 md:py-32 bg-[#F5F1E8] border-y border-[#6F8F5E]/5">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl heading-serif mb-4">{t.info.title}</h2>
            <div className="w-12 h-1 bg-[#6F8F5E] mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto text-center">
             <div className="space-y-4">
              <RiMapPinLine className="w-8 h-8 text-[#6F8F5E] mx-auto" strokeWidth={1} />
              <h3 className="font-bold text-[#6F8F5E] tracking-widest uppercase text-xs">Punto</h3>
              <p className="text-lg leading-relaxed">{t.info.address}</p>
            </div>
            
             <div className="space-y-4">
              <RiPhoneLine className="w-8 h-8 text-[#6F8F5E] mx-auto" strokeWidth={1} />
              <h3 className="font-bold text-[#6F8F5E] tracking-widest uppercase text-xs">Contatto</h3>
              <p className="text-lg leading-relaxed">{t.info.phone}</p>
            </div>

            <div className="space-y-4">
              <RiTimeLine className="w-8 h-8 text-[#6F8F5E] mx-auto" strokeWidth={1} />
              <h3 className="font-bold text-[#6F8F5E] tracking-widest uppercase text-xs">Orari</h3>
              <div className="text-lg leading-relaxed">
                <p>{t.info.hours}</p>
                <p className="text-[#8B2C2C] font-semibold">{t.info.closed}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder Layout) */}
      <section className="h-[400px] bg-gray-200 relative grayscale hover:grayscale-0 transition-all duration-1000">
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
           {/* Mockup de mapa para Turim */}
           <div className="text-center p-8 border-2 border-dashed border-gray-300 rounded-lg">
             <RiMapPinLine className="w-12 h-12 text-gray-400 mx-auto mb-4" />
             <p className="text-sm text-gray-500 uppercase tracking-widest">Localização: San Salvario, Torino</p>
             <Link 
              href={`https://www.google.com/maps/dir/?api=1&destination=Via+San+Pio+V+8+Torino`}
              target="_blank"
              className="text-[#6F8F5E] font-bold text-xs mt-4 block hover:underline"
             >
               APRI IN GOOGLE MAPS
             </Link>
           </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white text-center border-t border-gray-100">
        <div className="container mx-auto px-4">
          <p className="heading-serif text-2xl font-bold text-[#6F8F5E] mb-4">Ristorante Alba</p>
          <p className="text-sm text-gray-400 uppercase tracking-widest">
            © {new Date().getFullYear()} - Torino, San Salvario
          </p>
        </div>
      </footer>
    </div>
  );
}

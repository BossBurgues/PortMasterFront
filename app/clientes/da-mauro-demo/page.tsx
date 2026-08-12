"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useIdioma } from "./LanguageContext";
import { RiMapPin2Line, RiTimeLine } from "@remixicon/react";

/**
 * Ristorante Da Mauro - Landing Page
 * Editorial, Heritage, Asymmetrical.
 */
export default function DaMauroHome() {
  const { idioma, alternarIdioma } = useIdioma();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const content = {
    IT: {
      nav: { menu: "Il Menù", story: "La Storia", location: "Dove Siamo", reserve: "Prenota" },
      hero: {
        headline: "Autentica Cucina Italiana a Torino dal 1964",
        sub: "Una tradizione di famiglia fatta di sapori piemontesi e ricette senza tempo.",
        cta1: "Sfoglia il Menù",
        cta2: "Riserva un Tavolo"
      },
      story: {
        title: "Le Radici del Gusto",
        text1: "Fondato nel 1964, il Ristorante Da Mauro nasce dall'amore profondo per la terra e per gli ingredienti genuini. Da oltre tre decenni, la nostra famiglia si dedica a custodire i segreti della tradizione piemontese e toscana, offrendo ai nostri ospiti non solo un pasto, ma un'autentica esperienza italiana.",
        text2: "Ogni mattina selezioniamo personalmente le materie prime: la carne migliore, le verdure di stagione, e la pasta fresca tirata a mano, proprio come si faceva una volta."
      },
      highlights: {
        title: "I Nostri Classici",
        items: [
          { name: "Vitello Tonnato", desc: "Sottilissime fette di vitello servite con una vellutata salsa tonnata, la quintessenza del Piemonte." },
          { name: "Risotto Cacio, Pepe e Tartufo", desc: "Cremoso risotto carnaroli impreziosito dal nostro amato tartufo locale." },
          { name: "Agnolotti al Sugo d'Arrosto", desc: "Pasta fresca ripiena, avvolta pazientemente e condita con puro succo d'arrosto." }
        ]
      },
      experience: {
        title: "Atmosfera e Calore",
        text: "Oltrepassare la soglia del nostro ristorante significa entrare in casa nostra. Abbiamo preservato l'eleganza classica e l'intimità pura, lontano dal frastuono moderno. I legni antichi, la luce calda e i colori del vino."
      },
      location: {
        address: "Via Ricasoli, 15 - Torino (TO)",
        hours: "Chiuso il Lunedì | Cena: 19:30 - 23:00",
        btn: "Come Raggiungerci"
      }
    },
    EN: {
      nav: { menu: "The Menu", story: "Our Story", location: "Location", reserve: "Reserve" },
      hero: {
        headline: "Authentic Italian Cuisine in Turin Since 1964",
        sub: "A family tradition of Piedmontese flavors and timeless recipes.",
        cta1: "View Menu",
        cta2: "Reserve a Table"
      },
      story: {
        title: "The Roots of Taste",
        text1: "Founded in 1964, Ristorante Da Mauro was born from a deep love for the land and genuine ingredients. For over three decades, our family has dedicated itself to preserving the secrets of Piedmontese and Tuscan tradition, offering our guests not just a meal, but an authentic Italian experience.",
        text2: "Every morning we personally select the raw materials: the finest meats, seasonal vegetables, and handmade fresh pasta, exactly the way it used to be done."
      },
      highlights: {
        title: "Our Classics",
        items: [
          { name: "Vitello Tonnato", desc: "Thinly sliced veal served with a velvety tuna sauce, the quintessence of Piedmont." },
          { name: "Risotto Cacio, Pepe & Truffle", desc: "Creamy carnaroli risotto enhanced by our beloved local truffle." },
          { name: "Agnolotti with Roast Gravy", desc: "Fresh stuffed pasta, patiently folded and dressed with pure roast meat cooking juices." }
        ]
      },
      experience: {
        title: "Atmosphere & Warmth",
        text: "Crossing the threshold of our restaurant means entering our home. We have preserved the classic elegance and pure intimacy, far from the modern noise. Antique woods, warm lighting, and wine tones."
      },
      location: {
        address: "Via Ricasoli, 15 - Turin, Italy",
        hours: "Closed on Mondays | Dinner: 7:30 PM - 11:00 PM",
        btn: "Get Directions"
      }
    }
  };

  const t = content[idioma];

  return (
    <div className="bg-(--mauro-bg) text-(--mauro-secondary) overflow-hidden">
      
      {/* Editorial Glass/Sticky Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-700 ${isScrolled ? 'bg-(--mauro-bg)/95 backdrop-blur-md py-4 shadow-[0_4px_30px_rgba(112,90,79,0.05)]' : 'bg-transparent py-8'}`}>
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link href="/clientes/da-mauro-demo" className={`heading-serif text-3xl md:text-4xl italic transition-colors duration-700 ${isScrolled ? 'text-(--mauro-primary)' : 'text-[#fdf9f0]'}`}>
            Da Mauro
          </Link>
          <div className="hidden lg:flex items-center gap-12 font-body uppercase text-xs tracking-[0.15em]">
            <Link href="/clientes/da-mauro-demo/menu" className={`hover:text-(--mauro-primary) transition-colors ${isScrolled ? 'text-(--mauro-secondary)' : 'text-[#fdf9f0]'}`}>{t.nav.menu}</Link>
            <Link href="#story" className={`hover:text-(--mauro-primary) transition-colors ${isScrolled ? 'text-(--mauro-secondary)' : 'text-[#fdf9f0]'}`}>{t.nav.story}</Link>
            <Link href="#location" className={`hover:text-(--mauro-primary) transition-colors ${isScrolled ? 'text-(--mauro-secondary)' : 'text-[#fdf9f0]'}`}>{t.nav.location}</Link>
          </div>
          <div className="flex items-center gap-6">
            <button onClick={alternarIdioma} className={`text-xs uppercase font-medium tracking-widest hover:opacity-70 transition-opacity ${isScrolled ? 'text-(--mauro-secondary)' : 'text-[#fdf9f0]'}`}>
              {idioma === 'IT' ? 'EN' : 'IT'}
            </button>
            <button className={`mauro-btn hidden sm:block ${isScrolled ? '' : 'bg-transparent border border-[#fdf9f0] hover:bg-[#fdf9f0] hover:text-(--mauro-primary)'} text-[11px]`}>
              {t.nav.reserve}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Cinematic Section */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Ristorante Intimacy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-wine-gradient" />
        </div>
        
        <div className="relative z-10 text-center max-w-4xl px-6 text-balance">
          <h1 className="heading-serif  text-5xl md:text-7xl lg:text-[6rem] leading-[1.1] text-white mb-8">
            {t.hero.headline}
          </h1>
          <p className="font-body text-lg md:text-2xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed mb-12">
            {t.hero.sub}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/clientes/da-mauro-demo/menu" className="mauro-btn w-full sm:w-auto">
              {t.hero.cta1}
            </Link>
            <button className="mauro-btn  text-white mauro-btn-outline border-white  hover:bg-white hover:text-(--mauro-primary) w-full sm:w-auto">
              {t.hero.cta2}
            </button>
          </div>
        </div>
      </section>

      {/* Story - Editorial Asymmetrical Spread */}
      <section id="story" className="py-32 lg:py-48 relative">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            
            <div className="lg:col-span-5 lg:col-start-2 order-2 lg:order-1 relative z-10">
              <h2 className="heading-serif text-4xl lg:text-5xl text-(--mauro-primary) mb-10 leading-tight">
                {t.story.title}
              </h2>
              <div className="space-y-8 font-body text-lg text-[var(--mauro-text-dark)] leading-loose font-light">
                <p>{t.story.text1}</p>
                <p>{t.story.text2}</p>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2">
              {/* Asymmetrical Image Placement */}
              <div className="relative aspect-[3/4] max-w-md ml-auto mr-0 lg:-mr-12 xl:-mr-24 paper-surface-1 p-6 soft-ambient-shadow">
                <img 
                  src="https://images.unsplash.com/photo-1595295333158-4742f28fbd85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Pasta making"
                  className="w-full h-full object-cover grayscale-[30%] contrast-125"
                />
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Highlights - Layered Paper Surfaces without borders */}
      <section className="py-32 paper-surface-1 relative">
        <div className="container mx-auto px-6 md:px-12 text-center max-w-6xl">
          <p className="uppercase tracking-[0.2em] text-(--mauro-primary) text-sm mb-6 font-medium">Dal 1985</p>
          <h2 className="heading-serif text-5xl mb-24 text-(--mauro-text-dark)">{t.highlights.title}</h2>

          <div className="grid md:grid-cols-3 gap-12 text-left">
            {t.highlights.items.map((item, idx) => (
              <div key={idx} className="bg-(--mauro-bg) p-12 soft-ambient-shadow transition-transform duration-700 hover:-translate-y-2">
                <span className="block text-(--mauro-primary) opacity-40 heading-serif text-6xl mb-4 italic leading-none">{idx + 1}.</span>
                <h3 className="heading-serif text-2xl mb-4 text-(--mauro-text-dark)">{item.name}</h3>
                <p className="font-body text-(--mauro-secondary) leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience - Asymmetrical Left-Aligned Image */}
      <section className="py-32 lg:py-48 bg-[var(--mauro-bg)]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            
            <div className="relative">
              <div className="aspect-[16/10] bg-[var(--mauro-surface-2)] p-4 lg:-ml-12 xl:-ml-24 soft-ambient-shadow">
                 <img 
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Restaurant Intimate Atmosphere"
                  className="w-full h-full object-cover grayscale-[10%]"
                />
              </div>
            </div>

             <div className="max-w-md mx-auto lg:mr-auto lg:ml-12">
              <h2 className="heading-serif text-4xl lg:text-5xl text-(--mauro-primary) mb-8">
                {t.experience.title}
              </h2>
              <p className="font-body text-lg leading-loose text-(--mauro-text-dark) font-light">
                {t.experience.text}
              </p>
            </div>
            
          </div>
        </div>
      </section>

      {/* Location / Simple CTA */}
      <section id="location" className="py-32 paper-surface-2 text-center border-t border-[var(--mauro-surface-1)]">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="heading-serif text-4xl mb-12 text-(--mauro-primary)">Ci Troviamo Qui</h2>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-12 mb-16">
            <div className="flex flex-col items-center">
              <RiMapPin2Line className="w-8 h-8 text-(--mauro-primary) mb-4" strokeWidth={1} />
              <p className="font-body text-lg text-(--mauro-text-dark)">{t.location.address}</p>
            </div>
            <div className="hidden sm:block w-px h-16 bg-(--mauro-primary) opacity-20" />
            <div className="flex flex-col items-center">
              <RiTimeLine className="w-8 h-8 text-(--mauro-primary) mb-4" strokeWidth={1} />
              <p className="font-body text-lg text-(--mauro-text-dark)">{t.location.hours}</p>
            </div>
          </div>

          <button className="mauro-btn mb-12">
            {t.location.btn}
          </button>
        </div>
      </section>

      {/* Footer Minimalista */}
      <footer className="bg-(--mauro-primary) text-[#fdf9f0] py-16 text-center">
        <div className="container mx-auto px-6">
          <h2 className="heading-serif text-3xl italic mb-6 text-[#fdf9f0]">Ristorante Da Mauro</h2>
          <p className="font-body text-sm font-light opacity-60 tracking-wider uppercase">
            © {new Date().getFullYear()} Dal 1985. Torino, Italia.
          </p>
        </div>
      </footer>

    </div>
  );
}

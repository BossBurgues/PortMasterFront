"use client";

import React, { useState, useEffect } from "react";
import { RiArrowRightLine, RiMapPinLine, RiPhoneLine, RiTimeLine, RiInstagramLine, RiFacebookCircleFill } from "@remixicon/react";
import Link from "next/link";
import { useIdioma } from "./LanguageContext";

export default function ValsangoneHome() {
  const { idioma, alternarIdioma } = useIdioma();
  const [isScrolled, setIsScrolled] = useState(false);

  // Efeito para detectar o scroll e mudar a aparência do cabeçalho
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
        about: "La Tradizione",
        contact: "Contattaci",
        book: "Prenota",
      },
      hero: {
        subtitle: "Cucina Tradizionale Italiana a Giaveno",
        title: "Ristorante Valsangone",
        description:
          "Sapori autentici, ingredienti del territorio e un'atmosfera accogliente. Custodi della tradizione dal 1968.",
        cta: "Scopri il Menù",
        cta2: "Prenota un Tavolo",
      },
      about: {
        tagline: "La Nostra Storia",
        title: "Tradizione & Esperienza",
        description:
          "Nel cuore di Giaveno, il Ristorante Valsangone rappresenta un punto di riferimento per gli amanti della cucina piemontese e dei funghi porcini. La nostra filosofia si basa sulla selezione rigorosa delle materie prime locali, rispettando le stagionalità e le antiche ricette del territorio.",
        highlight: "Specialità Funghi Porcini",
      },
      signature: {
        tagline: "Le Nostre Specialità",
        title: "Cucina del Territorio",
        items: [
          {
            title: "I Porcini di Giaveno",
            desc: "Selezionati accuratamente dai boschi locali, protagonisti dei nostri piatti migliori.",
          },
          {
            title: "Pasta Fresca Fatta a Mano",
            desc: "Agnolotti, tajarin e gnocchi preparati artigianalmente ogni giorno.",
          },
          {
            title: "Carni Scelte e Brasati",
            desc: "Tagli pregiati cotti lentamente secondo l'antica tradizione piemontese.",
          },
        ],
      },
      atmosphere: {
        title: "L'Atmosfera del Valsangone",
        desc: "Un ambiente caldo, familiare e raffinato. Il luogo ideale sia per cene intime che per ritrovi conviviali. Nelle calde serate estive, il nostro dehor offre un'oasi di tranquillità.",
        btn: "Vedi la Galleria",
      },
      contact: {
        title: "Vieni a Trovarci",
        address: "Via Roma 15, Giaveno (TO)",
        hours: "Mar - Dom: 12:00-14:30, 19:00-22:30. Chiuso Lunedì",
        phone: "+39 011 937 6543",
      },
    },
    EN: {
      nav: {
        menu: "Our Menu",
        about: "Tradition",
        contact: "Contact us",
        book: "Book a Table",
      },
      hero: {
        subtitle: "Traditional Italian Cuisine in Giaveno",
        title: "Ristorante Valsangone",
        description:
          "Authentic flavors, local ingredients, and a welcoming atmosphere. Guardians of tradition since 1968.",
        cta: "View Menu",
        cta2: "Book a Table",
      },
      about: {
        tagline: "Our Story",
        title: "Tradition & Experience",
        description:
          "In the heart of Giaveno, Ristorante Valsangone is a landmark for lovers of Piedmontese cuisine and porcini mushrooms. Our philosophy is based on the rigorous selection of local raw materials, respecting seasonality and ancient regional recipes.",
        highlight: "Porcini Mushroom Specialties",
      },
      signature: {
        tagline: "Our Specialties",
        title: "Local Cuisine",
        items: [
          {
            title: "Giaveno's Porcini",
            desc: "Carefully selected from local forests, the stars of our best dishes.",
          },
          {
            title: "Handmade Fresh Pasta",
            desc: "Agnolotti, tajarin, and gnocchi artisanally prepared every day.",
          },
          {
            title: "Select Meats and Braises",
            desc: "Premium cuts slow-cooked according to ancient Piedmontese tradition.",
          },
        ],
      },
      atmosphere: {
        title: "The Valsangone Atmosphere",
        desc: "A warm, familiar, and refined environment. The ideal place for both intimate dinners and convivial gatherings. During warm summer evenings, our outdoor patio offers an oasis of tranquility.",
        btn: "View Gallery",
      },
      contact: {
        title: "Come Visit Us",
        address: "Via Roma 15, Giaveno (TO), Italy",
        hours: "Tue - Sun: 12:00-14:30, 19:00-22:30. Closed Monday",
        phone: "+39 011 937 6543",
      },
    },
  };

  const t = content[idioma];

  return (
    <div className="bg-[#F5F1E8] text-[#1A1A1A] font-body">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          isScrolled
            ? "bg-[#F5F1E8]/95 backdrop-blur-md border-[#8B2C2C]/20 py-3 shadow-sm"
            : "bg-transparent border-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8 flex justify-between items-center">
          <Link
            href="/clientes/valsangone-demo"
            className={`heading-serif text-2xl lg:text-3xl font-bold italic tracking-wider transition-colors duration-300 ${
              isScrolled ? "text-[#8B2C2C]" : "text-[#F5F1E8]"
            }`}
          >
            Valsangone
          </Link>

          <nav className="hidden md:flex flex-1 justify-center space-x-12">
            {[ 
              ['/clientes/valsangone-demo/menu', t.nav.menu],
              ['#about', t.nav.about],
              ['#contact', t.nav.contact]
            ].map(([path, label]) => (
              <Link
                key={label}
                href={path}
                className={`text-sm tracking-widest uppercase transition-colors duration-300 hover:text-[#C2A46D] ${
                  isScrolled ? "text-[#1A1A1A]" : "text-[#F5F1E8]"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-6">
            <button
              onClick={alternarIdioma}
              className={`text-sm tracking-widest font-semibold hover:text-[#C2A46D] transition-colors ${
                isScrolled ? "text-[#1A1A1A]" : "text-[#F5F1E8]"
              }`}
            >
              {idioma === "IT" ? "EN" : "IT"}
            </button>
            <Link
              href="#book"
              className={`hidden lg:inline-flex items-center gap-2 px-6 py-2 border text-sm uppercase tracking-widest transition-all duration-300 ${
                isScrolled
                  ? "border-[#8B2C2C] text-[#8B2C2C] hover:bg-[#8B2C2C] hover:text-[#F5F1E8]"
                  : "border-[#F5F1E8] text-[#F5F1E8] hover:bg-[#F5F1E8] hover:text-[#1A1A1A]"
              }`}
            >
              {t.nav.book}
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#1A1A1A]">
          {/* Fallback image if real isn't available */}
          <img
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Ristorante Interior"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[rgba(26,26,26,0.9)] via-[rgba(26,26,26,0.4)] to-transparent" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <p className="text-[#C2A46D] uppercase tracking-[0.3em] text-sm mb-6 font-semibold">
            {t.hero.subtitle}
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl heading-serif text-[#F5F1E8] mb-8 italic">
            {t.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-[#e0dbd1] mb-12 max-w-2xl mx-auto leading-relaxed">
            {t.hero.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center mt-8">
            <Link
              href="/clientes/valsangone-demo/menu"
              className="px-10 py-4 bg-[#8B2C2C] text-[#F5F1E8] text-sm uppercase tracking-widest hover:bg-[#722323] transition-colors shadow-lg"
            >
              {t.hero.cta}
            </Link>
            <Link
              href="#book"
              className="px-10 py-4 border border-[#F5F1E8] text-[#F5F1E8] text-sm uppercase tracking-widest hover:bg-[#F5F1E8] hover:text-[#1A1A1A] transition-colors"
            >
              {t.hero.cta2}
            </Link>
          </div>
        </div>
      </section>

      {/* About/Tradition */}
      <section id="about" className="py-24 lg:py-32 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2 relative space-y-8">
              <p className="text-[#8B2C2C] uppercase tracking-widest text-sm font-bold border-b border-[#8B2C2C]/20 inline-block pb-1">
                {t.about.tagline}
              </p>
              <h2 className="text-4xl lg:text-6xl heading-serif text-[#1A1A1A] leading-tight">
                {t.about.title}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed max-w-lg">
                {t.about.description}
              </p>
              <div className="pt-6">
                <span className="inline-flex items-center gap-3 px-5 py-2 border border-[#C2A46D]/50 text-[#8B2C2C] bg-[#C2A46D]/10 text-sm tracking-wide font-medium">
                  ★ {t.about.highlight}
                </span>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 relative">
              <div className="vintage-border aspect-4/5 md:h-150 w-full max-w-md mx-auto relative overflow-hidden bg-[#e8e2d4]">
                <img
                  src="https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Tradition"
                  className="w-full h-full object-cover p-2"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Experience */}
      <section className="py-24 bg-[#1A1A1A] text-[#F5F1E8] relative">
        {/* Subtle decorative overlay via CSS class instead of inline style */}
        <div className="absolute top-0 left-0 w-full h-2 bg-repeat-x opacity-20 vintage-decoration-line"></div>
        
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[#C2A46D] uppercase tracking-widest text-sm mb-4">
              {t.signature.tagline}
            </p>
            <h2 className="text-4xl lg:text-5xl heading-serif mb-6">
              {t.signature.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {t.signature.items.map((item, idx) => (
              <div key={idx} className="group relative border border-[rgba(245,241,232,0.1)] p-8 hover:border-[#8B2C2C]/50 transition-colors duration-300">
                <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-[#8B2C2C] opacity-0 group-hover:opacity-100 transition-opacity -m-px"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 border-b border-l border-[#8B2C2C] opacity-0 group-hover:opacity-100 transition-opacity -m-px"></div>
                
                <h3 className="text-xl heading-serif text-[#C2A46D] mb-4">
                  {item.title}
                </h3>
                <p className="text-[rgba(245,241,232,0.7)] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link
              href="/clientes/valsangone-demo/menu"
              className="inline-flex items-center gap-3 text-[#C2A46D] uppercase tracking-widest text-sm hover:text-[#F5F1E8] transition-colors group"
            >
              {idioma === "IT" ? "Sfoglia tutto il menù" : "Browse full menu"} 
              <RiArrowRightLine className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Atmosphere Feature */}
      <section className="py-24 relative overflow-hidden border-y border-[#8B2C2C]/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <div className="relative">
              <div className="aspect-4/3 w-full overflow-hidden bg-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Atmosphere"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 border border-[#8B2C2C]/20 hidden md:block"></div>
            </div>
            <div className="space-y-6 max-w-lg">
              <h2 className="text-4xl heading-serif text-[#1A1A1A]">
                {t.atmosphere.title}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t.atmosphere.desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section id="contact" className="py-24 bg-[#EADCC7]/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl heading-serif text-[#1A1A1A] mb-4">
              {t.contact.title}
            </h2>
            <div className="w-16 h-px bg-[#8B2C2C] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto text-center">
            <div className="space-y-4">
              <RiMapPinLine className="w-8 h-8 text-[#8B2C2C] mx-auto" strokeWidth={1.5} />
              <p className="text-[#1A1A1A] font-medium">{t.contact.address}</p>
            </div>
            
             <div className="space-y-4">
              <RiTimeLine className="w-8 h-8 text-[#8B2C2C] mx-auto" strokeWidth={1.5} />
              <p className="text-[#1A1A1A] font-medium max-w-50 mx-auto">{t.contact.hours}</p>
            </div>

            <div className="space-y-4">
              <RiPhoneLine className="w-8 h-8 text-[#8B2C2C] mx-auto" strokeWidth={1.5} />
              <p className="text-[#1A1A1A] font-medium">{t.contact.phone}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] border-t border-[rgba(245,241,232,0.1)] py-12 text-[#F5F1E8]">
        <div className="container mx-auto px-4 lg:px-8 text-center space-y-6">
          <h3 className="heading-serif text-2xl tracking-widest italic text-[#C2A46D]">
            Ristorante Valsangone
          </h3>
          <p className="text-sm opacity-60">
            © {new Date().getFullYear()} Ristorante Valsangone. P.IVA 0123456789. All rights reserved.
          </p>
          <div className="flex justify-center gap-6 pt-4">
            <a href="#" className="hover:text-[#C2A46D] transition-colors" title="Instagram"><RiInstagramLine className="w-5 h-5" /></a>
            <a href="#" className="hover:text-[#C2A46D] transition-colors" title="Facebook"><RiFacebookCircleFill className="w-5 h-5" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

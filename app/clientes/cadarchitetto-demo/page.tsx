"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { 
  RiHotelLine, 
  RiMapPinLine, 
  RiFireLine, 
  RiCupLine, 
  RiWhatsappLine, 
  RiMailLine,
  RiPhoneLine,
  RiStarFill,
  RiMenuLine,
  RiCloseLine,
  RiGlobalLine,
  RiCheckLine,
  RiWindyLine,
  RiTimeLine,
  RiSnowyLine
} from "@remixicon/react";

// Importação das imagens reais do B&B
import imagemFachada from "./images/hero.png";
import imagemJardim from "./images/jardim.png";
import imagemQuarto from "./images/quarto.png";

/**
 * Tradução dos conteúdos da página
 */
const translations = {
  it: {
    nav: {
      rooms: "Camere",
      garden: "Il Giardino",
      location: "Posizione",
      pricing: "Prezzi",
      book: "PRENOTA"
    },
    hero: {
      badge: "Soggiorno Familiare a Surano",
      title: "La tua base autentica nel",
      accent: "Cuore del Salento.",
      desc: "Un piccolo B&B familiare con 3 camere indipendenti. Ideale per chi cerca autenticità, silenzio e la vera vita locale, a pochi minuti dalle perle dell'Adriatico.",
      cta: "Vedi Disponibilità",
      loc: "Centro di Surano (LE)"
    },
    highlights: [
      { title: "3 Camere", desc: "Bagno indipendente" },
      { title: "Barbecue", desc: "Nel nostro giardino" },
      { title: "Colazione", desc: "Inclusa nel prezzo" },
      { title: "Posizione", desc: "Vicina al mare" }
    ],
    pricing: {
      tag: "Tariffe",
      title: "Prezzi e Stagionalità",
      subtitle: "Prezzi per persona con soggiorno minimo 2 notti",
      period: "Periodo di attività: dal 01/04 al 31/10",
      lowSeason: "Bassa stagione (Apr-Mag-Giu-Set-Ott)",
      highSeason: "Alta stagione (Lug-Ago)",
      table: {
        item: "Servizio",
        low: "Bassa",
        high: "Alta",
        double: "Camera doppia",
        extraBed: "Letto supplementare",
        singleUse: "Supplemento doppia uso singola",
        oneNight: "Supplemento per una sola notte"
      },
      discounts: [
        "Sconto 10% per le notti successive alla sesta (Bassa stagione)",
        "Anticipo quale caparra: 30%",
        "Il B&B dispone di 3 camere con bagno indipendente (4-6 posti letto totali)"
      ]
    },
    services: {
      tag: "Comfort",
      title: "Servizi Inclusi",
      breakfastTitle: "Colazione e Ristoro",
      breakfastDesc: "Servita dalle ore 8:00 alle ore 9:30 in una struttura apposita.",
      cleaningTitle: "Pulizia e Igiene",
      cleaningDesc: "Pulizia giornaliera. Cambio biancheria ogni tre giorni.",
      roomsTitle: "Comfort in Camera",
      roomsDesc: "Reti a doghe, materassi ortopedici, zanzariere e ventilatori a soffitto.",
      acTitle: "Climatização (Opcional)",
      acDesc: "Aria condizionata disponibile con supplemento di € 2.50 al giorno per camera."
    },
    location: {
      title: "Nel Centro di Surano",
      desc: "Vivi come un locale, lontano dal caos, ma vicino a tutto:",
      castro: "10 min - Castro (Mare)",
      cesarea: "15 min - Santa Cesarea",
      otranto: "25 min - Otranto"
    },
    footer: {
      motto: "La semplicità è l'essenza della vita nel Salento.",
      contact: "Contatti",
      follow: "Seguici",
      reserved: "Tutti i diritti riservati",
      auth: "Autenticità Garantita"
    }
  },
  en: {
    nav: {
      rooms: "Rooms",
      garden: "The Garden",
      location: "Location",
      pricing: "Pricing",
      book: "BOOK NOW"
    },
    hero: {
      badge: "Family Stay in Surano",
      title: "Your authentic base in the",
      accent: "Heart of Salento.",
      desc: "A small family-run B&B with 3 independent rooms. Ideal for those seeking authenticity, silence, and true local life, just minutes from the Adriatic pearls.",
      cta: "Check Availability",
      loc: "Surano Center (LE)"
    },
    highlights: [
      { title: "3 Rooms", desc: "Private bathroom" },
      { title: "Barbecue", desc: "In our garden" },
      { title: "Breakfast", desc: "Included" },
      { title: "Location", desc: "Near the sea" }
    ],
    pricing: {
      tag: "Rates",
      title: "Prices & Seasons",
      subtitle: "Prices per person with a minimum 2-night stay",
      period: "Activity period: from 01/04 to 31/10",
      lowSeason: "Low Season (Apr-May-Jun-Sep-Oct)",
      highSeason: "High Season (Jul-Aug)",
      table: {
        item: "Service",
        low: "Low",
        high: "High",
        double: "Double Room",
        extraBed: "Extra Bed",
        singleUse: "Single Use Supplement",
        oneNight: "Single Night Supplement"
      },
      discounts: [
        "10% discount for nights after the 6th (Low Season only)",
        "Deposit: 30%",
        "The B&B has 3 rooms with independent bathrooms (total 4-6 beds)"
      ]
    },
    services: {
      tag: "Comfort",
      title: "Included Services",
      breakfastTitle: "Breakfast",
      breakfastDesc: "Served from 8:00 AM to 9:30 AM in a dedicated structure.",
      cleaningTitle: "Cleaning & Hygiene",
      cleaningDesc: "Daily room cleaning. Linen change every three days.",
      roomsTitle: "Room Comfort",
      roomsDesc: "Slatted bed bases, orthopedic mattresses, mosquito nets, and ceiling fans.",
      acTitle: "AC (Optional)",
      acDesc: "Air conditioning available for an extra charge of €2.50 per day per room."
    },
    location: {
      title: "In the center of Surano",
      desc: "Live like a local, away from the crowds, but close to everything:",
      castro: "10 min - Castro (Sea)",
      cesarea: "15 min - Santa Cesarea",
      otranto: "25 min - Otranto"
    },
    footer: {
      motto: "Simplicity is the essence of life in Salento.",
      contact: "Contact Us",
      follow: "Follow Us",
      reserved: "All rights reserved",
      auth: "Guaranteed Authenticity"
    }
  }
};

/**
 * Página Principal do Salento Ca' D'Architetto
 * Focada na realidade de um B&B de 3 quartos em Surano.
 */
export default function CadArchitettoRealPage() {
  const [lang, setLang] = useState<"it" | "en">("it");
  const [menuAberto, setMenuAberto] = useState(false);
  const [scrollei, setScrollei] = useState(false);

  const t = translations[lang];

  useEffect(() => {
    const lidarComScroll = () => setScrollei(window.scrollY > 50);
    window.addEventListener("scroll", lidarComScroll);
    return () => window.removeEventListener("scroll", lidarComScroll);
  }, []);

  // Alternar entre IT e EN
  const toggleLang = () => setLang(lang === "it" ? "en" : "it");

  return (
    <div className="tema-cadarchitetto min-h-screen selection:bg-orange-100 font-inter">
      
      {/* Navegação */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrollei ? "bg-white/95 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-8"}`}>
        <div className="cad-container flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-cad-primaria p-2 rounded-lg shadow-sm">
              <RiHotelLine className="text-white w-5 h-5" />
            </div>
            <h1 className="text-xl font-black tracking-tight text-cad-texto uppercase font-modern">
              Ca&apos; D&apos;Architetto <span className="font-light text-cad-primaria">Salento</span>
            </h1>
          </div>

          {/* Nav Desktop */}
          <div className="hidden md:flex gap-10 items-center text-[11px] font-extrabold uppercase tracking-[0.2em] text-cad-texto/70">
            <a href="#quartos" className="hover:text-cad-primaria transition-colors">{t.nav.rooms}</a>
            <a href="#prezzi" className="hover:text-cad-primaria transition-colors">{t.nav.pricing}</a>
            <a href="#jardim" className="hover:text-cad-primaria transition-colors">{t.nav.garden}</a>
            <a href="#localizacao" className="hover:text-cad-primaria transition-colors">{t.nav.location}</a>
            
            {/* Seletor de Idioma */}
            <button 
              onClick={toggleLang}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-cad-stone-dark hover:bg-cad-stone-light transition-all text-cad-texto"
            >
              <RiGlobalLine className="w-3.5 h-3.5" />
              <span>{lang.toUpperCase()}</span>
            </button>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="https://wa.me/393334455667" 
              className={`px-5 py-2.5 rounded-lg text-xs font-black flex items-center gap-2 transition-all
                ${scrollei ? "bg-cad-secundaria text-white shadow-lg shadow-cad-secundaria/20" : "bg-white text-cad-secundaria shadow-xl shadow-black/5"}
              `}
            >
              <RiWhatsappLine className="w-4 h-4" />
              <span className="hidden sm:inline font-modern">{t.nav.book}</span>
            </a>
            <button className="md:hidden text-cad-texto p-2" onClick={() => setMenuAberto(!menuAberto)}>
              {menuAberto ? <RiCloseLine size={28} /> : <RiMenuLine size={28} />}
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        <div className={`md:hidden absolute top-full left-0 w-full bg-white border-t p-8 space-y-6 transition-all duration-300 shadow-2xl ${menuAberto ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}`}>
          <a href="#quartos" onClick={() => setMenuAberto(false)} className="block font-bold text-lg">{t.nav.rooms}</a>
          <a href="#prezzi" onClick={() => setMenuAberto(false)} className="block font-bold text-lg">{t.nav.pricing}</a>
          <a href="#jardim" onClick={() => setMenuAberto(false)} className="block font-bold text-lg">{t.nav.garden}</a>
          <a href="#localizacao" onClick={() => setMenuAberto(false)} className="block font-bold text-lg">{t.nav.location}</a>
          <button onClick={() => { toggleLang(); setMenuAberto(false); }} className="w-full text-left font-bold text-lg flex items-center gap-2 border-t pt-6">
            <RiGlobalLine /> {lang === "it" ? "Switch to English" : "Cambia in Italiano"}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 md:pt-60 md:pb-32 overflow-hidden bg-[radial-gradient(circle_at_top_right,var(--cad-stone-light),transparent)]">
        <div className="cad-container grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="z-10 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-8">
              <div className="flex text-cad-destaque">
                {[...Array(5)].map((_, i) => <RiStarFill key={i} className="w-4 h-4" />)}
              </div>
              <span className="text-[10px] font-black text-cad-secundaria uppercase tracking-[0.3em]">{t.hero.badge}</span>
            </div>
            <h2 className="text-5xl md:text-7xl titulo-rustico mb-8 leading-[1.1]">
              {t.hero.title} <span className="text-cad-primaria">{t.hero.accent}</span>
            </h2>
            <p className="text-xl text-cad-texto/60 mb-12 leading-relaxed max-w-xl mx-auto lg:mx-0 font-light">
              {t.hero.desc}
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
              <a href="#prezzi" className="botao-simples">{t.hero.cta}</a>
              <div className="flex items-center gap-2.5 text-sm font-bold text-cad-secundaria/70">
                <RiMapPinLine className="w-5 h-5 text-cad-primaria" /> {t.hero.loc}
              </div>
            </div>
          </div>
          <div className="relative h-112.5 md:h-150 rounded-3xl overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.15)] group">
            <Image 
              src={imagemFachada} 
              alt="Salento B&B Facade" 
              fill 
              priority
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="py-24 bg-white border-y border-cad-stone-light">
        <div className="cad-container grid grid-cols-2 lg:grid-cols-4 gap-12">
          {t.highlights.map((item, i) => (
            <div key={i} className="text-center md:text-left space-y-4 group">
              <div className="text-cad-primaria w-14 h-14 flex items-center justify-center bg-cad-fundo rounded-2xl mx-auto md:mx-0 transition-all duration-300 group-hover:bg-cad-primaria group-hover:text-white group-hover:rotate-6">
                {i === 0 && <RiHotelLine size={24} />}
                {i === 1 && <RiFireLine size={24} />}
                {i === 2 && <RiCupLine size={24} />}
                {i === 3 && <RiMapPinLine size={24} />}
              </div>
              <div>
                <h4 className="font-black uppercase text-[10px] tracking-widest text-cad-texto">{item.title}</h4>
                <p className="text-sm text-cad-texto/40 font-medium">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tabela de Preços e Temporada */}
      <section id="prezzi" className="py-32 bg-cad-fundo/50">
        <div className="cad-container">
          <div className="max-w-3xl mx-auto text-center mb-20 space-y-4">
            <span className="tag-local">{t.pricing.tag}</span>
            <h3 className="text-4xl md:text-5xl titulo-rustico">{t.pricing.title}</h3>
            <p className="text-cad-texto/50 font-medium">{t.pricing.subtitle} • {t.pricing.period}</p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-cad-stone-light max-w-4xl mx-auto transition-transform hover:-translate-y-1 duration-500">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-cad-texto text-white">
                  <tr>
                    <th className="px-8 py-6 font-modern text-sm uppercase tracking-widest">{t.pricing.table.item}</th>
                    <th className="px-8 py-6 font-modern text-sm uppercase tracking-widest text-center">
                      <div className="text-white/60 text-[10px] mb-1">{t.pricing.lowSeason}</div>
                      {t.pricing.table.low}
                    </th>
                    <th className="px-8 py-6 font-modern text-sm uppercase tracking-widest text-center">
                      <div className="text-white/60 text-[10px] mb-1">{t.pricing.highSeason}</div>
                      {t.pricing.table.high}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-cad-stone-light">
                  <tr className="hover:bg-cad-stone-light/30 transition-colors">
                    <td className="px-8 py-6 font-bold text-cad-texto">{t.pricing.table.double}</td>
                    <td className="px-8 py-6 text-center font-black text-cad-primaria">min. € 20,00 <span className="text-cad-texto/20 font-medium block text-xs">max € 35,00</span></td>
                    <td className="px-8 py-6 text-center font-black text-cad-primaria">-</td>
                  </tr>
                  <tr className="hover:bg-cad-stone-light/30 transition-colors">
                    <td className="px-8 py-6 font-bold text-cad-texto">{t.pricing.table.extraBed}</td>
                    <td className="px-8 py-6 text-center font-black text-cad-texto">€ 15,00</td>
                    <td className="px-8 py-6 text-center font-black text-cad-texto">€ 18,00</td>
                  </tr>
                  <tr className="hover:bg-cad-stone-light/30 transition-colors">
                    <td className="px-8 py-6 font-bold text-cad-texto">{t.pricing.table.singleUse}</td>
                    <td className="px-8 py-6 text-center font-black text-cad-texto">€ 10,00</td>
                    <td className="px-8 py-6 text-center font-black text-cad-texto">€ 15,00</td>
                  </tr>
                  <tr className="hover:bg-cad-stone-light/30 transition-colors">
                    <td className="px-8 py-6 font-bold text-cad-texto">{t.pricing.table.oneNight}</td>
                    <td className="px-8 py-6 text-center font-black text-cad-secundaria">+ 25%</td>
                    <td className="px-8 py-6 text-center font-black text-cad-secundaria">+ 25%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="p-10 bg-cad-stone-light/20 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                {t.pricing.discounts.map((info, i) => (
                  <div key={i} className="flex gap-3 text-sm font-semibold text-cad-texto/70 leading-snug">
                    <RiCheckLine className="text-cad-primaria shrink-0" size={18} />
                    {info}
                  </div>
                ))}
              </div>
              <div className="bg-cad-primaria/5 p-6 rounded-2xl border border-cad-primaria/10">
                <p className="text-xs font-black text-cad-primaria uppercase tracking-widest mb-2 italic">Note</p>
                <p className="text-sm text-cad-secundaria font-medium leading-relaxed italic">
                  {lang === "it" 
                    ? "Il B&B dispone di 3 camere, ognuna con bagno indipendente, per um numero di posti letto da 4 a 6."
                    : "The B&B has 3 rooms, each with an independent bathroom, for a number of beds from 4 to 6."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços Inclusos */}
      <section className="py-32">
        <div className="cad-container">
          <div className="flex flex-col md:flex-row gap-20 items-center">
            <div className="w-full md:w-1/2 space-y-12">
              <div className="space-y-4">
                <span className="tag-local">{t.services.tag}</span>
                <h3 className="text-4xl md:text-5xl titulo-rustico">{t.services.title}</h3>
              </div>
              
              <div className="grid grid-cols-1 gap-10">
                <div className="flex gap-6">
                  <div className="bg-cad-fundo p-4 rounded-2xl h-fit text-cad-primaria">
                    <RiCupLine size={28} />
                  </div>
                  <div className="space-y-2">
                    <h5 className="text-lg font-black text-cad-texto">{t.services.breakfastTitle}</h5>
                    <p className="text-cad-texto/50 text-sm font-medium leading-relaxed">{t.services.breakfastDesc}</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="bg-cad-fundo p-4 rounded-2xl h-fit text-cad-secundaria">
                    <RiSnowyLine size={28} />
                  </div>
                  <div className="space-y-2">
                    <h5 className="text-lg font-black text-cad-texto">{t.services.cleaningTitle}</h5>
                    <p className="text-cad-texto/50 text-sm font-medium leading-relaxed">{t.services.cleaningDesc}</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="bg-cad-fundo p-4 rounded-2xl h-fit text-cad-destaque">
                    <RiHotelLine size={28} />
                  </div>
                  <div className="space-y-2">
                    <h5 className="text-lg font-black text-cad-texto">{t.services.roomsTitle}</h5>
                    <p className="text-cad-texto/50 text-sm font-medium leading-relaxed">{t.services.roomsDesc}</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="bg-cad-fundo p-4 rounded-2xl h-fit text-cad-primaria">
                    <RiWindyLine size={28} />
                  </div>
                  <div className="space-y-2">
                    <h5 className="text-lg font-black text-cad-texto">{t.services.acTitle}</h5>
                    <p className="text-cad-texto/50 text-sm font-medium leading-relaxed">{t.services.acDesc}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 relative">
              <div className="absolute -inset-4 border border-cad-stone-dark rounded-[40px] -z-10 translate-x-4 translate-y-4"></div>
              <div className="relative h-137.5 rounded-4xl overflow-hidden shadow-2xl">
                <Image src={imagemQuarto} alt="Cozy Room in Salento" fill className="object-cover" />
                <div className="absolute bottom-8 left-8 right-8 bg-black/40 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                  <div className="flex items-center gap-4">
                    <RiTimeLine className="text-white" />
                    <div>
                      <p className="text-white/60 text-[10px] font-black uppercase tracking-widest">Servizio Giornaliero</p>
                      <p className="text-white font-bold text-sm">Pulizia e Riordino Inclusi</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Jardim Section */}
      <section id="jardim" className="py-32 bg-white text-cad-texto overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cad-fundo rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-50"></div>
        <div className="cad-container grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative h-112.5 md:h-150 group">
             <div className="absolute inset-0 border-2 border-cad-stone-light -m-6 rounded-[3rem] transition-transform duration-700 group-hover:scale-95"></div>
             <Image src={imagemJardim} alt="Authentic Salento Garden" fill className="object-cover rounded-[2.5rem] shadow-2xl transition-transform duration-700 group-hover:scale-105" />
          </div>
          <div className="space-y-10">
            <h3 className="text-5xl titulo-rustico">{t.nav.garden}</h3>
            <p className="text-xl text-cad-texto/60 leading-relaxed font-light">
              {lang === "it" 
                ? "Il nostro piccolo patio è dove avviene la magia. Abbiamo un barbecue a disposizione degli ospiti e un tavolo rustico circondato da plantas locali."
                : "Our little patio is where the magic happens. We have a barbecue available for guests and a rustic table surrounded by local plants."}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: <RiFireLine />, text: lang === "it" ? "Uso Barbecue" : "BBQ Usage" },
                { icon: <RiCupLine />, text: lang === "it" ? "Relax al Verde" : "Green Relax" },
                { icon: <RiMapPinLine />, text: lang === "it" ? "Posti Letto 4-6" : "Sleeps 4-6" },
                { icon: <RiCheckLine />, text: lang === "it" ? "Autenticità" : "Authenticity" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 bg-cad-fundo p-5 rounded-2xl border border-cad-stone-light hover:bg-cad-stone-light transition-colors">
                  <div className="text-cad-primaria">{item.icon}</div>
                  <span className="font-bold text-sm tracking-wide text-cad-texto/80">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Localização */}
      <section id="localizacao" className="py-32 bg-cad-fundo overflow-hidden">
        <div className="cad-container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h3 className="text-5xl titulo-rustico">{t.location.title}</h3>
            <p className="text-xl text-cad-texto/50 leading-relaxed font-medium">
              {t.location.desc}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-10">
              {[
                { time: "10 min", loc: t.location.castro },
                { time: "15 min", loc: t.location.cesarea },
                { time: "25 min", loc: t.location.otranto }
              ].map((item, i) => (
                <div key={i} className="p-8 bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-cad-stone-light group hover:border-cad-primaria transition-colors duration-500">
                  <span className="block text-3xl font-black text-cad-primaria mb-2 group-hover:scale-110 transition-transform">{item.time}</span>
                  <span className="text-[10px] uppercase font-black tracking-widest text-cad-texto/30">{item.loc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="bg-white border-t border-cad-stone-light/50 text-cad-texto pt-32 pb-16 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-1 bg-cad-primaria"></div>
        <div className="cad-container">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-20 mb-32">
            <div className="lg:col-span-2 space-y-10">
              <h4 className="text-4xl titulo-rustico text-cad-texto">Ca&apos; D&apos;Architetto</h4>
              <p className="text-cad-texto/40 text-xl font-light italic leading-relaxed max-w-md">&quot;{t.footer.motto}&quot;</p>
              <div className="flex gap-6">
                <a href="mailto:info@cadarchitetto.com" aria-label="Email" className="w-12 h-12 rounded-full border border-cad-texto/10 flex items-center justify-center hover:bg-cad-primaria hover:text-white transition-all"><RiMailLine size={20} /></a>
                <a href="https://wa.me/393334455667" aria-label="WhatsApp" className="w-12 h-12 rounded-full border border-cad-texto/10 flex items-center justify-center hover:bg-cad-primaria hover:text-white transition-all"><RiWhatsappLine size={20} /></a>
              </div>
            </div>
            
            <div className="space-y-8">
              <h5 className="text-[11px] font-black uppercase tracking-[0.3em] text-cad-primaria">{t.footer.contact}</h5>
              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-cad-fundo flex items-center justify-center group-hover:bg-cad-primaria group-hover:text-white transition-colors">
                    <RiPhoneLine size={18} />
                  </div>
                  <span className="text-sm font-bold text-cad-texto/70">+39 333 4455667</span>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-cad-fundo flex items-center justify-center group-hover:bg-cad-primaria group-hover:text-white transition-colors">
                    <RiMailLine size={18} />
                  </div>
                  <span className="text-sm font-bold text-cad-texto/70">info@cadarchitetto.com</span>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <h5 className="text-[11px] font-black uppercase tracking-[0.3em] text-cad-primaria">{t.footer.follow}</h5>
              <p className="text-sm text-cad-texto/50 font-medium leading-relaxed">
                Stay connected with our daily life in Salento through our social channels.
              </p>
            </div>
          </div>

          <div className="pt-16 border-t border-cad-stone-light flex flex-col md:flex-row justify-between items-center gap-10 text-[10px] font-black uppercase tracking-[0.4em] text-cad-texto/30">
            <p>&copy; {new Date().getFullYear()} Salento Ca&apos; D&apos;Architetto • {t.footer.reserved}</p>
            <div className="flex gap-12">
              <a href="https://wa.me/393334455667" className="text-cad-primaria hover:text-cad-destaque transition-colors">{t.nav.book} ON WHATSAPP</a>
              <span className="text-cad-texto/20">{t.footer.auth}</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}


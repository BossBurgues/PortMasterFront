"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { 
  RiMapPinLine, 
  RiPhoneLine, 
  RiTimeLine, 
  RiStarFill,
  RiInstagramLine,
  RiFacebookCircleLine,
  RiGlobalLine
} from "@remixicon/react";
import { useLang } from "./LangContext";
import Link from "next/link";
import "./theme.css";

const content = {
  en: {
    nav: { history: "History", signature: "Signature Dishes", menu: "Menu", contact: "Contact", res: "Reserve a Table" },
    hero: {
      title: "Authentic Italian Cuisine <br class='hidden md:block'/>in San Marino",
      desc: "Traditional recipes, local ingredients, unforgettable flavors. The true essence of the Italian countryside at your table, since 1977.",
      menuBtn: "View Menu",
      resBtn: "Reserve a Table"
    },
    heritage: {
      sub: "Our Heritage",
      title: "Family flavors since 1977.",
      p1: "Founded in the heart of the historic center of San Marino, Ritrovo Dei Lavoratori is more than a restaurant — it is an extension of our family dining room.",
      p2: "For over four decades, we have kept alive the recipes passed down from generation to generation. We work exclusively with local producers, artisanal cheeses and fresh truffles harvested on the mountain slopes, ensuring the authentic experience of classic Italian gastronomy."
    },
    signature: {
      sub: "Our Classics",
      title: "Signature Dishes",
      desc: "True Italian cuisine is never rushed. Each dish is prepared in its own time, using premium truffles, fine meats, and fresh pasta made by hand daily.",
      dish1Title: "Tagliolini al Tartufo",
      dish1Desc: "Homemade fresh pasta bathed in organic butter finished with generous shavings of fresh local black truffles.",
      dish2Title: "Filetto al Pepe Verde",
      dish2Desc: "Succulent filet mignon medallion gratinated with green peppercorns and cream. A texture and flavor that melts in your mouth.",
      dish3Title: "Ravioli Fatti a Mano",
      dish3Desc: "Our famous pasta stuffed with sheep's milk ricotta and spinach, drizzled in a rustic sauce of roasted tomatoes and basil."
    },
    menu: {
      title: "The Menu",
      desc: "Discover our full selection of Antipasti, Pasta, Meat, and Desserts prepared with our authentic recipes.",
      btn: "View Full Menu"
    },
    experience: {
      title: "The Typical Atmosphere",
      desc: "Here we believe in 'convivio'—the joy of sharing food. Our rustic wooden tables, exposed stone walls, and warm lighting create the perfect setting for romantic dinners or lively family nights, always accompanied by excellent wines from our curated cellar."
    },
    footer: {
      tag: "Authentic flavors of San Marino since 1977.",
      locTitle: "Historic Location",
      locWalk: "Located in the historic center of Città di San Marino.",
      hoursTitle: "Opening Hours",
      hours: "Thursday - Tuesday: 12:00 - 15:00, 19:00 - 22:30",
      hoursClosed: "Closed on Wednesdays",
      resTitle: "Reservations",
      resNote: "Note: Due to our limited seating and artisanal menu, we strongly recommend booking in advance, especially on weekends.",
      map: "View on Google Maps",
      rights: "All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms"
    }
  },
  it: {
    nav: { history: "Storia", signature: "Le Specialità", menu: "Menù", contact: "Contatti", res: "Prenota" },
    hero: {
      title: "Autentica Cucina Italiana <br class='hidden md:block'/>a San Marino",
      desc: "Ricette tradizionali, ingredienti locali, sapori indimenticabili. La vera essenza della campagna italiana alla tua tavola, dal 1977.",
      menuBtn: "Vedi il Menù",
      resBtn: "Prenota un Tavolo"
    },
    heritage: {
      sub: "La Nostra Eredità",
      title: "Sapori di famiglia dal 1977.",
      p1: "Fondato nel cuore del centro storico di San Marino, il Ritrovo Dei Lavoratori è più di un ristorante — è un'estensione della nostra sala da pranzo di famiglia.",
      p2: "Da oltre quattro decenni manteniamo vive le ricette tramandate di generazione in generazione. Lavoriamo esclusivamente con produttori locali, formaggi artigianali e tartufi freschi raccolti sui pendii delle montagne, garantendo l'autentica esperienza della classica gastronomia italiana."
    },
    signature: {
      sub: "I Nostri Classici",
      title: "Piatti d'Autore",
      desc: "La vera cucina italiana non ha fretta. Ogni piatto è preparato nel suo tempo, utilizzando tartufi di pregio, carni pregiate e pasta fresca fatta a mano ogni giorno.",
      dish1Title: "Tagliolini al Tartufo",
      dish1Desc: "Pasta fresca fatta in casa bagnata nel burro biologico e guarnita con generose scaglie di tartufo nero fresco locale.",
      dish2Title: "Filetto al Pepe Verde",
      dish2Desc: "Succulento medaglione di filetto mignon gratinato con grani di pepe verde e panna. Una consistenza e un sapore che si sciolgono in bocca.",
      dish3Title: "Ravioli Fatti a Mano",
      dish3Desc: "La nostra famosa pasta ripiena di ricotta di pecora e spinaci, condita con una salsa rustica di pomodori arrostiti e basilico."
    },
    menu: {
      title: "Il Menù",
      desc: "Scopri la nostra selezione completa di Antipasti, Pasta, Carne e Dolci preparati con le nostre ricette autentiche.",
      btn: "Vedi il Menù Completo"
    },
    experience: {
      title: "L'Atmosfera Tipica",
      desc: "Qui crediamo nel 'convivio'—la gioia di condividere il cibo. I nostri tavoli rustici in legno, le pareti con pietre a vista e l'illuminazione calda creano l'ambiente perfetto per cene romantiche o vivaci serate in famiglia, sempre accompagnate da ottimi vini della nostra cantina curata."
    },
    footer: {
      tag: "Sapori autentici di San Marino dal 1977.",
      locTitle: "Sede Storica",
      locWalk: "Situato nel centro storico di Città di San Marino.",
      hoursTitle: "Orari di Apertura",
      hours: "Giovedì - Martedì: 12:00 - 15:00, 19:00 - 22:30",
      hoursClosed: "Chiuso il mercoledì",
      resTitle: "Prenotazioni",
      resNote: "Nota: A causa dei posti limitati e del nostro menù artigianale, consigliamo vivamente la prenotazione anticipata, specialmente nei fine settimana.",
      map: "Vedi su Google Maps",
      rights: "Tutti i diritti riservati.",
      privacy: "Informativa sulla privacy",
      terms: "Termini"
    }
  }
};

export default function ItalianRestaurantPage() {
  const { lang, toggleLang } = useLang();
  const t = content[lang];

  return (
    <div className="rest-theme bg-background text-foreground font-sans min-h-screen selection:bg-primary/20 view-body">
      {/* FIXED NAVIGATION (Glassmorphism) */}
      <header className="fixed top-0 w-full z-50 bg-white/85 backdrop-blur-[20px] shadow-[0_4px_32px_rgb(0,0,0,0.06)]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/clientes/ritrovo-demo" className="font-serif text-2xl font-bold tracking-tight text-primary">
            Ritrovo Dei Lavoratori
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#heranca" className="hover:text-primary transition-colors">{t.nav.history}</a>
            <a href="#especialidades" className="hover:text-primary transition-colors">{t.nav.signature}</a>
            <a href="#contato" className="hover:text-primary transition-colors">{t.nav.contact}</a>
          </nav>
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleLang}
              className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
              title="Toggle Language"
            >
              <RiGlobalLine className="w-4 h-4" />
              <span className="uppercase">{lang}</span>
            </button>
            <Link href="/clientes/ritrovo-demo/menu">
              <Button className="hidden md:inline-flex bg-primary hover:bg-primary/90 text-white rounded-sm px-6">
                {t.nav.menu}
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-24 overflow-hidden">
        {/* Background Radial Gradient and Texture per DESIGN.md */}
        <div className="absolute inset-0 bg-linear-to-br from-primary to-[#7a1c1c] z-0" />
        <div className="absolute inset-0 bg-black/30 z-0" /> 
        <div 
          className="absolute inset-0 opacity-40 mix-blend-overlay bg-cover bg-center z-0"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2000&q=80')" }}
        />
        <div className="absolute inset-0 bg-grain opacity-5 z-0 pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white space-y-8">
          <h1 
            className="font-serif text-5xl md:text-7xl lg:text-[5rem] leading-[1.1] tracking-tight drop-shadow-lg"
            dangerouslySetInnerHTML={{ __html: t.hero.title }}
          />
          <p className="font-sans text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md">
            {t.hero.desc}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="/clientes/ritrovo-demo/menu" className="w-full sm:w-auto">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 rounded-sm w-full text-base px-8 h-14">
                {t.hero.menuBtn}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. STORY / HERITAGE (Asymmetrical Layout) */}
      <section id="heranca" className="py-24 md:py-32 px-6 bg-background relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 space-y-8 lg:pr-8">
            <div className="space-y-4">
              <span className="text-[var(--color-tertiary)] font-semibold tracking-wider uppercase text-sm">
                {t.heritage.sub}
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight">
                {t.heritage.title}
              </h2>
            </div>
            
            {/* Heritage Ornament Component */}
            <div className="flex items-center gap-4 opacity-50">
              <div className="w-12 h-px bg-border" />
              <RiStarFill className="w-4 h-4 text-border" />
              <div className="w-12 h-px bg-border" />
            </div>

            <div className="space-y-6 text-foreground/80 font-sans text-lg leading-relaxed font-light">
              <p>{t.heritage.p1}</p>
              <p>{t.heritage.p2}</p>
            </div>
          </div>

          <div className="lg:col-span-7 relative">
            <div className="aspect-[4/5] md:aspect-[16/10] overflow-hidden rounded-md bg-card shadow-[0_24px_64px_rgb(0,0,0,0.06)] relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1200&q=80" 
                alt="Chef" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Offset floating image for editorial asymmetry */}
            <div className="hidden md:block absolute -bottom-16 -left-16 w-64 aspect-square rounded-md overflow-hidden bg-card shadow-[0_24px_64px_rgb(0,0,0,0.06)] border-[8px] border-background z-20">
              <img 
                src="https://images.unsplash.com/photo-1595295333158-4742f28fbd85?auto=format&fit=crop&w=600&q=80" 
                alt="Ingredients details" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. SIGNATURE DISHES */}
      <section id="especialidades" className="py-24 px-6 bg-card relative">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <span className="text-[var(--color-tertiary)] font-semibold tracking-wider uppercase text-sm">
              {t.signature.sub}
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground">
              {t.signature.title}
            </h2>
            <p className="font-sans text-foreground/70 text-lg font-light">
              {t.signature.desc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-background rounded-md overflow-hidden hover:bg-accent hover:-translate-y-1 shadow-sm hover:shadow-[0_16px_48px_rgb(0,0,0,0.05)] transition-all duration-300 group cursor-pointer">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=800&q=80" 
                  alt="Tagliolini al Tartufo" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8 space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="font-serif text-2xl text-foreground">{t.signature.dish1Title}</h3>
                  <span className="font-sans text-lg text-primary font-medium">€24</span>
                </div>
                <p className="font-sans text-foreground/70 leading-relaxed font-light">
                  {t.signature.dish1Desc}
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-background rounded-md overflow-hidden hover:bg-accent hover:-translate-y-1 shadow-sm hover:shadow-[0_16px_48px_rgb(0,0,0,0.05)] transition-all duration-300 group cursor-pointer">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80" 
                  alt="Filetto al Pepe Verde" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8 space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="font-serif text-2xl text-foreground">{t.signature.dish2Title}</h3>
                  <span className="font-sans text-lg text-primary font-medium">€32</span>
                </div>
                <p className="font-sans text-foreground/70 leading-relaxed font-light">
                  {t.signature.dish2Desc}
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-background rounded-md overflow-hidden hover:bg-accent hover:-translate-y-1 shadow-sm hover:shadow-[0_16px_48px_rgb(0,0,0,0.05)] transition-all duration-300 group cursor-pointer">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/13669035/pexels-photo-13669035.jpeg" 
                  alt="Ravioli Fatti a Mano" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8 space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="font-serif text-2xl text-foreground">{t.signature.dish3Title}</h3>
                  <span className="font-sans text-lg text-primary font-medium">€18</span>
                </div>
                <p className="font-sans text-foreground/70 leading-relaxed font-light">
                  {t.signature.dish3Desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DIGITAL MENU SNEAK PEEK */}
      <section className="py-24 md:py-32 px-6 bg-background">
        <div className="max-w-3xl mx-auto space-y-8 text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-foreground">{t.menu.title}</h2>
          <div className="w-16 h-px bg-primary mx-auto my-6" />
          <p className="font-sans text-lg text-foreground/70 font-light leading-relaxed">
            {t.menu.desc}
          </p>
          <div className="pt-8">
            <Link href="/clientes/ritrovo-demo/menu">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-sm px-10 h-14 text-base shadow-sm">
                {t.menu.btn}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. EXPERIENCE & GALLERY */}
      <section className="py-24 md:py-32 px-6 bg-card">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="font-serif text-4xl md:text-5xl text-foreground">
              {t.experience.title}
            </h2>
            <p className="font-sans text-lg font-light text-foreground/80 leading-relaxed">
              {t.experience.desc}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-2 aspect-[4/3] rounded-md overflow-hidden bg-background">
              <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1000&q=80" alt="Clientes brindando" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
            </div>
            <div className="md:col-span-2 md:row-span-2 rounded-md overflow-hidden bg-background">
              <img src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1000&q=80" alt="Interior do salão rústico" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
            </div>
            <div className="aspect-square rounded-md overflow-hidden bg-background">
              <img src="https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?auto=format&fit=crop&w=800&q=80" alt="Detalhe do prato e vinho" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
            </div>
            <div className="aspect-square rounded-md overflow-hidden bg-background">
              <img src="https://europa.tips/wordpress/wp-content/uploads/Bavyeranin-En-Iyi-Geleneksel-Yemekleri-Nerede-Yenir.webp" alt="Detalhes tradicionais" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
            </div>
          </div>
        </div>
      </section>

      {/* 6. LOCATION & QUICK INFO */}
      <footer id="contato" className="bg-[#1c1c16] text-white pt-24 pb-8 px-6 border-t-[8px] border-primary">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
            
            <div className="space-y-12">
              <div className="space-y-4">
                <h2 className="font-serif text-4xl text-white">Ritrovo Dei Lavoratori</h2>
                <p className="font-sans text-white/60 font-light text-lg">
                  {t.footer.tag}
                </p>
              </div>

              <div className="space-y-8 font-sans font-light">
                <div className="flex items-start gap-4 text-white/80">
                  <RiMapPinLine className="w-6 h-6 text-primary shrink-0" />
                  <div>
                    <h4 className="font-serif text-xl tracking-wide text-white mb-2">{t.footer.locTitle}</h4>
                    <p>Via Androne dei Bastioni, 4</p>
                    <p>47890 Città di San Marino</p>
                    <p className="text-secondary mt-1 text-sm italic">{t.footer.locWalk}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 text-white/80">
                  <RiTimeLine className="w-6 h-6 text-primary shrink-0" />
                  <div>
                    <h4 className="font-serif text-xl tracking-wide text-white mb-2">{t.footer.hoursTitle}</h4>
                    <p>{t.footer.hours}</p>
                    <p className="text-primary mt-1 text-sm">{t.footer.hoursClosed}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 text-white/80">
                  <RiPhoneLine className="w-6 h-6 text-primary shrink-0" />
                  <div>
                    <h4 className="font-serif text-xl tracking-wide text-white mb-2">{t.footer.resTitle}</h4>
                    <p>+378 0549 991116</p>
                    <p className="text-white/50 text-sm mt-2 max-w-sm leading-relaxed">
                      {t.footer.resNote}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 text-white/50 pt-4">
                <a href="#" aria-label="Instagram" className="hover:text-primary transition-colors">
                  <RiInstagramLine className="w-6 h-6" />
                </a>
                <a href="#" aria-label="Facebook" className="hover:text-primary transition-colors">
                  <RiFacebookCircleLine className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div className="relative aspect-square md:aspect-auto rounded-md overflow-hidden bg-white/5 opacity-100 group">
              <iframe 
                src="https://maps.google.com/maps?q=Ritrovo%20dei%20Lavoratori%20XXVIII%20Luglio,%20San%20Marino&t=&z=16&ie=UTF8&iwloc=&output=embed" 
                className="w-full h-full min-h-[400px] object-cover mix-blend-luminosity opacity-80 group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-700"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Ritrovo dei Lavoratori"
              ></iframe>
              <div className="absolute inset-x-0 bottom-4 flex justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                 <div className="p-3 bg-black/80 backdrop-blur-md rounded-md border border-white/10 font-sans text-xs tracking-widest uppercase shadow-xl">
                    Via Androne dei Bastioni, 4
                 </div>
              </div>
            </div>

          </div>

          <div className="pt-8 border-t border-white/10 text-center font-sans text-sm text-white/40 font-light flex flex-col md:flex-row justify-between items-center gap-4">
            <p>&copy; {new Date().getFullYear()} Ritrovo Dei Lavoratori. {t.footer.rights}</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">{t.footer.privacy}</a>
              <a href="#" className="hover:text-white transition-colors">{t.footer.terms}</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

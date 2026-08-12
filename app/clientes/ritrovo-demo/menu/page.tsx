"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { RiGlobalLine, RiArrowLeftLine } from "@remixicon/react";
import { useLang } from "../LangContext";
import Link from "next/link";

const content = {
  en: {
    nav: { history: "History", signature: "Signature Dishes", menu: "Menu", contact: "Contact", res: "Reserve a Table", back: "Back to Home" },
    title: "Digital Menu",
    desc: "A meticulous selection of traditional recipes, prepared with seasonal, local ingredients from San Marino and surrounding regions.",
    categories: {
      antipasti: "Antipasti",
      pasta: "Pasta & Risotti",
      secondi: "Secondi Piatti",
      dolci: "Dolci",
      vini: "Vini"
    },
    items: {
      antipasti: [
        { name: "Bruschetta al Pomodoro", desc: "Toasted rustic bread with garlic, fresh tomatoes, garden basil and extra virgin olive oil.", price: "€8" },
        { name: "Vitello Tonnato", desc: "Thin slices of tender veal with creamy tuna and caper sauce.", price: "€14" },
        { name: "Carpaccio di Manzo", desc: "Thinly sliced raw beef with fresh arugula, Grana Padano flakes and truffle oil.", price: "€16" },
        { name: "Fritto Misto", desc: "Lightly fried calamari, prawns, and seasonal vegetables with lemon aioli.", price: "€18" }
      ],
      pasta: [
        { name: "Tagliolini al Tartufo", desc: "Homemade fresh pasta bathed in organic butter finished with generous shavings of fresh local black truffles.", price: "€24" },
        { name: "Ravioli Fatti a Mano", desc: "Our famous pasta stuffed with sheep's milk ricotta and spinach, drizzled in rustic tomato sauce.", price: "€18" },
        { name: "Tagliatelle al Ragù", desc: "Hand-cut pasta with traditional meat ragù slow-cooked for hours.", price: "€16" },
        { name: "Gnocchi al Gorgonzola e Noci", desc: "Soft potato gnocchi enveloped in a velvety gorgonzola cream and toasted walnuts.", price: "€15" },
        { name: "Risotto Funghi Porcini", desc: "Creamy and rich Carnaroli rice, prepared with the finest mountain Porcini mushrooms.", price: "€18" }
      ],
      secondi: [
        { name: "Filetto al Pepe Verde", desc: "Succulent filet mignon medallion gratinated with green peppercorns and cream.", price: "€32" },
        { name: "Cotoletta alla Milanese", desc: "Traditional breaded veal cutlet served with arugula and cherry tomatoes.", price: "€28" },
        { name: "Branzino al Forno", desc: "Oven-baked sea bass, served with lemon, wild herbs, and roasted potatoes.", price: "€26" }
      ],
      dolci: [
        { name: "Tiramisù della Casa", desc: "Classic recipe with mascarpone, artisanal biscuits soaked in rich espresso and cocoa.", price: "€8" },
        { name: "Panna Cotta ai Frutti di Bosco", desc: "Vanilla bean cream dessert accompanied by a tart berry coulis.", price: "€7" },
        { name: "Cannolo Siciliano", desc: "Crispy shell filled with sweet ricotta, chocolate chips and candied orange.", price: "€7" }
      ],
      vini: [
        { name: "Chianti Classico Riserva (Red)", desc: "Tuscany - Full-bodied, cherry and earthy notes.", price: "€45" },
        { name: "Barolo DOCG (Red)", desc: "Piedmont - 'The King of Wines', robust and deeply layered.", price: "€85" },
        { name: "Pinot Grigio delle Venezie (White)", desc: "Veneto - Crisp, refreshing with hints of green apple.", price: "€28" },
        { name: "Prosecco Superiore DOCG (Sparkling)", desc: "Valdobbiadene - Elegant fine bubbles, floral aroma.", price: "€32" }
      ]
    }
  },
  it: {
    nav: { history: "Storia", signature: "Le Specialità", menu: "Menù", contact: "Contatti", res: "Prenota", back: "Torna alla Home" },
    title: "Menù Digitale",
    desc: "Una meticolosa selezione di ricette tradizionali, preparate con ingredienti locali e stagionali di San Marino e dintorni.",
    categories: {
      antipasti: "Antipasti",
      pasta: "Pasta & Risotti",
      secondi: "Secondi Piatti",
      dolci: "Dolci",
      vini: "Vini"
    },
    items: {
      antipasti: [
        { name: "Bruschetta al Pomodoro", desc: "Pane rustico tostato con aglio, pomodori freschi, basilico dell'orto e olio extravergine di oliva.", price: "€8" },
        { name: "Vitello Tonnato", desc: "Sottili fette di vitello tenero con salsa cremosa al tonno e capperi.", price: "€14" },
        { name: "Carpaccio di Manzo", desc: "Fettine sottilissime di manzo crudo con rucola fresca, scaglie di Grana Padano e olio al tartufo.", price: "€16" },
        { name: "Fritto Misto", desc: "Calamari, gamberi e verdure di stagione fritti dorati, serviti con aioli al limone.", price: "€18" }
      ],
      pasta: [
        { name: "Tagliolini al Tartufo", desc: "Pasta fresca fatta in casa bagnata nel burro biologico e guarnita con generose scaglie di tartufo nero fresco locale.", price: "€24" },
        { name: "Ravioli Fatti a Mano", desc: "La nostra famosa pasta ripiena di ricotta di pecora e spinaci, condita con salsa rustica di pomodoro.", price: "€18" },
        { name: "Tagliatelle al Ragù", desc: "Pasta tagliata a mano con ragù di carne tradizionale cotto lentamente per ore.", price: "€16" },
        { name: "Gnocchi al Gorgonzola e Noci", desc: "Soffici gnocchi di patate avvolti in una vellutata crema al gorgonzola e noci tostate.", price: "€15" },
        { name: "Risotto Funghi Porcini", desc: "Riso Carnaroli cremoso e ricco, preparato con i migliori funghi Porcini di montagna.", price: "€18" }
      ],
      secondi: [
        { name: "Filetto al Pepe Verde", desc: "Succulento medaglione di filetto mignon gratinato con grani di pepe verde e panna.", price: "€32" },
        { name: "Cotoletta alla Milanese", desc: "Tradizionale cotoletta di vitello impanata, servita con rucola e pomodorini.", price: "€28" },
        { name: "Branzino al Forno", desc: "Branzino fresco cotto al forno, servito con limone, erbe spontanee e patate arrosto.", price: "€26" }
      ],
      dolci: [
        { name: "Tiramisù della Casa", desc: "Ricetta classica con mascarpone, biscotti artigianali bagnati nel caffè espresso dolce e cacao.", price: "€8" },
        { name: "Panna Cotta ai Frutti di Bosco", desc: "Dessert alla crema di bacche di vaniglia accompagnato da una coulis di frutti rossi.", price: "€7" },
        { name: "Cannolo Siciliano", desc: "Guscio croccante ripieno di ricotta dolce, gocce di cioccolato e canditi all'arancia.", price: "€7" }
      ],
      vini: [
        { name: "Chianti Classico Riserva (Rosso)", desc: "Toscana - Corposo, note di ciliegia e sentori terrosi.", price: "€45" },
        { name: "Barolo DOCG (Rosso)", desc: "Piemonte - 'Il Re dei Vini', robusto e fortemente strutturato.", price: "€85" },
        { name: "Pinot Grigio delle Venezie (Bianco)", desc: "Veneto - Fresco, rinfrescante con note di mela verde.", price: "€28" },
        { name: "Prosecco Superiore DOCG (Spumante)", desc: "Valdobbiadene - Elegante perlage fine, aroma floreale.", price: "€32" }
      ]
    }
  }
};

export default function MenuPage() {
  const { lang, toggleLang } = useLang();
  const t = content[lang];

  const categories = [
    { id: "antipasti", title: t.categories.antipasti, items: t.items.antipasti },
    { id: "pasta", title: t.categories.pasta, items: t.items.pasta },
    { id: "secondi", title: t.categories.secondi, items: t.items.secondi },
    { id: "dolci", title: t.categories.dolci, items: t.items.dolci },
    { id: "vini", title: t.categories.vini, items: t.items.vini }
  ];

  return (
    <div className="rest-theme bg-background text-foreground font-sans min-h-screen selection:bg-primary/20 view-body">
      
      {/* NAVBAR */}
      <header className="fixed top-0 w-full z-50 bg-white/85 backdrop-blur-[20px] shadow-[0_4px_32px_rgb(0,0,0,0.06)]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/clientes/ritrovo-demo" className="font-serif text-2xl font-bold tracking-tight text-primary">
            Ritrovo Dei Lavoratori
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href="/clientes/ritrovo-demo" className="flex items-center gap-2 hover:text-primary transition-colors">
              <RiArrowLeftLine className="w-4 h-4" />
              {t.nav.back}
            </Link>
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
            <Button className="hidden md:inline-flex bg-primary hover:bg-primary/90 text-white rounded-sm px-6">
              {t.nav.res}
            </Button>
          </div>
        </div>
      </header>

      {/* MENU HEADER */}
      <section className="pt-40 pb-16 px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="text-[var(--color-tertiary)] font-semibold tracking-wider uppercase text-sm">
            Dal 1977
          </span>
          <h1 className="font-serif text-5xl md:text-6xl text-foreground">
            {t.title}
          </h1>
          <div className="w-16 h-px bg-primary mx-auto my-6" />
          <p className="font-sans text-lg text-foreground/70 font-light leading-relaxed">
            {t.desc}
          </p>
        </div>
      </section>

      {/* MENU LIST */}
      <section className="pb-32 px-6">
        <div className="max-w-4xl mx-auto space-y-24">
          {categories.map((cat) => (
            <div key={cat.id} className="relative">
              {/* Decorative side text for extra editorial feel (hidden on mobile) */}
              <div className="hidden lg:block absolute -left-32 top-8 -rotate-90 origin-right text-border font-serif text-5xl opacity-40 select-none whitespace-nowrap">
                {cat.id === "vini" ? "La Cantina" : "Cucina"}
              </div>

              <h2 className="font-serif text-3xl md:text-4xl text-secondary mb-12 text-center md:text-left">
                {cat.title}
              </h2>
              
              <div className="space-y-6 bg-card p-8 md:p-12 rounded-md shadow-sm">
                {cat.items.map((item, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-2 sm:gap-4 group pb-6 last:pb-0">
                    <div className="flex-1 space-y-2">
                      <h3 className="font-serif text-xl md:text-2xl tracking-wide group-hover:text-primary transition-colors">
                        {item.name}
                      </h3>
                      <p className="font-sans text-foreground/70 text-base md:text-sm font-light leading-relaxed max-w-2xl">
                        {item.desc}
                      </p>
                    </div>
                    <div className="font-sans text-xl md:text-lg text-primary font-medium mt-2 sm:mt-0">
                      {item.price}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

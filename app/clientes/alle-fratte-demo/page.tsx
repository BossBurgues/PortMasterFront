"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useIdioma } from "./LanguageContext";
import { RiCloseLine, RiMapPin2Line, RiTimeLine } from "@remixicon/react";

/**
 * Alle Fratte di Trastevere - Modern Landing Page
 * Web Design Guidelines Compliant: Semantic markup, ARIA tags, focus-states, no "transition: all".
 */
export default function FratteModernLanding() {
  const { idioma, alternarIdioma } = useIdioma();
  const [modalOpen, setModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Esc/ClickOutside logic for Modal
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModalOpen(false);
    };
    if (modalOpen) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [modalOpen]);

  const t = {
    IT: {
      hero: "Ispirato ai Piatti della Tradizione Romana",
      sub: "Benvenuti al nostro ristorante situato nel cuore del pittoresco quartiere di Trastevere.",
      btnMenu: "Sfoglia il Menù",
      btnRes: "Prenota un Tavolo",
      storyHeading: "Il Nostro Ristorante",
      storyP1: "Il ristorante Alle Fratte di Trastevere si trova sulle sponde del fiume Tevere. La nostra cucina si ispira ai piatti tradizionali romani, oltre che alla pizza in stile romano.",
      storyP2: "Le pareti sono decorate con immensi e magnifici dipinti trompe-l'œil che vi immergeranno nella Roma di fine Settecento. La nostra cura per i dettagli e per la freschezza e la qualità dei nostri ingredienti è la garanzia della vostra soddisfazione.",
      visitUs: "Vieni a Trovarci",
      address: "Via delle Fratte di Trastevere, 49/50 - 00153 Roma",
      hours: "Vi aspettiamo nel cuore di Roma, tutti i giorni escluso il Mercoledì.",
      modalTitle: "Prenotazione",
      contact: "Tel. +39-065835775"
    },
    EN: {
      hero: "Inspired by Traditional Roman Dishes",
      sub: "Welcome to our restaurant situated in the heart of the picturesque neighborhood called Trastevere.",
      btnMenu: "View the Menu",
      btnRes: "Reserve a Table",
      storyHeading: "Our Restaurant",
      storyP1: "The restaurant Alle Fratte di Trastevere is located on the banks of the river Tiber. Our cuisine is inspired by traditional Roman dishes as well as Roman style pizzas.",
      storyP2: "The walls are covered with huge trompe l'oeils painted depicting popular scenes: you will find yourself immersed in late 18th century Rome. Our care for details and the freshness of our ingredients is our guarantee for your satisfaction.",
      visitUs: "Come Visit Us",
      address: "Via delle Fratte di Trastevere, 49/50 - 00153 Rome",
      hours: "We await you in the very heart of Rome, except on Wednesdays.",
      modalTitle: "Table Reservation",
      contact: "Phone +39-065835775"
    }
  }[idioma];

  const handleReservationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulando tempo de carregamento de API para mostrar o "spinner / estado disabled" sugerido pelos guidelines
    setTimeout(() => {
      setIsSubmitting(false);
      setModalOpen(false);
      alert(idioma === 'IT' ? 'Prenotazione inviata con successo!' : 'Reservation sent successfully!');
    }, 1500);
  };

  return (
    <div className="min-h-screen font-body bg-(--fratte-bg) text-(--fratte-text)">
      
      {/* HEADER / NAVIGATION */}
      <header className="fixed top-0 w-full z-40 bg-white/80 backdrop-blur-md border-b border-neutral-200 shadow-sm transition-colors">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/clientes/alle-fratte-demo" className="heading-modern font-semibold text-2xl text-[var(--fratte-primary)]">
            Alle Fratte
          </Link>
          <div className="flex items-center gap-4">
            <button 
              onClick={alternarIdioma} 
              className="text-sm font-semibold text-neutral-600 hover:text-neutral-900 focus-visible:ring-2 focus-visible:ring-emerald-500 rounded px-2 py-1 touch-manipulation"
              aria-label={idioma === 'IT' ? 'Switch to English' : 'Passa all\'Italiano'}
            >
              {idioma === 'IT' ? 'EN' : 'IT'}
            </button>
            <button 
              className="btn-primary py-2 px-5 text-sm hidden sm:inline-flex"
              onClick={() => setModalOpen(true)}
            >
              {t.btnRes}
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* HERO SECTION */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden flex flex-col items-center">
          <div className="container mx-auto max-w-5xl text-center relative z-10">
            
            <h1 className="heading-modern text-5xl md:text-7xl lg:text-[5.5rem] font-bold text-neutral-900 leading-tight mb-6">
              {t.hero}
            </h1>
            
            <p className="text-xl md:text-2xl text-neutral-500 max-w-2xl mx-auto mb-12 font-light text-wrap balance">
              {t.sub}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/clientes/alle-fratte-demo/menu" className="btn-primary w-full sm:w-auto text-lg px-8 py-4">
                {t.btnMenu}
              </Link>
              <button 
                onClick={() => setModalOpen(true)} 
                className="btn-outline w-full sm:w-auto text-lg px-8 py-4 bg-white"
              >
                {t.btnRes}
              </button>
            </div>
          </div>

          {/* Imagem do Hero Otimizada - com dimensões explícitas e fetchpriority */}
          <div className="container mx-auto max-w-6xl mt-20 relative">
            <div className="aspect-video w-full rounded-3xl overflow-hidden shadow-2xl relative">
              <img 
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1200&h=675"
                alt="Interior of Alle Fratte di Trastevere, showing modern lighting and elegant tables"
                width={1200}
                height={675}
                className="w-full h-full object-cover"
                fetchPriority="high"
              />
            </div>
          </div>
        </section>

        {/* STORY & INFO SECTION */}
        <section className="py-24 bg-white border-t border-neutral-100">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
              
              <div className="space-y-6">
                <h2 className="heading-modern text-3xl font-bold text-neutral-900">
                  {t.storyHeading}
                </h2>
                <p className="text-lg text-neutral-600 leading-relaxed">
                  {t.storyP1}
                </p>
                <p className="text-lg text-neutral-600 leading-relaxed">
                  {t.storyP2}
                </p>
              </div>

              <div className="bg-neutral-50 rounded-3xl p-8 md:p-12 border border-neutral-100 shadow-sm">
                <h3 className="heading-modern text-2xl font-bold text-neutral-900 mb-8">{t.visitUs}</h3>
                <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                    <RiMapPin2Line className="w-6 h-6 text-(--fratte-primary) shrink-0 mt-1" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-neutral-900">Location</p>
                      <address className="not-italic text-neutral-600 leading-relaxed mt-1">
                        {t.address}
                      </address>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <RiTimeLine className="w-6 h-6 text-(--fratte-primary) shrink-0 mt-1" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-neutral-900">Hours</p>
                      <p className="text-neutral-600 leading-relaxed mt-1">
                        {t.hours}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <span aria-hidden="true" className="text-(--fratte-primary) mt-1 w-6 h-6 flex justify-center">☎</span>
                    <div>
                      <p className="font-semibold text-neutral-900">Contatti</p>
                      <p className="text-neutral-600 leading-relaxed mt-1">
                        {t.contact}<br />allefratteditrastevere@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      <footer className="bg-neutral-900 text-white py-12 text-center text-sm">
        <p className="opacity-70">© {new Date().getFullYear()} Alle Fratte di Trastevere. Roma.</p>
      </footer>

      {/* STATIC RESERVATION MODAL */}
      {modalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 p-safe overscroll-contain"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          {/* Backdrop Escuro (não blur pesado que afeta framerate, apenas opacidade preta) */}
          <div 
            className="absolute inset-0 bg-neutral-900/60 transition-opacity" 
            onClick={() => setModalOpen(false)}
            aria-hidden="true"
          />
          
          <div className="bg-white rounded-3xl w-full max-w-lg relative z-10 shadow-2xl flex flex-col max-h-full">
            {/* Header Modal */}
            <div className="flex justify-between items-center p-6 border-b border-neutral-100 shrink-0">
              <h2 id="modal-title" className="heading-modern text-2xl font-bold text-neutral-900">
                {t.modalTitle}
              </h2>
              <button 
                onClick={() => setModalOpen(false)}
                className="btn-icon"
                aria-label="Close Reservation Modal"
              >
                <RiCloseLine className="w-6 h-6" aria-hidden="true" />
              </button>
            </div>

            {/* Form Scroll Content */}
            <div className="p-6 overflow-y-auto no-scrollbar overscroll-contain">
              <form className="space-y-5" onSubmit={handleReservationSubmit}>
                
                {/* Rule: Inputs with meaningful names, types, labels and autocomplete */}
                <div>
                  <label htmlFor="res-name" className="modern-label">Nome / Full Name</label>
                  <input 
                    id="res-name"
                    name="name"
                    type="text" 
                    autoComplete="name"
                    required 
                    className="modern-input" 
                    placeholder="Mario Rossi" 
                  />
                </div>

                <div>
                  <label htmlFor="res-email" className="modern-label">Email</label>
                  <input 
                    id="res-email"
                    name="email"
                    type="email" 
                    autoComplete="email"
                    inputMode="email"
                    spellCheck={false}
                    required 
                    className="modern-input" 
                    placeholder="hello@example.com" 
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="res-date" className="modern-label">Data / Date</label>
                    <input 
                      id="res-date"
                      name="date"
                      type="date" 
                      required 
                      className="modern-input" 
                    />
                  </div>
                  <div>
                    <label htmlFor="res-time" className="modern-label">Ora / Time</label>
                    <select 
                      id="res-time"
                      name="time"
                      required 
                      className="modern-input"
                    >
                      <option value="">Seleziona Ora / Select Time</option>
                      <option value="19:00">19:00</option>
                      <option value="20:00">20:00</option>
                      <option value="21:00">21:00</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="res-guests" className="modern-label">Ospiti / Guests</label>
                  <input 
                    id="res-guests"
                    name="guests"
                    type="number" 
                    inputMode="numeric"
                    min="1" 
                    max="12" 
                    required 
                    className="modern-input" 
                    placeholder="2" 
                  />
                </div>

                <div className="pt-4 mt-2 border-t border-neutral-100">
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="btn-primary w-full shadow-lg shadow-rose-900/10 disabled:opacity-70 disabled:cursor-not-allowed"
                    aria-live="polite"
                  >
                    {isSubmitting 
                        ? (idioma === 'IT' ? 'Inviando…' : 'Sending…') 
                        : (idioma === 'IT' ? 'Conferma Richiesta' : 'Confirm Request')
                    }
                  </button>
                </div>

              </form>
            </div>
            
          </div>
        </div>
      )}

    </div>
  );
}

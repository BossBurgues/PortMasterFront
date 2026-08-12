"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage, type SignatureItem } from "./LanguageContext";

export default function SoipAmaurHomePage() {
  const { language, setLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const waLink = "https://wa.me/391234567890";

  return (
    <div className="relative bg-white text-[#1a1a1a] w-full min-h-screen overflow-hidden">
      
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tighter" style={{ fontFamily: 'Outfit' }}>
            <span className={scrolled ? "text-[#1a1a1a]" : "text-white"}>SOIP </span>
            <span className="text-[#00989F]">AMAUR</span>
          </div>
          
          <div className={`hidden md:flex gap-8 items-center text-sm font-medium ${scrolled ? "text-gray-600" : "text-white/90"}`}>
            <a href="#concept" className="hover:text-[#00989F] transition-colors">{t("nav.concept")}</a>
            <a href="#gallery" className="hover:text-[#00989F] transition-colors">{t("nav.gallery")}</a>
            <a href="#contact" className="hover:text-[#00989F] transition-colors">{t("nav.contact")}</a>
          </div>

          <div className="flex items-center gap-4">
            <div className={`flex gap-2 text-xs font-semibold ${scrolled ? "text-gray-400" : "text-white/60"}`}>
              <button
                onClick={() => setLanguage("it")}
                className={`transition-colors ${language === "it" ? (scrolled ? "text-[#1a1a1a]" : "text-white") : "hover:text-[#00989F]"}`}
              >
                IT
              </button>
              <span>|</span>
              <button
                onClick={() => setLanguage("en")}
                className={`transition-colors ${language === "en" ? (scrolled ? "text-[#1a1a1a]" : "text-white") : "hover:text-[#00989F]"}`}
              >
                EN
              </button>
            </div>
            <Link 
              href="/clientes/soip-amaur-demo/menu" 
              className={`hidden md:inline-flex px-6 py-2 rounded-full font-semibold transition-all ${
                scrolled 
                  ? "bg-[#00989F] text-white hover:bg-[#007a80]" 
                  : "bg-white text-[#1a1a1a] hover:bg-gray-100"
              }`}
            >
              {t("nav.menu")}
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] w-full flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=2669&auto=format&fit=crop" 
            alt="Pizza" 
            className="w-full h-full object-cover brightness-[0.4]"
          />
        </div>
        
        <div className="relative z-10 w-full max-w-7xl px-6 md:px-12 flex flex-col items-center text-center animate-soip-fade-up">
          <span className="px-4 py-1 rounded-full bg-[#00989F]/20 text-[#00989F] border border-[#00989F]/30 text-xs font-semibold uppercase tracking-widest mb-6 backdrop-blur-sm">
            Andria, Italy
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] mb-6 max-w-5xl">
            {t("hero.title")}
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-12 font-light">
            {t("hero.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link href="/clientes/soip-amaur-demo/menu" className="soip-btn">
              {t("hero.ctaMenu")}
            </Link>
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-full font-semibold border-2 border-white text-white hover:bg-white hover:text-[#1a1a1a] transition-all flex justify-center items-center">
              {t("hero.ctaBook")}
            </a>
          </div>
        </div>
      </section>

      {/* Concept Section */}
      <section id="concept" className="py-24 md:py-32 px-6 md:px-12 bg-white flex justify-center">
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-[#00989F] font-semibold tracking-wider uppercase text-sm">{t("concept.badge")}</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] leading-tight">
              {t("concept.title")}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t("concept.p1")}
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t("concept.p2")}
            </p>
          </div>
          <div className="relative aspect-square md:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2670&auto=format&fit=crop" 
              alt="Social Dining" 
              className="w-full h-full object-cover"
            />
            {/* Playful teal accent circle */}
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#00989F] rounded-full mix-blend-multiply opacity-80 blur-2xl"></div>
          </div>
        </div>
      </section>

      {/* Signature Items */}
      <section className="py-24 bg-gray-50 px-6 md:px-12 flex justify-center">
        <div className="max-w-7xl w-full">
          <div className="text-center space-y-4 mb-16">
            <span className="text-[#00989F] font-semibold tracking-wider uppercase text-sm">{t("signature.badge")}</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a]">{t("signature.title")}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2670&auto=format&fit=crop", idx: 0 },
              { img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=2581&auto=format&fit=crop", idx: 1 },
              { img: "https://images.unsplash.com/photo-1573821663912-569905455b1c?q=80&w=2574&auto=format&fit=crop", idx: 2 }
            ].map((pizza, i) => (
              <div key={i} className="bg-white rounded-3xl overflow-hidden card-hover shadow-lg shadow-gray-200/50 flex flex-col">
                <div className="h-64 overflow-hidden relative">
                  <img src={pizza.img} alt={`Pizza ${i}`} className="w-full h-full object-cover" />
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold mb-3">{t<SignatureItem[]>("signature.items")[pizza.idx].name}</h3>
                  <p className="text-gray-600 leading-relaxed flex-1">{t<SignatureItem[]>("signature.items")[pizza.idx].desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link href="/clientes/soip-amaur-demo/menu" className="soip-btn-outline inline-flex text-lg px-8 py-4">
              {t("hero.ctaMenu")}
            </Link>
          </div>
        </div>
      </section>

      {/* Social / Gallery Section */}
      <section id="gallery" className="py-24 bg-[#1a1a1a] text-white px-6 md:px-12 flex justify-center overflow-hidden">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2574&auto=format&fit=crop" className="rounded-2xl w-full h-48 object-cover" alt="Gallery" />
              <img src="https://images.unsplash.com/photo-1525610553991-2bede1a236e2?q=80&w=2670&auto=format&fit=crop" className="rounded-2xl w-full h-64 object-cover" alt="Gallery" />
            </div>
            <div className="space-y-4 pt-12">
              <img src="https://images.unsplash.com/photo-1554679665-f5537f187268?q=80&w=2574&auto=format&fit=crop" className="rounded-2xl w-full h-64 object-cover" alt="Gallery" />
              <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2670&auto=format&fit=crop" className="rounded-2xl w-full h-48 object-cover" alt="Gallery" />
            </div>
          </div>
          
          <div className="order-1 lg:order-2 space-y-6">
            <span className="text-[#00989F] font-semibold tracking-wider uppercase text-sm">{t("social.badge")}</span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              {t("social.title")}
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              {t("social.desc")}
            </p>
            <div className="pt-4">
              <a href="#" className="inline-flex items-center gap-2 text-[#00989F] font-semibold hover:text-white transition-colors">
                <span>@soip_amaur_andria</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white px-6 md:px-12 flex justify-center">
        <div className="max-w-4xl w-full bg-[#f8f9fa] rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row gap-12 justify-between items-center shadow-sm border border-gray-100">
          <div className="space-y-8 flex-1">
            <h2 className="text-4xl font-bold text-[#1a1a1a]">{t("contact.title")}</h2>
            
            <div className="space-y-6">
              <div>
                <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">{t("contact.addressLabel")}</p>
                <p className="font-medium text-lg text-gray-800">{t("contact.address")}</p>
              </div>
              
              <div>
                <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">{t("contact.hoursLabel")}</p>
                <p className="font-medium text-lg text-gray-800">{t("contact.hours")}</p>
              </div>
            </div>
          </div>
          
          <div className="flex-1 w-full flex justify-center md:justify-end">
            <a 
              href={waLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full md:w-auto bg-[#25D366] text-white px-8 py-5 rounded-2xl font-bold text-center text-lg hover:bg-[#128C7E] transition-all flex items-center justify-center gap-3 shadow-xl shadow-[#25D366]/20 hover:-translate-y-1"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              {t("contact.whatsappCta")}
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-8 border-t border-gray-100 flex justify-center text-center">
        <p className="text-sm text-gray-400 font-medium">
          © {new Date().getFullYear()} SOIP AMAUR. {t("footer.rights")}.
        </p>
      </footer>
    </div>
  );
}

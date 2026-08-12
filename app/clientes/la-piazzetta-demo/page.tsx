"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "./LanguageContext";

export default function PiazzettaLandingPage() {
  const { language, setLanguage, t } = useLanguage();

  const en = language === "en";

  return (
    <div className="w-full relative flex flex-col font-sans text-[#1A1A1A]">
      
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          <Link 
            href="/clientes/la-piazzetta-demo" 
            className="text-xl md:text-2xl font-bold tracking-tight text-[#1A1A1A] hover:text-[#678561] transition-colors rounded-md focus-visible:ring-2 focus-visible:ring-[#678561] outline-none"
          >
            La Piazzetta
          </Link>
          
          <nav className="hidden md:flex gap-8 text-sm font-semibold">
            {["menu", "gallery", "location", "contact"].map(item => (
              <a 
                key={item} 
                href={item === "menu" ? "/clientes/la-piazzetta-demo/menu" : `#${item}`}
                className="hover:text-[#678561] transition-colors rounded-md focus-visible:ring-2 focus-visible:ring-[#678561] py-1 outline-none"
              >
                {t(`nav.${item}`)}
              </a>
            ))}
          </nav>

          <div className="flex gap-2">
            <button
              onClick={() => setLanguage("it")}
              aria-pressed={language === "it"}
              className={`text-sm font-bold w-10 h-10 flex items-center justify-center rounded-full transition-colors focus-visible:ring-2 focus-visible:ring-[#678561] outline-none ${language === "it" ? "bg-[#678561] text-white" : "text-[#1A1A1A] hover:bg-gray-100"}`}
            >
              IT
            </button>
            <button
              onClick={() => setLanguage("en")}
              aria-pressed={language === "en"}
              className={`text-sm font-bold w-10 h-10 flex items-center justify-center rounded-full transition-colors focus-visible:ring-2 focus-visible:ring-[#678561] outline-none ${language === "en" ? "bg-[#678561] text-white" : "text-[#1A1A1A] hover:bg-gray-100"}`}
            >
              EN
            </button>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative w-full min-h-[85vh] flex items-center bg-[#F5F5F5] pt-20">
        <div className="max-w-6xl mx-auto px-4 md:px-8 w-full flex flex-col-reverse md:flex-row items-center gap-12">
          
          {/* TEXT */}
          <div className="w-full md:w-1/2 flex flex-col items-start text-center md:text-left">
            <span className="text-[#678561] font-bold tracking-widest uppercase text-sm mb-4">La Piazzetta</span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-[#1A1A1A] leading-tight mb-6" style={{ textWrap: "balance" }}>
              {t("hero.title")}
            </h1>
            <p className="text-xl text-gray-500 font-medium mb-10 max-w-md mx-auto md:mx-0" style={{ textWrap: "balance" }}>
              {t("hero.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
               <Link href="/clientes/la-piazzetta-demo/menu" className="btn-piazzetta btn-primary w-full sm:w-auto">
                 {t("hero.cta.menu")}
               </Link>
               <a href="#contact" className="btn-piazzetta btn-secondary w-full sm:w-auto">
                 {t("hero.cta.contact")}
               </a>
            </div>
          </div>

          {/* IMAGE */}
          <div className="w-full md:w-1/2 relative flex justify-center mt-8 md:mt-0">
             <div className="relative w-full max-w-sm aspect-square md:max-w-md">
                 <Image
                   src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop"
                   alt="Fresh Italian Pizza"
                   fill
                   className="object-cover rounded-full shadow-2xl border-8 border-white"
                   priority
                 />
                 {/* Badge */}
                 <div className="absolute -bottom-4 right-0 bg-[#678561] text-white px-6 py-4 rounded-full shadow-xl rotate-12 flex items-center justify-center font-bold text-lg">
                    100% {en ? "Fresh" : "Fresco"}
                 </div>
             </div>
          </div>
        </div>
      </section>

      {/* FEATURED / BEST SELLERS */}
      <section className="py-24 bg-white px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] mb-2">{t("featured.title")}</h2>
              <p className="text-gray-500 font-medium">{t("featured.subtitle")}</p>
            </div>
            <Link href="/clientes/la-piazzetta-demo/menu" className="text-[#678561] font-bold hover:underline mb-2 hidden md:block rounded-sm focus-visible:ring-2 focus-visible:ring-[#678561] outline-none">
              {en ? "View full menu →" : "Vedi il menu completo →"}
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-[#F5F5F5] rounded-3xl p-6 hover:shadow-lg transition-transform hover:-translate-y-2 group">
              <div className="relative w-full h-48 mb-6 rounded-2xl overflow-hidden bg-gray-200">
                <Image src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=2069&auto=format&fit=crop" alt="Margherita" fill className="object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
              <div className="flex justify-between items-center mb-2">
                 <h3 className="text-2xl font-bold">Margherita</h3>
                 <span className="font-extrabold text-[#678561] text-xl">€6.50</span>
              </div>
              <p className="text-gray-500 text-sm">Pomodoro, mozzarella, {en ? "basil" : "basilico"}.</p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#F5F5F5] rounded-3xl p-6 hover:shadow-lg transition-transform hover:-translate-y-2 group">
              <div className="relative w-full h-48 mb-6 rounded-2xl overflow-hidden bg-gray-200">
                <Image src="https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=2000&auto=format&fit=crop" alt="Pepperoni" fill className="object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
              <div className="flex justify-between items-center mb-2">
                 <h3 className="text-2xl font-bold">Diavola</h3>
                 <span className="font-extrabold text-[#678561] text-xl">€8.00</span>
              </div>
              <p className="text-gray-500 text-sm">{en ? "Spicy salami, tomato, mozzarella" : "Salame piccante, pomodoro, mozzarella"}.</p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#F5F5F5] rounded-3xl p-6 hover:shadow-lg transition-transform hover:-translate-y-2 group">
              <div className="relative w-full h-48 mb-6 rounded-2xl overflow-hidden bg-gray-200">
                <Image src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=2000&auto=format&fit=crop" alt="Vegetariana" fill className="object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
              <div className="flex justify-between items-center mb-2">
                 <h3 className="text-2xl font-bold">Ortolana</h3>
                 <span className="font-extrabold text-[#678561] text-xl">€7.50</span>
              </div>
              <p className="text-gray-500 text-sm">{en ? "Grilled vegetables, mozzarella" : "Verdure grigliate, mozzarella"}.</p>
            </div>
          </div>
          
          <div className="mt-8 text-center md:hidden">
             <Link href="/clientes/la-piazzetta-demo/menu" className="btn-piazzetta btn-secondary w-full">
               {en ? "View full menu" : "Vedi il menu completo"}
             </Link>
          </div>
        </div>
      </section>

      {/* QUICK INFO ALONG WITH MAP */}
      <section id="location" className="py-24 bg-[#1A1A1A] text-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#678561] font-bold tracking-widest uppercase text-sm mb-4 block">La Piazzetta</span>
            <h2 className="text-4xl font-extrabold mb-8" style={{ textWrap: "balance" }}>{en ? "Come visit us or call to order" : "Vieni a trovarci o chiama per ordinare"}</h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                  📍
                </div>
                <div>
                  <h4 className="text-sm text-gray-400 font-bold uppercase">{t("nav.location")}</h4>
                  <p className="font-medium text-lg">{t("info.address")}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                  ⏰
                </div>
                <div>
                  <h4 className="text-sm text-gray-400 font-bold uppercase">{en ? "Opening Hours" : "Orari"}</h4>
                  <p className="font-medium text-lg">{t("info.hours")}</p>
                </div>
              </div>

              <div className="flex gap-4">
                 <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                  📞
                </div>
                <div id="contact">
                  <h4 className="text-sm text-gray-400 font-bold uppercase">{t("nav.contact")}</h4>
                  <p className="font-medium text-2xl text-[#678561] tracking-wide">{t("info.phone")}</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
               <a 
                 href={`https://wa.me/391234567891?text=${encodeURIComponent(en ? "Hi, I'd like to order a pizza!" : "Ciao, vorrei ordinare una pizza!")}`}
                 className="btn-piazzetta outline-0 ring-2 ring-[#678561] hover:bg-[#678561] text-white transition-colors w-full sm:w-auto focus-visible:ring-4 focus-visible:ring-white"
                 target="_blank" rel="noopener noreferrer"
               >
                 {en ? "Order via WhatsApp" : "Ordina su WhatsApp"}
               </a>
            </div>
          </div>

          <div className="h-[400px] w-full bg-gray-800 rounded-3xl overflow-hidden border border-white/10">
            {/* GOOGLE MAPS IFRAME */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1506.1696209631086!2d16.295055!3d41.226871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0!2zNDHCsDEzJzM2LjciTiAxNsKwMTcnNDIuMiJF!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr" 
              className="w-full h-full border-0"
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title={en ? "Location map" : "Mappa della posizione"}
            ></iframe>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white py-8 border-t border-gray-100 text-center px-4">
        <h3 className="text-xl font-bold tracking-tight text-[#1A1A1A] mb-2">La Piazzetta</h3>
        <p className="text-gray-500 font-medium text-sm">© {new Date().getFullYear()} La Piazzetta Andria. {en ? "All rights reserved." : "Tutti i diritti riservati."}</p>
      </footer>
    </div>
  );
}

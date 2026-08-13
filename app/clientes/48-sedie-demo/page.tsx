"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "./LanguageContext";

export default function SedieLandingPage() {
  const { language, setLanguage, t } = useLanguage();

  // Funções helpers de i18n
  const it = language === "it";

  return (
    <div className="min-h-screen bg-[#F5F1E8] text-[#3E2C23] flex flex-col relative w-full overflow-x-hidden">
      
      {/* HEADER / NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 bg-[#F5F1E8]/90 backdrop-blur-md border-b border-[#3E2C23]/10">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/clientes/48-sedie-demo" className="text-2xl font-serif-custom font-bold text-[#7A1C1C] focus-visible:ring-2 focus-visible:ring-[#7A1C1C] rounded-sm outline-none">
            48 SEDIE
          </Link>

          <nav className="hidden md:flex gap-8 font-medium text-sm focus-within:ring-2 focus-within:ring-transparent">
            {["experience", "gallery", "location"].map((item) => (
              <a 
                key={item} 
                href={`#${item}`} 
                className="hover:text-[#7A1C1C] transition-colors focus-visible:ring-2 focus-visible:ring-[#7A1C1C] rounded-sm outline-none"
              >
                {t(`nav.${item}`)}
              </a>
            ))}
            <Link 
              href="/clientes/48-sedie-demo/menu" 
              className="text-[#7A1C1C] font-semibold hover:text-[#3E2C23] transition-colors focus-visible:ring-2 focus-visible:ring-[#7A1C1C] rounded-sm outline-none"
            >
              {t("nav.menu")}
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setLanguage("it")}
              aria-pressed={language === "it"}
              className={`text-sm font-bold w-8 h-8 flex items-center justify-center rounded-full transition-colors focus-visible:ring-2 focus-visible:ring-[#7A1C1C] outline-none ${language === "it" ? "bg-[#7A1C1C] text-[#F5F1E8]" : "hover:bg-[#3E2C23]/10"}`}
            >
              IT
            </button>
            <button
              onClick={() => setLanguage("en")}
              aria-pressed={language === "en"}
              className={`text-sm font-bold w-8 h-8 flex items-center justify-center rounded-full transition-colors focus-visible:ring-2 focus-visible:ring-[#7A1C1C] outline-none ${language === "en" ? "bg-[#7A1C1C] text-[#F5F1E8]" : "hover:bg-[#3E2C23]/10"}`}
            >
              EN
            </button>
            <a 
              href="#reservations" 
              className="hidden sm:inline-block bg-[#3E2C23] text-[#F5F1E8] px-5 py-2 rounded-md font-medium hover:bg-[#7A1C1C] transition-colors focus-visible:ring-2 focus-visible:ring-[#7A1C1C] outline-none"
            >
              {t("nav.book")}
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-black">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=2070&auto=format&fit=crop"
            alt={it ? "Ambiente accogliente del ristorante" : "Welcoming restaurant interior"}
            fill
            className="object-cover opacity-60"
            priority /* Critical above-the-fold image */
          />
          {/* Ovelay degrade para dar contraste pro texto */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#3E2C23] via-[#3E2C23]/60 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl pt-20">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-1 bg-[#7A1C1C]"></div>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif-custom text-[#F5F1E8] mb-6 leading-tight" style={{ textWrap: "balance" }}>
            {t("hero.title")}
          </h1>
          <p className="text-xl md:text-2xl text-[#F5F1E8]/90 font-light mb-10 max-w-2xl mx-auto" style={{ textWrap: "balance" }}>
            {t("hero.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/clientes/48-sedie-demo/menu" className="btn-primary-sedie w-full sm:w-auto">
              {t("hero.cta")}
            </Link>
            <a href="#reservations" className="border-2 border-[#F5F1E8] text-[#F5F1E8] px-6 py-3 rounded-md font-medium transition-all hover:bg-[#F5F1E8] hover:text-[#3E2C23] focus-visible:ring-4 focus-visible:ring-white/50 outline-none w-full sm:w-auto">
              {t("nav.book")}
            </a>
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="py-24 px-4 bg-grain relative">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <h2 className="text-[#7A1C1C] text-sm font-bold uppercase tracking-widest mb-2">48 Sedie</h2>
            <h3 className="text-4xl md:text-5xl font-serif-custom mb-6">{t("experience.title")}</h3>
            <p className="text-lg leading-relaxed text-[#3E2C23]/80 mb-8">
              {t("experience.desc")}
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="border-l-2 border-[#7A1C1C] pl-4">
                <span className="block font-serif-custom text-2xl font-bold">100%</span>
                <span className="text-sm font-medium uppercase tracking-wider">{it ? "Passione" : "Passion"}</span>
              </div>
              <div className="border-l-2 border-[#7A1C1C] pl-4">
                <span className="block font-serif-custom text-2xl font-bold">Menu</span>
                <span className="text-sm font-medium uppercase tracking-wider">{it ? "Fresco" : "Fresh"}</span>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 relative h-[500px] w-full rounded-tr-[100px] rounded-bl-[100px] overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070&auto=format&fit=crop"
              alt={it ? "Preparazione autentica" : "Authentic preparation"}
              fill
              className="object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* SIGNATURE DISHES */}
      <section className="py-24 bg-[#3E2C23] text-[#F5F1E8] px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[#7A1C1C] text-sm font-bold uppercase tracking-widest mb-2">{it ? "Le Nostre Specialità" : "Our Specialties"}</h2>
            <h3 className="text-4xl md:text-5xl font-serif-custom" style={{ textWrap: "balance" }}>
              {it ? "Un trionfo di sapori" : "A triumph of flavors"}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Dish 1: Pizza */}
            <div className="group overflow-hidden rounded-lg bg-[#F5F1E8]/5 hover:bg-[#F5F1E8]/10 transition-colors">
              <div className="relative h-64 w-full">
                <Image src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1981&auto=format&fit=crop" alt="Pizza Gourmet" fill className="object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
              <div className="p-6">
                <h4 className="font-serif-custom text-2xl mb-2">Pizza Gourmet</h4>
                <p className="text-sm text-[#F5F1E8]/70">{t("category.pizza")}</p>
              </div>
            </div>

            {/* Dish 2: Seafood */}
            <div className="group overflow-hidden rounded-lg bg-[#F5F1E8]/5 hover:bg-[#F5F1E8]/10 transition-colors">
              <div className="relative h-64 w-full">
                <Image src="https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?q=80&w=1956&auto=format&fit=crop" alt="Pesce Fresco" fill className="object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
              <div className="p-6">
                <h4 className="font-serif-custom text-2xl mb-2">{t("menu.seafood")}</h4>
                <p className="text-sm text-[#F5F1E8]/70">{t("category.seafood")}</p>
              </div>
            </div>

            {/* Dish 3: Meat */}
            <div className="group overflow-hidden rounded-lg bg-[#F5F1E8]/5 hover:bg-[#F5F1E8]/10 transition-colors">
              <div className="relative h-64 w-full">
                <Image src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069&auto=format&fit=crop" alt="Carni Scelte" fill className="object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
              <div className="p-6">
                <h4 className="font-serif-custom text-2xl mb-2">{t("menu.meat")}</h4>
                <p className="text-sm text-[#F5F1E8]/70">{t("category.meat")}</p>
              </div>
            </div>

            {/* Dish 4: Wine */}
            <div className="group overflow-hidden rounded-lg bg-[#F5F1E8]/5 hover:bg-[#F5F1E8]/10 transition-colors">
              <div className="relative h-64 w-full">
                <Image src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2070&auto=format&fit=crop" alt="Vini" fill className="object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
              <div className="p-6">
                <h4 className="font-serif-custom text-2xl mb-2">{t("menu.wine")}</h4>
                <p className="text-sm text-[#F5F1E8]/70">{t("category.wine")}</p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link href="/clientes/48-sedie-demo/menu" className="btn-primary-sedie inline-block">
              {it ? "Sfoglia tutto il menu" : "Browse full menu"}
            </Link>
          </div>
        </div>
      </section>

      {/* QUICK INFO & LOCATION */}
      <section id="location" className="py-24 px-4 bg-grain">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <h3 className="text-4xl font-serif-custom mb-8 text-[#7A1C1C]">{t("nav.location")}</h3>
            
            <div className="space-y-8">
              <div>
                <h4 className="font-bold uppercase tracking-wider text-sm mb-2">{it ? "Indirizzo" : "Address"}</h4>
                <p className="text-lg">{t("footer.address")}</p>
              </div>
              
              <div>
                <h4 className="font-bold uppercase tracking-wider text-sm mb-2">{it ? "Orari" : "Hours"}</h4>
                <p className="text-lg">{t("footer.hours")}</p>
              </div>

              <div>
                <h4 className="font-bold uppercase tracking-wider text-sm mb-2">{it ? "Contatti" : "Contact"}</h4>
                <p className="text-lg font-serif-custom text-[#7A1C1C] font-bold">{t("footer.phone")}</p>
              </div>

              <div id="reservations" className="pt-8 border-t border-[#3E2C23]/20">
                <h4 className="font-bold uppercase tracking-wider text-sm mb-4">{it ? "Prenotazione Rapida" : "Quick Reservation"}</h4>
                <a 
                  href={`https://wa.me/391234567890?text=${encodeURIComponent(it ? "Ciao, vorrei prenotare un tavolo a 48 Sedie." : "Hello, I would like to book a table at 48 Sedie.")}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary-sedie flex items-center justify-center gap-2 w-full text-center"
                >
                  <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 3.825.001 6.938 3.113 6.938 6.938-.001 3.825-3.114 6.938-6.938 6.938z"/>
                  </svg>
                  {it ? "Prenota su WhatsApp" : "Book via WhatsApp"}
                </a>
              </div>
            </div>
          </div>
          <div className="lg:w-2/3 h-[400px] lg:h-auto min-h-[400px] rounded-lg overflow-hidden shadow-lg border-4 border-[#F5F1E8]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3012.339241926217!2d16.295055!3d41.226871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0!2zNDHCsDEzJzM2LjciTiAxNsKwMTcnNDIuMiJF!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr" 
              className="w-full h-full border-0"
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title={it ? "Mappa della posizione" : "Location map"}
            ></iframe>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1A110D] text-[#F5F1E8]/60 py-12 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-serif-custom text-[#F5F1E8] mb-6">48 SEDIE</h2>
          <p className="mb-8">&quot;A complete Italian dining experience in a welcoming atmosphere&quot;</p>
          <div className="flex justify-center gap-6 mb-8">
             {/* Social links here */}
          </div>
          <p className="text-sm">© {new Date().getFullYear()} 48 Sedie Andria. {it ? "Tutti i diritti riservati." : "All rights reserved."}</p>
        </div>
      </footer>
    </div>
  );
}

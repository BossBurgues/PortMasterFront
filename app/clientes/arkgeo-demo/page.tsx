"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { 
  RiBuilding2Fill, 
  RiMap2Fill, 
  RiLeafFill, 
  RiBookOpenFill, 
  RiMapPin2Fill, 
  RiPhoneFill, 
  RiMailFill, 
  RiArrowRightLine,
  RiCheckFill,
  RiGlobalLine,
  RiShieldCheckLine
} from "@remixicon/react";

import proj2 from "./images/proj_2.png";
import proj3 from "./images/proj_3.png";

/**
 * ArkGeo Engineering S.r.l. - Redesign 3.0 (Blue Edition)
 * Focado em modernização institucional, azul corporativo e estrutura estática.
 */
export default function ArkGeoPage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="arkgeo-3-theme min-h-screen bg-slate-50 relative">
      
      {/* Top Bar - Branding e Certificados (Fiel ao original) */}
      <div className="bg-white border-b border-slate-100 py-3 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-[#64748b]">
          <div className="flex items-center gap-8">
            <span className="flex items-center gap-2">
              <RiShieldCheckLine className="w-4 h-4 text-blue-600" />
              SISTEMA DI QUALITÀ CERTIFICATO: ICMQ • CSQ • IQNET
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-blue-900">Project Manager:</span>
            <span className="text-slate-900">Arch. Antonio Mangia</span>
          </div>
        </div>
      </div>

      {/* Navegação - Azul Institucional e Moderna */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-300 transform-gpu
          ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-4" : "bg-white py-6"}
        `}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex flex-col">
              <h1 className="text-2xl font-black tracking-tighter text-blue-950 leading-none">
                ARK<span className="text-blue-600">GEO</span>
              </h1>
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400 mt-0.5">
                Engineering S.r.l.
              </span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-10">
            {['Home', 'Progetti', 'Rilievi', 'Certificazione', 'News', 'Collaboratori', 'Contatti'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className={`text-sm font-bold uppercase tracking-wider transition-colors
                  ${item === 'Home' ? 'text-blue-600' : 'text-slate-500 hover:text-blue-600'}
                `}
              >
                {item}
              </a>
            ))}
          </nav>

          <button className="hidden lg:block bg-blue-600 text-white px-6 py-2.5 text-xs font-bold uppercase tracking-widest hover:bg-blue-700 transition-colors rounded-sm shadow-md">
            Area Riservata
          </button>
        </div>
      </header>

      {/* Hero - Moderna com Conteúdo Original do Drone/Infraestrutura */}
      <section id="home" className="relative h-[80vh] flex items-center overflow-hidden bg-blue-950">
        <div className="absolute inset-0 z-0">
          <Image 
            src={proj2} 
            alt="Infogestione ArkGeo" 
            fill
            priority
            className="object-cover opacity-40 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-linear-to-r from-blue-950 via-blue-950/60 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="max-w-3xl">
            <span className="inline-block bg-blue-600/20 text-blue-400 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.3em] rounded-sm mb-8">
              Dal 2007 • Multisectoral Engineering
            </span>
            <h2 className="text-5xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-10">
              SOLIDA <br /> <span className="text-blue-500">PRECISIONE.</span>
            </h2>
            <p className="text-lg md:text-xl text-blue-100/70 max-w-xl leading-relaxed mb-12 font-medium">
              Ingegneria integrata, rilievi topografici e architettura. Un approccio tecnico multidisciplinare per trasformare il territorio con eccellenza italiana.
            </p>
            <div className="flex flex-wrap gap-6">
              <a href="#progetti" className="inline-flex items-center gap-3 bg-blue-600 text-white px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-blue-500 transition-all shadow-xl hover:-translate-y-0.5">
                Archivio Progetti
                <RiArrowRightLine className="w-4 h-4" />
              </a>
              <a href="#contatti" className="inline-flex items-center gap-3 border border-white/20 text-white px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-white/10 transition-all">
                Contatti
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise - Grid Estática e Sólida */}
      <section id="certificazione" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
            <div className="max-w-2xl">
              <h3 className="text-4xl md:text-5xl font-black text-blue-950 tracking-tighter mb-6 leading-none">
                SETTORI OPERATIVI.
              </h3>
              <p className="text-slate-500 font-medium">
                La nostra competenza si estende attraverso cinque pilastri fondamentali dell&apos;ingegneria moderna.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-0.5 bg-blue-600 mb-2"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertiseData.map((item, index) => (
              <div key={index} className="bg-slate-50 p-10 border border-slate-100 group hover:border-blue-200 transition-all duration-300">
                <div className="mb-8 p-4 bg-white w-fit shadow-sm text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-blue-950 mb-4 uppercase tracking-tighter">
                  {item.title}
                </h4>
                <p className="text-sm text-slate-500 leading-relaxed opacity-80 group-hover:opacity-100">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projetos em Grid Masonry Estático (Fiel ao conteúdo atual) */}
      <section id="progetti" className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
          <h3 className="text-5xl font-black text-blue-950 tracking-tighter mb-4">GALLERIA PROGETTI</h3>
          <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Realizzazioni e Opere Infrastrutturali</p>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Item 1 - Grande (Ambientale) */}
          <div className="md:col-span-2 md:row-span-2 relative h-150 overflow-hidden shadow-2xl group">
            <Image 
              src={proj3} 
              alt="Opere Idrauliche" 
              fill 
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-blue-950/20 group-hover:bg-blue-950/10 transition-colors" />
            <div className="absolute bottom-0 left-0 p-10">
              <span className="text-white/70 text-[10px] font-black uppercase tracking-widest mb-3 block">Infraestrutture • 2022</span>
              <h5 className="text-white text-4xl font-black tracking-tight uppercase">Ponte del Sole</h5>
            </div>
          </div>

          {/* Item 2 - Retangular (Restauro) */}
          <div className="relative h-71 overflow-hidden shadow-lg group">
            <Image 
              src={proj2} 
              alt="Restauro Storico" 
              fill 
              className="object-cover"
            />
            <div className="absolute inset-0 bg-blue-600/30 group-hover:bg-blue-600/10 transition-colors" />
            <div className="absolute bottom-0 left-0 p-8">
              <h5 className="text-white text-xl font-bold uppercase">Restauro Lecce</h5>
            </div>
          </div>

          {/* Item 3 - Info Box */}
          <div className="bg-blue-600 p-10 flex flex-col justify-center text-white">
            <h5 className="text-2xl font-black uppercase tracking-tighter mb-6">Eccellenza Tecnica.</h5>
            <p className="text-sm leading-relaxed text-blue-50/80 mb-8 font-medium">
              Ogni progetto è il risultato di un&apos;accurata fase di rilievo topografico e modellazione 3D avanzata.
            </p>
            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest">
              <RiGlobalLine className="w-4 h-4" />
              Presenza Nazionale
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Sólido e Completo com Dados Originais */}
      <footer id="contatti" className="bg-white border-t border-slate-100 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-8 mb-24">
            <div className="lg:col-span-5">
              <div className="mb-10">
                <h4 className="text-3xl font-black text-blue-950 tracking-tighter leading-none">
                  ARK<span className="text-blue-600">GEO</span>
                </h4>
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400 mt-1">
                  Engineering S.r.l.
                </p>
              </div>
              <p className="text-slate-500 text-sm max-w-sm leading-relaxed mb-10">
                Studio multidisciplinare di ingegneria e architettura. Progettazione, rilievi e certificazioni di qualità dal 2007.
              </p>
              <div className="flex gap-4">
                <RiShieldCheckLine className="w-8 h-8 text-blue-600 opacity-50" />
                <RiGlobalLine className="w-8 h-8 text-blue-600 opacity-50" />
              </div>
            </div>

            <div className="lg:col-span-3">
              <span className="text-[#64748b] text-[10px] font-black uppercase tracking-[0.3em] block mb-8">Navegazione</span>
              <ul className="space-y-4 text-sm font-bold text-blue-950 uppercase tracking-widest">
                <li><a href="#" className="hover:text-blue-600 transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Progetti</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Certificazione</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Contatti</a></li>
              </ul>
            </div>

            <div className="lg:col-span-4">
              <span className="text-[#64748b] text-[10px] font-black uppercase tracking-[0.3em] block mb-8">Contatti</span>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <RiMapPin2Fill className="w-6 h-6 text-blue-600 shrink-0" />
                  <p className="text-sm font-bold text-blue-950 leading-relaxed uppercase">
                    Via E. Sticchi, 4 <br />
                    73024 MAGLIE (LE), Italia
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <RiPhoneFill className="w-6 h-6 text-blue-600 shrink-0" />
                  <span className="text-sm font-bold text-blue-950 uppercase">0836.211172</span>
                </div>
                <div className="flex items-center gap-4">
                  <RiMailFill className="w-6 h-6 text-blue-600 shrink-0" />
                  <span className="text-sm font-bold text-blue-950 uppercase">info@ArkGeo.it</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-black uppercase tracking-widest text-slate-400">
            <p>&copy; {new Date().getFullYear()} ArkGeo Engineering S.r.l. • P.IVA 04186520755</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

const expertiseData = [
  {
    icon: <RiLeafFill className="w-8 h-8" />,
    title: "Ambientale",
    desc: "Studi di impatto, bonifiche e progettazione di opere per la tutela del paesaggio conformi alle norme vigenti."
  },
  {
    icon: <RiBuilding2Fill className="w-8 h-8" />,
    title: "Civile",
    desc: "Progettazione strutturale e architettonica per complessi residenziali e centri direzionali di pregio."
  },
  {
    icon: <RiShieldCheckLine className="w-8 h-8" />,
    title: "Infrastrutture",
    desc: "Sviluppo di reti viarie, ponti e opere idrauliche con focus sulla sicurezza e durabilità dei materiali."
  },
  {
    icon: <RiBookOpenFill className="w-8 h-8" />,
    title: "Restauro",
    desc: "Conservazione e recupero del patrimonio storico architettonico del territorio salentino e nazionale."
  },
  {
    icon: <RiMap2Fill className="w-8 h-8" />,
    title: "Urbanistica",
    desc: "Strumenti di pianificazione territoriale e urbana per la modellazione sostenibile dello spazio pubblico."
  },
  {
    icon: <RiCheckFill className="w-8 h-8" />,
    title: "Certificazioni",
    desc: "Consulenza tecnica specialistica per il raggiungimento dei più alti standard di conformità qualitativa."
  }
];

"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useLanguage } from "./LanguageContext";

/**
 * MAMA RESTAURANT — Página Principal (Homepage)
 * 
 * Este arquivo define a landing page premium do Restaurante Màmà.
 * Foco em: Design editorial, narrativa visual e conversão (reservas e menu).
 * 
 * Seções:
 * 1. Navbar: Navegação fluida com troca de idioma.
 * 2. Hero: Impacto visual inicial com tipografia display.
 * 3. Story: A herança histórica do restaurante.
 * 4. Dishes: Vitrine dos pratos principais (Signature).
 * 5. Wine: A curadoria da adega.
 * 6. Gallery: Registro visual da atmosfera.
 * 7. Info/Reservas: Dados de contato e formulário/chamada para ação.
 */

/**
 * Ativos de Imagem
 * Fotos reais do restaurante Màmà em Andria, Itália.
 */
const IMG = {
  hero: "https://www.mamarestaurant.it/wp-content/uploads/2019/11/Mama-Ristorante-carne-e-pescer-Andria-Top-Location_1_rev-4-1024x683.jpg",
  interior1: "https://www.mamarestaurant.it/wp-content/uploads/2019/09/Ruotata-Location_3-1024x683.png",
  interior2: "https://www.mamarestaurant.it/wp-content/uploads/2019/11/Mama-Ristorante-carne-e-pescer-Andria-Top-Location_1_rev-5-1024x709.jpg",
  dishes: "https://www.mamarestaurant.it/wp-content/uploads/2019/10/Primo-Mix-Carne-Pesce_ed-FILEminimizer.png",
  risotto: "https://www.mamarestaurant.it/wp-content/uploads/2019/11/Riso-con-mandorle-e-scampi-Ristorante-Mama-Andria-1024x683.png",
  spaghetti: "https://www.mamarestaurant.it/wp-content/uploads/2019/11/Primo-Spaghetti-Ricci-Ristorante-Mama-Andria-300x200.png",
  noci: "https://www.mamarestaurant.it/wp-content/uploads/2019/11/Primo-Noci-e-Speck-Ristorante-Mama-Andria-300x200.png",
  seafood1: "https://www.mamarestaurant.it/wp-content/uploads/2019/11/Buon-Ristorante-Andria-Mama-Ottimi-ristoranti-carne-e-pesce-3-1024x683.png",
  seafood2: "https://www.mamarestaurant.it/wp-content/uploads/2019/11/Buon-Ristorante-Andria-Mama-Ottimi-ristoranti-carne-e-pesce-4-300x200.png",
  seafood3: "https://www.mamarestaurant.it/wp-content/uploads/2019/11/Buon-Ristorante-Andria-Mama-Ottimi-ristoranti-carne-e-pesce-7-300x200.png",
  location1: "https://www.mamarestaurant.it/wp-content/uploads/2019/10/i-migliori-ristoranti-di-andria-Mama-Andria-carne-e-pesce.png",
  location2: "https://www.mamarestaurant.it/wp-content/uploads/2019/10/i-migliori-ristoranti-di-andria-Mam%C3%A0-Andria-carne-e-pesce.png",
  logo: "https://www.mamarestaurant.it/wp-content/uploads/2019/10/Firma-MaMa-trasp-1024x239.png",
};

/* ---- Hook: Animação ao entrar no viewport ---- */
function useRevealOnScroll(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}

/* ---- Componente: Reveal animado ---- */
function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, visible } = useRevealOnScroll(0.1);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: `all 0.9s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

/* ================================================================
 * COMPONENTE PRINCIPAL — Homepage Màmà Restaurant
 * ================================================================ */
export default function MamaHomePage() {
  const { language, setLanguage, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* Detecta scroll para navbar */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      style={{
        background: "var(--mama-black)",
        color: "var(--mama-cream)",
        minHeight: "100vh",
      }}
    >
      {/* =====================================================
       * NAVEGAÇÃO — Fixa, transparente → sólida ao scroll
       * ===================================================== */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: scrolled ? "0.8rem 0" : "1.5rem 0",
          background: scrolled ? "rgba(10,10,10,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(201,169,110,0.1)" : "none",
          transition: "all 0.5s var(--mama-ease)",
        }}
      >
        <div className="mama-container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Logo textual */}
          <a href="#" style={{ textDecoration: "none" }}>
            <span
              style={{
                fontFamily: "var(--mama-font-display)",
                fontSize: "1.5rem",
                fontWeight: 400,
                letterSpacing: "-0.02em",
                color: "var(--mama-cream)",
              }}
            >
              Màmà
            </span>
            <span
              style={{
                fontFamily: "var(--mama-font-serif)",
                fontSize: "0.65rem",
                fontWeight: 300,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "var(--mama-gold)",
                display: "block",
                marginTop: "-2px",
              }}
            >
              Restaurant
            </span>
          </a>

          {/* Links desktop */}
          <div
            style={{
              display: "flex",
              gap: "2.5rem",
              alignItems: "center",
            }}
            className="mama-nav-desktop"
          >
            {[
              { label: t("nav.about"), href: "#storia" },
              { label: t("nav.dishes"), href: "#piatti" },
              { label: t("nav.vini"), href: "#vini" },
              { label: t("nav.gallery"), href: "#galleria" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 400,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--mama-cream)",
                  textDecoration: "none",
                  opacity: 0.7,
                  transition: "opacity 0.3s",
                  fontFamily: "var(--mama-font-body)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.7")}
              >
                {item.label}
              </a>
            ))}

            {/* Seletor de Idioma (Desktop) */}
            <div style={{ display: "flex", gap: "0.2rem", alignItems: "center", marginRight: "1rem" }}>
              <button
                onClick={() => setLanguage("it")}
                style={{
                  background: "transparent",
                  border: "none",
                  color: language === "it" ? "var(--mama-gold)" : "rgba(245,240,232,0.4)",
                  fontFamily: "var(--mama-font-body)",
                  fontSize: "0.65rem",
                  fontWeight: language === "it" ? 600 : 400,
                  cursor: "pointer",
                  padding: "0.4rem",
                  transition: "color 0.3s",
                }}
              >
                IT
              </button>
              <span style={{ color: "rgba(245,240,232,0.1)", fontSize: "0.6rem" }}>|</span>
              <button
                onClick={() => setLanguage("en")}
                style={{
                  background: "transparent",
                  border: "none",
                  color: language === "en" ? "var(--mama-gold)" : "rgba(245,240,232,0.4)",
                  fontFamily: "var(--mama-font-body)",
                  fontSize: "0.65rem",
                  fontWeight: language === "en" ? 600 : 400,
                  cursor: "pointer",
                  padding: "0.4rem",
                  transition: "color 0.3s",
                }}
              >
                EN
              </button>
            </div>

            {/* CTA — Prenota */}
            <a
              href="#prenota"
              style={{
                fontSize: "0.7rem",
                fontWeight: 500,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--mama-black)",
                background: "var(--mama-gold)",
                padding: "0.65rem 1.6rem",
                textDecoration: "none",
                transition: "all 0.3s var(--mama-ease)",
                fontFamily: "var(--mama-font-body)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--mama-gold-light)";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--mama-gold)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Prenota
            </a>
          </div>

          {/* Hamburger — mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu di navigazione"
            className="mama-nav-hamburger"
            style={{
              display: "none",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "0.5rem",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: menuOpen ? "0" : "5px", transition: "gap 0.3s" }}>
              <span
                style={{
                  display: "block",
                  width: "24px",
                  height: "1px",
                  background: "var(--mama-cream)",
                  transition: "transform 0.3s",
                  transform: menuOpen ? "rotate(45deg) translate(0, 0)" : "none",
                }}
              />
              <span
                style={{
                  display: "block",
                  width: "24px",
                  height: "1px",
                  background: "var(--mama-cream)",
                  transition: "opacity 0.3s",
                  opacity: menuOpen ? 0 : 1,
                }}
              />
              <span
                style={{
                  display: "block",
                  width: "24px",
                  height: "1px",
                  background: "var(--mama-cream)",
                  transition: "transform 0.3s",
                  transform: menuOpen ? "rotate(-45deg) translate(1px, -1px)" : "none",
                }}
              />
            </div>
          </button>
        </div>

        {/* Menu mobile overlay */}
        {menuOpen && (
          <div
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(10,10,10,0.98)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "2rem",
              zIndex: 99,
              animation: "mama-fade-in 0.3s ease both",
            }}
          >
            {[
              { label: t("nav.about"), href: "#storia" },
              { label: t("nav.dishes"), href: "#piatti" },
              { label: t("nav.vini"), href: "#vini" },
              { label: t("nav.gallery"), href: "#galleria" },
              { label: t("nav.book"), href: "#prenota" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: "var(--mama-font-display)",
                  fontSize: "1.8rem",
                  color: "var(--mama-cream)",
                  textDecoration: "none",
                  letterSpacing: "-0.01em",
                }}
              >
                {item.label}
              </a>
            ))}
            {/* Toggle Idioma no Mobile */}
            <div style={{ display: "flex", gap: "2rem", marginTop: "1rem" }}>
              <button
                onClick={() => {
                  setLanguage("it");
                  setMenuOpen(false);
                }}
                style={{
                  background: "none",
                  border: "none",
                  color: language === "it" ? "var(--mama-gold)" : "rgba(245,240,232,0.4)",
                  fontFamily: "var(--mama-font-body)",
                  fontSize: "1rem",
                  fontWeight: language === "it" ? 600 : 400,
                  cursor: "pointer",
                }}
              >
                IT
              </button>
              <button
                onClick={() => {
                  setLanguage("en");
                  setMenuOpen(false);
                }}
                style={{
                  background: "none",
                  border: "none",
                  color: language === "en" ? "var(--mama-gold)" : "rgba(245,240,232,0.4)",
                  fontFamily: "var(--mama-font-body)",
                  fontSize: "1rem",
                  fontWeight: language === "en" ? 600 : 400,
                  cursor: "pointer",
                }}
              >
                EN
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* =====================================================
       * HERO — Fullscreen, imagem + overlay + CTA
       * ===================================================== */}
      <section
        style={{
          position: "relative",
          height: "100vh",
          minHeight: "600px",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "flex-start",
          overflow: "hidden",
        }}
      >
        {/* Imagem de fundo */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url('${IMG.hero}')`,
            backgroundSize: "cover",
            backgroundPosition: "center 40%",
            transform: "scale(1.05)",
            animation: "mama-scale-in 2s cubic-bezier(0.22,1,0.36,1) both",
          }}
        />

        {/* Overlay gradiente escuro — reforçado para contraste */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(10,10,10,0.55) 0%, rgba(10,10,10,0.45) 30%, rgba(10,10,10,0.65) 60%, rgba(10,10,10,0.92) 85%, rgba(10,10,10,0.98) 100%)",
          }}
        />

        {/* Vignette lateral — reforçada */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse at center, rgba(10,10,10,0.2) 30%, rgba(10,10,10,0.65) 100%)",
          }}
        />

        {/* Conteúdo do Hero */}
        <div
          className="mama-container"
          style={{
            position: "relative",
            zIndex: 2,
            paddingBottom: "6rem",
            maxWidth: "720px",
          }}
        >
          <span
            className="mama-animate-up"
            style={{
              display: "inline-block",
              fontFamily: "var(--mama-font-serif)",
              fontSize: "0.8rem",
              fontWeight: 300,
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              color: "var(--mama-gold)",
              marginBottom: "1.5rem",
              animationDelay: "0.3s",
            }}
          >
            {t("hero.subtitle")}
          </span>

          <h1
            className="mama-animate-up"
            style={{
              fontFamily: "var(--mama-font-display)",
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: 400,
              lineHeight: 1.05,
              color: "var(--mama-cream)",
              marginBottom: "1.5rem",
              animationDelay: "0.5s",
            }}
          >
            {t("hero.title1")}<br />
            {t("hero.title2")}<br />
            <em
              style={{
                fontStyle: "italic",
                color: "var(--mama-gold)",
              }}
            >
              {t("hero.titleCreative")}
            </em>
          </h1>

          <p
            className="mama-animate-up"
            style={{
              fontFamily: "var(--mama-font-serif)",
              fontSize: "1.15rem",
              fontWeight: 300,
              lineHeight: 1.6,
              color: "rgba(245,240,232,0.65)",
              maxWidth: "480px",
              marginBottom: "2.5rem",
              animationDelay: "0.7s",
              whiteSpace: "pre-line",
            }}
          >
            {t("hero.description")}
          </p>

          <div
            className="mama-animate-up"
            style={{
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
              animationDelay: "0.9s",
            }}
          >
            <Link
              href="/clientes/mama-demo/menu"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.85rem 2rem",
                background: "var(--mama-gold)",
                color: "var(--mama-black)",
                fontFamily: "var(--mama-font-body)",
                fontSize: "0.75rem",
                fontWeight: 500,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "all 0.3s var(--mama-ease)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--mama-gold-light)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--mama-gold)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {t("hero.ctaMenu")}
            </Link>

            <a
              href="#prenota"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.85rem 2rem",
                background: "transparent",
                color: "var(--mama-cream)",
                fontFamily: "var(--mama-font-body)",
                fontSize: "0.75rem",
                fontWeight: 400,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                textDecoration: "none",
                border: "1px solid rgba(245,240,232,0.25)",
                transition: "all 0.3s var(--mama-ease)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--mama-gold)";
                e.currentTarget.style.color = "var(--mama-gold)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(245,240,232,0.25)";
                e.currentTarget.style.color = "var(--mama-cream)";
              }}
            >
              {t("hero.ctaBook")}
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: "absolute",
            bottom: "2rem",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
            opacity: 0.4,
            animation: "mama-fade-in 1s ease 1.5s both",
          }}
        >
          <span
            style={{
              fontFamily: "var(--mama-font-serif)",
              fontSize: "0.6rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "var(--mama-cream)",
            }}
          >
            {t("hero.scopri")}
          </span>
          <div
            style={{
              width: "1px",
              height: "40px",
              background: "linear-gradient(to bottom, var(--mama-gold), transparent)",
              animation: "mama-fade-in 1s ease 1.8s both",
            }}
          />
        </div>
      </section>

      {/* =====================================================
       * STORIA / CONCEITO — Emocional, editorial
       * ===================================================== */}
      <section
        id="storia"
        style={{
          padding: "8rem 0",
          background: "var(--mama-black)",
          position: "relative",
        }}
      >
        <div className="mama-container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "4rem",
              alignItems: "center",
            }}
            className="mama-story-grid"
          >
            {/* Coluna texto */}
            <div style={{ maxWidth: "600px" }}>
              <Reveal>
                <span
                  style={{
                    fontFamily: "var(--mama-font-serif)",
                    fontSize: "0.75rem",
                    fontWeight: 300,
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                    color: "var(--mama-gold)",
                  }}
                >
                  {t("story.badge")}
                </span>
              </Reveal>

              <Reveal delay={0.1}>
                <h2
                  style={{
                    fontFamily: "var(--mama-font-display)",
                    fontSize: "clamp(2rem, 4vw, 3.2rem)",
                    fontWeight: 400,
                    lineHeight: 1.1,
                    color: "var(--mama-cream)",
                    margin: "1.5rem 0 2rem",
                  }}
                >
                  {t("story.title1")}<br />
                  {t("story.title2")}{" "}
                  <em style={{ fontStyle: "italic", color: "var(--mama-gold)" }}>
                    {t("story.titleAccent")}
                  </em>
                </h2>
              </Reveal>

              <Reveal delay={0.2}>
                <span className="mama-gold-line" style={{ marginBottom: "2rem" }} />
              </Reveal>

              <Reveal delay={0.3}>
                <p
                  style={{
                    fontFamily: "var(--mama-font-serif)",
                    fontSize: "1.1rem",
                    fontWeight: 300,
                    lineHeight: 1.8,
                    color: "rgba(245,240,232,0.6)",
                    marginBottom: "1.5rem",
                  }}
                >
                  {t("story.p1")}
                </p>
              </Reveal>

              <Reveal delay={0.4}>
                <p
                  style={{
                    fontFamily: "var(--mama-font-serif)",
                    fontSize: "1.1rem",
                    fontWeight: 300,
                    lineHeight: 1.8,
                    color: "rgba(245,240,232,0.6)",
                    marginBottom: "1.5rem",
                  }}
                >
                  {t("story.p2")}
                </p>
              </Reveal>

              <Reveal delay={0.5}>
                <p
                  style={{
                    fontFamily: "var(--mama-font-serif)",
                    fontSize: "1.1rem",
                    fontWeight: 300,
                    lineHeight: 1.8,
                    color: "rgba(245,240,232,0.6)",
                  }}
                >
                  {t("story.p3")}
                  <br />
                  <em style={{ color: "var(--mama-gold)", fontStyle: "italic" }}>
                    {t("story.appetito")}
                  </em>
                </p>
              </Reveal>
            </div>

            {/* Coluna imagem */}
            <Reveal delay={0.2}>
              <div
                style={{
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <img
                  src={IMG.interior1}
                  alt="Interno elegante del Ristorante Màmà — palazzo dell'Ottocento"
                  style={{
                    width: "100%",
                    height: "auto",
                    aspectRatio: "4/3",
                    objectFit: "cover",
                    filter: "brightness(0.85) contrast(1.05)",
                  }}
                  loading="lazy"
                />
                {/* Moldura decorativa */}
                <div
                  style={{
                    position: "absolute",
                    inset: "12px",
                    border: "1px solid rgba(201,169,110,0.15)",
                    pointerEvents: "none",
                  }}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =====================================================
       * PRATOS SIGNATURE — Cards editoriais grandes
       * ===================================================== */}
      <section
        id="piatti"
        style={{
          padding: "6rem 0 8rem",
          background: "var(--mama-charcoal)",
          position: "relative",
        }}
        className="mama-grain"
      >
        <div className="mama-container">
          {/* Cabeçalho da seção */}
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: "5rem" }}>
              <span
                style={{
                  fontFamily: "var(--mama-font-serif)",
                  fontSize: "0.75rem",
                  fontWeight: 300,
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: "var(--mama-gold)",
                }}
              >
                {t("dishes.badge")}
              </span>
              <h2
                style={{
                  fontFamily: "var(--mama-font-display)",
                  fontSize: "clamp(2rem, 4vw, 3.2rem)",
                  fontWeight: 400,
                  lineHeight: 1.1,
                  color: "var(--mama-cream)",
                  margin: "1rem 0 1.5rem",
                }}
              >
                {t("dishes.title1")}{" "}
                <em style={{ fontStyle: "italic", color: "var(--mama-gold)" }}>
                  {t("dishes.titleChef")}
                </em>
              </h2>
              <span className="mama-gold-line mama-gold-line--center" />
            </div>
          </Reveal>

          {/* Card grande — piatto principale */}
          <Reveal>
            <div
              style={{
                position: "relative",
                overflow: "hidden",
                marginBottom: "2rem",
                cursor: "pointer",
                transition: "transform 0.6s var(--mama-ease)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.01)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <img
                src={IMG.risotto}
                alt="Riso con mandorle e scampi — piatto signature"
                style={{
                  width: "100%",
                  height: "auto",
                  aspectRatio: "16/9",
                  objectFit: "cover",
                  filter: "brightness(0.8) contrast(1.1)",
                }}
                loading="lazy"
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(0deg, rgba(10,10,10,0.85) 0%, transparent 50%)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "2.5rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--mama-font-serif)",
                    fontSize: "0.7rem",
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    color: "var(--mama-gold)",
                  }}
                >
                  {t("dishes.signature")}
                </span>
                <h3
                  style={{
                    fontFamily: "var(--mama-font-display)",
                    fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                    fontWeight: 400,
                    color: "var(--mama-cream)",
                    margin: "0.5rem 0",
                  }}
                >
                  {t("dishes.risottoTitle")}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--mama-font-serif)",
                    fontSize: "0.95rem",
                    fontWeight: 300,
                    color: "rgba(245,240,232,0.5)",
                    maxWidth: "500px",
                  }}
                >
                  {t("dishes.risottoDesc")}
                </p>
              </div>
            </div>
          </Reveal>

          {/* Grid — 3 piatti secondari */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "2rem",
            }}
          >
            {[
              {
                img: IMG.seafood1,
                name: t("dishes.degustazioneTitle"),
                desc: t("dishes.degustazioneDesc"),
                tag: t("dishes.diMare"),
              },
              {
                img: IMG.dishes,
                name: t("dishes.mixTitle"),
                desc: t("dishes.mixDesc"),
                tag: t("common.tags.signature"),
              },
              {
                img: IMG.noci,
                name: t("dishes.pastaTitle"),
                desc: t("dishes.pastaDesc"),
                tag: t("dishes.diTerra"),
              },
            ].map((piatto, i) => (
              <Reveal key={piatto.name} delay={i * 0.15}>
                <div
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    cursor: "pointer",
                    transition: "transform 0.6s var(--mama-ease)",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-4px)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
                >
                  <div style={{ position: "relative", overflow: "hidden" }}>
                    <img
                      src={piatto.img}
                      alt={piatto.name}
                      style={{
                        width: "100%",
                        aspectRatio: "4/3",
                        objectFit: "cover",
                        filter: "brightness(0.75) contrast(1.1)",
                        transition: "transform 0.6s var(--mama-ease)",
                      }}
                      loading="lazy"
                      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                    />
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: "linear-gradient(0deg, rgba(10,10,10,0.8) 0%, transparent 60%)",
                      }}
                    />
                    {/* Tag do prato */}
                    <span
                      style={{
                        position: "absolute",
                        top: "1rem",
                        left: "1rem",
                        fontFamily: "var(--mama-font-body)",
                        fontSize: "0.6rem",
                        fontWeight: 500,
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: "var(--mama-black)",
                        background: "var(--mama-gold)",
                        padding: "0.35rem 0.8rem",
                      }}
                    >
                      {piatto.tag}
                    </span>
                  </div>

                  <div style={{ padding: "1.5rem 0.5rem" }}>
                    <h3
                      style={{
                        fontFamily: "var(--mama-font-display)",
                        fontSize: "1.3rem",
                        fontWeight: 400,
                        color: "var(--mama-cream)",
                        marginBottom: "0.5rem",
                      }}
                    >
                      {piatto.name}
                    </h3>
                    <p
                      style={{
                        fontFamily: "var(--mama-font-serif)",
                        fontSize: "0.9rem",
                        fontWeight: 300,
                        color: "rgba(245,240,232,0.45)",
                        lineHeight: 1.5,
                      }}
                    >
                      {piatto.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* CTA — Ver menu completo */}
          <Reveal delay={0.3}>
            <div style={{ textAlign: "center", marginTop: "4rem" }}>
              <Link
                href="/clientes/mama-demo/menu"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  padding: "1rem 2.5rem",
                  background: "transparent",
                  color: "var(--mama-gold)",
                  fontFamily: "var(--mama-font-body)",
                  fontSize: "0.75rem",
                  fontWeight: 500,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  border: "1px solid var(--mama-gold)",
                  transition: "all 0.3s var(--mama-ease)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--mama-gold)";
                  e.currentTarget.style.color = "var(--mama-black)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "var(--mama-gold)";
                }}
              >
                {t("dishes.ctaFullMenu")}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
       * ESPERIENZA DEI VINI
       * ===================================================== */}
      <section
        id="vini"
        style={{
          padding: "8rem 0",
          background: "var(--mama-black)",
          position: "relative",
        }}
      >
        <div className="mama-container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "4rem",
              alignItems: "center",
            }}
            className="mama-wine-grid"
          >
            {/* Imagem */}
            <Reveal>
              <div
                style={{
                  position: "relative",
                  overflow: "hidden",
                  order: 2,
                }}
              >
                <img
                  src={IMG.interior2}
                  alt="Sala elegante per degustazione vini — Ristorante Màmà"
                  style={{
                    width: "100%",
                    height: "auto",
                    aspectRatio: "16/10",
                    objectFit: "cover",
                    filter: "brightness(0.75) saturate(0.9)",
                  }}
                  loading="lazy"
                />
                <div
                  style={{
                    position: "absolute",
                    inset: "12px",
                    border: "1px solid rgba(201,169,110,0.12)",
                    pointerEvents: "none",
                  }}
                />
              </div>
            </Reveal>

            {/* Texto */}
            <div style={{ order: 1 }}>
              <Reveal>
                <span
                  style={{
                    fontFamily: "var(--mama-font-serif)",
                    fontSize: "0.75rem",
                    fontWeight: 300,
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                    color: "var(--mama-gold)",
                  }}
                >
                  {t("wine.badge")}
                </span>
              </Reveal>

              <Reveal delay={0.1}>
                <h2
                  style={{
                    fontFamily: "var(--mama-font-display)",
                    fontSize: "clamp(2rem, 4vw, 3.2rem)",
                    fontWeight: 400,
                    lineHeight: 1.1,
                    color: "var(--mama-cream)",
                    margin: "1.5rem 0 2rem",
                  }}
                >
                  {t("wine.title1")}{" "}
                  <em style={{ fontStyle: "italic", color: "var(--mama-gold)" }}>
                    {t("wine.titleVini")}
                  </em>
                </h2>
              </Reveal>

              <Reveal delay={0.2}>
                <span className="mama-gold-line" style={{ marginBottom: "2rem" }} />
              </Reveal>

              <Reveal delay={0.3}>
                <p
                  style={{
                    fontFamily: "var(--mama-font-serif)",
                    fontSize: "1.1rem",
                    fontWeight: 300,
                    lineHeight: 1.8,
                    color: "rgba(245,240,232,0.6)",
                    marginBottom: "1.5rem",
                    maxWidth: "500px",
                  }}
                >
                  {t("wine.p1")}
                </p>
              </Reveal>

              <Reveal delay={0.4}>
                <p
                  style={{
                    fontFamily: "var(--mama-font-serif)",
                    fontSize: "1.1rem",
                    fontWeight: 300,
                    lineHeight: 1.8,
                    color: "rgba(245,240,232,0.6)",
                    maxWidth: "500px",
                  }}
                >
                  {t("wine.p2")}
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
       * GALERIA — Atmosfera, interior, pratos
       * ===================================================== */}
      <section
        id="galleria"
        style={{
          padding: "6rem 0 8rem",
          background: "var(--mama-dark)",
        }}
      >
        <div className="mama-container">
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <span
                style={{
                  fontFamily: "var(--mama-font-serif)",
                  fontSize: "0.75rem",
                  fontWeight: 300,
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: "var(--mama-gold)",
                }}
              >
                {t("gallery.badge")}
              </span>
              <h2
                style={{
                  fontFamily: "var(--mama-font-display)",
                  fontSize: "clamp(2rem, 4vw, 3.2rem)",
                  fontWeight: 400,
                  lineHeight: 1.1,
                  color: "var(--mama-cream)",
                  margin: "1rem 0 1.5rem",
                }}
              >
                {t("gallery.title1")}{" "}
                <em style={{ fontStyle: "italic", color: "var(--mama-gold)" }}>
                  {t("gallery.titleMamma")}
                </em>
              </h2>
              <span className="mama-gold-line mama-gold-line--center" />
            </div>
          </Reveal>

          {/* Grid de fotos estilo masonry simplificado */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(12, 1fr)",
              gridAutoRows: "200px",
              gap: "8px",
            }}
            className="mama-gallery-grid"
          >
            {[
              { img: IMG.location1, span: "span 8", rSpan: "span 2", alt: "Location esterna" },
              { img: IMG.spaghetti, span: "span 4", rSpan: "span 2", alt: "Spaghetti ai ricci di mare" },
              { img: IMG.seafood2, span: "span 4", rSpan: "span 2", alt: "Creazioni di pesce" },
              { img: IMG.interior1, span: "span 8", rSpan: "span 2", alt: "Sala interna elegante" },
              { img: IMG.seafood3, span: "span 6", rSpan: "span 2", alt: "Piatto di mare" },
              { img: IMG.location2, span: "span 6", rSpan: "span 2", alt: "Esterno del ristorante" },
            ].map((photo, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div
                  style={{
                    gridColumn: photo.span,
                    gridRow: photo.rSpan,
                    overflow: "hidden",
                    position: "relative",
                    cursor: "pointer",
                  }}
                >
                  <img
                    src={photo.img}
                    alt={photo.alt}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      filter: "brightness(0.75) contrast(1.05)",
                      transition: "all 0.6s var(--mama-ease)",
                    }}
                    loading="lazy"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.filter = "brightness(0.9) contrast(1)";
                      e.currentTarget.style.transform = "scale(1.05)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.filter = "brightness(0.75) contrast(1.05)";
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
       * RESERVA / CONTATO
       * ===================================================== */}
      <section
        id="prenota"
        style={{
          padding: "8rem 0",
          background: "var(--mama-black)",
          position: "relative",
        }}
      >
        <div className="mama-container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "4rem",
            }}
            className="mama-contact-grid"
          >
            {/* Coluna info */}
            <div>
              <Reveal>
                <span
                  style={{
                    fontFamily: "var(--mama-font-serif)",
                    fontSize: "0.75rem",
                    fontWeight: 300,
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                    color: "var(--mama-gold)",
                  }}
                >
                {t("info.badge")}
                </span>
              </Reveal>

              <Reveal delay={0.1}>
                <h2
                  style={{
                    fontFamily: "var(--mama-font-display)",
                    fontSize: "clamp(2rem, 4vw, 3.2rem)",
                    fontWeight: 400,
                    lineHeight: 1.1,
                    color: "var(--mama-cream)",
                    margin: "1.5rem 0 2rem",
                  }}
                >
                  {t("info.title1")}<br />{t("info.titleTrovarci")}
                </h2>
              </Reveal>

              <Reveal delay={0.2}>
                <span className="mama-gold-line" style={{ marginBottom: "2.5rem" }} />
              </Reveal>

              {/* Detalhes de contato */}
              <Reveal delay={0.3}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "2rem",
                    marginBottom: "3rem",
                  }}
                >
                  {[
                    {
                      label: t("info.phoneLabel") || "Telefono",
                      value: t("info.phone"),
                      href: "tel:+390883885034",
                    },
                    {
                      label: t("info.addressLabel") || "Indirizzo",
                      value: t("info.address"),
                      href: "https://maps.google.com/?q=Corso+Cavour+27+Andria",
                    },
                    {
                      label: t("info.hoursLabel") || "Orari",
                      value: `${t("info.days")}: ${t("info.hours")}\n${t("info.closed")}`,
                    },
                  ].map((info) => (
                    <div key={info.label}>
                      <span
                        style={{
                          fontFamily: "var(--mama-font-body)",
                          fontSize: "0.65rem",
                          fontWeight: 500,
                          letterSpacing: "0.2em",
                          textTransform: "uppercase",
                          color: "var(--mama-gold)",
                          display: "block",
                          marginBottom: "0.5rem",
                        }}
                      >
                        {info.label}
                      </span>
                      {info.href ? (
                        <a
                          href={info.href}
                          style={{
                            fontFamily: "var(--mama-font-serif)",
                            fontSize: "1.15rem",
                            fontWeight: 300,
                            color: "var(--mama-cream)",
                            textDecoration: "none",
                            lineHeight: 1.6,
                            whiteSpace: "pre-line",
                            transition: "color 0.3s",
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--mama-gold)")}
                          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--mama-cream)")}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span
                          style={{
                            fontFamily: "var(--mama-font-serif)",
                            fontSize: "1.05rem",
                            fontWeight: 300,
                            color: "rgba(245,240,232,0.65)",
                            lineHeight: 1.6,
                            whiteSpace: "pre-line",
                          }}
                        >
                          {info.value}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </Reveal>

              {/* CTA grande */}
              <Reveal delay={0.4}>
                <a
                  href="tel:+390883885034"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    padding: "1rem 2.5rem",
                    background: "var(--mama-gold)",
                    color: "var(--mama-black)",
                    fontFamily: "var(--mama-font-body)",
                    fontSize: "0.8rem",
                    fontWeight: 500,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    transition: "all 0.3s var(--mama-ease)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "var(--mama-gold-light)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "var(--mama-gold)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  {t("info.ctaCall")}
                </a>
              </Reveal>
            </div>

            {/* Mapa */}
            <Reveal delay={0.2}>
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  minHeight: "350px",
                  overflow: "hidden",
                }}
              >
                <iframe
                  title="Posizione Ristorante Màmà — Andria"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.123456!2d16.295!3d41.227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zQ29yc28gQ2F2b3VyIDI3LCBBbmRyaWE!5e0!3m2!1sit!2sit!4v1234567890"
                  style={{
                    width: "100%",
                    height: "100%",
                    minHeight: "350px",
                    border: "none",
                    filter: "grayscale(0.85) contrast(1.1) brightness(0.7)",
                  }}
                  loading="lazy"
                  allowFullScreen
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    border: "1px solid rgba(201,169,110,0.12)",
                    pointerEvents: "none",
                  }}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =====================================================
       * FOOTER — Minimal, elegante
       * ===================================================== */}
      <footer
        style={{
          padding: "4rem 0 2rem",
          background: "var(--mama-black)",
          borderTop: "1px solid rgba(201,169,110,0.08)",
        }}
      >
        <div className="mama-container">
          {/* Logo + Assinatura */}
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <img
              src={IMG.logo}
              alt="Firma Màmà Restaurant"
              style={{
                height: "48px",
                width: "auto",
                opacity: 0.6,
                filter: "brightness(1.5)",
                marginBottom: "1rem",
              }}
              loading="lazy"
            />
            <p
              style={{
                fontFamily: "var(--mama-font-serif)",
                fontSize: "0.85rem",
                fontWeight: 300,
                letterSpacing: "0.15em",
                color: "rgba(245,240,232,0.35)",
              }}
            >
              La Stazione del Gusto — Andria
            </p>
          </div>

          {/* Links sociais + legais */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "2rem",
              marginBottom: "2rem",
              flexWrap: "wrap",
            }}
          >
            {["Instagram", "Facebook", "TripAdvisor"].map((social) => (
              <a
                key={social}
                href="#"
                style={{
                  fontFamily: "var(--mama-font-body)",
                  fontSize: "0.7rem",
                  fontWeight: 400,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "rgba(245,240,232,0.35)",
                  textDecoration: "none",
                  transition: "color 0.3s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--mama-gold)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,240,232,0.35)")}
              >
                {social}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p
            style={{
              textAlign: "center",
              fontFamily: "var(--mama-font-body)",
              fontSize: "0.6rem",
              fontWeight: 300,
              letterSpacing: "0.15em",
              color: "rgba(245,240,232,0.2)",
              textTransform: "uppercase",
            }}
          >
            © {new Date().getFullYear()} Màmà Restaurant — {t("footer.rights")}
          </p>

          {/* Badge redesign demo */}
          <div
            style={{
              textAlign: "center",
              marginTop: "2rem",
              padding: "1rem",
              borderTop: "1px solid rgba(201,169,110,0.06)",
            }}
          >
            <span
              style={{
                fontFamily: "var(--mama-font-body)",
                fontSize: "0.55rem",
                fontWeight: 300,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(245,240,232,0.15)",
              }}
            >
              Demo di Redesign — Proposta di Progettazione UI/UX
            </span>
          </div>
        </div>
      </footer>

      {/* =====================================================
       * RESPONSIVE — CSS media queries inline
       * ===================================================== */}
      <style>{`
        /* --- Navegação: mostra hamburger no mobile --- */
        @media (max-width: 768px) {
          .mama-nav-desktop {
            display: none !important;
          }
          .mama-nav-hamburger {
            display: block !important;
          }
        }

        /* --- Grid editorial: story --- */
        @media (min-width: 900px) {
          .mama-story-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .mama-wine-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .mama-contact-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }

        /* --- Gallery responsiva --- */
        @media (max-width: 768px) {
          .mama-gallery-grid {
            grid-template-columns: 1fr 1fr !important;
            grid-auto-rows: 180px !important;
          }
          .mama-gallery-grid > div > div {
            grid-column: span 1 !important;
            grid-row: span 1 !important;
          }
        }

        /* --- Link hover global --- */
        .mama-theme a {
          transition: color 0.3s, opacity 0.3s;
        }
      `}</style>
    </div>
  );
}

"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "../LanguageContext";

/**
 * MAMA RESTAURANT — Cardápio Digital (Menù)
 * 
 * Este componente define a experiência do menu interativo.
 * Design: editorial, categorizado por seções, com imagens de destaque.
 * UX: Navegação por abas colapsáveis (Acordeão), escaneamento rápido e mobile-first.
 */

/* ---- Imagens dos pratos ---- */
const IMG = {
  risotto: "https://www.mamarestaurant.it/wp-content/uploads/2019/11/Riso-con-mandorle-e-scampi-Ristorante-Mama-Andria-1024x683.png",
  spaghetti: "https://www.mamarestaurant.it/wp-content/uploads/2019/11/Primo-Spaghetti-Ricci-Ristorante-Mama-Andria-300x200.png",
  noci: "https://www.mamarestaurant.it/wp-content/uploads/2019/11/Primo-Noci-e-Speck-Ristorante-Mama-Andria-300x200.png",
  seafood1: "https://www.mamarestaurant.it/wp-content/uploads/2019/11/Buon-Ristorante-Andria-Mama-Ottimi-ristoranti-carne-e-pesce-3-1024x683.png",
  seafood2: "https://www.mamarestaurant.it/wp-content/uploads/2019/11/Buon-Ristorante-Andria-Mama-Ottimi-ristoranti-carne-e-pesce-4-300x200.png",
  seafood3: "https://www.mamarestaurant.it/wp-content/uploads/2019/11/Buon-Ristorante-Andria-Mama-Ottimi-ristoranti-carne-e-pesce-7-300x200.png",
  dishes: "https://www.mamarestaurant.it/wp-content/uploads/2019/10/Primo-Mix-Carne-Pesce_ed-FILEminimizer.png",
  hero: "https://www.mamarestaurant.it/wp-content/uploads/2019/11/Mama-Ristorante-carne-e-pescer-Andria-Top-Location_1_rev-4-1024x683.jpg",
};

/**
 * Definições de Tipos e Dados do Cardápio
 */
interface MenuItem {
  nome: string;
  desc: string;
  prezzo: string;
  tag?: string;
  img?: string;
}

interface MenuCategory {
  id: string;
  titolo: string;
  sottotitolo: string;
  icona: string;
  piatti: MenuItem[];
}

const MENU_DATA: MenuCategory[] = [
  {
    id: "antipasti",
    titolo: "Antipasti",
    sottotitolo: "Per iniziare il viaggio",
    icona: "✦",
    piatti: [
      {
        nome: "Carpaccio di Mare",
        desc: "Gamberi rossi, ricciola e scampi crudi con agrumi e olio EVO pugliese",
        prezzo: "€18",
        tag: "Chef's Pick",
        img: IMG.seafood2,
      },
      {
        nome: "Burrata Pugliese",
        desc: "Burrata di Andria D.O.P. con pomodorini confit e pesto di basilico",
        prezzo: "€14",
      },
      {
        nome: "Tagliere di Salumi Locali",
        desc: "Selezione di salumi artigianali con focaccia calda e miele millefiori",
        prezzo: "€16",
      },
      {
        nome: "Polpo alla Griglia",
        desc: "Polpo verace alla brace su crema di patate violette e capperi di Pantelleria",
        prezzo: "€19",
        img: IMG.seafood3,
      },
      {
        nome: "Crocchè di Baccalà",
        desc: "Crocchette di baccalà mantecato con maionese allo zafferano e limone",
        prezzo: "€12",
      },
    ],
  },
  {
    id: "primi",
    titolo: "Primi Piatti",
    sottotitolo: "Pasta fresca e risotti",
    icona: "◆",
    piatti: [
      {
        nome: "Riso con Mandorle e Scampi",
        desc: "Risotto cremoso con mandorle tostate di Toritto e scampi dell'Adriatico",
        prezzo: "€22",
        tag: "Signature",
        img: IMG.risotto,
      },
      {
        nome: "Spaghetti ai Ricci di Mare",
        desc: "Spaghetti trafilati al bronzo con ricci di mare freschi e bottarga",
        prezzo: "€24",
        img: IMG.spaghetti,
      },
      {
        nome: "Orecchiette alle Cime di Rapa",
        desc: "Il classico pugliese con orecchiette fatte a mano e cime di rapa selvatiche",
        prezzo: "€14",
      },
      {
        nome: "Paccheri Noci e Speck",
        desc: "Paccheri con crema di noci, speck croccante e parmigiano reggiano 36 mesi",
        prezzo: "€16",
        img: IMG.noci,
      },
      {
        nome: "Trofie al Pesto di Pistacchi",
        desc: "Pasta fresca con pesto di pistacchi di Bronte, gamberi e pomodorini Pachino",
        prezzo: "€18",
      },
      {
        nome: "Ravioli di Cernia",
        desc: "Ravioli ripieni di cernia con bisque di crostacei e chips di zucchine",
        prezzo: "€20",
      },
    ],
  },
  {
    id: "secondi-mare",
    titolo: "Secondi di Mare",
    sottotitolo: "I tesori dell'Adriatico",
    icona: "≋",
    piatti: [
      {
        nome: "Grigliata Mista dell'Adriatico",
        desc: "Selezione di pesce fresco alla griglia: orata, spigola, gamberoni e calamari",
        prezzo: "€28",
        tag: "Per Due",
        img: IMG.seafood1,
      },
      {
        nome: "Filetto di Orata in Crosta",
        desc: "Orata in crosta di erbe aromatiche con verdure di stagione e olive taggiasche",
        prezzo: "€24",
      },
      {
        nome: "Scampi alla Busara",
        desc: "Scampi in salsa mediterranea di pomodoro, aglio e prezzemolo fresco",
        prezzo: "€26",
      },
      {
        nome: "Tonno Scottato",
        desc: "Trancio di tonno rosso leggermente scottato con sesamo nero e salsa ponzu",
        prezzo: "€25",
      },
    ],
  },
  {
    id: "secondi-terra",
    titolo: "Secondi di Terra",
    sottotitolo: "Sapori autentici della nostra terra",
    icona: "❖",
    piatti: [
      {
        nome: "Filetto al Pepe Verde",
        desc: "Filetto di manzo argentino con salsa al pepe verde e purè di patate truffate",
        prezzo: "€28",
        img: IMG.dishes,
      },
      {
        nome: "Tagliata di Angus",
        desc: "Tagliata di Black Angus su rucola selvatica con scaglie di Grana e aceto balsamico",
        prezzo: "€26",
      },
      {
        nome: "Agnello al Forno",
        desc: "Costolette d'agnello al forno con patate al rosmarino e cipolla rossa di Acquaviva",
        prezzo: "€22",
      },
      {
        nome: "Bombette Pugliesi",
        desc: "Involtini di capocollo ripieni di caciocavallo e pancetta, alla brace",
        prezzo: "€18",
        tag: "Specialità",
      },
    ],
  },
  {
    id: "pizze",
    titolo: "Le Nostre Pizze",
    sottotitolo: "Impasto a lunga lievitazione",
    icona: "●",
    piatti: [
      {
        nome: "Margherita D.O.C.",
        desc: "Mozzarella di bufala campana D.O.P., pomodoro San Marzano e basilico fresco",
        prezzo: "€9",
      },
      {
        nome: "Pugliese",
        desc: "Burrata di Andria, pomodorini semi-dry, olive nere e origano selvatico",
        prezzo: "€12",
        tag: "Speciale",
      },
      {
        nome: "Tartufo e Funghi",
        desc: "Crema di tartufo nero, funghi porcini, mozzarella fior di latte e rucola",
        prezzo: "€14",
      },
      {
        nome: "Diavola",
        desc: "Salame piccante, mozzarella, pomodoro e peperoncino calabrese",
        prezzo: "€10",
      },
      {
        nome: "Quattro Formaggi",
        desc: "Mozzarella, gorgonzola, fontina e parmigiano con miele e noci",
        prezzo: "€12",
      },
    ],
  },
  {
    id: "dolci",
    titolo: "Dolci",
    sottotitolo: "Il finale perfetto",
    icona: "◇",
    piatti: [
      {
        nome: "Tiramisù della Casa",
        desc: "La nostra versione classica con mascarpone, caffè espresso e cacao amaro",
        prezzo: "€8",
        tag: "Classico",
      },
      {
        nome: "Panna Cotta ai Frutti di Bosco",
        desc: "Crema delicata alla vaniglia Bourbon con coulis di frutti di bosco freschi",
        prezzo: "€8",
      },
      {
        nome: "Pastiera Pugliese",
        desc: "Dolce tradizionale con ricotta, grano cotto e acqua di fiori d'arancio",
        prezzo: "€7",
      },
      {
        nome: "Sorbetto al Limone",
        desc: "Sorbetto artigianale al limone di Sorrento servito in scorza di limone",
        prezzo: "€6",
      },
    ],
  },
  {
    id: "vini",
    titolo: "Carta dei Vini",
    sottotitolo: "Selezione curata di etichette pugliesi e italiane",
    icona: "🍷",
    piatti: [
      {
        nome: "Primitivo di Manduria",
        desc: "Rosso corposo e vellutato, perfetto con carni e piatti strutturati",
        prezzo: "€28",
        tag: "Rosso",
      },
      {
        nome: "Nero di Troia Riserva",
        desc: "Rosso elegante con note di ciliegia e spezie, tipico della terra di Bari",
        prezzo: "€32",
        tag: "Rosso",
      },
      {
        nome: "Verdeca del Salento",
        desc: "Bianco fresco e minerale, ideale con pesce e crostacei",
        prezzo: "€22",
        tag: "Bianco",
      },
      {
        nome: "Negroamaro Rosato",
        desc: "Rosato vivace e profumato, il compagno ideale per antipasti e pizza",
        prezzo: "€20",
        tag: "Rosato",
      },
      {
        nome: "Prosecco Superiore DOCG",
        desc: "Bollicine eleganti dal Veneto per brindare e accompagnare l'aperitivo",
        prezzo: "€25",
        tag: "Bollicine",
      },
    ],
  },
];

/**
 * Lógica de Animação e Interação
 */

/**
 * Hook para detectar entrada no Viewport (Scroll Reveal)
 */
function useReveal(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, visible };
}

/**
 * Componente Wrapper para animações de revelação suave
 */
function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: `all 0.8s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

/* ---- Componente: Categoria colapsável do menu ---- */
function MenuSection({ category, defaultOpen }: { category: MenuCategory; defaultOpen: boolean }) {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      style={{
        borderBottom: "1px solid rgba(201,169,110,0.08)",
        marginBottom: "0.5rem",
      }}
    >
      {/* Cabeçalho colapsável */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1.8rem 0",
          background: "none",
          border: "none",
          cursor: "pointer",
          color: "var(--mama-cream)",
          transition: "all 0.3s",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <span
            style={{
              fontSize: "1.2rem",
              color: "var(--mama-gold)",
              opacity: 0.6,
              lineHeight: 1,
            }}
          >
            {category.icona}
          </span>
          <div style={{ textAlign: "left" }}>
            <h2
              style={{
                fontFamily: "var(--mama-font-display)",
                fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)",
                fontWeight: 400,
                color: "var(--mama-cream)",
                lineHeight: 1.2,
              }}
            >
              {t(`categories.${category.id}`)}
            </h2>
            <span
              style={{
                fontFamily: "var(--mama-font-serif)",
                fontSize: "0.8rem",
                fontWeight: 300,
                color: "var(--mama-text-muted)",
                letterSpacing: "0.1em",
              }}
            >
              {t(`categories.${category.id}Desc`)}
            </span>
          </div>
        </div>

        {/* Indicador abrir/fechar */}
        <span
          style={{
            fontFamily: "var(--mama-font-serif)",
            fontSize: "1.5rem",
            color: "var(--mama-gold)",
            transition: "transform 0.4s cubic-bezier(0.22,1,0.36,1)",
            transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
            opacity: 0.5,
            lineHeight: 1,
          }}
        >
          +
        </span>
      </button>

      {/* Conteúdo (pratos) — com animação suave */}
      <div
        style={{
          maxHeight: isOpen ? "4000px" : "0",
          overflow: "hidden",
          transition: "max-height 0.6s cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        <div
          style={{
            padding: "0 0 3rem",
            display: "flex",
            flexDirection: "column",
            gap: "0",
          }}
        >
          {category.piatti.map((piatto, i) => (
            <div
              key={piatto.nome}
              style={{
                display: "grid",
                gridTemplateColumns: piatto.img ? "1fr" : "1fr",
                gap: "1.5rem",
                padding: "1.5rem 0",
                borderTop: i === 0 ? "none" : "1px solid rgba(245,240,232,0.04)",
                transition: "background 0.3s",
              }}
              className="mama-menu-item"
            >
              {/* Se tem imagem, mostra como card editorial */}
              {piatto.img && (
                <div
                  style={{
                    overflow: "hidden",
                    position: "relative",
                    marginBottom: "0.5rem",
                  }}
                >
                  <img
                    src={piatto.img}
                    alt={piatto.nome}
                    style={{
                      width: "100%",
                      height: "auto",
                      maxHeight: "280px",
                      objectFit: "cover",
                      filter: "brightness(0.8) contrast(1.05)",
                      transition: "transform 0.6s cubic-bezier(0.22,1,0.36,1)",
                    }}
                    loading="lazy"
                    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                  />
                </div>
              )}

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  gap: "1rem",
                }}
              >
                <div style={{ flex: 1 }}>
                  {/* Nome + tag */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      marginBottom: "0.4rem",
                      flexWrap: "wrap",
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "var(--mama-font-display)",
                        fontSize: "1.15rem",
                        fontWeight: 400,
                        color: "var(--mama-cream)",
                        lineHeight: 1.3,
                      }}
                    >
                      {piatto.nome}
                    </h3>
                    {piatto.tag && (
                      <span
                        style={{
                          fontFamily: "var(--mama-font-body)",
                          fontSize: "0.55rem",
                          fontWeight: 500,
                          letterSpacing: "0.15em",
                          textTransform: "uppercase",
                          color: "var(--mama-black)",
                          background: "var(--mama-gold)",
                          padding: "0.2rem 0.6rem",
                          lineHeight: 1.4,
                        }}
                      >
                        {t(`common.tags.${piatto.tag.replace("'s ", "").replace(" ", "").toLowerCase()}`)}
                      </span>
                    )}
                  </div>

                  {/* Descrição */}
                  <p
                    style={{
                      fontFamily: "var(--mama-font-serif)",
                      fontSize: "0.9rem",
                      fontWeight: 300,
                      color: "rgba(245,240,232,0.45)",
                      lineHeight: 1.6,
                      maxWidth: "500px",
                    }}
                  >
                    {piatto.desc}
                  </p>
                </div>

                {/* Preço */}
                <span
                  style={{
                    fontFamily: "var(--mama-font-display)",
                    fontSize: "1.1rem",
                    fontWeight: 400,
                    color: "var(--mama-gold)",
                    whiteSpace: "nowrap",
                    flexShrink: 0,
                    minWidth: "50px",
                    textAlign: "right",
                  }}
                >
                  {piatto.prezzo}
                </span>
              </div>

              {/* Linha pontilhada decorativa entre nome e preço — visível no mobile */}
              <div
                style={{
                  flex: 1,
                  borderBottom: "1px dotted rgba(201,169,110,0.12)",
                  marginTop: "-1rem",
                  display: "none",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 * ================================================================
 * COMPONENTE PRINCIPAL — Página de Menu / Cardápio Digital
 * ================================================================
 */
export default function MamaMenuPage() {
  const { language, setLanguage, t } = useLanguage();
  const [activeSection, setActiveSection] = useState<string | null>(null);

  /* Detecção de scroll ativo para navegação do menu */
  useEffect(() => {
    const onScroll = () => {
      const sections = MENU_DATA.map((c) => document.getElementById(`menu-${c.id}`));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(MENU_DATA[i].id);
          break;
        }
      }
    };

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
       * HERO DO MENU — Mais compacto
       * ===================================================== */}
      <section
        style={{
          position: "relative",
          height: "50vh",
          minHeight: "350px",
          display: "flex",
          alignItems: "flex-end",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url('${IMG.hero}')`,
            backgroundSize: "cover",
            backgroundPosition: "center 60%",
            transform: "scale(1.05)",
            animation: "mama-scale-in 2s cubic-bezier(0.22,1,0.36,1) both",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, rgba(10,10,10,0.4) 0%, rgba(10,10,10,0.2) 30%, rgba(10,10,10,0.85) 80%, rgba(10,10,10,1) 100%)",
          }}
        />

        <div
          className="mama-container"
          style={{
            position: "relative",
            zIndex: 2,
            paddingBottom: "3rem",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "1.5rem",
            }}
            className="mama-animate-up"
          >
            {/* Voltar à homepage */}
            <Link
              href="/clientes/mama-demo"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                fontFamily: "var(--mama-font-body)",
                fontSize: "0.7rem",
                fontWeight: 400,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "rgba(245,240,232,0.5)",
                textDecoration: "none",
                transition: "color 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--mama-gold)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,240,232,0.5)")}
            >
              {t("menuPage.back")}
            </Link>

            {/* Language Toggle in Menu */}
            <div style={{ display: "flex", gap: "1rem" }}>
              <button
                onClick={() => setLanguage("it")}
                style={{
                  background: "transparent",
                  border: "none",
                  color: language === "it" ? "var(--mama-gold)" : "rgba(245,240,232,0.4)",
                  fontFamily: "var(--mama-font-body)",
                  fontSize: "0.75rem",
                  fontWeight: language === "it" ? 600 : 400,
                  cursor: "pointer",
                  padding: "0.5rem",
                  transition: "all 0.3s var(--mama-ease)",
                }}
              >
                IT
              </button>
              <button
                onClick={() => setLanguage("en")}
                style={{
                  background: "transparent",
                  border: "none",
                  color: language === "en" ? "var(--mama-gold)" : "rgba(245,240,232,0.4)",
                  fontFamily: "var(--mama-font-body)",
                  fontSize: "0.75rem",
                  fontWeight: language === "en" ? 600 : 400,
                  cursor: "pointer",
                  padding: "0.5rem",
                  transition: "all 0.3s var(--mama-ease)",
                }}
              >
                EN
              </button>
            </div>
          </div>

          <span
            className="mama-animate-up"
            style={{
              display: "block",
              fontFamily: "var(--mama-font-serif)",
              fontSize: "0.75rem",
              fontWeight: 300,
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              color: "var(--mama-gold)",
              marginBottom: "1rem",
              animationDelay: "0.4s",
            }}
          >
            {t("menuPage.badge")}
          </span>

          <h1
            className="mama-animate-up"
            style={{
              fontFamily: "var(--mama-font-display)",
              fontSize: "clamp(2.2rem, 5vw, 4rem)",
              fontWeight: 400,
              lineHeight: 1.05,
              color: "var(--mama-cream)",
              animationDelay: "0.6s",
            }}
          >
            {t("menuPage.title1")}{" "}
            <em style={{ fontStyle: "italic", color: "var(--mama-gold)" }}>
              {t("menuPage.titleCreative")}
            </em>
          </h1>
        </div>
      </section>

      {/* =====================================================
       * NAVEGAÇÃO STICKY — Categorias do menu
       * ===================================================== */}
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: "rgba(10,10,10,0.95)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(201,169,110,0.08)",
          padding: "0",
          overflowX: "auto",
          WebkitOverflowScrolling: "touch",
        }}
      >
        <div
          className="mama-container"
          style={{
            display: "flex",
            gap: "0",
            whiteSpace: "nowrap",
          }}
        >
          {MENU_DATA.map((cat) => (
            <a
              key={cat.id}
              href={`#menu-${cat.id}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(`menu-${cat.id}`)?.scrollIntoView({ behavior: "smooth" });
              }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                padding: "1rem 1.2rem",
                fontFamily: "var(--mama-font-body)",
                fontSize: "0.65rem",
                fontWeight: activeSection === cat.id ? 500 : 400,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: activeSection === cat.id ? "var(--mama-gold)" : "rgba(245,240,232,0.4)",
                textDecoration: "none",
                borderBottom: activeSection === cat.id ? "1px solid var(--mama-gold)" : "1px solid transparent",
                transition: "all 0.3s",
                flexShrink: 0,
              }}
              onMouseEnter={(e) => {
                if (activeSection !== cat.id) {
                  e.currentTarget.style.color = "rgba(245,240,232,0.7)";
                }
              }}
              onMouseLeave={(e) => {
                if (activeSection !== cat.id) {
                  e.currentTarget.style.color = "rgba(245,240,232,0.4)";
                }
              }}
            >
              <span style={{ fontSize: "0.7rem", opacity: 0.5 }}>{cat.icona}</span>
              {t(`categories.${cat.id}`)}
            </a>
          ))}
        </div>
      </nav>

      {/* =====================================================
       * CONTEÚDO DO MENU — Categorias colapsáveis
       * ===================================================== */}
      <main
        style={{
          padding: "3rem 0 6rem",
          background: "var(--mama-black)",
        }}
      >
        <div className="mama-container" style={{ maxWidth: "900px" }}>
          {/* Nota editorial */}
          <Reveal>
            <div
              style={{
                textAlign: "center",
                marginBottom: "4rem",
                padding: "2rem",
                borderLeft: "2px solid var(--mama-gold)",
                borderRight: "2px solid var(--mama-gold)",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--mama-font-serif)",
                  fontSize: "1rem",
                  fontWeight: 300,
                  fontStyle: "italic",
                  lineHeight: 1.7,
                  color: "rgba(245,240,232,0.5)",
                }}
              >
                {t("menuPage.quote")}
              </p>
              <span
                style={{
                  display: "block",
                  fontFamily: "var(--mama-font-body)",
                  fontSize: "0.65rem",
                  fontWeight: 500,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--mama-gold)",
                  marginTop: "1rem",
                }}
              >
                — {t("menuPage.chef")}
              </span>
            </div>
          </Reveal>

          {/* Seções do menu */}
          {MENU_DATA.map((cat, i) => (
            <div key={cat.id} id={`menu-${cat.id}`}>
              <Reveal delay={i * 0.05}>
                <MenuSection category={cat} defaultOpen={i < 2} />
              </Reveal>
            </div>
          ))}

          {/* Rodapé informativo */}
          <Reveal>
            <div
              style={{
                textAlign: "center",
                marginTop: "4rem",
                padding: "2.5rem",
                borderTop: "1px solid rgba(201,169,110,0.08)",
              }}
            >
              <span className="mama-gold-line mama-gold-line--center" style={{ marginBottom: "1.5rem" }} />

              <p
                style={{
                  fontFamily: "var(--mama-font-serif)",
                  fontSize: "0.85rem",
                  fontWeight: 300,
                  color: "rgba(245,240,232,0.35)",
                  lineHeight: 1.8,
                  maxWidth: "450px",
                  margin: "0 auto 1.5rem",
                }}
              >
                {t("common.dishNotes")}
              </p>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "1.5rem",
                  flexWrap: "wrap",
                }}
              >
                <Link
                  href="/clientes/mama-demo"
                  style={{
                    fontFamily: "var(--mama-font-body)",
                    fontSize: "0.7rem",
                    fontWeight: 500,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "rgba(245,240,232,0.4)",
                    textDecoration: "none",
                    padding: "0.75rem 1.5rem",
                    border: "1px solid rgba(245,240,232,0.1)",
                    transition: "all 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--mama-gold)";
                    e.currentTarget.style.color = "var(--mama-gold)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(245,240,232,0.1)";
                    e.currentTarget.style.color = "rgba(245,240,232,0.4)";
                  }}
                >
                    {t("menuPage.back").replace("← ", "")}
                  </Link>

                <a
                  href="tel:+390883885034"
                  style={{
                    fontFamily: "var(--mama-font-body)",
                    fontSize: "0.7rem",
                    fontWeight: 500,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "var(--mama-black)",
                    background: "var(--mama-gold)",
                    textDecoration: "none",
                    padding: "0.75rem 1.5rem",
                    transition: "all 0.3s",
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
                  {t("common.bookNow")}
                </a>
              </div>
            </div>
          </Reveal>

          {/* Badge demo */}
          <div
            style={{
              textAlign: "center",
              marginTop: "3rem",
            }}
          >
            <span
              style={{
                fontFamily: "var(--mama-font-body)",
                fontSize: "0.55rem",
                fontWeight: 300,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(245,240,232,0.12)",
              }}
            >
              {t("footer.redesign")}
            </span>
          </div>
        </div>
      </main>

      {/* =====================================================
       * ESTILO RESPONSIVO — Menu items no mobile
       * ===================================================== */}
      <style>{`
        /* --- Scrollbar da nav horizontal --- */
        nav::-webkit-scrollbar {
          height: 2px;
        }
        nav::-webkit-scrollbar-track {
          background: transparent;
        }
        nav::-webkit-scrollbar-thumb {
          background: var(--mama-gold);
          border-radius: 1px;
        }

        /* --- Hover sutil nos itens do menu --- */
        .mama-menu-item:hover {
          background: rgba(201,169,110,0.03);
        }

        /* --- Ajuste mobile na galeria de imagens --- */
        @media (max-width: 640px) {
          .mama-menu-item img {
            max-height: 200px !important;
          }
        }
      `}</style>
    </div>
  );
}

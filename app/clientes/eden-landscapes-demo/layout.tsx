import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import Link from "next/link";
import React from "react";

// Premium font configuration
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Eden Landscapes | Premium Garden Landscaping in Whitley Bay",
  description: "Specialists in garden design, fencing, turfing, and custom structures since 2007. Transforming outdoor spaces into natural retreats.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

/**
 * Main Layout for Eden Landscapes Demo.
 * Implements fixed navigation with glassmorphism and informative footer.
 * Localized in English for the UK market.
 */
export default function EdenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${inter.variable} ${cormorant.variable} font-sans bg-[#FBFBF9] text-[#1A1A1A] min-h-screen selection:bg-[#183102]/20`}>
      {/* Header / Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#183102]/10">
        <nav className="container mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/clientes/eden-landscapes-demo" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-[#183102] rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
              <span className="text-white font-serif text-xl">E</span>
            </div>
            <span className="font-serif text-xl font-bold tracking-tight text-[#183102]">Eden Landscapes</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <NavLink href="/clientes/eden-landscapes-demo">Home</NavLink>
            <NavLink href="/clientes/eden-landscapes-demo/servicos">Services</NavLink>
            <NavLink href="/clientes/eden-landscapes-demo/design">Design</NavLink>
            <NavLink href="/clientes/eden-landscapes-demo/galeria">Gallery</NavLink>
            <NavLink href="/clientes/eden-landscapes-demo/depoimentos">Testimonials</NavLink>
            <Link 
              href="/clientes/eden-landscapes-demo/contato"
              className="bg-[#183102] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#2a4d04] transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button - (Simplified for demo) */}
          <button className="md:hidden text-[#183102] p-2" aria-label="Open menu">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
          </button>
        </nav>
      </header>

      <main className="pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#183102] text-white py-20 mt-20">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-serif text-2xl font-bold mb-6 text-white">Eden Landscapes</h3>
            <p className="text-white/70 max-w-md leading-relaxed">
              Crafting exceptional gardens in Whitley Bay and surrounding areas since 2007. Our commitment is to quality craftsmanship and respect for natural materials.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-6 uppercase tracking-wider text-sm text-white/50">Quick Links</h4>
            <ul className="space-y-4">
              <li><FooterLink href="/clientes/eden-landscapes-demo/servicos">Our Services</FooterLink></li>
              <li><FooterLink href="/clientes/eden-landscapes-demo/galeria">Project Gallery</FooterLink></li>
              <li><FooterLink href="/clientes/eden-landscapes-demo/design">Design Consultancy</FooterLink></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-6 uppercase tracking-wider text-sm text-white/50">Contact</h4>
            <address className="not-italic text-white/70 space-y-4">
              <p>Whitley Bay, Newcastle</p>
              <p>T: 0191 251 2057</p>
              <p>E: hello@edenlandscapes.uk.net</p>
            </address>
          </div>
        </div>
        <div className="container mx-auto px-6 mt-20 pt-8 border-t border-white/10 text-center text-white/30 text-sm">
          <p>&copy; {new Date().getFullYear()} Eden Landscapes. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link 
      href={href} 
      className="text-sm font-medium text-[#1A1A1A]/70 hover:text-[#183102] transition-colors relative group py-2"
    >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#183102] transition-all group-hover:w-full"></span>
    </Link>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-white/70 hover:text-white transition-colors">
      {children}
    </Link>
  );
}

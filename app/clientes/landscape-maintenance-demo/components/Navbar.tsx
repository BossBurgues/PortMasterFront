"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { RiMenuLine } from "@remixicon/react";

/**
 * Componente de Navegação para a demo Landscape Maintenance UK.
 * Traduzido para Português e usando Remix Icons.
 */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/clientes/landscape-maintenance-demo" },
    { name: "About Us", href: "/clientes/landscape-maintenance-demo/about" },
    { name: "Services", href: "/clientes/landscape-maintenance-demo/services" },
    { name: "Testimonials", href: "/clientes/landscape-maintenance-demo/testimonials" },
    { name: "Contact", href: "/clientes/landscape-maintenance-demo/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-lm-fundo">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/clientes/landscape-maintenance-demo" className="flex items-center space-x-2 shrink-0">
            <span className="text-2xl font-black text-lm-secundaria tracking-tighter">
              LANDSCAPE<span className="text-lm-primaria">MAINTENANCE</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-4 py-2 text-sm font-bold transition-all duration-300 rounded-full ${
                  pathname === link.href
                    ? "bg-lm-primaria text-white shadow-lg"
                    : "text-lm-secundaria hover:bg-lm-fundo hover:text-lm-primaria"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="ml-4 pl-4 border-l border-gray-200">
              <Button asChild className="bg-lm-primaria hover:bg-lm-primaria/90 text-white font-bold rounded-full px-6">
                <Link href="/clientes/landscape-maintenance-demo/contact">Get Quote</Link>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-lm-primaria">
                  <RiMenuLine className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-white">
                <div className="flex flex-col space-y-6 mt-12">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-xl font-bold transition-colors ${
                        pathname === link.href ? "text-lm-primaria" : "text-lm-secundaria"
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                  <Button asChild className="bg-lm-primaria text-white font-bold rounded-full w-full h-12 text-lg">
                    <Link href="/clientes/landscape-maintenance-demo/contact" onClick={() => setIsOpen(false)}>
                      Request Quote
                    </Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}

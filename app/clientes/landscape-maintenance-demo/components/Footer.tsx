"use client";

import Link from "next/link";
import { RiMailLine, RiMapPinLine, RiPhoneLine } from "@remixicon/react";

/**
 * Information footer for the Landscape Maintenance UK demo.
 * Translated to English as requested.
 * Using Remix Icons.
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-lm-secundaria text-white py-14">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-lm-primaria">
              Landscape<span className="text-white">Maintenance</span>
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Specialists in commercial and residential grounds maintenance in Northamptonshire and surrounding areas. Part of the Verteu Group.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="flex flex-col space-y-3">
              <Link href="/clientes/landscape-maintenance-demo" className="text-sm text-gray-400 hover:text-white hover:pl-2 transition-all duration-300">Home</Link>
              <Link href="/clientes/landscape-maintenance-demo/about" className="text-sm text-gray-400 hover:text-white hover:pl-2 transition-all duration-300">About Us</Link>
              <Link href="/clientes/landscape-maintenance-demo/services" className="text-sm text-gray-400 hover:text-white hover:pl-2 transition-all duration-300">Our Services</Link>
              <Link href="/clientes/landscape-maintenance-demo/testimonials" className="text-sm text-gray-400 hover:text-white hover:pl-2 transition-all duration-300">Testimonials</Link>
              <Link href="/clientes/landscape-maintenance-demo/contact" className="text-sm text-gray-400 hover:text-white hover:pl-2 transition-all duration-300">Contact</Link>
            </div>
          </div>

          {/* Services Summary */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Services</h4>
            <div className="flex flex-col space-y-3">
              <p className="text-sm text-gray-400">Commercial Maintenance</p>
              <p className="text-sm text-gray-400">Residential Maintenance</p>
              <p className="text-sm text-gray-400">Lawn Care & Treatments</p>
              <p className="text-sm text-gray-400">Fencing & Hardscaping</p>
              <p className="text-sm text-gray-400">Winter Maintenance</p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 text-sm text-gray-400">
                <RiMapPinLine className="h-5 w-5 text-lm-primaria shrink-0" />
                <span>Unit 37, Finedon Road, Irthlingborough, Northamptonshire, NN9 5TY</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-400">
                <RiPhoneLine className="h-5 w-5 text-lm-primaria shrink-0" />
                <span>07887 555080</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-400">
                <RiMailLine className="h-5 w-5 text-lm-primaria shrink-0" />
                <span>enquiries@LandscapeMaintenanceUK.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
          <p>© {currentYear} Landscape Maintenance UK. All rights reserved. Professional demo by Gustavo Miguel Nicolodi.</p>
        </div>
      </div>
    </footer>
  );
}

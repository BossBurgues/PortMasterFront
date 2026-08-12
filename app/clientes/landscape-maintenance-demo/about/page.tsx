import Image from "next/image";
import { RiCheckLine, RiHistoryLine, RiFlagLine, RiBarChartLine } from "@remixicon/react";

/**
 * About Us Page of the Landscape Maintenance UK Demo.
 * Fully in English.
 */
export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Header Section */}
      <section className="bg-lm-secundaria text-white py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 animate-in fade-in slide-in-from-top-12 duration-1000">Discover Our Story</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed italic">
            Passion for green spaces, commitment to excellence, and family tradition.
          </p>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="bg-lm-primaria w-96 h-96 rounded-full -ml-32 -mt-32 blur-3xl animate-pulse" />
        </div>
      </section>

      {/* Intro Section with Image */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl skew-y-1">
              <Image 
                src="https://images.unsplash.com/photo-1592419044706-39796d40f98c?auto=format&fit=crop&q=80&w=2070"
                alt="Team working"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-lm-secundaria border-l-4 border-lm-primaria pl-6">Who We Are</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                <strong>Landscape Maintenance UK</strong> is a family-run business based in Irthlingborough, Northamptonshire. As part of the prestigious Verteu Group, we bring years of experience and dedication to the commercial and residential grounds maintenance sector.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                We operate across the East and West Midlands, serving a diverse client base ranging from residential homeowners to large industrial complexes and government bodies.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="flex items-center space-x-3 text-lm-secundaria font-semibold">
                  <RiCheckLine className="text-lm-primaria h-5 w-5" />
                  <span>Family Business</span>
                </div>
                <div className="flex items-center space-x-3 text-lm-secundaria font-semibold">
                  <RiCheckLine className="text-lm-primaria h-5 w-5" />
                  <span>Specialist Workforce</span>
                </div>
                <div className="flex items-center space-x-3 text-lm-secundaria font-semibold">
                  <RiCheckLine className="text-lm-primaria h-5 w-5" />
                  <span>Regional Coverage</span>
                </div>
                <div className="flex items-center space-x-3 text-lm-secundaria font-semibold">
                  <RiCheckLine className="text-lm-primaria h-5 w-5" />
                  <span>Sustainability Focus</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-lm-fundo">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-lm-secundaria mb-4">Our Philosophy</h2>
            <p className="text-gray-600 italic">&quot;Delivering results that exceed expectations in every blade of grass.&quot;</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-10 rounded-3xl shadow-xl hover:-translate-y-2 transition-transform duration-300 border-b-4 border-lm-primaria">
              <RiHistoryLine className="h-12 w-12 text-lm-primaria mb-6" />
              <h3 className="text-xl font-bold text-lm-secundaria mb-4">Tradition</h3>
              <p className="text-gray-500 leading-relaxed text-sm">We keep our family values alive, treating every client like a neighbor.</p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-xl hover:-translate-y-2 transition-transform duration-300 border-b-4 border-lm-primaria">
              <RiFlagLine className="h-12 w-12 text-lm-primaria mb-6" />
              <h3 className="text-xl font-bold text-lm-secundaria mb-4">Mission</h3>
              <p className="text-gray-500 leading-relaxed text-sm">Providing the best grounds maintenance in Northamptonshire, focused on quality and responsiveness.</p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-xl hover:-translate-y-2 transition-transform duration-300 border-b-4 border-lm-primaria">
              <RiBarChartLine className="h-12 w-12 text-lm-primaria mb-6" />
              <h3 className="text-xl font-bold text-lm-secundaria mb-4">Innovation</h3>
              <p className="text-gray-500 leading-relaxed text-sm">We use the best equipment and modern techniques to care for the environment consciously.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

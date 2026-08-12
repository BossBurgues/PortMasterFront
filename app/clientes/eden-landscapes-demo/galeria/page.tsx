import Image from "next/image";
import React from "react";

/**
 * Eden Landscapes Project Gallery Page
 * Showcasing our portfolio with a modern, responsive staggered grid.
 * Content in English for the UK market.
 */
export default function Galeria87() {
  const images = [
    { src: "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&q=80&w=1000", alt: "Modern Garden Architecture" },
    { src: "https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&q=80&w=1000", alt: "Premium Fence Installation" },
    { src: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&q=80&w=1000", alt: "Luxury Garden Shelter" },
    { src: "https://images.unsplash.com/photo-1589923188900-85dae4753549?auto=format&fit=crop&q=80&w=1000", alt: "Artisanal Stone Work" },
    { src: "https://images.unsplash.com/photo-1599110906805-a8669e39ce59?auto=format&fit=crop&q=80&w=1000", alt: "Contemporary Patio Design" },
    { src: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=1000", alt: "Lush Botanical Planting" },
    { src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1000", alt: "Modern Garden Lighting" },
    { src: "https://images.unsplash.com/photo-1595181163481-99577c3a078d?auto=format&fit=crop&q=80&w=1000", alt: "Decorative Paving Detail" },
    { src: "https://images.unsplash.com/photo-1596436889106-be35e843f974?auto=format&fit=crop&q=80&w=1000", alt: "Sleek Backyard Oasis" },
    { src: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&q=80&w=1000", alt: "Seasonal Flower Borders" },
    { src: "https://images.unsplash.com/photo-1590059533221-3965d13ba977?auto=format&fit=crop&q=80&w=1000", alt: "Timber Decking and Integration" },
    { src: "https://images.unsplash.com/photo-1621886292650-520f76c747d6?auto=format&fit=crop&q=80&w=1000", alt: "Formal Garden Layout" },
  ];

  return (
    <div className="flex flex-col pb-20">
      {/* Page Header */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6 text-center">
          <span className="text-[#183102]/40 uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Portfolio</span>
          <h1 className="font-serif text-5xl md:text-7xl mb-8 text-[#183102]">Project Gallery</h1>
          <p className="text-[#4A4A4A] text-lg max-w-2xl mx-auto leading-relaxed">
            A curated selection of our finest work in Whitley Bay and across the region, demonstrating our range of techniques and materials.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="container mx-auto px-6">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
          {images.map((img, index) => (
            <div 
              key={index} 
              className="relative group overflow-hidden rounded-3xl bg-[#183102]/5 break-inside-avoid shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <Image 
                src={img.src} 
                alt={img.alt} 
                width={800}
                height={600}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#183102]/80 via-[#183102]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                 <span className="text-white/60 text-xs uppercase tracking-widest mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">Eden Projects</span>
                 <p className="text-white font-serif text-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy Callout */}
      <section className="container mx-auto px-6 mt-32 text-center">
        <div className="max-w-3xl mx-auto bg-[#183102] text-white p-12 md:p-20 rounded-[3rem] relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full flex items-center justify-center text-[#183102] shadow-xl">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl mb-6">Each project is unique</h2>
          <p className="text-white/70 leading-relaxed italic">
            &quot;We take pride in identifying the character of every site we work on, ensuring that our designs complement the natural environment while fulfilling the client&apos;s specific needs.&quot;
          </p>
        </div>
      </section>
    </div>
  );
}

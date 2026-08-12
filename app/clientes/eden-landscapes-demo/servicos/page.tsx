import Image from "next/image";
import React from "react";

/**
 * Eden Landscapes Services Page
 * Detailed presentation of landscaping and construction specialties.
 * Content in English for the UK market.
 */
export default function Servicos87() {
  return (
    <div className="flex flex-col gap-24 pb-20">
      {/* Page Header */}
      <section className="bg-[#183102] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-x-0 bottom-0 h-48 bg-linear-to-t from-[#FBFBF9] to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <span className="text-white/50 uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Our Expertise</span>
          <h1 className="font-serif text-5xl md:text-7xl mb-8">Our Services</h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
            From structural fencing to the most refined botanical design, we offer complete solutions to create and maintain your ideal garden.
          </p>
        </div>
      </section>

      {/* Services Details */}
      <div className="container mx-auto px-6 space-y-32">
        {/* Fencing & Turfing */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
            <Image 
              src="https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&q=80&w=1000" 
              alt="High Quality Fencing and Turfing" 
              fill 
              className="object-cover"
            />
          </div>
          <div className="space-y-8">
            <div className="w-12 h-1 bg-[#183102]/20"></div>
            <h2 className="font-serif text-4xl text-[#183102]">Fencing and Turfing</h2>
            <div className="space-y-6 text-[#4A4A4A] text-lg leading-relaxed">
              <p>
                We offer a wide range of fencing and gate systems, catering to all privacy and aesthetic needs. Our materials are selected for their durability and natural beauty.
              </p>
              <p>
                For turfing, we exclusively use **Roland Medallion Turfing**, the gold standard in cultivated turf in the UK. Our soil preparation process ensures a lush and healthy lawn from day one.
              </p>
            </div>
            <ul className="grid grid-cols-2 gap-4 text-sm font-medium text-[#183102]">
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#183102]"></div> Panel Fencing</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#183102]"></div> Wood Decking</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#183102]"></div> Soil Preparation</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#183102]"></div> Lawn Maintenance</li>
            </ul>
          </div>
        </section>

        {/* Planting Schemes */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 space-y-8">
            <div className="w-12 h-1 bg-[#183102]/20"></div>
            <h2 className="font-serif text-4xl text-[#183102]">Planting Schemes</h2>
            <div className="space-y-6 text-[#4A4A4A] text-lg leading-relaxed">
              <p>
                Our passion for nature is reflected in our planting schemes. We create compositions that evolve through the seasons, bringing life and color to your garden throughout the year.
              </p>
              <p>
                We work closely with our clients to select species that adapt to the local climate and each family&apos;s lifestyle, prioritizing biodiversity.
              </p>
            </div>
            <div className="p-6 bg-[#183102]/5 rounded-2xl border-l-4 border-[#183102]">
              <p className="italic text-[#183102]/80">&quot;A garden is never static; it is a living work of art that breathes with us.&quot;</p>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
            <Image 
              src="https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&q=80&w=1000" 
              alt="Botanical Design and Planting" 
              fill 
              className="object-cover"
            />
          </div>
        </section>

        {/* Garden Structures */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
            <Image 
              src="https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&q=80&w=1000" 
              alt="Garden Wood Structures" 
              fill 
              className="object-cover"
            />
          </div>
          <div className="space-y-8">
            <div className="w-12 h-1 bg-[#183102]/20"></div>
            <h2 className="font-serif text-4xl text-[#183102]">Garden Structures</h2>
            <div className="space-y-6 text-[#4A4A4A] text-lg leading-relaxed">
              <p>
                Beyond soft landscaping, we are specialists in custom timber structures. From functional sheds to luxury gazebos and elegant greenhouses.
              </p>
              <p>
                Each structure is built to integrate perfectly with the garden design, using traditional joinery techniques combined with modern and sustainable materials.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FeatureItem title="Gazebos & Pergolas" />
              <FeatureItem title="Greenhouses" />
              <FeatureItem title="Custom Sheds" />
              <FeatureItem title="Playhouses" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function FeatureItem({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-[#183102]/5 group hover:border-[#183102]/20 transition-colors">
      <div className="w-8 h-8 rounded-full bg-[#183102]/5 flex items-center justify-center text-[#183102] transition-colors group-hover:bg-[#183102] group-hover:text-white">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
      </div>
      <span className="text-sm font-semibold text-[#4A4A4A]">{title}</span>
    </div>
  );
}

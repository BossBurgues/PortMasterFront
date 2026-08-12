import Image from "next/image";
import Link from "next/link";
import React from "react";

/**
 * Eden Landscapes Garden Design Page
 * Focused on personalized consultancy and the creative process.
 * Content in English for the UK market.
 */
export default function GardenDesign87() {
  return (
    <div className="flex flex-col gap-24 pb-20">
      {/* Hero Design */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image 
          src="https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&q=80&w=1500" 
          alt="Landscaping Project Sketch" 
          fill 
          className="object-cover grayscale"
          priority
        />
        <div className="absolute inset-0 bg-[#183102]/85 backdrop-blur-sm"></div>
        <div className="container mx-auto px-6 relative z-10 text-center text-white">
          <span className="text-white/40 uppercase tracking-[0.4em] text-xs font-bold mb-6 block">Outdoor Architecture</span>
          <h1 className="font-serif text-5xl md:text-7xl mb-6">Garden Design</h1>
          <p className="text-white/60 text-lg max-w-xl mx-auto italic font-serif">
            &quot;Transforming visions into natural realities through meticulous planning.&quot;
          </p>
        </div>
      </section>

      {/* Our Approach */}
      <section className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-16 text-center">
          <div className="space-y-6">
            <h2 className="font-serif text-4xl text-[#183102]">Personalized Consultancy</h2>
            <p className="text-[#4A4A4A] text-lg leading-relaxed">
              Garden design at Eden Landscapes starts with you. We offer a free initial consultation to understand your desires, needs, and the potential of your space.
            </p>
            <p className="text-[#4A4A4A] text-lg leading-relaxed">
              From no-obligation quotes to complete design plans, our approach is transparent and collaborative. We don&apos;t just plant flowers; we design experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-8">
            <ProcessStep 
              number="01" 
              title="Listening" 
              description="Technical visit and requirement gathering with the client." 
            />
            <ProcessStep 
              number="02" 
              title="Creative" 
              description="Development of concepts and preliminary schemes." 
            />
            <ProcessStep 
              number="03" 
              title="Execution" 
              description="Detailed construction according to the highest standards." 
            />
          </div>
        </div>
      </section>

      {/* Quality and Guarantee */}
      <section className="bg-white py-24 mb-12">
        <div className="container mx-auto px-6">
          <div className="bg-[#183102]/5 rounded-[3rem] p-12 md:p-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="font-serif text-4xl text-[#183102]">Commitment to Quality</h2>
              <p className="text-[#4A4A4A] text-lg leading-relaxed">
                Every design project is a promise of durability. From the structural foundation to the last plant placed, our team follows rigorous protocols to ensure your garden thrives.
              </p>
              <div className="space-y-4">
                <p className="flex items-center gap-3 font-semibold text-[#183102]/80">
                  <span className="w-6 h-6 flex items-center justify-center bg-[#183102] text-white rounded-full text-xs">✓</span>
                  Free, no-obligation quotes
                </p>
                <p className="flex items-center gap-3 font-semibold text-[#183102]/80">
                  <span className="w-6 h-6 flex items-center justify-center bg-[#183102] text-white rounded-full text-xs">✓</span>
                  Full guarantee on all services rendered
              </p>
              </div>
              <Link 
                href="/clientes/eden-landscapes-demo/contato"
                className="inline-block bg-[#183102] text-white px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform shadow-lg"
              >
                Book Free Consultation
              </Link>
            </div>
            <div className="relative aspect-video lg:aspect-square rounded-3xl overflow-hidden shadow-2xl skew-y-2">
              <Image 
                src="https://images.unsplash.com/photo-1599110906805-a8669e39ce59?auto=format&fit=crop&q=80&w=1500" 
                alt="Planned Garden Result" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ProcessStep({ number, title, description }: { number: string, title: string, description: string }) {
  return (
    <div className="flex flex-col items-center text-center space-y-4 group">
      <div className="text-4xl font-serif font-black text-[#183102]/10 group-hover:text-[#183102]/20 transition-colors duration-500">{number}</div>
      <h3 className="font-serif text-2xl text-[#183102]">{title}</h3>
      <p className="text-[#666] text-sm leading-relaxed">{description}</p>
    </div>
  );
}

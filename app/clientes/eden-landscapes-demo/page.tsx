import Image from "next/image";
import Link from "next/link";
import React from "react";

/**
 * Eden Landscapes Home Page
 * Modernized with biophilic design aesthetics and refined typography.
 * Content in English for the UK market.
 */
export default function EdenHome87() {
  return (
    <div className="flex flex-col gap-24 pb-20 overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center bg-[#183102]">
        <div className="absolute inset-0 opacity-40">
          <Image
            src="https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&q=80&w=2000"
            alt="Premium Landscaped Garden by Eden Landscapes"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-b from-[#183102]/60 to-[#183102]"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-white/80 text-xs font-semibold uppercase tracking-widest mb-6 backdrop-blur-sm">
            Established in 2007
          </span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-8 leading-[1.1] selection:bg-white selection:text-[#183102]">
            Sculpting Urban <br /> <span className="italic">Nature</span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            Transforming outdoor spaces into artistic retreats using natural materials and sustainable design in Whitley Bay.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/clientes/eden-landscapes-demo/contato"
              className="bg-white text-[#183102] px-8 py-4 rounded-full font-bold hover:bg-[#F0F0EE] transition-all transform hover:-translate-y-1 shadow-lg"
            >
              Get a Free Quote
            </Link>
            <Link 
              href="/clientes/eden-landscapes-demo/galeria"
              className="bg-transparent border border-white/30 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction & Philosophy */}
      <section className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="order-2 lg:order-1">
          <div className="relative aspect-square md:aspect-video rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1589923188900-85dae4753549?auto=format&fit=crop&q=80&w=1500"
              alt="Artisanal landscaping detail"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="order-1 lg:order-2 space-y-8">
          <h2 className="font-serif text-4xl md:text-5xl text-[#183102] leading-tight">
            Specialists in Garden Design and Landscaping
          </h2>
          <div className="space-y-6 text-[#4A4A4A] leading-relaxed text-lg">
            <p>
              Eden Landscapes is a quality garden landscaping service based in Whitley Bay. Established in 2007, we have built a reputation for excellence and meticulous attention to detail.
            </p>
            <p>
              Our passion lies in the use and recycling of natural materials, creating spaces that age with grace and harmony. All of our work is guaranteed, providing complete peace of mind from concept to completion.
            </p>
          </div>
          <div className="pt-4 flex items-center gap-6">
            <div className="flex flex-col">
              <span className="text-3xl font-serif font-bold text-[#183102]">15+</span>
              <span className="text-xs uppercase tracking-widest text-[#9A9A9A]">Years Experience</span>
            </div>
            <div className="w-px h-12 bg-[#183102]/10"></div>
            <div className="flex flex-col">
              <span className="text-3xl font-serif font-bold text-[#183102]">100%</span>
              <span className="text-xs uppercase tracking-widest text-[#9A9A9A]">Quality Guaranteed</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="bg-[#183102]/5 py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="text-[#183102]/60 uppercase tracking-[0.2em] text-xs font-bold mb-4 block">Our Expertise</span>
              <h2 className="font-serif text-4xl md:text-5xl text-[#183102]">Professional Services</h2>
            </div>
            <Link href="/clientes/eden-landscapes-demo/servicos" className="text-[#183102] font-bold border-b-2 border-[#183102]/20 hover:border-[#183102] transition-colors pb-1">
              Explore All Services
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard 
              image="https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&q=80&w=800"
              title="Fencing & Decking"
              description="Durable fencing systems and natural wood decking designed to stand the test of time."
            />
            <ServiceCard 
              image="https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&q=80&w=800"
              title="Garden Design"
              description="Full consultancy and detailed plans for your ideal outdoor living space."
            />
            <ServiceCard 
              image="https://images.unsplash.com/photo-1599110906805-a8669e39ce59?auto=format&fit=crop&q=80&w=800"
              title="Project Gallery"
              description="Get inspired by our collection of completed works across the region."
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-6">
        <div className="bg-[#183102] rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/leaf.png')]"></div>
          <h2 className="font-serif text-4xl md:text-6xl mb-8 relative z-10 text-white">Ready to transform your garden?</h2>
          <p className="text-white/70 text-lg mb-12 max-w-2xl mx-auto relative z-10">
            We offer free, no-obligation quotes. Let&apos;s talk about your next landscaping project.
          </p>
          <Link 
            href="/clientes/eden-landscapes-demo/contato"
            className="inline-block bg-white text-[#183102] px-12 py-5 rounded-full font-bold hover:scale-105 transition-transform relative z-10 shadow-2xl"
          >
            Contact Us Now
          </Link>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ image, title, description }: { image: string, title: string, description: string }) {
  return (
    <div className="group bg-white p-2 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500 border border-[#183102]/5">
      <div className="relative aspect-4/3 rounded-4xl overflow-hidden mb-8">
        <Image 
          src={image} 
          alt={title} 
          fill 
          className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
      </div>
      <div className="px-6 pb-8">
        <h3 className="font-serif text-2xl mb-4 text-[#183102]">{title}</h3>
        <p className="text-[#666] leading-relaxed mb-6">{description}</p>
        <div className="w-10 h-10 rounded-full bg-[#183102]/5 flex items-center justify-center group-hover:bg-[#183102] group-hover:text-white transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" x2="19" y1="12" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </div>
      </div>
    </div>
  );
}

import React from "react";

/**
 * Eden Landscapes Testimonials Page
 * Modern and clean review cards with Whitley Bay local references.
 * Content in English for the UK market.
 */
export default function Depoimentos87() {
  const testimonials = [
    {
      name: "Sarah Thompson",
      location: "Whitley Bay",
      quote: "Eden Landscapes transformed our overgrown garden into a beautiful, functional space. The craftsmanship on the fencing is exceptional.",
      stars: 5,
    },
    {
      name: "Mark Ridgeway",
      location: "Newcastle",
      quote: "Professional, punctual, and highly skilled. Their knowledge of planting schemes and soil preparation is second to none.",
      stars: 5,
    },
    {
      name: "Jennifer Leigh",
      location: "Tynemouth",
      quote: "We are thrilled with our new garden structure. It fits perfectly with the aesthetic of our home and was built to last.",
      stars: 5,
    },
    {
      name: "David Holmes",
      location: "Monkseaton",
      quote: "Excellent service from start to finish. The free consultation was insightful and the final result exceeded all our expectations.",
      stars: 5,
    },
  ];

  return (
    <div className="flex flex-col pb-20">
      {/* Page Header */}
      <section className="bg-[#183102] text-white py-24">
        <div className="container mx-auto px-6 text-center">
          <span className="text-white/40 uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Kind Words</span>
          <h1 className="font-serif text-5xl md:text-7xl mb-8">Client Testimonials</h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            Discover why homeowners across the North East trust us with their garden transformations since 2007.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="container mx-auto px-6 pt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {testimonials.map((t, index) => (
            <div key={index} className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-[#183102]/5 hover:shadow-xl transition-all duration-500 relative">
              <div className="flex gap-1 mb-6">
                {[...Array(t.stars)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#183102" stroke="#183102" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                ))}
              </div>
              <p className="text-[#1A1A1A] text-xl leading-relaxed mb-8 italic font-serif">
                &quot;{t.quote}&quot;
              </p>
              <div className="flex flex-col">
                <span className="font-bold text-[#183102]">{t.name}</span>
                <span className="text-sm text-[#9A9A9A] tracking-wider uppercase">{t.location}</span>
              </div>
              <div className="absolute top-10 right-10 text-[#183102]/5">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12C15.017 12.5523 14.5693 13 14.017 13H12.017V21H14.017ZM5.017 21L5.017 18C5.017 16.8954 5.91243 16 7.017 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H7.017C6.46472 8 6.017 8.44772 6.017 9V12C6.017 12.5523 5.56928 13 5.017 13H3.017V21H5.017Z"></path></svg>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reassurance Section */}
      <section className="container mx-auto px-6 pt-32">
        <div className="text-center space-y-4">
          <h2 className="font-serif text-3xl text-[#183102]">Join our growing list of satified homeowners</h2>
          <p className="text-[#666] max-w-xl mx-auto">
            Your vision is our priority. We treat every garden as if it were our own.
          </p>
        </div>
      </section>
    </div>
  );
}

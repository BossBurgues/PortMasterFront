import { RiStarFill, RiDoubleQuotesL, RiUserLine } from "@remixicon/react";
import { Card, CardContent } from "@/components/ui/card";

/**
 * Testimonials Page of the Landscape Maintenance UK Demo.
 * Translated to English.
 */
export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Irthlingborough Parish Council",
      location: "Northamptonshire",
      content: "Landscape Maintenance UK has cared for our green areas for years with an impeccable standard. Reliable and always helpful professionals.",
      rating: 5,
    },
    {
      name: "John Smith",
      location: "Private Residence",
      content: "Excellent lawn mowing and landscaping service. They transformed my garden and keep everything in order every week.",
      rating: 5,
    },
    {
      name: "Finedon Industrial Estate",
      location: "Facilities Management",
      content: "Their winter maintenance is vital for our operation. They always clear snow and salt the roads even before we arrive.",
      rating: 5,
    },
    {
      name: "Sarah Williams",
      location: "Residential Complex",
      content: "Their hedge control and bed planting are first-rate. I highly recommend them.",
      rating: 4,
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Page Header */}
      <section className="bg-lm-secundaria text-white py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">What Our Clients Say</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Our greatest reward is the satisfaction and trust of those we serve throughout the region.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-24 bg-lm-fundo">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 bg-white p-10 relative overflow-hidden rounded-3xl">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <RiDoubleQuotesL className="h-24 w-24 text-lm-primaria" />
                </div>
                
                <CardContent className="p-0 space-y-6 relative z-10">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <RiStarFill 
                        key={i} 
                        className={`h-5 w-5 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-200"}`} 
                      />
                    ))}
                  </div>
                  
                  <p className="text-gray-600 text-lg leading-relaxed italic">
                    &quot;{testimonial.content}&quot;
                  </p>
                  
                  <div className="flex items-center space-x-4 pt-4">
                    <div className="w-12 h-12 rounded-full bg-lm-fundo flex items-center justify-center">
                      <RiUserLine className="h-8 w-8 text-lm-primaria" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lm-secundaria">{testimonial.name}</h4>
                      <p className="text-xs text-gray-400 uppercase tracking-widest">{testimonial.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Stats */}
      <section className="py-20 bg-lm-primaria text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            <div className="space-y-2">
              <p className="text-5xl font-black">15+</p>
              <p className="text-sm uppercase tracking-widest font-bold text-white/70">Years of Experience</p>
            </div>
            <div className="space-y-2">
              <p className="text-5xl font-black">500+</p>
              <p className="text-sm uppercase tracking-widest font-bold text-white/70">Happy Clients</p>
            </div>
            <div className="space-y-2">
              <p className="text-5xl font-black">100%</p>
              <p className="text-sm uppercase tracking-widest font-bold text-white/70">Work Guaranteed</p>
            </div>
            <div className="space-y-2">
              <p className="text-5xl font-black">24/7</p>
              <p className="text-sm uppercase tracking-widest font-bold text-white/70">Winter Support</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

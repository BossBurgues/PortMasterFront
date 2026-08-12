"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import React from "react";

/**
 * Hero Section with image slider using original site assets.
 * Translated to English.
 */
export default function Hero() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070",
      title: "Excellence in Commercial Maintenance",
      subtitle: "Professional care for your business's outdoor spaces with dedication and expertise.",
    },
    {
      image: "https://images.unsplash.com/photo-1558904541-efa8c1965f1e?auto=format&fit=crop&q=80&w=2070",
      title: "Your Garden, Our Passion",
      subtitle: "Complete residential services to keep your home grounds looking impeccable year-round.",
    },
    {
      image: "https://images.unsplash.com/photo-1590483734747-3944723b3074?auto=format&fit=crop&q=80&w=1740",
      title: "Hardscaping & Fencing Solutions",
      subtitle: "Transforming outdoor spaces into functional and aesthetic environments.",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden">
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="relative h-[600px] md:h-[750px] w-full">
              {/* Dark Overlay for Contrast */}
              <div className="absolute inset-0 bg-black/40 z-10" />
              
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
              
              <div className="absolute inset-0 z-20 flex items-center justify-center text-center px-4">
                <div className="max-w-3xl space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight drop-shadow-lg">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-2xl text-gray-100 font-medium max-w-2xl mx-auto drop-shadow-md">
                    {slide.subtitle}
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                    <Button asChild size="lg" className="bg-lm-primaria hover:bg-lm-primaria/90 text-white font-bold rounded-full px-10 h-14 md:h-16 text-lg transition-transform hover:scale-105 active:scale-95 shadow-xl">
                      <Link href="/clientes/landscape-maintenance-demo/services">
                        View Our Services
                      </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/40 backdrop-blur-md rounded-full px-10 h-14 md:h-16 text-lg transition-transform hover:scale-105 active:scale-95 shadow-xl">
                      <Link href="/clientes/landscape-maintenance-demo/contact">
                        Speak to a Specialist
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* Slider Controls hidden on small screens */}
        <div className="hidden md:block">
          <CarouselPrevious className="absolute left-8 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 border-none text-white h-14 w-14" />
          <CarouselNext className="absolute right-8 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 border-none text-white h-14 w-14" />
        </div>
      </Carousel>
    </section>
  );
}

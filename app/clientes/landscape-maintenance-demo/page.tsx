import Hero from "./components/Hero";
import ServiceCard from "./components/ServiceCard";
import { 
  RiBuilding2Line, 
  RiHome4Line, 
  RiLeafLine, 
  RiScissorsLine, 
  RiShieldCheckLine, 
  RiTimeLine, 
  RiUserLine 
} from "@remixicon/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

/**
 * HomePage of the Landscape Maintenance UK Demo.
 * Translated to English.
 */
export default function HomePage() {
  const primaryServices = [
    {
      title: "Commercial Maintenance",
      description: "Specialist services for companies, schools, and parish councils. We keep your professional space safe and tidy.",
      icon: RiBuilding2Line,
    },
    {
      title: "Residential Maintenance",
      description: "Complete care for your domestic garden. From lawn mowing to shrub and tree pruning.",
      icon: RiHome4Line,
    },
    {
      title: "Hardscaping & Design",
      description: "Transforming outdoor areas with new designs, planting, and high-quality fencing.",
      icon: RiLeafLine,
    },
    {
      title: "Lawn Care & Control",
      description: "Professional mowing, aeration, and treatments to ensure a green, healthy, weed-free lawn.",
      icon: RiScissorsLine,
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-sm font-bold text-lm-primaria uppercase tracking-widest">Our Services</h2>
            <p className="text-4xl md:text-5xl font-extrabold text-lm-secundaria">Complete Solutions for Your Green Space</p>
            <p className="text-gray-600 text-lg">
              We offer a wide range of grounds maintenance and landscaping services to meet all your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {primaryServices.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button asChild variant="outline" className="border-lm-primaria text-lm-primaria hover:bg-lm-primaria hover:text-white rounded-full px-8 h-12 text-lg">
              <Link href="/clientes/landscape-maintenance-demo/services">
                View All Services
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-lm-fundo">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-extrabold text-lm-secundaria leading-tight">
                Why Choose <span className="text-lm-primaria">Landscape Maintenance UK</span>?
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                We are a family-run business dedicated to providing the highest quality grounds maintenance. Our passion for what we do is reflected in the satisfaction of our clients.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-white p-3 rounded-xl shadow-sm">
                    <RiShieldCheckLine className="h-6 w-6 text-lm-primaria" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lm-secundaria">Guaranteed Quality</h4>
                    <p className="text-sm text-gray-500">Rigorous standards in every project.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-white p-3 rounded-xl shadow-sm">
                    <RiTimeLine className="h-6 w-6 text-lm-primaria" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lm-secundaria">Always on Time</h4>
                    <p className="text-sm text-gray-500">We respect your time and schedule.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-white p-3 rounded-xl shadow-sm">
                    <RiUserLine className="h-6 w-6 text-lm-primaria" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lm-secundaria">Friendly Team</h4>
                    <p className="text-sm text-gray-500">Experienced and helpful professionals.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-white p-3 rounded-xl shadow-sm">
                    <RiLeafLine className="h-6 w-6 text-lm-primaria" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lm-secundaria">Sustainability</h4>
                    <p className="text-sm text-gray-500">Conscious care for the environment.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-2xl group border-8 border-white h-[500px]">
              <Image 
                src="https://images.unsplash.com/photo-1592419044706-39796d40f98c?auto=format&fit=crop&q=80&w=2070"
                alt="Team at work"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-lm-secundaria/60 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <p className="text-2xl font-bold italic">&quot;Our mission is to transform and maintain green spaces that inspire and bring tranquility.&quot;</p>
                <p className="mt-4 font-bold text-lm-primaria">— Management, Landscape Maintenance UK</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-lm-primaria relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 backdrop-blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full -ml-48 -mb-48 backdrop-blur-3xl animate-pulse delay-700" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8">Ready to bring life back to your outdoor area?</h2>
          <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto">
            Contact us today for a free, personalized quote. Our team is ready to help you.
          </p>
          <Button asChild size="lg" className="bg-white text-lm-primaria hover:bg-gray-100 font-bold rounded-full px-12 h-14 text-lg shadow-xl">
            <Link href="/clientes/landscape-maintenance-demo/contact">
              Get in Touch Now
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

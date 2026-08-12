import { 
  RiCheckLine, 
  RiSnowyLine, 
  RiLayoutGridLine, 
  RiTreeLine, 
  RiLeafLine, 
  RiBrushLine 
} from "@remixicon/react";

/**
 * Detailed Services Page of the Demo.
 * Translated to English.
 */
export default function ServicesPage() {
  const serviceCategories = [
    {
      title: "Lawn Maintenance",
      icon: RiLeafLine,
      items: [
        "Regular lawn mowing (residential and commercial)",
        "Edging and border maintenance",
        "Professional aeration and scarification",
        "Flail mowing (large areas/scrub)",
        "Seasonal fertilization treatments",
      ],
    },
    {
      title: "Beds and Shrubs",
      icon: RiBrushLine,
      items: [
        "Technical pruning of shrubs and plants",
        "Manual and chemical weed control",
        "Bark mulching application",
        "Flower bed maintenance",
        "Leaf and debris clearance",
      ],
    },
    {
      title: "Vegetation Management",
      icon: RiTreeLine,
      items: [
        "Hedge cutting and shaping",
        "Tree surgery (pruning and felling)",
        "Stump and root removal",
        "Overgrown land clearance",
        "Ecological green waste disposal",
      ],
    },
    {
      title: "Fencing & Structures",
      icon: RiLayoutGridLine,
      items: [
        "Installation of new fencing (timber/metal)",
        "Panel repairs and replacements",
        "Gate installation and security",
        "Exterior wood treatment and painting",
        "Security fencing for industrial sites",
      ],
    },
    {
      title: "Winter Maintenance",
      icon: RiSnowyLine,
      items: [
        "Snow clearance for car parks and pathways",
        "Bulk gritting and salt application",
        "24/7 meteorological monitoring",
        "Safety guarantee for staff and clients",
        "Emergency call-out availability",
      ],
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Page Header */}
      <section className="bg-lm-primaria text-white py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Our Specialized Services</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            From basic lawn mowing to complex landscaping projects and winter maintenance.
          </p>
        </div>
      </section>

      {/* Detailed Services Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {serviceCategories.map((category) => (
              <div key={category.title} className="bg-lm-fundo rounded-3xl p-10 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-lm-primaria transition-colors duration-300">
                  <category.icon className="h-8 w-8 text-lm-primaria group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-lm-secundaria mb-6">{category.title}</h3>
                <ul className="space-y-4">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-start space-x-3 text-gray-600">
                      <RiCheckLine className="h-5 w-5 text-lm-primaria shrink-0 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Equipment Note */}
      <section className="py-24 bg-lm-secundaria text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold italic">&quot;We use state-of-the-art equipment to guarantee efficiency and precision in all projects.&quot;</h2>
            <div className="h-1 w-24 bg-lm-primaria mx-auto" />
            <p className="text-gray-400 text-lg">
              From compact tractors to snow blowers, our fleet is always ready for the job.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

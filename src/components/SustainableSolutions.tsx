import React from 'react';
import { Recycle, Leaf, Factory, ShoppingBag } from 'lucide-react';

interface Solution {
  icon: React.ElementType;
  title: string;
  description: string;
  benefits: string[];
  image: string;
}

export default function SustainableSolutions() {
  const solutions: Solution[] = [
    {
      icon: Recycle,
      title: "Circular Economy",
      description: "Design out waste and pollution by keeping products and materials in use",
      benefits: [
        "Reduces resource consumption",
        "Creates new business opportunities",
        "Minimizes environmental impact"
      ],
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80"
    },
    {
      icon: Leaf,
      title: "Biodegradable Materials",
      description: "Materials that can decompose naturally without harming the environment",
      benefits: [
        "Reduces landfill waste",
        "No toxic residue",
        "Lower carbon footprint"
      ],
      image: "https://images.unsplash.com/photo-1605600659908-0ef719419d41?auto=format&fit=crop&q=80"
    },
    {
      icon: Factory,
      title: "Smart Waste Management",
      description: "Using technology to optimize waste collection and processing",
      benefits: [
        "Improved efficiency",
        "Real-time monitoring",
        "Cost reduction"
      ],
      image: "https://images.unsplash.com/photo-1597668876776-89b8e0d18ac8?auto=format&fit=crop&q=80"
    },
    {
      icon: ShoppingBag,
      title: "Zero Waste Retail",
      description: "Retail concepts that eliminate packaging and encourage reuse",
      benefits: [
        "Eliminates packaging waste",
        "Promotes conscious consumption",
        "Supports local economy"
      ],
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Sustainable Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Innovative approaches to waste management that promote sustainability
            and environmental protection
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group bg-gray-50 rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-xl"
            >
              <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="object-cover w-full h-48 transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center">
                  <div className="bg-emerald-600 p-2 rounded-lg">
                    <solution.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white ml-3">
                    {solution.title}
                  </h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  {solution.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Key Benefits:</h4>
                  <ul className="space-y-1">
                    {solution.benefits.map((benefit, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-gray-600"
                      >
                        <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#tips"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 transition-colors"
          >
            Learn How to Implement These Solutions
          </a>
        </div>
      </div>
    </section>
  );
}
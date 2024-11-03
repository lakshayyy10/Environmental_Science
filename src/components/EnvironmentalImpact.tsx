import React from 'react';
import { Droplets, Wind, TreePine, Fish } from 'lucide-react';

interface ImpactCard {
  icon: React.ElementType;
  title: string;
  description: string;
  image: string;
}

export default function EnvironmentalImpact() {
  const impacts: ImpactCard[] = [
    {
      icon: Droplets,
      title: "Water Pollution",
      description: "Contamination of water bodies affects marine life and drinking water sources",
      image: "https://images.unsplash.com/photo-1621451537084-482c73073a0f?auto=format&fit=crop&q=80"
    },
    {
      icon: Wind,
      title: "Air Quality",
      description: "Burning waste releases harmful gases and particles into the atmosphere",
      image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&q=80"
    },
    {
      icon: TreePine,
      title: "Land Degradation",
      description: "Improper waste disposal leads to soil contamination and habitat destruction",
      image: "https://images.unsplash.com/photo-1604187351574-c75ca79f5807?auto=format&fit=crop&q=80"
    },
    {
      icon: Fish,
      title: "Marine Life",
      description: "Plastic waste severely impacts ocean ecosystems and marine species",
      image: "https://images.unsplash.com/photo-1618367588411-d9a90fc40336?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <section id="impact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Environmental Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understanding how waste affects our environment is crucial for developing
            sustainable solutions and protecting our planet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {impacts.map((impact, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg transition-transform hover:scale-[1.02]"
            >
              <div className="absolute inset-0">
                <img
                  src={impact.image}
                  alt={impact.title}
                  className="h-full w-full object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />
              </div>
              
              <div className="relative p-8 h-full flex flex-col justify-end">
                <div className="mb-4">
                  <impact.icon className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {impact.title}
                </h3>
                <p className="text-gray-200">
                  {impact.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            The environmental impact of waste affects us all. Together, we can make
            a difference by adopting sustainable waste management practices.
          </p>
          <a
            href="#solutions"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700"
          >
            Explore Solutions
          </a>
        </div>
      </div>
    </section>
  );
}
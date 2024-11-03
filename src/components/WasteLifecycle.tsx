import React from 'react';
import { Package, Truck, Factory, Trash2 } from 'lucide-react';

export default function WasteLifecycle() {
  const stages = [
    {
      icon: Package,
      title: "Generation",
      description: "Products are created and consumed, resulting in waste materials"
    },
    {
      icon: Truck,
      title: "Collection",
      description: "Waste is collected from homes, businesses, and public spaces"
    },
    {
      icon: Factory,
      title: "Processing",
      description: "Materials are sorted, treated, and prepared for disposal or recycling"
    },
    {
      icon: Trash2,
      title: "Disposal",
      description: "Final stage where waste is properly disposed of or recycled"
    }
  ];

  return (
    <section id="lifecycle" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            The Journey of Waste
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understanding the complete lifecycle of waste from creation to final disposal
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-emerald-200 -translate-y-1/2" />

          {/* Stages */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stages.map((stage, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-xl p-6 shadow-lg relative z-10">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stage.icon className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">
                    {stage.title}
                  </h3>
                  <p className="text-gray-600 text-center">
                    {stage.description}
                  </p>
                </div>
                {/* Stage Number */}
                <div className="absolute top-0 right-0 w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center transform translate-x-2 -translate-y-2">
                  <span className="text-white font-bold">{index + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
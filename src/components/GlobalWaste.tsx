import React from 'react';

export default function GlobalWaste() {
  return (
    <section id="global-waste" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Global Waste Overview
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore waste generation patterns across different countries and understand
            the global impact of our consumption.
          </p>
        </div>

        {/* World Map Visualization */}
        <div className="bg-gray-50 rounded-xl p-6 shadow-lg mb-12">
          <div className="aspect-[16/9] bg-white rounded-lg">
            {/* Map component would go here - for now showing a placeholder */}
            <div className="h-full flex items-center justify-center text-gray-400">
              Interactive World Map
            </div>
          </div>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "2.01 Billion",
              subtitle: "Tonnes of waste generated annually",
              description: "Municipal solid waste generation worldwide"
            },
            {
              title: "33%",
              subtitle: "Of waste is mismanaged",
              description: "Through open dumping or burning"
            },
            {
              title: "19%",
              subtitle: "Is recycled globally",
              description: "With significant variation between countries"
            }
          ].map((stat, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">
                {stat.title}
              </div>
              <div className="text-xl font-semibold text-gray-900 mb-2">
                {stat.subtitle}
              </div>
              <p className="text-gray-600">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
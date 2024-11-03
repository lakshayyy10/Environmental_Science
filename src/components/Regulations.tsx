import React from 'react';
import { Scale, Globe2, FileCheck, Users } from 'lucide-react';

interface Policy {
  icon: React.ElementType;
  title: string;
  description: string;
  year: number;
  impact: string;
  region: string;
}

export default function Regulations() {
  const policies: Policy[] = [
    {
      icon: Globe2,
      title: "Basel Convention",
      description: "International treaty designed to reduce movements of hazardous waste between nations",
      year: 1989,
      impact: "Controls transboundary movements of hazardous wastes",
      region: "Global"
    },
    {
      icon: FileCheck,
      title: "EU Circular Economy Action Plan",
      description: "Framework for sustainable product policies and waste reduction",
      year: 2020,
      impact: "Promotes sustainable consumption and waste prevention",
      region: "European Union"
    },
    {
      icon: Scale,
      title: "Extended Producer Responsibility",
      description: "Manufacturers are responsible for entire lifecycle of their products",
      year: 2018,
      impact: "Encourages eco-friendly product design",
      region: "Various Countries"
    },
    {
      icon: Users,
      title: "Zero Waste Initiatives",
      description: "Municipal programs aimed at eliminating waste sent to landfills",
      year: 2015,
      impact: "Promotes waste reduction and recycling",
      region: "Cities Worldwide"
    }
  ];

  return (
    <section id="regulations" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Regulations & Policies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Key policies and regulations shaping waste management practices globally
          </p>
        </div>

        {/* Timeline View */}
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-emerald-100" />
          
          <div className="space-y-12">
            {policies.map((policy, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-emerald-600 z-10" />
                
                {/* Content Card */}
                <div className={`w-5/12 ${
                  index % 2 === 0 ? 'pr-8' : 'pl-8'
                }`}>
                  <div className="bg-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mr-4">
                        <policy.icon className="w-5 h-5 text-emerald-600" />
                      </div>
                      <div>
                        <span className="text-sm font-medium text-emerald-600">
                          {policy.year}
                        </span>
                        <h3 className="text-lg font-semibold text-gray-900">
                          {policy.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4">
                      {policy.description}
                    </p>

                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">
                        Region: {policy.region}
                      </span>
                      <span className="text-emerald-600 font-medium">
                        {policy.impact}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Resources */}
        <div className="mt-16 bg-emerald-50 rounded-xl p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
            Stay Informed
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href="#"
              className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow text-center"
            >
              <h4 className="font-semibold text-gray-900 mb-2">
                Policy Updates
              </h4>
              <p className="text-sm text-gray-600">
                Subscribe to our newsletter for the latest policy changes
              </p>
            </a>
            <a
              href="#"
              className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow text-center"
            >
              <h4 className="font-semibold text-gray-900 mb-2">
                Compliance Guide
              </h4>
              <p className="text-sm text-gray-600">
                Download our comprehensive compliance handbook
              </p>
            </a>
            <a
              href="#"
              className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow text-center"
            >
              <h4 className="font-semibold text-gray-900 mb-2">
                Local Requirements
              </h4>
              <p className="text-sm text-gray-600">
                Find waste management requirements in your area
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
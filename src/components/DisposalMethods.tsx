import React from 'react';
import { Trash2, Flame, Recycle, Sprout } from 'lucide-react';

interface Method {
  icon: React.ElementType;
  title: string;
  description: string;
  pros: string[];
  cons: string[];
  percentage: number;
}

export default function DisposalMethods() {
  const methods: Method[] = [
    {
      icon: Trash2,
      title: "Landfills",
      description: "Engineered facilities for waste burial and containment",
      pros: ["Cost-effective", "Can handle large volumes", "Generates methane for energy"],
      cons: ["Takes up valuable land", "Potential groundwater contamination", "Greenhouse gas emissions"],
      percentage: 37
    },
    {
      icon: Flame,
      title: "Incineration",
      description: "Controlled burning of waste at high temperatures",
      pros: ["Reduces waste volume", "Generates energy", "Destroys harmful materials"],
      cons: ["High operational costs", "Air pollution concerns", "Requires sophisticated technology"],
      percentage: 22
    },
    {
      icon: Recycle,
      title: "Recycling",
      description: "Processing waste materials into new products",
      pros: ["Conserves resources", "Reduces landfill use", "Creates green jobs"],
      cons: ["Market dependent", "Contamination issues", "Processing costs"],
      percentage: 29
    },
    {
      icon: Sprout,
      title: "Composting",
      description: "Biological decomposition of organic waste",
      pros: ["Produces valuable fertilizer", "Low technology needs", "Reduces methane emissions"],
      cons: ["Limited to organic waste", "Requires space", "Weather dependent"],
      percentage: 12
    }
  ];

  return (
    <section id="disposal" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Current Disposal Methods
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understanding different approaches to waste management and their impact
            on our environment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {methods.map((method, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02]"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4">
                    <method.icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{method.title}</h3>
                    <p className="text-gray-600">{method.description}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-600">Global Usage</span>
                    <span className="text-sm font-semibold text-emerald-600">
                      {method.percentage}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-emerald-600 h-2 rounded-full"
                      style={{ width: `${method.percentage}%` }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Advantages</h4>
                    <ul className="space-y-1">
                      {method.pros.map((pro, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center">
                          <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2" />
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Disadvantages</h4>
                    <ul className="space-y-1">
                      {method.cons.map((con, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center">
                          <span className="w-1.5 h-1.5 bg-red-400 rounded-full mr-2" />
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 max-w-2xl mx-auto">
            Each disposal method has its own advantages and challenges. A comprehensive
            waste management strategy often involves a combination of these methods,
            tailored to local needs and capabilities.
          </p>
        </div>
      </div>
    </section>
  );
}
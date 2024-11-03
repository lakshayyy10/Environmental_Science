import React from 'react';
import { ShoppingBag, Home, Apple, Recycle, Lightbulb, Battery, Gift, Trash2 } from 'lucide-react';

interface Tip {
  icon: React.ElementType;
  category: string;
  title: string;
  description: string;
  impact: string;
}

export default function WasteTips() {
  const tips: Tip[] = [
    {
      icon: ShoppingBag,
      category: "Shopping",
      title: "Bring Reusable Bags",
      description: "Use cloth bags for groceries and shopping to reduce plastic waste",
      impact: "Saves 300+ plastic bags per year"
    },
    {
      icon: Home,
      category: "Household",
      title: "Start Composting",
      description: "Convert kitchen scraps and yard waste into valuable compost",
      impact: "Reduces waste by 30%"
    },
    {
      icon: Apple,
      category: "Food",
      title: "Meal Planning",
      description: "Plan meals ahead and buy only what you need to reduce food waste",
      impact: "Saves $1500+ annually"
    },
    {
      icon: Recycle,
      category: "Recycling",
      title: "Proper Sorting",
      description: "Learn local recycling guidelines and sort waste correctly",
      impact: "Improves recycling efficiency"
    },
    {
      icon: Lightbulb,
      category: "Electronics",
      title: "Repair First",
      description: "Fix broken items instead of replacing them when possible",
      impact: "Reduces e-waste"
    },
    {
      icon: Battery,
      category: "Hazardous",
      title: "Safe Disposal",
      description: "Properly dispose of batteries, chemicals, and electronics",
      impact: "Prevents contamination"
    },
    {
      icon: Gift,
      category: "Lifestyle",
      title: "Choose Experiences",
      description: "Gift experiences instead of physical items when possible",
      impact: "Reduces packaging waste"
    },
    {
      icon: Trash2,
      category: "General",
      title: "Zero Waste Goal",
      description: "Gradually work towards a zero-waste lifestyle",
      impact: "Long-term sustainability"
    }
  ];

  return (
    <section id="tips" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Waste Reduction Tips
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simple yet effective ways to reduce waste in your daily life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <tip.icon className="w-6 h-6 text-emerald-600" />
                </div>
                
                <span className="text-sm font-medium text-emerald-600 mb-2 block">
                  {tip.category}
                </span>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {tip.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {tip.description}
                </p>
                
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-sm text-emerald-600 font-medium">
                    Impact: {tip.impact}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Progress Tracker */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
            Track Your Progress
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {tips.map((tip, index) => (
              <label
                key={index}
                className="flex items-center space-x-2 cursor-pointer group"
              >
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-emerald-600 rounded border-gray-300 focus:ring-emerald-500"
                />
                <span className="text-sm text-gray-600 group-hover:text-emerald-600">
                  {tip.title}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Ready to take your waste reduction journey to the next level?
          </p>
          <a
            href="#involved"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 transition-colors"
          >
            Get Involved
          </a>
        </div>
      </div>
    </section>
  );
}
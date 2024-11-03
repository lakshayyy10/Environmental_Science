import React from 'react';

interface Action {
  title: string;
  description: string;
  link: string;
}

const GetInvolved: React.FC = () => {
  const actions: Action[] = [
    {
      title: "Volunteer in Your Community",
      description: "Join local efforts to clean up and reduce waste in your area.",
      link: "/get-involved/volunteer"
    },
    {
      title: "Donate to Environmental Causes",
      description: "Support organizations that are making a positive impact on the planet.",
      link: "/get-involved/donate"
    },
    // Add more actions as needed
  ];

  return (
    <section id="involved" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Get Involved
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take action to reduce waste and make a difference.
          </p>
        </div>
        
        <div className="space-y-8">
          {actions.map((action, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                {action.title}
              </h3>
              <p className="text-gray-700 mb-4">{action.description}</p>
              <a href={action.link} className="text-emerald-600 hover:text-emerald-800 font-medium">
                Get started →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;

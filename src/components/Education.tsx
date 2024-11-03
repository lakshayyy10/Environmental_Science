import React from 'react';

interface Resource {
  title: string;
  description: string;
  link: string;
}

const Education: React.FC = () => {
  const resources: Resource[] = [
    {
      title: "Recycling 101",
      description: "Learn the basics of recycling and how to do it correctly.",
      link: "/education/recycling-101"
    },
    {
      title: "Plastic Waste and Its Impact",
      description: "An in-depth look at how plastic affects our environment.",
      link: "/education/plastic-impact"
    },
    // Add more resources as needed
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Education
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expand your knowledge on sustainable practices and waste management.
          </p>
        </div>
        
        <div className="space-y-8">
          {resources.map((resource, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                {resource.title}
              </h3>
              <p className="text-gray-700 mb-4">{resource.description}</p>
              <a href={resource.link} className="text-emerald-600 hover:text-emerald-800 font-medium">
                Learn more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

import React from 'react';

interface BlogPost {
  title: string;
  date: string;
  summary: string;
  link: string;
}

const Blog: React.FC = () => {
  const posts: BlogPost[] = [
    {
      title: "The Future of Waste Management",
      date: "October 5, 2024",
      summary: "Exploring innovative solutions for sustainable waste management.",
      link: "/blog/future-of-waste"
    },
    {
      title: "Composting: A Beginner’s Guide",
      date: "September 20, 2024",
      summary: "Learn how to start composting and reduce household waste.",
      link: "/blog/composting-guide"
    },
    // Add more blog posts as needed
  ];

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Blog
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with our latest articles and updates.
          </p>
        </div>
        
        <div className="space-y-8">
          {posts.map((post, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                {post.title}
              </h3>
              <p className="text-gray-500 mb-2">{post.date}</p>
              <p className="text-gray-700 mb-4">{post.summary}</p>
              <a href={post.link} className="text-emerald-600 hover:text-emerald-800 font-medium">
                Read more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;

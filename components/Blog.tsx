import React from 'react';

const blogPosts = [
  {
    title: 'Brand Storytelling Through Logo Design: Crafting a Visual Narrative',
    category: 'Branding',
    readTime: 7,
    image: 'https://picsum.photos/seed/blog1/400/250',
    description: "Discover how storytelling through logo design can enhance your brand identity. Lea...",
  },
  {
    title: 'What Is Brand Consistency',
    category: 'Branding',
    readTime: 5,
    image: 'https://picsum.photos/seed/blog2/400/250',
    description: "Discover what brand consistency is, why it matters, and how to maintain it acro...",
  },
  {
    title: 'Looka vs Canva',
    category: 'Branding',
    readTime: 8,
    image: 'https://picsum.photos/seed/blog3/400/250',
    description: "Explore the key differences between Looka and Canva. Compare features, pricing, an...",
  },
];

const BlogCard: React.FC<typeof blogPosts[0]> = ({ title, category, readTime, image, description }) => {
    return (
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
            <img src={image} alt={title} className="w-full h-48 object-cover" />
            <div className="p-6">
                <div className="text-sm text-gray-500">
                    <span className="font-semibold text-blue-600">{category}</span> • {readTime} minutes read
                </div>
                <h3 className="text-xl font-bold text-gray-800 mt-2">{title}</h3>
                <p className="text-gray-600 mt-2">{description}</p>
            </div>
        </div>
    );
};


const Blog: React.FC = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900">Learn about logo design and branding</h2>
        <p className="text-lg text-gray-600 mt-4">Insightful graphic design and business branding blog with guides and tips for professionals and newbies.</p>
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold mt-12 hover:bg-blue-700 transition-colors">
            Get started for FREE
        </button>
      </div>
    </section>
  );
};

export default Blog;

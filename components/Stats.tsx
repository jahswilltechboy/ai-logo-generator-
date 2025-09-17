import React from 'react';

const stats = [
  { value: '800k+', label: 'Logos generated using AI' },
  { value: '200k+', label: 'Brand kits generated' },
  { value: '100+', label: 'Website & social templates' },
];

const Stats: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="mx-auto sm:mx-0">
              <p className="text-4xl md:text-5xl font-bold text-gray-800">{stat.value}</p>
              <p className="text-gray-500 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

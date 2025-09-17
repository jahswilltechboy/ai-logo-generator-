
import React from 'react';

const stats = [
  { value: '800k+', label: 'Logos generated using AI' },
  { value: '200k+', label: 'Brand kits generated' },
  { value: '100+', label: 'Website & social templates' },
];

const Stats: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <div className="flex justify-around items-center text-center">
          {stats.map((stat, index) => (
            <div key={index} className="w-1/3">
              <p className="text-4xl font-bold text-gray-800">{stat.value}</p>
              <p className="text-gray-500 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;


import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-5xl font-extrabold">Ready to generate your logo <br /> and brand kit with AI?</h2>
        <p className="text-lg text-gray-300 mt-4">Discover how 500,000+ businesses and creators are using our AI logo maker in their logo creation.</p>
        <button className="bg-blue-600 text-white text-xl font-bold px-10 py-5 rounded-full mt-8 hover:bg-blue-700 transition-colors">
          Start for Absolutely FREE
        </button>
        <p className="text-sm text-gray-400 mt-4">✓ no credit card or upfront payment required.</p>
      </div>
    </section>
  );
};

export default CTA;

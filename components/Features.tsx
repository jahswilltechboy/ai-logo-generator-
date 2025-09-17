
import React from 'react';
import { CheckIcon } from '../constants';

const FeatureBlock: React.FC<{
  title: string;
  description: string;
  imageUrl: string;
  items?: string[];
  reverse?: boolean;
}> = ({ title, description, imageUrl, items, reverse = false }) => {
  return (
    <div className={`flex flex-col md:flex-row items-center justify-between gap-12 ${reverse ? 'md:flex-row-reverse' : ''}`}>
      <div className="md:w-1/2">
        <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
        <p className="text-gray-600 mt-4 text-lg">{description}</p>
        {items && (
          <ul className="mt-6 space-y-3">
            {items.map((item, index) => (
              <li key={index} className="flex items-center">
                <CheckIcon />
                <span className="ml-3 text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        )}
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold mt-8 hover:bg-blue-700 transition-colors">
          Get started for FREE
        </button>
      </div>
      <div className="md:w-1/2">
        <img src={imageUrl} alt={title} className="rounded-2xl shadow-xl" />
      </div>
    </div>
  );
};

const Features: React.FC = () => {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-6 space-y-24">
        <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900">Easy way to design logo for your new business</h2>
        </div>

        <FeatureBlock
          title="Generate a premium logo with AI"
          description="Create your perfect logo effortlessly with Logome's AI logo maker. No design skills required, choose from a wide range of options to find the logo that best represents your brand."
          imageUrl="https://picsum.photos/seed/feature1/600/450"
          items={[
            "100+ fonts in various styles",
            "Color schemes: solid/gradient colors"
          ]}
        />

        <FeatureBlock
          title="Design your brand"
          description="After creating your logo with our AI logo generator, boost your brand with Logome's Brand Kit. Instantly produce branded materials using your design, colors, and fonts, including email signatures, business cards, websites, social media covers, posts, profiles, and posters."
          imageUrl="https://picsum.photos/seed/feature2/600/450"
          reverse
        />

        <FeatureBlock
          title="Your premium website is ready!"
          description="Once you generate your logo with our AI logo creator and create social media templates, we'll provide you with a fully editable, professionally designed website."
          imageUrl="https://picsum.photos/seed/feature3/600/450"
          items={[
            "3+ website templates in various styles",
            "Full customizable",
            "100% responsive on both mobile and tablet"
          ]}
        />
      </div>
    </section>
  );
};

export default Features;

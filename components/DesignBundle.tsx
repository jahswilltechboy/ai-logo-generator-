import React from 'react';
import { BrandKitIcon, BusinessCardIcon, PosterIcon, SocialMediaPostIcon, EmailSignatureIcon, FlyerIcon, SocialMediaIcon, WebsiteIcon, AILogoGeneratorIcon } from '../constants';


const tools = [
  { icon: <BrandKitIcon />, name: 'Brand Kit' },
  { icon: <BusinessCardIcon />, name: 'Business Cards Generator' },
  { icon: <PosterIcon />, name: 'Poster Generator' },
  { icon: <SocialMediaPostIcon />, name: 'Social Media Profile Generator' },
  { icon: <AILogoGeneratorIcon />, name: 'AI Logo Generator' },
  { icon: <EmailSignatureIcon />, name: 'Email Signature' },
  { icon: <FlyerIcon />, name: 'Flyer' },
  { icon: <SocialMediaIcon />, name: 'Social Media' },
  { icon: <WebsiteIcon />, name: 'Premium Website' },
];

const DesignBundle: React.FC = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <span className="text-sm font-bold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">WHAT YOU GET</span>
        <h2 className="text-4xl font-bold text-gray-900 mt-4">One design bundle for all your needs</h2>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">Discover a wide range of tools, from logo maker to website design, ready for you to explore and experiment with.</p>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {tools.map((tool, index) => (
            <button key={index} className="flex items-center bg-white px-4 py-3 rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-500 transition-all">
              <span className="text-blue-600">{tool.icon}</span>
              <span className="ml-3 font-medium text-gray-700">{tool.name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignBundle;

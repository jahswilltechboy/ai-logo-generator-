
import React from 'react';
import { ProductHuntIcon, DesignToolsIcon } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6 text-center flex flex-col items-center">
        <div className="md:flex md:items-start md:space-x-12">
          <div className="md:w-1/2 md:text-left mb-10 md:mb-0">
            <span className="text-sm font-bold text-teal-500 bg-teal-100 px-3 py-1 rounded-full">AI LOGO GENERATOR</span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mt-4 leading-tight">
              Design your stunning <br />
              <span className="text-blue-600">brand logo</span> with AI
            </h1>
            <p className="text-lg text-gray-600 mt-6">
              Use Logome's AI-powered platform to design a recognizable logo and brand you love.
            </p>
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold mt-8 hover:bg-blue-700 transition-colors text-lg">
              Make a logo
            </button>
            <div className="mt-8 flex justify-center md:justify-start space-x-4">
              <div className="flex items-center p-4 border border-gray-200 rounded-lg bg-white">
                <ProductHuntIcon />
                <div className="ml-3 text-left">
                  <p className="text-xs text-gray-500">PRODUCT HUNT</p>
                  <p className="font-bold text-gray-800">#5 Product of the Day</p>
                </div>
              </div>
              <div className="flex items-center p-4 border border-gray-200 rounded-lg bg-white">
                <DesignToolsIcon />
                <div className="ml-3 text-left">
                  <p className="text-xs text-gray-500">#2 PRODUCT OF THE WEEK</p>
                  <p className="font-bold text-gray-800">Design Tools</p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 grid grid-cols-3 gap-4">
              <img src="https://picsum.photos/seed/fashion/200/280" alt="Fashion brand" className="rounded-lg shadow-lg object-cover w-full h-full" />
              <img src="https://picsum.photos/seed/cardsB/200/280" alt="Business cards" className="rounded-lg shadow-lg object-cover w-full h-full" />
              <img src="https://picsum.photos/seed/cardsW/200/280" alt="White cards" className="rounded-lg shadow-lg object-cover w-full h-full" />
              <img src="https://picsum.photos/seed/super/200/280" alt="Super files box" className="rounded-lg shadow-lg object-cover w-full h-full" />
              <img src="https://picsum.photos/seed/organic/200/280" alt="Organic tea box" className="rounded-lg shadow-lg object-cover w-full h-full" />
              <img src="https://picsum.photos/seed/superbag/200/280" alt="Super files bag" className="rounded-lg shadow-lg object-cover w-full h-full" />
              <img src="https://picsum.photos/seed/nature/200/280" alt="Nature organic box" className="rounded-lg shadow-lg object-cover w-full h-full" />
              <img src="https://picsum.photos/seed/serum/200/280" alt="Serum bottle" className="rounded-lg shadow-lg object-cover w-full h-full" />
              <img src="https://picsum.photos/seed/serial/200/280" alt="Serial wine bottle" className="rounded-lg shadow-lg object-cover w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

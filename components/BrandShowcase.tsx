import React from 'react';

const images = [
  { src: "https://picsum.photos/seed/showcase1/500/300", alt: "Branded Card" },
  { src: "https://picsum.photos/seed/showcase2/500/700", alt: "Branded T-Shirt" },
  { src: "https://picsum.photos/seed/showcase3/500/500", alt: "Branded Bottle" },
  { src: "https://picsum.photos/seed/showcase4/500/700", alt: "Branded T-Shirt" },
  { src: "https://picsum.photos/seed/showcase5/500/500", alt: "Branded Cosmetics" },
  { src: "https://picsum.photos/seed/showcase6/500/700", alt: "Branded Cap" },
];

const BrandShowcase: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900">Cool brands designed with Logome</h2>
        <p className="text-lg text-gray-600 mt-4">Logome's AI logo maker is trusted by 500.000+ businesses worldwide.</p>
        <div className="mt-12 columns-1 sm:columns-2 md:columns-3 gap-4">
          {images.map((image, index) => (
            <img key={index} className="w-full h-auto mb-4 rounded-lg shadow-lg break-inside-avoid" src={image.src} alt={image.alt} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandShowcase;

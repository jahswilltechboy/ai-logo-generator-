
import React from 'react';

const testimonials = [
  {
    name: 'Olivia Harper',
    title: 'Marketing Manager',
    avatar: 'https://picsum.photos/seed/avatar1/100/100',
    quote: "The AI logo maker made it so easy to create a stunning logo for my startup. The brand kit is a fantastic addition, providing essential assets like website templates and email signatures. Highly recommend for more logo projects in the future.",
  },
  {
    name: 'Ethan Carter',
    title: 'Software Developer',
    avatar: 'https://picsum.photos/seed/avatar2/100/100',
    quote: "Designing a logo for my side project was a breeze. The final product looks amazing and the comprehensive package provided a professional and unique identity.",
  },
  {
    name: 'Isabella James',
    title: 'Graphic Designer',
    avatar: 'https://picsum.photos/seed/avatar3/100/100',
    quote: "The Logome's AI logo maker is fantastic! The AI logo maker helped me create a beautiful logo in minutes. Plus, the brand kit includes so many useful assets like website templates and social media kits.",
  },
];

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
    return (
        <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
                <svg key={i} className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    )
}

const TestimonialCard: React.FC<typeof testimonials[0]> = ({ name, title, avatar, quote }) => {
    return (
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <div className="flex items-center">
                <img src={avatar} alt={name} className="w-16 h-16 rounded-full" />
                <div className="ml-4">
                    <p className="font-bold text-lg text-gray-800">{name}</p>
                    <p className="text-gray-500">{title}</p>
                </div>
            </div>
            <p className="mt-6 text-gray-600">"{quote}"</p>
            <div className="mt-6">
                <StarRating rating={5} />
            </div>
        </div>
    );
};

const Testimonials: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 text-center">Customers Experience</h2>
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
        <div className="flex justify-center mt-12 space-x-2">
            <button className="w-3 h-3 bg-blue-600 rounded-full"></button>
            <button className="w-3 h-3 bg-gray-300 rounded-full hover:bg-blue-400"></button>
            <button className="w-3 h-3 bg-gray-300 rounded-full hover:bg-blue-400"></button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

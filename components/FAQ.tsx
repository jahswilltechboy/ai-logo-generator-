
import React, { useState } from 'react';

const faqData = [
  {
    question: 'How do I make a business logo design?',
    answer: 'You can create a business logo design with the Logome logo maker. It’s a simple and easy-to-use tool that helps you create a professional logo in minutes. Just enter your company name and slogan, and our AI will generate hundreds of logo designs for you to choose from.'
  },
  {
    question: 'Is signup needed for a company logo?',
    answer: 'No, signup is not required to create a company logo. You can start designing your logo right away. However, to save or download your logo, you will need to create a free account.'
  },
  {
    question: 'How do I recieve my logo package?',
    answer: 'Once you finalize your logo design and complete the purchase, you will receive an email with a link to download your logo package. The package includes high-resolution files in various formats (PNG, JPG, SVG) suitable for web and print.'
  },
  {
    question: 'What logo files do I get?',
    answer: 'Your logo package will include a variety of file types to cover all your branding needs. This includes high-resolution PNG and JPG files for online use, and scalable vector files (SVG, EPS) for printing at any size without losing quality.'
  },
];

interface FAQItemProps {
    question: string;
    answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-200 py-6">
            <button
                className="w-full flex justify-between items-center text-left"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-lg font-medium text-gray-800">{question}</span>
                <span className="text-2xl text-gray-500">
                    {isOpen ? '-' : '+'}
                </span>
            </button>
            {isOpen && (
                <div className="mt-4 text-gray-600">
                    {answer}
                </div>
            )}
        </div>
    );
};


const FAQ: React.FC = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-4xl font-bold text-gray-900 text-center">Frequently asked questions</h2>
        <div className="mt-12">
            {faqData.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

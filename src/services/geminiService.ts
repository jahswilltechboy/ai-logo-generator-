import React, { useState } from 'react';
import geminiService from '../src/services/geminiService';

const models = [
  { title: 'Image 3.0', tag: 'Try these', img: 'https://picsum.photos/seed/model1/400/240', selected: true },
  { title: 'Studio Ghibli', tag: 'Try these', img: 'https://picsum.photos/seed/model2/400/240' },
  { title: 'Realism 3.0', tag: 'Try these', img: 'https://picsum.photos/seed/model3/400/240' },
  { title: 'Realism 3.2 (ultra)', tag: 'Try these', img: 'https://picsum.photos/seed/model4/400/240' },
  { title: 'Realism 3.1', tag: 'Try these', img: 'https://picsum.photos/seed/model5/400/240' },
];

const communityModels = [
  { title: '90s anime (brown)', img: 'https://picsum.photos/seed/community1/400/240' },
  { title: 'GoGencrafter Carto...', img: 'https://picsum.photos/seed/community2/400/240' },
  { title: 'Fantasy', img: 'https://picsum.photos/seed/community3/400/240' },
  { title: 'Japanese', img: 'https://picsum.photos/seed/community4/400/240' },
  { title: 'Monsters', img: 'https://picsum.photos/seed/community5/400/240' },
];

const additionalModels = [
  { title: 'Olafs-More Eerie Pe...', img: 'https://picsum.photos/seed/additional1/400/240' },
  { title: 'Misc Dall-E', img: 'https://picsum.photos/seed/additional2/400/240' },
  { title: 'ConceptChar', img: 'https://picsum.photos/seed/additional3/400/240' },
  { title: 'LACE', img: 'https://picsum.photos/seed/additional4/400/240' },
  { title: 'Ultimate Muscle V...', img: 'https://picsum.photos/seed/additional5/400/240' },
];

const exclusiveModels = [
  { title: 'Logos', img: 'https://picsum.photos/seed/exclusive1/400/240', isPro: true },
  { title: 'Textify', img: 'https://picsum.photos/seed/exclusive2/400/240', isPro: true },
  { title: 'Realistic Details', img: 'https://picsum.photos/seed/exclusive3/400/240', isPro: true },
  { title: 'Tattoos', img: 'https://picsum.photos/seed/exclusive4/400/240', isPro: true },
  { title: 'Professional Port...', img: 'https://picsum.photos/seed/exclusive5/400/240', isPro: true },
];

const niches = [
  'Technology', 'Fashion', 'Food & Beverage', 'Health & Wellness', 'Finance', 'Education', 
  'Real Estate', 'Travel', 'Beauty & Cosmetics', 'Sports & Fitness', 'Entertainment', 
  'Automotive', 'Home & Garden', 'E-commerce', 'Nonprofit', 'Marketing & Advertising', 
  'Arts & Design', 'Photography', 'Consulting', 'Legal', 'Construction', 'Agriculture', 
  'Gaming', 'Pets', "Children's Products"
];

const Card: React.FC<{
  title: string; 
  img: string; 
  subtitle?: string; 
  selected?: boolean; 
  isPro?: boolean; 
  suggestedName?: string; 
  onCopied?: (name: string) => void;
  onSelect?: () => void;
}> = ({ title, img, subtitle, selected, isPro, suggestedName, onCopied, onSelect }) => {
  const [copied, setCopied] = useState(false);
  const nameToShow = suggestedName || title;

  const handleCopy = async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(nameToShow);
      setCopied(true);
      onCopied?.(nameToShow);
      setTimeout(() => setCopied(false), 1200);
    } catch {}
  };

  const handleCardClick = () => {
    onSelect?.();
  };

  return (
    <div 
      className={`bg-white rounded-xl border overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer ${
        selected ? 'border-blue-500 ring-2 ring-blue-200' : 'border-gray-200 hover:border-blue-300'
      }`}
      onClick={handleCardClick}
    >
      <div className="relative">
        <img src={img} alt={title} className="w-full h-32 object-cover" />
        {isPro && (
          <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full font-semibold">PRO</span>
        )}
        {selected && (
          <div className="absolute top-2 left-2 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
        )}
      </div>
      <div className="p-3">
        {subtitle && <p className="text-xs font-semibold text-blue-600 mb-1">{subtitle}</p>}
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-gray-800 truncate flex-1 mr-2">{nameToShow}</h3>
          <button
            type="button"
            onClick={handleCopy}
            className="text-xs px-2 py-1 rounded bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-700 border border-gray-200 transition-colors"
            aria-label={`Copy ${nameToShow}`}
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
      </div>
    </div>
  );
};

const SidebarItem: React.FC<{
  icon: React.ReactNode; 
  label: string; 
  active?: boolean; 
  hasSubmenu?: boolean; 
  badge?: string;
}> = ({ icon, label, active, hasSubmenu, badge }) => (
  <div className={`flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer transition-colors ${
    
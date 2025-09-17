import React from 'react';

// Generic Icon Wrapper for consistent styling
const Icon: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <svg className={`w-6 h-6 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    {children}
  </svg>
);

export const LogoIcon: React.FC = () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="8" fill="#4F46E5"/>
        <path d="M16 8L22 18H10L16 8Z" fill="white"/>
    </svg>
);

export const ProductHuntIcon: React.FC = () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="8" fill="#F3F4F6"/>
        <path d="M20 10C14.4772 10 10 14.4772 10 20C10 25.5228 14.4772 30 20 30C25.5228 30 30 25.5228 30 20C30 14.4772 25.5228 10 20 10ZM22 24H18V16H22V18H20V22H22V24Z" fill="#F59E0B"/>
    </svg>
);

export const DesignToolsIcon: React.FC = () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="8" fill="#F3F4F6"/>
        <path d="M14 14H26V26H14V14Z" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20 14V10" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20 30V26" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M26 20H30" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 20H14" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const CheckIcon: React.FC = () => (
  <svg className="w-6 h-6 text-green-500 bg-green-100 rounded-full p-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
  </svg>
);

export const CyclingIcon: React.FC = () => <Icon><path strokeLinecap="round" strokeLinejoin="round" d="M12 18a2 2 0 100-4 2 2 0 000 4zm0 0a2 2 0 100-4 2 2 0 000 4zm-7 0a2 2 0 100-4 2 2 0 000 4zm14 0a2 2 0 100-4 2 2 0 000 4zm-5-8l-4 4h8l-4-4z" /></Icon>;
export const KeyIcon: React.FC = () => <Icon><path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2m-2-2a2 2 0 00-2 2m2-2h-2m2 2h-2m0 0v2m0-2v-2m4 4h2m-2-2v2m-2-2v-2m-2 6H9a2 2 0 01-2-2V9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2zm-4-4h2" /></Icon>;
export const QRIcon: React.FC = () => <Icon><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /><path d="M5 5h2v2H5zM17 5h2v2h-2zM5 17h2v2H5zM17 17h2v2h-2z" /></Icon>;
export const BuildingIcon: React.FC = () => <Icon><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16h14zM15 21V11l-4 4-4-4v10" /></Icon>;
export const StarIcon: React.FC = () => <Icon><path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></Icon>;
export const StoreIcon: React.FC = () => <Icon><path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></Icon>;
export const ShipIcon: React.FC = () => <Icon><path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" /><path d="M2 12h2l2 4 4-8 4 8 2-4h2" /></Icon>;

export const BrandKitIcon: React.FC = () => <Icon><path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4M4 7l8 5 8-5" /></Icon>;
export const BusinessCardIcon: React.FC = () => <Icon><path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M3 14h18M3 6h18v12H3z" /></Icon>;
export const PosterIcon: React.FC = () => <Icon><path strokeLinecap="round" strokeLinejoin="round" d="M9 20h6" /><path d="M7.5 4.5l9 15m-9-15l-3 6m12 9l3-6M4.5 10.5h15" /></Icon>;
export const SocialMediaPostIcon: React.FC = () => <Icon><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8s-9-3.582-9-8 4.03-8 9-8 9 3.582 9 8z" /></Icon>;
export const AILogoGeneratorIcon: React.FC = () => <Icon><path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.536L15.232 5.232z" /></Icon>;
// Fix: Corrected a typo in the export statement. `export.const` should be `export const`.
export const EmailSignatureIcon: React.FC = () => <Icon><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></Icon>;
export const FlyerIcon: React.FC = () => <Icon><path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6" /></Icon>;
export const SocialMediaIcon: React.FC = () => <Icon><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></Icon>;
export const WebsiteIcon: React.FC = () => <Icon><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3m0 18a9 9 0 009-9" /></Icon>;

export const GoogleIcon: React.FC = () => (
  <svg className="w-5 h-5" viewBox="0 0 533.5 544.3" xmlns="http://www.w3.org/2000/svg">
    <path fill="#4285F4" d="M533.5 278.4c0-17.4-1.6-34.1-4.6-50.4H272.1v95.3h147c-6.4 34.6-25.7 63.9-54.7 83.5v69.3h88.5c51.7-47.7 80.6-118.1 80.6-197.7z"/>
    <path fill="#34A853" d="M272.1 544.3c73.9 0 135.9-24.5 181.2-66.5l-88.5-69.3c-24.6 16.5-56.1 26-92.7 26-71.2 0-131.6-48-153.2-112.6H28.2v70.8c45 89.2 137.2 150 243.9 150z"/>
    <path fill="#FBBC04" d="M118.9 322c-10.9-32.6-10.9-68 0-100.6V150.6H28.2c-39.5 78.9-39.5 172.8 0 251.7L118.9 322z"/>
    <path fill="#EA4335" d="M272.1 106.2c40.2-.6 78.7 14.7 108 43.1l80.3-80.3C405.9 24.2 343.9 0 272.1 0 165.4 0 73.2 60.9 28.2 150.6l90.7 70.8c21.6-64.6 82-115.2 153.2-115.2z"/>
  </svg>
);

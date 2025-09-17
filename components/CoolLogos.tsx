import React from 'react';
import { CyclingIcon, KeyIcon, QRIcon, BuildingIcon, StarIcon, StoreIcon, ShipIcon } from '../constants';

const logos = [
  { icon: <CyclingIcon />, name: 'CyclingPro' },
  { icon: <KeyIcon />, name: 'LockerPro' },
  { icon: <QRIcon />, name: 'Qr Scanner' },
  { icon: <BuildingIcon />, name: 'Better Builders' },
  { icon: <StarIcon />, name: 'ReviewsMaster' },
  { icon: <StoreIcon />, name: 'DroshipNow' },
  { icon: <CyclingIcon />, name: 'CyclingPro' },
];

const CoolLogos: React.FC = () => {
  return (
    <section className="bg-gray-900 py-20 text-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <span className="text-sm font-bold text-blue-400 bg-blue-900/50 px-3 py-1 rounded-full">MADE WITH LOGOME AI</span>
        <h2 className="text-4xl font-bold mt-4">Cool logos designed with Logome</h2>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {logos.map((logo, index) => (
            <div key={index} className="bg-white/10 p-6 rounded-2xl flex flex-col items-center justify-center aspect-square backdrop-blur-sm border border-white/10 transition-transform hover:scale-105">
              <div className="w-16 h-16 text-blue-400">{logo.icon}</div>
              <p className="mt-4 font-semibold text-white">{logo.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoolLogos;

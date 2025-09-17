
import React from 'react';
import { LogoIcon } from '../constants';

const Header: React.FC = () => {
  return (
    <header className="bg-white sticky top-0 z-50 border-b border-gray-200">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <LogoIcon />
            <span className="font-bold text-xl text-gray-800">Logome</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-gray-600 hover:text-blue-600">Logo Maker</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Brand Kit</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Logo Ideas</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Blog</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Affiliate</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Reviews</a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="text-gray-600 hover:text-blue-600">Login</a>
          <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Try for FREE
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

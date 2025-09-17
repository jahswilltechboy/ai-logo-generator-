
import React from 'react';
import { LogoIcon } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2">
              <LogoIcon />
              <span className="font-bold text-xl text-gray-800">Logome</span>
            </div>
            <p className="mt-4 text-gray-600 max-w-sm">
              Logome is an AI logo generator that helps you create a logo along with a complete brand kit.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800">General</h4>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Affiliates</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Reviews</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800">Tools</h4>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Logo Maker</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Brand Kit</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">AIExpress</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Dropshipping</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800">Support</h4>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Help center</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; 2025 - Logome. All rights reserved</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-blue-600">Privacy Policy</a>
            <a href="#" className="hover:text-blue-600">Terms of Service</a>
            <a href="#" className="hover:text-blue-600">Refund and Cancellation Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

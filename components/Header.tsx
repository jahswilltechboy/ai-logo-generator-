import React, { useState } from 'react';
import { LogoIcon } from '../constants';

const Header: React.FC<{ currentRoute?: string }> = ({ currentRoute = '/' }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isLogin = currentRoute === '/login';
  const isSignup = currentRoute === '/signup';
  const isDashboard = currentRoute === '/dashboard';
  const hideMobileNav = isLogin || isSignup;

  const onNavClick = () => setMobileOpen(false);

  return (
    <header className="bg-white sticky top-0 z-50 border-b border-gray-200">
      <div className="container mx-auto pl-6 pr-0 md:pl-6 md:pr-0 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <a href="#/" className="flex items-center space-x-2" onClick={onNavClick}>
            <LogoIcon />
            <span className="font-bold text-xl text-gray-800">Logome</span>
          </a>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-gray-600 hover:text-blue-600">Logo Maker</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Brand Kit</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Logo Ideas</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Blog</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Affiliate</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Reviews</a>
          </nav>
        </div>

        {!hideMobileNav && (
          <button
            type="button"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg border border-gray-200 text-gray-700 hover:text-blue-600 hover:border-blue-300"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        )}

        <div className="hidden md:flex items-center space-x-4">
          {!hideMobileNav && (
            <>
              <a href="#/login" className="text-gray-600 hover:text-blue-600">Login</a>
              <a href="#/signup" className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Try for FREE
              </a>
            </>
          )}
        </div>
      </div>

      {mobileOpen && !hideMobileNav && (
        <div className="md:hidden border-t border-gray-200">
          <div className="container mx-auto px-4 md:px-6 pb-4">
            <nav className="pt-3 grid gap-3">
              <a href="#" className="text-gray-700 hover:text-blue-600" onClick={onNavClick}>Logo Maker</a>
              <a href="#" className="text-gray-700 hover:text-blue-600" onClick={onNavClick}>Brand Kit</a>
              <a href="#" className="text-gray-700 hover:text-blue-600" onClick={onNavClick}>Logo Ideas</a>
              <a href="#" className="text-gray-700 hover:text-blue-600" onClick={onNavClick}>Blog</a>
              <a href="#" className="text-gray-700 hover:text-blue-600" onClick={onNavClick}>Affiliate</a>
              <a href="#" className="text-gray-700 hover:text-blue-600" onClick={onNavClick}>Reviews</a>
            </nav>
            <div className="mt-4 grid gap-3">
              {!isLogin && (
                <a href="#/login" className="text-gray-700 hover:text-blue-600" onClick={onNavClick}>Login</a>
              )}
              {!isSignup && (
                <a href="#/signup" className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold text-center hover:bg-blue-700 transition-colors" onClick={onNavClick}>
                  Try for FREE
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

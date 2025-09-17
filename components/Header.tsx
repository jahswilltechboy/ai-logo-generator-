import React, { useState } from 'react';
import { LogoIcon, UserIcon, NotificationIcon, UpgradeIcon } from '../constants';

const Header: React.FC<{ currentRoute?: string }> = ({ currentRoute = '/' }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isLogin = currentRoute === '/login';
  const isSignup = currentRoute === '/signup';
  const isDashboard = currentRoute === '/dashboard';
  const hideMobileNav = isLogin || isSignup;

  const onNavClick = () => setMobileOpen(false);

  return (
    <header className="bg-gray-900 sticky top-0 z-50 border-b border-gray-700">
      <div className="container mx-auto pl-6 pr-6 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <a href="#/" className="flex items-center space-x-2" onClick={onNavClick}>
            <LogoIcon />
            <span className="font-bold text-xl text-white">gencraft</span>
          </a>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-white">
            <UserIcon />
            <span className="text-sm">15 XP</span>
          </div>
          <div className="relative">
            <NotificationIcon />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">1</span>
          </div>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors flex items-center space-x-2">
            <UpgradeIcon />
            <span>Upgrade</span>
          </button>
          <div className="text-white text-sm">4 prompts left today</div>
        </div>
      </div>
    </header>
  );
};

export default Header;

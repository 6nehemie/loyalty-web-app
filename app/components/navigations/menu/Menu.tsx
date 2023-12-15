'use client';

import { XMarkIcon } from '@heroicons/react/24/outline';
import { Backdrop } from '../..';
import React, { useRef } from 'react';
import useClickOutside from '@/app/hooks/useClickOutside';
import { menuNavigation } from '@/app/constants/components';
import MenuCollection from './MenuCollection';

interface MenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Menu: React.FC<MenuProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const menuRef = useRef<HTMLDivElement | null>(null);
  useClickOutside(menuRef, () => setIsMenuOpen(false));

  return (
    <>
      <Backdrop isActive={isMenuOpen} />
      <div
        ref={menuRef}
        className={` ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-[100%]'
        } transition-transform duration-300 fixed z-[120] h-screen flex bg-cool-gray-2 rounded-r-md`}
      >
        {/* LEFT CONTENT */}
        <div className="h-screen w-[460px] bg-white rounded-r-md">
          <div className="max-w-[304px] mx-auto py-10">
            {/* CLOSE BTN */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="font-exo text-sm flex items-center gap-2 hover:bg-light-gray py-2 px-4 rounded-md transition-colors duration-200 mb-16"
            >
              <XMarkIcon className="h-4 w-4" />
              <span>Fermer</span>
            </button>

            {/* MENU NAVIGATION */}
            <div className="flex gap-1 text-lg font-exo font-light flex-col w-full items-start">
              {menuNavigation.map((item, index) => (
                <button
                  key={index}
                  className="flex gap-1 items-center justify-between w-full py-2 px-4 hover:bg-light-gray rounded-md transition-colors duration-200"
                >
                  <span>{item.label}</span>
                  {item.icon}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="h-screen w-[416px] pt-28">
          <MenuCollection closeMenu={() => setIsMenuOpen(false)} />
        </div>
      </div>
    </>
  );
};
export default Menu;

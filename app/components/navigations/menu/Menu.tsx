'use client';

import {
  ArrowRightIcon,
  ArrowTopRightOnSquareIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { Backdrop } from '../..';
import React, { useRef } from 'react';
import useClickOutside from '@/app/hooks/useClickOutside';
import MenuCollection from './MenuCollection';
import MenuAccount from './MenuAccount';
import MenuNotifications from './MenuNotifications';
import Link from 'next/link';
import { set } from 'mongoose';

export const menuNavigation = [{ label: 'À propos de nous', link: '/about' }];

interface MenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

type MenuContentType = 'fleet' | 'journal' | 'notifications' | 'account';

const Menu: React.FC<MenuProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [menuContent, setMenuContent] =
    React.useState<MenuContentType>('fleet');

  useClickOutside(menuRef, () => {
    setIsMenuOpen(false);
    setMenuContent('fleet');
  });

  const handleOpenFleet = () => {
    setMenuContent('fleet');
  };

  const handleOpenJournal = () => {
    setMenuContent('journal');
  };

  const handleOpenNotifications = () => {
    setMenuContent('notifications');
  };

  const handleOpenAccount = () => {
    setMenuContent('account');
  };

  const navigationStyle =
    'flex gap-1 items-center justify-between w-full py-2 px-4 hover:bg-light-gray rounded-md transition-colors duration-200';

  return (
    <>
      <Backdrop isActive={isMenuOpen} />
      <div
        ref={menuRef}
        className={` ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-[100%]'
        } transition-transform duration-300 fixed z-[120] h-screen top-0 flex bg-cool-gray-2 rounded-r-md`}
      >
        {/* LEFT CONTENT */}
        <div className="h-screen w-[460px] bg-white rounded-r-md">
          <div className="max-w-[304px]  mx-auto py-10">
            {/* CLOSE BTN */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="font-exo text-sm flex items-center gap-2 hover:bg-light-gray py-2 px-4 rounded-md transition-colors duration-200 mb-16"
            >
              <XMarkIcon className="h-4 w-4" />
              <span>Fermer</span>
            </button>

            {/* MENU NAVIGATION */}
            <div className="flex flex-col justify-between h-full">
              <div className="flex gap-1 text-lg font-exo font-light flex-col w-full items-start">
                <button onClick={handleOpenFleet} className={navigationStyle}>
                  <span>Nos Véhicules</span>
                  <ArrowRightIcon className="h-4 w-4" />
                </button>

                <button onClick={handleOpenJournal} className={navigationStyle}>
                  <span>Le journal</span>
                  <ArrowRightIcon className="h-4 w-4" />
                </button>

                <button
                  onClick={handleOpenNotifications}
                  className={navigationStyle}
                >
                  <span>Notifications</span>
                  <ArrowRightIcon className="h-4 w-4" />
                </button>

                <Link href={'/about'} className={navigationStyle}>
                  <span>À propos de nous</span>
                </Link>

                <button onClick={handleOpenAccount} className={navigationStyle}>
                  <div className="flex flex-col items-start gap-1">
                    <span className="">Mon compte</span>
                    <span className="text-sm">Nehemie Mombanga</span>
                  </div>
                  <ArrowRightIcon className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="h-screen w-[416px] overflow-hidden">
          <div className="grid grid-cols-1">
            {menuContent === 'fleet' && (
              <MenuCollection closeMenu={() => setIsMenuOpen(false)} />
            )}
            {menuContent === 'notifications' && <MenuNotifications />}
            {menuContent === 'account' && (
              <MenuAccount closeMenu={() => setIsMenuOpen(false)} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Menu;

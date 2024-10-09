'use client';

import { Backdrop, Logo } from '..';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { navbarNavigation } from '@/app/constants';
import { cn } from '@/utils';
import RollDown from './RollDown';

const NavbarV3: React.FC = () => {
  const session = useSession();
  const isUserLoggedIn = !!session.data?.user?.email;

  const currentPath = usePathname();
  const isDarkBackground =
    currentPath.includes('/collection') || currentPath.includes('/account');

  const navbarRef = useRef<HTMLDivElement>(null);

  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const handleScroll = () => setHasScrolled(window.pageYOffset > 350);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Block scroll when dropdown is open
  useEffect(() => {
    if (isDropdownVisible) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    }

    // Cleanup when component unmounts
    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    };
  }, [isDropdownVisible]);

  const closeDropdown = () => setIsDropdownVisible(false);

  const isDropdownOpen = isDropdownVisible;

  return (
    <>
      <Backdrop isActive={isDropdownOpen} />

      <nav ref={navbarRef}>
        <div
          className={`${
            hasScrolled || isDropdownOpen || isDarkBackground
              ? 'text-black bg-opacity-85 backdrop-blur-xl'
              : 'text-white bg-opacity-0'
          }  fixed p-sides-2 w-full z-[150] bg-white font-sans top-0 py-1.5 transition-all duration-300`}
        >
          <div className="flex items-center justify-between h-14 max-[1024px]:h-10">
            <div onClick={closeDropdown}>
              <Logo
                className={`size-6 transition-filter duration-300 ${
                  (hasScrolled || isDropdownOpen || isDarkBackground) &&
                  'filter'
                }`}
                dark
              />
            </div>

            <div className="max-md:hidden flex items-center space-x-6 text-sm">
              {navbarNavigation.map((navItem, index) => {
                const isActive =
                  currentPath === navItem.link ||
                  currentPath.includes(navItem.link);
                return (
                  <Link
                    href={navItem.link}
                    key={index}
                    onClick={closeDropdown}
                    className={cn(
                      `${
                        hasScrolled || isDropdownOpen || isDarkBackground
                          ? 'text-dark-gray hover:text-black'
                          : 'text-neutral-200 hover:text-white'
                      } transition-font duration-200 px-1.5 py-0.5 rounded-md font-normal`,
                      {
                        'text-black font-normal':
                          isActive &&
                          (hasScrolled || isDropdownOpen || isDarkBackground),
                        'text-white':
                          isActive &&
                          !(hasScrolled || isDropdownOpen || isDarkBackground),
                      }
                    )}
                  >
                    {navItem.label}
                  </Link>
                );
              })}
              {!isUserLoggedIn ? (
                <Link
                  href="/sign-in"
                  onClick={closeDropdown}
                  className={cn(
                    `${
                      hasScrolled || isDropdownOpen || isDarkBackground
                        ? 'text-dark-gray hover:text-black'
                        : 'text-neutral-200 hover:text-white'
                    } transition-font duration-200 px-1.5 py-0.5 rounded-md font-normal`
                  )}
                >
                  Connexion
                </Link>
              ) : (
                <Link
                  href="/account"
                  onClick={closeDropdown}
                  className={cn(
                    `${
                      hasScrolled || isDropdownOpen || isDarkBackground
                        ? 'text-dark-gray hover:text-black'
                        : 'text-neutral-200 hover:text-white'
                    } transition-font duration-200 px-1.5 py-0.5 rounded-md font-normal `
                  )}
                >
                  Mon Espace
                </Link>
              )}
            </div>

            <div className="md:hidden text-sm">
              <button
                onClick={() => setIsDropdownVisible((prev) => !prev)}
                className="p-2"
              >
                {isDropdownVisible ? 'Close' : 'Menu'}
              </button>
            </div>
          </div>
        </div>

        <RollDown
          hasSession={isUserLoggedIn}
          isDropdownOpen={isDropdownVisible}
          closeDropDown={closeDropdown}
        />
      </nav>
    </>
  );
};

export default NavbarV3;

'use client';

import { navbarNavigation } from '@/app/constants';
import { Logo } from '..';
import { Bars2Icon, UserIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Menu from './menu/Menu';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';

const Navbar = () => {
  const session = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isHomePage = pathname === '/';
  return (
    <>
      <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <nav
        className={`p-sides  w-full  z-[100]
        ${isHomePage ? 'text-white fixed' : 'text-black sticky top-0 bg-white'}
      `}
      >
        <div className="navbar mx-auto max-w-wide w-full">
          <div className="col-span-1 flex items-center gap-2">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="flex items-center text-md gap-2 hover:bg-black hover:bg-opacity-20 transition-colors duration-200 px-1.5 py-0.5 rounded-md"
            >
              <Bars2Icon className="h-6 w-6" />
              {/* <span>Menu</span> */}
            </button>
            <Logo />
          </div>

          {/* NAVIGATION LINKS */}
          <div className="flex items-center gap-6  text-sm whitespace-nowrap max-lg:hidden">
            {navbarNavigation.map((navigation, index) => (
              <Link
                href={navigation.link}
                key={index}
                className="hover:bg-black hover:bg-opacity-20 transition-colors duration-200 px-1.5 py-0.5 rounded-md"
              >
                {navigation.label}
              </Link>
            ))}
          </div>

          {/* CONNECTION */}
          <div className="col-start-3 justify-end flex items-center gap-5 text-sm">
            <Link
              href={`${
                session.data?.user?.email !== undefined
                  ? '/account'
                  : '/sign-in'
              }`}
              className="flex items-center gap-2 bg-dark-gray text-white px-4 py-2 rounded-md transition-colors duration-200"
            >
              <UserIcon className="h-4 max-md:h-5" />
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;

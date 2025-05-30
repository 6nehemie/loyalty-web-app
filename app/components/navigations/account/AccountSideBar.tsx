'use client';

import { useState } from 'react';
import { accountNavigation } from '@/app/constants/components';
import useFetchUserData from '@/app/hooks/useFetchUserData';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const AccountSideBar = () => {
  const pathname = usePathname();
  const user = useFetchUserData();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (link: string) => pathname === link;

  const handleSignOut = () => {
    signOut();
  };

  return (
    <nav className="lg:max-w-[300px] w-full pt-10 bg-white">
      <div className="mb-6">
        <h5 className="font-medium">Nehemie Mombanga</h5>
        <p className="text-sm text-gray-500">Loyalty-rc</p>
      </div>

      {/* Toggle button for mobile devices */}
      <button
        className="lg:hidden text-blue-600 mb-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? 'Masquer' : 'Afficher'} le menu
      </button>

      {/* Navigation items */}
      <ul className={`space-y-2 ${isOpen ? 'block' : 'hidden lg:block'}`}>
        {accountNavigation.map((item, index) => (
          <li key={index}>
            <Link
              href={item.link}
              className={`block p-2 rounded-lg transition-colors duration-200 ${
                isActive(item.link)
                  ? 'bg-gray-100 font-medium'
                  : 'hover:bg-gray-50'
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
        {/* Admin link for users with admin role */}
        {user?.role === 'ADMIN' && (
          <li>
            <Link
              href="/admin"
              className={`block p-2 rounded-lg transition-colors duration-200 ${
                isActive('/admin')
                  ? 'bg-gray-100 font-medium'
                  : 'hover:bg-gray-50'
              }`}
            >
              Admin
            </Link>
          </li>
        )}
        <li
          className="font-medium underline cursor-pointer"
          onClick={handleSignOut}
        >
          Se déconnecter
        </li>
      </ul>
    </nav>
  );
};

export default AccountSideBar;

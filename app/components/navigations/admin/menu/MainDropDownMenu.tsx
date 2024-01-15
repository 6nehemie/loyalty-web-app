'use client';

import { useClickOutside } from '@/app/hooks';
import { ArrowTopRightIcon, GearIcon } from '@radix-ui/react-icons';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';

interface IMainDropDownMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
  fullName: string;
  email: string;
}

const MainDropDownMenu: React.FC<IMainDropDownMenuProps> = ({
  isMenuOpen,
  setIsMenuOpen,
  fullName,
  email,
}) => {
  const router = useRouter();
  const menuRef = useRef<HTMLDivElement>(null);
  useClickOutside(menuRef, () => setIsMenuOpen(false));

  const linkStyle =
    'flex justify-between items-center px-5 py-2 w-[100%] hover:bg-neutral-800 hover:text-white transition-colors duration-200';

  const handleSignOut = () => {
    signOut();
    setIsMenuOpen(false);
    router.push('/sign-in');
  };

  return (
    <div
      ref={menuRef}
      className={` ${
        isMenuOpen ? 'visible opacity-100' : 'opacity-0 invisible'
      } absolute z-[100] right-0 top-10 w-64 bg-neutral-900 border border-neutral-700 py-5 rounded-lg  transition-all duration-200`}
    >
      <div className="px-5 pb-3.5">
        <p className="text-white">{fullName}</p>
        <p>{email}</p>
      </div>

      <div className="flex flex-col w-full">
        <Link
          href={`/admin`}
          onClick={() => setIsMenuOpen(false)}
          className={linkStyle}
        >
          Dashboard
        </Link>
        <Link
          href={`/admin`}
          onClick={() => setIsMenuOpen(false)}
          className={linkStyle}
        >
          <span>Parametres</span>
          <GearIcon className="h-4 w-4" />
        </Link>
      </div>

      <div className="px-5">
        <div className="w-full my-2.5 border-b border-b-neutral-700"></div>
      </div>

      <div className="flex flex-col w-full">
        <Link
          href={`/`}
          target="_blank"
          onClick={() => setIsMenuOpen(false)}
          className={linkStyle}
        >
          <span>Loyalty Homepage</span>
          <ArrowTopRightIcon className="h-4 w-4" />
        </Link>
        <button onClick={handleSignOut} className={linkStyle}>
          <span>Déconexion</span>
        </button>
      </div>
    </div>
  );
};
export default MainDropDownMenu;

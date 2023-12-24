import { accountNavigation } from '@/app/constants/components';
import Link from 'next/link';
import { Button1 } from '../..';
import { signOut } from 'next-auth/react';

interface MenuAccountProps {
  closeMenu: () => void;
  isLoggedIn: boolean;
  showMenu?: boolean;
}

const MenuAccount: React.FC<MenuAccountProps> = ({ closeMenu, isLoggedIn }) => {
  const handleSignOut = () => {
    signOut();
    closeMenu();
  };
  return (
    <div
      className={`menu-content flex flex-col gap-5 items-start px-10 text-lg font-exo font-light`}
    >
      {isLoggedIn ? (
        <>
          {accountNavigation.map((item, index) => (
            <Link
              href={item.link}
              key={index}
              onClick={closeMenu}
              className="hover:bg-dark-gray hover:bg-opacity-10 py-1 px-2.5 rounded-md transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={'/contact'}
            onClick={closeMenu}
            className="hover:bg-dark-gray hover:bg-opacity-10 py-1 px-2.5 rounded-md transition-colors duration-200"
          >
            Contact & Assistance
          </Link>
          <button
            onClick={handleSignOut}
            className="hover:bg-dark-gray hover:bg-opacity-10 py-1 px-2.5 rounded-md transition-colors duration-200"
          >
            Se Déconnecter
          </button>
        </>
      ) : (
        <div className="flex flex-col w-full gap-4">
          <Button1 link="/sign-in" light>
            Se connecter
          </Button1>
          <Button1 link="/sign-up">Créer un compte</Button1>
        </div>
      )}
    </div>
  );
};
export default MenuAccount;

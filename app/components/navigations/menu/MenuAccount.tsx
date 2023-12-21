import { accountNavigation } from '@/app/constants/components';
import Link from 'next/link';

interface MenuAccountProps {
  closeMenu: () => void;
  showMenu?: boolean;
}

const MenuAccount: React.FC<MenuAccountProps> = ({ closeMenu, showMenu }) => {
  return (
    <div
      className={`menu-content flex flex-col gap-5 items-start px-10 text-lg font-exo font-light`}
    >
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
        onClick={closeMenu}
        className="hover:bg-dark-gray hover:bg-opacity-10 py-1 px-2.5 rounded-md transition-colors duration-200"
      >
        Se Déconnecter
      </button>
    </div>
  );
};
export default MenuAccount;

import { navbarNavigation } from '@/app/constants';
import { cn } from '@/utils';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface INavbarV2Props {
  hasSession: boolean;
  isDropdownOpen: boolean;
  closeDropDown: () => void;
}

const RollDown: React.FC<INavbarV2Props> = ({
  hasSession,
  isDropdownOpen,
  closeDropDown,
}) => {
  const pathname = usePathname();

  return (
    <div
      className={`
        fixed lg:hidden z-[149] top-0 left-0 right-0 pt-[126px] pb-[28px] transition-all duration-300 rounded-b-xl bg-white ease-in-out
        ${
          isDropdownOpen
            ? 'visible translate-y-0'
            : 'invisible -translate-y-[100%]'
        }
      `}
    >
      <div className="p-10 h-full">
        <div className="flex flex-col space-y-6 text-black">
          {navbarNavigation.map((navigation, index) => {
            const isActive =
              pathname === navigation.link ||
              pathname.includes(navigation.link);

            return (
              <Link
                href={navigation.link}
                key={index}
                onClick={closeDropDown}
                className={cn('hover:underline transition-all', {
                  'text-blue-500': isActive,
                  'text-black': !isActive,
                })}
              >
                {navigation.label}
              </Link>
            );
          })}

          {/* Session-based logic */}
          {!hasSession ? (
            <Link
              href={'/sign-in'}
              onClick={closeDropDown}
              className="hover:underline text-black"
            >
              Connexion
            </Link>
          ) : (
            <>
              <Link
                href={'/account'}
                onClick={closeDropDown}
                className="hover:underline text-black"
              >
                Mon Espace
              </Link>

              <button
                onClick={() => {
                  signOut();
                  closeDropDown();
                }}
                className={'hover:underline text-black w-max'}
              >
                Deconnexion
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default RollDown;

'use client';

import { PersonIcon, TriangleDownIcon } from '@radix-ui/react-icons';
import { Backdrop, Logo } from '..';
import Link from 'next/link';
import { Bars2Icon } from '@heroicons/react/24/outline';
import { useSession } from 'next-auth/react';
import { useEffect, useRef, useState } from 'react';

const NavbarV2 = () => {
  const session = useSession();
  const hasSession = !!session.data?.user?.email;

  const dropdownRef = useRef<HTMLDivElement>(null);
  const collectionRef = useRef<HTMLDivElement>(null);
  const othersRef = useRef<HTMLDivElement>(null);

  const [isCollectionHovered, setIsCollectionHovered] = useState(false);
  const [isOthersHovered, setIsOthersHovered] = useState(false);

  useEffect(() => {
    const collection = collectionRef.current;
    const others = othersRef.current;
    const dropdown = dropdownRef.current;

    if (collection) {
      collection.addEventListener('mouseenter', () => {
        setIsCollectionHovered(true);
      });
    }

    if (others) {
      others.addEventListener('mouseenter', () => {
        setIsOthersHovered(true);
      });
    }

    if (dropdown) {
      dropdown.addEventListener('mouseleave', () => {
        setIsCollectionHovered(false);
        setIsOthersHovered(false);
      });
    }
  }, []);

  const isDropdownOpen = isCollectionHovered || isOthersHovered;

  const navBtnStyle = `${isDropdownOpen} h-8 px-2.5 font-light rounded-sm flex gap-1 items-center transition-colors duration-200`;

  return (
    <>
      <Backdrop isActive={isDropdownOpen} />

      <nav ref={dropdownRef} className="">
        <div
          className={`${
            isDropdownOpen ? 'bg-white text-black' : 'text-white'
          } fixed p-sides-2 w-full z-[150] font-sans top-0 py-2 transition-all duration-200`}
        >
          <div
            className={`visible lg:hidden flex justify-between items-center h-16 w-full max-[1024px]:h-10`}
          >
            <Logo />

            <div className="h-10 w-10 rounded-md bg-white text-dark-gray flex items-center justify-center">
              <Bars2Icon className="h-6 w-6" />
            </div>
          </div>

          <div className=" max-lg:hidden">
            <div className="main-gird-layout items-center h-16 max-[1024px]:h-10">
              <Logo />

              <div className="col-start-4 xl:col-start-3 flex items-center gap-4 text-sm">
                <div
                  ref={collectionRef}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <span>Collection</span>
                  <div>
                    <TriangleDownIcon className="h-3" />
                  </div>
                </div>

                <div className="h-5 border border-r-neutral-800"></div>

                <div
                  ref={othersRef}
                  className="flex items-center gap-2 whitespace-nowrap cursor-pointer"
                >
                  <span>Découvrir Loyalty.rc</span>
                  <div>
                    <TriangleDownIcon className="h-3" />
                  </div>
                </div>
              </div>

              {!hasSession ? (
                <div className="col-start-[-1] row-start-1 col-span-6 flex items-center gap-4 text-sm">
                  <Link
                    href={'/sign-up'}
                    className={`${
                      isDropdownOpen
                        ? 'hover:border-neutral-900'
                        : 'hover:border-neutral-100'
                    } ${navBtnStyle} font-normal border border-neutral-400 `}
                  >
                    Créer un compte
                  </Link>

                  <Link
                    href={'/sign-in'}
                    className={`${
                      isDropdownOpen
                        ? 'text-white bg-dark-gray'
                        : 'bg-white text-dark-gray'
                    } ${navBtnStyle} font-normal `}
                  >
                    <span>Se Connecter</span>
                    <PersonIcon className="h-6" />
                  </Link>
                </div>
              ) : (
                <div className="justify-self-end col-start-[-1] row-start-1 col-span-6 flex items-center gap-4 text-sm">
                  {/* <Link
                  href={'/sign-up'}
                  className={`${navBtnStyle}font-normal border border-neutral-400 hover:border-neutral-100`}
                >
                  Créer un compte
                </Link> */}

                  <Link
                    href={'/account'}
                    className={` ${
                      isDropdownOpen
                        ? 'text-white bg-dark-gray'
                        : 'bg-white text-dark-gray'
                    } font-normal ${navBtnStyle}`}
                  >
                    <span>Nehemie</span>
                    <PersonIcon className="h-6" />
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* //? Collection */}
          <div
            className={`${
              isCollectionHovered ? 'visible' : 'hidden'
            }  h-[400px] transition-all duration-200`}
          ></div>
        </div>
      </nav>
    </>
  );
};
export default NavbarV2;

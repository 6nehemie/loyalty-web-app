'use client';

import { Backdrop } from '@/app/components';
import NewProduct from '@/app/components/sections/admin/collection/NewProduct';
import {
  PlusCircleIcon,
  PlusIcon,
  RectangleGroupIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const FleetNav = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationStyle =
    'flex items-center gap-2 pb-5 px-5 hover:text-white transition-colors duration-200';

  return (
    <>
      <div className=" w-full border-b-[1px] border-neutral-700 mb-5">
        <div className="flex justify-between">
          <div className="flex items-center">
            <Link
              href="/admin/fleet"
              className={`${
                pathname === '/admin/fleet'
                  ? 'text-white border-b-[1.2px] border-white'
                  : 'text-neutral-400'
              } ${navigationStyle}`}
            >
              <span className="">
                <RectangleGroupIcon className={`h-5 w-5`} />
              </span>
              Tableau de bord
            </Link>

            <Link
              href="/admin/fleet/new"
              className={`
		 ${
       pathname === '/admin/fleet/new'
         ? 'text-white border-b-[1.2px] border-white'
         : 'text-neutral-400'
     } 
     ${navigationStyle}`}
            >
              <span className="">
                <PlusCircleIcon className={`h-5 w-5`} />
              </span>
              Ajouter un véhicule
            </Link>
          </div>

          <div>
            <button
              onClick={() => setIsMenuOpen(true)}
              className="flex items-center gap-1 bg-white text-dark-gray text-sm rounded-md py-1.5 px-3 hover:brightness-90 transition-all duration-200"
            >
              <PlusIcon className="h-4 w-4" />
              <span>Ajouter un véhicule</span>
            </button>
          </div>
        </div>
      </div>

      <>
        <Backdrop isActive={isMenuOpen} />
        <NewProduct
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={() => setIsMenuOpen(false)}
        />
      </>
    </>
  );
};
export default FleetNav;

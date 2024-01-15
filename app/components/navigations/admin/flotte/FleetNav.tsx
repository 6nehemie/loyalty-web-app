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
      <div className="w-full mb-5">
        <div className="flex text-sm justify-between">
          <div className="flex items-center">
            <h2 className="text-xl font-medium">Collection</h2>
          </div>

          <div>
            <button
              onClick={() => setIsMenuOpen(true)}
              className="flex items-center font-normal gap-1 bg-white text-dark-gray text-sm rounded-md py-2.5 px-3 hover:bg-neutral-400 transition-all duration-200"
            >
              <PlusIcon className="h-4 w-4" strokeWidth={2} />
              <span>Ajouter Nouveau</span>
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

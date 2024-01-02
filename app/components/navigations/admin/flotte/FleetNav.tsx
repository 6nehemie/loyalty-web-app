'use client';

import {
  PlusCircleIcon,
  RectangleGroupIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const FleetNav = () => {
  const pathname = usePathname();

  const navigationStyle =
    'flex items-center gap-2 pb-5 px-5 hover:text-white transition-colors duration-200';

  return (
    <div className=" w-full border-b-[1px] border-neutral-700 mb-5">
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
    </div>
  );
};
export default FleetNav;

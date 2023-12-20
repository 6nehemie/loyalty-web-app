'use client';

import { accountNavigation } from '@/app/constants/components';
import {
  ArrowRightOnRectangleIcon,
  ArrowTopRightOnSquareIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const AccountSideBar = () => {
  const pathname = usePathname();

  const handleCurrentPath = (link: string) => {
    return pathname === link ? 'text-dark-gray font-medium' : '';
  };
  return (
    <nav className="w-[300px] pt-[104px] font-exo">
      <div className="flex flex-col gap-6 p-2 text-cool-gray-1">
        {accountNavigation.map((item, index) => (
          <Link
            href={item.link}
            key={index}
            className={`flex items-center gap-4 hover:text-black transition-colors duration-200 ${handleCurrentPath(
              item.link
            )} `}
          >
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </Link>
        ))}
        <button className="flex items-center gap-4 hover:text-black transition-colors duration-200">
          <span>
            <ArrowRightOnRectangleIcon className="h-5 w-5" />
          </span>
          <span>Déconnexion</span>
        </button>
      </div>
    </nav>
  );
};
export default AccountSideBar;

'use client';

import {
  ArrowDownTrayIcon,
  ArrowRightOnRectangleIcon,
  BellIcon,
  ChatBubbleLeftRightIcon,
  CubeIcon,
  Squares2X2Icon,
  UsersIcon,
} from '@heroicons/react/24/outline';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
  const pathname = usePathname();
  console.log(pathname);

  const adminNavigation = [
    {
      title: 'Dashboard',
      href: '/admin',
      icon: <Squares2X2Icon className="w-4 h-4" strokeWidth={1} />,
    },
    {
      title: 'Fleet',
      href: '/admin/fleet',
      icon: <CubeIcon className="w-4 h-4" strokeWidth={1} />,
    },
    {
      title: 'Users',
      href: '/admin/users',
      icon: <UsersIcon className="w-4 h-4" strokeWidth={1} />,
    },
    {
      title: 'Messages',
      href: '/admin/messages',
      icon: <ChatBubbleLeftRightIcon className="w-4 h-4" strokeWidth={1} />,
    },
    {
      title: 'Notifications',
      href: '/admin/notifications',
      icon: <BellIcon className="w-4 h-4" strokeWidth={1} />,
    },
  ];

  const basicNavigationStyle =
    'hover:bg-zinc-900 rounded-md border hover:border-zinc-800 p-2 aspect-square transition-all duration-200 hover:text-white ';
  const btnActionStyle =
    'hover:bg-zinc-900 rounded-md border border-transparent hover:border-zinc-800 p-2 aspect-square transition-all duration-200 text-neutral-400 hover:text-white';

  return (
    <div className="fixed bg-zinc-950 bg-opacity-40 h-screen px-5 py-8">
      <Link href="/" className="">
        <div className={`${btnActionStyle} rotate-90`}>
          <ArrowDownTrayIcon className="h-4 w-4" />
        </div>
      </Link>

      <div className="flex flex-col gap-5 mt-12">
        {adminNavigation.map((item) => (
          <Link href={item.href} key={item.title}>
            <div
              className={`${basicNavigationStyle}
			 ${
         pathname.split('/')[2] === item.href.split('/')[2]
           ? 'bg-zinc-900 border-zinc-800 text-white'
           : 'border-transparent text-neutral-400'
       } 
			  `}
            >
              {item.icon}
            </div>
          </Link>
        ))}
      </div>

      <button onClick={() => signOut()} className="absolute bottom-8">
        <div className={`${btnActionStyle}`}>
          <ArrowRightOnRectangleIcon className="h-4 w-4" />
        </div>
      </button>
    </div>
  );
};
export default Sidebar;

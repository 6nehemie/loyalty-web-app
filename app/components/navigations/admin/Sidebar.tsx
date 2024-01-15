'use client';

import {
  ChatBubbleLeftRightIcon,
  CubeIcon,
  Squares2X2Icon,
  UsersIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
  const pathname = usePathname();

  const handleActiveBtn = (param: string | undefined) => {
    if (pathname.split('/')[2] === param) return 'bg-neutral-800 text-white';
    return '';
  };

  const basicNavigationStyle =
    'flex items-center gap-2 w-full h-max block hover:bg-neutral-800 hover:text-white transition-colors duration-200 py-2 px-5 rounded-sm';

  return (
    <div className="admin-sidebar bg-neutral-900 border-r border-r-neutral-800 py-8 px-1 font-light text-sm text-neutral-400">
      <Link
        href="/admin"
        className={`${basicNavigationStyle} ${handleActiveBtn(undefined)}`}
      >
        <Squares2X2Icon className="w-4 h-4" strokeWidth={1} />
        <span>Tableau de bord</span>
      </Link>

      <Link
        href="/admin/collection"
        className={`${basicNavigationStyle} ${handleActiveBtn('collection')}`}
      >
        <CubeIcon className="w-4 h-4" strokeWidth={1} />
        <span>Collection</span>
      </Link>

      <Link
        href="/admin/users"
        className={`${basicNavigationStyle} ${handleActiveBtn('users')}`}
      >
        <UsersIcon className="w-4 h-4" strokeWidth={1} />
        <span>Utilisateurs</span>
      </Link>

      <Link
        href="/admin/messages"
        className={`${basicNavigationStyle} ${handleActiveBtn('messages')}`}
      >
        <ChatBubbleLeftRightIcon className="w-4 h-4" strokeWidth={1} />
        <span>Messages</span>
      </Link>
    </div>
  );
};
export default Sidebar;

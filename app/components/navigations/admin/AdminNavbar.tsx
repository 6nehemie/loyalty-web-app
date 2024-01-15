import { getAdminUser } from '@/app/utils/adminUtils';
import { AdminNavMenu, Logo } from '../..';
import { ArrowTopRightIcon, SlashIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

const AdminNavbar = async () => {
  const admin = await getAdminUser();
  const linkHoverStyle = 'hover:text-white transition-colors duration-200';

  return (
    <nav className="sticky z-[100] top-0 px-6 h-16 flex items-center justify-between bg-neutral-900 border-b border-b-zinc-700">
      <div className="flex gap-2 items-center">
        <Logo />
        <SlashIcon className="h-5 w-5 text-neutral-700" />
        <div className="flex gap-3 items-center">
          <p className="text-sm font-light">
            {admin?.firstName} {admin?.lastName}
          </p>
          <div className="text-xs text-neutral-400 px-2.5 py-1 rounded-md bg-neutral-800">
            <span>Admin</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-6 text-sm font-light text-neutral-400">
        <Link
          href="/"
          target="_blank"
          className={`${linkHoverStyle} flex items-center gap-1`}
        >
          <span>Loyalty Homepage</span>
          <ArrowTopRightIcon className="h-4 w-4" />
        </Link>

        <AdminNavMenu
          adminFullName={`${admin?.firstName!} ${admin?.lastName!}`}
          adminEmailAddress={admin?.email!}
        />
      </div>
    </nav>
  );
};
export default AdminNavbar;

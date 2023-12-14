import { navbarNavigation } from '@/app/constants';
import { Logo } from '..';
import { Bars2Icon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="px-32 fixed w-full text-white">
      <div className="navbar mx-auto max-w-wide w-full">
        <div className="col-span-1 flex items-center gap-2">
          <Bars2Icon className="h-6 w-6" />
          <Logo />
        </div>

        {/* NAVIGATION LINKS */}
        <div className="flex items-center gap-6 uppercase text-sm whitespace-nowrap">
          {navbarNavigation.map((navigation, index) => (
            <Link href={navigation.link} key={index}>
              {navigation.label}
            </Link>
          ))}
        </div>

        {/* CONNECTION */}
        <div className="justify-end flex items-center gap-5 uppercase text-sm">
          <Link href={'sign-in'}>Connexion</Link>
          <Link
            href={'sign-up'}
            className="bg-dark-gray text-white px-4 py-2 rounded-md"
          >
            Inscription
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;

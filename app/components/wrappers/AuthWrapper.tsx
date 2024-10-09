import Link from 'next/link';
import Logo from '../logos/Logo';
import { X } from 'lucide-react';
import { BorderTrail } from '../animations/BorderTrail';
import { cn } from '@/utils';

interface AuthWrapperProps {
  title: string;
  children: React.ReactNode;
  innerWidth?: string;
  outerWidth?: string;
}

const AuthWrapper: React.FC<AuthWrapperProps> = ({
  title,
  children,
  innerWidth = '400px',
  outerWidth = '576px',
}) => {
  return (
    <div
      className={cn(
        `relative md:border-[2px] md:border-app-gray-2 md:border-opacity-15 h-max max-md:h-full md:max-w-[576px] w-full bg-dark-gray py-10 p-side md:rounded-xl md-box-shadow`,
        {}
      )}
    >
      <BorderTrail
        style={{
          boxShadow:
            '0px 0px 60px 30px rgb(255 255 255 / 50%), 0 0 100px 60px rgb(0 0 0 / 50%), 0 0 140px 90px rgb(0 0 0 / 50%)',
        }}
        size={200}
      />

      <div className="">
        <Link
          href={'/'}
          className="max-md:hidden absolute top-6 left-6 p-1.5 rounded-full bg-app-gray-2 bg-opacity-25 group"
        >
          <X className="size-6 text-app-gray-2 group-hover:text-white transition-colors duration-200" />
        </Link>

        <div className={`max-w-[${innerWidth}] w-full space-y-10 mx-auto`}>
          <div className="flex flex-col items-center space-y-4">
            <Logo />
            <h1 className="text-2xl">{title}</h1>
          </div>

          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthWrapper;

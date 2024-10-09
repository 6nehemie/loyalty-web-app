import { cn } from '@/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface LogoProps {
  className?: string;
  dark?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className, dark }) => {
  return (
    <Link href={'/'} className="font-exo font-medium">
      <Image
        src={
          'https://utfs.io/f/AkDgHfNpCyfw5mqQ6tyFBOLpHMkSzIx2jDWXbtiogvwFPUGJ'
        }
        alt="logo"
        width={36}
        height={36}
        className={cn('', {
          [`${className}`]: className,
        })}
      />
    </Link>
  );
};
export default Logo;

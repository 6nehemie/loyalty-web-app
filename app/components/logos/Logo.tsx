import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href={'/'} className="font-exo font-medium">
      {/* <span>LOYALTY.RC</span> */}
      <Image
        src={
          'https://utfs.io/f/AkDgHfNpCyfw5mqQ6tyFBOLpHMkSzIx2jDWXbtiogvwFPUGJ'
        }
        alt="logo"
        width={40}
        height={40}
      />
    </Link>
  );
};
export default Logo;

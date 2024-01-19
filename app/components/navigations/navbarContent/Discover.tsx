import { signIn } from '@/app/constants';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import Link from 'next/link';

interface IDiscoverProps {
  isDropdownOpen: boolean;
  closeDropDown: () => void;
}

const Discover: React.FC<IDiscoverProps> = ({
  isDropdownOpen,
  closeDropDown,
}) => {
  const linkStyle = 'w-max';

  return (
    <div
      className={`
  fixed max-lg:hidden z-[149] top-0 left-0 right-0 pt-[126px] pb-[98px]  transition-all duration-300 rounded-b-lg bg-white ease-in-out
  ${
    isDropdownOpen ? 'visible translate-y-0' : 'invisible -translate-y-[100%]'
  }  `}
    >
      <div className="main-gird-layout h-full">
        <div className="col-start-3 max-[1280px]:col-start-2 col-span-3">
          <div className="flex flex-col gap-2 mb-6">
            <Link
              href={`/about`}
              onClick={closeDropDown}
              className={`${linkStyle}`}
            >
              <span>À propos</span>
            </Link>
            <Link href={`/`} onClick={closeDropDown} className={`${linkStyle}`}>
              Nous contacter
            </Link>
            <Link
              href={`/blog`}
              onClick={closeDropDown}
              className={`${linkStyle}`}
            >
              Journal
            </Link>
          </div>

          <div className="flex flex-col gap-2 text-sm text-dark-gray font-light">
            <Link
              href={`/faq`}
              onClick={closeDropDown}
              className={`${linkStyle}`}
            >
              FAQ
            </Link>
            <Link
              href={`/conditions`}
              onClick={closeDropDown}
              className={`${linkStyle}`}
            >
              CGV
            </Link>
          </div>
        </div>

        <div className="col-end-[-3] col-span-2 aspect-square overflow-hidden rounded-md">
          <Image src={signIn.image} width={250} height={200} alt="image" />
        </div>
      </div>
    </div>
  );
};
export default Discover;

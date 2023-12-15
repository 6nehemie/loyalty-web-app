import { fleet } from '@/app/constants';
import Image from 'next/image';
import Link from 'next/link';

interface MenuCollectionProps {
  closeMenu: () => void;
}

const MenuCollection: React.FC<MenuCollectionProps> = ({ closeMenu }) => {
  return (
    <div className="flex flex-col gap-2 max-w-[239px] w-full mx-auto">
      {fleet.collection.map((car, index) => {
        if (index < 4)
          return (
            <Link
              href={`${car.link}`}
              key={index}
              onClick={closeMenu}
              className="flex flex-col gap-3 items-center rounded-md py-3 px-4 transition-colors duration-300 hover:bg-white"
            >
              <Image src={car.image} alt={car.title} width={239} height={130} />
              <p>{car.title}</p>
            </Link>
          );
      })}
    </div>
  );
};
export default MenuCollection;

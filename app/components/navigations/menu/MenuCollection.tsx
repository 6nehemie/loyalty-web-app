import useFetchCollection from '@/app/hooks/useFetchCollection';
import Image from 'next/image';
import Link from 'next/link';

interface MenuCollectionProps {
  closeMenu: () => void;
  showMenu?: boolean;
}

const MenuCollection: React.FC<MenuCollectionProps> = ({
  closeMenu,
  showMenu,
}) => {
  const collection = useFetchCollection() || [];

  return (
    <div className={`menu-content`}>
      <div className="flex flex-col gap-1 max-w-[239px] w-full mx-auto">
        {collection.length > 0 &&
          collection!.map((car, index) => {
            if (index < 4)
              return (
                <Link
                  href={`/fleet/${car.id}`}
                  key={index}
                  onClick={closeMenu}
                  className="flex flex-col gap-3 items-center rounded-md py-3 px-4 transition-colors duration-300 hover:bg-white"
                >
                  <Image
                    src={car.carImage!}
                    alt={`${car.make} ${car.model} image`}
                    width={239}
                    height={130}
                  />
                  <p>
                    {car.make} {car.model}
                  </p>
                </Link>
              );
          })}
      </div>
    </div>
  );
};
export default MenuCollection;

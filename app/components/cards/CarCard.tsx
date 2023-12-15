import {
  ArrowSmallRightIcon,
  InformationCircleIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';
import { Button1 } from '..';

interface CarCardProps {
  title: string;
  subtitle: string;
  price: number;
  image: string;
  href: string;
}

const CarCard: React.FC<CarCardProps> = ({
  image,
  price,
  subtitle,
  title,
  href,
}) => {
  return (
    <div className="relative carCard flex flex-col gap-12 bg-white rounded-md cursor-pointer">
      <div className="flex p-6 items-start justify-between">
        <div>
          <h2 className="text-lg font-semibold leading-tight">{title}</h2>
          <p>{subtitle}</p>
        </div>
        <InformationCircleIcon
          className="h-6 w-6 text-gray-400"
          aria-hidden="true"
        />
      </div>

      <div className="relative carImage px-1">
        <Image
          src={image}
          alt={title}
          width={503}
          height={216}
          className="w-full mx-auto"
        />
      </div>
      <div className="cardArrow absolute top-1/2 left-1/2 z-[50]">
        <div className="-translate-x-[50%] -translate-y-[50%]">
          <button className="flex font-exo items-center gap-2 text-white">
            <span>En savoir plus</span>
            <ArrowSmallRightIcon
              className="h-5"
              aria-hidden="true"
              strokeWidth={2}
            />
          </button>
        </div>
      </div>

      <div className="flex p-6 pt-12 items-center gap-4 justify-end text-sm">
        <p>À partir de {price}€/j</p>
        <Button1 link={href}>Réservez maintenant</Button1>
      </div>
    </div>
  );
};
export default CarCard;

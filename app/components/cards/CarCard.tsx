'use client';

import {
  ArrowSmallRightIcon,
  InformationCircleIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';
import { Button1 } from '..';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowRightIcon } from '@radix-ui/react-icons';

interface CarCardProps {
  title: string;
  subtitle: string;
  price: string;
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
    <div className="relative  carCard flex flex-col gap-12 bg-white rounded-xl cursor-pointer">
      <div className="flex p-8 items-start justify-between">
        <div>
          <h2 className="text-lg uppercase leading-tight">{title}</h2>
          <p className="text-sm">{subtitle}</p>
        </div>
        <InformationCircleIcon
          className="h-5 w-5 text-neutral-700"
          aria-hidden="true"
        />
      </div>

      <Link href={href} className="relative carImage px-1">
        <Image
          src={image}
          alt={title}
          width={503}
          height={216}
          className="w-full mx-auto"
        />
      </Link>

      <div className="cardArrow absolute top-1/2 left-1/2 z-[50]">
        <div className="-translate-x-[50%] -translate-y-[50%]">
          <Link
            href={href}
            className="flex items-center justify-center text-sm h-[52px] border-1.5 border-white rounded-md px-5 gap-2 text-white"
          >
            <span>En savoir plus</span>
            <ArrowRightIcon
              className="h-5"
              aria-hidden="true"
              strokeWidth={2}
            />
          </Link>
        </div>
      </div>

      <div className="flex flex-col p-8 items-center gap-4 justify-end text-sm">
        <p className="">À partir de €{price}.00 EUR</p>
        <Button1 link={'/reservation'} className="gap-2 w-full">
          <span>Réservez maintenant</span>
          <ArrowRightIcon className="h-4 w-4 " />
        </Button1>
      </div>
    </div>
  );
};
export default CarCard;

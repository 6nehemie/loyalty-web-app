'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Exo_2 } from 'next/font/google';

// Exo font import
const exo = Exo_2({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

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
    <Link
      href={href}
      className={`flex flex-col justify-between bg-white shadow-xs rounded-2xl overflow-hidden transition-transform duration-300 ease-in-out hover:scale-[1.03] hover:shadow-sm ${exo.className}`}
      style={{
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      }}
    >
      {/* Subtitle or Category */}
      <p className="text-lg text-dark-gray p-6">{subtitle}</p>
      {/* Car Image */}
      <div className="relative w-full block">
        <div className="h-[290px] flex items-center justify-center px-2.5">
          <Image
            src={image}
            alt={title}
            width={400}
            height={180}
            className="w-auto h-full object-contain transition-transform duration-300 ease-in-out hover:scale-[1.03]"
            style={{ transform: 'scaleX(-1)' }}
          />
        </div>
      </div>

      {/* Car Details */}
      <div className="flex flex-col px-6 pt-5 pb-8 items-start gap-3">
        {/* Car Make */}
        <div>
          <h3 className="text-sm text-orange-600 tracking-wide uppercase">
            {title.split(' ')[0]}
          </h3>
          {/* Car Model */}
          <h2 className="text-2xl font-medium text-black">
            {title.split(' ').slice(1).join(' ')}
          </h2>
        </div>

        {/* Price Information */}
        <p className="text-base font-normal text-app-blue-1 mt-4">
          A partir de {price}€ / jour
        </p>
      </div>
    </Link>
  );
};

export default CarCard;

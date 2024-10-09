'use client';

import Image from 'next/image';
import { Exo_2 } from 'next/font/google';

// Exo font import
const exo = Exo_2({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

interface InfoCardProps {
  title: string;
  description: string;
  image: string;
  altText: string;
}

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  description,
  image,
  altText,
}) => {
  return (
    <div
      className={`flex flex-col bg-white shadow-2xl rounded-2xl text-left ${exo.className} overflow-hidden`}
      style={{
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div className="p-6 pb-0">
        {/* Title */}
        <h4 className="text-2xl font-semibold mb-4 text-dark-gray">{title}</h4>

        {/* Description */}
        <p className="text-cool-gray-1 mb-6">{description}</p>
      </div>

      {/* Image */}
      <Image
        src={image}
        alt={altText}
        width={656}
        height={642}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default InfoCard;

'use client';

import { deleteProduct } from '@/app/actions/fleetAction';
import { useClickOutside } from '@/app/hooks';
import {
  EllipsisHorizontalCircleIcon,
  TrashIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { use, useRef, useState } from 'react';

interface AdminCarCardProps {
  title: string;
  available: boolean;
  price: string;
  createdAt: Date;
  image: string;
  carId: string;
}

const AdminCarCard: React.FC<AdminCarCardProps> = ({
  image,
  price,
  carId,
  available,
  createdAt,
  title,
}) => {
  const router = useRouter();
  const menuRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useClickOutside(menuRef, () => setIsMenuOpen(false));

  const handleDelete = async () => {
    await deleteProduct(carId);
    router.refresh();
  };

  return (
    <div className="relative bg-zinc-800  p-5 flex flex-col justify-between gap-6">
      <div className="flex justify-between">
        <div>
          <h3>{title}</h3>
          <div className="flex items-center gap-2">
            <div className="h-1 w-1 rounded-full bg-green-500"></div>
            <p className="text-sm text-neutral-400">Disponible</p>
          </div>
        </div>

        <button onClick={() => setIsMenuOpen(true)} className="h-max w-max">
          <EllipsisHorizontalCircleIcon className="h-6 w-6 text-neutral-400" />
        </button>
      </div>

      <Image
        src={image}
        alt={title}
        width={300}
        height={200}
        className="mx-auto"
      />

      <div className="flex justify-between">
        <p className="bg-zinc-900 py-1.5 px-3.5 rounded-full w-max text-xs text-neutral-200">
          {createdAt.toDateString()}
        </p>
        <p className="text-sm">{price}€/jour</p>
      </div>

      {isMenuOpen && (
        <div
          ref={menuRef}
          className="absolute flex flex-col gap-1 top-2 right-2 bg-zinc-900 text-sm w-1/2 p-1"
        >
          <Link
            href={`/admin/fleet/${carId}`}
            className="text-sm flex gap-2 items-center py-1.5 px-3.5 text-neutral-400 w-full hover:text-white hover:bg-zinc-800 transition-colors duration-200 rounded-md"
          >
            <WrenchScrewdriverIcon className="h-4 w-4 " />
            <p>Éditer</p>
          </Link>

          <button
            onClick={handleDelete}
            className="flex gap-2 items-center py-1.5 px-3.5 text-red-600 hover:text-red-500 w-full hover:bg-zinc-800 transition-colors duration-200 rounded-md"
          >
            <TrashIcon className="h-4 w-4 " />
            <p>Supprimer</p>
          </button>
        </div>
      )}
    </div>
  );
};
export default AdminCarCard;

'use client';

import { deleteProduct } from '@/app/actions/fleetAction';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import EditBtn from '../../buttons/edits/EditBtn';
import EditProduct from '../../sections/admin/collection/EditProduct';
import { IVehicule } from '@/app/types';
import { Backdrop } from '../..';
import { ArrowTopRightIcon } from '@radix-ui/react-icons';

interface AdminCarCardProps {
  title: string;
  available: boolean;
  price: string;
  createdAt: Date;
  image: string;
  carId: string;
  vehicule: IVehicule;
}

const AdminCarCard: React.FC<AdminCarCardProps> = ({
  image,
  price,
  carId,
  available,
  createdAt,
  title,
  vehicule,
}) => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleDelete = async () => {
    await deleteProduct(carId);
    router.refresh();
  };

  return (
    <>
      <Backdrop isActive={isMenuOpen} />
      <EditProduct
        vehicule={vehicule}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={() => setIsMenuOpen(false)}
      />

      <div className="relative">
        <div className="absolute z-[80] right-5 top-4">
          <EditBtn
            handleEditVehicule={() => {
              setIsMenuOpen(true);
            }}
            handleDeleteVehicule={handleDelete}
          />
        </div>

        <Link
          href={`/admin/collection/${carId}`}
          className="relative bg-transparent hover:bg-zinc-800 transition-colors duration-200 border border-zinc-700 rounded-lg cursor-pointer p-4 px-5 flex flex-col justify-between gap-2 "
        >
          <div className="">
            <div className="flex items-center gap-2">
              <h3 className="text-sm">{title}</h3>
              <div className="flex items-center gap-2">
                <div className="h-1 w-1 rounded-full bg-green-500"></div>
                <p className="text-sm text-neutral-400">Disponible</p>
              </div>
            </div>
          </div>

          <Image
            src={image}
            alt={title}
            width={300}
            height={200}
            className="mx-auto"
          />

          <div className="text-sm text-neutral-400">
            <p className=" ">{createdAt.toDateString()}</p>
            <p className=" text-neutral-300 font-medium">{price}€</p>
          </div>
        </Link>
      </div>
    </>
  );
};
export default AdminCarCard;

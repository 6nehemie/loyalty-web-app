import EditProductDropDown from '@/app/components/sections/admin/collection/dropdowns/EditProductDropDown';
import { longFormatFrDate } from '@/app/utils/dates';
import prisma from '@/app/utils/prisma';
import { ArrowLeftIcon, ArrowTopRightIcon } from '@radix-ui/react-icons';
import { redirect } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

interface CarInfoPage {
  params: {
    carId: string;
  };
}

const CarInfoPage: React.FC<CarInfoPage> = async ({ params }) => {
  const product = await prisma.vehicule.findUnique({
    where: {
      id: params.carId,
    },
  });

  if (!product) redirect('/admin/collection');

  const updatedAt = longFormatFrDate(product?.updatedAt!);

  const horizontalBarStyle = 'border-b border-b-neutral-700 w-full my-4';

  return (
    <>
      <div className="mb-5">
        <Link
          href={'/admin/collection'}
          className="flex gap-1 w-max items-center hover:text-white transition-colors duration-200"
        >
          <ArrowLeftIcon className="w-[18px] h-[18px]" />
          <span>Collection</span>
        </Link>
      </div>

      <div className="flex flex-col gap-12 text-sm text-neutral-200 pb-10">
        <div className="relative admin-product-banner overflow-hidden rounded-lg bg-neutral-800">
          <div className="absolute top-0 left-0 right-0 flex justify-center items-center">
            <Image
              height={1550}
              width={900}
              src={product?.wallpaper!}
              alt="car wallpaper"
              className="w-full -translate-y-[40%] object-cover object-center"
            />
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center">
            <div className="flex items-start gap-2">
              <Image
                src={product?.carImage!}
                alt="car image"
                width={60}
                height={60}
                className="object-contain"
              />

              <div>
                <h2 className="text-lg">{product?.title}</h2>
                <p className="text-neutral-400">
                  €{product?.dailyPrice! / 100}.00 EUR
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Link
                href={`/fleet/${product?.id}`}
                target="_blank"
                className="block hover:text-white transition-colors duration-200"
              >
                <span>Vehicule Page</span>{' '}
                <ArrowTopRightIcon className="w-[18px] h-[18px] inline-block" />
              </Link>
              {product && <EditProductDropDown vehicule={product} />}
            </div>
          </div>

          <div className={horizontalBarStyle}></div>

          <div className="flex gap-6">
            <div>
              <h3 className="text-neutral-400">Modifié le</h3>
              <p>{updatedAt}</p>
            </div>

            <div className="border-r  border-r-neutral-700"></div>

            <div>
              <h3 className="text-neutral-400">MRR</h3>
              <p>0.00€</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-lg">Details</h2>
          <div className={horizontalBarStyle}></div>

          <div className="grid grid-cols-2">
            <div className="grid grid-cols-2 gap-2 w-max">
              <p className="text-neutral-400">Stripe Product ID </p>
              <p className="text-white">{product?.productId}</p>

              <p className="text-neutral-400">Titre</p>
              <p className="text-white">{product?.title}</p>

              <p className="text-neutral-400">Marque</p>
              <p className="text-white">{product?.make}</p>

              <p className="text-neutral-400">Modèle</p>
              <p className="text-white">{product?.model}</p>

              <p className="text-neutral-400">Description courte </p>
              <p className="text-white">{product?.shortDescription}</p>
            </div>

            <div>
              <Image
                src={product?.carImage!}
                alt="car image"
                width={300}
                height={200}
                className="mx-auto"
              />
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-lg">Prix</h2>
          <div className={horizontalBarStyle}></div>

          <div className="grid grid-cols-2">
            <div className="grid grid-cols-2 gap-2 gap-x-3 w-max">
              <p className="text-neutral-400">Quotidien (24h)</p>
              <p className="text-white">€{product?.dailyPrice! / 100}.00EUR</p>

              <p className="text-neutral-400">Semaine (5 jours)</p>
              <p className="text-white">
                {product?.weeklyPrice
                  ? `${`€${(product?.weeklyPrice || 0) / 100}.00EUR`}`
                  : 'N/A'}
              </p>

              <p className="text-neutral-400">Week-end (Ven - Lun)</p>
              <p className="text-white">
                {product?.weekendPrice
                  ? `${`€${(product?.weekendPrice || 0) / 100}.00EUR`}`
                  : 'N/A'}
              </p>

              <p className="text-neutral-400">Mois (30 jours)</p>
              <p className="text-white">
                {product?.monthlyPrice
                  ? `${`€${(product?.monthlyPrice || 0) / 100}.00EUR`}`
                  : 'N/A'}
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-lg">Conditions de location</h2>
          <div className={horizontalBarStyle}></div>

          <div className="grid grid-cols-2">
            <div className="grid grid-cols-2 gap-2 gap-x-3 w-max">
              <p className="text-neutral-400">Âge minimum du conducteur</p>
              <p className="text-white">{product?.minimumAge} ans</p>

              <p className="text-neutral-400">Prix de la caution</p>
              <p className="text-white">€{product?.caution! / 100}.00EUR</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CarInfoPage;

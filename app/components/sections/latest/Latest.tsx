import Link from 'next/link';
import { CarCard } from '../..';
import prisma from '@/app/utils/prisma';
import { ArrowRightIcon } from '@radix-ui/react-icons';

const Latest = async () => {
  const latestCars =
    (await prisma.vehicule.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      take: 3,
    })) || [];

  return (
    <section className="max-w-wide w-full mx-auto flex flex-col gap-12">
      <h3 className="text-lg">Nos véhicules</h3>

      <div className="grid grid-cols-3 gap-9 max-[1319px]:grid-cols-2 max-[903px]:grid-cols-1 ">
        {latestCars.map((car) => (
          <CarCard
            key={car.id}
            title={`${car.make} ${car.model}`}
            subtitle={car.shortDescription!}
            price={`${car.dailyPrice! / 100}`}
            image={car.carImage!}
            href={`/collection/${car.id}`}
          />
        ))}
      </div>

      <Link
        href={'/collection'}
        className="flex items-center mx-auto justify-center text-sm gap-2 h-12 hover:border-neutral-900 transition-colors duration-200 border border-neutral-400 rounded-md px-5"
      >
        <p>
          <span>Voir toute la </span> collection
        </p>
        <ArrowRightIcon className="h-4" />
      </Link>
    </section>
  );
};
export default Latest;

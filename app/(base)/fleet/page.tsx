import { CarCard } from '@/app/components';
import prisma from '@/app/utils/prisma';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Loyalty RC | Collection',
  description:
    "Explorez notre collection exclusive de voitures d'exception chez Loyalty RC. Profitez d'une expérience de conduite exceptionnelle avec nos véhicules haut de gamme.",
};

const FleetPage = async () => {
  const collection = await prisma.car.findMany();

  return (
    <div className="bg-light-gray py-10">
      <section className="max-w-wide py-20 w-full mx-auto">
        <h3 className="heading-4 mb-6">Nos modèles</h3>
        <div className="grid grid-cols-3 gap-9 max-[1319px]:grid-cols-2 max-[903px]:grid-cols-1 ">
          {collection.map((car) => (
            <CarCard
              key={car.id}
              title={`${car.brand} ${car.model}`}
              subtitle={car.shortDescription!}
              price={car.price!}
              image={car.carImage!}
              href={`/fleet/${car.id}`}
            />
          ))}
        </div>
      </section>
    </div>
  );
};
export default FleetPage;

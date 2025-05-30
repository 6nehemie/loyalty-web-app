import { CarCard } from '@/app/components';
import SectionWrapper from '@/app/components/wrappers/SectionWrapper';
import prisma from '@/app/utils/prisma';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Loyalty RC | Collection',
  description:
    "Explorez notre collection exclusive de voitures d'exception chez Loyalty RC. Profitez d'une expérience de conduite exceptionnelle avec nos véhicules haut de gamme.",
};

const FleetPage = async () => {
  const collection = await prisma.vehicule.findMany();

  return (
    <div className="bg-light-gray">
      <SectionWrapper>
        <div className="space-y-10 py-[160px]">
          <h3
            className={`text-2xl sm:text-3xl font-normal mb-6 sm:mb-8 max-w-[625px] text-cool-gray-1 text-center sm:text-left`}
          >
            <span className="text-dark-gray">
              Découvrez notre collection exceptionnelle.
            </span>
            Nos véhicules récents vous attendent.
          </h3>

          {/* Grid for displaying cars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {collection.map((car) => (
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
        </div>
      </SectionWrapper>
    </div>
  );
};
export default FleetPage;

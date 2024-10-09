import Link from 'next/link';
import { CarCard } from '../..'; // Assuming CarCard is an imported component
import prisma from '@/app/utils/prisma';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import { Roboto } from 'next/font/google';
import SectionWrapper from '../../wrappers/SectionWrapper';

// Import the Roboto font
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

const Latest = async () => {
  const latestCars =
    (await prisma.vehicule.findMany({
      orderBy: { createdAt: 'desc' },
      take: 3,
    })) || [];

  return (
    <SectionWrapper>
      {/* Heading */}
      <div className="space-y-10">
        <h3
          className={`text-2xl sm:text-3xl font-normal mb-6 sm:mb-8 max-w-[625px] text-cool-gray-1 ${roboto.className} text-center sm:text-left`}
        >
          <span className="text-dark-gray">Les dernières nouveautés. </span>
          Découvrez ce qui est nouveau, dès maintenant.
        </h3>

        {/* Grid for displaying cars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {latestCars.map((car) => (
            <CarCard
              key={car.id}
              title={`${car.make} ${car.model}`}
              subtitle={car.shortDescription!}
              price={`${car.dailyPrice! / 100}`} // Added currency symbol
              image={car.carImage!}
              href={`/collection/${car.id}`}
            />
          ))}
        </div>
      </div>

      {/* Apple-like Reserve Now Button */}
      <Link
        href={'/reservation'} // Link to reservation page
        className="flex items-center justify-center w-full max-w-[250px] mx-auto mt-8 py-3 bg-app-blue-1 text-white rounded-full text-sm font-medium transition-all duration-200 ease-in-out hover:bg-app-blue-2"
        style={{ boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)' }}
      >
        Réservez maintenant
        <ArrowRightIcon className="ml-2 h-4 w-4" />
      </Link>
    </SectionWrapper>
  );
};

export default Latest;

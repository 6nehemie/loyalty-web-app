import { AdminCarCard } from '@/app/components';
import { fleet } from '@/app/constants';
import prisma from '@/app/utils/prisma';

const page = async () => {
  const collection = await prisma.vehicule.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });
  return (
    <div className="grid grid-cols-4 gap-6 max-[1440px]:grid-cols-3 max-[1115px]:grid-cols-2">
      {collection.length > 0 &&
        collection.map((car, index) => (
          <AdminCarCard
            carId={car.id!}
            title={`${car.title}`}
            image={car.carImage!}
            price={`${car.dailyPrice! / 100}`}
            createdAt={car.createdAt}
            key={index}
            available
          />
        ))}
    </div>
  );
};
export default page;

import { AdminCarCard, FleetNav } from '@/app/components';
import prisma from '@/app/utils/prisma';

const page = async () => {
  const collection = await prisma.vehicule.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });
  return (
    <>
      <FleetNav />

      <div className="grid gap-6 grid-cols-3 max-[1115px]:grid-cols-2">
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
    </>
  );
};
export default page;

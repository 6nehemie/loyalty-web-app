import { AdminCarCard } from '@/app/components';
import { fleet } from '@/app/constants';
import prisma from '@/app/utils/prisma';

const page = async () => {
  const collection = await prisma.car.findMany();
  return (
    <div className="grid grid-cols-4 gap-6 max-[1440px]:grid-cols-3 max-[1115px]:grid-cols-2">
      {collection.length > 0 &&
        collection.map((car, index) => (
          <AdminCarCard
            carId={car.id!}
            title={`${car.brand!} ${car.model!}`}
            image={car.carImage!}
            price={car.price!}
            createdAt={car.createdAt!}
            key={index}
            available
          />
        ))}
    </div>
  );
};
export default page;

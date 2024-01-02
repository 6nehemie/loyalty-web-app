import { AdminCarCard } from '@/app/components';
import { fleet } from '@/app/constants';

const page = () => {
  return (
    <div className="grid grid-cols-4 gap-6 max-[1440px]:grid-cols-3 max-[1115px]:grid-cols-2">
      {fleet.collection.map((car, index) => (
        <AdminCarCard
          href={car.link}
          title={car.title}
          image={car.image}
          price={car.price}
          key={index}
          available
        />
      ))}
    </div>
  );
};
export default page;

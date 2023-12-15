import { fleet } from '@/app/constants';
import { CarCard } from '../..';

const Latest = () => {
  return (
    <section className="max-w-wide py-20 w-full mx-auto">
      <h3 className="heading-4 mb-6">Nos derniers modèles</h3>
      <div className="grid grid-cols-3 gap-9 max-[1319px]:grid-cols-2 max-[903px]:grid-cols-1 ">
        {fleet.latest.map((car) => (
          <CarCard
            key={car.title}
            title={car.title}
            subtitle={car.subtitle}
            price={car.price}
            image={car.image}
            href={car.link}
          />
        ))}
      </div>
    </section>
  );
};
export default Latest;

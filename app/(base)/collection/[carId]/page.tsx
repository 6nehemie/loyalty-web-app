import { Button1 } from '@/app/components';
import { carPage } from '@/app/constants';
import prisma from '@/app/utils/prisma';
import Image from 'next/image';
import { useParams } from 'next/navigation';

const carData = {
  make: 'Tesla',
  model: 'Model 3',
  wallpaper: 'https://example.com/tesla-model3.jpg', // Replace with your actual image URL
  dailyPrice: 10000,
  features: ['Autopilot', 'Premium Interior Package', 'Enhanced Autopilot'],
  topSpeed: 250,
  acceleration: 3.5,
  fuelConsumption: 15, // Assuming electric car, so fuel consumption is low
  length: 'Information à venir', // Text indicating information is coming soon
  width: 1909,
  height: 1443,
};

const CarPage = async ({ params }: { params: { carId: string } }) => {
  // const params = useParams();
  const carData = await prisma.vehicule.findUnique({
    where: { id: params.carId as string },
  });

  return (
    <>
      <section className="relative h-screen w-full overflow-hidden">
        <Image
          src={carData?.wallpaper || carPage.image}
          alt="hero image"
          width={2560}
          height={1440}
          className="h-full object-cover absolute top-0 left-0 z-[-1]"
        />

        <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-black to-transparent opacity-40"></div>

        <div className="absolute bottom-0 left-0 right-0 px-sides py-12 flex flex-col items-center justify-center text-white">
          <h1 className="heading-2 leading-[100%] text-center">
            Louez une {carData?.make} {carData?.model}
          </h1>

          <div className="flex items-center gap-6 font-light mt-4">
            <p className="max-md:w-full justify-center text-sm">
              À partir de {carData?.dailyPrice! / 100}€/jour
            </p>
            <Button1
              link="/reservation"
              light
              className="max-md:hidden text-sm"
            >
              Réservez maintenant
            </Button1>
          </div>
        </div>
      </section>
    </>
  );
};

export default CarPage;

import { Button1 } from '@/app/components';
import { carPage } from '@/app/constants';
import Image from 'next/image';

const CarPage = () => {
  return (
    <section>
      <div className="h-screen flex flex-col justify-between">
        <Image
          src={carPage.wallpaper}
          alt="hero image"
          width={2560}
          height={1440}
          className="h-full object-cover absolute top-0 left-0 z-[-1]"
        />

        <div className="h-[160px] w-full bg-gradient-to-b from-black to-transparent opacity-40"></div>
        <div className="p-sides">
          <div className="flex justify-between gap-9 max-md:gap-6 max-w-wide w-full mx-auto pb-11 text-white">
            <div>
              <h1 className="heading-2 leading-[100%]">
                Louez une {carPage.title}
              </h1>
            </div>

            <div className="flex items-center gap-6 font-light">
              <p className="max-md:w-full justify-center text-sm">
                À partir de {carPage.price}€/jour
              </p>

              <Button1
                link="/reservation"
                light
                className="max-md:hidden bg-blue text-white text-sm "
              >
                Réservez maintenant
              </Button1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CarPage;

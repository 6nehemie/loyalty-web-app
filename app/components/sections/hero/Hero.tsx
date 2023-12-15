import { hero } from '@/app/constants';
import Image from 'next/image';
import Link from 'next/link';
import { Button1 } from '../..';

const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-between">
      <Image
        src={hero.image}
        alt="hero image"
        width={2560}
        height={1440}
        className="h-full object-cover absolute top-0 left-0 z-[-1]"
      />

      <div className="h-[160px] w-full bg-gradient-to-b from-black to-transparent opacity-40"></div>

      <div className="p-sides flex flex-col gap-9 max-md:gap-6 max-w-wide w-full mx-auto pb-11 text-white">
        <div>
          <h1 className="heading-1 leading-[100%]">
            Voitures de luxe. <br className="max-lg:hidden" />
            Services premium.
          </h1>
        </div>

        <div className="flex  items-center gap-6 font-light">
          <Button1 link="/" className="max-md:w-full justify-center">
            Réservez maintenant
          </Button1>
          <Button1 link="/" light className="max-md:hidden">
            En savoir plus
          </Button1>
        </div>
      </div>
    </section>
  );
};
export default Hero;

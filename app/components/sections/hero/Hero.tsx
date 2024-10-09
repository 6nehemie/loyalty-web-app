import { hero } from '@/app/constants';
import Image from 'next/image';
import { Button1 } from '../..'; // Assuming you have a button component for potential use

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Image
        src={hero.image}
        alt="hero image"
        layout="fill"
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-50 z-10" />

      <div className="relative flex flex-col justify-end z-10 h-screen p-14 max-md:p-6 space-y-6 max-w-[1580px] mx-auto">
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-medium leading-tight">
          Rouler Avec Liberté
        </h1>

        <p className="text-lg sm:text-xl font-light text-white max-w-[800px]">
          Profitez de la liberté de la location de voitures de sport sans
          tracas. Des voitures performantes livrées à votre porte, sans
          paperasse.
        </p>
      </div>
    </section>
  );
};

export default Hero;

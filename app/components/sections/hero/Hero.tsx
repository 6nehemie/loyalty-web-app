import { hero } from '@/app/constants';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="h-screen">
      <Image
        src={hero.image}
        alt="hero image"
        width={2560}
        height={1440}
        className="h-full object-cover"
      />
    </section>
  );
};
export default Hero;

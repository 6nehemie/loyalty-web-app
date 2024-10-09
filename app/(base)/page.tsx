import { Hero, HomeHero, Latest } from '../components';
import HowItWorks from '../components/sections/home/HowItWorks';

export default function HomePage() {
  return (
    <div className="bg-zinc-100 flex flex-col pb-16 gap-[120px] ">
      <Hero />
      {/* <HomeHero /> */}

      <HowItWorks />

      <Latest />
      {/* <div className="flex flex-col gap-[120px] py-[120px] p-sides-2 max-w-[1440px] mx-auto"></div> */}
    </div>
  );
}

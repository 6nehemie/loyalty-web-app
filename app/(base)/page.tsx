import { Hero, HomeHero, HowItWorks, Latest } from '../components';

export default function HomePage() {
  return (
    <div className="bg-zinc-100 flex flex-col gap-[120px] pb-16">
      {/* <Hero /> */}
      <HomeHero />

      <div className="flex flex-col gap-[120px] p-sides-2">
        <Latest />
        {/* <HowItWorks /> */}
      </div>
    </div>
  );
}

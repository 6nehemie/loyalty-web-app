import { Hero, Latest } from '../components';
import FAQ from '../components/sections/home/FAQ';
import HowItWorks from '../components/sections/home/HowItWorks';

export default function HomePage() {
  return (
    <div className="bg-zinc-100 flex flex-col pb-16 gap-[120px] ">
      <Hero />

      <HowItWorks />

      <Latest />

      <FAQ />
    </div>
  );
}

import { Hero, HomeHero, Latest } from '../components';

export default function HomePage() {
  return (
    <div className="">
      {/* <Hero /> */}
      <HomeHero />

      <div className="p-sides">
        <Latest />
      </div>
    </div>
  );
}

import { Hero, Latest } from '../components';

export default function HomePage() {
  return (
    <div className="">
      <Hero />
      <div className="bg-light-gray p-sides">
        <Latest />
      </div>
    </div>
  );
}

import Image from 'next/image';
import { fleet } from '@/app/constants';
import { CheckIcon } from '@heroicons/react/24/outline';
import HoverBookInfo from './HoverBookInfo';

interface BookCarCardProps {
  isChecked: boolean;
  carName: string;
  carImage: string;
  price: string;
}

const BookCarCard: React.FC<BookCarCardProps> = ({
  isChecked,
  carName,
  carImage,
  price,
}) => {
  return (
    <>
      <div className="relative bg-zinc-800 cursor-pointer hover:bg-zinc-900 transition-colors duration-200 px-5 py-3.5 rounded-md overflow-hidden flex flex-col justify-between gap-4">
        <div className="flex justify-between">
          <div>
            <div className="flex items-center gap-2">
              <h3>{carName}</h3>
              <HoverBookInfo />
            </div>
            <div className="flex items-center gap-2">
              <div className="h-1 w-1 rounded-full bg-green-500"></div>
              <p className="text-sm text-neutral-400">Disponible</p>
            </div>
          </div>
        </div>

        <Image
          src={carImage}
          alt={''}
          width={237}
          height={101}
          className="mx-auto h-[101px] w-[237px] object-cover"
        />

        <div className=" mt-4">
          <p className="text-sm text-right">À partir de {price}€/jour</p>
        </div>

        <div
          className={`absolute w-6 h-6 top-2 right-2 border border-neutral-700 rounded-md z-10 flex items-center justify-center ${
            isChecked && 'bg-white'
          }`}
        >
          {isChecked && <CheckIcon className="h-5 w-5 text-dark-gray" />}
        </div>
      </div>
    </>
  );
};
export default BookCarCard;

import { IVehicule } from '@/app/types';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import Link from 'next/link';

interface INavbarV2Props {
  isDropdownOpen: boolean;
  collection?: IVehicule[];
  closeDropDown: () => void;
}

const Collection: React.FC<INavbarV2Props> = ({
  collection,
  isDropdownOpen,
  closeDropDown,
}) => {
  return (
    <div
      className={`
	fixed z-[149] top-0 left-0 right-0 py-[126px] transition-all duration-300 rounded-b-lg bg-white ease-in-out
	${
    isDropdownOpen
      ? 'visible translate-y-0 opacity-100'
      : 'invisible opacity-40 -translate-y-[100%]'
  }  `}
    >
      <div className="main-gird-layout h-full">
        {collection?.length! > 1 && (
          <div className="col-start-5 col-end-12  mx-auto grid grid-cols-4 gap-6">
            {collection!.map((vehicule) => (
              <Link
                href={`/collection/${vehicule.id}`}
                key={vehicule.id}
                onClick={closeDropDown}
                className="justify-self-center"
              >
                <Image
                  src={vehicule.carImage!}
                  alt={`${vehicule.make} ${vehicule.model} image`}
                  width={239}
                  height={130}
                />
                <p className="text-center font-exo text-lg">{vehicule.title}</p>
              </Link>
            ))}
          </div>
        )}

        <div className="row-start-1 col-start-2 col-end-4">
          <div className="flex flex-col text-md gap-2 mb-6">
            <p>Abonnements</p>
          </div>
          <Link
            href={'/collection'}
            onClick={closeDropDown}
            className="flex items-center self-end justify-center text-sm gap-2 h-12 hover:border-neutral-900 transition-colors duration-200 border border-neutral-400 rounded-md"
          >
            <span>Voir toute la collection</span>
            <ArrowRightIcon className="h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Collection;

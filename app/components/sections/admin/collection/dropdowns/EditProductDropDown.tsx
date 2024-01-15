'use client';

import { useClickOutside } from '@/app/hooks';
import { DotsHorizontalIcon } from '@radix-ui/react-icons';
import { useRef, useState } from 'react';
import EditProduct from '../EditProduct';
import { Backdrop } from '@/app/components';
import { IVehicule } from '@/app/types';

interface IEditProductDropDownProps {
  vehicule: IVehicule;
}

const EditProductDropDown: React.FC<IEditProductDropDownProps> = ({
  vehicule,
}) => {
  const dorpDownRef = useRef(null);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [isEditProductOpen, setIsEditProductOpen] = useState(false);

  useClickOutside(dorpDownRef, () => setIsDropDownOpen(false));

  const handleEditVehicule = () => {
    setIsDropDownOpen(false);
    setIsEditProductOpen(true);
  };

  const handleDeleteVehicule = () => {
    setIsDropDownOpen(false);
  };

  const btnStyle =
    'text-left px-5 py-2 hover:bg-neutral-800  transition-colors duration-200';
  return (
    <>
      <Backdrop isActive={isEditProductOpen} />
      <EditProduct
        vehicule={vehicule}
        isMenuOpen={isEditProductOpen}
        setIsMenuOpen={() => setIsEditProductOpen(false)}
      />

      <div className="relative">
        <div
          onClick={() => setIsDropDownOpen(true)}
          className="py-0.5 px-2 hover:bg-neutral-800 rounded-md text-neutral-200 transition-colors duration-200 cursor-pointer"
        >
          <DotsHorizontalIcon className="w-4 h-4" />
        </div>

        <div
          ref={dorpDownRef}
          className={`${
            isDropDownOpen ? 'visible' : 'invisible'
          } transition-all duration-200 absolute right-0 w-[178px] z-[100] border border-neutral-800 bg-neutral-900 rounded-md py-2.5`}
        >
          <div className="flex flex-col text-neutral-400">
            <button
              onClick={handleEditVehicule}
              className={`${btnStyle} hover:text-white`}
            >
              Éditer le véhicule
            </button>

            <button
              onClick={handleDeleteVehicule}
              className={`${btnStyle} text-red-800 hover:text-red-500`}
            >
              Supprimer
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default EditProductDropDown;

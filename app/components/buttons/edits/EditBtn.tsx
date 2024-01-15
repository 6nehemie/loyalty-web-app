'use client';

import { useClickOutside } from '@/app/hooks';
import { DotsHorizontalIcon } from '@radix-ui/react-icons';
import { useRef, useState } from 'react';

interface IEditBtnProps {
  handleEditVehicule: () => void;
  handleDeleteVehicule: () => void;
}

const EditBtn: React.FC<IEditBtnProps> = ({
  handleDeleteVehicule,
  handleEditVehicule,
}) => {
  const dorpDownRef = useRef(null);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const btnStyle =
    'text-left px-5 py-2 hover:bg-neutral-800  transition-colors duration-200';

  useClickOutside(dorpDownRef, () => setIsDropDownOpen(false));

  const handleDropDown = () => {
    setIsDropDownOpen(true);
  };

  const handleClickEdit = () => {
    setIsDropDownOpen(false);
    handleEditVehicule();
  };

  return (
    <div className="relative text-sm">
      <div
        onClick={handleDropDown}
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
        <div className="flex flex-col text-neutral-200">
          <button
            onClick={handleClickEdit}
            className={`${btnStyle} hover:text-white`}
          >
            Éditer le véhicule
          </button>

          <button
            onClick={handleDeleteVehicule}
            className={`${btnStyle} text-red-700 hover:text-red-500`}
          >
            Supprimer
          </button>
        </div>
      </div>
    </div>
  );
};
export default EditBtn;

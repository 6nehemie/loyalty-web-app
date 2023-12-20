'use client';

import { PlusIcon } from '@heroicons/react/24/outline';

interface AddInfoBtnProps {
  btnLabel: string;
  btnAction: () => void;
}

const AddInfoBtn: React.FC<AddInfoBtnProps> = ({ btnLabel, btnAction }) => {
  return (
    <button onClick={btnAction} className="flex gap-2 items-center">
      <span className="bg-light-gray rounded-full">
        <PlusIcon className="h-5 w-5" />
      </span>
      <span className="underline text-cool-gray-1 hover:text-black transition-colors duration-200">
        {btnLabel}
      </span>
    </button>
  );
};
export default AddInfoBtn;

'use client';

import { CheckIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

interface IReservationCheckBoxProps {
  label?: string;
  name: string;
  required?: boolean;
  icon?: React.ReactNode;
  setCurrentValue?: any;
  text?: string;
}

const ReservationCheckBox: React.FC<IReservationCheckBoxProps> = ({
  name,
  required,
  setCurrentValue,
  label,
  icon,
  text,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="relative ">
      <label
        htmlFor={name}
        onClick={() => setIsChecked((prev) => !prev)}
        className="bg-zinc-800 hover:bg-zinc-700 transition-colors duration-200 px-6 py-3.5 cursor-pointer flex gap-2 items-center"
      >
        <div className="w-full flex justify-between items-center gap-x-6">
          <div className="flex items-center gap-4">
            {icon && icon}
            <div>
              <p>{label}</p>
              {text && (
                <p className="text-sm text-neutral-400 max-w-[500px]">{text}</p>
              )}
            </div>
          </div>

          <div
            className={`flex items-center justify-center h-7 w-7 aspect-square border rounded-md border-neutral-100 transition-all duration-200 ${
              isChecked && 'bg-neutral-100'
            }`}
          >
            {isChecked && (
              <CheckIcon className="h-7 w-7 text-zinc-800" strokeWidth={1.4} />
            )}
          </div>
        </div>
      </label>
      <input
        type="checkbox"
        name={name}
        id={name}
        className="hidden"
        required={required}
        onChange={(event) =>
          setCurrentValue && setCurrentValue(event.target.checked)
        }
      />
    </div>
  );
};
export default ReservationCheckBox;

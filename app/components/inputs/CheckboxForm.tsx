'use client';

import { CheckIcon } from '@heroicons/react/24/outline';
import React, { Children, LegacyRef, useState } from 'react';

interface CheckboxFormProps {
  label?: string;
  name: string;
  required?: boolean;
  children?: React.ReactNode;
  setCurrentValue?: any;
}

const CheckboxForm: React.FC<CheckboxFormProps> = ({
  label,
  name,
  required,
  children,
  setCurrentValue,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="relative">
      <label
        htmlFor={name}
        onClick={() => setIsChecked((prev) => !prev)}
        className="cursor-pointer flex gap-2 items-center"
      >
        <div
          className={`flex items-center justify-center h-7 w-7 aspect-square border-2 rounded-md border-dark-gray transition-all duration-200
        ${isChecked && 'bg-dark-gray'}
        `}
        >
          {isChecked && <CheckIcon className="h-5 w-5 text-white" />}
        </div>
        {children}
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
export default CheckboxForm;

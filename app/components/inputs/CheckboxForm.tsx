'use client';

import { CheckIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline';
import React, { Children, LegacyRef, useState } from 'react';

interface CheckboxFormProps {
  label?: string;
  name: string;
  required?: boolean;
  error?: boolean;
  errorMessage?: string;
  children?: React.ReactNode;
  setCurrentValue?: any;
}

const CheckboxForm: React.FC<CheckboxFormProps> = ({
  label,
  name,
  error,
  errorMessage,
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
        ${isChecked && 'bg-dark-gray'} ${error && 'border-red-500'}
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
      {errorMessage && (
        <div className="flex gap-2 text-red-500 text-sm mt-2">
          <ExclamationCircleIcon className="h-4 w-4 block mt-0.5" />
          <p>{errorMessage}</p>
        </div>
      )}
    </div>
  );
};
export default CheckboxForm;

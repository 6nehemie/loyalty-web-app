'use client';

import { ExclamationCircleIcon } from '@heroicons/react/24/outline';
import { LegacyRef, useState } from 'react';

interface InputFromProps {
  label?: string;
  name: string;
  type: string;
  placeholder?: string;
  required?: boolean;
  setCurrentValue?: any;
  error?: boolean | null;
  errorMessage?: string;
  defaultValue?: string;
  ref?: LegacyRef<HTMLInputElement> | undefined;
}

const InputFrom: React.FC<InputFromProps> = ({
  label,
  name,
  type = 'text',
  required,
  placeholder,
  defaultValue,
  setCurrentValue,
  ref,
  error,
  errorMessage,
}) => {
  const [showPassword, setShowPassword] = useState<'password' | 'text'>(
    'password'
  );

  const handleInputType = () => {
    setShowPassword((prev) => (prev === 'password' ? 'text' : 'password'));
  };

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="font-exo">
        {label}
      </label>
      <div className="relative w-full">
        <input
          type={type === 'password' ? showPassword : type}
          name={name}
          id={name}
          ref={ref}
          required={required}
          defaultValue={defaultValue}
          onChange={(e) => setCurrentValue && setCurrentValue(e.target.value)}
          className={`h-[48px] border-2 bg-light-gray rounded-md px-4  outline-cool-gray-1 font-exo w-full ${
            error && 'border-red-500'
          }`}
        />
        {type === 'password' && (
          <div
            onClick={handleInputType}
            className="absolute top-1/2 right-6 -translate-y-[50%] cursor-pointer"
          >
            {showPassword === 'password' ? 'montrer' : 'cacher'}
          </div>
        )}
      </div>
      {errorMessage && (
        <div className="flex gap-2 text-red-500 text-sm mt-2">
          <ExclamationCircleIcon className="h-4 w-4 block mt-0.5" />
          <p>{errorMessage}</p>
        </div>
      )}
    </div>
  );
};
export default InputFrom;

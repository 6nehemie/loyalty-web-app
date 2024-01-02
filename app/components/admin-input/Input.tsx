'use client';

import { LegacyRef } from 'react';

interface InputProps {
  label: string;
  name: string;
  type: 'text' | 'number' | 'email' | 'password';
  error?: boolean;
  errorMessage?: string;
  className?: string;
  required?: boolean;
  setCurrentValue?: any;
  ref?: LegacyRef<HTMLInputElement> | undefined;
  placeholder?: string;
  defaultValue?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  type = 'text',
  defaultValue,
  name,
  ref,
  required,
  error,
  setCurrentValue,
  errorMessage,
  className,
  placeholder,
}) => {
  return (
    <div className="flex flex-col gap-2 m-1.5">
      <label htmlFor={name} className="text-sm font-medium">
        {label}
      </label>
      <input
        name={name}
        id={name}
        type={type}
        defaultValue={defaultValue}
        onChange={(e) => setCurrentValue && setCurrentValue(e.target.value)}
        required={required}
        className={`py-1 px-3 rounded-md bg-transparent border border-neutral-700 outline-none focus:border-neutral-400 transition-colors duration-200 ${className}`}
      />
      {errorMessage && (
        <div className="flex gap-2 text-red-500 text-sm mt-2">
          <p>{errorMessage}</p>
        </div>
      )}
    </div>
  );
};
export default Input;

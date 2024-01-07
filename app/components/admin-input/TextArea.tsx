'use client';

import { LegacyRef } from 'react';

interface TextAreaProps {
  label: string;
  name: string;
  rows?: number;
  error?: boolean;
  errorMessage?: string;
  className?: string;
  required?: boolean;
  setCurrentValue?: any;
  subLabel?: string;
  ref?: LegacyRef<HTMLInputElement> | undefined;
  placeholder?: string;
  defaultValue?: string;
}

const TextArea: React.FC<TextAreaProps> = ({
  label,
  defaultValue,
  name,
  subLabel,
  ref,
  rows = 3,
  required,
  error,
  setCurrentValue,
  errorMessage,
  className,
  placeholder,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="mb-1.5">
        <label htmlFor={name} className="text-sm font-semibold">
          {label}
        </label>
        {subLabel && <p className="text-xs font-light">{subLabel}</p>}
      </div>

      <textarea
        name={name}
        id={name}
        defaultValue={defaultValue}
        rows={rows}
        placeholder={placeholder}
        onChange={(e) => setCurrentValue && setCurrentValue(e.target.value)}
        required={required}
        className={`py-1 px-3 rounded-md bg-transparent border border-neutral-700 outline-none focus:border-neutral-400 transition-colors duration-200 placeholder:text-neutral-700 ${className}`}
      />
      {errorMessage && (
        <div className="flex gap-2 text-red-500 text-sm mt-2">
          <p>{errorMessage}</p>
        </div>
      )}
    </div>
  );
};
export default TextArea;

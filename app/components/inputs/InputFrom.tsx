'use client';

import { useState } from 'react';

interface InputFromProps {
  label?: string;
  name: string;
  type: string;
  placeholder?: string;
  required?: boolean;
}

const InputFrom: React.FC<InputFromProps> = ({
  label,
  name,
  type = 'text',
  required,
  placeholder,
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
          required={required}
          className="h-[54px] border-2 bg-light-gray rounded-md px-4 outline-none font-exo w-full "
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
    </div>
  );
};
export default InputFrom;

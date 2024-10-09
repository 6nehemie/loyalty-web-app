'use client';

import { ExclamationCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { LegacyRef, useState } from 'react';
import { Input } from '../ui/input';
import { ControllerRenderProps } from 'react-hook-form';

interface InputFromProps {
  name: string;
  type: string;
  placeholder?: string;
  required?: boolean;
  field: ControllerRenderProps<any>;
  className?: string;
  lowerCase?: boolean;
}

const InputFrom: React.FC<InputFromProps> = ({
  name,
  type = 'text',
  required,
  placeholder,
  field,
  className,
  lowerCase,
}) => {
  const [showPassword, setShowPassword] = useState<'password' | 'text'>(
    'password'
  );

  const handleInputType = () => {
    setShowPassword((prev) => (prev === 'password' ? 'text' : 'password'));
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="relative w-full">
        <Input
          id={name}
          {...field}
          type={type === 'password' ? showPassword : type}
          required={required}
          placeholder={placeholder}
          className={`${lowerCase && 'lowercase'}`}
        />
        {type === 'password' && (
          <div
            onClick={handleInputType}
            className="absolute top-1/2 right-6 -translate-y-[50%] cursor-pointer text-sm"
          >
            {showPassword === 'password' ? 'montrer' : 'cacher'}
          </div>
        )}
      </div>
    </div>
  );
};
export default InputFrom;

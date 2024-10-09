import * as React from 'react';

import { cn } from '@/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-14 w-full rounded-xl bg-app-gray-2 bg-opacity-20 px-4 py-1 text-base font-exo font-light outline-none border-app-gray-2 focus:outline-2 focus:outline-app-blue-1 focus-visible: disabled:cursor-not-allowed disabled:opacity-50 placeholder:text-app-gray-2 transition-colors duration-200',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export { Input };

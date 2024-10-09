'use client';

import React from 'react';
import { ControllerRenderProps } from 'react-hook-form';
import { Checkbox } from '../ui/checkbox';

interface CheckboxFormProps {
  field: ControllerRenderProps<any, any>;
  children?: React.ReactNode;
}

const CheckboxForm: React.FC<CheckboxFormProps> = ({ field, children }) => {
  if (!field) {
    return null; // Handle the case where field is undefined
  }

  // Handle checkbox change
  const handleCheckboxChange = () => {
    field.onChange(!field.value); // Toggle the checkbox value
  };

  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        id={field.name}
        checked={field.value} // Bind checked state to field.value
        onCheckedChange={handleCheckboxChange} // Handle change on click
      />
      <label
        htmlFor={field.name}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {children}
      </label>
    </div>
  );
};

export default CheckboxForm;

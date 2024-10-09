'use client';

import { ChoiceType } from '@/app/types';
import { LegacyRef } from 'react';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/app/components/ui/select';

interface SelectFormProps {
  field: {
    onChange: (value: any) => void;
    value: string | undefined; // This could be undefined initially
    ref?: LegacyRef<any>;
  };
  options: ChoiceType[];
  label: string;
}

const SelectForm: React.FC<SelectFormProps> = ({ label, field, options }) => {
  return (
    <Select value={field.value ?? ''} onValueChange={field.onChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Sélectionnez..." />
      </SelectTrigger>

      <SelectContent>
        <SelectGroup>
          <SelectLabel>{label}</SelectLabel>
          {options.map((option) => (
            <SelectItem key={option} value={option!.toLocaleLowerCase()}>
              {option}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectForm;

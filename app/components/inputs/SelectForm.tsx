'use client';

import { useClickOutside } from '@/app/hooks';
import { ChoiceType } from '@/app/types';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import { useRef, useState } from 'react';

const SelectForm = () => {
  const choice: ChoiceType[] = ['Monsieur', 'Madame'];

  const choiceRef = useRef<HTMLDivElement>(null);
  const [input, setInput] = useState<ChoiceType>();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useClickOutside(choiceRef, () => setIsDropdownOpen(false));

  const handleChoice = (choice: ChoiceType) => {
    setInput(choice);
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative h-20 mb-2 font-exo z-[20]">
      <input type="text" className="hidden" defaultValue={input} />

      <p className="mb-2">Civilité *</p>
      <div
        ref={choiceRef}
        className="absolute flex flex-col items-center w-max cursor-pointer border-2 bg-light-gray rounded-md  outline-none"
      >
        <div
          onClick={() => setIsDropdownOpen((prev) => !prev)}
          className="px-4 flex justify-between items-center h-[50px] w-[263px]"
        >
          <p className="text-sm">{input}</p>
          <div>
            {!isDropdownOpen ? (
              <ChevronDownIcon className="h-5 w-5" />
            ) : (
              <ChevronUpIcon className="h-5 w-5" />
            )}
          </div>
        </div>

        {isDropdownOpen && (
          <div className="text-sm border-t w-full p-2 px-1 flex flex-col gap-2">
            {choice.map((choice) => (
              <div
                key={choice}
                onClick={() => handleChoice(choice)}
                className={`flex justify-between items-center rounded-md px-4 py-3 hover:bg-neutral-200 transition-colors duration-200
				${input === choice && 'bg-neutral-200'}
				`}
              >
                <p>{choice}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default SelectForm;

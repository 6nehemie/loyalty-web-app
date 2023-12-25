'use client';

import { useRef } from 'react';
import { Backdrop } from '../..';
import { useClickOutside } from '@/app/hooks';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface IEditCardProps {
  isEditing: boolean;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  children?: React.ReactNode;
}

const EditCard: React.FC<IEditCardProps> = ({
  isEditing,
  setIsEditing,
  children,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  useClickOutside(cardRef, () => setIsEditing(false));

  return (
    <>
      <Backdrop isActive={isEditing} />

      {isEditing && (
        <div className="z-[1000] fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center">
          <div
            ref={cardRef}
            className={`relative max-w-[700px] w-full bg-white p-5 rounded-lg`}
          >
            <div
              onClick={() => setIsEditing(false)}
              className="absolute top-5 right-5 hover:bg-light-gray rounded-full p-2 transition-colors duration-200"
            >
              <XMarkIcon className="w-5 h-5 cursor-pointer" />
            </div>
            {children}
          </div>
        </div>
      )}
    </>
  );
};
export default EditCard;

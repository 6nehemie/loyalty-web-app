'use client';

import { FileTextIcon } from '@radix-ui/react-icons';
import { useEffect, useRef, useState } from 'react';

interface IReservationFileInputsProps {
  // fileRef: React.RefObject<HTMLInputElement>;
  label?: string;
  name?: string;
  text?: string;
}

const ReservationFileInputs: React.FC<IReservationFileInputsProps> = ({
  label,
  name,
  text,
}) => {
  const [file, setFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState<string>('');

  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (file) {
      setFileName(file.name);
    } else {
      setFileName('');
    }
  }, [file]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files ? e.target.files[0] : null);
  };

  return (
    <div>
      <p className="mb-2 font-light">{label}</p>

      <div className="flex items-center gap-2">
        <FileTextIcon className="h-4 w-4 text-neutral-500" />
        <label
          htmlFor={name}
          className="cursor-pointer hover:text-neutral-300 transition-colors duration-200"
        >
          {!fileName && <span>{text}</span>}
          {fileName && (
            <>
              <span className="text-neutral-400 mr-2">
                {fileName.slice(0, 10) + '...' + fileName.slice(-10)}
              </span>
              <span className="">Changer</span>
            </>
          )}
        </label>
      </div>

      <input
        type="file"
        ref={fileRef}
        name={name}
        id={name}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
      />
    </div>
  );
};
export default ReservationFileInputs;

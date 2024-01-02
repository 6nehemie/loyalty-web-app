'use client';
import { PlusIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { LegacyRef, useState } from 'react';

interface FileInputProps {
  label: string;
  name: string;
  ref?: LegacyRef<HTMLInputElement> | undefined;
  currentFile?: string;
  defaultValue?: string;
}

const FileInput: React.FC<FileInputProps> = ({
  label,
  name,
  ref,
  defaultValue,
  currentFile,
}) => {
  const [file, setFile] = useState<File | null>(null);

  return (
    <div className="flex flex-col gap-2 m-1.5">
      <p className="text-sm font-medium">{label}</p>
      <label
        htmlFor={name}
        className="flex justify-center items-center text-sm font-medium bg-neutral-800 hover:bg-neutral-900 border border-neutral-800  transition-colors duration-200 h-[90px] w-[158px] cursor-pointer rounded-md overflow-hidden"
      >
        {!file && !defaultValue && (
          <PlusIcon className="h-10 w-10 text-neutral-400" strokeWidth={1} />
        )}
        <div className="relative">
          {(file || defaultValue) && (
            <Image
              src={file ? URL.createObjectURL(file) : defaultValue!}
              alt=""
              width={158}
              height={90}
              className="w-full h-full object-cover hover:brightness-70"
            />
          )}
        </div>
      </label>
      <input
        onChange={(e) => setFile(e.target.files?.[0]!)}
        type="file"
        ref={ref}
        name={name}
        id={name}
        className="hidden"
      />
    </div>
  );
};
export default FileInput;

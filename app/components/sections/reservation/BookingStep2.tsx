'use client';

import { useEffect, useRef, useState } from 'react';
import BookCarCard from '../../cards/reservationCards/BookCarCard';

interface BookingStep2Props {
  htmlFor: string;
  name: string;
  carName: string;
  carImage: string;
  price: string;
  isChecked: boolean;
}

const BookingStep2: React.FC<BookingStep2Props> = ({
  htmlFor,
  name,
  carName,
  carImage,
  price,
  isChecked,
}) => {
  const radioRef = useRef<HTMLInputElement>(null);

  return (
    <div className="relative border border-neutral-700 rounded-md">
      <BookCarCard
        isChecked={isChecked}
        carName={carName}
        carImage={carImage}
        price={price}
      />
    </div>
  );
};
export default BookingStep2;

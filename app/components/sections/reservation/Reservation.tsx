'use client';

import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { BookingStep2, BookingStep3 } from '@/app/components';
import { DatePickerWithRange } from '@/app/components/ui/DatePickerWithRange';
import { DateRange } from 'react-day-picker';
import BookingSummary from './BookingSummary';
import { ReservationStep } from '@/app/enums';
import { Car, IReservation, IVehicule } from '@/app/types';
import BookingStep4 from './BookingStep4';
import { useParams, useRouter } from 'next/navigation';
import { createReservation } from '@/app/actions/bookAction';

interface IReservationProps {
  bookingInfo: IReservation | any;
  collection: IVehicule[] | any;
}

const Reservation: React.FC<IReservationProps> = ({
  bookingInfo,
  collection,
}) => {
  const params = useParams();
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);
  const [step, setStep] = useState<ReservationStep>(ReservationStep.ONE);
  const [carChoiceId, setCarChoiceId] = useState<string>('');
  const [date, setDate] = useState<DateRange | undefined>({
    from: undefined,
    to: undefined,
  });

  async function clientAction(formData: FormData) {
    const response = await createReservation(
      params.reservationId as string,
      formData
    );
    if (response?.error) {
      console.error(response.error);
    } else {
      router.push(response.session?.url as string);
    }
  }

  const handleTitle = (step: ReservationStep) => {
    switch (step) {
      case ReservationStep.ONE:
        return 'Choisir la Période de Location';
      case ReservationStep.TWO:
        return 'Sélectionner le Véhicule';
      case ReservationStep.THREE:
        return 'Options Supplémentaires';
      case ReservationStep.FOUR:
        return 'Vérifier votre identité';
    }
  };

  const handleReturnBtn = () => {
    if (step === ReservationStep.TWO) {
      setStep(ReservationStep.ONE);
    } else if (step === ReservationStep.THREE) {
      setStep(ReservationStep.TWO);
    } else if (step === ReservationStep.FOUR) {
      setStep(ReservationStep.THREE);
    }
  };

  return (
    <div>
      {step === ReservationStep.ONE ? (
        <Link
          href={'/'}
          className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors duration-200 w-max mb-6"
        >
          <ArrowLeftIcon className="h-4 w-4 " />
          <p>Retour</p>
        </Link>
      ) : (
        <button
          onClick={handleReturnBtn}
          className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors duration-200 w-max mb-6"
        >
          <ArrowLeftIcon className="h-4 w-4 " />
          <p>Retour</p>
        </button>
      )}

      <form ref={formRef} action={clientAction} className="booking-grid">
        <div>
          <h3 className="heading-4 mb-8">{handleTitle(step)}</h3>
          <div
            className={`${
              step === ReservationStep.ONE ? 'visible' : 'hidden'
            } `}
          >
            <DatePickerWithRange
              date={date}
              setDate={setDate}
              className="text-black"
            />
          </div>

          <div
            className={`${
              step === ReservationStep.TWO ? 'visible' : 'hidden'
            } grid grid-cols-3 gap-5`}
          >
            {collection.map((car: IVehicule) => (
              <div onClick={() => setCarChoiceId(car.id)} key={car.id}>
                <BookingStep2
                  htmlFor={String(car.id)}
                  carImage={car.carImage}
                  carName={`${car.make} ${car.model}`}
                  price={String(car.dailyPrice / 100)}
                  isChecked={carChoiceId === String(car.id)}
                  name="car"
                />
              </div>
            ))}
            <input
              type="text"
              name="carId"
              defaultValue={carChoiceId}
              className="hidden"
            />
          </div>

          <div
            className={`${
              step === ReservationStep.THREE ? 'visible' : 'hidden'
            } `}
          >
            <BookingStep4 />
          </div>

          <div
            className={`${
              step === ReservationStep.FOUR ? 'visible' : 'hidden'
            } `}
          >
            <BookingStep3 />
          </div>
        </div>

        <BookingSummary
          formRef={formRef}
          step={step}
          setStep={setStep}
          bookingInfo={bookingInfo}
        />
      </form>
    </div>
  );
};
export default Reservation;

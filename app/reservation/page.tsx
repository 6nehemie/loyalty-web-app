'use client';

import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useState } from 'react';
import { BookingStep2, BookingStep3 } from '../components';
import { fleet } from '../constants';
import { createReservation } from '../actions/bookAction';
import { DatePickerWithRange } from '../components/ui/DatePickerWithRange';
import { DateRange } from 'react-day-picker';
import { addDays } from 'date-fns';

enum ReservationStep {
  ONE,
  TWO,
  THREE,
  FOUR,
}

const ReservationPage = () => {
  // const date = new Date(Date.now()).toDateString();
  const [step, setStep] = useState<ReservationStep>(ReservationStep.ONE);
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(Date.now()),
    to: addDays(new Date(Date.now()), 5),
  });
  const [carChoice, setCarChoice] = useState({
    car: '',
    id: '',
  });

  async function clientAction(formData: FormData) {
    const result = await createReservation(formData);

    if (result?.error) {
    } else {
      console.error(result.error);
    }
  }

  const handleTitle = (step: ReservationStep) => {
    switch (step) {
      case ReservationStep.ONE:
        return 'Choisir la Période de Location';
      case ReservationStep.TWO:
        return 'Sélectionner le Véhicule.';
      case ReservationStep.THREE:
        return 'Préparer les Documents Requis';
    }
  };

  const handleReturnBtn = () => {
    if (step === ReservationStep.TWO) {
      setStep(ReservationStep.ONE);
    } else if (step === ReservationStep.THREE) {
      setStep(ReservationStep.TWO);
    }
  };

  const handleStepBtn = () => {
    if (step === ReservationStep.ONE) {
      setStep(ReservationStep.TWO);
    } else if (step === ReservationStep.TWO) {
      if (carChoice.id === '') return;
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

      <form action={clientAction} className="booking-grid">
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
            {fleet.collection.map((car) => (
              <div
                onClick={() =>
                  setCarChoice((prev) => ({
                    car: car.title,
                    id: String(car.id),
                  }))
                }
                key={car.id}
              >
                <BookingStep2
                  htmlFor={String(car.id)}
                  carImage={car.image}
                  carName={car.title}
                  price={car.price}
                  isChecked={carChoice.id === String(car.id)}
                  name="car"
                />
              </div>
            ))}
            <input
              type="text"
              name="carId"
              defaultValue={carChoice.id}
              className="hidden"
            />
          </div>

          <div
            className={`${
              step === ReservationStep.THREE ? 'visible' : 'hidden'
            } grid grid-cols-3 gap-5`}
          >
            <BookingStep3 />
          </div>
        </div>
        <div>
          <h3 className="heading-4 mb-8">Votre Réservation</h3>

          <div className="flex flex-col gap-5">
            <div className="bg-zinc-800 p-5 text-sm flex flex-col gap-4">
              <div className="text-sm">
                <h4 className="text-sm text-neutral-400">
                  Retrait du véhicule
                </h4>
                <p>{date?.from?.toDateString()}</p>
              </div>
              <div className="text-sm">
                <h4 className="text-sm text-neutral-400">
                  Restitution du véhicule
                </h4>
                <p>{date?.to?.toDateString()}</p>
              </div>
            </div>

            {carChoice.car && (
              <div className="bg-zinc-800 p-5 text-sm flex flex-col gap-4">
                <div className="text-sm">
                  <h4 className="text-sm text-neutral-400">
                    Véhicule sélectionné:
                  </h4>
                  <p>{carChoice.car}</p>
                </div>
              </div>
            )}

            {step !== ReservationStep.THREE && (
              <p
                onClick={handleStepBtn}
                className="bg-white text-dark-gray text-center py-2.5 hover:bg-neutral-200 duration-200 transition-colors cursor-pointer"
              >
                Continuer
              </p>
            )}
            {step === ReservationStep.THREE && (
              <button
                type="submit"
                className="bg-white text-dark-gray text-center py-2.5 hover:bg-neutral-200 duration-200 transition-colors cursor-pointer"
              >
                Continuer
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};
export default ReservationPage;

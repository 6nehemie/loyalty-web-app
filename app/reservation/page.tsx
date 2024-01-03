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
import { getStripeProducts } from '../actions/getStripeProducts';
import useFetchStripeProducts from '../hooks/useFetchStripeProducts';
import { useRouter } from 'next/navigation';
import { Currency } from 'lucide-react';

enum ReservationStep {
  ONE,
  TWO,
  THREE,
  FOUR,
}

const ReservationPage = () => {
  const router = useRouter();
  const productCollection = useFetchStripeProducts() as any;

  const [step, setStep] = useState<ReservationStep>(ReservationStep.ONE);
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(Date.now()),
    to: addDays(new Date(Date.now()), 5),
  });

  const [carChoice, setCarChoice] = useState({
    car: '',
    id: '',
    currency: '',
    name: '',
    unit_amount: 0,
  });

  async function clientAction(formData: FormData) {
    const response = await createReservation(formData, carChoice);

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
            {productCollection.map((car: any) => (
              <div
                onClick={() =>
                  setCarChoice((prev) => ({
                    car: car.product.name,
                    id: String(car.id),
                    currency: car.currency,
                    name: car.product.name,
                    unit_amount: car.unit_amount || 0, // Provide a default value
                  }))
                }
                key={car.id}
              >
                <BookingStep2
                  htmlFor={String(car.id)}
                  carImage={car.product.images[0]}
                  carName={car.product.name}
                  price={`${car.unit_amount! / 100}`}
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

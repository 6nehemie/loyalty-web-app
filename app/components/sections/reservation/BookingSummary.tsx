import { longFormatFrDate } from '@/app/utils/dates';
import ReservationDataCard from '../../cards/reservationCards/ReservationDataCard';
import { ReservationStep } from '@/app/enums';
import { useParams, useRouter } from 'next/navigation';
import {
  setBookingCarChoice,
  setBookingDates,
  setBookingExtra,
} from '@/app/actions/setsBookingInfo';
import { IReservation } from '@/app/types';
import { calculateTotalPrice } from '@/app/utils/function';

interface IBookingSummaryProps {
  step: number;
  formRef: React.RefObject<HTMLFormElement>;
  bookingInfo: IReservation;
  setStep: React.Dispatch<React.SetStateAction<ReservationStep>>;
}

const BookingSummary: React.FC<IBookingSummaryProps> = ({
  formRef,
  step,
  setStep,
  bookingInfo,
}) => {
  const params = useParams();
  const router = useRouter();
  const totalRentalCarPrice =
    (Number(bookingInfo.car?.price) || 0) * (bookingInfo?.rentalDays || 0);

  const bookingTotalPrice = calculateTotalPrice(
    totalRentalCarPrice,
    Number(bookingInfo?.additionalDriverPrice)
  );
  const reservationId = params.reservationId as string;

  const handleStepBtn = async () => {
    const formData = new FormData(formRef.current!);
    const dateFrom = formData.get('from') as string;
    const dateTo = formData.get('to') as string;
    const carId = formData.get('carId') as string;
    const additionalDriver = formData.get('additionalDriver');

    if (step === ReservationStep.ONE) {
      if (!dateFrom || !dateTo) return setStep(ReservationStep.ONE);
      const response = await setBookingDates(dateFrom, dateTo, reservationId);

      if (response?.error) {
        console.error(response.error);
      } else {
        router.refresh();
        setStep(ReservationStep.TWO);
      }
    } else if (step === ReservationStep.TWO) {
      if (!carId) return setStep(ReservationStep.TWO);
      const response = await setBookingCarChoice(carId, reservationId);

      if (response?.error) {
        console.error(response.error);
      } else {
        router.refresh();
        setStep(ReservationStep.THREE);
      }
    } else if (step === ReservationStep.THREE) {
      const addDriver = additionalDriver ? true : false;
      const response = await setBookingExtra(addDriver, reservationId);
      if (response?.error) {
        console.error(response.error);
      } else {
        router.refresh();
        setStep(ReservationStep.FOUR);
      }
    }
  };

  return (
    <div>
      <h3 className="heading-4 mb-8">Votre Réservation</h3>

      <div className="flex flex-col gap-2">
        {step !== ReservationStep.ONE && (
          <ReservationDataCard>
            <div className="text-sm">
              <h4 className="text-sm text-neutral-400">Retrait du véhicule</h4>
              <p>{longFormatFrDate(bookingInfo.startDate!) || '-'}</p>
            </div>
            <div className="text-sm">
              <h4 className="text-sm text-neutral-400">
                Restitution du véhicule
              </h4>
              <p>{longFormatFrDate(bookingInfo.endDate!) || '-'}</p>
            </div>
          </ReservationDataCard>
        )}

        {bookingInfo.car &&
          step !== ReservationStep.ONE &&
          step !== ReservationStep.TWO && (
            <ReservationDataCard>
              <div className="text-sm">
                <h4 className="text-sm text-neutral-400">
                  Véhicule sélectionné:
                </h4>
                <p>
                  {bookingInfo.car?.brand} {bookingInfo.car?.model}
                </p>
              </div>
            </ReservationDataCard>
          )}

        {bookingInfo.additionalDriver &&
          step !== ReservationStep.ONE &&
          step !== ReservationStep.TWO &&
          step !== ReservationStep.THREE && (
            <ReservationDataCard>
              <div className="text-sm flex flex-col gap-2">
                <h4 className="text-sm text-neutral-400">
                  Options Supplémentaires:
                </h4>

                {bookingInfo.additionalDriver && (
                  <p>
                    <span>Chauffeur Supplémentaire</span>
                  </p>
                )}
              </div>
            </ReservationDataCard>
          )}

        {bookingTotalPrice > 0 &&
          step !== ReservationStep.ONE &&
          step !== ReservationStep.TWO && (
            <ReservationDataCard>
              {bookingInfo.car?.price && (
                <div className="flex justify-between">
                  <p>Location de véhicule</p>
                  <p>{totalRentalCarPrice}€</p>
                </div>
              )}

              {bookingInfo.additionalDriver && (
                <div className="flex justify-between">
                  <p>Chauffeur Supplémentaire</p>
                  <p>{bookingInfo.additionalDriverPrice}€</p>
                </div>
              )}

              <div
                className={`flex items-center justify-between text-lg pt-4 mt-1 border-t border-t-neutral-600`}
              >
                <h3>Total</h3>
                <p>{bookingTotalPrice}€</p>
              </div>
            </ReservationDataCard>
          )}

        {step !== ReservationStep.FOUR && (
          <p
            onClick={handleStepBtn}
            className="bg-white text-dark-gray text-center py-2.5 hover:bg-neutral-200 duration-200 transition-colors cursor-pointer"
          >
            Continuer
          </p>
        )}
        {step === ReservationStep.FOUR && (
          <button
            type="submit"
            className="bg-white text-dark-gray text-center py-2.5 hover:bg-neutral-200 duration-200 transition-colors cursor-pointer"
          >
            Continuer
          </button>
        )}
      </div>
    </div>
  );
};
export default BookingSummary;

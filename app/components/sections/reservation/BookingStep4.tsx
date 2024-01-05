'use client';

import { UsersIcon } from '@heroicons/react/24/outline';
import ReservationCheckBox from '../../inputs/reservation/ReservationCheckBox';

const BookingStep4 = () => {
  return (
    <div className="flex flex-col gap-6">
      <p className="mb-2 text-neutral-400">
        Pour toute demande spécifique ou personnalisée, n&apos;hésitez pas à
        nous contacter directement. Nous sommes à votre disposition pour
        répondre à vos besoins particuliers.
      </p>

      <div className="flex flex-col gap-2">
        <ReservationCheckBox
          name="additionalDriver"
          label="Chauffeur Supplémentaire"
          icon={
            <UsersIcon className="h-8 text-neutral-400" strokeWidth={1.2} />
          }
          text="Les documents requis pour le conducteur principal seront également demandés au chauffeur supplémentaire."
        />
      </div>
    </div>
  );
};
export default BookingStep4;

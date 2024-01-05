import { ReservationFileInputs } from '../..';

const BookingStep3 = () => {
  return (
    <div className="flex flex-col gap-6">
      <p className="mb-2 text-neutral-400">
        Afin de faciliter le processus de remise, nous avons besoin que vous
        fournissiez certaines informations avant de pouvoir effectuer la
        réservation. Nous vous demandons de bien vouloir nous transmettre une
        copie de votre carte d&apos;`identité, un justificatif de domicile et
        votre permis de conduire.
      </p>

      <p className="text-neutral-400">Documents obligatoires *</p>

      <div className="flex flex-col gap-6">
        <ReservationFileInputs
          label="Carte d'identité"
          name="identityCard"
          text="Sélectionnez votre carte d'identité."
        />

        <div className="w-full bg-neutral-700 h-[1px]"></div>

        <ReservationFileInputs
          label="Permis de conduire"
          name="driverLicense"
          text="Sélectionnez votre permis de conduire."
        />

        <div className="w-full bg-neutral-700 h-[1px]"></div>

        <ReservationFileInputs
          label="Justificatif de domicile (moins de 3 mois)"
          name="homeCertificate"
          text="Sélectionnez votre justificatif de domicile"
        />
      </div>
    </div>
  );
};
export default BookingStep3;

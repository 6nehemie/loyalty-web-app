import { CalendarDaysIcon, KeyIcon } from '@heroicons/react/24/outline';
import { CalendarIcon } from '@radix-ui/react-icons';

const HowItWorks = () => {
  const infoStyle = 'flex flex-col gap-6';
  return (
    <section>
      <div className="main-gird-layout mb-8">
        <h1 className="heading-4 col-start-3 col-end-[-1]">
          UN FONCTIONNEMENT MODERNE
        </h1>
      </div>

      <div className="main-gird-layout">
        <div className={`${infoStyle} col-start-3 col-span-2`}>
          <h3 className="font-medium text-lg">RÉSERVATION FACILE</h3>
          <p className="text-sm">
            Sélectionnez votre véhicule, choisissez vos options, et téléchargez
            votre permis de conduire. Aucune attente au guichet de location de
            voiture, tout se fait facilement depuis votre téléphone ou votre
            ordinateur.
          </p>
        </div>

        <div className={`${infoStyle} col-start-6 col-span-2`}>
          <h3 className="font-medium text-lg">
            RECEVEZ VOTRE VÉHICULE RÉSERVÉ
          </h3>
          <p className="text-sm">
            Sélectionnez votre véhicule, choisissez vos options, et téléchargez
            votre permis de conduire. Aucune attente au guichet de location de
            voiture, tout se fait facilement depuis votre téléphone ou votre
            ordinateur.
          </p>
        </div>

        <div className={`${infoStyle} col-start-9 col-span-2`}>
          <h3 className="font-medium text-lg">NOUS LIVRONS ET RÉCUPÉRONS</h3>
          <p className="text-sm">
            Une fois que nous avons déposé votre voiture, il ne vous reste plus
            qu&apos;à commencer votre voyage. Des frais de livraison et de
            récupération s&apos;appliquent à Lille et ses environs. Des coûts
            additionnels sont à prévoir pour d&apos;autres emplacements de votre
            choix.
          </p>
        </div>
      </div>
    </section>
  );
};
export default HowItWorks;

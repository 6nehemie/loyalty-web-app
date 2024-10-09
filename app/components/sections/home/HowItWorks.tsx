import Link from 'next/link';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import { Roboto } from 'next/font/google';
import Image from 'next/image';
import SectionWrapper from '../../wrappers/SectionWrapper';
import InfoCard from '../../cards/InfoCard';

// Import the Roboto font
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

const HowItWorks = () => {
  return (
    <SectionWrapper>
      {/* Heading */}
      <div className="space-y-10">
        <h3
          className={`text-2xl sm:text-3xl font-normal mb-6 sm:mb-8 text-cool-gray-1 ${roboto.className}`}
        >
          <span className="text-dark-gray">Comment ça marche?</span>
        </h3>

        {/* Steps Grid */}

        <div className="grid grid-cols-1 sm:grid-cols-2  gap-5">
          <InfoCard
            title="Réservation sans effort"
            description="Choisissez votre voiture, vos options essentielles et téléchargez votre permis. Plus besoin d’attendre, tout se fait sur votre téléphone ou ordinateur."
            image="https://utfs.io/f/AkDgHfNpCyfwYy8yFHvAwLKxWu8C0pZrJctqal7D1TyeSRmk"
            altText="Réservation sans effort"
          />

          <InfoCard
            title="Nous livrons et récupérons"
            description="Livraison gratuite à Lille et ses environs, avec collecte incluse. Des frais peuvent s'appliquer pour d'autres zones."
            image="https://utfs.io/f/AkDgHfNpCyfwXIz4Btl2L4KT0VBbmrPpDwIknso7z6jM9vGq"
            altText="Nous livrons et récupérons"
          />

          {/* <InfoCard
            title="Nous livrons et récupérons"
            description="Livraison gratuite à Lille et ses environs, avec collecte incluse. Des frais peuvent s'appliquer pour d'autres zones."
            image="https://utfs.io/f/AkDgHfNpCyfwXIz4Btl2L4KT0VBbmrPpDwIknso7z6jM9vGq"
            altText="Nous livrons et récupérons"
          /> */}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default HowItWorks;

// import {
//   Body,
//   Button,
//   Container,
//   Column,
//   Head,
//   Heading,
//   Hr,
//   Html,
//   Img,
//   Link,
//   Preview,
//   Row,
//   Section,
//   Tailwind,
//   Text,
// } from '@react-email/components';
// import * as React from 'react';
import { hero } from '@/app/constants';
import Image from 'next/image';

interface WelcomEmailProps {
  fullName?: string;
  bookingLink?: string;
}

export const WelcomEmail = ({
  fullName = 'Nehemie Mombanga',
  bookingLink = 'https://loyalty-rc.com/book',
}: WelcomEmailProps) => {
  const previewText = `Bienvenue chez Loyalty RC `;

  return (
    <div>
      <div className="bg-[#F4F4F4] my-auto mx-auto font-exo">
        <div className="border bg-white border-solid border-[#eaeaea] rounded my-[40px] mx-auto max-w-[565px] w-full">
          <div className="font-exo text-dm text-black text-[24px] font-normal text-center p-0 mt-5 mx-0">
            <h1 className="text-lg font-light">Loyalty RC</h1>
          </div>
          <div className="py-2">
            <Image
              src={hero.image}
              width="565"
              height="270"
              alt="Vercel"
              className="my-0 mx-auto overflow-hidden object-center object-cover w-full"
            />
          </div>

          <div className="px-10 text-dark-gray font-light text-[14px] leading-[24px]">
            <p className="text-xl">Bienvenue</p>
            <p className="">Cher(e) {fullName},</p>
            <p className=" ">
              Bienvenue chez Loyalty RC, la destination ultime pour la location
              de voitures de sport et de luxe ! Nous sommes ravis de vous
              accueillir parmi les passionnés d&apos;automobiles qui ont choisi
              de vivre l&apos;expérience Loyalty.
            </p>
            <p className=" ">
              Dès maintenant, vous avez accès à notre flotte exceptionnelle de
              véhicules haut de gamme, prêts à transformer chacun de vos
              déplacements en une expérience inoubliable. Parcourez notre
              catalogue pour découvrir des modèles sensationnels, que ce soit
              pour un week-end d&apos;évasion, un événement spécial ou tout
              simplement pour savourer le plaisir de conduire.
            </p>
            <p className=" ">
              Votre compte Loyalty RC vous donne accès à des fonctionnalités
              exclusives, telles que la réservation en ligne rapide et facile,
              l&apos;accumulation de points de fidélité pour des avantages
              spéciaux, et bien plus encore. Ces fonctionnalités sont conçues
              pour rendre votre expérience de location aussi fluide et agréable
              que possible, vous permettant de profiter pleinement de chaque
              trajet avec Loyalty RC.
            </p>
            <p className=" ">Votre éauipe Loyalty RC</p>

            <div className="mt-[32px] mb-[32px]">
              <p
                className="bg-[#000] px-5 py-3 rounded text-white font-light text-sm no-underline text-center"
                // href={bookingLink}
              >
                Réserver une voiture
              </p>
            </div>

            <div className="bg-[#666666] h-[1px] my-[26px] mx-0 w-full"></div>

            <div className="text-[#666666] pb-10">
              <p className="">
                Contactez-nous pour toute question. (Veuillez noter que si vous
                répondez à cet e-mail, nous ne pourrons pas le voir.)
              </p>
              <p className="">© 2023 Loyalty RC. Tous droits réservés.</p>
              <p className="">
                <span className="text-lg mb-2">Loyalty RC</span>
                <br />
                38, Boulevard Carnot, Bureau 3, 59000 Lille, France
                <br />
                Email :{' '}
                <a href="mailto:contact@loyalty-rc.com">
                  contact@loyalty-rc.com
                </a>
                <br />
                Téléphone : +33 7 69 00 00 00
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomEmail;

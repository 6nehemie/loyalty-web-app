// import {
//   Body,
//   Button,
//   Container,
//   Head,
//   Heading,
//   Html,
//   Preview,
//   Tailwind,
//   Text,
// } from '@react-email/components';
// import * as React from 'react';

interface EmailResetTemplateProps {
  fullName?: string;
  bookingLink?: string;
  code?: string;
}

export const EmailResetTemplate = ({
  fullName = 'Nehemie Mombanga',
  code = '123456',
}: EmailResetTemplateProps) => {
  const previewText = `Changement d'adresse e-mail - Action Requise`;

  return (
    <div>
      <div className="bg-[#F4F4F4] my-auto mx-auto font-exo">
        <div className="border bg-white border-solid border-[#eaeaea] rounded my-[40px] mx-auto max-w-[565px] w-full">
          <div className="font-exo text-dm text-black text-[24px] font-normal text-center p-0 mt-5 mx-0">
            <h1 className="text-lg font-light">Loyalty RC</h1>
          </div>

          <div className="px-10 text-dark-gray font-light text-[14px] leading-[24px]">
            <p className="text-lg">Code de vérification.</p>
            <p className="">Cher(e) {fullName},</p>

            <p className=" ">
              Nous avons reçu une demande de changement d&apos;adresse e-mail
              pour votre compte Loyalty RC. Voici votre code de vérification :
            </p>

            <p className="bg-[#F4F4F4] text-black text-xl px-5 py-3 rounded font-light tracking-widest no-underline text-center">
              {code}
            </p>

            <p className=" ">
              Si vous n&apos;êtes pas à l&apos;origine de cette demande,
              veuillez ignorer ce message.
            </p>

            <p className=" ">Votre éauipe Loyalty RC</p>
            <p className=" ">
              Merci,
              <br />
              L&apos;équipe Loyalty RC
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailResetTemplate;

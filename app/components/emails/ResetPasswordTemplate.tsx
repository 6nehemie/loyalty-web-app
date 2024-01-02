// import {
//   Body,
//   Container,
//   Head,
//   Heading,
//   Html,
//   Preview,
//   Tailwind,
//   Text,
// } from '@react-email/components';
import * as React from 'react';

interface ResetPasswordTemplateProps {
  password?: string;
}

export const ResetPasswordTemplate = ({
  password = 'test1234L.14',
}: ResetPasswordTemplateProps) => {
  const previewText = `Votre nouveau mot de passe`;

  return (
    <div>
      <div className="bg-[#F4F4F4] my-auto mx-auto font-exo">
        <div className="border bg-white border-solid border-[#eaeaea] rounded my-[40px] mx-auto max-w-[565px] w-full">
          <div className="font-exo text-dm text-black text-[24px] font-normal text-center p-0 mt-5 mx-0">
            <h1 className="text-lg font-light">Loyalty RC</h1>
          </div>

          <div className="px-10 text-dark-gray font-light text-[14px] leading-[24px]">
            <p className="text-lg">Code de vérification.</p>
            <p className="">Cher client,</p>

            <p className=" ">
              Vous avez récemment demandé la réinitialisation de votre mot de
              passe. Vous trouverez ci-dessous votre nouveau mot de passe
              temporaire. N&apos;oubliez pas de le modifier dès que possible
              depuis votre espace personnel Loyalty RC pour des raisons de
              sécurité.
            </p>
            <p>
              <span>Nouveau mot de passe temporaire : </span>
              <span className="bg-[#F4F4F4] text-black text-md px-2.5 py-1.5 rounded font-light tracking-widest no-underline text-center">
                {password}
              </span>
            </p>

            <p className=" ">Nous vous remercions pour votre confiance.</p>

            <p className=" ">Votre équipe Loyalty RC</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordTemplate;

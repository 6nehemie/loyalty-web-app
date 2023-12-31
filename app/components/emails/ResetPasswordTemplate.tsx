import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Tailwind,
  Text,
} from '@react-email/components';
import * as React from 'react';

interface ResetPasswordTemplateProps {
  password?: string;
}

export const ResetPasswordTemplate = ({
  password = 'test1234L.14',
}: ResetPasswordTemplateProps) => {
  const previewText = `Votre nouveau mot de passe`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-[#F4F4F4] my-auto mx-auto font-exo">
          <Container className="border bg-white border-solid border-[#eaeaea] rounded my-[40px] mx-auto max-w-[565px] w-full">
            <Heading className="font-exo text-dm text-black text-[24px] font-normal text-center p-0 mt-5 mx-0">
              <Text className="text-lg font-light">Loyalty RC</Text>
            </Heading>

            <div className="px-10 text-dark-gray font-light text-[14px] leading-[24px]">
              <Text className="text-lg">Code de vérification.</Text>
              <Text className="">Cher client,</Text>

              <Text className=" ">
                Vous avez récemment demandé la réinitialisation de votre mot de
                passe. Vous trouverez ci-dessous votre nouveau mot de passe
                temporaire. N&apos;oubliez pas de le modifier dès que possible
                depuis votre espace personnel Loyalty RC pour des raisons de
                sécurité.
              </Text>
              <p>
                <span>Nouveau mot de passe temporaire : </span>
                <span className="bg-[#F4F4F4] text-black text-md px-2.5 py-1.5 rounded font-light tracking-widest no-underline text-center">
                  {password}
                </span>
              </p>

              <Text className=" ">
                Nous vous remercions pour votre confiance.
              </Text>

              <Text className=" ">Votre équipe Loyalty RC</Text>
            </div>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ResetPasswordTemplate;

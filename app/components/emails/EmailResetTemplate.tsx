import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Tailwind,
  Text,
} from '@react-email/components';
import * as React from 'react';

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
              <Text className="">Cher(e) {fullName},</Text>

              <Text className=" ">
                Nous avons reçu une demande de changement d&apos;adresse e-mail
                pour votre compte Loyalty RC. Voici votre code de vérification :
              </Text>
              <Button className="bg-[#F4F4F4] text-black text-xl px-5 py-3 rounded font-light tracking-widest no-underline text-center">
                {code}
              </Button>

              <Text className=" ">
                Si vous n&apos;êtes pas à l&apos;origine de cette demande,
                veuillez ignorer ce message.
              </Text>

              <Text className=" ">Votre éauipe Loyalty RC</Text>
              <Text className=" ">
                Merci,
                <br />
                L&apos;équipe Loyalty RC
              </Text>
            </div>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default EmailResetTemplate;

'use client';

import { resetPassword } from '@/app/actions/updateProfil';
import { EditCard, InputFrom, SubmitButton } from '@/app/components';
import { IResetPasswordValidation } from '@/app/types';
import { useState } from 'react';
import { useFormStatus } from 'react-dom';

interface IEmailProps {
  isEditing: boolean;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
}

const ForgotPassword: React.FC<IEmailProps> = ({ isEditing, setIsEditing }) => {
  const { pending } = useFormStatus();

  const [error, setError] = useState<IResetPasswordValidation>({
    email: '',
  });

  async function clientAction(formData: FormData) {
    const result = await resetPassword(formData);
    // if (result?.error) {
    //   if (Array.isArray(result.error))
    //     emailUpdateValidation(result.error, setError);
    // } else {
    //   emailUpdateValidation([], setError); // reset error
    // }
    setIsEditing(false);
  }
  return (
    <EditCard isEditing={isEditing} setIsEditing={setIsEditing}>
      <div className="mb-6">
        <h1 className="heading-4 ">Réinitialiser votre mot de passe</h1>
        <p className="text-sm mb-10">
          Un nouveau mot de passe vous sera envoyé sur votre adresse e-mail
        </p>
      </div>
      <form action={clientAction}>
        <div className="flex flex-col gap-6">
          <InputFrom
            label="Entrez votre adresse e-mail associée à votre compte. *"
            name="email"
            type="email"

            // error={error.firstName ? true : false}
            // errorMessage={error.firstName}
            // required
          />
          <SubmitButton
            type="submit"
            label="Enregistrer"
            ariaDisabled={pending}
            className="w-max text-sm"
          />
        </div>
      </form>
    </EditCard>
  );
};
export default ForgotPassword;

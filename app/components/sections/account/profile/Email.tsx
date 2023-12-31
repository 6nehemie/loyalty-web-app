'use client';

import { updateEmail } from '@/app/actions/updateProfil';
import {
  EditCard,
  InputFrom,
  MyProfilCard,
  SubmitButton,
} from '@/app/components';
import { IEmailUpdateValidation } from '@/app/types';
import { emailUpdateValidation } from '@/app/utils/updateValitaion';
import axios from 'axios';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useFormStatus } from 'react-dom';

interface IEmailProps {
  email?: string;
  resetCode?: string;
}

const Email: React.FC<IEmailProps> = ({ email }) => {
  const router = useRouter();
  const { pending } = useFormStatus();

  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [error, setError] = useState<IEmailUpdateValidation>({
    email: '',
    resetCode: '',
  });

  const SendResetCode = async () => {
    try {
      const result = await axios.post('/api/send/email/reset');
      if (result.data.error) throw new Error(result.data.error.message);
    } catch (error) {
      console.error(error);
    }
  };

  const handleOpenModalAndSendCode = async () => {
    setIsEditing(true);
    try {
      const result = await axios.post('/api/send/email/reset');
      if (result.data.error) throw new Error(result.data.error.message);
    } catch (error) {
      console.error(error);
    }
  };

  async function clientAction(formData: FormData) {
    const result = await updateEmail(formData, email as string);
    if (result?.error) {
      if (Array.isArray(result.error))
        emailUpdateValidation(result.error, setError);
    } else {
      emailUpdateValidation([], setError); // reset error
      setIsEditing(false);
      router.refresh();
      signOut();
    }
  }

  return (
    <div>
      <MyProfilCard
        title="E-mail"
        btnAction={handleOpenModalAndSendCode}
        btnLabel="Éditer"
        displayBtn={email ? true : false}
      >
        <div>
          <p>{email}</p>
        </div>
      </MyProfilCard>

      <EditCard isEditing={isEditing} setIsEditing={setIsEditing}>
        <h1 className="heading-4 mb-6">Modifier votre addresse email</h1>
        <form action={clientAction}>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2 ">
              <InputFrom
                label="Code de vérification *"
                name="resetCode"
                type="text"
                error={error.resetCode ? true : false}
                errorMessage={error.resetCode}
                // required
              />
              <p>
                <button
                  onClick={SendResetCode}
                  className="self-end pb-3.5 text-blue"
                >
                  Renvoyer
                </button>
              </p>
            </div>
            <div className="col-span-2">
              <InputFrom
                label="Nouvelle adresse e-mail *"
                name="newEmail"
                type="email"
                error={error.email ? true : false}
                errorMessage={error.email!}
                // required
              />
            </div>

            <SubmitButton
              type="submit"
              label="Enregistrer"
              ariaDisabled={pending}
              className="w-max text-sm row-start-3"
            />
          </div>
        </form>
      </EditCard>
    </div>
  );
};
export default Email;

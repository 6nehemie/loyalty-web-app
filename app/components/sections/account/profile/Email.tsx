'use client';

import {
  EditCard,
  InputFrom,
  MyProfilCard,
  SubmitButton,
} from '@/app/components';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useFormStatus } from 'react-dom';

interface IEmailProps {
  email?: string | null | undefined;
  resetCode?: string | null | undefined;
}

const Email: React.FC<IEmailProps> = ({ email }) => {
  const router = useRouter();
  const { pending } = useFormStatus();

  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [error, setError] = useState<IEmailProps>({
    email: '',
    resetCode: '',
  });

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
    // const result = await updateEmail(formData, email);
    // if (result?.error) {
    //   if (Array.isArray(result.error))
    //     nameUpdateValidation(result.error, setError);
    // } else {
    //   nameUpdateValidation([], setError); // reset error
    //   setIsEditing(false);
    //   router.refresh();
    // }
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
        <h1 className="heading-4 mb-6">Modifier votre nom</h1>
        <form action={clientAction}>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-4">
              <InputFrom
                label="Code de vérification *"
                name="firstName"
                type="text"
                error={error.email ? true : false}
                // errorMessage={error.email}
                // required
              />
              <button>Renvoyer</button>
            </div>
            <div className="col-span-2">
              <InputFrom
                label="Nouvelle adresse e-mail *"
                name="firstName"
                type="text"
                error={error.email ? true : false}
                // errorMessage={error.email}
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

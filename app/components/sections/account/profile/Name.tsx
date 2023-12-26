'use client';

import { updateName } from '@/app/actions/updateProfil';
import {
  EditCard,
  InputFrom,
  MyProfilCard,
  SubmitButton,
} from '@/app/components';
import { INameUpdateValidation } from '@/app/types';
import { nameUpdateValidation } from '@/app/utils/updateValitaion';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useFormStatus } from 'react-dom';

interface INameProps {
  firstName: string;
  lastName: string;
}

const Name: React.FC<INameProps> = ({ firstName, lastName }) => {
  const router = useRouter();
  const { pending } = useFormStatus();
  const session = useSession();
  const email = session!.data!.user!.email as string;

  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [error, setError] = useState<INameUpdateValidation>({
    firstName: '',
    lastName: '',
  });

  async function clientAction(formData: FormData) {
    const result = await updateName(formData, email);
    if (result?.error) {
      if (Array.isArray(result.error))
        nameUpdateValidation(result.error, setError);
    } else {
      nameUpdateValidation([], setError); // reset error
      setIsEditing(false);
      router.refresh();
    }
  }

  return (
    <>
      <div>
        <MyProfilCard
          title="Nom Complet"
          btnAction={() => setIsEditing(true)}
          btnLabel="Éditer"
          displayBtn={firstName && lastName ? true : false}
        >
          <div>
            <p>
              {firstName} {lastName}
            </p>
          </div>
        </MyProfilCard>
      </div>

      <EditCard isEditing={isEditing} setIsEditing={setIsEditing}>
        <h1 className="heading-4 mb-6">Modifier votre nom</h1>
        <form action={clientAction}>
          <div className="grid grid-cols-2 gap-4">
            <InputFrom
              label="Prénom *"
              name="firstName"
              type="text"
              defaultValue={firstName}
              error={error.firstName ? true : false}
              errorMessage={error.firstName}
              // required
            />
            <InputFrom
              label="Nom *"
              name="lastName"
              type="text"
              defaultValue={lastName}
              error={error.lastName ? true : false}
              errorMessage={error.lastName}
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
    </>
  );
};
export default Name;

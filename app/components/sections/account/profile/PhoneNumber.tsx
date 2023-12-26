'use client';

import { updatePhoneNumber } from '@/app/actions/updateProfil';
import {
  AddInfoBtn,
  EditCard,
  InputFrom,
  MyProfilCard,
  SubmitButton,
} from '@/app/components';
import { set } from 'mongoose';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useFormStatus } from 'react-dom';

interface IPhoneNumberProps {
  number?: string | null | undefined;
}

const PhoneNumber: React.FC<IPhoneNumberProps> = ({ number }) => {
  const router = useRouter();
  const { pending } = useFormStatus();
  const session = useSession();
  const email = session!.data!.user!.email as string;

  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [error, setError] = useState('');

  async function clientAction(formData: FormData) {
    const result = await updatePhoneNumber(formData, email);
    if (result?.error) {
      if (Array.isArray(result.error)) setError(result.error[0]);
    } else {
      setIsEditing(false);
      setError('');
      router.refresh();
    }
  }
  return (
    <div>
      <MyProfilCard
        title="Numéro de téléphone"
        btnAction={() => setIsEditing(true)}
        btnLabel="Éditer"
        displayBtn={number ? true : false}
      >
        <div>
          {number ? (
            <p>{number}</p>
          ) : (
            <AddInfoBtn
              btnLabel="Ajouter nouveau"
              btnAction={() => setIsEditing(true)}
            />
          )}
        </div>
      </MyProfilCard>

      <EditCard isEditing={isEditing} setIsEditing={setIsEditing}>
        <h1 className="heading-4 mb-6">Modifer le numéro de téléphone</h1>
        <form action={clientAction}>
          <div className="flex flex-col gap-4">
            <InputFrom
              label="Numéro de téléphone"
              name="phoneNumber"
              type="text"
              defaultValue={number ? number : ''}
              error={error ? true : false}
              errorMessage={error}
            />

            <SubmitButton
              type="submit"
              label="Enregistrer"
              ariaDisabled={pending}
              className="w-max text-sm row-start-2"
            />
          </div>
        </form>
      </EditCard>
    </div>
  );
};
export default PhoneNumber;

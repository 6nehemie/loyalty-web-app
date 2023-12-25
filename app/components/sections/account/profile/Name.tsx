'use client';

import { updateName } from '@/app/actions/updateProfil';
import {
  EditCard,
  InputFrom,
  MyProfilCard,
  SubmitButton,
} from '@/app/components';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface INameProps {
  firstName: string;
  lastName: string;
}

const Name: React.FC<INameProps> = ({ firstName, lastName }) => {
  const router = useRouter();
  const session = useSession();
  const email = session!.data!.user!.email as string;
  const [isEditing, setIsEditing] = useState<boolean>(false);

  async function clientAction(formData: FormData) {
    const result = await updateName(formData, email);
    if (result?.error) {
      console.error(result.error);
    }
    router.refresh();
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
              label="Prénom"
              name="firstName"
              type="text"
              defaultValue={firstName}
              required
            />
            <InputFrom
              label="Nom"
              name="lastName"
              type="text"
              defaultValue={lastName}
              required
            />
            <SubmitButton
              type="submit"
              label="Enregistrer"
              className="w-max text-sm"
            />
          </div>
        </form>
      </EditCard>
    </>
  );
};
export default Name;

'use client';

import { updatePassword } from '@/app/actions/updateProfil';
import {
  EditCard,
  InputFrom,
  MyProfilCard,
  SubmitButton,
} from '@/app/components';
import { userInfos } from '@/app/constants';
import { IPasswordUpdateValidation } from '@/app/types';
import { passwordUpdateValidation } from '@/app/utils/updateValitaion';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useFormStatus } from 'react-dom';

const Password = () => {
  const handleNameEdit = () => {};

  const router = useRouter();
  const { pending } = useFormStatus();
  const session = useSession();
  const email = session!.data!.user!.email as string;

  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [error, setError] = useState<IPasswordUpdateValidation>({
    password: '',
    newPassword: '',
    passwordConfirm: '',
  });

  async function clientAction(formData: FormData) {
    const result = await updatePassword(formData, email);
    if (result?.error) {
      if (Array.isArray(result.error))
        passwordUpdateValidation(result.error, setError);
    } else {
      passwordUpdateValidation([], setError); // reset error
      setIsEditing(false);
      router.refresh();
    }
  }

  return (
    <div>
      <MyProfilCard
        title="Mot de passe"
        btnAction={() => setIsEditing(true)}
        btnLabel="Rénitialiser"
        displayBtn={userInfos.address ? true : false}
      >
        <p>* * * * * * * * * * * *</p>
      </MyProfilCard>
      <EditCard isEditing={isEditing} setIsEditing={setIsEditing}>
        <h1 className="heading-4 mb-6">Modifier votre nom</h1>
        <form action={clientAction}>
          <div className="flex flex-col gap-6">
            <InputFrom
              label="Mot de passe *"
              name="password"
              type="password"
              error={error.password ? true : false}
              errorMessage={error.password}
              // required
            />
            <InputFrom
              label="Nouveau mot de passe *"
              name="newPassword"
              type="password"
              error={error.newPassword ? true : false}
              errorMessage={error.newPassword}
              // required
            />
            <InputFrom
              label="Confirmation de mot de passe *"
              name="passwordConfirm"
              type="password"
              error={error.passwordConfirm ? true : false}
              errorMessage={error.passwordConfirm}
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
    </div>
  );
};
export default Password;

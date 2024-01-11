'use client';

import { deleteAccount } from '@/app/actions/updateProfil';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const DeleteAccount = ({ email }: { email: string }) => {
  const router = useRouter();

  const clientAction = async () => {
    try {
      await deleteAccount(email);
      signOut();
    } catch (error) {
      console.error(error);
    }
    router.refresh();
  };

  return (
    <button onClick={clientAction} className="font-exo font-light underline">
      Supprimer mon compte Loyalty.RC
    </button>
  );
};
export default DeleteAccount;

'use client';

import { deleteAccount } from '@/app/actions/updateProfil';
import { signOut } from 'next-auth/react';

const DeleteAccount = ({ email }: { email: string }) => {
  const clientAction = async () => {
    try {
      await deleteAccount(email);
      signOut();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button onClick={clientAction} className="font-exo font-light underline">
      Supprimer mon compte Loyalty.RC
    </button>
  );
};
export default DeleteAccount;

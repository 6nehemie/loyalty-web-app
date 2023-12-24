'use client';

import { MyProfilCard } from '@/app/components';
import { userInfos } from '@/app/constants';

const Password = () => {
  const handleNameEdit = () => {};
  return (
    <div>
      {' '}
      <MyProfilCard
        title="Mot de passe"
        btnAction={handleNameEdit}
        btnLabel="Rénitialiser"
        displayBtn={userInfos.address ? true : false}
      >
        <p>* * * * * * * * * * * *</p>
      </MyProfilCard>
    </div>
  );
};
export default Password;

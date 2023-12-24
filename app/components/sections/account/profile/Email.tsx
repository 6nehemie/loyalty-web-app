'use client';

import { MyProfilCard } from '@/app/components';
import { userInfos } from '@/app/constants';

const Email = () => {
  const handleNameEdit = () => {};
  return (
    <div>
      <MyProfilCard
        title="E-mail"
        btnAction={handleNameEdit}
        btnLabel="Éditer"
        displayBtn={userInfos.email ? true : false}
      >
        <div>
          <p>
            {userInfos.firstName} {userInfos.lastName}
          </p>
        </div>
      </MyProfilCard>
    </div>
  );
};
export default Email;

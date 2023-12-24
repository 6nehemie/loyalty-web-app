'use client';

import { AddInfoBtn, MyProfilCard } from '@/app/components';
import { userInfos } from '@/app/constants';

interface IPhoneNumberProps {
  number?: string | null | undefined;
}

const PhoneNumber: React.FC<IPhoneNumberProps> = ({ number }) => {
  const handleNameEdit = () => {};
  const handleAddNumber = () => {};
  return (
    <div>
      <MyProfilCard
        title="Numéro de téléphone"
        btnAction={handleNameEdit}
        btnLabel="Éditer"
        displayBtn={number ? true : false}
      >
        <div>
          {number ? (
            <p>{number}</p>
          ) : (
            <AddInfoBtn
              btnLabel="Ajouter nouveau"
              btnAction={handleAddNumber}
            />
          )}
        </div>
      </MyProfilCard>
    </div>
  );
};
export default PhoneNumber;

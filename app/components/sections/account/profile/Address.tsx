'use client';

import { AddInfoBtn, MyProfilCard } from '@/app/components';
import { userInfos } from '@/app/constants';

interface IAddressProps {
  addressLine1?: string | null | undefined;
  addressLine2?: string | null | undefined;
  postalCode?: string | null | undefined;
  city?: string | null | undefined;
  country?: string | null | undefined;
}

const Address: React.FC<IAddressProps> = ({
  addressLine1,
  postalCode,
  city,
  country,
}) => {
  const handleNameEdit = () => {};
  const handleAddNumber = () => {};
  const hasAnAddress =
    addressLine1 && postalCode && city && country ? true : false;

  return (
    <div>
      <MyProfilCard
        title="Addresse"
        btnAction={handleNameEdit}
        btnLabel="Éditer"
        displayBtn={hasAnAddress}
      >
        {addressLine1 && postalCode && city && country ? (
          <div className="">
            <p>{addressLine1}</p>
            <p>
              {city}, {postalCode}
            </p>
            <p>{country}</p>
          </div>
        ) : (
          <AddInfoBtn btnLabel="Ajouter nouveau" btnAction={handleAddNumber} />
        )}
      </MyProfilCard>
    </div>
  );
};
export default Address;

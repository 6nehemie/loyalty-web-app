'use client';

import {
  AddInfoBtn,
  EditCard,
  InputFrom,
  MyProfilCard,
  SubmitButton,
} from '@/app/components';
import { userInfos } from '@/app/constants';
import { IAddressUpdateValidation } from '@/app/types';
import { useState } from 'react';
import { useFormStatus } from 'react-dom';

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
  const { pending } = useFormStatus();
  const hasAnAddress =
    addressLine1 && postalCode && city && country ? true : false;

  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [error, setError] = useState<IAddressUpdateValidation>({
    country: '',
    address1: '',
    address2: '',
    city: '',
    postalCode: '',
  });

  async function clientAction(formData: FormData) {}

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

      <EditCard isEditing={isEditing} setIsEditing={setIsEditing}>
        <h1 className="heading-4 mb-6">Modifier votre nom</h1>
        <form action={clientAction}>
          <div className="grid grid-cols-2 gap-4">
            <InputFrom
              label="Prénom *"
              name="firstName"
              type="text"
              // defaultValue={firstName}
              // error={error.firstName ? true : false}
              // errorMessage={error.firstName}
              // required
            />
            <InputFrom
              label="Nom *"
              name="lastName"
              type="text"
              // defaultValue={lastName}
              // error={error.lastName ? true : false}
              // errorMessage={error.lastName}
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
export default Address;

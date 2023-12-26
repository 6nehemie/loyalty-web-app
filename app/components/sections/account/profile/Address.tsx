'use client';

import { updateAddress } from '@/app/actions/updateProfil';
import {
  AddInfoBtn,
  EditCard,
  InputFrom,
  MyProfilCard,
  SubmitButton,
} from '@/app/components';
import { IAddressUpdateValidation } from '@/app/types';
import { addressUpdateValidation } from '@/app/utils/updateValitaion';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
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
  const router = useRouter();
  const { pending } = useFormStatus();

  const session = useSession();
  const email = session!.data!.user!.email as string;

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

  async function clientAction(formData: FormData) {
    const result = await updateAddress(formData, email);
    if (result?.error) {
      if (Array.isArray(result.error))
        addressUpdateValidation(result.error, setError);
    } else {
      addressUpdateValidation([], setError); // reset error
      setIsEditing(false);
      router.refresh();
    }
  }

  return (
    <div>
      <MyProfilCard
        title="Addresse"
        btnAction={() => setIsEditing(true)}
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
          <AddInfoBtn
            btnLabel="Ajouter nouveau"
            btnAction={() => setIsEditing(true)}
          />
        )}
      </MyProfilCard>

      <EditCard isEditing={isEditing} setIsEditing={setIsEditing}>
        <h1 className="heading-4 mb-6">Modifier l&apos;adresse</h1>
        <form action={clientAction}>
          <div className="grid grid-cols-2 gap-4">
            <InputFrom
              label="Pays"
              name="country"
              type="text"
              defaultValue={country ? country : ''}
              error={error.country ? true : false}
              errorMessage={error.country}
            />
            <InputFrom
              label="Adresse ligne 1"
              name="addressLine1"
              type="text"
              defaultValue={addressLine1 ? addressLine1 : ''}
              error={error.address1 ? true : false}
              errorMessage={error.address1}
            />
            <InputFrom
              label="Ville"
              name="city"
              type="text"
              defaultValue={city ? city : ''}
              error={error.city ? true : false}
              errorMessage={error.city}
            />
            <InputFrom
              label="Code postal"
              name="postalCode"
              type="number"
              defaultValue={postalCode ? postalCode : ''}
              error={error.postalCode ? true : false}
              errorMessage={error.postalCode}
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

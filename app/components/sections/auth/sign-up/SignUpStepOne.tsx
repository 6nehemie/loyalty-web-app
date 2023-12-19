'use client';

import { CheckboxForm, InputFrom, SelectForm } from '@/app/components';
import { ChoiceType, UserStepOneDataType } from '@/app/types';
import { Validation } from '@/app/utils/validation';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface SignUpStepOneProps {
  setIsNextStepAllowed: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignUpStepOne: React.FC<SignUpStepOneProps> = ({
  setIsNextStepAllowed,
}) => {
  const [userStepOneData, setUserStepOneData] = useState<UserStepOneDataType>({
    civility: undefined,
    firstName: '',
    lastName: '',
    email: '',
    generalConditions: false,
    privacy: false,
  });

  const handleCivilityChange = (civility: ChoiceType) => {
    setUserStepOneData((prev) => ({ ...prev, civility }));
  };
  const handleFirstNameChange = (firstName: string) => {
    setUserStepOneData((prev) => ({ ...prev, firstName }));
  };
  const handleLastNameChange = (lastName: string) => {
    setUserStepOneData((prev) => ({ ...prev, lastName }));
  };
  const handleEmailChange = (email: string) => {
    setUserStepOneData((prev) => ({ ...prev, email }));
  };
  const handleGeneralConditionsChange = (generalConditions: boolean) => {
    setUserStepOneData((prev) => ({ ...prev, generalConditions }));
  };
  const handlePrivacyChange = (privacy: boolean) => {
    setUserStepOneData((prev) => ({ ...prev, privacy }));
  };

  useEffect(() => {
    if (
      userStepOneData?.civility &&
      Validation.isValidName(userStepOneData?.firstName) &&
      Validation.isValidName(userStepOneData?.lastName) &&
      Validation.isEmailValid(userStepOneData?.email) &&
      userStepOneData?.generalConditions &&
      userStepOneData?.privacy
    ) {
      setIsNextStepAllowed(true);
    } else setIsNextStepAllowed(false);
  }, [userStepOneData, setIsNextStepAllowed]);

  return (
    <div className="flex flex-col gap-4">
      <SelectForm setCurrentValue={handleCivilityChange} />

      {/* INPUT */}
      <div className="grid grid-cols-2 gap-6 w-full">
        <InputFrom
          setCurrentValue={handleFirstNameChange}
          label="Prénom *"
          type="text"
          name="firstName"
          required
        />
        <InputFrom
          setCurrentValue={handleLastNameChange}
          label="Nom *"
          type="text"
          name="lastName"
          required
        />
      </div>
      <InputFrom
        setCurrentValue={handleEmailChange}
        label="Email *"
        type="email"
        name="email"
        required
      />

      {/* CHECK BOX */}
      <div className="flex flex-col gap-2 mt-2 w-full">
        <CheckboxForm
          setCurrentValue={handleGeneralConditionsChange}
          name="general-conditions"
          required
        >
          <p>
            J&apos;ai pris connaissance des{' '}
            <Link href={'/'} target="_blank" className="underline">
              Conditions générales
            </Link>{' '}
            et les accepte. *
          </p>
        </CheckboxForm>

        <CheckboxForm
          setCurrentValue={handlePrivacyChange}
          name="privacy"
          required
        >
          <p>
            J&apos;ai pris connaissance de la{' '}
            <Link href={'/'} target="_blank" className="underline">
              {' '}
              déclaration de confidentialité
            </Link>
            . *
          </p>
        </CheckboxForm>
      </div>
    </div>
  );
};
export default SignUpStepOne;

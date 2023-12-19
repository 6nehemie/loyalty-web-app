'use client';

import { CheckboxForm, InputFrom } from '@/app/components';
import { UserStepTwoData } from '@/app/types';
import { Validation } from '@/app/utils/validation';
import { useEffect, useState } from 'react';

interface SignUpStepTwoProps {
  setIsAllowedToSubmit: (isAllowed: boolean) => void;
}

const SignUpStepTwo: React.FC<SignUpStepTwoProps> = ({
  setIsAllowedToSubmit,
}) => {
  const [stepTwoUserData, setStepTwoUserData] = useState<UserStepTwoData>({
    password: '',
    confirmPassword: '',
    newsletter: false,
  });

  useEffect(() => {
    console.log(Validation.isValidPassword(stepTwoUserData?.password));
    if (
      Validation.isValidPassword(stepTwoUserData?.password) &&
      Validation.arePasswordsMatching(
        stepTwoUserData?.password,
        stepTwoUserData?.confirmPassword
      )
    ) {
      setIsAllowedToSubmit(true);
    } else setIsAllowedToSubmit(false);
  }, [stepTwoUserData, setIsAllowedToSubmit]);

  const handlePasswordChange = (password: string) => {
    setStepTwoUserData((prev) => ({ ...prev, password }));
  };

  const handleConfirmPasswordChange = (confirmPassword: string) => {
    setStepTwoUserData((prev) => ({ ...prev, confirmPassword }));
  };

  const handleSubscribeToNewsletter = (newsletter: boolean) => {
    setStepTwoUserData((prev) => ({ ...prev, newsletter }));
  };

  return (
    <div className="flex flex-col gap-6">
      <InputFrom
        label="Mot de passe *"
        type="password"
        name="password"
        setCurrentValue={handlePasswordChange}
        required
      />
      <InputFrom
        label="Confirmez le mot de passe *"
        type="password"
        setCurrentValue={handleConfirmPasswordChange}
        name="confirmPassword"
        required
      />
      <CheckboxForm
        setCurrentValue={handleSubscribeToNewsletter}
        name="newsletter"
      >
        <p>Recevoir les news Loylaty.RC .</p>
      </CheckboxForm>
    </div>
  );
};
export default SignUpStepTwo;

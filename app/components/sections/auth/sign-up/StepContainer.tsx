'use client';

import { useEffect, useState } from 'react';
import SignUpStepOne from './SignUpStepOne';
import SignUpStepTwo from './SignUpStepTwo';
import { ChoiceType } from '@/app/types';
import { AntiFormBtn, SubmitButton } from '@/app/components';
import Link from 'next/link';

enum SignUpStep {
  STEP_ONE,
  STEP_TWO,
  SUBMIT,
}

const StepContainer = () => {
  const [step, setStep] = useState(SignUpStep.STEP_ONE);
  const [isNextStepAllowed, setIsNextStepAllowed] = useState<boolean>(false);
  const [isAllowedToSubmit, setIsAllowedToSubmit] = useState<boolean>(false);

  const handleNextStep = () => {
    if (isNextStepAllowed) setStep(SignUpStep.STEP_TWO);
  };

  const handleAllowSubmit = (isAllowed: boolean) => {
    if (isAllowed) setStep(SignUpStep.SUBMIT);
    else setStep(SignUpStep.STEP_TWO);
  };

  return (
    <div className="flex flex-col gap-12">
      {step === SignUpStep.STEP_ONE ? (
        <div>
          <SignUpStepOne setIsNextStepAllowed={setIsNextStepAllowed} />
        </div>
      ) : (
        <div>
          <SignUpStepTwo setIsAllowedToSubmit={handleAllowSubmit} />
        </div>
      )}

      <div className="font-light">
        {step === SignUpStep.STEP_ONE ? (
          <AntiFormBtn
            label="Continuer"
            onClick={handleNextStep}
            className="w-full mb-3"
          />
        ) : (
          <SubmitButton
            type="submit"
            label="Inscription"
            disabled={step === SignUpStep.SUBMIT ? false : true}
            className="w-full mb-3"
          />
        )}

        <p>
          Avez-vous déjà un compte ?{' '}
          <Link href={'/sign-in'} className="underline">
            Connexion
          </Link>
        </p>
      </div>
    </div>
  );
};
export default StepContainer;

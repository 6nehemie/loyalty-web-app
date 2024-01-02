'use client';

import { useState } from 'react';
import SignUpStepOne from './SignUpStepOne';
import SignUpStepTwo from './SignUpStepTwo';

import { AntiFormBtn, SubmitButton } from '@/app/components';
import Link from 'next/link';
import { useFormStatus } from 'react-dom';

enum SignUpStep {
  STEP_ONE = 'step-one',
  STEP_TWO = 'step-two',
  SUBMIT = 'submit',
}

enum step {
  ONE = 1,
  TWO = 2,
}

interface IStepContainerProps {
  setCurrentStep: (step: step) => void;
}

const StepContainer: React.FC<IStepContainerProps> = ({ setCurrentStep }) => {
  const { pending } = useFormStatus();

  const [step, setStep] = useState<'step-one' | 'step-two' | 'submit'>(
    SignUpStep.STEP_ONE
  );
  const [isNextStepAllowed, setIsNextStepAllowed] = useState<boolean>(false);

  const handleNextStep = () => {
    if (!isNextStepAllowed) return;
    setStep(SignUpStep.STEP_TWO);
    setCurrentStep(2);
  };

  const handleAllowSubmit = (isAllowed: boolean) => {
    if (!isAllowed) return;
    setStep(SignUpStep.SUBMIT);
  };

  return (
    <div className="flex flex-col gap-12">
      <div className={`${step === SignUpStep.STEP_ONE ? 'visible' : 'hidden'}`}>
        {/* <SignUpStepOne setIsNextStepAllowed={setIsNextStepAllowed} /> */}
      </div>
      <div className={`${step !== SignUpStep.STEP_ONE ? 'visible' : 'hidden'}`}>
        {/* <SignUpStepTwo setIsAllowedToSubmit={handleAllowSubmit} /> */}
      </div>

      <div className="font-light">
        {/* {step === SignUpStep.STEP_ONE ? (
          <AntiFormBtn
            label="Continuer"
            onClick={handleNextStep}
            className="w-full mb-3"
          />
        ) : (
          <SubmitButton
            type="submit"
            label="Inscription"
            ariaDisabled={pending}
            disabled={step === SignUpStep.SUBMIT ? false : true}
            className="w-full mb-3"
          />
        )} */}
        {/* 
        <p>
          Avez-vous déjà un compte ?{' '}
          <Link href={'/sign-in'} className="underline">
            Connexion
          </Link>
        </p> */}
      </div>
    </div>
  );
};
export default StepContainer;

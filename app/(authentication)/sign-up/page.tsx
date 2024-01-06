'use client';

import { signUp } from '@/app/constants';
import {
  AntiFormBtn,
  Logo,
  SignUpStepOne,
  SignUpStepTwo,
  SubmitButton,
} from '@/app/components';
import Link from 'next/link';
import { createUser } from '@/app/actions/createUser';
import { signIn } from 'next-auth/react';
import { useRef, useState } from 'react';
import {
  validateStepOneSignUp,
  validateStepTwoSignUp,
} from '@/app/actions/validateSignUp';
import { IstepOne, IstepTwo } from '@/app/types';
import {
  stepOneValidation,
  stepTwoValidation,
} from '@/app/utils/authValidation';
import { useFormStatus } from 'react-dom';
import axios from 'axios';
import { welcomeEmail } from '@/app/actions/emailAction';

enum step {
  ONE = 1,
  TWO = 2,
}

const SignUpPage = () => {
  const { pending } = useFormStatus();
  const formRef = useRef<HTMLFormElement>(null);
  const [currentStep, setCurrentStep] = useState<step>(step.ONE);

  const [stepOneError, setStepOneError] = useState<IstepOne>({
    civility: '',
    firstName: '',
    lastName: '',
    email: '',
    generalConditions: '',
    privacy: '',
  });

  const [stepTwoError, setStepTwoError] = useState<IstepTwo>({
    password: '',
    confirmPassword: '',
  });

  async function clientAction(formData: FormData) {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;

    try {
      const response = await validateStepTwoSignUp(formData);
      if (response?.error) {
        if (Array.isArray(response.error)) {
          stepTwoValidation(response.error, setStepTwoError);
        }
        throw new Error(response.error.join(','));
      }

      const result = await createUser(formData);

      if (result?.error) {
        console.error(result.error);
      } else {
        welcomeEmail(email, firstName, lastName);
        signIn('credentials', { email, password });
        await axios.post('/api/welcome');
      }
    } catch (error) {
      console.error(error);
    }
  }

  const validStepOne = async () => {
    if (formRef.current) {
      const formData = new FormData(formRef.current);

      try {
        const response = await validateStepOneSignUp(formData);

        if (response?.error) {
          if (Array.isArray(response.error)) {
            stepOneValidation(response.error, setStepOneError);
            console.error(response.error.join(','));
          }
        } else {
          setCurrentStep(step.TWO);
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="p-sides font-exo">
      <nav className="flex justify-between items-center py-8 max-w-wide w-full mx-auto">
        <Logo />
        <Link href="/sign-in">Connexion</Link>
      </nav>

      <div className="max-w-large w-full mx-auto mt-20">
        <div className="max-w-[900px] w-full flex flex-col gap-12">
          <div>
            <p className="font-exo font-light text-sm">
              Étape {currentStep} sur 2
            </p>

            <h1 className="heading-3 mb-2">{signUp.title}</h1>

            <p>
              Créez votre compte Loyalty RC et rejoignez notre communauté.
              <br />
              Il vous offrira un accès privilégié à l&apos;ensemble de nos
              services de location de voiture haut de gamme.
            </p>
          </div>

          <form
            ref={formRef}
            action={clientAction}
            className="flex flex-col gap-12"
          >
            <div
              className={`${currentStep === step.ONE ? 'visible' : 'hidden'}`}
            >
              <SignUpStepOne stepOneError={stepOneError} />
            </div>

            <div
              className={`${currentStep !== step.ONE ? 'visible' : 'hidden'}`}
            >
              <SignUpStepTwo stepTwoError={stepTwoError} />
            </div>

            {currentStep === step.ONE ? (
              <AntiFormBtn
                label="Continuer"
                onClick={validStepOne}
                ariaDisabled={pending}
                className="w-full mb-3"
              />
            ) : (
              <SubmitButton
                type="submit"
                label="Inscription"
                ariaDisabled={pending}
                className="w-full mb-3"
              />
            )}

            <p>
              Avez-vous déjà un compte ?{' '}
              <Link href={'/sign-in'} className="underline">
                Connexion
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
export default SignUpPage;

'use client';

import { z } from 'zod';

import { welcomeEmail } from '@/app/actions/emailAction';
import {
  AntiFormBtn,
  SignUpStepOne,
  SignUpStepTwo,
  SubmitButton,
} from '@/app/components';
import { Form } from '@/app/components/ui/form';
import AuthWrapper from '@/app/components/wrappers/AuthWrapper';
import { signUp } from '@/app/constants';
import { createUser } from '@/utils/actions/users/createUser';
import { findUserByEmail } from '@/utils/actions/users/findUserByEmail';
import { signUpSchema } from '@/utils/shemas/auth-shema';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

enum Step {
  ONE = 1,
  TWO = 2,
}

const SignUpPage = () => {
  const [currentStep, setCurrentStep] = useState<Step>(Step.ONE);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      civility: '',
      firstName: '',
      lastName: '',
      email: '',
      generalConditions: false,
      privacy: false,
      password: '',
      confirmPassword: '',
      newsletter: false,
    },
  });

  const onSubmit = async (values: z.infer<typeof signUpSchema>) => {
    const { email, password, firstName, lastName } = values;

    try {
      const response = await createUser(values);

      if (response?.status !== 200) {
        console.error(response.message);
      } else {
        welcomeEmail(email, firstName, lastName);
        signIn('credentials', { email, password });
        await axios.post('/api/welcome');
      }
    } catch (error) {
      console.error('Error during sign-up:', error);
    }
  };

  const validStepOne = async () => {
    if (isSubmitting) return;

    setIsSubmitting(true);
    const { civility, firstName, lastName, email, generalConditions, privacy } =
      form.getValues();
    form.clearErrors(); // Clear previous errors before validating

    let isValid = true;

    // Validate fields
    if (!civility) {
      form.setError('civility', {
        type: 'manual',
        message: 'Civilité invalide',
      });
      isValid = false;
    }

    if (!firstName) {
      form.setError('firstName', {
        type: 'manual',
        message: 'Prénom invalide',
      });
      isValid = false;
    }

    if (!lastName) {
      form.setError('lastName', { type: 'manual', message: 'Nom invalide' });
      isValid = false;
    }

    if (!email) {
      form.setError('email', { type: 'manual', message: 'Email est requis' });
      isValid = false;
    } else {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        form.setError('email', {
          type: 'manual',
          message: "Format d'email invalide",
        });
        isValid = false;
      } else {
        if (await findUserByEmail(email)) {
          form.setError('email', {
            type: 'manual',
            message: 'Cet email est déjà utilisé',
          });
          isValid = false;
        }
      }
    }

    if (!generalConditions) {
      form.setError('generalConditions', {
        type: 'manual',
        message: 'Conditions générales doivent être acceptées',
      });
      isValid = false;
    }

    if (!privacy) {
      form.setError('privacy', {
        type: 'manual',
        message: 'Politique de confidentialité doit être acceptée',
      });
      isValid = false;
    }

    // Move to the next step if everything is valid
    if (isValid) {
      setCurrentStep(Step.TWO);
    }
    setIsSubmitting(false);
  };

  return (
    <AuthWrapper title="Bienvenue à bord !">
      <div>
        <p className="font-exo font-light text-sm">Étape {currentStep} sur 2</p>
        <h1 className="text-2xl mb-2">{signUp.title}</h1>
        <p className="text-sm text-app-gray-2">
          Bénéficiez d'un accès exclusif à notre flotte de voitures haut de
          gamme et découvrez une expérience de conduite inégalée.
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className={`${currentStep === Step.ONE ? 'visible' : 'hidden'}`}>
            <SignUpStepOne control={form.control} />
          </div>

          <div className={`${currentStep === Step.TWO ? 'visible' : 'hidden'}`}>
            <SignUpStepTwo control={form.control} />
          </div>

          {currentStep === Step.ONE ? (
            <AntiFormBtn
              label="Continuer"
              light
              onClick={validStepOne}
              ariaDisabled={isSubmitting}
              className="w-full mb-3"
            />
          ) : (
            <SubmitButton
              type="submit"
              label="Inscription"
              disabled={isSubmitting}
              className="w-full mb-3"
              light
            />
          )}

          <p className="w-full text-center text-sm">
            Avez-vous déjà un compte ?{' '}
            <Link href={'/sign-in'} className="underline">
              Connexion
            </Link>
          </p>
        </form>
      </Form>
    </AuthWrapper>
  );
};

export default SignUpPage;

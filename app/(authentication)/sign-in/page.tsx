'use client';

import { InputFrom, SubmitButton } from '@/app/components';
import ForgotPassword from '@/app/components/sections/auth/sign-in/ForgotPassword';
import { signIn as login } from '@/app/constants';
import { ExclamationCircleIcon } from '@heroicons/react/24/outline';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useFormStatus } from 'react-dom';

const SignInPage = () => {
  const router = useRouter();
  const { pending } = useFormStatus();
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // ? Forgot password - open modal
  const [isEditing, setIsEditing] = useState<boolean>(false);

  async function clientAction(formData: FormData) {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    try {
      const response = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });

      if (response?.error) {
        setErrorMsg(response.error);
        throw new Error(response.error);
      }
    } catch (error) {
      return console.error(error);
    }

    setErrorMsg(null);
    router.refresh();
  }

  return (
    <div className="signInGrid h-screen w-screen overflow-hidden font-exo">
      <div className="h-screen overflow-hidden max-xl:hidden">
        <Image
          src={login.image}
          alt={'Login image'}
          height={2510}
          width={1673}
          priority
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex flex-col items-center justify-center p-5">
        <form
          action={clientAction}
          className="max-w-[361px] w-full flex flex-col gap-6"
        >
          <h1 className="heading-4">Bienvenue</h1>
          <InputFrom
            label="Email"
            type="email"
            name="email"
            error={errorMsg ? true : false}
          />
          <InputFrom
            label="Mot de passe"
            type="password"
            name="password"
            error={errorMsg ? true : false}
          />
          <p
            onClick={() => setIsEditing(true)}
            className="underline font-light w-max cursor-pointer"
          >
            Mot de passe oublié ?
          </p>

          {errorMsg && (
            <div className="flex gap-2 text-red-500 text-sm -mt-3">
              <ExclamationCircleIcon className="h-4 w-4 block mt-0.5" />
              <p>{errorMsg}</p>
            </div>
          )}

          <SubmitButton
            label="Connexion"
            className="w-full"
            ariaDisabled={pending}
          />
          <p className="font-light text-sm">
            <span>Vous n&apos;avez pas de compte ?</span>{' '}
            <Link href={'/sign-up'} className="underline">
              Inscription
            </Link>
          </p>
        </form>
      </div>
      <ForgotPassword setIsEditing={setIsEditing} isEditing={isEditing} />
    </div>
  );
};
export default SignInPage;

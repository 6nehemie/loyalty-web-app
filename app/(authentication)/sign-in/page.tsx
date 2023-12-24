'use client';

import { InputFrom, SubmitButton } from '@/app/components';
import { signIn as login } from '@/app/constants';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

const SignInPage = () => {
  async function clientAction(formData: FormData) {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    signIn('credentials', { email, password });
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

      <div className="flex items-center justify-center p-5">
        <form
          action={clientAction}
          className="max-w-[361px] w-full flex flex-col gap-6"
        >
          <h1 className="heading-4">Bienvenue</h1>
          <InputFrom label="Email" type="email" name="email" />
          <InputFrom label="Mot de passe" type="password" name="password" />

          <SubmitButton label="Connexion" className="w-full" />
          <p className="font-light text-sm">
            <span>Vous n&apos;avez pas de compte ?</span>{' '}
            <Link href={'/sign-up'} className="underline">
              Inscription
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};
export default SignInPage;

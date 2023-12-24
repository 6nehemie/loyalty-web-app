'use client';

import { signUp } from '@/app/constants';
import { Logo } from '@/app/components';
import Link from 'next/link';
import StepContainer from '@/app/components/sections/auth/sign-up/StepContainer';
import { createUser } from '@/app/actions/createUser';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

const SignUpPage = () => {
  const router = useRouter();

  async function clientAction(formData: FormData) {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const civility = formData.get('civility') as string;

    console.log(email, password, civility);
    const result = await createUser(formData);
    if (result?.error) {
      console.error(result.error);
    } else {
      signIn('credentials', { email, password });
      router.push('/sign-in');
    }
  }

  return (
    <div className="p-sides font-exo">
      <nav className="flex justify-between items-center py-8 max-w-wide w-full mx-auto">
        <Logo />
        <Link href="/sign-in">Connexion</Link>
      </nav>

      <div className="max-w-large w-full mx-auto mt-20">
        <div className="max-w-[900px] w-full flex flex-col gap-12">
          <div>
            <p className="font-exo font-light text-sm">Étape 1 sur 2</p>
            <h1 className="heading-3 mb-2">{signUp.title}</h1>
            <p>
              Créez votre compte Loyalty RC et rejoignez notre communauté.
              <br />
              Il vous offrira un accès privilégié à l&apos;ensemble de nos
              services de location de voiture haut de gamme.
            </p>
          </div>

          <form action={clientAction} className="">
            <StepContainer />
          </form>
        </div>
      </div>
    </div>
  );
};
export default SignUpPage;

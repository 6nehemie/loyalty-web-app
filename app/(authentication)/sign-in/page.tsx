import { Button1, InputFrom, SubmitButton } from '@/app/components';
import { signIn } from '@/app/constants';
import Image from 'next/image';
import Link from 'next/link';

const SignInPage = () => {
  return (
    <div className="signInGrid h-screen w-screen overflow-hidden">
      <div className="h-screen overflow-hidden max-xl:hidden">
        <Image
          src={signIn.image}
          alt={'Login image'}
          height={2510}
          width={1673}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex items-center justify-center p-5">
        <div className="max-w-[361px] w-full flex flex-col gap-6">
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
        </div>
      </div>
    </div>
  );
};
export default SignInPage;

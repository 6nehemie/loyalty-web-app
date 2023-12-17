import { signUp } from '@/app/constants';
import { InputFrom, Logo, SelectForm, SubmitButton } from '@/app/components';
import Link from 'next/link';

const SignUpPage = () => {
  return (
    <div className="p-sides">
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

          <div className="flex flex-col gap-4">
            <SelectForm />
            <div className="grid grid-cols-2 gap-6 w-full">
              <InputFrom label="Prénom *" type="text" name="firstName" />
              <InputFrom label="Nom *" type="text" name="lastName" />
            </div>
            <InputFrom label="Email *" type="email" name="email" />
          </div>
          <div></div>

          <div className="font-light">
            <SubmitButton label="Inscription" className="w-full mb-3" />
            <p>
              Avez-vous déjà un compte ?{' '}
              <Link href={'/sign-in'} className="underline">
                Connexion
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignUpPage;

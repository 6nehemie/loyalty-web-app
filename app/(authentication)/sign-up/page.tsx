import { signUp } from '@/app/constants';
import {
  InputFrom,
  Logo,
  CheckboxForm,
  SelectForm,
  SubmitButton,
  SignUpStepOne,
  SignUpStepTwo,
} from '@/app/components';
import Link from 'next/link';
import { ChoiceType } from '@/app/types';

interface UserSignUpData {
  civility: ChoiceType;
  firstName: string;
  lastName: string;
  email: string;
  generalConditions: boolean;
  privacy: boolean;
  password: string;
  confirmPassword: string;
  newsletter: boolean;
}

enum SignUpStep {
  STEP_ONE,
  STEP_TWO,
}

const SignUpPage = () => {
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

          <form action="" className="flex flex-col gap-12">
            <SignUpStepOne />
            {/* <SignUpStepTwo /> */}

            <div className="font-light">
              <SubmitButton label="Continuer" className="w-full mb-3" />
              <p>
                Avez-vous déjà un compte ?{' '}
                <Link href={'/sign-in'} className="underline">
                  Connexion
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default SignUpPage;

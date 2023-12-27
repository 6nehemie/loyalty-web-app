import { CheckboxForm, InputFrom, SelectForm } from '@/app/components';
import { IstepOne } from '@/app/types';
import Link from 'next/link';

interface SignUpStepOneProps {
  stepOneError: IstepOne;
}

const SignUpStepOne: React.FC<SignUpStepOneProps> = ({ stepOneError }) => {
  return (
    <div className="flex flex-col gap-4">
      <SelectForm
        label="Civilité *"
        name="civility"
        options={['Monsieur', 'Madame']}
        error={stepOneError.civility ? true : false}
        errorMessage={stepOneError.civility}
      />

      {/* INPUT */}
      <div className="grid grid-cols-2 gap-6 w-full">
        <InputFrom
          label="Prénom *"
          type="text"
          name="firstName"
          error={stepOneError.firstName ? true : false}
          errorMessage={stepOneError.firstName}
        />
        <InputFrom
          label="Nom *"
          type="text"
          name="lastName"
          error={stepOneError.lastName ? true : false}
          errorMessage={stepOneError.lastName}
        />
      </div>
      <InputFrom
        label="Email *"
        type="email"
        name="email"
        error={stepOneError.email ? true : false}
        errorMessage={stepOneError.email}
      />

      {/* CHECK BOX */}
      <div className="flex flex-col gap-2 mt-2 w-full">
        <CheckboxForm
          name="generalConditions"
          error={stepOneError.generalConditions ? true : false}
          errorMessage={stepOneError.generalConditions}
          required
        >
          <p>
            J&apos;ai pris connaissance des{' '}
            <Link href={'/'} target="_blank" className="underline">
              Conditions générales
            </Link>{' '}
            et les accepte. *
          </p>
        </CheckboxForm>

        <CheckboxForm
          name="privacy"
          error={stepOneError.privacy ? true : false}
          errorMessage={stepOneError.privacy}
          required
        >
          <p>
            J&apos;ai pris connaissance de la{' '}
            <Link href={'/'} target="_blank" className="underline">
              {' '}
              déclaration de confidentialité
            </Link>
            . *
          </p>
        </CheckboxForm>
      </div>
    </div>
  );
};
export default SignUpStepOne;

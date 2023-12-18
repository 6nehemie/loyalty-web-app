import { CheckboxForm, InputFrom, SelectForm } from '@/app/components';
import Link from 'next/link';

const SignUpStepOne = () => {
  return (
    <div className="flex flex-col gap-4">
      <SelectForm />

      {/* INPUT */}
      <div className="grid grid-cols-2 gap-6 w-full">
        <InputFrom label="Prénom *" type="text" name="firstName" required />
        <InputFrom label="Nom *" type="text" name="lastName" required />
      </div>
      <InputFrom label="Email *" type="email" name="email" required />

      {/* CHECK BOX */}
      <div className="flex flex-col gap-2 mt-2 w-full">
        <CheckboxForm name="general-conditions" required>
          <p>
            J&apos;ai pris connaissance des{' '}
            <Link href={'/'} target="_blank" className="underline">
              Conditions générales
            </Link>{' '}
            et les accepte. *
          </p>
        </CheckboxForm>

        <CheckboxForm name="privacy" required>
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

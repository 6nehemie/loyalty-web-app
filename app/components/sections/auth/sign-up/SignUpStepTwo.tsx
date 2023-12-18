import { CheckboxForm, InputFrom } from '@/app/components';
import Link from 'next/link';

const SignUpStepTwo = () => {
  return (
    <div className="flex flex-col gap-6">
      <InputFrom
        label="Mot de passe *"
        type="password"
        name="password"
        required
      />
      <InputFrom
        label="Confirmez le mot de passe *"
        type="password"
        name="confirmPassword"
        required
      />
      <CheckboxForm name="newsletter">
        <p>Recevoir les news Loylaty.RC .</p>
      </CheckboxForm>
    </div>
  );
};
export default SignUpStepTwo;

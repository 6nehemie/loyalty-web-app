import { CheckboxForm, InputFrom } from '@/app/components';
import { IstepTwo } from '@/app/types';

interface SignUpStepTwoProps {
  stepTwoError: IstepTwo;
}

const SignUpStepTwo: React.FC<SignUpStepTwoProps> = ({ stepTwoError }) => {
  console.log(stepTwoError);
  return (
    <div className="flex flex-col gap-6">
      <InputFrom
        label="Mot de passe *"
        type="password"
        name="password"
        error={stepTwoError.password ? true : false}
        errorMessage={stepTwoError.password}
      />
      <InputFrom
        label="Confirmer le mot de passe *"
        type="password"
        error={stepTwoError.confirmPassword ? true : false}
        errorMessage={stepTwoError.confirmPassword}
        name="confirmPassword"
      />
      <CheckboxForm name="newsletter">
        <p>Recevoir les news Loylaty.RC .</p>
      </CheckboxForm>
    </div>
  );
};
export default SignUpStepTwo;

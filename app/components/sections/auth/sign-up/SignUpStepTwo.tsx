import { CheckboxForm, InputFrom } from '@/app/components';
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/app/components/ui/form';
import { Control } from 'react-hook-form';

interface SignUpStepTwoProps {
  control?: Control<any>;
}

const SignUpStepTwo: React.FC<SignUpStepTwoProps> = ({ control }) => {
  return (
    <div className="flex flex-col gap-6">
      <FormField
        control={control}
        name="password"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <InputFrom
                field={field}
                placeholder="Mot de passe"
                type="password"
                name="password"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="confirmPassword"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <InputFrom
                field={field}
                placeholder="Confirmez votre mot de passe"
                type="password"
                name="confirmPassword"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="newsletter"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <CheckboxForm field={field}>
                <p>Recevoir les news Loyalty.RC.</p>
              </CheckboxForm>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default SignUpStepTwo;

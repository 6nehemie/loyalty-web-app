import { CheckboxForm, InputFrom, SelectForm } from '@/app/components';
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/app/components/ui/form';
import Link from 'next/link';
import { Control } from 'react-hook-form';

interface SignUpStepOneProps {
  control?: Control<any>;
}

const SignUpStepOne: React.FC<SignUpStepOneProps> = ({ control }) => {
  return (
    <div className="flex flex-col gap-4">
      <FormField
        control={control}
        name="civility"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <SelectForm
                field={field}
                label="Civilité"
                options={['Monsieur', 'Madame']}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* INPUT */}
      <div className="grid grid-cols-2 gap-4 w-full">
        <FormField
          control={control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <InputFrom
                  type="text"
                  name="firstName"
                  field={field}
                  placeholder="Prénom *"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <InputFrom
                  type="text"
                  name="lastName"
                  field={field}
                  placeholder="Nom *"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <FormField
        control={control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <InputFrom
                field={field}
                type="email"
                name="email"
                lowerCase
                placeholder="E-mail *"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* CHECK BOX */}
      <div className="flex flex-col gap-2 mt-2 w-full">
        <FormField
          control={control}
          name="generalConditions"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <CheckboxForm field={field}>
                  <p>
                    J&apos;ai pris connaissance des{' '}
                    <Link href={'/'} target="_blank" className="underline">
                      Conditions générales
                    </Link>{' '}
                    et les accepte. *
                  </p>
                </CheckboxForm>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="privacy"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <CheckboxForm field={field}>
                  <p>
                    J&apos;ai pris connaissance de la{' '}
                    <Link href={'/'} target="_blank" className="underline">
                      déclaration de confidentialité
                    </Link>
                    . *
                  </p>
                </CheckboxForm>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
};
export default SignUpStepOne;

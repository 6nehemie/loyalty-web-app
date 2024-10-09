'use client';

import { InputFrom, SubmitButton } from '@/app/components';
import ForgotPassword from '@/app/components/sections/auth/sign-in/ForgotPassword';
import AuthWrapper from '@/app/components/wrappers/AuthWrapper';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useFormStatus } from 'react-dom';

import { z } from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/app/components/ui/form';
import { signInSchema } from '@/utils/shemas/auth-shema';

const SignInPage = () => {
  const router = useRouter();

  // ? Forgot password - open modal
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  async function onSubmit(values: z.infer<typeof signInSchema>) {
    setIsSubmitting(true);
    const { email, password } = values;

    try {
      const response = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });

      if (response?.error) {
        throw new Error(response.error);
      }
    } catch (error) {
      console.error(error);
      form.setError('email', {
        type: 'manual',
        message: 'Email ou mot de passe incorrect',
      });
      setIsSubmitting(false);
      return console.error(error);
    }

    setIsSubmitting(false);
    router.push('/');
  }

  return (
    <AuthWrapper title="Ravis de vous revoir">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="w-full space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <InputFrom
                      field={field}
                      type="email"
                      name="email"
                      lowerCase
                      placeholder="E-mail"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="space-y-3">
              <FormField
                control={form.control}
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

              <div className="flex justify-end">
                <p
                  onClick={() => setIsEditing(true)}
                  className="underline font-light cursor-pointer text-sm"
                >
                  Mot de passe oublié ?
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6 w-full">
            <SubmitButton
              label="Connexion"
              className="w-full"
              light
              disabled={isSubmitting}
            />

            <p className="font-light text-sm w-full text-center">
              <span>Vous n&apos;avez pas de compte ?</span>{' '}
              <Link href={'/sign-up'} className="underline">
                Inscription
              </Link>
            </p>
          </div>
        </form>
      </Form>

      <ForgotPassword setIsEditing={setIsEditing} isEditing={isEditing} />
    </AuthWrapper>
  );
};

export default SignInPage;

import { z } from 'zod';

export const signInSchema = z.object({
  email: z.string().email({ message: 'Email invalide' }),
  password: z.string().min(8, { message: 'Mot de passe invalide' }),
});

export const signUpSchema = z
  .object({
    civility: z.string({ message: 'Civilité invalide' }),
    firstName: z.string({ message: 'Prénom invalide' }),
    lastName: z.string({ message: 'Nom invalide' }),
    email: z.string().email({ message: 'Email invalide' }), // Ensuring valid email format
    generalConditions: z.boolean().refine((val) => val === true, {
      message: 'Conditions générales doivent être acceptées',
    }),
    privacy: z.boolean().refine((val) => val === true, {
      message: 'Politique de confidentialité doit être acceptée',
    }),
    password: z
      .string()
      .min(8, { message: 'Mot de passe doit contenir au moins 8 caractères' }),
    confirmPassword: z
      .string()
      .min(8, {
        message:
          'Confirmation du mot de passe doit contenir au moins 8 caractères',
      }),
    newsletter: z.boolean().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Les mots de passe ne correspondent pas',
    path: ['confirmPassword'], // Set error on confirmPassword field
  });

'use server';

import prisma from '@/app/utils/prisma';
import axios from 'axios';
import { z } from 'zod';
import { signUpSchema } from '@/utils/shemas/auth-shema';
import { hashPassword } from '@/app/utils/encryptedData';

type Values = z.infer<typeof signUpSchema>;

export const createUser = async (values: Values) => {
  try {
    // Ensure to hash the password before saving to the database
    const hashedPassword = await hashPassword(values.password);

    // Create a new user with the hashed password and other details
    await prisma.user.create({
      data: {
        civility: values.civility,
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        password: hashedPassword,
        conditions: values.generalConditions,
        privacy: values.privacy,
        newsletter: values.newsletter || false,
      },
    });

    return {
      status: 200,
      message: 'User created successfully',
    };
  } catch (error) {
    console.error(error);
    return {
      status: 500,
      message: "Une erreur est survenue lors de la création de l'utilisateur",
    };
  }
};

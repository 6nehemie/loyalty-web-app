'use server';

import { getServerSession } from 'next-auth';
import { ErrorMessages } from '../enums/errorMessages';
import prisma from '../utils/prisma';
import { Validation } from '../utils/validation';
import { redirect } from 'next/navigation';

export const updateName = async (formData: FormData, email: string) => {
  const errors = [];
  const firstName = formData.get('firstName') as string;
  const lastName = formData.get('lastName') as string;

  try {
    if (!firstName || !Validation.isValidName(firstName as string))
      errors.push(ErrorMessages.FIRST_NAME_ERROR);

    if (!lastName || !Validation.isValidName(lastName as string))
      errors.push(ErrorMessages.LAST_NAME_ERROR);

    if (errors.length > 0) return { error: errors };

    await prisma.user.update({
      where: { email },
      data: { firstName: firstName, lastName: lastName },
    });
    return { data: 'User updated successfully' };
  } catch (error) {
    console.error(error);
    return { error };
  }
};

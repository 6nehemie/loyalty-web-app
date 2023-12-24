'use server';

import prisma from '../utils/prisma';
import { ErrorMessages } from '../enums/errorMessages';
import { hashPassword } from '../utils/encryptedData';
import { Validation } from '../utils/validation';

export const createUser = async (formData: FormData) => {
  const errors = [];

  const civility = formData.get('civility');
  const firstName = formData.get('firstName');
  const lastName = formData.get('lastName');
  const email = formData.get('email');
  const conditions = formData.get('generalConditions');
  const privacy = formData.get('privacy');
  const password = formData.get('password');
  const confirmPassword = formData.get('confirmPassword');
  const newsletter = formData.get('newsletter');

  try {
    if (!firstName || !Validation.isValidName(firstName as string))
      errors.push(ErrorMessages.FIRST_NAME_ERROR);

    if (!lastName || !Validation.isValidName(lastName as string))
      errors.push(ErrorMessages.LAST_NAME_ERROR);

    if (!email || !Validation.isEmailValid(email as string))
      errors.push(ErrorMessages.EMAIL_ERROR);

    if (!conditions) errors.push(ErrorMessages.CONDITIONS_ERROR);
    if (!privacy) errors.push(ErrorMessages.PRIVACY_ERROR);

    if (!password) throw new Error(ErrorMessages.PASSWORD_ERROR);
    if (!Validation.isValidPassword(password as string))
      errors.push(ErrorMessages.PASSWORD_ERROR);

    if (!confirmPassword) errors.push(ErrorMessages.CONFIRM_PASSWORD_ERROR);

    if (password !== confirmPassword)
      errors.push(ErrorMessages.PASSWORDS_NOT_MATCH_ERROR);

    const existingUser = await prisma.user.findUnique({
      where: { email: email as string },
    });

    if (existingUser) errors.push(ErrorMessages.USER_ALREADY_EXIST_ERROR);

    if (errors.length > 0) throw new Error(errors.join(','));

    await prisma.user.create({
      data: {
        civility: civility as string,
        firstName: firstName as string,
        lastName: lastName as string,
        email: email as string,
        password: await hashPassword(password as string),
        conditions: conditions === 'on' ? true : false,
        privacy: privacy === 'on' ? true : false,
        newsletter: newsletter === 'on' ? true : false,
      },
    });
  } catch (error) {
    console.error(error);
    return {
      error: errors,
    };
  }

  return {
    status: 200,
    message: 'User created successfully',
  };
};

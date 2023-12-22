'use server';

import prisma from '../utils/prisma';
import { ErrorMessages } from '../enums/errorMessages';
import { hashPassword } from '../utils/encryptedData';
import { Validation } from '../utils/validation';

export const createUser = async (formData: FormData) => {
  const firstName = formData.get('firstName');
  const lastName = formData.get('lastName');
  const email = formData.get('email');
  const conditions = formData.get('generalConditions') as unknown;
  const privacy = formData.get('privacy') as unknown;
  const password = formData.get('password');
  const confirmPassword = formData.get('confirmPassword');
  const newsletter = formData.get('newsletter') as unknown;

  console.log(formData);

  try {
    if (!firstName || !Validation.isValidName(firstName as string))
      throw new Error(ErrorMessages.FIRST_NAME_ERROR);

    if (!lastName || !!Validation.isValidName(lastName as string))
      throw new Error(ErrorMessages.LAST_NAME_ERROR);

    if (!email || !Validation.isEmailValid(email as string))
      throw new Error(ErrorMessages.EMAIL_ERROR);

    if (!conditions) throw new Error(ErrorMessages.CONDITIONS_ERROR);
    if (!privacy) throw new Error(ErrorMessages.PRIVACY_ERROR);

    if (!password) throw new Error(ErrorMessages.PASSWORD_ERROR);
    if (!Validation.isValidPassword(password as string))
      throw new Error(ErrorMessages.PASSWORD_CRITERIA_ERROR);

    if (!confirmPassword) throw new Error(ErrorMessages.CONFIRM_PASSWORD_ERROR);

    if (password !== confirmPassword)
      throw new Error(ErrorMessages.PASSWORDS_NOT_MATCH_ERROR);

    const existingUser = await prisma.user.findUnique({
      where: { email: email as string },
    });

    if (existingUser) throw new Error(ErrorMessages.USER_ALREADY_EXIST_ERROR);

    const createdUser = await prisma.user.create({
      data: {
        firstName: firstName as string,
        lastName: lastName as string,
        email: email as string,
        password: await hashPassword(password as string),
        conditions: conditions as boolean,
        privacy: privacy as boolean,
        newsletter: newsletter as boolean,
      },
    });

    return {
      status: 200,
      message: 'User created successfully',
      data: createdUser,
    };
  } catch (error) {
    console.error(error);
    return { status: 500 };
  }
};

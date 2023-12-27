'use server';

import { ErrorMessages } from '../enums/errorMessages';
import prisma from '../utils/prisma';
import { Validation } from '../utils/validation';

export const validateStepOneSignUp = async (formData: FormData) => {
  const errors = [];
  const civility = formData.get('civility');
  const firstName = formData.get('firstName');
  const lastName = formData.get('lastName');
  const email = formData.get('email');
  const generalConditions = formData.get('generalConditions');
  const privacy = formData.get('privacy');

  try {
    if (!civility || !Validation.isValidName(civility as string))
      errors.push(ErrorMessages.CIVILITY_ERROR);
    if (!firstName || !Validation.isValidName(firstName as string))
      errors.push(ErrorMessages.FIRST_NAME_ERROR);
    if (!lastName || !Validation.isValidName(lastName as string))
      errors.push(ErrorMessages.LAST_NAME_ERROR);
    if (!email || !Validation.isEmailValid(email as string))
      errors.push(ErrorMessages.EMAIL_ERROR);
    if (!generalConditions || generalConditions !== 'on')
      errors.push(ErrorMessages.CONDITIONS_ERROR);
    if (!privacy || privacy !== 'on') errors.push(ErrorMessages.PRIVACY_ERROR);

    if (email) {
      try {
        const user = await prisma.user.findUnique({
          where: {
            email: email as string,
          },
          select: {
            email: true,
          },
        });

        if (user) errors.push(ErrorMessages.USER_ALREADY_EXIST_ERROR);
      } catch (error) {}
    }

    if (errors.length > 0) throw new Error(errors.join(','));

    return {
      status: 200,
      message: 'Allowed to go to step 2',
    };
  } catch (error) {
    console.error(error);
    return { error: errors };
  }
};

export const validateStepTwoSignUp = async (formData: FormData) => {
  const errors = [];
  const password = formData.get('password');
  const confirmPassword = formData.get('confirmPassword');

  try {
    if (!password) errors.push(ErrorMessages.PASSWORD_ERROR);
    else if (!Validation.isValidPassword(password as string))
      errors.push(ErrorMessages.PASSWORD_CRITERIA_ERROR);

    if (!confirmPassword) errors.push(ErrorMessages.CONFIRM_PASSWORD_ERROR);

    if (errors.length > 0) throw new Error(errors.join(','));

    return {
      status: 200,
      message: 'Allowed to go to step 2',
    };
  } catch (error) {
    console.error(error);
    return { error: errors };
  }
};

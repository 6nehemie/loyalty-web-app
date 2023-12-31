'use server';

import axios from 'axios';
import { ErrorMessages } from '../enums/errorMessages';
import { generatePassword } from '../utils/generatePassword';
import prisma from '../utils/prisma';
import { Validation } from '../utils/validation';
import bcrypt from 'bcryptjs';

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

export const updateAddress = async (formData: FormData, email: string) => {
  const errors = [];
  const address1 = formData.get('addressLine1') as string;
  const city = formData.get('city') as string;
  const country = formData.get('country') as string;
  const postalCode = formData.get('postalCode') as string;

  try {
    if (!address1) errors.push(ErrorMessages.ADDRESS_LINE1_EMPTY_ERROR);
    if (!city || !Validation.isValidName(city))
      errors.push(ErrorMessages.CITY_EMPTY_ERROR);
    if (!country || !Validation.isValidName(country))
      errors.push(ErrorMessages.COUNTRY_EMPTY_ERROR);
    if (!postalCode) errors.push(ErrorMessages.POSTAL_CODE_EMPTY_ERROR);

    if (errors.length > 0) return { error: errors };

    await prisma.user.update({
      where: { email },
      data: {
        addressLine1: address1,
        city: city,
        country: country,
        postalCode: postalCode,
      },
    });

    return { data: 'User updated successfully' };
  } catch (error) {
    console.error(error);
    return { error };
  }
};

export const updatePhoneNumber = async (formData: FormData, email: string) => {
  const errors = [];
  const phoneNumber = formData.get('phoneNumber') as string;

  try {
    if (!phoneNumber) errors.push(ErrorMessages.PHONE_NUMBER_EMPTY_ERROR);

    if (errors.length > 0) return { error: errors };

    await prisma.user.update({
      where: { email },
      data: { phoneNumber },
    });

    return { data: 'User updated successfully' };
  } catch (error) {
    console.error(error);
    return { error };
  }
};

export const updateEmail = async (formData: FormData, email: string) => {
  const errors = [];
  const newEmail = formData.get('newEmail') as string;
  const resetCode = formData.get('resetCode') as string;

  try {
    const user = await prisma.user.findUnique({
      where: { email },
      select: { emailCodeReset: true },
    });

    // ? Check if reset code is valid
    if (!resetCode) errors.push(ErrorMessages.VERIFICATION_CODE_EMPTY_ERROR);
    else if (
      resetCode &&
      !(await bcrypt.compare(resetCode, user?.emailCodeReset as string))
    ) {
      errors.push(ErrorMessages.VERIFICATION_CODE_INVALID_ERROR);
    }

    // ? Check if email is valid
    if (!newEmail) errors.push(ErrorMessages.EMAIL_ERROR);
    else if (newEmail && !Validation.isEmailValid(newEmail))
      errors.push(ErrorMessages.EMAIL_ERROR_MESSAGE);

    try {
      if (newEmail && Validation.isEmailValid(newEmail)) {
        const user = await prisma.user.findUnique({
          where: { email: newEmail },
        });
        if (user) errors.push(ErrorMessages.USER_ALREADY_EXIST_ERROR);
      }
    } catch (error) {}

    if (errors.length > 0) return { error: errors };

    await prisma.user.update({
      where: { email },
      data: { email: newEmail },
    });

    return { data: 'User updated successfully' };
  } catch (error) {
    console.error(error);
    return { error };
  }
};

export const updatePassword = async (formData: FormData, email: string) => {
  const errors = [];
  const password = formData.get('password') as string;
  const newPassword = formData.get('newPassword') as string;
  const passwordConfirm = formData.get('passwordConfirm') as string;

  try {
    const user = await prisma.user.findUnique({
      where: { email },
      select: { password: true },
    });

    if (!user) return { error: 'User not found' };

    // ? PASSWORD
    if (!password) errors.push(ErrorMessages.PASSWORD_ERROR);
    else if (password && !(await bcrypt.compare(password, user.password)))
      errors.push(ErrorMessages.PASSWORD_MISMATCH_ERROR);

    // ? NEW PASSWORD
    if (!newPassword) errors.push(ErrorMessages.NEW_PASSWORD_EMPTY_ERROR);
    else if (!Validation.isValidPassword(newPassword))
      errors.push(ErrorMessages.PASSWORD_CRITERIA_ERROR);
    else if (newPassword === password)
      errors.push(ErrorMessages.SAME_PASSWORD_ERROR);

    if (!passwordConfirm) errors.push(ErrorMessages.CONFIRM_PASSWORD_ERROR);
    else if (newPassword !== passwordConfirm)
      errors.push(ErrorMessages.PASSWORDS_NOT_MATCH_ERROR);

    if (errors.length > 0) return { error: errors };

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    await prisma.user.update({
      where: { email },
      data: { password: hashedPassword },
    });

    return { data: 'User updated successfully' };
  } catch (error) {
    console.error(error);
    return { error };
  }
};

export const deleteAccount = async (email: string) => {
  try {
    await prisma.user.delete({ where: { email } });
    return { data: 'User deleted successfully' };
  } catch (error) {
    console.error(error);
    return { error };
  }
};

export const resetPassword = async (formData: FormData) => {
  const email = formData.get('email') as string;
  const randomPassword = generatePassword();
  try {
    const hashedPassword = await bcrypt.hash(randomPassword, 10);

    const user = await prisma.user.update({
      where: { email },
      data: { password: hashedPassword },
    });

    if (!user) return { error: 'User not found' };

    // ? Sending the new password to the user email
    await axios.post(`${process.env.URL}/api/send/password/reset`, {
      email,
      password: randomPassword,
    });

    return { data: 'Password was successfully reset' };
  } catch (error) {
    // console.error(error);
    return 'User not found';
  }
};

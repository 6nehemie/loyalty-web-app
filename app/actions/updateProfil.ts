'use server';

import { ErrorMessages } from '../enums/errorMessages';
import prisma from '../utils/prisma';
import { Validation } from '../utils/validation';

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

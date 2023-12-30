import { ErrorMessages } from '../enums/errorMessages';
import {
  IAddressUpdateValidation,
  IEmailUpdateValidation,
  INameUpdateValidation,
  IPasswordUpdateValidation,
} from '../types';

// Function to validate the name update
export const nameUpdateValidation = (
  errors: string[],
  setErrorAction: React.Dispatch<React.SetStateAction<INameUpdateValidation>>
) => {
  if (errors.length === 0)
    return setErrorAction({ firstName: '', lastName: '' });

  errors.forEach((error) => {
    if (error === ErrorMessages.FIRST_NAME_ERROR) {
      setErrorAction((prevState) => ({ ...prevState, firstName: error }));
    } else setErrorAction((prevState) => ({ ...prevState, firstName: '' }));

    if (error === ErrorMessages.LAST_NAME_ERROR) {
      setErrorAction((prevState) => ({ ...prevState, lastName: error }));
    } else setErrorAction((prevState) => ({ ...prevState, lastName: '' }));
  });
};

export const addressUpdateValidation = (
  errors: string[],
  setErrorAction: React.Dispatch<React.SetStateAction<IAddressUpdateValidation>>
) => {
  if (errors.length === 0)
    return setErrorAction({
      address1: '',
      city: '',
      country: '',
      postalCode: '',
    });

  if (errors.includes(ErrorMessages.ADDRESS_LINE1_EMPTY_ERROR))
    setErrorAction((prevState) => ({
      ...prevState,
      address1: ErrorMessages.ADDRESS_LINE1_EMPTY_ERROR,
    }));
  else setErrorAction((prevState) => ({ ...prevState, address1: '' }));

  if (errors.includes(ErrorMessages.CITY_EMPTY_ERROR))
    setErrorAction((prevState) => ({
      ...prevState,
      city: ErrorMessages.CITY_EMPTY_ERROR,
    }));
  else setErrorAction((prevState) => ({ ...prevState, city: '' }));

  if (errors.includes(ErrorMessages.COUNTRY_EMPTY_ERROR))
    setErrorAction((prevState) => ({
      ...prevState,
      country: ErrorMessages.COUNTRY_EMPTY_ERROR,
    }));
  else setErrorAction((prevState) => ({ ...prevState, country: '' }));

  if (errors.includes(ErrorMessages.POSTAL_CODE_EMPTY_ERROR))
    setErrorAction((prevState) => ({
      ...prevState,
      postalCode: ErrorMessages.POSTAL_CODE_EMPTY_ERROR,
    }));
  else setErrorAction((prevState) => ({ ...prevState, postalCode: '' }));
};

export const emailUpdateValidation = (
  errors: string[],
  setErrorAction: React.Dispatch<React.SetStateAction<IEmailUpdateValidation>>
) => {
  if (errors.length === 0) return setErrorAction({ email: '', resetCode: '' });

  if (errors.includes(ErrorMessages.VERIFICATION_CODE_EMPTY_ERROR))
    setErrorAction((prevState) => ({
      ...prevState,
      resetCode: ErrorMessages.VERIFICATION_CODE_EMPTY_ERROR,
    }));
  else if (errors.includes(ErrorMessages.VERIFICATION_CODE_INVALID_ERROR))
    setErrorAction((prevState) => ({
      ...prevState,
      resetCode: ErrorMessages.VERIFICATION_CODE_INVALID_ERROR,
    }));
  else setErrorAction((prevState) => ({ ...prevState, resetCode: '' }));

  if (errors.includes(ErrorMessages.EMAIL_ERROR))
    setErrorAction((prevState) => ({
      ...prevState,
      email: ErrorMessages.EMAIL_ERROR,
    }));
  else if (errors.includes(ErrorMessages.USER_ALREADY_EXIST_ERROR))
    setErrorAction((prevState) => ({
      ...prevState,
      email: ErrorMessages.USER_ALREADY_EXIST_ERROR,
    }));
  else setErrorAction((prevState) => ({ ...prevState, email: '' }));
};

export const passwordUpdateValidation = (
  errors: string[],
  setErrorAction: React.Dispatch<
    React.SetStateAction<IPasswordUpdateValidation>
  >
) => {
  if (errors.length === 0)
    return setErrorAction({
      password: '',
      newPassword: '',
      passwordConfirm: '',
    });

  // ? PASSWORD
  if (errors.includes(ErrorMessages.PASSWORD_ERROR))
    setErrorAction((prevState) => ({
      ...prevState,
      password: ErrorMessages.PASSWORD_ERROR,
    }));
  else if (errors.includes(ErrorMessages.PASSWORD_MISMATCH_ERROR))
    setErrorAction((prevState) => ({
      ...prevState,
      password: ErrorMessages.PASSWORD_MISMATCH_ERROR,
    }));
  else setErrorAction((prevState) => ({ ...prevState, password: '' }));

  // ? NEW PASSWORD
  if (errors.includes(ErrorMessages.NEW_PASSWORD_EMPTY_ERROR))
    setErrorAction((prevState) => ({
      ...prevState,
      newPassword: ErrorMessages.NEW_PASSWORD_EMPTY_ERROR,
    }));
  else if (errors.includes(ErrorMessages.PASSWORD_CRITERIA_ERROR))
    setErrorAction((prevState) => ({
      ...prevState,
      newPassword: ErrorMessages.PASSWORD_CRITERIA_ERROR,
    }));
  else if (errors.includes(ErrorMessages.SAME_PASSWORD_ERROR))
    setErrorAction((prevState) => ({
      ...prevState,
      newPassword: ErrorMessages.SAME_PASSWORD_ERROR,
    }));
  else setErrorAction((prevState) => ({ ...prevState, newPassword: '' }));

  // ? CONFIRM PASSWORD
  if (errors.includes(ErrorMessages.CONFIRM_PASSWORD_ERROR))
    setErrorAction((prevState) => ({
      ...prevState,
      passwordConfirm: ErrorMessages.CONFIRM_PASSWORD_ERROR,
    }));
  else if (errors.includes(ErrorMessages.PASSWORDS_NOT_MATCH_ERROR))
    setErrorAction((prevState) => ({
      ...prevState,
      passwordConfirm: ErrorMessages.PASSWORDS_NOT_MATCH_ERROR,
    }));
  else setErrorAction((prevState) => ({ ...prevState, passwordConfirm: '' }));
};

import { ErrorMessages } from '../enums/errorMessages';
import { IstepOne, IstepTwo } from '../types';

export const stepOneValidation = (
  errors: string[],
  setErrorAction: React.Dispatch<React.SetStateAction<IstepOne>>
) => {
  if (errors.length === 0)
    return setErrorAction({
      civility: '',
      firstName: '',
      lastName: '',
      email: '',
      generalConditions: '',
      privacy: '',
    });

  if (errors.includes(ErrorMessages.CIVILITY_ERROR))
    setErrorAction((prevState) => ({
      ...prevState,
      civility: ErrorMessages.CIVILITY_ERROR,
    }));
  else setErrorAction((prevState) => ({ ...prevState, civility: '' }));

  if (errors.includes(ErrorMessages.FIRST_NAME_ERROR))
    setErrorAction((prevState) => ({
      ...prevState,
      firstName: ErrorMessages.FIRST_NAME_ERROR,
    }));
  else setErrorAction((prevState) => ({ ...prevState, firstName: '' }));

  if (errors.includes(ErrorMessages.LAST_NAME_ERROR))
    setErrorAction((prevState) => ({
      ...prevState,
      lastName: ErrorMessages.LAST_NAME_ERROR,
    }));
  else setErrorAction((prevState) => ({ ...prevState, lastName: '' }));

  if (
    errors.includes(ErrorMessages.EMAIL_ERROR) ||
    errors.includes(ErrorMessages.USER_ALREADY_EXIST_ERROR)
  ) {
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
  }

  if (errors.includes(ErrorMessages.CONDITIONS_ERROR))
    setErrorAction((prevState) => ({
      ...prevState,
      generalConditions: ErrorMessages.CONDITIONS_ERROR,
    }));
  else setErrorAction((prevState) => ({ ...prevState, generalConditions: '' }));

  if (errors.includes(ErrorMessages.PRIVACY_ERROR))
    setErrorAction((prevState) => ({
      ...prevState,
      privacy: ErrorMessages.PRIVACY_ERROR,
    }));
  else setErrorAction((prevState) => ({ ...prevState, privacy: '' }));
};

export const stepTwoValidation = (
  errors: string[],
  setErrorAction: React.Dispatch<React.SetStateAction<IstepTwo>>
) => {
  if (errors.length === 0)
    return setErrorAction({
      password: '',
      confirmPassword: '',
    });

  if (errors.includes(ErrorMessages.PASSWORD_ERROR))
    setErrorAction((prevState) => ({
      ...prevState,
      password: ErrorMessages.PASSWORD_ERROR,
    }));
  else if (errors.includes(ErrorMessages.PASSWORD_CRITERIA_ERROR))
    setErrorAction((prevState) => ({
      ...prevState,
      password: ErrorMessages.PASSWORD_CRITERIA_ERROR,
    }));
  else setErrorAction((prevState) => ({ ...prevState, password: '' }));

  if (errors.includes(ErrorMessages.CONFIRM_PASSWORD_ERROR))
    setErrorAction((prevState) => ({
      ...prevState,
      confirmPassword: ErrorMessages.CONFIRM_PASSWORD_ERROR,
    }));
  else if (errors.includes(ErrorMessages.PASSWORDS_NOT_MATCH_ERROR))
    setErrorAction((prevState) => ({
      ...prevState,
      confirmPassword: ErrorMessages.PASSWORDS_NOT_MATCH_ERROR,
    }));
  else setErrorAction((prevState) => ({ ...prevState, confirmPassword: '' }));
};

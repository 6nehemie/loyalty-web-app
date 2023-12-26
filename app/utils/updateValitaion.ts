import { ErrorMessages } from '../enums/errorMessages';
import { IAddressUpdateValidation, INameUpdateValidation } from '../types';

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

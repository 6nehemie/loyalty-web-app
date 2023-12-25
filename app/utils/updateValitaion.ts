import { ErrorMessages } from '../enums/errorMessages';
import { INameUpdateValidation } from '../types';

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

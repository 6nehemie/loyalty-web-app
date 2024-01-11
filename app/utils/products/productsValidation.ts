import { ErrorMessages } from '@/app/enums/errorMessages';
import { IProductsValidationErrors } from '@/app/types';

export const productsValidation = (
  errors: string[],
  setErrorAction: React.Dispatch<
    React.SetStateAction<IProductsValidationErrors>
  >
) => {
  if (errors.length === 0)
    return setErrorAction({
      title: '',
      brand: '',
      model: '',
      shortDescription: '',
      description: '',
      embedData: '',
      carImage: '',
      wallpaper: '',
      pricePerDay: '',
      caution: '',
      driverMinimumAge: '',
    });

  if (errors.includes(ErrorMessages.VEHICLE_TITLE_ERROR))
    setErrorAction((prevState) => ({
      ...prevState,
      title: ErrorMessages.VEHICLE_TITLE_ERROR,
    }));
  else setErrorAction((prevState) => ({ ...prevState, title: '' }));

  if (errors.includes(ErrorMessages.VEHICLE_BRAND_ERROR))
    setErrorAction((prevState) => ({
      ...prevState,
      brand: ErrorMessages.VEHICLE_BRAND_ERROR,
    }));
  else setErrorAction((prevState) => ({ ...prevState, brand: '' }));

  if (errors.includes(ErrorMessages.VEHICLE_MODEL_ERROR))
    setErrorAction((prevState) => ({
      ...prevState,
      model: ErrorMessages.VEHICLE_MODEL_ERROR,
    }));
  else setErrorAction((prevState) => ({ ...prevState, model: '' }));

  if (errors.includes(ErrorMessages.VEHICLE_SHORT_DESCRIPTION_ERROR))
    setErrorAction((prevState) => ({
      ...prevState,
      shortDescription: ErrorMessages.VEHICLE_SHORT_DESCRIPTION_ERROR,
    }));
  else setErrorAction((prevState) => ({ ...prevState, shortDescription: '' }));

  if (errors.includes(ErrorMessages.VEHICLE_DESCRIPTION_ERROR))
    setErrorAction((prevState) => ({
      ...prevState,
      description: ErrorMessages.VEHICLE_DESCRIPTION_ERROR,
    }));
  else setErrorAction((prevState) => ({ ...prevState, description: '' }));

  if (errors.includes(ErrorMessages.VEHICLE_EMBED_DATA_ERROR))
    setErrorAction((prevState) => ({
      ...prevState,
      embedData: ErrorMessages.VEHICLE_EMBED_DATA_ERROR,
    }));
  else setErrorAction((prevState) => ({ ...prevState, embedData: '' }));

  if (errors.includes(ErrorMessages.VEHICLE_CAR_IMAGE_ERROR))
    setErrorAction((prevState) => ({
      ...prevState,
      carImage: ErrorMessages.VEHICLE_CAR_IMAGE_ERROR,
    }));
  else setErrorAction((prevState) => ({ ...prevState, carImage: '' }));

  if (errors.includes(ErrorMessages.VEHICLE_WALLPAPER_ERROR))
    setErrorAction((prevState) => ({
      ...prevState,
      wallpaper: ErrorMessages.VEHICLE_WALLPAPER_ERROR,
    }));
  else setErrorAction((prevState) => ({ ...prevState, wallpaper: '' }));

  if (errors.includes(ErrorMessages.VEHICLE_PRICE_PER_DAY_ERROR))
    setErrorAction((prevState) => ({
      ...prevState,
      pricePerDay: ErrorMessages.VEHICLE_PRICE_PER_DAY_ERROR,
    }));
  else setErrorAction((prevState) => ({ ...prevState, pricePerDay: '' }));

  if (errors.includes(ErrorMessages.VEHICLE_CAUTION_ERROR))
    setErrorAction((prevState) => ({
      ...prevState,
      caution: ErrorMessages.VEHICLE_CAUTION_ERROR,
    }));
  else setErrorAction((prevState) => ({ ...prevState, caution: '' }));

  if (errors.includes(ErrorMessages.VEHICLE_DRIVER_MINIMUM_AGE_ERROR))
    setErrorAction((prevState) => ({
      ...prevState,
      driverMinimumAge: ErrorMessages.VEHICLE_DRIVER_MINIMUM_AGE_ERROR,
    }));
  else setErrorAction((prevState) => ({ ...prevState, driverMinimumAge: '' }));
};

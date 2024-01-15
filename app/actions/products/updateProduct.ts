'use server';

import { ErrorMessages } from '@/app/enums/errorMessages';
import { IUploadResponse, IVehicule } from '@/app/types';
import prisma from '@/app/utils/prisma';
import stripe from '@/app/utils/stripe';
import { deleteFile, uploadFile } from '@/app/utils/uploadFile';
import { StatusCodes } from 'http-status-codes';

export const updateProduct = async (
  formData: FormData,
  carId: string,
  vehiculePrevData: IVehicule
) => {
  const errors = [];

  const title = formData.get('title') as string;
  const brand = formData.get('brand') as string;
  const model = formData.get('model') as string;
  const shortDescription = formData.get('shortDescription') as string;
  const description = formData.get('description') as string;
  const carImage = formData.get('carImage') as File;
  const wallpaper = formData.get('wallpaper') as File;
  const pricePerDay = Number(formData.get('pricePerDay')) as number;
  const caution = Number(formData.get('caution')) as number;
  const driverMinimumAge = Number(formData.get('driverMinimumAge')) as number;

  if (!title) errors.push(ErrorMessages.VEHICLE_TITLE_ERROR);
  if (!brand) errors.push(ErrorMessages.VEHICLE_BRAND_ERROR);
  if (!model) errors.push(ErrorMessages.VEHICLE_MODEL_ERROR);
  if (!shortDescription)
    errors.push(ErrorMessages.VEHICLE_SHORT_DESCRIPTION_ERROR);
  if (!description) errors.push(ErrorMessages.VEHICLE_DESCRIPTION_ERROR);
  if (!carImage) errors.push(ErrorMessages.VEHICLE_CAR_IMAGE_ERROR);
  if (!wallpaper) errors.push(ErrorMessages.VEHICLE_WALLPAPER_ERROR);
  if (!pricePerDay) errors.push(ErrorMessages.VEHICLE_PRICE_PER_DAY_ERROR);
  if (!caution) errors.push(ErrorMessages.VEHICLE_CAUTION_ERROR);
  if (!driverMinimumAge)
    errors.push(ErrorMessages.VEHICLE_DRIVER_MINIMUM_AGE_ERROR);

  if (errors.length) return { errors };

  try {
    //? update files to cloudinary
    if (carImage.size || wallpaper.size) {
      if (carImage.size) {
        await deleteFile(vehiculePrevData.carImagePublicId);
        const uploadRes = (await uploadFile(carImage)) as IUploadResponse;
        await prisma.vehicule.update({
          where: { id: carId },
          data: {
            carImage: uploadRes.secure_url,
            carImagePublicId: uploadRes.public_id,
          },
        });
      }

      if (wallpaper.size) {
        await deleteFile(vehiculePrevData.wallpaperPublicId);
        const uploadRes = (await uploadFile(wallpaper)) as IUploadResponse;
        await prisma.vehicule.update({
          where: { id: carId },
          data: {
            wallpaper: uploadRes.secure_url,
            wallpaperPublicId: uploadRes.public_id,
          },
        });
      }
    }

    //? update product on prisma (planetScale)
    const vehicule = await prisma.vehicule.update({
      where: { id: carId },
      data: {
        title,
        make: brand,
        model,
        shortDescription,
        description,
        dailyPrice: pricePerDay * 100,
        caution: caution * 100,
        minimumAge: driverMinimumAge,
      },
    });

    //? update product and price on stripe
    await stripe.products.update(vehicule.productId, {
      name: title,
      description: shortDescription,
      images: [vehicule.carImage, vehicule.wallpaper],
      metadata: {
        brand,
        model,
        driverMinimumAge,
      },
    });

    return {
      message: 'Product created successfully.',
      status: StatusCodes.CREATED,
    };
  } catch (error) {
    console.error(error);
    return {
      message: 'Something went wrong.',
      status: StatusCodes.INTERNAL_SERVER_ERROR,
    };
  }
};

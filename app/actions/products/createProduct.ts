'use server';

import { ErrorMessages } from '@/app/enums/errorMessages';
import { IUploadResponse } from '@/app/types';
import prisma from '@/app/utils/prisma';
import stripe from '@/app/utils/stripe';
import { uploadFile } from '@/app/utils/uploadFile';
import { StatusCodes } from 'http-status-codes';

export const createProduct = async (formData: FormData) => {
  const errors = [];

  const title = formData.get('title') as string;
  const brand = formData.get('brand') as string;
  const model = formData.get('model') as string;
  const shortDescription = formData.get('shortDescription') as string;
  const description = formData.get('description') as string;
  const embedData = formData.get('embedData') as string;
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
  if (!embedData) errors.push(ErrorMessages.VEHICLE_EMBED_DATA_ERROR);
  if (!carImage) errors.push(ErrorMessages.VEHICLE_CAR_IMAGE_ERROR);
  if (!wallpaper) errors.push(ErrorMessages.VEHICLE_WALLPAPER_ERROR);
  if (!pricePerDay) errors.push(ErrorMessages.VEHICLE_PRICE_PER_DAY_ERROR);
  if (!caution) errors.push(ErrorMessages.VEHICLE_CAUTION_ERROR);
  if (!driverMinimumAge)
    errors.push(ErrorMessages.VEHICLE_DRIVER_MINIMUM_AGE_ERROR);

  if (errors.length) return { errors };

  try {
    //? upload file to cloudinary
    const carImgResUpload = (await uploadFile(carImage)) as IUploadResponse;
    const wallpaperResUpload = (await uploadFile(wallpaper)) as IUploadResponse;

    //? create product and price on stripe
    const product = await stripe.products.create({
      name: title,
      description: shortDescription,
      images: [carImgResUpload.secure_url, wallpaperResUpload.secure_url],
      metadata: {
        brand,
        model,
        driverMinimumAge,
      },
    });

    await stripe.prices.create({
      product: product.id,
      unit_amount: pricePerDay * 100, // Because Stripe uses cents
      currency: 'eur',
      metadata: {
        caution: caution * 100,
      },
    });

    //? create product on prisma (planetScale)
    await prisma.vehicule.create({
      data: {
        productId: product.id,
        title,
        make: brand,
        model,
        shortDescription,
        description,
        embeddedVideo: embedData,
        dailyPrice: pricePerDay * 100,
        caution: caution * 100,
        minimumAge: driverMinimumAge,
        carImage: carImgResUpload.secure_url,
        carImagePublicId: carImgResUpload.public_id,
        wallpaper: wallpaperResUpload.secure_url,
        wallpaperPublicId: wallpaperResUpload.public_id,
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

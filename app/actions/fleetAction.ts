'use server';

import { uploadFile } from '../utils/uploadFile';
import prisma from '../utils/prisma';
import { IUploadResponse } from '../types';
import cloudinary from '../utils/cloudinary';

export const createProduct = async (formData: FormData) => {
  const errors = [];

  // const year = formData.get('year');
  const brand = formData.get('brand') as string;
  const model = formData.get('model') as string;
  const shortDescription = formData.get('shortDescription') as string;
  const price = formData.get('pricePerDay') as string;
  const minAge = formData.get('minimumAge') as string;
  const wallpaper = formData.get('wallpaper') as File;
  const carImage = formData.get('carImage') as File;

  // if (!year) errors.push('Year is required');
  if (!brand) errors.push('Brand is required');
  if (!model) errors.push('Model is required');
  if (!shortDescription) errors.push('Short description is required');
  if (!price) errors.push('Price is required');
  if (!minAge) errors.push('Min age is required');
  if (!wallpaper) errors.push('Wallpaper is required');
  if (!carImage) errors.push('Car image is required');

  if (errors.length > 0) return { error: errors.join(', ') };

  try {
    const carImgResUpload = (await uploadFile(carImage)) as IUploadResponse;
    const wallpaperResUpload = (await uploadFile(wallpaper)) as IUploadResponse;

    await prisma.car.create({
      data: {
        brand: brand,
        model: model,
        price: price,
        minAge: minAge,
        shortDescription: shortDescription,
        carImage: carImgResUpload.secure_url,
        carImagePublicId: carImgResUpload.public_id,
        wallpaper: wallpaperResUpload.secure_url,
        wallpaperPublicId: wallpaperResUpload.public_id,
      },
    });

    return { data: 'Car successful created' };
  } catch (error) {
    console.error(error);
    return { error: 'Something went wrong' };
  }
};

export const getCollection = async () => {
  try {
    const cars = await prisma.car.findMany();

    return { data: cars };
  } catch (error) {
    console.error(error);
    return { error: 'Something went wrong' };
  }
};

export const getProduct = async (id: string) => {
  try {
    const product = await prisma.car.findUnique({
      where: { id: id },
    });

    return { data: product };
  } catch (error) {
    console.error(error);
    return { error: 'Something went wrong' };
  }
};

export const updateProduct = async (formData: FormData, carId: string) => {
  const errors = [];

  // const year = formData.get('year');
  const brand = formData.get('brand') as string;
  const model = formData.get('model') as string;
  const shortDescription = formData.get('shortDescription') as string;
  const price = formData.get('pricePerDay') as string;
  const minAge = formData.get('minimumAge') as string;
  const wallpaper = formData.get('wallpaper') as File;
  const carImage = formData.get('carImage') as File;

  // if (!year) errors.push('Year is required');
  if (!brand) errors.push('Brand is required');
  if (!model) errors.push('Model is required');
  if (!shortDescription) errors.push('Short description is required');
  if (!price) errors.push('Price is required');
  if (!minAge) errors.push('Min age is required');
  // if (!wallpaper) errors.push('Wallpaper is required');
  // if (!carImage) errors.push('Car image is required');

  if (errors.length > 0) return { error: errors.join(', ') };

  try {
    // const carImgResUpload = (await uploadFile(carImage)) as IUploadResponse;
    // const wallpaperResUpload = (await uploadFile(wallpaper)) as IUploadResponse;

    await prisma.car.update({
      where: { id: carId },
      data: {
        brand: brand,
        model: model,
        price: price,
        minAge: minAge,
        shortDescription: shortDescription,
        // carImage: carImgResUpload.secure_url,
        // carImagePublicId: carImgResUpload.public_id,
        // wallpaper: wallpaperResUpload.secure_url,
        // wallpaperPublicId: wallpaperResUpload.public_id,
      },
    });

    return { data: 'Car successful created' };
  } catch (error) {
    console.error(error);
    return { error: 'Something went wrong' };
  }
};

export const deleteProduct = async (id: string) => {
  try {
    const car = await prisma.car.delete({
      where: { id: id },
    });

    await cloudinary.uploader.destroy(car.carImagePublicId as string);
    await cloudinary.uploader.destroy(car.wallpaperPublicId as string);

    return { data: 'Product was successfully deleted' };
  } catch (error) {
    console.error(error);
    return { error: 'Something went wrong' };
  }
};
